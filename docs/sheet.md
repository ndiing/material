# MDSheetComponent
The `MDSheetComponent` interface represents a `<md-sheet>` element in the DOM. Represents a sheet component that extends MDCardComponent.

## Inheritance
`MDCardComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onSheetScrimClick` | Triggered when the sheet scrim is clicked.
`onSheetShow` | Triggered when the sheet is shown.
`onSheetClose` | Triggered when the sheet is closed.


## Instance properties
This interface also inherits properties from its parent, `MDCardComponent`. Properties of the MDSheetComponent.

name | type | desc
--- | --- | ---
`open` | `Boolean` | Reflects whether the sheet is open.

## Instance methods
This interface also inherits methods from its parent, `MDCardComponent`.

name | params | desc
--- | --- | ---
`showModal` |  | Shows the sheet as a modal.
`show` |  | Shows the sheet.
`close` |  | Closes the sheet.
`toggle` | `args` | Toggles the sheet visibility.


