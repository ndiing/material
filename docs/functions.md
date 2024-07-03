## Functions

<dl>
<dt><a href="#toPascalCase">toPascalCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to PascalCase.</p>
</dd>
<dt><a href="#toCamelCase">toCamelCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to camelCase.</p>
</dd>
<dt><a href="#toSnakeCase">toSnakeCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to snake_case.</p>
</dd>
<dt><a href="#toKebabCase">toKebabCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to kebab-case.</p>
</dd>
<dt><a href="#toFlatCase">toFlatCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to flatcase.</p>
</dd>
<dt><a href="#toUpperFlatCase">toUpperFlatCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to UPPERFLATCASE.</p>
</dd>
<dt><a href="#toPascalSnakeCase">toPascalSnakeCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to Pascal_Snake_Case.</p>
</dd>
<dt><a href="#toCamelSnakeCase">toCamelSnakeCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to camel_Snake_Case.</p>
</dd>
<dt><a href="#toScreamingSnakeCase">toScreamingSnakeCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to SCREAMING_SNAKE_CASE.</p>
</dd>
<dt><a href="#toTrainCase">toTrainCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to Train-Case.</p>
</dd>
<dt><a href="#toCobolCase">toCobolCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to COBOL-CASE.</p>
</dd>
<dt><a href="#toTitleCase">toTitleCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to Title Case.</p>
</dd>
<dt><a href="#stringifyDatetimeLocal">stringifyDatetimeLocal(date)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a date object to a string formatted as YYYY-MM-DDTHH:MM.</p>
</dd>
<dt><a href="#stringifyDate">stringifyDate(date)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a date object to a string formatted as YYYY-MM-DD.</p>
</dd>
<dt><a href="#stringifyYear">stringifyYear(date)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a date object to a string formatted as YYYY.</p>
</dd>
<dt><a href="#stringifyMonth">stringifyMonth(date)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a date object to a string formatted as YYYY-MM.</p>
</dd>
<dt><a href="#stringifyTime">stringifyTime(date)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a date object to a string formatted as HH:MM.</p>
</dd>
<dt><a href="#stringifyWeek">stringifyWeek(date)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a date object to a string formatted as YYYY-WW.</p>
</dd>
<dt><a href="#parseDatetimeLocal">parseDatetimeLocal(datetimeLocal)</a> ⇒ <code>Date</code></dt>
<dd><p>Parses a datetime-local string into a Date object.</p>
</dd>
<dt><a href="#parseDate">parseDate(dateString)</a> ⇒ <code>Date</code></dt>
<dd><p>Parses a date string (YYYY-MM-DD) into a Date object.</p>
</dd>
<dt><a href="#parseYear">parseYear(yearString)</a> ⇒ <code>Date</code></dt>
<dd><p>Parses a year string (YYYY) into a Date object.</p>
</dd>
<dt><a href="#parseMonth">parseMonth(monthString)</a> ⇒ <code>Date</code></dt>
<dd><p>Parses a month string (YYYY-MM) into a Date object.</p>
</dd>
<dt><a href="#parseTime">parseTime(timeString)</a> ⇒ <code>Date</code></dt>
<dd><p>Parses a time string (HH:MM) into a Date object.</p>
</dd>
<dt><a href="#parseWeek">parseWeek(weekStr)</a> ⇒ <code>Date</code></dt>
<dd><p>Parses a week string (YYYY-WW) into a Date object representing the start of that week.</p>
</dd>
<dt><a href="#isDefined">isDefined(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is defined and not null.</p>
</dd>
<dt><a href="#createQueue">createQueue()</a> ⇒ <code>function</code></dt>
<dd><p>Creates a queue function that executes callbacks asynchronously in sequence.</p>
</dd>
<dt><a href="#hexToRgba">hexToRgba(hex)</a> ⇒ <code>Object</code></dt>
<dd><p>Converts a hexadecimal color representation to RGBA components.</p>
</dd>
<dt><a href="#hexToHsla">hexToHsla(hex)</a> ⇒ <code>Object</code></dt>
<dd><p>Converts a hexadecimal color representation to HSLA components.</p>
</dd>
<dt><a href="#hslaToRgba">hslaToRgba(h, s, l, [a])</a> ⇒ <code>Object</code></dt>
<dd><p>Converts HSLA components to RGBA components.</p>
</dd>
<dt><a href="#rgbaToHex">rgbaToHex(r, g, b, [a])</a> ⇒ <code>string</code></dt>
<dd><p>Converts RGBA components to a hexadecimal color representation.</p>
</dd>
<dt><a href="#hslaToHex">hslaToHex(h, s, l, [a])</a> ⇒ <code>string</code></dt>
<dd><p>Converts HSLA components to a hexadecimal color representation.</p>
</dd>
<dt><a href="#rgbaToHsla">rgbaToHsla(r, g, b, [a])</a> ⇒ <code>Object</code></dt>
<dd><p>Converts RGBA components to HSLA components.</p>
</dd>
<dt><a href="#isArrayString">isArrayString(str)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a string represents an array in a stringified format.</p>
</dd>
<dt><a href="#calcPercentage">calcPercentage(min, max, value)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the percentage of a value relative to a range defined by min and max values.</p>
</dd>
<dt><a href="#calcDecimal">calcDecimal(min, max, value)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the decimal value representing the position of a value within a range defined by min and max values.</p>
</dd>
</dl>

<a name="toPascalCase"></a>

## toPascalCase(string) ⇒ <code>string</code>
Converts a string to PascalCase.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to PascalCase.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toCamelCase"></a>

## toCamelCase(string) ⇒ <code>string</code>
Converts a string to camelCase.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to camelCase.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toSnakeCase"></a>

## toSnakeCase(string) ⇒ <code>string</code>
Converts a string to snake_case.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to snake_case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toKebabCase"></a>

## toKebabCase(string) ⇒ <code>string</code>
Converts a string to kebab-case.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to kebab-case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toFlatCase"></a>

## toFlatCase(string) ⇒ <code>string</code>
Converts a string to flatcase.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to flatcase.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toUpperFlatCase"></a>

## toUpperFlatCase(string) ⇒ <code>string</code>
Converts a string to UPPERFLATCASE.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to UPPERFLATCASE.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toPascalSnakeCase"></a>

## toPascalSnakeCase(string) ⇒ <code>string</code>
Converts a string to Pascal_Snake_Case.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to Pascal_Snake_Case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toCamelSnakeCase"></a>

## toCamelSnakeCase(string) ⇒ <code>string</code>
Converts a string to camel_Snake_Case.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to camel_Snake_Case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toScreamingSnakeCase"></a>

## toScreamingSnakeCase(string) ⇒ <code>string</code>
Converts a string to SCREAMING_SNAKE_CASE.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to SCREAMING_SNAKE_CASE.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toTrainCase"></a>

## toTrainCase(string) ⇒ <code>string</code>
Converts a string to Train-Case.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to Train-Case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toCobolCase"></a>

## toCobolCase(string) ⇒ <code>string</code>
Converts a string to COBOL-CASE.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to COBOL-CASE.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="toTitleCase"></a>

## toTitleCase(string) ⇒ <code>string</code>
Converts a string to Title Case.

**Kind**: global function  
**Returns**: <code>string</code> - The string converted to Title Case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The input string to convert. |

<a name="stringifyDatetimeLocal"></a>

## stringifyDatetimeLocal(date) ⇒ <code>string</code>
Converts a date object to a string formatted as YYYY-MM-DDTHH:MM.

**Kind**: global function  
**Returns**: <code>string</code> - The date formatted as YYYY-MM-DDTHH:MM.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date object to convert. |

<a name="stringifyDate"></a>

## stringifyDate(date) ⇒ <code>string</code>
Converts a date object to a string formatted as YYYY-MM-DD.

**Kind**: global function  
**Returns**: <code>string</code> - The date formatted as YYYY-MM-DD.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date object to convert. |

<a name="stringifyYear"></a>

## stringifyYear(date) ⇒ <code>string</code>
Converts a date object to a string formatted as YYYY.

**Kind**: global function  
**Returns**: <code>string</code> - The date formatted as YYYY.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date object to convert. |

<a name="stringifyMonth"></a>

## stringifyMonth(date) ⇒ <code>string</code>
Converts a date object to a string formatted as YYYY-MM.

**Kind**: global function  
**Returns**: <code>string</code> - The date formatted as YYYY-MM.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date object to convert. |

<a name="stringifyTime"></a>

## stringifyTime(date) ⇒ <code>string</code>
Converts a date object to a string formatted as HH:MM.

**Kind**: global function  
**Returns**: <code>string</code> - The time formatted as HH:MM.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date object to convert. |

<a name="stringifyWeek"></a>

## stringifyWeek(date) ⇒ <code>string</code>
Converts a date object to a string formatted as YYYY-WW.

**Kind**: global function  
**Returns**: <code>string</code> - The date formatted as YYYY-WW.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date object to convert. |

<a name="parseDatetimeLocal"></a>

## parseDatetimeLocal(datetimeLocal) ⇒ <code>Date</code>
Parses a datetime-local string into a Date object.

**Kind**: global function  
**Returns**: <code>Date</code> - The parsed Date object.  

| Param | Type | Description |
| --- | --- | --- |
| datetimeLocal | <code>string</code> | The datetime-local string to parse. |

<a name="parseDate"></a>

## parseDate(dateString) ⇒ <code>Date</code>
Parses a date string (YYYY-MM-DD) into a Date object.

**Kind**: global function  
**Returns**: <code>Date</code> - The parsed Date object.  

| Param | Type | Description |
| --- | --- | --- |
| dateString | <code>string</code> | The date string (YYYY-MM-DD) to parse. |

<a name="parseYear"></a>

## parseYear(yearString) ⇒ <code>Date</code>
Parses a year string (YYYY) into a Date object.

**Kind**: global function  
**Returns**: <code>Date</code> - The parsed Date object.  

| Param | Type | Description |
| --- | --- | --- |
| yearString | <code>string</code> | The year string (YYYY) to parse. |

<a name="parseMonth"></a>

## parseMonth(monthString) ⇒ <code>Date</code>
Parses a month string (YYYY-MM) into a Date object.

**Kind**: global function  
**Returns**: <code>Date</code> - The parsed Date object.  

| Param | Type | Description |
| --- | --- | --- |
| monthString | <code>string</code> | The month string (YYYY-MM) to parse. |

<a name="parseTime"></a>

## parseTime(timeString) ⇒ <code>Date</code>
Parses a time string (HH:MM) into a Date object.

**Kind**: global function  
**Returns**: <code>Date</code> - The parsed Date object.  

| Param | Type | Description |
| --- | --- | --- |
| timeString | <code>string</code> | The time string (HH:MM) to parse. |

<a name="parseWeek"></a>

## parseWeek(weekStr) ⇒ <code>Date</code>
Parses a week string (YYYY-WW) into a Date object representing the start of that week.

**Kind**: global function  
**Returns**: <code>Date</code> - The Date object representing the start of the parsed week.  
**Throws**:

- <code>Error</code> If the week string format is invalid or the year/week number is invalid.


| Param | Type | Description |
| --- | --- | --- |
| weekStr | <code>string</code> | The week string (YYYY-WW) to parse. |

<a name="isDefined"></a>

## isDefined(value) ⇒ <code>boolean</code>
Checks if a value is defined and not null.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns true if the value is defined and not null, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="createQueue"></a>

## createQueue() ⇒ <code>function</code>
Creates a queue function that executes callbacks asynchronously in sequence.

**Kind**: global function  
**Returns**: <code>function</code> - A function that when called with a callback function, queues the callback for execution.  
<a name="hexToRgba"></a>

## hexToRgba(hex) ⇒ <code>Object</code>
Converts a hexadecimal color representation to RGBA components.

**Kind**: global function  
**Returns**: <code>Object</code> - The RGBA components.  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | The hexadecimal color string (e.g., "#RRGGBB" or "#RRGGBBAA"). |

<a name="hexToHsla"></a>

## hexToHsla(hex) ⇒ <code>Object</code>
Converts a hexadecimal color representation to HSLA components.

**Kind**: global function  
**Returns**: <code>Object</code> - The HSLA components.  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | The hexadecimal color string (e.g., "#RRGGBB" or "#RRGGBBAA"). |

<a name="hslaToRgba"></a>

## hslaToRgba(h, s, l, [a]) ⇒ <code>Object</code>
Converts HSLA components to RGBA components.

**Kind**: global function  
**Returns**: <code>Object</code> - The RGBA components.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| h | <code>number</code> |  | The hue value (0-360). |
| s | <code>number</code> |  | The saturation value (0-1). |
| l | <code>number</code> |  | The lightness value (0-1). |
| [a] | <code>number</code> | <code>1</code> | The alpha value (0-1). |

<a name="rgbaToHex"></a>

## rgbaToHex(r, g, b, [a]) ⇒ <code>string</code>
Converts RGBA components to a hexadecimal color representation.

**Kind**: global function  
**Returns**: <code>string</code> - The hexadecimal color string (e.g., "#RRGGBB" or "#RRGGBBAA").  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| r | <code>number</code> |  | The red value (0-255). |
| g | <code>number</code> |  | The green value (0-255). |
| b | <code>number</code> |  | The blue value (0-255). |
| [a] | <code>number</code> | <code>1</code> | The alpha value (0-1). |

<a name="hslaToHex"></a>

## hslaToHex(h, s, l, [a]) ⇒ <code>string</code>
Converts HSLA components to a hexadecimal color representation.

**Kind**: global function  
**Returns**: <code>string</code> - The hexadecimal color string (e.g., "#RRGGBB" or "#RRGGBBAA").  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| h | <code>number</code> |  | The hue value (0-360). |
| s | <code>number</code> |  | The saturation value (0-1). |
| l | <code>number</code> |  | The lightness value (0-1). |
| [a] | <code>number</code> | <code>1</code> | The alpha value (0-1). |

<a name="rgbaToHsla"></a>

## rgbaToHsla(r, g, b, [a]) ⇒ <code>Object</code>
Converts RGBA components to HSLA components.

**Kind**: global function  
**Returns**: <code>Object</code> - The HSLA components.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| r | <code>number</code> |  | The red value (0-255). |
| g | <code>number</code> |  | The green value (0-255). |
| b | <code>number</code> |  | The blue value (0-255). |
| [a] | <code>number</code> | <code>1</code> | The alpha value (0-1). |

<a name="isArrayString"></a>

## isArrayString(str) ⇒ <code>boolean</code>
Checks if a string represents an array in a stringified format.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the string represents an array, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to check. |

<a name="calcPercentage"></a>

## calcPercentage(min, max, value) ⇒ <code>number</code>
Calculates the percentage of a value relative to a range defined by min and max values.

**Kind**: global function  
**Returns**: <code>number</code> - The percentage value (between 0 and 100).  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The minimum value of the range. |
| max | <code>number</code> | The maximum value of the range. |
| value | <code>number</code> | The value to calculate the percentage for. |

<a name="calcDecimal"></a>

## calcDecimal(min, max, value) ⇒ <code>number</code>
Calculates the decimal value representing the position of a value within a range defined by min and max values.

**Kind**: global function  
**Returns**: <code>number</code> - The decimal value (between 0 and 1).  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The minimum value of the range. |
| max | <code>number</code> | The maximum value of the range. |
| value | <code>number</code> | The value to calculate the decimal for. |

