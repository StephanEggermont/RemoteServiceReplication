Class {
	#name : 'RsrCodecTest',
	#superclass : 'RsrTestCase',
	#instVars : [
		'connection'
	],
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'testing' }
RsrCodecTest class >> isAbstract [

	^self == RsrCodecTest
]

{ #category : 'accessing' }
RsrCodecTest >> connection [

	^connection
]

{ #category : 'other' }
RsrCodecTest >> decoder [

	^RsrDecoder new
]

{ #category : 'encode/decode' }
RsrCodecTest >> encodeReferenceOf: anObject [

	| reference |
	reference := RsrReference from: anObject.
	^ByteArray streamContents: [:stream | self encoder encodeReference: reference onto: stream]
]

{ #category : 'accessing' }
RsrCodecTest >> encoder [

	^RsrEncoder new
]

{ #category : 'running-symbol' }
RsrCodecTest >> genericSymbol [

	^#genericSymbol
]

{ #category : 'running-symbol' }
RsrCodecTest >> genericSymbolEncoding [

	^#[0 0 0 0 0 0 0 0], "OID = 0"
	#[0 0 0 0 0 0 0 1], "Immediate Type = 1"
	#[0 0 0 0 0 0 0 13], "Length of UTF-8 data"
	#[103 101 110 101 114 105 99 83 121 109 98 111 108]	"#genericSymbol"
]

{ #category : 'accessing-objects' }
RsrCodecTest >> referencedServiceEncoding [

	^#[0 0 0 0 0 0 0 0], "type"
	#[0 0 0 0 0 0 0 2], "referencedService's OID = 2"
	#[0 0 0 0 0 0 0 0], "Inst Var Count"
	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"
	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"
	#[0 0 0 0 0 0 0 19], "Length of UTF-8 encoded bytes"
	#[82 115 114 83 101 114 118 101 114 78 111 73 110 115 116 86 97 114 115]. "#RsrServerNoInstVars"
]

{ #category : 'accessing-objects' }
RsrCodecTest >> rootServiceEncoding [

	^#[0 0 0 0 0 0 0 0], "type"
	#[0 0 0 0 0 0 0 1], "rootService's OID = 1"
	#[0 0 0 0 0 0 0 1], "Inst Var Count"
	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"
	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"
	#[0 0 0 0 0 0 0 25], "Length of UTF-8 encoded bytes"
	#[82 115 114 83 101 114 118 101 114 82 101 102 101 114 101 110 99 101 83 101 114 118 105 99 101],
	#[0 0 0 0 0 0 0 2]. "#RsrServerReferenceService"
]

{ #category : 'running' }
RsrCodecTest >> serviceNoInstVarsEncoding [

	^#[0 0 0 0 0 0 0 0], "type"
	#[0 0 0 0 0 0 0 1], "rootService's OID = 1"
	#[0 0 0 0 0 0 0 0], "Inst Var Count"
	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"
	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"
	#[0 0 0 0 0 0 0 19], "Length of UTF-8 encoded bytes"
	#[82 115 114 83 101 114 118 101 114 78 111 73 110 115 116 86 97 114 115] "#RsrServerNoInstVars"
]

{ #category : 'other' }
RsrCodecTest >> setUp [

	super setUp.
	connection := RsrConnection
		channel: RsrNullChannel new
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	connection open
]

{ #category : 'other' }
RsrCodecTest >> tearDown [

	connection close.
	connection := nil.
	super tearDown
]

{ #category : 'running-immediates' }
RsrCodecTest >> testArray [

	| array encoding |
	array := Array
		with: self genericSymbol
		with: 5
		with: nil.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate Object OID"
		#[0 0 0 0 0 0 0 9], "Array type"
		#[0 0 0 0 0 0 0 3], "3 elements"
		self genericSymbolEncoding, "Generic Symbol"
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 3], "Positive Integer"
		#[0 0 0 0 0 0 0 1], "num bytes"
		#[5], "5"
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 6].
	self
		verifyImmediate: array
		encoding: encoding.
	array := Array new.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 9], "Array type"
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: array
		encoding: encoding
]

{ #category : 'running-immediates' }
RsrCodecTest >> testBoolean [

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 7].
	self
		verifyImmediate: true
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 8].
	self
		verifyImmediate: false
		encoding: encoding.
]

{ #category : 'running-immediates' }
RsrCodecTest >> testByteArray [

	| bytes encoding |
	bytes := #[].
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate Object OID"
		#[0 0 0 0 0 0 0 10], "ByteArray type"
		#[0 0 0 0 0 0 0 0], "size"
		bytes.
	self
		verifyImmediate: bytes
		encoding: encoding.
	bytes := #[1 2 3 4 5].
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 10],
		#[0 0 0 0 0 0 0 5],
		bytes.
	self
		verifyImmediate: bytes
		encoding: encoding
]

{ #category : 'running-immediates' }
RsrCodecTest >> testCharacter [

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: (Character codePoint: 0)
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 0 65].
	self
		verifyImmediate: (Character codePoint: 65)
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 0 65].
	self
		verifyImmediate: $A
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 1 212].
	self
		verifyImmediate: (Character codePoint: 16r01D4)
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 131 52].
	self
		verifyImmediate: (Character codePoint: 16r8334)
		encoding: encoding.
]

{ #category : 'running-control words' }
RsrCodecTest >> testControlWord [
	
	self
		verifyControlWord: 0
		encoding: #[0 0 0 0 0 0 0 0].
	self
		verifyControlWord: 1
		encoding: #[0 0 0 0 0 0 0 1].
	self
		verifyControlWord: -1
		encoding: #[255 255 255 255 255 255 255 255].
	self
		verifyControlWord: (2 raisedTo: 63) - 1
		encoding: #[127 255 255 255 255 255 255 255].
	self
		verifyControlWord: (2 raisedTo: 63) negated
		encoding: #[128 0 0 0 0 0 0 0]
]

{ #category : 'running-immediates' }
RsrCodecTest >> testDateTime [

	| dt encoding |
	dt := RsrDateAndTime posixEpoch.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 14],
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: dt
		encoding: encoding.
	dt := RsrDateAndTime fromMicroseconds: 1562692562657612. "2019-07-09T10:16:02.657612-07:00"
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 14],
		#[0 5 141 66 183 23 33 76].
	self
		verifyImmediate: dt
		encoding: encoding.
	dt := RsrDateAndTime fromMicroseconds: -1000000. "1969-12-31T23:59:59-00:00"
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 14],
		#[255 255 255 255 255 240 189 192].
	self
		verifyImmediate: dt
		encoding: encoding.
	dt := RsrDateAndTime fromMicroseconds: -491277642567488. "1954-06-07T14:59:17.432512-07:00"
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 14],
		#[255 254 65 47 130 160 240 192].
	self
		verifyImmediate: dt
		encoding: encoding
]

{ #category : 'running-immediates' }
RsrCodecTest >> testDictionary [

	| dictionary encoding result |
	dictionary := Dictionary new.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate Object OID"
		#[0 0 0 0 0 0 0 13], "Dictionary type"
		#[0 0 0 0 0 0 0 0]. "0 associations"
	self
		verifyImmediate: dictionary
		encoding: encoding.
	dictionary := Dictionary new
		at: 1 put: self genericSymbol;
		at: false put: true;
		yourself.
	encoding := self encodeReferenceOf: dictionary.
	result := (self decoder decodeReference: encoding readStream) resolve: self connection.
	self
		assert: result
		equals: dictionary.
	self
		deny: result
		identicalTo: dictionary.
	"self hack: 'Order is not guaranteed in a dictionary'.
	encoding :=
		#[0 0 0 0 0 0 0 0], ""Immediate OID""
		#[0 0 0 0 0 0 0 13], ""Dictionary Type""
		#[0 0 0 0 0 0 0 2], ""Two assocs""
		#[0 0 0 0 0 0 0 0], ""nil""
		#[0 0 0 0 0 0 0 6],
		#[0 0 0 0 0 0 0 0], ""true""
		#[0 0 0 0 0 0 0 7],
		#[0 0 0 0 0 0 0 0], ""Integer 1""
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 1],
		#[1],
		self genericSymbolEncoding.
	self
		verifyImmediate: dictionary
		encoding: encoding"
]

{ #category : 'running-immediates' }
RsrCodecTest >> testDouble [

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[128 0 0 0 0 0 0 0].
	self
		verifyImmediate: -0.0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: 0.0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[191 240 0 0 0 0 0 0].
	self
		verifyImmediate: -1.0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[63 240 0 0 0 0 0 0].
	self
		verifyImmediate: 1.0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[63 185 153 153 153 153 153 154].
	self
		verifyImmediate: 0.1
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[191 185 153 153 153 153 153 154].
	self
		verifyImmediate: -0.1
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[127 240 0 0 0 0 0 0].
	self
		verifyImmediate: RsrDoubleReference infinity
		encoding: encoding
]

{ #category : 'running-immediates' }
RsrCodecTest >> testInteger [

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 1],
		#[0].
	self
		verifyImmediate: 0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 1],
		#[4].
	self
		verifyImmediate: 4
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 5],
		#[1 15 248 235 121].
	self
		verifyImmediate: 4562938745
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 4],
		#[0 0 0 0 0 0 0 5],
		#[1 15 248 235 121].
	self
		verifyImmediate: -4562938745
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 13],
		#[10 101 181 177 179 46 128 92 96 64 190 76 107].
	self
		verifyImmediate: 823759265872134912569713249387
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 4],
		#[0 0 0 0 0 0 0 13],
		#[10 101 181 177 179 46 128 92 96 64 190 76 107].
	self
		verifyImmediate: -823759265872134912569713249387
		encoding: encoding.
]

