<a name="MDGestureController"></a>

## MDGestureController
Gesture controller for handling drag, resize, selection, tap, double tap, long press, and swipe events.

**Kind**: global class  
**Emits**: <code>MDGestureController#event:onDragStart - Triggered when a drag operation starts.</code>, <code>MDGestureController#event:onResizeStart - Triggered when a resize operation starts.</code>, <code>MDGestureController#event:onSelectionStart - Triggered when a selection operation starts.</code>, <code>MDGestureController#event:onLongPress - Triggered when a long press is detected.</code>, <code>MDGestureController#event:onDrag - Triggered continuously during a drag operation.</code>, <code>MDGestureController#event:onResize - Triggered continuously during a resize operation.</code>, <code>MDGestureController#event:onSelection - Triggered continuously during a selection operation.</code>, <code>MDGestureController#event:onTap - Triggered when a tap (short press) is detected.</code>, <code>MDGestureController#event:onDoubleTap - Triggered when a double tap is detected.</code>, <code>MDGestureController#event:onSelectionEnd - Triggered when a selection operation ends.</code>, <code>MDGestureController#event:onDragEnd - Triggered when a drag operation ends.</code>, <code>MDGestureController#event:onResizeEnd - Triggered when a resize operation ends.</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.containerSelector | <code>String</code> | Selector for the container element. |
| options.dragHandleSelector | <code>String</code> | Selector for the drag handle element. |
| options.drag | <code>Array</code> | Directions in which dragging is enabled ('x', 'y', or both). |
| options.dragAfterLongPress | <code>Boolean</code> | Whether dragging should start after a long press. |
| options.resize | <code>Array</code> | Directions in which resizing is enabled ('n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'). |
| options.resizeAfterLongPress | <code>Boolean</code> | Whether resizing should start after a long press. |
| options.selection | <code>Boolean</code> | Whether selection is enabled. |
| options.selectionAfterLongPress | <code>Boolean</code> | Whether selection should start after a long press. |
| options.updateStyle | <code>Boolean</code> | Whether to update the style of the container element during gestures. |

<a name="new_MDGestureController_new"></a>

### new MDGestureController(host, options)
Initializes the gesture controller with the specified host and options.


| Param | Type | Description |
| --- | --- | --- |
| host | <code>\*</code> | The host element to which the controller is attached. |
| options | <code>\*</code> | Configuration options for the gesture controller. |

