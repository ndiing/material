/**
 * Store class responsible for managing and manipulating data collections.
 */
class Store {
    /**
     * Creates an instance of the Store class.
     * @param {Array} [data=[]] - The initial data to store.
     * @param {Object} [options={}] - Additional options for the store.
     */
    constructor(data = [], options = {}) {
        this.data = data;
        this.options = options;
    }

    /**
     * Loads the provided data into the store.
     * @param {Array} [data=[]] - The data to load.
     */
    load(data = []) {
        this.data = data;
    }

    /**
     * Sorts the data based on the provided sorters.
     * @param {Array} data - The data to sort.
     * @param {Array} [sorters] - The sorters to use for sorting.
     * @returns {Array} The sorted data.
     */
    sort(data, sorters) {
        if (!Array.isArray(sorters) || sorters.length === 0) {
            return data;
        }
        return data.sort((a, b) => {
            for (let sorter of sorters) {
                let valueA = this.getNestedValue(a, sorter.name);
                let valueB = this.getNestedValue(b, sorter.name);

                if (valueA == null || valueB == null) {
                    continue;
                }

                if (valueA > valueB) {
                    return sorter.order === "desc" ? -1 : 1;
                }

                if (valueA < valueB) {
                    return sorter.order === "desc" ? 1 : -1;
                }
            }
            return 0;
        });
    }

    //
    /**
    //  * Performs a deep search on an item based on the query.
    //  * @param {any} item - The item to search within.
    //  * @param {string} q - The query string.
    //  * @returns {boolean} True if the item matches the query, otherwise false.
    //  */
    deepSearch(item, q) {
        if (!item) {
            return false;
        }

        if (typeof item === "string" || typeof item === "number") {
            return String(item).toLowerCase().includes(q.toLowerCase());
        }

        if (Array.isArray(item)) {
            return item.some((el) => this.deepSearch(el, q));
        }

        if (typeof item === "object") {
            return Object.values(item).some((val) => this.deepSearch(val, q));
        }
        return false;
    }

    /**
     * Searches the data based on the query.
     * @param {Array} data - The data to search.
     * @param {string} q - The query string.
     * @returns {Array} The filtered data.
     */
    search(data, q) {
        if (!q) {
            return data;
        }
        return data.filter((item) => this.deepSearch(item, q));
    }

    //
    /**
    //  * Retrieves a nested value from an item based on the specified name.
    //  * @param {Object} item - The item to retrieve the value from.
    //  * @param {string} name - The name of the property to retrieve.
    //  * @returns {any} The nested value.
    //  */
    getNestedValue(item, name) {
        return name.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), item);
    }

    /**
     * Filters the data based on the provided filters.
     * @param {Array} data - The data to filter.
     * @param {Array} [filters] - The filters to apply.
     * @returns {Array} The filtered data.
     */
    filter(data, filters) {
        if (!filters || !Array.isArray(filters) || filters.length === 0) {
            return data;
        }
        return data.filter((item) => {
            return filters.every((filter) => {
                let { name, value, operator = "_eq" } = filter;
                let fieldValue = this.getNestedValue(item, name);
                switch (operator) {
                    case "_eq":
                        return fieldValue === value;
                    case "_ne":
                        return fieldValue !== value;
                    case "_lt":
                        return fieldValue < value;
                    case "_gt":
                        return fieldValue > value;
                    case "_lte":
                        return fieldValue <= value;
                    case "_gte":
                        return fieldValue >= value;
                    case "_like":
                        return String(fieldValue).toLowerCase().includes(String(value).toLowerCase());
                    case "_in":
                        return Array.isArray(value) ? value.includes(fieldValue) : false;
                    case "_nin":
                        return Array.isArray(value) ? !value.includes(fieldValue) : false;
                    default:
                        return false;
                }
            });
        });
    }

    /**
     * Retrieves a subset of the data within the specified range.
     * @param {Array} data - The data to retrieve the range from.
     * @param {number} _start - The start index of the range.
     * @param {number} _end - The end index of the range.
     * @returns {Array} The data within the specified range.
     */
    range(data, _start, _end) {
        return data.slice(_start, _end);
    }

    /**
     * Paginates the data based on the specified page and limit.
     * @param {Array} data - The data to paginate.
     * @param {number} _page - The page number.
     * @param {number} _limit - The number of items per page.
     * @returns {Array} The paginated data.
     */
    paginate(data, _page, _limit) {
        let start = (_page - 1) * _limit;
        let end = start + _limit;
        return data.slice(start, end);
    }

    /**
     * Retrieves the processed data based on the provided options.
     * @param {Object} [options={}] - The options for retrieving the data.
     * @param {Array} [options.sorters] - The sorters to apply to the data.
     * @param {string} [options.q] - The query string to search within the data.
     * @param {Array} [options.filters] - The filters to apply to the data.
     * @param {number} [options._start] - The start index for range retrieval.
     * @param {number} [options._end] - The end index for range retrieval.
     * @param {number} [options._page] - The page number for pagination.
     * @param {number} [options._limit] - The number of items per page for pagination.
     * @returns {Object} An object containing the processed data and the total count.
     */
    get(options = {}) {
        let { sorters, q, filters, _start, _end, _page, _limit } = options;
        let data = this.data.slice();
        data = this.sort(data, sorters);
        data = this.search(data, q);
        data = this.filter(data, filters);
        let total = data.length;

        if (_start !== undefined && _end !== undefined) {
            data = this.range(data, _start, _end);
        } else if (_page !== undefined && _limit !== undefined) {
            data = this.paginate(data, _page, _limit);
        }
        return { data, total };
    }
}

export { Store };
