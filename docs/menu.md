<a name="MDMenuComponent"></a>

## MDMenuComponent ⇐ <code>MDPaneComponent</code>
{{desc}}

**Kind**: global class  
**Extends**: <code>MDPaneComponent</code>  
**Emits**: <code>MDMenuComponent#event:onScrimClick - {{desc}}</code>, <code>MDMenuComponent#event:onMenuListSelection - {{desc}}</code>, <code>MDMenuComponent#event:onMenuListItemEnter - {{desc}}</code>, <code>MDMenuComponent#event:onMenuViewportVirtualScroll - {{desc}}</code>, <code>MDMenuComponent#event:onMenuViewportVirtualScrollInitialized - {{desc}}</code>, <code>MDMenuComponent#event:onMenuListItemClick - {{desc}}</code>  
**Element**: md-menu  

* [MDMenuComponent](#MDMenuComponent) ⇐ <code>MDPaneComponent</code>
    * [new MDMenuComponent()](#new_MDMenuComponent_new)
    * [.properties](#MDMenuComponent+properties)
    * [.menuList](#MDMenuComponent+menuList)
    * [.childNodes_](#MDMenuComponent+childNodes_)
    * [.childNodes_](#MDMenuComponent+childNodes_)
    * [.connectedCallback()](#MDMenuComponent+connectedCallback)
    * [.disconnectedCallback()](#MDMenuComponent+disconnectedCallback)
    * [.updated(changedProperties)](#MDMenuComponent+updated)
    * [.updateStore()](#MDMenuComponent+updateStore)
    * [.updateVirtual()](#MDMenuComponent+updateVirtual)
    * [.showModal(button, options)](#MDMenuComponent+showModal)
    * [.show(button, options, modal)](#MDMenuComponent+show)
    * [.updatePosition(button, options)](#MDMenuComponent+updatePosition)
    * [.filter(value)](#MDMenuComponent+filter)
    * [.select(data)](#MDMenuComponent+select)
    * [.activate(offset, selected)](#MDMenuComponent+activate)
    * [.handleMenuViewportVirtualScroll(event)](#MDMenuComponent+handleMenuViewportVirtualScroll)
    * [.handleMenuListItemClick(event)](#MDMenuComponent+handleMenuListItemClick)

<a name="new_MDMenuComponent_new"></a>

### new MDMenuComponent()
{{desc}}

<a name="MDMenuComponent+properties"></a>

### mdMenuComponent.properties
{{desc}}

**Kind**: instance property of [<code>MDMenuComponent</code>](#MDMenuComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| tooltip | <code>String</code> | {{desc}} |
| variant | <code>String</code> | {{desc}} |
| leadingActions | <code>Array</code> | {{desc}} |
| headline | <code>String</code> | {{desc}} |
| subhead | <code>String</code> | {{desc}} |
| trailingActions | <code>Array</code> | {{desc}} |
| actions | <code>Array</code> | {{desc}} |
| open | <code>Boolean</code> | {{desc}} |
| items | <code>Array</code> | {{desc}} |
| rowHeight | <code>Number</code> | {{desc}} |
| maxRows | <code>Number</code> | {{desc}} |

<a name="MDMenuComponent+menuList"></a>

### mdMenuComponent.menuList
{{desc}}

**Kind**: instance property of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+childNodes_"></a>

### mdMenuComponent.childNodes\_
{{desc}}

**Kind**: instance property of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+childNodes_"></a>

### mdMenuComponent.childNodes\_
{{desc}}

**Kind**: instance property of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | {{desc}} |

<a name="MDMenuComponent+connectedCallback"></a>

### mdMenuComponent.connectedCallback()
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+disconnectedCallback"></a>

### mdMenuComponent.disconnectedCallback()
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+updated"></a>

### mdMenuComponent.updated(changedProperties)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Any</code> | {{desc}} |

<a name="MDMenuComponent+updateStore"></a>

### mdMenuComponent.updateStore()
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+updateVirtual"></a>

### mdMenuComponent.updateVirtual()
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+showModal"></a>

### mdMenuComponent.showModal(button, options)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>Any</code> | {{desc}} |
| options | <code>Any</code> | {{desc}} |

<a name="MDMenuComponent+show"></a>

### mdMenuComponent.show(button, options, modal)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>Any</code> | {{desc}} |
| options | <code>Any</code> | {{desc}} |
| modal | <code>Any</code> | {{desc}} |

<a name="MDMenuComponent+updatePosition"></a>

### mdMenuComponent.updatePosition(button, options)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>Any</code> | = this.popperButton - {{desc}} |
| options | <code>Any</code> | = this.popperOptions - {{desc}} |

<a name="MDMenuComponent+filter"></a>

### mdMenuComponent.filter(value)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | {{desc}} |

<a name="MDMenuComponent+select"></a>

### mdMenuComponent.select(data)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Any</code> | {{desc}} |

<a name="MDMenuComponent+activate"></a>

### mdMenuComponent.activate(offset, selected)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>Any</code> | {{desc}} |
| selected | <code>Any</code> | {{desc}} |

<a name="MDMenuComponent+handleMenuViewportVirtualScroll"></a>

### mdMenuComponent.handleMenuViewportVirtualScroll(event)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDMenuComponent+handleMenuListItemClick"></a>

### mdMenuComponent.handleMenuListItemClick(event)
{{desc}}

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

