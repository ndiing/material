# MDSnackbarComponent

The `MDSnackbarComponent` interface represents a `<md-snackbar>` element in the DOM. Represents a snackbar component.

## Instance Methods
This interface also inherits methods from its parent, `MDSheetComponent`.

| Name | Parameters | Description |
| --- | --- | --- |
| show |  | Shows the snackbar.
Resolves when the snackbar is shown and timed out. |
| close |  | Closes the snackbar.
Emits the `onSnackbarClose` event when the snackbar is closed. |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onSnackbarShow` | Event fired when the snackbar is shown. |
| `onSnackbarClose` | Event fired when the snackbar is closed. |

## Inheritance
`MDSheetComponent`

