Class {
	#name : 'RsrNullChannel',
	#superclass : 'RsrChannel',
	#instVars : [
		'lastCommand'
	],
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'lifecycle' }
RsrNullChannel >> close [

	"NOP"
]

{ #category : 'testing' }
RsrNullChannel >> isConnected [

	^true
]

{ #category : 'accessing' }
RsrNullChannel >> lastCommand [

	^lastCommand
]

{ #category : 'lifecycle' }
RsrNullChannel >> open [

	"NOP"
]

{ #category : 'events' }
RsrNullChannel >> received: aCommand [

	lastCommand := aCommand
]

{ #category : 'events' }
RsrNullChannel >> send: aCommand [

	lastCommand := aCommand
]
