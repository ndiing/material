## Classes

<dl>
<dt><a href="#VirtualScroll">VirtualScroll</a> ⇐ <code>Library</code></dt>
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

## VirtualScroll ⇐ <code>Library</code>
Class representing a virtual scroll.

**Kind**: global class  
**Extends**: <code>Library</code>  
**Author**: Ridho Prasetya  

* [VirtualScroll](#VirtualScroll) ⇐ <code>Library</code>
    * [.init()](#VirtualScroll+init)
    * [.destroy()](#VirtualScroll+destroy)
    * [.handleScroll(event)](#VirtualScroll+handleScroll)

<a name="VirtualScroll+init"></a>

### virtualScroll.init()
Initializes the virtual scroll.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="VirtualScroll+destroy"></a>

### virtualScroll.destroy()
Destroys the virtual scroll.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="VirtualScroll+handleScroll"></a>

### virtualScroll.handleScroll(event)
Handles the scroll event.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
**Emits**: <code>root#event:onScroll</code>  

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

