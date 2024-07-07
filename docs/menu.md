# MDMenuComponent

The `MDMenuComponent` interface represents a `<md-menu>` element in the DOM. Represents a menu component.

## Instance Methods
This interface also inherits methods from its parent, `MDSheetComponent`.

| Name | Parameters | Description |
| --- | --- | --- |
| showModal | `button`, `options` | Shows the menu as a modal. |
| show | `button`, `options` | Shows the menu. |
| setPlacement | `button`, `options` | Sets the placement of the menu relative to a button. |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onMenuTreeItemClick` | Event fired when a tree item in the menu is clicked. |

## Inheritance
`MDSheetComponent`

