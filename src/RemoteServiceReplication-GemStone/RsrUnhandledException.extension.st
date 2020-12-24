Extension { #name : 'RsrUnhandledException' }

{ #category : '*remoteservicereplication-gemstone' }
RsrUnhandledException >> defaultAction [
	"Return an error to the controlling GCI or other debugger."

	| res |
	res := self _signalGciError.
	^ res == self
		ifTrue: [ nil ]
		ifFalse: [ res ]	
	"Answer nil to be consistent with resume
		unless GciContinueWith has provided a
		return value."
]
