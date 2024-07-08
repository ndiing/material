# MDSegmentedButtonComponent
The `MDSegmentedButtonComponent` interface represents a `<md-segmented-button>` element in the DOM. Represents a segmented button component that allows single or multiple selection of its items.

## Inheritance
`MDComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onSegmentedButtonItemClick` | Triggered when a segmented button item is clicked.


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. undefined

name | type | desc
--- | --- | ---
`buttons` | `Array` | Array of button items to render.
`singleSelection` | `Boolean` | Indicates single selection mode.
`multiSelection` | `Boolean` | Indicates multiple selection mode.




