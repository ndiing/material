<a name="MDTextFieldComponent"></a>

## MDTextFieldComponent ⇐ <code>MDComponent</code>
Represents a text field component that extends MDComponent.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDTextFieldComponent#event:onTextFieldNativeFocus - Fired when the native input element of the text field receives focus.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeBlur - Fired when the native input element of the text field loses focus.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeInput - Fired when the value of the native input element of the text field changes.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeSearch - Fired when a search is performed in the native input element of the text field.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeInvalid - Fired when the native input element of the text field becomes invalid.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeReset - Fired when the value of the native input element of the text field is reset.</code>  
**Tagname**: md-text-field  

* [MDTextFieldComponent](#MDTextFieldComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDTextFieldComponent+properties)
    * [.native](#MDTextFieldComponent+native) ⇒ <code>HTMLInputElement</code> \| <code>HTMLTextAreaElement</code> \| <code>HTMLSelectElement</code>
    * [.populate()](#MDTextFieldComponent+populate)
    * [.validate()](#MDTextFieldComponent+validate)

<a name="MDTextFieldComponent+properties"></a>

### mdTextFieldComponent.properties
**Kind**: instance property of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | The label text for the text field. |
| icon | <code>String</code> | The icon name for the text field. |
| prefix | <code>String</code> | The prefix text for the text field. |
| suffix | <code>String</code> | The suffix text for the text field. |
| actions | <code>Array</code> | The list of actions associated with the text field. |
| text | <code>String</code> | The additional text content for the text field. |
| accept | <code>String</code> | The file types that the server accepts (only for type="file"). |
| alt | <code>String</code> | The alternative text for the image specified by src (only for type="image"). |
| autocomplete | <code>String</code> | Hint for form autofill feature. |
| autofocus | <code>Boolean</code> | Indicates whether the text field should automatically get focus when the page loads. |
| checked | <code>Boolean</code> | Indicates whether the input element should be checked (only for type="radio" or type="checkbox"). |
| defaultChecked | <code>Boolean</code> | Indicates the default checked state (only for type="radio" or type="checkbox"). |
| disabled | <code>Boolean</code> | Indicates whether the input element should be disabled. |
| files | <code>FileList</code> | The list of selected files (only for type="file"). |
| form | <code>Object</code> | The form element that the text field is associated with (form owner). |
| formAction | <code>String</code> | The URL where the form data should be submitted (only for type="submit" or type="image"). |
| formEnctype | <code>String</code> | The encoding type for form data submission (only for method="post"). |
| formMethod | <code>String</code> | The HTTP method for submitting the form. |
| formNoValidate | <code>Boolean</code> | Indicates whether the form should not be validated upon submission. |
| formTarget | <code>String</code> | The browsing context for form submission (name of or keyword for a browsing context). |
| height | <code>Number</code> | The height of the text field (only for type="image"). |
| indeterminate | <code>Boolean</code> | Indicates whether a checkbox is in an indeterminate state (only for type="checkbox"). |
| list | <code>Object</code> | The list of options that the user can choose from (datalist element). |
| max | <code>String</code> | The maximum value for the input element (only for type="date", type="month", type="week", type="time", or type="datetime-local"). |
| maxLength | <code>Number</code> | The maximum number of characters allowed in the input element. |
| min | <code>String</code> | The minimum value for the input element (only for type="date", type="month", type="week", type="time", or type="datetime-local"). |
| minLength | <code>Number</code> | The minimum number of characters allowed in the input element. |
| multiple | <code>Boolean</code> | Indicates whether the user can select more than one file (only for type="file"). |
| name | <code>String</code> | The name of the input element. |
| pattern | <code>String</code> | The regular expression pattern that the input element's value is checked against. |
| placeholder | <code>String</code> | The placeholder text for the input element. |
| readOnly | <code>Boolean</code> | Indicates whether the input element is read-only. |
| required | <code>Boolean</code> | Indicates whether the input element is required to be filled out. |
| size | <code>Number</code> | The visible width of the input element (in characters). |
| src | <code>String</code> | The URL of the image to display (only for type="image"). |
| step | <code>String</code> | The legal number intervals for the input element's value (only for type="number" or type="range"). |
| type | <code>String</code> | The type of the input element (e.g., text, password, file, etc.). |
| defaultValue | <code>String</code> | The default value displayed in the input element. |
| value | <code>String</code> | The current value displayed in the input element. |
| width | <code>Number</code> | The width of the text field (only for type="image"). |
| inputMode | <code>String</code> | The keyboard input method for the input element. |
| selectionDirection | <code>String</code> | The directionality of the input selection. |
| selectionEnd | <code>Number</code> | The end position of the selected part of the input element's value. |
| selectionStart | <code>Number</code> | The start position of the selected part of the input element's value. |
| align | <code>String</code> | The alignment of the object (only for type="object"). |
| useMap | <code>String</code> | The name of a map element that creates an image map (only for type="image"). |
| cols | <code>Number</code> | The visible width of the textarea (in characters). |
| rows | <code>Number</code> | The visible number of lines in a textarea. |
| spellcheck | <code>Boolean</code> | Indicates whether spell checking is allowed for the content. |
| wrap | <code>String</code> | Indicates how the textarea is wrapped (soft or hard). |
| length | <code>Number</code> | The number of items in the select element. |
| selectedIndex | <code>Number</code> | The index of the selected option in a select element. |
| selectedOptions | <code>HTMLCollection</code> | The collection of selected options in a select element. |
| options | <code>Array</code> | The list of options in a select element. |
| errorText | <code>String</code> | The error message text when the input element is invalid. |
| error | <code>Boolean</code> | Indicates whether the input element has an error state. |
| variant | <code>String</code> | The variant style of the text field (e.g., filled, outlined, rounded). |

<a name="MDTextFieldComponent+native"></a>

### mdTextFieldComponent.native ⇒ <code>HTMLInputElement</code> \| <code>HTMLTextAreaElement</code> \| <code>HTMLSelectElement</code>
Returns the native input element of the text field.

**Kind**: instance property of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
**Returns**: <code>HTMLInputElement</code> \| <code>HTMLTextAreaElement</code> \| <code>HTMLSelectElement</code> - The native input element.  
<a name="MDTextFieldComponent+populate"></a>

### mdTextFieldComponent.populate()
Populates the text field component based on its current value.

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+validate"></a>

### mdTextFieldComponent.validate()
Validates the text field component's current state.

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
