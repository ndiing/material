# MDIconButtonComponent
The `MDIconButtonComponent` interface represents a `<md-icon-button>` element in the DOM. A custom element for creating icon buttons with various styles and ripple effects.

## Inheritance
`MDComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onIconButtonClick` | Event fired when the icon button is clicked.


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. Defines the properties of the element.

name | type | desc
--- | --- | ---
`variant` | `String` | The style variant of the icon button (e.g., "filled", "tonal", "outlined", "toggle").
`icon` | `String` | The icon to display within the button.
`selected` | `Boolean` | Indicates whether the button is selected (for toggle buttons).
`disabled` | `Boolean` | Indicates whether the button is disabled.



