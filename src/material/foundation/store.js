import { parseNumber, notEmpty, notNull } from "./helper";

/**
 * Mengelola penyaringan data, pengurutan, dan paginasi melalui parameter URL.
 */
class MDStore {
    /**
     * Membuat instance MDStore.
     * @param {Array<Object>} [docs=[]] - Sebuah array dokumen.
     */
    constructor(docs = []) {
        this.docs = docs;
        this.url = new URL(window.location.href);
    }

     /**
     * Berisi operator perbandingan yang digunakan untuk penyaringan.
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
     * Berisi properti dan tipe data atau fungsi parsing yang terkait.
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
     * Menyaring parameter pencarian URL berdasarkan nama, nilai, dan operator.
     * @param {string} name - Nama parameter.
     * @param {string} value - Nilai parameter.
     * @param {string} [operator=_eq] - Operator untuk penyaringan (default: '_eq' untuk kesetaraan).
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
     * Melakukan paginasi data dengan menetapkan atau menghapus parameter pencarian URL '_page' dan '_limit'.
     * @param {number} _page - Nomor halaman.
     * @param {number} _limit - Batasan data per halaman.
     */
    paginate(_page, _limit) {
        if (notEmpty(_page)) this.url.searchParams.set("_page", _page);
        else this.url.searchParams.delete("_page");
        if (notEmpty(_limit)) this.url.searchParams.set("_limit", _limit);
        else this.url.searchParams.delete("_limit");
    }

    /**
     * Mengurutkan data dengan menetapkan atau menghapus parameter pencarian URL '_sort' dan '_order'.
     * @param {string} _sort - Bidang yang digunakan untuk pengurutan.
     * @param {string} _order - Urutan pengurutan ('asc' atau 'desc').
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
     * Memotong data dengan menetapkan atau menghapus parameter pencarian URL '_start' dan '_end'.
     * @param {number} _start - Indeks awal.
     * @param {number} _end - Indeks akhir.
     */
    slice(_start, _end) {
        if (notEmpty(_start)) this.url.searchParams.set("_start", _start);
        else this.url.searchParams.delete("_start");
        if (notEmpty(_end)) this.url.searchParams.set("_end", _end);
        else this.url.searchParams.delete("_end");
    }

    /**
     * Mencari data dengan menetapkan atau menghapus parameter pencarian URL 'q' (query).
     * @param {string} q - Query pencarian.
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
     * Mengambil semua data berdasarkan filter yang diterapkan, sorting, dan pagination.
     * @returns {Object} - Objek yang berisi total jumlah dan data yang difilter.
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
