# MDStore

Constructs an instance of MDStore.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `docs` | (*) | Initial array of documents. |
| `options` | (*) | Options for configuring the store. |
| `options.primaryKey` | (String) | Primary key to use for document identification. |


# MDStore

Represents a simple in-memory store for managing documents.







# post

Adds a new document to the store.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `doc` | (*) | The document to add. |

#### Returns

| Type | Description |
|------|-------------|
| * | The added document. |

# get

Retrieves a document by its primary key.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `_id` | (*) | The primary key of the document to retrieve. |

#### Returns

| Type | Description |
|------|-------------|
| * | The found document, or undefined if not found. |

# patch

Updates a document partially by its primary key.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `_id` | (*) | The primary key of the document to update. |
| `doc` | (*) | The partial document object for update. |

#### Returns

| Type | Description |
|------|-------------|
| * | The updated document, or null if not found. |

# delete

Deletes a document by its primary key.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `_id` | (*) | The primary key of the document to delete. |

#### Returns

| Type | Description |
|------|-------------|
| * | The deleted document, or null if not found. |

# put

Updates or adds a document based on whether it has a primary key.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `doc` | (*) | The document to update or add. |

#### Returns

| Type | Description |
|------|-------------|
| * | The updated or added document. |

# sort

Sorts an array of objects based on multiple fields.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `docs` | (Array.&lt;Object&gt;) | The array of objects to be sorted. |
| `sorters` | (Array.&lt;{name: string, order: (&#x27;asc&#x27;|&#x27;desc&#x27;)}&gt;) | The array of sorting criteria. |

#### Returns

| Type | Description |
|------|-------------|
| Array.&lt;Object&gt; | - The sorted array. |

# search

Searches documents based on a query string.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `docs` | (*) | The array of documents to search within. |
| `q` | (string) | The query string to search for. |

#### Returns

| Type | Description |
|------|-------------|
| * | The filtered array of documents. |

# filter

Filters documents based on given filters.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `docs` | (*) | The array of documents to filter. |
| `filters` | (Array.&lt;{name: string, value: any, operator: string}&gt;) | Filter configurations. |

#### Returns

| Type | Description |
|------|-------------|
| * | The filtered array of documents. |

# paginate

Paginates an array of documents.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `docs` | (*) | The array of documents to paginate. |
| `_page` | (number) | The page number to retrieve. |
| `_limit` | (number) | The number of documents per page. |

#### Returns

| Type | Description |
|------|-------------|
| * | The paginated array of documents. |

# slice

Slices an array of documents based on start and end indices.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `docs` | (*) | The array of documents to slice. |
| `_start` | (number) | The starting index (inclusive). |
| `_end` | (number) | The ending index (exclusive). |

#### Returns

| Type | Description |
|------|-------------|
| * | The sliced array of documents. |

# getAll

Retrieves all documents with optional filtering, sorting, and pagination.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | (*) | Options for filtering, sorting, and pagination. |
| `options._sort` | (string) | Comma-separated list of fields to sort by. |
| `options._order` | (string) | Comma-separated list of sort orders (&#x27;asc&#x27; or &#x27;desc&#x27;). |
| `options.q` | (string) | Query string for full-text search. |
| `options._page` | (number) | Page number for pagination. |
| `options._limit` | (number) | Limit of documents per page for pagination. |
| `options._start` | (number) | Start index for slicing. |
| `options._end` | (number) | End index for slicing. |

#### Returns

| Type | Description |
|------|-------------|
| * | Object containing total count and array of filtered documents. |

# deepMerge

Deep merges two objects.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `target` | (*) | The target object to merge into. |
| `source` | (*) | The source object to merge from. |

#### Returns

| Type | Description |
|------|-------------|
| * | The merged object. |

# getValue

Retrieves the value of a nested property in an object.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | (*) | The object from which to retrieve the value. |
| `path` | (string) | The dot-separated path to the property. |

#### Returns

| Type | Description |
|------|-------------|
| * | The value of the nested property. |

# deepSearch

Deeply searches an object for a query string.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | (*) | The object to search within. |
| `query` | (string) | The query string to search for. |

#### Returns

| Type | Description |
|------|-------------|
| boolean | True if the query string is found within the object, otherwise false. |

# deepFilter

Deeply filters an object based on given filters.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | (*) | The object to filter. |
| `filters` | (Array.&lt;{name: string, value: any, operator: string}&gt;) | Filter configurations. |

#### Returns

| Type | Description |
|------|-------------|
| boolean | True if the object passes all filters, otherwise false. |

