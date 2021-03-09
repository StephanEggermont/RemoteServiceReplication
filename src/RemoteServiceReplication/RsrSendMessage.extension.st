Extension { #name : 'RsrSendMessage' }

{ #category : '*RemoteServiceReplication' }
RsrSendMessage >> executeFor: aConnection [

	| resolver servicesStrongly receiver selector arguments messageSend |
	resolver := RsrRemotePromiseResolver for: self over: aConnection.
	"Must keep a strong reference to each service until the roots are referenced."
	[ 
	[ 
	servicesStrongly := self reifyAllIn: aConnection.
	receiver := self receiverReference resolve: aConnection.
	selector := self selectorReference resolve: aConnection.
	arguments := self argumentReferences collect: [ :each | 
		             each resolve: aConnection ].
	RsrProcessModel renameProcess: '', receiver class name, '>>', selector.
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

{ #category : '*RemoteServiceReplication' }
RsrSendMessage >> perform: aMessageSend
answerUsing: aResolver [

	[| result |
	aMessageSend receiver configureProcess.
	result := aMessageSend perform.
	RsrProcessModel configureFrameworkProcess.
	aResolver fulfill: result]
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
										RsrProcessModel configureFrameworkProcess.
										aResolver break: (RsrRemoteException from: debugEx).
										ex return].
			RsrProcessModel configureFrameworkProcess.
			aResolver hasResolved
				ifTrue: [ex return]
				ifFalse:
					[ex isResumable
						ifTrue: [[ex resume: debugResult] ensure: [aMessageSend receiver configureProcess]] "This needs to be a protected call."
						ifFalse:
							[aResolver break: (RsrRemoteException from: ex).
							ex return]]]
]
