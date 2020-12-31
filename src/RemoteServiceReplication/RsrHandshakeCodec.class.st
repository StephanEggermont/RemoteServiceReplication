Class {
	#name : 'RsrHandshakeCodec',
	#superclass : 'RsrObject',
	#category : 'RemoteServiceReplication'
}

{ #category : 'accessing' }
RsrHandshakeCodec >> chosenVersionIdentifier [

	^1
]

{ #category : 'decoding' }
RsrHandshakeCodec >> decode: aStream [
	"Decode a message from <aStream>"

	| identifier |
	identifier := self decodeWord: aStream.
	identifier = self supportedVersionsIdentifier
		ifTrue: [^self decodeSupportedVersions: aStream].
	identifier = self chosenVersionIdentifier
		ifTrue: [^self decodeChosenVersion: aStream].
	identifier = self noVersionOverlapIdentifier
		ifTrue: [^self decodeNoVersionOverlap: aStream].
	^RsrError signal: 'Unknown Handshake message'
]

{ #category : 'decoding' }
RsrHandshakeCodec >> decodeChosenVersion: aStream [

	| version |
	version := self decodeWord: aStream.
	^RsrChosenVersion version: version
]

{ #category : 'decoding' }
RsrHandshakeCodec >> decodeNoVersionOverlap: aStream [

	^RsrNoVersionOverlap new
]

{ #category : 'decoding' }
RsrHandshakeCodec >> decodeSupportedVersions: aStream [

	| numberOfVersions versions |
	numberOfVersions := self decodeWord: aStream.
	versions := (1 to: numberOfVersions) collect: [:each | self decodeWord: aStream].
	^RsrSupportedVersions versions: versions
]

{ #category : 'decoding' }
RsrHandshakeCodec >> decodeWord: aStream [
	"Decode one word from <aStream> and return it as an integer."

	^(aStream next: 8)
		inject: 0
		into: [:res :byte | (res bitShift: 8) bitOr: byte]
]

{ #category : 'encoding' }
RsrHandshakeCodec >> encodeChosenVersion: aChosenVersion
onto: aStream [

	self
		encodeWord: self chosenVersionIdentifier
		onto: aStream.
	self
		encodeWord: aChosenVersion version
		onto: aStream
]

{ #category : 'encoding' }
RsrHandshakeCodec >> encodeNoVersionOverlap: aNoVersionOverlap
onto: aStream [

	self
		encodeWord: self noVersionOverlapIdentifier
		onto: aStream
]

{ #category : 'encoding' }
RsrHandshakeCodec >> encodeSupportedVersions: aSupportedVersions
onto: aStream [

	| versions |
	versions := aSupportedVersions versions.
	self
		encodeWord: self supportedVersionsIdentifier
		onto: aStream.
	self
		encodeWord: versions size
		onto: aStream.
	versions do: [:each | self encodeWord: each onto: aStream]
]

{ #category : 'encoding' }
RsrHandshakeCodec >> encodeWord: anInteger
onto: aStream [

	| bytes integer |
	(anInteger between: 0 and: 16rFFFFFFFFFFFFFFFF)
		ifFalse: [RsrOutOfRange signal: anInteger printString, ' is not in the valid range for a value in an RSR Handshake Message.'].
	bytes := ByteArray new: 8.
	integer := anInteger.
	8
		to: 1
		by: -1
		do:
			[:i | | byte |
			byte := integer bitAnd: 16rFF.
			bytes at: i put: byte.
			integer := integer bitShift: -8].
	aStream nextPutAll: bytes
]

{ #category : 'accessing' }
RsrHandshakeCodec >> noVersionOverlapIdentifier [

	^2
]

{ #category : 'accessing' }
RsrHandshakeCodec >> supportedVersionsIdentifier [

	^0
]
