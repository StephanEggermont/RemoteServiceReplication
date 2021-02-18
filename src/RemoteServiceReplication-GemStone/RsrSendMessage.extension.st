Extension { #name : 'RsrSendMessage' }

{ #category : '*remoteservicereplication-gemstone' }
RsrSendMessage >> _registerDebugActionHandler [
	GsProcess _currentProcess
		debugActionHandler: [ :ex | RsrUnhandledException signal: ex ]
]

{ #category : '*remoteservicereplication-gemstone' }
RsrSendMessage >> unhandledExceptionClass [
	^ RsrUnhandledException
]
