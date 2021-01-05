"
No class-specific documentation for RsrCommandSink, hierarchy is:
Object
  RsrObject
    RsrEventLoop( process connection state)
      RsrCommandSink( queue)

"
Class {
	#name : 'RsrCommandSink',
	#superclass : 'RsrStreamChannelLoop',
	#instVars : [
		'queue'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'accessing' }
RsrCommandSink >> encoder [

	^RsrEncoder new
]

{ #category : 'commands' }
RsrCommandSink >> enqueue: aCommand [

	self isActive ifTrue: [queue nextPut: aCommand]
]

{ #category : 'commands' }
RsrCommandSink >> executeCycle [

	[| command |
	command := queue next.
	command == self stopToken
		ifTrue: [^self].
	self writeCommand: command.
	(queue size = 0) "Dolphin does not support #isEmpty"
		ifTrue: [self flush]]
		on: RsrSocketClosed
		do:
			[:ex |
			self reportException: ex.
			self channel channelDisconnected]
]

{ #category : 'commands' }
RsrCommandSink >> flush [

	self outStream flush
]

{ #category : 'initialization' }
RsrCommandSink >> initialize [

	super initialize.
	queue := SharedQueue new
]

{ #category : 'accessing' }
RsrCommandSink >> outStream [

	^self channel outStream
]

{ #category : 'accessing' }
RsrCommandSink >> runLoopName [

	^'Connection Writing'
]

{ #category : 'commands' }
RsrCommandSink >> stop [

	super stop.
	queue nextPut: self stopToken
]

{ #category : 'accessing' }
RsrCommandSink >> stopToken [

	^self stoppedState
]

{ #category : 'writing' }
RsrCommandSink >> write: aByteArray [

	self outStream nextPutAll: aByteArray
]

{ #category : 'writing' }
RsrCommandSink >> writeCommand: aCommand [

	self report: aCommand.
	aCommand
		encode: self outStream
		using: self encoder
]
