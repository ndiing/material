# MdIconComponent Documentation

`MdIconComponent` is a LitElement component representing an MD (Material Design) icon.

## Properties

The `MdIconComponent` class does not declare any properties.

## Methods

### `createRenderRoot()`

Overrides the default LitElement `createRenderRoot` method to return the component itself as the render root.

### `connectedCallback()`

Overrides the default LitElement `connectedCallback` method to add the "md-icon" class to the component when it is connected to the DOM.

### `disconnectedCallback()`

Overrides the default LitElement `disconnectedCallback` method to remove the "md-icon" class from the component when it is disconnected from the DOM.

### `firstUpdated()`

This method is empty and does not contain any specific implementation.

### `updated(_changedProperties)`

This method is empty and does not contain any specific implementation.

### `dispatchCustomEvent()`

Dispatches a custom event named "custom-event" using the `dispatchEvent` method.

## Lifecycle Methods

The provided code explicitly omits lifecycle methods (`firstUpdated` and `updated`).

## Custom Elements Registration

Registers the custom element using `customElements.define("md-icon", MdIconComponent)`.

## Usage

To use the `MdIconComponent` in your project, import it as follows:

```javascript
import { MdIconComponent } from "path-to-md-icon-component";
```
