# MDColorPickerComponent

The `MDColorPickerComponent` interface represents a `<md-color-picker>` element in the DOM. {{desc}}

## Instance Properties
This interface also inherits properties from its parent, `MDSheetComponent`.

| Name | Type | Description |
| --- | --- | --- |
| value | `String` | {{desc}} |

## Instance Methods
This interface also inherits methods from its parent, `MDSheetComponent`.

| Name | Parameters | Description |
| --- | --- | --- |
| init |  | {{desc}} |
| draw |  | {{desc}} |
| findPixel | `r`, `g`, `b` | {{desc}} |
| updateHsla |  | {{desc}} |
| updateThumb |  | {{desc}} |
| updateRgba | `event` | {{desc}} |
| showModal | `button`, `options` | {{desc}} |
| show | `button`, `options` | {{desc}} |
| setPlacement | `button`, `options` | {{desc}} |

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the @onEventName property of this interface.

| Name | Description |
| --- | --- |
| `onColorPickerIconButtonClick` | {{desc}} |
| `onColorPickerButtonClick` | {{desc}} |
| `onColorPickerSelection` | {{desc}} |
| `onColorPickerIconButtonPrevClick` | {{desc}} |
| `onColorPickerIconButtonNextClick` | {{desc}} |
| `onColorPickerButtonLabelClick` | {{desc}} |
| `onColorPickerButtonCancelClick` | {{desc}} |
| `onColorPickerButtonOkClick` | {{desc}} |
| `onColorPickerGradientTrackPointerdown` | {{desc}} |
| `onColorPickerGradientTrackPointermove` | {{desc}} |
| `onColorPickerGradientTrackPointerup` | {{desc}} |
| `onColorPickerHueNativeInput` | {{desc}} |
| `onColorPickerOpacityNativeInput` | {{desc}} |

## Inheritance
`MDSheetComponent`

