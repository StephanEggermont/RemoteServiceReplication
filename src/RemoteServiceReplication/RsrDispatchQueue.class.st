"
DispatchQueue

This class serves one purpose -- evaluate actions serially. Certain parts of the framework require this. For instance, Command processing needs to happen in the order it was received. (Note, this is not true of SendMessage commands which should fork the actual message send.)


Protections

This class should provide some low-level #on:do:. I don't yet know what form this should take. I suspect it should coordinate w/ the Connection but I will leave this until I find an example error case.
"
Class {
	#name : 'RsrDispatchQueue',
	#superclass : 'RsrObject',
	#instVars : [
		'queue',
		'process',
		'isRunning'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'dispatching' }
RsrDispatchQueue >> async: aBlock [
	"Evaluate the block asynchronously and do not return a result"

	queue nextPut: aBlock.
	^nil
]

{ #category : 'dispatching' }
RsrDispatchQueue >> dispatch: aBlock [

	^self async: aBlock
]

{ #category : 'initializing' }
RsrDispatchQueue >> initialize [

	super initialize.
	queue := SharedQueue new
]

{ #category : 'testing' }
RsrDispatchQueue >> isRunning [

	^isRunning
]

{ #category : 'running' }
RsrDispatchQueue >> runLoop [

	[self isRunning]
		whileTrue:
			[[queue next value]
				on: Error
				do: [:ex | self trace. Transcript show: ex messageText; cr. ex pass]]
]

{ #category : 'lifecycle' }
RsrDispatchQueue >> start [
	"Start processing queued events."

	isRunning := true.
	process := RsrProcessModel
		fork: [self runLoop]
		named: 'DispatchQueue run loop'
]

{ #category : 'lifecycle' }
RsrDispatchQueue >> stop [
	"Stop process events in the dispatch queue."

	isRunning := false.
	self dispatch: []. "Ensure another action is added to the queue to ensure shutdown if it hasn't yet happened."
	process := nil
]