{ #category : 'running-immediates' }
RsrCodecTest >> testNil [

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 6].
	self
		verifyImmediate: nil
		encoding: encoding
]

{ #category : 'running-immediates' }
RsrCodecTest >> testOrderedCollection [

	| oc encoding |
	oc := OrderedCollection new.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 12], "OrderedCollection type"
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: oc
		encoding: encoding.
	oc := OrderedCollection
		with: self genericSymbol
		with: 5
		with: nil.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate Object OID"
		#[0 0 0 0 0 0 0 12], "OrderedCollection type"
		#[0 0 0 0 0 0 0 3], "3 elements"
		self genericSymbolEncoding, "Generic Symbol"
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 3], "Positive Integer"
		#[0 0 0 0 0 0 0 1], "num bytes"
		#[5], "5"
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 6].
	self
		verifyImmediate: oc
		encoding: encoding
]

{ #category : 'running-immediates' }
RsrCodecTest >> testSet [

	| set encoding result |
	set := Set new.
	encoding :=
		#[0 0 0 0 0 0 0 0], "OID"
		#[0 0 0 0 0 0 0 11], "Set"
		#[0 0 0 0 0 0 0 0]. "0 elements"
	self
		verifyImmediate: set
		encoding: encoding.
	set := Set
		with: true
		with: nil.
	encoding := self encodeReferenceOf: set.
	result := (self decoder decodeReference: encoding readStream) resolve: self connection.
	self
		assert: result
		equals: set.
	self
		deny: result
		identicalTo: set.
	"self hack: 'Hashed collections do not have an ordering'.
	encoding :=
		#[0 0 0 0 0 0 0 0], ""OID""
		#[0 0 0 0 0 0 0 11], ""Set""
		#[0 0 0 0 0 0 0 2], ""2 elements""
		#[0 0 0 0 0 0 0 0], ""true""
		#[0 0 0 0 0 0 0 7],
		#[0 0 0 0 0 0 0 0], ""nil""
		#[0 0 0 0 0 0 0 6].
	self
		verifyImmediate: set
		encoding: encoding"
]

{ #category : 'running-symbol' }
RsrCodecTest >> testString [

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0], "OID = 0"
		#[0 0 0 0 0 0 0 2], "Immediate Type = 2"
		#[0 0 0 0 0 0 0 0], "length"
		#[].	 "empty string"
	self
		verifyImmediate: ''
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0], "OID = 0"
		#[0 0 0 0 0 0 0 2], "Immediate Type = 2"
		#[0 0 0 0 0 0 0 13], "length"
		#[103 101 110 101 114 105 99 83 116 114 105 110 103].	 "genericString"
	self
		verifyImmediate: 'genericString'
		encoding: encoding
]

{ #category : 'running-symbol' }
RsrCodecTest >> testSymbol [

	self
		verifyImmediate: self genericSymbol
		encoding: self genericSymbolEncoding
]

{ #category : 'asserting' }
RsrCodecTest >> verifyControlWord: anInteger
encoding: bytes [

	self subclassResponsibility
]

{ #category : 'asserting' }
RsrCodecTest >> verifyImmediate: anImmediateObject
encoding: encoding [

	self subclassResponsibility
]
