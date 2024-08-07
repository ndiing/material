/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toPascalCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toCamelCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => ($0 === 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toUpperFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toPascalSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toCamelSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => "_" + ($0 === 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toScreamingSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toTrainCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toCobolCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} string - {{desc}}
 */
function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * {{desc}}
 * @param {Any} date - {{desc}}
 */
function stringifyDatetimeLocal(date) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/**
 * {{desc}}
 * @param {Any} date - {{desc}}
 */
function stringifyDate(date) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/**
 * {{desc}}
 * @param {Any} date - {{desc}}
 */
function stringifyYear(date) {
    return `${date.getFullYear()}`;
}

/**
 * {{desc}}
 * @param {Any} date - {{desc}}
 */
function stringifyMonth(date) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

/**
 * {{desc}}
 * @param {Any} date - {{desc}}
 */
function stringifyTime(date) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/**
 * {{desc}}
 * @param {Any} date - {{desc}}
 */
function stringifyWeek(date) {
    let year = date.getFullYear();
    let week = date.getWeek();
    return `${year}-W${week < 10 ? "0" + week : week}`;
}

/**
 * {{desc}}
 * @param {Any} datetimeLocal - {{desc}}
 */
function parseDatetimeLocal(datetimeLocal) {
    return new Date(datetimeLocal);
}

/**
 * {{desc}}
 * @param {Any} dateString - {{desc}}
 */
function parseDate(dateString) {
    var [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
}

/**
 * {{desc}}
 * @param {Any} yearString - {{desc}}
 */
function parseYear(yearString) {
    return new Date(yearString);
}

/**
 * {{desc}}
 * @param {Any} monthString - {{desc}}
 */
function parseMonth(monthString) {
    var [year, month] = monthString.split("-").map(Number);
    return new Date(year, month - 1);
}

/**
 * {{desc}}
 * @param {Any} timeString - {{desc}}
 */
function parseTime(timeString) {
    var [hours, minutes] = timeString.split(":").map(Number);
    var date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

/**
 * {{desc}}
 * @param {Any} weekStr - {{desc}}
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

/**
 * {{desc}}
 * @param {Any} hex - {{desc}}
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
 * {{desc}}
 * @param {Any} hex - {{desc}}
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
 * {{desc}}
 * @param {Any} h - {{desc}}
 * @param {Any} s - {{desc}}
 * @param {Any} l - {{desc}}
 * @param {Any} a = 1 - {{desc}}
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
 * {{desc}}
 * @param {Any} r - {{desc}}
 * @param {Any} g - {{desc}}
 * @param {Any} b - {{desc}}
 * @param {Any} a = 1 - {{desc}}
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
 * {{desc}}
 * @param {Any} h - {{desc}}
 * @param {Any} s - {{desc}}
 * @param {Any} l - {{desc}}
 * @param {Any} a = 1 - {{desc}}
 */
function hslaToHex(h, s, l, a = 1) {
    const { red, green, blue } = hslaToRgba(h, s, l, a);
    return rgbaToHex(red, green, blue, a);
}

/**
 * {{desc}}
 * @param {Any} r - {{desc}}
 * @param {Any} g - {{desc}}
 * @param {Any} b - {{desc}}
 * @param {Any} a = 1 - {{desc}}
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

/**
 * {{desc}}
 * @param {Any} color - {{desc}}
 */
function isValidHexColor(color) {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(color);
}

/**
 * {{desc}}
 * @param {Any} obj - {{desc}}
 */
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}

/**
 * {{desc}}
 * @param {Any} str - {{desc}}
 */
function isArrayString(str) {
    const arrayRegex = /^\s*\[.*\]\s*$/;
    return arrayRegex.test(str);
}

/**
 * {{desc}}
 * @param {Any} value - {{desc}}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}

/**
 * {{desc}}
 * @param {Any} min - {{desc}}
 * @param {Any} max - {{desc}}
 * @param {Any} value - {{desc}}
 */
function calcPercentage(min, max, value) {
    let percentage = ((value - min) / (max - min)) * 100;
    return percentage;
}

/**
 * {{desc}}
 * @param {Any} min - {{desc}}
 * @param {Any} max - {{desc}}
 * @param {Any} value - {{desc}}
 */
function calcDecimal(min, max, value) {
    let decimal = (value - min) / (max - min);
    return decimal;
}

/**
 * {{desc}}
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
Date.prototype.setWeek = function (week) {
    if (typeof week !== "number" || week < 1 || week > 53) {
        throw new Error("Invalid week number. Week number should be between 1 and 53.");
    }
    let jan4 = new Date(this.getFullYear(), 0, 4);
    let jan4Day = (jan4.getDay() + 6) % 7;
    let startOfWeek1 = new Date(jan4.getFullYear(), 0, 4 - jan4Day);
    this.setTime(startOfWeek1.getTime() + (week - 1) * 7 * 86400000);
    return this;
};
Date.prototype.getWeek = function () {
    let tempDate = new Date(this.getTime());
    tempDate.setHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));
    let week1 = new Date(tempDate.getFullYear(), 0, 4);
    return 1 + Math.round(((tempDate - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

/**
 * {{desc}}
 * @param {Any} element - {{desc}}
 */
function getBoundary(element) {
    let boundary = element.parentElement;
    let scrollableElement;
    let relativeElement;
    while (boundary) {
        const style = window.getComputedStyle(boundary);
        const auto = style.getPropertyValue("overflow") === "auto";
        const relative = style.getPropertyValue("position") === "relative";
        if (relative) {
            relativeElement = boundary;
        }
        if (auto) {
            scrollableElement = boundary;
        }
        if (scrollableElement && relativeElement) {
            break;
        }
        boundary = boundary.parentElement;
    }
    return boundary || scrollableElement || document.body;
}
export { toPascalCase, toCamelCase, toSnakeCase, toKebabCase, toFlatCase, toUpperFlatCase, toPascalSnakeCase, toCamelSnakeCase, toScreamingSnakeCase, toTrainCase, toCobolCase, toTitleCase, stringifyDatetimeLocal, stringifyDate, stringifyYear, stringifyMonth, stringifyTime, stringifyWeek, parseDatetimeLocal, parseDate, parseYear, parseMonth, parseTime, parseWeek, hexToRgba, hexToHsla, rgbaToHex, rgbaToHsla, hslaToRgba, hslaToHex, calcPercentage, calcDecimal, isValidHexColor, isObject, isArrayString, isDefined, createQueue, getBoundary };
