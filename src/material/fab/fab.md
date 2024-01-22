# MdFabComponent (Floating Action Buttons (FAB) & Extend FAB)

`MdFabComponent` is a custom LitElement representing a material design floating action button (FAB).

## FAB

> _Floating action buttons (FABs) help people take primary actions_

- Use a FAB for the most common or important action on a screen
- Make sure the icon in a FAB is clear and understandable
- FABs persist on the screen when content is scrolling
- Three sizes: FAB, small FAB, large FAB

## Extended FAB

> _Extended floating action buttons (extended FABs) help people take primary actions_

- Use an extended FAB for the most common or important action on a screen
- Contains both an icon and label text
- The most prominent type of button
- Use when a regular FAB (with just an icon) may not be clear

## Usage

### FAB

Use a FAB for the most important action on a screen. The FAB appears in front of all other content on screen, and is recognizable for its rounded shape and icon in the center.

Only use a FAB for presenting a screen's primary action.

The FAB can be aligned left, center, or right. It can be positioned above the navigation bar, or nested within the bar.

There are 3 sizes of FAB:

1.  FAB
2.  Small FAB
3.  Large FAB

### Extended FAB

Use an extended FAB on screens with long, scrolling views that require persistent access to an action, such as a check-out screen. Do not use an extended FAB in a view that cannot scroll.

There are 2 styles of Extend FAB:

1. Extended FAB with both icon and label text
2. Extended FAB without icon

## Properties

| Property | Type    | Default  | Description                                                                                              |
| -------- | ------- | -------- | -------------------------------------------------------------------------------------------------------- |
| type     | String  | "button" | The type attribute of the underlying button element.                                                     |
| label    | String  |          | The label to be displayed on the floating action button (FAB).                                           |
| icon     | String  |          | The icon to be displayed on the floating action button (FAB).                                            |
| size     | String  |          | The size of the floating action button ("small" or "large").                                             |
| extended | Boolean |          | Indicates whether the floating action button (FAB) is in extended mode or should have an extended style. |

## Instance Methods

- `fabNative`: Returns the native button element.

## Events

None

## Examples

### FAB

1. FAB

   Use a FAB to represent the screen’s primary action.

```html
<md-fab icon="image"></md-fab>
```

2. Small FAB

   A small FAB is used for a secondary, supporting action, or in place of a default FAB on compact window sizes.
   One or more small FABs can be paired with a default FAB or extended FAB.

```html
<md-fab size="small" icon="image"></md-fab>
```

3. Large FAB

   A large FAB is useful when the layout calls for a clear and prominent primary action, and where a larger footprint would help the user engage. For example, when appearing in a medium window size.

```html
<md-fab size="large" icon="image"></md-fab>
```

### Extend FAB

1. Extended FAB with both icon and label text

```html
<md-fab extended icon="image" label="Label"></md-fab>
```

2. Extended FAB without icon

```html
<md-fab extended label="Label"></md-fab>
```
