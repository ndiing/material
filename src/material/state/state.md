# MdStateController

`MdStateController` is a utility class for managing the state of a component with various visual effects.

## Constructor

### `constructor(host, options = {})`

Creates a new instance of `MdStateController`.

-   `host` (required): The host component to which the state controller is attached.
-   `options` (optional): Configuration options for the state controller.
    -   `container` (default: `host`): The container element for the state.
    -   `containment` (default: `true`): Whether to apply containment styles.
    -   `fadeout` (default: `undefined`): Whether to apply fadeout styles.
    -   `inverted` (default: `undefined`): Whether to apply inverted styles.
    -   `button` (default: `undefined`): The button element associated with the state.
    -   `size` (default: `undefined`): The size of the state.

## Instance Methods

### `hostConnected()`

Handles the actions when the host component is connected to the DOM.

### `handlePointerenter(event)`

Handles the pointerenter event and adds the "md-state--hover" class to the container.

### `handlePointerleave(event)`

Handles the pointerleave event and removes the "md-state--hover" class from the container.

### `handlePointerdown(event)`

Handles the pointerdown event and triggers the state transition, including animation.

### `handlePointerup(event)`

Handles the pointerup event and resets the state after the pointer is released.

### `handleFocus(event)`

Handles the focus event and adds the "md-state--focused" class to the container.

### `handleBlur(event)`

Handles the blur event and removes the "md-state--focused" class from the container.

### `hostDisconnected()`

Handles the actions when the host component is disconnected from the DOM.

## Usage Example

```javascript
import { MdStateController } from "path/to/MdStateController.js";

class MyComponent extends HTMLElement {
    constructor() {
        super();
        // Initialize MdStateController for this component
        this.stateController = new MdStateController(this);
    }

    connectedCallback() {
        // Perform additional setup when the component is connected to the DOM
        this.stateController.hostConnected();
    }

    disconnectedCallback() {
        // Perform cleanup when the component is disconnected from the DOM
        this.stateController.hostDisconnected();
    }
}

customElements.define("my-component", MyComponent);
```
