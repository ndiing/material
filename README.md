## Modules

<dl>
<dt><a href="#module_{MdButtonComponent}">{MdButtonComponent}</a></dt>
<dd><p>Exports MdButtonComponent for external use.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#MdBadgeComponent">MdBadgeComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Custom element for displaying a badge.</p>
</dd>
<dt><a href="#MdBaseComponent">MdBaseComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Base class for Material Design components.</p>
</dd>
<dt><a href="#MdButtonComponent">MdButtonComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Custom element representing a material design button.</p>
</dd>
</dl>

<a name="module_{MdButtonComponent}"></a>

## {MdButtonComponent}
Exports MdButtonComponent for external use.

<a name="MdBadgeComponent"></a>

## MdBadgeComponent ⇐ <code>LitElement</code>
Custom element for displaying a badge.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdBadgeComponent](#MdBadgeComponent) ⇐ <code>LitElement</code>
    * _instance_
        * [.createRenderRoot()](#MdBadgeComponent+createRenderRoot) ⇒ <code>this</code>
        * [.render()](#MdBadgeComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdBadgeComponent+connectedCallback)
        * [.disconnectedCallback()](#MdBadgeComponent+disconnectedCallback)
        * [.firstUpdated()](#MdBadgeComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdBadgeComponent+updated)
    * _static_
        * [.properties](#MdBadgeComponent.properties)

<a name="MdBadgeComponent+createRenderRoot"></a>

### mdBadgeComponent.createRenderRoot() ⇒ <code>this</code>
Overrides the default render root to be the element itself.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
**Returns**: <code>this</code> - The current instance for chaining.  
<a name="MdBadgeComponent+render"></a>

### mdBadgeComponent.render() ⇒ <code>TemplateResult</code>
Renders the badge based on the label and limit.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
**Returns**: <code>TemplateResult</code> - The HTML template result.  
<a name="MdBadgeComponent+connectedCallback"></a>

### mdBadgeComponent.connectedCallback()
Adds the "md-badge" class when connected to the DOM.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
<a name="MdBadgeComponent+disconnectedCallback"></a>

### mdBadgeComponent.disconnectedCallback()
Removes the "md-badge" class when disconnected from the DOM.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
<a name="MdBadgeComponent+firstUpdated"></a>

### mdBadgeComponent.firstUpdated()
Lifecycle method called after the element's first update.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
<a name="MdBadgeComponent+updated"></a>

### mdBadgeComponent.updated(_changedProperties)
Lifecycle method called when the element is updated.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdBadgeComponent.properties"></a>

### MdBadgeComponent.properties
Static properties for the component.

**Kind**: static property of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>number</code> | The label to be displayed on the badge. |
| limit | <code>number</code> | The limit for the badge label. |

<a name="MdBaseComponent"></a>

## MdBaseComponent ⇐ <code>LitElement</code>
Base class for Material Design components.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdBaseComponent](#MdBaseComponent) ⇐ <code>LitElement</code>
    * [new MdBaseComponent()](#new_MdBaseComponent_new)
    * _instance_
        * [.createRenderRoot()](#MdBaseComponent+createRenderRoot) ⇒ <code>this</code>
        * [.render()](#MdBaseComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdBaseComponent+connectedCallback)
        * [.disconnectedCallback()](#MdBaseComponent+disconnectedCallback)
        * [.firstUpdated()](#MdBaseComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdBaseComponent+updated)
        * ["change"](#MdBaseComponent+event_change)
    * _static_
        * [.properties](#MdBaseComponent.properties)

<a name="new_MdBaseComponent_new"></a>

### new MdBaseComponent()
Constructor for MdBaseComponent.

<a name="MdBaseComponent+createRenderRoot"></a>

### mdBaseComponent.createRenderRoot() ⇒ <code>this</code>
Overrides the default render root to use the component itself.

**Kind**: instance method of [<code>MdBaseComponent</code>](#MdBaseComponent)  
**Returns**: <code>this</code> - The instance of the element.  
<a name="MdBaseComponent+render"></a>

### mdBaseComponent.render() ⇒ <code>TemplateResult</code>
Renders the component template.

**Kind**: instance method of [<code>MdBaseComponent</code>](#MdBaseComponent)  
**Returns**: <code>TemplateResult</code> - The HTML template.  
<a name="MdBaseComponent+connectedCallback"></a>

### mdBaseComponent.connectedCallback()
Lifecycle callback when the element is added to the DOM.

**Kind**: instance method of [<code>MdBaseComponent</code>](#MdBaseComponent)  
<a name="MdBaseComponent+disconnectedCallback"></a>

### mdBaseComponent.disconnectedCallback()
Lifecycle callback when the element is removed from the DOM.

**Kind**: instance method of [<code>MdBaseComponent</code>](#MdBaseComponent)  
<a name="MdBaseComponent+firstUpdated"></a>

### mdBaseComponent.firstUpdated()
Lifecycle callback when the element's first update occurs.

**Kind**: instance method of [<code>MdBaseComponent</code>](#MdBaseComponent)  
<a name="MdBaseComponent+updated"></a>

### mdBaseComponent.updated(_changedProperties)
Lifecycle callback when the element is updated.

**Kind**: instance method of [<code>MdBaseComponent</code>](#MdBaseComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | Map of changed properties. |

<a name="MdBaseComponent+event_change"></a>

### "change"
Event fired when a change occurs.

**Kind**: event emitted by [<code>MdBaseComponent</code>](#MdBaseComponent)  
<a name="MdBaseComponent.properties"></a>

### MdBaseComponent.properties
Static getter for defining properties on the class.

**Kind**: static property of [<code>MdBaseComponent</code>](#MdBaseComponent)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| properties | <code>Object</code> | The properties object. |
| properties.label | <code>String</code> | The label for the component. |

<a name="MdButtonComponent"></a>

## MdButtonComponent ⇐ <code>LitElement</code>
Custom element representing a material design button.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdButtonComponent](#MdButtonComponent) ⇐ <code>LitElement</code>
    * [new MdButtonComponent()](#new_MdButtonComponent_new)
    * _instance_
        * [.buttonNative](#MdButtonComponent+buttonNative)
        * [.createRenderRoot()](#MdButtonComponent+createRenderRoot) ⇒ [<code>MdButtonComponent</code>](#MdButtonComponent)
        * [.render()](#MdButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MdButtonComponent+disconnectedCallback)
        * [.firstUpdated()](#MdButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdButtonComponent+updated)
    * _static_
        * [.properties](#MdButtonComponent.properties)

<a name="new_MdButtonComponent_new"></a>

### new MdButtonComponent()
Constructor for MdButtonComponent.

<a name="MdButtonComponent+buttonNative"></a>

### mdButtonComponent.buttonNative
Gets the native button element inside the component.

**Kind**: instance property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| buttonNative | <code>HTMLElement</code> | The native button element. |

<a name="MdButtonComponent+createRenderRoot"></a>

### mdButtonComponent.createRenderRoot() ⇒ [<code>MdButtonComponent</code>](#MdButtonComponent)
Overrides the default render root to be the element itself.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: [<code>MdButtonComponent</code>](#MdButtonComponent) - The instance of MdButtonComponent.  
<a name="MdButtonComponent+render"></a>

### mdButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the HTML template for the MdButtonComponent.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>TemplateResult</code> - The HTML template for the component.  
<a name="MdButtonComponent+connectedCallback"></a>

### mdButtonComponent.connectedCallback()
Adds "md-button" class to the element when connected to the DOM.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+disconnectedCallback"></a>

### mdButtonComponent.disconnectedCallback()
Removes "md-button" class when disconnected from the DOM.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+firstUpdated"></a>

### mdButtonComponent.firstUpdated()
Initializes the MdStateController when the component is first updated.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+updated"></a>

### mdButtonComponent.updated(_changedProperties)
Handles updates to the "ui" property and updates the component's class accordingly.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | The properties that have changed. |

<a name="MdButtonComponent.properties"></a>

### MdButtonComponent.properties
Properties for the MdButtonComponent.

**Kind**: static property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of the button (e.g., "button", "submit", "reset"). |
| label | <code>String</code> | The label text for the button. |
| icon | <code>String</code> | The icon content for the button. |
| ui | <code>String</code> | The UI style for the button ("elevated", "filled", "filled-tonal", "outlined"). |
| activated | <code>Boolean</code> | Reflects whether the button is activated or not. |

