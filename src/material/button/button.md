# MdButtonComponent Class

`MdButtonComponent` is a LitElement for creating a button component with various properties.

## Properties

-   `type` (String): The type of the button.
-   `label` (String): The label text for the button.
-   `icon` (String): The icon to be displayed on the button.
-   `ui` (String): The UI style of the button.
-   `activated` (Boolean, reflect: true): Indicates whether the button is activated.

## Methods

### `buttonNative`

-   Returns: `Element` - The native button element.

## Constructor

### `constructor()`

-   Initializes the `type` property with a default value of "button".

## Custom Methods

### `createRenderRoot`

-   Overrides: `createRenderRoot()`
-   Returns: `Element` - The render root.

### `render`

-   Overrides: `render()`
-   Returns: `TemplateResult` - The rendered HTML template.

## Lifecycle Hooks

### `connectedCallback`

-   Overrides: `connectedCallback()`
-   Actions: Adds the "md-button" class to the element.

### `disconnectedCallback`

-   Overrides: `disconnectedCallback()`
-   Actions: Removes the "md-button" class from the element.

### `firstUpdated`

-   Overrides: `firstUpdated()`
-   Actions:
    -   Initializes the `state` property with a new `MdStateController`.
    -   Configures the `MdStateController` with the button and the inverted property.

### `updated`

-   Overrides: `updated(_changedProperties)`
-   Parameters:
    -   `_changedProperties` (Set): Set of changed properties.
-   Actions:
    -   Removes UI-related class names from the element.
    -   Adds a class based on the current `ui` property.

## Custom Elements Registration

-   Defines the custom element "md-button" associated with the `MdButtonComponent`.

## Export

Exports the `MdButtonComponent` class.
