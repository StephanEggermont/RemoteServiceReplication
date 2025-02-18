Class {
	#name : 'RsrAcceptConnection',
	#superclass : 'RsrSocketConnectionSpecification',
	#instVars : [
		'listener',
		'isListening',
		'isWaitingForConnection'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrAcceptConnection class >> port: aPortInteger [

	^super
		host: self wildcardAddress
		port: aPortInteger
]

{ #category : 'accessing' }
RsrAcceptConnection class >> wildcardAddress [

	^'0.0.0.0'
]

{ #category : 'actions' }
RsrAcceptConnection >> cancelWaitForConnection [

	listener ifNotNil: [:socket | socket close]
]

{ #category : 'actions' }
RsrAcceptConnection >> ensureListening [

	isListening ifTrue: [^self].
	listener
		bindAddress: self host
		port: self port.
	listener listen: 1.
	isListening := true
]

{ #category : 'initializing' }
RsrAcceptConnection >> initialize [

	super initialize.
	listener := self socketClass new.
	isWaitingForConnection := false.
	isListening := false
]

{ #category : 'testing' }
RsrAcceptConnection >> isWaitingForConnection [

	^isWaitingForConnection
]

{ #category : 'actions' }
RsrAcceptConnection >> waitForConnection [

	| socket stream steps handshake channel connection |
	self ensureListening.
	[isWaitingForConnection := true.
	socket := [listener accept]
		on: RsrSocketError
		do: [:ex | ex resignalAs: RsrWaitForConnectionCancelled new]]
			ensure:
				[listener close.
				listener := nil.
				isWaitingForConnection := false].
	stream := RsrSocketStream on: socket.
	steps := Array
		with: RsrProtocolVersionNegotiationServer new
		with: (RsrTokenReceiver token: (RsrToken bytes: (ByteArray new: 16))).
	handshake := RsrHandshake
		steps: steps
		stream: stream.
	handshake perform.
	channel := RsrBinaryStreamChannel
		inStream: stream
		outStream: stream.
	connection := RsrConnection
		specification: self
		channel: channel
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	^connection open
]
