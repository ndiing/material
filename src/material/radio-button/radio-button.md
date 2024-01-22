# MdRadioButtonComponent (Radio Button)

`MdRadioButtonComponent` is a custom LitElement representing a material design radio button.

> _Radio buttons let people select one option from a set of options_

- Use radio buttons (not switches) when only one item can be selected from a list
- Label should be scannable
- Selected items are more prominent than unselected items

## Usage

Radio buttons are the recommended way to allow users to make a single selection from a list of options.

Only one radio button can be selected at a time.

Use radio buttons to:

- Select a single option from a set
- Expose all available options

## Properties

| Property | Type    | Default | Description                                    |
| -------- | ------- | ------- | ---------------------------------------------- |
| name     | String  |         | The name attribute for the radio button input. |
| checked  | Boolean |         | Indicates whether the radio button is checked. |

## Instance Methods

- `radioButtonNative`: Returns the native radio button input element.
- `radioButtonTrack`: Returns the track element of the radio button.
- `radioButtonThumb`: Returns the thumb element of the radio button.

## Events

- `onRadioButtonNativeInput`: Custom event dispatched when the native radio button input is interacted with.

## Examples

The radio button has two states: selected and unselected. There’s a brief but important interaction where the user changes the states of the buttons by selecting an option.

```html
<md-radio-button name="radio-button"></md-radio-button>
<md-radio-button name="radio-button" checked></md-radio-button>
```
