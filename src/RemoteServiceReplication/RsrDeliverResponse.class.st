"
No class-specific documentation for RsrDeliverResponse, hierarchy is:
Object
  RsrObject
    RsrCommand( encoding)
      RsrDeliverResponse( transaction response roots retainList)

"
Class {
	#name : 'RsrDeliverResponse',
	#superclass : 'RsrMessagingCommand',
	#instVars : [
		'responseReference'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrDeliverResponse class >> transaction: aTransactionId
responseReference: aReference
snapshots: anArrayOfSnapshots [

	^self new
		transaction: aTransactionId;
		responseReference: aReference;
		snapshots: anArrayOfSnapshots;
		yourself
]

{ #category : 'encoding' }
RsrDeliverResponse >> encode: aStream
using: anEncoder [

	anEncoder
		encodeDeliverResponse: self
		onto: aStream
]

{ #category : 'executing' }
RsrDeliverResponse >> executeFor: aConnection [

	| pendingMessage result servicesStrongly |
	pendingMessage := aConnection pendingMessages
		                  removeKey: self transaction
		                  ifAbsent: [ 
		                  ^ self reportUnknownTransactionIn: aConnection ].
	"Must keep a strong reference to each service until the roots are referenced."
	[ 
	servicesStrongly := self reifyAllIn: aConnection.
	result := self responseReference resolve: aConnection.
	"result should now be the root of the services graph"
	servicesStrongly := nil.
	result first == #fulfill
		ifTrue: [ pendingMessage promise fulfill: result last ]
		ifFalse: [ pendingMessage promise break: result last ] ]
		on: Error
		do: [ :ex | 
			pendingMessage promise break:
				(RsrDecodingRaisedException exception: ex) ]
]

{ #category : 'reporting' }
RsrDeliverResponse >> reportOn: aLog [

	aLog debug: 'RsrDeliverResponse(', self response class name, ')'
]

{ #category : 'reporting' }
RsrDeliverResponse >> reportUnknownTransactionIn: aConnection [

	aConnection log error: 'Unknown transaction (', self transaction asString, ') while processing Response'
]

{ #category : 'accessing' }
RsrDeliverResponse >> response [

	^self responseReference
]

{ #category : 'accessing' }
RsrDeliverResponse >> response: anObject [

	^self responseReference: anObject
]

{ #category : 'accessing' }
RsrDeliverResponse >> responseReference [

	^responseReference
]

{ #category : 'accessing' }
RsrDeliverResponse >> responseReference: aReference [

	responseReference := aReference
]
