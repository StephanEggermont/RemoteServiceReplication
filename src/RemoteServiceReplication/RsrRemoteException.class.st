Class {
	#name : 'RsrRemoteException',
	#superclass : 'RsrReasonService',
	#instVars : [
		'exceptionClassName',
		'tag',
		'messageText',
		'stack'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'accessing' }
RsrRemoteException class >> clientClassName [

	^#RsrRemoteExceptionClient
]

{ #category : 'instance creation' }
RsrRemoteException class >> from: anException [
	"Create an instance of the RemoteException reason.
	The client is used here because once we send it, we are done with it.
	The client will GC and the server will later GC. We don't care to have
	a server hanging around if we don't need it."

	| tag |
	(anException isKindOf: RsrUnhandledException)
		ifTrue: [ 
			| unhandledException |
			unhandledException := anException tag.
			tag := unhandledException tag
				ifNotNil: [ 
					[ unhandledException tag asString ]
						on: Error
						do: [ :ex | 
							ex
								return:
									'Unable to pack #tag containing an instance of '
										, unhandledException tag class name ] ].
			^ self clientClass new
				exceptionClassName: unhandledException class name;
				tag: tag;
				messageText: unhandledException messageText;
				stack: RsrProcessModel currentStackDump;
				yourself ]
		ifFalse: [ 
			tag := anException tag
				ifNotNil: [ 
					[ anException tag asString ]
						on: Error
						do: [ :ex | 
							ex
								return:
									'Unable to pack #tag containing an instance of ' , anException tag class name ] ].
			^ self clientClass new
				exceptionClassName: anException class name;
				tag: tag;
				messageText: anException messageText;
				stack: RsrProcessModel currentStackDump;
				yourself ]
]

{ #category : 'accessing' }
RsrRemoteException class >> serverClassName [

	^#RsrRemoteExceptionServer
]

{ #category : 'accessing' }
RsrRemoteException class >> templateClassName [

	^#RsrRemoteException
]

{ #category : 'accessing' }
RsrRemoteException >> exceptionClassName [

	^exceptionClassName
]

{ #category : 'accessing' }
RsrRemoteException >> exceptionClassName: aSymbol [

	exceptionClassName := aSymbol
]

{ #category : 'testing' }
RsrRemoteException >> isRemoteException [
	"This is a RemoteException reason"

	^true
]

{ #category : 'accessing' }
RsrRemoteException >> messageText [

	^messageText
]

{ #category : 'accessing' }
RsrRemoteException >> messageText: aString [

	messageText := aString
]

{ #category : 'accessing' }
RsrRemoteException >> stack [

	^stack
]

{ #category : 'accessing' }
RsrRemoteException >> stack: aString [

	stack := aString
]

{ #category : 'accessing' }
RsrRemoteException >> tag [

	^tag
]

{ #category : 'accessing' }
RsrRemoteException >> tag: aString [

	tag := aString
]
