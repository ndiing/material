## Classes

<dl>
<dt><a href="#MDStore">MDStore</a></dt>
<dd><p>Represents a simple in-memory store for managing documents.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isObject">isObject(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is an object.</p>
</dd>
</dl>

<a name="MDStore"></a>

## MDStore
Represents a simple in-memory store for managing documents.

**Kind**: global class  

* [MDStore](#MDStore)
    * [new MDStore([docs], [options])](#new_MDStore_new)
    * [.post(doc)](#MDStore+post) ⇒ <code>\*</code>
    * [.get(_id)](#MDStore+get) ⇒ <code>\*</code>
    * [.patch(_id, doc)](#MDStore+patch) ⇒ <code>\*</code>
    * [.delete(_id)](#MDStore+delete) ⇒ <code>\*</code>
    * [.put(doc)](#MDStore+put) ⇒ <code>\*</code>
    * [.sort(docs, sorters)](#MDStore+sort) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.search(docs, q)](#MDStore+search) ⇒ <code>\*</code>
    * [.filter(docs, filters)](#MDStore+filter) ⇒ <code>\*</code>
    * [.paginate(docs, _page, _limit)](#MDStore+paginate) ⇒ <code>\*</code>
    * [.slice(docs, _start, _end)](#MDStore+slice) ⇒ <code>\*</code>
    * [.getAll([options])](#MDStore+getAll) ⇒ <code>\*</code>
    * [.deepMerge(target, source)](#MDStore+deepMerge) ⇒ <code>\*</code>
    * [.getValue(obj, path)](#MDStore+getValue) ⇒ <code>\*</code>
    * [.deepSearch(obj, query)](#MDStore+deepSearch) ⇒ <code>boolean</code>
    * [.deepFilter(obj, filters)](#MDStore+deepFilter) ⇒ <code>boolean</code>

<a name="new_MDStore_new"></a>

### new MDStore([docs], [options])
Constructs an instance of MDStore.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [docs] | <code>\*</code> | <code>[]</code> | Initial array of documents. |
| [options] | <code>\*</code> | <code>{}</code> | Options for configuring the store. |
| [options.primaryKey] | <code>String</code> | <code>&quot;_id&quot;</code> | Primary key to use for document identification. |

<a name="MDStore+post"></a>

### mdStore.post(doc) ⇒ <code>\*</code>
Adds a new document to the store.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The added document.  

| Param | Type | Description |
| --- | --- | --- |
| doc | <code>\*</code> | The document to add. |

<a name="MDStore+get"></a>

### mdStore.get(_id) ⇒ <code>\*</code>
Retrieves a document by its primary key.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The found document, or undefined if not found.  

| Param | Type | Description |
| --- | --- | --- |
| _id | <code>\*</code> | The primary key of the document to retrieve. |

<a name="MDStore+patch"></a>

### mdStore.patch(_id, doc) ⇒ <code>\*</code>
Updates a document partially by its primary key.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The updated document, or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| _id | <code>\*</code> | The primary key of the document to update. |
| doc | <code>\*</code> | The partial document object for update. |

<a name="MDStore+delete"></a>

### mdStore.delete(_id) ⇒ <code>\*</code>
Deletes a document by its primary key.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The deleted document, or null if not found.  

| Param | Type | Description |
| --- | --- | --- |
| _id | <code>\*</code> | The primary key of the document to delete. |

<a name="MDStore+put"></a>

### mdStore.put(doc) ⇒ <code>\*</code>
Updates or adds a document based on whether it has a primary key.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The updated or added document.  

| Param | Type | Description |
| --- | --- | --- |
| doc | <code>\*</code> | The document to update or add. |

<a name="MDStore+sort"></a>

### mdStore.sort(docs, sorters) ⇒ <code>Array.&lt;Object&gt;</code>
Sorts an array of objects based on multiple fields.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>Array.&lt;Object&gt;</code> - - The sorted array.  

| Param | Type | Description |
| --- | --- | --- |
| docs | <code>Array.&lt;Object&gt;</code> | The array of objects to be sorted. |
| sorters | <code>Array.&lt;{name: string, order: (&#x27;asc&#x27;\|&#x27;desc&#x27;)}&gt;</code> | The array of sorting criteria. |

<a name="MDStore+search"></a>

### mdStore.search(docs, q) ⇒ <code>\*</code>
Searches documents based on a query string.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The filtered array of documents.  

| Param | Type | Description |
| --- | --- | --- |
| docs | <code>\*</code> | The array of documents to search within. |
| q | <code>string</code> | The query string to search for. |

<a name="MDStore+filter"></a>

### mdStore.filter(docs, filters) ⇒ <code>\*</code>
Filters documents based on given filters.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The filtered array of documents.  

| Param | Type | Description |
| --- | --- | --- |
| docs | <code>\*</code> | The array of documents to filter. |
| filters | <code>Array.&lt;{name: string, value: any, operator: string}&gt;</code> | Filter configurations. |

<a name="MDStore+paginate"></a>

### mdStore.paginate(docs, _page, _limit) ⇒ <code>\*</code>
Paginates an array of documents.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The paginated array of documents.  

| Param | Type | Description |
| --- | --- | --- |
| docs | <code>\*</code> | The array of documents to paginate. |
| _page | <code>number</code> | The page number to retrieve. |
| _limit | <code>number</code> | The number of documents per page. |

<a name="MDStore+slice"></a>

### mdStore.slice(docs, _start, _end) ⇒ <code>\*</code>
Slices an array of documents based on start and end indices.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The sliced array of documents.  

| Param | Type | Description |
| --- | --- | --- |
| docs | <code>\*</code> | The array of documents to slice. |
| _start | <code>number</code> | The starting index (inclusive). |
| _end | <code>number</code> | The ending index (exclusive). |

<a name="MDStore+getAll"></a>

### mdStore.getAll([options]) ⇒ <code>\*</code>
Retrieves all documents with optional filtering, sorting, and pagination.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - Object containing total count and array of filtered documents.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>\*</code> | <code>{}</code> | Options for filtering, sorting, and pagination. |
| [options._sort] | <code>string</code> |  | Comma-separated list of fields to sort by. |
| [options._order] | <code>string</code> |  | Comma-separated list of sort orders ('asc' or 'desc'). |
| [options.q] | <code>string</code> |  | Query string for full-text search. |
| [options._page] | <code>number</code> |  | Page number for pagination. |
| [options._limit] | <code>number</code> |  | Limit of documents per page for pagination. |
| [options._start] | <code>number</code> |  | Start index for slicing. |
| [options._end] | <code>number</code> |  | End index for slicing. |

<a name="MDStore+deepMerge"></a>

### mdStore.deepMerge(target, source) ⇒ <code>\*</code>
Deep merges two objects.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The merged object.  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>\*</code> | The target object to merge into. |
| source | <code>\*</code> | The source object to merge from. |

<a name="MDStore+getValue"></a>

### mdStore.getValue(obj, path) ⇒ <code>\*</code>
Retrieves the value of a nested property in an object.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>\*</code> - The value of the nested property.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The object from which to retrieve the value. |
| path | <code>string</code> | The dot-separated path to the property. |

<a name="MDStore+deepSearch"></a>

### mdStore.deepSearch(obj, query) ⇒ <code>boolean</code>
Deeply searches an object for a query string.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>boolean</code> - True if the query string is found within the object, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The object to search within. |
| query | <code>string</code> | The query string to search for. |

<a name="MDStore+deepFilter"></a>

### mdStore.deepFilter(obj, filters) ⇒ <code>boolean</code>
Deeply filters an object based on given filters.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>boolean</code> - True if the object passes all filters, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The object to filter. |
| filters | <code>Array.&lt;{name: string, value: any, operator: string}&gt;</code> | Filter configurations. |

<a name="isObject"></a>

## isObject(obj) ⇒ <code>boolean</code>
Checks if a value is an object.

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the value is an object, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The value to check. |

