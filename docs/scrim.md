# MDScrimComponent

The `MDScrimComponent` interface represents a `<md-scrim>` element in the DOM. Represents a scrim component that provides overlay functionality.

## Instance Properties
This interface also inherits properties from its parent, `MDComponent`.

| Name | Type | Description |
| --- | --- | --- |
| open | `Boolean` | Controls the visibility state of the scrim. Set to `true` to show the scrim and `false` to hide it. |

## Instance Methods
This interface also inherits methods from its parent, `MDComponent`.

| Name | Parameters | Description |
| --- | --- | --- |
| show |  | Shows the scrim by setting `open` to `true`. This method makes the scrim visible. |
| close |  | Hides the scrim by setting `open` to `false`. This method hides the scrim if it is currently visible. |
| toggle |  | Toggles the visibility of the scrim. If the scrim is visible, it will hide it. If hidden, it will show it. |

## Inheritance
`MDComponent`

