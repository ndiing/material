# MDRouter

Router for managing client-side navigation and routing.



### Events

| Event | Description |
|-------|-------------|
| `MDRouter#event:onRouterCurrentEntryChange - Triggered when the current route changes.` | |
| `MDRouter#event:onRouterNavigate - Triggered when navigating to a new route.` | |
| `MDRouter#event:onRouterNavigateError - Triggered when an error occurs during navigation.` | |
| `MDRouter#event:onRouterNavigateSuccess - Triggered when navigation to a route is successful.` | |




# path

Gets the current path of the router.






#### Returns

| Type | Description |
|------|-------------|
| string | The current path. |

# query

Gets the current query parameters as an object.






#### Returns

| Type | Description |
|------|-------------|
| Object | The current query parameters. |

# getRoute

Finds and returns a route that matches the given path.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `path` | (string) | The path to match. |

#### Returns

| Type | Description |
|------|-------------|
| Object | The matched route. |

# getRoutes

Gets all routes from the root to the specified route.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `route` | (Object) | The route to start from. |

#### Returns

| Type | Description |
|------|-------------|
| Array | An array of routes. |

# getOutlet

Finds and returns the outlet element for a given route.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `container` | (HTMLElement) | The container element to search within. |
| `route` | (Object) | The route to find the outlet for. |

#### Returns

| Type | Description |
|------|-------------|
| Promise.&lt;HTMLElement&gt; | A promise that resolves to the outlet element. |

# navigate

Navigates to a new URL, updating browser history.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | (String) | URL to navigate to. |


# init

Initializes the router with provided route configurations.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `routes` | (Array) | List of route configurations. |


