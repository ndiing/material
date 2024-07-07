# MDListComponent

The `MDListComponent` interface represents a `<md-list>` element in the DOM. Represents a list component that extends MDComponent and provides various list-related functionalities.

## Examples
```
// Example usage of MDListComponentconst list = new MDListComponent();list.onListItemClick = (event) => {  console.log('List item clicked:', event);};
```

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
| `onListItemClick` | Fired when a list item is clicked. |
| `handleListKeydown` | Fired when a key is pressed while focusing on the list. |
| `onListItemSelectionStart` | Fired when the selection of a list item starts. |
| `onListItemSelection` | Fired when a list item is selected. |
| `onListItemSelectionEnd` | Fired when the selection of a list item ends. |
| `onListItemCheckboxNativeInput` | Fired when a native input event occurs on a list item checkbox. |
| `onListItemRadioButtonNativeInput` | Fired when a native input event occurs on a list item radio button. |
| `onListItemSwitchNativeInput` | Fired when a native input event occurs on a list item switch. |

## Inheritance
`MDComponent`

