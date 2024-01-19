# MdNavigation

`MdNavigation` is a utility class for handling navigation in a web application.

## Static Methods

### `setEntries(entries = [], parent = null)`

Sets up and returns an array of navigation entries, including their patterns and parent-child relationships.

### `getEntry()`

Returns the current navigation entry based on the current URL.

### `getEntries(entry)`

Returns an array of navigation entries, starting from the given entry and going up to the root.

### `handlePopstate(event)`

Handles the popstate event, updating the navigation state and triggering appropriate events.

### `emit(type, detail = {})`

Emits a custom event with the specified type and optional detail.

### `navigate(url)`

Navigates to the specified URL using the browser's history API.

### `handleClick(event)`

Handles click events on elements with a `navigate` attribute, triggering navigation to the specified URL.

### `load(entries = [])`

Loads the navigation system with the provided entries, setting up event listeners for popstate and click events.

## Usage Example

```html
<!-- Include the MdNavigation class in your HTML file -->
<script type="module" src="path/to/MdNavigation.js"></script>

<!-- Define navigation entries -->
<script type="module">
    const entries = [
        {
            path: "/",
            load: async () => import("./home-component.js"),
        },
        {
            path: "/about",
            load: async () => import("./about-component.js"),
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
