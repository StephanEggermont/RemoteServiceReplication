Class {
	#name : 'RsrClientHandshake',
	#superclass : 'RsrHandshake',
	#category : 'RemoteServiceReplication'
}

{ #category : 'handshaking' }
RsrClientHandshake >> perform [
	"Perform the Client's porition of the handshake"

	| supportedVersions answer |
	supportedVersions := RsrSupportedVersions versions: #(1).
	self codec
		encodeSupportedVersions: supportedVersions
		onto: self stream.
	self stream flush.
	answer := self codec decode: self stream.
	answer hasSharedVersion
		ifFalse: [^RsrHandshakeFailed signal: 'The Client and Server could not agree on an RSR protocol version.']
]
