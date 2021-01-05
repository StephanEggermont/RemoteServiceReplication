Class {
	#name : 'RsrInternalSocketConnectionSpecification',
	#superclass : 'RsrInternalConnectionSpecification',
	#category : 'RemoteServiceReplication'
}

{ #category : 'connecting' }
RsrInternalSocketConnectionSpecification >> connect [
	"Establish an internal Connection pair via socket."

	RsrProcessModel fork: [connectionA := (RsrAcceptConnection port: self defaultPort) waitForConnection] named: 'Pending AcceptConnection'.
	self minimalWait. "Allow other process to schedule."
	connectionB := (RsrInitiateConnection host: '127.0.0.1' port: self defaultPort) connect.
	self minimalWait. "Allow other process to schedule."
	self assertOpen.
	connectionA specification: self.
	connectionB specification: self.
	^connectionA
]

{ #category : 'accessing' }
RsrInternalSocketConnectionSpecification >> defaultPort [
	"Returns the default port number used to listen for connections."

	^61982
]
