Class {
	#name : 'RsrServerHandshake',
	#superclass : 'RsrHandshake',
	#category : 'RemoteServiceReplication'
}

{ #category : 'handshaking' }
RsrServerHandshake >> perform [
	"Peform the Server's side of the handshake."

	| supportedVersions |
	supportedVersions := self codec decode: self stream.
	(supportedVersions versions includes: 1)
		ifTrue:
			[self codec
				encodeChosenVersion: (RsrChosenVersion version: 1)
				onto: self stream.
			self stream flush.]
		ifFalse:
			[self codec
				encodeNoVersionOverlap: RsrNoVersionOverlap new
				onto: self stream.
			self stream flush; close.
			^RsrHandshakeFailed signal: 'Client versions did not overlap w/ Server']
]
