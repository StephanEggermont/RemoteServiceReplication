Class {
	#name : 'RsrEphemeron',
	#superclass : 'RsrObject',
	#instVars : [
		'key',
		'mournAction'
	],
	#category : 'RemoteServiceReplication-GemStone'
}

{ #category : 'instance-creation' }
RsrEphemeron class >> on: anObject
mournAction: aBlock [

	^self new
        key: anObject;
        mournAction: aBlock;
        beEphemeron: true;
        yourself
]

{ #category : 'accessing' }
RsrEphemeron >> key [

	^key
]

{ #category : 'accessing' }
RsrEphemeron >> key: anObject [

	key := anObject
]

{ #category : 'mourning' }
RsrEphemeron >> mourn [

	mournAction value.
    key := mournAction := nil
]

{ #category : 'accessing' }
RsrEphemeron >> mournAction: aBlock [

	mournAction := aBlock
]
