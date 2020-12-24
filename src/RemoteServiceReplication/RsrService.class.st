"
I represent a class of Objects that know offer Rsr Services.
"
Class {
	#name : 'RsrService',
	#superclass : 'RsrAbstractService',
	#instVars : [
		'_id',
		'_connection',
		'remoteSelf'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrService class >> _id: anId
connection: aConnection [

	^super new
		_id: anId connection: aConnection;
		yourself
]

{ #category : 'accessing' }
RsrService class >> clientClass [

	^RsrClassResolver classNamed: self clientClassName
]

{ #category : 'accessing' }
RsrService class >> clientClassName [

	^(self templateClassName, 'Client') asSymbol
]

{ #category : 'testing' }
RsrService class >> isClientClass [

	^self name == self clientClassName
]

{ #category : 'testing' }
RsrService class >> isServerClass [

	^self name == self serverClassName
]

{ #category : 'testing' }
RsrService class >> isTemplateClass [

	^self name == self templateClassName
]

{ #category : 'accessing' }
RsrService class >> serverClass [

	^RsrClassResolver classNamed: self serverClassName
]

{ #category : 'accessing' }
RsrService class >> serverClassName [

	^(self templateClassName, 'Server') asSymbol
]

{ #category : 'accessing' }
RsrService class >> templateClass [

	^RsrClassResolver classNamed: self templateClassName
]

{ #category : 'accessing' }
RsrService class >> templateClassName [

	self subclassResponsibility
]

{ #category : 'private-accessing' }
RsrService >> _connection [
	"Private - Returns the Connection associated w/ the receiver."

	^_connection
]

{ #category : 'private-accessing' }
RsrService >> _id [
	"Private - Returns the Service ID associated w/ the receiver."

	^_id
]

{ #category : 'private-accessing' }
RsrService >> _id: anRsrId
connection: aConnection [
	"Private - Configure this Service w/ a Service ID and Connection. This is a side-effect of registering a Service w/ a Connection."

	_id := anRsrId.
	_connection := aConnection.
	remoteSelf := aConnection _forwarderClass on: self
]

{ #category : 'private-synchronization' }
RsrService >> _synchronize [
	"Return self to synchronize with the remote peer"

	^self
]

{ #category : 'public-accessing' }
RsrService >> connection [
	"Returns the Connection associated w/ the receiver."

	^self _connection
]

{ #category : 'public-debugging' }
RsrService >> debug: anException
raisedDuring: aMessageSend
answerUsing: aResolver [

	aResolver break: (RsrRemoteException from: anException)
]

{ #category : 'public-accessing' }
RsrService >> id [
	"Returns the Service ID associated w/ the receiver."

	^self _id
]

{ #category : 'public-testing' }
RsrService >> isClient [

	^self class isClientClass
]

{ #category : 'public-testing' }
RsrService >> isMirrored [

	^_connection ~~ nil
]

{ #category : 'public-testing' }
RsrService >> isNotMirrored [

	^self isMirrored not
]

{ #category : 'public-testing' }
RsrService >> isServer [

	^self class isServerClass
]

{ #category : 'public-events' }
RsrService >> postUpdate [
	"#postUpdate is called just after the Service's shared variables are updated by the framework.
	This method can be overridden to ensure internal consistency."

	^self
]

{ #category : 'public-events' }
RsrService >> preUpdate [
	"#preUpdate is called just before the Service's shared variables are updated by the framework.
	This method can be overridden to ensure internal consistency.
	Note: If this method raises an exception, RSR will not signal #postUpdate."

	^self
]

{ #category : 'public-registration' }
RsrService >> registerWith: aConnection [

	aConnection _ensureRegistered: self
]

{ #category : 'public-synchronization' }
RsrService >> synchronize [
	"Synchronize the service w/ its peer."

	remoteSelf == nil
		ifFalse: [remoteSelf _synchronize wait]
]
