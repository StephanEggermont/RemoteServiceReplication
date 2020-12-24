| package |
package := Package name: 'RemoteServiceReplication-Test'.
package paxVersion: 1; basicComment: ''.

package classNames
	add: #RsrReflectedVariableTestServiceA;
	add: #RsrValueHolder;
	add: #RsrLifetimeTest;
	add: #RsrServerNoInstVars;
	add: #RsrPromiseTest;
	add: #RsrSocketSpeciesEquality;
	add: #RsrRemoteAction;
	add: #RsrCodecTest;
	add: #RsrInMemoryMessageSendingTest;
	add: #RsrKnownClient;
	add: #RsrInstrumentedService;
	add: #RsrTestService;
	add: #RsrConnectionTestCase;
	add: #RsrConnectionSpecificationTestCase;
	add: #RsrDifferentServerService;
	add: #RsrForwarderTest;
	add: #RsrSocketServiceTest;
	add: #RsrReflectedVariableTestServiceB;
	add: #RsrValueHolderClient;
	add: #RsrInMemoryLifetimeTest;
	add: #RsrConcurrentTestService;
	add: #RsrServiceReferenceService;
	add: #RsrSnapshotAnalysisTest;
	add: #RsrStressTest;
	add: #RsrRemoteActionClient;
	add: #RsrDecoderTest;
	add: #RsrSocketMessageSendingTest;
	add: #RsrInstrumentedClient;
	add: #RsrClientTestService;
	add: #RsrInMemoryConnectionTestCase;
	add: #RsrServiceNoInstVars;
	add: #RsrNumericSpigotTest;
	add: #RsrSpeciesEquality;
	add: #RsrReflectedVariableTestClient;
	add: #RsrValueHolderServer;
	add: #RsrSocketLifetimeTest;
	add: #RsrReturnUnknownService;
	add: #RsrConcurrentTestClient;
	add: #RsrClientReferenceService;
	add: #RsrSocketStreamTestCase;
	add: #RsrInMemoryStressTest;
	add: #RsrRemoteActionServer;
	add: #RsrEncoderTest;
	add: #RsrServiceTest;
	add: #RsrInstrumentedServer;
	add: #RsrServerTestService;
	add: #RsrSocketConnectionTestCase;
	add: #RsrClientNoInstVars;
	add: #RsrThreadSafeNumericSpigotTest;
	add: #RsrInMemorySpeciesEquality;
	add: #RsrReflectedVariableTestServer;
	add: #RsrSignalErrorInAsString;
	add: #RsrMessageSendingTest;
	add: #RsrKnownServer;
	add: #RsrConcurrentTestServer;
	add: #RsrServerReferenceService;
	add: #RsrSystemTestCase;
	add: #RsrSocketStressTest;
	add: #RsrNullChannel;
	add: #RsrSameTemplateAndClientService;
	add: #RsrSendUnknownService;
	add: #RsrInMemoryServiceTest;
	yourself.

package methodNames
	yourself.

package setPrerequisites: #('RemoteServiceReplication-Platform-Test').

package!

RsrObject
	subclass: #RsrSignalErrorInAsString
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrSignalErrorInAsString categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrConcurrentTestService
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrConcurrentTestService categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrInstrumentedService
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInstrumentedService comment: 'No class-specific documentation for RsrInstrumentedService, hierarchy is:Object  RsrObject    RsrAbstractService      RsrService( _id _connection remoteSelf)        RsrInstrumentedService( sharedVariable preUpdateAction postUpdateAction)'!
!RsrInstrumentedService categoriesForClass!RemoteServiceReplication-Test! !

RsrChannel
	subclass: #RsrNullChannel
	instanceVariableNames: 'lastCommand'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrNullChannel categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrReflectedVariableTestServiceA
	instanceVariableNames: 'varA'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrReflectedVariableTestServiceA categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrRemoteAction
	instanceVariableNames: 'sharedVariable'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrRemoteAction categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrReturnUnknownService
	instanceVariableNames: 'sharedVariable'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrReturnUnknownService categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrSameTemplateAndClientService
	instanceVariableNames: 'replicated1 replicated2'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrSameTemplateAndClientService categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrSendUnknownService
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrSendUnknownService categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrServiceNoInstVars
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrServiceNoInstVars categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrServiceReferenceService
	instanceVariableNames: 'service'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrServiceReferenceService categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrTestService
	instanceVariableNames: 'sharedVariable'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrTestService categoriesForClass!RemoteServiceReplication-Test! !

RsrService
	subclass: #RsrValueHolder
	instanceVariableNames: 'value'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrValueHolder categoriesForClass!RemoteServiceReplication-Test! !

RsrServiceNoInstVars
	subclass: #RsrClientNoInstVars
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrClientNoInstVars categoriesForClass!RemoteServiceReplication-Test! !

RsrServiceReferenceService
	subclass: #RsrClientReferenceService
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrClientReferenceService categoriesForClass!RemoteServiceReplication-Test! !

RsrTestService
	subclass: #RsrClientTestService
	instanceVariableNames: 'privateVariable'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrClientTestService categoriesForClass!RemoteServiceReplication-Test! !

RsrTestCase
	subclass: #RsrCodecTest
	instanceVariableNames: 'connection'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrCodecTest comment: 'This class contains tests'!
!RsrCodecTest categoriesForClass!RemoteServiceReplication-Test! !

RsrConcurrentTestService
	subclass: #RsrConcurrentTestClient
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrConcurrentTestClient categoriesForClass!RemoteServiceReplication-Test! !

RsrConcurrentTestService
	subclass: #RsrConcurrentTestServer
	instanceVariableNames: 'counter semaphore stashedProcess'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrConcurrentTestServer categoriesForClass!RemoteServiceReplication-Test! !

RsrTestCase
	subclass: #RsrConnectionSpecificationTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrConnectionSpecificationTestCase comment: 'This class contains tests'!
!RsrConnectionSpecificationTestCase categoriesForClass!RemoteServiceReplication-Test! !

RsrSameTemplateAndClientService
	subclass: #RsrDifferentServerService
	instanceVariableNames: 'private1'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrDifferentServerService categoriesForClass!RemoteServiceReplication-Test! !

RsrTestCase
	subclass: #RsrForwarderTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrForwarderTest comment: 'This class contains tests'!
!RsrForwarderTest categoriesForClass!RemoteServiceReplication-Test! !

RsrInstrumentedService
	subclass: #RsrInstrumentedClient
	instanceVariableNames: 'preUpdateCount postUpdateCount'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInstrumentedClient comment: 'No class-specific documentation for RsrInstrumentedClient, hierarchy is:Object  RsrObject    RsrAbstractService      RsrService( _id _connection remoteSelf)        RsrInstrumentedService          RsrInstrumentedClient( preUpdateAction postUpdateAction)'!
!RsrInstrumentedClient categoriesForClass!RemoteServiceReplication-Test! !

RsrInstrumentedService
	subclass: #RsrInstrumentedServer
	instanceVariableNames: 'preUpdateCount postUpdateCount action'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInstrumentedServer comment: 'No class-specific documentation for RsrInstrumentedServer, hierarchy is:Object  RsrObject    RsrAbstractService      RsrService( _id _connection remoteSelf)        RsrInstrumentedService          RsrInstrumentedServer( preUpdateAction postUpdateAction)'!
!RsrInstrumentedServer categoriesForClass!RemoteServiceReplication-Test! !

RsrSendUnknownService
	subclass: #RsrKnownClient
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrKnownClient categoriesForClass!RemoteServiceReplication-Test! !

RsrReturnUnknownService
	subclass: #RsrKnownServer
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrKnownServer categoriesForClass!RemoteServiceReplication-Test! !

RsrTestCase
	subclass: #RsrNumericSpigotTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrNumericSpigotTest comment: 'This class contains tests'!
!RsrNumericSpigotTest categoriesForClass!RemoteServiceReplication-Test! !

RsrTestCase
	subclass: #RsrPromiseTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrPromiseTest comment: 'This class contains tests'!
!RsrPromiseTest categoriesForClass!RemoteServiceReplication-Test! !

RsrReflectedVariableTestServiceA
	subclass: #RsrReflectedVariableTestServiceB
	instanceVariableNames: 'varB'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrReflectedVariableTestServiceB categoriesForClass!RemoteServiceReplication-Test! !

RsrRemoteAction
	subclass: #RsrRemoteActionClient
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrRemoteActionClient categoriesForClass!RemoteServiceReplication-Test! !

RsrRemoteAction
	subclass: #RsrRemoteActionServer
	instanceVariableNames: 'action debugHandler preUpdateHandler postUpdateHandler'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrRemoteActionServer categoriesForClass!RemoteServiceReplication-Test! !

RsrServiceNoInstVars
	subclass: #RsrServerNoInstVars
	instanceVariableNames: 'marker'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrServerNoInstVars categoriesForClass!RemoteServiceReplication-Test! !

RsrServiceReferenceService
	subclass: #RsrServerReferenceService
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrServerReferenceService categoriesForClass!RemoteServiceReplication-Test! !

RsrTestService
	subclass: #RsrServerTestService
	instanceVariableNames: 'privateVariable'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrServerTestService categoriesForClass!RemoteServiceReplication-Test! !

RsrTestCase
	subclass: #RsrSnapshotAnalysisTest
	instanceVariableNames: 'connection'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSnapshotAnalysisTest comment: 'No class-specific documentation for RsrSnapshotAnalysisTest, hierarchy is:Object  TestAsserter    TestCase( testSelector)      RsrTestCase        RsrSnapshotAnalysisTest'!
!RsrSnapshotAnalysisTest categoriesForClass!RemoteServiceReplication-Test! !

RsrTestCase
	subclass: #RsrSocketStreamTestCase
	instanceVariableNames: 'aStream bStream'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSocketStreamTestCase comment: 'This class contains tests'!
!RsrSocketStreamTestCase categoriesForClass!RemoteServiceReplication-Test! !

RsrTestCase
	subclass: #RsrSystemTestCase
	instanceVariableNames: 'connectionA connectionB'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSystemTestCase comment: 'This class contains tests'!
!RsrSystemTestCase categoriesForClass!RemoteServiceReplication-Test! !

RsrValueHolder
	subclass: #RsrValueHolderClient
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrValueHolderClient categoriesForClass!RemoteServiceReplication-Test! !

RsrValueHolder
	subclass: #RsrValueHolderServer
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrValueHolderServer categoriesForClass!RemoteServiceReplication-Test! !

RsrSystemTestCase
	subclass: #RsrConnectionTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrConnectionTestCase comment: 'This class contains tests'!
!RsrConnectionTestCase categoriesForClass!RemoteServiceReplication-Test! !

RsrCodecTest
	subclass: #RsrDecoderTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrDecoderTest comment: 'No class-specific documentation for RsrDecoderTest, hierarchy is:Object  TestAsserter    TestCase( testSelector)      RsrTestCase        RsrCodecTest( registry decoder)          RsrDecoderTest'!
!RsrDecoderTest categoriesForClass!RemoteServiceReplication-Test! !

RsrCodecTest
	subclass: #RsrEncoderTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrEncoderTest comment: 'No class-specific documentation for RsrEncoderTest, hierarchy is:Object  TestAsserter    TestCase( testSelector)      RsrTestCase        RsrCodecTest( registry decoder)          RsrEncoderTest( connection)'!
!RsrEncoderTest categoriesForClass!RemoteServiceReplication-Test! !

RsrSystemTestCase
	subclass: #RsrLifetimeTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrLifetimeTest comment: 'This class contains tests'!
!RsrLifetimeTest categoriesForClass!RemoteServiceReplication-Test! !

RsrSystemTestCase
	subclass: #RsrMessageSendingTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrMessageSendingTest comment: 'This class contains tests'!
!RsrMessageSendingTest categoriesForClass!RemoteServiceReplication-Test! !

RsrReflectedVariableTestServiceB
	subclass: #RsrReflectedVariableTestClient
	instanceVariableNames: 'private'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrReflectedVariableTestClient categoriesForClass!RemoteServiceReplication-Test! !

RsrReflectedVariableTestServiceB
	subclass: #RsrReflectedVariableTestServer
	instanceVariableNames: 'private'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrReflectedVariableTestServer categoriesForClass!RemoteServiceReplication-Test! !

RsrSystemTestCase
	subclass: #RsrServiceTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrServiceTest comment: 'This class contains tests'!
!RsrServiceTest categoriesForClass!RemoteServiceReplication-Test! !

