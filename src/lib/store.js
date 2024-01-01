/**
 * Checks if the value is not null or undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is not null or undefined, otherwise false.
 */
function notNull(value) {
    return value !== null && value !== undefined;
}

/**
 * Checks if the value is not null, undefined, or an empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if the value is not null, undefined, or an empty string, otherwise false.
 */
function notEmpty(value) {
    return notNull(value) && value !== "";
}

/**
 * Represents a Store for managing and manipulating data.
 * @author Ridho Prasetya
 */
class Store {
    /**
     * Initializes the Store with an array of documents.
     * @param {Array} [docs=[]] - Array of documents.
     */
    constructor(docs = []) {
        this.url = new URL(window.location.href);
        this.docs = docs;
    }

    /**
     * Returns operators for filtering data.
     * @private
     * @returns {Object} - Operators object for filtering data.
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
     * Returns properties for managing data.
     * @private
     * @returns {Object} - Properties object for managing data.
     */
    get properties() {
        return {
            _page: Number,
            _limit: Number,
            _sort: String,
            _order: String,
            _start: Number,
            _end: Number,
            q: String,
        };
    }

    /**
     * Modifies the URL search parameters by adding or deleting a specific parameter based on the provided name and value.
     * If the name is falsy, it deletes parameters not included in the properties object.
     * @param {string} name - The name of the parameter to set or delete.
     * @param {string} value - The value of the parameter.
     * @returns {void}
     */
    filter(name, value) {
        if (name)
            if (value) this.url.searchParams.set(name, value);
            else this.url.searchParams.delete(name);
        else for (const name of Array.from(this.url.searchParams.keys())) if (!Object.keys(this.properties).includes(name)) this.url.searchParams.delete(name);
    }

    /**
     * Modifies the URL search parameters to set or delete the "_page" and "_limit" parameters based on provided values.
     * @param {number} _page - The page number.
     * @param {number} _limit - The limit of items per page.
     * @returns {void}
     */
    paginate(_page, _limit) {
        if (notEmpty(_page)) this.url.searchParams.set("_page", _page);
        else this.url.searchParams.delete("_page");

        if (notEmpty(_limit)) this.url.searchParams.set("_limit", _limit);
        else this.url.searchParams.delete("_limit");
    }

    /**
     * Modifies the URL search parameters to handle sorting by setting or deleting "_sort" and "_order" parameters.
     * @param {string} _sort - The field to sort by.
     * @param {string} _order - The sorting order ("asc" for ascending, "desc" for descending).
     * @returns {void}
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
                    const name = _sorts[i];
                    let value = _orders[i];
                    if (i === index)
                        if (_order) value = _order;
                        else continue;

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
     * Modifies the URL search parameters to set or delete the "_start" and "_end" parameters based on provided values.
     * @param {number} _start - The starting index.
     * @param {number} _end - The ending index.
     * @returns {void}
     */
    slice(_start, _end) {
        if (notEmpty(_start)) this.url.searchParams.set("_start", _start);
        else this.url.searchParams.delete("_start");

        if (notEmpty(_end)) this.url.searchParams.set("_end", _end);
        else this.url.searchParams.delete("_end");
    }

    /**
     * Modifies the URL search parameters to set or delete the "q" parameter based on the provided search query.
     * @param {string} q - The search query string.
     * @returns {void}
     */
    search(q) {
        if (notEmpty(q)) this.url.searchParams.set("q", q);
        else this.url.searchParams.delete("q");
    }

