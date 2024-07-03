<a name="MDPopperController"></a>

## MDPopperController
Controller for managing popper-like positioning of a container relative to a button or host element.

**Kind**: global class  

* [MDPopperController](#MDPopperController)
    * [new MDPopperController(host, options)](#new_MDPopperController_new)
    * [.setPlacement(button, [options])](#MDPopperController+setPlacement)
    * [.getRect(button)](#MDPopperController+getRect) ⇒ <code>DOMRect</code>

<a name="new_MDPopperController_new"></a>

### new MDPopperController(host, options)
Constructs a new MDPopperController instance.


| Param | Type | Description |
| --- | --- | --- |
| host | <code>\*</code> | The host element to which the popper container is attached. |
| options | <code>Object</code> | Options for configuring the popper behavior. |
| options.placements | <code>Array.&lt;String&gt;</code> | Array of placement options for positioning the popper container. |
| options.boundary | <code>HTMLElement</code> | The boundary element that limits the popper container's movement. |
| options.offset | <code>Number</code> | Offset value for adjusting the position of the popper container. |

<a name="MDPopperController+setPlacement"></a>

### mdPopperController.setPlacement(button, [options])
Sets the position of the popper container relative to a button or host element.

**Kind**: instance method of [<code>MDPopperController</code>](#MDPopperController)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> | The button or host element triggering the popper. |
| [options] | <code>Object</code> | Additional options to override default placement behavior. |

<a name="MDPopperController+getRect"></a>

### mdPopperController.getRect(button) ⇒ <code>DOMRect</code>
Retrieves the bounding rectangle of an element.

**Kind**: instance method of [<code>MDPopperController</code>](#MDPopperController)  
**Returns**: <code>DOMRect</code> - The bounding rectangle of the element.  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> \| <code>Event</code> | The element or event containing client coordinates. |

