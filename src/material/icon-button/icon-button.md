# MdIconButtonComponent

`MdIconButtonComponent` is a custom LitElement representing a Material Design icon button.

## Properties

-   **type** (_String_): The type of the button (default is "button").
-   **icon** (_String_): The icon content for the button.
-   **ui** (_String_): The UI style of the button (`filled`, `filled-tonal`, `outlined`).
-   **toggle** (_Boolean_): Reflects whether the button is in toggle mode.
-   **activated** (_Boolean_): Reflects whether the button is activated.

## Methods

-   **iconButtonNative()**: Returns the native button element.
-   **onIconButtonClick(event)**: Event handler for the button click. Toggles activation if in toggle mode and dispatches a custom event.

## Lifecycle Methods

-   **connectedCallback()**: Adds the "md-icon-button" class when the element is connected.
-   **disconnectedCallback()**: Removes the "md-icon-button" class when the element is disconnected.
-   **firstUpdated()**: Initializes the `MdStateController` with specific properties.
-   **updated(\_changedProperties)**: Updates the UI style and toggle mode based on property changes.

## Usage

```html
<md-icon-button type="button" icon="icon-name" ui="filled" toggle activated></md-icon-button>
```
