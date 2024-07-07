# MDPaginationComponent

The `MDPaginationComponent` interface represents a `<md-pagination>` element in the DOM. Component for handling pagination of data.

## Instance Properties
This interface also inherits properties from its parent, `MDComponent`.

| Name | Type | Description |
| --- | --- | --- |
| total | `Number` | Total number of data to paginate. |
| limit | `Number` | Limit of data per page. |
| page | `Number` | Current page. |
| options | `Array` | Available pagination limit options. |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onPaginationChange` | Triggered when pagination changes. |
| `onPaginationLimitChange` | Triggered when pagination limit changes. |
| `onPaginationFirstClick` | Triggered when 'First' button is clicked. |
| `onPaginationPrevClick` | Triggered when 'Previous' button is clicked. |
| `onPaginationNextClick` | Triggered when 'Next' button is clicked. |
| `onPaginationLastClick` | Triggered when 'Last' button is clicked. |

## Inheritance
`MDComponent`

