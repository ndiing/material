# MDRouter
{{description}}

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onRouterCurrentEntryChange` | {{description}}
`onRouterNavigate` | {{description}}
`onRouterNavigateError` | {{description}}
`onRouterNavigateSuccess` | {{description}}


## Instance methods
name | params | desc
--- | --- | ---
`setRoutes` | `routes`,`parent` | {{description}}
`getRoute` | `path` | {{description}}
`getRoutes` | `route` | {{description}}
`getOutlet` | `container`,`route` | {{description}}
`navigate` | `url` | {{description}}
`init` | `routes` | {{description}}
`emit` | `type`,`detail` | {{description}}

## Instance properties
name | type | desc
--- | --- | ---
`path` | `ReadOnly` | {{description}}
`query` | `ReadOnly` | {{description}}



