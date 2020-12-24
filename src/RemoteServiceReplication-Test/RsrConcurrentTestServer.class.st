Class {
	#name : 'RsrConcurrentTestServer',
	#superclass : 'RsrConcurrentTestService',
	#instVars : [
		'counter',
		'semaphore',
		'stashedProcess'
	],
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'accessing' }
RsrConcurrentTestServer class >> initialCounter [

	^0
]

{ #category : 'accessing' }
RsrConcurrentTestServer >> counter: anArray [

	counter := anArray
]

{ #category : 'accessing' }
RsrConcurrentTestServer >> counterWithIncrement [

	^[counter at: 1] ensure: [counter at: 1 put: (counter at: 1) + 1]
]

{ #category : 'accessing' }
RsrConcurrentTestServer >> delayedCounter [

	semaphore signal.
	(Delay forSeconds: 2) wait.
	^counter at: 1
]

{ #category : 'accessing' }
RsrConcurrentTestServer >> semaphore: aSemaphore [

	semaphore := aSemaphore
]

{ #category : 'actions' }
RsrConcurrentTestServer >> stashProcess [

	stashedProcess := Processor activeProcess
]

{ #category : 'accessing' }
RsrConcurrentTestServer >> stashedProcess [

	^stashedProcess
]
