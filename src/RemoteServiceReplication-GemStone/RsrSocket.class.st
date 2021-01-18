Class {
	#name : 'RsrSocket',
	#superclass : 'RsrObject',
	#instVars : [
		'nativeSocket'
	],
	#category : 'RemoteServiceReplication-GemStone'
}

{ #category : 'private-instance creation' }
RsrSocket class >> _nativeSocket: aGsSignalingSocket [
	"Private - Create a instance backed by the provided GsSignalingSocket"

	^self basicNew
		_nativeSocket: aGsSignalingSocket;
		yourself
]

{ #category : 'private-accessing' }
RsrSocket >> _nativeSocket: aGsSignalingSocket [
	"Private - Configure w/ a platform socket"

	nativeSocket := aGsSignalingSocket interrupting: true; yourself
]

{ #category : 'accepting connections' }
RsrSocket >> accept [
	"Return an RsrSocket which is connected to a peer. In the event that the socket is closed while waiting, signal RsrSocketClosed."

	^[self class _nativeSocket: nativeSocket accept]
		on: SocketError
		do: [:ex | ex resignalAs: (RsrSocketError new messageText: ex messageText)]
]

{ #category : 'accepting connections' }
RsrSocket >> bindAddress: address
port: port [
	"Bind the socket to the provided port and address. Signal RsrInvalidBind in the event the bind fails."

	[nativeSocket
		bindTo: port
		toAddress: address]
			on: SocketError, OutOfRange
			do: [:ex | ex resignalAs: (RsrInvalidBind new messageText: ex messageText)]
]

{ #category : 'terminating connections' }
RsrSocket >> close [
	"Ensure closure of the Socket and cleanup any associated resources."

	nativeSocket close
]

{ #category : 'establishing connections' }
RsrSocket >> connectToHost: hostname
port: port [
	"Establish a connect to the provided host and port. If the socket is unable to establish, signal RsrConnectFailed.
	If the socket is bound to an address/port, signal RsrInvalidConnect.
	<hostname> - The name or ip address of a machine which should accept a connection.
	<port> - An integer representing a valid TCP port."

	[nativeSocket
		connectTo: port
		on: hostname]
			on: SocketError, OutOfRange
			do: [:ex | ex resignalAs: (RsrConnectFailed new messageText: ex messageText)]
]

{ #category : 'initialize' }
RsrSocket >> initialize [

	super initialize.
	nativeSocket := GsSignalingSocket new
]

{ #category : 'testing' }
RsrSocket >> isConnected [
	"Return true if the socket is open and connected with a peer. Return false otherwise."

	^nativeSocket isConnected
]

{ #category : 'accepting connections' }
RsrSocket >> listen: backlogLength [
	"Starting listening for connections. <backlogLength> specifies the number of connections to allow in a pending state.
	The actual backlog may support fewer prending connections depending upon implementation."

	nativeSocket makeListener: backlogLength
]

{ #category : 'accessing' }
RsrSocket >> port [
	"Return the port associated with the socket."

	^nativeSocket port
]

{ #category : 'read/write' }
RsrSocket >> read: count
into: bytes
startingAt: index [
	"Read <count> number of bytes into <bytes> and place the first byte into slot <index>.
	<bytes> is assumed to be at least <count + index> bytes in size.
	Return the number of bytes successfully read. Signal RsrSocketClosed if the socket is closed before or during the call."

	| numRead |
	[numRead := nativeSocket
		read: count
		into: bytes
		startingAt: index]
			on: SocketError
			do: [:ex | ex resignalAs: (RsrSocketClosed new messageText: ex messageText)].
	^numRead > 0
		ifTrue: [numRead]
		ifFalse:
			[nativeSocket close.
			RsrSocketClosed signal]
]

{ #category : 'read/write' }
RsrSocket >> write: count
from: bytes
startingAt: index [
	"Write <count> number of bytes from <bytes> with <index> as the index of the first bytes.
	If <bytes> is smaller than <index + count> the behavior is undefined.
	If the socket is not connected, signal RsrSocketClosed."

	^[nativeSocket
		write: count
		from: bytes
		startingAt: index]
			on: SocketError
			do: [:ex | ex resignalAs: (RsrSocketClosed new messageText: ex messageText)]
]
