# MdNavigation (Navigation)

`MdNavigation` is a utility class for handling navigation in a web application.

> Navigation serves as the route/path manager in the application.

# Usage

# Properties

| Property     | Type            | Default | Description                                  |
| ------------ | --------------- | ------- | -------------------------------------------- |
| `entries`    | Array           | []      | Array of navigation entries.                 |
| `path`       | String          | ""      | Current window location path.                |
| `query`      | Object          | {}      | Object containing query parameters.          |
| `params`     | Object          | {}      | Object containing route parameters.          |
| `controller` | AbortController | null    | Controller for aborting navigation requests. |

## Instance Methods

### `setEntries(entries = [], parent = null)`

Sets up and returns an array of navigation entries, including their patterns and parent-child relationships.

#### `getEntry()`

```javascript
static getEntry() {
    // Implementation details...
}
```

Returns the current navigation entry based on the current URL.

#### `getEntries(entry)`

```javascript
static getEntries(entry) {
  // Implementation details...
}
```

Returns an array of navigation entries, starting from the given entry and going up to the root.

#### `handlePopstate(event)`

```javascript
static async handlePopstate(event) {
  // Implementation details...
}
```

Handles the popstate event, updating the navigation state and triggering appropriate events.

#### `emit(type, detail = {})`

```javascript
static emit(type, detail = {}) {
  // Implementation details...
}
```

Emits a custom event with the specified type and optional detail.

#### `navigate(url)`

```javascript
static navigate(url) {
  // Implementation details...
}
```

Navigates to the specified URL using the browser's history API.

#### `handleClick(event)`

```javascript
static handleClick(event) {
  // Implementation details...
}
```

Handles click events on elements with a `navigate` attribute, triggering navigation to the specified URL.

#### `load(entries = [])`

```javascript
static load(entries = []) {
  // Implementation details...
}
```

Loads the navigation system with the provided entries, setting up event listeners for popstate and click events.

## Events

- `onCurrententrychange`: Triggered when the current navigation entry changes.
- `onNavigate`: Triggered when navigation is about to occur.
- `onNavigateerror`: Triggered when an error occurs during navigation.
- `onNavigatesuccess`: Triggered after successful navigation.

## Example

```html
<!-- Include the MdNavigation class in your HTML file -->
<script type="module" src="path/to/MdNavigation.js"></script>

<!-- Define navigation entries -->
<script type="module">
  const entries = [
    {
      path: '/',
      load: async () => import('./home-component.js'),
    },
    {
      path: '/about',
      load: async () => import('./about-component.js'),
    },
    // Add more entries as needed
  ];

  // Load MdNavigation with the defined entries
  MdNavigation.load(entries);
</script>

<!-- Use navigation in your application -->
<a navigate="/about">Go to About</a>
<button navigate="/">Go Home</button>
```
