# MDPaginationComponent
The `MDPaginationComponent` interface represents a `md-pagination` element in the DOM. Component for handling pagination of data.

## Inheritance
MDComponent

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onPaginationChange | Triggered when pagination changes.
onPaginationLimitChange | Triggered when pagination limit changes.
onPaginationFirstClick | Triggered when 'First' button is clicked.
onPaginationPrevClick | Triggered when 'Previous' button is clicked.
onPaginationNextClick | Triggered when 'Next' button is clicked.
onPaginationLastClick | Triggered when 'Last' button is clicked.


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. undefined

name | type | desc
--- | --- | ---
total | Number | Total number of data to paginate.
limit | Number | Limit of data per page.
page | Number | Current page.
options | Array | Available pagination limit options.
pages | Read only | Calculates the total number of pages based on total data and limit.
start | Read only | Calculates the starting index of data displayed on the current page.
end | Read only | Calculates the ending index of data displayed on the current page.
numberStart | Read only | Gets the starting number of data displayed on the current page.
numberEnd | Read only | Gets the ending number of data displayed on the current page.