RsrSystemTestCase
	subclass: #RsrSpeciesEquality
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSpeciesEquality comment: 'This class contains tests'!
!RsrSpeciesEquality categoriesForClass!RemoteServiceReplication-Test! !

RsrSystemTestCase
	subclass: #RsrStressTest
	instanceVariableNames: 'client server'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrStressTest comment: 'This class contains tests'!
!RsrStressTest categoriesForClass!RemoteServiceReplication-Test! !

RsrNumericSpigotTest
	subclass: #RsrThreadSafeNumericSpigotTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrThreadSafeNumericSpigotTest comment: 'This class contains tests'!
!RsrThreadSafeNumericSpigotTest categoriesForClass!RemoteServiceReplication-Test! !

RsrConnectionTestCase
	subclass: #RsrInMemoryConnectionTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInMemoryConnectionTestCase comment: 'This class contains tests'!
!RsrInMemoryConnectionTestCase categoriesForClass!RemoteServiceReplication-Test! !

RsrLifetimeTest
	subclass: #RsrInMemoryLifetimeTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInMemoryLifetimeTest comment: 'This class contains tests'!
!RsrInMemoryLifetimeTest categoriesForClass!RemoteServiceReplication-Test! !

RsrMessageSendingTest
	subclass: #RsrInMemoryMessageSendingTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInMemoryMessageSendingTest comment: 'This class contains tests'!
!RsrInMemoryMessageSendingTest categoriesForClass!RemoteServiceReplication-Test! !

RsrServiceTest
	subclass: #RsrInMemoryServiceTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInMemoryServiceTest comment: 'This class contains tests'!
!RsrInMemoryServiceTest categoriesForClass!RemoteServiceReplication-Test! !

RsrSpeciesEquality
	subclass: #RsrInMemorySpeciesEquality
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInMemorySpeciesEquality comment: 'This class contains tests'!
!RsrInMemorySpeciesEquality categoriesForClass!RemoteServiceReplication-Test! !

RsrStressTest
	subclass: #RsrInMemoryStressTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrInMemoryStressTest comment: 'This class contains tests'!
!RsrInMemoryStressTest categoriesForClass!RemoteServiceReplication-Test! !

RsrConnectionTestCase
	subclass: #RsrSocketConnectionTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSocketConnectionTestCase comment: 'This class contains tests'!
!RsrSocketConnectionTestCase categoriesForClass!RemoteServiceReplication-Test! !

RsrLifetimeTest
	subclass: #RsrSocketLifetimeTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSocketLifetimeTest comment: 'This class contains tests'!
!RsrSocketLifetimeTest categoriesForClass!RemoteServiceReplication-Test! !

RsrMessageSendingTest
	subclass: #RsrSocketMessageSendingTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSocketMessageSendingTest comment: 'This class contains tests'!
!RsrSocketMessageSendingTest categoriesForClass!RemoteServiceReplication-Test! !

RsrServiceTest
	subclass: #RsrSocketServiceTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSocketServiceTest comment: 'This class contains tests'!
!RsrSocketServiceTest categoriesForClass!RemoteServiceReplication-Test! !

RsrSpeciesEquality
	subclass: #RsrSocketSpeciesEquality
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSocketSpeciesEquality comment: 'This class contains tests'!
!RsrSocketSpeciesEquality categoriesForClass!RemoteServiceReplication-Test! !

RsrStressTest
	subclass: #RsrSocketStressTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSocketStressTest comment: 'This class contains tests'!
!RsrSocketStressTest categoriesForClass!RemoteServiceReplication-Test! !

!RsrServiceTest class methodsFor!
isAbstract	^self == RsrServiceTest! !

!RsrConcurrentTestService class methodsFor!
clientClassName	^#RsrConcurrentTestClient! !

!RsrConcurrentTestService class methodsFor!
templateClassName	^#RsrConcurrentTestService! !

!RsrConcurrentTestService class methodsFor!
serverClassName	^#RsrConcurrentTestServer! !

!RsrMessageSendingTest class methodsFor!
isAbstract	^self == RsrMessageSendingTest! !

!RsrSpeciesEquality class methodsFor!
isAbstract	^self == RsrSpeciesEquality! !

!RsrReflectedVariableTestServiceB class methodsFor!
clientClassName	^#RsrReflectedVariableTestClient! !

!RsrReflectedVariableTestServiceB class methodsFor!
templateClassName	^#RsrReflectedVariableTestServiceB! !

!RsrReflectedVariableTestServiceB class methodsFor!
serverClassName	^#RsrReflectedVariableTestServer! !

!RsrConnectionTestCase class methodsFor!
isAbstract	^self == RsrConnectionTestCase! !

!RsrSystemTestCase class methodsFor!
isAbstract	^self == RsrSystemTestCase! !

!RsrCodecTest class methodsFor!
isAbstract	^self == RsrCodecTest! !

!RsrSameTemplateAndClientService class methodsFor!
clientClassName	^self templateClassName! !

!RsrSameTemplateAndClientService class methodsFor!
templateClassName	^#RsrSameTemplateAndClientService! !

!RsrSameTemplateAndClientService class methodsFor!
serverClassName	^#RsrDifferentServerService! !

!RsrRemoteAction class methodsFor!
templateClassName	^#RsrRemoteAction! !

!RsrRemoteAction class methodsFor!
sharedVariable: anObject	^self new		sharedVariable: anObject;		yourself! !

!RsrServiceReferenceService class methodsFor!
clientClassName	^#RsrClientReferenceService! !

!RsrServiceReferenceService class methodsFor!
service: aService	^self new		service: aService;		yourself! !

!RsrServiceReferenceService class methodsFor!
templateClassName	^#RsrServiceReferenceService! !

!RsrServiceReferenceService class methodsFor!
serverClassName	^#RsrServerReferenceService! !

!RsrSendUnknownService class methodsFor!
clientClassName	^#RsrKnownClient! !

!RsrSendUnknownService class methodsFor!
templateClassName	^#RsrSendUnknownService! !

!RsrSendUnknownService class methodsFor!
serverClassName	^#RsrDoNotCreateThisClass! !

!RsrLifetimeTest class methodsFor!
isAbstract	^self == RsrLifetimeTest! !

!RsrValueHolder class methodsFor!
clientClassName	^#RsrValueHolderClient! !

!RsrValueHolder class methodsFor!
templateClassName	^#RsrValueHolder! !

!RsrValueHolder class methodsFor!
value: anRsrObject	^self new		value: anRsrObject;		yourself! !

!RsrValueHolder class methodsFor!
serverClassName	^#RsrValueHolderServer! !

!RsrTestService class methodsFor!
clientClassName	^#RsrClientTestService! !

!RsrTestService class methodsFor!
templateClassName	^#RsrTestService! !

!RsrTestService class methodsFor!
serverClassName	^#RsrServerTestService! !

!RsrInstrumentedService class methodsFor!
clientClassName	^#RsrInstrumentedClient! !

!RsrInstrumentedService class methodsFor!
templateClassName	^#RsrInstrumentedService! !

!RsrInstrumentedService class methodsFor!
serverClassName	^#RsrInstrumentedServer! !

!RsrConcurrentTestServer class methodsFor!
initialCounter	^0! !

!RsrReturnUnknownService class methodsFor!
clientClassName	^#RsrDoNotCreateThisClass! !

!RsrReturnUnknownService class methodsFor!
templateClassName	^#RsrReturnUnknownService! !

!RsrReturnUnknownService class methodsFor!
serverClassName	^#RsrKnownServer! !

!RsrServiceNoInstVars class methodsFor!
clientClassName	^#RsrClientNoInstVars! !

!RsrServiceNoInstVars class methodsFor!
templateClassName	^#RsrServiceNoInstVars! !

!RsrServiceNoInstVars class methodsFor!
serverClassName	^#RsrServerNoInstVars! !

!RsrStressTest class methodsFor!
isAbstract	^self == RsrStressTest! !

!RsrStressTest class methodsFor!
defaultTimeLimit	^20 seconds! !

!RsrForwarderTest methodsFor!
testForwarding	"This test needs to be improved. It is out of sync."	| service id connection forwarder sendMessage |	service := RsrTestService clientClass new.	id := 1.	connection := RsrConnection		channel: RsrNullChannel new		transactionSpigot: RsrThreadSafeNumericSpigot naturals		oidSpigot: RsrThreadSafeNumericSpigot naturals.	connection open.	service registerWith: connection.	forwarder := service remoteSelf.	forwarder		arg1: 15		arg2: 42.	sendMessage := connection channel lastCommand.	self		assert: sendMessage transaction		equals: 1.	self		assert: (sendMessage receiverReference resolve: connection)		equals: service.	self		assert: (sendMessage selectorReference resolve: connection)		equals: #arg1:arg2:.	self		assert: (sendMessage argumentReferences collect: [:each | each resolve: connection])		equals: #(15 42).! !

!RsrInstrumentedServer methodsFor!
action: aBlock	action := aBlock! !

!RsrInstrumentedServer methodsFor!
postUpdateCount	^postUpdateCount ifNil: [0]! !

!RsrInstrumentedServer methodsFor!
action	^action! !

!RsrInstrumentedServer methodsFor!
postUpdateCount: anInteger	postUpdateCount := anInteger! !

!RsrInstrumentedServer methodsFor!
preUpdateCount: anInteger	preUpdateCount := anInteger! !

!RsrInstrumentedServer methodsFor!
value	^self action value! !

!RsrInstrumentedServer methodsFor!
return: anObject	^anObject! !

!RsrInstrumentedServer methodsFor!
preUpdateCount	^preUpdateCount ifNil: [0]! !

!RsrStressTest methodsFor!
cleanupServices	client := server := nil! !

!RsrStressTest methodsFor!
testBasicSends	self repeatedlySend: nil! !

!RsrStressTest methodsFor!
test1MBytes	self repeatedlySend: (ByteArray new: 1024 squared)! !

!RsrStressTest methodsFor!
server	^server! !

!RsrStressTest methodsFor!
setUp	super setUp.	self		initializeConnections;		initializeServices! !

!RsrStressTest methodsFor!
concurrentlyRun: aBlock	| anyCurtailed semaphores |	anyCurtailed := false.	semaphores := (1 to: self numThreads) collect: [:each | Semaphore new].	semaphores do: [:semaphore | RsrProcessModel fork: [[self repeatedlyRun: aBlock. semaphore signal] ifCurtailed: [anyCurtailed := true. semaphore signal]]].	semaphores do: [:semaphore | semaphore wait].	self deny: anyCurtailed! !

!RsrStressTest methodsFor!
client	^client! !

!RsrStressTest methodsFor!
testConcurrent1KBytes	self concurrentlyRun: [self client value: (ByteArray new: 1024)]! !

!RsrStressTest methodsFor!
repeatedlySend: anObject	self repeatedlyRun: [self client value: anObject]! !

!RsrStressTest methodsFor!
repeatedlyRun: aBlock	self repetitions timesRepeat: aBlock! !

!RsrStressTest methodsFor!
tearDown	self cleanupServices.	super tearDown! !

!RsrStressTest methodsFor!
testConcurrent2KBytes	self concurrentlyRun: [self client value: (ByteArray new: 2 * 1024)]! !

!RsrStressTest methodsFor!
testConcurrentBasicSends	self concurrentlyRun: [self client value: nil]! !

!RsrStressTest methodsFor!
initializeServices	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [:x | x]! !

!RsrStressTest methodsFor!
test2KBytes	self repeatedlySend: (ByteArray new: 1024 *2)! !

!RsrStressTest methodsFor!
test1KBytes	self repeatedlySend: (ByteArray new: 1024)! !

!RsrStressTest methodsFor!
numThreads	^15! !

!RsrStressTest methodsFor!
repetitions	^1000! !

!RsrSocketConnectionTestCase methodsFor!
setUp	super setUp.	self initializeSocketConnections! !

!RsrConcurrentTestServer methodsFor!
counter: anArray	counter := anArray! !

!RsrConcurrentTestServer methodsFor!
stashedProcess	^stashedProcess! !

!RsrConcurrentTestServer methodsFor!
delayedCounter	semaphore signal.	(Delay forSeconds: 2) wait.	^counter at: 1! !

!RsrConcurrentTestServer methodsFor!
counterWithIncrement	^[counter at: 1] ensure: [counter at: 1 put: (counter at: 1) + 1]! !

!RsrConcurrentTestServer methodsFor!
stashProcess	stashedProcess := Processor activeProcess! !

!RsrConcurrentTestServer methodsFor!
semaphore: aSemaphore	semaphore := aSemaphore! !

