Extension { #name : 'RsrSendMessage' }

{ #category : '*remoteservicereplication-gemstone' }
RsrSendMessage >> _registerDebugActionHandler [
	GsProcess _currentProcess
		debugActionHandler: [ :ex | RsrUnhandledException signal: ex ]
]

{ #category : 'accessing' }
RsrSendMessage >> unhandledExceptionClass [
	^ RsrUnhandledException
]
