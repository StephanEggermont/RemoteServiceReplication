"
No class-specific documentation for RsrSocketChannel, hierarchy is:
Object
  RsrObject
    RsrChannel
      RsrSocketChannel( reader writer socket stream)

"
Class {
	#name : 'RsrBinaryStreamChannel',
	#superclass : 'RsrChannel',
	#instVars : [
		'sink',
		'source',
		'inStream',
		'outStream'
	],
	#category : 'RemoteServiceReplication'
}

{ #category : 'instance creation' }
RsrBinaryStreamChannel class >> inStream: inStream
outStream: outStream [

	^self new
		inStream: inStream;
		outStream: outStream;
		yourself
]

{ #category : 'lifecycle' }
RsrBinaryStreamChannel >> close [
	"Shutdown the Command sink and source."

	source stop.
	sink stop.
	outStream
		flush;
		close.
	inStream close
]

{ #category : 'lifecycle' }
RsrBinaryStreamChannel >> disconnected [
	"The socket has disconnected so the channel is no longer open."

	self connection channelDisconnected
]

{ #category : 'initializing' }
RsrBinaryStreamChannel >> initialize [

	super initialize.
	source := RsrCommandSource on: self.
	sink := RsrCommandSink on: self
]

{ #category : 'accessing' }
RsrBinaryStreamChannel >> inStream [
	"Returns the stream associated w/ reading"

	^inStream
]

{ #category : 'accessing' }
RsrBinaryStreamChannel >> inStream: aBinaryReadStream [
	"Sets the stream associated w/ reading"

	inStream := aBinaryReadStream
]

{ #category : 'testing' }
RsrBinaryStreamChannel >> isConnected [

	^self inStream isConnected and: [self outStream isConnected]
]

{ #category : 'lifecycle' }
RsrBinaryStreamChannel >> open [
	"Ensure the Command sink and source are running"

	source start.
	sink start
]

{ #category : 'accessing' }
RsrBinaryStreamChannel >> outStream [
	"Returns the stream associated w/ writing"

	^outStream
]

{ #category : 'accessing' }
RsrBinaryStreamChannel >> outStream: aBinaryWriteStream [
	"Sets the stream associated w/ writing"

	outStream := aBinaryWriteStream
]

{ #category : 'command processing' }
RsrBinaryStreamChannel >> send: aCommand [
	"Send the provided command over the channel"

	sink enqueue: aCommand
]

{ #category : 'accessing' }
RsrBinaryStreamChannel >> sink [

	^sink
]

{ #category : 'accessing' }
RsrBinaryStreamChannel >> source [

	^source
]
