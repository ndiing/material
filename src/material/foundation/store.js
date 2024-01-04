/**
 * Checks if the given value is not undefined or null.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is not undefined or null, otherwise false.
 */
function notNull(value) {
    return value !== undefined && value !== null;
}

/**
 * Checks if the given value is not empty.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is not null, undefined, or an empty string, otherwise false.
 */
function notEmpty(value) {
    return notNull(value) && value !== "";
}

/**
 * Attempts to parse the value into an integer.
 * @param {*} value - The value to parse.
 * @returns {?number} Returns the parsed integer if successful, otherwise null.
 */
function parseNumber(value) {
    value = parseInt(value);
    return isNaN(value) ? null : value;
}

/**
 * Manages data filtering, sorting, and pagination via URL parameters.
 */
class MDStore {
    /**
     * Constructs an MDStore instance.
     * @param {Array<Object>} [docs=[]] - An array of documents.
     */
    constructor(docs = []) {
        this.docs = docs;
        this.url = new URL(window.location.href);
    }

    /**
     * Contains comparison operators used for filtering.
     * @private
     */
    get operators() {
        return {
            _lt: (a, b) => a < b,
            _gt: (a, b) => a > b,
            _lte: (a, b) => a <= b,
            _gte: (a, b) => a >= b,
            _eq: (a, b) => a.toLowerCase() === b.toLowerCase(),
            _ne: (a, b) => a.toLowerCase() !== b.toLowerCase(),
            _like: (a, b) => new RegExp(b, "i").test(a),
        };
    }

    /**
     * Contains properties and their associated types or parsing functions.
     * @private
     */
    get properties() {
        return {
            _page: parseNumber,
            _limit: parseNumber,
            _sort: String,
            _order: String,
            _start: parseNumber,
            _end: parseNumber,
            q: String,
        };
    }

    /**
     * Filters the URL search parameters based on name, value, and operator.
     * @param {string} name - The name of the parameter.
     * @param {string} value - The value of the parameter.
     * @param {string} [operator=_eq] - The operator for filtering (default is '_eq' for equality).
     */
    filter(name, value, operator = "_eq") {
        if (name)
            if (value) this.url.searchParams.set(name, value);
            else this.url.searchParams.delete(name);
        else {
            const keys = Array.from(this.url.searchParams.keys());
            const properties = Object.keys(this.properties);
            for (const key of keys) {
                if (properties.includes(key)) continue;
                this.url.searchParams.delete(key);
            }
        }
    }

    /**
     * Paginates the data by setting or deleting the '_page' and '_limit' URL search parameters.
     * @param {number} _page - The page number.
     * @param {number} _limit - The limit per page.
     */
    paginate(_page, _limit) {
        if (notEmpty(_page)) this.url.searchParams.set("_page", _page);
        else this.url.searchParams.delete("_page");
        if (notEmpty(_limit)) this.url.searchParams.set("_limit", _limit);
        else this.url.searchParams.delete("_limit");
    }

    /**
     * Sorts the data by setting or deleting the '_sort' and '_order' URL search parameters.
     * @param {string} _sort - The field to sort by.
     * @param {string} _order - The sorting order ('asc' or 'desc').
     */
    sort(_sort, _order) {
        if (_sort) {
            const _sorts = Array.from(this.url.searchParams.getAll("_sort"));
            const _orders = Array.from(this.url.searchParams.getAll("_order"));
            const index = _sorts.indexOf(_sort);

            if (index !== -1) {
                this.url.searchParams.delete("_sort");
                this.url.searchParams.delete("_order");
                for (let i = 0; i < _orders.length; i++) {
                    let name = _sorts[i];
                    let value = _orders[i];
                    if (index === i) {
                        if (_order) {
                            value = _order;
                        } else {
                            continue;
                        }
                    }
                    this.url.searchParams.append("_sort", name);
                    this.url.searchParams.append("_order", value);
                }
            } else {
                this.url.searchParams.append("_sort", _sort);
                this.url.searchParams.append("_order", _order);
            }
        } else {
            this.url.searchParams.delete("_sort");
            this.url.searchParams.delete("_order");
        }
    }

    /**
     * Slices the data by setting or deleting the '_start' and '_end' URL search parameters.
     * @param {number} _start - The starting index.
     * @param {number} _end - The ending index.
     */
    slice(_start, _end) {
        if (notEmpty(_start)) this.url.searchParams.set("_start", _start);
        else this.url.searchParams.delete("_start");
        if (notEmpty(_end)) this.url.searchParams.set("_end", _end);
        else this.url.searchParams.delete("_end");
    }

    /**
     * Searches data by setting or deleting the 'q' (query) URL search parameter.
     * @param {string} q - The search query.
     */
    search(q) {
        if (q) this.url.searchParams.set("q", q);
        else this.url.searchParams.delete("q");
    }

