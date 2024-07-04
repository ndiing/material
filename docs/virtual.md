<a name="MDVirtualController"></a>

## MDVirtualController
Manages virtual scrolling for a host element.

**Kind**: global class  
**Emits**: <code>MDVirtualController#event:onVirtualScrollChange - Fired when the virtual scroll position changes.</code>, <code>MDVirtualController#event:onVirtualScroll - Fired during virtual scrolling.</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.viewportSelector | <code>String</code> | CSS selector for the viewport element. |
| options.scrollbarSelector | <code>String</code> | CSS selector for the scrollbar element. |
| options.containerSelector | <code>String</code> | CSS selector for the container element. |
| options.rowTotal | <code>Number</code> | Total number of rows. |
| options.rowHeight | <code>Number</code> | Height of each row. |
| options.buffer | <code>Number</code> | Buffer size for pre-rendering rows. |
| options.columnTotal | <code>Number</code> | Total number of columns. |
| options.columnWidth | <code>Number</code> | Width of each column. |

<a name="new_MDVirtualController_new"></a>

### new MDVirtualController(host, options)
Initializes the virtual scrolling controller.


| Param | Type | Description |
| --- | --- | --- |
| host | <code>\*</code> | The host element that this controller is associated with. |
| options | <code>\*</code> | Configuration options for virtual scrolling. |

