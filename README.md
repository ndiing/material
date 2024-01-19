<a name="MdButtonComponent"></a>

## MdButtonComponent
Custom button component that extends LitElement.

**Kind**: global class  
**Emits**: <code>MdButtonComponent#event:custom-event - Fired when a custom event occurs.</code>  
**Element**: md-button  
**Cssproperty**: --md-button-color - Color of the button.  
**Cssproperty**: --md-button-background - Background color of the button.  

* [MdButtonComponent](#MdButtonComponent)
    * [new MdButtonComponent()](#new_MdButtonComponent_new)
    * _instance_
        * ["custom-event"](#MdButtonComponent+event_custom-event)
    * _static_
        * [.properties](#MdButtonComponent.properties) : <code>Object</code>

<a name="new_MdButtonComponent_new"></a>

### new MdButtonComponent()
Default constructor for MdButtonComponent.

**Example**  
```js
// Example usage of MdButtonComponent:// Elevated button<md-button ui="elevated" label="Elevated Button"></md-button>// Filled button<md-button ui="filled" label="Filled Button"></md-button>// Filled-tonal button<md-button ui="filled-tonal" label="Filled Tonal Button"></md-button>// Outlined button<md-button ui="outlined" label="Outlined Button"></md-button>// Default button<md-button label="Default Button"></md-button>
```
<a name="MdButtonComponent+event_custom-event"></a>

### "custom-event"
Custom event fired by MdButtonComponent.

**Kind**: event emitted by [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| detail | <code>String</code> | Details about the custom event. |

<a name="MdButtonComponent.properties"></a>

### MdButtonComponent.properties : <code>Object</code>
Properties of the custom button component.

**Kind**: static property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of the button. |
| label | <code>String</code> | The label text of the button. |
| icon | <code>String</code> | The icon of the button. |
| ui | <code>String</code> | The UI style of the button. |
| activated | <code>Boolean</code> | Reflects whether the button is activated. |

