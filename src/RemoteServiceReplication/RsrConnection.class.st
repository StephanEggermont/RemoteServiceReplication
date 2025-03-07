"
Connection is the central mediator for RSR. When using the framework, an associated application will hold onto Connection. When terminating or otherwise done with RSR, it will close the Connection to signal this.

Connection offers a limited public interface. The private methods are subject to change and shouldn't be used by any application.

The Connection can be monitored by subscribing to any of the Announcements defined under ConnectionStateAnnouncement. See #announcer.

The Connection is generally created indirectly via one of the ConnectionSpecification subclasses.
"
Class {
	#name : 'RsrConnection',
	#superclass : 'RsrObject',
	#instVars : [
		'channel',
		'transactionSpigot',
		'oidSpigot',
		'log',
		'registry',
		'pendingMessages',
		'specification',
		'announcer'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrConnection class >> channel: aChannel
transactionSpigot: aNumericSpigot
oidSpigot: anOidSpigot [
	"Create a new Connection with an already Configured Channel.
	Provide spigots as their behavior is specified by the Channel creation
	protocols."

	^self
		specification: nil
		channel: aChannel
		transactionSpigot: aNumericSpigot
		oidSpigot: anOidSpigot
]

{ #category : 'instance creation' }
RsrConnection class >> new [
	"Instances of Connection should not be created via #new.
	Instead use ConnectionSpecification.
	See SystemTestCase>>#setUp for an example."

	self shouldNotImplement: #new
]

{ #category : 'instance creation' }
RsrConnection class >> specification: aConnectionSpecification
channel: aChannel
transactionSpigot: aNumericSpigot
oidSpigot: anOidSpigot [
	"Create a new Connection with an already Configured Channel.
	Provide spigots as their behavior is specified by the Channel creation
	protocols."

	^super new
		specification: aConnectionSpecification;
		channel: aChannel;
		transactionSpigot: aNumericSpigot;
		oidSpigot: anOidSpigot;
		yourself
]

{ #category : 'private-service management' }
RsrConnection >> _ensureRegistered: aService [

	aService _connection == nil
		ifTrue: [^self _register: aService as: oidSpigot next].
	aService _connection == self
		ifFalse: [^RsrAlreadyRegistered signalService: aService intendedConnection: self]
]

{ #category : 'private-accessing' }
RsrConnection >> _forwarderClass [

	^RsrForwarder
]

{ #category : 'private-handling commands' }
RsrConnection >> _receivedCommand: aCommand [
	"Execute the command in the context of the receiving Connection."

	RsrProcessModel
		fork:
			[RsrProcessModel configureFrameworkProcess.
			aCommand executeFor: self]
		named: 'Processing ', aCommand class name
]

{ #category : 'private-service management' }
RsrConnection >> _register: aService
as: sid [

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
]

{ #category : 'private-coordination' }
RsrConnection >> _releaseSID: aSID [

	| command |
	self isOpen
		ifFalse: [^self].
	self log trace: 'Cleaning up OID:', aSID printString.
	command := RsrReleaseServices sids: (Array with: aSID).
	self _sendCommand: command
]

{ #category : 'private-service management' }
RsrConnection >> _remoteClientReleased: aSID [
	"Remotely, a Client instance has been garbage collected.
	Ensure we only reference the associated service weakly."

	| entry |
	entry := registry
		at: aSID
		ifAbsent: [^self].
	entry becomeWeak.
]

{ #category : 'private-handling commands' }
RsrConnection >> _sendCommand: aCommand [
	"Send the provided Command to our peer."

	channel send: aCommand
]

{ #category : 'private-handling commands' }
RsrConnection >> _sendMessage: aMessage
to: aService [

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
]

{ #category : 'private-service management' }
RsrConnection >> _stronglyRetain: aServer [
	"Retain the already registered server strongly."

	| entry |
	entry := registry
		at: aServer _id
		ifAbsent: [RsrUnknownSID signal: aServer _id printString].
	entry becomeStrong
]

{ #category : 'public-accessing' }
RsrConnection >> announcer [
	"Returns the announcer used by RSR to announce events."

	^announcer
]

{ #category : 'private-accessing' }
RsrConnection >> channel [

	^channel
]

{ #category : 'private-accessing' }
RsrConnection >> channel: aChannel [

	channel := aChannel.
	channel connection: self
]

{ #category : 'private-events' }
RsrConnection >> channelDisconnected [

	self log info: 'Disconnected'.
	self close
]

{ #category : 'public-lifecycle' }
RsrConnection >> close [

	| pm temp |
	channel close.
	temp := Dictionary new.
	pm := pendingMessages.
	pendingMessages := temp.
	pm do: [:each | each promise break: RsrConnectionClosedBeforeReceivingResponse new].
	registry := RsrThreadSafeDictionary new.
	announcer announce: (RsrConnectionClosed connection: self)
]

{ #category : 'private-initialization' }
RsrConnection >> initialize [

	super initialize.
	transactionSpigot := RsrThreadSafeNumericSpigot naturals.
	pendingMessages := RsrThreadSafeDictionary new.
	registry := RsrThreadSafeDictionary new.
	log := RsrLog new.
	announcer := Announcer new
]

{ #category : 'public-testing' }
RsrConnection >> isOpen [

	^channel isConnected
]

{ #category : 'private-accessing' }
RsrConnection >> log [

	^log
]

{ #category : 'private-service management' }
RsrConnection >> mournActionForClientSID: aSID [

	^[registry removeKey: aSID.
			self _releaseSID: aSID]
]

{ #category : 'private-service management' }
RsrConnection >> mournActionForServerSID: aSID [

	^[registry removeKey: aSID]
]

{ #category : 'private-accessing' }
RsrConnection >> oidSpigot [

	^oidSpigot
]

{ #category : 'private-accessing' }
RsrConnection >> oidSpigot: anIntegerSpigot [

	oidSpigot := anIntegerSpigot
]

{ #category : 'public-lifecycle' }
RsrConnection >> open [

	channel open
]

{ #category : 'private-accessing' }
RsrConnection >> pendingMessages [

	^pendingMessages
]

{ #category : 'private-service management' }
RsrConnection >> serviceAt: aSID [

	^self
		serviceAt: aSID
		ifAbsent: [RsrUnknownSID signal: aSID printString]
]

{ #category : 'private-service management' }
RsrConnection >> serviceAt: aSID
ifAbsent: aBlock [
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
]

{ #category : 'public-accessing' }
RsrConnection >> specification [
	"Returns the Specification used to create this Connection.
	If the Connection was not create using a Specification, returns nil."

	^specification
]

{ #category : 'public-accessing' }
RsrConnection >> specification: aConnectionSpecification [
	"Store the Specification used to the create this Connection."

	specification := aConnectionSpecification
]

{ #category : 'private-accessing' }
RsrConnection >> transactionSpigot [

	^transactionSpigot
]

{ #category : 'private-accessing' }
RsrConnection >> transactionSpigot: anObject [

	transactionSpigot := anObject
]

{ #category : 'private-events' }
RsrConnection >> unknownError: anException [

	self close
]

{ #category : 'public-waiting' }
RsrConnection >> waitUntilClose [

	| semaphore |
	semaphore := Semaphore new.
	announcer
		when: RsrConnectionClosed
		send: #signal
		to: semaphore.
	semaphore wait
]
