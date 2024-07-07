# MDChipsComponent

The `MDChipsComponent` interface represents a `<md-chips>` element in the DOM. Represents a collection of chips for displaying and interacting with items.

## Instance Properties
This interface also inherits properties from its parent, `MDComponent`.

| Name | Type | Description |
| --- | --- | --- |
| list | `Array` | The array of items to render as chips. |
| multiSelection | `Boolean` | Indicates whether multiple chips can be selected simultaneously. |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onChipClick` | Event fired when a chip is clicked. |

## Inheritance
`MDComponent`

