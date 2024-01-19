# MdIconComponent

`MdIconComponent` is a custom web component that extends `LitElement` and represents an icon.

## Properties

-   No properties are defined for this component.

## Instance Methods

### `createRenderRoot()`

Overrides the `LitElement` method to return `this`, making the component's own shadow DOM the render root.

### `connectedCallback()`

Overrides the `LitElement` method to add the class "md-icon" to the component when it is connected to the DOM.

### `disconnectedCallback()`

Overrides the `LitElement` method to remove the class "md-icon" from the component when it is disconnected from the DOM.

### `firstUpdated()`

Overrides the `LitElement` method. This method is called once after the first update/render of the component.

### `updated(_changedProperties)`

Overrides the `LitElement` method. This method is called whenever the element is updated.

### `dispatchCustomEvent()`

Dispatches a custom event named "custom-event" from the component.

## Events

-   `custom-event`: Triggered by the `dispatchCustomEvent` method.

## Examples

### Creating an `MdIconComponent` in HTML:

```html
<md-icon></md-icon>
```
