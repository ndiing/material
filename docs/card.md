# MDCardComponent

The `MDCardComponent` interface represents a `<md-card>` element in the DOM. Card component for Material Design.

## Instance Properties
This interface also inherits properties from its parent, `MDComponent`.

| Name | Type | Description |
| --- | --- | --- |
| variant | `String` | The variant style of the card (e.g., elevated, filled, outlined). |
| leadingActions | `Array` | Actions displayed at the leading edge of the card. |
| label | `String` | The primary label of the card. |
| subLabel | `String` | The secondary label of the card. |
| trailingActions | `Array` | Actions displayed at the trailing edge of the card. |
| actions | `Array` | Actions displayed in the card body or footer. |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onCardIconButtonClick` | Event fired when an icon button inside the card is clicked. |
| `onCardIconClick` | Event fired when an icon inside the card is clicked. |
| `onCardButtonClick` | Event fired when a button inside the card is clicked. |
| `onCardFabClick` | Event fired when a FAB (floating action button) inside the card is clicked. |
| `onCardTextFieldNativeFocus` | Event fired when a native input field inside the card gains focus. |
| `onCardTextFieldNativeBlur` | Event fired when a native input field inside the card loses focus. |
| `onCardTextFieldNativeInput` | Event fired when a native input field inside the card receives input. |
| `onCardTextFieldNativeSearch` | Event fired when a native input field inside the card performs a search. |
| `onCardTextFieldNativeInvalid` | Event fired when a native input field inside the card becomes invalid. |
| `onCardTextFieldNativeReset` | Event fired when a native input field inside the card is reset. |
| `onCardTextFieldIconButtonClick` | Event fired when an icon button inside a text field inside the card is clicked. |
| `onCardPaginationChange` | Event fired when pagination changes inside the card. |
| `onCardPaginationLimitChange` | Event fired when pagination limit changes inside the card. |
| `onCardPaginationFirstClick` | Event fired when the first pagination button inside the card is clicked. |
| `onCardPaginationPrevClick` | Event fired when the previous pagination button inside the card is clicked. |
| `onCardPaginationNextClick` | Event fired when the next pagination button inside the card is clicked. |
| `onCardPaginationLastClick` | Event fired when the last pagination button inside the card is clicked. |

## Inheritance
`MDComponent`

