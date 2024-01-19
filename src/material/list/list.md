# MdListItemComponent

`MdListItemComponent` is a custom web component that extends `LitElement` and represents a list item.

## Properties

-   `label` (Type: String): The label text displayed on the list item.
-   `supportingText` (Type: String): Additional supporting text for the list item.
-   `badge` (Type: String): The badge text displayed on the list item.
-   `leadingItems` (Type: Array): An array of leading items to be displayed before the label.
-   `trailingItems` (Type: Array): An array of trailing items to be displayed after the label.
-   `activated` (Type: Boolean, Reflect: true): Reflects the activation state of the list item.

## Instance Methods

### `renderItem(item)`

-   Renders an item based on the provided configuration.

### `render()`

-   Overrides the `LitElement` method to define the HTML structure of the list item based on its properties.

### `connectedCallback()`

-   Overrides the `LitElement` method to add the class "md-list\_\_item" to the list item when it is connected to the DOM.

### `disconnectedCallback()`

-   Overrides the `LitElement` method to remove the class "md-list\_\_item" from the list item when it is disconnected from the DOM.

### `firstUpdated()`

-   Overrides the `LitElement` method. Initializes the state using `MdStateController` and updates the label-related CSS class.

### `updated(_changedProperties)`

-   Overrides the `LitElement` method. No specific updates for this method.

# MdListRowComponent

`MdListRowComponent` is a custom web component that extends `LitElement` and represents a row in a list.

## Properties

-   None

## Instance Methods

### `render()`

-   Overrides the `LitElement` method to define the HTML structure of the list row.

### `connectedCallback()`

-   Overrides the `LitElement` method to add the class "md-list\_\_row" to the list row when it is connected to the DOM.

### `disconnectedCallback()`

-   Overrides the `LitElement` method to remove the class "md-list\_\_row" from the list row when it is disconnected from the DOM.

### `firstUpdated()`

-   Overrides the `LitElement` method. No specific updates for this method.

### `updated(_changedProperties)`

-   Overrides the `LitElement` method. No specific updates for this method.

# MdListComponent

`MdListComponent` is a custom web component that extends `LitElement` and represents a list.

## Properties

-   `items` (Type: Array): An array of items to be rendered in the list.
-   `ui` (Type: String): The UI style of the list ("one-line", "two-line", "three-line").
-   `type` (Type: String): The type of the list ("multi-select" for multi-selection).
-   `activatable` (Type: Boolean): Indicates whether the list items are activatable.

## Instance Methods

### `hasListItem(item)`

-   Checks if a given item has content to be displayed in the list.

### `render()`

-   Overrides the `LitElement` method to define the HTML structure of the list based on its properties.

### `connectedCallback()`

-   Overrides the `LitElement` method to add the class "md-list" to the list when it is connected to the DOM.

### `disconnectedCallback()`

-   Overrides the `LitElement` method to remove the class "md-list" from the list when it is disconnected from the DOM.

### `firstUpdated()`

-   Overrides the `LitElement` method. No specific updates for this method.

### `updated(_changedProperties)`

-   Overrides the `LitElement` method. Updates the list's UI style based on changes to the `ui` property.

### `onListItemClick(event)`

-   Handles the click event on a list item. Activates the clicked item and dispatches a custom event.

## Events

-   `onListItemClick`: Dispatched when a list item is clicked. Event details include the original event and the clicked list item.

# Examples

### Creating a simple list:

```html
<md-list .items="${[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]}"></md-list>
```
