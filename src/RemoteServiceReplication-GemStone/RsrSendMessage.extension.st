Extension { #name : 'RsrSendMessage' }

{ #category : '*remoteservicereplication-gemstone' }
RsrSendMessage >> _registerDebugActionBlock [
	GsProcess _current
		debugActionBlock: [ :ex | RsrUnhandledException signal: ex ]
]
