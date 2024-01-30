# MdRouter (Router)

The `MDRouter` class provides a simple client-side router for managing routes in a web application.

# Usage

Router It allows you to set routes, navigate between them, and handle route changes.

# Properties

| Property          | Type            | Default Value | Description                                                    |
| ----------------- | --------------- | ------------- | -------------------------------------------------------------- |
| `routes`          | Array           | [ ]           | An array containing the defined routes.                        |
| `path`            | String          | null          | The current URL path.                                          |
| `query`           | Object          | { }           | An object representing the URL query parameters.               |
| `params`          | Object          | { }           | An object representing the matched route parameters.           |
| `abortController` | AbortController | null          | An AbortController instance for route navigation cancellation. |

## Instance Methods

### `setRoutes(routes = [], parent = null)`

Sets the routes for the router. Optionally, a parent route can be specified.

#### Parameters

- `routes` (Array): An array of route configurations.
- `parent` (Object): Parent route configuration.

#### Returns

- `Array`: An array containing the flattened route configurations.

### `getRoute()`

Gets the current matched route based on the URL path.

#### Returns

- `Object`: The matched route configuration.

### `getRoutes(route)`

Gets an array of route configurations from the current route up to the root.

#### Parameters

- `route` (Object): The route configuration.

#### Returns

- `Array`: An array of route configurations.

### `getOutlet(route)`

Returns a Promise that resolves to the outlet element associated with the route.

#### Parameters

- `route` (Object): The route configuration.

#### Returns

- `Promise`: A Promise resolving to the outlet element.

### `emit(type, detail)`

Emits a custom event with the specified type and detail.

#### Parameters

- `type` (String): The event type.
- `detail` (Object): The event detail.

### `handlePopstate(event)`

Handles the `popstate` event triggered by browser navigation.

#### Parameters

- `event` (Event): The popstate event.

### `navigate(url)`

Navigates to the specified URL using the browser's history API.

#### Parameters

- `url` (String): The URL to navigate to.

### `handleClick(event)`

Handles the `click` event on elements with the `routerLink` attribute.

#### Parameters

- `event` (Event): The click event.

### `register(routes = [])`

Registers the router with the provided routes and sets up event listeners.

#### Parameters

- `routes` (Array): An array of route configurations.

## Events

- `onRouterChange`: Triggered when the router detects a change in the URL path.
- `onRouterStart`: Triggered when the router starts navigating to a new route.
- `onRouterCancel`: Triggered when route navigation is canceled.
- `onRouterEnd`: Triggered when route navigation is completed.

## Example

```javascript
// Import MDRouter
import { MDRouter } from './path/to/MDRouter';

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  // Add more routes as needed
];

// Register the router with defined routes
MDRouter.register(routes);

// Additional usage examples:
// Navigating to a route
MDRouter.navigate('/about');

// Handling custom events
MDRouter.emit('customEvent', { data: 'example' });
```
