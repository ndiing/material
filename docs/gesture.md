# MDGestureController

Initializes the gesture controller with the specified host and options.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `host` | (*) | The host element to which the controller is attached. |
| `options` | (*) | Configuration options for the gesture controller. |


# MDGestureController

Gesture controller for handling drag, resize, selection, tap, double tap, long press, and swipe events.

### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `options.containerSelector` | (String) | Selector for the container element. |
| `options.dragHandleSelector` | (String) | Selector for the drag handle element. |
| `options.drag` | (Array) | Directions in which dragging is enabled (&#x27;x&#x27;, &#x27;y&#x27;, or both). |
| `options.dragAfterLongPress` | (Boolean) | Whether dragging should start after a long press. |
| `options.resize` | (Array) | Directions in which resizing is enabled (&#x27;n&#x27;, &#x27;e&#x27;, &#x27;s&#x27;, &#x27;w&#x27;, &#x27;ne&#x27;, &#x27;se&#x27;, &#x27;sw&#x27;, &#x27;nw&#x27;). |
| `options.resizeAfterLongPress` | (Boolean) | Whether resizing should start after a long press. |
| `options.selection` | (Boolean) | Whether selection is enabled. |
| `options.selectionAfterLongPress` | (Boolean) | Whether selection should start after a long press. |
| `options.updateStyle` | (Boolean) | Whether to update the style of the container element during gestures. |


### Events

| Event | Description |
|-------|-------------|
| `MDGestureController#event:onDragStart - Triggered when a drag operation starts.` | |
| `MDGestureController#event:onResizeStart - Triggered when a resize operation starts.` | |
| `MDGestureController#event:onSelectionStart - Triggered when a selection operation starts.` | |
| `MDGestureController#event:onLongPress - Triggered when a long press is detected.` | |
| `MDGestureController#event:onDrag - Triggered continuously during a drag operation.` | |
| `MDGestureController#event:onResize - Triggered continuously during a resize operation.` | |
| `MDGestureController#event:onSelection - Triggered continuously during a selection operation.` | |
| `MDGestureController#event:onTap - Triggered when a tap (short press) is detected.` | |
| `MDGestureController#event:onDoubleTap - Triggered when a double tap is detected.` | |
| `MDGestureController#event:onSelectionEnd - Triggered when a selection operation ends.` | |
| `MDGestureController#event:onDragEnd - Triggered when a drag operation ends.` | |
| `MDGestureController#event:onResizeEnd - Triggered when a resize operation ends.` | |




