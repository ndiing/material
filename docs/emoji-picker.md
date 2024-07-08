# MDEmojiPickerComponent
The `MDEmojiPickerComponent` interface represents a `<md-emoji-picker>` element in the DOM. {{desc}}

## Inheritance
`MDSheetComponent`

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
`onEmojiPickerTabsItemClick` | {{desc}}
`onEmojiPickerViewportVirtualScroll` | {{desc}}
`onEmojiPickerTextFieldNativeInput` | {{desc}}
`onEmojiPickerGridColumnClick` | {{desc}}
`onEmojiPickerIconButtonClick` | {{desc}}
`onEmojiPickerButtonClick` | {{desc}}
`onEmojiPickerSelection` | {{desc}}
`onEmojiPickerIconButtonPrevClick` | {{desc}}
`onEmojiPickerIconButtonNextClick` | {{desc}}
`onEmojiPickerButtonLabelClick` | {{desc}}
`onEmojiPickerButtonCancelClick` | {{desc}}
`onEmojiPickerButtonOkClick` | {{desc}}


## Instance properties
This interface also inherits properties from its parent, `MDSheetComponent`. undefined

name | type | desc
--- | --- | ---
`tabs` | `Object` | {{desc}}
`rows` | `Array` | {{desc}}
`body` | `ReadOnly` | {{desc}}
`body` | `ReadOnly` | {{desc}}
`leadingActions` | `ReadOnly` | {{desc}}
`actions` | `ReadOnly` | {{desc}}
`emojiPickerTabs` | `ReadOnly` | {{desc}}
`emojiPickerTabs` | `ReadOnly` | {{desc}}

## Instance methods
This interface also inherits methods from its parent, `MDSheetComponent`.

name | params | desc
--- | --- | ---
`updateEmojiPickerTabsIndicator` | `data` | {{desc}}
`generateTabsAndRows` | `data`,`tabs` | {{desc}}
`showModal` | `button`,`options` | {{desc}}
`show` | `button`,`options` | {{desc}}
`setPlacement` | `button`,`options` | {{desc}}



