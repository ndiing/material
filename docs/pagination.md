# MDPaginationComponent

The `MDPaginationComponent` interface represents a `<md-pagination>` element in the DOM.
A web component for pagination control.



### Events

| Event | Description |
|-------|-------------|
| `MDPaginationComponent#event:onPaginationChange - Fired when the pagination changes.` | |
| `MDPaginationComponent#event:onPaginationLimitChange - Fired when the pagination limit changes.` | |
| `MDPaginationComponent#event:onPaginationFirstClick - Fired when the first page button is clicked.` | |
| `MDPaginationComponent#event:onPaginationPrevClick - Fired when the previous page button is clicked.` | |
| `MDPaginationComponent#event:onPaginationNextClick - Fired when the next page button is clicked.` | |
| `MDPaginationComponent#event:onPaginationLastClick - Fired when the last page button is clicked.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `total` | (Number) | The total number of items. |
| `limit` | (Number) | The number of items per page. |
| `page` | (Number) | The current page number. |






# pages

The total number of pages.






#### Returns

| Type | Description |
|------|-------------|
| Number |  |

# start

The starting index of items on the current page.






#### Returns

| Type | Description |
|------|-------------|
| Number |  |

# end

The ending index of items on the current page.






#### Returns

| Type | Description |
|------|-------------|
| Number |  |

# numberStart

The starting item number displayed on the current page.






#### Returns

| Type | Description |
|------|-------------|
| Number |  |

# numberEnd

The ending item number displayed on the current page.






#### Returns

| Type | Description |
|------|-------------|
| Number |  |

