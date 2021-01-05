| package |
package := Package name: 'RemoteServiceReplication-Platform-Test'.
package paxVersion: 1; basicComment: ''.

package classNames
	add: #RsrMockServer;
	add: #RsrGarbageCollectorTestCase;
	add: #RsrTestingProcessModel;
	add: #RsrSocketTestCase;
	add: #RsrMockService;
	add: #RsrTestCase;
	add: #RsrTestingProcessModelTestCase;
	add: #RsrMockClient;
	add: #RsrClassResolverTestCase;
	add: #RsrSocketPair;
	yourself.

package methodNames
	yourself.

package setPrerequisites: #('RemoteServiceReplication').

package!

RsrObject
	subclass: #RsrSocketPair
	instanceVariableNames: 'firstSocket secondSocket'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrSocketPair categoriesForClass!RemoteServiceReplication-Platform-Test! !

RsrProcessModel
	subclass: #RsrTestingProcessModel
	instanceVariableNames: 'forkedException'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrTestingProcessModel categoriesForClass!RemoteServiceReplication-Platform-Test! !

RsrService
	subclass: #RsrMockService
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrMockService categoriesForClass!RemoteServiceReplication-Platform-Test! !

TestCase
	subclass: #RsrTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrTestCase comment: 'An abstract test class which contains utility methods'!
!RsrTestCase categoriesForClass!RemoteServiceReplication-Platform-Test! !

RsrTestCase
	subclass: #RsrClassResolverTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrClassResolverTestCase comment: 'This class contains tests'!
!RsrClassResolverTestCase categoriesForClass!RemoteServiceReplication-Platform-Test! !

RsrTestCase
	subclass: #RsrGarbageCollectorTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrGarbageCollectorTestCase comment: 'This class contains tests'!
!RsrGarbageCollectorTestCase categoriesForClass!RemoteServiceReplication-Platform-Test! !

RsrMockService
	subclass: #RsrMockClient
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrMockClient categoriesForClass!RemoteServiceReplication-Platform-Test! !

RsrMockService
	subclass: #RsrMockServer
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
!RsrMockServer categoriesForClass!RemoteServiceReplication-Platform-Test! !

RsrTestCase
	subclass: #RsrSocketTestCase
	instanceVariableNames: 'sockets'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrSocketTestCase comment: 'This class contains tests'!
!RsrSocketTestCase categoriesForClass!RemoteServiceReplication-Platform-Test! !

RsrTestCase
	subclass: #RsrTestingProcessModelTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
RsrTestingProcessModelTestCase comment: 'This class contains tests'!
!RsrTestingProcessModelTestCase categoriesForClass!RemoteServiceReplication-Platform-Test! !

!RsrMockService class methodsFor!
clientClassName	^#RsrMockClient! !

!RsrMockService class methodsFor!
serverClassName	^#RsrMockServer! !

!RsrSocketTestCase class methodsFor!
defaultTimeLimit	^20 seconds! !

!RsrSocketPair class methodsFor!
firstSocket: firstSocketsecondSocket: secondSocket	^super new		firstSocket: firstSocket;		secondSocket: secondSocket;		yourself! !

!RsrSocketPair class methodsFor!
new	| localhost port listener firstSocket secondSocket |	localhost := '127.0.0.1'.	port := 8765.	listener := self socketClass new.	secondSocket := self socketClass new.	listener		bindAddress: localhost		port: port.	listener listen: 1.	secondSocket		connectToHost: localhost		port: port.	firstSocket := listener accept.	listener close.	(firstSocket isConnected and: [secondSocket isConnected])		ifFalse: [self error: 'Failed to create socket pair'].	^self		firstSocket: firstSocket		secondSocket: secondSocket! !

!RsrSocketPair class methodsFor!
socketClass	^RsrSocket! !

!RsrSocketPair class methodsFor!
listenPort	^64455! !

!RsrTestCase class methodsFor!
isAbstract	^self == RsrTestCase! !

!RsrTestCase class methodsFor!
defaultTimeLimit	"This is needed for Pharo"	^5 seconds! !

!RsrSocketTestCase methodsFor!
deferClose: aSocket	sockets add: aSocket.	^aSocket! !

!RsrSocketTestCase methodsFor!
testCloseDuringAccept	| listener |	listener := self newSocket.	listener		bindAddress: '127.0.0.1'		port: 45300.	listener listen: 1.	RsrProcessModel		fork: [(Delay forSeconds: 1) wait. listener close]		named: 'Pending Socket Close'.	self		should: [listener accept]		raise: RsrSocketError! !

!RsrSocketTestCase methodsFor!
tearDown	sockets do: [:each | each close].	super tearDown! !

!RsrSocketTestCase methodsFor!
testAcceptOnAlreadyClosedSocket	| listener |	listener := self newSocket.	listener		bindAddress: '127.0.0.1'		port: 45300.	listener listen: 1.	listener close.	self		should: [listener accept]		raise: RsrSocketError! !

!RsrSocketTestCase methodsFor!
testConnectBoundSocket	| listener |	listener := self newSocket.	listener		bindAddress: '127.0.0.1'		port: 45300.	self		should:			[listener				connectToHost: 'gemtalksystems.com'				port: 80]		raise: RsrSocketError! !

