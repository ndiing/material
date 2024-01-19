<a name="MdButtonComponent"></a>

## MdButtonComponent
Custom button component for Material Design.This component provides a Material Design-styled button with various UI styles.

**Kind**: global class  
**Element**: md-button  

* [MdButtonComponent](#MdButtonComponent)
    * _instance_
        * [.buttonNative](#MdButtonComponent+buttonNative) ⇒ <code>HTMLButtonElement</code>
    * _static_
        * [.properties](#MdButtonComponent.properties)

<a name="MdButtonComponent+buttonNative"></a>

### mdButtonComponent.buttonNative ⇒ <code>HTMLButtonElement</code>
Returns the native button element inside the component.

**Kind**: instance property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>HTMLButtonElement</code> - The native button element.  
<a name="MdButtonComponent.properties"></a>

### MdButtonComponent.properties
Properties of the component.

**Kind**: static property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of the button (e.g., "button", "submit", "reset"). |
| label | <code>String</code> | The label text for the button. |
| icon | <code>String</code> | The icon HTML content for the button. |
| ui | <code>String</code> | The UI style for the button ("elevated", "filled", "filled-tonal", "outlined"). |
| activated | <code>Boolean</code> | Indicates whether the button is activated or not. |

