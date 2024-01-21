# MdSwitchComponent (Switch)

`MdSwitchComponent` is a custom LitElement representing a material design switch.

_Switches toggle the selection of an item on or off_

- Use switches (not radio buttons) if the items in a list can be independently controlled
- Switches are the best way to let users adjust settings
- Make sure the switch’s selection (on or off) is visible at a glance

## Usage

Switches are best used to adjust settings and other standalone options. They make a binary selection, like on and off or true and false.

The effects of a switch should start immediately without needing to save.

## Properties

| Property | Type    | Default | Description                                               |
| -------- | ------- | ------- | --------------------------------------------------------- |
| name     | String  |         | The name attribute of the switch input element.           |
| checked  | Boolean |         | Represents/Reflects whether the switch is checked or not. |

## Instance Methods

- `switchNative`: Returns the native switch input element.
- `switchTrack`: Returns the track element of the switch.
- `switchThumb`: Returns the thumb element of the switch.
- `onSwitchNativeInput(event:Event)`: Handles the input event on the native checkbox, updates the `checked` property, and dispatches an "onSwitchNativeInput" event with details.

## Events

- `onSwitchNativeInput`: Fired when the native checkbox input is changed.

## Examples

Use a switch to turn an option on and off

```html
<md-switch></md-switch> <md-switch checked></md-switch>
```
