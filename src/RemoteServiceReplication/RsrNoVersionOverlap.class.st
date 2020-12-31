"
This message is sent when a Server has determined it cannot talk any version of the protocol that the Client has requested to speak.
"
Class {
	#name : 'RsrNoVersionOverlap',
	#superclass : 'RsrHandshakeMessage',
	#category : 'RemoteServiceReplication'
}

{ #category : 'comparing' }
RsrNoVersionOverlap >> = aNoVersionOverlap [

	^self class = aNoVersionOverlap class
]

{ #category : 'comparing' }
RsrNoVersionOverlap >> hash [

	^self class hash
]

{ #category : 'testing' }
RsrNoVersionOverlap >> hasSharedVersion [
	"Answer whether there is a valid shared protocol version between the Client and Server."

	^false
]
