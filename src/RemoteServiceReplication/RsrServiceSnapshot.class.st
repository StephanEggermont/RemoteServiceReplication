"
RsrServiceSnapshot

When a SendMessage or DeliverResponse command is processed, the entire transition closure of the MessageSend/Response is analyzed.

A Snapshot of each Service found during this process is taken. The slots of the Service that need to be replicated are stored in the ServiceSnapshot as references.

In addition, information about the template and service is stored. This allows the peer to reify the correct type of Service. For instance, a local Client will be a Server remotely. A local Server will become a remote Client.

Collaborators:
- Encoder
- Decoder
- Reference
"
Class {
	#name : 'RsrServiceSnapshot',
	#superclass : 'RsrObject',
	#instVars : [
		'sid',
		'targetClassName',
		'slots'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrServiceSnapshot class >> from: aService [

	^self new
		snapshot: aService;
		yourself
]

{ #category : 'variable utilites' }
RsrServiceSnapshot class >> reflectedVariableIndicesFor: aService
do: aBlock [

	| allVariables |
	allVariables := aService class allInstVarNames.
	(self reflectedVariablesFor: aService)
		do:
			[:varName | | index |
			index := allVariables indexOf: varName.
			aBlock value: index]
]

{ #category : 'variable utilites' }
RsrServiceSnapshot class >> reflectedVariablesFor: aService [

	| currentClass variables |
	variables := OrderedCollection new.
	currentClass := aService class templateClass.
	[currentClass == RsrService]
		whileFalse:
			[currentClass instVarNames reverseDo: [:each | variables addFirst: each].
			currentClass := currentClass superclass].
	^variables
]

{ #category : 'variable utilites' }
RsrServiceSnapshot class >> reflectedVariablesFor: aService
do: aBlock [

	self
		reflectedVariableIndicesFor: aService
		do: [:index | aBlock value: (aService instVarAt: index)]
]

{ #category : 'accessing' }
RsrServiceSnapshot >> createInstanceRegisteredIn: aConnection [

	| instance |
	instance := self shouldCreateServer
		ifTrue: [self templateClass serverClass basicNew]
		ifFalse: [self templateClass clientClass basicNew].
	aConnection
		_register: instance
		as: self sid.
	^instance
]

{ #category : 'encoding/decoding' }
RsrServiceSnapshot >> decode: aStream
using: aDecoder [

	| species instVarCount templateClass |
	species := aDecoder decodeControlWord: aStream.
	sid := aDecoder decodeControlWord: aStream.
	instVarCount := aDecoder decodeControlWord: aStream.
	targetClassName := (aDecoder decodeReference: aStream) resolve: nil.
	slots := OrderedCollection new: instVarCount.
	instVarCount timesRepeat: [slots add: (aDecoder decodeReference: aStream)]
]

{ #category : 'encoding/decoding' }
RsrServiceSnapshot >> encode: aStream
using: anEncoder [

	anEncoder
		encodeControlWord: self snapshotIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: self sid
		onto: aStream.
	anEncoder
		encodeControlWord: self slots size
		onto: aStream.
	self targetClassNameReference
		encode: aStream
		using: anEncoder.
	self slots do: [:each | each encode: aStream using: anEncoder]
]

{ #category : 'accessing' }
RsrServiceSnapshot >> instanceIn: aConnection [

	| instance |
	instance := aConnection
		serviceAt: self sid
		ifAbsent: [self createInstanceRegisteredIn: aConnection].
	self shouldCreateServer
		ifTrue: [aConnection _stronglyRetain: instance].
	^instance
]

{ #category : 'reifying' }
RsrServiceSnapshot >> reifyIn: aConnection [

	| instance referenceStream |
	"Instance should already be registered"
	instance := self instanceIn: aConnection.
	(self class reflectedVariablesFor: instance) size = slots size 
		ifFalse: [ self error: 'Incorrectly encoded instance detected' ].
	referenceStream := ReadStream on: slots.
	self class reflectedVariableIndicesFor: instance do: [ :index | 
		instance
			instVarAt: index
			put: (referenceStream next resolve: aConnection) ].
	^ instance
]

{ #category : 'testing' }
RsrServiceSnapshot >> shouldCreateServer [

	^self targetServiceType == #server
]

{ #category : 'accessing' }
RsrServiceSnapshot >> sid [

	^sid
]

{ #category : 'accessing' }
RsrServiceSnapshot >> sid: aServiceID [

	sid := aServiceID
]

{ #category : 'accessing' }
RsrServiceSnapshot >> slots [

	^slots
]

{ #category : 'accessing' }
RsrServiceSnapshot >> slots: anArrayOfReferences [

	slots := anArrayOfReferences
]

{ #category : 'snapshotting' }
RsrServiceSnapshot >> snapshot: aService [

	sid := aService _id.
	targetClassName := aService class isClientClass
		ifTrue: [aService class serverClassName]
		ifFalse: [aService class clientClassName].
	slots := OrderedCollection new.
	RsrServiceSnapshot
		reflectedVariablesFor: aService
		do: [:each | slots add: (RsrReference from: each)]
]

{ #category : 'accessing' }
RsrServiceSnapshot >> snapshotIdentifier [

	^0
]

{ #category : 'other' }
RsrServiceSnapshot >> targetClass [

	^RsrClassResolver classNamed: self targetClassName
]

{ #category : 'other' }
RsrServiceSnapshot >> targetClassName [

	^targetClassName
]

{ #category : 'other' }
RsrServiceSnapshot >> targetClassNameReference [

	^RsrSymbolReference from: self targetClassName
]

{ #category : 'accessing' }
RsrServiceSnapshot >> targetServiceType [

	^self targetClass isClientClass
		ifTrue: [#client]
		ifFalse: [#server]
]

{ #category : 'accessing' }
RsrServiceSnapshot >> templateClass [

	^self targetClass templateClass
]