!RsrSocketSpeciesEquality methodsFor!
setUp	super setUp.	self initializeSocketConnections! !

!RsrInMemoryStressTest methodsFor!
initializeConnections	self initializeInMemoryConnections! !

!RsrPromiseTest methodsFor!
testAsyncFulfill	| promise semaphore expected catchRan first second third |	promise := RsrPromise new.	semaphore := Semaphore new.	expected := Object new.	catchRan := false.	promise		when: [:object | first := object. semaphore signal]		catch: [:reason | catchRan := true. semaphore signal].	promise		when: [:object | second := object. semaphore signal]		catch: [:reason | catchRan := true. semaphore signal].	self		deny: promise isResolved;		deny: promise isBroken;		deny: promise isFulfilled.	promise fulfill: expected.	self		assert: promise isResolved;		deny: promise isBroken;		assert: promise isFulfilled.	semaphore wait; wait.	self shortWait. "Ensure any catch blocks run if they are going to schedule."	self deny: catchRan.	self		assert: first		identicalTo: expected.	self		assert: second		identicalTo: expected.	promise		when: [:object | third := object. semaphore signal]		catch: [:reason | catchRan := true. semaphore signal].	semaphore wait.	self shortWait.	self deny: catchRan.	self		assert: third		identicalTo: expected! !

!RsrPromiseTest methodsFor!
testSyncBreak	| promise expected exceptionRaised first second third |	promise := RsrPromise new.	expected := Object new.	exceptionRaised := false.	self fork: [[promise wait] on: RsrBrokenPromise do: [:ex | exceptionRaised := true. first := ex reason. ex return]].	self fork: [[promise wait] on: RsrBrokenPromise do: [:ex | exceptionRaised := true. second := ex reason. ex return]].	promise break: expected.	self shortWait. "Allow results to process."	self assert: exceptionRaised.	self		assert: first		identicalTo: expected.	self		assert: second		identicalTo: expected.	self		should: [promise wait]		raise: RsrBrokenPromise.	third := [promise wait]		on: RsrBrokenPromise		do: [:ex | ex return: ex reason].	self		assert: third		identicalTo: expected! !

!RsrPromiseTest methodsFor!
testAsyncBreak	| promise semaphore expected whenRan first second third |	promise := RsrPromise new.	semaphore := Semaphore new.	expected := Object new.	whenRan := false.	promise		when: [:object | whenRan := true. semaphore signal]		catch: [:reason | first := reason. semaphore signal].	promise		when: [:object | whenRan := true. semaphore signal]		catch: [:reason | second := reason. semaphore signal].	self		deny: promise isResolved;		deny: promise isBroken;		deny: promise isFulfilled.	promise break: expected.	self		assert: promise isResolved;		assert: promise isBroken;		deny: promise isFulfilled.	semaphore wait; wait.	self shortWait. "Ensure any when blocks run if they are going to schedule."	self deny: whenRan.	self		assert: first		identicalTo: expected.	self		assert: second		identicalTo: expected.	promise		when: [:object | whenRan := true. semaphore signal]		catch: [:reason | third := reason. semaphore signal].	semaphore wait.	self shortWait.	self deny: whenRan.	self		assert: third		identicalTo: expected! !

!RsrPromiseTest methodsFor!
testSyncFulfill	| promise expected exceptionRaised first second |	promise := RsrPromise new.	expected := Object new.	exceptionRaised := false.	self fork: [[first := promise wait] on: RsrBrokenPromise do: [:ex | exceptionRaised := true. ex return]].	self fork: [[second := promise wait] on: RsrBrokenPromise do: [:ex | exceptionRaised := true. ex return]].	promise fulfill: expected.	self shortWait. "Allow results to process."	self deny: exceptionRaised.	self		assert: first		identicalTo: expected.	self		assert: second		identicalTo: expected.	self		assert: promise wait		identicalTo: expected! !

!RsrEncoderTest methodsFor!
testNaN	| encoding |	"Signaling NaN is not tested.	Negative NaN is not tested."	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 15],		#[255 248 0 0 0 0 0 0].	self		verifyImmediate: RsrDoubleReference nan		encoding: encoding.! !

!RsrEncoderTest methodsFor!
testUnsupportedObject	self		should: [self encoder encodeReference: (RsrReference from: Object new) onto: (WriteStream on: ByteArray new)]		raise: RsrUnsupportedObject! !

!RsrEncoderTest methodsFor!
testServiceReferenceService	| rootService referencedService encodedObject expectedEncoding |	referencedService := RsrClientNoInstVars new.	rootService := RsrClientReferenceService service: referencedService.	self		register: rootService;		register: referencedService.	encodedObject := self encoder encodeServiceSnapshot: (RsrServiceSnapshot from: rootService).	expectedEncoding :=		#[0 0 0 0 0 0 0 0], "type"		#[0 0 0 0 0 0 0 1], "rootService's OID = 1"		#[0 0 0 0 0 0 0 1], "Inst Var Count"		#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"		#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"		#[0 0 0 0 0 0 0 25], "Length of UTF-8 encoded bytes"		#[82 115 114 83 101 114 118 101 114 82 101 102 101 114 101 110 99 101 83 101 114 118 105 99 101],		#[0 0 0 0 0 0 0 2]. "#RsrServerReferenceService"	self		assert: encodedObject		equals: expectedEncoding.	encodedObject := self encoder encodeServiceSnapshot: (RsrServiceSnapshot from: referencedService).	expectedEncoding :=		#[0 0 0 0 0 0 0 0], "type"		#[0 0 0 0 0 0 0 2], "referencedService's OID = 2"		#[0 0 0 0 0 0 0 0], "Inst Var Count"		#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"		#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"		#[0 0 0 0 0 0 0 19], "Length of UTF-8 encoded bytes"		#[82 115 114 83 101 114 118 101 114 78 111 73 110 115 116 86 97 114 115]. "#RsrServerNoInstVars"	self		assert: encodedObject		equals: expectedEncoding! !

!RsrEncoderTest methodsFor!
testDeliverResponse	| service response command result expectedEncoding |	service := RsrClientNoInstVars new.	self register: service.	response := #responseSymbol.	command := RsrDeliverResponse		transaction: 1		responseReference: (RsrReference from: response)		snapshots: (Array with: (RsrServiceSnapshot from: service)).	result := self encoder encodeDeliverResponse: command.	expectedEncoding :=		#[0 0 0 0 0 0 0 2], "DeliverResponse Command"		#[0 0 0 0 0 0 0 1], "Transaction Id"		#[0 0 0 0 0 0 0 1], "One service is part of this response"		self serviceNoInstVarsEncoding,		#[0 0 0 0 0 0 0 0], "Service Name Symbol Reference"		#[0 0 0 0 0 0 0 1], "Object Type for Symbol"		#[0 0 0 0 0 0 0 14], "Length of UTF-8 bytes"		#[114 101 115 112 111 110 115 101 83 121 109 98 111 108]. "#responseSymbol"	self		assert: result		equals: expectedEncoding! !

!RsrEncoderTest methodsFor!
verifyImmediate: anObjectencoding: expected	| actual |	actual := ByteArray streamContents: [:stream | self encoder encodeReference: (RsrReference from: anObject) onto: stream].	self		assert: actual		equals: expected! !

!RsrEncoderTest methodsFor!
testServiceNoInstVars	| rootService encodedBytes expectedEncoding |	rootService := RsrClientNoInstVars new.	self register: rootService.	encodedBytes := self encoder encodeServiceSnapshot: (RsrServiceSnapshot from: rootService).	expectedEncoding := self serviceNoInstVarsEncoding.	self		assert: encodedBytes		equals: expectedEncoding! !

!RsrEncoderTest methodsFor!
verifyControlWord: anIntegerencoding: expected	| actual |	actual := ByteArray streamContents: [:stream | self encoder encodeControlWord: anInteger onto: stream].	self		assert: actual		equals: expected! !

!RsrEncoderTest methodsFor!
testReleaseServices	| command result expectedEncoding |	command := RsrReleaseServices sids: #(1 2 3 4 5).	result := self encoder encodeReleaseServices: command.	expectedEncoding :=		#[0 0 0 0 0 0 0 3], "ReleaseObjects Command"		#[0 0 0 0 0 0 0 5], "Num OIDS"		#[0 0 0 0 0 0 0 1], "First OID"		#[0 0 0 0 0 0 0 2],		#[0 0 0 0 0 0 0 3],		#[0 0 0 0 0 0 0 4],		#[0 0 0 0 0 0 0 5]. "Last OID"	self		assert: result		equals: expectedEncoding! !

!RsrEncoderTest methodsFor!
register: aService	self connection _ensureRegistered: aService! !

