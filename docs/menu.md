# MDMenuComponent
The `MDMenuComponent` interface represents a `md-menu` element in the DOM. Represents a menu component.

## Inheritance
MDSheetComponent

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onMenuTreeItemClick | Event fired when a tree item in the menu is clicked.


## Instance properties
This interface also inherits properties from its parent, `MDSheetComponent`. 

name | type | desc
--- | --- | ---
properties | Read only | Inherits properties from MDSheetComponent and MDTreeComponent.
body | Read only | Gets the body of the menu, which includes a tree component.
body | Read only | Sets the body of the menu.

## Instance methods
This interface also inherits methods from its parent, `MDSheetComponent`.

name | params | desc
--- | --- | ---
showModal | button,options | Shows the menu as a modal.
show | button,options | Shows the menu.
setPlacement | button,options | Sets the placement of the menu relative to a button.


