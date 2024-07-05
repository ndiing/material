<a name="MDTextFieldComponent"></a>

## MDTextFieldComponent ⇐ <code>MDComponent</code>
A text field component for Material Design framework.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDTextFieldComponent#event:onTextFieldNativeFocus - Event fired when the native input field receives focus.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeBlur - Event fired when the native input field loses focus.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeInput - Event fired when the value of the native input field changes.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeSearch - Event fired when a search is performed in the native input field.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeInvalid - Event fired when the native input field is invalid.</code>, <code>MDTextFieldComponent#event:onTextFieldNativeReset - Event fired when the native input field is reset.</code>, <code>MDTextFieldComponent#event:onTextFieldIconButtonClick - Event fired when an icon button in the text field is clicked.</code>  
**Tagname**: md-text-field  

* [MDTextFieldComponent](#MDTextFieldComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDTextFieldComponent+properties)
    * [.native](#MDTextFieldComponent+native)
    * [.populate()](#MDTextFieldComponent+populate)
    * [.validate()](#MDTextFieldComponent+validate)

<a name="MDTextFieldComponent+properties"></a>

### mdTextFieldComponent.properties
**Kind**: instance property of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | The label for the text field. |
| icon | <code>String</code> | The icon to display in the text field. |
| prefix | <code>String</code> | The prefix text to display in the text field. |
| suffix | <code>String</code> | The suffix text to display in the text field. |
| actions | <code>Array</code> | The actions available in the text field. |
| text | <code>String</code> | The text content of the text field. |
| accept | <code>String</code> | The file types accepted by the input field. |
| alt | <code>String</code> | The alternative text for the input field. |
| autocomplete | <code>String</code> | The autocomplete attribute for the input field. |
| autofocus | <code>Boolean</code> | Whether the input field should be focused automatically. |
| checked | <code>Boolean</code> | Whether the input field is checked. |
| defaultChecked | <code>Boolean</code> | The default checked state of the input field. |
| disabled | <code>Boolean</code> | Whether the input field is disabled. |
| files | <code>FileList</code> | The files selected in the input field. |
| form | <code>Object</code> | The form element associated with the input field. |
| formAction | <code>String</code> | The action URL for the form. |
| formEnctype | <code>String</code> | The encoding type for the form. |
| formMethod | <code>String</code> | The HTTP method for the form. |
| formNoValidate | <code>Boolean</code> | Whether the form should not be validated. |
| formTarget | <code>String</code> | The target for the form. |
| height | <code>Number</code> | The height of the input field. |
| indeterminate | <code>Boolean</code> | Whether the input field is indeterminate. |
| list | <code>Object</code> | The list element associated with the input field. |
| max | <code>String</code> | The maximum value for the input field. |
| maxLength | <code>Number</code> | The maximum length of the input field. |
| min | <code>String</code> | The minimum value for the input field. |
| minLength | <code>Number</code> | The minimum length of the input field. |
| multiple | <code>Boolean</code> | Whether the input field allows multiple values. |
| name | <code>String</code> | The name of the input field. |
| pattern | <code>String</code> | The pattern for the input field. |
| placeholder | <code>String</code> | The placeholder text for the input field. |
| readOnly | <code>Boolean</code> | Whether the input field is read-only. |
| required | <code>Boolean</code> | Whether the input field is required. |
| size | <code>Number</code> | The size of the input field. |
| src | <code>String</code> | The source URL for the input field. |
| step | <code>String</code> | The step value for the input field. |
| type | <code>String</code> | The type of the input field. |
| defaultValue | <code>String</code> | The default value of the input field. |
| value | <code>String</code> | The value of the input field. |
| width | <code>Number</code> | The width of the input field. |
| inputMode | <code>String</code> | The input mode for the input field. |
| selectionDirection | <code>String</code> | The selection direction for the input field. |
| selectionEnd | <code>Number</code> | The selection end position for the input field. |
| selectionStart | <code>Number</code> | The selection start position for the input field. |
| align | <code>String</code> | The alignment of the input field. |
| useMap | <code>String</code> | The use map for the input field. |
| cols | <code>Number</code> | The number of columns for the textarea. |
| rows | <code>Number</code> | The number of rows for the textarea. |
| spellcheck | <code>Boolean</code> | Whether spellcheck is enabled for the input field. |
| wrap | <code>String</code> | The wrap attribute for the textarea. |
| length | <code>Number</code> | The length of the input field. |
| selectedIndex | <code>Number</code> | The selected index for the select field. |
| selectedOptions | <code>HTMLCollection</code> | The selected options for the select field. |
| options | <code>Array</code> | The options for the select field. |
| errorText | <code>String</code> | The error text to display for the input field. |
| error | <code>Boolean</code> | Whether the input field has an error. |
| variant | <code>String</code> | The variant of the text field. |

<a name="MDTextFieldComponent+native"></a>

### mdTextFieldComponent.native
Returns the native input element inside the component.

**Kind**: instance property of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+populate"></a>

### mdTextFieldComponent.populate()
Toggles the "md-text-field--populated" class based on the presence of a value or if the type is "file".

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
<a name="MDTextFieldComponent+validate"></a>

### mdTextFieldComponent.validate()
Validates the input field, setting the error text and toggling the "md-text-field--error" class based on the validation state.

**Kind**: instance method of [<code>MDTextFieldComponent</code>](#MDTextFieldComponent)  
