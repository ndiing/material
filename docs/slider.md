# MDSliderComponent

The `MDSliderComponent` interface represents a `<md-slider>` element in the DOM.
MDSliderComponent is a custom component for creating slider controls.



### Events

| Event | Description |
|-------|-------------|
| `MDSliderComponent#event:onSliderNativeInput - Fired when the slider&#x27;s native input value changes.` | |
| `MDSliderComponent#event:onSliderNativeReset - Fired when the slider&#x27;s native input is reset.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `defaultValue` | (Array) | The default value of the slider. |
| `min` | (Number) | The minimum value of the slider. |
| `max` | (Number) | The maximum value of the slider. |
| `step` | (Number) | The step value for the slider. |
| `disabled` | (Boolean) | Indicates if the slider is disabled. |
| `form` | (String) | The form attribute of the slider. |
| `name` | (String) | The name attribute of the slider. |
| `list` | (String) | The list attribute of the slider. |
| `autocomplete` | (String) | The autocomplete attribute of the slider. |






# natives

Gets the native input elements associated with the slider.






#### Returns

| Type | Description |
|------|-------------|
| NodeList | The native input elements. |

