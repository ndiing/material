# MDColorPickerComponent

The `MDColorPickerComponent` interface represents a `<md-color-picker>` element in the DOM.
A component for selecting and picking colors, extending MDSheetComponent.



### Events

| Event | Description |
|-------|-------------|
| `MDColorPickerComponent#event:onColorPickerIconButtonClick - Fired when an icon button is clicked.` | |
| `MDColorPickerComponent#event:onColorPickerButtonClick - Fired when a button is clicked.` | |
| `MDColorPickerComponent#event:onColorPickerSelection - Fired when a color is selected.` | |
| `MDColorPickerComponent#event:onColorPickerIconButtonPrevClick - Fired when the previous icon button is clicked.` | |
| `MDColorPickerComponent#event:onColorPickerIconButtonNextClick - Fired when the next icon button is clicked.` | |
| `MDColorPickerComponent#event:onColorPickerButtonLabelClick - Fired when the label button is clicked.` | |
| `MDColorPickerComponent#event:onColorPickerButtonCancelClick - Fired when the cancel button is clicked.` | |
| `MDColorPickerComponent#event:onColorPickerButtonOkClick - Fired when the OK button is clicked.` | |
| `MDColorPickerComponent#event:onColorPickerGradientTrackPointerdown - Fired when the gradient track is pressed down.` | |
| `MDColorPickerComponent#event:onColorPickerGradientTrackPointermove - Fired when the gradient track is moved.` | |
| `MDColorPickerComponent#event:onColorPickerGradientTrackPointerup - Fired when the gradient track is released.` | |
| `MDColorPickerComponent#event:onColorPickerHueNativeInput - Fired when the hue input is changed.` | |
| `MDColorPickerComponent#event:onColorPickerOpacityNativeInput - Fired when the opacity input is changed.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `value` | (String) | The selected color value in hex format. |






# body

The body content of the color picker component.






#### Returns

| Type | Description |
|------|-------------|
| Array | The main rendered content of the component. |

# body

Sets the body content of the color picker component.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | (Array) | The body content to be set. |


# leadingActions

The leading actions of the color picker component.






#### Returns

| Type | Description |
|------|-------------|
| Array | An array containing the leading actions. |

# actions

The actions of the color picker component.






#### Returns

| Type | Description |
|------|-------------|
| Array | An array containing the actions. |

# init

Initializes the color picker canvas and thumb elements.







# draw

Draws the color gradient on the canvas.







# findPixel

Finds the pixel on the canvas with the specified color values.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `r` | (Number) | The red color value. |
| `g` | (Number) | The green color value. |
| `b` | (Number) | The blue color value. |

#### Returns

| Type | Description |
|------|-------------|
| Object | The coordinates of the found pixel. |

# updateHsla

Updates the HSLA selection values based on the current color value.







# updateThumb

Updates the position of the color picker thumb based on the selected color.







# updateRgba

Updates the RGBA selection values based on the pointer event.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `event` | (PointerEvent) | The pointer event. |


# showModal

Displays the modal and sets its placement relative to the given button.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `button` | (HTMLElement) | The button element to position the modal relative to. |
| `options` | (Object) | Additional options for positioning. |


# show

Shows the component and sets its placement relative to the given button.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `button` | (HTMLElement) | The button element to position the component relative to. |
| `options` | (Object) | Additional options for positioning. |


# setPlacement

Sets the placement of the component relative to the given button.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `button` | (HTMLElement) | The button element to position the component relative to. |
| `options` | (Object) | Additional options for positioning. |


