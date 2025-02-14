/**
 */
class Store {
    /**
     * @param {Array} [data=[]] - The initial data array
     * @param {Object} [options={}] - Configuration options
     */
    constructor(data = [], options = {}) {
        this.data = data;
        this.options = options;
    }

    /**
     * @param {Array} [data=[]] - The data array to load
     */
    load(data = []) {
        this.data = data;
    }

    /**
     * @param {Array} [data] - The data array to sort
     * @param {Array} [sorters] - The array of sorter objects
     * @returns {Array} - The sorted data array
     */
    sort(data, sorters) {
        if (!Array.isArray(sorters) || sorters.length === 0) return data;
        return data.sort((a, b) => {
            for (let sorter of sorters) {
                let valueA = this.getNestedValue(a, sorter.name);
                let valueB = this.getNestedValue(b, sorter.name);
                if (valueA == null || valueB == null) continue;
                if (valueA > valueB) return sorter.order === "desc" ? -1 : 1;
                if (valueA < valueB) return sorter.order === "desc" ? 1 : -1;
            }
            return 0;
        });
    }

    /**
     * @param {any} [item] - The item to search
     * @param {String} [q] - The query string
     * @returns {Boolean} - Whether the item matches the query
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
     * @param {Array} [data] - The data array to search
     * @param {String} [q] - The query string
     * @returns {Array} - The filtered data array
     */
    search(data, q) {
        if (!q) return data;
        return data.filter((item) => this.deepSearch(item, q));
    }

    /**
     * @param {Object} [item] - The item to get the value from
     * @param {String} [name] - The name of the property
     * @returns {any} - The nested value
     */
    getNestedValue(item, name) {
        return name.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), item);
    }

    /**
     * @param {Array} [data] - The data array to filter
     * @param {Array} [filters] - The array of filter objects
     * @returns {Array} - The filtered data array
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
     * @param {Array} [data] - The data array to slice
     * @param {Number} [_start] - The start index
     * @param {Number} [_end] - The end index
     * @returns {Array} - The sliced data array
     */
    range(data, _start, _end) {
        return data.slice(_start, _end);
    }

    /**
     * @param {Array} [data] - The data array to paginate
     * @param {Number} [_page] - The page number
     * @param {Number} [_limit] - The number of items per page
     * @returns {Array} - The paginated data array
     */
    paginate(data, _page, _limit) {
        let start = (_page - 1) * _limit;
        let end = start + _limit;
        return data.slice(start, end);
    }

    /**
     * @param {Object} [options={}] - Configuration options
     * @returns {Object} - The filtered, sorted, searched, paginated data and total count
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