!RsrEncoderTest methodsFor!
testSendMessage	| service analysis command result expectedEncoding |	service := RsrClientNoInstVars new.	self register: service.	analysis := RsrSnapshotAnalysis		roots: (Array with: service)		connection: self connection.	analysis perform.	command := RsrSendMessage		transaction: 1		receiverReference: (RsrReference from: service)		selectorReference: (RsrSymbolReference from: #return42)		argumentReferences: #().	command snapshots: analysis snapshots.	result := self encoder encodeSendMessage: command.	expectedEncoding :=		#[0 0 0 0 0 0 0 1], "SendMessage Command"		#[0 0 0 0 0 0 0 1], "Transaction ID"		#[0 0 0 0 0 0 0 1], "One service is part of this message"		self serviceNoInstVarsEncoding,		#[0 0 0 0 0 0 0 1], "Receiver OID"		#[0 0 0 0 0 0 0 0], "Selector Reference"		#[0 0 0 0 0 0 0 1], "Object Type for Symbol"		#[0 0 0 0 0 0 0 8], "Length of UTF-8 bytes"		#[114 101 116 117 114 110 52 50], "#return42"		#[0 0 0 0 0 0 0 0]. "Argument Count"	self		assert: result		equals: expectedEncoding! !

!RsrRemoteAction methodsFor!
sharedVariable: anObject	sharedVariable := anObject! !

!RsrRemoteAction methodsFor!
sharedVariable	^sharedVariable! !

!RsrSystemTestCase methodsFor!
initializeSocketConnections	| spec |	spec := RsrInternalSocketConnectionSpecification new.	spec connect.	connectionA := spec connectionA.	connectionB := spec connectionB.	self		assert: connectionA isOpen;		assert: connectionB isOpen! !

!RsrSystemTestCase methodsFor!
initializeInMemoryConnections	| spec |	spec := RsrInMemoryConnectionSpecification new.	spec connect.	connectionA := spec connectionA.	connectionB := spec connectionB.	self		assert: connectionA isOpen;		assert: connectionB isOpen! !

!RsrSystemTestCase methodsFor!
setUp	"Subclasses need to start their connections by calling	#initializeInMemoryConnections or #initializeSocketConnections.	#tearDown will close connections."	super setUp! !

!RsrSystemTestCase methodsFor!
serviceFactoryA	^connectionA serviceFactory! !

!RsrSystemTestCase methodsFor!
tearDown	connectionA ifNotNil: [:conn | conn close].	connectionB ifNotNil: [:conn | conn close].	connectionA := connectionB := nil.	super tearDown! !

!RsrSystemTestCase methodsFor!
expectCatch: aPromise	| semaphore wasFulfilled result whenValue |	semaphore := Semaphore new.	wasFulfilled := false.	aPromise		when: [:value | whenValue := value. wasFulfilled := true. semaphore signal]		catch: [:reason | result := reason. semaphore signal].	semaphore wait.	self deny: wasFulfilled.	^result! !

!RsrSystemTestCase methodsFor!
expectWhen: aPromise	| semaphore wasBroken result |	semaphore := Semaphore new.	wasBroken := false.	aPromise		when: [:value | result := value. semaphore signal]		catch: [:r | wasBroken := true. semaphore signal].	semaphore wait.	self deny: wasBroken.	^result! !

!RsrSystemTestCase methodsFor!
serviceFactoryB	^connectionB serviceFactory! !

!RsrInstrumentedClient methodsFor!
postUpdateCount: anInteger	postUpdateCount := anInteger! !

!RsrInstrumentedClient methodsFor!
postUpdateCount	^postUpdateCount ifNil: [0]! !

!RsrInstrumentedClient methodsFor!
value	^remoteSelf value wait! !

!RsrInstrumentedClient methodsFor!
preUpdateCount: anInteger	preUpdateCount := anInteger! !

!RsrInstrumentedClient methodsFor!
return: anObject	^(remoteSelf return: anObject) wait! !

!RsrInstrumentedClient methodsFor!
preUpdateCount	^preUpdateCount ifNil: [0]! !

!RsrServiceReferenceService methodsFor!
service: anObject	service := anObject! !

!RsrServiceReferenceService methodsFor!
service	^ service! !

!RsrInstrumentedService methodsFor!
preUpdate	self preUpdateCount: self preUpdateCount + 1! !

!RsrInstrumentedService methodsFor!
postUpdate	self postUpdateCount: self postUpdateCount + 1! !

!RsrDifferentServerService methodsFor!
private1	^private1! !

!RsrDifferentServerService methodsFor!
private1: anObject	private1 := anObject! !

!RsrConcurrentTestClient methodsFor!
delayedCounter	^remoteSelf delayedCounter wait! !

!RsrConcurrentTestClient methodsFor!
counterWithIncrement	^remoteSelf counterWithIncrement wait! !

!RsrConcurrentTestClient methodsFor!
stashProcess	remoteSelf stashProcess wait! !

!RsrSignalErrorInAsString methodsFor!
asString	^Error signal! !

!RsrSocketMessageSendingTest methodsFor!
setUp	super setUp.	self initializeSocketConnections! !

!RsrClientNoInstVars methodsFor!
unimplementedRemoteSend	"Send a selector which is not implemented remotely resuling in a DNU."	^remoteSelf doNotImplementThisSelectorOrYouWillBreakATest! !

!RsrInMemoryConnectionTestCase methodsFor!
setUp	super setUp.	self initializeInMemoryConnections! !

!RsrServiceNoInstVars methodsFor!
sendReturnArgument: anObject	^(remoteSelf returnArgument: anObject) wait! !

!RsrServiceNoInstVars methodsFor!
returnArgument: anObject	^anObject! !

!RsrInMemoryLifetimeTest methodsFor!
setUp	super setUp.	self initializeInMemoryConnections! !

!RsrThreadSafeNumericSpigotTest methodsFor!
spigotClass	^RsrThreadSafeNumericSpigot! !

!RsrInMemoryMessageSendingTest methodsFor!
setUp	super setUp.	self initializeInMemoryConnections! !

!RsrInMemorySpeciesEquality methodsFor!
setUp	super setUp.	self initializeInMemoryConnections! !

!RsrSpeciesEquality methodsFor!
testUnicodeString	self verify: self unicodeString! !

!RsrSpeciesEquality methodsFor!
testServiceWithUnsupportedObject	| service |	service := connectionA serviceFor: #RsrClientNoInstVars.	self		should: [service sendReturnArgument: (RsrValueHolderClient value: Object new)]		raise: RsrUnsupportedObject! !

!RsrSpeciesEquality methodsFor!
testCharacter	self		verify: (Character codePoint: 0);		verify: (Character codePoint: 65);		verify: $A;		verify: (Character codePoint: 16r01D4);		verify: (Character codePoint: 16r8334)! !

!RsrSpeciesEquality methodsFor!
testArray	self		verify: #();		verify: (Array withAll: self basicExamples)! !

!RsrSpeciesEquality methodsFor!
basicExamples	"Give a samples of each species to ensure Collection classes are able to encode each type successfully."	^{RsrClientNoInstVars new.	#h.	#''.	'h'.	''.	0.	234.	-97.	$s.	nil.	true.	false.	{}.	{RsrClientNoInstVars new. {}.}.	#[].	#[123].	Set new.	Set with: 42.	OrderedCollection new.	OrderedCollection with: #x.	Dictionary new.	Dictionary new at: #key put: #value; yourself.	RsrDateAndTime posixEpoch.	RsrDateAndTime fromMicroseconds: -1000000. "1969-12-31T23:59:59-00:00"}! !

!RsrSpeciesEquality methodsFor!
verify: anObject	"Send <anObject> through RSR and have it returned. Assert it is equivalent."	| client server |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [:object | server sharedVariable: object. object].	self		assert: (client value: anObject)		equals: anObject.	self		assert: client sharedVariable		equals: anObject! !

!RsrSpeciesEquality methodsFor!
testString	self		verify: '';		verify: 'string'! !

!RsrSpeciesEquality methodsFor!
unicodeString	^String		with: $a		with: (Character codePoint: 16r8349)		with: (Character codePoint: 16r10E60)! !

!RsrSpeciesEquality methodsFor!
testByteArray	self		verify: #[];		verify: (ByteArray withAll: (0 to: 255));		verify: (ByteArray new: 1024)! !

!RsrSpeciesEquality methodsFor!
testUnicodeSymbol	self verify: self unicodeString asSymbol! !

!RsrSpeciesEquality methodsFor!
testBoolean	self		verify: true;		verify: false! !

!RsrSpeciesEquality methodsFor!
testUndefinedObject	self verify: nil! !

!RsrSpeciesEquality methodsFor!
testSet	self		verify: Set new;		verify: (Set withAll: self basicExamples)! !

!RsrSpeciesEquality methodsFor!
testDictionary	| example |	example := Dictionary new.	self verify: example.	self basicExamples do: [:each | each ifNotNil: [example at: each put: each]].	example at: #testDictionaryPrivateKey put: nil.	self verify: example! !

!RsrSpeciesEquality methodsFor!
testDateAndTime	self		verify: (RsrDateAndTime fromMicroseconds: -491277642567488); "1954-06-07T14:59:17.432512-07:00"		verify: (RsrDateAndTime fromMicroseconds: 1562692562657612). "2019-07-09T10:16:02.657612-07:00"! !

!RsrSpeciesEquality methodsFor!
testService	| clientClass serverClass |	clientClass := RsrRemoteAction clientClass.	serverClass := RsrRemoteAction serverClass.	self		verify: clientClass new;		verify: (clientClass sharedVariable: clientClass new);		verify: (serverClass sharedVariable: clientClass new)! !

!RsrSpeciesEquality methodsFor!
testOrderedCollection	self		verify: OrderedCollection new;		verify: (OrderedCollection withAll: self basicExamples)! !

!RsrSpeciesEquality methodsFor!
testInteger	self		verify: 0;		verify: -1;		verify: 1;		verify: (2 raisedTo: 32);		verify: (2 raisedTo: 32) negated;		verify: (2 raisedTo: 64);		verify: (2 raisedTo: 64) negated;		verify: 4598754392654025898794;		verify: -13750198234577893465! !

!RsrSpeciesEquality methodsFor!
testSymbol	self		verify: #'';		verify: #symbol! !

!RsrConnectionTestCase methodsFor!
testWaitUntilClose	| semaphore marker |	semaphore := Semaphore new.	marker := false.	self		fork:			[semaphore signal.			[connectionB waitUntilClose.			marker := true]				ensure: [semaphore signal]].	semaphore wait.	self deny: marker.	connectionA close.	semaphore wait.	self assert: marker! !

!RsrSnapshotAnalysisTest methodsFor!
testServiceAllDataObjects	"While this code is structurally similar to #testClientNoInstVars, it ensures	that Data Objects are actually encoded in-line."	| client analysis expected |	client := RsrRemoteAction clientClass new.	analysis := self analyze: client.	expected := OrderedCollection with: client.	self		assert: analysis snapshots size		equals: 1.	self assert: client isMirrored! !

!RsrSnapshotAnalysisTest methodsFor!
tearDown	connection close.	connection := nil.	super tearDown! !

!RsrSnapshotAnalysisTest methodsFor!
testSetCycle	| set analysis |	set := Set new.	set add: set.	analysis := self analyze: set.	self		assert: analysis snapshots size equals: 0;		assert: analysis analyzedObjects size equals: 1.	set := Set new.	set add: (Array with: set).	analysis := self analyze: set.	self		assert: analysis snapshots size equals: 0;		assert: analysis analyzedObjects size equals: 2! !

!RsrSnapshotAnalysisTest methodsFor!
analyze: anObject	| analysis |	analysis := RsrSnapshotAnalysis		roots: (Array with: anObject)		connection: connection.	analysis perform.	^analysis! !

!RsrSnapshotAnalysisTest methodsFor!
testArrayCycle	| array analysis |	array := Array new: 1.	array at: 1 put: array.	analysis := self analyze: array.	self		assert: analysis snapshots size equals: 0;		assert: analysis analyzedObjects size equals: 1.	array at: 1 put: { array }.	analysis := self analyze: array.	self		assert: analysis snapshots size equals: 0;		assert: analysis analyzedObjects size equals: 2.! !

!RsrSnapshotAnalysisTest methodsFor!
testNewServiceInArray	"Ensure a new service in a collection is properly tagged"	| service analysis expected |	service := RsrServerNoInstVars new.	analysis := self analyze: (Array with: service).	expected := OrderedCollection with: service.	self		assert: analysis snapshots size		equals: 1.	self assert: service isMirrored! !

!RsrSnapshotAnalysisTest methodsFor!
testMultiPathsToSameService	"Tests issue 76, Unnecessary duplicate snapshots being sent."	| childService parentService orderedCollection analysis |	childService := RsrRemoteAction clientClass new.	parentService := RsrRemoteAction clientClass sharedVariable:		                 childService.	orderedCollection := OrderedCollection		                     with: childService		                     with: parentService.	analysis := self analyze: orderedCollection.	self assert: analysis snapshots size equals: 2.	self		assert: parentService isMirrored;		assert: childService isMirrored! !

!RsrSnapshotAnalysisTest methodsFor!
testServiceNoInstVars	| client analysis expected snapshot |	client := RsrClientNoInstVars new.	analysis := self analyze: client.	expected := OrderedCollection with: client.	self assert: client isMirrored.	self		assert: analysis snapshots size		equals: 1.	snapshot := analysis snapshots first.	self		assert: snapshot slots size		equals: 0.	self assert: snapshot shouldCreateServer.	self		assert: snapshot templateClass		equals: client class templateClass! !

!RsrSnapshotAnalysisTest methodsFor!
testOrderedCollectionCycle	| oc analysis |	oc := OrderedCollection new.	oc add: oc.	analysis := self analyze: oc.	self		assert: analysis snapshots size equals: 0;		assert: analysis analyzedObjects size equals: 1.	oc := OrderedCollection with: (Array with: oc).	analysis := self analyze: oc.	self		assert: analysis snapshots size equals: 0;		assert: analysis analyzedObjects size equals: 3! !

!RsrSnapshotAnalysisTest methodsFor!
testServiceWithCycle	| rootClient referencedClient analysis |	rootClient := RsrRemoteAction new.	referencedClient := RsrRemoteAction sharedVariable: rootClient.	rootClient sharedVariable: referencedClient.	analysis := self analyze: rootClient.	self		assert: analysis snapshots size equals: 2;		assert: analysis analyzedObjects size equals: 2! !

!RsrSnapshotAnalysisTest methodsFor!
testDictionaryCycle	| dictionary analysis |	dictionary := Dictionary new.	dictionary at: 1 put: dictionary.	analysis := self analyze: dictionary.	self		assert: analysis snapshots size equals: 0;		assert: analysis analyzedObjects size equals: 2.	dictionary removeKey: 1.	dictionary at: dictionary put: 1.	analysis := self analyze: dictionary.	self		assert: analysis snapshots size equals: 0;		assert: analysis analyzedObjects size equals: 2! !

!RsrSnapshotAnalysisTest methodsFor!
testNewServicesInDictionary	"Ensure a new service in a collection is properly tagged"	| key value dictionary analysis expected |	key := RsrServerNoInstVars new.	value := RsrServerNoInstVars new.	dictionary := Dictionary new		at: key put: value;		yourself.	analysis := self analyze: dictionary.	self		assert: analysis snapshots size		equals: 2.	self		assert: key isMirrored;		assert: value isMirrored! !

!RsrSnapshotAnalysisTest methodsFor!
testServiceReferencingAnotherService	"While this code is structurally similar to #testClientNoInstVars, it ensures	that Data Objects are actually encoded in-line."	| referencedService client analysis expected |	referencedService := RsrRemoteAction clientClass new.	client := RsrRemoteAction clientClass sharedVariable: referencedService.	analysis := self analyze: client.	self		assert: analysis snapshots size		equals: 2.	self		assert: client isMirrored;		assert: referencedService isMirrored! !

!RsrSnapshotAnalysisTest methodsFor!
setUp	super setUp.	connection := RsrConnection		channel: RsrNullChannel new		transactionSpigot: RsrThreadSafeNumericSpigot naturals		oidSpigot: RsrThreadSafeNumericSpigot naturals.	connection open! !

!RsrSameTemplateAndClientService methodsFor!
replicated2: anObject	replicated2 := anObject! !

!RsrSameTemplateAndClientService methodsFor!
replicated1	^replicated1! !

!RsrSameTemplateAndClientService methodsFor!
replicated1: anObject	replicated1 := anObject! !

!RsrSameTemplateAndClientService methodsFor!
replicated2	^replicated2! !

!RsrSocketStressTest methodsFor!
initializeConnections	self initializeSocketConnections! !

!RsrSocketServiceTest methodsFor!
setUp	super setUp.	self initializeSocketConnections! !

!RsrValueHolder methodsFor!
value	^value! !

!RsrValueHolder methodsFor!
value: anObject	value := anObject.	self synchronize! !

!RsrSocketStreamTestCase methodsFor!
testSendReceive	| count bytes |	count := 1024.	bytes := ByteArray new: count.	aStream		nextPutAll: bytes;		flush.	self		assert: (bStream next: count)		equals: bytes! !

!RsrSocketStreamTestCase methodsFor!
testNextPutAllAfterClose	self deny: aStream atEnd.	aStream close.	self assert: aStream atEnd.	self		should: [aStream nextPutAll: #[1 2 3]]		raise: RsrSocketClosed! !

!RsrSocketStreamTestCase methodsFor!
tearDown	aStream close.	bStream close.	super tearDown! !

!RsrSocketStreamTestCase methodsFor!
setUp	super setUp.	self initializeStreams! !

!RsrSocketStreamTestCase methodsFor!
testNextAfterClose	aStream close.	self		should: [aStream next]		raise: RsrSocketClosed.	self		should: [bStream next]		raise: RsrSocketClosed! !

!RsrSocketStreamTestCase methodsFor!
initializeStreams	| socketPair |	socketPair := RsrSocketPair new.	aStream := socketPair firstStream.	bStream := socketPair secondStream! !

!RsrMessageSendingTest methodsFor!
testReturnNewService	| client server returnedService |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [RsrValueHolderServer new].	returnedService := client value.	self		assert: returnedService class		equals: RsrValueHolderClient! !

!RsrMessageSendingTest methodsFor!
testDebugHandlerNoResolutionWithNonresumableException	"Ensure that if the debug handler does not resolve the exception	and the exception is nonresumable, that we Break the Promise	reporting on the unresolved exception."	| marker client server reason |	marker := #testMarker.	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [RsrNonresumableError signal].	server debugHandler: [:exception :messageSend :resolver | marker].	reason := self expectCatch: client asyncValue.	self		assert: reason exceptionClassName		equals: #RsrNonresumableError! !

!RsrMessageSendingTest methodsFor!
testChangeRemoteState	| marker client server |	marker := false.	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [marker := true].	client value.	self assert: marker! !

!RsrMessageSendingTest methodsFor!
terminateCurrentProcess	Processor activeProcess terminate! !

!RsrMessageSendingTest methodsFor!
testPrePostUpdate	| client server pre post |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	pre := post := false.	server		preUpdateHandler: [pre := true];		postUpdateHandler: [post := true];		action: [].	client value.	self		assert: pre;		assert: post! !

!RsrMessageSendingTest methodsFor!
testDebugHandlerNoResolutionWithResumableException	"Ensure that if the debug handler does not resolve the exception	and the exception is resumable, we resume with the evaluation	result of the debug handler."	| marker client server |	marker := #testMarker.	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [RsrResumableError signal].	server debugHandler: [:exception :messageSend :resolver | marker].	self		assert: client value		equals: marker! !

!RsrMessageSendingTest methodsFor!
testReturnSymbol	| client server symbol result |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	symbol := #testSymbol.	server action: [symbol].	result := client value.	self		assert: result		equals: symbol! !

!RsrMessageSendingTest methodsFor!
testRemoteError	| client server reason |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [Error new tag: 'tag'; messageText: 'messageText'; signal].	[client value]		on: RsrBrokenPromise		do: [:ex | reason := ex reason. ex return].	self assert: reason isRemoteException.	self		assert: reason exceptionClassName		equals: #Error.	self		assert: reason tag		equals: 'tag'.	self		assert: reason messageText		equals: 'messageText'.	self		assert: reason stack isString;		assert: reason stack size > 0! !

!RsrMessageSendingTest methodsFor!
testDebugHandlerBreak	"Ensure that if a debug handler resolves the message,	that the correct reason is received remotely."	| marker client server reason |	marker := #testMarker.	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [RsrResumableError signal. 42 "ensure we do not return the marker"].	server debugHandler: [:exception :messageSend :resolver | resolver break: marker. nil "ensure we do not return the marker"].	reason := self expectCatch: client asyncValue.	self		assert: reason		equals: marker.	server action: [RsrNonresumableError signal. 42 "ensure we do not return the marker"].	reason := self expectCatch: client asyncValue.	self		assert: reason		equals: marker! !

!RsrMessageSendingTest methodsFor!
testRemoteProcessTerminationDuringMessageSend	| client server reason |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [self terminateCurrentProcess].	reason := self expectCatch: client asyncValue.	self		assert: reason		equals: 'Message send terminated without a result'! !

!RsrMessageSendingTest methodsFor!
testRemoteErrorWithTag	| client server tag messageText reason |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	tag := nil.	messageText := 'messageText'.	server action: [Error new tag: tag; messageText: messageText; signal].	reason := [client value]		on: RsrBrokenPromise		do: [:ex | ex return: ex reason].	self assert: reason isRemoteException.	self		assert: reason tag		equals: 'messageText'.	self		assert: reason messageText		equals: 'messageText'.	self		assert: reason stack isString;		assert: reason stack size > 0.	tag := 42.	reason := [client value]		on: RsrBrokenPromise		do: [:ex | ex return: ex reason].	self		assert: reason tag		equals: '42'.	tag := RsrSignalErrorInAsString new.	reason := [client value]		on: RsrBrokenPromise		do: [:ex | ex return: ex reason].	self		assert: reason tag		equals: 'Unable to pack #tag containing an instance of RsrSignalErrorInAsString'! !

!RsrMessageSendingTest methodsFor!
testDebugHandlerException	"Ensure that an exception that occurs in the debug handler	is reported back as the reason for Promise breaking."	| marker client server reason |	marker := #testMarker.	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [RsrResumableError signal].	server debugHandler: [:exception :messageSend :resolver | Error signal].	reason := self expectCatch: client asyncValue.	self		assert: reason exceptionClassName		equals: #Error.	server action: [RsrNonresumableError signal].	reason := self expectCatch: client asyncValue.	self		assert: reason exceptionClassName		equals: #Error.! !

!RsrMessageSendingTest methodsFor!
testReturnAlsoUpdatesLocalService	"Ensure that when the remote peer service returns a value,	that it is also sent to update the local service."	| client server value response |	client := self serviceFactoryA serviceFor: #RsrReflectedVariableTestServiceB.	client synchronize.	server := connectionB serviceAt: client _id.	value := 42.	self		deny: client varA		equals: value.	self		deny: client varB		equals: value.	response := client setVarsToAndReturn: value.	self		assert: response		equals: value.	self		assert: server varA		equals: value.	self		assert: server varB		equals: value.	self		assert: client varA		equals: value.	self		assert: client varB		equals: value! !

!RsrMessageSendingTest methodsFor!
testUnimplementedRemoteSend	"Ensure a remote DNU is reported back to the sender."	| marker client server reason |	marker := #testMarker.	client := connectionA serviceFor: #RsrServiceNoInstVars.	client synchronize.	reason := self expectCatch: client unimplementedRemoteSend.	self		assert: reason class		equals: RsrRemoteExceptionServer.	self		assert: reason exceptionClassName		equals: #MessageNotUnderstood! !

!RsrMessageSendingTest methodsFor!
testReturnArgument	| client server arguments dt response |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [:object | object].	arguments := OrderedCollection new		addAll: #( '' #symbol 'string' $h 0 -14 14 18446744073709551616 -18446744073709551616 nil true false ); 		add: (Character codePoint: 16r259F);		add: (Dictionary new at: 1 put: 2; yourself);		add: (Set with: 14);		add: #[1 2 3 4];		add: (OrderedCollection with: 42 with: 43);		add: #(1 2 #(nil));		yourself.	dt := RsrDateAndTime now.	response := client value: dt.	self		assert: (dt asSeconds * 1000000) rounded		equals: (response asSeconds * 1000000) rounded.	arguments		do:			[:each | | result |			result := client value: each.			self				assert: result				equals: each].	arguments		do:			[:each | | result |			result := server value: each.			self				assert: result				equals: each].	self		assert: (client value: arguments)		equals: arguments.	self		assert: (server value: arguments)		equals: arguments.	self		assert: (client value: client)		identicalTo: client! !

!RsrMessageSendingTest methodsFor!
testDebugHandlerFulfill	"Ensure that if a debug handler resolves the message,	that the fulfillment value is received remotely."	| marker client server |	marker := #testMarker.	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [RsrResumableError signal. 42 "ensure we do not return the marker"].	server debugHandler: [:exception :messageSend :resolver | resolver fulfill: marker. nil "ensure we do not return the marker"].	self		assert: client value		equals: marker.	server action: [RsrNonresumableError signal. 42 "ensure we do not return the marker"].	self		assert: client value		equals: marker! !

!RsrMessageSendingTest methodsFor!
testAsyncReturnArgument	| client server promise result |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [:arg | arg].	promise := client asyncValue: client.	result := self expectWhen: promise.	self		assert: result		identicalTo: client! !

!RsrMessageSendingTest methodsFor!
testPrePostUpdateError	| client server reason |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [true].	self assert: client value.	server		preUpdateHandler: [Error signal: 'preUpdate'];		postUpdateHandler: [].	reason := self expectCatch: client asyncValue.	self		assert: reason exceptionClassName		equals: #Error.	self		assert: reason messageText		equals: 'preUpdate'.	server		preUpdateHandler: [];		postUpdateHandler:  [Error signal: 'postUpdate'].	reason := self expectCatch: client asyncValue.	self		assert: reason exceptionClassName		equals: #Error.	self		assert: reason messageText		equals: 'postUpdate'.! !

!RsrMessageSendingTest methodsFor!
testAsyncReturnService	| client server service |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [RsrValueHolderServer new].	service := self expectWhen: client asyncValue.	self		assert: service class		equals: RsrValueHolderClient! !

!RsrMessageSendingTest methodsFor!
testReturnNewServiceInArray	| client server array returnedService |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [Array with: RsrValueHolderServer new].	array := client value.	returnedService := array first.	self		assert: returnedService class		equals: RsrValueHolderClient! !

!RsrMessageSendingTest methodsFor!
testRemoteProcessTerminationDuringDebugHandler	| client server reason |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server		action: [Error signal];		debugHandler: [:ex :message :resolver | self terminateCurrentProcess].	reason := self expectCatch: client asyncValue.	self		assert: reason		equals: 'Message send terminated without a result'! !

!RsrMessageSendingTest methodsFor!
testRemoteProcessTerminationDuringPrePostUpdate	| client server reason |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server		preUpdateHandler: [self terminateCurrentProcess];		postUpdateHandler: [];		action: [].	reason := self expectCatch: client asyncValue.	self		assert: reason		equals: 'Message send terminated without a result'! !

!RsrMessageSendingTest methodsFor!
testCloseConnectionDuringMessageSend	| client server promise reason |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [(Delay forSeconds: 10) wait].	promise := client asyncValue.	connectionA close.	reason := self expectCatch: promise.	self		assert: reason class		equals: RsrConnectionClosed! !

!RsrMessageSendingTest methodsFor!
testReturnInvalidObject	| client server reason |				client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [Object new].	self		should: [client value]		raise: RsrBrokenPromise.	reason := [client value]		on: RsrBrokenPromise		do: [:ex | ex return: ex reason].	self assert: reason isRemoteException.	self		assert: reason exceptionClassName		equals: #RsrUnsupportedObject.	self		assert: reason tag		equals: 'Instances of #Object do not support replication.'.	self		assert: reason messageText		equals: 'Instances of #Object do not support replication.'.	self		assert: reason stack isString;		assert: reason stack size > 0! !

!RsrMessageSendingTest methodsFor!
testAsyncRemoteError	| client server reason |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [Error new tag: 'tag'; messageText: 'messageText'; signal].	reason := self expectCatch: client asyncValue.	self assert: reason isRemoteException.	self		assert: reason exceptionClassName		equals: #Error.	self		assert: reason tag		equals: 'tag'.	self		assert: reason messageText		equals: 'messageText'.	self		assert: reason stack isString;		assert: reason stack size > 0! !

!RsrMessageSendingTest methodsFor!
testSendInvalidObject	| client server |				client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [:arg | arg].	self		should: [client value: Object new]		raise: RsrUnsupportedObject! !

!RsrRemoteActionServer methodsFor!
debugHandler	^debugHandler ifNil: [[:x :y :z | nil]]! !

!RsrRemoteActionServer methodsFor!
debug: anExceptionraisedDuring: aMessageSendanswerUsing: aResolver	^self debugHandler		value: anException		value: aMessageSend		value: aResolver! !

!RsrRemoteActionServer methodsFor!
postUpdate	self postUpdateHandler value! !

!RsrRemoteActionServer methodsFor!
debugHandler: aBlock	debugHandler := aBlock! !

!RsrRemoteActionServer methodsFor!
value	^self action value! !

!RsrRemoteActionServer methodsFor!
value: anObject	^self action value: anObject! !

!RsrRemoteActionServer methodsFor!
action	^action! !

!RsrRemoteActionServer methodsFor!
preUpdateHandler	^preUpdateHandler ifNil: [[]]! !

!RsrRemoteActionServer methodsFor!
postUpdateHandler: aBlock	postUpdateHandler := aBlock! !

!RsrRemoteActionServer methodsFor!
valueWithArguments: anArray	^self action valueWithArguments: anArray! !

!RsrRemoteActionServer methodsFor!
action: aBlock	action := aBlock! !

!RsrRemoteActionServer methodsFor!
preUpdate	self preUpdateHandler value! !

!RsrRemoteActionServer methodsFor!
preUpdateHandler: aBlock	preUpdateHandler := aBlock! !

!RsrRemoteActionServer methodsFor!
postUpdateHandler	^postUpdateHandler ifNil: [[]]! !

!RsrReflectedVariableTestServiceA methodsFor!
varA	^varA! !

!RsrTestService methodsFor!
sharedVariable: anObject	sharedVariable := anObject! !

!RsrTestService methodsFor!
remoteSelf	^remoteSelf! !

!RsrTestService methodsFor!
sharedVariable	^sharedVariable! !

!RsrConnectionSpecificationTestCase methodsFor!
testInternalConnectionSpecification! !

!RsrConnectionSpecificationTestCase methodsFor!
port	^47652! !

!RsrConnectionSpecificationTestCase methodsFor!
testEstablishConnection	| acceptor initiator semaphore connectionA connectionB |	acceptor := RsrAcceptConnection port: self port.	initiator := RsrInitiateConnection		host: self localhost		port: self port.	semaphore := Semaphore new.	self		fork: [[connectionA := acceptor waitForConnection] ensure: [semaphore signal]];		fork: [[connectionB := initiator connect] ensure: [semaphore signal]].	semaphore wait; wait.	self		assert: connectionA isOpen;		assert: connectionB isOpen.	connectionA close.	connectionB close! !

!RsrConnectionSpecificationTestCase methodsFor!
testInternalConnectionSpecificationConnectReturnsConnection	"Ensure that sending #connect to an InternalConnectionSpecification	results in returning one of the created Connections."	| spec connection |	spec := RsrInMemoryConnectionSpecification new.	connection := spec connect.	self assert: connection isOpen.	connection close.	spec := RsrInternalSocketConnectionSpecification new.	connection := spec connect.	self assert: connection isOpen.	connection close! !

!RsrConnectionSpecificationTestCase methodsFor!
testCancelWaitForConnection	| acceptor |	acceptor := RsrAcceptConnection port: self port.	self fork: [(Delay forSeconds: 1) wait. acceptor cancelWaitForConnection].	self		should: [acceptor waitForConnection]		raise: RsrWaitForConnectionCancelled! !

!RsrConnectionSpecificationTestCase methodsFor!
alternativeLocalhost	^'127.0.1.1'! !

!RsrConnectionSpecificationTestCase methodsFor!
testFailedAcceptOnAlternativeLocalhost	| acceptor initiator semaphore |	acceptor := RsrAcceptConnection		host: self alternativeLocalhost		port: self port.	initiator := RsrInitiateConnection		host: self localhost		port: self port.	semaphore := Semaphore new.	self fork: [[semaphore signal. acceptor waitForConnection] on: RsrWaitForConnectionCancelled do: [:ex | ex return]].	[semaphore wait.	self		should: [initiator connect]		raise: RsrSocketError]			ensure: [acceptor cancelWaitForConnection]! !

!RsrConnectionSpecificationTestCase methodsFor!
localhost	^'127.0.0.1'! !

!RsrConnectionSpecificationTestCase methodsFor!
testAcceptOnLocalhost	| acceptor initiator semaphore connectionA connectionB |	acceptor := RsrAcceptConnection		host: self localhost		port: self port.	initiator := RsrInitiateConnection		host: self localhost		port: self port.	semaphore := Semaphore new.	self		fork: [[connectionA := acceptor waitForConnection] ensure: [semaphore signal]];		fork: [[connectionB := initiator connect] ensure: [semaphore signal]].	semaphore wait; wait.	self		assert: connectionA isOpen;		assert: connectionB isOpen.	connectionA close.	connectionB close! !

!RsrReflectedVariableTestServiceB methodsFor!
varB	^varB! !

!RsrDecoderTest methodsFor!
testServiceDecodeIdentity	"Ensure that decoding an object multiple times results in	a single object getting created."	| firstService secondService |	firstService := self decodeService: self serviceNoInstVarsEncoding.	secondService := self decodeService: self serviceNoInstVarsEncoding.	self		assert: firstService		identicalTo: secondService! !

!RsrDecoderTest methodsFor!
testServiceReferenceService	| rootService referencedService |	referencedService := self decodeService: self referencedServiceEncoding.	self		assert: referencedService class		equals: RsrServerNoInstVars.	self		assert: referencedService _id		equals: 2.	rootService := self decodeService: self rootServiceEncoding.	self		assert: rootService class		equals: RsrServerReferenceService.	self		assert: rootService service		equals: referencedService! !

!RsrDecoderTest methodsFor!
verifyImmediate: expectedencoding: encoding	| actual |	actual := (self decoder decodeReference: encoding readStream) resolve: self connection.	self		assert: actual		equals: expected! !

!RsrDecoderTest methodsFor!
testDeliverResponse	| service response encoding command decodedService |	service := RsrServerNoInstVars new.	self connection _ensureRegistered: service.	response := #responseSymbol.	encoding :=		#[0 0 0 0 0 0 0 2], "DeliverResponse Command"		#[0 0 0 0 0 0 0 1], "Transaction Id"		#[0 0 0 0 0 0 0 1], "Number of services"		self serviceNoInstVarsEncoding,		#[0 0 0 0 0 0 0 0], "Service Name Symbol Reference"		#[0 0 0 0 0 0 0 1], "Object Type for Symbol"		#[0 0 0 0 0 0 0 14], "Length of UTF-8 bytes"		#[114 101 115 112 111 110 115 101 83 121 109 98 111 108]. "#responseSymbol"	command := self decoder decodeCommand: encoding readStream.	self		assert: command class		equals: RsrDeliverResponse.	self		assert: command transaction		equals: 1.	self		assert: command snapshots size		equals: 1.	decodedService := command snapshots first reifyIn: self connection.	self		assert: decodedService		equals: service.	self		assert: (command response resolve: self connection)		equals: response! !

!RsrDecoderTest methodsFor!
testServiceNoInstVars	| decodedService |	decodedService := self decodeService: self serviceNoInstVarsEncoding.	self		assert: decodedService class		equals: RsrServerNoInstVars.	self		assert: decodedService _id		equals: 1! !

!RsrDecoderTest methodsFor!
assertReference: bytesdecodesTo: expected	| actual |	actual := self decodeReference: bytes.	self		assert: actual		equals: expected! !

!RsrDecoderTest methodsFor!
decodeReference: bytes	^(self decoder decodeReference: bytes readStream) resolve: self connection! !

!RsrDecoderTest methodsFor!
verifyControlWord: expectedencoding: bytes	| actual |	actual := self decoder decodeControlWord: bytes readStream.	self		assert: actual		equals: expected! !

!RsrDecoderTest methodsFor!
testReleaseServices	| command encoding |	encoding :=		#[0 0 0 0 0 0 0 3], "ReleaseObjects Command"		#[0 0 0 0 0 0 0 5], "Num OIDS"		#[0 0 0 0 0 0 0 1], "First OID"		#[0 0 0 0 0 0 0 2],		#[0 0 0 0 0 0 0 3],		#[0 0 0 0 0 0 0 4],		#[0 0 0 0 0 0 0 5]. "Last OID"	command := self decoder decodeCommand: encoding readStream.	self		assert: command sids		equals: #(1 2 3 4 5)! !

!RsrDecoderTest methodsFor!
testSendMessage	| service encoding command |	service := RsrServerNoInstVars new.	self connection _ensureRegistered: service.	encoding :=		#[0 0 0 0 0 0 0 1], "SendMessage Command"		#[0 0 0 0 0 0 0 1], "Transaction ID"		#[0 0 0 0 0 0 0 1], "One service is part of this message"		self serviceNoInstVarsEncoding,		#[0 0 0 0 0 0 0 1], "Receiver OID"		#[0 0 0 0 0 0 0 0], "Selector Reference"		#[0 0 0 0 0 0 0 1], "Object Type for Symbol"		#[0 0 0 0 0 0 0 8], "Length of UTF-8 bytes"		#[114 101 116 117 114 110 52 50], "#return42"		#[0 0 0 0 0 0 0 0]. "Argument Count"	command := self decoder decodeCommand: encoding readStream.	self		assert: command class		equals: RsrSendMessage.	self		assert: command transaction		equals: 1.	self		assert: (command receiverReference resolve: self connection)		identicalTo: service.	self		assert: (command selectorReference resolve: self connection)		identicalTo: #return42.	self		assert: command argumentReferences		equals: #().	self		assert: command snapshots size		equals: 1! !

!RsrDecoderTest methodsFor!
decodeService: anObjectBytes	^(self decoder decodeServiceSnapshot: anObjectBytes readStream) reifyIn: self connection! !

!RsrReflectedVariableTestServer methodsFor!
setVarsToAndReturn: anObject	^varA := varB := anObject! !

!RsrServiceTest methodsFor!
mirror: aService	^(connectionA serviceFor: #RsrClientNoInstVars) sendReturnArgument: aService! !

!RsrServiceTest methodsFor!
testCreateServiceWithDistinctClientAbstractService	| client |	client := self serviceFactoryA serviceFor: #RsrRemoteAction.	self		assert: client class		equals: RsrRemoteAction clientClass! !

!RsrServiceTest methodsFor!
testVariableReflection	| localService remoteService |	localService := RsrTestService clientClass new		sharedVariable: #shared;		privateVariable: #private;		yourself.	self mirror: localService.	remoteService := connectionB serviceAt: localService _id.	self		assert: localService sharedVariable		identicalTo: remoteService sharedVariable.	self		assert: localService privateVariable		identicalTo: #private.	self		assert: remoteService privateVariable		identicalTo: nil! !

!RsrServiceTest methodsFor!
testEnsureServersAreCachedAndReused	| client service1 service2 |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	service1 := connectionB serviceAt: client _id.	self mirror: client.	service2 := connectionB serviceAt: client _id.	self		assert: service1		identicalTo: service2! !

!RsrServiceTest methodsFor!
testMessagesDispactchedConcurrentlyForMultipleServices	"Ensure messages are dispatched concurrently"	| client1 server1 client2 server2 semaphore expected1 expected2 promise1 promise2 |	client1 := connectionA serviceFor: #RsrRemoteAction.	client2 := connectionA serviceFor: #RsrRemoteAction.	client1 synchronize.	client2 synchronize.	server1 := connectionB serviceAt: client1 _id.	server2 := connectionB serviceAt: client2 _id.	semaphore := Semaphore new.	expected1 := #expected1.	expected2 := #expected2.	server1 action: [semaphore wait. expected1].	server2 action: [semaphore signal. expected2].	promise1 := client1 asyncValue.	promise2 := client2 asyncValue.	self shortWait.	self		assert: promise1 isResolved;		assert: promise2 isResolved.	self		assert: promise1 value		equals: expected1.	self		assert: promise2 value		equals: expected2! !

!RsrServiceTest methodsFor!
testAnalyzeServiceRegisteredWithDifferentConnection	| instance analysis |	instance := RsrRemoteAction clientClass new.	analysis := RsrSnapshotAnalysis		roots: (Array with: instance)		connection: connectionA.	analysis perform.	self assert: instance isMirrored.	analysis := RsrSnapshotAnalysis		roots: (Array with: instance)		connection: connectionB.	self		should: [analysis perform]		raise: RsrAlreadyRegistered! !

!RsrServiceTest methodsFor!
testSendClientWithoutAssociatedServer	| client server reason |	client := self serviceFactoryA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [:x | x].	reason := self expectCatch: (client asyncValue: RsrKnownClient new).	self		assert: reason class		equals: RsrRemoteExceptionServer.	self		assert: reason exceptionClassName		equals: #RsrUnknownClass! !

!RsrServiceTest methodsFor!
testRegisterWith	| instance |	instance := RsrRemoteAction clientClass new.	self deny: instance isMirrored.	instance registerWith: connectionA.	self assert: instance isMirrored.	self		should: [instance registerWith: connectionB]		raise: RsrAlreadyRegistered! !

!RsrServiceTest methodsFor!
testIsMirrored	| instance |	instance := RsrRemoteAction clientClass new.	self deny: instance isMirrored.	self mirror: instance.	self assert: instance isMirrored! !

!RsrServiceTest methodsFor!
testReflectedVariableNames	| client server clientNames serverNames |	client := connectionA serviceFor: #RsrTestService.	client synchronize.	server := connectionB serviceAt: client _id.	clientNames := RsrServiceSnapshot reflectedVariablesFor: client.	serverNames := RsrServiceSnapshot reflectedVariablesFor: server.	self		assert: clientNames		equals: serverNames.	self		assert: clientNames size		equals: 1.	self		assert: (clientNames at: 1) asSymbol		equals: #sharedVariable.	client := connectionA serviceFor: #RsrReflectedVariableTestServiceB.	client synchronize.	server := connectionB serviceAt: client _id.	clientNames := RsrServiceSnapshot reflectedVariablesFor: client.	serverNames := RsrServiceSnapshot reflectedVariablesFor: server.	self		assert: clientNames		equals: serverNames.	self		assert: clientNames size		equals: 2.	self		assert: (clientNames at: 1) asSymbol		equals: #varA.	self		assert: (clientNames at: 2) asSymbol		equals: #varB! !

!RsrServiceTest methodsFor!
testHasRemoteSelf	| service |	service := RsrTestService clientClass new.	self mirror: service.	self deny: nil == service remoteSelf! !

!RsrServiceTest methodsFor!
testInitialization	| instance |	instance := RsrRemoteAction clientClass new.	self		assert: instance isMirrored		equals: false.	self		assert: instance _id		equals: nil.	self		assert: instance _connection		equals: nil! !

!RsrServiceTest methodsFor!
testPrePostUpdate	| client server | 	client := connectionA serviceFor: #RsrInstrumentedServer.	self		assert: client preUpdateCount		equals: 0.	self		assert: client postUpdateCount		equals: 0.	client return: nil.	server := connectionB serviceAt: client _id.	self		assert: client preUpdateCount		equals: 1.	self		assert: client postUpdateCount		equals: 1.	self		assert: server preUpdateCount		equals: 1.	self		assert: server postUpdateCount		equals: 1.	client return: nil.	self		assert: client preUpdateCount		equals: 2.	self		assert: client postUpdateCount		equals: 2.	self		assert: server preUpdateCount		equals: 2.	self		assert: server postUpdateCount		equals: 2.! !

!RsrServiceTest methodsFor!
testMessageDispatchedConcurrentlyToSingleService	"Ensure all messages are sent concurrently (including those sent to a single service)"	| client server counter promise1 promise2 |	client := connectionA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	counter := 0.	server action: [counter := counter + 1. self shortWait. counter].	promise1 := client asyncValue.	promise2 := client asyncValue.	self		assert: promise1 wait		equals: 2. "The #shortWait will cause the second counter increment before the counter is returned."	self		assert: promise2 wait		equals: 2! !

!RsrServiceTest methodsFor!
testCreateServiceWithSameClientAbstractService	| client server |	client := self serviceFactoryA serviceFor: #RsrSameTemplateAndClientService.	self		assert: client class		equals: RsrSameTemplateAndClientService.	client synchronize.	server := connectionB serviceAt: client _id.	self		assert: server replicated1		equals: nil.	self		assert: server replicated2		equals: nil.	client		replicated1: 1;		replicated2: 2;		synchronize.	self		assert: server replicated1		equals: 1.	self		assert: server replicated2		equals: 2.	server		replicated1: 10;		replicated2: 20;		private1: 3;		synchronize.	self		assert: client replicated1		equals: 10.	self		assert: client replicated2		equals: 20! !

!RsrServiceTest methodsFor!
testReturnServerWithoutAssociatedClient	| client server reason |	client := self serviceFactoryA serviceFor: #RsrRemoteAction.	client synchronize.	server := connectionB serviceAt: client _id.	server action: [RsrKnownServer new].	reason := self expectCatch: client asyncValue.	self		assert: reason class		equals: RsrDecodingRaisedException! !

!RsrInMemoryServiceTest methodsFor!
setUp	super setUp.	self initializeInMemoryConnections! !

!RsrServerTestService methodsFor!
privateVariable	^privateVariable! !

!RsrServerTestService methodsFor!
privateVariable: anObject	privateVariable := anObject! !

!RsrNullChannel methodsFor!
close	"NOP"! !

!RsrNullChannel methodsFor!
isOpen	^true! !

!RsrNullChannel methodsFor!
open	"NOP"! !

!RsrNullChannel methodsFor!
send: aCommand	lastCommand := aCommand! !

!RsrNullChannel methodsFor!
received: aCommand	lastCommand := aCommand! !

!RsrNullChannel methodsFor!
lastCommand	^lastCommand! !

!RsrRemoteActionClient methodsFor!
asyncValue	^remoteSelf value! !

!RsrRemoteActionClient methodsFor!
value	^self asyncValue wait! !

!RsrRemoteActionClient methodsFor!
asyncValue: anObject	^remoteSelf value: anObject! !

!RsrRemoteActionClient methodsFor!
value: anObject	^(self asyncValue: anObject) wait! !

!RsrNumericSpigotTest methodsFor!
testNext	| spigot |	spigot := self spigotClass naturals.	self		assert: (Array with: 1 with: 2 with: 3)		equals: (spigot next: 3)! !

!RsrNumericSpigotTest methodsFor!
spigotClass	^RsrNumericSpigot! !

!RsrNumericSpigotTest methodsFor!
testNaturals	| spigot |	spigot := self spigotClass naturals.	self		assert: spigot next		equals: 1.	self		assert: spigot next		equals: 2! !

!RsrNumericSpigotTest methodsFor!
testDefault	| spigot |	spigot := self spigotClass new.	self		assert: spigot next		equals: 0.	self		assert: spigot next		equals: 1! !

!RsrNumericSpigotTest methodsFor!
testNegativeStep	| spigot |	spigot := self spigotClass		start: 0		step: -1.	self		assert: spigot next		equals: 0.	self		assert: spigot next		equals: -1.	self		assert: spigot next		equals: -2! !

!RsrNumericSpigotTest methodsFor!
testFloat	| spigot |	spigot := self spigotClass		start: 0		step: 0.5.	self		assert: spigot next		equals: 0.	self		assert: spigot next		equals: 0.5.	self		assert: spigot next		equals: 1.0.! !

!RsrCodecTest methodsFor!
serviceNoInstVarsEncoding	^#[0 0 0 0 0 0 0 0], "type"	#[0 0 0 0 0 0 0 1], "rootService's OID = 1"	#[0 0 0 0 0 0 0 0], "Inst Var Count"	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"	#[0 0 0 0 0 0 0 19], "Length of UTF-8 encoded bytes"	#[82 115 114 83 101 114 118 101 114 78 111 73 110 115 116 86 97 114 115] "#RsrServerNoInstVars"! !

!RsrCodecTest methodsFor!
testDateTime	| dt encoding |	dt := RsrDateAndTime posixEpoch.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 14],		#[0 0 0 0 0 0 0 0].	self		verifyImmediate: dt		encoding: encoding.	dt := RsrDateAndTime fromMicroseconds: 1562692562657612. "2019-07-09T10:16:02.657612-07:00"	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 14],		#[0 5 141 66 183 23 33 76].	self		verifyImmediate: dt		encoding: encoding.	dt := RsrDateAndTime fromMicroseconds: -1000000. "1969-12-31T23:59:59-00:00"	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 14],		#[255 255 255 255 255 240 189 192].	self		verifyImmediate: dt		encoding: encoding.	dt := RsrDateAndTime fromMicroseconds: -491277642567488. "1954-06-07T14:59:17.432512-07:00"	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 14],		#[255 254 65 47 130 160 240 192].	self		verifyImmediate: dt		encoding: encoding! !

!RsrCodecTest methodsFor!
decoder	^RsrDecoder new! !

!RsrCodecTest methodsFor!
verifyControlWord: anIntegerencoding: bytes	self subclassResponsibility! !

!RsrCodecTest methodsFor!
setUp	super setUp.	connection := RsrConnection		channel: RsrNullChannel new		transactionSpigot: RsrThreadSafeNumericSpigot naturals		oidSpigot: RsrThreadSafeNumericSpigot naturals.	connection open! !

!RsrCodecTest methodsFor!
genericSymbol	^#genericSymbol! !

!RsrCodecTest methodsFor!
testCharacter	| encoding |	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 5],		#[0 0 0 0 0 0 0 0].	self		verifyImmediate: (Character codePoint: 0)		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 5],		#[0 0 0 0 0 0 0 65].	self		verifyImmediate: (Character codePoint: 65)		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 5],		#[0 0 0 0 0 0 0 65].	self		verifyImmediate: $A		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 5],		#[0 0 0 0 0 0 1 212].	self		verifyImmediate: (Character codePoint: 16r01D4)		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 5],		#[0 0 0 0 0 0 131 52].	self		verifyImmediate: (Character codePoint: 16r8334)		encoding: encoding.! !

!RsrCodecTest methodsFor!
testArray	| array encoding |	array := Array		with: self genericSymbol		with: 5		with: nil.	encoding :=		#[0 0 0 0 0 0 0 0], "Immediate Object OID"		#[0 0 0 0 0 0 0 9], "Array type"		#[0 0 0 0 0 0 0 3], "3 elements"		self genericSymbolEncoding, "Generic Symbol"		#[0 0 0 0 0 0 0 0], "Immediate OID"		#[0 0 0 0 0 0 0 3], "Positive Integer"		#[0 0 0 0 0 0 0 1], "num bytes"		#[5], "5"		#[0 0 0 0 0 0 0 0], "Immediate OID"		#[0 0 0 0 0 0 0 6].	self		verifyImmediate: array		encoding: encoding.	array := Array new.	encoding :=		#[0 0 0 0 0 0 0 0], "Immediate OID"		#[0 0 0 0 0 0 0 9], "Array type"		#[0 0 0 0 0 0 0 0].	self		verifyImmediate: array		encoding: encoding! !

!RsrCodecTest methodsFor!
verifyImmediate: anImmediateObjectencoding: encoding	self subclassResponsibility! !

!RsrCodecTest methodsFor!
tearDown	connection close.	connection := nil.	super tearDown! !

!RsrCodecTest methodsFor!
testByteArray	| bytes encoding |	bytes := #[].	encoding :=		#[0 0 0 0 0 0 0 0], "Immediate Object OID"		#[0 0 0 0 0 0 0 10], "ByteArray type"		#[0 0 0 0 0 0 0 0], "size"		bytes.	self		verifyImmediate: bytes		encoding: encoding.	bytes := #[1 2 3 4 5].	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 10],		#[0 0 0 0 0 0 0 5],		bytes.	self		verifyImmediate: bytes		encoding: encoding! !

!RsrCodecTest methodsFor!
rootServiceEncoding	^#[0 0 0 0 0 0 0 0], "type"	#[0 0 0 0 0 0 0 1], "rootService's OID = 1"	#[0 0 0 0 0 0 0 1], "Inst Var Count"	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"	#[0 0 0 0 0 0 0 25], "Length of UTF-8 encoded bytes"	#[82 115 114 83 101 114 118 101 114 82 101 102 101 114 101 110 99 101 83 101 114 118 105 99 101],	#[0 0 0 0 0 0 0 2]. "#RsrServerReferenceService"! !

!RsrCodecTest methodsFor!
referencedServiceEncoding	^#[0 0 0 0 0 0 0 0], "type"	#[0 0 0 0 0 0 0 2], "referencedService's OID = 2"	#[0 0 0 0 0 0 0 0], "Inst Var Count"	#[0 0 0 0 0 0 0 0], "Start of service name. OID = 0"	#[0 0 0 0 0 0 0 1], "Service name = 1 -> Symbol"	#[0 0 0 0 0 0 0 19], "Length of UTF-8 encoded bytes"	#[82 115 114 83 101 114 118 101 114 78 111 73 110 115 116 86 97 114 115]. "#RsrServerNoInstVars"! !

!RsrCodecTest methodsFor!
testString	| encoding |	encoding :=		#[0 0 0 0 0 0 0 0], "OID = 0"		#[0 0 0 0 0 0 0 2], "Immediate Type = 2"		#[0 0 0 0 0 0 0 0], "length"		#[].	 "empty string"	self		verifyImmediate: ''		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0], "OID = 0"		#[0 0 0 0 0 0 0 2], "Immediate Type = 2"		#[0 0 0 0 0 0 0 13], "length"		#[103 101 110 101 114 105 99 83 116 114 105 110 103].	 "genericString"	self		verifyImmediate: 'genericString'		encoding: encoding! !

!RsrCodecTest methodsFor!
testBoolean	| encoding |	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 7].	self		verifyImmediate: true		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 8].	self		verifyImmediate: false		encoding: encoding.! !

