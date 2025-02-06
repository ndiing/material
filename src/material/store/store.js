/**
 * A simple data store class that provides sorting, searching, filtering,
 * pagination, and range selection functionalities.
 */
class Store {
    /**
     * Creates an instance of Store.
     * @param {Object[]} [data=[]] - The initial dataset.
     * @param {Object} [options={}] - Additional store options.
     */
    constructor(data = [], options = {}) {
        this.data = data;
        this.options = options;
    }

    /**
     * Sorts the data based on the given sorter.
     * @param {Object[]} data - The dataset to sort.
     * @param {Object} [sorters] - The sorting criteria.
     * @param {string} [sorters.name] - The field name to sort by.
     * @param {string} [sorters.order="asc"] - The sorting order ('asc' or 'desc').
     * @returns {Object[]} - The sorted dataset.
     */
    sort(data, sorters) {
        if (!sorters || !sorters.name) return data;
        return data.sort((a, b) => {
            let valueA = a[sorters.name];
            let valueB = b[sorters.name];
            if (sorters.order === "desc") return valueB > valueA ? 1 : -1;
            return valueA > valueB ? 1 : -1;
        });
    }

     /**
     * Performs a deep search within an item.
     * @param {*} item - The item to search within.
     * @param {string} q - The query string.
     * @returns {boolean} - Whether the item matches the query.
     */
    deepSearch(item, q) {
        if (!item) return false;
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
     * Searches the dataset based on the given query string.
     * @param {Object[]} data - The dataset to search.
     * @param {string} q - The search query.
     * @returns {Object[]} - The filtered dataset.
     */
    search(data, q) {
        if (!q) return data;
        return data.filter((item) => this.deepSearch(item, q));
    }

    /**
     * Retrieves a nested value from an object using dot notation.
     * @param {Object} item - The object to retrieve value from.
     * @param {string} name - The dot-notation key (e.g., "user.name").
     * @returns {*} - The retrieved value or undefined.
     */
    getNestedValue(item, name) {
        return name.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), item);
    }

    /**
     * Filters the dataset based on specified filter conditions.
     * @param {Object[]} data - The dataset to filter.
     * @param {Object[]} filters - The filter criteria.
     * @returns {Object[]} - The filtered dataset.
     */
    filter(data, filters) {
        if (!filters || !Array.isArray(filters) || filters.length === 0) return data;
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
     * Retrieves a specific range of data.
     * @param {Object[]} data - The dataset.
     * @param {number} _start - The start index.
     * @param {number} _end - The end index.
     * @returns {Object[]} - The sliced dataset.
     */
    range(data, _start, _end) {
        return data.slice(_start, _end);
    }

    /**
     * Paginates the dataset.
     * @param {Object[]} data - The dataset.
     * @param {number} _page - The page number.
     * @param {number} _limit - The number of items per page.
     * @returns {Object[]} - The paginated dataset.
     */
    paginate(data, _page, _limit) {
        let start = (_page - 1) * _limit;
        let end = start + _limit;
        return data.slice(start, end);
    }

     /**
     * Retrieves processed data based on provided options.
     * @async
     * @param {Object} [options={}] - The retrieval options.
     * @param {Object} [options.sorters] - Sorting options.
     * @param {string} [options.q] - Search query.
     * @param {Object[]} [options.filters] - Filtering options.
     * @param {number} [options._start] - Start index for range selection.
     * @param {number} [options._end] - End index for range selection.
     * @param {number} [options._page] - Page number for pagination.
     * @param {number} [options._limit] - Number of items per page.
     * @returns {Promise<{data: Object[], total: number}>} - Processed data and total count.
     */
    async get(options = {}) {
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
        return Promise.resolve({ data, total });
    }
}
export { Store };