!RsrSocketTestCase methodsFor!
newSocket	^self deferClose: RsrSocket new! !

!RsrSocketTestCase methodsFor!
testListenWithoutBind	| listener |	listener := self newSocket.	listener listen: 1.	self assert: (listener port > 1023)! !

!RsrSocketTestCase methodsFor!
testPort	| socket |	socket := self newSocket.	self		assert: socket port		equals: 0! !

!RsrSocketTestCase methodsFor!
testInvalidBind	| listener |	listener := self newSocket.	self "This IP is publicly routable and owned by Cloudflare. Should be invalid on all testing hosts."		should: [listener bindAddress: '1.1.1.1' port: 45300]		raise: RsrInvalidBind.	listener := self newSocket.	self		should: [listener bindAddress: '127.0.0.1' port: 98765432]		raise: RsrInvalidBind! !

!RsrSocketTestCase methodsFor!
testReadAfterPeerClose	| peerA peerB readBuffer count numRead |	self		createPair:			[:a :b |			peerA := a.			peerB := b].	count := 1024.	readBuffer := ByteArray new: count.	peerA close.	self		should:			[numRead := peerB				read: count				into: readBuffer				startingAt: 1]		raise: RsrSocketClosed! !

!RsrSocketTestCase methodsFor!
testUnconnectedReadWrite	| socket count bytes |	socket := self newSocket.	count := 1024.	bytes := ByteArray new: 1024.	self		should:			[socket				read: count				into: bytes				startingAt: 1]		raise: RsrSocketClosed.	self		should:			[socket				write: count				from: bytes				startingAt: 1]		raise: RsrSocketClosed! !

!RsrSocketTestCase methodsFor!
testAcceptConnects	| listener client server |	listener := self newSocket.	listener		bindAddress: '127.0.0.1'		port: 45300.	self		assert: listener port		equals: 45300.	listener listen: 1.	client := self newSocket.	self		deny: client isConnected;		deny: listener isConnected.	client connectToHost: '127.0.0.1' port: 45300.	server := self deferClose: listener accept.	self		assert: server port		equals: 45300.	self assert: (client port > 1023).	self		assert: client isConnected;		assert: server isConnected;		deny: listener isConnected! !

!RsrSocketTestCase methodsFor!
testFailedConnects	| socket |	socket := self newSocket.	self deny: socket isConnected.	self		should:			[socket				connectToHost: 'do.no.create.used.for.testing.gemtalksystems.com'				port: 80]		raise: RsrConnectFailed.	socket := self newSocket.	self		should:			[socket				connectToHost: 'gemtalksystems.com'				port: 70000]		raise: RsrConnectFailed.	socket := self newSocket.	self		should:			[socket				connectToHost: '127.0.0.1'				port: 79]		raise: RsrConnectFailed.	socket close! !

!RsrSocketTestCase methodsFor!
createPair: aBlock	| address port listener peerA peerB semaphore |	address := '127.0.0.1'.	port := 45301.	listener := self newSocket.	listener		bindAddress: address		port: port.	listener listen: 1.	peerB := self newSocket.	semaphore := Semaphore new.	RsrProcessModel		fork: [[peerA := self deferClose: listener accept] ensure: [semaphore signal]]		named: 'Pending Socket Accept'.	RsrProcessModel		fork: [[peerB connectToHost: address port: port] ensure: [semaphore signal]]		named: 'Pending Socket Connect'.	semaphore wait; wait.	listener close.	((peerA notNil and: [peerA isConnected]) and: [peerB isConnected])		ifTrue: [aBlock value: peerA value: peerB]		ifFalse: [self error: 'Unable to create Socket Pair']! !

!RsrSocketTestCase methodsFor!
testReadWrite	| peerA peerB writeBuffer readBuffer count numWritten numRead |	self		createPair:			[:a :b |			peerA := a.			peerB := b].	count := 1024.	writeBuffer := ByteArray new: count.	1		to: count		do: [:i | writeBuffer at: i put: (i \\ 256)].	readBuffer := ByteArray withAll: writeBuffer.	numWritten := peerA		write: count		from: writeBuffer		startingAt: 1.	self		assert: numWritten		equals: count.	numRead := peerB		read: count		into: readBuffer		startingAt: 1.	self		assert: numRead		equals: count.	self		assert: readBuffer		equals: writeBuffer! !

!RsrSocketTestCase methodsFor!
testPartialRead	| peerA peerB writeBuffer readBuffer count numRead |	self		createPair:			[:a :b |			peerA := a.			peerB := b].	count := 1024.	writeBuffer := ByteArray new: count.	1		to: count		do: [:i | writeBuffer at: i put: (i \\ 256)].	readBuffer := ByteArray withAll: writeBuffer.	peerA		write: count - 1		from: writeBuffer		startingAt: 1.	numRead := peerB		read: count		into: readBuffer		startingAt: 1.	self		assert: numRead		equals: count - 1.	self		assert: readBuffer		equals: writeBuffer! !

