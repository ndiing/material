# MdBadgeComponent

`MdBadgeComponent` is a custom LitElement representing a Material Design badge.

## Properties

-   **label** (_Number_): The numeric value displayed in the badge.
-   **limit** (_Number_): The maximum value to be displayed in the badge. If the `label` exceeds this limit, it will be truncated and suffixed with a '+' sign.

## Methods

-   No specific methods are implemented in this component.

## Lifecycle Methods

-   **connectedCallback()**: Adds the "md-badge" class when the element is connected.
-   **disconnectedCallback()**: Removes the "md-badge" class when the element is disconnected.
-   **firstUpdated()**: No specific logic implemented in the `firstUpdated` lifecycle method.
-   **updated(\_changedProperties)**: No specific logic implemented in the `updated` lifecycle method.

## Usage

```html
<md-badge label="42" limit="999"></md-badge>
```
