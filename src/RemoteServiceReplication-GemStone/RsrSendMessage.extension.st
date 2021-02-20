Extension { #name : 'RsrSendMessage' }

{ #category : '*remoteservicereplication-gemstone' }
RsrSendMessage >> _registerDebugActionHandler [
	GsProcess currentProcess
		debugActionHandler: [ :ex | RsrUnhandledException signal: ex ]
]

{ #category : '*remoteservicereplication-gemstone' }
RsrSendMessage >> unhandledExceptionClass [
	^ RsrUnhandledException
]
