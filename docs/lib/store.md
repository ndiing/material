## Classes

<dl>
<dt><a href="#Store">Store</a></dt>
<dd><p>Represents a Store for managing and manipulating data.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#notNull">notNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the value is not null or undefined.</p>
</dd>
<dt><a href="#notEmpty">notEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the value is not null, undefined, or an empty string.</p>
</dd>
</dl>

<a name="Store"></a>

## Store
Represents a Store for managing and manipulating data.

**Kind**: global class  
**Author**: Ridho Prasetya  

* [Store](#Store)
    * [new Store([docs])](#new_Store_new)
    * [.filter(name, value)](#Store+filter) ⇒ <code>void</code>
    * [.paginate(_page, _limit)](#Store+paginate) ⇒ <code>void</code>
    * [.sort(_sort, _order)](#Store+sort) ⇒ <code>void</code>
    * [.slice(_start, _end)](#Store+slice) ⇒ <code>void</code>
    * [.search(q)](#Store+search) ⇒ <code>void</code>
    * [.getAll()](#Store+getAll) ⇒ <code>Object</code>

<a name="new_Store_new"></a>

### new Store([docs])
Initializes the Store with an array of documents.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [docs] | <code>Array</code> | <code>[]</code> | Array of documents. |

<a name="Store+filter"></a>

### store.filter(name, value) ⇒ <code>void</code>
Modifies the URL search parameters by adding or deleting a specific parameter based on the provided name and value.If the name is falsy, it deletes parameters not included in the properties object.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the parameter to set or delete. |
| value | <code>string</code> | The value of the parameter. |

<a name="Store+paginate"></a>

### store.paginate(_page, _limit) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "_page" and "_limit" parameters based on provided values.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| _page | <code>number</code> | The page number. |
| _limit | <code>number</code> | The limit of items per page. |

<a name="Store+sort"></a>

### store.sort(_sort, _order) ⇒ <code>void</code>
Modifies the URL search parameters to handle sorting by setting or deleting "_sort" and "_order" parameters.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| _sort | <code>string</code> | The field to sort by. |
| _order | <code>string</code> | The sorting order ("asc" for ascending, "desc" for descending). |

<a name="Store+slice"></a>

### store.slice(_start, _end) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "_start" and "_end" parameters based on provided values.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| _start | <code>number</code> | The starting index. |
| _end | <code>number</code> | The ending index. |

<a name="Store+search"></a>

### store.search(q) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "q" parameter based on the provided search query.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>string</code> | The search query string. |

<a name="Store+getAll"></a>

### store.getAll() ⇒ <code>Object</code>
Retrieves filtered and paginated data based on URL parameters.

**Kind**: instance method of [<code>Store</code>](#Store)  
**Returns**: <code>Object</code> - - Object containing total count and filtered data.  
<a name="notNull"></a>

## notNull(value) ⇒ <code>boolean</code>
Checks if the value is not null or undefined.

**Kind**: global function  
**Returns**: <code>boolean</code> - - Returns true if the value is not null or undefined, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="notEmpty"></a>

## notEmpty(value) ⇒ <code>boolean</code>
Checks if the value is not null, undefined, or an empty string.

**Kind**: global function  
**Returns**: <code>boolean</code> - - Returns true if the value is not null, undefined, or an empty string, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

