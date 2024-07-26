<a name="MDTextFieldComponent"></a>

## MDTextFieldComponent ⇐ <code>MDComponent</code>
{{desc}}

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDTextFieldComponent#event:onTextFieldContainerClick - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldLabelClick - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldMetaClick - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeFocus - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeBlur - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeClick - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeKeydown - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeSelect - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeInput - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeSearch - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeInvalid - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldNativeReset - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldActionClick - {{desc}}</code>, <code>MDTextFieldComponent#event:onTextFieldIconButtonClick - {{desc}}</code>  
**Element**: md-text-field  

* [MDTextFieldComponent](#MDTextFieldComponent) ⇐ <code>MDComponent</code>
    * [new MDTextFieldComponent()](#new_MDTextFieldComponent_new)
    * [.properties](#MDTextFieldComponent+properties)
    * [.renderInput()](#MDTextFieldComponent+renderInput)
    * [.renderTextarea()](#MDTextFieldComponent+renderTextarea)
    * [.renderSelect()](#MDTextFieldComponent+renderSelect)
    * [.renderHidden()](#MDTextFieldComponent+renderHidden)
    * [.renderTextFieldNative()](#MDTextFieldComponent+renderTextFieldNative)
    * [.render()](#MDTextFieldComponent+render)
    * [.connectedCallback()](#MDTextFieldComponent+connectedCallback)
    * [.updated(changedProperties)](#MDTextFieldComponent+updated)
    * [.handleTextFieldContainerClick(event)](#MDTextFieldComponent+handleTextFieldContainerClick)
    * [.handleTextFieldLabelClick(event)](#MDTextFieldComponent+handleTextFieldLabelClick)
    * [.handleTextFieldMetaClick(event)](#MDTextFieldComponent+handleTextFieldMetaClick)
    * [.handleTextFieldNativeFocus(event)](#MDTextFieldComponent+handleTextFieldNativeFocus)
    * [.handleTextFieldNativeBlur(event)](#MDTextFieldComponent+handleTextFieldNativeBlur)
    * [.handleTextFieldNativeClick(event)](#MDTextFieldComponent+handleTextFieldNativeClick)
    * [.handleTextFieldNativeKeydown(event)](#MDTextFieldComponent+handleTextFieldNativeKeydown)
    * [.handleTextFieldNativeSelect(event)](#MDTextFieldComponent+handleTextFieldNativeSelect)
    * [.handleTextFieldNativeInput(event)](#MDTextFieldComponent+handleTextFieldNativeInput)
    * [.validate()](#MDTextFieldComponent+validate)
    * [.handleTextFieldNativeSearch(event)](#MDTextFieldComponent+handleTextFieldNativeSearch)
    * [.handleTextFieldNativeInvalid(event)](#MDTextFieldComponent+handleTextFieldNativeInvalid)
    * [.handleTextFieldNativeReset(event)](#MDTextFieldComponent+handleTextFieldNativeReset)
    * [.handleTextFieldActionClick(event)](#MDTextFieldComponent+handleTextFieldActionClick)
    * [.handleTextFieldIconButtonClick(event)](#MDTextFieldComponent+handleTextFieldIconButtonClick)

<a name="new_MDTextFieldComponent_new"></a>

### new MDTextFieldComponent()
{{desc}}

<a name="MDTextFieldComponent+properties"></a>

### mdTextFieldComponent.properties
{{desc}}

**Kind**: instance property of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| tooltip | <code>String</code> | {{desc}} |
| label | <code>String</code> | {{desc}} |
| icon | <code>String</code> | {{desc}} |
| prefix | <code>String</code> | {{desc}} |
| suffix | <code>String</code> | {{desc}} |
| actions | <code>Array</code> | {{desc}} |
| text | <code>String</code> | {{desc}} |
| type | <code>String</code> | {{desc}} |
| placeholder | <code>String</code> | {{desc}} |
| name | <code>String</code> | {{desc}} |
| value | <code>String</code> | {{desc}} |
| min | <code>Number</code> | {{desc}} |
| max | <code>Number</code> | {{desc}} |
| cols | <code>Number</code> | {{desc}} |
| rows | <code>Number</code> | {{desc}} |
| minLength | <code>Number</code> | {{desc}} |
| maxLength | <code>Number</code> | {{desc}} |
| pattern | <code>String</code> | {{desc}} |
| required | <code>Boolean</code> | {{desc}} |
| readOnly | <code>Boolean</code> | {{desc}} |
| disabled | <code>Boolean</code> | {{desc}} |
| autocomplete | <code>String</code> | {{desc}} |
| multiple | <code>Boolean</code> | {{desc}} |
| options | <code>Array</code> | {{desc}} |
| validationMessage | <code>Boolean</code> | {{desc}} |
| focused | <code>Boolean</code> | {{desc}} |
| variant | <code>String</code> | {{desc}} |
| mask | <code>String</code> | {{desc}} |

<a name="MDTextFieldComponent+renderInput"></a>

### mdTextFieldComponent.renderInput()
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+renderTextarea"></a>

### mdTextFieldComponent.renderTextarea()
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+renderSelect"></a>

### mdTextFieldComponent.renderSelect()
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+renderHidden"></a>

### mdTextFieldComponent.renderHidden()
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+renderTextFieldNative"></a>

### mdTextFieldComponent.renderTextFieldNative()
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+render"></a>

### mdTextFieldComponent.render()
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+connectedCallback"></a>

### mdTextFieldComponent.connectedCallback()
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+updated"></a>

### mdTextFieldComponent.updated(changedProperties)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldContainerClick"></a>

### mdTextFieldComponent.handleTextFieldContainerClick(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldLabelClick"></a>

### mdTextFieldComponent.handleTextFieldLabelClick(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldMetaClick"></a>

### mdTextFieldComponent.handleTextFieldMetaClick(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldNativeFocus"></a>

### mdTextFieldComponent.handleTextFieldNativeFocus(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldNativeBlur"></a>

### mdTextFieldComponent.handleTextFieldNativeBlur(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldNativeClick"></a>

### mdTextFieldComponent.handleTextFieldNativeClick(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldNativeKeydown"></a>

### mdTextFieldComponent.handleTextFieldNativeKeydown(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldNativeSelect"></a>

### mdTextFieldComponent.handleTextFieldNativeSelect(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldNativeInput"></a>

### mdTextFieldComponent.handleTextFieldNativeInput(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+validate"></a>

### mdTextFieldComponent.validate()
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+handleTextFieldNativeSearch"></a>

### mdTextFieldComponent.handleTextFieldNativeSearch(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldNativeInvalid"></a>

### mdTextFieldComponent.handleTextFieldNativeInvalid(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldNativeReset"></a>

### mdTextFieldComponent.handleTextFieldNativeReset(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldActionClick"></a>

### mdTextFieldComponent.handleTextFieldActionClick(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

<a name="MDTextFieldComponent+handleTextFieldIconButtonClick"></a>

### mdTextFieldComponent.handleTextFieldIconButtonClick(event)
{{desc}}

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Any</code> | {{desc}} |

