# MdRadioButtonComponent

`MdRadioButtonComponent` is a custom LitElement representing a Material Design radio button.

## Properties

-   **name** (_String_): The name attribute of the radio button.
-   **checked** (_Boolean_): Reflects whether the radio button is checked.

## Methods

-   **radioButtonNative()**: Returns the native radio button input element.
-   **radioButtonTrack()**: Returns the track element of the radio button.
-   **radioButtonThumb()**: Returns the thumb element of the radio button.
-   **onRadioButtonNativeInput(event)**: Event handler for the radio button input. Updates properties based on the input event.

## Lifecycle Methods

-   **connectedCallback()**: Adds the "md-radio-button" class when the element is connected.
-   **disconnectedCallback()**: Removes the "md-radio-button" class when the element is disconnected.
-   **firstUpdated()**: Initializes the `MdStateController` with specific properties.

## Usage

```html
<md-radio-button name="radioGroupName" .checked="${true}"></md-radio-button>
```