!RsrCodecTest methodsFor!
encoder	^RsrEncoder new! !

!RsrCodecTest methodsFor!
encodeReferenceOf: anObject	| reference |	reference := RsrReference from: anObject.	^ByteArray streamContents: [:stream | self encoder encodeReference: reference onto: stream]! !

!RsrCodecTest methodsFor!
testDictionary	| dictionary encoding result |	dictionary := Dictionary new.	encoding :=		#[0 0 0 0 0 0 0 0], "Immediate Object OID"		#[0 0 0 0 0 0 0 13], "Dictionary type"		#[0 0 0 0 0 0 0 0]. "0 associations"	self		verifyImmediate: dictionary		encoding: encoding.	dictionary := Dictionary new		at: 1 put: self genericSymbol;		at: false put: true;		yourself.	encoding := self encodeReferenceOf: dictionary.	result := (self decoder decodeReference: encoding readStream) resolve: self connection.	self		assert: result		equals: dictionary.	self		deny: result		identicalTo: dictionary.	"self hack: 'Order is not guaranteed in a dictionary'.	encoding :=		#[0 0 0 0 0 0 0 0], ""Immediate OID""		#[0 0 0 0 0 0 0 13], ""Dictionary Type""		#[0 0 0 0 0 0 0 2], ""Two assocs""		#[0 0 0 0 0 0 0 0], ""nil""		#[0 0 0 0 0 0 0 6],		#[0 0 0 0 0 0 0 0], ""true""		#[0 0 0 0 0 0 0 7],		#[0 0 0 0 0 0 0 0], ""Integer 1""		#[0 0 0 0 0 0 0 3],		#[0 0 0 0 0 0 0 1],		#[1],		self genericSymbolEncoding.	self		verifyImmediate: dictionary		encoding: encoding"! !

