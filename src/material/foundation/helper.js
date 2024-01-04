/**
 * Checks if the given value is not undefined or null.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is not undefined or null, otherwise false.
 */
export function notNull(value) {
    return value !== undefined && value !== null;
}

/**
 * Checks if the given value is not empty.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is not null, undefined, or an empty string, otherwise false.
 */
export function notEmpty(value) {
    return notNull(value) && value !== "";
}

/**
 * Attempts to parse the value into an integer.
 * @param {*} value - The value to parse.
 * @returns {?number} Returns the parsed integer if successful, otherwise null.
 */
export function parseNumber(value) {
    value = parseInt(value);
    return isNaN(value) ? null : value;
}

/**
 * Converts a string to PascalCase.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to PascalCase.
 */
export function toPascalCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2) => $2.toUpperCase()).replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to camelCase.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to camelCase.
 */
export function toCamelCase(string) {
    return string.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $i) => ($i === 0 ? $2.toLowerCase() : $2.toUpperCase())).replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to snake_case.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to snake_case.
 */
export function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "_" + $2)
        .replace(/[^a-zA-Z0-9]/g, () => "_")
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}

/**
 * Converts a string to kebab-case.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to kebab-case.
 */
export function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + "-" + $2)
        .replace(/[^a-zA-Z0-9]/g, () => "-")
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
        .toLowerCase();
}

/**
 * Converts a string to Title Case.
 * @param {string} string - The string to convert.
 * @returns {string} Returns the string converted to Title Case.
 */
export function toTitleCase(string) {
    return string
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2) => $2.toUpperCase())
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => $1 + " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
