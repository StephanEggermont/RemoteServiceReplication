Class {
	#name : 'RsrUnsupportedObject',
	#superclass : 'RsrError',
	#instVars : [
		'object'
	],
	#category : 'RemoteServiceReplication-Base'
}

{ #category : 'exceptioninstantiator' }
RsrUnsupportedObject class >> signal: anObject [

	^self new
		object: anObject;
		messageText: 'Instances of #', anObject class name, ' do not support replication.';
		signal
]

{ #category : 'accessing' }
RsrUnsupportedObject >> object [

	^object
]

{ #category : 'accessing' }
RsrUnsupportedObject >> object: anObject [

	object := anObject
]
