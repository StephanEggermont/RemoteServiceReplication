Class {
	#name : 'RsrConnectionTestCase',
	#superclass : 'RsrSystemTestCase',
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'testing' }
RsrConnectionTestCase class >> isAbstract [

	^self == RsrConnectionTestCase
]

{ #category : 'running' }
RsrConnectionTestCase >> testWaitUntilClose [

	| semaphore marker |
	semaphore := Semaphore new.
	marker := false.
	RsrProcessModel
		fork:
			[semaphore signal.
			[connectionB waitUntilClose.
			marker := true]
				ensure: [semaphore signal]]
		named: 'Pending Connection Closure'.
	semaphore wait.
	self deny: marker.
	connectionA close.
	semaphore wait.
	self assert: marker
]