    /**
     * Sorts the data based on specified sorters.
     * @private
     * @param {Array<Object>} data - The array of objects to be sorted.
     * @param {Object} sorters - An object containing sorting criteria.
     * @returns {Array<Object>} Returns the sorted data array.
     */
    sortData(data, sorters) {
        const sortKeys = Object.keys(sorters);

        data.sort((a, b) => {
            for (let key of sortKeys) {
                const sortOrder = sorters[key] === "desc" ? -1 : 1;

                if (a[key] < b[key]) return -1 * sortOrder;
                if (a[key] > b[key]) return 1 * sortOrder;
            }

            return 0;
        });

        return data;
    }

    /**
     * Searches the data for occurrences of a specified string.
     * @private
     * @param {Array<Object>} data - The array of objects to search through.
     * @param {string} search - The string to search for.
     * @returns {Array<Object>} Returns an array of objects that match the search criteria.
     */
    searchData(data, search) {
        search = search.toLowerCase();

        return data.filter((item) => {
            for (let key in item) {
                if (typeof item[key] === "string" && item[key].toLowerCase().includes(search)) {
                    return true;
                }
            }
            return false;
        });
    }

    /**
     * Filters the data based on specified filters.
     * @private
     * @param {Array<Object>} data - The array of objects to be filtered.
     * @param {Array<Object>} filters - An array of filter objects containing 'name', 'operator', and 'value'.
     * @returns {Array<Object>} Returns the filtered data array.
     */
    filterData(data, filters) {
        return data.filter((item) => {
            return filters.every((filter) => {
                const { name, operator, value } = filter;
                return this.operators[operator](item[name], value);
            });
        });
    }

    /**
     * Retrieves all data based on applied filters, sorting, and pagination.
     * @returns {Object} Returns an object containing total count and filtered data.
     */
    getAll() {
        let data = this.docs.slice();
        let total = data.length;

        let _page = this.properties._page(this.url.searchParams.get("_page"));
        let _limit = this.properties._limit(this.url.searchParams.get("_limit"));
        let _order = Array.from(this.url.searchParams.getAll("_order"));
        let sorters = Object.fromEntries(Array.from(this.url.searchParams.getAll("_sort")).map((_sort, index) => [_sort, _order[index]]));
        let _start = this.properties._start(this.url.searchParams.get("_start"));
        let _end = this.properties._end(this.url.searchParams.get("_end"));
        let q = this.url.searchParams.get("q");
        let properties = Object.keys(this.properties);
        let operators = Object.keys(this.operators);
        let regexp = new RegExp(`^(\\w+?)(${operators.join("|")})?$`, "i");
        let filters = Array.from(this.url.searchParams.entries()).reduce((p, c) => {
            let [key, value] = c;
            if (!properties.includes(key)) {
                let [, name, operator = "_eq"] = key.match(regexp);
                p = p.concat({ name, value, operator });
            }
            return p;
        }, []);

        if (Object.keys(sorters).length) data = this.sortData(data, sorters);

        if (q) data = this.searchData(data, q);

        if (filters.length) data = this.filterData(data, filters);

        total = data.length;

        if (notNull(_page) && notNull(_limit)) {
            _start = (_page - 1) * _limit;
            _end = _start + _limit;
        }

        if (notNull(_start) && notNull(_end)) {
            data = data.slice(_start, _end);
        }

        return { total, data };
    }
}

export { MDStore };

// prettier-ignore
// const store = new MDStore([])

// // postId
// // id
// // name
// // body

// // store.filter('id',1)
// // store.filter('id',2)
// // store.filter('id')
// // store.filter('postId',1)
// // store.filter('postId',2)
// // store.filter("name_lt", 'lorem');
// // store.filter("name_gt", 'lorem');
// // store.filter("name_lte", 'lorem');
// // store.filter("name_gte", 'lorem');
// // store.filter("name_eq", 'lorem');
// // store.filter("name_ne", 'lorem');
// store.filter("name_like", "lorem");
// // store.filter("name", 'lorem');
// // store.filter()

// store.paginate(1, 10);
// // store.paginate(1,20)
// // store.paginate(2,20)
// // store.paginate(2)
// // store.paginate()

// store.sort("postId", "desc");
// store.sort("id", "desc");
// // store.sort("name", "asc");
// // store.sort("name", "desc");
// // store.sort('name')
// // store.sort()

// // store.slice(0, 10);
// // store.slice(0,20)
// // store.slice(0)
// // store.slice()

// // store.search("ipsum");
// // store.search()

// // console.table(Array.from(store.url.searchParams.entries()));
// // console.table(store.getAll().data);
