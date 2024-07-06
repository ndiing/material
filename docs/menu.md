# MDMenuComponent

The `MDMenuComponent` interface represents a `<md-menu>` element in the DOM.
MDMenuComponent is a class that extends MDSheetComponent and represents a menu component with tree-like structure.
This component supports interactions with menu items and dynamic positioning.



### Events

| Event | Description |
|-------|-------------|
| `MDMenuComponent#event:onMenuTreeItemClick - Fires when a menu tree item is clicked.` | |




# properties

Inherits properties from MDSheetComponent and MDTreeComponent.







# body

Returns the body of the menu component, which contains a tree of menu items.







# body

Sets the body of the menu component.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | (Object) | The new body content for the menu. |


# showModal

Shows the menu as a modal.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `button` | (HTMLElement) | The button element that triggers the menu. |
| `options` | (Object) | Options for positioning the menu. |


# show

Shows the menu.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `button` | (HTMLElement) | The button element that triggers the menu. |
| `options` | (Object) | Options for positioning the menu. |


# setPlacement

Sets the placement of the menu relative to the button.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `button` | (HTMLElement) | The button element that triggers the menu. |
| `options` | (Object) | Options for positioning the menu. |


