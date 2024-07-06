# MDPopperController

Constructs a new MDPopperController instance.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `host` | (*) | The host element to which the popper container is attached. |
| `options` | (Object) | Options for configuring the popper behavior. |
| `options.placements` | (Array.&lt;String&gt;) | Array of placement options for positioning the popper container. |
| `options.boundary` | (HTMLElement) | The boundary element that limits the popper container&#x27;s movement. |
| `options.offset` | (Number) | Offset value for adjusting the position of the popper container. |


# MDPopperController

Controller for managing popper-like positioning of a container relative to a button or host element.







# setPlacement

Sets the position of the popper container relative to a button or host element.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `button` | (HTMLElement) | The button or host element triggering the popper. |
| `options` | (Object) | Additional options to override default placement behavior. |


# getRect

Retrieves the bounding rectangle of an element.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `button` | (HTMLElement,Event) | The element or event containing client coordinates. |

#### Returns

| Type | Description |
|------|-------------|
| DOMRect | The bounding rectangle of the element. |

