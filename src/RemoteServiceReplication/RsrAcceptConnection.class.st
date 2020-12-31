"
This class is responsible to listen for an incoming RsrConnection connection. Once a Socket has established, an RsrConnection is created and returned via the #connect message.

The following will wait for a connection on port 51820. Once a socket connection is accepted, it will stop listening on the provided port. The established socket is then used in the creation of an RsrConnection. The new RsrConnection is returned as a result of #connect.

| acceptor |
acceptor := RsrAcceptConnection port: 51820.
^acceptor connect
"
Class {
	#name : 'RsrAcceptConnection',
	#superclass : 'RsrSocketConnectionSpecification',
	#instVars : [
		'listener'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrAcceptConnection class >> port: aPortInteger [

	^self
		host: self wildcardAddress
		port: aPortInteger
]

{ #category : 'accessing' }
RsrAcceptConnection class >> wildcardAddress [

	^'0.0.0.0'
]

{ #category : 'cancelling' }
RsrAcceptConnection >> cancelWaitForConnection [

	listener ifNotNil: [:socket | socket close]
]

{ #category : 'testing' }
RsrAcceptConnection >> isWaitingForConnection [

	^listener ~~ nil
]

{ #category : 'connecting' }
RsrAcceptConnection >> waitForConnection [

	| socket stream handshake channel connection |
	listener := self socketClass new.
	[listener
		bindAddress: self host
		port: self port.
	listener listen: 1.
	socket := [listener accept]
		on: RsrSocketError
		do: [:ex | ex resignalAs: RsrWaitForConnectionCancelled new]]
			ensure:
				[listener close.
				listener := nil].
	stream := RsrSocketStream on: socket.
	handshake := RsrServerHandshake over: stream.
	handshake perform.
	channel := RsrSocketChannel socket: socket.
	connection := RsrConnection
		specification: self
		channel: channel
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	^connection open
]
