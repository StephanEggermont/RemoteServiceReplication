"
No class-specific documentation for RsrChannel, hierarchy is:
Object
  RsrObject
    RsrChannel

"
Class {
	#name : 'RsrChannel',
	#superclass : 'RsrObject',
	#instVars : [
		'connection'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'lifecycle' }
RsrChannel >> close [
	"Ensure the channel is closed to further communication."

	^self subclassResponsibility
]

{ #category : 'accessing' }
RsrChannel >> connection [

	^connection
]

{ #category : 'accessing' }
RsrChannel >> connection: aConnection [

	connection := aConnection
]

{ #category : 'events' }
RsrChannel >> genericError: anError [

	^self connection unknownError: anError
]

{ #category : 'testing' }
RsrChannel >> isConnected [
	"Report whether the Channel is open between Connections."

	^self subclassResponsibility
]

{ #category : 'accessing' }
RsrChannel >> log [

	^self connection log
]

{ #category : 'lifecycle' }
RsrChannel >> open [
	"Ensure the channel is open and ready for communication."

	^self subclassResponsibility
]

{ #category : 'events' }
RsrChannel >> received: aCommand [
	"A command has come in over the channel. Propogate it to the Connection."

	self connection _receivedCommand: aCommand
]

{ #category : 'events' }
RsrChannel >> send: aCommand [
	"Send the provided command over the channel."

	^self subclassResponsibility
]
