# MDCardComponent
The `MDCardComponent` interface represents a `<md-card>` element in the DOM. A custom element representing a card with various interactive elements and actions.

## Inheritance
`MDComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onCardIconButtonClick` | Event fired when an icon button in the card is clicked.
`onCardIconClick` | Event fired when an icon in the card is clicked.
`onCardButtonClick` | Event fired when a button in the card is clicked.
`onCardFabClick` | Event fired when a FAB (Floating Action Button) in the card is clicked.
`onCardTextFieldNativeFocus` | Event fired when a native text field in the card receives focus.
`onCardTextFieldNativeBlur` | Event fired when a native text field in the card loses focus.
`onCardTextFieldNativeInput` | Event fired when input occurs in a native text field in the card.
`onCardTextFieldNativeSearch` | Event fired when a search action occurs in a native text field in the card.
`onCardTextFieldNativeInvalid` | Event fired when a native text field in the card is invalid.
`onCardTextFieldNativeReset` | Event fired when a reset action occurs in a native text field in the card.
`onCardTextFieldIconButtonClick` | Event fired when an icon button in a text field in the card is clicked.
`onCardPaginationChange` | Event fired when pagination in the card changes.
`onCardPaginationLimitChange` | Event fired when pagination limit in the card changes.
`onCardPaginationFirstClick` | Event fired when the first page button in pagination in the card is clicked.
`onCardPaginationPrevClick` | Event fired when the previous page button in pagination in the card is clicked.
`onCardPaginationNextClick` | Event fired when the next page button in pagination in the card is clicked.
`onCardPaginationLastClick` | Event fired when the last page button in pagination in the card is clicked.


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. Defines the properties of the card element.

name | type | desc
--- | --- | ---
`variant` | `String` | The variant style of the card (e.g., "elevated", "filled", "outlined").
`leadingActions` | `Array` | An array of leading actions (e.g., icon buttons) in the card.
`label` | `String` | The primary label text of the card.
`subLabel` | `String` | The secondary label text of the card.
`trailingActions` | `Array` | An array of trailing actions (e.g., icon buttons) in the card.
`actions` | `Array` | An array of general actions (e.g., buttons, FABs) in the card footer.



