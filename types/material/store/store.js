"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
/**
 */
var Store = /** @class */ (function () {
    /**
     * @param {Array} [data=[]]
     * @param {Object} [options={}]
     */
    function Store(data, options) {
        if (data === void 0) {
            data = [];
        }
        if (options === void 0) {
            options = {};
        }
        this.data = data;
        this.options = options;
    }
    /**
     * @param {Array} [data=[]]
     */
    Store.prototype.load = function (data) {
        if (data === void 0) {
            data = [];
        }
        this.data = data;
    };
    /**
     * @param {String} [data]
     * @param {String} [sorters]
     */
    Store.prototype.sort = function (data, sorters) {
        var _this = this;
        if (!Array.isArray(sorters) || sorters.length === 0) return data;
        return data.sort(function (a, b) {
            for (var _i = 0, sorters_1 = sorters; _i < sorters_1.length; _i++) {
                var sorter = sorters_1[_i];
                var valueA = _this.getNestedValue(a, sorter.name);
                var valueB = _this.getNestedValue(b, sorter.name);
                if (valueA == null || valueB == null) continue;
                if (valueA > valueB) return sorter.order === "desc" ? -1 : 1;
                if (valueA < valueB) return sorter.order === "desc" ? 1 : -1;
            }
            return 0;
        });
    };
    /**
     * @param {String} [item]
     * @param {String} [q]
     */
    Store.prototype.deepSearch = function (item, q) {
        var _this = this;
        if (!item) return false;
        if (typeof item === "string" || typeof item === "number") {
            return String(item).toLowerCase().includes(q.toLowerCase());
        }
        if (Array.isArray(item)) {
            return item.some(function (el) {
                return _this.deepSearch(el, q);
            });
        }
        if (typeof item === "object") {
            return Object.values(item).some(function (val) {
                return _this.deepSearch(val, q);
            });
        }
        return false;
    };
    /**
     * @param {String} [data]
     * @param {String} [q]
     */
    Store.prototype.search = function (data, q) {
        var _this = this;
        if (!q) return data;
        return data.filter(function (item) {
            return _this.deepSearch(item, q);
        });
    };
    /**
     * @param {String} [item]
     * @param {String} [name]
     */
    Store.prototype.getNestedValue = function (item, name) {
        return name.split(".").reduce(function (acc, key) {
            return acc && acc[key] !== undefined ? acc[key] : undefined;
        }, item);
    };
    /**
     * @param {String} [data]
     * @param {String} [filters]
     */
    Store.prototype.filter = function (data, filters) {
        var _this = this;
        if (!filters || !Array.isArray(filters) || filters.length === 0) return data;
        return data.filter(function (item) {
            return filters.every(function (filter) {
                var name = filter.name,
                    value = filter.value,
                    _a = filter.operator,
                    operator = _a === void 0 ? "_eq" : _a;
                var fieldValue = _this.getNestedValue(item, name);
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
    };
    /**
     * @param {String} [data]
     * @param {String} [_start]
     * @param {String} [_end]
     */
    Store.prototype.range = function (data, _start, _end) {
        return data.slice(_start, _end);
    };
    /**
     * @param {String} [data]
     * @param {String} [_page]
     * @param {String} [_limit]
     */
    Store.prototype.paginate = function (data, _page, _limit) {
        var start = (_page - 1) * _limit;
        var end = start + _limit;
        return data.slice(start, end);
    };
    /**
     * @param {Object} [options={}]
     */
    Store.prototype.get = function (options) {
        if (options === void 0) {
            options = {};
        }
        var sorters = options.sorters,
            q = options.q,
            filters = options.filters,
            _start = options._start,
            _end = options._end,
            _page = options._page,
            _limit = options._limit;
        var data = this.data.slice();
        data = this.sort(data, sorters);
        data = this.search(data, q);
        data = this.filter(data, filters);
        var total = data.length;
        if (_start !== undefined && _end !== undefined) {
            data = this.range(data, _start, _end);
        } else if (_page !== undefined && _limit !== undefined) {
            data = this.paginate(data, _page, _limit);
        }
        return { data: data, total: total };
    };
    return Store;
})();
exports.Store = Store;
