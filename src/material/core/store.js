
/**
 * @class Store
 */
class Store {
    constructor(docs = [], options = {}) {
        this.primaryKey = options.primaryKey ?? "id";
        this.load(docs);
    }

    _rebuildIndex() {
        this.searchIndex = this._buildSearchIndex(this.docs);
    }

    _updateIndexForDoc(doc) {
        const flatValues = this._flattenObject(doc);
        flatValues.forEach((value) => {
            if (value && typeof value === "string") {
                const words = value.toLowerCase().split(/\s+/);
                words.forEach((word) => {
                    if (!this.searchIndex.has(word)) {
                        this.searchIndex.set(word, new Set());
                    }
                    this.searchIndex.get(word).add(doc[this.primaryKey]);
                });
            }
        });
    }

    _removeFromIndex(doc) {
        const flatValues = this._flattenObject(doc);
        flatValues.forEach((value) => {
            if (value && typeof value === "string") {
                const words = value.toLowerCase().split(/\s+/);
                words.forEach((word) => {
                    const ids = this.searchIndex.get(word);
                    if (ids) {
                        ids.delete(doc[this.primaryKey]);
                        if (ids.size === 0) {
                            this.searchIndex.delete(word);
                        }
                    }
                });
            }
        });
    }

    _getValueByPath(obj, path) {
        return path.split(".").reduce((current, key) => current?.[key], obj);
    }

    _buildSearchIndex(docs) {
        const index = new Map();
        docs.forEach((doc) => {
            const flatValues = this._flattenObject(doc);
            flatValues.forEach((value) => {
                if (value && typeof value === "string" && value.length >= 3) {
                    const words = value.toLowerCase().split(/\s+/);
                    words.forEach((word) => {
                        if (word.length >= 3) {
                            if (!index.has(word)) {
                                index.set(word, new Set());
                            }
                            index.get(word).add(doc[this.primaryKey]);
                        }
                    });
                }
            });
        });
        return index;
    }

