"
No class-specific documentation for RsrCommand, hierarchy is:
Object
  RsrObject
    RsrCommand( encoding)

"
Class {
	#name : 'RsrCommand',
	#superclass : 'RsrObject',
	#category : 'RemoteServiceReplication-Base'
}

{ #category : 'encoding' }
RsrCommand >> encode: aStream
using: anEncoder [

	self subclassResponsibility
]

{ #category : 'executing' }
RsrCommand >> executeFor: aConnection [

	self subclassResponsibility
]

{ #category : 'reporting' }
RsrCommand >> reportOn: aLog [

	self subclassResponsibility
]