!RsrSocketTestCase methodsFor!
testSuccessfulConnect	| socket |	socket := self newSocket.	self deny: socket isConnected.	socket		connectToHost: 'gemtalksystems.com'		port: 80.	self assert: socket isConnected.	socket close.	self deny: socket isConnected! !

!RsrSocketTestCase methodsFor!
setUp	super setUp.	sockets := OrderedCollection new! !

!RsrTestingProcessModel methodsFor!
protect: aBlock	^[aBlock on: Error do: [:ex | forkedException := ex copy. ex return]]! !

!RsrTestingProcessModel methodsFor!
fork: aBlockat: aPrioritynamed: aString	^super		fork: (self protect: aBlock)		at: aPriority		named: aString! !

!RsrTestingProcessModel methodsFor!
fork: aBlocknamed: aString	^super		fork: (self protect: aBlock)		named: aString! !

!RsrTestingProcessModel methodsFor!
forkedException	^forkedException! !

!RsrTestingProcessModelTestCase methodsFor!
testCurrentStackDump	| stack |	stack := RsrProcessModel currentStackDump.	self		assert: stack isString;		assert: stack size > 0! !

!RsrTestingProcessModelTestCase methodsFor!
exceptionCase	| sema |	sema := Semaphore new.	RsrProcessModel fork: [[Error signal] ensure: [sema signal]] ensure: 'Ensure w/ signal'.	sema wait! !

!RsrTestingProcessModelTestCase methodsFor!
testNoException	| testCase |	testCase := self class selector: #noExceptionCase.	self		shouldnt: [testCase runCase]		raise: Exception! !

!RsrTestingProcessModelTestCase methodsFor!
noExceptionCase	| sema |	sema := Semaphore new.	RsrProcessModel fork: [sema signal] named: 'Signal Semaphore'.	sema wait! !

!RsrTestingProcessModelTestCase methodsFor!
testException	| testCase |	testCase := self class selector: #exceptionCase.	self		should: [testCase runCase]		raise: Exception! !

!RsrSocketPair methodsFor!
secondSocket: anObject	secondSocket := anObject! !

!RsrSocketPair methodsFor!
firstStream	^self socketStreamClass on: firstSocket! !

!RsrSocketPair methodsFor!
close	firstSocket close.	secondSocket close! !

!RsrSocketPair methodsFor!
firstSocket	^firstSocket! !

!RsrSocketPair methodsFor!
firstSocket: anObject	firstSocket := anObject! !

!RsrSocketPair methodsFor!
secondStream	^self socketStreamClass on: secondSocket! !

!RsrSocketPair methodsFor!
socketStreamClass	^(RsrClassResolver classNamed: #RsrSocketStream)! !

!RsrSocketPair methodsFor!
secondSocket	^secondSocket! !

!RsrClassResolverTestCase methodsFor!
testSuccessfulResolution	| actual |	actual := RsrClassResolver classNamed: #Object.	self		assert: actual		identicalTo: Object.	actual := RsrClassResolver		classNamed: #Object		ifAbsent: [self assert: false].	self		assert: actual		identicalTo: Object! !

!RsrClassResolverTestCase methodsFor!
testFailedResolution	| actual marker |	self		should: [RsrClassResolver classNamed: #Xlerb]		raise: RsrUnknownClass.	marker := Object new.	actual := RsrClassResolver		classNamed: #Xlerb		ifAbsent: [marker].	self		assert: actual		identicalTo: marker! !

!RsrClassResolverTestCase methodsFor!
assert: aClassNameresolvesTo: expectedClass	| actualClass |	actualClass := RsrClassResolver classNamed: aClassName.	self		assert: actualClass		identicalTo: expectedClass! !

!RsrMockService methodsFor!
initialize	super initialize.	_id := 1! !

!RsrMockService methodsFor!
isServer	^self class == RsrMockServer! !

!RsrMockService methodsFor!
isClient	^self class == RsrMockClient! !

!RsrMockService methodsFor!
service	^self! !

!RsrTestCase methodsFor!
runCase	| pm |	pm := RsrTestingProcessModel new.	RsrProcessModel current: pm.	[super runCase]		ensure:			[RsrProcessModel resetCurrent].	pm forkedException ifNotNil: [:ex | ex signal]! !

!RsrTestCase methodsFor!
hack: aString	"Placeholder for things that need to be fixed"! !

!RsrTestCase methodsFor!
assert: anObjectidenticalTo: bObject	self assert: anObject == bObject! !

!RsrTestCase methodsFor!
shortWait	(Delay forMilliseconds: 100) wait! !

!RsrTestCase methodsFor!
deny: anObjectidenticalTo: bObject	self assert: anObject ~~ bObject! !

!RsrTestCase methodsFor!
assumption: aString	"This method serves as a marker for assumptions made in the tests.	Perhaps some of the senders can be removed in the future."! !

!RsrTestCase methodsFor!
maximumReclamation	self assert: RsrGarbageCollector maximumReclamation! !

!RsrGarbageCollectorTestCase methodsFor!
testMaximumReclamation	self assert: RsrGarbageCollector maximumReclamation! !