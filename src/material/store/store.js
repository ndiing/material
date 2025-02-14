/**
 * Kelas Store untuk mengelola, menyortir, mencari, memfilter, dan melakukan paginasi data.
 */

class Store {
    /**
     * Membuat instance Store.
     * @param {Array<Object>} [data=[]] - Data awal dalam bentuk array objek.
     * @param {Object} [options={}] - Opsi tambahan untuk konfigurasi.
     */

    constructor(data = [], options = {}) {
        this.data = data;
        this.options = options;
    }

    /**
     * Memuat data baru ke dalam store.
     * @param {Array<Object>} data - Data yang akan dimuat ke dalam store.
     */

    load(data = []) {
        this.data = data;
    }

    /**
     * Menyortir data berdasarkan kriteria yang diberikan.
     * @param {Array<Object>} data - Data yang akan disortir.
     * @param {Array<{ name: string, order: 'asc' | 'desc' }>} sorters - Kriteria penyortiran.
     * @returns {Array<Object>} Data yang telah disortir.
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
     * Melakukan pencarian rekursif dalam suatu item.
     * @param {any} item - Item yang akan dicari.
     * @param {string} q - Kata kunci pencarian.
     * @returns {boolean} True jika item cocok dengan pencarian, false jika tidak.
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
     * Mencari data berdasarkan kata kunci tertentu.
     * @param {Array<Object>} data - Data yang akan dicari.
     * @param {string} q - Kata kunci pencarian.
     * @returns {Array<Object>} Data yang sesuai dengan pencarian.
     */

    search(data, q) {
        if (!q) return data;
        return data.filter((item) => this.deepSearch(item, q));
    }

    /**
     * Mengambil nilai dari properti bertingkat dalam objek.
     * @param {Object} item - Objek sumber.
     * @param {string} name - Path ke properti (contoh: 'user.address.city').
     * @returns {any} Nilai properti jika ada, undefined jika tidak ditemukan.
     */

    getNestedValue(item, name) {
        return name.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), item);
    }

    /**
     * Memfilter data berdasarkan kondisi tertentu.
     * @param {Array<Object>} data - Data yang akan difilter.
     * @param {Array<{ name: string, value: any, operator: string }>} filters - Kriteria filter.
     * @returns {Array<Object>} Data yang telah difilter.
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
     * Mengambil data dalam rentang indeks tertentu.
     * @param {Array<Object>} data - Data yang akan dipotong.
     * @param {number} _start - Indeks awal.
     * @param {number} _end - Indeks akhir.
     * @returns {Array<Object>} Data yang berada dalam rentang indeks.
     */

    range(data, _start, _end) {
        return data.slice(_start, _end);
    }

    /**
     * Memisahkan data menjadi halaman-paginasi.
     * @param {Array<Object>} data - Data yang akan dipaginasi.
     * @param {number} _page - Nomor halaman.
     * @param {number} _limit - Jumlah item per halaman.
     * @returns {Array<Object>} Data pada halaman tertentu.
     */

    paginate(data, _page, _limit) {
        let start = (_page - 1) * _limit;
        let end = start + _limit;
        return data.slice(start, end);
    }

    /**
     * Mengambil data dengan opsi pemrosesan seperti sortir, filter, pencarian, dan paginasi.
     * @param {Object} [options={}] - Opsi pemrosesan data.
     * @param {Array<{ name: string, order: 'asc' | 'desc' }>} [options.sorters] - Opsi penyortiran.
     * @param {string} [options.q] - Kata kunci pencarian.
     * @param {Array<{ name: string, value: any, operator: string }>} [options.filters] - Opsi filter.
     * @param {number} [options._start] - Indeks awal rentang data.
     * @param {number} [options._end] - Indeks akhir rentang data.
     * @param {number} [options._page] - Nomor halaman untuk paginasi.
     * @param {number} [options._limit] - Jumlah item per halaman.
     * @returns {{ data: Array<Object>, total: number }} Objek yang berisi data hasil pemrosesan dan jumlah total data.
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
