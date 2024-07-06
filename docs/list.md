<a name="MDListComponent"></a>

## MDListComponent ⇐ <code>MDComponent</code>
A custom list component that extends MDComponent to display a list of items with various selection modes.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDListComponent#event:onListItemClick - Fires when a list item is clicked.</code>, <code>MDListComponent#event:handleListKeydown - Fires when a keydown event occurs on the list.</code>, <code>MDListComponent#event:onListItemSelectionStart - Fires when a list item selection starts.</code>, <code>MDListComponent#event:onListItemSelection - Fires when a list item is selected.</code>, <code>MDListComponent#event:onListItemSelectionEnd - Fires when a list item selection ends.</code>, <code>MDListComponent#event:onListItemCheckboxNativeInput - Fires when a checkbox native input event occurs on a list item.</code>, <code>MDListComponent#event:onListItemRadioButtonNativeInput - Fires when a radio button native input event occurs on a list item.</code>, <code>MDListComponent#event:onListItemSwitchNativeInput - Fires when a switch native input event occurs on a list item.</code>  
**Tagname**: md-list  

* [MDListComponent](#MDListComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDListComponent+properties)
    * [.select(data)](#MDListComponent+select)
    * [.selectToggle(data)](#MDListComponent+selectToggle)
    * [.selectRange(data)](#MDListComponent+selectRange)
    * [.selectAll()](#MDListComponent+selectAll)

<a name="MDListComponent+properties"></a>

### mdListComponent.properties
**Kind**: instance property of [<code>MDListComponent</code>](#MDListComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The list of items to be rendered in the list component. |
| selection | <code>Boolean</code> | Enables or disables selection mode. |
| rangeSelection | <code>Boolean</code> | Enables or disables range selection mode. |
| multiSelection | <code>Boolean</code> | Enables or disables multi-selection mode. |
| singleSelection | <code>Boolean</code> | Enables or disables single-selection mode. |
| allSelection | <code>Boolean</code> | Enables or disables the ability to select all items. |

<a name="MDListComponent+select"></a>

### mdListComponent.select(data)
Selects a single item in the list.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data item to select. |

<a name="MDListComponent+selectToggle"></a>

### mdListComponent.selectToggle(data)
Toggles the selection state of an item in the list for multi-selection.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data item to toggle selection. |

<a name="MDListComponent+selectRange"></a>

### mdListComponent.selectRange(data)
Selects a range of items in the list from the last selected item to the current item.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data item to start the range selection. |

<a name="MDListComponent+selectAll"></a>

### mdListComponent.selectAll()
Selects all items in the list.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
