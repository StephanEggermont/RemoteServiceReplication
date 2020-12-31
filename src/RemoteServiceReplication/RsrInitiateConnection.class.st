"
This class is responsible for initating a new RsrConnection. Sending #connect will result in an attempt to connect to the specified host and port. #connect is responsible for initating the attempted connection. If successful, an instance of RsrConnection is returned as a result.

Example: 

| initiator |
initiator := RsrInitiateConnection
	host: '127.0.0.1'
	port: 51820.
^initiator connect
"
Class {
	#name : 'RsrInitiateConnection',
	#superclass : 'RsrSocketConnectionSpecification',
	#category : 'RemoteServiceReplication'
}

{ #category : 'connecting' }
RsrInitiateConnection >> connect [

	| socket stream handshake channel connection |
	socket := self socketClass new.
	socket
		connectToHost: self host
		port: self port.
	stream := RsrSocketStream on: socket.
	handshake := RsrClientHandshake over: stream.
	handshake perform.
	channel := RsrSocketChannel socket: socket.
	connection := RsrConnection
		specification: self
		channel: channel
		transactionSpigot: RsrThreadSafeNumericSpigot naturals negated
		oidSpigot: RsrThreadSafeNumericSpigot naturals negated.
	^connection open
]
