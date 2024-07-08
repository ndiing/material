# MDDataTableComponent
The `MDDataTableComponent` interface represents a `<md-data-table>` element in the DOM. {{description}}

## Inheritance
`MDCardComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onDataTableViewportVirtualScroll` | {{description}}
`onDataTableColumnCheckboxNativeInput` | {{description}}
`onDataTableRowCheckboxNativeInput` | {{description}}
`onDataTableRowClick` | {{description}}
`handleDataTableKeydown` | {{description}}
`onDataTableColumnResizeStart` | {{description}}
`onDataTableColumnResize` | {{description}}
`onDataTableColumnResizeEnd` | {{description}}
`onDataTableColumnPointerenter` | {{description}}
`onDataTableColumnPointerleave` | {{description}}
`onDataTableColumnTap` | {{description}}
`onDataTableTextFieldNativeSearch` | {{description}}
`onDataTablePaginationChange` | {{description}}
`onDataTableColumnDoubleTap` | {{description}}
`onDataTableColumnResizeDoubleTap` | {{description}}
`onDataTableColumnDragStart` | {{description}}
`onDataTableColumnDrag` | {{description}}
`onDataTableColumnDragEnd` | {{description}}


## Instance properties
This interface also inherits properties from its parent, `MDCardComponent`. {{description}}

name | type | desc
--- | --- | ---
`columns` | `Array` | {{description}}
`rows` | `Array` | {{description}}
`stickyHeader` | `Boolean` | {{description}}
`checkboxSelection` | `Boolean` | {{description}}
`stickyCheckboxSelection` | `Boolean` | {{description}}
`rangeSelection` | `Boolean` | {{description}}
`multiSelection` | `Boolean` | {{description}}
`singleSelection` | `Boolean` | {{description}}
`allSelection` | `Boolean` | {{description}}
`label` | `ReadOnly` | {{description}}
`label` | `ReadOnly` | {{description}}
`trailingActions` | `ReadOnly` | {{description}}
`body` | `ReadOnly` | {{description}}
`actions` | `ReadOnly` | {{description}}
`isSelectedAll` | `ReadOnly` | {{description}}
`isSelectedPartial` | `ReadOnly` | {{description}}

## Instance methods
This interface also inherits methods from its parent, `MDCardComponent`.

name | params | desc
--- | --- | ---
`updateVirtualRows` |  | {{description}}
`updateVirtualColumns` |  | {{description}}
`updateColumns` |  | {{description}}
`selectAllToggle` | `checked` | {{description}}
`selectToggle` | `data` | {{description}}
`select` | `data` | {{description}}
`selectRange` | `data` | {{description}}
`selectAll` |  | {{description}}



