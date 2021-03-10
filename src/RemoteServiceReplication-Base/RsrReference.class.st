"
RsrReference

Reference instances are created as a by-product of freezing the state of a Service. This typically happens when the framework creates a SendMessage or DeliverResponse command.

The Reference represents and is able to resolve the object it represents. In some cases, the value is immediate. In the case of ServiceReference, the stored Service Identifier is resolved in the context of a connection.

Resolving must occur in the context of a Connection. Though this is true, the minimal information necessary for a Reference to resolve is the Registry.

SendMessage and DeliverResponse store fields like receiver or result as references. They are resolved when the Command is set to execute.

Collaborators:
- ServiceSnapshot
- Encoder
- Decoder
"
Class {
	#name : 'RsrReference',
	#superclass : 'RsrObject',
	#classInstVars : [
		'referenceMapping'
	],
	#category : 'RemoteServiceReplication-Base'
}

{ #category : 'analyzing' }
RsrReference class >> analyze: anObject
using: anAnalyzer [

	^self subclassResponsibility
]

{ #category : 'instance creation' }
RsrReference class >> from: anObject [

	| referenceClass |
	referenceClass := self referenceClassFor: anObject.
	^referenceClass from: anObject
]

{ #category : 'accessing' }
RsrReference class >> referenceMapping [

	^referenceMapping
]

{ #category : 'accessing' }
RsrReference class >> typeIdentifier [

	^self subclassResponsibility
]

{ #category : 'resolving' }
RsrReference >> resolve: aConnection [
	"Resolve the reference in the context of the provided Connection."

	^self subclassResponsibility
]

{ #category : 'accessing' }
RsrReference >> typeIdentifier [

	^self class typeIdentifier
]
