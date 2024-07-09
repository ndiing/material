# MDMenuComponent
The `MDMenuComponent` interface represents a `<md-menu>` element in the DOM. MDMenuComponent is a custom element that represents a menu component
with integrated virtual scrolling and popper positioning.

## Inheritance
`MDSheetComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onMenuViewportVirtualScroll` | Fired when the virtual scroll position changes.
`onMenuListItemClick` | Fired when a list item in the menu is clicked.


## Instance properties
This interface also inherits properties from its parent, `MDSheetComponent`. Defines the properties of the MDMenuComponent, merging properties
from MDSheetComponent and MDListComponent.

name | type | desc
--- | --- | ---
`rowHeight` | `Number` | The height of each row in the virtual list.
`maxRows` | `Number` | The maximum number of rows to display in the menu.
`menuList` | `ReadOnly` | Gets the menu list element.
`body` | `ReadOnly` | Gets the HTML content of the menu's body, which includes a virtual list component.
`body` | `ReadOnly` | Sets the HTML content of the menu's body.
`selectedIndex` | `ReadOnly` | Gets the index of the currently selected item in the menu list.
`selectedList` | `ReadOnly` | Gets the list of selected items in the menu list.

## Instance methods
This interface also inherits methods from its parent, `MDSheetComponent`.

name | params | desc
--- | --- | ---
`filter` | `value` | Applies a filter to the menu list based on the provided value.
`showModal` | `button`,`options` | Displays the menu as a modal, setting its placement relative to the button.
`show` | `button`,`options` | Displays the menu, setting its placement relative to the button.



