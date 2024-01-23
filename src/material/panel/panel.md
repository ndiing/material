# Panel

`MdNavigation` is a utility class for handling placement in a web application.

> _Panel is the visual position of elements on the screen_

- Destinations don't change. They should be consistent across app screens.

## Usage

The panel is used as a container for other contents. It is the base component for building other components such as layout, tabs, accordion, etc. It also provides built-in collapsible, closable, maximizable and minimizable behavior and other customized behavior. Panels can be easily embedded into any position of web page.

<hr>

# MdPanelScrimComponent

## Properties

No instance properties defined.

## Instance Methods

None

## Events

None

## Example

```html
<md-panel-scrim></md-panel-scrim>
```

<hr>

# MdPanelComponent

## Properties

| Property | Type    | Default | Description                                       |
| -------- | ------- | ------- | ------------------------------------------------- |
| open     | Boolean |         | Controls the visibility of the panel.             |
| type     | String  |         | Type of the panel (dialog, drawer).               |
| position | String  |         | Position of the panel (top, right, bottom, left). |

## Instance Methods

- `show()`: Shows the panel.
- `close()`: Shows the panel.
- `toggle()`: Toggles the visibility of panel.

## Events

- `onPanelScrimClick`: Triggered when the panel scrim is clicked.

## Example

```html
<md-panel open type="dialog" position="right"></md-panel>
```
