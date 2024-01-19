# MdSegmentedButtonComponent

`MdSegmentedButtonComponent` is a custom LitElement representing a material design segmented button.

## Properties

-   `items` (Array): An array of items to be displayed in the segmented button.
-   `type` (String): The type of the segmented button. Possible values are "multi-select" or not specified.

## Instance Methods

-   `onSegmentedButtonClick(event)`: Event handler for the segmented button click event. Toggles the activation state of the button(s) based on the type of segmented button.

## Examples

### Basic Usage

```html
<md-segmented-button .items="${[{ label: 'Option 1' }, { label: 'Option 2' }, { label: 'Option 3' }]}"></md-segmented-button>
```
