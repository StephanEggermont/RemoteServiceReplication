Extension { #name : 'RsrForwarder' }

{ #category : '*remoteservicereplication' }
RsrForwarder >> _service: aService [

	_service := aService
]

{ #category : '*remoteservicereplication' }
RsrForwarder >> doesNotUnderstand: aMessage [

	^_service _connection
		_sendMessage: aMessage
		to: _service
]

{ #category : '*remoteservicereplication' }
RsrForwarder class >> on: anRsrObject [

	| instance |
	instance := self new.
	instance _service: anRsrObject.
	^instance
]
