Class {
	#name : 'RsrProcessModel',
	#superclass : 'Object',
	#classInstVars : [
		'current'
	],
	#category : 'RemoteServiceReplication-Base'
}

{ #category : 'configuring' }
RsrProcessModel class >> configureCommunicationsProcess [
	"Apply framework configuration to the currently running communications process."

	^self current configureCommunicationsProcess
]

{ #category : 'configuring' }
RsrProcessModel class >> configureFrameworkProcess [
	"Apply framework configuration to the currently running process."

	^self current configureFrameworkProcess
]

{ #category : 'managing-concurrency' }
RsrProcessModel class >> currentStackDump [

	^self current currentStackDump
]

{ #category : 'managing-concurrency' }
RsrProcessModel class >> fork: aBlock
at: aPriority
named: aString [

	^self current
		fork: aBlock
		at: aPriority
		named: aString
]

{ #category : 'managing-concurrency' }
RsrProcessModel class >> fork: aBlock
named: aString [

	^self current fork: aBlock named: aString
]

{ #category : 'managing-concurrency' }
RsrProcessModel class >> renameProcess: aString [
	"Rename the current process to the provided string"

	^self current renameProcess: aString
]

{ #category : 'configuring' }
RsrProcessModel >> communicationsSchedulePriority [
	"Returns the priority level used by communications processes."

	^Processor highIOPriority
]

{ #category : 'configuring' }
RsrProcessModel >> configureCommunicationsProcess [
	"Apply framework configuration to the currently running communications process."

	Processor activeProcess
		"breakpointLevel: 0;"
		priority: self communicationsSchedulePriority
]

{ #category : 'configuring' }
RsrProcessModel >> configureFrameworkProcess [
	"Apply framework configuration to the currently running process."

	Processor activeProcess
		"breakpointLevel: 0;"
		priority: self frameworkSchedulingPriority
]

{ #category : 'managing-concurrency' }
RsrProcessModel >> fork: aBlock
at: aPriority
named: aString [

	[self renameProcess: aString.
	aBlock value] forkAt: aPriority
]

{ #category : 'managing-concurrency' }
RsrProcessModel >> fork: aBlock
named: aString [

	[self renameProcess: aString.
	aBlock value] fork
]

{ #category : 'configuring' }
RsrProcessModel >> frameworkSchedulingPriority [
	"Returns the priority level used by normal framework processes."

	^Processor userInterruptPriority
]

{ #category : 'renaming' }
RsrProcessModel >> renameProcess: aString [

	Processor activeProcess name: aString
]
