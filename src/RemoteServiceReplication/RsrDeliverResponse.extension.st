Extension { #name : 'RsrDeliverResponse' }

{ #category : '*RemoteServiceReplication' }
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
