# MDTextFieldComponent

The `MDTextFieldComponent` interface represents a `<md-text-field>` element in the DOM.
A custom text field component that extends MDComponent and provides various input types with support for icons, actions, and validation.



### Events

| Event | Description |
|-------|-------------|
| `MDTextFieldComponent#event:onTextFieldNativeClick - Fired when the native input element is clicked.` | |
| `MDTextFieldComponent#event:onTextFieldNativeFocus - Fired when the native input element receives focus.` | |
| `MDTextFieldComponent#event:onTextFieldNativeBlur - Fired when the native input element loses focus.` | |
| `MDTextFieldComponent#event:onTextFieldNativeInput - Fired when the native input element receives input.` | |
| `MDTextFieldComponent#event:onTextFieldNativeChange - Fired when the native input element&#x27;s value changes.` | |
| `MDTextFieldComponent#event:onTextFieldNativeSearch - Fired when the native input element receives a search event.` | |
| `MDTextFieldComponent#event:onTextFieldNativeInvalid - Fired when the native input element is invalid.` | |
| `MDTextFieldComponent#event:onTextFieldNativeReset - Fired when the native input element is reset.` | |
| `MDTextFieldComponent#event:onTextFieldIconButtonClick - Fired when an icon button within the component is clicked.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `label` | (String) | The label text for the text field. |
| `icon` | (String) | The icon to display within the text field. |
| `prefix` | (String) | The prefix text to display before the input. |
| `suffix` | (String) | The suffix text to display after the input. |
| `actions` | (Array) | An array of action objects for additional buttons or icons. |
| `text` | (String) | The text content for the text field. |
| `accept` | (String) | The types of files that the server accepts (only for file input). |
| `alt` | (String) | The alternative text for the input element. |
| `autocomplete` | (String) | The autocomplete attribute for the input element. |
| `autofocus` | (Boolean) | If true, the input element should automatically get focus when the page loads. |
| `disabled` | (Boolean) | If true, the input element is disabled. |
| `max` | (String) | The maximum value for the input element. |
| `maxLength` | (Number) | The maximum number of characters allowed in the input element. |
| `min` | (String) | The minimum value for the input element. |
| `minLength` | (Number) | The minimum number of characters required in the input element. |
| `multiple` | (Boolean) | If true, multiple values can be entered (only for file input). |
| `name` | (String) | The name of the input element. |
| `pattern` | (String) | The regular expression that the input element&#x27;s value is checked against. |
| `placeholder` | (String) | The placeholder text for the input element. |
| `readOnly` | (Boolean) | If true, the input element is read-only. |
| `required` | (Boolean) | If true, the input element must be filled out before submitting the form. |
| `size` | (Number) | The visible width of the input element. |
| `step` | (String) | The granularity that is expected (only for numeric input). |
| `type` | (String) | The type of the input element. |
| `defaultValue` | (String) | The default value of the input element. |
| `value` | (String) | The current value of the input element. |
| `cols` | (Number) | The number of visible text lines for a textarea element. |
| `rows` | (Number) | The number of visible columns for a textarea element. |
| `spellcheck` | (Boolean) | If true, enables spell checking for the input element. |
| `wrap` | (String) | How the text in a textarea is wrapped. |
| `options` | (Array) | The options for a select element. |
| `errorText` | (String) | The error message text to display. |
| `error` | (Boolean) | If true, indicates that the input has an error. |
| `variant` | (String) | The variant of the text field. |






# native

{{desc}}







# container

{{desc}}







# populate

{{desc}}







# reset

{{desc}}







# updatePopulation

{{desc}}







# updateValidation

{{desc}}







