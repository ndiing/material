# MDTreeComponent

The `MDTreeComponent` interface represents a `<md-tree>` element in the DOM.
A custom tree component that extends MDComponent to display a tree structure with various variants.



### Events

| Event | Description |
|-------|-------------|
| `MDTreeComponent#event:onTreeItemClick - Fires when a tree item is clicked.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `list` | (Array) | The list of tree items to be rendered. |
| `variant` | (String) | The variant of the tree component (e.g., &quot;plain&quot;, &quot;accordion&quot;, &quot;tree&quot;, &quot;level&quot;). |






# getList

Recursively retrieves the list of children from the given list of items.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `list` | (Array) | The list of items to retrieve children from. |

#### Returns

| Type | Description |
|------|-------------|
| Array,undefined | The list of children, if any. |

# setList

Recursively sets the list of items with the appropriate properties.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `list` | (Array) | The list of items to set. |
| `indent` | (number) | The indent level of the items. |

#### Returns

| Type | Description |
|------|-------------|
| Object | An object containing expanded and activated states. |

# select

Recursively selects the specified data item in the list.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `list` | (Array) | The list of items to search. |
| `data` | (Object) | The data item to select. |

#### Returns

| Type | Description |
|------|-------------|
| boolean | True if the item was activated, false otherwise. |

# expand

Toggles the expanded state of the specified data item.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `list` | (Array) | The list of items. |
| `data` | (Object) | The data item to expand or collapse. |


