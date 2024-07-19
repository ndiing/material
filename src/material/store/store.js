import { isObject } from "../functions/functions.js";

/**
 * MDStore provides CRUD operations and advanced querying capabilities for an array of documents.
 */
class MDStore {
    /**
     * Creates an instance of MDStore.
     * @param {Array} [docs=[]] - Initial array of documents.
     * @param {Object} [options={}] - Options for configuring the store.
     * @property {string} [options.primaryKey="_id"] - Primary key field used for document identification.
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
     * @param {Object} doc - The document to add.
     * @returns {Object} The added document.
     */
    post(doc) {
        this.docs.push(doc);
        return doc;
    }

    /**
     * Retrieves a document by its primary key.
     * @param {*} _id - The value of the primary key.
     * @returns {Object|null} The matching document, or null if not found.
     */
    get(_id) {
        return this.docs.find((doc) => doc[this.options.primaryKey] === _id);
    }

    /**
     * Updates a document by its primary key.
     * @param {*} _id - The value of the primary key.
     * @param {Object} doc - The partial document object with fields to update.
     * @returns {Object|null} The updated document, or null if the document was not found.
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
     * @param {*} _id - The value of the primary key.
     * @returns {Object|null} The deleted document, or null if the document was not found.
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
     * Adds or updates a document based on its primary key.
     * @param {Object} doc - The document to put.
     * @returns {Object} The added or updated document.
     */
    put(doc) {
        if (doc[this.options.primaryKey]) {
            return this.patch(doc[this.options.primaryKey], doc);
        } else {
            return this.post(doc);
        }
    }

    /**
     * Sorts an array of documents based on given sort criteria.
     * @private
     * @param {Array} docs - Array of documents to sort.
     * @param {Array} sorters - Array of sorting criteria objects.
     * @returns {Array} The sorted array of documents.
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
     * Searches an array of documents for a query string.
     * @private
     * @param {Array} docs - Array of documents to search.
     * @param {string} q - Query string to search for.
     * @returns {Array} Array of documents matching the search query.
     */
    search(docs, q) {
        const query = q.toLowerCase().trim();
        return docs.filter((doc) => this.deepSearch(doc, query));
    }

    /**
     * Filters an array of documents based on given filter criteria.
     * @private
     * @param {Array} docs - Array of documents to filter.
     * @param {Array} filters - Array of filter criteria objects.
     * @returns {Array} Array of documents matching the filter criteria.
     */
    filter(docs, filters) {
        return docs.filter((doc) => this.deepFilter(doc, filters));
    }

    /**
     * Paginates an array of documents based on page number and limit.
     * @private
     * @param {Array} docs - Array of documents to paginate.
     * @param {number} _page - Page number to retrieve.
     * @param {number} _limit - Number of documents per page.
     * @returns {Array} Array of documents for the specified page.
     */
    paginate(docs, _page, _limit) {
        const startIndex = (_page - 1) * _limit;
        return docs.slice(startIndex, startIndex + _limit);
    }

    /**
     * Slices an array of documents based on start and end indices.
     * @private
     * @param {Array} docs - Array of documents to slice.
     * @param {number} _start - Start index of the slice.
     * @param {number} _end - End index of the slice.
     * @returns {Array} Sliced array of documents.
     */
    slice(docs, _start, _end) {
        return docs.slice(_start, _end);
    }

    /**
     * Retrieves all documents from the store based on query options.
     * @param {Object} [options={}] - Query options including sorting, filtering, search, pagination, and additional filters.
     * @property {string} options._sort - Comma-separated list of fields to sort by.
     * @property {string} options._order - Comma-separated list of sort orders (asc, desc).
     * @property {string} options.q - Query string for full-text search.
     * @property {number} options._page - Page number for pagination.
     * @property {number} options._limit - Number of documents per page for pagination.
     * @property {number} options._start - Start index for slicing.
     * @property {number} options._end - End index for slicing.
     * @property {Array} options.sorters - Array of sorting criteria objects.
     * @property {Array} options.filters - Array of filter criteria objects.
     * @returns {Object} An object containing the total number of documents and the array of documents based on the query.
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

    /**
     * Recursively merges properties of two objects.
     * @private
     * @param {Object} target - The target object to merge into.
     * @param {Object} source - The source object to merge from.
     * @returns {Object} The merged object.
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
     * Retrieves the value of a nested property from an object based on dot notation path.
     * @private
     * @param {Object} obj - The object from which to retrieve the value.
     * @param {string} path - Dot notation path to the nested property.
     * @returns {*} The value of the nested property.
     */
    getValue(obj, path) {
        return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    }

    /**
     * Recursively searches for a query string within an object's properties.
     * @private
     * @param {Object} obj - The object to search within.
     * @param {string} query - The query string to search for.
     * @returns {boolean} True if the query string is found within the object, false otherwise.
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
     * Applies a set of filters to an object based on filter criteria.
     * @private
     * @param {Object} obj - The object to filter.
     * @param {Array} filters - Array of filter criteria objects.
     * @returns {boolean} True if the object matches all filter criteria, false otherwise.
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

