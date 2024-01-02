## Classes

<dl>
<dt><a href="#VirtualScroll">VirtualScroll</a></dt>
<dd><p>Class representing a virtual scroll.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ScrollEventData">ScrollEventData</a> : <code>Object</code></dt>
<dd><p>Scroll event data.</p>
</dd>
</dl>

<a name="VirtualScroll"></a>

## VirtualScroll
Class representing a virtual scroll.

**Kind**: global class  
**Author**: Ridho Prasetya  

* [VirtualScroll](#VirtualScroll)
    * [new VirtualScroll([root], [options])](#new_VirtualScroll_new)
    * [.root](#VirtualScroll+root) : <code>HTMLElement</code>
    * [.options](#VirtualScroll+options) : <code>Object</code>
    * [.init()](#VirtualScroll+init)
    * [.destroy()](#VirtualScroll+destroy)
    * [.handleScroll(event)](#VirtualScroll+handleScroll)

<a name="new_VirtualScroll_new"></a>

### new VirtualScroll([root], [options])
Creates an instance of VirtualScroll.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [root] | <code>HTMLElement</code> | <code></code> | The root element to attach events to. |
| [options] | <code>Object</code> | <code>{}</code> | The options for the virtual scroll. |

<a name="VirtualScroll+root"></a>

### virtualScroll.root : <code>HTMLElement</code>
The root element to attach events to.

**Kind**: instance property of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="VirtualScroll+options"></a>

### virtualScroll.options : <code>Object</code>
Options for the virtual scroll.

**Kind**: instance property of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="VirtualScroll+init"></a>

### virtualScroll.init()
Initializes the virtual scroll by attaching the scroll event handler.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="VirtualScroll+destroy"></a>

### virtualScroll.destroy()
Destroys the virtual scroll by removing the scroll event handler.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="VirtualScroll+handleScroll"></a>

### virtualScroll.handleScroll(event)
Handles the scroll event and emits 'onScroll' event with relevant scroll data.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
**Emits**: <code>VirtualScroll#event:onScroll</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The scroll event. |

<a name="ScrollEventData"></a>

## ScrollEventData : <code>Object</code>
Scroll event data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| scrollbarHeight | <code>number</code> | Height of the scrollbar. |
| start | <code>number</code> | Starting index of the visible items. |
| limit | <code>number</code> | Number of items visible in the viewport. |
| translateY | <code>number</code> | Translation value based on scroll. |

