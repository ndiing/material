/**
 * Checks if a value is an object.
 * @param {*} obj - The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}

/**
 * Represents a simple in-memory store for managing documents.
 * @class
 */
class MDStore {
    /**
     * Constructs an instance of MDStore.
     * @constructor
     * @param {*} [docs=[]] - Initial array of documents.
     * @param {*} [options={}] - Options for configuring the store.
     * @param {String} [options.primaryKey="_id"] - Primary key to use for document identification.
     */
    constructor(docs = [], options = {}) {
        this.docs = docs;
        this.options = {
            primaryKey: "_id",
            ...options,
        };
    }

    /**
     * Adds a new document to the store.
     * @param {*} doc - The document to add.
     * @returns {*} The added document.
     */
    post(doc) {
        this.docs.push(doc);
        return doc;
    }

    /**
     * Retrieves a document by its primary key.
     * @param {*} _id - The primary key of the document to retrieve.
     * @returns {*} The found document, or undefined if not found.
     */
    get(_id) {
        return this.docs.find((doc) => doc[this.options.primaryKey] === _id);
    }

    /**
     * Updates a document partially by its primary key.
     * @param {*} _id - The primary key of the document to update.
     * @param {*} doc - The partial document object for update.
     * @returns {*} The updated document, or null if not found.
     */
    patch(_id, doc) {
        const index = this.docs.findIndex((d) => d[this.options.primaryKey] === _id);
        if (index !== -1) {
            this.docs[index] = this.deepMerge(this.docs[index], doc);
            return this.docs[index];
        }
        return null;
    }

    /**
     * Deletes a document by its primary key.
     * @param {*} _id - The primary key of the document to delete.
     * @returns {*} The deleted document, or null if not found.
     */
    delete(_id) {
        const index = this.docs.findIndex((doc) => doc[this.options.primaryKey] === _id);
        if (index !== -1) {
            const deletedDoc = this.docs[index];
            this.docs.splice(index, 1);
            return deletedDoc;
        }
        return null;
    }

    /**
     * Updates or adds a document based on whether it has a primary key.
     * @param {*} doc - The document to update or add.
     * @returns {*} The updated or added document.
     */
    put(doc) {
        if (doc[this.options.primaryKey]) {
            return this.patch(doc[this.options.primaryKey], doc);
        } else {
            return this.post(doc);
        }
    }

    /**
     * Sorts an array of objects based on multiple fields.
     * @param {Array<Object>} docs - The array of objects to be sorted.
     * @param {Array<{name: string, order: 'asc' | 'desc'}>} sorters - The array of sorting criteria.
     * @returns {Array<Object>} - The sorted array.
     */
    sort(docs, sorters) {
        return docs.sort((a, b) => {
            for (const sorter of sorters) {
                const { name, order } = sorter;
                const comparison = (a[name] > b[name]) - (a[name] < b[name]);
                if (comparison !== 0) {
                    return order === "asc" ? comparison : -comparison;
                }
            }
            return 0;
        });
    }

    /**
     * Searches documents based on a query string.
     * @param {*} docs - The array of documents to search within.
     * @param {string} q - The query string to search for.
     * @returns {*} The filtered array of documents.
     */
    search(docs, q) {
        const query = q.toLowerCase().trim();
        return docs.filter((doc) => this.deepSearch(doc, query));
    }

    /**
     * Filters documents based on given filters.
     * @param {*} docs - The array of documents to filter.
     * @param {Array<{ name: string, value: any, operator: string }>} filters - Filter configurations.
     * @returns {*} The filtered array of documents.
     */
    filter(docs, filters) {
        return docs.filter((doc) => this.deepFilter(doc, filters));
    }

    /**
     * Paginates an array of documents.
     * @param {*} docs - The array of documents to paginate.
     * @param {number} _page - The page number to retrieve.
     * @param {number} _limit - The number of documents per page.
     * @returns {*} The paginated array of documents.
     */
    paginate(docs, _page, _limit) {
        const startIndex = (_page - 1) * _limit;
        return docs.slice(startIndex, startIndex + _limit);
    }

    /**
     * Slices an array of documents based on start and end indices.
     * @param {*} docs - The array of documents to slice.
     * @param {number} _start - The starting index (inclusive).
     * @param {number} _end - The ending index (exclusive).
     * @returns {*} The sliced array of documents.
     */
    slice(docs, _start, _end) {
        return docs.slice(_start, _end);
    }

