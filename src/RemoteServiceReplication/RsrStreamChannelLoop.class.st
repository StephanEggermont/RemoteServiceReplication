"
No class-specific documentation for RsrEventLoop, hierarchy is:
Object
  RsrObject
    RsrEventLoop( process connection state)

"
Class {
	#name : 'RsrStreamChannelLoop',
	#superclass : 'RsrObject',
	#instVars : [
		'process',
		'channel',
		'state'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrStreamChannelLoop class >> on: aChannel [

	^self new
		channel: aChannel;
		yourself
]

{ #category : 'accessing' }
RsrStreamChannelLoop >> channel [

	^channel
]

{ #category : 'accessing' }
RsrStreamChannelLoop >> channel: aChannel [

	channel := aChannel
]

{ #category : 'running' }
RsrStreamChannelLoop >> executeCycle [

	self subclassResponsibility
]

{ #category : 'initialization' }
RsrStreamChannelLoop >> initialize [

	super initialize.
	state := self stoppedState
]

{ #category : 'testing' }
RsrStreamChannelLoop >> isActive [

	^state == self runningState
]

{ #category : 'testing' }
RsrStreamChannelLoop >> isProcessActive [

	^process ~~ nil
]

{ #category : 'running' }
RsrStreamChannelLoop >> log [

	^RsrLogWithPrefix
		prefix: self class name asString
		log: self channel log
]

{ #category : 'running' }
RsrStreamChannelLoop >> log: aString [

	self log debug: aString
]

{ #category : 'accessing' }
RsrStreamChannelLoop >> priority [

	^Processor lowIOPriority
]

{ #category : 'running' }
RsrStreamChannelLoop >> report: aCommand [

	aCommand reportOn: self log
]

{ #category : 'running' }
RsrStreamChannelLoop >> reportException: anException [

	self log: anException description
]

{ #category : 'running' }
RsrStreamChannelLoop >> runLoop [

	[self isActive]
		whileTrue:
			[[self executeCycle]
				on: Error
				do:
					[:ex |
					self reportException: ex.
					self channel genericError: ex]]
]

{ #category : 'accessing' }
RsrStreamChannelLoop >> runLoopName [
	"Return the name of the associated run loop.
	This name is assigned to the Process used to execute the run loop."

	^self subclassResponsibility
]

{ #category : 'accessing' }
RsrStreamChannelLoop >> runningState [

	^#Running
]

{ #category : 'commands' }
RsrStreamChannelLoop >> start [

	state := self runningState.
	process := RsrProcessModel
		fork: [self runLoop.
				process := nil]
		at: self priority
		named: self runLoopName
]

{ #category : 'commands' }
RsrStreamChannelLoop >> stop [

	self isActive ifFalse: [^self].
	state := self stoppedState
]

{ #category : 'accessing' }
RsrStreamChannelLoop >> stoppedState [

	^#Stop
]
