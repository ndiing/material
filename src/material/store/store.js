import { isObject } from "../functions/functions.js";

/**
 * {{desc}}
 */
class MDStore {
    /**
     * {{desc}}
     * @param {Any} docs = [] - {{desc}}
     * @param {Any} options = {} - {{desc}}
     */
    constructor(docs = [], options = {}) {
        this.docs = docs;
        this.options = {
            primaryKey: "_id",
            ...options,
        };
    }

    /**
     * {{desc}}
     * @param {Any} doc - {{desc}}
     */
    post(doc) {
        this.docs.push(doc);
        return doc;
    }

    /**
     * {{desc}}
     * @param {Any} _id - {{desc}}
     */
    get(_id) {
        return this.docs.find((doc) => doc[this.options.primaryKey] === _id);
    }

    /**
     * {{desc}}
     * @param {Any} _id - {{desc}}
     * @param {Any} doc - {{desc}}
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
     * {{desc}}
     * @param {Any} _id - {{desc}}
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
     * {{desc}}
     * @param {Any} doc - {{desc}}
     */
    put(doc) {
        if (doc[this.options.primaryKey]) {
            return this.patch(doc[this.options.primaryKey], doc);
        } else {
            return this.post(doc);
        }
    }

    /**
     * {{desc}}
     * @param {Any} docs - {{desc}}
     * @param {Any} sorters - {{desc}}
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
     * {{desc}}
     * @param {Any} docs - {{desc}}
     * @param {Any} q - {{desc}}
     */
    search(docs, q) {
        const query = q.toLowerCase().trim();
        return docs.filter((doc) => this.deepSearch(doc, query));
    }

    /**
     * {{desc}}
     * @param {Any} docs - {{desc}}
     * @param {Any} filters - {{desc}}
     */
    filter(docs, filters) {
        return docs.filter((doc) => this.deepFilter(doc, filters));
    }

    /**
     * {{desc}}
     * @param {Any} docs - {{desc}}
     * @param {Any} _page - {{desc}}
     * @param {Any} _limit - {{desc}}
     */
    paginate(docs, _page, _limit) {
        const startIndex = (_page - 1) * _limit;
        return docs.slice(startIndex, startIndex + _limit);
    }

    /**
     * {{desc}}
     * @param {Any} docs - {{desc}}
     * @param {Any} _start - {{desc}}
     * @param {Any} _end - {{desc}}
     */
    slice(docs, _start, _end) {
        return docs.slice(_start, _end);
    }

    /**
     * {{desc}}
     * @param {Any} options = {} - {{desc}}
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
     * {{desc}}
     * @param {Any} target - {{desc}}
     * @param {Any} source - {{desc}}
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
     * {{desc}}
     * @param {Any} obj - {{desc}}
     * @param {Any} path - {{desc}}
     */
    getValue(obj, path) {
        return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    }

    /**
     * {{desc}}
     * @param {Any} obj - {{desc}}
     * @param {Any} query - {{desc}}
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
     * {{desc}}
     * @param {Any} obj - {{desc}}
     * @param {Any} filters - {{desc}}
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
