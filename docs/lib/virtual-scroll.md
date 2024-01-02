<a name="VirtualScroll"></a>

## VirtualScroll
A utility class for implementing virtual scrolling functionality.

**Kind**: global class  
**Emits**: <code>options.viewport#event:onScroll</code>  
**Author**: Ridho Prasetya  

* [VirtualScroll](#VirtualScroll)
    * [new VirtualScroll([options])](#new_VirtualScroll_new)
    * [.init()](#VirtualScroll+init)
    * [.destroy()](#VirtualScroll+destroy)

<a name="new_VirtualScroll_new"></a>

### new VirtualScroll([options])
Creates an instance of VirtualScroll.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code> | Options for configuring the virtual scrolling. |
| options.viewport | <code>HTMLElement</code> |  | The viewport element. |
| [options.total] | <code>number</code> |  | Total number of items. |
| [options.content] | <code>HTMLElement</code> |  | The content element. |
| [options.scrollbar] | <code>HTMLElement</code> |  | The scrollbar element. |
| [options.container] | <code>HTMLElement</code> |  | The container element. |
| [options.threshold] | <code>number</code> | <code>2</code> | The threshold value for optimization. |

<a name="VirtualScroll+init"></a>

### virtualScroll.init()
Initializes the virtual scrolling by attaching scroll event listener.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="VirtualScroll+destroy"></a>

### virtualScroll.destroy()
Destroys the virtual scrolling by removing scroll event listener.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
