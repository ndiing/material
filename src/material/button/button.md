# MdButtonComponent

`MdButtonComponent` is a custom web component that extends `LitElement` and represents a button.

## Properties

-   `type` (Type: String): Specifies the type of the button (default is "button").
-   `label` (Type: String): The label text displayed on the button.
-   `icon` (Type: String): The icon to be displayed on the button.
-   `ui` (Type: String): The UI style of the button ("elevated", "filled", "filled-tonal", "outlined").
-   `activated` (Type: Boolean, Reflect: true): Reflects the activation state of the button.

## Instance Methods

### `buttonNative`

-   Returns the native button element within the component.

### `constructor()`

-   Initializes the component. Sets the default value for the `type` property to "button".

### `createRenderRoot()`

-   Overrides the `LitElement` method to return `this`, making the component's own shadow DOM the render root.

### `render()`

-   Overrides the `LitElement` method to define the component's HTML structure based on its properties.

### `connectedCallback()`

-   Overrides the `LitElement` method to add the class "md-button" to the component when it is connected to the DOM.

### `disconnectedCallback()`

-   Overrides the `LitElement` method to remove the class "md-button" from the component when it is disconnected from the DOM.

### `firstUpdated()`

-   Overrides the `LitElement` method. Initializes the state using `MdStateController` and binds it to the native button element.

### `updated(_changedProperties)`

-   Overrides the `LitElement` method. Updates the component's UI style based on changes to the `ui` property.

## Events

-   None

## Examples

### Creating an `MdButtonComponent` in HTML:

```html
<md-button label="Click me" icon="check" ui="filled"></md-button>
```
