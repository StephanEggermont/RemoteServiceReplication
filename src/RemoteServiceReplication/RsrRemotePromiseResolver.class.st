"
This class is responsible for taking breaking or fulfilling its associated Promise. The Promise exists in the remote RSR instance.

This class may be mutated outside of the thread which created it. Therefore, it contains a protection mutex to ensure consistency.
"
Class {
	#name : 'RsrRemotePromiseResolver',
	#superclass : 'RsrObject',
	#instVars : [
		'mutex',
		'sendMessage',
		'connection',
		'extraRoots',
		'hasResolved'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrRemotePromiseResolver class >> for: aSendMessage
over: aConnection [

	^self new
		sendMessage: aSendMessage;
		connection: aConnection;
		yourself
]

{ #category : 'accessing' }
RsrRemotePromiseResolver >> addRoot: aService [

	mutex critical: [extraRoots add: aService]
]

{ #category : 'private' }
RsrRemotePromiseResolver >> assertNotResolved [

	self hasResolved
		ifTrue: [RsrAlreadyResolved signal]
]

{ #category : 'resolving' }
RsrRemotePromiseResolver >> break: aReason [
	"<aReason> can be any object supported by RSR."

	self resolution: (Array with: #break with: aReason)
]

{ #category : 'accessing' }
RsrRemotePromiseResolver >> connection [

	^connection
]

{ #category : 'accessing' }
RsrRemotePromiseResolver >> connection: aConnection [

	connection := aConnection
]

{ #category : 'resolving' }
RsrRemotePromiseResolver >> fulfill: result [
	"Fulfill the remote promise with a fulfilled value of <result>"

	self resolution: (Array with: #fulfill with: result)
]

{ #category : 'testing' }
RsrRemotePromiseResolver >> hasResolved [

	^hasResolved
]

{ #category : 'private' }
RsrRemotePromiseResolver >> initialize [

	super initialize.
	extraRoots := OrderedCollection new.
	hasResolved := false.
	mutex := Semaphore forMutualExclusion
]

{ #category : 'resolving' }
RsrRemotePromiseResolver >> resolution: result [
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
]

{ #category : 'accessing' }
RsrRemotePromiseResolver >> sendMessage [

	^sendMessage
]

{ #category : 'accessing' }
RsrRemotePromiseResolver >> sendMessage: aSendMessage [

	sendMessage := aSendMessage
]

{ #category : 'resolving' }
RsrRemotePromiseResolver >> sendResult: result
closureRoots: roots [

	| analysis resultReference |
	analysis := RsrSnapshotAnalysis
		roots: roots
		connection: self connection.
	analysis perform.
	resultReference := RsrReference from: result.
	self
		sendResultReference: resultReference
		snapshots: analysis snapshots
]

{ #category : 'resolving' }
RsrRemotePromiseResolver >> sendResultReference: resultReference
snapshots: snapshots [

	| response |
	response := RsrDeliverResponse
				transaction: self sendMessage transaction
				responseReference: resultReference
				snapshots: snapshots.
	self connection _sendCommand: response
]