!RsrCodecTest methodsFor!
testSet	| set encoding result |	set := Set new.	encoding :=		#[0 0 0 0 0 0 0 0], "OID"		#[0 0 0 0 0 0 0 11], "Set"		#[0 0 0 0 0 0 0 0]. "0 elements"	self		verifyImmediate: set		encoding: encoding.	set := Set		with: true		with: nil.	encoding := self encodeReferenceOf: set.	result := (self decoder decodeReference: encoding readStream) resolve: self connection.	self		assert: result		equals: set.	self		deny: result		identicalTo: set.	"self hack: 'Hashed collections do not have an ordering'.	encoding :=		#[0 0 0 0 0 0 0 0], ""OID""		#[0 0 0 0 0 0 0 11], ""Set""		#[0 0 0 0 0 0 0 2], ""2 elements""		#[0 0 0 0 0 0 0 0], ""true""		#[0 0 0 0 0 0 0 7],		#[0 0 0 0 0 0 0 0], ""nil""		#[0 0 0 0 0 0 0 6].	self		verifyImmediate: set		encoding: encoding"! !

!RsrCodecTest methodsFor!
genericSymbolEncoding	^#[0 0 0 0 0 0 0 0], "OID = 0"	#[0 0 0 0 0 0 0 1], "Immediate Type = 1"	#[0 0 0 0 0 0 0 13], "Length of UTF-8 data"	#[103 101 110 101 114 105 99 83 121 109 98 111 108]	"#genericSymbol"! !

