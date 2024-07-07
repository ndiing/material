/* Casing Conversion */

/**
 * Converts a string to PascalCase.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to PascalCase.
 */
function toPascalCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to camelCase.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to camelCase.
 */
function toCamelCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => ($0 === 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to snake_case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to snake_case.
 */
function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to kebab-case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to kebab-case.
 */
function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to flatcase.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to flatcase.
 */
function toFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to UPPERFLATCASE.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to UPPERFLATCASE.
 */
function toUpperFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Pascal_Snake_Case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Pascal_Snake_Case.
 */
function toPascalSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to camel_Snake_Case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to camel_Snake_Case.
 */
function toCamelSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => "_" + ($0 === 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to SCREAMING_SNAKE_CASE.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to SCREAMING_SNAKE_CASE.
 */
function toScreamingSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Train-Case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Train-Case.
 */
function toTrainCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to COBOL-CASE.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to COBOL-CASE.
 */
function toCobolCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Title Case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Title Case.
 */
function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/* Stringify Date */

/**
 * Converts a date object to a string formatted as YYYY-MM-DDTHH:MM.
 * @param {Date} date - The date object to convert.
 * @returns {string} The date formatted as YYYY-MM-DDTHH:MM.
 */
function stringifyDatetimeLocal(date) {
    const pad = (n) => String(n).padStart(2, "0");

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/**
 * Converts a date object to a string formatted as YYYY-MM-DD.
 * @param {Date} date - The date object to convert.
 * @returns {string} The date formatted as YYYY-MM-DD.
 */
function stringifyDate(date) {
    const pad = (n) => String(n).padStart(2, "0");

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/**
 * Converts a date object to a string formatted as YYYY.
 * @param {Date} date - The date object to convert.
 * @returns {string} The date formatted as YYYY.
 */
function stringifyYear(date) {
    return `${date.getFullYear()}`;
}

/**
 * Converts a date object to a string formatted as YYYY-MM.
 * @param {Date} date - The date object to convert.
 * @returns {string} The date formatted as YYYY-MM.
 */
function stringifyMonth(date) {
    const pad = (n) => String(n).padStart(2, "0");

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

/**
 * Converts a date object to a string formatted as HH:MM.
 * @param {Date} date - The date object to convert.
 * @returns {string} The time formatted as HH:MM.
 */
function stringifyTime(date) {
    const pad = (n) => String(n).padStart(2, "0");

    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/**
 * Converts a date object to a string formatted as YYYY-WW.
 * @param {Date} date - The date object to convert.
 * @returns {string} The date formatted as YYYY-WW.
 */
function stringifyWeek(date) {
    let year = date.getFullYear();
    let week = date.getWeek();
    return `${year}-W${week < 10 ? "0" + week : week}`;
}

/* Parse Date */

/**
 * Parses a datetime-local string into a Date object.
 * @param {string} datetimeLocal - The datetime-local string to parse.
 * @returns {Date} The parsed Date object.
 */
function parseDatetimeLocal(datetimeLocal) {
    return new Date(datetimeLocal);
}

/**
 * Parses a date string (YYYY-MM-DD) into a Date object.
 * @param {string} dateString - The date string (YYYY-MM-DD) to parse.
 * @returns {Date} The parsed Date object.
 */
function parseDate(dateString) {
    var [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
}

/**
 * Parses a year string (YYYY) into a Date object.
 * @param {string} yearString - The year string (YYYY) to parse.
 * @returns {Date} The parsed Date object.
 */
function parseYear(yearString) {
    return new Date(yearString);
}

/**
 * Parses a month string (YYYY-MM) into a Date object.
 * @param {string} monthString - The month string (YYYY-MM) to parse.
 * @returns {Date} The parsed Date object.
 */
function parseMonth(monthString) {
    var [year, month] = monthString.split("-").map(Number);
    return new Date(year, month - 1);
}

/**
 * Parses a time string (HH:MM) into a Date object.
 * @param {string} timeString - The time string (HH:MM) to parse.
 * @returns {Date} The parsed Date object.
 */
function parseTime(timeString) {
    var [hours, minutes] = timeString.split(":").map(Number);
    var date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

/**
 * Parses a week string (YYYY-WW) into a Date object representing the start of that week.
 * @param {string} weekStr - The week string (YYYY-WW) to parse.
 * @returns {Date} The Date object representing the start of the parsed week.
 * @throws {Error} If the week string format is invalid or the year/week number is invalid.
 */
function parseWeek(weekStr) {
    let parts = weekStr.split("-W");

    if (parts.length !== 2 || parts[1].length !== 2) {
        throw new Error("Invalid week format. Should be in YYYY-WW format.");
    }
    let year = parseInt(parts[0], 10);
    let week = parseInt(parts[1], 10);

    if (isNaN(year) || isNaN(week) || week < 1 || week > 53) {
        throw new Error("Invalid year or week number.");
    }
    let jan4 = new Date(year, 0, 4);
    let startOfWeek = new Date(jan4.setDate(jan4.getDate() - ((jan4.getDay() + 6) % 7) + (week - 1) * 7));
    return startOfWeek;
}

/* Color Conversion */

/**
 * Converts a hexadecimal color representation to RGBA components.
 * @param {string} hex - The hexadecimal color string (e.g., "#RRGGBB" or "#RRGGBBAA").
 * @returns {{ red: number, green: number, blue: number, alpha: number }} The RGBA components.
 */
function hexToRgba(hex) {
    hex = hex.replace(/^#/, "");

    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
    const alpha = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;

    return { red, green, blue, alpha };
}

/**
 * Converts a hexadecimal color representation to HSLA components.
 * @param {string} hex - The hexadecimal color string (e.g., "#RRGGBB" or "#RRGGBBAA").
 * @returns {{ hue: number, saturation: number, lightness: number, red: number, green: number, blue: number, alpha: number }} The HSLA components.
 */
function hexToHsla(hex) {
    const rgba = hexToRgba(hex);
    const { red, green, blue, alpha } = rgba;

    const r = red / 255;
    const g = green / 255;
    const b = blue / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let hue,
        saturation,
        lightness = (max + min) / 2;

    if (max === min) {
        hue = 0;
        saturation = 0;
    } else {
        const delta = max - min;
        saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        switch (max) {
            case r:
                hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
                break;
            case g:
                hue = ((b - r) / delta + 2) * 60;
                break;
            case b:
                hue = ((r - g) / delta + 4) * 60;
                break;
        }
    }

    return { hue: Math.round(hue), saturation, lightness, red, green, blue, alpha };
}

/**
 * Converts HSLA components to RGBA components.
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-1).
 * @param {number} l - The lightness value (0-1).
 * @param {number} [a=1] - The alpha value (0-1).
 * @returns {{ red: number, green: number, blue: number, alpha: number }} The RGBA components.
 */
function hslaToRgba(h, s, l, a = 1) {
    h = ((h % 360) + 360) % 360;
    s = Math.max(0, Math.min(1, s));
    l = Math.max(0, Math.min(1, l));

    let chroma = (1 - Math.abs(2 * l - 1)) * s;
    let huePrime = h / 60;
    let x = chroma * (1 - Math.abs((huePrime % 2) - 1));
    let m = l - chroma / 2;

    let r = 0,
        g = 0,
        b = 0;

    if (huePrime >= 0 && huePrime < 1) {
        r = chroma;
        g = x;
    } else if (huePrime >= 1 && huePrime < 2) {
        r = x;
        g = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
        g = chroma;
        b = x;
    } else if (huePrime >= 3 && huePrime < 4) {
        g = x;
        b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
        r = x;
        b = chroma;
    } else {
        r = chroma;
        b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { red: r, green: g, blue: b, alpha: a };
}

/**
 * Converts RGBA components to a hexadecimal color representation.
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {number} [a=1] - The alpha value (0-1).
 * @returns {string} The hexadecimal color string (e.g., "#RRGGBB" or "#RRGGBBAA").
 */
function rgbaToHex(r, g, b, a = 1) {
    r = Math.round(Math.min(255, Math.max(0, r)));
    g = Math.round(Math.min(255, Math.max(0, g)));
    b = Math.round(Math.min(255, Math.max(0, b)));
    a = Math.min(1, Math.max(0, a));

    const alphaHex = Math.round(a * 255)
        .toString(16)
        .padStart(2, "0");
    const rgbHex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

    return a === 1 ? rgbHex : `${rgbHex}${alphaHex}`;
}

/**
 * Converts HSLA components to a hexadecimal color representation.
 * @param {number} h - The hue value (0-360).
 * @param {number} s - The saturation value (0-1).
 * @param {number} l - The lightness value (0-1).
 * @param {number} [a=1] - The alpha value (0-1).
 * @returns {string} The hexadecimal color string (e.g., "#RRGGBB" or "#RRGGBBAA").
 */
function hslaToHex(h, s, l, a = 1) {
    const { red, green, blue } = hslaToRgba(h, s, l, a);
    return rgbaToHex(red, green, blue, a);
}

/**
 * Converts RGBA components to HSLA components.
 * @param {number} r - The red value (0-255).
 * @param {number} g - The green value (0-255).
 * @param {number} b - The blue value (0-255).
 * @param {number} [a=1] - The alpha value (0-1).
 * @returns {{ hue: number, saturation: number, lightness: number, alpha: number }} The HSLA components.
 */
function rgbaToHsla(r, g, b, a = 1) {
    const nr = r / 255;
    const ng = g / 255;
    const nb = b / 255;

    const max = Math.max(nr, ng, nb);
    const min = Math.min(nr, ng, nb);

    let hue,
        saturation,
        lightness = (max + min) / 2;

    if (max === min) {
        hue = 0;
        saturation = 0;
    } else {
        const delta = max - min;
        saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        switch (max) {
            case nr:
                hue = ((ng - nb) / delta + (ng < nb ? 6 : 0)) * 60;
                break;
            case ng:
                hue = ((nb - nr) / delta + 2) * 60;
                break;
            case nb:
                hue = ((nr - ng) / delta + 4) * 60;
                break;
        }
    }

    return { hue: Math.round(hue), saturation, lightness, alpha: a };
}

/* Utility Functions */

/**
 * Checks if the provided color string is a valid hexadecimal color.
 * @param {String} color - The color string to validate.
 * @returns {Boolean} - True if the color string is a valid hexadecimal color, false otherwise.
 */
function isValidHexColor(color) {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(color);
}

/**
 * Checks if a value is an object.
 * @param {*} obj - The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}

/**
 * Checks if a string represents an array in a stringified format.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string represents an array, false otherwise.
 */
function isArrayString(str) {
    const arrayRegex = /^\s*\[.*\]\s*$/;
    return arrayRegex.test(str);
}

/**
 * Checks if a value is defined and not null.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is defined and not null, otherwise false.
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}

/**
 * Calculates the percentage of a value relative to a range defined by min and max values.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @param {number} value - The value to calculate the percentage for.
 * @returns {number} The percentage value (between 0 and 100).
 */
function calcPercentage(min, max, value) {
    let percentage = ((value - min) / (max - min)) * 100;
    return percentage;
}

/**
 * Calculates the decimal value representing the position of a value within a range defined by min and max values.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @param {number} value - The value to calculate the decimal for.
 * @returns {number} The decimal value (between 0 and 1).
 */
function calcDecimal(min, max, value) {
    let decimal = (value - min) / (max - min);
    return decimal;
}

/* Additional Functions */

/**
 * Creates a queue function that executes callbacks asynchronously in sequence.
 * @returns {Function} A function that when called with a callback function, queues the callback for execution.
 */
function createQueue() {
    let pending = Promise.resolve();

    const execute = async (callback = () => {}) => {
        let result;
        try {
            await pending;
        } finally {
            result = callback();
        }
        return result;
    };

    return (callback = () => {}) => (pending = execute(callback));
}

/* Date Prototype Extensions */

/**
 * Sets the week number of the date.
 * @param {number} week - The week number to set (between 1 and 53).
 * @returns {Date} The modified Date object with the week set.
 * @throws {Error} If the week number is not a number or is out of valid range (1 to 53).
 */
Date.prototype.setWeek = function (week) {
    if (typeof week !== "number" || week < 1 || week > 53) {
        throw new Error("Invalid week number. Week number should be between 1 and 53.");
    }
    let jan4 = new Date(this.getFullYear(), 0, 4); // January 4th
    let jan4Day = (jan4.getDay() + 6) % 7; // Day of the week for January 4th (0 = Monday, 6 = Sunday)
    let startOfWeek1 = new Date(jan4.getFullYear(), 0, 4 - jan4Day); // Start of the first week of the year

    this.setTime(startOfWeek1.getTime() + (week - 1) * 7 * 86400000); // Set time to the start of the target week
    return this;
};

/**
 * Gets the ISO week number of the date.
 * @returns {number} The ISO week number of the date (1 to 53).
 */
Date.prototype.getWeek = function () {
    let tempDate = new Date(this.getTime());
    tempDate.setHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));
    let week1 = new Date(tempDate.getFullYear(), 0, 4);
    return 1 + Math.round(((tempDate - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

export {
    // String Manipulation
    toPascalCase,
    toCamelCase,
    toSnakeCase,
    toKebabCase,
    toFlatCase,
    toUpperFlatCase,
    toPascalSnakeCase,
    toCamelSnakeCase,
    toScreamingSnakeCase,
    toTrainCase,
    toCobolCase,
    toTitleCase,

    // Date Manipulation
    stringifyDatetimeLocal,
    stringifyDate,
    stringifyYear,
    stringifyMonth,
    stringifyTime,
    stringifyWeek,
    parseDatetimeLocal,
    parseDate,
    parseYear,
    parseMonth,
    parseTime,
    parseWeek,

    // Color Manipulation
    hexToRgba,
    hexToHsla,
    rgbaToHex,
    rgbaToHsla,
    hslaToRgba,
    hslaToHex,

    // Utility Functions
    calcPercentage,
    calcDecimal,
    isValidHexColor,
    isObject,
    isArrayString,
    isDefined,

    // Additional Functions
    createQueue,

    // Date Prototype Extensions
};
