# MDRippleController (Ripple)

`MdStateController` is a utility class for managing the state of a component with various visual effects.

> _States show the interaction status of a component or UI element_

- States have two visual indicators to ensure accessibility
- States can be combined with selection (such as selection and hover)
- Apply states consistently across components

## Constructor

### `constructor(host, options = {})`

Creates a new instance of `MdStateController`.

- `host` (required): The host component to which the state controller is attached.
- `options` (optional): Configuration options for the state controller.
  - `container` (default: `host`): The container element for the state.
  - `containment` (default: `true`): Whether to apply containment styles.
  - `fadeout` (default: `undefined`): Whether to apply fadeout styles.
  - `inverted` (default: `undefined`): Whether to apply inverted styles.
  - `button` (default: `undefined`): The button element associated with the state.
  - `size` (default: `undefined`): The size of the state.

## Properties

| Property    | Type    | Default | Description                                      |
| ----------- | ------- | ------- | ------------------------------------------------ |
| container   | Element | host    | The container element for the ripple effect.     |
| button      | Element | host    | The button element triggering the ripple effect. |
| containment | boolean | true    | Flag indicating if the ripple is contained.      |
| inverted    | boolean | false   | Flag indicating if the ripple is inverted.       |
| fadeout     | boolean | false   | Flag indicating if the ripple fades out.         |
| size        | number  | null    | Size of the ripple effect in percentage.         |
| centered    | boolean | false   | Flag indicating if the ripple is centered.       |
| layer       | Element | -       | The layer element for the ripple effect.         |

## Instance Methods

- `hostConnected()`: Handles the actions when the host component is connected to the DOM.

- `handlePointerenter(event)`: Handles the pointerenter event and adds the "md-state--hover" class to the container.

- `handlePointerleave(event)`: Handles the pointerleave event and removes the "md-state--hover" class from the container.

- `handlePointerdown(event)`: Handles the pointerdown event and triggers the state transition, including animation.

- `handlePointerup(event)`: Handles the pointerup event and resets the state after the pointer is released.

- `handleFocus(event)`: Handles the focus event and adds the "md-state--focused" class to the container.

- `handleBlur(event)`: Handles the blur event and removes the "md-state--focused" class from the container.

- `hostDisconnected()`: andles the actions when the host component is disconnected from the DOM.

> - `hostConnected()`: Method called when the host element is connected.
> - `hostDisconnected()`: Method called when the host element is disconnected.
> - `handleRipplePointerenter(event)`: Handles pointer enter event for ripple.
> - `handleRipplePointerleave(event)`: Handles pointer leave event for ripple.
> - `handleRipplePointerdown(event)`: Handles pointer down event for ripple.
> - `handleRipplePointerup(event)`: Handles pointer up event for ripple.

## Event

None

## Usage Example

```javascript
import { MDRippleController } from '../base/controller';

// Create an instance of MDRippleController
const rippleController = new MDRippleController(
  document.getElementById('yourHostElement'),
  {
    // Specify optional options here
  }
);

// Connect the controller when the host element is ready
rippleController.hostConnected();

// Disconnect the controller when the host element is removed
rippleController.hostDisconnected();
```
