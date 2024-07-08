# MDChipComponent
The `MDChipComponent` interface represents a `md-chip` element in the DOM. Represents a chip component for displaying selectable items.

## Inheritance
MDComponent

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onChipActionClick | Event triggered when the chip action button is clicked.


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. undefined

name | type | desc
--- | --- | ---
variant | String | Specifies the variant style of the chip. Possible values are "assist", "filter", "input", "suggestion".
avatar | String | URL of the avatar image to display in the chip.
icon | String | Icon name or content to display in the chip.
label | String | Text label to display in the chip.
action | String | Icon name or content for the action button within the chip.
selected | Boolean | Indicates whether the chip is selected.
disabled | Boolean | Indicates whether the chip is disabled.



