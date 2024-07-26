<a name="MDEmojiPickerComponent"></a>

## MDEmojiPickerComponent ⇐ <code>MDPaneComponent</code>
{{desc}}

**Kind**: global class  
**Extends**: <code>MDPaneComponent</code>  
**Emits**: <code>MDEmojiPickerComponent#event:onScrimClick - {{desc}}</code>, <code>MDEmojiPickerComponent#event:onEmojiPickerTextFieldNativeInput - {{desc}}</code>, <code>MDEmojiPickerComponent#event:onEmojiPickerTabsItemClick - {{desc}}</code>, <code>MDEmojiPickerComponent#event:onEmojiPickerViewportVirtualScroll - {{desc}}</code>, <code>MDEmojiPickerComponent#event:onEmojiPickerGridColumnClick - {{desc}}</code>, <code>MDEmojiPickerComponent#event:onEmojiPickerButtonClick - {{desc}}</code>, <code>MDEmojiPickerComponent#event:onEmojiPickerButtonCancelClick - {{desc}}</code>, <code>MDEmojiPickerComponent#event:onEmojiPickerButtonOkClick - {{desc}}</code>  
**Element**: md-emoji-picker  

* [MDEmojiPickerComponent](#MDEmojiPickerComponent) ⇐ <code>MDPaneComponent</code>
    * [.properties](#MDEmojiPickerComponent+properties)
    * [.childNodes_](#MDEmojiPickerComponent+childNodes_)
    * [.childNodes_](#MDEmojiPickerComponent+childNodes_)
    * [.leadingActions](#MDEmojiPickerComponent+leadingActions)
    * [.actions](#MDEmojiPickerComponent+actions)
    * [.emojiPickerTabs](#MDEmojiPickerComponent+emojiPickerTabs)
    * [.emojiPickerTabs](#MDEmojiPickerComponent+emojiPickerTabs)
    * [.renderMain()](#MDEmojiPickerComponent+renderMain)
    * [.connectedCallback()](#MDEmojiPickerComponent+connectedCallback)
    * [.disconnectedCallback()](#MDEmojiPickerComponent+disconnectedCallback)
    * [.generateTabsAndRows(data, tabs)](#MDEmojiPickerComponent+generateTabsAndRows)
    * [.showModal(button, options)](#MDEmojiPickerComponent+showModal)
    * [.show(button, options)](#MDEmojiPickerComponent+show)
    * [.updatePosition(button, options)](#MDEmojiPickerComponent+updatePosition)
    * [.handleEmojiPickerTextFieldNativeInput(event)](#MDEmojiPickerComponent+handleEmojiPickerTextFieldNativeInput)
    * [.handleEmojiPickerTabsItemClick(event)](#MDEmojiPickerComponent+handleEmojiPickerTabsItemClick)
    * [.updateEmojiPickerTabsIndicator(data)](#MDEmojiPickerComponent+updateEmojiPickerTabsIndicator)
    * [.handleEmojiPickerViewportVirtualScroll(event)](#MDEmojiPickerComponent+handleEmojiPickerViewportVirtualScroll)
    * [.handleEmojiPickerGridColumnClick(event)](#MDEmojiPickerComponent+handleEmojiPickerGridColumnClick)
    * [.handleCardButtonClick(event)](#MDEmojiPickerComponent+handleCardButtonClick)
    * [.handleEmojiPickerButtonCancelClick(event)](#MDEmojiPickerComponent+handleEmojiPickerButtonCancelClick)
    * [.handleEmojiPickerButtonOkClick(event)](#MDEmojiPickerComponent+handleEmojiPickerButtonOkClick)

<a name="MDEmojiPickerComponent+properties"></a>

### mdEmojiPickerComponent.properties
{{desc}}

**Kind**: instance property of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  
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
| tabs | <code>Object</code> | {{desc}} |
| rows | <code>Array</code> | {{desc}} |

<a name="MDEmojiPickerComponent+childNodes_"></a>

### mdEmojiPickerComponent.childNodes\_
{{desc}}

**Kind**: instance property of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  
<a name="MDEmojiPickerComponent+childNodes_"></a>

### mdEmojiPickerComponent.childNodes\_
{{desc}}

**Kind**: instance property of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+leadingActions"></a>

### mdEmojiPickerComponent.leadingActions
{{desc}}

**Kind**: instance property of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  
<a name="MDEmojiPickerComponent+actions"></a>

### mdEmojiPickerComponent.actions
{{desc}}

**Kind**: instance property of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  
<a name="MDEmojiPickerComponent+emojiPickerTabs"></a>

### mdEmojiPickerComponent.emojiPickerTabs
{{desc}}

**Kind**: instance property of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  
<a name="MDEmojiPickerComponent+emojiPickerTabs"></a>

### mdEmojiPickerComponent.emojiPickerTabs
{{desc}}

**Kind**: instance property of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+renderMain"></a>

### mdEmojiPickerComponent.renderMain()
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  
<a name="MDEmojiPickerComponent+connectedCallback"></a>

### mdEmojiPickerComponent.connectedCallback()
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  
<a name="MDEmojiPickerComponent+disconnectedCallback"></a>

### mdEmojiPickerComponent.disconnectedCallback()
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  
<a name="MDEmojiPickerComponent+generateTabsAndRows"></a>

### mdEmojiPickerComponent.generateTabsAndRows(data, tabs)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Any</code> | = [] - {{desc}} |
| tabs | <code>Any</code> | = {} - {{desc}} |

<a name="MDEmojiPickerComponent+showModal"></a>

### mdEmojiPickerComponent.showModal(button, options)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>Any</code> | {{desc}} |
| options | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+show"></a>

### mdEmojiPickerComponent.show(button, options)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>Any</code> | {{desc}} |
| options | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+updatePosition"></a>

### mdEmojiPickerComponent.updatePosition(button, options)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>Any</code> | {{desc}} |
| options | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+handleEmojiPickerTextFieldNativeInput"></a>

### mdEmojiPickerComponent.handleEmojiPickerTextFieldNativeInput(event)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+handleEmojiPickerTabsItemClick"></a>

### mdEmojiPickerComponent.handleEmojiPickerTabsItemClick(event)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+updateEmojiPickerTabsIndicator"></a>

### mdEmojiPickerComponent.updateEmojiPickerTabsIndicator(data)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+handleEmojiPickerViewportVirtualScroll"></a>

### mdEmojiPickerComponent.handleEmojiPickerViewportVirtualScroll(event)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+handleEmojiPickerGridColumnClick"></a>

### mdEmojiPickerComponent.handleEmojiPickerGridColumnClick(event)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+handleCardButtonClick"></a>

### mdEmojiPickerComponent.handleCardButtonClick(event)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+handleEmojiPickerButtonCancelClick"></a>

### mdEmojiPickerComponent.handleEmojiPickerButtonCancelClick(event)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDEmojiPickerComponent+handleEmojiPickerButtonOkClick"></a>

### mdEmojiPickerComponent.handleEmojiPickerButtonOkClick(event)
{{desc}}

**Kind**: instance method of [<code>MDEmojiPickerComponent</code>](#MDEmojiPickerComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

