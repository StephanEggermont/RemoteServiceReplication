"
This message is sent when a Server has chosen a version it is willing to talk w/ a client Connection. The Server expects the Client to speak this version.
"
Class {
	#name : 'RsrChosenVersion',
	#superclass : 'RsrHandshakeMessage',
	#instVars : [
		'version'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrChosenVersion class >> version: aVersionNumber [

	^self new
		version: aVersionNumber;
		yourself
]

{ #category : 'comparing' }
RsrChosenVersion >> = aChosenVersion [

	^self class = aChosenVersion class and: [self version = aChosenVersion version]
]

{ #category : 'testing' }
RsrChosenVersion >> hasSharedVersion [
	"Answer whether there is a valid shared protocol version between the Client and Server."

	^true
]

{ #category : 'accessing' }
RsrChosenVersion >> version [

	^version
]

{ #category : 'accessing' }
RsrChosenVersion >> version: aVersionNumber [

	version := aVersionNumber
]
