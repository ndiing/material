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

