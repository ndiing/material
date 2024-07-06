<a name="MDColorPickerComponent"></a>

## MDColorPickerComponent ⇐ <code>MDSheetComponent</code>
A component for selecting and picking colors, extending MDSheetComponent.

**Kind**: global class  
**Extends**: <code>MDSheetComponent</code>  

| Emits |
|-------|
| <code>MDColorPickerComponent#event:onColorPickerIconButtonClick - Fired when an icon button is clicked.</code>, <code>MDColorPickerComponent#event:onColorPickerButtonClick - Fired when a button is clicked.</code>, <code>MDColorPickerComponent#event:onColorPickerSelection - Fired when a color is selected.</code>, <code>MDColorPickerComponent#event:onColorPickerIconButtonPrevClick - Fired when the previous icon button is clicked.</code>, <code>MDColorPickerComponent#event:onColorPickerIconButtonNextClick - Fired when the next icon button is clicked.</code>, <code>MDColorPickerComponent#event:onColorPickerButtonLabelClick - Fired when the label button is clicked.</code>, <code>MDColorPickerComponent#event:onColorPickerButtonCancelClick - Fired when the cancel button is clicked.</code>, <code>MDColorPickerComponent#event:onColorPickerButtonOkClick - Fired when the OK button is clicked.</code>, <code>MDColorPickerComponent#event:onColorPickerGradientTrackPointerdown - Fired when the gradient track is pressed down.</code>, <code>MDColorPickerComponent#event:onColorPickerGradientTrackPointermove - Fired when the gradient track is moved.</code>, <code>MDColorPickerComponent#event:onColorPickerGradientTrackPointerup - Fired when the gradient track is released.</code>, <code>MDColorPickerComponent#event:onColorPickerHueNativeInput - Fired when the hue input is changed.</code>, <code>MDColorPickerComponent#event:onColorPickerOpacityNativeInput - Fired when the opacity input is changed.</code> |
**Tagname**: md-color-picker  

* [MDColorPickerComponent](#MDColorPickerComponent) ⇐ <code>MDSheetComponent</code>
    * [.properties](#MDColorPickerComponent+properties)
    * [.body](#MDColorPickerComponent+body) ⇒ <code>Array</code>
    * [.body](#MDColorPickerComponent+body)
    * [.leadingActions](#MDColorPickerComponent+leadingActions) ⇒ <code>Array</code>
    * [.actions](#MDColorPickerComponent+actions) ⇒ <code>Array</code>
    * [.init()](#MDColorPickerComponent+init)
    * [.draw()](#MDColorPickerComponent+draw)
    * [.findPixel(r, g, b)](#MDColorPickerComponent+findPixel) ⇒ <code>Object</code>
    * [.updateHsla()](#MDColorPickerComponent+updateHsla)
    * [.updateThumb()](#MDColorPickerComponent+updateThumb)
    * [.updateRgba(event)](#MDColorPickerComponent+updateRgba)
    * [.showModal(button, options)](#MDColorPickerComponent+showModal)
    * [.show(button, options)](#MDColorPickerComponent+show)
    * [.setPlacement(button, options)](#MDColorPickerComponent+setPlacement)

<a name="MDColorPickerComponent+properties"></a>

### mdColorPickerComponent.properties
**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | The selected color value in hex format. |

<a name="MDColorPickerComponent+body"></a>

### mdColorPickerComponent.body ⇒ <code>Array</code>
The body content of the color picker component.

**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Returns**: <code>Array</code> - The main rendered content of the component.  

| Emits |
|-------|
<a name="MDColorPickerComponent+body"></a>

### mdColorPickerComponent.body
Sets the body content of the color picker component.

**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | The body content to be set. |

<a name="MDColorPickerComponent+leadingActions"></a>

### mdColorPickerComponent.leadingActions ⇒ <code>Array</code>
The leading actions of the color picker component.

**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Returns**: <code>Array</code> - An array containing the leading actions.  

| Emits |
|-------|
<a name="MDColorPickerComponent+actions"></a>

### mdColorPickerComponent.actions ⇒ <code>Array</code>
The actions of the color picker component.

**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Returns**: <code>Array</code> - An array containing the actions.  

| Emits |
|-------|
<a name="MDColorPickerComponent+init"></a>

### mdColorPickerComponent.init()
Initializes the color picker canvas and thumb elements.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|
<a name="MDColorPickerComponent+draw"></a>

### mdColorPickerComponent.draw()
Draws the color gradient on the canvas.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|
<a name="MDColorPickerComponent+findPixel"></a>

### mdColorPickerComponent.findPixel(r, g, b) ⇒ <code>Object</code>
Finds the pixel on the canvas with the specified color values.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Returns**: <code>Object</code> - The coordinates of the found pixel.  

| Emits |
|-------|

| Param | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | The red color value. |
| g | <code>Number</code> | The green color value. |
| b | <code>Number</code> | The blue color value. |

<a name="MDColorPickerComponent+updateHsla"></a>

### mdColorPickerComponent.updateHsla()
Updates the HSLA selection values based on the current color value.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|
<a name="MDColorPickerComponent+updateThumb"></a>

### mdColorPickerComponent.updateThumb()
Updates the position of the color picker thumb based on the selected color.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|
<a name="MDColorPickerComponent+updateRgba"></a>

### mdColorPickerComponent.updateRgba(event)
Updates the RGBA selection values based on the pointer event.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|

| Param | Type | Description |
| --- | --- | --- |
| event | <code>PointerEvent</code> | The pointer event. |

<a name="MDColorPickerComponent+showModal"></a>

### mdColorPickerComponent.showModal(button, options)
Displays the modal and sets its placement relative to the given button.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> | The button element to position the modal relative to. |
| options | <code>Object</code> | Additional options for positioning. |

<a name="MDColorPickerComponent+show"></a>

### mdColorPickerComponent.show(button, options)
Shows the component and sets its placement relative to the given button.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> | The button element to position the component relative to. |
| options | <code>Object</code> | Additional options for positioning. |

<a name="MDColorPickerComponent+setPlacement"></a>

### mdColorPickerComponent.setPlacement(button, options)
Sets the placement of the component relative to the given button.

**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  

| Emits |
|-------|

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> | The button element to position the component relative to. |
| options | <code>Object</code> | Additional options for positioning. |

