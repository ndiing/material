## Classes

<dl>
<dt><a href="#MdBadgeComponent">MdBadgeComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Custom element for displaying a badge.</p>
</dd>
<dt><a href="#MdBaseComponent">MdBaseComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Base class for Material Design components.</p>
</dd>
</dl>

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

