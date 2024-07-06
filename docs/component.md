<a name="MDComponent"></a>

## MDComponent ⇐ <code>LitElement</code>
Base class for a custom MDComponent extending LitElement.
Provides utility methods for event handling.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MDComponent](#MDComponent) ⇐ <code>LitElement</code>
    * [.on(type, listener)](#MDComponent+on)
    * [.once(type, listener)](#MDComponent+once)
    * [.off(type, listener)](#MDComponent+off)
    * [.emit(type, detail)](#MDComponent+emit)

<a name="MDComponent+on"></a>

### mdComponent.on(type, listener)
Adds an event listener bound to the element instance.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>EventListenerOrEventListenerObject</code> | The listener function to call when the event occurs. |

<a name="MDComponent+once"></a>

### mdComponent.once(type, listener)
Adds a one-time event listener bound to the element instance.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>EventListenerOrEventListenerObject</code> | The listener function to call when the event occurs. |

<a name="MDComponent+off"></a>

### mdComponent.off(type, listener)
Removes an event listener from the element instance.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>EventListenerOrEventListenerObject</code> | The listener function to remove. |

<a name="MDComponent+emit"></a>

### mdComponent.emit(type, detail)
Dispatches a custom event from the element instance.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to dispatch. |
| detail | <code>\*</code> | Any data to pass along with the event. |

