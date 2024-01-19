# MdButtonComponent

`MdButtonComponent` is a custom LitElement representing a material design button.

## Properties

-   `type` (String): Specifies the type of the button. Default value is "button".
-   `label` (String): The label text for the button.
-   `icon` (String): The icon to be displayed within the button.
-   `ui` (String): The UI style of the button. Possible values are "elevated", "filled", "filled-tonal", "outlined".
-   `activated` (Boolean, reflected): Reflects whether the button is activated.

## Instance Methods

-   `buttonNative`: Returns the native button element.

## Events

No custom events are defined in this component.

## Examples

### Basic Usage

```html
<md-button label="Click me"></md-button>
```
