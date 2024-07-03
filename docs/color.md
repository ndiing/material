## Functions

<dl>
<dt><a href="#isValidHexColor">isValidHexColor(color)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if the provided color string is a valid hexadecimal color.</p>
</dd>
<dt><a href="#setTheme">setTheme(colorOrImage, customColors)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Sets the theme of the application based on either a hexadecimal color or an image.</p>
</dd>
</dl>

<a name="isValidHexColor"></a>

## isValidHexColor(color) ⇒ <code>Boolean</code>
Checks if the provided color string is a valid hexadecimal color.

**Kind**: global function  
**Returns**: <code>Boolean</code> - - True if the color string is a valid hexadecimal color, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | The color string to validate. |

<a name="setTheme"></a>

## setTheme(colorOrImage, customColors) ⇒ <code>Promise.&lt;void&gt;</code>
Sets the theme of the application based on either a hexadecimal color or an image.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - - Promise that resolves once the theme is applied.  

| Param | Type | Description |
| --- | --- | --- |
| colorOrImage | <code>String</code> | The hexadecimal color string or image URL to set as the theme. |
| customColors | <code>Object</code> | Custom color definitions to apply to the theme. |

