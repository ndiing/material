# MDFormComponent

The `MDFormComponent` interface represents a `<md-form>` element in the DOM.
A custom form component that extends MDComponent to handle form submissions and resets.



### Events

| Event | Description |
|-------|-------------|
| `MDFormComponent#event:onFormNativeReset - Fires when the form is reset.` | |
| `MDFormComponent#event:onFormNativeSubmit - Fires when the form is submitted.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `acceptCharset` | (String) | Character encodings that are to be used for the form submission. |
| `action` | (String) | The URL that processes the form submission. |
| `autocomplete` | (String) | Indicates whether the browser can automatically complete the form fields. |
| `enctype` | (String) | The encoding type to use for form submission. |
| `method` | (String) | The HTTP method to use for form submission (e.g., &quot;get&quot;, &quot;post&quot;). |
| `name` | (String) | The name of the form. |
| `novalidate` | (Boolean) | If true, the form will not be validated when submitted. |
| `target` | (String) | The browsing context in which to display the response. |
| `rel` | (String) | Specifies the relationship of the target object to the form. |






# native

Returns the native form element within the component.






#### Returns

| Type | Description |
|------|-------------|
| HTMLFormElement | The native form element. |

# reset

Resets the native form element.







# submit

Submits the native form element.