!RsrCodecTest methodsFor!
testDouble	| encoding |	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 15],		#[128 0 0 0 0 0 0 0].	self		verifyImmediate: -0.0		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 15],		#[0 0 0 0 0 0 0 0].	self		verifyImmediate: 0.0		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 15],		#[191 240 0 0 0 0 0 0].	self		verifyImmediate: -1.0		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 15],		#[63 240 0 0 0 0 0 0].	self		verifyImmediate: 1.0		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 15],		#[63 185 153 153 153 153 153 154].	self		verifyImmediate: 0.1		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 15],		#[191 185 153 153 153 153 153 154].	self		verifyImmediate: -0.1		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 15],		#[127 240 0 0 0 0 0 0].	self		verifyImmediate: RsrDoubleReference infinity		encoding: encoding! !

!RsrCodecTest methodsFor!
testOrderedCollection	| oc encoding |	oc := OrderedCollection new.	encoding :=		#[0 0 0 0 0 0 0 0], "Immediate OID"		#[0 0 0 0 0 0 0 12], "OrderedCollection type"		#[0 0 0 0 0 0 0 0].	self		verifyImmediate: oc		encoding: encoding.	oc := OrderedCollection		with: self genericSymbol		with: 5		with: nil.	encoding :=		#[0 0 0 0 0 0 0 0], "Immediate Object OID"		#[0 0 0 0 0 0 0 12], "OrderedCollection type"		#[0 0 0 0 0 0 0 3], "3 elements"		self genericSymbolEncoding, "Generic Symbol"		#[0 0 0 0 0 0 0 0], "Immediate OID"		#[0 0 0 0 0 0 0 3], "Positive Integer"		#[0 0 0 0 0 0 0 1], "num bytes"		#[5], "5"		#[0 0 0 0 0 0 0 0], "Immediate OID"		#[0 0 0 0 0 0 0 6].	self		verifyImmediate: oc		encoding: encoding! !

