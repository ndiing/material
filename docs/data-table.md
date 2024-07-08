# MDDataTableComponent
The `MDDataTableComponent` interface represents a `<md-data-table>` element in the DOM. {{desc}}

## Inheritance
`MDCardComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onDataTableViewportVirtualScroll` | {{desc}}
`onDataTableColumnCheckboxNativeInput` | {{desc}}
`onDataTableRowCheckboxNativeInput` | {{desc}}
`onDataTableRowClick` | {{desc}}
`handleDataTableKeydown` | {{desc}}
`onDataTableColumnResizeStart` | {{desc}}
`onDataTableColumnResize` | {{desc}}
`onDataTableColumnResizeEnd` | {{desc}}
`onDataTableColumnPointerenter` | {{desc}}
`onDataTableColumnPointerleave` | {{desc}}
`onDataTableColumnTap` | {{desc}}
`onDataTableTextFieldNativeSearch` | {{desc}}
`onDataTablePaginationChange` | {{desc}}
`onDataTableColumnDoubleTap` | {{desc}}
`onDataTableColumnResizeDoubleTap` | {{desc}}
`onDataTableColumnDragStart` | {{desc}}
`onDataTableColumnDrag` | {{desc}}
`onDataTableColumnDragEnd` | {{desc}}


## Instance properties
This interface also inherits properties from its parent, `MDCardComponent`. undefined

name | type | desc
--- | --- | ---
`columns` | `Array` | {{desc}}
`rows` | `Array` | {{desc}}
`stickyHeader` | `Boolean` | {{desc}}
`checkboxSelection` | `Boolean` | {{desc}}
`stickyCheckboxSelection` | `Boolean` | {{desc}}
`rangeSelection` | `Boolean` | {{desc}}
`multiSelection` | `Boolean` | {{desc}}
`singleSelection` | `Boolean` | {{desc}}
`allSelection` | `Boolean` | {{desc}}
`label` | `ReadOnly` | {{desc}}
`label` | `ReadOnly` | {{desc}}
`trailingActions` | `ReadOnly` | {{desc}}
`body` | `ReadOnly` | {{desc}}
`actions` | `ReadOnly` | {{desc}}
`isSelectedAll` | `ReadOnly` | {{desc}}
`isSelectedPartial` | `ReadOnly` | {{desc}}

## Instance methods
This interface also inherits methods from its parent, `MDCardComponent`.

name | params | desc
--- | --- | ---
`updateVirtualRows` |  | {{desc}}
`updateVirtualColumns` |  | {{desc}}
`updateColumns` |  | {{desc}}
`selectAllToggle` | `checked` | {{desc}}
`selectToggle` | `data` | {{desc}}
`select` | `data` | {{desc}}
`selectRange` | `data` | {{desc}}
`selectAll` |  | {{desc}}



