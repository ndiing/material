class QueryBuilder {
    constructor(searchParams, options = {}) {
        this.searchParams = searchParams ?? new URLSearchParams();

        this.knownTypes = {
            _page: Number,
            _limit: Number,
            _start: Number,
            _end: Number,
        };

        this._limit = options._limit ?? 10;
        this._end = options._end ?? 10;
    }

    search(q) {
        if (q && String(q).trim() !== "") {
            this.searchParams.set("q", q.trim());
        } else {
            this.searchParams.delete("q");
        }
        return this;
    }

    filter(name, value, operator = "") {
        if (!name) {
            const systemKeys = ["_sort", "_order", "_page", "_limit", "_start", "_end", "q"];
            [...this.searchParams.keys()].forEach((key) => {
                if (!systemKeys.includes(key)) {
                    this.searchParams.delete(key);
                }
            });
            return this;
        }

        const keyName = operator ? `${name}_${operator}` : name;

        if (value !== undefined && value !== null && value !== "") {
            this.searchParams.append(keyName, value);
        } else {
            this.searchParams.delete(keyName);
        }
        return this;
    }

    sort(_sort, _order) {
        if (_sort) {
            const _sorts = this.searchParams.getAll("_sort");
            const _orders = this.searchParams.getAll("_order");
            const foundIndex = _sorts.indexOf(_sort);

            if (_order) {
                if (foundIndex === -1) {
                    this.searchParams.append("_sort", _sort);
                    this.searchParams.append("_order", _order);
                } else {
                    this.searchParams.delete("_sort");
                    this.searchParams.delete("_order");
                    _sorts.forEach((s, idx) => {
                        this.searchParams.append("_sort", s);
                        this.searchParams.append("_order", idx === foundIndex ? _order : _orders[idx] || "asc");
                    });
                }
            } else {
                this.searchParams.delete("_sort");
                this.searchParams.delete("_order");
                _sorts.forEach((s, idx) => {
                    if (idx !== foundIndex) {
                        this.searchParams.append("_sort", s);
                        this.searchParams.append("_order", _orders[idx] || "asc");
                    }
                });
            }
        } else {
            this.searchParams.delete("_sort");
            this.searchParams.delete("_order");
        }
        return this;
    }

    paginate(_page, _limit = this._limit) {
        this.searchParams.delete("_start");
        this.searchParams.delete("_end");

        if (_page) {
            this.searchParams.set("_page", _page);
            this.searchParams.set("_limit", _limit);
        } else {
            this.searchParams.delete("_page");
            this.searchParams.delete("_limit");
        }
        return this;
    }

    slice(_start, _end = this._end) {
        this.searchParams.delete("_page");
        this.searchParams.delete("_limit");

        if (_start !== undefined && _start !== null) {
            this.searchParams.set("_start", _start);
            this.searchParams.set("_end", _end);
        } else {
            this.searchParams.delete("_start");
            this.searchParams.delete("_end");
        }
        return this;
    }

    clear() {
        [...this.searchParams.keys()].forEach((key) => {
            this.searchParams.delete(key);
        });
        return this;
    }

    toString() {
        const str = this.searchParams.toString();
        return str ? `?${str}` : "";
    }

    toJSON() {
        const query = {};

        for (const [key, value] of this.searchParams.entries()) {
            let parsedValue = value;
            if (this.knownTypes[key]) {
                parsedValue = this.knownTypes[key](value);
            } else if (!isNaN(Number(value)) && value.trim() !== "") {
                parsedValue = Number(value);
            }

            if (query[key] !== undefined) {
                if (Array.isArray(query[key])) {
                    query[key].push(parsedValue);
                } else {
                    query[key] = [query[key], parsedValue];
                }
            } else {
                query[key] = parsedValue;
            }
        }
        return query;
    }
}

export { QueryBuilder };
