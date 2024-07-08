# MDListComponent
The `MDListComponent` interface represents a `<md-list>` element in the DOM. {{desc}}

## Inheritance
`MDComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onListItemClick` | {{desc}}
`handleListKeydown` | {{desc}}
`onListItemSelectionStart` | {{desc}}
`onListItemSelection` | {{desc}}
`onListItemSelectionEnd` | {{desc}}
`onListItemCheckboxNativeInput` | {{desc}}
`onListItemRadioButtonNativeInput` | {{desc}}
`onListItemSwitchNativeInput` | {{desc}}


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. undefined

name | type | desc
--- | --- | ---
`list` | `Array` | {{desc}}
`map` | `Object` | {{desc}}
`format` | `function` | {{desc}}
`selection` | `Boolean` | {{desc}}
`rangeSelection` | `Boolean` | {{desc}}
`multiSelection` | `Boolean` | {{desc}}
`singleSelection` | `Boolean` | {{desc}}
`allSelection` | `Boolean` | {{desc}}

## Instance methods
This interface also inherits methods from its parent, `MDComponent`.

name | params | desc
--- | --- | ---
`select` | `data` | {{desc}}
`selectToggle` | `data` | {{desc}}
`selectRange` | `data` | {{desc}}
`selectAll` |  | {{desc}}



