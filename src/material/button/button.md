# MdButtonComponent

`MdButtonComponent` is a custom LitElement representing a Material Design button.

## Properties

-   **type** (_String_): The type of the button (default is "button").
-   **label** (_String_): The label text for the button.
-   **icon** (_String_): The icon content for the button.
-   **ui** (_String_): The UI style of the button (`elevated`, `filled`, `filled-tonal`, `outlined`).
-   **activated** (_Boolean_): Reflects whether the button is activated.

## Methods

-   **buttonNative()**: Returns the native button element.

## Lifecycle Methods

-   **connectedCallback()**: Adds the "md-button" class when the element is connected.
-   **disconnectedCallback()**: Removes the "md-button" class when the element is disconnected.
-   **firstUpdated()**: Initializes the `MdStateController` and sets up the button and inverted properties.
-   **updated(\_changedProperties)**: Updates the UI style based on changes to the "ui" property.

## Usage

```html
<md-button type="button" label="Click me" icon="icon-name" ui="filled" activated></md-button>
```
