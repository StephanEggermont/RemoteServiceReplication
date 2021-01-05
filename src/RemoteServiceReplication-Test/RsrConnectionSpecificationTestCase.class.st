Class {
	#name : 'RsrConnectionSpecificationTestCase',
	#superclass : 'RsrTestCase',
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'accessing' }
RsrConnectionSpecificationTestCase >> alternativeLocalhost [

	^'127.0.1.1'
]

{ #category : 'accessing' }
RsrConnectionSpecificationTestCase >> localhost [

	^'127.0.0.1'
]

{ #category : 'accessing' }
RsrConnectionSpecificationTestCase >> port [

	^47652
]

{ #category : 'running' }
RsrConnectionSpecificationTestCase >> testAcceptOnLocalhost [

	| acceptor initiator semaphore connectionA connectionB |
	acceptor := RsrAcceptConnection
		host: self localhost
		port: self port.
	initiator := RsrInitiateConnection
		host: self localhost
		port: self port.
	semaphore := Semaphore new.
	RsrProcessModel
		fork: [[connectionA := acceptor waitForConnection] ensure: [semaphore signal]] named: 'Pending AcceptConnection';
		fork: [[connectionB := initiator connect] ensure: [semaphore signal]] named: 'Pending InitiateConnection'.
	semaphore wait; wait.
	self
		assert: connectionA isOpen;
		assert: connectionB isOpen.
	connectionA close.
	connectionB close
]

{ #category : 'running' }
RsrConnectionSpecificationTestCase >> testCancelWaitForConnection [

	| acceptor |
	acceptor := RsrAcceptConnection port: self port.
	RsrProcessModel
		fork: [(Delay forSeconds: 1) wait. acceptor cancelWaitForConnection]
		named: 'Canceling AcceptConnection'.
	self
		should: [acceptor waitForConnection]
		raise: RsrWaitForConnectionCancelled
]

{ #category : 'running' }
RsrConnectionSpecificationTestCase >> testEstablishConnection [

	| acceptor initiator semaphore connectionA connectionB |
	acceptor := RsrAcceptConnection port: self port.
	initiator := RsrInitiateConnection
		host: self localhost
		port: self port.
	semaphore := Semaphore new.
	RsrProcessModel
		fork: [[connectionA := acceptor waitForConnection] ensure: [semaphore signal]] named: 'Pending AcceptConnection';
		fork: [[connectionB := initiator connect] ensure: [semaphore signal]] named: 'Pending InitiateConnection'.
	semaphore wait; wait.
	self
		assert: connectionA isOpen;
		assert: connectionB isOpen.
	connectionA close.
	connectionB close
]

{ #category : 'running' }
RsrConnectionSpecificationTestCase >> testFailedAcceptOnAlternativeLocalhost [

	| acceptor initiator semaphore |
	acceptor := RsrAcceptConnection
		host: self alternativeLocalhost
		port: self port.
	initiator := RsrInitiateConnection
		host: self localhost
		port: self port.
	semaphore := Semaphore new.
	RsrProcessModel
		fork: [[semaphore signal. acceptor waitForConnection] on: RsrWaitForConnectionCancelled do: [:ex | ex return]]
		named: 'Pending WaitForConnectionCancelled'.
	[semaphore wait.
	self
		should: [initiator connect]
		raise: RsrSocketError]
			ensure: [acceptor cancelWaitForConnection]
]

{ #category : 'running' }
RsrConnectionSpecificationTestCase >> testInternalConnectionSpecification [
]

{ #category : 'running' }
RsrConnectionSpecificationTestCase >> testInternalConnectionSpecificationConnectReturnsConnection [
	"Ensure that sending #connect to an InternalConnectionSpecification
	results in returning one of the created Connections."

	| spec connection |
	spec := RsrInMemoryConnectionSpecification new.
	connection := spec connect.
	self assert: connection isOpen.
	connection close.
	spec := RsrInternalSocketConnectionSpecification new.
	connection := spec connect.
	self assert: connection isOpen.
	connection close
]
