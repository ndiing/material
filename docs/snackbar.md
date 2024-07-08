# MDSnackbarComponent
The `MDSnackbarComponent` interface represents a `<md-snackbar>` element in the DOM. Represents a snackbar component for displaying temporary messages.

## Inheritance
`MDSheetComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onSnackbarShow` | Triggered when the snackbar is shown.
`onSnackbarClose` | Triggered when the snackbar is closed.


## Instance properties
This interface also inherits properties from its parent, `MDSheetComponent`. 

name | type | desc
--- | --- | ---
`properties` | `ReadOnly` | Inherit properties from MDSheetComponent.
`queue` | `ReadOnly` | Queue for managing sequential showing of snackbar instances.

## Instance methods
This interface also inherits methods from its parent, `MDSheetComponent`.

name | params | desc
--- | --- | ---
`show` |  | Shows the snackbar.
`close` |  | Closes the snackbar.


