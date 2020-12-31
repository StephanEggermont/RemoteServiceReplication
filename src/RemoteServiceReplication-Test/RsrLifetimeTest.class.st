Class {
	#name : 'RsrLifetimeTest',
	#superclass : 'RsrSystemTestCase',
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'testing' }
RsrLifetimeTest class >> isAbstract [

	^self == RsrLifetimeTest
]

{ #category : 'utilities' }
RsrLifetimeTest >> evaluateAsRemoteAction: aBlock [
	"Evaluate the block and return the result through RSR."

	| client server |
	client := RsrRemoteActionClient new
		registerWith: connectionA;
		synchronize.
	server := connectionB serviceAt: client _id.
	server action: aBlock.
	^client value
]

{ #category : 'running' }
RsrLifetimeTest >> testEnsurePushedClientServerLifetime [
	"This test is designed to ensure that a Server created via a 'pushed' Client
	exhibit the correct lifetime properties."

	| client sid server actual |
	client := RsrClientNoInstVars new
		registerWith: connectionA;
		synchronize.
	sid := client _id.
	self maximumReclamation. "Ensure the Server is strongly referenced in connectionB."
	server := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	client := nil.
	self maximumReclamation. "Ensure the Client is garbage collected."
	(Delay forSeconds: 1) wait. "Ensure the ReleaseServices Command is propogated and processed by connectionB."
	self maximumReclamation. "Ensure the Server is still referenced even after a garbage collect."
	actual := connectionA
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: actual
		equals: nil.
	actual := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	self
		assert: actual
		identicalTo: server.
	actual := nil. "Ensure we do not retain an extra reference to the Server."
	server := nil.
	self maximumReclamation. "Ensure Server is removed."
	actual := connectionB
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: actual
		equals: nil
]

{ #category : 'running' }
RsrLifetimeTest >> testEnsureReturnedServerLifetime [
	"Return a newly created Server (that is not registered.) It should persist in the framework until 
	both the associated Client is garbage collected and local references are dropped.

	If you change this method -- change #testEnsureReturnRegisteredServerLifetime as well."

	| client sid server result |
	client := self evaluateAsRemoteAction: [RsrServerNoInstVars new].
	sid := client _id.
	self maximumReclamation. "Ensure the Server instance is referenced."
	server := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	client := nil.
	self maximumReclamation.
	(Delay forSeconds: 1) wait. "Release Client."
	self maximumReclamation.
	"Ensure Client is released."
	result := connectionA
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: result
		equals: nil.
	"Ensure Server is still registered."
	result := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	self
		assert: result
		equals: server.
	result := server := nil.
	self maximumReclamation.
	result := connectionB
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: result
		equals: nil
]

{ #category : 'running' }
RsrLifetimeTest >> testEnsureReturnRegisteredServerLifetime [
	"Return a newly created Server (that is registered.) It should persist in the framework until 
	both the associated Client is garbage collected and local references are dropped.

	If you change this method -- change #testEnsureReturnedServerLifetime as well."

	| client sid server result |
	client := self evaluateAsRemoteAction: [RsrServerNoInstVars new registerWith: connectionB].
	sid := client _id.
	self maximumReclamation. "Ensure the Server instance is referenced."
	server := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	client := nil.
	self maximumReclamation.
	(Delay forSeconds: 1) wait. "Release Client."
	self maximumReclamation.
	"Ensure Client is released."
	result := connectionA
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: result
		equals: nil.
	"Ensure Server is still registered."
	result := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	self
		assert: result
		equals: server.
	result := server := nil.
	self maximumReclamation.
	result := connectionB
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: result
		equals: nil
]
