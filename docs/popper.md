# MDPopperController
Provides a controller for managing popper-like behavior on elements.

## Constructor
Initializes the popper controller for a host element.

name | type | desc
--- | --- | --- 
`host` | `HTMLElement` | Host element to apply popper behavior.
`options` | `Object` | Configuration options for the popper behavior.
`options.placements` | `Array.<string>` | List of possible placements for the popper.
`options.boundary` | `HTMLElement` | Boundary element for the popper positioning.
`options.offset` | `number` | Offset value for the popper position.



## Instance methods
name | params | desc
--- | --- | ---
`setPlacement` | `button`,`options` | Sets the placement of the popper relative to a button element.
`getRect` | `button` | Retrieves the bounding rectangle of an element.



