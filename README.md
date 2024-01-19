<a name="MdButtonComponent"></a>

## MdButtonComponent
Custom button component that extends LitElement.

**Kind**: global class  
**Emits**: <code>MdButtonComponent#event:custom-event - Fired when a custom event occurs.</code>  
**Element**: md-button  
**Cssproperty**: --md-button-color - Color of the button.  
**Cssproperty**: --md-button-background - Background color of the button.  

* [MdButtonComponent](#MdButtonComponent)
    * [new MdButtonComponent()](#new_MdButtonComponent_new)
    * _instance_
        * [.buttonNative](#MdButtonComponent+buttonNative) ⇒ <code>HTMLButtonElement</code>
        * [.createRenderRoot()](#MdButtonComponent+createRenderRoot) ⇒ <code>Element</code>
        * [.render()](#MdButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MdButtonComponent+disconnectedCallback)
        * [.firstUpdated()](#MdButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdButtonComponent+updated)
        * ["custom-event"](#MdButtonComponent+event_custom-event)
    * _static_
        * [.properties](#MdButtonComponent.properties) : <code>Object</code>

<a name="new_MdButtonComponent_new"></a>

### new MdButtonComponent()
Default constructor for MdButtonComponent.

**Example**  
```js
// Example usage of MdButtonComponent:// Elevated button<md-button ui="elevated" label="Elevated Button"></md-button>// Filled button<md-button ui="filled" label="Filled Button"></md-button>// Filled-tonal button<md-button ui="filled-tonal" label="Filled Tonal Button"></md-button>// Outlined button<md-button ui="outlined" label="Outlined Button"></md-button>// Default button<md-button label="Default Button"></md-button>
```
<a name="MdButtonComponent+buttonNative"></a>

### mdButtonComponent.buttonNative ⇒ <code>HTMLButtonElement</code>
Returns the native button element inside the component.

**Kind**: instance property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>HTMLButtonElement</code> - - The native button element.  
<a name="MdButtonComponent+createRenderRoot"></a>

### mdButtonComponent.createRenderRoot() ⇒ <code>Element</code>
Overrides the default render root to use the custom element itself.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>Element</code> - - The render root of the component.  
<a name="MdButtonComponent+render"></a>

### mdButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the custom button component.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>TemplateResult</code> - - The rendered HTML template.  
<a name="MdButtonComponent+connectedCallback"></a>

### mdButtonComponent.connectedCallback()
Adds the "md-button" class when the component is connected to the DOM.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+disconnectedCallback"></a>

### mdButtonComponent.disconnectedCallback()
Removes the "md-button" class when the component is disconnected from the DOM.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+firstUpdated"></a>

### mdButtonComponent.firstUpdated()
Initializes the state controller when the component is first updated.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+updated"></a>

### mdButtonComponent.updated(_changedProperties)
Handles updates to the "ui" property and adjusts the component's class accordingly.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | The properties that have changed. |

<a name="MdButtonComponent+event_custom-event"></a>

### "custom-event"
Custom event fired by MdButtonComponent.

**Kind**: event emitted by [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| detail | <code>String</code> | Details about the custom event. |

<a name="MdButtonComponent.properties"></a>

### MdButtonComponent.properties : <code>Object</code>
Properties of the custom button component.

**Kind**: static property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of the button. |
| label | <code>String</code> | The label text of the button. |
| icon | <code>String</code> | The icon of the button. |
| ui | <code>String</code> | The UI style of the button. |
| activated | <code>Boolean</code> | Reflects whether the button is activated. |

