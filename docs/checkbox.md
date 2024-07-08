# MDCheckboxComponent

The `MDCheckboxComponent` interface represents a `<md-checkbox>` element in the DOM. A component for creating a custom checkbox with ripple effect.

## Instance Properties
This interface also inherits properties from its parent, `MDComponent`.

| Name | Type | Description |
| --- | --- | --- |
| checked | `Boolean` | Indicates whether the checkbox is checked. |
| defaultChecked | `Boolean` | Indicates whether the checkbox is checked by default. |
| disabled | `Boolean` | Indicates whether the checkbox is disabled. |
| indeterminate | `Boolean` | Indicates whether the checkbox is in an indeterminate state. |
| value | `String` | The value of the checkbox. |
| name | `String` | The name of the checkbox. |
| type | `String` | The type of the input element, default is "checkbox". |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onCheckboxNativeInput` | Triggered when the checkbox value changes. |
| `onCheckboxNativeReset` | Triggered when the checkbox is reset. |

## Inheritance
`MDComponent`

