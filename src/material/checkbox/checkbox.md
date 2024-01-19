# MdCheckboxComponent

`MdCheckboxComponent` is a custom LitElement representing a Material Design checkbox.

## Properties

-   **name** (_String_): The name attribute of the checkbox.
-   **indeterminate** (_Boolean_): Reflects whether the checkbox is in an indeterminate state.
-   **checked** (_Boolean_): Reflects whether the checkbox is checked.

## Methods

-   **checkboxNative()**: Returns the native checkbox input element.
-   **checkboxTrack()**: Returns the track element of the checkbox.
-   **checkboxThumb()**: Returns the thumb element of the checkbox.
-   **onCheckboxNativeInput(event)**: Event handler for the checkbox input. Updates properties based on the input event.

## Lifecycle Methods

-   **connectedCallback()**: Adds the "md-checkbox" class when the element is connected.
-   **disconnectedCallback()**: Removes the "md-checkbox" class when the element is disconnected.
-   **firstUpdated()**: Initializes the `MdStateController` with specific properties.
-   **updated(\_changedProperties)**: No specific logic implemented in the `updated` lifecycle method.

## Usage

```html
<md-checkbox name="checkboxName" .indeterminate="${false}" .checked="${true}"></md-checkbox>
```
