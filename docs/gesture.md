# MDGestureController
MDGestureController provides gesture handling functionalities such as drag, resize, selection, taps, and swipes.

## Constructor
Creates an instance of MDGestureController.

name | type | desc
--- | --- | --- 
host | HTMLElement | The host element where gesture events are applied.
options | Object | Options for configuring gesture behavior.
options | Object | Other custom options passed during instantiation.

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onDragStart | Triggered when drag gesture starts.
onResizeStart | Triggered when resize gesture starts.
onSelectionStart | Triggered when selection gesture starts.
onLongPress | Triggered when a long press gesture is detected.
onDrag | Triggered during drag gesture.
onResize | Triggered during resize gesture.
onSelection | Triggered during selection gesture.
onTap | Triggered on tap gesture.
onDoubleTap | Triggered on double tap gesture.
onSwipeLeft | Triggered on swipe left gesture.
onSwipeRight | Triggered on swipe right gesture.
onSwipeTop | Triggered on swipe top gesture.
onSwipeBottom | Triggered on swipe bottom gesture.
onSelectionEnd | Triggered when selection gesture ends.
onDragEnd | Triggered when drag gesture ends.
onResizeEnd | Triggered when resize gesture ends.






