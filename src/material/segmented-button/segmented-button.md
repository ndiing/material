# MdSegmentedButtonComponent

`MdSegmentedButtonComponent` is a custom LitElement representing a Material Design segmented button.

## Properties

-   **items** (_Array_): An array of objects representing individual segmented button items.
-   **type** (_String_): The type of segmented button (`multi-select` for multiple selections).

## Methods

-   **onSegmentedButtonClick(event)**: Event handler for the segmented button click. Toggles activation based on the button type.

## Lifecycle Methods

-   **connectedCallback()**: Adds the "md-segmented-button" class when the element is connected.
-   **disconnectedCallback()**: Removes the "md-segmented-button" class when the element is disconnected.

## Usage

```html
<md-segmented-button type="multi-select" .items="${segmentedButtonItems}"></md-segmented-button>
```
