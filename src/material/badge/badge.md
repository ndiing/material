# MdBadgeComponent

`MdBadgeComponent` is a LitElement for displaying a badge with a numeric label.

## Instance Properties

| Property | Type   | Default | Description                                      |
| -------- | ------ | ------- | ------------------------------------------------ |
| `label`  | Number | -       | The numeric label to be displayed on the badge.  |
| `limit`  | Number | 999     | The limit for displaying the label on the badge. |

-   Can contain labels or numbers
-   Two types: small and large
-   Anchor badges inside the icon bounding box, at the upper trailing edge of the icon
-   Limit content to four characters, including a “+”
-   Keep the default color mapping

### Usage

Badges are used to indicate a notification, item count, or other information relating to a navigation destination. They are placed on the ending edge of icons, typically within other components.

There are 2 types of badges:

1. Small badge
2. Large badge

## Properties

-   `label` (Number): The numeric value to be displayed on the badge.
-   `limit` (Number): The limit for displaying the badge value. If the `label` exceeds this limit, it will be displayed as a “+”.

## Instance Methods

None

## Events

None

## Usage Example

````html
<md-badge label="42" limit="99"></md-badge>
1. Small badge, A small badge is a simple circle, used to indicate an unread notification. ```html
<md-badge></md-badge>
````

2. Large badge, A large badge contains label text communicating item count information.

```html
<md-badge label="1"></md-badge> <md-badge label="1000"></md-badge>
```