    /**
     * Sorts the given data array based on the provided sorters object.
     * @private
     * @param {Array} data - The array of objects to be sorted.
     * @param {Object} sorters - The object containing fields to sort by and their sorting order.
     * @returns {Array} - The sorted array of objects.
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
     * Searches and filters the given data array based on the provided search query.
     * @private
     * @param {Array} data - The array of objects to be searched within.
     * @param {string} search - The search query string.
     * @returns {Array} - The filtered array of objects based on the search query.
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
     * Filters the given data array based on the provided filters array.
     * @private
     * @param {Array} data - The array of objects to be filtered.
     * @param {Array} filters - The array of filter objects containing name, operator, and value.
     * @returns {Array} - The filtered array of objects based on the filters.
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
     * Retrieves filtered and paginated data based on URL parameters.
     * @returns {Object} - Object containing total count and filtered data.
     */
    getAll() {
        let data = this.docs.slice();
        let total = data.length;

        const _orders = Array.from(this.url.searchParams.getAll("_order"));
        const sorters = Object.fromEntries(Array.from(this.url.searchParams.getAll("_sort")).map((name, index) => [name, _orders[index]]));

        const search = this.url.searchParams.get("q");

        const keys = Object.keys(this.properties);
        const regexp = new RegExp(`^(.*?)(${Object.keys(this.operators).join("|")})?$`);
        const filters = [];
        for (const [key, value] of Array.from(this.url.searchParams.entries())) {
            if (keys.includes(key)) continue;
            const [, name, operator = "_eq"] = key.match(regexp);
            filters.push({ name, operator, value });
        }
        let _page = parseInt(this.url.searchParams.get("_page"));
        let _limit = parseInt(this.url.searchParams.get("_limit"));
        let _start = parseInt(this.url.searchParams.get("_start"));
        let _end = parseInt(this.url.searchParams.get("_end"));

        if (Object.keys(sorters).length) data = this.sortData(data, sorters);
        if (search) data = this.searchData(data, search);
        if (filters.length) data = this.filterData(data, filters);
        total = data.length;

        if (isNaN(_start) && isNaN(_end)) {
            _start = (_page - 1) * _limit;
            _end = _start + _limit;
        }
        if (!isNaN(_start) && !isNaN(_end)) {
            data = data.slice(_start, _end);
        }

        return { total, data };
    }
}

export { Store };