    /**
     * Retrieves all documents with optional filtering, sorting, and pagination.
     * @param {*} [options={}] - Options for filtering, sorting, and pagination.
     * @param {string} [options._sort] - Comma-separated list of fields to sort by.
     * @param {string} [options._order] - Comma-separated list of sort orders ('asc' or 'desc').
     * @param {string} [options.q] - Query string for full-text search.
     * @param {number} [options._page] - Page number for pagination.
     * @param {number} [options._limit] - Limit of documents per page for pagination.
     * @param {number} [options._start] - Start index for slicing.
     * @param {number} [options._end] - End index for slicing.
     * @returns {*} Object containing total count and array of filtered documents.
     */
    getAll(options = {}) {
        let { _sort, _order, q, _page, _limit, _start, _end, sorters, filters, ...rest } = options;

        let docs = this.docs.slice();

        if ((_sort && _order) || sorters) {
            if (!sorters) {
                const sort = _sort.split(",");
                const order = _order.split(",");
                sorters = sort.map((name, index) => ({ name, order: order[index] }));
            }
            docs = this.sort(docs, sorters);
        }
        if (q) {
            docs = this.search(docs, q);
        }
        if (Object.keys(rest).length > 0 || filters) {
            if (!filters) {
                filters = [];
                for (const key in rest) {
                    if (Object.prototype.hasOwnProperty.call(rest, key)) {
                        const value = rest[key];
                        const [, name, operator = "_eq"] = key.match(/^(.*?)(_eq|_ne|_lt|_lte|_gt|_gte|_like|_in|_nin)?$/) || [];
                        filters.push({ name, value, operator });
                    }
                }
            }
            docs = this.filter(docs, filters);
        }

        let total = docs.length;

        if (_page !== undefined && _limit !== undefined) {
            docs = this.paginate(docs, _page, _limit);
        } else if (_start !== undefined && _end !== undefined) {
            docs = this.slice(docs, _start, _end);
        }

        return { total, docs: docs };
    }

    // Helper methods for handling nested values

    /**
     * Deep merges two objects.
     * @param {*} target - The target object to merge into.
     * @param {*} source - The source object to merge from.
     * @returns {*} The merged object.
     */
    deepMerge(target, source) {
        if (!isObject(target) || !isObject(source)) {
            return source;
        }
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                this.deepMerge(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
        return target;
    }

    /**
     * Retrieves the value of a nested property in an object.
     * @param {*} obj - The object from which to retrieve the value.
     * @param {string} path - The dot-separated path to the property.
     * @returns {*} The value of the nested property.
     */
    getValue(obj, path) {
        return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    }

    /**
     * Deeply searches an object for a query string.
     * @param {*} obj - The object to search within.
     * @param {string} query - The query string to search for.
     * @returns {boolean} True if the query string is found within the object, otherwise false.
     */
    deepSearch(obj, query) {
        if (!isObject(obj)) {
            return false;
        }
        for (const key in obj) {
            if (isObject(obj[key])) {
                if (this.deepSearch(obj[key], query)) {
                    return true;
                }
            } else if (typeof obj[key] === "string" && obj[key].toLowerCase().includes(query)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Deeply filters an object based on given filters.
     * @param {*} obj - The object to filter.
     * @param {Array<{ name: string, value: any, operator: string }>} filters - Filter configurations.
     * @returns {boolean} True if the object passes all filters, otherwise false.
     */
    deepFilter(obj, filters) {
        return filters.every((filter) => {
            const { name, value, operator } = filter;
            const objValue = this.getValue(obj, name);

            if (Array.isArray(objValue)) {
                switch (operator) {
                    case "_eq":
                        return objValue.includes(value);
                    case "_ne":
                        return !objValue.includes(value);
                    case "_like":
                        return objValue.some((item) => typeof item === "string" && item.toLowerCase().includes(value.toLowerCase()));
                    case "_in":
                        return objValue.some((item) => value.includes(item));
                    case "_nin":
                        return objValue.every((item) => !value.includes(item));
                    default:
                        return false;
                }
            } else {
                // Handle non-array values
                switch (operator) {
                    case "_eq":
                        return objValue === value;
                    case "_ne":
                        return objValue !== value;
                    case "_lt":
                        return objValue < value;
                    case "_lte":
                        return objValue <= value;
                    case "_gt":
                        return objValue > value;
                    case "_gte":
                        return objValue >= value;
                    case "_like":
                        return typeof objValue === "string" && objValue.toLowerCase().includes(value.toLowerCase());
                    case "_in":
                        return Array.isArray(value) && value.includes(objValue);
                    case "_nin":
                        return Array.isArray(value) && !value.includes(objValue);
                    default:
                        return false;
                }
            }
        });
    }
}

export { MDStore };
