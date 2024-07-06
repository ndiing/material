# MDVirtualController

Initializes the virtual scrolling controller.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `host` | (*) | The host element that this controller is associated with. |
| `options` | (*) | Configuration options for virtual scrolling. |


# MDVirtualController

Manages virtual scrolling for a host element.

### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `options.viewportSelector` | (String) | CSS selector for the viewport element. |
| `options.scrollbarSelector` | (String) | CSS selector for the scrollbar element. |
| `options.containerSelector` | (String) | CSS selector for the container element. |
| `options.rowTotal` | (Number) | Total number of rows. |
| `options.rowHeight` | (Number) | Height of each row. |
| `options.buffer` | (Number) | Buffer size for pre-rendering rows. |
| `options.columnTotal` | (Number) | Total number of columns. |
| `options.columnWidth` | (Number) | Width of each column. |


### Events

| Event | Description |
|-------|-------------|
| `MDVirtualController#event:onVirtualScrollChange - Fired when the virtual scroll position changes.` | |
| `MDVirtualController#event:onVirtualScroll - Fired during virtual scrolling.` | |




