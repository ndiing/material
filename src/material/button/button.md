# MdButtonComponent (Button)

`MdButtonComponent` is a custom LitElement representing a material design button.

_Buttons prompt most actions in a UI_

- Can contain an optional leading icon
- Five types: elevated, filled, filled tonal, outlined, and text
- Keep labels concise and in sentence-case
- Containers have fully rounded corners and are wide enough to fit label text

## Usage

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars

There are 5 types of button:

1. Elevated
2. Filled
3. Filled tonal
4. Outlined
5. Text buttons

## Properties

| Property  | Type    | Default  | Description                                           |
| --------- | ------- | -------- | ----------------------------------------------------- |
| type      | String  | "button" | Specifies the type of the button.                     |
| label     | String  | -        | The label text for the button.                        |
| icon      | String  | -        | The icon to be displayed on the button.               |
| ui        | String  | -        | UI style for the button (e.g., "filled", "outlined"). |
| activated | Boolean | -        | Reflects the activation state of the button.          |

## Instance Methods

- `buttonNative`: Returns the native button element.

## Events

None

## Examples

1. Elevated button
   Elevated buttons are essentially filled tonal buttons with a shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button requires visual separation from a patterned background.

- Visible label text:

```html
<md-button ui="elevated" label="Label"></md-button>
```

- Visible icon and label text:

```html
<md-button ui="elevated" icon="image" label="Label"></md-button>
```

2. Filled button
   Filled buttons have the most visual impact after the FAB, and should be used for important, final actions that complete a flow, like Save, Join now, or Confirm.

- Visible label text:

```html
Label <md-button ui="filled" label="Label"></md-button>
```

- Visible icon and label text:

```html
<md-button ui="filled" icon="image" label="Label"></md-button>
```

3. Filled tonal button
   A filled tonal button is an alternative middle ground between filled and outlined buttons. They’re useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give, such as "Next" in an onboarding flow. Tonal buttons use the secondary color mapping.

- Visible label text:

```html
<md-button ui="filled-tonal" label="Label"></md-button>
```

- Visible icon and label text:

```html
<md-button ui="filled-tonal" icon="image" label="Label"></md-button>
```

4. Outlined button
   Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.
   Outlined buttons pair well with filled buttons to indicate an alternative, secondary action.

- Visible label text:

```html
<md-button ui="outlined" label="Label"></md-button>
```

- Visible icon and label text:

```html
<md-button ui="outlined" icon="image" label="Label"></md-button>
```

5. Label button
   Text buttons are used for the lowest priority actions, especially when presenting multiple options.

   Text buttons can be placed on a variety of backgrounds. Until the button is interacted with, its container isn’t visible.

- Visible label text:

```html
<md-button label="Label"></md-button>
```

- Visible icon and label text:

```html
<md-button icon="image" label="Label"></md-button>
```
