<a name="VirtualScroll"></a>

## VirtualScroll
A virtual scroll utility class that manages scrolling behavior.

**Kind**: global class  
**Emits**: <code>viewport#event:onScroll</code>  
**Author**: Ridho Prasetya  
<a name="new_VirtualScroll_new"></a>

### new VirtualScroll(options)
Creates an instance of VirtualScroll.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The options for the VirtualScroll. |
| [options.total] | <code>number</code> |  | The total number of items. |
| [options.contentHeight] | <code>number</code> | <code>48</code> | The height of each content item. |
| options.viewport | <code>HTMLElement</code> |  | The viewport element. |
| [options.threshold] | <code>number</code> | <code>2</code> | The threshold for preloading content. |

