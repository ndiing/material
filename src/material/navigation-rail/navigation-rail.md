# MdNavigationRail (Navigation Rail)

`MdNavigationRailComponent` is a custom element that extends
`MdPanelComponent` to create a navigation rail component.

> _Navigation rails let people switch between UI views on mid-sized devices_

- Use navigation rails in medium, expanded, large, and extra-large window sizes
- Can contain 3-7 destinations plus an optional FAB
- Always put the rail in the same place, even on different screens of an app

## Usage

The rail is a side navigation component that displays three to seven app destinations and, optionally, a floating action button (FAB). Each destination is represented by an icon and label text. One navigation destination is always active.

Use a navigation bar in compact window sizes.

Use a navigation rail in medium and expanded window sizes.

Use either a navigation rail or a standard navigation drawer in large and extra-large window sizes.

Navigation rails should be used for:

- Top-level destinations that need to be accessible anywhere in an app
- Three to seven main destinations in a product
- Tablet or desktop layouts

### Placement:

## Properties

| Property | Type   | Default  | Description                                    |
| -------- | ------ | -------- | ---------------------------------------------- |
| type     | String | "drawer" | Specifies the type of the navigation rail.     |
| position | String | "left"   | Specifies the position of the navigation rail. |
| items    | String | -        | List of items for the navigation rail.         |

## Instance Methods

None

## Events

None

## Example

```html
<md-navigation-rail
    id="navigationRail1"
    .items="${[
        { label: "Label", activated: true, leadingItems: [{ item: "md-icon", icon: "image" }] },
        { label: "Label", leadingItems: [{ item: "md-icon", icon: "image" }] },
        { label: "Label", badge: 1, leadingItems: [{ item: "md-icon", icon: "image" }] },
        { label: "Label", badge: "", leadingItems: [{ item: "md-icon", icon: "image" }] },
    ]}"
></md-navigation-rail>
```
