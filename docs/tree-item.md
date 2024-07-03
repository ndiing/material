<a name="MDTreeItemComponent"></a>

## MDTreeItemComponent ⇐ <code>MDComponent</code>
Represents a tree item component in MD framework.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDTreeItemComponent#event:onTreeItemSelected - Event fired when the tree item is selected.</code>  
**Tagname**: md-tree-item  

* [MDTreeItemComponent](#MDTreeItemComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDTreeItemComponent+properties)
    * [.nodeActions_](#MDTreeItemComponent+nodeActions_) ⇒ <code>Array</code>
    * [.nodeIcons_](#MDTreeItemComponent+nodeIcons_) ⇒ <code>Array</code>
    * [.leafIcons_](#MDTreeItemComponent+leafIcons_) ⇒ <code>Array</code>
    * [.nodeAction](#MDTreeItemComponent+nodeAction) ⇒ <code>String</code>
    * [.nodeicon](#MDTreeItemComponent+nodeicon) ⇒ <code>String</code>
    * [.leafIcon](#MDTreeItemComponent+leafIcon) ⇒ <code>String</code>
    * [.icon_](#MDTreeItemComponent+icon_) ⇒ <code>String</code>

<a name="MDTreeItemComponent+properties"></a>

### mdTreeItemComponent.properties
**Kind**: instance property of [<code>MDTreeItemComponent</code>](#MDTreeItemComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>String</code> | Icon for the tree item. |
| label | <code>String</code> | Label text for the tree item. |
| badge | <code>Number</code> | Badge number for the tree item. |
| selected | <code>Boolean</code> | Indicates if the tree item is selected. |
| routerLink | <code>String</code> | Link associated with the tree item. |
| indent | <code>Number</code> | Indentation level of the tree item. |
| isNode | <code>Boolean</code> | Indicates if the item is a node in the tree. |
| expanded | <code>Boolean</code> | Indicates if the node is expanded. |
| activated | <code>Boolean</code> | Indicates if the node is activated. |
| variant | <code>String</code> | Variant of the tree item (plain, accordion, tree, level). |
| isParent | <code>Boolean</code> | Indicates if the node has children. |
| nodeActions | <code>Array</code> | Actions available for the node. |
| nodeIcons | <code>Array</code> | Icons associated with the node. |
| leafIcons | <code>Array</code> | Icons associated with the leaf nodes. |

<a name="MDTreeItemComponent+nodeActions_"></a>

### mdTreeItemComponent.nodeActions\_ ⇒ <code>Array</code>
Retrieves the node actions based on the variant and node actions property.

**Kind**: instance property of [<code>MDTreeItemComponent</code>](#MDTreeItemComponent)  
**Returns**: <code>Array</code> - Array of node actions icons.  
<a name="MDTreeItemComponent+nodeIcons_"></a>

### mdTreeItemComponent.nodeIcons\_ ⇒ <code>Array</code>
Retrieves the node icons based on the variant and node icons property.

**Kind**: instance property of [<code>MDTreeItemComponent</code>](#MDTreeItemComponent)  
**Returns**: <code>Array</code> - Array of node icons.  
<a name="MDTreeItemComponent+leafIcons_"></a>

### mdTreeItemComponent.leafIcons\_ ⇒ <code>Array</code>
Retrieves the leaf icons based on the variant and leaf icons property.

**Kind**: instance property of [<code>MDTreeItemComponent</code>](#MDTreeItemComponent)  
**Returns**: <code>Array</code> - Array of leaf icons.  
<a name="MDTreeItemComponent+nodeAction"></a>

### mdTreeItemComponent.nodeAction ⇒ <code>String</code>
Retrieves the current node action based on the expanded state.

**Kind**: instance property of [<code>MDTreeItemComponent</code>](#MDTreeItemComponent)  
**Returns**: <code>String</code> - Current node action icon.  
<a name="MDTreeItemComponent+nodeicon"></a>

### mdTreeItemComponent.nodeicon ⇒ <code>String</code>
Retrieves the current node icon based on the expanded state.

**Kind**: instance property of [<code>MDTreeItemComponent</code>](#MDTreeItemComponent)  
**Returns**: <code>String</code> - Current node icon.  
<a name="MDTreeItemComponent+leafIcon"></a>

### mdTreeItemComponent.leafIcon ⇒ <code>String</code>
Retrieves the current leaf icon based on the selected state.

**Kind**: instance property of [<code>MDTreeItemComponent</code>](#MDTreeItemComponent)  
**Returns**: <code>String</code> - Current leaf icon.  
<a name="MDTreeItemComponent+icon_"></a>

### mdTreeItemComponent.icon\_ ⇒ <code>String</code>
Retrieves the appropriate icon based on whether the item is a node or leaf.

**Kind**: instance property of [<code>MDTreeItemComponent</code>](#MDTreeItemComponent)  
**Returns**: <code>String</code> - Icon associated with the item.  
