# MdIconButtonComponent (Icon Button)

`MdIconButtonComponent` is a custom LitElement representing a material design icon button.

_Icon buttons help people take minor actions with one tap_

- Icon buttons must use a system icon with a clear meaning
- Two types: standard and contained
- On hover, display a tooltip describing the button’s action (not the name of the icon)
- Use outline-style icons to indicate an unselected state, and filled-style icons for selected state

## Usage

Use icon buttons to display actions in a compact layout. Icon buttons can represent opening actions such as opening an overflow menu or search, or represent binary actions that can be toggled on and off, such as favorite or bookmark.

Icon buttons can be grouped together or they can stand alone.

There are two types of icon buttons:

1. Standard icon button
2. Contained icon button

## Properties

| Property  | Type    | Default  | Description                                  |
| --------- | ------- | -------- | -------------------------------------------- |
| type      | String  | "button" | The type of the button.                      |
| icon      | String  |          | The icon to be displayed on the button.      |
| ui        | String  |          | The UI style of the button.                  |
| toggle    | Boolean |          | Indicates whether the button is a toggle.    |
| activated | Boolean |          | Reflects the activation state of the button. |

## Instance Methods

- `iconButtonNative`: Returns the native button element.

## Events

- `onIconButtonClick`: Fired when the button is clicked.

## Examples

1. Standard icon button

```html
<md-icon-button toggle icon="image"></md-icon-button>
```

2. Contained icon button

```html
<md-icon-button toggle ui="filled" icon="image"></md-icon-button>
```
