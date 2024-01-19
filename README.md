<a name="MdButtonComponent"></a>

## MdButtonComponent
Custom button component with Material Design styling.

**Kind**: global class  
**Element**: md-button  

* [MdButtonComponent](#MdButtonComponent)
    * [new MdButtonComponent()](#new_MdButtonComponent_new)
    * _instance_
        * [.buttonNative](#MdButtonComponent+buttonNative) ⇒ <code>HTMLButtonElement</code>
        * [.createRenderRoot()](#MdButtonComponent+createRenderRoot) ⇒ <code>this</code>
        * [.render()](#MdButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MdButtonComponent+disconnectedCallback)
        * [.firstUpdated()](#MdButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdButtonComponent+updated)
    * _static_
        * [.properties](#MdButtonComponent.properties)

<a name="new_MdButtonComponent_new"></a>

### new MdButtonComponent()
Constructor for the `md-button` element.

**Example**  
```js
<md-button ui="elevated" icon="image" label="Label"></md-button><md-button ui="filled" icon="image" label="Label"></md-button><md-button ui="filled-tonal" icon="image" label="Label"></md-button><md-button ui="outlined" icon="image" label="Label"></md-button><md-button icon="image" label="Label"></md-button>
```
<a name="MdButtonComponent+buttonNative"></a>

### mdButtonComponent.buttonNative ⇒ <code>HTMLButtonElement</code>
Returns the native button element inside the component.

**Kind**: instance property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>HTMLButtonElement</code> - The native button element.  
<a name="MdButtonComponent+createRenderRoot"></a>

### mdButtonComponent.createRenderRoot() ⇒ <code>this</code>
Overrides the default render root to use the element itself.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>this</code> - The element itself as the render root.  
<a name="MdButtonComponent+render"></a>

### mdButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the button element with optional icon and label.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdButtonComponent+connectedCallback"></a>

### mdButtonComponent.connectedCallback()
Callback when the element is connected to the DOM.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+disconnectedCallback"></a>

### mdButtonComponent.disconnectedCallback()
Callback when the element is disconnected from the DOM.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+firstUpdated"></a>

### mdButtonComponent.firstUpdated()
Callback when the element is first updated.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+updated"></a>

### mdButtonComponent.updated(_changedProperties)
Callback when the element is updated.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | Map of changed properties. |

<a name="MdButtonComponent.properties"></a>

### MdButtonComponent.properties
Properties of the `md-button` element.

**Kind**: static property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of the button. |
| label | <code>String</code> | The label text of the button. |
| icon | <code>String</code> | The icon to be displayed in the button. |
| ui | <code>String</code> | The UI style of the button (e.g., "elevated", "filled", "filled-tonal", "outlined"). |
| activated | <code>Boolean</code> | Indicates whether the button is activated or not. |