!RsrCodecTest methodsFor!
testInteger	| encoding |	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 3],		#[0 0 0 0 0 0 0 1],		#[0].	self		verifyImmediate: 0		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 3],		#[0 0 0 0 0 0 0 1],		#[4].	self		verifyImmediate: 4		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 3],		#[0 0 0 0 0 0 0 5],		#[1 15 248 235 121].	self		verifyImmediate: 4562938745		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 4],		#[0 0 0 0 0 0 0 5],		#[1 15 248 235 121].	self		verifyImmediate: -4562938745		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 3],		#[0 0 0 0 0 0 0 13],		#[10 101 181 177 179 46 128 92 96 64 190 76 107].	self		verifyImmediate: 823759265872134912569713249387		encoding: encoding.	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 4],		#[0 0 0 0 0 0 0 13],		#[10 101 181 177 179 46 128 92 96 64 190 76 107].	self		verifyImmediate: -823759265872134912569713249387		encoding: encoding.! !

!RsrCodecTest methodsFor!
connection	^connection! !

!RsrCodecTest methodsFor!
testSymbol	self		verifyImmediate: self genericSymbol		encoding: self genericSymbolEncoding! !

!RsrCodecTest methodsFor!
testNil	| encoding |	encoding :=		#[0 0 0 0 0 0 0 0],		#[0 0 0 0 0 0 0 6].	self		verifyImmediate: nil		encoding: encoding! !

!RsrCodecTest methodsFor!
testControlWord		self		verifyControlWord: 0		encoding: #[0 0 0 0 0 0 0 0].	self		verifyControlWord: 1		encoding: #[0 0 0 0 0 0 0 1].	self		verifyControlWord: -1		encoding: #[255 255 255 255 255 255 255 255].	self		verifyControlWord: (2 raisedTo: 63) - 1		encoding: #[127 255 255 255 255 255 255 255].	self		verifyControlWord: (2 raisedTo: 63) negated		encoding: #[128 0 0 0 0 0 0 0]! !

!RsrClientTestService methodsFor!
privateVariable	^privateVariable! !

!RsrClientTestService methodsFor!
privateVariable: anObject	privateVariable := anObject! !

!RsrSocketLifetimeTest methodsFor!
setUp	super setUp.	self initializeSocketConnections! !

!RsrReflectedVariableTestClient methodsFor!
setVarsToAndReturn: anObject	^(remoteSelf setVarsToAndReturn: anObject) wait! !

!RsrLifetimeTest methodsFor!
testEnsurePushedClientServerLifetime	"This test is designed to ensure that a Server created via a 'pushed' Client	exhibit the correct lifetime properties."	| client sid server actual |	client := connectionA serviceFor: #RsrClientNoInstVars.	client synchronize.	sid := client _id.	self maximumReclamation. "Ensure the Server is strongly referenced in connectionB."	server := connectionB		serviceAt: sid		ifAbsent: [self assert: false].	client := nil.	self maximumReclamation. "Ensure the Client is garbage collected."	(Delay forSeconds: 1) wait. "Ensure the ReleaseServices Command is propogated and processed by connectionB."	self maximumReclamation. "Ensure the Server is still referenced even after a garbage collect."	actual := connectionA		serviceAt: sid		ifAbsent: [nil].	self		assert: actual		equals: nil.	actual := connectionB		serviceAt: sid		ifAbsent: [self assert: false].	self		assert: actual		identicalTo: server.	actual := nil. "Ensure we do not retain an extra reference to the Server."	server := nil.	self maximumReclamation. "Ensure Server is removed."	actual := connectionB		serviceAt: sid		ifAbsent: [nil].	self		assert: actual		equals: nil! !

!RsrLifetimeTest methodsFor!
testEnsureReturnRegisteredServerLifetime	"Return a newly created Server (that is registered.) It should persist in the framework until 	both the associated Client is garbage collected and local references are dropped.	If you change this method -- change #testEnsureReturnedServerLifetime as well."	| client sid server result |	client := self evaluateAsRemoteAction: [RsrServerNoInstVars new registerWith: connectionB].	sid := client _id.	self maximumReclamation. "Ensure the Server instance is referenced."	server := connectionB		serviceAt: sid		ifAbsent: [self assert: false].	client := nil.	self maximumReclamation.	(Delay forSeconds: 1) wait. "Release Client."	self maximumReclamation.	"Ensure Client is released."	result := connectionA		serviceAt: sid		ifAbsent: [nil].	self		assert: result		equals: nil.	"Ensure Server is still registered."	result := connectionB		serviceAt: sid		ifAbsent: [self assert: false].	self		assert: result		equals: server.	result := server := nil.	self maximumReclamation.	result := connectionB		serviceAt: sid		ifAbsent: [nil].	self		assert: result		equals: nil! !

!RsrLifetimeTest methodsFor!
testEnsureReturnedServerLifetime	"Return a newly created Server (that is not registered.) It should persist in the framework until 	both the associated Client is garbage collected and local references are dropped.	If you change this method -- change #testEnsureReturnRegisteredServerLifetime as well."	| client sid server result |	client := self evaluateAsRemoteAction: [RsrServerNoInstVars new].	sid := client _id.	self maximumReclamation. "Ensure the Server instance is referenced."	server := connectionB		serviceAt: sid		ifAbsent: [self assert: false].	client := nil.	self maximumReclamation.	(Delay forSeconds: 1) wait. "Release Client."	self maximumReclamation.	"Ensure Client is released."	result := connectionA		serviceAt: sid		ifAbsent: [nil].	self		assert: result		equals: nil.	"Ensure Server is still registered."	result := connectionB		serviceAt: sid		ifAbsent: [self assert: false].	self		assert: result		equals: server.	result := server := nil.	self maximumReclamation.	result := connectionB		serviceAt: sid		ifAbsent: [nil].	self		assert: result		equals: nil! !

!RsrLifetimeTest methodsFor!
evaluateAsRemoteAction: aBlock	"Evaluate the block and return the result through RSR."	| client server |	client := connectionA serviceFor: #RsrRemoteActionClient.	client synchronize.	server := connectionB serviceAt: client _id.	server action: aBlock.	^client value! !