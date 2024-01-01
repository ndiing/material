<a name="MdElement"></a>

## MdElement
**Kind**: global class  
**Author**: Ridho Prasetya  

* [MdElement](#MdElement)
    * [new MdElement()](#new_MdElement_new)
    * [.on(type, listener)](#MdElement+on)
    * [.off(type, listener)](#MdElement+off) ⇒ <code>void</code>
    * [.emit(type, detail)](#MdElement+emit)

<a name="new_MdElement_new"></a>

### new MdElement()
Custom element providing additional functionality on top of LitElement.

<a name="MdElement+on"></a>

### mdElement.on(type, listener)
Attaches an event listener to the element.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>function</code> | The callback function to execute when the event occurs. |

<a name="MdElement+off"></a>

### mdElement.off(type, listener) ⇒ <code>void</code>
Removes an event listener from the element.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>function</code> | The callback function previously added. |

<a name="MdElement+emit"></a>

### mdElement.emit(type, detail)
Dispatches a custom event from the element with the given type and detail.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to dispatch. |
| detail | <code>\*</code> | Additional information to include with the event. |

