/**
 * Memeriksa apakah nilai yang diberikan tidak undefined atau null.
 * @param {*} value - Nilai yang akan diperiksa.
 * @returns {boolean} Mengembalikan true jika nilai tidak undefined atau null, jika tidak false.
 */
export function notNull(value) {
    return value !== undefined && value !== null;
}

/**
 * Memeriksa apakah nilai yang diberikan tidak kosong.
 * @param {*} value - Nilai yang akan diperiksa.
 * @returns {boolean} Mengembalikan true jika nilai tidak null, undefined, atau string kosong, jika tidak false.
 */
export function notEmpty(value) {
    return notNull(value) && value !== "";
}

/**
 * Mencoba untuk mengonversi nilai menjadi integer.
 * @param {*} value - Nilai yang akan di-parse.
 * @returns {?number} Mengembalikan integer yang di-parse jika berhasil, jika tidak null.
 */
export function parseNumber(value) {
    value = parseInt(value);
    return isNaN(value) ? null : value;
}

/**
 * Mengonversi string menjadi PascalCase.
 * @param {string} string - String yang akan dikonversi.
 * @returns {string} Mengembalikan string yang dikonversi menjadi PascalCase.
 */
export function toPascalCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2) => $2.toUpperCase()).replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Mengonversi string menjadi camelCase.
 * @param {string} string - String yang akan dikonversi.
 * @returns {string} Mengembalikan string yang dikonversi menjadi camelCase.
 */
export function toCamelCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $i) => ($i === 0 ? $2.toLowerCase() : $2.toUpperCase())).replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Mengonversi string menjadi snake_case.
 * @param {string} string - String yang akan dikonversi.
 * @returns {string} Mengembalikan string yang dikonversi menjadi snake_case.
 */
export function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "_" + $2)
        .replace(/[^a-zA-Z0-9]/g, () => "_")
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}

/**
 * Mengonversi string menjadi kebab-case.
 * @param {string} string - String yang akan dikonversi.
 * @returns {string} Mengembalikan string yang dikonversi menjadi kebab-case.
 */
export function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "-" + $2)
        .replace(/[^a-zA-Z0-9]/g, () => "-")
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}

/**
 * Mengonversi string menjadi Title Case.
 * @param {string} string - String yang akan dikonversi.
 * @returns {string} Mengembalikan string yang dikonversi menjadi Title Case.
 */
export function toTitleCase(string) {
    return string
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2) => $2.toUpperCase())
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