// // Usage example
// const docs = [
//     {
//         userId: 1,
//         id: 1,
//         title: "quidem molestiae enim",
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "sunt qui excepturi placeat culpa",
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "omnis laborum odio",
//     },
//     {
//         userId: 1,
//         id: 4,
//         title: "non esse culpa molestiae omnis sed optio",
//     },
//     {
//         userId: 1,
//         id: 5,
//         title: "eaque aut omnis a",
//     },
//     {
//         userId: 1,
//         id: 6,
//         title: "natus impedit quibusdam illo est",
//     },
//     {
//         userId: 1,
//         id: 7,
//         title: "quibusdam autem aliquid et et quia",
//     },
//     {
//         userId: 1,
//         id: 8,
//         title: "qui fuga est a eum",
//     },
//     {
//         userId: 1,
//         id: 9,
//         title: "saepe unde necessitatibus rem",
//     },
//     {
//         userId: 1,
//         id: 10,
//         title: "distinctio laborum qui",
//     },
//     {
//         userId: 2,
//         id: 11,
//         title: "quam nostrum impedit mollitia quod et dolor",
//     },
//     {
//         userId: 2,
//         id: 12,
//         title: "consequatur autem doloribus natus consectetur",
//     },
//     {
//         userId: 2,
//         id: 13,
//         title: "ab rerum non rerum consequatur ut ea unde",
//     },
//     {
//         userId: 2,
//         id: 14,
//         title: "ducimus molestias eos animi atque nihil",
//     },
//     {
//         userId: 2,
//         id: 15,
//         title: "ut pariatur rerum ipsum natus repellendus praesentium",
//     },
//     {
//         userId: 2,
//         id: 16,
//         title: "voluptatem aut maxime inventore autem magnam atque repellat",
//     },
//     {
//         userId: 2,
//         id: 17,
//         title: "aut minima voluptatem ut velit",
//     },
//     {
//         userId: 2,
//         id: 18,
//         title: "nesciunt quia et doloremque",
//     },
//     {
//         userId: 2,
//         id: 19,
//         title: "velit pariatur quaerat similique libero omnis quia",
//     },
//     {
//         userId: 2,
//         id: 20,
//         title: "voluptas rerum iure ut enim",
//     },
//     {
//         userId: 3,
//         id: 21,
//         title: "repudiandae voluptatem optio est consequatur rem in temporibus et",
//     },
//     {
//         userId: 3,
//         id: 22,
//         title: "et rem non provident vel ut",
//     },
//     {
//         userId: 3,
//         id: 23,
//         title: "incidunt quisquam hic adipisci sequi",
//     },
//     {
//         userId: 3,
//         id: 24,
//         title: "dolores ut et facere placeat",
//     },
//     {
//         userId: 3,
//         id: 25,
//         title: "vero maxime id possimus sunt neque et consequatur",
//     },
//     {
//         userId: 3,
//         id: 26,
//         title: "quibusdam saepe ipsa vel harum",
//     },
//     {
//         userId: 3,
//         id: 27,
//         title: "id non nostrum expedita",
//     },
//     {
//         userId: 3,
//         id: 28,
//         title: "omnis neque exercitationem sed dolor atque maxime aut cum",
//     },
//     {
//         userId: 3,
//         id: 29,
//         title: "inventore ut quasi magnam itaque est fugit",
//     },
//     {
//         userId: 3,
//         id: 30,
//         title: "tempora assumenda et similique odit distinctio error",
//     },
//     {
//         userId: 4,
//         id: 31,
//         title: "adipisci laborum fuga laboriosam",
//     },
//     {
//         userId: 4,
//         id: 32,
//         title: "reiciendis dolores a ut qui debitis non quo labore",
//     },
//     {
//         userId: 4,
//         id: 33,
//         title: "iste eos nostrum",
//     },
//     {
//         userId: 4,
//         id: 34,
//         title: "cumque voluptatibus rerum architecto blanditiis",
//     },
//     {
//         userId: 4,
//         id: 35,
//         title: "et impedit nisi quae magni necessitatibus sed aut pariatur",
//     },
//     {
//         userId: 4,
//         id: 36,
//         title: "nihil cupiditate voluptate neque",
//     },
//     {
//         userId: 4,
//         id: 37,
//         title: "est placeat dicta ut nisi rerum iste",
//     },
//     {
//         userId: 4,
//         id: 38,
//         title: "unde a sequi id",
//     },
//     {
//         userId: 4,
//         id: 39,
//         title: "ratione porro illum labore eum aperiam sed",
//     },
//     {
//         userId: 4,
//         id: 40,
//         title: "voluptas neque et sint aut quo odit",
//     },
//     {
//         userId: 5,
//         id: 41,
//         title: "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur",
//     },
//     {
//         userId: 5,
//         id: 42,
//         title: "tenetur explicabo ea",
//     },
//     {
//         userId: 5,
//         id: 43,
//         title: "aperiam doloremque nihil",
//     },
//     {
//         userId: 5,
//         id: 44,
//         title: "sapiente cum numquam officia consequatur vel natus quos suscipit",
//     },
//     {
//         userId: 5,
//         id: 45,
//         title: "tenetur quos ea unde est enim corrupti qui",
//     },
//     {
//         userId: 5,
//         id: 46,
//         title: "molestiae voluptate non",
//     },
//     {
//         userId: 5,
//         id: 47,
//         title: "temporibus molestiae aut",
//     },
//     {
//         userId: 5,
//         id: 48,
//         title: "modi consequatur culpa aut quam soluta alias perspiciatis laudantium",
//     },
//     {
//         userId: 5,
//         id: 49,
//         title: "ut aut vero repudiandae voluptas ullam voluptas at consequatur",
//     },
//     {
//         userId: 5,
//         id: 50,
//         title: "sed qui sed quas sit ducimus dolor",
//     },
//     {
//         userId: 6,
//         id: 51,
//         title: "odit laboriosam sint quia cupiditate animi quis",
//     },
//     {
//         userId: 6,
//         id: 52,
//         title: "necessitatibus quas et sunt at voluptatem",
//     },
//     {
//         userId: 6,
//         id: 53,
//         title: "est vel sequi voluptatem nemo quam molestiae modi enim",
//     },
//     {
//         userId: 6,
//         id: 54,
//         title: "aut non illo amet perferendis",
//     },
//     {
//         userId: 6,
//         id: 55,
//         title: "qui culpa itaque omnis in nesciunt architecto error",
//     },
//     {
//         userId: 6,
//         id: 56,
//         title: "omnis qui maiores tempora officiis omnis rerum sed repellat",
//     },
//     {
//         userId: 6,
//         id: 57,
//         title: "libero excepturi voluptatem est architecto quae voluptatum officia tempora",
//     },
//     {
//         userId: 6,
//         id: 58,
//         title: "nulla illo consequatur aspernatur veritatis aut error delectus et",
//     },
//     {
//         userId: 6,
//         id: 59,
//         title: "eligendi similique provident nihil",
//     },
//     {
//         userId: 6,
//         id: 60,
//         title: "omnis mollitia sunt aliquid eum consequatur fugit minus laudantium",
//     },
//     {
//         userId: 7,
//         id: 61,
//         title: "delectus iusto et",
//     },
//     {
//         userId: 7,
//         id: 62,
//         title: "eos ea non recusandae iste ut quasi",
//     },
//     {
//         userId: 7,
//         id: 63,
//         title: "velit est quam",
//     },
//     {
//         userId: 7,
//         id: 64,
//         title: "autem voluptatem amet iure quae",
//     },
//     {
//         userId: 7,
//         id: 65,
//         title: "voluptates delectus iure iste qui",
//     },
//     {
//         userId: 7,
//         id: 66,
//         title: "velit sed quia dolor dolores delectus",
//     },
//     {
//         userId: 7,
//         id: 67,
//         title: "ad voluptas nostrum et nihil",
//     },
//     {
//         userId: 7,
//         id: 68,
//         title: "qui quasi nihil aut voluptatum sit dolore minima",
//     },
//     {
//         userId: 7,
//         id: 69,
//         title: "qui aut est",
//     },
//     {
//         userId: 7,
//         id: 70,
//         title: "et deleniti unde",
//     },
//     {
//         userId: 8,
//         id: 71,
//         title: "et vel corporis",
//     },
//     {
//         userId: 8,
//         id: 72,
//         title: "unde exercitationem ut",
//     },
//     {
//         userId: 8,
//         id: 73,
//         title: "quos omnis officia",
//     },
//     {
//         userId: 8,
//         id: 74,
//         title: "quia est eius vitae dolor",
//     },
//     {
//         userId: 8,
//         id: 75,
//         title: "aut quia expedita non",
//     },
//     {
//         userId: 8,
//         id: 76,
//         title: "dolorem magnam facere itaque ut reprehenderit tenetur corrupti",
//     },
//     {
//         userId: 8,
//         id: 77,
//         title: "cupiditate sapiente maiores iusto ducimus cum excepturi veritatis quia",
//     },
//     {
//         userId: 8,
//         id: 78,
//         title: "est minima eius possimus ea ratione velit et",
//     },
//     {
//         userId: 8,
//         id: 79,
//         title: "ipsa quae voluptas natus ut suscipit soluta quia quidem",
//     },
//     {
//         userId: 8,
//         id: 80,
//         title: "id nihil reprehenderit",
//     },
//     {
//         userId: 9,
//         id: 81,
//         title: "quibusdam sapiente et",
//     },
//     {
//         userId: 9,
//         id: 82,
//         title: "recusandae consequatur vel amet unde",
//     },
//     {
//         userId: 9,
//         id: 83,
//         title: "aperiam odio fugiat",
//     },
//     {
//         userId: 9,
//         id: 84,
//         title: "est et at eos expedita",
//     },
//     {
//         userId: 9,
//         id: 85,
//         title: "qui voluptatem consequatur aut ab quis temporibus praesentium",
//     },
//     {
//         userId: 9,
//         id: 86,
//         title: "eligendi mollitia alias aspernatur vel ut iusto",
//     },
//     {
//         userId: 9,
//         id: 87,
//         title: "aut aut architecto",
//     },
//     {
//         userId: 9,
//         id: 88,
//         title: "quas perspiciatis optio",
//     },
//     {
//         userId: 9,
//         id: 89,
//         title: "sit optio id voluptatem est eum et",
//     },
//     {
//         userId: 9,
//         id: 90,
//         title: "est vel dignissimos",
//     },
//     {
//         userId: 10,
//         id: 91,
//         title: "repellendus praesentium debitis officiis",
//     },
//     {
//         userId: 10,
//         id: 92,
//         title: "incidunt et et eligendi assumenda soluta quia recusandae",
//     },
//     {
//         userId: 10,
//         id: 93,
//         title: "nisi qui dolores perspiciatis",
//     },
//     {
//         userId: 10,
//         id: 94,
//         title: "quisquam a dolores et earum vitae",
//     },
//     {
//         userId: 10,
//         id: 95,
//         title: "consectetur vel rerum qui aperiam modi eos aspernatur ipsa",
//     },
//     {
//         userId: 10,
//         id: 96,
//         title: "unde et ut molestiae est molestias voluptatem sint",
//     },
//     {
//         userId: 10,
//         id: 97,
//         title: "est quod aut",
//     },
//     {
//         userId: 10,
//         id: 98,
//         title: "omnis quia possimus nesciunt deleniti assumenda sed autem",
//     },
//     {
//         userId: 10,
//         id: 99,
//         title: "consectetur ut id impedit dolores sit ad ex aut",
//     },
//     {
//         userId: 10,
//         id: 100,
//         title: "enim repellat iste",
//     },
// ];
// const store = new Store(docs);

// // store.filter("title", "id");
// // store.filter("title_lte", "id");
// // store.filter("title_gte", "id");
// // store.filter("title_lt", "id");
// // store.filter("title_gt", "id");
// // store.filter("title_eq", "id");
// // store.filter("title_ne", "id");
// // store.filter("title_like", "id");
// // store.filter();

// // store.paginate(1, 10);
// // store.paginate();

// // store.sort("userId", "desc");
// // store.sort("userId", "asc");
// // store.sort("id", "desc");
// // store.sort("id", "asc");
// // store.sort("title", "desc");
// // store.sort("title", "asc");
// // store.sort("title");
// // store.sort();

// // store.slice(0, 10);
// // store.slice();

// // store.search("nihil");
// // store.search();

// console.log(store.getAll());

