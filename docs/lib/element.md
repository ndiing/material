<a name="MdElement"></a>

## MdElement
**Kind**: global class  
**Author**: Ridho Prasetya  

* [MdElement](#MdElement)
    * [new MdElement()](#new_MdElement_new)
    * [.createRenderRoot()](#MdElement+createRenderRoot) ⇒ <code>this</code>
    * [.on(type, listener)](#MdElement+on)
    * [.emit(type, detail)](#MdElement+emit)

<a name="new_MdElement_new"></a>

### new MdElement()
Custom element providing additional functionality on top of LitElement.

<a name="MdElement+createRenderRoot"></a>

### mdElement.createRenderRoot() ⇒ <code>this</code>
Overrides LitElement's createRenderRoot to use the element itself as the render root.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  
**Returns**: <code>this</code> - The instance of MdElement.  
<a name="MdElement+on"></a>

### mdElement.on(type, listener)
Attaches an event listener to the element.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>function</code> | The callback function to execute when the event occurs. |

<a name="MdElement+emit"></a>

### mdElement.emit(type, detail)
Dispatches a custom event from the element with the given type and detail.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to dispatch. |
| detail | <code>\*</code> | Additional information to include with the event. |

