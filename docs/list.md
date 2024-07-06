# MDListComponent

The `MDListComponent` interface represents a `<md-list>` element in the DOM.
A custom list component that extends MDComponent to display a list of items with various selection modes.



### Events

| Event | Description |
|-------|-------------|
| `MDListComponent#event:onListItemClick - Fires when a list item is clicked.` | |
| `MDListComponent#event:handleListKeydown - Fires when a keydown event occurs on the list.` | |
| `MDListComponent#event:onListItemSelectionStart - Fires when a list item selection starts.` | |
| `MDListComponent#event:onListItemSelection - Fires when a list item is selected.` | |
| `MDListComponent#event:onListItemSelectionEnd - Fires when a list item selection ends.` | |
| `MDListComponent#event:onListItemCheckboxNativeInput - Fires when a checkbox native input event occurs on a list item.` | |
| `MDListComponent#event:onListItemRadioButtonNativeInput - Fires when a radio button native input event occurs on a list item.` | |
| `MDListComponent#event:onListItemSwitchNativeInput - Fires when a switch native input event occurs on a list item.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `list` | (Array) | The list of items to be rendered in the list component. |
| `selection` | (Boolean) | Enables or disables selection mode. |
| `rangeSelection` | (Boolean) | Enables or disables range selection mode. |
| `multiSelection` | (Boolean) | Enables or disables multi-selection mode. |
| `singleSelection` | (Boolean) | Enables or disables single-selection mode. |
| `allSelection` | (Boolean) | Enables or disables the ability to select all items. |






# select

Selects a single item in the list.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | (Object) | The data item to select. |


# selectToggle

Toggles the selection state of an item in the list for multi-selection.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | (Object) | The data item to toggle selection. |


# selectRange

Selects a range of items in the list from the last selected item to the current item.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | (Object) | The data item to start the range selection. |


# selectAll

Selects all items in the list.







