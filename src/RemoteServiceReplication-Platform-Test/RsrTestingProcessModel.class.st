Class {
	#name : 'RsrTestingProcessModel',
	#superclass : 'RsrProcessModel',
	#instVars : [
		'forkedException'
	],
	#category : 'RemoteServiceReplication-Platform-Test'
}

{ #category : 'managing-concurrency' }
RsrTestingProcessModel >> fork: aBlock
at: aPriority
named: aString [

	^super
		fork: (self protect: aBlock)
		at: aPriority
		named: aString
]

{ #category : 'managing-concurrency' }
RsrTestingProcessModel >> fork: aBlock
named: aString [

	^super
		fork: (self protect: aBlock)
		named: aString
]

{ #category : 'accessing' }
RsrTestingProcessModel >> forkedException [

	^forkedException
]

{ #category : 'accessing' }
RsrTestingProcessModel >> protect: aBlock [

	^[aBlock on: Error do: [:ex | forkedException := ex copy. ex return]]
]
