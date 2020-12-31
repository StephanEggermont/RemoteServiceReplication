Class {
	#name : 'RsrSpeciesEquality',
	#superclass : 'RsrSystemTestCase',
	#category : 'RemoteServiceReplication-Test'
}

{ #category : 'testing' }
RsrSpeciesEquality class >> isAbstract [

	^self == RsrSpeciesEquality
]

{ #category : 'accessing' }
RsrSpeciesEquality >> basicExamples [
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
]

{ #category : 'running' }
RsrSpeciesEquality >> testArray [

	self
		verify: #();
		verify: (Array withAll: self basicExamples)
]

{ #category : 'running' }
RsrSpeciesEquality >> testBoolean [

	self
		verify: true;
		verify: false
]

{ #category : 'running' }
RsrSpeciesEquality >> testByteArray [

	self
		verify: #[];
		verify: (ByteArray withAll: (0 to: 255));
		verify: (ByteArray new: 1024)
]

{ #category : 'running' }
RsrSpeciesEquality >> testCharacter [

	self
		verify: (Character codePoint: 0);
		verify: (Character codePoint: 65);
		verify: $A;
		verify: (Character codePoint: 16r01D4);
		verify: (Character codePoint: 16r8334)
]

{ #category : 'running' }
RsrSpeciesEquality >> testDateAndTime [

	self
		verify: (RsrDateAndTime fromMicroseconds: -491277642567488); "1954-06-07T14:59:17.432512-07:00"
		verify: (RsrDateAndTime fromMicroseconds: 1562692562657612). "2019-07-09T10:16:02.657612-07:00"
]

{ #category : 'running' }
RsrSpeciesEquality >> testDictionary [

	| example |
	example := Dictionary new.
	self verify: example.
	self basicExamples do: [:each | each ifNotNil: [example at: each put: each]].
	example at: #testDictionaryPrivateKey put: nil.
	self verify: example
]

{ #category : 'running' }
RsrSpeciesEquality >> testInteger [

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
]

{ #category : 'running' }
RsrSpeciesEquality >> testOrderedCollection [

	self
		verify: OrderedCollection new;
		verify: (OrderedCollection withAll: self basicExamples)
]

{ #category : 'running' }
RsrSpeciesEquality >> testService [

	| clientClass serverClass |
	clientClass := RsrRemoteAction clientClass.
	serverClass := RsrRemoteAction serverClass.
	self
		verify: clientClass new;
		verify: (clientClass sharedVariable: clientClass new);
		verify: (serverClass sharedVariable: clientClass new)
]

{ #category : 'running' }
RsrSpeciesEquality >> testServiceWithUnsupportedObject [

	| service |
	service := RsrClientNoInstVars new
		registerWith: connectionA;
		yourself.
	self
		should: [service sendReturnArgument: (RsrValueHolderClient value: Object new)]
		raise: RsrUnsupportedObject
]

{ #category : 'running' }
RsrSpeciesEquality >> testSet [

	self
		verify: Set new;
		verify: (Set withAll: self basicExamples)
]

{ #category : 'running' }
RsrSpeciesEquality >> testString [

	self
		verify: '';
		verify: 'string'
]

{ #category : 'running' }
RsrSpeciesEquality >> testSymbol [

	self
		verify: #'';
		verify: #symbol
]

{ #category : 'running' }
RsrSpeciesEquality >> testUndefinedObject [

	self verify: nil
]

{ #category : 'running' }
RsrSpeciesEquality >> testUnicodeString [

	self verify: self unicodeString
]

{ #category : 'running' }
RsrSpeciesEquality >> testUnicodeSymbol [

	self verify: self unicodeString asSymbol
]

{ #category : 'running' }
RsrSpeciesEquality >> unicodeString [

	^String
		with: $a
		with: (Character codePoint: 16r8349)
		with: (Character codePoint: 16r10E60)
]

{ #category : 'asserting' }
RsrSpeciesEquality >> verify: anObject [
	"Send <anObject> through RSR and have it returned. Assert it is equivalent."

	| client server |
	client := RsrRemoteActionClient new
		registerWith: connectionA;
		synchronize.
	server := connectionB serviceAt: client _id.
	server action: [:object | server sharedVariable: object. object].
	self
		assert: (client value: anObject)
		equals: anObject.
	self
		assert: client sharedVariable
		equals: anObject
]
