/**
 */
class Store {
    /**
     * @param {Array} [data=[]]
     * @param {Object} [options={}]
     */
    constructor(data = [], options = {}) {
        this.data = data;
        this.options = options;
    }

    /**
     * @param {Array} [data=[]]
     */
    load(data = []) {
        this.data = data;
    }

    /**
     * @param {String} [data]
     * @param {String} [sorters]
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
     * @param {String} [item]
     * @param {String} [q]
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
     * @param {String} [data]
     * @param {String} [q]
     */
    search(data, q) {
        if (!q) return data;
        return data.filter((item) => this.deepSearch(item, q));
    }

    /**
     * @param {String} [item]
     * @param {String} [name]
     */
    getNestedValue(item, name) {
        return name.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), item);
    }

    /**
     * @param {String} [data]
     * @param {String} [filters]
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
     * @param {String} [data]
     * @param {String} [_start]
     * @param {String} [_end]
     */
    range(data, _start, _end) {
        return data.slice(_start, _end);
    }

    /**
     * @param {String} [data]
     * @param {String} [_page]
     * @param {String} [_limit]
     */
    paginate(data, _page, _limit) {
        let start = (_page - 1) * _limit;
        let end = start + _limit;
        return data.slice(start, end);
    }

    /**
     * @param {Object} [options={}]
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
