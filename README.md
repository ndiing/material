<a name="MdButtonComponent"></a>

## MdButtonComponent
Custom button component that extends LitElement.

**Kind**: global class  
**Element**: md-button  

* [MdButtonComponent](#MdButtonComponent)
    * [new MdButtonComponent()](#new_MdButtonComponent_new)
    * [.properties](#MdButtonComponent.properties) : <code>Object</code>

<a name="new_MdButtonComponent_new"></a>

### new MdButtonComponent()
Default constructor for MdButtonComponent.

**Example**  
```js
// Example usage of MdButtonComponent:// Elevated button<md-button ui="elevated" label="Elevated Button"></md-button>// Filled button<md-button ui="filled" label="Filled Button"></md-button>// Filled-tonal button<md-button ui="filled-tonal" label="Filled Tonal Button"></md-button>// Outlined button<md-button ui="outlined" label="Outlined Button"></md-button>// Default button<md-button label="Default Button"></md-button>
```
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

