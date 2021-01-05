"
An abstract test class which contains utility methods
"
Class {
	#name : 'RsrTestCase',
	#superclass : 'TestCase',
	#category : 'RemoteServiceReplication-Platform-Test'
}

{ #category : 'accessing' }
RsrTestCase class >> defaultTimeLimit [
	"This is needed for Pharo"

	^5 seconds
]

{ #category : 'testing' }
RsrTestCase class >> isAbstract [

	^self == RsrTestCase
]

{ #category : 'asserting' }
RsrTestCase >> assert: anObject
identicalTo: bObject [

	self assert: anObject == bObject
]

{ #category : 'utilities' }
RsrTestCase >> assumption: aString [
	"This method serves as a marker for assumptions made in the tests.
	Perhaps some of the senders can be removed in the future."
]

{ #category : 'asserting' }
RsrTestCase >> deny: anObject
identicalTo: bObject [

	self assert: anObject ~~ bObject
]

{ #category : 'utilities' }
RsrTestCase >> hack: aString [
	"Placeholder for things that need to be fixed"
]

{ #category : 'utilities' }
RsrTestCase >> maximumReclamation [

	self assert: RsrGarbageCollector maximumReclamation
]

{ #category : 'running' }
RsrTestCase >> runCase [

	| pm |
	pm := RsrTestingProcessModel new.
	RsrProcessModel current: pm.
	[super runCase]
		ensure:
			[RsrProcessModel resetCurrent].
	pm forkedException ifNotNil: [:ex | ex signal]
]

{ #category : 'utilities' }
RsrTestCase >> shortWait [

	(Delay forMilliseconds: 100) wait
]
