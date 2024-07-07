# MDSegmentedButtonComponent

The `MDSegmentedButtonComponent` interface represents a `<md-segmented-button>` element in the DOM. Represents a segmented button component.

## Instance Properties
This interface also inherits properties from its parent, `MDComponent`.

| Name | Type | Description |
| --- | --- | --- |
| buttons | `Array` | Array of button items to render in the segmented button. |
| singleSelection | `Boolean` | Flag indicating single selection mode. |
| multiSelection | `Boolean` | Flag indicating multi-selection mode. |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onSegmentedButtonItemClick` | Event fired when a segmented button item is clicked. |

## Inheritance
`MDComponent`

