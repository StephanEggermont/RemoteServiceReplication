"
When a Client connects to a Server. It is required to send this message w/ the list of supported protocol versions it is willing to speak. The preference of the client is signified by the order of the version numbers in <versions>.
"
Class {
	#name : 'RsrSupportedVersions',
	#superclass : 'RsrHandshakeMessage',
	#instVars : [
		'versions'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrSupportedVersions class >> versions: anArray [

	^self new
		versions: anArray;
		yourself
]

{ #category : 'comparing' }
RsrSupportedVersions >> = aSupportedVersions [

	self class = aSupportedVersions class
		ifFalse: [^false].
	^self versions = aSupportedVersions versions
]

{ #category : 'comparing' }
RsrSupportedVersions >> hash [

	^self versions hash
]

{ #category : 'accessing' }
RsrSupportedVersions >> versions [

	^versions
]

{ #category : 'accessing' }
RsrSupportedVersions >> versions: anArray [

	versions := anArray
]
