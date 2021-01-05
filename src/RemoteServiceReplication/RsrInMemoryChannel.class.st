"
Example usage:

	| aQueue bQueue channelA channelB |
	aQueue := SharedQueue new.
	bQueue := SharedQueue new.
	channelA := RsrInMemoryChannel
		inQueue: aQueue
		outQueue: bQueue.
	channelB := RsrInMemoryChannel
		inQueue: bQueue
		outQueue: aQueue.
	connectionA := RsrConnection
		channel: channelA
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	connectionB := RsrConnection
		channel: channelB
		transactionSpigot: RsrThreadSafeNumericSpigot naturals negated
		oidSpigot: RsrThreadSafeNumericSpigot naturals negated.
	connectionA open.
	connectionB open.
"
Class {
	#name : 'RsrInMemoryChannel',
	#superclass : 'RsrChannel',
	#instVars : [
		'inQueue',
		'outQueue',
		'drainProcess'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrInMemoryChannel class >> inQueue: inQueue
outQueue: outQueue [

	^self new
		inQueue: inQueue;
		outQueue: outQueue;
		yourself
]

{ #category : 'lifecycle' }
RsrInMemoryChannel >> close [

	outQueue nextPut: nil.
	inQueue nextPut: nil
]

{ #category : 'processing' }
RsrInMemoryChannel >> drainLoop [

	| command |
	[command := inQueue next.
	command isNil]
		whileFalse:
			[self received: command].
	self connection channelDisconnected
]

{ #category : 'accessing' }
RsrInMemoryChannel >> inQueue [

	^inQueue
]

{ #category : 'accessing' }
RsrInMemoryChannel >> inQueue: aSharedQueue [

	inQueue := aSharedQueue
]

{ #category : 'testing' }
RsrInMemoryChannel >> isConnected [

	^drainProcess isNil not
]

{ #category : 'lifecycle' }
RsrInMemoryChannel >> open [

	drainProcess := RsrProcessModel
		fork: [self drainLoop. drainProcess := nil]
		named: 'InMemoryChannel Receiving'
]

{ #category : 'accessing' }
RsrInMemoryChannel >> outQueue [

	^outQueue
]

{ #category : 'accessing' }
RsrInMemoryChannel >> outQueue: aSharedQueue [

	outQueue := aSharedQueue
]

{ #category : 'lifecycle' }
RsrInMemoryChannel >> send: aCommand [

	outQueue nextPut: aCommand
]