    _flattenObject(obj, prefix = "") {
        let values = [];
        for (const key in obj) {
            const value = obj[key];
            if (value && typeof value === "object" && !Array.isArray(value)) {
                values = values.concat(this._flattenObject(value, `${prefix}${key}.`));
            } else {
                values.push(value);
            }
        }
        return values;
    }

    
    /**
     * 
     */
    load(docs) {
        this.docs = structuredClone(docs);
        this._rebuildIndex();
    }

    
    /**
     * 
     */
    get(id) {
        return this.docs.find((doc) => doc[this.primaryKey] === id) || null;
    }

    
    /**
     * 
     */
    getAll(options = {}) {
        const { _sort, _order, q, _page, _limit, _start, _end, ...restOptions } = options;
        let docs = [...this.docs];
        if (q) {
            docs = this.search(docs, q);
        }
        if (Object.keys(restOptions).length) {
            const filters = [];
            const regexp = /^(\w+?)(_(lt|gt|lte|gte|eq|ne|like))?$/i;
            for (const key in restOptions) {
                const value = restOptions[key];
                const [, name, , operator] = key.match(regexp) || [];
                if (name) {
                    filters.push({ name, value, operator: operator || "eq" });
                }
            }
            docs = this.filter(docs, filters);
        }
        if (_sort) {
            const sorters = [];
            const sortFields = Array.isArray(_sort) ? _sort : [_sort];
            const sortOrders = Array.isArray(_order) ? _order : [];
            sortFields.forEach((field, index) => {
                sorters.push({
                    _sort: field,
                    _order: sortOrders[index] || "asc",
                });
            });
            docs = this.sort(docs, sorters);
        }
        const filtered = docs.length;
        if (_page && _limit) {
            docs = this.paginate(docs, _page, _limit);
        } else if (_start !== undefined || _end !== undefined) {
            docs = this.slice(docs, _start, _end);
        }
        return {
            docs,
            total: this.docs.length,
            filtered,
            page: parseInt(_page) || 1,
            limit: parseInt(_limit) || filtered,
            totalPages: Math.ceil(filtered / (parseInt(_limit) || filtered || 1)),
            _links: {
                self: `?_page=${_page || 1}&_limit=${_limit || filtered}`,
                first: `?_page=1&_limit=${_limit || filtered}`,
                prev: _page > 1 ? `?_page=${_page - 1}&_limit=${_limit || filtered}` : null,
                next: _page < Math.ceil(filtered / (_limit || filtered || 1)) ? `?_page=${parseInt(_page) + 1}&_limit=${_limit || filtered}` : null,
                last: `?_page=${Math.ceil(filtered / (_limit || filtered || 1))}&_limit=${_limit || filtered}`,
            },
        };
    }

    
    /**
     * 
     */
    post(doc = {}) {
        if (!doc[this.primaryKey]) {
            throw new Error("Document must have an 'id' field");
        }
        if (this.docs.some((d) => d[this.primaryKey] === doc[this.primaryKey])) {
            throw new Error(`Document with id ${doc[this.primaryKey]} already exists`);
        }
        const newDoc = structuredClone(doc);
        this.docs.push(newDoc);
        this._updateIndexForDoc(newDoc);
        return newDoc;
    }

    
    /**
     * 
     */
    patch(id, doc) {
        const index = this.docs.findIndex((d) => d[this.primaryKey] === id);
        if (index === -1) {
            throw new Error(`Document with id ${id} not found`);
        }
        this._removeFromIndex(this.docs[index]);
        this.docs[index] = {
            ...this.docs[index],
            ...structuredClone(doc),
        };
        this._updateIndexForDoc(this.docs[index]);
        return this.docs[index];
    }

    
    /**
     * 
     */
    delete(id) {
        const index = this.docs.findIndex((d) => d[this.primaryKey] === id);
        if (index === -1) {
            throw new Error(`Document with id ${id} not found`);
        }
        const deleted = this.docs[index];
        this._removeFromIndex(deleted);
        this.docs.splice(index, 1);
        return deleted;
    }

    
    /**
     * 
     */
    search(docs, q = "") {
        if (!q || q.trim() === "") return docs;
        const query = q.toLowerCase().trim();
        const exactMatch = query.match(/"(.*?)"/);
        let searchWords = [];
        let exactPhrase = null;
        if (exactMatch) {
            exactPhrase = exactMatch[1];
            const remaining = query.replace(`"${exactPhrase}"`, "").trim();
            searchWords = remaining ? remaining.split(/\s+/) : [];
        } else {
            searchWords = query.split(/\s+/);
        }
        const matchingIds = new Set();
        if (exactPhrase) {
            for (const [word, ids] of this.searchIndex) {
                if (word.includes(exactPhrase)) {
                    ids.forEach((id) => matchingIds.add(id));
                }
            }
        }
        for (const searchWord of searchWords) {
            const tempIds = new Set();
            for (const [indexWord, ids] of this.searchIndex) {
                if (indexWord.includes(searchWord)) {
                    ids.forEach((id) => tempIds.add(id));
                }
            }
            if (matchingIds.size === 0) {
                tempIds.forEach((id) => matchingIds.add(id));
            } else {
                for (const id of matchingIds) {
                    if (!tempIds.has(id)) {
                        matchingIds.delete(id);
                    }
                }
            }
        }
        return docs.filter((doc) => matchingIds.has(doc[this.primaryKey]));
    }

    
    /**
     * 
     */
    filter(docs, filters = []) {
        if (!filters.length) return docs;
        return docs.filter((doc) => {
            return filters.every((filter) => {
                const { name, value, operator } = filter;
                const docValue = this._getValueByPath(doc, name);
                if (docValue === undefined || docValue === null) return false;
                let compareValue = value;
                if (typeof docValue === "number" && !isNaN(Number(value))) {
                    compareValue = Number(value);
                } else if (typeof docValue === "boolean") {
                    compareValue = value === "true" || value === true;
                } else if (docValue instanceof Date) {
                    compareValue = new Date(value);
                }
                switch (operator) {
                    case "eq":
                        return docValue == compareValue;
                    case "ne":
                        return docValue != compareValue;
                    case "lt":
                        return docValue < compareValue;
                    case "gt":
                        return docValue > compareValue;
                    case "lte":
                        return docValue <= compareValue;
                    case "gte":
                        return docValue >= compareValue;
                    case "like":
                        return String(docValue).toLowerCase().includes(String(compareValue).toLowerCase());
                    default:
                        return docValue == compareValue;
                }
            });
        });
    }

    
    /**
     * 
     */
    sort(docs, sorters = []) {
        if (!sorters.length) return docs;
        return [...docs].toSorted((a, b) => {
            for (const s of sorters) {
                const { _sort, _order } = s;
                if (!_sort) continue;
                const aVal = this._getValueByPath(a, _sort) ?? "";
                const bVal = this._getValueByPath(b, _sort) ?? "";
                let comparison = 0;
                if (typeof aVal === "string" || typeof bVal === "string") {
                    comparison = String(aVal).localeCompare(String(bVal));
                } else {
                    comparison = aVal - bVal;
                }
                if (comparison !== 0) {
                    return _order === "desc" ? -comparison : comparison;
                }
            }
            return 0;
        });
    }

    
    /**
     * 
     */
    paginate(docs, _page = 1, _limit = 10) {
        const page = parseInt(_page) || 1;
        const limit = parseInt(_limit) || 10;
        const start = (page - 1) * limit;
        return docs.slice(start, start + limit);
    }

    
    /**
     * 
     */
    slice(docs, _start, _end) {
        if (_start === undefined && _end === undefined) return docs;
        const start = parseInt(_start) || 0;
        const end = _end !== undefined ? parseInt(_end) : docs.length;
        return docs.slice(start, end);
    }
}

export { Store };
