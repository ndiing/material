# MDRouter
Manages routing within a single-page application.

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onRouterCurrentEntryChange` | Event emitted when current route changes.
`onRouterNavigate` | Event emitted before navigating to a new route.
`onRouterNavigateError` | Event emitted if an error occurs during navigation.
`onRouterNavigateSuccess` | Event emitted after successful navigation.


## Instance methods
name | params | desc
--- | --- | ---
`navigate` | `url` | Navigates to a new URL using either History API or hash-based routing.
`init` | `routes` | Initializes the router with the provided routes configuration.

## Instance properties
name | type | desc
--- | --- | ---
`historyApiFallback` | `ReadOnly` | Indicates whether to use the History API for routing (default: true).



