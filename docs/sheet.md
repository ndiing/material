# MDSheetComponent
The `MDSheetComponent` interface represents a `md-sheet` element in the DOM. Represents a sheet component that extends from MDCardComponent.

## Inheritance
MDCardComponent

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onSheetScrimClick | Triggered when the scrim of the sheet is clicked.
onSheetShow | Triggered when the sheet is shown.
onSheetClose | Triggered when the sheet is closed.


## Instance properties
This interface also inherits properties from its parent, `MDCardComponent`. undefined

name | type | desc
--- | --- | ---
open | Boolean | Controls the visibility state of the sheet. Set to `true` to show the sheet and `false` to hide it.

## Instance methods
This interface also inherits methods from its parent, `MDCardComponent`.

name | params | desc
--- | --- | ---
showModal |  | Shows a modal sheet by displaying the scrim and setting `open` to `true`. This method adjusts the sheet's dimensions and emits the `onSheetShow` event.
handleSheetScrimClick | event | Handles click events on the scrim of the sheet. Closes the sheet and emits the `onSheetScrimClick` event.
show |  | Shows the sheet by adjusting its dimensions and setting `open` to `true`. Emits the `onSheetShow` event.
close |  | Closes the sheet by hiding it and removing the scrim if present. Emits the `onSheetClose` event.
toggle | args | Toggles the visibility of the sheet. If the sheet is open, it will close it. If closed, it will show it.


