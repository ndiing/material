# MDScrimComponent
The `MDScrimComponent` interface represents a `md-scrim` element in the DOM. Represents a scrim component that provides overlay functionality.

## Inheritance
MDComponent


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. undefined

name | type | desc
--- | --- | ---
open | Boolean | Controls the visibility state of the scrim. Set to `true` to show the scrim and `false` to hide it.

## Instance methods
This interface also inherits methods from its parent, `MDComponent`.

name | params | desc
--- | --- | ---
show |  | Shows the scrim by setting `open` to `true`. This method makes the scrim visible.
close |  | Hides the scrim by setting `open` to `false`. This method hides the scrim if it is currently visible.
toggle |  | Toggles the visibility of the scrim. If the scrim is visible, it will hide it. If hidden, it will show it.


