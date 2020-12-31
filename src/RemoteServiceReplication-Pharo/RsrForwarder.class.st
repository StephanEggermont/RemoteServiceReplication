Class {
	#name : 'RsrForwarder',
	#superclass : 'RsrProtoObject',
	#instVars : [
		'_service'
	],
	#category : 'RemoteServiceReplication-Pharo'
}

{ #category : 'Glamour-Morphic-Brick' }
RsrForwarder >> asBrick [

	^_service asBrick
]

{ #category : 'GT-Spotter' }
RsrForwarder >> asSpotterCandidateLink [

	^_service asSpotterCandidateLink
]

{ #category : 'GT-Spotter' }
RsrForwarder >> asSpotterProcessorLink [

	^_service asSpotterProcessorLink
]

{ #category : 'accessing' }
RsrForwarder >> basicSize [
	^ 0
]

{ #category : 'Glamour-Morphic-Brick' }
RsrForwarder >> brickAlert [

	^_service brickAlert
]

{ #category : 'Glamour-Morphic-Brick' }
RsrForwarder >> brickValue: aBrick [

	^_service brickValue: aBrick
]

{ #category : 'Glamour-Morphic-Brick' }
RsrForwarder >> brickValue: anObject withEnoughArguments: aCollection [

	^_service brickValue: anObject withEnoughArguments: aCollection
]

{ #category : 'GT-Debugger' }
RsrForwarder >> gtConstructDebuggerInspectorIn: composite
for: aDebugger [
	
	^_service
		gtConstructDebuggerInspectorIn: composite
		for: aDebugger
]

{ #category : 'GT-Debugger' }
RsrForwarder >> gtDebuggerEvaluatorIn: composite [
	
	^_service gtDebuggerEvaluatorIn: composite
]

{ #category : 'GT-Debugger' }
RsrForwarder >> gtDebuggerRawIn: composite [

	^_service gtDebuggerRawIn: composite
]

{ #category : 'GT-SUnitDebugger' }
RsrForwarder >> gtDebuggerSUnitPrint [

	^_service gtDebuggerSUnitPrint
]

{ #category : 'GT-Inspector' }
RsrForwarder >> gtDisplayOn: stream [

	^_service gtDisplayOn: stream
]

{ #category : 'GT-Inspector' }
RsrForwarder >> gtDisplayString [

	^_service gtDisplayString
]

{ #category : 'GT-Spotter' }
RsrForwarder >> gtFilter [

	^_service gtFilter
]

{ #category : 'GT-Spotter-UI' }
RsrForwarder >> gtInspectorActionSpot [

	^_service gtInspectorActionSpot
]

{ #category : 'GT-Inspector' }
RsrForwarder >> gtInspectorHash [

	^_service gtInspectorHash
]

{ #category : 'GT-Inspector' }
RsrForwarder >> gtInspectorIcon [

	^_service gtInspectorIcon
]

{ #category : 'GT-Inspector' }
RsrForwarder >> gtInspectorInterestingObject [

	^_service gtInspectorInterestingObject
]

{ #category : 'GT-Inspector' }
RsrForwarder >> gtInspectorRawIn: composite [

	^_service gtInspectorRawIn: composite
]

{ #category : 'GT-Inspector' }
RsrForwarder >> gtInspectorVariableNodesIn: aCollection [

	^_service gtInspectorVariableNodesIn: aCollection
]

{ #category : 'GT-Inspector' }
RsrForwarder >> gtInspectorVariableValuePairs [

	^_service gtInspectorVariableValuePairs
]

{ #category : 'GT-Spotter' }
RsrForwarder >> gtIterator [

	^_service gtIterator
]

{ #category : 'GT-Spotter' }
RsrForwarder >> gtListFilter [

	^_service gtListFilter
]

{ #category : 'GT-Spotter' }
RsrForwarder >> hasDynamicItems [

	^_service hasDynamicItems
]

{ #category : 'GT-Inspector' }
RsrForwarder >> inspectInExternalWindow [

	^_service inspectInExternalWindow
]

{ #category : 'testing' }
RsrForwarder >> isKindOf: ignored [

	^ false
]

{ #category : 'Glamour-Morphic-Brick' }
RsrForwarder >> phlowValue: anObject [

	^_service phlowValue: anObject
]

{ #category : 'Glamour-Morphic-Brick' }
RsrForwarder >> phlowValue: anObject value: otherObject [

	^_service phlowValue: anObject value: otherObject
]

{ #category : 'Glamour-Morphic-Brick' }
RsrForwarder >> phlowValue: anObject withEnoughArguments: aCollection [

	^_service phlowValue: anObject withEnoughArguments: aCollection
]

{ #category : 'printing' }
RsrForwarder >> printStringLimitedTo: anInteger [

	^''
]

{ #category : 'Glamour-Helpers' }
RsrForwarder >> renderGlamorouslyOn: aRenderer [

	^_service renderGlamorouslyOn: aRenderer
]

{ #category : 'GT-Spotter' }
RsrForwarder >> spotterActDefault [

	^_service spotterActDefault
]

{ #category : 'GT-Spotter' }
RsrForwarder >> spotterActDefault: aStep [

	^_service spotterActDefault: aStep
]

{ #category : 'GT-Spotter' }
RsrForwarder >> spotterPreviewIn: aComposite inContext: aSpotter [

	^_service spotterPreviewIn: aComposite inContext: aSpotter
]

{ #category : 'GT-Spotter-UI' }
RsrForwarder >> spotterPreviewRawIn: aComposite [

	^_service spotterPreviewRawIn: aComposite
]

{ #category : 'GT-Spotter' }
RsrForwarder >> spotterProcessorsFor: aSpotterStep [

	^_service spotterProcessorsFor: aSpotterStep
]

{ #category : 'GT-Spotter' }
RsrForwarder >> spotterProcessorsFor: aSpotterStep pragma: aPragma [

	^_service spotterProcessorsFor: aSpotterStep pragma: aPragma
]

{ #category : 'GT-Spotter' }
RsrForwarder >> spotterRePropertiesFor: aStep [

	^_service spotterRePropertiesFor: aStep
]
