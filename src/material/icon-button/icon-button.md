# MdIconButtonComponent

`MdIconButtonComponent` is a custom LitElement representing a material design icon button.

## Properties

-   `type` (String): Specifies the type of the button. Default value is "button".
-   `icon` (String): The icon to be displayed within the button.
-   `ui` (String): The UI style of the button. Possible values are "filled", "filled-tonal", "outlined".
-   `toggle` (Boolean): Indicates whether the button is in a toggle state.
-   `activated` (Boolean, reflected): Reflects whether the button is activated.

## Instance Methods

-   `iconButtonNative`: Returns the native button element.

## Examples

### Basic Usage

```html
<md-icon-button icon="favorite"></md-icon-button>
```
