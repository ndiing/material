<a name="MDDataTableComponent"></a>

## MDDataTableComponent ⇐ <code>MDCardComponent</code>
{{desc}}

**Kind**: global class  
**Extends**: <code>MDCardComponent</code>  
**Emits**: <code>MDDataTableComponent#event:onScrimClick - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableTextFieldNativeSearch - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellDragStart - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellDrag - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellDragEnd - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellResizeStart - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellResize - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellResizeEnd - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellPointerenter - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellPointerleave - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellClick - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableColumnCellCheckboxNativeInput - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableRowCellCheckboxNativeInput - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableRowClick - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTableKeydown - {{desc}}</code>, <code>MDDataTableComponent#event:onDataTablePaginationChange - {{desc}}</code>  
**Element**: md-data-table  

* [MDDataTableComponent](#MDDataTableComponent) ⇐ <code>MDCardComponent</code>
    * [new MDDataTableComponent()](#new_MDDataTableComponent_new)
    * [.properties](#MDDataTableComponent+properties)
    * [.childNodes_](#MDDataTableComponent+childNodes_)
    * [.childNodes_](#MDDataTableComponent+childNodes_)
    * [.headline](#MDDataTableComponent+headline)
    * [.trailingActions](#MDDataTableComponent+trailingActions)
    * [.actions](#MDDataTableComponent+actions)
    * [.indeterminate](#MDDataTableComponent+indeterminate)
    * [.styleStickyCheckboxSelection()](#MDDataTableComponent+styleStickyCheckboxSelection)
    * [.styleDataTableColumnCell(column)](#MDDataTableComponent+styleDataTableColumnCell)
    * [.styleDataTableRowCell(column)](#MDDataTableComponent+styleDataTableRowCell)
    * [.styleDataTableFooterCell(column)](#MDDataTableComponent+styleDataTableFooterCell)
    * [.classDataTableColumnCell(column)](#MDDataTableComponent+classDataTableColumnCell)
    * [.classDataTableRowCell(column)](#MDDataTableComponent+classDataTableRowCell)
    * [.classDataTableFooterCell(column)](#MDDataTableComponent+classDataTableFooterCell)
    * [.disconnectedCallback()](#MDDataTableComponent+disconnectedCallback)
    * [.updateVirtual()](#MDDataTableComponent+updateVirtual)
    * [.updateStore()](#MDDataTableComponent+updateStore)
    * [.updateColumns()](#MDDataTableComponent+updateColumns)
    * [.select(data)](#MDDataTableComponent+select)
    * [.selectToggle(data)](#MDDataTableComponent+selectToggle)
    * [.selectRange(data)](#MDDataTableComponent+selectRange)
    * [.selectAll(selected)](#MDDataTableComponent+selectAll)

<a name="new_MDDataTableComponent_new"></a>

### new MDDataTableComponent()
{{desc}}

<a name="MDDataTableComponent+properties"></a>

### mdDataTableComponent.properties
{{desc}}

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
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
| columns | <code>Array</code> | {{desc}} |
| rows | <code>Array</code> | {{desc}} |
| footer | <code>Array</code> | {{desc}} |
| stickyHeader | <code>Boolean</code> | {{desc}} |
| stickyFooter | <code>Boolean</code> | {{desc}} |
| checkboxSelection | <code>Boolean</code> | {{desc}} |
| stickyCheckboxSelection | <code>Boolean</code> | {{desc}} |
| rangeSelection | <code>Boolean</code> | {{desc}} |
| multiSelection | <code>Boolean</code> | {{desc}} |
| singleSelection | <code>Boolean</code> | {{desc}} |
| allSelection | <code>Boolean</code> | {{desc}} |
| toolbarItems | <code>Array</code> | {{desc}} |

<a name="MDDataTableComponent+childNodes_"></a>

### mdDataTableComponent.childNodes\_
{{desc}}

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+childNodes_"></a>

### mdDataTableComponent.childNodes\_
{{desc}}

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+headline"></a>

### mdDataTableComponent.headline
{{desc}}

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+trailingActions"></a>

### mdDataTableComponent.trailingActions
{{desc}}

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+actions"></a>

### mdDataTableComponent.actions
{{desc}}

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+indeterminate"></a>

### mdDataTableComponent.indeterminate
{{desc}}

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+styleStickyCheckboxSelection"></a>

### mdDataTableComponent.styleStickyCheckboxSelection()
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+styleDataTableColumnCell"></a>

### mdDataTableComponent.styleDataTableColumnCell(column)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+styleDataTableRowCell"></a>

### mdDataTableComponent.styleDataTableRowCell(column)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+styleDataTableFooterCell"></a>

### mdDataTableComponent.styleDataTableFooterCell(column)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+classDataTableColumnCell"></a>

### mdDataTableComponent.classDataTableColumnCell(column)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+classDataTableRowCell"></a>

### mdDataTableComponent.classDataTableRowCell(column)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+classDataTableFooterCell"></a>

### mdDataTableComponent.classDataTableFooterCell(column)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+disconnectedCallback"></a>

### mdDataTableComponent.disconnectedCallback()
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+updateVirtual"></a>

### mdDataTableComponent.updateVirtual()
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+updateStore"></a>

### mdDataTableComponent.updateStore()
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+updateColumns"></a>

### mdDataTableComponent.updateColumns()
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+select"></a>

### mdDataTableComponent.select(data)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+selectToggle"></a>

### mdDataTableComponent.selectToggle(data)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+selectRange"></a>

### mdDataTableComponent.selectRange(data)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Any</code> | {{desc}} |

<a name="MDDataTableComponent+selectAll"></a>

### mdDataTableComponent.selectAll(selected)
{{desc}}

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| selected | <code>Any</code> | <code>true</code> | = true - {{desc}} |

