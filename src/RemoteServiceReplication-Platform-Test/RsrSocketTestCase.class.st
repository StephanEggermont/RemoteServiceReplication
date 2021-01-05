Class {
	#name : 'RsrSocketTestCase',
	#superclass : 'RsrTestCase',
	#instVars : [
		'sockets'
	],
	#category : 'RemoteServiceReplication-Platform-Test'
}

{ #category : 'accessing' }
RsrSocketTestCase class >> defaultTimeLimit [

	^20 seconds
]

{ #category : 'accessing' }
RsrSocketTestCase >> createPair: aBlock [

	| address port listener peerA peerB semaphore |
	address := '127.0.0.1'.
	port := 45301.
	listener := self newSocket.
	listener
		bindAddress: address
		port: port.
	listener listen: 1.
	peerB := self newSocket.
	semaphore := Semaphore new.
	RsrProcessModel
		fork: [[peerA := self deferClose: listener accept] ensure: [semaphore signal]]
		named: 'Pending Socket Accept'.
	RsrProcessModel
		fork: [[peerB connectToHost: address port: port] ensure: [semaphore signal]]
		named: 'Pending Socket Connect'.
	semaphore wait; wait.
	listener close.
	((peerA notNil and: [peerA isConnected]) and: [peerB isConnected])
		ifTrue: [aBlock value: peerA value: peerB]
		ifFalse: [self error: 'Unable to create Socket Pair']
]

{ #category : 'cleanup' }
RsrSocketTestCase >> deferClose: aSocket [

	sockets add: aSocket.
	^aSocket
]

{ #category : 'accessing' }
RsrSocketTestCase >> newSocket [

	^self deferClose: RsrSocket new
]

{ #category : 'running' }
RsrSocketTestCase >> setUp [

	super setUp.
	sockets := OrderedCollection new
]

{ #category : 'running' }
RsrSocketTestCase >> tearDown [

	sockets do: [:each | each close].
	super tearDown
]

{ #category : 'running-server' }
RsrSocketTestCase >> testAcceptConnects [

	| listener client server |
	listener := self newSocket.
	listener
		bindAddress: '127.0.0.1'
		port: 45300.
	self
		assert: listener port
		equals: 45300.
	listener listen: 1.
	client := self newSocket.
	self
		deny: client isConnected;
		deny: listener isConnected.
	client connectToHost: '127.0.0.1' port: 45300.
	server := self deferClose: listener accept.
	self
		assert: server port
		equals: 45300.
	self assert: (client port > 1023).
	self
		assert: client isConnected;
		assert: server isConnected;
		deny: listener isConnected
]

{ #category : 'running-server' }
RsrSocketTestCase >> testAcceptOnAlreadyClosedSocket [

	| listener |
	listener := self newSocket.
	listener
		bindAddress: '127.0.0.1'
		port: 45300.
	listener listen: 1.
	listener close.
	self
		should: [listener accept]
		raise: RsrSocketError
]

{ #category : 'running-server' }
RsrSocketTestCase >> testCloseDuringAccept [

	| listener |
	listener := self newSocket.
	listener
		bindAddress: '127.0.0.1'
		port: 45300.
	listener listen: 1.
	RsrProcessModel
		fork: [(Delay forSeconds: 1) wait. listener close]
		named: 'Pending Socket Close'.
	self
		should: [listener accept]
		raise: RsrSocketError
]

{ #category : 'running-client' }
RsrSocketTestCase >> testConnectBoundSocket [

	| listener |
	listener := self newSocket.
	listener
		bindAddress: '127.0.0.1'
		port: 45300.
	self
		should:
			[listener
				connectToHost: 'gemtalksystems.com'
				port: 80]
		raise: RsrSocketError
]

{ #category : 'running-client' }
RsrSocketTestCase >> testFailedConnects [

	| socket |
	socket := self newSocket.
	self deny: socket isConnected.
	self
		should:
			[socket
				connectToHost: 'do.no.create.used.for.testing.gemtalksystems.com'
				port: 80]
		raise: RsrConnectFailed.
	socket := self newSocket.
	self
		should:
			[socket
				connectToHost: 'gemtalksystems.com'
				port: 70000]
		raise: RsrConnectFailed.
	socket := self newSocket.
	self
		should:
			[socket
				connectToHost: '127.0.0.1'
				port: 79]
		raise: RsrConnectFailed.
	socket close
]

{ #category : 'running-server' }
RsrSocketTestCase >> testInvalidBind [

	| listener |
	listener := self newSocket.
	self "This IP is publicly routable and owned by Cloudflare. Should be invalid on all testing hosts."
		should: [listener bindAddress: '1.1.1.1' port: 45300]
		raise: RsrInvalidBind.
	listener := self newSocket.
	self
		should: [listener bindAddress: '127.0.0.1' port: 98765432]
		raise: RsrInvalidBind
]

{ #category : 'running-server' }
RsrSocketTestCase >> testListenWithoutBind [

	| listener |
	listener := self newSocket.
	listener listen: 1.
	self assert: (listener port > 1023)
]

{ #category : 'running-read/write' }
RsrSocketTestCase >> testPartialRead [

	| peerA peerB writeBuffer readBuffer count numRead |
	self
		createPair:
			[:a :b |
			peerA := a.
			peerB := b].
	count := 1024.
	writeBuffer := ByteArray new: count.
	1
		to: count
		do: [:i | writeBuffer at: i put: (i \\ 256)].
	readBuffer := ByteArray withAll: writeBuffer.
	peerA
		write: count - 1
		from: writeBuffer
		startingAt: 1.
	numRead := peerB
		read: count
		into: readBuffer
		startingAt: 1.
	self
		assert: numRead
		equals: count - 1.
	self
		assert: readBuffer
		equals: writeBuffer
]

{ #category : 'running' }
RsrSocketTestCase >> testPort [

	| socket |
	socket := self newSocket.
	self
		assert: socket port
		equals: 0
]

{ #category : 'running-read/write' }
RsrSocketTestCase >> testReadAfterPeerClose [

	| peerA peerB readBuffer count numRead |
	self
		createPair:
			[:a :b |
			peerA := a.
			peerB := b].
	count := 1024.
	readBuffer := ByteArray new: count.
	peerA close.
	self
		should:
			[numRead := peerB
				read: count
				into: readBuffer
				startingAt: 1]
		raise: RsrSocketClosed
]

{ #category : 'running-read/write' }
RsrSocketTestCase >> testReadWrite [

	| peerA peerB writeBuffer readBuffer count numWritten numRead |
	self
		createPair:
			[:a :b |
			peerA := a.
			peerB := b].
	count := 1024.
	writeBuffer := ByteArray new: count.
	1
		to: count
		do: [:i | writeBuffer at: i put: (i \\ 256)].
	readBuffer := ByteArray withAll: writeBuffer.
	numWritten := peerA
		write: count
		from: writeBuffer
		startingAt: 1.
	self
		assert: numWritten
		equals: count.
	numRead := peerB
		read: count
		into: readBuffer
		startingAt: 1.
	self
		assert: numRead
		equals: count.
	self
		assert: readBuffer
		equals: writeBuffer
]

{ #category : 'running-client' }
RsrSocketTestCase >> testSuccessfulConnect [

	| socket |
	socket := self newSocket.
	self deny: socket isConnected.
	socket
		connectToHost: 'gemtalksystems.com'
		port: 80.
	self assert: socket isConnected.
	socket close.
	self deny: socket isConnected
]

{ #category : 'running-read/write' }
RsrSocketTestCase >> testUnconnectedReadWrite [

	| socket count bytes |
	socket := self newSocket.
	count := 1024.
	bytes := ByteArray new: 1024.
	self
		should:
			[socket
				read: count
				into: bytes
				startingAt: 1]
		raise: RsrSocketClosed.
	self
		should:
			[socket
				write: count
				from: bytes
				startingAt: 1]
		raise: RsrSocketClosed
]
