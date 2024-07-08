# MDRouter
{{desc}}

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onRouterCurrentEntryChange` | {{desc}}
`onRouterNavigate` | {{desc}}
`onRouterNavigateError` | {{desc}}
`onRouterNavigateSuccess` | {{desc}}


## Instance methods
name | params | desc
--- | --- | ---
`setRoutes` | `routes`,`parent` | {{desc}}
`getRoute` | `path` | {{desc}}
`getRoutes` | `route` | {{desc}}
`getOutlet` | `container`,`route` | {{desc}}
`navigate` | `url` | {{desc}}
`init` | `routes` | {{desc}}

## Instance properties
name | type | desc
--- | --- | ---
`path` | `ReadOnly` | {{desc}}
`query` | `ReadOnly` | {{desc}}



