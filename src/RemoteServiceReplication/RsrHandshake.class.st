"
This class serves as the abstract superclass for the classes which implement the actual handshake protocol.

When the Client opens a Socket to the Server, it is responsible for sending the first message.

Client -> Server: SupportedVersions
Server -> Client:
	alt: The Server and Client have overlap in their supported versions
		- Server -> Client: ChosenVersion
	alt: No overlap exists between the Client and Server.
		- Server -> Client: NoVersionOverlap
		- Server: Closes socket
"
Class {
	#name : 'RsrHandshake',
	#superclass : 'RsrObject',
	#instVars : [
		'stream'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrHandshake class >> over: aStream [

	^self new
		stream: aStream;
		yourself
]

{ #category : 'accessing' }
RsrHandshake >> codec [

	^RsrHandshakeCodec new
]

{ #category : 'handshaking' }
RsrHandshake >> perform [

	self subclassResponsibility
]

{ #category : 'accessing' }
RsrHandshake >> stream [
	"The stream over which the handshake should occurr"

	^stream
]

{ #category : 'accessing' }
RsrHandshake >> stream: aStream [

	stream := aStream
]
