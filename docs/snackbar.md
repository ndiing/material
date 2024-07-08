# MDSnackbarComponent
The `MDSnackbarComponent` interface represents a `md-snackbar` element in the DOM. Represents a snackbar component.

## Inheritance
MDSheetComponent

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onSnackbarShow | Event fired when the snackbar is shown.
onSnackbarClose | Event fired when the snackbar is closed.


properties | Read only | undefined

## Instance methods
This interface also inherits methods from its parent, `MDSheetComponent`.

name | params | desc
--- | --- | ---
show |  | Shows the snackbar. Resolves when the snackbar is shown and timed out.
close |  | Closes the snackbar. Emits the `onSnackbarClose` event when the snackbar is closed.


