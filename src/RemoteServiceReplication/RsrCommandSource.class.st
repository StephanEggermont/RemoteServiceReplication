Class {
	#name : 'RsrCommandSource',
	#superclass : 'RsrStreamChannelLoop',
	#instVars : [
		'decoder'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'accessing' }
RsrCommandSource >> decoder [

	^RsrDecoder new
]

{ #category : 'commands' }
RsrCommandSource >> executeCycle [

	[| command |
	command := self nextCommand.
	self report: command.
	self channel received: command]
		on: RsrSocketClosed
		do:
			[:ex |
			self reportException: ex.
			self channel channelDisconnected]
]

{ #category : 'accessing' }
RsrCommandSource >> inStream [
	"Return the read stream associated w/ this channel."

	^self channel inStream
]

{ #category : 'commands' }
RsrCommandSource >> nextCommand [

	^self decoder decodeCommand: self inStream
]

{ #category : 'accessing' }
RsrCommandSource >> runLoopName [

	^'Connection Reading'
]
