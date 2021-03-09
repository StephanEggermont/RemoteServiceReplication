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
	#category : 'RemoteServiceReplication-Base'
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
