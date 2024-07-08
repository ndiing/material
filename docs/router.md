# MDRouter
Router class for managing application routing and navigation.

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onRouterCurrentEntryChange | Triggered when the current route entry changes.
onRouterNavigate | Triggered when navigating to a new route.
onRouterNavigateError | Triggered when an error occurs during navigation.
onRouterNavigateSuccess | Triggered when navigation is successful.


## Instance methods
name | params | desc
--- | --- | ---
setRoutes | routes,parent | Sets up routes recursively with parent-child relationships.
getRoute | path | Finds a route object based on the provided path.
getRoutes | route | Retrieves all routes in the hierarchy starting from the provided route.
getOutlet | container,route | Retrieves the outlet element associated with the given route.
handleLoad | event | Handles the process of loading and rendering a route's component.
navigate | url | Navigates to the specified URL using the appropriate navigation method.
handleClick | event | Handles click events on elements with a 'routerLink' attribute, triggering navigation.
init | routes | Initializes the router with the provided routes.
emit | type,detail | Emits a custom event with the specified type and detail.

## Instance properties
name | type | desc
--- | --- | ---
path | Read only | Retrieves the current path based on the application's routing mode.
query | Read only | Retrieves the current query parameters based on the application's routing mode.



