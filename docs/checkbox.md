# MDCheckboxComponent
The `MDCheckboxComponent` interface represents a `md-checkbox` element in the DOM. A component for creating a custom checkbox with ripple effect.

## Inheritance
MDComponent

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onCheckboxNativeInput | Triggered when the checkbox value changes.
onCheckboxNativeReset | Triggered when the checkbox is reset.


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. undefined

name | type | desc
--- | --- | ---
checked | Boolean | Indicates whether the checkbox is checked.
defaultChecked | Boolean | Indicates whether the checkbox is checked by default.
disabled | Boolean | Indicates whether the checkbox is disabled.
indeterminate | Boolean | Indicates whether the checkbox is in an indeterminate state.
value | String | The value of the checkbox.
name | String | The name of the checkbox.
type | String | The type of the input element, default is "checkbox".




