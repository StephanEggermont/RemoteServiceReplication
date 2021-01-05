"
Purpose: Provide a simple Promise interface for use in RSR.

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
		when: [:anObject | Transcript show: 'Promise fulfilled to: ', anObject asString; cr]
		catch: [:reason | Transcript show: 'Promise broken because of ', reason asString; cr].
	""Time passes""
	promise fulfill: Object new
```

```
	| promise |
	promise := Promise new.
	self runAsynCalculationThenFulfill: promise.
	promise wait.
```
"
Class {
	#name : 'RsrPromise',
	#superclass : 'RsrObject',
	#instVars : [
		'mutex',
		'value',
		'state',
		'resolvedMutex',
		'resolutionActions'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'private' }
RsrPromise >> assertNotResolved [

	self isResolved
		ifTrue: [RsrAlreadyResolved signal].
]

{ #category : 'resolving' }
RsrPromise >> break: aReason [
	"Notify the receiver's observers that the Promise will not be fulfilled."

	mutex
		critical:
			[self assertNotResolved.
			value := aReason.
			state := #Broken].
	self notifyActions.
	resolvedMutex signal
]

{ #category : 'resolving' }
RsrPromise >> fulfill: anObject [
	"Fulfill the receiver and notify any observers."

	mutex
		critical:
			[self assertNotResolved.
			value := anObject.
			state := #Fulfilled].
	self notifyActions.
	resolvedMutex signal
]

{ #category : 'private' }
RsrPromise >> initialize [

	super initialize.
	mutex := Semaphore forMutualExclusion.
	resolvedMutex := Semaphore new.
	state := #PendingResolution.
	resolutionActions := OrderedCollection new
]

{ #category : 'testing' }
RsrPromise >> isBroken [
	"Report if the receiver is currently broken"

	^state == #Broken
]

{ #category : 'testing' }
RsrPromise >> isFulfilled [
	"Report is the receiver is currently fulfilled"

	^state == #Fulfilled
]

{ #category : 'testing' }
RsrPromise >> isResolved [
	"Report if the receiver is currently resolved."

	^self isFulfilled or: [self isBroken]
]

{ #category : 'private' }
RsrPromise >> notifyActions [
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
				ifTrue: [RsrProcessModel fork: [each when value: value] named: 'Promise Fulfillment Notification']
				ifFalse: [RsrProcessModel fork: [each catch value: value] named: 'Promise Break Notification']]
]

{ #category : 'observing' }
RsrPromise >> value [
	"Alias for #wait"

	^self wait
]

{ #category : 'observing' }
RsrPromise >> wait [
	"Wait for a the receiver to be Resolved.
	If fulfilled - return the fulfillment value.
	If broken - raise an RsrBrokenPromise exception w/ the reason."

	self waitForResolution.
	^self isBroken
		ifTrue: [RsrBrokenPromise signalReason: value]
		ifFalse: [value]
]

{ #category : 'private' }
RsrPromise >> waitForResolution [
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
]

{ #category : 'observing' }
RsrPromise >> when: aWhenBlock
catch: aCatchBlock [
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
]
