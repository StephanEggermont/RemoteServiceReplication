Class {
	#name : 'RsrTestingProcessModelTestCase',
	#superclass : 'RsrTestCase',
	#category : 'RemoteServiceReplication-Platform-Test'
}

{ #category : 'running' }
RsrTestingProcessModelTestCase >> exceptionCase [

	| sema |
	sema := Semaphore new.
	RsrProcessModel fork: [[Error signal] ensure: [sema signal]] ensure: 'Ensure w/ signal'.
	sema wait
]

{ #category : 'running' }
RsrTestingProcessModelTestCase >> noExceptionCase [

	| sema |
	sema := Semaphore new.
	RsrProcessModel fork: [sema signal] named: 'Signal Semaphore'.
	sema wait
]

{ #category : 'running' }
RsrTestingProcessModelTestCase >> testCurrentStackDump [

	| stack |
	stack := RsrProcessModel currentStackDump.
	self
		assert: stack isString;
		assert: stack size > 0
]

{ #category : 'running' }
RsrTestingProcessModelTestCase >> testException [

	| testCase |
	testCase := self class selector: #exceptionCase.
	self
		should: [testCase runCase]
		raise: Exception
]

{ #category : 'running' }
RsrTestingProcessModelTestCase >> testNoException [

	| testCase |
	testCase := self class selector: #noExceptionCase.
	self
		shouldnt: [testCase runCase]
		raise: Exception
]
