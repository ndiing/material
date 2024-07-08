# MDStore

Represents a simple in-memory store for managing documents.

## Instance Methods
| Name | Parameters | Description |
| --- | --- | --- |
| post | `doc` | Adds a new document to the store. |
| get | `_id` | Retrieves a document by its primary key. |
| patch | `_id`, `doc` | Updates a document by merging with a new object. |
| delete | `_id` | Deletes a document from the store. |
| put | `doc` | Adds or updates a document in the store. |
| sort | `docs`, `sorters` | Sorts an array of documents based on given sort criteria. |
| search | `docs`, `q` | Searches an array of documents based on a query string. |
| filter | `docs`, `filters` | Filters an array of documents based on given filters. |
| paginate | `docs`, `_page`, `_limit` | Paginates an array of documents based on page and limit. |
| slice | `docs`, `_start`, `_end` | Slices an array of documents based on start and end indices. |
| getAll | `options` | Retrieves all documents from the store with optional filtering, sorting, and pagination. |
| deepMerge | `target`, `source` | Recursively merges two objects. |
| getValue | `obj`, `path` | Retrieves a nested value from an object based on a dot-separated path. |
| deepSearch | `obj`, `query` | Recursively searches an object for a string query. |
| deepFilter | `obj`, `filters` | Filters an object based on given filters. |

