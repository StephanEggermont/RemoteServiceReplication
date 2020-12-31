! Copyright (C) GemTalk Systems 1986-2020.  All Rights Reserved.
! Class Declarations
! Generated file, do not Edit

doit
(Error
	subclass: 'RsrError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrError
removeallclassmethods RsrError

doit
(RsrError
	subclass: 'RsrAlreadyRegistered'
	instVarNames: #( service intendedConnection )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrAlreadyRegistered
removeallclassmethods RsrAlreadyRegistered

doit
(RsrError
	subclass: 'RsrConnectionFailed'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrConnectionFailed
removeallclassmethods RsrConnectionFailed

doit
(RsrError
	subclass: 'RsrNonresumableError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrNonresumableError
removeallclassmethods RsrNonresumableError

doit
(RsrError
	subclass: 'RsrPromiseError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrPromiseError
removeallclassmethods RsrPromiseError

doit
(RsrPromiseError
	subclass: 'RsrAlreadyResolved'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrAlreadyResolved
removeallclassmethods RsrAlreadyResolved

doit
(RsrPromiseError
	subclass: 'RsrBrokenPromise'
	instVarNames: #( reason )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrBrokenPromise
removeallclassmethods RsrBrokenPromise

doit
(RsrError
	subclass: 'RsrRemoteError'
	instVarNames: #( originalClassName stack )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrRemoteError
removeallclassmethods RsrRemoteError

doit
(RsrError
	subclass: 'RsrResumableError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrResumableError
removeallclassmethods RsrResumableError

doit
(RsrError
	subclass: 'RsrSocketError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrSocketError
removeallclassmethods RsrSocketError

doit
(RsrSocketError
	subclass: 'RsrConnectFailed'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrConnectFailed
removeallclassmethods RsrConnectFailed

doit
(RsrSocketError
	subclass: 'RsrInvalidBind'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrInvalidBind
removeallclassmethods RsrInvalidBind

doit
(RsrSocketError
	subclass: 'RsrSocketClosed'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrSocketClosed
removeallclassmethods RsrSocketClosed

doit
(RsrError
	subclass: 'RsrUnknownClass'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrUnknownClass
removeallclassmethods RsrUnknownClass

doit
(RsrError
	subclass: 'RsrUnknownSID'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrUnknownSID
removeallclassmethods RsrUnknownSID

doit
(RsrError
	subclass: 'RsrUnsupportedObject'
	instVarNames: #( object )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrUnsupportedObject
removeallclassmethods RsrUnsupportedObject

doit
(RsrError
	subclass: 'RsrWaitForConnectionCancelled'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrWaitForConnectionCancelled
removeallclassmethods RsrWaitForConnectionCancelled

doit
(nil
	subclass: 'RsrProtoObject'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrProtoObject
removeallclassmethods RsrProtoObject

doit
(RsrProtoObject
	subclass: 'RsrForwarder'
	instVarNames: #( _service )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrForwarder
removeallclassmethods RsrForwarder

doit
(Object
	subclass: 'RsrObject'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrObject
removeallclassmethods RsrObject

doit
(RsrObject
	subclass: 'RsrAbstractReason'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'The superclass for Reasons generated for breaking Promise instances generated by the framework.

If the reason will be replicated, the Reason should subclass RsrReasonService.';
		immediateInvariant.
true.
%

removeallmethods RsrAbstractReason
removeallclassmethods RsrAbstractReason

doit
(RsrAbstractReason
	subclass: 'RsrConnectionClosed'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrConnectionClosed
removeallclassmethods RsrConnectionClosed

doit
(RsrAbstractReason
	subclass: 'RsrDecodingRaisedException'
	instVarNames: #( exception )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrDecodingRaisedException
removeallclassmethods RsrDecodingRaisedException

doit
(RsrObject
	subclass: 'RsrAbstractService'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrAbstractService
removeallclassmethods RsrAbstractService

doit
(RsrAbstractService
	subclass: 'RsrService'
	instVarNames: #( _id _connection remoteSelf )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'I represent a class of Objects that know offer Rsr Services.';
		immediateInvariant.
true.
%

removeallmethods RsrService
removeallclassmethods RsrService

doit
(RsrService
	subclass: 'RsrConcurrentTestService'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrConcurrentTestService
removeallclassmethods RsrConcurrentTestService

doit
(RsrConcurrentTestService
	subclass: 'RsrConcurrentTestClient'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrConcurrentTestClient
removeallclassmethods RsrConcurrentTestClient

doit
(RsrConcurrentTestService
	subclass: 'RsrConcurrentTestServer'
	instVarNames: #( counter semaphore stashedProcess )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrConcurrentTestServer
removeallclassmethods RsrConcurrentTestServer

doit
(RsrService
	subclass: 'RsrInstrumentedService'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		comment: 'No class-specific documentation for RsrInstrumentedService, hierarchy is:
Object
  RsrObject
    RsrAbstractService
      RsrService( _id _connection remoteSelf)
        RsrInstrumentedService( sharedVariable preUpdateAction postUpdateAction)
';
		immediateInvariant.
true.
%

removeallmethods RsrInstrumentedService
removeallclassmethods RsrInstrumentedService

doit
(RsrInstrumentedService
	subclass: 'RsrInstrumentedClient'
	instVarNames: #( preUpdateCount postUpdateCount )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		comment: 'No class-specific documentation for RsrInstrumentedClient, hierarchy is:
Object
  RsrObject
    RsrAbstractService
      RsrService( _id _connection remoteSelf)
        RsrInstrumentedService
          RsrInstrumentedClient( preUpdateAction postUpdateAction)
';
		immediateInvariant.
true.
%

removeallmethods RsrInstrumentedClient
removeallclassmethods RsrInstrumentedClient

doit
(RsrInstrumentedService
	subclass: 'RsrInstrumentedServer'
	instVarNames: #( preUpdateCount postUpdateCount action )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		comment: 'No class-specific documentation for RsrInstrumentedServer, hierarchy is:
Object
  RsrObject
    RsrAbstractService
      RsrService( _id _connection remoteSelf)
        RsrInstrumentedService
          RsrInstrumentedServer( preUpdateAction postUpdateAction)
';
		immediateInvariant.
true.
%

removeallmethods RsrInstrumentedServer
removeallclassmethods RsrInstrumentedServer

doit
(RsrService
	subclass: 'RsrMockService'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrMockService
removeallclassmethods RsrMockService

doit
(RsrMockService
	subclass: 'RsrMockClient'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrMockClient
removeallclassmethods RsrMockClient

doit
(RsrMockService
	subclass: 'RsrMockServer'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrMockServer
removeallclassmethods RsrMockServer

doit
(RsrService
	subclass: 'RsrReasonService'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'This Service services as an abstract superclass for various Promise break reasons that must support replication.';
		immediateInvariant.
true.
%

removeallmethods RsrReasonService
removeallclassmethods RsrReasonService

doit
(RsrReasonService
	subclass: 'RsrRemoteException'
	instVarNames: #( exceptionClassName tag messageText stack )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrRemoteException
removeallclassmethods RsrRemoteException

doit
(RsrRemoteException
	subclass: 'RsrRemoteExceptionClient'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrRemoteExceptionClient
removeallclassmethods RsrRemoteExceptionClient

doit
(RsrRemoteException
	subclass: 'RsrRemoteExceptionServer'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrRemoteExceptionServer
removeallclassmethods RsrRemoteExceptionServer

doit
(RsrService
	subclass: 'RsrReflectedVariableTestServiceA'
	instVarNames: #( varA )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrReflectedVariableTestServiceA
removeallclassmethods RsrReflectedVariableTestServiceA

doit
(RsrReflectedVariableTestServiceA
	subclass: 'RsrReflectedVariableTestServiceB'
	instVarNames: #( varB )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrReflectedVariableTestServiceB
removeallclassmethods RsrReflectedVariableTestServiceB

doit
(RsrReflectedVariableTestServiceB
	subclass: 'RsrReflectedVariableTestClient'
	instVarNames: #( private )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrReflectedVariableTestClient
removeallclassmethods RsrReflectedVariableTestClient

doit
(RsrReflectedVariableTestServiceB
	subclass: 'RsrReflectedVariableTestServer'
	instVarNames: #( private )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrReflectedVariableTestServer
removeallclassmethods RsrReflectedVariableTestServer

doit
(RsrService
	subclass: 'RsrRemoteAction'
	instVarNames: #( sharedVariable )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrRemoteAction
removeallclassmethods RsrRemoteAction

doit
(RsrRemoteAction
	subclass: 'RsrRemoteActionClient'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrRemoteActionClient
removeallclassmethods RsrRemoteActionClient

doit
(RsrRemoteAction
	subclass: 'RsrRemoteActionServer'
	instVarNames: #( action debugHandler preUpdateHandler postUpdateHandler )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrRemoteActionServer
removeallclassmethods RsrRemoteActionServer

doit
(RsrService
	subclass: 'RsrReturnUnknownService'
	instVarNames: #( sharedVariable )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrReturnUnknownService
removeallclassmethods RsrReturnUnknownService

doit
(RsrReturnUnknownService
	subclass: 'RsrKnownServer'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrKnownServer
removeallclassmethods RsrKnownServer

doit
(RsrService
	subclass: 'RsrSameTemplateAndClientService'
	instVarNames: #( replicated1 replicated2 )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSameTemplateAndClientService
removeallclassmethods RsrSameTemplateAndClientService

doit
(RsrSameTemplateAndClientService
	subclass: 'RsrDifferentServerService'
	instVarNames: #( private1 )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrDifferentServerService
removeallclassmethods RsrDifferentServerService

doit
(RsrService
	subclass: 'RsrSendUnknownService'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSendUnknownService
removeallclassmethods RsrSendUnknownService

doit
(RsrSendUnknownService
	subclass: 'RsrKnownClient'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrKnownClient
removeallclassmethods RsrKnownClient

doit
(RsrService
	subclass: 'RsrServiceFactory'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrServiceFactory
removeallclassmethods RsrServiceFactory

doit
(RsrServiceFactory
	subclass: 'RsrServiceFactoryClient'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrServiceFactoryClient
removeallclassmethods RsrServiceFactoryClient

doit
(RsrServiceFactory
	subclass: 'RsrServiceFactoryServer'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrServiceFactoryServer
removeallclassmethods RsrServiceFactoryServer

doit
(RsrService
	subclass: 'RsrServiceNoInstVars'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrServiceNoInstVars
removeallclassmethods RsrServiceNoInstVars

doit
(RsrServiceNoInstVars
	subclass: 'RsrClientNoInstVars'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrClientNoInstVars
removeallclassmethods RsrClientNoInstVars

doit
(RsrServiceNoInstVars
	subclass: 'RsrServerNoInstVars'
	instVarNames: #( marker )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrServerNoInstVars
removeallclassmethods RsrServerNoInstVars

doit
(RsrService
	subclass: 'RsrServiceReferenceService'
	instVarNames: #( service )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrServiceReferenceService
removeallclassmethods RsrServiceReferenceService

doit
(RsrServiceReferenceService
	subclass: 'RsrClientReferenceService'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrClientReferenceService
removeallclassmethods RsrClientReferenceService

doit
(RsrServiceReferenceService
	subclass: 'RsrServerReferenceService'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrServerReferenceService
removeallclassmethods RsrServerReferenceService

doit
(RsrService
	subclass: 'RsrTestService'
	instVarNames: #( sharedVariable )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrTestService
removeallclassmethods RsrTestService

doit
(RsrTestService
	subclass: 'RsrClientTestService'
	instVarNames: #( privateVariable )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrClientTestService
removeallclassmethods RsrClientTestService

doit
(RsrTestService
	subclass: 'RsrServerTestService'
	instVarNames: #( privateVariable )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrServerTestService
removeallclassmethods RsrServerTestService

doit
(RsrService
	subclass: 'RsrValueHolder'
	instVarNames: #( value )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrValueHolder
removeallclassmethods RsrValueHolder

doit
(RsrValueHolder
	subclass: 'RsrValueHolderClient'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrValueHolderClient
removeallclassmethods RsrValueHolderClient

doit
(RsrValueHolder
	subclass: 'RsrValueHolderServer'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrValueHolderServer
removeallclassmethods RsrValueHolderServer

doit
(RsrObject
	subclass: 'RsrBufferedSocketStream'
	instVarNames: #( stream outBuffer writePosition nextToWrite )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrBufferedSocketStream
removeallclassmethods RsrBufferedSocketStream

doit
(RsrObject
	subclass: 'RsrChannel'
	instVarNames: #( connection )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrChannel, hierarchy is:
Object
  RsrObject
    RsrChannel
';
		immediateInvariant.
true.
%

removeallmethods RsrChannel
removeallclassmethods RsrChannel

doit
(RsrChannel
	subclass: 'RsrInMemoryChannel'
	instVarNames: #( inQueue outQueue drainProcess )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'Example usage:

	| aQueue bQueue channelA channelB |
	aQueue := SharedQueue new.
	bQueue := SharedQueue new.
	channelA := RsrInMemoryChannel
		inQueue: aQueue
		outQueue: bQueue.
	channelB := RsrInMemoryChannel
		inQueue: bQueue
		outQueue: aQueue.
	connectionA := RsrConnection
		channel: channelA
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	connectionB := RsrConnection
		channel: channelB
		transactionSpigot: RsrThreadSafeNumericSpigot naturals negated
		oidSpigot: RsrThreadSafeNumericSpigot naturals negated.
	connectionA open.
	connectionB open.';
		immediateInvariant.
true.
%

removeallmethods RsrInMemoryChannel
removeallclassmethods RsrInMemoryChannel

doit
(RsrChannel
	subclass: 'RsrNullChannel'
	instVarNames: #( lastCommand )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrNullChannel
removeallclassmethods RsrNullChannel

doit
(RsrChannel
	subclass: 'RsrSocketChannel'
	instVarNames: #( sink source socket stream )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrSocketChannel, hierarchy is:
Object
  RsrObject
    RsrChannel
      RsrSocketChannel( reader writer socket stream)
';
		immediateInvariant.
true.
%

removeallmethods RsrSocketChannel
removeallclassmethods RsrSocketChannel

doit
(RsrObject
	subclass: 'RsrClassResolver'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrClassResolver
removeallclassmethods RsrClassResolver

doit
(RsrObject
	subclass: 'RsrCodec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrCodec
removeallclassmethods RsrCodec

doit
(RsrCodec
	subclass: 'RsrDecoder'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrDecoder, hierarchy is:
Object
  RsrObject
    RsrCodec
      RsrDecoder( registry connection decodeCommandMap)
';
		immediateInvariant.
true.
%

removeallmethods RsrDecoder
removeallclassmethods RsrDecoder

doit
(RsrCodec
	subclass: 'RsrEncoder'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrEncoder
removeallclassmethods RsrEncoder

doit
(RsrObject
	subclass: 'RsrCommand'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrCommand, hierarchy is:
Object
  RsrObject
    RsrCommand( encoding)
';
		immediateInvariant.
true.
%

removeallmethods RsrCommand
removeallclassmethods RsrCommand

doit
(RsrCommand
	subclass: 'RsrMessagingCommand'
	instVarNames: #( snapshots transaction )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrMessagingCommand
removeallclassmethods RsrMessagingCommand

doit
(RsrMessagingCommand
	subclass: 'RsrDeliverResponse'
	instVarNames: #( responseReference )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrDeliverResponse, hierarchy is:
Object
  RsrObject
    RsrCommand( encoding)
      RsrDeliverResponse( transaction response roots retainList)
';
		immediateInvariant.
true.
%

removeallmethods RsrDeliverResponse
removeallclassmethods RsrDeliverResponse

doit
(RsrMessagingCommand
	subclass: 'RsrSendMessage'
	instVarNames: #( receiverReference selectorReference argumentReferences )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrSendMessage, hierarchy is:
Object
  RsrObject
    RsrCommand( encoding)
      RsrSendMessage( transaction receiver selector arguments retainList)
';
		immediateInvariant.
true.
%

removeallmethods RsrSendMessage
removeallclassmethods RsrSendMessage

doit
(RsrCommand
	subclass: 'RsrReleaseServices'
	instVarNames: #( sids )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrReleaseServices, hierarchy is:
Object
  RsrObject
    RsrCommand( encoding)
      RsrReleaseServices( oids)
';
		immediateInvariant.
true.
%

removeallmethods RsrReleaseServices
removeallclassmethods RsrReleaseServices

doit
(RsrObject
	subclass: 'RsrConnection'
	instVarNames: #( channel transactionSpigot oidSpigot dispatchQueue log registry pendingMessages serviceFactory closeSemaphore specification )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrConnection, hierarchy is:
Object
  RsrObject
    RsrConnection( isOpen transactionSpigot commandWriter commandReader registry objectCache socket stream pendingMessages dispatcher oidSpigot serviceFactory log closeSemaphore)
';
		immediateInvariant.
true.
%

removeallmethods RsrConnection
removeallclassmethods RsrConnection

doit
(RsrObject
	subclass: 'RsrConnectionSpecification'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrConnectionSpecification
removeallclassmethods RsrConnectionSpecification

doit
(RsrConnectionSpecification
	subclass: 'RsrInternalConnectionSpecification'
	instVarNames: #( connectionA connectionB )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrInternalConnectionSpecification
removeallclassmethods RsrInternalConnectionSpecification

doit
(RsrInternalConnectionSpecification
	subclass: 'RsrInMemoryConnectionSpecification'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrInMemoryConnectionSpecification
removeallclassmethods RsrInMemoryConnectionSpecification

doit
(RsrInternalConnectionSpecification
	subclass: 'RsrInternalSocketConnectionSpecification'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrInternalSocketConnectionSpecification
removeallclassmethods RsrInternalSocketConnectionSpecification

doit
(RsrConnectionSpecification
	subclass: 'RsrSocketConnectionSpecification'
	instVarNames: #( host port )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'This class is abstract and defines the interface for manufacturing RsrConnection instances which are connected to a peer.

Specialized subclasses are reponsible for either listening for or initiating connections with a peer.';
		immediateInvariant.
true.
%

removeallmethods RsrSocketConnectionSpecification
removeallclassmethods RsrSocketConnectionSpecification

doit
(RsrSocketConnectionSpecification
	subclass: 'RsrAcceptConnection'
	instVarNames: #( listener )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'This class is responsible to listen for an incoming RsrConnection connection. Once a Socket has established, an RsrConnection is created and returned via the #connect message.

The following will wait for a connection on port 51820. Once a socket connection is accepted, it will stop listening on the provided port. The established socket is then used in the creation of an RsrConnection. The new RsrConnection is returned as a result of #connect.

| acceptor |
acceptor := RsrAcceptConnection port: 51820.
^acceptor connect';
		immediateInvariant.
true.
%

removeallmethods RsrAcceptConnection
removeallclassmethods RsrAcceptConnection

doit
(RsrSocketConnectionSpecification
	subclass: 'RsrInitiateConnection'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'This class is responsible for initating a new RsrConnection. Sending #connect will result in an attempt to connect to the specified host and port. #connect is responsible for initating the attempted connection. If successful, an instance of RsrConnection is returned as a result.

Example: 

| initiator |
initiator := RsrInitiateConnection
	host: ''127.0.0.1''
	port: 51820.
^initiator connect';
		immediateInvariant.
true.
%

removeallmethods RsrInitiateConnection
removeallclassmethods RsrInitiateConnection

doit
(RsrObject
	subclass: 'RsrDateAndTime'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrDateAndTime
removeallclassmethods RsrDateAndTime

doit
(RsrObject
	subclass: 'RsrDispatchQueue'
	instVarNames: #( queue process isRunning )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'DispatchQueue

This class serves one purpose -- evaluate actions serially. Certain parts of the framework require this. For instance, Command processing needs to happen in the order it was received. (Note, this is not true of SendMessage commands which should fork the actual message send.)


Protections

This class should provide some low-level #on:do:. I don''t yet know what form this should take. I suspect it should coordinate w/ the Connection but I will leave this until I find an example error case.';
		immediateInvariant.
true.
%

removeallmethods RsrDispatchQueue
removeallclassmethods RsrDispatchQueue

doit
(RsrObject
	subclass: 'RsrEnvironment'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrEnvironment
removeallclassmethods RsrEnvironment

doit
(RsrObject
	subclass: 'RsrEphemeron'
	instVarNames: #( key mournAction )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrEphemeron
removeallclassmethods RsrEphemeron

doit
(RsrObject
	subclass: 'RsrGarbageCollector'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrGarbageCollector
removeallclassmethods RsrGarbageCollector

doit
(RsrObject
	subclass: 'RsrLog'
	instVarNames: #( verbosity sinks )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrLog
removeallclassmethods RsrLog

doit
(RsrObject
	subclass: 'RsrLogSink'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrLogSink
removeallclassmethods RsrLogSink

doit
(RsrLogSink
	subclass: 'RsrCustomSink'
	instVarNames: #( action )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrCustomSink
removeallclassmethods RsrCustomSink

doit
(RsrLogSink
	subclass: 'RsrTranscriptSink'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrTranscriptSink
removeallclassmethods RsrTranscriptSink

doit
(RsrObject
	subclass: 'RsrLogWithPrefix'
	instVarNames: #( prefix log )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrLogWithPrefix
removeallclassmethods RsrLogWithPrefix

doit
(RsrObject
	subclass: 'RsrMessageSend'
	instVarNames: #( receiver selector arguments )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrMessageSend
removeallclassmethods RsrMessageSend

doit
(RsrObject
	subclass: 'RsrNumericSpigot'
	instVarNames: #( current step )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrNumericSpigot
removeallclassmethods RsrNumericSpigot

doit
(RsrNumericSpigot
	subclass: 'RsrThreadSafeNumericSpigot'
	instVarNames: #( mutex )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrThreadSafeNumericSpigot
removeallclassmethods RsrThreadSafeNumericSpigot

doit
(RsrObject
	subclass: 'RsrPendingMessage'
	instVarNames: #( services promise )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrPendingMessage
removeallclassmethods RsrPendingMessage

doit
(RsrObject
	subclass: 'RsrPromise'
	instVarNames: #( mutex value state resolvedMutex resolutionActions )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'Purpose: Provide a simple Promise interface for use in RSR.

A Promise may be in two high level states -- unresolved and resolved. Resolving a promise means either breaking or fulfilling the promise. Any users of the Notification Interface will be notified of the resolution. See individual methods for details.

Resolution Interface:
- #break:
- #fulfill:

Notification Interface:
- #when:catch:
- #wait
- #value

Example Usage:

```
	| promise |
	promise := Promise new.
	promise
		when: [:anObject | Transcript show: ''Promise fulfilled to: '', anObject asString; cr]
		catch: [:reason | Transcript show: ''Promise broken because of '', reason asString; cr].
	"Time passes"
	promise fulfill: Object new
```

```
	| promise |
	promise := Promise new.
	self runAsynCalculationThenFulfill: promise.
	promise wait.
```';
		immediateInvariant.
true.
%

removeallmethods RsrPromise
removeallclassmethods RsrPromise

doit
(RsrObject
	subclass: 'RsrPromiseResolutionAction'
	instVarNames: #( when catch )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrPromiseResolutionAction
removeallclassmethods RsrPromiseResolutionAction

doit
(RsrObject
	subclass: 'RsrReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #( referenceMapping )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'RsrReference

Reference instances are created as a by-product of freezing the state of a Service. This typically happens when the framework creates a SendMessage or DeliverResponse command.

The Reference represents and is able to resolve the object is it represents. In some cases, the value is immediate. In the case of ServiceReference, the stored Service Identifier is resolved in the context of a connection.

Resolving must occur in the context of a Connection. Though this is true, the minimal information necessary for a Reference to resolve is the Registry.

SendMessage and DeliverResponse store fields like receiver or result as references. They are resolved when the Command is set to execute.

Collaborators:
- ServiceSnapshot
- Encoder
- Decoder';
		immediateInvariant.
true.
%

removeallmethods RsrReference
removeallclassmethods RsrReference

doit
(RsrReference
	subclass: 'RsrImmediateReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrImmediateReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference( value)
';
		immediateInvariant.
true.
%

removeallmethods RsrImmediateReference
removeallclassmethods RsrImmediateReference

doit
(RsrImmediateReference
	subclass: 'RsrBooleanReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrBooleanReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrBooleanReference
';
		immediateInvariant.
true.
%

removeallmethods RsrBooleanReference
removeallclassmethods RsrBooleanReference

doit
(RsrBooleanReference
	subclass: 'RsrFalseReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrFalseReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrFalseReference
';
		immediateInvariant.
true.
%

removeallmethods RsrFalseReference
removeallclassmethods RsrFalseReference

doit
(RsrBooleanReference
	subclass: 'RsrTrueReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrTrueReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference( value)
        RsrTrueReference
';
		immediateInvariant.
true.
%

removeallmethods RsrTrueReference
removeallclassmethods RsrTrueReference

doit
(RsrImmediateReference
	subclass: 'RsrNilReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrNilReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrNilReference
';
		immediateInvariant.
true.
%

removeallmethods RsrNilReference
removeallclassmethods RsrNilReference

doit
(RsrImmediateReference
	subclass: 'RsrValueReference'
	instVarNames: #( intermediate )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrValueReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
';
		immediateInvariant.
true.
%

removeallmethods RsrValueReference
removeallclassmethods RsrValueReference

doit
(RsrValueReference
	subclass: 'RsrByteArrayReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrByteArrayReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
          RsrByteArrayReference
';
		immediateInvariant.
true.
%

removeallmethods RsrByteArrayReference
removeallclassmethods RsrByteArrayReference

doit
(RsrValueReference
	subclass: 'RsrCharacterArrayReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrCharacterArrayReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrCharacterArrayReference
';
		immediateInvariant.
true.
%

removeallmethods RsrCharacterArrayReference
removeallclassmethods RsrCharacterArrayReference

doit
(RsrCharacterArrayReference
	subclass: 'RsrStringReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrStringReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrCharacterArrayReference( value)
          RsrStringReference
';
		immediateInvariant.
true.
%

removeallmethods RsrStringReference
removeallclassmethods RsrStringReference

doit
(RsrCharacterArrayReference
	subclass: 'RsrSymbolReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrSymbolReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrCharacterArrayReference( value)
          RsrSymbolReference
';
		immediateInvariant.
true.
%

removeallmethods RsrSymbolReference
removeallclassmethods RsrSymbolReference

doit
(RsrValueReference
	subclass: 'RsrCharacterReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrCharacterReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
          RsrCharacterReference
';
		immediateInvariant.
true.
%

removeallmethods RsrCharacterReference
removeallclassmethods RsrCharacterReference

doit
(RsrValueReference
	subclass: 'RsrCollectionReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrCollectionReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
          RsrCollectionReference
';
		immediateInvariant.
true.
%

removeallmethods RsrCollectionReference
removeallclassmethods RsrCollectionReference

doit
(RsrCollectionReference
	subclass: 'RsrArrayReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrArrayReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
          RsrArrayReference
';
		immediateInvariant.
true.
%

removeallmethods RsrArrayReference
removeallclassmethods RsrArrayReference

doit
(RsrCollectionReference
	subclass: 'RsrDictionaryReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrDictionaryReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
          RsrDictionaryReference
';
		immediateInvariant.
true.
%

removeallmethods RsrDictionaryReference
removeallclassmethods RsrDictionaryReference

doit
(RsrCollectionReference
	subclass: 'RsrOrderedCollectionReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrOrderedCollectionReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
          RsrOrderedCollectionReference
';
		immediateInvariant.
true.
%

removeallmethods RsrOrderedCollectionReference
removeallclassmethods RsrOrderedCollectionReference

doit
(RsrCollectionReference
	subclass: 'RsrSetReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrSetReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
          RsrSetReference
';
		immediateInvariant.
true.
%

removeallmethods RsrSetReference
removeallclassmethods RsrSetReference

doit
(RsrValueReference
	subclass: 'RsrDateAndTimeReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrDateAndTimeReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrValueReference( value)
          RsrDateAndTimeReference
';
		immediateInvariant.
true.
%

removeallmethods RsrDateAndTimeReference
removeallclassmethods RsrDateAndTimeReference

doit
(RsrValueReference
	subclass: 'RsrDoubleReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrDoubleReference
removeallclassmethods RsrDoubleReference

doit
(RsrValueReference
	subclass: 'RsrIntegerReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrIntegerReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrIntegerReference( value)
';
		immediateInvariant.
true.
%

removeallmethods RsrIntegerReference
removeallclassmethods RsrIntegerReference

doit
(RsrIntegerReference
	subclass: 'RsrNegativeIntegerReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrNegativeIntegerReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrIntegerReference( value)
          RsrNegativeIntegerReference
';
		immediateInvariant.
true.
%

removeallmethods RsrNegativeIntegerReference
removeallclassmethods RsrNegativeIntegerReference

doit
(RsrIntegerReference
	subclass: 'RsrPositiveIntegerReference'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrPositiveIntegerReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrImmediateReference
        RsrIntegerReference( value)
          RsrPositiveIntegerReference
';
		immediateInvariant.
true.
%

removeallmethods RsrPositiveIntegerReference
removeallclassmethods RsrPositiveIntegerReference

doit
(RsrReference
	subclass: 'RsrServiceReference'
	instVarNames: #( sid )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		comment: 'No class-specific documentation for RsrServiceReference, hierarchy is:
Object
  RsrObject
    RsrReference
      RsrServiceReference( sid)
';
		immediateInvariant.
true.
%

removeallmethods RsrServiceReference
removeallclassmethods RsrServiceReference

doit
(RsrObject
	subclass: 'RsrRegistryEntry'
	instVarNames: #( ephemeron strongStorage )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrRegistryEntry
removeallclassmethods RsrRegistryEntry

doit
(RsrObject
	subclass: 'RsrRemotePromiseResolver'
	instVarNames: #( mutex sendMessage connection extraRoots hasResolved )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'This class is responsible for taking breaking or fulfilling its associated Promise. The Promise exists in the remote RSR instance.

This class may be mutated outside of the thread which created it. Therefore, it contains a protection mutex to ensure consistency.';
		immediateInvariant.
true.
%

removeallmethods RsrRemotePromiseResolver
removeallclassmethods RsrRemotePromiseResolver

doit
(RsrObject
	subclass: 'RsrScientist'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrScientist
removeallclassmethods RsrScientist

doit
(RsrObject
	subclass: 'RsrServiceEphemeron'
	instVarNames: #( service action )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrServiceEphemeron
removeallclassmethods RsrServiceEphemeron

doit
(RsrObject
	subclass: 'RsrServiceSnapshot'
	instVarNames: #( sid targetClassName slots )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'RsrServiceSnapshot

When a SendMessage or DeliverResponse command is processed, the entire transition closure of the MessageSend/Response is analyzed.

A Snapshot of each Service found during this process is taken. The slots of the Service that need to be replicated are stored in the ServiceSnapshot as references.

In addition, information about the template and service is stored. This allows the peer to reify the correct type of Service. For instance, a local Client will be a Server remotely. A local Server will become a remote Client.

Collaborators:
- Encoder
- Decoder
- Reference';
		immediateInvariant.
true.
%

removeallmethods RsrServiceSnapshot
removeallclassmethods RsrServiceSnapshot

doit
(RsrObject
	subclass: 'RsrSignalErrorInAsString'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSignalErrorInAsString
removeallclassmethods RsrSignalErrorInAsString

doit
(RsrObject
	subclass: 'RsrSnapshotAnalysis'
	instVarNames: #( roots snapshots connection analyzedObjects )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrSnapshotAnalysis, hierarchy is:
Object
  RsrObject
    RsrSnapshotAnalysis( roots snapshots inFlight connection)
';
		immediateInvariant.
true.
%

removeallmethods RsrSnapshotAnalysis
removeallclassmethods RsrSnapshotAnalysis

doit
(RsrObject
	subclass: 'RsrSocket'
	instVarNames: #( nativeSocket )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-GemStone';
		immediateInvariant.
true.
%

removeallmethods RsrSocket
removeallclassmethods RsrSocket

doit
(RsrObject
	subclass: 'RsrSocketChannelLoop'
	instVarNames: #( process channel state )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrEventLoop, hierarchy is:
Object
  RsrObject
    RsrEventLoop( process connection state)
';
		immediateInvariant.
true.
%

removeallmethods RsrSocketChannelLoop
removeallclassmethods RsrSocketChannelLoop

doit
(RsrSocketChannelLoop
	subclass: 'RsrCommandSink'
	instVarNames: #( queue )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'No class-specific documentation for RsrCommandSink, hierarchy is:
Object
  RsrObject
    RsrEventLoop( process connection state)
      RsrCommandSink( queue)
';
		immediateInvariant.
true.
%

removeallmethods RsrCommandSink
removeallclassmethods RsrCommandSink

doit
(RsrSocketChannelLoop
	subclass: 'RsrCommandSource'
	instVarNames: #( decoder )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrCommandSource
removeallclassmethods RsrCommandSource

doit
(RsrObject
	subclass: 'RsrSocketPair'
	instVarNames: #( firstSocket secondSocket )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketPair
removeallclassmethods RsrSocketPair

doit
(RsrObject
	subclass: 'RsrSocketStream'
	instVarNames: #( socket )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrSocketStream
removeallclassmethods RsrSocketStream

doit
(RsrObject
	subclass: 'RsrStream'
	instVarNames: #( stream )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		immediateInvariant.
true.
%

removeallmethods RsrStream
removeallclassmethods RsrStream

doit
(RsrObject
	subclass: 'RsrThreadSafeDictionary'
	instVarNames: #( mutex map )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication';
		comment: 'I maintain the associations between locally stored objects and their remote counterparts.';
		immediateInvariant.
true.
%

removeallmethods RsrThreadSafeDictionary
removeallclassmethods RsrThreadSafeDictionary

doit
(Object
	subclass: 'RsrProcessModel'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #( current )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Base';
		immediateInvariant.
true.
%

removeallmethods RsrProcessModel
removeallclassmethods RsrProcessModel

doit
(RsrProcessModel
	subclass: 'RsrTestingProcessModel'
	instVarNames: #( forkedException )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrTestingProcessModel
removeallclassmethods RsrTestingProcessModel

doit
(TestCase
	subclass: 'RsrTestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		comment: 'An abstract test class which contains utility methods';
		immediateInvariant.
true.
%

removeallmethods RsrTestCase
removeallclassmethods RsrTestCase

doit
(RsrTestCase
	subclass: 'RsrClassResolverTestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrClassResolverTestCase
removeallclassmethods RsrClassResolverTestCase

doit
(RsrTestCase
	subclass: 'RsrCodecTest'
	instVarNames: #( connection )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrCodecTest
removeallclassmethods RsrCodecTest

doit
(RsrCodecTest
	subclass: 'RsrDecoderTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		comment: 'No class-specific documentation for RsrDecoderTest, hierarchy is:
Object
  TestAsserter
    TestCase( testSelector)
      RsrTestCase
        RsrCodecTest( registry decoder)
          RsrDecoderTest
';
		immediateInvariant.
true.
%

removeallmethods RsrDecoderTest
removeallclassmethods RsrDecoderTest

doit
(RsrCodecTest
	subclass: 'RsrEncoderTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		comment: 'No class-specific documentation for RsrEncoderTest, hierarchy is:
Object
  TestAsserter
    TestCase( testSelector)
      RsrTestCase
        RsrCodecTest( registry decoder)
          RsrEncoderTest( connection)
';
		immediateInvariant.
true.
%

removeallmethods RsrEncoderTest
removeallclassmethods RsrEncoderTest

doit
(RsrTestCase
	subclass: 'RsrConnectionSpecificationTestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrConnectionSpecificationTestCase
removeallclassmethods RsrConnectionSpecificationTestCase

doit
(RsrTestCase
	subclass: 'RsrForwarderTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrForwarderTest
removeallclassmethods RsrForwarderTest

doit
(RsrTestCase
	subclass: 'RsrGarbageCollectorTestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrGarbageCollectorTestCase
removeallclassmethods RsrGarbageCollectorTestCase

doit
(RsrTestCase
	subclass: 'RsrNumericSpigotTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrNumericSpigotTest
removeallclassmethods RsrNumericSpigotTest

doit
(RsrNumericSpigotTest
	subclass: 'RsrThreadSafeNumericSpigotTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrThreadSafeNumericSpigotTest
removeallclassmethods RsrThreadSafeNumericSpigotTest

doit
(RsrTestCase
	subclass: 'RsrPromiseTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrPromiseTest
removeallclassmethods RsrPromiseTest

doit
(RsrTestCase
	subclass: 'RsrSnapshotAnalysisTest'
	instVarNames: #( connection )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		comment: 'No class-specific documentation for RsrSnapshotAnalysisTest, hierarchy is:
Object
  TestAsserter
    TestCase( testSelector)
      RsrTestCase
        RsrSnapshotAnalysisTest
';
		immediateInvariant.
true.
%

removeallmethods RsrSnapshotAnalysisTest
removeallclassmethods RsrSnapshotAnalysisTest

doit
(RsrTestCase
	subclass: 'RsrSocketStreamTestCase'
	instVarNames: #( aStream bStream )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketStreamTestCase
removeallclassmethods RsrSocketStreamTestCase

doit
(RsrTestCase
	subclass: 'RsrSocketTestCase'
	instVarNames: #( sockets )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketTestCase
removeallclassmethods RsrSocketTestCase

doit
(RsrTestCase
	subclass: 'RsrSystemTestCase'
	instVarNames: #( connectionA connectionB )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSystemTestCase
removeallclassmethods RsrSystemTestCase

doit
(RsrSystemTestCase
	subclass: 'RsrConnectionTestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrConnectionTestCase
removeallclassmethods RsrConnectionTestCase

doit
(RsrConnectionTestCase
	subclass: 'RsrInMemoryConnectionTestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrInMemoryConnectionTestCase
removeallclassmethods RsrInMemoryConnectionTestCase

doit
(RsrConnectionTestCase
	subclass: 'RsrSocketConnectionTestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketConnectionTestCase
removeallclassmethods RsrSocketConnectionTestCase

doit
(RsrSystemTestCase
	subclass: 'RsrLifetimeTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrLifetimeTest
removeallclassmethods RsrLifetimeTest

doit
(RsrLifetimeTest
	subclass: 'RsrInMemoryLifetimeTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrInMemoryLifetimeTest
removeallclassmethods RsrInMemoryLifetimeTest

doit
(RsrLifetimeTest
	subclass: 'RsrSocketLifetimeTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketLifetimeTest
removeallclassmethods RsrSocketLifetimeTest

doit
(RsrSystemTestCase
	subclass: 'RsrMessageSendingTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrMessageSendingTest
removeallclassmethods RsrMessageSendingTest

doit
(RsrMessageSendingTest
	subclass: 'RsrInMemoryMessageSendingTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrInMemoryMessageSendingTest
removeallclassmethods RsrInMemoryMessageSendingTest

doit
(RsrMessageSendingTest
	subclass: 'RsrSocketMessageSendingTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketMessageSendingTest
removeallclassmethods RsrSocketMessageSendingTest

doit
(RsrSystemTestCase
	subclass: 'RsrServiceTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrServiceTest
removeallclassmethods RsrServiceTest

doit
(RsrServiceTest
	subclass: 'RsrInMemoryServiceTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrInMemoryServiceTest
removeallclassmethods RsrInMemoryServiceTest

doit
(RsrServiceTest
	subclass: 'RsrSocketServiceTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketServiceTest
removeallclassmethods RsrSocketServiceTest

doit
(RsrSystemTestCase
	subclass: 'RsrSpeciesEquality'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSpeciesEquality
removeallclassmethods RsrSpeciesEquality

doit
(RsrSpeciesEquality
	subclass: 'RsrInMemorySpeciesEquality'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrInMemorySpeciesEquality
removeallclassmethods RsrInMemorySpeciesEquality

doit
(RsrSpeciesEquality
	subclass: 'RsrSocketSpeciesEquality'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketSpeciesEquality
removeallclassmethods RsrSocketSpeciesEquality

doit
(RsrSystemTestCase
	subclass: 'RsrStressTest'
	instVarNames: #( client server )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrStressTest
removeallclassmethods RsrStressTest

doit
(RsrStressTest
	subclass: 'RsrInMemoryStressTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrInMemoryStressTest
removeallclassmethods RsrInMemoryStressTest

doit
(RsrStressTest
	subclass: 'RsrSocketStressTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Test';
		immediateInvariant.
true.
%

removeallmethods RsrSocketStressTest
removeallclassmethods RsrSocketStressTest

doit
(RsrTestCase
	subclass: 'RsrTestingProcessModelTestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #()
)
		category: 'RemoteServiceReplication-Platform-Test';
		immediateInvariant.
true.
%

removeallmethods RsrTestingProcessModelTestCase
removeallclassmethods RsrTestingProcessModelTestCase

! Class implementation for 'RsrAlreadyRegistered'

!		Class methods for 'RsrAlreadyRegistered'

category: 'instance creation'
classmethod: RsrAlreadyRegistered
signalService: aService
intendedConnection: aConnection

	^self new
		service: aService;
		intendedConnection: aConnection;
		signal
%

!		Instance methods for 'RsrAlreadyRegistered'

category: 'accessing'
method: RsrAlreadyRegistered
intendedConnection

	^intendedConnection
%

category: 'accessing'
method: RsrAlreadyRegistered
intendedConnection: aConnection

	intendedConnection := aConnection
%

category: 'accessing'
method: RsrAlreadyRegistered
service

	^service
%

category: 'accessing'
method: RsrAlreadyRegistered
service: aService

	service := aService
%

! Class implementation for 'RsrNonresumableError'

!		Instance methods for 'RsrNonresumableError'

category: 'testing'
method: RsrNonresumableError
isResumable

	^false
%

! Class implementation for 'RsrBrokenPromise'

!		Class methods for 'RsrBrokenPromise'

category: 'signaling'
classmethod: RsrBrokenPromise
signalReason: aReason

	^self new
		reason: aReason;
		signal
%

!		Instance methods for 'RsrBrokenPromise'

category: 'accessing'
method: RsrBrokenPromise
reason

	^reason
%

category: 'accessing'
method: RsrBrokenPromise
reason: aReason

	reason := aReason
%

! Class implementation for 'RsrRemoteError'

!		Class methods for 'RsrRemoteError'

category: 'instance creation'
classmethod: RsrRemoteError
from: anException

	| tag |
	tag := anException tag
		ifNotNil:
			[[anException tag asString]
				on: Error
				do: [:ex | ex return: 'Unable to pack #tag containing an instance of ', anException tag class name]].
	^self new
		originalClassName: anException class name;
		tag: tag;
		messageText: anException messageText;
		stack: RsrProcessModel currentStackDump;
		yourself
%

!		Instance methods for 'RsrRemoteError'

category: 'accessing'
method: RsrRemoteError
originalClassName

	^originalClassName
%

category: 'accessing'
method: RsrRemoteError
originalClassName: aSymbol

	originalClassName := aSymbol
%

category: 'accessing'
method: RsrRemoteError
stack

	^stack
%

category: 'accessing'
method: RsrRemoteError
stack: aString

	stack := aString
%

! Class implementation for 'RsrResumableError'

!		Instance methods for 'RsrResumableError'

category: 'testing'
method: RsrResumableError
isResumable

	^true
%

! Class implementation for 'RsrUnsupportedObject'

!		Class methods for 'RsrUnsupportedObject'

category: 'exceptioninstantiator'
classmethod: RsrUnsupportedObject
signal: anObject

	^self new
		object: anObject;
		messageText: 'Instances of #', anObject class name, ' do not support replication.';
		signal
%

!		Instance methods for 'RsrUnsupportedObject'

category: 'accessing'
method: RsrUnsupportedObject
object

	^object
%

category: 'accessing'
method: RsrUnsupportedObject
object: anObject

	object := anObject
%

! Class implementation for 'RsrObject'

!		Class methods for 'RsrObject'

category: 'tracing'
classmethod: RsrObject
trace

	Transcript
		show: RsrProcessModel currentStackDump;
		cr;
		cr
%

!		Instance methods for 'RsrObject'

category: 'delaying'
method: RsrObject
minimalWait
	"Ensure the calling process is not schedulable for a short period of time."

	(Delay forMilliseconds: 1) wait
%

category: 'notes'
method: RsrObject
note: aString
	"This method can be used to leave a note in code. For instance, a code path that needs to be tested."
%

category: 'tracing'
method: RsrObject
trace

	Transcript
		show: RsrProcessModel currentStackDump;
		cr;
		cr
%

! Class implementation for 'RsrDecodingRaisedException'

!		Class methods for 'RsrDecodingRaisedException'

category: 'instance creation'
classmethod: RsrDecodingRaisedException
exception: anException

	^self new
		exception: anException;
		yourself
%

!		Instance methods for 'RsrDecodingRaisedException'

category: 'accessing'
method: RsrDecodingRaisedException
exception

	^exception
%

category: 'accessing'
method: RsrDecodingRaisedException
exception: anException

	exception := anException
%

! Class implementation for 'RsrService'

!		Class methods for 'RsrService'

category: 'accessing'
classmethod: RsrService
clientClass

	^RsrClassResolver classNamed: self clientClassName
%

category: 'accessing'
classmethod: RsrService
clientClassName

	^(self templateClassName, 'Client') asSymbol
%

category: 'testing'
classmethod: RsrService
isClientClass

	^self name == self clientClassName
%

category: 'testing'
classmethod: RsrService
isServerClass

	^self name == self serverClassName
%

category: 'testing'
classmethod: RsrService
isTemplateClass

	^self name == self templateClassName
%

category: 'accessing'
classmethod: RsrService
serverClass

	^RsrClassResolver classNamed: self serverClassName
%

category: 'accessing'
classmethod: RsrService
serverClassName

	^(self templateClassName, 'Server') asSymbol
%

category: 'accessing'
classmethod: RsrService
templateClass

	^RsrClassResolver classNamed: self templateClassName
%

category: 'accessing'
classmethod: RsrService
templateClassName

	self subclassResponsibility
%

category: 'instance creation'
classmethod: RsrService
_id: anId
connection: aConnection

	^super new
		_id: anId connection: aConnection;
		yourself
%

!		Instance methods for 'RsrService'

category: 'public-accessing'
method: RsrService
connection
	"Returns the Connection associated w/ the receiver."

	^self _connection
%

category: 'public-debugging'
method: RsrService
debug: anException
raisedDuring: aMessageSend
answerUsing: aResolver

	aResolver break: (RsrRemoteException from: anException)
%

category: 'public-accessing'
method: RsrService
id
	"Returns the Service ID associated w/ the receiver."

	^self _id
%

category: 'public-testing'
method: RsrService
isClient

	^self class isClientClass
%

category: 'public-testing'
method: RsrService
isMirrored

	^_connection ~~ nil
%

category: 'public-testing'
method: RsrService
isNotMirrored

	^self isMirrored not
%

category: 'public-testing'
method: RsrService
isServer

	^self class isServerClass
%

category: 'public-events'
method: RsrService
postUpdate
	"#postUpdate is called just after the Service's shared variables are updated by the framework.
	This method can be overridden to ensure internal consistency."

	^self
%

category: 'public-events'
method: RsrService
preUpdate
	"#preUpdate is called just before the Service's shared variables are updated by the framework.
	This method can be overridden to ensure internal consistency.
	Note: If this method raises an exception, RSR will not signal #postUpdate."

	^self
%

category: 'public-registration'
method: RsrService
registerWith: aConnection

	aConnection _ensureRegistered: self
%

category: 'public-synchronization'
method: RsrService
synchronize
	"Synchronize the service w/ its peer."

	remoteSelf == nil
		ifFalse: [remoteSelf _synchronize wait]
%

category: 'private-accessing'
method: RsrService
_connection
	"Private - Returns the Connection associated w/ the receiver."

	^_connection
%

category: 'private-accessing'
method: RsrService
_id
	"Private - Returns the Service ID associated w/ the receiver."

	^_id
%

category: 'private-accessing'
method: RsrService
_id: anRsrId
connection: aConnection
	"Private - Configure this Service w/ a Service ID and Connection. This is a side-effect of registering a Service w/ a Connection."

	_id := anRsrId.
	_connection := aConnection.
	remoteSelf := aConnection _forwarderClass on: self
%

category: 'private-synchronization'
method: RsrService
_synchronize
	"Return self to synchronize with the remote peer"

	^self
%

! Class implementation for 'RsrConcurrentTestService'

!		Class methods for 'RsrConcurrentTestService'

category: 'accessing'
classmethod: RsrConcurrentTestService
clientClassName

	^#RsrConcurrentTestClient
%

category: 'accessing'
classmethod: RsrConcurrentTestService
serverClassName

	^#RsrConcurrentTestServer
%

category: 'accessing'
classmethod: RsrConcurrentTestService
templateClassName

	^#RsrConcurrentTestService
%

! Class implementation for 'RsrConcurrentTestClient'

!		Instance methods for 'RsrConcurrentTestClient'

category: 'accessing'
method: RsrConcurrentTestClient
counterWithIncrement

	^remoteSelf counterWithIncrement wait
%

category: 'accessing'
method: RsrConcurrentTestClient
delayedCounter

	^remoteSelf delayedCounter wait
%

category: 'actions'
method: RsrConcurrentTestClient
stashProcess

	remoteSelf stashProcess wait
%

! Class implementation for 'RsrConcurrentTestServer'

!		Class methods for 'RsrConcurrentTestServer'

category: 'accessing'
classmethod: RsrConcurrentTestServer
initialCounter

	^0
%

!		Instance methods for 'RsrConcurrentTestServer'

category: 'accessing'
method: RsrConcurrentTestServer
counter: anArray

	counter := anArray
%

category: 'accessing'
method: RsrConcurrentTestServer
counterWithIncrement

	^[counter at: 1] ensure: [counter at: 1 put: (counter at: 1) + 1]
%

category: 'accessing'
method: RsrConcurrentTestServer
delayedCounter

	semaphore signal.
	(Delay forSeconds: 2) wait.
	^counter at: 1
%

category: 'accessing'
method: RsrConcurrentTestServer
semaphore: aSemaphore

	semaphore := aSemaphore
%

category: 'accessing'
method: RsrConcurrentTestServer
stashedProcess

	^stashedProcess
%

category: 'actions'
method: RsrConcurrentTestServer
stashProcess

	stashedProcess := Processor activeProcess
%

! Class implementation for 'RsrInstrumentedService'

!		Class methods for 'RsrInstrumentedService'

category: 'accessing'
classmethod: RsrInstrumentedService
clientClassName

	^#RsrInstrumentedClient
%

category: 'accessing'
classmethod: RsrInstrumentedService
serverClassName

	^#RsrInstrumentedServer
%

category: 'accessing'
classmethod: RsrInstrumentedService
templateClassName

	^#RsrInstrumentedService
%

!		Instance methods for 'RsrInstrumentedService'

category: 'events'
method: RsrInstrumentedService
postUpdate

	self postUpdateCount: self postUpdateCount + 1
%

category: 'events'
method: RsrInstrumentedService
preUpdate

	self preUpdateCount: self preUpdateCount + 1
%

! Class implementation for 'RsrInstrumentedClient'

!		Instance methods for 'RsrInstrumentedClient'

category: 'accessing'
method: RsrInstrumentedClient
postUpdateCount

	^postUpdateCount ifNil: [0]
%

category: 'accessing'
method: RsrInstrumentedClient
postUpdateCount: anInteger

	postUpdateCount := anInteger
%

category: 'accessing'
method: RsrInstrumentedClient
preUpdateCount

	^preUpdateCount ifNil: [0]
%

category: 'accessing'
method: RsrInstrumentedClient
preUpdateCount: anInteger

	preUpdateCount := anInteger
%

category: 'evaluating'
method: RsrInstrumentedClient
return: anObject

	^(remoteSelf return: anObject) wait
%

category: 'evaluating'
method: RsrInstrumentedClient
value

	^remoteSelf value wait
%

! Class implementation for 'RsrInstrumentedServer'

!		Instance methods for 'RsrInstrumentedServer'

category: 'accessing'
method: RsrInstrumentedServer
action

	^action
%

category: 'accessing'
method: RsrInstrumentedServer
action: aBlock

	action := aBlock
%

category: 'accessing'
method: RsrInstrumentedServer
postUpdateCount

	^postUpdateCount ifNil: [0]
%

category: 'accessing'
method: RsrInstrumentedServer
postUpdateCount: anInteger

	postUpdateCount := anInteger
%

category: 'accessing'
method: RsrInstrumentedServer
preUpdateCount

	^preUpdateCount ifNil: [0]
%

category: 'accessing'
method: RsrInstrumentedServer
preUpdateCount: anInteger

	preUpdateCount := anInteger
%

category: 'evaluating'
method: RsrInstrumentedServer
return: anObject

	^anObject
%

category: 'evaluating'
method: RsrInstrumentedServer
value

	^self action value
%

! Class implementation for 'RsrMockService'

!		Class methods for 'RsrMockService'

category: 'accessing'
classmethod: RsrMockService
clientClassName

	^#RsrMockClient
%

category: 'accessing'
classmethod: RsrMockService
serverClassName

	^#RsrMockServer
%

!		Instance methods for 'RsrMockService'

category: 'initialize'
method: RsrMockService
initialize

	super initialize.
	_id := 1
%

category: 'testing'
method: RsrMockService
isClient

	^self class == RsrMockClient
%

category: 'testing'
method: RsrMockService
isServer

	^self class == RsrMockServer
%

category: 'accessing'
method: RsrMockService
service

	^self
%

! Class implementation for 'RsrRemoteException'

!		Class methods for 'RsrRemoteException'

category: 'accessing'
classmethod: RsrRemoteException
clientClassName

	^#RsrRemoteExceptionClient
%

category: 'instance creation'
classmethod: RsrRemoteException
from: anException
	"Create an instance of the RemoteException reason.
	The client is used here because once we send it, we are done with it.
	The client will GC and the server will later GC. We don't care to have
	a server hanging around if we don't need it."

	| tag |
	tag := anException tag
		ifNotNil:
			[[anException tag asString]
				on: Error
				do: [:ex | ex return: 'Unable to pack #tag containing an instance of ', anException tag class name]].
	^self clientClass new
		exceptionClassName: anException class name;
		tag: tag;
		messageText: anException messageText;
		stack: RsrProcessModel currentStackDump;
		yourself
%

category: 'accessing'
classmethod: RsrRemoteException
serverClassName

	^#RsrRemoteExceptionServer
%

category: 'accessing'
classmethod: RsrRemoteException
templateClassName

	^#RsrRemoteException
%

!		Instance methods for 'RsrRemoteException'

category: 'accessing'
method: RsrRemoteException
exceptionClassName

	^exceptionClassName
%

category: 'accessing'
method: RsrRemoteException
exceptionClassName: aSymbol

	exceptionClassName := aSymbol
%

category: 'testing'
method: RsrRemoteException
isRemoteException
	"This is a RemoteException reason"

	^true
%

category: 'accessing'
method: RsrRemoteException
messageText

	^messageText
%

category: 'accessing'
method: RsrRemoteException
messageText: aString

	messageText := aString
%

category: 'printing'
method: RsrRemoteException
printOn: aStream

	aStream
		nextPutAll: exceptionClassName;
		cr;
		nextPutAll: messageText;
		cr;
		nextPutAll: '===================';
		cr;
		nextPutAll: stack
%

category: 'accessing'
method: RsrRemoteException
stack

	^stack
%

category: 'accessing'
method: RsrRemoteException
stack: aString

	stack := aString
%

category: 'accessing'
method: RsrRemoteException
tag

	^tag
%

category: 'accessing'
method: RsrRemoteException
tag: aString

	tag := aString
%

! Class implementation for 'RsrReflectedVariableTestServiceA'

!		Instance methods for 'RsrReflectedVariableTestServiceA'

category: 'accessing'
method: RsrReflectedVariableTestServiceA
varA

	^varA
%

! Class implementation for 'RsrReflectedVariableTestServiceB'

!		Class methods for 'RsrReflectedVariableTestServiceB'

category: 'accessing'
classmethod: RsrReflectedVariableTestServiceB
clientClassName

	^#RsrReflectedVariableTestClient
%

category: 'accessing'
classmethod: RsrReflectedVariableTestServiceB
serverClassName

	^#RsrReflectedVariableTestServer
%

category: 'accessing'
classmethod: RsrReflectedVariableTestServiceB
templateClassName

	^#RsrReflectedVariableTestServiceB
%

!		Instance methods for 'RsrReflectedVariableTestServiceB'

category: 'accessing'
method: RsrReflectedVariableTestServiceB
varB

	^varB
%

! Class implementation for 'RsrReflectedVariableTestClient'

!		Instance methods for 'RsrReflectedVariableTestClient'

category: 'accessing'
method: RsrReflectedVariableTestClient
setVarsToAndReturn: anObject

	^(remoteSelf setVarsToAndReturn: anObject) wait
%

! Class implementation for 'RsrReflectedVariableTestServer'

!		Instance methods for 'RsrReflectedVariableTestServer'

category: 'accessing'
method: RsrReflectedVariableTestServer
setVarsToAndReturn: anObject

	^varA := varB := anObject
%

! Class implementation for 'RsrRemoteAction'

!		Class methods for 'RsrRemoteAction'

category: 'instance creation'
classmethod: RsrRemoteAction
sharedVariable: anObject

	^self new
		sharedVariable: anObject;
		yourself
%

category: 'accessing'
classmethod: RsrRemoteAction
templateClassName

	^#RsrRemoteAction
%

!		Instance methods for 'RsrRemoteAction'

category: 'accessing'
method: RsrRemoteAction
sharedVariable

	^sharedVariable
%

category: 'accessing'
method: RsrRemoteAction
sharedVariable: anObject

	sharedVariable := anObject
%

! Class implementation for 'RsrRemoteActionClient'

!		Instance methods for 'RsrRemoteActionClient'

category: 'evaluating'
method: RsrRemoteActionClient
asyncValue

	^remoteSelf value
%

category: 'evaluating'
method: RsrRemoteActionClient
asyncValue: anObject

	^remoteSelf value: anObject
%

category: 'evaluating'
method: RsrRemoteActionClient
value

	^self asyncValue wait
%

category: 'evaluating'
method: RsrRemoteActionClient
value: anObject

	^(self asyncValue: anObject) wait
%

! Class implementation for 'RsrRemoteActionServer'

!		Instance methods for 'RsrRemoteActionServer'

category: 'accessing'
method: RsrRemoteActionServer
action

	^action
%

category: 'accessing'
method: RsrRemoteActionServer
action: aBlock

	action := aBlock
%

category: 'debugging'
method: RsrRemoteActionServer
debug: anException
raisedDuring: aMessageSend
answerUsing: aResolver

	^self debugHandler
		value: anException
		value: aMessageSend
		value: aResolver
%

category: 'accessing'
method: RsrRemoteActionServer
debugHandler

	^debugHandler ifNil: [[:x :y :z | nil]]
%

category: 'accessing'
method: RsrRemoteActionServer
debugHandler: aBlock

	debugHandler := aBlock
%

category: 'processing'
method: RsrRemoteActionServer
postUpdate

	self postUpdateHandler value
%

category: 'accessing'
method: RsrRemoteActionServer
postUpdateHandler

	^postUpdateHandler ifNil: [[]]
%

category: 'accessing'
method: RsrRemoteActionServer
postUpdateHandler: aBlock

	postUpdateHandler := aBlock
%

category: 'processing'
method: RsrRemoteActionServer
preUpdate

	self preUpdateHandler value
%

category: 'accessing'
method: RsrRemoteActionServer
preUpdateHandler

	^preUpdateHandler ifNil: [[]]
%

category: 'accessing'
method: RsrRemoteActionServer
preUpdateHandler: aBlock

	preUpdateHandler := aBlock
%

category: 'evaluating'
method: RsrRemoteActionServer
value

	^self action value
%

category: 'evaluating'
method: RsrRemoteActionServer
value: anObject

	^self action value: anObject
%

category: 'evaluating'
method: RsrRemoteActionServer
valueWithArguments: anArray

	^self action valueWithArguments: anArray
%

! Class implementation for 'RsrReturnUnknownService'

!		Class methods for 'RsrReturnUnknownService'

category: 'accessing'
classmethod: RsrReturnUnknownService
clientClassName

	^#RsrDoNotCreateThisClass
%

category: 'accessing'
classmethod: RsrReturnUnknownService
serverClassName

	^#RsrKnownServer
%

category: 'accessing'
classmethod: RsrReturnUnknownService
templateClassName

	^#RsrReturnUnknownService
%

! Class implementation for 'RsrSameTemplateAndClientService'

!		Class methods for 'RsrSameTemplateAndClientService'

category: 'accessing'
classmethod: RsrSameTemplateAndClientService
clientClassName

	^self templateClassName
%

category: 'accessing'
classmethod: RsrSameTemplateAndClientService
serverClassName

	^#RsrDifferentServerService
%

category: 'accessing'
classmethod: RsrSameTemplateAndClientService
templateClassName

	^#RsrSameTemplateAndClientService
%

!		Instance methods for 'RsrSameTemplateAndClientService'

category: 'accessing'
method: RsrSameTemplateAndClientService
replicated1

	^replicated1
%

category: 'accessing'
method: RsrSameTemplateAndClientService
replicated1: anObject

	replicated1 := anObject
%

category: 'accessing'
method: RsrSameTemplateAndClientService
replicated2

	^replicated2
%

category: 'accessing'
method: RsrSameTemplateAndClientService
replicated2: anObject

	replicated2 := anObject
%

! Class implementation for 'RsrDifferentServerService'

!		Instance methods for 'RsrDifferentServerService'

category: 'accessing'
method: RsrDifferentServerService
private1

	^private1
%

category: 'accessing'
method: RsrDifferentServerService
private1: anObject

	private1 := anObject
%

! Class implementation for 'RsrSendUnknownService'

!		Class methods for 'RsrSendUnknownService'

category: 'accessing'
classmethod: RsrSendUnknownService
clientClassName

	^#RsrKnownClient
%

category: 'accessing'
classmethod: RsrSendUnknownService
serverClassName

	^#RsrDoNotCreateThisClass
%

category: 'accessing'
classmethod: RsrSendUnknownService
templateClassName

	^#RsrSendUnknownService
%

! Class implementation for 'RsrServiceFactory'

!		Class methods for 'RsrServiceFactory'

category: 'accessing'
classmethod: RsrServiceFactory
templateClassName

	^#RsrServiceFactory
%

! Class implementation for 'RsrServiceFactoryClient'

!		Instance methods for 'RsrServiceFactoryClient'

category: 'mirroring'
method: RsrServiceFactoryClient
mirror: aService

	^remoteSelf mirror: aService
%

category: 'manufactoring'
method: RsrServiceFactoryClient
serviceFor: aResponsibility

	| abstractClass instance |
	abstractClass := RsrClassResolver classNamed: aResponsibility.
	instance := abstractClass clientClass new.
	instance registerWith: _connection.
	^instance
%

! Class implementation for 'RsrServiceFactoryServer'

!		Instance methods for 'RsrServiceFactoryServer'

category: 'manufactoring'
method: RsrServiceFactoryServer
create: aResponsibility

	| abstractClass |
	abstractClass := RsrClassResolver classNamed: aResponsibility.
	^abstractClass serverClass new
%

category: 'mirroring'
method: RsrServiceFactoryServer
mirror: aService

	^aService
%

! Class implementation for 'RsrServiceNoInstVars'

!		Class methods for 'RsrServiceNoInstVars'

category: 'accessing'
classmethod: RsrServiceNoInstVars
clientClassName

	^#RsrClientNoInstVars
%

category: 'accessing'
classmethod: RsrServiceNoInstVars
serverClassName

	^#RsrServerNoInstVars
%

category: 'accessing'
classmethod: RsrServiceNoInstVars
templateClassName

	^#RsrServiceNoInstVars
%

!		Instance methods for 'RsrServiceNoInstVars'

category: 'accessing'
method: RsrServiceNoInstVars
returnArgument: anObject

	^anObject
%

category: 'testing-methods'
method: RsrServiceNoInstVars
sendReturnArgument: anObject

	^(remoteSelf returnArgument: anObject) wait
%

! Class implementation for 'RsrClientNoInstVars'

!		Instance methods for 'RsrClientNoInstVars'

category: 'test selectors'
method: RsrClientNoInstVars
unimplementedRemoteSend
	"Send a selector which is not implemented remotely resuling in a DNU."

	^remoteSelf doNotImplementThisSelectorOrYouWillBreakATest
%

! Class implementation for 'RsrServiceReferenceService'

!		Class methods for 'RsrServiceReferenceService'

category: 'accessing'
classmethod: RsrServiceReferenceService
clientClassName

	^#RsrClientReferenceService
%

category: 'accessing'
classmethod: RsrServiceReferenceService
serverClassName

	^#RsrServerReferenceService
%

category: 'instance creation'
classmethod: RsrServiceReferenceService
service: aService

	^self new
		service: aService;
		yourself
%

category: 'accessing'
classmethod: RsrServiceReferenceService
templateClassName

	^#RsrServiceReferenceService
%

!		Instance methods for 'RsrServiceReferenceService'

category: 'accessing'
method: RsrServiceReferenceService
service
	^ service
%

category: 'accessing'
method: RsrServiceReferenceService
service: anObject
	service := anObject
%

! Class implementation for 'RsrTestService'

!		Class methods for 'RsrTestService'

category: 'accessing'
classmethod: RsrTestService
clientClassName

	^#RsrClientTestService
%

category: 'accessing'
classmethod: RsrTestService
serverClassName

	^#RsrServerTestService
%

category: 'accessing'
classmethod: RsrTestService
templateClassName

	^#RsrTestService
%

!		Instance methods for 'RsrTestService'

category: 'accessing'
method: RsrTestService
remoteSelf

	^remoteSelf
%

category: 'accessing'
method: RsrTestService
sharedVariable

	^sharedVariable
%

category: 'accessing'
method: RsrTestService
sharedVariable: anObject

	sharedVariable := anObject
%

! Class implementation for 'RsrClientTestService'

!		Instance methods for 'RsrClientTestService'

category: 'accessing'
method: RsrClientTestService
privateVariable

	^privateVariable
%

category: 'accessing'
method: RsrClientTestService
privateVariable: anObject

	privateVariable := anObject
%

! Class implementation for 'RsrServerTestService'

!		Instance methods for 'RsrServerTestService'

category: 'accessing'
method: RsrServerTestService
privateVariable

	^privateVariable
%

category: 'accessing'
method: RsrServerTestService
privateVariable: anObject

	privateVariable := anObject
%

! Class implementation for 'RsrValueHolder'

!		Class methods for 'RsrValueHolder'

category: 'accessing'
classmethod: RsrValueHolder
clientClassName

	^#RsrValueHolderClient
%

category: 'accessing'
classmethod: RsrValueHolder
serverClassName

	^#RsrValueHolderServer
%

category: 'accessing'
classmethod: RsrValueHolder
templateClassName

	^#RsrValueHolder
%

category: 'instance creation'
classmethod: RsrValueHolder
value: anRsrObject

	^self new
		value: anRsrObject;
		yourself
%

!		Instance methods for 'RsrValueHolder'

category: 'accessing'
method: RsrValueHolder
value

	^value
%

category: 'accessing'
method: RsrValueHolder
value: anObject

	value := anObject.
	self synchronize
%

! Class implementation for 'RsrBufferedSocketStream'

!		Class methods for 'RsrBufferedSocketStream'

category: 'instance creation'
classmethod: RsrBufferedSocketStream
on: aSocketStream

	^self new
		stream: aSocketStream;
		yourself
%

!		Instance methods for 'RsrBufferedSocketStream'

category: 'writing'
method: RsrBufferedSocketStream
atEnd

	^stream atEnd
%

category: 'writing'
method: RsrBufferedSocketStream
checkAutoFlush

	nextToWrite > 4096
		ifTrue: [ self flush ]
%

category: 'writing'
method: RsrBufferedSocketStream
close

	stream close
%

category: 'writing'
method: RsrBufferedSocketStream
flush

	writePosition = nextToWrite
		ifTrue: [^self].
	stream nextPutAll: (outBuffer copyFrom: writePosition to: nextToWrite - 1).
	writePosition := nextToWrite := 1.
	stream flush
%

category: 'writing'
method: RsrBufferedSocketStream
growOutBufferTo: aNumberOfBytes

	| rounding |
	rounding := ((aNumberOfBytes \\ 4096) + 1) * 4096.
	outBuffer := outBuffer , (ByteArray new: rounding - outBuffer size)
%

category: 'initialization'
method: RsrBufferedSocketStream
initialize

	super initialize.
	outBuffer := ByteArray new: 4096.
	nextToWrite := 1.
	writePosition := 1
%

category: 'writing'
method: RsrBufferedSocketStream
isConnected

	^stream isConnected
%

category: 'writing'
method: RsrBufferedSocketStream
next

	^self next: 1
%

category: 'writing'
method: RsrBufferedSocketStream
next: aCount

	^stream next: aCount
%

category: 'writing'
method: RsrBufferedSocketStream
nextPutAll: aByteArray

	(outBuffer size >= (aByteArray size + nextToWrite))
		ifFalse: [self growOutBufferTo: outBuffer size + nextToWrite].
	outBuffer
		replaceFrom: nextToWrite
		to: nextToWrite + aByteArray size - 1
		with: aByteArray
		startingAt: 1.
	nextToWrite := nextToWrite + aByteArray size.
	self checkAutoFlush
%

category: 'accessing'
method: RsrBufferedSocketStream
stream: aStream

	stream := aStream
%

! Class implementation for 'RsrChannel'

!		Instance methods for 'RsrChannel'

category: 'lifecycle'
method: RsrChannel
close
	"Ensure the channel is closed to further communication."

	^self subclassResponsibility
%

category: 'accessing'
method: RsrChannel
connection

	^connection
%

category: 'accessing'
method: RsrChannel
connection: aConnection

	connection := aConnection
%

category: 'events'
method: RsrChannel
genericError: anError

	^self connection unknownError: anError
%

category: 'testing'
method: RsrChannel
isOpen
	"Report whether the Channel is open between Connections."

	^self subclassResponsibility
%

category: 'accessing'
method: RsrChannel
log

	^self connection log
%

category: 'lifecycle'
method: RsrChannel
open
	"Ensure the channel is open and ready for communication."

	^self subclassResponsibility
%

category: 'events'
method: RsrChannel
received: aCommand
	"A command has come in over the channel. Propogate it to the Connection."

	self connection _receivedCommand: aCommand
%

category: 'events'
method: RsrChannel
send: aCommand
	"Send the provided command over the channel."

	^self subclassResponsibility
%

! Class implementation for 'RsrInMemoryChannel'

!		Class methods for 'RsrInMemoryChannel'

category: 'instance creation'
classmethod: RsrInMemoryChannel
inQueue: inQueue
outQueue: outQueue

	^self new
		inQueue: inQueue;
		outQueue: outQueue;
		yourself
%

!		Instance methods for 'RsrInMemoryChannel'

category: 'lifecycle'
method: RsrInMemoryChannel
close

	outQueue nextPut: nil.
	inQueue nextPut: nil
%

category: 'processing'
method: RsrInMemoryChannel
drainLoop

	| command |
	[command := inQueue next.
	command isNil]
		whileFalse:
			[self received: command].
	self connection channelDisconnected
%

category: 'accessing'
method: RsrInMemoryChannel
inQueue

	^inQueue
%

category: 'accessing'
method: RsrInMemoryChannel
inQueue: aSharedQueue

	inQueue := aSharedQueue
%

category: 'testing'
method: RsrInMemoryChannel
isOpen

	^drainProcess isNil not
%

category: 'lifecycle'
method: RsrInMemoryChannel
open

	drainProcess := RsrProcessModel fork: [self drainLoop. drainProcess := nil]
%

category: 'accessing'
method: RsrInMemoryChannel
outQueue

	^outQueue
%

category: 'accessing'
method: RsrInMemoryChannel
outQueue: aSharedQueue

	outQueue := aSharedQueue
%

category: 'lifecycle'
method: RsrInMemoryChannel
send: aCommand

	outQueue nextPut: aCommand
%

! Class implementation for 'RsrNullChannel'

!		Instance methods for 'RsrNullChannel'

category: 'lifecycle'
method: RsrNullChannel
close

	"NOP"
%

category: 'testing'
method: RsrNullChannel
isOpen

	^true
%

category: 'accessing'
method: RsrNullChannel
lastCommand

	^lastCommand
%

category: 'lifecycle'
method: RsrNullChannel
open

	"NOP"
%

category: 'events'
method: RsrNullChannel
received: aCommand

	lastCommand := aCommand
%

category: 'events'
method: RsrNullChannel
send: aCommand

	lastCommand := aCommand
%

! Class implementation for 'RsrSocketChannel'

!		Class methods for 'RsrSocketChannel'

category: 'instance creation'
classmethod: RsrSocketChannel
socket: aSocket

	^self new
		socket: aSocket;
		yourself
%

!		Instance methods for 'RsrSocketChannel'

category: 'lifecycle'
method: RsrSocketChannel
close
	"Shutdown the Command sink and source."

	stream close.
	source stop.
	sink stop
%

category: 'lifecycle'
method: RsrSocketChannel
disconnected
	"The socket has disconnected so the channel is no longer open."

	self connection channelDisconnected
%

category: 'initializing'
method: RsrSocketChannel
initialize

	super initialize.
	source := RsrCommandSource on: self.
	sink := RsrCommandSink on: self
%

category: 'testing'
method: RsrSocketChannel
isOpen

	^self socket isConnected
%

category: 'lifecycle'
method: RsrSocketChannel
open
	"Ensure the Command sink and source are running"

	source start.
	sink start
%

category: 'command processing'
method: RsrSocketChannel
send: aCommand
	"Send the provided command over the channel"

	sink enqueue: aCommand
%

category: 'accessing'
method: RsrSocketChannel
sink

	^sink
%

category: 'accessing'
method: RsrSocketChannel
socket

	^socket
%

category: 'accessing'
method: RsrSocketChannel
socket: aSocket

	socket := aSocket
%

category: 'accessing'
method: RsrSocketChannel
source

	^source
%

category: 'accessing'
method: RsrSocketChannel
stream

	^stream ifNil: [stream := RsrSocketStream on: socket]
%

! Class implementation for 'RsrClassResolver'

!		Class methods for 'RsrClassResolver'

category: 'accessing'
classmethod: RsrClassResolver
classNamed: aSymbol

	^self
		classNamed: aSymbol
		ifAbsent: [RsrUnknownClass signal: aSymbol]
%

category: 'accessing'
classmethod: RsrClassResolver
classNamed: aSymbol
ifAbsent: aBlock

	| assoc |
	assoc := System myUserProfile resolveSymbol: aSymbol.
	^assoc
		ifNil: aBlock
		ifNotNil: [assoc value]
%

! Class implementation for 'RsrCodec'

!		Instance methods for 'RsrCodec'

category: 'private-accessing'
method: RsrCodec
controlWordMax

	^(2 raisedTo: 63) - 1
%

category: 'private-accessing'
method: RsrCodec
controlWordMin

	^(2 raisedTo: 63) negated
%

category: 'private-accessing-commands'
method: RsrCodec
deliverErrorResponseCommand

	^4
%

category: 'private-accessing-commands'
method: RsrCodec
deliverResponseCommand

	^2
%

category: 'private-accessing'
method: RsrCodec
immediateOID

	^0
%

category: 'private-accessing-commands'
method: RsrCodec
releaseObjectsCommand

	^3
%

category: 'private-accessing-commands'
method: RsrCodec
sendMessageCommand

	^1
%

category: 'private-accessing'
method: RsrCodec
sizeOfInteger
	"Return the number of bytes used to encode an integer"

	^8
%

! Class implementation for 'RsrDecoder'

!		Class methods for 'RsrDecoder'

category: 'instance creation'
classmethod: RsrDecoder
registry: aRegistry

	^self new
		registry: aRegistry;
		yourself
%

!		Instance methods for 'RsrDecoder'

category: 'private-converting'
method: RsrDecoder
bytesAsInteger: bytes

	| res |
	res := 0.
	bytes do: [:e | res := (res bitShift: 8) bitOr: e].
	^res
%

category: 'decoding-commands'
method: RsrDecoder
decodeCommand: aStream
	"Decode an object from the stream"

	| command |
	command := self decodeControlWord: aStream.
	command == self sendMessageCommand ifTrue: [^self decodeSendMessage: aStream].
	command == self deliverResponseCommand ifTrue: [^self decodeDeliverResponse: aStream].
	command == self releaseObjectsCommand ifTrue: [^self decodeReleaseServices: aStream].
	^RsrError signal: 'Unknown command identifier: ', command printString
%

category: 'decoding'
method: RsrDecoder
decodeControlWord: aStream

	| bytes unsignedResult |
	bytes := aStream next: self sizeOfInteger.
	unsignedResult := self bytesAsInteger: bytes.
	^unsignedResult > self controlWordMax
		ifTrue: [(2 raisedTo: 64) negated + unsignedResult]
		ifFalse: [unsignedResult]
%

category: 'decoding-commands'
method: RsrDecoder
decodeDeliverResponse: aStream

    | transaction numServices serviceSnapshots response |
    transaction := self decodeControlWord: aStream.
    numServices := self decodeControlWord: aStream.
    serviceSnapshots := (1 to: numServices) collect: [:each | self decodeServiceSnapshot: aStream].
    response := self decodeReference: aStream.
    ^RsrDeliverResponse new
        transaction: transaction;
        snapshots: serviceSnapshots;
        response: response;
        yourself
%

category: 'decoding-services'
method: RsrDecoder
decodeImmediateReference: aStream

	| referenceType |
	referenceType := self decodeControlWord: aStream.
	^(self instanceOfImmediate: referenceType)
		decode: aStream
		using: self
%

category: 'decoding'
method: RsrDecoder
decodeReference: aStream

	| oid |
	oid := self decodeControlWord: aStream.
	oid = self immediateOID ifTrue: [^self decodeImmediateReference: aStream].
	^RsrServiceReference sid: oid
%

category: 'decoding-commands'
method: RsrDecoder
decodeReleaseServices: aStream

	| count oids |
	count := self decodeControlWord: aStream.
	oids := Array new: count.
	1
		to: count
		do:
			[:i | | oid |
			oid := self decodeControlWord: aStream.
			oids at: i put: oid].
	^RsrReleaseServices sids: oids
%

category: 'decoding-commands'
method: RsrDecoder
decodeSendMessage: aStream

	| transaction argCount receiverReference selector numServices serviceSnapshots arguments instance |
	transaction := self decodeControlWord: aStream.
	numServices := self decodeControlWord: aStream.
	serviceSnapshots := (1 to: numServices) collect: [:each | self decodeServiceSnapshot: aStream].
	receiverReference := self decodeReference: aStream.
	selector := self decodeReference: aStream.
	argCount := self decodeControlWord: aStream.
	arguments := (1 to: argCount) collect: [:each | self decodeReference: aStream].
	instance := RsrSendMessage
		transaction: transaction
		receiverReference: receiverReference
		selectorReference: selector
		argumentReferences: arguments.
	instance snapshots: serviceSnapshots.
	^instance
%

category: 'decoding-services'
method: RsrDecoder
decodeServiceSnapshot: aStream

	| snapshot |
	snapshot := RsrServiceSnapshot new.
	snapshot
		decode: aStream
		using: self.
	^snapshot
%

category: 'decoding-services'
method: RsrDecoder
instanceOfImmediate: aReferenceType

	aReferenceType = 1
		ifTrue: [^RsrSymbolReference new].
	aReferenceType = 2
		ifTrue: [^RsrStringReference new].
	aReferenceType = 3
		ifTrue: [^RsrPositiveIntegerReference new].
	aReferenceType = 4
		ifTrue: [^RsrNegativeIntegerReference new].
	aReferenceType = 5
		ifTrue: [^RsrCharacterReference new].
	aReferenceType = 6
		ifTrue: [^RsrNilReference new].
	aReferenceType = 7
		ifTrue: [^RsrTrueReference new].
	aReferenceType = 8
		ifTrue: [^RsrFalseReference new].
	aReferenceType = 9
		ifTrue: [^RsrArrayReference new].
	aReferenceType = 10
		ifTrue: [^RsrByteArrayReference new].
	aReferenceType = 11
		ifTrue: [^RsrSetReference new].
	aReferenceType = 12
		ifTrue: [^RsrOrderedCollectionReference new].
	aReferenceType = 13
		ifTrue: [^RsrDictionaryReference new].
	aReferenceType = 14
		ifTrue: [^RsrDateAndTimeReference new].
	aReferenceType = 15
		ifTrue: [^RsrDoubleReference new].
	self error: 'ReferenceType(', aReferenceType printString, ') not yet implemented'.
%

! Class implementation for 'RsrEncoder'

!		Instance methods for 'RsrEncoder'

category: 'private-encoding'
method: RsrEncoder
encodeControlWord: anInteger
onto: aStream

	| encodedInteger encodedBytes |
	(anInteger between: self controlWordMin and: self controlWordMax)
		ifFalse: [self error: anInteger printString, ' is outside the supported size of a control word.'].
	encodedInteger := (anInteger positive
		ifTrue: [anInteger]
		ifFalse: [(2 raisedTo: 64) + anInteger]).
	encodedBytes := self
		integerAsByteArray: encodedInteger
		ofSize: self sizeOfInteger.
	aStream nextPutAll: encodedBytes
%

category: 'private-encoding'
method: RsrEncoder
encodeDeliverResponse: aDeliverResponse

	^ByteArray streamContents: [:stream | self encodeDeliverResponse: aDeliverResponse onto: stream]
%

category: 'private-encoding'
method: RsrEncoder
encodeDeliverResponse: aDeliverResponse
onto: aStream

	self
		encodeControlWord: self deliverResponseCommand
		onto: aStream.
	self
		encodeControlWord: aDeliverResponse transaction
		onto: aStream.
	self
		encodeControlWord: aDeliverResponse snapshots size
		onto: aStream.
	aDeliverResponse snapshots do: [:each | self encodeServiceSnapshot: each onto: aStream].
	self
		encodeReference: aDeliverResponse response
		onto: aStream
%

category: 'private-encoding'
method: RsrEncoder
encodeReference: aReference
onto: aStream

	aReference
		encode: aStream
		using: self
%

category: 'private-encoding'
method: RsrEncoder
encodeReleaseServices: aReleaseServices

	^ByteArray streamContents: [:stream | self encodeReleaseServices: aReleaseServices onto: stream]
%

category: 'private-encoding'
method: RsrEncoder
encodeReleaseServices: aReleaseServices
onto: aStream

	self
		encodeControlWord: self releaseObjectsCommand
		onto: aStream.
	self
		encodeControlWord: aReleaseServices sids size
		onto: aStream.
	aReleaseServices sids
		do:
			[:sid |
			self
				encodeControlWord: sid
				onto: aStream]
%

category: 'private-encoding'
method: RsrEncoder
encodeSendMessage: aSendMessage

	^ByteArray streamContents: [:stream | self encodeSendMessage: aSendMessage onto: stream]
%

category: 'private-encoding'
method: RsrEncoder
encodeSendMessage: aSendMessage
onto: aStream

	self
		encodeControlWord: self sendMessageCommand
		onto: aStream.
	self
		encodeControlWord: aSendMessage transaction
		onto: aStream.
	self
		encodeControlWord: aSendMessage snapshots size
		onto: aStream.
	aSendMessage snapshots
		do:
			[:each |
			self
				encodeServiceSnapshot: each
				onto: aStream].
	self
		encodeReference:  aSendMessage receiverReference
		onto: aStream.
	self
		encodeReference: aSendMessage selectorReference
		onto: aStream.
	self
		encodeControlWord: aSendMessage argumentReferences size
		onto: aStream.
	aSendMessage argumentReferences
		do:
			[:each |
			self
				encodeReference: each
				onto: aStream]
%

category: 'encoding'
method: RsrEncoder
encodeServiceSnapshot: aServiceSnapshot

	^ByteArray
		streamContents:
			[:stream |
			self
				encodeServiceSnapshot: aServiceSnapshot
				onto: stream]
%

category: 'private-encoding'
method: RsrEncoder
encodeServiceSnapshot: aServiceSnapshot
onto: aStream

	aServiceSnapshot
		encode: aStream
		using: self
%

category: 'converting'
method: RsrEncoder
integerAsByteArray: anInteger
ofSize: aNumberOfBytes

	| bytes int |
	bytes := ByteArray new: aNumberOfBytes.
	int := anInteger.
	aNumberOfBytes
		to: 1
		by: -1
		do:
			[:i | | byte |
			byte := int bitAnd: 16rFF.
			int := int bitShift: -8.
			bytes at: i put: byte].
	int ~= 0
		ifTrue: [self error: 'Loss of precision detected'].
	^bytes
%

! Class implementation for 'RsrCommand'

!		Instance methods for 'RsrCommand'

category: 'encoding'
method: RsrCommand
encode: aStream
using: anEncoder

	self subclassResponsibility
%

category: 'executing'
method: RsrCommand
executeFor: aConnection

	self subclassResponsibility
%

category: 'reporting'
method: RsrCommand
reportOn: aLog

	self subclassResponsibility
%

! Class implementation for 'RsrMessagingCommand'

!		Instance methods for 'RsrMessagingCommand'

category: 'executing'
method: RsrMessagingCommand
reifyAllIn: aConnection

	| servicesStrongly |
	"Must keep a strong reference to each service until we're sure a parent service is reified"
	servicesStrongly := snapshots collect: [ :each | 
		                    (each instanceIn: aConnection) preUpdate ].
	snapshots do: [ :each | each reifyIn: aConnection ].
	servicesStrongly do: [ :each | each postUpdate ].
	^ servicesStrongly "Sender must keep a strong reference until the root is anchored."
%

category: 'accessing'
method: RsrMessagingCommand
snapshots

	^snapshots
%

category: 'accessing'
method: RsrMessagingCommand
snapshots: anArrayOfSnapshots

	snapshots := anArrayOfSnapshots
%

category: 'accessing'
method: RsrMessagingCommand
transaction
	^ transaction
%

category: 'accessing'
method: RsrMessagingCommand
transaction: anObject
	transaction := anObject
%

! Class implementation for 'RsrDeliverResponse'

!		Class methods for 'RsrDeliverResponse'

category: 'instance creation'
classmethod: RsrDeliverResponse
transaction: aTransactionId
responseReference: aReference
snapshots: anArrayOfSnapshots

	^self new
		transaction: aTransactionId;
		responseReference: aReference;
		snapshots: anArrayOfSnapshots;
		yourself
%

!		Instance methods for 'RsrDeliverResponse'

category: 'encoding'
method: RsrDeliverResponse
encode: aStream
using: anEncoder

	anEncoder
		encodeDeliverResponse: self
		onto: aStream
%

category: 'executing'
method: RsrDeliverResponse
executeFor: aConnection

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
%

category: 'reporting'
method: RsrDeliverResponse
reportOn: aLog

	aLog debug: 'RsrDeliverResponse(', self response class name, ')'
%

category: 'reporting'
method: RsrDeliverResponse
reportUnknownTransactionIn: aConnection

	aConnection log error: 'Unknown transaction (', self transaction asString, ') while processing Response'
%

category: 'accessing'
method: RsrDeliverResponse
response

	^self responseReference
%

category: 'accessing'
method: RsrDeliverResponse
response: anObject

	^self responseReference: anObject
%

category: 'accessing'
method: RsrDeliverResponse
responseReference

	^responseReference
%

category: 'accessing'
method: RsrDeliverResponse
responseReference: aReference

	responseReference := aReference
%

! Class implementation for 'RsrSendMessage'

!		Class methods for 'RsrSendMessage'

category: 'instance creation'
classmethod: RsrSendMessage
transaction: aTransactionId
receiverReference: aServiceReference
selectorReference: aSelectorReference
argumentReferences: anArrayOfReferences

	^self new
		transaction: aTransactionId;
		receiverReference: aServiceReference;
		selectorReference: aSelectorReference;
		argumentReferences: anArrayOfReferences;
		yourself
%

!		Instance methods for 'RsrSendMessage'

category: 'accessing'
method: RsrSendMessage
argumentReferences

	^argumentReferences
%

category: 'accessing'
method: RsrSendMessage
argumentReferences: anArrayOfReferences

	argumentReferences := anArrayOfReferences
%

category: 'encoding'
method: RsrSendMessage
encode: aStream
using: anEncoder

	anEncoder
		encodeSendMessage: self
		onto: aStream
%

category: 'executing'
method: RsrSendMessage
executeFor: aConnection

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
%

category: 'reporting'
method: RsrSendMessage
logException: anException
to: aLog

	| message |
	message := String
		streamContents:
			[:stream |
			stream
				print: self receiverReference;
				nextPutAll: '>>';
				print: self selectorReference;
				nextPutAll: ' due to: ';
				nextPutAll: anException description].
	aLog error: message
%

category: 'executing'
method: RsrSendMessage
perform: aMessageSend
answerUsing: aResolver

	[aResolver fulfill: aMessageSend perform]
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
										aResolver break: (RsrRemoteException from: debugEx).
										ex return].
			aResolver hasResolved
				ifTrue: [ex return]
				ifFalse:
					[ex isResumable
						ifTrue: [ex resume: debugResult]
						ifFalse:
							[aResolver break: (RsrRemoteException from: ex).
							ex return]]]
%

category: 'accessing'
method: RsrSendMessage
receiverReference

	^receiverReference
%

category: 'accessing'
method: RsrSendMessage
receiverReference: aServiceReference

	receiverReference := aServiceReference
%

category: 'reporting'
method: RsrSendMessage
reportOn: aLog

	aLog debug: 'RsrSendMessage(', self receiverReference asString, '>>', self selectorReference asString, ')'
%

category: 'accessing'
method: RsrSendMessage
selectorReference

	^selectorReference
%

category: 'accessing'
method: RsrSendMessage
selectorReference: aSymbolReference

	selectorReference := aSymbolReference
%

category: 'accessing'
method: RsrSendMessage
unhandledExceptionClass
	"Temporarily, use Error until we have appropriate GemStone hooks."

	^Error
%

! Class implementation for 'RsrReleaseServices'

!		Class methods for 'RsrReleaseServices'

category: 'instance creation'
classmethod: RsrReleaseServices
sids: anArrayOfServiceIDs

	^self new
		sids: anArrayOfServiceIDs;
		yourself
%

!		Instance methods for 'RsrReleaseServices'

category: 'encoding'
method: RsrReleaseServices
encode: aStream
using: anEncoder

	anEncoder
		encodeReleaseServices: self
		onto: aStream
%

category: 'executing'
method: RsrReleaseServices
executeFor: aConnection

	sids do: [:sid | aConnection _remoteClientReleased: sid]
%

category: 'reporting'
method: RsrReleaseServices
reportOn: aLog

	aLog debug: 'RsrReleaseObjects(', self sids printString, ')'
%

category: 'accessing'
method: RsrReleaseServices
sids

	^sids
%

category: 'accessing'
method: RsrReleaseServices
sids: anArrayOfServiceIDs

	sids := anArrayOfServiceIDs
%

! Class implementation for 'RsrConnection'

!		Class methods for 'RsrConnection'

category: 'instance creation'
classmethod: RsrConnection
channel: aChannel
transactionSpigot: aNumericSpigot
oidSpigot: anOidSpigot
	"Create a new Connection with an already Configured Channel.
	Provide spigots as their behavior is specified by the Channel creation
	protocols."

	^self
		specification: nil
		channel: aChannel
		transactionSpigot: aNumericSpigot
		oidSpigot: anOidSpigot
%

category: 'instance creation'
classmethod: RsrConnection
new
	"Instances of Connection should not be created via #new.
	Instead use ConnectionSpecification.
	See SystemTestCase>>#setUp for an example."

	self shouldNotImplement: #new
%

category: 'instance creation'
classmethod: RsrConnection
specification: aConnectionSpecification
channel: aChannel
transactionSpigot: aNumericSpigot
oidSpigot: anOidSpigot
	"Create a new Connection with an already Configured Channel.
	Provide spigots as their behavior is specified by the Channel creation
	protocols."

	^super new
		specification: aConnectionSpecification;
		channel: aChannel;
		transactionSpigot: aNumericSpigot;
		oidSpigot: anOidSpigot;
		yourself
%

!		Instance methods for 'RsrConnection'

category: 'private-accessing'
method: RsrConnection
channel

	^channel
%

category: 'private-accessing'
method: RsrConnection
channel: aChannel

	channel := aChannel.
	channel connection: self
%

category: 'private-events'
method: RsrConnection
channelDisconnected

	self log info: 'Disconnected'.
	self close
%

category: 'public-lifecycle'
method: RsrConnection
close

	| pm temp |
	channel close.
	dispatchQueue stop.
	temp := Dictionary new.
	pm := pendingMessages.
	pendingMessages := temp.
	pm do: [:each | each promise break: RsrConnectionClosed new].
	registry := RsrThreadSafeDictionary new.
	serviceFactory := nil.
	closeSemaphore signal
%

category: 'private-initialization'
method: RsrConnection
initialize

	super initialize.
	transactionSpigot := RsrThreadSafeNumericSpigot naturals.
	pendingMessages := RsrThreadSafeDictionary new.
	registry := RsrThreadSafeDictionary new.
	dispatchQueue := RsrDispatchQueue new.
	log := RsrLog new.
	closeSemaphore := Semaphore new.
%

category: 'private-initialization'
method: RsrConnection
initializeServiceFactory

	| instance |
	instance := RsrServiceFactory clientClass new.
	self _ensureRegistered: instance.
	serviceFactory := instance.
	^serviceFactory
%

category: 'public-testing'
method: RsrConnection
isOpen

	^channel isOpen
%

category: 'private-accessing'
method: RsrConnection
log

	^log
%

category: 'private-service management'
method: RsrConnection
mournActionForClientSID: aSID

	^[dispatchQueue
		dispatch:
			[registry removeKey: aSID.
			self releaseOid: aSID]]
%

category: 'private-service management'
method: RsrConnection
mournActionForServerSID: aSID

	^[dispatchQueue dispatch: [registry removeKey: aSID]]
%

category: 'private-accessing'
method: RsrConnection
oidSpigot

	^oidSpigot
%

category: 'private-accessing'
method: RsrConnection
oidSpigot: anIntegerSpigot

	oidSpigot := anIntegerSpigot
%

category: 'public-lifecycle'
method: RsrConnection
open

	dispatchQueue start.
	channel open
%

category: 'private-accessing'
method: RsrConnection
pendingMessages

	^pendingMessages
%

category: 'private-coordination'
method: RsrConnection
releaseOid: anOid

	| command |
	self isOpen
		ifFalse: [^self].
	self log trace: 'Cleaning up OID:', anOid printString.
	command := RsrReleaseServices sids: (Array with: anOid).
	self _sendCommand: command
%

category: 'private-service management'
method: RsrConnection
serviceAt: aSID

	^self
		serviceAt: aSID
		ifAbsent: [RsrUnknownSID signal: aSID printString]
%

category: 'private-service management'
method: RsrConnection
serviceAt: aSID
ifAbsent: aBlock
	"Return the service associated with the provided SID."

	| entry |
	entry := registry at: aSID ifAbsent: [nil].
	"Ensure we do not hold the lock for long."
	entry == nil
		ifTrue: [^aBlock value].
	"The Service may have been garbage collected but
	the entry may not yet be removed. Ensure we
	evaluate the block in that case as well."
	^entry service
		ifNil: aBlock
		ifNotNil: [:service | service]
%

category: 'public-service factory'
method: RsrConnection
serviceFactory

	^serviceFactory ifNil: [self initializeServiceFactory]
%

category: 'public-service factory'
method: RsrConnection
serviceFor: aResponsibility

	^self serviceFactory serviceFor: aResponsibility
%

category: 'public-accessing'
method: RsrConnection
specification
	"Returns the Specification used to create this Connection.
	If the Connection was not create using a Specification, returns nil."

	^specification
%

category: 'public-accessing'
method: RsrConnection
specification: aConnectionSpecification
	"Store the Specification used to the create this Connection."

	specification := aConnectionSpecification
%

category: 'private-accessing'
method: RsrConnection
transactionSpigot

	^transactionSpigot
%

category: 'private-accessing'
method: RsrConnection
transactionSpigot: anObject

	transactionSpigot := anObject
%

category: 'private-events'
method: RsrConnection
unknownError: anException

	self close
%

category: 'public-waiting'
method: RsrConnection
waitUntilClose

	closeSemaphore
		wait;
		signal
%

category: 'private-service management'
method: RsrConnection
_ensureRegistered: aService

	aService _connection == nil
		ifTrue: [^self _register: aService as: oidSpigot next].
	aService _connection == self
		ifFalse: [^RsrAlreadyRegistered signalService: aService intendedConnection: self]
%

category: 'private-accessing'
method: RsrConnection
_forwarderClass

	^RsrForwarder
%

category: 'private-handling commands'
method: RsrConnection
_receivedCommand: aCommand
	"Execute the command in the context of the receiving Connection."

	RsrProcessModel fork: [aCommand executeFor: self]
%

category: 'private-service management'
method: RsrConnection
_register: aService
as: sid

	| registryEntry mournAction |
	aService
		_id: sid
		connection: self.
	mournAction := aService isClient
		ifTrue: [self mournActionForClientSID: sid]
		ifFalse: [self mournActionForServerSID: sid].
	registryEntry := RsrRegistryEntry
		service: aService
		onMourn: mournAction.
	registry
		at: sid
		put: registryEntry
%

category: 'private-service management'
method: RsrConnection
_remoteClientReleased: aSID
	"Remotely, a Client instance has been garbage collected.
	Ensure we only reference the associated service weakly."

	| entry |
	entry := registry
		at: aSID
		ifAbsent: [^self].
	entry becomeWeak.
%

category: 'private-handling commands'
method: RsrConnection
_sendCommand: aCommand
	"Send the provided Command to our peer."

	channel send: aCommand
%

category: 'private-handling commands'
method: RsrConnection
_sendMessage: aMessage
to: aService

"Open coordination window"
	"Send dirty transitive closure of aRemoteMessage"
	"Send DispatchMessage command"
"Coorination window closed"
	"Return Promise"
	| analysis receiverReference selectorReference argumentReferences dispatchCommand promise pendingMessage |
	self isOpen
		ifFalse: [self error: 'Connection is not open'].
	analysis := RsrSnapshotAnalysis
		roots: (Array with: aService), aMessage arguments
		connection: self.
	analysis perform.
	receiverReference := RsrReference from: aService.
	selectorReference := RsrReference from: aMessage selector.
	argumentReferences := aMessage arguments collect: [:each | RsrReference from: each].
	dispatchCommand := RsrSendMessage
		transaction: self transactionSpigot next
		receiverReference: receiverReference
		selectorReference: selectorReference
		argumentReferences: argumentReferences.
	dispatchCommand snapshots: analysis snapshots.
	promise := RsrPromise new.
	pendingMessage := RsrPendingMessage
		services: nil "I don't think we need to cache services here. They will remain on the stack unless they were removed from the transitive closure by another proc"
		promise: promise.
	self pendingMessages
		at: dispatchCommand transaction
		put: pendingMessage.
	self _sendCommand: dispatchCommand.
	^promise
%

category: 'private-service management'
method: RsrConnection
_stronglyRetain: aServer
	"Retain the already registered server strongly."

	| entry |
	entry := registry
		at: aServer _id
		ifAbsent: [RsrUnknownSID signal: aServer _id printString].
	entry becomeStrong
%

! Class implementation for 'RsrInternalConnectionSpecification'

!		Instance methods for 'RsrInternalConnectionSpecification'

category: 'asserting'
method: RsrInternalConnectionSpecification
assertOpen
	"Assert that connectionA and connectionB are open.
	Signal RsrConnectionFailed if they are not."

	(connectionA isOpen and: [connectionB isOpen])
		ifFalse: [RsrConnectionFailed signal]
%

category: 'connecting'
method: RsrInternalConnectionSpecification
connect
	"Establish an internal Connection pair."

	self subclassResponsibility
%

category: 'accessing'
method: RsrInternalConnectionSpecification
connectionA

	^connectionA
%

category: 'accessing'
method: RsrInternalConnectionSpecification
connectionA: anObject

	^ connectionA := anObject
%

category: 'accessing'
method: RsrInternalConnectionSpecification
connectionB

	^connectionB
%

category: 'accessing'
method: RsrInternalConnectionSpecification
connectionB: anObject

	connectionB := anObject
%

! Class implementation for 'RsrInMemoryConnectionSpecification'

!		Instance methods for 'RsrInMemoryConnectionSpecification'

category: 'connecting'
method: RsrInMemoryConnectionSpecification
connect
	"Establish an internal Connection pair via SharedQueues."

	| aQueue bQueue channelA channelB |
	aQueue := SharedQueue new.
	bQueue := SharedQueue new.
	channelA := RsrInMemoryChannel
		inQueue: aQueue
		outQueue: bQueue.
	channelB := RsrInMemoryChannel
		inQueue: bQueue
		outQueue: aQueue.
	connectionA := RsrConnection
		specification: self
		channel: channelA
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	connectionB := RsrConnection
		specification: self
		channel: channelB
		transactionSpigot: RsrThreadSafeNumericSpigot naturals negated
		oidSpigot: RsrThreadSafeNumericSpigot naturals negated.
	connectionA open.
	connectionB open.
	self assertOpen.
	^connectionA
%

! Class implementation for 'RsrInternalSocketConnectionSpecification'

!		Instance methods for 'RsrInternalSocketConnectionSpecification'

category: 'connecting'
method: RsrInternalSocketConnectionSpecification
connect
	"Establish an internal Connection pair via socket."

	RsrProcessModel fork: [connectionA := (RsrAcceptConnection port: self defaultPort) waitForConnection].
	self minimalWait. "Allow other process to schedule."
	connectionB := (RsrInitiateConnection host: '127.0.0.1' port: self defaultPort) connect.
	self minimalWait. "Allow other process to schedule."
	self assertOpen.
	connectionA specification: self.
	connectionB specification: self.
	^connectionA
%

category: 'accessing'
method: RsrInternalSocketConnectionSpecification
defaultPort
	"Returns the default port number used to listen for connections."

	^61982
%

! Class implementation for 'RsrSocketConnectionSpecification'

!		Class methods for 'RsrSocketConnectionSpecification'

category: 'instance creation'
classmethod: RsrSocketConnectionSpecification
host: hostnameOrAddress
port: port

	^self new
		host: hostnameOrAddress;
		port: port;
		yourself
%

!		Instance methods for 'RsrSocketConnectionSpecification'

category: 'accessing'
method: RsrSocketConnectionSpecification
host
	"Return the configured hostname or IP address"

	^host
%

category: 'accessing'
method: RsrSocketConnectionSpecification
host: hostnameOrAddress
	"The hostname or IP address used to establish a connection."

	host := hostnameOrAddress
%

category: 'accessing'
method: RsrSocketConnectionSpecification
port
	"The port number used for establishing a socket"

	^port
%

category: 'accessing'
method: RsrSocketConnectionSpecification
port: aPort
	"The port number used for establishing a socket"

	port := aPort
%

category: 'accessing'
method: RsrSocketConnectionSpecification
socketClass
	"Return the class that should be used for creating Socket instances."

	^RsrSocket
%

! Class implementation for 'RsrAcceptConnection'

!		Class methods for 'RsrAcceptConnection'

category: 'instance creation'
classmethod: RsrAcceptConnection
port: aPortInteger

	^self
		host: self wildcardAddress
		port: aPortInteger
%

category: 'accessing'
classmethod: RsrAcceptConnection
wildcardAddress

	^'0.0.0.0'
%

!		Instance methods for 'RsrAcceptConnection'

category: 'cancelling'
method: RsrAcceptConnection
cancelWaitForConnection

	listener ifNotNil: [:socket | socket close]
%

category: 'testing'
method: RsrAcceptConnection
isWaitingForConnection

	^listener ~~ nil
%

category: 'connecting'
method: RsrAcceptConnection
waitForConnection

	| socket channel connection |
	listener := self socketClass new.
	[listener
		bindAddress: self host
		port: self port.
	listener listen: 1.
	socket := [listener accept]
		on: RsrSocketError
		do: [:ex | ex resignalAs: RsrWaitForConnectionCancelled new]]
			ensure:
				[listener close.
				listener := nil].
	channel := RsrSocketChannel socket: socket.
	connection := RsrConnection
		specification: self
		channel: channel
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	^connection open
%

! Class implementation for 'RsrInitiateConnection'

!		Instance methods for 'RsrInitiateConnection'

category: 'connecting'
method: RsrInitiateConnection
connect

	| socket channel connection |
	socket := self socketClass new.
	socket
		connectToHost: self host
		port: self port.
	channel := RsrSocketChannel socket: socket.
	connection := RsrConnection
		specification: self
		channel: channel
		transactionSpigot: RsrThreadSafeNumericSpigot naturals negated
		oidSpigot: RsrThreadSafeNumericSpigot naturals negated.
	^connection open
%

! Class implementation for 'RsrDispatchQueue'

!		Instance methods for 'RsrDispatchQueue'

category: 'dispatching'
method: RsrDispatchQueue
async: aBlock
	"Evaluate the block asynchronously and do not return a result"

	queue nextPut: aBlock.
	^nil
%

category: 'dispatching'
method: RsrDispatchQueue
dispatch: aBlock

	^self async: aBlock
%

category: 'initializing'
method: RsrDispatchQueue
initialize

	super initialize.
	queue := SharedQueue new
%

category: 'testing'
method: RsrDispatchQueue
isRunning

	^isRunning
%

category: 'running'
method: RsrDispatchQueue
runLoop

	[self isRunning]
		whileTrue:
			[[queue next value]
				on: Error
				do: [:ex | self trace. Transcript show: ex messageText; cr. ex pass]]
%

category: 'lifecycle'
method: RsrDispatchQueue
start
	"Start processing queued events."

	isRunning := true.
	process := RsrProcessModel fork: [self runLoop]
%

category: 'lifecycle'
method: RsrDispatchQueue
stop
	"Stop process events in the dispatch queue."

	isRunning := false.
	self dispatch: []. "Ensure another action is added to the queue to ensure shutdown if it hasn't yet happened."
	process := nil
%

! Class implementation for 'RsrEnvironment'

!		Class methods for 'RsrEnvironment'

category: 'branching'
classmethod: RsrEnvironment
ifPharo: aPharoBlock
ifGemStone: aGemStoneBlock
ifDolphin: aDolphinBlock

	^aGemStoneBlock value
%

! Class implementation for 'RsrEphemeron'

!		Class methods for 'RsrEphemeron'

category: 'instance-creation'
classmethod: RsrEphemeron
on: anObject
mournAction: aBlock

	^self new
        key: anObject;
        mournAction: aBlock;
        beEphemeron: true;
        yourself
%

!		Instance methods for 'RsrEphemeron'

category: 'accessing'
method: RsrEphemeron
key

	^key
%

category: 'accessing'
method: RsrEphemeron
key: anObject

	key := anObject
%

category: 'mourning'
method: RsrEphemeron
mourn

	mournAction value.
    key := mournAction := nil
%

category: 'accessing'
method: RsrEphemeron
mournAction: aBlock

	mournAction := aBlock
%

! Class implementation for 'RsrGarbageCollector'

!		Class methods for 'RsrGarbageCollector'

category: 'cleaning'
classmethod: RsrGarbageCollector
maximumReclamation

	| object ephemeron sema |
	object := Object new.
	sema := Semaphore new.
	ephemeron := RsrEphemeron
		on: object
		mournAction: [sema signal].
	object := nil.
	System
		_generationScavenge_vmMarkSweep;
		_generationScavenge_vmMarkSweep.
	^sema waitForMilliseconds: 10
%

! Class implementation for 'RsrLog'

!		Instance methods for 'RsrLog'

category: 'configuring'
method: RsrLog
addSink: aLogSink

	sinks add: aLogSink
%

category: 'logging'
method: RsrLog
critical: aString

	self verbosity >= self levelCritical
		ifTrue: [self log: aString level: #critical]
%

category: 'logging'
method: RsrLog
debug: aString

	self verbosity >= self levelDebug
		ifTrue: [	self log: aString level: #debug]
%

category: 'logging'
method: RsrLog
error: aString

	self verbosity >= self levelError
		ifTrue: [self log: aString level: #error]
%

category: 'logging'
method: RsrLog
info: aString

	self verbosity >= self levelInfo
		ifTrue: [self log: aString level: #info]
%

category: 'initialization'
method: RsrLog
initialize

	super initialize.
	verbosity := self levelTrace.
	sinks := OrderedCollection new
%

category: 'accessing'
method: RsrLog
levelCritical

	^0
%

category: 'accessing'
method: RsrLog
levelDebug

	^4
%

category: 'accessing'
method: RsrLog
levelError

	^1
%

category: 'accessing'
method: RsrLog
levelInfo

	^3
%

category: 'accessing'
method: RsrLog
levelTrace

	^5
%

category: 'accessing'
method: RsrLog
levelWarn

	^2
%

category: 'logging'
method: RsrLog
log: aMessage
level: aLevelString

	| message |
	message := RsrDateAndTime now printString, '-', aLevelString, '-', aMessage.
	sinks do: [:each | each write: message]
%

category: 'logging'
method: RsrLog
trace: aString

	self verbosity >= self levelTrace
		ifTrue: [self log: aString level: #trace]
%

category: 'accessing'
method: RsrLog
verbosity

	^verbosity
%

category: 'accessing'
method: RsrLog
verbosity: aLogLevel

	verbosity := aLogLevel
%

category: 'logging'
method: RsrLog
warning: aString

	self verbosity >= self levelWarn
		ifTrue: [self log: aString level: #warning]
%

! Class implementation for 'RsrLogSink'

!		Instance methods for 'RsrLogSink'

category: 'writing'
method: RsrLogSink
write: aMessage

	self subclassResponsibility
%

! Class implementation for 'RsrCustomSink'

!		Class methods for 'RsrCustomSink'

category: 'instance creation'
classmethod: RsrCustomSink
action: aBlock

	^self new
		action: aBlock;
		yourself
%

!		Instance methods for 'RsrCustomSink'

category: 'accessing'
method: RsrCustomSink
action

	^action
%

category: 'accessing'
method: RsrCustomSink
action: aBlock

	action := aBlock
%

category: 'writing'
method: RsrCustomSink
write: aMessage

	self action value: aMessage
%

! Class implementation for 'RsrTranscriptSink'

!		Instance methods for 'RsrTranscriptSink'

category: 'writing'
method: RsrTranscriptSink
write: aMessageString

	Transcript
		show: aMessageString;
		cr
%

! Class implementation for 'RsrLogWithPrefix'

!		Class methods for 'RsrLogWithPrefix'

category: 'logging'
classmethod: RsrLogWithPrefix
log: aLog

	^self new
		log: aLog;
		yourself
%

category: 'logging'
classmethod: RsrLogWithPrefix
prefix: aString
log: aLog

	^self new
		prefix: aString;
		log: aLog;
		yourself
%

!		Instance methods for 'RsrLogWithPrefix'

category: 'debugging'
method: RsrLogWithPrefix
debug: aString

	^self log debug: self prefix, '/', aString
%

category: 'accessing'
method: RsrLogWithPrefix
log

	^log
%

category: 'accessing'
method: RsrLogWithPrefix
log: aLog

	log := aLog
%

category: 'accessing'
method: RsrLogWithPrefix
prefix

	^prefix
%

category: 'accessing'
method: RsrLogWithPrefix
prefix: aString

	prefix := aString
%

! Class implementation for 'RsrMessageSend'

!		Class methods for 'RsrMessageSend'

category: 'instance creation'
classmethod: RsrMessageSend
receiver: anObject
selector: aSelector
arguments: anArray

	^self new
		receiver: anObject;
		selector: aSelector;
		arguments: anArray;
		yourself
%

!		Instance methods for 'RsrMessageSend'

category: 'accessing'
method: RsrMessageSend
arguments

	^arguments
%

category: 'accessing'
method: RsrMessageSend
arguments: anArray

	arguments := anArray
%

category: 'evaluating'
method: RsrMessageSend
perform

	^self receiver
		perform: self selector
		withArguments: self arguments
%

category: 'accessing'
method: RsrMessageSend
receiver

	^receiver
%

category: 'accessing'
method: RsrMessageSend
receiver: anObject

	receiver := anObject
%

category: 'accessing'
method: RsrMessageSend
selector

	^selector
%

category: 'accessing'
method: RsrMessageSend
selector: aSelector

	selector := aSelector
%

! Class implementation for 'RsrNumericSpigot'

!		Class methods for 'RsrNumericSpigot'

category: 'instance creation'
classmethod: RsrNumericSpigot
naturals

	^self
		start: 1
		step: 1
%

category: 'instance creation'
classmethod: RsrNumericSpigot
new

	^self
		start: 0
		step: 1
%

category: 'instance creation'
classmethod: RsrNumericSpigot
start: aNumber
step: anIncrement

	^super new
		start: aNumber;
		step: anIncrement;
		yourself
%

!		Instance methods for 'RsrNumericSpigot'

category: 'accessing'
method: RsrNumericSpigot
negated

	^self class
		start: current negated
		step: step negated
%

category: 'accessing'
method: RsrNumericSpigot
next

	| result |
	result := current.
	current := current + step.
	^result
%

category: 'accessing'
method: RsrNumericSpigot
next: aCount

	| result |
	result := Array new: aCount.
	1 to: aCount do: [:i | result at: i put: self next].
	^result
%

category: 'accessing'
method: RsrNumericSpigot
start: aNumber

	current := aNumber
%

category: 'accessing'
method: RsrNumericSpigot
step

	^step
%

category: 'accessing'
method: RsrNumericSpigot
step: anIncrement

	step := anIncrement
%

! Class implementation for 'RsrThreadSafeNumericSpigot'

!		Instance methods for 'RsrThreadSafeNumericSpigot'

category: 'initialization'
method: RsrThreadSafeNumericSpigot
initialize

	super initialize.
	mutex := Semaphore forMutualExclusion
%

category: 'accessing'
method: RsrThreadSafeNumericSpigot
next

	^mutex critical: [super next]
%

! Class implementation for 'RsrPendingMessage'

!		Class methods for 'RsrPendingMessage'

category: 'instance creation'
classmethod: RsrPendingMessage
services: aList
promise: aPromise

	^self new
		services: aList;
		promise: aPromise;
		yourself
%

!		Instance methods for 'RsrPendingMessage'

category: 'accessing'
method: RsrPendingMessage
promise

	^promise
%

category: 'accessing'
method: RsrPendingMessage
promise: aPromise

	promise := aPromise
%

category: 'accessing'
method: RsrPendingMessage
services

	^services
%

category: 'accessing'
method: RsrPendingMessage
services: aList

	services := aList
%

! Class implementation for 'RsrPromise'

!		Instance methods for 'RsrPromise'

category: 'private'
method: RsrPromise
assertNotResolved

	self isResolved
		ifTrue: [RsrAlreadyResolved signal].
%

category: 'resolving'
method: RsrPromise
break: aReason
	"Notify the receiver's observers that the Promise will not be fulfilled."

	mutex
		critical:
			[self assertNotResolved.
			value := aReason.
			state := #Broken].
	self notifyActions.
	resolvedMutex signal
%

category: 'resolving'
method: RsrPromise
fulfill: anObject
	"Fulfill the receiver and notify any observers."

	mutex
		critical:
			[self assertNotResolved.
			value := anObject.
			state := #Fulfilled].
	self notifyActions.
	resolvedMutex signal
%

category: 'private'
method: RsrPromise
initialize

	super initialize.
	mutex := Semaphore forMutualExclusion.
	resolvedMutex := Semaphore new.
	state := #PendingResolution.
	resolutionActions := OrderedCollection new
%

category: 'testing'
method: RsrPromise
isBroken
	"Report if the receiver is currently broken"

	^state == #Broken
%

category: 'testing'
method: RsrPromise
isFulfilled
	"Report is the receiver is currently fulfilled"

	^state == #Fulfilled
%

category: 'testing'
method: RsrPromise
isResolved
	"Report if the receiver is currently resolved."

	^self isFulfilled or: [self isBroken]
%

category: 'private'
method: RsrPromise
notifyActions
	"Activate any registered action's fulfillment blocks.
	Ensure that they are activated only once and that
	future actions are allowed."

	| actions |
	mutex
		critical:
			[actions := resolutionActions.
			resolutionActions := OrderedCollection new].
	actions
		do:
			[:each |
			self isFulfilled
				ifTrue: [RsrProcessModel fork: [each when value: value]]
				ifFalse: [RsrProcessModel fork: [each catch value: value]]]
%

category: 'observing'
method: RsrPromise
value
	"Alias for #wait"

	^self wait
%

category: 'observing'
method: RsrPromise
wait
	"Wait for a the receiver to be Resolved.
	If fulfilled - return the fulfillment value.
	If broken - raise an RsrBrokenPromise exception w/ the reason."

	self waitForResolution.
	^self isBroken
		ifTrue: [RsrBrokenPromise signalReason: value]
		ifFalse: [value]
%

category: 'private'
method: RsrPromise
waitForResolution
	"There doesn't seem to be a great way to implement this method.
	The ensure below is generally safe but does have a side-effect of signaling
	the mutex when the process is terminated while waiting.
	Removing the ensure allows the signal to be lost if the process is terminated
	just after #wait but before #signal is processed.
	In order to solve this, the loop verifies the promise is actually resolved before
	continuing."

	self isResolved
		ifTrue: [^self].
	[[self isResolved] whileFalse: [resolvedMutex wait]] ensure: [resolvedMutex signal]
%

category: 'observing'
method: RsrPromise
when: aWhenBlock
catch: aCatchBlock
	"Activate an appropriate block when the receiver is resolved.
	If the receiver is currently resolved, schedule the block activation.
	The block is activated in a new thread. The thread is not given any specific
	error handler.
	<aWhenBlock> will be sent #value: with the same value provided to #fulfill:.
	<aCatchBlock> will be sent #value: with the same reason provided to #break:."

	| action shouldNotifyActions |
	action := RsrPromiseResolutionAction
		when: aWhenBlock
		catch: aCatchBlock.
	mutex
		critical:
			[shouldNotifyActions := self isResolved.
			resolutionActions add: action].
	shouldNotifyActions ifTrue: [self notifyActions]
%

! Class implementation for 'RsrPromiseResolutionAction'

!		Class methods for 'RsrPromiseResolutionAction'

category: 'instance creation'
classmethod: RsrPromiseResolutionAction
when: aWhenBlock
catch: aCatchBlock

	^self new
		when: aWhenBlock;
		catch: aCatchBlock;
		yourself
%

!		Instance methods for 'RsrPromiseResolutionAction'

category: 'accessing'
method: RsrPromiseResolutionAction
catch

	^catch
%

category: 'accessing'
method: RsrPromiseResolutionAction
catch: aBlock

	catch := aBlock
%

category: 'accessing'
method: RsrPromiseResolutionAction
when

	^when
%

category: 'accessing'
method: RsrPromiseResolutionAction
when: aBlock

	when := aBlock
%

! Class implementation for 'RsrReference'

!		Class methods for 'RsrReference'

category: 'analyzing'
classmethod: RsrReference
analyze: anObject
using: anAnalyzer

	^self subclassResponsibility
%

category: 'instance creation'
classmethod: RsrReference
from: anObject

	| referenceClass |
	referenceClass := self referenceClassFor: anObject.
	^referenceClass from: anObject
%

category: 'accessing'
classmethod: RsrReference
referenceMapping

	^referenceMapping ifNil: [self initializeReferenceMapping]
%

category: 'accessing'
classmethod: RsrReference
typeIdentifier

	^self subclassResponsibility
%

!		Instance methods for 'RsrReference'

category: 'resolving'
method: RsrReference
resolve: aConnection
	"Resolve the reference in the context of the provided Connection."

	^self subclassResponsibility
%

category: 'accessing'
method: RsrReference
typeIdentifier

	^self class typeIdentifier
%

! Class implementation for 'RsrImmediateReference'

!		Class methods for 'RsrImmediateReference'

category: 'analyzing'
classmethod: RsrImmediateReference
analyze: anObject
using: anAnalyzer

	^anAnalyzer analyzeImmediate: anObject
%

category: 'instance creation'
classmethod: RsrImmediateReference
from: anObject

	^self subclassResponsiblity
%

!		Instance methods for 'RsrImmediateReference'

category: 'accessing'
method: RsrImmediateReference
immediateOID

	^0
%

! Class implementation for 'RsrBooleanReference'

!		Class methods for 'RsrBooleanReference'

category: 'instance creation'
classmethod: RsrBooleanReference
from: aBoolean

	^aBoolean
		ifTrue: [RsrTrueReference new]
		ifFalse: [RsrFalseReference new]
%

!		Instance methods for 'RsrBooleanReference'

category: 'encoding/decoding'
method: RsrBooleanReference
decode: aStream
using: aDecoder

	"Boolean has no additional value"
%

category: 'encoding/decoding'
method: RsrBooleanReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream
%

! Class implementation for 'RsrFalseReference'

!		Class methods for 'RsrFalseReference'

category: 'accessing'
classmethod: RsrFalseReference
typeIdentifier

	^8
%

!		Instance methods for 'RsrFalseReference'

category: 'resolving'
method: RsrFalseReference
resolve: aConnection

	^false
%

! Class implementation for 'RsrTrueReference'

!		Class methods for 'RsrTrueReference'

category: 'accessing'
classmethod: RsrTrueReference
typeIdentifier

	^7
%

!		Instance methods for 'RsrTrueReference'

category: 'resolving'
method: RsrTrueReference
resolve: aConnection

	^true
%

! Class implementation for 'RsrNilReference'

!		Class methods for 'RsrNilReference'

category: 'instance creation'
classmethod: RsrNilReference
from: aNil

	^self new
%

category: 'accessing'
classmethod: RsrNilReference
typeIdentifier

	^6
%

!		Instance methods for 'RsrNilReference'

category: 'encoding/decoding'
method: RsrNilReference
decode: aStream
using: aDecoder

	"Nil has no additional value"
%

category: 'encoding/decoding'
method: RsrNilReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream
%

category: 'resolving'
method: RsrNilReference
resolve: aConnection

	^nil
%

! Class implementation for 'RsrValueReference'

!		Class methods for 'RsrValueReference'

category: 'instance creation'
classmethod: RsrValueReference
intermediate: anObject

	^self new
		intermediate: anObject;
		yourself
%

!		Instance methods for 'RsrValueReference'

category: 'private-accessing'
method: RsrValueReference
intermediate: anObject
	"Store the intermediate form of this object"

	intermediate := anObject
%

category: 'resolving'
method: RsrValueReference
resolve: aConnection

	^intermediate
%

! Class implementation for 'RsrByteArrayReference'

!		Class methods for 'RsrByteArrayReference'

category: 'instance creation'
classmethod: RsrByteArrayReference
from: aByteArray

	^self intermediate: aByteArray copy
%

category: 'accessing'
classmethod: RsrByteArrayReference
typeIdentifier

	^10
%

!		Instance methods for 'RsrByteArrayReference'

category: 'encoding/decoding'
method: RsrByteArrayReference
decode: aStream
using: aDecoder

	| length |
	length := aDecoder decodeControlWord: aStream.
	intermediate := aStream next: length
%

category: 'encoding/decoding'
method: RsrByteArrayReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: intermediate size
		onto: aStream.
	aStream nextPutAll: intermediate
%

! Class implementation for 'RsrCharacterArrayReference'

!		Class methods for 'RsrCharacterArrayReference'

category: 'instance creation'
classmethod: RsrCharacterArrayReference
from: aCharacterArray

	| bytes |
	bytes := self convertToBytes: aCharacterArray.
	^self intermediate: bytes
%

!		Instance methods for 'RsrCharacterArrayReference'

category: 'encoding/decoding'
method: RsrCharacterArrayReference
decode: aStream
using: aDecoder

	| length |
	length := aDecoder decodeControlWord: aStream.
	intermediate := aStream next: length
%

category: 'encoding/decoding'
method: RsrCharacterArrayReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: intermediate size
		onto: aStream.
	aStream nextPutAll: intermediate
%

category: 'resolving'
method: RsrCharacterArrayReference
resolve: aConnection

	^self convertBytes: intermediate
%

! Class implementation for 'RsrStringReference'

!		Class methods for 'RsrStringReference'

category: 'accessing'
classmethod: RsrStringReference
typeIdentifier

	^2
%

! Class implementation for 'RsrSymbolReference'

!		Class methods for 'RsrSymbolReference'

category: 'accessing'
classmethod: RsrSymbolReference
typeIdentifier

	^1
%

!		Instance methods for 'RsrSymbolReference'

category: 'converting'
method: RsrSymbolReference
convertBytes: aByteArray

	^(super convertBytes: aByteArray) asSymbol
%

! Class implementation for 'RsrCharacterReference'

!		Class methods for 'RsrCharacterReference'

category: 'instance creation'
classmethod: RsrCharacterReference
from: aCharacter

	^self intermediate: aCharacter codePoint
%

category: 'accessing'
classmethod: RsrCharacterReference
typeIdentifier

	^5
%

!		Instance methods for 'RsrCharacterReference'

category: 'encoding/decoding'
method: RsrCharacterReference
decode: aStream
using: aDecoder

	intermediate := aDecoder decodeControlWord: aStream
%

category: 'encoding/decoding'
method: RsrCharacterReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: intermediate
		onto: aStream
%

category: 'resolving'
method: RsrCharacterReference
resolve: aConnection

	^Character codePoint: intermediate
%

! Class implementation for 'RsrCollectionReference'

!		Class methods for 'RsrCollectionReference'

category: 'analyzing'
classmethod: RsrCollectionReference
analyze: aCollection
using: anAnalyzer

	^anAnalyzer analyzeCollection: aCollection
%

category: 'instance creation'
classmethod: RsrCollectionReference
from: aSequencedCollection

	| references |
	references := (1 to: aSequencedCollection size) collect: [:i | RsrReference from: (aSequencedCollection at: i)].
	^self intermediate: references
%

!		Instance methods for 'RsrCollectionReference'

category: 'encoding/decoding'
method: RsrCollectionReference
decode: aStream
using: aDecoder

	| size |
	size := aDecoder decodeControlWord: aStream.
	intermediate := (1 to: size) collect: [:i | aDecoder decodeReference: aStream]
%

category: 'encoding/decoding'
method: RsrCollectionReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: intermediate size
		onto: aStream.
	intermediate
		do:
			[:each |
			each
				encode: aStream
				using: anEncoder]
%

! Class implementation for 'RsrArrayReference'

!		Class methods for 'RsrArrayReference'

category: 'accessing'
classmethod: RsrArrayReference
typeIdentifier

	^9
%

!		Instance methods for 'RsrArrayReference'

category: 'resolving'
method: RsrArrayReference
resolve: aConnection

	^intermediate collect: [:each | each resolve: aConnection]
%

! Class implementation for 'RsrDictionaryReference'

!		Class methods for 'RsrDictionaryReference'

category: 'analyzing'
classmethod: RsrDictionaryReference
analyze: aDictionary
using: anAnalyzer

	^anAnalyzer analyzeDictionary: aDictionary
%

category: 'instance creation'
classmethod: RsrDictionaryReference
from: aDictionary

	| referenceStream |
	referenceStream := WriteStream on: (Array new: aDictionary size * 2).
	aDictionary
		keysAndValuesDo:
			[:key :value |
			referenceStream
				nextPut: (RsrReference from: key);
				nextPut: (RsrReference from: value)].
	^self intermediate: referenceStream contents
%

category: 'accessing'
classmethod: RsrDictionaryReference
typeIdentifier

	^13
%

!		Instance methods for 'RsrDictionaryReference'

category: 'encoding/decoding'
method: RsrDictionaryReference
decode: aStream
using: aDecoder

	| size |
	size := aDecoder decodeControlWord: aStream.
	intermediate := (1 to: size * 2) collect: [:each | aDecoder decodeReference: aStream]
%

category: 'encoding/decoding'
method: RsrDictionaryReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: intermediate size / 2
		onto: aStream.
	intermediate do: [:each | each encode: aStream using: anEncoder]
%

category: 'resolving'
method: RsrDictionaryReference
resolve: aConnection

	| stream numEntries dictionary |
	stream := ReadStream on: intermediate.
	numEntries := intermediate size / 2.
	dictionary := Dictionary new: numEntries.
	numEntries
		timesRepeat:
			[dictionary
				at: (stream next resolve: aConnection)
				put: (stream next resolve: aConnection)].
	^dictionary
%

! Class implementation for 'RsrOrderedCollectionReference'

!		Class methods for 'RsrOrderedCollectionReference'

category: 'accessing'
classmethod: RsrOrderedCollectionReference
typeIdentifier

	^12
%

!		Instance methods for 'RsrOrderedCollectionReference'

category: 'other'
method: RsrOrderedCollectionReference
resolve: aConnection

	| oc |
	oc := OrderedCollection new: intermediate size.
	intermediate do: [:each | oc add: (each resolve: aConnection)].
	^oc
%

! Class implementation for 'RsrSetReference'

!		Class methods for 'RsrSetReference'

category: 'instance creation'
classmethod: RsrSetReference
from: aSet

	| referenceStream |
	referenceStream := WriteStream on: (Array new: aSet size).
	aSet do:  [:each | referenceStream nextPut: (RsrReference from: each)].
	^self intermediate: referenceStream contents
%

category: 'accessing'
classmethod: RsrSetReference
typeIdentifier

	^11
%

!		Instance methods for 'RsrSetReference'

category: 'resolving'
method: RsrSetReference
resolve: aConnection

	| set |
	set := Set new: intermediate size * 2.
	intermediate do: [:each | set add: (each resolve: aConnection)].
	^set
%

! Class implementation for 'RsrDateAndTimeReference'

!		Class methods for 'RsrDateAndTimeReference'

category: 'instance creation'
classmethod: RsrDateAndTimeReference
from: aDateAndTime

	| intermediate |
	intermediate := RsrDateAndTime microsecondsSinceEpoch: aDateAndTime.
	^self intermediate: intermediate
%

category: 'accessing'
classmethod: RsrDateAndTimeReference
typeIdentifier

	^14
%

!		Instance methods for 'RsrDateAndTimeReference'

category: 'encoding/decoding'
method: RsrDateAndTimeReference
decode: aStream
using: aDecoder

	intermediate := aDecoder decodeControlWord: aStream
%

category: 'encoding/decoding'
method: RsrDateAndTimeReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: intermediate
		onto: aStream
%

category: 'resolving'
method: RsrDateAndTimeReference
resolve: aConnection

	^RsrDateAndTime fromMicroseconds: intermediate
%

! Class implementation for 'RsrDoubleReference'

!		Class methods for 'RsrDoubleReference'

category: 'instance creation'
classmethod: RsrDoubleReference
from: aFloat

	| intermediate |
	intermediate := self convertToBytes: aFloat.
	^self intermediate: intermediate
%

category: 'accessing'
classmethod: RsrDoubleReference
typeIdentifier

	^15
%

!		Instance methods for 'RsrDoubleReference'

category: 'encoding/decoding'
method: RsrDoubleReference
decode: aStream
using: aDecoder

	intermediate := aStream next: 8
%

category: 'encoding/decoding'
method: RsrDoubleReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream.
	aStream nextPutAll: intermediate
%

category: 'resolving'
method: RsrDoubleReference
resolve: aConnection

	^self convertBytes: intermediate
%

! Class implementation for 'RsrIntegerReference'

!		Class methods for 'RsrIntegerReference'

category: 'converting'
classmethod: RsrIntegerReference
convertToBytes: anInteger

	| stream int |
	anInteger <= 0
		ifTrue: [^#[0]].
	stream := WriteStream on: (ByteArray new: 8).
	int := anInteger.
	[int > 0]
		whileTrue:
			[stream nextPut: (int bitAnd: 16rFF).
			int := int bitShift: -8].
	^stream contents reverse
%

category: 'instance creation'
classmethod: RsrIntegerReference
from: anInteger

	| intermediate |
	intermediate := self convertToBytes: anInteger abs.
	^anInteger positive
		ifTrue: [RsrPositiveIntegerReference intermediate: intermediate]
		ifFalse: [RsrNegativeIntegerReference intermediate: intermediate]
%

!		Instance methods for 'RsrIntegerReference'

category: 'converting'
method: RsrIntegerReference
convertBytes: aByteArray

	^aByteArray
		inject: 0
		into: [:integer :byte | (integer bitShift: 8) bitOr: byte]
%

category: 'encoding/decoding'
method: RsrIntegerReference
decode: aStream
using: aDecoder

	| length |
	length := aDecoder decodeControlWord: aStream.
	intermediate := aStream next: length
%

category: 'encoding/decoding'
method: RsrIntegerReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: anEncoder immediateOID
		onto: aStream.
	anEncoder
		encodeControlWord: self typeIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: intermediate size
		onto: aStream.
	aStream nextPutAll: intermediate
%

category: 'resolving'
method: RsrIntegerReference
resolve: aConnection

	^self convertBytes: intermediate
%

! Class implementation for 'RsrNegativeIntegerReference'

!		Class methods for 'RsrNegativeIntegerReference'

category: 'accessing'
classmethod: RsrNegativeIntegerReference
typeIdentifier

	^4
%

!		Instance methods for 'RsrNegativeIntegerReference'

category: 'converting'
method: RsrNegativeIntegerReference
convertBytes: aByteArray

	^(super convertBytes: aByteArray) negated
%

! Class implementation for 'RsrPositiveIntegerReference'

!		Class methods for 'RsrPositiveIntegerReference'

category: 'accessing'
classmethod: RsrPositiveIntegerReference
typeIdentifier

	^3
%

! Class implementation for 'RsrServiceReference'

!		Class methods for 'RsrServiceReference'

category: 'analyzing'
classmethod: RsrServiceReference
analyze: aService
using: anAnalyzer

	^anAnalyzer analyzeService: aService
%

category: 'instance creation'
classmethod: RsrServiceReference
from: aService

	^self sid: aService _id
%

category: 'instance creation'
classmethod: RsrServiceReference
sid: aServiceID

	^self new
		sid: aServiceID;
		yourself
%

!		Instance methods for 'RsrServiceReference'

category: 'encoding/decoding'
method: RsrServiceReference
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: self sid
		onto: aStream
%

category: 'resolving'
method: RsrServiceReference
resolve: aConnection

	^aConnection serviceAt: self sid
%

category: 'accessing'
method: RsrServiceReference
sid

	^sid
%

category: 'accessing'
method: RsrServiceReference
sid: aServiceID

	sid := aServiceID
%

! Class implementation for 'RsrRegistryEntry'

!		Class methods for 'RsrRegistryEntry'

category: 'instance creation'
classmethod: RsrRegistryEntry
service: aService
onMourn: aBlock

	| ephemeron |
	ephemeron := RsrServiceEphemeron
		service: aService
		action: aBlock.
	^self new
		ephemeron: ephemeron;
		yourself
%

!		Instance methods for 'RsrRegistryEntry'

category: 'transitions'
method: RsrRegistryEntry
becomeStrong

	strongStorage := self service
%

category: 'transitions'
method: RsrRegistryEntry
becomeWeak

	strongStorage := nil
%

category: 'private-accessing'
method: RsrRegistryEntry
ephemeron: aServiceEphemeron

	ephemeron := aServiceEphemeron
%

category: 'accessing'
method: RsrRegistryEntry
service

	^ephemeron service
%

! Class implementation for 'RsrRemotePromiseResolver'

!		Class methods for 'RsrRemotePromiseResolver'

category: 'instance creation'
classmethod: RsrRemotePromiseResolver
for: aSendMessage
over: aConnection

	^self new
		sendMessage: aSendMessage;
		connection: aConnection;
		yourself
%

!		Instance methods for 'RsrRemotePromiseResolver'

category: 'accessing'
method: RsrRemotePromiseResolver
addRoot: aService

	mutex critical: [extraRoots add: aService]
%

category: 'private'
method: RsrRemotePromiseResolver
assertNotResolved

	self hasResolved
		ifTrue: [RsrAlreadyResolved signal]
%

category: 'resolving'
method: RsrRemotePromiseResolver
break: aReason
	"<aReason> can be any object supported by RSR."

	self resolution: (Array with: #break with: aReason)
%

category: 'accessing'
method: RsrRemotePromiseResolver
connection

	^connection
%

category: 'accessing'
method: RsrRemotePromiseResolver
connection: aConnection

	connection := aConnection
%

category: 'resolving'
method: RsrRemotePromiseResolver
fulfill: result
	"Fulfill the remote promise with a fulfilled value of <result>"

	self resolution: (Array with: #fulfill with: result)
%

category: 'testing'
method: RsrRemotePromiseResolver
hasResolved

	^hasResolved
%

category: 'private'
method: RsrRemotePromiseResolver
initialize

	super initialize.
	extraRoots := OrderedCollection new.
	hasResolved := false.
	mutex := Semaphore forMutualExclusion
%

category: 'resolving'
method: RsrRemotePromiseResolver
resolution: result
	"Process and dispatch the result"

	mutex
		critical:
			[self hasResolved ifTrue: [^self].
			[self
				sendResult: result
				closureRoots: (Array with: result), extraRoots]
				on: self sendMessage unhandledExceptionClass
				do:
					[:ex | | answer |
					answer := Array
						with: #break
						with: (RsrRemoteException from: ex).
					self
						sendResult: answer
						closureRoots: answer.
					ex return].
			hasResolved := true]
%

category: 'accessing'
method: RsrRemotePromiseResolver
sendMessage

	^sendMessage
%

category: 'accessing'
method: RsrRemotePromiseResolver
sendMessage: aSendMessage

	sendMessage := aSendMessage
%

category: 'resolving'
method: RsrRemotePromiseResolver
sendResult: result
closureRoots: roots

	| analysis resultReference |
	analysis := RsrSnapshotAnalysis
		roots: roots
		connection: self connection.
	analysis perform.
	resultReference := RsrReference from: result.
	self
		sendResultReference: resultReference
		snapshots: analysis snapshots
%

category: 'resolving'
method: RsrRemotePromiseResolver
sendResultReference: resultReference
snapshots: snapshots

	| response |
	response := RsrDeliverResponse
				transaction: self sendMessage transaction
				responseReference: resultReference
				snapshots: snapshots.
	self connection _sendCommand: response
%

! Class implementation for 'RsrScientist'

!		Instance methods for 'RsrScientist'

category: 'instrumenting'
method: RsrScientist
instrument: aBlock
label: aString

	^aBlock value
%

category: 'instrumenting'
method: RsrScientist
profile: aBlock
label: aString

	^aBlock value
%

category: 'instrumenting'
method: RsrScientist
profile: aBlock
label: aString
if: aCondition

	^aBlock value
%

! Class implementation for 'RsrServiceEphemeron'

!		Class methods for 'RsrServiceEphemeron'

category: 'instance creation'
classmethod: RsrServiceEphemeron
service: aService
action: aBlock

	^self new
		service: aService;
		action: aBlock;
		beEphemeron: true;
		yourself
%

!		Instance methods for 'RsrServiceEphemeron'

category: 'accessing'
method: RsrServiceEphemeron
action

	^action
%

category: 'accessing'
method: RsrServiceEphemeron
action: aBlock

	action := aBlock
%

category: 'mourning'
method: RsrServiceEphemeron
mourn

	action value.
	service := action := nil
%

category: 'accessing'
method: RsrServiceEphemeron
service

	^service
%

category: 'accessing'
method: RsrServiceEphemeron
service: aService

	service := aService
%

! Class implementation for 'RsrServiceSnapshot'

!		Class methods for 'RsrServiceSnapshot'

category: 'instance creation'
classmethod: RsrServiceSnapshot
from: aService

	^self new
		snapshot: aService;
		yourself
%

category: 'variable utilites'
classmethod: RsrServiceSnapshot
reflectedVariableIndicesFor: aService
do: aBlock

	| allVariables |
	allVariables := aService class allInstVarNames.
	(self reflectedVariablesFor: aService)
		do:
			[:varName | | index |
			index := allVariables indexOf: varName.
			aBlock value: index]
%

category: 'variable utilites'
classmethod: RsrServiceSnapshot
reflectedVariablesFor: aService

	| currentClass variables |
	variables := OrderedCollection new.
	currentClass := aService class templateClass.
	[currentClass == RsrService]
		whileFalse:
			[currentClass instVarNames reverseDo: [:each | variables addFirst: each].
			currentClass := currentClass superclass].
	^variables
%

category: 'variable utilites'
classmethod: RsrServiceSnapshot
reflectedVariablesFor: aService
do: aBlock

	self
		reflectedVariableIndicesFor: aService
		do: [:index | aBlock value: (aService instVarAt: index)]
%

!		Instance methods for 'RsrServiceSnapshot'

category: 'accessing'
method: RsrServiceSnapshot
createInstanceRegisteredIn: aConnection

	| instance |
	instance := self shouldCreateServer
		ifTrue: [self templateClass serverClass basicNew]
		ifFalse: [self templateClass clientClass basicNew].
	aConnection
		_register: instance
		as: self sid.
	^instance
%

category: 'encoding/decoding'
method: RsrServiceSnapshot
decode: aStream
using: aDecoder

	| species instVarCount templateClass |
	species := aDecoder decodeControlWord: aStream.
	sid := aDecoder decodeControlWord: aStream.
	instVarCount := aDecoder decodeControlWord: aStream.
	targetClassName := (aDecoder decodeReference: aStream) resolve: nil.
	slots := OrderedCollection new: instVarCount.
	instVarCount timesRepeat: [slots add: (aDecoder decodeReference: aStream)]
%

category: 'encoding/decoding'
method: RsrServiceSnapshot
encode: aStream
using: anEncoder

	anEncoder
		encodeControlWord: self snapshotIdentifier
		onto: aStream.
	anEncoder
		encodeControlWord: self sid
		onto: aStream.
	anEncoder
		encodeControlWord: self slots size
		onto: aStream.
	self targetClassNameReference
		encode: aStream
		using: anEncoder.
	self slots do: [:each | each encode: aStream using: anEncoder]
%

category: 'accessing'
method: RsrServiceSnapshot
instanceIn: aConnection

	| instance |
	instance := aConnection
		serviceAt: self sid
		ifAbsent: [self createInstanceRegisteredIn: aConnection].
	self shouldCreateServer
		ifTrue: [aConnection _stronglyRetain: instance].
	^instance
%

category: 'reifying'
method: RsrServiceSnapshot
reifyIn: aConnection

	| instance referenceStream |
	"Instance should already be registered"
	instance := self instanceIn: aConnection.
	(self class reflectedVariablesFor: instance) size = slots size 
		ifFalse: [ self error: 'Incorrectly encoded instance detected' ].
	referenceStream := ReadStream on: slots.
	self class reflectedVariableIndicesFor: instance do: [ :index | 
		instance
			instVarAt: index
			put: (referenceStream next resolve: aConnection) ].
	^ instance
%

category: 'testing'
method: RsrServiceSnapshot
shouldCreateServer

	^self targetServiceType == #server
%

category: 'accessing'
method: RsrServiceSnapshot
sid

	^sid
%

category: 'accessing'
method: RsrServiceSnapshot
sid: aServiceID

	sid := aServiceID
%

category: 'accessing'
method: RsrServiceSnapshot
slots

	^slots
%

category: 'accessing'
method: RsrServiceSnapshot
slots: anArrayOfReferences

	slots := anArrayOfReferences
%

category: 'snapshotting'
method: RsrServiceSnapshot
snapshot: aService

	sid := aService _id.
	targetClassName := aService class isClientClass
		ifTrue: [aService class serverClassName]
		ifFalse: [aService class clientClassName].
	slots := OrderedCollection new.
	RsrServiceSnapshot
		reflectedVariablesFor: aService
		do: [:each | slots add: (RsrReference from: each)]
%

category: 'accessing'
method: RsrServiceSnapshot
snapshotIdentifier

	^0
%

category: 'other'
method: RsrServiceSnapshot
targetClass

	^RsrClassResolver classNamed: self targetClassName
%

category: 'other'
method: RsrServiceSnapshot
targetClassName

	^targetClassName
%

category: 'other'
method: RsrServiceSnapshot
targetClassNameReference

	^RsrSymbolReference from: self targetClassName
%

category: 'accessing'
method: RsrServiceSnapshot
targetServiceType

	^self targetClass isClientClass
		ifTrue: [#client]
		ifFalse: [#server]
%

category: 'accessing'
method: RsrServiceSnapshot
templateClass

	^self targetClass templateClass
%

! Class implementation for 'RsrSignalErrorInAsString'

!		Instance methods for 'RsrSignalErrorInAsString'

category: 'converting'
method: RsrSignalErrorInAsString
asString

	^Error signal
%

! Class implementation for 'RsrSnapshotAnalysis'

!		Class methods for 'RsrSnapshotAnalysis'

category: 'instance creation'
classmethod: RsrSnapshotAnalysis
roots: anArray
connection: aConnection

	^self new
		roots: anArray;
		connection: aConnection;
		yourself
%

!		Instance methods for 'RsrSnapshotAnalysis'

category: 'analyzing'
method: RsrSnapshotAnalysis
analyze: anObject

	(analyzedObjects includes: anObject) ifTrue: [ ^ self ].
	analyzedObjects add: anObject.
	^ (self referenceClassFor: anObject) analyze: anObject using: self
%

category: 'analyzing'
method: RsrSnapshotAnalysis
analyzeCollection: aCollection

	aCollection do: [ :each | self analyze: each ].
	^ aCollection
%

category: 'analyzing'
method: RsrSnapshotAnalysis
analyzeDictionary: aDictionary

	aDictionary keysAndValuesDo: [ :key :value | 
		self
			analyze: key;
			analyze: value ].
	^ aDictionary
%

category: 'accessing'
method: RsrSnapshotAnalysis
analyzedObjects

	^ analyzedObjects
%

category: 'analyzing'
method: RsrSnapshotAnalysis
analyzeImmediate: anImmediateObject

	^anImmediateObject
%

category: 'analyzing'
method: RsrSnapshotAnalysis
analyzeService: aService

	self ensureRegistered: aService.
	RsrServiceSnapshot
		reflectedVariablesFor: aService
		do: [ :each | self analyze: each ].
	snapshots add: (RsrServiceSnapshot from: aService)
%

category: 'accessing'
method: RsrSnapshotAnalysis
connection

	^connection
%

category: 'accessing'
method: RsrSnapshotAnalysis
connection: aConnection

	connection := aConnection
%

category: 'actions'
method: RsrSnapshotAnalysis
ensureRegistered: aService

	self connection _ensureRegistered: aService.
	aService isServer
		ifTrue: [self connection _stronglyRetain: aService]
%

category: 'initialization'
method: RsrSnapshotAnalysis
initialize

	super initialize.
	snapshots := OrderedCollection new.
	analyzedObjects := IdentitySet new
%

category: 'actions'
method: RsrSnapshotAnalysis
perform

	roots do: [:each | self analyze: each]
%

category: 'accessing'
method: RsrSnapshotAnalysis
referenceClassFor: anObject

	^RsrReference referenceClassFor: anObject
%

category: 'accessing'
method: RsrSnapshotAnalysis
roots

	^roots
%

category: 'accessing'
method: RsrSnapshotAnalysis
roots: anArray

	roots := anArray
%

category: 'actions'
method: RsrSnapshotAnalysis
snapshot: aService

	snapshots add: (RsrServiceSnapshot from: aService)
%

category: 'accessing'
method: RsrSnapshotAnalysis
snapshots

	^snapshots
%

category: 'accessing'
method: RsrSnapshotAnalysis
snapshots: anOrderedCollection

	snapshots := anOrderedCollection
%

! Class implementation for 'RsrSocket'

!		Class methods for 'RsrSocket'

category: 'private-instance creation'
classmethod: RsrSocket
_nativeSocket: aGsSignalingSocket
	"Private - Create a instance backed by the provided GsSignalingSocket"

	^self basicNew
		_nativeSocket: aGsSignalingSocket;
		yourself
%

!		Instance methods for 'RsrSocket'

category: 'accepting connections'
method: RsrSocket
accept
	"Return an RsrSocket which is connected to a peer. In the event that the socket is closed while waiting, signal RsrSocketClosed."

	^[self class _nativeSocket: nativeSocket accept]
		on: SocketError
		do: [:ex | ex resignalAs: (RsrSocketError new messageText: ex messageText)]
%

category: 'accepting connections'
method: RsrSocket
bindAddress: address
port: port
	"Bind the socket to the provided port and address. Signal RsrInvalidBind in the event the bind fails."

	[nativeSocket
		bindTo: port
		toAddress: address]
			on: SocketError, OutOfRange
			do: [:ex | ex resignalAs: (RsrInvalidBind new messageText: ex messageText)]
%

category: 'terminating connections'
method: RsrSocket
close
	"Ensure closure of the Socket and cleanup any associated resources."

	nativeSocket close
%

category: 'establishing connections'
method: RsrSocket
connectToHost: hostname
port: port
	"Establish a connect to the provided host and port. If the socket is unable to establish, signal RsrConnectFailed.
	If the socket is bound to an address/port, signal RsrInvalidConnect.
	<hostname> - The name or ip address of a machine which should accept a connection.
	<port> - An integer representing a valid TCP port."

	[nativeSocket
		connectTo: port
		on: hostname]
			on: SocketError, OutOfRange
			do: [:ex | ex resignalAs: (RsrConnectFailed new messageText: ex messageText)]
%

category: 'initialize'
method: RsrSocket
initialize

	super initialize.
	nativeSocket := GsSignalingSocket new
%

category: 'testing'
method: RsrSocket
isConnected
	"Return true if the socket is open and connected with a peer. Return false otherwise."

	^nativeSocket isConnected
%

category: 'accepting connections'
method: RsrSocket
listen: backlogLength
	"Starting listening for connections. <backlogLength> specifies the number of connections to allow in a pending state.
	The actual backlog may support fewer prending connections depending upon implementation."

	nativeSocket makeListener: backlogLength
%

category: 'accessing'
method: RsrSocket
port
	"Return the port associated with the socket."

	^nativeSocket port
%

category: 'read/write'
method: RsrSocket
read: count
into: bytes
startingAt: index
	"Read <count> number of bytes into <bytes> and place the first byte into slot <index>.
	<bytes> is assumed to be at least <count + index> bytes in size.
	Return the number of bytes successfully read. Signal RsrSocketClosed if the socket is closed before or during the call."

	| numRead |
	[numRead := nativeSocket
		read: count
		into: bytes
		startingAt: index]
			on: SocketError
			do: [:ex | ex resignalAs: (RsrSocketClosed new messageText: ex messageText)].
	^numRead > 0
		ifTrue: [numRead]
		ifFalse:
			[nativeSocket close.
			RsrSocketClosed signal]
%

category: 'read/write'
method: RsrSocket
write: count
from: bytes
startingAt: index
	"Write <count> number of bytes from <bytes> with <index> as the index of the first bytes.
	If <bytes> is smaller than <index + count> the behavior is undefined.
	If the socket is not connected, signal RsrSocketClosed."

	^[nativeSocket
		write: count
		from: bytes
		startingAt: index]
			on: SocketError
			do: [:ex | ex resignalAs: (RsrSocketClosed new messageText: ex messageText)]
%

category: 'private-accessing'
method: RsrSocket
_nativeSocket: aGsSignalingSocket
	"Private - Configure w/ a platform socket"

	nativeSocket := aGsSignalingSocket
%

! Class implementation for 'RsrSocketChannelLoop'

!		Class methods for 'RsrSocketChannelLoop'

category: 'instance creation'
classmethod: RsrSocketChannelLoop
on: aChannel

	^self new
		channel: aChannel;
		yourself
%

!		Instance methods for 'RsrSocketChannelLoop'

category: 'accessing'
method: RsrSocketChannelLoop
channel

	^channel
%

category: 'accessing'
method: RsrSocketChannelLoop
channel: aChannel

	channel := aChannel
%

category: 'running'
method: RsrSocketChannelLoop
executeCycle

	self subclassResponsibility
%

category: 'initialization'
method: RsrSocketChannelLoop
initialize

	super initialize.
	state := self stoppedState
%

category: 'testing'
method: RsrSocketChannelLoop
isActive

	^state == self runningState
%

category: 'testing'
method: RsrSocketChannelLoop
isProcessActive

	^process ~~ nil
%

category: 'running'
method: RsrSocketChannelLoop
log

	^RsrLogWithPrefix
		prefix: self class name asString
		log: self channel log
%

category: 'running'
method: RsrSocketChannelLoop
log: aString

	self log debug: aString
%

category: 'accessing'
method: RsrSocketChannelLoop
priority

	^Processor lowIOPriority
%

category: 'running'
method: RsrSocketChannelLoop
report: aCommand

	aCommand reportOn: self log
%

category: 'running'
method: RsrSocketChannelLoop
reportException: anException

	self log: anException description
%

category: 'running'
method: RsrSocketChannelLoop
runLoop

	[self isActive]
		whileTrue:
			[[self executeCycle]
				on: Error
				do:
					[:ex |
					self reportException: ex.
					self channel genericError: ex]]
%

category: 'accessing'
method: RsrSocketChannelLoop
runningState

	^#Running
%

category: 'commands'
method: RsrSocketChannelLoop
start

	state := self runningState.
	process := RsrProcessModel
		fork: [self runLoop.
				process := nil]
		at: self priority
%

category: 'commands'
method: RsrSocketChannelLoop
stop

	self isActive ifFalse: [^self].
	state := self stoppedState
%

category: 'accessing'
method: RsrSocketChannelLoop
stoppedState

	^#Stop
%

category: 'accessing'
method: RsrSocketChannelLoop
stream

	^self channel stream
%

! Class implementation for 'RsrCommandSink'

!		Instance methods for 'RsrCommandSink'

category: 'accessing'
method: RsrCommandSink
encoder

	^RsrEncoder new
%

category: 'commands'
method: RsrCommandSink
enqueue: aCommand

	self isActive ifTrue: [queue nextPut: aCommand]
%

category: 'commands'
method: RsrCommandSink
executeCycle

	[| command |
	command := queue next.
	command == self stopToken
		ifTrue: [^self].
	self writeCommand: command.
	(queue size = 0)
		ifTrue: [self flush]]
		on: RsrSocketClosed
		do:
			[:ex |
			self reportException: ex.
			self channel channelDisconnected]
%

category: 'commands'
method: RsrCommandSink
flush

	self stream flush
%

category: 'initialization'
method: RsrCommandSink
initialize

	super initialize.
	queue := SharedQueue new
%

category: 'commands'
method: RsrCommandSink
stop

	super stop.
	queue nextPut: self stopToken
%

category: 'accessing'
method: RsrCommandSink
stopToken

	^self stoppedState
%

category: 'writing'
method: RsrCommandSink
write: aByteArray

	self stream nextPutAll: aByteArray
%

category: 'writing'
method: RsrCommandSink
writeCommand: aCommand

	self report: aCommand.
	aCommand
		encode: self stream
		using: self encoder
%

! Class implementation for 'RsrCommandSource'

!		Instance methods for 'RsrCommandSource'

category: 'accessing'
method: RsrCommandSource
decoder

	^RsrDecoder new
%

category: 'commands'
method: RsrCommandSource
executeCycle

	[| command |
	command := self nextCommand.
	self report: command.
	self channel received: command]
		on: RsrSocketClosed
		do:
			[:ex |
			self reportException: ex.
			self channel channelDisconnected]
%

category: 'commands'
method: RsrCommandSource
nextCommand

	^self decoder decodeCommand: self stream
%

! Class implementation for 'RsrSocketPair'

!		Class methods for 'RsrSocketPair'

category: 'instance creation'
classmethod: RsrSocketPair
firstSocket: firstSocket
secondSocket: secondSocket

	^super new
		firstSocket: firstSocket;
		secondSocket: secondSocket;
		yourself
%

category: 'accessing'
classmethod: RsrSocketPair
listenPort

	^64455
%

category: 'instance creation'
classmethod: RsrSocketPair
new

	| localhost port listener firstSocket secondSocket |
	localhost := '127.0.0.1'.
	port := 8765.
	listener := self socketClass new.
	secondSocket := self socketClass new.
	listener
		bindAddress: localhost
		port: port.
	listener listen: 1.
	secondSocket
		connectToHost: localhost
		port: port.
	firstSocket := listener accept.
	listener close.
	(firstSocket isConnected and: [secondSocket isConnected])
		ifFalse: [self error: 'Failed to create socket pair'].
	^self
		firstSocket: firstSocket
		secondSocket: secondSocket
%

category: 'accessing'
classmethod: RsrSocketPair
socketClass

	^RsrSocket
%

!		Instance methods for 'RsrSocketPair'

category: 'closing'
method: RsrSocketPair
close

	firstSocket close.
	secondSocket close
%

category: 'accessing'
method: RsrSocketPair
firstSocket

	^firstSocket
%

category: 'accessing'
method: RsrSocketPair
firstSocket: anObject

	firstSocket := anObject
%

category: 'accessing'
method: RsrSocketPair
firstStream

	^self socketStreamClass on: firstSocket
%

category: 'accessing'
method: RsrSocketPair
secondSocket

	^secondSocket
%

category: 'accessing'
method: RsrSocketPair
secondSocket: anObject

	secondSocket := anObject
%

category: 'accessing'
method: RsrSocketPair
secondStream

	^self socketStreamClass on: secondSocket
%

category: 'accessing'
method: RsrSocketPair
socketStreamClass

	^(RsrClassResolver classNamed: #RsrSocketStream)
%

! Class implementation for 'RsrSocketStream'

!		Class methods for 'RsrSocketStream'

category: 'instance creation'
classmethod: RsrSocketStream
on: anRsrSocket

	^self new
		socket: anRsrSocket;
		yourself
%

!		Instance methods for 'RsrSocketStream'

category: 'testing'
method: RsrSocketStream
atEnd
	"Return whether additional bytes could become available on the socket."

	^socket isConnected not
%

category: 'accessing'
method: RsrSocketStream
chunkSize
	"The largest size that should be read from or written to a Socket in each attempt."

	^4096
%

category: 'closing'
method: RsrSocketStream
close

	socket close
%

category: 'flushing'
method: RsrSocketStream
flush
	"Flush any buffered bytes to the socket."
	"NOP"
%

category: 'testing'
method: RsrSocketStream
isConnected
	"Is the stream still connected to a partner?"

	^socket isConnected
%

category: 'accessing'
method: RsrSocketStream
next
	"Return the next byte"

	^self next: 1
%

category: 'accessing'
method: RsrSocketStream
next: count
	"Return exactly <count> number of bytes.
	Signal RsrSocketClosed if the socket closes."

	| chunkSize bytes position numRead |
	chunkSize := self chunkSize.
	bytes := ByteArray new: count.
	position := 1.
	[position <= count]
		whileTrue:
			[numRead := socket
				read: (chunkSize min: count - position + 1)
				into: bytes
				startingAt: position.
			position := position + numRead].
	^bytes
%

category: 'adding'
method: RsrSocketStream
nextPutAll: bytes
	"Write <bytes> to the socket."

	| chunkSize position numBytes numWritten |
	chunkSize := self chunkSize.
	position := 1.
	numBytes := bytes size.
	[position <= numBytes]
		whileTrue:
			[numWritten := socket
				write: (chunkSize min: numBytes - position + 1)
				from: bytes
				startingAt: position.
			position := position + numWritten]
%

category: 'accessing'
method: RsrSocketStream
socket: anRsrSocket

	socket := anRsrSocket
%

! Class implementation for 'RsrStream'

!		Class methods for 'RsrStream'

category: 'instance creation'
classmethod: RsrStream
on: aStream

	^self new
		stream: aStream;
		yourself
%

!		Instance methods for 'RsrStream'

category: 'accessing'
method: RsrStream
binary

	stream binary
%

category: 'accessing'
method: RsrStream
close

	stream close
%

category: 'accessing'
method: RsrStream
flush

	stream flush
%

category: 'accessing'
method: RsrStream
next

	^self next: 1
%

category: 'accessing'
method: RsrStream
next: aLength

	| bytes |
	bytes := stream next: aLength.
	bytes size ~~ aLength
		ifTrue: [RsrSocketClosed signal].
	^bytes
%

category: 'accessing'
method: RsrStream
nextPutAll: aByteArray

	^stream nextPutAll: aByteArray
%

category: 'accessing'
method: RsrStream
stream: aStream

	stream := aStream
%

! Class implementation for 'RsrThreadSafeDictionary'

!		Instance methods for 'RsrThreadSafeDictionary'

category: 'accessing'
method: RsrThreadSafeDictionary
at: aKey
ifAbsent: aBlock

	| isPresent result |
	isPresent := true.
	result := mutex critical: [map at: aKey ifAbsent: [isPresent := false]].
	^isPresent
		ifTrue: [result]
		ifFalse: [aBlock value]
%

category: 'accessing'
method: RsrThreadSafeDictionary
at: aKey
put: aValue

	mutex critical: [map at: aKey put: aValue].
	^aValue
%

category: 'enumerating'
method: RsrThreadSafeDictionary
do: aBlock

	| values |
	values := mutex critical: [map values].
	values do: aBlock
%

category: 'initialization'
method: RsrThreadSafeDictionary
initialize

	super initialize.
	mutex := Semaphore forMutualExclusion.
	map := Dictionary new
%

category: 'removing'
method: RsrThreadSafeDictionary
removeKey: anRsrId

	^mutex critical: [map removeKey: anRsrId ifAbsent: [nil]]
%

category: 'removing'
method: RsrThreadSafeDictionary
removeKey: anRsrId
ifAbsent: aBlock

	| element wasRemoved |
	wasRemoved := true.
	element := mutex critical: [map removeKey: anRsrId ifAbsent: [wasRemoved := false]].
	^wasRemoved
		ifTrue: [element]
		ifFalse: [aBlock value]
%

! Class implementation for 'RsrProcessModel'

!		Class methods for 'RsrProcessModel'

category: 'accessing'
classmethod: RsrProcessModel
current

	^current ifNil: [self resetCurrent]
%

category: 'accessing'
classmethod: RsrProcessModel
current: concurrency

	current := concurrency
%

category: 'managing-concurrency'
classmethod: RsrProcessModel
currentStackDump

	^self current currentStackDump
%

category: 'managing-concurrency'
classmethod: RsrProcessModel
fork: aBlock

	^self current fork: aBlock
%

category: 'managing-concurrency'
classmethod: RsrProcessModel
fork: aBlock
at: aPriority

	^self current
		fork: aBlock
		at: aPriority
%

category: 'accessing'
classmethod: RsrProcessModel
resetCurrent

	^current := self new
%

!		Instance methods for 'RsrProcessModel'

category: 'managing-concurrency'
method: RsrProcessModel
fork: aBlock

	^aBlock fork
%

category: 'managing-concurrency'
method: RsrProcessModel
fork: aBlock
at: aPriority

	^aBlock forkAt: aPriority
%

! Class implementation for 'RsrTestingProcessModel'

!		Instance methods for 'RsrTestingProcessModel'

category: 'managing-concurrency'
method: RsrTestingProcessModel
fork: aBlock

	^super fork: (self protect: aBlock)
%

category: 'managing-concurrency'
method: RsrTestingProcessModel
fork: aBlock
at: aPriority

	^super
		fork: (self protect: aBlock)
		at: aPriority
%

category: 'accessing'
method: RsrTestingProcessModel
forkedException

	^forkedException
%

category: 'accessing'
method: RsrTestingProcessModel
protect: aBlock

	^[aBlock on: Error do: [:ex | forkedException := ex copy. ex return]]
%

! Class implementation for 'RsrTestCase'

!		Class methods for 'RsrTestCase'

category: 'accessing'
classmethod: RsrTestCase
defaultTimeLimit
	"This is needed for Pharo"

	^5 seconds
%

category: 'testing'
classmethod: RsrTestCase
isAbstract

	^self == RsrTestCase
%

!		Instance methods for 'RsrTestCase'

category: 'asserting'
method: RsrTestCase
assert: anObject
identicalTo: bObject

	self assert: anObject == bObject
%

category: 'utilities'
method: RsrTestCase
assumption: aString
	"This method serves as a marker for assumptions made in the tests.
	Perhaps some of the senders can be removed in the future."
%

category: 'asserting'
method: RsrTestCase
deny: anObject
identicalTo: bObject

	self assert: anObject ~~ bObject
%

category: 'utilities'
method: RsrTestCase
fork: aBlock

	^RsrProcessModel fork: aBlock
%

category: 'utilities'
method: RsrTestCase
hack: aString
	"Placeholder for things that need to be fixed"
%

category: 'utilities'
method: RsrTestCase
maximumReclamation

	self assert: RsrGarbageCollector maximumReclamation
%

category: 'running'
method: RsrTestCase
runCase

	| pm |
	pm := RsrTestingProcessModel new.
	RsrProcessModel current: pm.
	[super runCase]
		ensure:
			[RsrProcessModel resetCurrent].
	pm forkedException ifNotNil: [:ex | ex signal]
%

category: 'utilities'
method: RsrTestCase
shortWait

	(Delay forMilliseconds: 100) wait
%

! Class implementation for 'RsrClassResolverTestCase'

!		Instance methods for 'RsrClassResolverTestCase'

category: 'asserting'
method: RsrClassResolverTestCase
assert: aClassName
resolvesTo: expectedClass

	| actualClass |
	actualClass := RsrClassResolver classNamed: aClassName.
	self
		assert: actualClass
		identicalTo: expectedClass
%

category: 'running'
method: RsrClassResolverTestCase
testFailedResolution

	| actual marker |
	self
		should: [RsrClassResolver classNamed: #Xlerb]
		raise: RsrUnknownClass.
	marker := Object new.
	actual := RsrClassResolver
		classNamed: #Xlerb
		ifAbsent: [marker].
	self
		assert: actual
		identicalTo: marker
%

category: 'running'
method: RsrClassResolverTestCase
testSuccessfulResolution

	| actual |
	actual := RsrClassResolver classNamed: #Object.
	self
		assert: actual
		identicalTo: Object.
	actual := RsrClassResolver
		classNamed: #Object
		ifAbsent: [self assert: false].
	self
		assert: actual
		identicalTo: Object
%

! Class implementation for 'RsrCodecTest'

!		Class methods for 'RsrCodecTest'

category: 'testing'
classmethod: RsrCodecTest
isAbstract

	^self == RsrCodecTest
%

!		Instance methods for 'RsrCodecTest'

category: 'accessing'
method: RsrCodecTest
connection

	^connection
%

category: 'other'
method: RsrCodecTest
decoder

	^RsrDecoder new
%

category: 'accessing'
method: RsrCodecTest
encoder

	^RsrEncoder new
%

category: 'encode/decode'
method: RsrCodecTest
encodeReferenceOf: anObject

	| reference |
	reference := RsrReference from: anObject.
	^ByteArray streamContents: [:stream | self encoder encodeReference: reference onto: stream]
%

category: 'running-symbol'
method: RsrCodecTest
genericSymbol

	^#genericSymbol
%

category: 'running-symbol'
method: RsrCodecTest
genericSymbolEncoding

	^#[0 0 0 0 0 0 0 0], "OID = 0"
	#[0 0 0 0 0 0 0 1], "Immediate Type = 1"
	#[0 0 0 0 0 0 0 13], "Length of UTF-8 data"
	#[103 101 110 101 114 105 99 83 121 109 98 111 108]	"#genericSymbol"
%

category: 'accessing-objects'
method: RsrCodecTest
referencedServiceEncoding

	^#[0 0 0 0 0 0 0 0], "type"
	#[0 0 0 0 0 0 0 2], "referencedService's OID = 2"
	#[0 0 0 0 0 0 0 0], "Inst Var Count"
	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"
	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"
	#[0 0 0 0 0 0 0 19], "Length of UTF-8 encoded bytes"
	#[82 115 114 83 101 114 118 101 114 78 111 73 110 115 116 86 97 114 115]. "#RsrServerNoInstVars"
%

category: 'accessing-objects'
method: RsrCodecTest
rootServiceEncoding

	^#[0 0 0 0 0 0 0 0], "type"
	#[0 0 0 0 0 0 0 1], "rootService's OID = 1"
	#[0 0 0 0 0 0 0 1], "Inst Var Count"
	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"
	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"
	#[0 0 0 0 0 0 0 25], "Length of UTF-8 encoded bytes"
	#[82 115 114 83 101 114 118 101 114 82 101 102 101 114 101 110 99 101 83 101 114 118 105 99 101],
	#[0 0 0 0 0 0 0 2]. "#RsrServerReferenceService"
%

category: 'running'
method: RsrCodecTest
serviceNoInstVarsEncoding

	^#[0 0 0 0 0 0 0 0], "type"
	#[0 0 0 0 0 0 0 1], "rootService's OID = 1"
	#[0 0 0 0 0 0 0 0], "Inst Var Count"
	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"
	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"
	#[0 0 0 0 0 0 0 19], "Length of UTF-8 encoded bytes"
	#[82 115 114 83 101 114 118 101 114 78 111 73 110 115 116 86 97 114 115] "#RsrServerNoInstVars"
%

category: 'other'
method: RsrCodecTest
setUp

	super setUp.
	connection := RsrConnection
		channel: RsrNullChannel new
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	connection open
%

category: 'other'
method: RsrCodecTest
tearDown

	connection close.
	connection := nil.
	super tearDown
%

category: 'running-immediates'
method: RsrCodecTest
testArray

	| array encoding |
	array := Array
		with: self genericSymbol
		with: 5
		with: nil.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate Object OID"
		#[0 0 0 0 0 0 0 9], "Array type"
		#[0 0 0 0 0 0 0 3], "3 elements"
		self genericSymbolEncoding, "Generic Symbol"
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 3], "Positive Integer"
		#[0 0 0 0 0 0 0 1], "num bytes"
		#[5], "5"
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 6].
	self
		verifyImmediate: array
		encoding: encoding.
	array := Array new.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 9], "Array type"
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: array
		encoding: encoding
%

category: 'running-immediates'
method: RsrCodecTest
testBoolean

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 7].
	self
		verifyImmediate: true
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 8].
	self
		verifyImmediate: false
		encoding: encoding.
%

category: 'running-immediates'
method: RsrCodecTest
testByteArray

	| bytes encoding |
	bytes := #[].
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate Object OID"
		#[0 0 0 0 0 0 0 10], "ByteArray type"
		#[0 0 0 0 0 0 0 0], "size"
		bytes.
	self
		verifyImmediate: bytes
		encoding: encoding.
	bytes := #[1 2 3 4 5].
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 10],
		#[0 0 0 0 0 0 0 5],
		bytes.
	self
		verifyImmediate: bytes
		encoding: encoding
%

category: 'running-immediates'
method: RsrCodecTest
testCharacter

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: (Character codePoint: 0)
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 0 65].
	self
		verifyImmediate: (Character codePoint: 65)
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 0 65].
	self
		verifyImmediate: $A
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 1 212].
	self
		verifyImmediate: (Character codePoint: 16r01D4)
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 5],
		#[0 0 0 0 0 0 131 52].
	self
		verifyImmediate: (Character codePoint: 16r8334)
		encoding: encoding.
%

category: 'running-control words'
method: RsrCodecTest
testControlWord
	
	self
		verifyControlWord: 0
		encoding: #[0 0 0 0 0 0 0 0].
	self
		verifyControlWord: 1
		encoding: #[0 0 0 0 0 0 0 1].
	self
		verifyControlWord: -1
		encoding: #[255 255 255 255 255 255 255 255].
	self
		verifyControlWord: (2 raisedTo: 63) - 1
		encoding: #[127 255 255 255 255 255 255 255].
	self
		verifyControlWord: (2 raisedTo: 63) negated
		encoding: #[128 0 0 0 0 0 0 0]
%

category: 'running-immediates'
method: RsrCodecTest
testDateTime

	| dt encoding |
	dt := RsrDateAndTime posixEpoch.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 14],
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: dt
		encoding: encoding.
	dt := RsrDateAndTime fromMicroseconds: 1562692562657612. "2019-07-09T10:16:02.657612-07:00"
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 14],
		#[0 5 141 66 183 23 33 76].
	self
		verifyImmediate: dt
		encoding: encoding.
	dt := RsrDateAndTime fromMicroseconds: -1000000. "1969-12-31T23:59:59-00:00"
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 14],
		#[255 255 255 255 255 240 189 192].
	self
		verifyImmediate: dt
		encoding: encoding.
	dt := RsrDateAndTime fromMicroseconds: -491277642567488. "1954-06-07T14:59:17.432512-07:00"
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 14],
		#[255 254 65 47 130 160 240 192].
	self
		verifyImmediate: dt
		encoding: encoding
%

category: 'running-immediates'
method: RsrCodecTest
testDictionary

	| dictionary encoding result |
	dictionary := Dictionary new.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate Object OID"
		#[0 0 0 0 0 0 0 13], "Dictionary type"
		#[0 0 0 0 0 0 0 0]. "0 associations"
	self
		verifyImmediate: dictionary
		encoding: encoding.
	dictionary := Dictionary new
		at: 1 put: self genericSymbol;
		at: false put: true;
		yourself.
	encoding := self encodeReferenceOf: dictionary.
	result := (self decoder decodeReference: encoding readStream) resolve: self connection.
	self
		assert: result
		equals: dictionary.
	self
		deny: result
		identicalTo: dictionary.
	"self hack: 'Order is not guaranteed in a dictionary'.
	encoding :=
		#[0 0 0 0 0 0 0 0], ""Immediate OID""
		#[0 0 0 0 0 0 0 13], ""Dictionary Type""
		#[0 0 0 0 0 0 0 2], ""Two assocs""
		#[0 0 0 0 0 0 0 0], ""nil""
		#[0 0 0 0 0 0 0 6],
		#[0 0 0 0 0 0 0 0], ""true""
		#[0 0 0 0 0 0 0 7],
		#[0 0 0 0 0 0 0 0], ""Integer 1""
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 1],
		#[1],
		self genericSymbolEncoding.
	self
		verifyImmediate: dictionary
		encoding: encoding"
%

category: 'running-immediates'
method: RsrCodecTest
testDouble

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[128 0 0 0 0 0 0 0].
	self
		verifyImmediate: -0.0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: 0.0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[191 240 0 0 0 0 0 0].
	self
		verifyImmediate: -1.0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[63 240 0 0 0 0 0 0].
	self
		verifyImmediate: 1.0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[63 185 153 153 153 153 153 154].
	self
		verifyImmediate: 0.1
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[191 185 153 153 153 153 153 154].
	self
		verifyImmediate: -0.1
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[127 240 0 0 0 0 0 0].
	self
		verifyImmediate: RsrDoubleReference infinity
		encoding: encoding
%

category: 'running-immediates'
method: RsrCodecTest
testInteger

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 1],
		#[0].
	self
		verifyImmediate: 0
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 1],
		#[4].
	self
		verifyImmediate: 4
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 5],
		#[1 15 248 235 121].
	self
		verifyImmediate: 4562938745
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 4],
		#[0 0 0 0 0 0 0 5],
		#[1 15 248 235 121].
	self
		verifyImmediate: -4562938745
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 13],
		#[10 101 181 177 179 46 128 92 96 64 190 76 107].
	self
		verifyImmediate: 823759265872134912569713249387
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 4],
		#[0 0 0 0 0 0 0 13],
		#[10 101 181 177 179 46 128 92 96 64 190 76 107].
	self
		verifyImmediate: -823759265872134912569713249387
		encoding: encoding.
%

category: 'running-immediates'
method: RsrCodecTest
testNil

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 6].
	self
		verifyImmediate: nil
		encoding: encoding
%

category: 'running-immediates'
method: RsrCodecTest
testOrderedCollection

	| oc encoding |
	oc := OrderedCollection new.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 12], "OrderedCollection type"
		#[0 0 0 0 0 0 0 0].
	self
		verifyImmediate: oc
		encoding: encoding.
	oc := OrderedCollection
		with: self genericSymbol
		with: 5
		with: nil.
	encoding :=
		#[0 0 0 0 0 0 0 0], "Immediate Object OID"
		#[0 0 0 0 0 0 0 12], "OrderedCollection type"
		#[0 0 0 0 0 0 0 3], "3 elements"
		self genericSymbolEncoding, "Generic Symbol"
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 3], "Positive Integer"
		#[0 0 0 0 0 0 0 1], "num bytes"
		#[5], "5"
		#[0 0 0 0 0 0 0 0], "Immediate OID"
		#[0 0 0 0 0 0 0 6].
	self
		verifyImmediate: oc
		encoding: encoding
%

category: 'running-immediates'
method: RsrCodecTest
testSet

	| set encoding result |
	set := Set new.
	encoding :=
		#[0 0 0 0 0 0 0 0], "OID"
		#[0 0 0 0 0 0 0 11], "Set"
		#[0 0 0 0 0 0 0 0]. "0 elements"
	self
		verifyImmediate: set
		encoding: encoding.
	set := Set
		with: true
		with: nil.
	encoding := self encodeReferenceOf: set.
	result := (self decoder decodeReference: encoding readStream) resolve: self connection.
	self
		assert: result
		equals: set.
	self
		deny: result
		identicalTo: set.
	"self hack: 'Hashed collections do not have an ordering'.
	encoding :=
		#[0 0 0 0 0 0 0 0], ""OID""
		#[0 0 0 0 0 0 0 11], ""Set""
		#[0 0 0 0 0 0 0 2], ""2 elements""
		#[0 0 0 0 0 0 0 0], ""true""
		#[0 0 0 0 0 0 0 7],
		#[0 0 0 0 0 0 0 0], ""nil""
		#[0 0 0 0 0 0 0 6].
	self
		verifyImmediate: set
		encoding: encoding"
%

category: 'running-symbol'
method: RsrCodecTest
testString

	| encoding |
	encoding :=
		#[0 0 0 0 0 0 0 0], "OID = 0"
		#[0 0 0 0 0 0 0 2], "Immediate Type = 2"
		#[0 0 0 0 0 0 0 0], "length"
		#[].	 "empty string"
	self
		verifyImmediate: ''
		encoding: encoding.
	encoding :=
		#[0 0 0 0 0 0 0 0], "OID = 0"
		#[0 0 0 0 0 0 0 2], "Immediate Type = 2"
		#[0 0 0 0 0 0 0 13], "length"
		#[103 101 110 101 114 105 99 83 116 114 105 110 103].	 "genericString"
	self
		verifyImmediate: 'genericString'
		encoding: encoding
%

category: 'running-symbol'
method: RsrCodecTest
testSymbol

	self
		verifyImmediate: self genericSymbol
		encoding: self genericSymbolEncoding
%

category: 'asserting'
method: RsrCodecTest
verifyControlWord: anInteger
encoding: bytes

	self subclassResponsibility
%

category: 'asserting'
method: RsrCodecTest
verifyImmediate: anImmediateObject
encoding: encoding

	self subclassResponsibility
%

! Class implementation for 'RsrDecoderTest'

!		Instance methods for 'RsrDecoderTest'

category: 'asserting'
method: RsrDecoderTest
assertReference: bytes
decodesTo: expected

	| actual |
	actual := self decodeReference: bytes.
	self
		assert: actual
		equals: expected
%

category: 'decoding'
method: RsrDecoderTest
decodeReference: bytes

	^(self decoder decodeReference: bytes readStream) resolve: self connection
%

category: 'decoding'
method: RsrDecoderTest
decodeService: anObjectBytes

	^(self decoder decodeServiceSnapshot: anObjectBytes readStream) reifyIn: self connection
%

category: 'running'
method: RsrDecoderTest
testDeliverResponse

	| service response encoding command decodedService |
	service := RsrServerNoInstVars new.
	self connection _ensureRegistered: service.
	response := #responseSymbol.
	encoding :=
		#[0 0 0 0 0 0 0 2], "DeliverResponse Command"
		#[0 0 0 0 0 0 0 1], "Transaction Id"
		#[0 0 0 0 0 0 0 1], "Number of services"
		self serviceNoInstVarsEncoding,
		#[0 0 0 0 0 0 0 0], "Service Name Symbol Reference"
		#[0 0 0 0 0 0 0 1], "Object Type for Symbol"
		#[0 0 0 0 0 0 0 14], "Length of UTF-8 bytes"
		#[114 101 115 112 111 110 115 101 83 121 109 98 111 108]. "#responseSymbol"
	command := self decoder decodeCommand: encoding readStream.
	self
		assert: command class
		equals: RsrDeliverResponse.
	self
		assert: command transaction
		equals: 1.
	self
		assert: command snapshots size
		equals: 1.
	decodedService := command snapshots first reifyIn: self connection.
	self
		assert: decodedService
		equals: service.
	self
		assert: (command response resolve: self connection)
		equals: response
%

category: 'running'
method: RsrDecoderTest
testReleaseServices

	| command encoding |
	encoding :=
		#[0 0 0 0 0 0 0 3], "ReleaseObjects Command"
		#[0 0 0 0 0 0 0 5], "Num OIDS"
		#[0 0 0 0 0 0 0 1], "First OID"
		#[0 0 0 0 0 0 0 2],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 4],
		#[0 0 0 0 0 0 0 5]. "Last OID"
	command := self decoder decodeCommand: encoding readStream.
	self
		assert: command sids
		equals: #(1 2 3 4 5)
%

category: 'running'
method: RsrDecoderTest
testSendMessage

	| service encoding command |
	service := RsrServerNoInstVars new.
	self connection _ensureRegistered: service.
	encoding :=
		#[0 0 0 0 0 0 0 1], "SendMessage Command"
		#[0 0 0 0 0 0 0 1], "Transaction ID"
		#[0 0 0 0 0 0 0 1], "One service is part of this message"
		self serviceNoInstVarsEncoding,
		#[0 0 0 0 0 0 0 1], "Receiver OID"
		#[0 0 0 0 0 0 0 0], "Selector Reference"
		#[0 0 0 0 0 0 0 1], "Object Type for Symbol"
		#[0 0 0 0 0 0 0 8], "Length of UTF-8 bytes"
		#[114 101 116 117 114 110 52 50], "#return42"
		#[0 0 0 0 0 0 0 0]. "Argument Count"
	command := self decoder decodeCommand: encoding readStream.
	self
		assert: command class
		equals: RsrSendMessage.
	self
		assert: command transaction
		equals: 1.
	self
		assert: (command receiverReference resolve: self connection)
		identicalTo: service.
	self
		assert: (command selectorReference resolve: self connection)
		identicalTo: #return42.
	self
		assert: command argumentReferences
		equals: #().
	self
		assert: command snapshots size
		equals: 1
%

category: 'running'
method: RsrDecoderTest
testServiceDecodeIdentity
	"Ensure that decoding an object multiple times results in
	a single object getting created."

	| firstService secondService |
	firstService := self decodeService: self serviceNoInstVarsEncoding.
	secondService := self decodeService: self serviceNoInstVarsEncoding.
	self
		assert: firstService
		identicalTo: secondService
%

category: 'running'
method: RsrDecoderTest
testServiceNoInstVars

	| decodedService |
	decodedService := self decodeService: self serviceNoInstVarsEncoding.
	self
		assert: decodedService class
		equals: RsrServerNoInstVars.
	self
		assert: decodedService _id
		equals: 1
%

category: 'running'
method: RsrDecoderTest
testServiceReferenceService

	| rootService referencedService |
	referencedService := self decodeService: self referencedServiceEncoding.
	self
		assert: referencedService class
		equals: RsrServerNoInstVars.
	self
		assert: referencedService _id
		equals: 2.
	rootService := self decodeService: self rootServiceEncoding.
	self
		assert: rootService class
		equals: RsrServerReferenceService.
	self
		assert: rootService service
		equals: referencedService
%

category: 'asserting'
method: RsrDecoderTest
verifyControlWord: expected
encoding: bytes

	| actual |
	actual := self decoder decodeControlWord: bytes readStream.
	self
		assert: actual
		equals: expected
%

category: 'asserting'
method: RsrDecoderTest
verifyImmediate: expected
encoding: encoding

	| actual |
	actual := (self decoder decodeReference: encoding readStream) resolve: self connection.
	self
		assert: actual
		equals: expected
%

! Class implementation for 'RsrEncoderTest'

!		Instance methods for 'RsrEncoderTest'

category: 'other'
method: RsrEncoderTest
register: aService

	self connection _ensureRegistered: aService
%

category: 'running-immediates'
method: RsrEncoderTest
testDeliverResponse

	| service response command result expectedEncoding |
	service := RsrClientNoInstVars new.
	self register: service.
	response := #responseSymbol.
	command := RsrDeliverResponse
		transaction: 1
		responseReference: (RsrReference from: response)
		snapshots: (Array with: (RsrServiceSnapshot from: service)).
	result := self encoder encodeDeliverResponse: command.
	expectedEncoding :=
		#[0 0 0 0 0 0 0 2], "DeliverResponse Command"
		#[0 0 0 0 0 0 0 1], "Transaction Id"
		#[0 0 0 0 0 0 0 1], "One service is part of this response"
		self serviceNoInstVarsEncoding,
		#[0 0 0 0 0 0 0 0], "Service Name Symbol Reference"
		#[0 0 0 0 0 0 0 1], "Object Type for Symbol"
		#[0 0 0 0 0 0 0 14], "Length of UTF-8 bytes"
		#[114 101 115 112 111 110 115 101 83 121 109 98 111 108]. "#responseSymbol"
	self
		assert: result
		equals: expectedEncoding
%

category: 'running'
method: RsrEncoderTest
testNaN

	| encoding |
	"Signaling NaN is not tested.
	Negative NaN is not tested."
	encoding :=
		#[0 0 0 0 0 0 0 0],
		#[0 0 0 0 0 0 0 15],
		#[255 248 0 0 0 0 0 0].
	self
		verifyImmediate: RsrDoubleReference nan
		encoding: encoding.
%

category: 'running-immediates'
method: RsrEncoderTest
testReleaseServices

	| command result expectedEncoding |
	command := RsrReleaseServices sids: #(1 2 3 4 5).
	result := self encoder encodeReleaseServices: command.
	expectedEncoding :=
		#[0 0 0 0 0 0 0 3], "ReleaseObjects Command"
		#[0 0 0 0 0 0 0 5], "Num OIDS"
		#[0 0 0 0 0 0 0 1], "First OID"
		#[0 0 0 0 0 0 0 2],
		#[0 0 0 0 0 0 0 3],
		#[0 0 0 0 0 0 0 4],
		#[0 0 0 0 0 0 0 5]. "Last OID"
	self
		assert: result
		equals: expectedEncoding
%

category: 'running-immediates'
method: RsrEncoderTest
testSendMessage

	| service analysis command result expectedEncoding |
	service := RsrClientNoInstVars new.
	self register: service.
	analysis := RsrSnapshotAnalysis
		roots: (Array with: service)
		connection: self connection.
	analysis perform.
	command := RsrSendMessage
		transaction: 1
		receiverReference: (RsrReference from: service)
		selectorReference: (RsrSymbolReference from: #return42)
		argumentReferences: #().
	command snapshots: analysis snapshots.
	result := self encoder encodeSendMessage: command.
	expectedEncoding :=
		#[0 0 0 0 0 0 0 1], "SendMessage Command"
		#[0 0 0 0 0 0 0 1], "Transaction ID"
		#[0 0 0 0 0 0 0 1], "One service is part of this message"
		self serviceNoInstVarsEncoding,
		#[0 0 0 0 0 0 0 1], "Receiver OID"
		#[0 0 0 0 0 0 0 0], "Selector Reference"
		#[0 0 0 0 0 0 0 1], "Object Type for Symbol"
		#[0 0 0 0 0 0 0 8], "Length of UTF-8 bytes"
		#[114 101 116 117 114 110 52 50], "#return42"
		#[0 0 0 0 0 0 0 0]. "Argument Count"
	self
		assert: result
		equals: expectedEncoding
%

category: 'running'
method: RsrEncoderTest
testServiceNoInstVars

	| rootService encodedBytes expectedEncoding |
	rootService := RsrClientNoInstVars new.
	self register: rootService.
	encodedBytes := self encoder encodeServiceSnapshot: (RsrServiceSnapshot from: rootService).
	expectedEncoding := self serviceNoInstVarsEncoding.
	self
		assert: encodedBytes
		equals: expectedEncoding
%

category: 'running'
method: RsrEncoderTest
testServiceReferenceService

	| rootService referencedService encodedObject expectedEncoding |
	referencedService := RsrClientNoInstVars new.
	rootService := RsrClientReferenceService service: referencedService.
	self
		register: rootService;
		register: referencedService.
	encodedObject := self encoder encodeServiceSnapshot: (RsrServiceSnapshot from: rootService).
	expectedEncoding :=
		#[0 0 0 0 0 0 0 0], "type"
		#[0 0 0 0 0 0 0 1], "rootService's OID = 1"
		#[0 0 0 0 0 0 0 1], "Inst Var Count"
		#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"
		#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"
		#[0 0 0 0 0 0 0 25], "Length of UTF-8 encoded bytes"
		#[82 115 114 83 101 114 118 101 114 82 101 102 101 114 101 110 99 101 83 101 114 118 105 99 101],
		#[0 0 0 0 0 0 0 2]. "#RsrServerReferenceService"
	self
		assert: encodedObject
		equals: expectedEncoding.
	encodedObject := self encoder encodeServiceSnapshot: (RsrServiceSnapshot from: referencedService).
	expectedEncoding :=
		#[0 0 0 0 0 0 0 0], "type"
		#[0 0 0 0 0 0 0 2], "referencedService's OID = 2"
		#[0 0 0 0 0 0 0 0], "Inst Var Count"
		#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"
		#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"
		#[0 0 0 0 0 0 0 19], "Length of UTF-8 encoded bytes"
		#[82 115 114 83 101 114 118 101 114 78 111 73 110 115 116 86 97 114 115]. "#RsrServerNoInstVars"
	self
		assert: encodedObject
		equals: expectedEncoding
%

category: 'running'
method: RsrEncoderTest
testUnsupportedObject

	self
		should: [self encoder encodeReference: (RsrReference from: Object new) onto: (WriteStream on: ByteArray new)]
		raise: RsrUnsupportedObject
%

category: 'running-immediates'
method: RsrEncoderTest
verifyControlWord: anInteger
encoding: expected

	| actual |
	actual := ByteArray streamContents: [:stream | self encoder encodeControlWord: anInteger onto: stream].
	self
		assert: actual
		equals: expected
%

category: 'running-immediates'
method: RsrEncoderTest
verifyImmediate: anObject
encoding: expected

	| actual |
	actual := ByteArray streamContents: [:stream | self encoder encodeReference: (RsrReference from: anObject) onto: stream].
	self
		assert: actual
		equals: expected
%

! Class implementation for 'RsrConnectionSpecificationTestCase'

!		Instance methods for 'RsrConnectionSpecificationTestCase'

category: 'accessing'
method: RsrConnectionSpecificationTestCase
alternativeLocalhost

	^'127.0.1.1'
%

category: 'accessing'
method: RsrConnectionSpecificationTestCase
localhost

	^'127.0.0.1'
%

category: 'accessing'
method: RsrConnectionSpecificationTestCase
port

	^47652
%

category: 'running'
method: RsrConnectionSpecificationTestCase
testAcceptOnLocalhost

	| acceptor initiator semaphore connectionA connectionB |
	acceptor := RsrAcceptConnection
		host: self localhost
		port: self port.
	initiator := RsrInitiateConnection
		host: self localhost
		port: self port.
	semaphore := Semaphore new.
	self
		fork: [[connectionA := acceptor waitForConnection] ensure: [semaphore signal]];
		fork: [[connectionB := initiator connect] ensure: [semaphore signal]].
	semaphore wait; wait.
	self
		assert: connectionA isOpen;
		assert: connectionB isOpen.
	connectionA close.
	connectionB close
%

category: 'running'
method: RsrConnectionSpecificationTestCase
testCancelWaitForConnection

	| acceptor |
	acceptor := RsrAcceptConnection port: self port.
	self fork: [(Delay forSeconds: 1) wait. acceptor cancelWaitForConnection].
	self
		should: [acceptor waitForConnection]
		raise: RsrWaitForConnectionCancelled
%

category: 'running'
method: RsrConnectionSpecificationTestCase
testEstablishConnection

	| acceptor initiator semaphore connectionA connectionB |
	acceptor := RsrAcceptConnection port: self port.
	initiator := RsrInitiateConnection
		host: self localhost
		port: self port.
	semaphore := Semaphore new.
	self
		fork: [[connectionA := acceptor waitForConnection] ensure: [semaphore signal]];
		fork: [[connectionB := initiator connect] ensure: [semaphore signal]].
	semaphore wait; wait.
	self
		assert: connectionA isOpen;
		assert: connectionB isOpen.
	connectionA close.
	connectionB close
%

category: 'running'
method: RsrConnectionSpecificationTestCase
testFailedAcceptOnAlternativeLocalhost

	| acceptor initiator semaphore |
	acceptor := RsrAcceptConnection
		host: self alternativeLocalhost
		port: self port.
	initiator := RsrInitiateConnection
		host: self localhost
		port: self port.
	semaphore := Semaphore new.
	self fork: [[semaphore signal. acceptor waitForConnection] on: RsrWaitForConnectionCancelled do: [:ex | ex return]].
	[semaphore wait.
	self
		should: [initiator connect]
		raise: RsrSocketError]
			ensure: [acceptor cancelWaitForConnection]
%

category: 'running'
method: RsrConnectionSpecificationTestCase
testInternalConnectionSpecification
%

category: 'running'
method: RsrConnectionSpecificationTestCase
testInternalConnectionSpecificationConnectReturnsConnection
	"Ensure that sending #connect to an InternalConnectionSpecification
	results in returning one of the created Connections."

	| spec connection |
	spec := RsrInMemoryConnectionSpecification new.
	connection := spec connect.
	self assert: connection isOpen.
	connection close.
	spec := RsrInternalSocketConnectionSpecification new.
	connection := spec connect.
	self assert: connection isOpen.
	connection close
%

! Class implementation for 'RsrForwarderTest'

!		Instance methods for 'RsrForwarderTest'

category: 'running'
method: RsrForwarderTest
testForwarding
	"This test needs to be improved. It is out of sync."

	| service id connection forwarder sendMessage |
	service := RsrTestService clientClass new.
	id := 1.
	connection := RsrConnection
		channel: RsrNullChannel new
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	connection open.
	service registerWith: connection.
	forwarder := service remoteSelf.
	forwarder
		arg1: 15
		arg2: 42.
	sendMessage := connection channel lastCommand.
	self
		assert: sendMessage transaction
		equals: 1.
	self
		assert: (sendMessage receiverReference resolve: connection)
		equals: service.
	self
		assert: (sendMessage selectorReference resolve: connection)
		equals: #arg1:arg2:.
	self
		assert: (sendMessage argumentReferences collect: [:each | each resolve: connection])
		equals: #(15 42).
%

! Class implementation for 'RsrGarbageCollectorTestCase'

!		Instance methods for 'RsrGarbageCollectorTestCase'

category: 'running'
method: RsrGarbageCollectorTestCase
testMaximumReclamation

	self assert: RsrGarbageCollector maximumReclamation
%

! Class implementation for 'RsrNumericSpigotTest'

!		Instance methods for 'RsrNumericSpigotTest'

category: 'accessing'
method: RsrNumericSpigotTest
spigotClass

	^RsrNumericSpigot
%

category: 'running'
method: RsrNumericSpigotTest
testDefault

	| spigot |
	spigot := self spigotClass new.
	self
		assert: spigot next
		equals: 0.
	self
		assert: spigot next
		equals: 1
%

category: 'running'
method: RsrNumericSpigotTest
testFloat

	| spigot |
	spigot := self spigotClass
		start: 0
		step: 0.5.
	self
		assert: spigot next
		equals: 0.
	self
		assert: spigot next
		equals: 0.5.
	self
		assert: spigot next
		equals: 1.0.
%

category: 'running'
method: RsrNumericSpigotTest
testNaturals

	| spigot |
	spigot := self spigotClass naturals.
	self
		assert: spigot next
		equals: 1.
	self
		assert: spigot next
		equals: 2
%

category: 'running'
method: RsrNumericSpigotTest
testNegativeStep

	| spigot |
	spigot := self spigotClass
		start: 0
		step: -1.
	self
		assert: spigot next
		equals: 0.
	self
		assert: spigot next
		equals: -1.
	self
		assert: spigot next
		equals: -2
%

category: 'running'
method: RsrNumericSpigotTest
testNext

	| spigot |
	spigot := self spigotClass naturals.
	self
		assert: (Array with: 1 with: 2 with: 3)
		equals: (spigot next: 3)
%

! Class implementation for 'RsrThreadSafeNumericSpigotTest'

!		Instance methods for 'RsrThreadSafeNumericSpigotTest'

category: 'accessing'
method: RsrThreadSafeNumericSpigotTest
spigotClass

	^RsrThreadSafeNumericSpigot
%

! Class implementation for 'RsrPromiseTest'

!		Instance methods for 'RsrPromiseTest'

category: 'running'
method: RsrPromiseTest
testAsyncBreak

	| promise semaphore expected whenRan first second third |
	promise := RsrPromise new.
	semaphore := Semaphore new.
	expected := Object new.
	whenRan := false.
	promise
		when: [:object | whenRan := true. semaphore signal]
		catch: [:reason | first := reason. semaphore signal].
	promise
		when: [:object | whenRan := true. semaphore signal]
		catch: [:reason | second := reason. semaphore signal].
	self
		deny: promise isResolved;
		deny: promise isBroken;
		deny: promise isFulfilled.
	promise break: expected.
	self
		assert: promise isResolved;
		assert: promise isBroken;
		deny: promise isFulfilled.
	semaphore wait; wait.
	self shortWait. "Ensure any when blocks run if they are going to schedule."
	self deny: whenRan.
	self
		assert: first
		identicalTo: expected.
	self
		assert: second
		identicalTo: expected.
	promise
		when: [:object | whenRan := true. semaphore signal]
		catch: [:reason | third := reason. semaphore signal].
	semaphore wait.
	self shortWait.
	self deny: whenRan.
	self
		assert: third
		identicalTo: expected
%

category: 'running'
method: RsrPromiseTest
testAsyncFulfill

	| promise semaphore expected catchRan first second third |
	promise := RsrPromise new.
	semaphore := Semaphore new.
	expected := Object new.
	catchRan := false.
	promise
		when: [:object | first := object. semaphore signal]
		catch: [:reason | catchRan := true. semaphore signal].
	promise
		when: [:object | second := object. semaphore signal]
		catch: [:reason | catchRan := true. semaphore signal].
	self
		deny: promise isResolved;
		deny: promise isBroken;
		deny: promise isFulfilled.
	promise fulfill: expected.
	self
		assert: promise isResolved;
		deny: promise isBroken;
		assert: promise isFulfilled.
	semaphore wait; wait.
	self shortWait. "Ensure any catch blocks run if they are going to schedule."
	self deny: catchRan.
	self
		assert: first
		identicalTo: expected.
	self
		assert: second
		identicalTo: expected.
	promise
		when: [:object | third := object. semaphore signal]
		catch: [:reason | catchRan := true. semaphore signal].
	semaphore wait.
	self shortWait.
	self deny: catchRan.
	self
		assert: third
		identicalTo: expected
%

category: 'running'
method: RsrPromiseTest
testSyncBreak

	| promise expected exceptionRaised first second third |
	promise := RsrPromise new.
	expected := Object new.
	exceptionRaised := false.
	self fork: [[promise wait] on: RsrBrokenPromise do: [:ex | exceptionRaised := true. first := ex reason. ex return]].
	self fork: [[promise wait] on: RsrBrokenPromise do: [:ex | exceptionRaised := true. second := ex reason. ex return]].
	promise break: expected.
	self shortWait. "Allow results to process."
	self assert: exceptionRaised.
	self
		assert: first
		identicalTo: expected.
	self
		assert: second
		identicalTo: expected.
	self
		should: [promise wait]
		raise: RsrBrokenPromise.
	third := [promise wait]
		on: RsrBrokenPromise
		do: [:ex | ex return: ex reason].
	self
		assert: third
		identicalTo: expected
%

category: 'running'
method: RsrPromiseTest
testSyncFulfill

	| promise expected exceptionRaised first second |
	promise := RsrPromise new.
	expected := Object new.
	exceptionRaised := false.
	self fork: [[first := promise wait] on: RsrBrokenPromise do: [:ex | exceptionRaised := true. ex return]].
	self fork: [[second := promise wait] on: RsrBrokenPromise do: [:ex | exceptionRaised := true. ex return]].
	promise fulfill: expected.
	self shortWait. "Allow results to process."
	self deny: exceptionRaised.
	self
		assert: first
		identicalTo: expected.
	self
		assert: second
		identicalTo: expected.
	self
		assert: promise wait
		identicalTo: expected
%

! Class implementation for 'RsrSnapshotAnalysisTest'

!		Instance methods for 'RsrSnapshotAnalysisTest'

category: 'utilites'
method: RsrSnapshotAnalysisTest
analyze: anObject

	| analysis |
	analysis := RsrSnapshotAnalysis
		roots: (Array with: anObject)
		connection: connection.
	analysis perform.
	^analysis
%

category: 'running'
method: RsrSnapshotAnalysisTest
setUp

	super setUp.
	connection := RsrConnection
		channel: RsrNullChannel new
		transactionSpigot: RsrThreadSafeNumericSpigot naturals
		oidSpigot: RsrThreadSafeNumericSpigot naturals.
	connection open
%

category: 'running'
method: RsrSnapshotAnalysisTest
tearDown

	connection close.
	connection := nil.
	super tearDown
%

category: 'running'
method: RsrSnapshotAnalysisTest
testArrayCycle

	| array analysis |
	array := Array new: 1.
	array at: 1 put: array.
	analysis := self analyze: array.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 1.
	array at: 1 put: { array }.
	analysis := self analyze: array.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 2.
%

category: 'running'
method: RsrSnapshotAnalysisTest
testDictionaryCycle

	| dictionary analysis |
	dictionary := Dictionary new.
	dictionary at: 1 put: dictionary.
	analysis := self analyze: dictionary.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 2.

	dictionary removeKey: 1.
	dictionary at: dictionary put: 1.
	analysis := self analyze: dictionary.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 2
%

category: 'running'
method: RsrSnapshotAnalysisTest
testMultiPathsToSameService

	"Tests issue 76, Unnecessary duplicate snapshots being sent."

	| childService parentService orderedCollection analysis |
	childService := RsrRemoteAction clientClass new.
	parentService := RsrRemoteAction clientClass sharedVariable:
		                 childService.
	orderedCollection := OrderedCollection
		                     with: childService
		                     with: parentService.
	analysis := self analyze: orderedCollection.
	self assert: analysis snapshots size equals: 2.
	self
		assert: parentService isMirrored;
		assert: childService isMirrored
%

category: 'running'
method: RsrSnapshotAnalysisTest
testNewServiceInArray
	"Ensure a new service in a collection is properly tagged"

	| service analysis expected |
	service := RsrServerNoInstVars new.
	analysis := self analyze: (Array with: service).
	expected := OrderedCollection with: service.
	self
		assert: analysis snapshots size
		equals: 1.
	self assert: service isMirrored
%

category: 'running'
method: RsrSnapshotAnalysisTest
testNewServicesInDictionary
	"Ensure a new service in a collection is properly tagged"

	| key value dictionary analysis expected |
	key := RsrServerNoInstVars new.
	value := RsrServerNoInstVars new.
	dictionary := Dictionary new
		at: key put: value;
		yourself.
	analysis := self analyze: dictionary.
	self
		assert: analysis snapshots size
		equals: 2.
	self
		assert: key isMirrored;
		assert: value isMirrored
%

category: 'running'
method: RsrSnapshotAnalysisTest
testOrderedCollectionCycle

	| oc analysis |
	oc := OrderedCollection new.
	oc add: oc.
	analysis := self analyze: oc.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 1.

	oc := OrderedCollection with: (Array with: oc).
	analysis := self analyze: oc.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 3
%

category: 'running'
method: RsrSnapshotAnalysisTest
testServiceAllDataObjects
	"While this code is structurally similar to #testClientNoInstVars, it ensures
	that Data Objects are actually encoded in-line."

	| client analysis expected |
	client := RsrRemoteAction clientClass new.
	analysis := self analyze: client.
	expected := OrderedCollection with: client.
	self
		assert: analysis snapshots size
		equals: 1.
	self assert: client isMirrored
%

category: 'running'
method: RsrSnapshotAnalysisTest
testServiceNoInstVars

	| client analysis expected snapshot |
	client := RsrClientNoInstVars new.
	analysis := self analyze: client.
	expected := OrderedCollection with: client.
	self assert: client isMirrored.
	self
		assert: analysis snapshots size
		equals: 1.
	snapshot := analysis snapshots first.
	self
		assert: snapshot slots size
		equals: 0.
	self assert: snapshot shouldCreateServer.
	self
		assert: snapshot templateClass
		equals: client class templateClass
%

category: 'running'
method: RsrSnapshotAnalysisTest
testServiceReferencingAnotherService
	"While this code is structurally similar to #testClientNoInstVars, it ensures
	that Data Objects are actually encoded in-line."

	| referencedService client analysis expected |
	referencedService := RsrRemoteAction clientClass new.
	client := RsrRemoteAction clientClass sharedVariable: referencedService.
	analysis := self analyze: client.
	self
		assert: analysis snapshots size
		equals: 2.
	self
		assert: client isMirrored;
		assert: referencedService isMirrored
%

category: 'running'
method: RsrSnapshotAnalysisTest
testServiceWithCycle

	| rootClient referencedClient analysis |
	rootClient := RsrRemoteAction new.
	referencedClient := RsrRemoteAction sharedVariable: rootClient.
	rootClient sharedVariable: referencedClient.
	analysis := self analyze: rootClient.
	self
		assert: analysis snapshots size equals: 2;
		assert: analysis analyzedObjects size equals: 2
%

category: 'running'
method: RsrSnapshotAnalysisTest
testSetCycle

	| set analysis |
	set := Set new.
	set add: set.
	analysis := self analyze: set.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 1.

	set := Set new.
	set add: (Array with: set).
	analysis := self analyze: set.
	self
		assert: analysis snapshots size equals: 0;
		assert: analysis analyzedObjects size equals: 2
%

! Class implementation for 'RsrSocketStreamTestCase'

!		Instance methods for 'RsrSocketStreamTestCase'

category: 'initializing'
method: RsrSocketStreamTestCase
initializeStreams

	| socketPair |
	socketPair := RsrSocketPair new.
	aStream := socketPair firstStream.
	bStream := socketPair secondStream
%

category: 'initializing'
method: RsrSocketStreamTestCase
setUp

	super setUp.
	self initializeStreams
%

category: 'initializing'
method: RsrSocketStreamTestCase
tearDown

	aStream close.
	bStream close.
	super tearDown
%

category: 'running'
method: RsrSocketStreamTestCase
testNextAfterClose

	aStream close.
	self
		should: [aStream next]
		raise: RsrSocketClosed.
	self
		should: [bStream next]
		raise: RsrSocketClosed
%

category: 'running'
method: RsrSocketStreamTestCase
testNextPutAllAfterClose

	self deny: aStream atEnd.
	aStream close.
	self assert: aStream atEnd.
	self
		should: [aStream nextPutAll: #[1 2 3]]
		raise: RsrSocketClosed
%

category: 'running'
method: RsrSocketStreamTestCase
testSendReceive

	| count bytes |
	count := 1024.
	bytes := ByteArray new: count.
	aStream
		nextPutAll: bytes;
		flush.
	self
		assert: (bStream next: count)
		equals: bytes
%

! Class implementation for 'RsrSocketTestCase'

!		Class methods for 'RsrSocketTestCase'

category: 'accessing'
classmethod: RsrSocketTestCase
defaultTimeLimit

	^20 seconds
%

!		Instance methods for 'RsrSocketTestCase'

category: 'accessing'
method: RsrSocketTestCase
createPair: aBlock

	| address port listener peerA peerB semaphore |
	address := '127.0.0.1'.
	port := 45301.
	listener := self newSocket.
	listener
		bindAddress: address
		port: port.
	listener listen: 1.
	peerB := self newSocket.
	semaphore := Semaphore new.
	self
		fork: 
			[[peerA := self deferClose: listener accept] ensure: [semaphore signal]];
		fork:
			[[peerB connectToHost: address port: port] ensure: [semaphore signal]].
	semaphore wait; wait.
	listener close.
	((peerA notNil and: [peerA isConnected]) and: [peerB isConnected])
		ifTrue: [aBlock value: peerA value: peerB]
		ifFalse: [self error: 'Unable to create Socket Pair']
%

category: 'cleanup'
method: RsrSocketTestCase
deferClose: aSocket

	sockets add: aSocket.
	^aSocket
%

category: 'accessing'
method: RsrSocketTestCase
newSocket

	^self deferClose: RsrSocket new
%

category: 'running'
method: RsrSocketTestCase
setUp

	super setUp.
	sockets := OrderedCollection new
%

category: 'running'
method: RsrSocketTestCase
tearDown

	sockets do: [:each | each close].
	super tearDown
%

category: 'running-server'
method: RsrSocketTestCase
testAcceptConnects

	| listener client server |
	listener := self newSocket.
	listener
		bindAddress: '127.0.0.1'
		port: 45300.
	self
		assert: listener port
		equals: 45300.
	listener listen: 1.
	client := self newSocket.
	self
		deny: client isConnected;
		deny: listener isConnected.
	client connectToHost: '127.0.0.1' port: 45300.
	server := self deferClose: listener accept.
	self
		assert: server port
		equals: 45300.
	self assert: (client port > 1023).
	self
		assert: client isConnected;
		assert: server isConnected;
		deny: listener isConnected
%

category: 'running-server'
method: RsrSocketTestCase
testAcceptOnAlreadyClosedSocket

	| listener |
	listener := self newSocket.
	listener
		bindAddress: '127.0.0.1'
		port: 45300.
	listener listen: 1.
	listener close.
	self
		should: [listener accept]
		raise: RsrSocketError
%

category: 'running-server'
method: RsrSocketTestCase
testCloseDuringAccept

	| listener |
	listener := self newSocket.
	listener
		bindAddress: '127.0.0.1'
		port: 45300.
	listener listen: 1.
	self fork: [(Delay forSeconds: 1) wait. listener close].
	self
		should: [listener accept]
		raise: RsrSocketError
%

category: 'running-client'
method: RsrSocketTestCase
testConnectBoundSocket

	| listener |
	listener := self newSocket.
	listener
		bindAddress: '127.0.0.1'
		port: 45300.
	self
		should:
			[listener
				connectToHost: 'gemtalksystems.com'
				port: 80]
		raise: RsrSocketError
%

category: 'running-client'
method: RsrSocketTestCase
testFailedConnects

	| socket |
	socket := self newSocket.
	self deny: socket isConnected.
	self
		should:
			[socket
				connectToHost: 'do.no.create.used.for.testing.gemtalksystems.com'
				port: 80]
		raise: RsrConnectFailed.
	socket := self newSocket.
	self
		should:
			[socket
				connectToHost: 'gemtalksystems.com'
				port: 70000]
		raise: RsrConnectFailed.
	socket := self newSocket.
	self
		should:
			[socket
				connectToHost: '127.0.0.1'
				port: 79]
		raise: RsrConnectFailed.
	socket close
%

category: 'running-server'
method: RsrSocketTestCase
testInvalidBind

	| listener |
	listener := self newSocket.
	self "This IP is publicly routable and owned by Cloudflare. Should be invalid on all testing hosts."
		should: [listener bindAddress: '1.1.1.1' port: 45300]
		raise: RsrInvalidBind.
	listener := self newSocket.
	self
		should: [listener bindAddress: '127.0.0.1' port: 98765432]
		raise: RsrInvalidBind
%

category: 'running-server'
method: RsrSocketTestCase
testListenWithoutBind

	| listener |
	listener := self newSocket.
	listener listen: 1.
	self assert: (listener port > 1023)
%

category: 'running-read/write'
method: RsrSocketTestCase
testPartialRead

	| peerA peerB writeBuffer readBuffer count numRead |
	self
		createPair:
			[:a :b |
			peerA := a.
			peerB := b].
	count := 1024.
	writeBuffer := ByteArray new: count.
	1
		to: count
		do: [:i | writeBuffer at: i put: (i \\ 256)].
	readBuffer := ByteArray withAll: writeBuffer.
	peerA
		write: count - 1
		from: writeBuffer
		startingAt: 1.
	numRead := peerB
		read: count
		into: readBuffer
		startingAt: 1.
	self
		assert: numRead
		equals: count - 1.
	self
		assert: readBuffer
		equals: writeBuffer
%

category: 'running'
method: RsrSocketTestCase
testPort

	| socket |
	socket := self newSocket.
	self
		assert: socket port
		equals: 0
%

category: 'running-read/write'
method: RsrSocketTestCase
testReadAfterPeerClose

	| peerA peerB readBuffer count numRead |
	self
		createPair:
			[:a :b |
			peerA := a.
			peerB := b].
	count := 1024.
	readBuffer := ByteArray new: count.
	peerA close.
	self
		should:
			[numRead := peerB
				read: count
				into: readBuffer
				startingAt: 1]
		raise: RsrSocketClosed
%

category: 'running-read/write'
method: RsrSocketTestCase
testReadWrite

	| peerA peerB writeBuffer readBuffer count numWritten numRead |
	self
		createPair:
			[:a :b |
			peerA := a.
			peerB := b].
	count := 1024.
	writeBuffer := ByteArray new: count.
	1
		to: count
		do: [:i | writeBuffer at: i put: (i \\ 256)].
	readBuffer := ByteArray withAll: writeBuffer.
	numWritten := peerA
		write: count
		from: writeBuffer
		startingAt: 1.
	self
		assert: numWritten
		equals: count.
	numRead := peerB
		read: count
		into: readBuffer
		startingAt: 1.
	self
		assert: numRead
		equals: count.
	self
		assert: readBuffer
		equals: writeBuffer
%

category: 'running-client'
method: RsrSocketTestCase
testSuccessfulConnect

	| socket |
	socket := self newSocket.
	self deny: socket isConnected.
	socket
		connectToHost: 'gemtalksystems.com'
		port: 80.
	self assert: socket isConnected.
	socket close.
	self deny: socket isConnected
%

category: 'running-read/write'
method: RsrSocketTestCase
testUnconnectedReadWrite

	| socket count bytes |
	socket := self newSocket.
	count := 1024.
	bytes := ByteArray new: 1024.
	self
		should:
			[socket
				read: count
				into: bytes
				startingAt: 1]
		raise: RsrSocketClosed.
	self
		should:
			[socket
				write: count
				from: bytes
				startingAt: 1]
		raise: RsrSocketClosed
%

! Class implementation for 'RsrSystemTestCase'

!		Class methods for 'RsrSystemTestCase'

category: 'testing'
classmethod: RsrSystemTestCase
isAbstract

	^self == RsrSystemTestCase
%

!		Instance methods for 'RsrSystemTestCase'

category: 'expecting'
method: RsrSystemTestCase
expectCatch: aPromise

	| semaphore wasFulfilled result whenValue |
	semaphore := Semaphore new.
	wasFulfilled := false.
	aPromise
		when: [:value | whenValue := value. wasFulfilled := true. semaphore signal]
		catch: [:reason | result := reason. semaphore signal].
	semaphore wait.
	self deny: wasFulfilled.
	^result
%

category: 'expecting'
method: RsrSystemTestCase
expectWhen: aPromise

	| semaphore wasBroken result |
	semaphore := Semaphore new.
	wasBroken := false.
	aPromise
		when: [:value | result := value. semaphore signal]
		catch: [:r | wasBroken := true. semaphore signal].
	semaphore wait.
	self deny: wasBroken.
	^result
%

category: 'initialization'
method: RsrSystemTestCase
initializeInMemoryConnections

	| spec |
	spec := RsrInMemoryConnectionSpecification new.
	spec connect.
	connectionA := spec connectionA.
	connectionB := spec connectionB.
	self
		assert: connectionA isOpen;
		assert: connectionB isOpen
%

category: 'initialization'
method: RsrSystemTestCase
initializeSocketConnections

	| spec |
	spec := RsrInternalSocketConnectionSpecification new.
	spec connect.
	connectionA := spec connectionA.
	connectionB := spec connectionB.
	self
		assert: connectionA isOpen;
		assert: connectionB isOpen
%

category: 'accessing'
method: RsrSystemTestCase
serviceFactoryA

	^connectionA serviceFactory
%

category: 'accessing'
method: RsrSystemTestCase
serviceFactoryB

	^connectionB serviceFactory
%

category: 'initialization'
method: RsrSystemTestCase
setUp
	"Subclasses need to start their connections by calling
	#initializeInMemoryConnections or #initializeSocketConnections.
	#tearDown will close connections."

	super setUp
%

category: 'initialization'
method: RsrSystemTestCase
tearDown

	connectionA ifNotNil: [:conn | conn close].
	connectionB ifNotNil: [:conn | conn close].
	connectionA := connectionB := nil.
	super tearDown
%

! Class implementation for 'RsrConnectionTestCase'

!		Class methods for 'RsrConnectionTestCase'

category: 'testing'
classmethod: RsrConnectionTestCase
isAbstract

	^self == RsrConnectionTestCase
%

!		Instance methods for 'RsrConnectionTestCase'

category: 'running'
method: RsrConnectionTestCase
testWaitUntilClose

	| semaphore marker |
	semaphore := Semaphore new.
	marker := false.
	self
		fork:
			[semaphore signal.
			[connectionB waitUntilClose.
			marker := true]
				ensure: [semaphore signal]].
	semaphore wait.
	self deny: marker.
	connectionA close.
	semaphore wait.
	self assert: marker
%

! Class implementation for 'RsrInMemoryConnectionTestCase'

!		Instance methods for 'RsrInMemoryConnectionTestCase'

category: 'running'
method: RsrInMemoryConnectionTestCase
setUp

	super setUp.
	self initializeInMemoryConnections
%

! Class implementation for 'RsrSocketConnectionTestCase'

!		Instance methods for 'RsrSocketConnectionTestCase'

category: 'running'
method: RsrSocketConnectionTestCase
setUp

	super setUp.
	self initializeSocketConnections
%

! Class implementation for 'RsrLifetimeTest'

!		Class methods for 'RsrLifetimeTest'

category: 'testing'
classmethod: RsrLifetimeTest
isAbstract

	^self == RsrLifetimeTest
%

!		Instance methods for 'RsrLifetimeTest'

category: 'utilities'
method: RsrLifetimeTest
evaluateAsRemoteAction: aBlock
	"Evaluate the block and return the result through RSR."

	| client server |
	client := connectionA serviceFor: #RsrRemoteActionClient.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: aBlock.
	^client value
%

category: 'running'
method: RsrLifetimeTest
testEnsurePushedClientServerLifetime
	"This test is designed to ensure that a Server created via a 'pushed' Client
	exhibit the correct lifetime properties."

	| client sid server actual |
	client := connectionA serviceFor: #RsrClientNoInstVars.
	client synchronize.
	sid := client _id.
	self maximumReclamation. "Ensure the Server is strongly referenced in connectionB."
	server := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	client := nil.
	self maximumReclamation. "Ensure the Client is garbage collected."
	(Delay forSeconds: 1) wait. "Ensure the ReleaseServices Command is propogated and processed by connectionB."
	self maximumReclamation. "Ensure the Server is still referenced even after a garbage collect."
	actual := connectionA
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: actual
		equals: nil.
	actual := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	self
		assert: actual
		identicalTo: server.
	actual := nil. "Ensure we do not retain an extra reference to the Server."
	server := nil.
	self maximumReclamation. "Ensure Server is removed."
	actual := connectionB
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: actual
		equals: nil
%

category: 'running'
method: RsrLifetimeTest
testEnsureReturnedServerLifetime
	"Return a newly created Server (that is not registered.) It should persist in the framework until 
	both the associated Client is garbage collected and local references are dropped.

	If you change this method -- change #testEnsureReturnRegisteredServerLifetime as well."

	| client sid server result |
	client := self evaluateAsRemoteAction: [RsrServerNoInstVars new].
	sid := client _id.
	self maximumReclamation. "Ensure the Server instance is referenced."
	server := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	client := nil.
	self maximumReclamation.
	(Delay forSeconds: 1) wait. "Release Client."
	self maximumReclamation.
	"Ensure Client is released."
	result := connectionA
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: result
		equals: nil.
	"Ensure Server is still registered."
	result := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	self
		assert: result
		equals: server.
	result := server := nil.
	self maximumReclamation.
	result := connectionB
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: result
		equals: nil
%

category: 'running'
method: RsrLifetimeTest
testEnsureReturnRegisteredServerLifetime
	"Return a newly created Server (that is registered.) It should persist in the framework until 
	both the associated Client is garbage collected and local references are dropped.

	If you change this method -- change #testEnsureReturnedServerLifetime as well."

	| client sid server result |
	client := self evaluateAsRemoteAction: [RsrServerNoInstVars new registerWith: connectionB].
	sid := client _id.
	self maximumReclamation. "Ensure the Server instance is referenced."
	server := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	client := nil.
	self maximumReclamation.
	(Delay forSeconds: 1) wait. "Release Client."
	self maximumReclamation.
	"Ensure Client is released."
	result := connectionA
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: result
		equals: nil.
	"Ensure Server is still registered."
	result := connectionB
		serviceAt: sid
		ifAbsent: [self assert: false].
	self
		assert: result
		equals: server.
	result := server := nil.
	self maximumReclamation.
	result := connectionB
		serviceAt: sid
		ifAbsent: [nil].
	self
		assert: result
		equals: nil
%

! Class implementation for 'RsrInMemoryLifetimeTest'

!		Instance methods for 'RsrInMemoryLifetimeTest'

category: 'running'
method: RsrInMemoryLifetimeTest
setUp

	super setUp.
	self initializeInMemoryConnections
%

! Class implementation for 'RsrSocketLifetimeTest'

!		Instance methods for 'RsrSocketLifetimeTest'

category: 'running'
method: RsrSocketLifetimeTest
setUp

	super setUp.
	self initializeSocketConnections
%

! Class implementation for 'RsrMessageSendingTest'

!		Class methods for 'RsrMessageSendingTest'

category: 'testing'
classmethod: RsrMessageSendingTest
isAbstract

	^self == RsrMessageSendingTest
%

!		Instance methods for 'RsrMessageSendingTest'

category: 'utilities'
method: RsrMessageSendingTest
terminateCurrentProcess

	Processor activeProcess terminate
%

category: 'running-errors'
method: RsrMessageSendingTest
testAsyncRemoteError

	| client server reason |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [Error new tag: 'tag'; messageText: 'messageText'; signal].
	reason := self expectCatch: client asyncValue.
	self assert: reason isRemoteException.
	self
		assert: reason exceptionClassName
		equals: #Error.
	self
		assert: reason tag
		equals: 'tag'.
	self
		assert: reason messageText
		equals: 'messageText'.
	self
		assert: reason stack isString;
		assert: reason stack size > 0
%

category: 'running'
method: RsrMessageSendingTest
testAsyncReturnArgument

	| client server promise result |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [:arg | arg].
	promise := client asyncValue: client.
	result := self expectWhen: promise.
	self
		assert: result
		identicalTo: client
%

category: 'running'
method: RsrMessageSendingTest
testAsyncReturnService

	| client server service |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrValueHolderServer new].
	service := self expectWhen: client asyncValue.
	self
		assert: service class
		equals: RsrValueHolderClient
%

category: 'running'
method: RsrMessageSendingTest
testChangeRemoteState

	| marker client server |
	marker := false.
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [marker := true].
	client value.
	self assert: marker
%

category: 'running-close during message'
method: RsrMessageSendingTest
testCloseConnectionDuringMessageSend

	| client server promise reason |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [(Delay forSeconds: 10) wait].
	promise := client asyncValue.
	connectionA close.
	reason := self expectCatch: promise.
	self
		assert: reason class
		equals: RsrConnectionClosed
%

category: 'running-errors'
method: RsrMessageSendingTest
testDebugHandlerBreak
	"Ensure that if a debug handler resolves the message,
	that the correct reason is received remotely."

	| marker client server reason |
	marker := #testMarker.
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrResumableError signal. 42 "ensure we do not return the marker"].
	server debugHandler: [:exception :messageSend :resolver | resolver break: marker. nil "ensure we do not return the marker"].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason
		equals: marker.
	server action: [RsrNonresumableError signal. 42 "ensure we do not return the marker"].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason
		equals: marker
%

category: 'running-errors'
method: RsrMessageSendingTest
testDebugHandlerException
	"Ensure that an exception that occurs in the debug handler
	is reported back as the reason for Promise breaking."

	| marker client server reason |
	marker := #testMarker.
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrResumableError signal].
	server debugHandler: [:exception :messageSend :resolver | Error signal].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason exceptionClassName
		equals: #Error.
	server action: [RsrNonresumableError signal].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason exceptionClassName
		equals: #Error.
%

category: 'running-errors'
method: RsrMessageSendingTest
testDebugHandlerFulfill
	"Ensure that if a debug handler resolves the message,
	that the fulfillment value is received remotely."

	| marker client server |
	marker := #testMarker.
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrResumableError signal. 42 "ensure we do not return the marker"].
	server debugHandler: [:exception :messageSend :resolver | resolver fulfill: marker. nil "ensure we do not return the marker"].
	self
		assert: client value
		equals: marker.
	server action: [RsrNonresumableError signal. 42 "ensure we do not return the marker"].
	self
		assert: client value
		equals: marker
%

category: 'running-errors'
method: RsrMessageSendingTest
testDebugHandlerNoResolutionWithNonresumableException
	"Ensure that if the debug handler does not resolve the exception
	and the exception is nonresumable, that we Break the Promise
	reporting on the unresolved exception."

	| marker client server reason |
	marker := #testMarker.
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrNonresumableError signal].
	server debugHandler: [:exception :messageSend :resolver | marker].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason exceptionClassName
		equals: #RsrNonresumableError
%

category: 'running-errors'
method: RsrMessageSendingTest
testDebugHandlerNoResolutionWithResumableException
	"Ensure that if the debug handler does not resolve the exception
	and the exception is resumable, we resume with the evaluation
	result of the debug handler."

	| marker client server |
	marker := #testMarker.
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrResumableError signal].
	server debugHandler: [:exception :messageSend :resolver | marker].
	self
		assert: client value
		equals: marker
%

category: 'running'
method: RsrMessageSendingTest
testPrePostUpdate

	| client server pre post |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	pre := post := false.
	server
		preUpdateHandler: [pre := true];
		postUpdateHandler: [post := true];
		action: [].
	client value.
	self
		assert: pre;
		assert: post
%

category: 'running-errors'
method: RsrMessageSendingTest
testPrePostUpdateError

	| client server reason |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [true].
	self assert: client value.
	server
		preUpdateHandler: [Error signal: 'preUpdate'];
		postUpdateHandler: [].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason exceptionClassName
		equals: #Error.
	self
		assert: reason messageText
		equals: 'preUpdate'.
	server
		preUpdateHandler: [];
		postUpdateHandler:  [Error signal: 'postUpdate'].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason exceptionClassName
		equals: #Error.
	self
		assert: reason messageText
		equals: 'postUpdate'.
%

category: 'running-errors'
method: RsrMessageSendingTest
testRemoteError

	| client server reason |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [Error new tag: 'tag'; messageText: 'messageText'; signal].
	[client value]
		on: RsrBrokenPromise
		do: [:ex | reason := ex reason. ex return].
	self assert: reason isRemoteException.
	self
		assert: reason exceptionClassName
		equals: #Error.
	self
		assert: reason tag
		equals: 'tag'.
	self
		assert: reason messageText
		equals: 'messageText'.
	self
		assert: reason stack isString;
		assert: reason stack size > 0
%

category: 'running-errors'
method: RsrMessageSendingTest
testRemoteErrorWithTag

	| client server tag messageText reason |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	tag := nil.
	messageText := 'messageText'.
	server action: [Error new tag: tag; messageText: messageText; signal].
	reason := [client value]
		on: RsrBrokenPromise
		do: [:ex | ex return: ex reason].
	self assert: reason isRemoteException.
	self
		assert: reason tag
		equals: 'messageText'.
	self
		assert: reason messageText
		equals: 'messageText'.
	self
		assert: reason stack isString;
		assert: reason stack size > 0.
	tag := 42.
	reason := [client value]
		on: RsrBrokenPromise
		do: [:ex | ex return: ex reason].
	self
		assert: reason tag
		equals: '42'.
	tag := RsrSignalErrorInAsString new.
	reason := [client value]
		on: RsrBrokenPromise
		do: [:ex | ex return: ex reason].
	self
		assert: reason tag
		equals: 'Unable to pack #tag containing an instance of RsrSignalErrorInAsString'
%

category: 'running-termination'
method: RsrMessageSendingTest
testRemoteProcessTerminationDuringDebugHandler

	| client server reason |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server
		action: [Error signal];
		debugHandler: [:ex :message :resolver | self terminateCurrentProcess].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason
		equals: 'Message send terminated without a result'
%

category: 'running-termination'
method: RsrMessageSendingTest
testRemoteProcessTerminationDuringMessageSend

	| client server reason |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [self terminateCurrentProcess].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason
		equals: 'Message send terminated without a result'
%

category: 'running-termination'
method: RsrMessageSendingTest
testRemoteProcessTerminationDuringPrePostUpdate

	| client server reason |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server
		preUpdateHandler: [self terminateCurrentProcess];
		postUpdateHandler: [];
		action: [].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason
		equals: 'Message send terminated without a result'
%

category: 'running'
method: RsrMessageSendingTest
testReturnAlsoUpdatesLocalService
	"Ensure that when the remote peer service returns a value,
	that it is also sent to update the local service."

	| client server value response |
	client := self serviceFactoryA serviceFor: #RsrReflectedVariableTestServiceB.
	client synchronize.
	server := connectionB serviceAt: client _id.
	value := 42.
	self
		deny: client varA
		equals: value.
	self
		deny: client varB
		equals: value.
	response := client setVarsToAndReturn: value.
	self
		assert: response
		equals: value.
	self
		assert: server varA
		equals: value.
	self
		assert: server varB
		equals: value.
	self
		assert: client varA
		equals: value.
	self
		assert: client varB
		equals: value
%

category: 'running'
method: RsrMessageSendingTest
testReturnArgument

	| client server arguments dt response |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [:object | object].
	arguments := OrderedCollection new
		addAll: #( '' #symbol 'string' $h 0 -14 14 18446744073709551616 -18446744073709551616 nil true false );
 		add: (Character codePoint: 16r259F);
		add: (Dictionary new at: 1 put: 2; yourself);
		add: (Set with: 14);
		add: #[1 2 3 4];
		add: (OrderedCollection with: 42 with: 43);
		add: #(1 2 #(nil));
		yourself.
	dt := RsrDateAndTime now.
	response := client value: dt.
	self
		assert: (dt asSeconds * 1000000) rounded
		equals: (response asSeconds * 1000000) rounded.
	arguments
		do:
			[:each | | result |
			result := client value: each.
			self
				assert: result
				equals: each].
	arguments
		do:
			[:each | | result |
			result := server value: each.
			self
				assert: result
				equals: each].
	self
		assert: (client value: arguments)
		equals: arguments.
	self
		assert: (server value: arguments)
		equals: arguments.
	self
		assert: (client value: client)
		identicalTo: client
%

category: 'running-errors'
method: RsrMessageSendingTest
testReturnInvalidObject

	| client server reason |			
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [Object new].
	self
		should: [client value]
		raise: RsrBrokenPromise.
	reason := [client value]
		on: RsrBrokenPromise
		do: [:ex | ex return: ex reason].
	self assert: reason isRemoteException.
	self
		assert: reason exceptionClassName
		equals: #RsrUnsupportedObject.
	self
		assert: reason tag
		equals: 'Instances of #Object do not support replication.'.
	self
		assert: reason messageText
		equals: 'Instances of #Object do not support replication.'.
	self
		assert: reason stack isString;
		assert: reason stack size > 0
%

category: 'running'
method: RsrMessageSendingTest
testReturnNewService

	| client server returnedService |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrValueHolderServer new].
	returnedService := client value.
	self
		assert: returnedService class
		equals: RsrValueHolderClient
%

category: 'running'
method: RsrMessageSendingTest
testReturnNewServiceInArray

	| client server array returnedService |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [Array with: RsrValueHolderServer new].
	array := client value.
	returnedService := array first.
	self
		assert: returnedService class
		equals: RsrValueHolderClient
%

category: 'running'
method: RsrMessageSendingTest
testReturnSymbol

	| client server symbol result |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	symbol := #testSymbol.
	server action: [symbol].
	result := client value.
	self
		assert: result
		equals: symbol
%

category: 'running-errors'
method: RsrMessageSendingTest
testSendInvalidObject

	| client server |			
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [:arg | arg].
	self
		should: [client value: Object new]
		raise: RsrUnsupportedObject
%

category: 'running-errors'
method: RsrMessageSendingTest
testUnimplementedRemoteSend
	"Ensure a remote DNU is reported back to the sender."

	| marker client server reason |
	marker := #testMarker.
	client := connectionA serviceFor: #RsrServiceNoInstVars.
	client synchronize.
	reason := self expectCatch: client unimplementedRemoteSend.
	self
		assert: reason class
		equals: RsrRemoteExceptionServer.
	self
		assert: reason exceptionClassName
		equals: #MessageNotUnderstood
%

! Class implementation for 'RsrInMemoryMessageSendingTest'

!		Instance methods for 'RsrInMemoryMessageSendingTest'

category: 'running'
method: RsrInMemoryMessageSendingTest
setUp

	super setUp.
	self initializeInMemoryConnections
%

! Class implementation for 'RsrSocketMessageSendingTest'

!		Instance methods for 'RsrSocketMessageSendingTest'

category: 'running'
method: RsrSocketMessageSendingTest
setUp

	super setUp.
	self initializeSocketConnections
%

! Class implementation for 'RsrServiceTest'

!		Class methods for 'RsrServiceTest'

category: 'testing'
classmethod: RsrServiceTest
isAbstract

	^self == RsrServiceTest
%

!		Instance methods for 'RsrServiceTest'

category: 'running-utilities'
method: RsrServiceTest
mirror: aService

	^(connectionA serviceFor: #RsrClientNoInstVars) sendReturnArgument: aService
%

category: 'running'
method: RsrServiceTest
testAnalyzeServiceRegisteredWithDifferentConnection

	| instance analysis |
	instance := RsrRemoteAction clientClass new.
	analysis := RsrSnapshotAnalysis
		roots: (Array with: instance)
		connection: connectionA.
	analysis perform.
	self assert: instance isMirrored.
	analysis := RsrSnapshotAnalysis
		roots: (Array with: instance)
		connection: connectionB.
	self
		should: [analysis perform]
		raise: RsrAlreadyRegistered
%

category: 'running'
method: RsrServiceTest
testCreateServiceWithDistinctClientAbstractService

	| client |
	client := self serviceFactoryA serviceFor: #RsrRemoteAction.
	self
		assert: client class
		equals: RsrRemoteAction clientClass
%

category: 'running'
method: RsrServiceTest
testCreateServiceWithSameClientAbstractService

	| client server |
	client := self serviceFactoryA serviceFor: #RsrSameTemplateAndClientService.
	self
		assert: client class
		equals: RsrSameTemplateAndClientService.
	client synchronize.
	server := connectionB serviceAt: client _id.
	self
		assert: server replicated1
		equals: nil.
	self
		assert: server replicated2
		equals: nil.
	client
		replicated1: 1;
		replicated2: 2;
		synchronize.
	self
		assert: server replicated1
		equals: 1.
	self
		assert: server replicated2
		equals: 2.
	server
		replicated1: 10;
		replicated2: 20;
		private1: 3;
		synchronize.
	self
		assert: client replicated1
		equals: 10.
	self
		assert: client replicated2
		equals: 20
%

category: 'running'
method: RsrServiceTest
testEnsureServersAreCachedAndReused

	| client service1 service2 |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	service1 := connectionB serviceAt: client _id.
	self mirror: client.
	service2 := connectionB serviceAt: client _id.
	self
		assert: service1
		identicalTo: service2
%

category: 'running'
method: RsrServiceTest
testHasRemoteSelf

	| service |
	service := RsrTestService clientClass new.
	self mirror: service.
	self deny: nil == service remoteSelf
%

category: 'running'
method: RsrServiceTest
testInitialization

	| instance |
	instance := RsrRemoteAction clientClass new.
	self
		assert: instance isMirrored
		equals: false.
	self
		assert: instance _id
		equals: nil.
	self
		assert: instance _connection
		equals: nil
%

category: 'running'
method: RsrServiceTest
testIsMirrored

	| instance |
	instance := RsrRemoteAction clientClass new.
	self deny: instance isMirrored.
	self mirror: instance.
	self assert: instance isMirrored
%

category: 'running'
method: RsrServiceTest
testMessageDispatchedConcurrentlyToSingleService
	"Ensure all messages are sent concurrently (including those sent to a single service)"

	| client server counter promise1 promise2 |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	counter := 0.
	server action: [counter := counter + 1. self shortWait. counter].
	promise1 := client asyncValue.
	promise2 := client asyncValue.
	self
		assert: promise1 wait
		equals: 2. "The #shortWait will cause the second counter increment before the counter is returned."
	self
		assert: promise2 wait
		equals: 2
%

category: 'running'
method: RsrServiceTest
testMessagesDispactchedConcurrentlyForMultipleServices
	"Ensure messages are dispatched concurrently"

	| client1 server1 client2 server2 semaphore expected1 expected2 promise1 promise2 |
	client1 := connectionA serviceFor: #RsrRemoteAction.
	client2 := connectionA serviceFor: #RsrRemoteAction.
	client1 synchronize.
	client2 synchronize.
	server1 := connectionB serviceAt: client1 _id.
	server2 := connectionB serviceAt: client2 _id.
	semaphore := Semaphore new.
	expected1 := #expected1.
	expected2 := #expected2.
	server1 action: [semaphore wait. expected1].
	server2 action: [semaphore signal. expected2].
	promise1 := client1 asyncValue.
	promise2 := client2 asyncValue.
	self shortWait.
	self
		assert: promise1 isResolved;
		assert: promise2 isResolved.
	self
		assert: promise1 value
		equals: expected1.
	self
		assert: promise2 value
		equals: expected2
%

category: 'running'
method: RsrServiceTest
testPrePostUpdate

	| client server | 
	client := connectionA serviceFor: #RsrInstrumentedServer.
	self
		assert: client preUpdateCount
		equals: 0.
	self
		assert: client postUpdateCount
		equals: 0.
	client return: nil.
	server := connectionB serviceAt: client _id.
	self
		assert: client preUpdateCount
		equals: 1.
	self
		assert: client postUpdateCount
		equals: 1.
	self
		assert: server preUpdateCount
		equals: 1.
	self
		assert: server postUpdateCount
		equals: 1.
	client return: nil.
	self
		assert: client preUpdateCount
		equals: 2.
	self
		assert: client postUpdateCount
		equals: 2.
	self
		assert: server preUpdateCount
		equals: 2.
	self
		assert: server postUpdateCount
		equals: 2.
%

category: 'running'
method: RsrServiceTest
testReflectedVariableNames

	| client server clientNames serverNames |
	client := connectionA serviceFor: #RsrTestService.
	client synchronize.
	server := connectionB serviceAt: client _id.
	clientNames := RsrServiceSnapshot reflectedVariablesFor: client.
	serverNames := RsrServiceSnapshot reflectedVariablesFor: server.
	self
		assert: clientNames
		equals: serverNames.
	self
		assert: clientNames size
		equals: 1.
	self
		assert: (clientNames at: 1) asSymbol
		equals: #sharedVariable.
	client := connectionA serviceFor: #RsrReflectedVariableTestServiceB.
	client synchronize.
	server := connectionB serviceAt: client _id.
	clientNames := RsrServiceSnapshot reflectedVariablesFor: client.
	serverNames := RsrServiceSnapshot reflectedVariablesFor: server.
	self
		assert: clientNames
		equals: serverNames.
	self
		assert: clientNames size
		equals: 2.
	self
		assert: (clientNames at: 1) asSymbol
		equals: #varA.
	self
		assert: (clientNames at: 2) asSymbol
		equals: #varB
%

category: 'running'
method: RsrServiceTest
testRegisterWith

	| instance |
	instance := RsrRemoteAction clientClass new.
	self deny: instance isMirrored.
	instance registerWith: connectionA.
	self assert: instance isMirrored.
	self
		should: [instance registerWith: connectionB]
		raise: RsrAlreadyRegistered
%

category: 'running'
method: RsrServiceTest
testReturnServerWithoutAssociatedClient

	| client server reason |
	client := self serviceFactoryA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [RsrKnownServer new].
	reason := self expectCatch: client asyncValue.
	self
		assert: reason class
		equals: RsrDecodingRaisedException
%

category: 'running'
method: RsrServiceTest
testSendClientWithoutAssociatedServer

	| client server reason |
	client := self serviceFactoryA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [:x | x].
	reason := self expectCatch: (client asyncValue: RsrKnownClient new).
	self
		assert: reason class
		equals: RsrRemoteExceptionServer.
	self
		assert: reason exceptionClassName
		equals: #RsrUnknownClass
%

category: 'running'
method: RsrServiceTest
testVariableReflection

	| localService remoteService |
	localService := RsrTestService clientClass new
		sharedVariable: #shared;
		privateVariable: #private;
		yourself.
	self mirror: localService.
	remoteService := connectionB serviceAt: localService _id.
	self
		assert: localService sharedVariable
		identicalTo: remoteService sharedVariable.
	self
		assert: localService privateVariable
		identicalTo: #private.
	self
		assert: remoteService privateVariable
		identicalTo: nil
%

! Class implementation for 'RsrInMemoryServiceTest'

!		Instance methods for 'RsrInMemoryServiceTest'

category: 'running'
method: RsrInMemoryServiceTest
setUp

	super setUp.
	self initializeInMemoryConnections
%

! Class implementation for 'RsrSocketServiceTest'

!		Instance methods for 'RsrSocketServiceTest'

category: 'running'
method: RsrSocketServiceTest
setUp

	super setUp.
	self initializeSocketConnections
%

! Class implementation for 'RsrSpeciesEquality'

!		Class methods for 'RsrSpeciesEquality'

category: 'testing'
classmethod: RsrSpeciesEquality
isAbstract

	^self == RsrSpeciesEquality
%

!		Instance methods for 'RsrSpeciesEquality'

category: 'accessing'
method: RsrSpeciesEquality
basicExamples
	"Give a samples of each species to ensure Collection classes are able to encode each type successfully."

	^{RsrClientNoInstVars new.
	#h.
	#''.
	'h'.
	''.
	0.
	234.
	-97.
	$s.
	nil.
	true.
	false.
	{}.
	{RsrClientNoInstVars new. {}.}.
	#[].
	#[123].
	Set new.
	Set with: 42.
	OrderedCollection new.
	OrderedCollection with: #x.
	Dictionary new.
	Dictionary new at: #key put: #value; yourself.
	RsrDateAndTime posixEpoch.
	RsrDateAndTime fromMicroseconds: -1000000. "1969-12-31T23:59:59-00:00"}
%

category: 'running'
method: RsrSpeciesEquality
testArray

	self
		verify: #();
		verify: (Array withAll: self basicExamples)
%

category: 'running'
method: RsrSpeciesEquality
testBoolean

	self
		verify: true;
		verify: false
%

category: 'running'
method: RsrSpeciesEquality
testByteArray

	self
		verify: #[];
		verify: (ByteArray withAll: (0 to: 255));
		verify: (ByteArray new: 1024)
%

category: 'running'
method: RsrSpeciesEquality
testCharacter

	self
		verify: (Character codePoint: 0);
		verify: (Character codePoint: 65);
		verify: $A;
		verify: (Character codePoint: 16r01D4);
		verify: (Character codePoint: 16r8334)
%

category: 'running'
method: RsrSpeciesEquality
testDateAndTime

	self
		verify: (RsrDateAndTime fromMicroseconds: -491277642567488); "1954-06-07T14:59:17.432512-07:00"
		verify: (RsrDateAndTime fromMicroseconds: 1562692562657612). "2019-07-09T10:16:02.657612-07:00"
%

category: 'running'
method: RsrSpeciesEquality
testDictionary

	| example |
	example := Dictionary new.
	self verify: example.
	self basicExamples do: [:each | each ifNotNil: [example at: each put: each]].
	example at: #testDictionaryPrivateKey put: nil.
	self verify: example
%

category: 'running'
method: RsrSpeciesEquality
testInteger

	self
		verify: 0;
		verify: -1;
		verify: 1;
		verify: (2 raisedTo: 32);
		verify: (2 raisedTo: 32) negated;
		verify: (2 raisedTo: 64);
		verify: (2 raisedTo: 64) negated;
		verify: 4598754392654025898794;
		verify: -13750198234577893465
%

category: 'running'
method: RsrSpeciesEquality
testOrderedCollection

	self
		verify: OrderedCollection new;
		verify: (OrderedCollection withAll: self basicExamples)
%

category: 'running'
method: RsrSpeciesEquality
testService

	| clientClass serverClass |
	clientClass := RsrRemoteAction clientClass.
	serverClass := RsrRemoteAction serverClass.
	self
		verify: clientClass new;
		verify: (clientClass sharedVariable: clientClass new);
		verify: (serverClass sharedVariable: clientClass new)
%

category: 'running'
method: RsrSpeciesEquality
testServiceWithUnsupportedObject

	| service |
	service := connectionA serviceFor: #RsrClientNoInstVars.
	self
		should: [service sendReturnArgument: (RsrValueHolderClient value: Object new)]
		raise: RsrUnsupportedObject
%

category: 'running'
method: RsrSpeciesEquality
testSet

	self
		verify: Set new;
		verify: (Set withAll: self basicExamples)
%

category: 'running'
method: RsrSpeciesEquality
testString

	self
		verify: '';
		verify: 'string'
%

category: 'running'
method: RsrSpeciesEquality
testSymbol

	self
		verify: #'';
		verify: #symbol
%

category: 'running'
method: RsrSpeciesEquality
testUndefinedObject

	self verify: nil
%

category: 'running'
method: RsrSpeciesEquality
testUnicodeString

	self verify: self unicodeString
%

category: 'running'
method: RsrSpeciesEquality
testUnicodeSymbol

	self verify: self unicodeString asSymbol
%

category: 'running'
method: RsrSpeciesEquality
unicodeString

	^String
		with: $a
		with: (Character codePoint: 16r8349)
		with: (Character codePoint: 16r10E60)
%

category: 'asserting'
method: RsrSpeciesEquality
verify: anObject
	"Send <anObject> through RSR and have it returned. Assert it is equivalent."

	| client server |
	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [:object | server sharedVariable: object. object].
	self
		assert: (client value: anObject)
		equals: anObject.
	self
		assert: client sharedVariable
		equals: anObject
%

! Class implementation for 'RsrInMemorySpeciesEquality'

!		Instance methods for 'RsrInMemorySpeciesEquality'

category: 'running'
method: RsrInMemorySpeciesEquality
setUp

	super setUp.
	self initializeInMemoryConnections
%

! Class implementation for 'RsrSocketSpeciesEquality'

!		Instance methods for 'RsrSocketSpeciesEquality'

category: 'running'
method: RsrSocketSpeciesEquality
setUp

	super setUp.
	self initializeSocketConnections
%

! Class implementation for 'RsrStressTest'

!		Class methods for 'RsrStressTest'

category: 'accessing'
classmethod: RsrStressTest
defaultTimeLimit

	^20 seconds
%

category: 'testing'
classmethod: RsrStressTest
isAbstract

	^self == RsrStressTest
%

!		Instance methods for 'RsrStressTest'

category: 'initialize/release'
method: RsrStressTest
cleanupServices

	client := server := nil
%

category: 'accessing'
method: RsrStressTest
client

	^client
%

category: 'running-utilities'
method: RsrStressTest
concurrentlyRun: aBlock

	| anyCurtailed semaphores |
	anyCurtailed := false.
	semaphores := (1 to: self numThreads) collect: [:each | Semaphore new].
	semaphores do: [:semaphore | RsrProcessModel fork: [[self repeatedlyRun: aBlock. semaphore signal] ifCurtailed: [anyCurtailed := true. semaphore signal]]].
	semaphores do: [:semaphore | semaphore wait].
	self deny: anyCurtailed
%

category: 'initialize/release'
method: RsrStressTest
initializeServices

	client := connectionA serviceFor: #RsrRemoteAction.
	client synchronize.
	server := connectionB serviceAt: client _id.
	server action: [:x | x]
%

category: 'accessing'
method: RsrStressTest
numThreads

	^15
%

category: 'running-utilities'
method: RsrStressTest
repeatedlyRun: aBlock

	self repetitions timesRepeat: aBlock
%

category: 'running-utilities'
method: RsrStressTest
repeatedlySend: anObject

	self repeatedlyRun: [self client value: anObject]
%

category: 'accessing'
method: RsrStressTest
repetitions

	^1000
%

category: 'accessing'
method: RsrStressTest
server

	^server
%

category: 'initialize/release'
method: RsrStressTest
setUp

	super setUp.
	self
		initializeConnections;
		initializeServices
%

category: 'initialize/release'
method: RsrStressTest
tearDown

	self cleanupServices.
	super tearDown
%

category: 'running'
method: RsrStressTest
test1KBytes

	self repeatedlySend: (ByteArray new: 1024)
%

category: 'running'
method: RsrStressTest
test1MBytes

	self repeatedlySend: (ByteArray new: 1024 squared)
%

category: 'running'
method: RsrStressTest
test2KBytes

	self repeatedlySend: (ByteArray new: 1024 *2)
%

category: 'running'
method: RsrStressTest
testBasicSends

	self repeatedlySend: nil
%

category: 'running'
method: RsrStressTest
testConcurrent1KBytes

	self concurrentlyRun: [self client value: (ByteArray new: 1024)]
%

category: 'running'
method: RsrStressTest
testConcurrent2KBytes

	self concurrentlyRun: [self client value: (ByteArray new: 2 * 1024)]
%

category: 'running'
method: RsrStressTest
testConcurrentBasicSends

	self concurrentlyRun: [self client value: nil]
%

! Class implementation for 'RsrInMemoryStressTest'

!		Instance methods for 'RsrInMemoryStressTest'

category: 'initializing'
method: RsrInMemoryStressTest
initializeConnections

	self initializeInMemoryConnections
%

! Class implementation for 'RsrSocketStressTest'

!		Instance methods for 'RsrSocketStressTest'

category: 'initializing'
method: RsrSocketStressTest
initializeConnections

	self initializeSocketConnections
%

! Class implementation for 'RsrTestingProcessModelTestCase'

!		Instance methods for 'RsrTestingProcessModelTestCase'

category: 'running'
method: RsrTestingProcessModelTestCase
exceptionCase

	| sema |
	sema := Semaphore new.
	RsrProcessModel fork: [[Error signal] ensure: [sema signal]].
	sema wait
%

category: 'running'
method: RsrTestingProcessModelTestCase
noExceptionCase

	| sema |
	sema := Semaphore new.
	RsrProcessModel fork: [sema signal].
	sema wait
%

category: 'running'
method: RsrTestingProcessModelTestCase
testCurrentStackDump

	| stack |
	stack := RsrProcessModel currentStackDump.
	self
		assert: stack isString;
		assert: stack size > 0
%

category: 'running'
method: RsrTestingProcessModelTestCase
testException

	| testCase |
	testCase := self class selector: #exceptionCase.
	self
		should: [testCase runCase]
		raise: Exception
%

category: 'running'
method: RsrTestingProcessModelTestCase
testNoException

	| testCase |
	testCase := self class selector: #noExceptionCase.
	self
		shouldnt: [testCase runCase]
		raise: Exception
%

! Class extensions for 'RsrCharacterArrayReference'

!		Class methods for 'RsrCharacterArrayReference'

category: '*remoteservicereplication-gemstone'
classmethod: RsrCharacterArrayReference
convertToBytes: aCharacterArray

	^aCharacterArray encodeAsUTF8
%

!		Instance methods for 'RsrCharacterArrayReference'

category: '*remoteservicereplication-gemstone'
method: RsrCharacterArrayReference
convertBytes: aByteArray

	^aByteArray decodeFromUTF8ToString
%

! Class extensions for 'RsrDateAndTime'

!		Class methods for 'RsrDateAndTime'

category: '*remoteservicereplication-gemstone'
classmethod: RsrDateAndTime
fromMicroseconds: anInteger

    ^DateAndTime
        posixSeconds: (anInteger / 1000000)
        offset: Duration zero
%

category: '*remoteservicereplication-gemstone'
classmethod: RsrDateAndTime
microsecondsSinceEpoch: aDateAndTime

	^((aDateAndTime asSeconds - self posixEpoch asSeconds) * 1000000) rounded
%

category: '*remoteservicereplication-gemstone'
classmethod: RsrDateAndTime
now

	^DateAndTime now
%

category: '*remoteservicereplication-gemstone'
classmethod: RsrDateAndTime
posixEpoch

	^DateAndTime
        posixSeconds: 0
        offset: Duration zero
%

! Class extensions for 'RsrDoubleReference'

!		Class methods for 'RsrDoubleReference'

category: '*remoteservicereplication-gemstone'
classmethod: RsrDoubleReference
convertToBytes: aFloat

	| bytes |
	bytes := ByteArray new: 8.
	bytes
		doubleAt: 1
		put: aFloat.
	^bytes
%

category: '*remoteservicereplication-gemstone'
classmethod: RsrDoubleReference
infinity

	^Float fromString: 'Infinity'
%

category: '*remoteservicereplication-gemstone'
classmethod: RsrDoubleReference
nan

	^Float fromString: '-NaN'
%

!		Instance methods for 'RsrDoubleReference'

category: '*remoteservicereplication-gemstone'
method: RsrDoubleReference
convertBytes: aByteArray

	^aByteArray doubleAt: 1
%

! Class extensions for 'RsrForwarder'

!		Class methods for 'RsrForwarder'

category: '*remoteservicereplication'
classmethod: RsrForwarder
on: anRsrObject

	| instance |
	instance := self new.
	instance _service: anRsrObject.
	^instance
%

!		Instance methods for 'RsrForwarder'

category: '*remoteservicereplication'
method: RsrForwarder
doesNotUnderstand: aMessage

	^_service _connection
		_sendMessage: aMessage
		to: _service
%

category: '*remoteservicereplication'
method: RsrForwarder
_service: aService

	_service := aService
%

! Class extensions for 'RsrObject'

!		Class methods for 'RsrObject'

category: '*remoteservicereplication-gemstone'
classmethod: RsrObject
new

	^super new initialize
%

!		Instance methods for 'RsrObject'

category: '*remoteservicereplication-gemstone'
method: RsrObject
initialize

	^self
%

! Class extensions for 'RsrProcessModel'

!		Instance methods for 'RsrProcessModel'

category: '*remoteservicereplication-gemstone'
method: RsrProcessModel
currentStackDump

	^GsProcess stackReportToLevel: 1000
%

! Class extensions for 'RsrReference'

!		Class methods for 'RsrReference'

category: '*remoteservicereplication-gemstone'
classmethod: RsrReference
initializeReferenceMapping
	"RsrReference initializeReferenceMapping"

	referenceMapping := Dictionary new.
	referenceMapping
		at: Symbol
		put: RsrSymbolReference.
	referenceMapping
		at: DoubleByteSymbol
		put: RsrSymbolReference.
	referenceMapping
		at: QuadByteSymbol
		put: RsrSymbolReference.
	referenceMapping
		at: String
		put: RsrStringReference.
    referenceMapping
        at: Unicode7
        put: RsrStringReference.
    referenceMapping
        at: DoubleByteString
        put: RsrStringReference.
    referenceMapping
        at: QuadByteString
        put: RsrStringReference.
	referenceMapping
		at: LargeInteger
		put: RsrIntegerReference.
	referenceMapping
		at: SmallInteger
		put: RsrIntegerReference.
	referenceMapping
		at: Character
		put: RsrCharacterReference.
	referenceMapping
		at: UndefinedObject
		put: RsrNilReference.
	referenceMapping
		at: Boolean
		put: RsrTrueReference.
	referenceMapping
		at: Array
		put: RsrArrayReference.
	referenceMapping
		at: ByteArray
		put: RsrByteArrayReference.
	referenceMapping
		at: Set
		put: RsrSetReference.
	referenceMapping
		at: OrderedCollection
		put: RsrOrderedCollectionReference.
	referenceMapping
		at: Dictionary
		put: RsrDictionaryReference.
	referenceMapping
		at: DateAndTime
		put: RsrDateAndTimeReference.
	referenceMapping
		at: SmallDateAndTime
		put: RsrDateAndTimeReference.
	referenceMapping
		at: SmallDouble
		put: RsrDoubleReference.
	referenceMapping
		at: Float
		put: RsrDoubleReference.
	^referenceMapping
%

category: '*remoteservicereplication'
classmethod: RsrReference
referenceClassFor: anObject

	(anObject isKindOf: RsrService)
		ifTrue: [^RsrServiceReference].
	^self referenceMapping
		at: anObject class
		ifAbsent: [RsrUnsupportedObject signal: anObject]
%

