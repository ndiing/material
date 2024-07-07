# MDChipComponent

The `MDChipComponent` interface represents a `<md-chip>` element in the DOM. Represents a chip component for displaying selectable items.

## Instance Properties
This interface also inherits properties from its parent, `MDComponent`.

| Name | Type | Description |
| --- | --- | --- |
| variant | `String` | Specifies the variant style of the chip. Possible values are "assist", "filter", "input", "suggestion". |
| avatar | `String` | URL of the avatar image to display in the chip. |
| icon | `String` | Icon name or content to display in the chip. |
| label | `String` | Text label to display in the chip. |
| action | `String` | Icon name or content for the action button within the chip. |
| selected | `Boolean` | Indicates whether the chip is selected. |
| disabled | `Boolean` | Indicates whether the chip is disabled. |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onChipActionClick` | Event triggered when the chip action button is clicked. |

## Inheritance
`MDComponent`

