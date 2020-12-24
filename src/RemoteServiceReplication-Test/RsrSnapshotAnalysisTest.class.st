"
No class-specific documentation for RsrSnapshotAnalysisTest, hierarchy is:
Object
  TestAsserter
    TestCase( testSelector)
      RsrTestCase
        RsrSnapshotAnalysisTest

"
Class {
	#name : 'RsrSnapshotAnalysisTest',
	#superclass : 'RsrTestCase',
	#instVars : [
		'connection'
	],
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'utilites' }
RsrSnapshotAnalysisTest >> analyze: anObject [

	| analysis |
	analysis := RsrSnapshotAnalysis
		roots: (Array with: anObject)
		connection: connection.
	analysis perform.
	^analysis
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> setUp [

	super setUp.
	connection := RsrConnection
		channel: RsrNullChannel new
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	connection open
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> tearDown [

	connection close.
	connection := nil.
	super tearDown
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testArrayCycle [

	| array analysis |
	array := Array new: 1.
	array at: 1 put: array.
	analysis := self analyze: array.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 1.
	array at: 1 put: { array }.
	analysis := self analyze: array.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 2.

]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testDictionaryCycle [

	| dictionary analysis |
	dictionary := Dictionary new.
	dictionary at: 1 put: dictionary.
	analysis := self analyze: dictionary.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 2.

	dictionary removeKey: 1.
	dictionary at: dictionary put: 1.
	analysis := self analyze: dictionary.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 2
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testMultiPathsToSameService [

	"Tests issue 76, Unnecessary duplicate snapshots being sent."

	| childService parentService orderedCollection analysis |
	childService := RsrRemoteAction clientClass new.
	parentService := RsrRemoteAction clientClass sharedVariable:
		                 childService.
	orderedCollection := OrderedCollection
		                     with: childService
		                     with: parentService.
	analysis := self analyze: orderedCollection.
	self assert: analysis snapshots size equals: 2.
	self
		assert: parentService isMirrored;
		assert: childService isMirrored
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testNewServiceInArray [
	"Ensure a new service in a collection is properly tagged"

	| service analysis expected |
	service := RsrServerNoInstVars new.
	analysis := self analyze: (Array with: service).
	expected := OrderedCollection with: service.
	self
		assert: analysis snapshots size
		equals: 1.
	self assert: service isMirrored
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testNewServicesInDictionary [
	"Ensure a new service in a collection is properly tagged"

	| key value dictionary analysis expected |
	key := RsrServerNoInstVars new.
	value := RsrServerNoInstVars new.
	dictionary := Dictionary new
		at: key put: value;
		yourself.
	analysis := self analyze: dictionary.
	self
		assert: analysis snapshots size
		equals: 2.
	self
		assert: key isMirrored;
		assert: value isMirrored
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testOrderedCollectionCycle [

	| oc analysis |
	oc := OrderedCollection new.
	oc add: oc.
	analysis := self analyze: oc.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 1.

	oc := OrderedCollection with: (Array with: oc).
	analysis := self analyze: oc.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 3
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testServiceAllDataObjects [
	"While this code is structurally similar to #testClientNoInstVars, it ensures
	that Data Objects are actually encoded in-line."

	| client analysis expected |
	client := RsrRemoteAction clientClass new.
	analysis := self analyze: client.
	expected := OrderedCollection with: client.
	self
		assert: analysis snapshots size
		equals: 1.
	self assert: client isMirrored
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testServiceNoInstVars [

	| client analysis expected snapshot |
	client := RsrClientNoInstVars new.
	analysis := self analyze: client.
	expected := OrderedCollection with: client.
	self assert: client isMirrored.
	self
		assert: analysis snapshots size
		equals: 1.
	snapshot := analysis snapshots first.
	self
		assert: snapshot slots size
		equals: 0.
	self assert: snapshot shouldCreateServer.
	self
		assert: snapshot templateClass
		equals: client class templateClass
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testServiceReferencingAnotherService [
	"While this code is structurally similar to #testClientNoInstVars, it ensures
	that Data Objects are actually encoded in-line."

	| referencedService client analysis expected |
	referencedService := RsrRemoteAction clientClass new.
	client := RsrRemoteAction clientClass sharedVariable: referencedService.
	analysis := self analyze: client.
	self
		assert: analysis snapshots size
		equals: 2.
	self
		assert: client isMirrored;
		assert: referencedService isMirrored
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testServiceWithCycle [

	| rootClient referencedClient analysis |
	rootClient := RsrRemoteAction new.
	referencedClient := RsrRemoteAction sharedVariable: rootClient.
	rootClient sharedVariable: referencedClient.
	analysis := self analyze: rootClient.
	self
		assert: analysis snapshots size equals: 2;
		assert: analysis analyzedObjects size equals: 2
]

{ #category : 'running' }
RsrSnapshotAnalysisTest >> testSetCycle [

	| set analysis |
	set := Set new.
	set add: set.
	analysis := self analyze: set.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 1.

	set := Set new.
	set add: (Array with: set).
	analysis := self analyze: set.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 2
]
