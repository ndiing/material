# MdSwitchComponent

`MdSwitchComponent` is a custom LitElement representing a Material Design switch.

## Properties

-   **name** (_String_): The name attribute of the switch.
-   **checked** (_Boolean_): Reflects whether the switch is checked.

## Methods

-   **switchNative()**: Returns the native switch input element.
-   **switchTrack()**: Returns the track element of the switch.
-   **switchThumb()**: Returns the thumb element of the switch.
-   **onSwitchNativeInput(event)**: Event handler for the switch input. Updates properties based on the input event.

## Lifecycle Methods

-   **connectedCallback()**: Adds the "md-switch" class when the element is connected.
-   **disconnectedCallback()**: Removes the "md-switch" class when the element is disconnected.
-   **firstUpdated()**: Initializes the `MdStateController` with specific properties.
-   **updated(\_changedProperties)**: No specific logic implemented in the `updated` lifecycle method.

## Usage

```html
<md-switch name="switchName" .checked="${true}"></md-switch>
```
