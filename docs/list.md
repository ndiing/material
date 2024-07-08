# MDListComponent
The `MDListComponent` interface represents a `<md-list>` element in the DOM. {{description}}

## Inheritance
`MDComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onListItemClick` | {{description}}
`handleListKeydown` | {{description}}
`onListItemSelectionStart` | {{description}}
`onListItemSelection` | {{description}}
`onListItemSelectionEnd` | {{description}}
`onListItemCheckboxNativeInput` | {{description}}
`onListItemRadioButtonNativeInput` | {{description}}
`onListItemSwitchNativeInput` | {{description}}


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. {{description}}

name | type | desc
--- | --- | ---
`list` | `Array` | {{description}}
`map` | `Object` | {{description}}
`format` | `function` | {{description}}
`selection` | `Boolean` | {{description}}
`rangeSelection` | `Boolean` | {{description}}
`multiSelection` | `Boolean` | {{description}}
`singleSelection` | `Boolean` | {{description}}
`allSelection` | `Boolean` | {{description}}

## Instance methods
This interface also inherits methods from its parent, `MDComponent`.

name | params | desc
--- | --- | ---
`select` | `data` | {{description}}
`selectToggle` | `data` | {{description}}
`selectRange` | `data` | {{description}}
`selectAll` |  | {{description}}



