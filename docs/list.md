# MDListComponent

The `MDListComponent` interface represents a `md-list` element in the DOM. {{desc}}

## Instance Properties
This interface also inherits properties from its parent, `MDComponent`.

| Name | Type | Description |
| --- | --- | --- |
| list | `Array` | {{desc}} |
| map | `Object` | {{desc}} |
| format | `function` | {{desc}} |
| selection | `Boolean` | {{desc}} |
| rangeSelection | `Boolean` | {{desc}} |
| multiSelection | `Boolean` | {{desc}} |
| singleSelection | `Boolean` | {{desc}} |
| allSelection | `Boolean` | {{desc}} |

## Instance Methods
This interface also inherits methods from its parent, `MDComponent`.

| Name | Parameters | Description |
| --- | --- | --- |
| select | `data` | {{desc}} |
| selectToggle | `data` | {{desc}} |
| selectRange | `data` | {{desc}} |
| selectAll |  | {{desc}} |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onListItemClick` | {{desc}} |
| `handleListKeydown` | {{desc}} |
| `onListItemSelectionStart` | {{desc}} |
| `onListItemSelection` | {{desc}} |
| `onListItemSelectionEnd` | {{desc}} |
| `onListItemCheckboxNativeInput` | {{desc}} |
| `onListItemRadioButtonNativeInput` | {{desc}} |
| `onListItemSwitchNativeInput` | {{desc}} |

## Inheritance
`MDComponent`

