Class {
	#name : 'RsrServiceTest',
	#superclass : 'RsrSystemTestCase',
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'testing' }
RsrServiceTest class >> isAbstract [

	^self == RsrServiceTest
]

{ #category : 'running-utilities' }
RsrServiceTest >> mirror: aService [

	^(connectionA serviceFor: #RsrClientNoInstVars) sendReturnArgument: aService
]

{ #category : 'running' }
RsrServiceTest >> testAnalyzeServiceRegisteredWithDifferentConnection [

	| instance analysis |
	instance := RsrRemoteAction clientClass new.
	analysis := RsrSnapshotAnalysis
		roots: (Array with: instance)
		connection: connectionA.
	analysis perform.
	self assert: instance isMirrored.
	analysis := RsrSnapshotAnalysis
		roots: (Array with: instance)
		connection: connectionB.
	self
		should: [analysis perform]
		raise: RsrAlreadyRegistered
]

{ #category : 'running' }
RsrServiceTest >> testCreateServiceWithDistinctClientAbstractService [

	| client |
	client := self serviceFactoryA serviceFor: #RsrRemoteAction.
	self
		assert: client class
		equals: RsrRemoteAction clientClass
]

{ #category : 'running' }
RsrServiceTest >> testCreateServiceWithSameClientAbstractService [

	| client server |
	client := self serviceFactoryA serviceFor: #RsrSameTemplateAndClientService.
	self
		assert: client class
		equals: RsrSameTemplateAndClientService.
	client synchronize.
	server := connectionB serviceAt: client _id.
	self
		assert: server replicated1
		equals: nil.
	self
		assert: server replicated2
		equals: nil.
	client
		replicated1: 1;
		replicated2: 2;
		synchronize.
	self
		assert: server replicated1
		equals: 1.
	self
		assert: server replicated2
		equals: 2.
	server
		replicated1: 10;
		replicated2: 20;
		private1: 3;
		synchronize.
	self
		assert: client replicated1
		equals: 10.
	self
		assert: client replicated2
		equals: 20
]

{ #category : 'running' }
RsrServiceTest >> testEnsureServersAreCachedAndReused [

	| client service1 service2 |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	service1 := connectionB serviceAt: client _id.
	self mirror: client.
	service2 := connectionB serviceAt: client _id.
	self
		assert: service1
		identicalTo: service2
]

{ #category : 'running' }
RsrServiceTest >> testHasRemoteSelf [

	| service |
	service := RsrTestService clientClass new.
	self mirror: service.
	self deny: nil == service remoteSelf
]

{ #category : 'running' }
RsrServiceTest >> testInitialization [

	| instance |
	instance := RsrRemoteAction clientClass new.
	self
		assert: instance isMirrored
		equals: false.
	self
		assert: instance _id
		equals: nil.
	self
		assert: instance _connection
		equals: nil
]

{ #category : 'running' }
RsrServiceTest >> testIsMirrored [

	| instance |
	instance := RsrRemoteAction clientClass new.
	self deny: instance isMirrored.
	self mirror: instance.
	self assert: instance isMirrored
]

{ #category : 'running' }
RsrServiceTest >> testMessageDispatchedConcurrentlyToSingleService [
	"Ensure all messages are sent concurrently (including those sent to a single service)"

	| client server counter promise1 promise2 |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	counter := 0.
	server action: [counter := counter + 1. self shortWait. counter].
	promise1 := client asyncValue.
	promise2 := client asyncValue.
	self
		assert: promise1 wait
		equals: 2. "The #shortWait will cause the second counter increment before the counter is returned."
	self
		assert: promise2 wait
		equals: 2
]

{ #category : 'running' }
RsrServiceTest >> testMessagesDispactchedConcurrentlyForMultipleServices [
	"Ensure messages are dispatched concurrently"

	| client1 server1 client2 server2 semaphore expected1 expected2 promise1 promise2 |
	client1 := connectionA serviceFor: #RsrRemoteAction.
	client2 := connectionA serviceFor: #RsrRemoteAction.
	client1 synchronize.
	client2 synchronize.
	server1 := connectionB serviceAt: client1 _id.
	server2 := connectionB serviceAt: client2 _id.
	semaphore := Semaphore new.
	expected1 := #expected1.
	expected2 := #expected2.
	server1 action: [semaphore wait. expected1].
	server2 action: [semaphore signal. expected2].
	promise1 := client1 asyncValue.
	promise2 := client2 asyncValue.
	self shortWait.
	self
		assert: promise1 isResolved;
		assert: promise2 isResolved.
	self
		assert: promise1 value
		equals: expected1.
	self
		assert: promise2 value
		equals: expected2
]

{ #category : 'running' }
RsrServiceTest >> testPrePostUpdate [

	| client server | 
	client := connectionA serviceFor: #RsrInstrumentedServer.
	self
		assert: client preUpdateCount
		equals: 0.
	self
		assert: client postUpdateCount
		equals: 0.
	client return: nil.
	server := connectionB serviceAt: client _id.
	self
		assert: client preUpdateCount
		equals: 1.
	self
		assert: client postUpdateCount
		equals: 1.
	self
		assert: server preUpdateCount
		equals: 1.
	self
		assert: server postUpdateCount
		equals: 1.
	client return: nil.
	self
		assert: client preUpdateCount
		equals: 2.
	self
		assert: client postUpdateCount
		equals: 2.
	self
		assert: server preUpdateCount
		equals: 2.
	self
		assert: server postUpdateCount
		equals: 2.
]

{ #category : 'running' }
RsrServiceTest >> testReflectedVariableNames [

	| client server clientNames serverNames |
	client := connectionA serviceFor: #RsrTestService.
	client synchronize.
	server := connectionB serviceAt: client _id.
	clientNames := RsrServiceSnapshot reflectedVariablesFor: client.
	serverNames := RsrServiceSnapshot reflectedVariablesFor: server.
	self
		assert: clientNames
		equals: serverNames.
	self
		assert: clientNames size
		equals: 1.
	self
		assert: (clientNames at: 1) asSymbol
		equals: #sharedVariable.
	client := connectionA serviceFor: #RsrReflectedVariableTestServiceB.
	client synchronize.
	server := connectionB serviceAt: client _id.
	clientNames := RsrServiceSnapshot reflectedVariablesFor: client.
	serverNames := RsrServiceSnapshot reflectedVariablesFor: server.
	self
		assert: clientNames
		equals: serverNames.
	self
		assert: clientNames size
		equals: 2.
	self
		assert: (clientNames at: 1) asSymbol
		equals: #varA.
	self
		assert: (clientNames at: 2) asSymbol
		equals: #varB
]

{ #category : 'running' }
RsrServiceTest >> testRegisterWith [

	| instance |
	instance := RsrRemoteAction clientClass new.
	self deny: instance isMirrored.
	instance registerWith: connectionA.
	self assert: instance isMirrored.
	self
		should: [instance registerWith: connectionB]
		raise: RsrAlreadyRegistered
]

{ #category : 'running' }
RsrServiceTest >> testReturnServerWithoutAssociatedClient [

	| client server reason |
	client := self serviceFactoryA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrKnownServer new].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason class
		equals: RsrDecodingRaisedException
]

{ #category : 'running' }
RsrServiceTest >> testSendClientWithoutAssociatedServer [

	| client server reason |
	client := self serviceFactoryA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [:x | x].
	reason := self expectCatch: (client asyncValue: RsrKnownClient new).
	self
		assert: reason class
		equals: RsrRemoteExceptionServer.
	self
		assert: reason exceptionClassName
		equals: #RsrUnknownClass
]

{ #category : 'running' }
RsrServiceTest >> testVariableReflection [

	| localService remoteService |
	localService := RsrTestService clientClass new
		sharedVariable: #shared;
		privateVariable: #private;
		yourself.
	self mirror: localService.
	remoteService := connectionB serviceAt: localService _id.
	self
		assert: localService sharedVariable
		identicalTo: remoteService sharedVariable.
	self
		assert: localService privateVariable
		identicalTo: #private.
	self
		assert: remoteService privateVariable
		identicalTo: nil
]
