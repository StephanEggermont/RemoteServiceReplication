"
No class-specific documentation for RsrSendMessage, hierarchy is:
Object
  RsrObject
    RsrCommand( encoding)
      RsrSendMessage( transaction receiver selector arguments retainList)

"
Class {
	#name : 'RsrSendMessage',
	#superclass : 'RsrMessagingCommand',
	#instVars : [
		'receiverReference',
		'selectorReference',
		'argumentReferences'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrSendMessage class >> transaction: aTransactionId
receiverReference: aServiceReference
selectorReference: aSelectorReference
argumentReferences: anArrayOfReferences [

	^self new
		transaction: aTransactionId;
		receiverReference: aServiceReference;
		selectorReference: aSelectorReference;
		argumentReferences: anArrayOfReferences;
		yourself
]

{ #category : 'accessing' }
RsrSendMessage >> argumentReferences [

	^argumentReferences
]

{ #category : 'accessing' }
RsrSendMessage >> argumentReferences: anArrayOfReferences [

	argumentReferences := anArrayOfReferences
]

{ #category : 'encoding' }
RsrSendMessage >> encode: aStream
using: anEncoder [

	anEncoder
		encodeSendMessage: self
		onto: aStream
]

{ #category : 'executing' }
RsrSendMessage >> executeFor: aConnection [

	| resolver servicesStrongly receiver selector arguments messageSend |
	resolver := RsrRemotePromiseResolver for: self over: aConnection.
	"Must keep a strong reference to each service until the roots are referenced."
	[ 
	[ 
	self _registerDebugActionHandler.
	servicesStrongly := self reifyAllIn: aConnection.
	receiver := self receiverReference resolve: aConnection.
	selector := self selectorReference resolve: aConnection.
	arguments := self argumentReferences collect: [ :each | 
		             each resolve: aConnection ].
	"receiver and arguments should now be the roots of the service graph, discard strong references."
	servicesStrongly := nil.
	resolver addRoot: receiver. "Ensure we always send back the receiver -- this ensures sending a message results in by-directional syncing."
	messageSend := RsrMessageSend
		               receiver: receiver
		               selector: selector
		               arguments: arguments.
	self perform: messageSend answerUsing: resolver ]
		on: self unhandledExceptionClass
		do: [ :ex | 
			resolver break: (RsrRemoteException from: ex).
			ex return ] ] ensure: [ 
		resolver hasResolved ifFalse: [ 
			resolver break: 'Message send terminated without a result' ] ]
]

{ #category : 'reporting' }
RsrSendMessage >> logException: anException
to: aLog [

	| message |
	message := String
		streamContents:
			[:stream |
			stream
				print: self receiverReference;
				nextPutAll: '>>';
				print: self selectorReference;
				nextPutAll: ' due to: ';
				nextPutAll: anException description].
	aLog error: message
]

{ #category : 'executing' }
RsrSendMessage >> perform: aMessageSend
answerUsing: aResolver [

	[aResolver fulfill: aMessageSend perform]
		on: self unhandledExceptionClass
		do:
			[:ex | | debugResult |
			debugResult := [aMessageSend receiver
									debug: ex
									raisedDuring: aMessageSend
									answerUsing: aResolver]
									on: self unhandledExceptionClass
									do:
										[:debugEx | 
										aResolver break: (RsrRemoteException from: debugEx).
										ex return].
			aResolver hasResolved
				ifTrue: [ex return]
				ifFalse:
					[ex isResumable
						ifTrue: [ex resume: debugResult]
						ifFalse:
							[aResolver break: (RsrRemoteException from: ex).
							ex return]]]
]

{ #category : 'accessing' }
RsrSendMessage >> receiverReference [

	^receiverReference
]

{ #category : 'accessing' }
RsrSendMessage >> receiverReference: aServiceReference [

	receiverReference := aServiceReference
]

{ #category : 'reporting' }
RsrSendMessage >> reportOn: aLog [

	aLog debug: 'RsrSendMessage(', self receiverReference asString, '>>', self selectorReference asString, ')'
]

{ #category : 'accessing' }
RsrSendMessage >> selectorReference [

	^selectorReference
]

{ #category : 'accessing' }
RsrSendMessage >> selectorReference: aSymbolReference [

	selectorReference := aSymbolReference
]

{ #category : 'accessing' }
RsrSendMessage >> unhandledExceptionClass [
	^ RsrUnhandledException
]
