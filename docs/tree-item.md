# MDTreeItemComponent

The `MDTreeItemComponent` interface represents a `<md-tree-item>` element in the DOM.
Represents a tree item component in MD framework.



### Events

| Event | Description |
|-------|-------------|
| `MDTreeItemComponent#event:onTreeItemSelected - Event fired when the tree item is selected.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `icon` | (String) | Icon for the tree item. |
| `label` | (String) | Label text for the tree item. |
| `badge` | (Number) | Badge number for the tree item. |
| `selected` | (Boolean) | Indicates if the tree item is selected. |
| `routerLink` | (String) | Link associated with the tree item. |
| `indent` | (Number) | Indentation level of the tree item. |
| `isNode` | (Boolean) | Indicates if the item is a node in the tree. |
| `expanded` | (Boolean) | Indicates if the node is expanded. |
| `activated` | (Boolean) | Indicates if the node is activated. |
| `variant` | (String) | Variant of the tree item (plain, accordion, tree, level). |
| `isParent` | (Boolean) | Indicates if the node has children. |
| `nodeActions` | (Array) | Actions available for the node. |
| `nodeIcons` | (Array) | Icons associated with the node. |
| `leafIcons` | (Array) | Icons associated with the leaf nodes. |






# nodeActions_

Retrieves the node actions based on the variant and node actions property.






#### Returns

| Type | Description |
|------|-------------|
| Array | Array of node actions icons. |

# nodeIcons_

Retrieves the node icons based on the variant and node icons property.






#### Returns

| Type | Description |
|------|-------------|
| Array | Array of node icons. |

# leafIcons_

Retrieves the leaf icons based on the variant and leaf icons property.






#### Returns

| Type | Description |
|------|-------------|
| Array | Array of leaf icons. |

# nodeAction

Retrieves the current node action based on the expanded state.






#### Returns

| Type | Description |
|------|-------------|
| String | Current node action icon. |

# nodeicon

Retrieves the current node icon based on the expanded state.






#### Returns

| Type | Description |
|------|-------------|
| String | Current node icon. |

# leafIcon

Retrieves the current leaf icon based on the selected state.






#### Returns

| Type | Description |
|------|-------------|
| String | Current leaf icon. |

# icon_

Retrieves the appropriate icon based on whether the item is a node or leaf.






#### Returns

| Type | Description |
|------|-------------|
| String | Icon associated with the item. |

