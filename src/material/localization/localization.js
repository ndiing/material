import { configureLocalization } from "@lit/localize";
import { sourceLocale as sourceLocale_, targetLocales as targetLocales_ } from "../../generated/locale-codes.js";

/**
 * The locale code that templates in this source code are written in.
 * @type {string}
 */
const sourceLocale = sourceLocale_;

/**
 * The other locale codes that this application is localized into. Sorted
 * lexicographically.
 * @type {string[]}
 */
const targetLocales = targetLocales_;

const { getLocale: getLocale_, setLocale: setLocale_ } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

/**
 * Return the active locale code.
 * @returns {string} The active locale code.
 */
const getLocale = getLocale_;

/**
 * Set the active locale code.
 * @param {string} locale - The locale code to set as active.
 * @returns {Promise<void>} A promise that resolves when the locale has been set.
 */
const setLocale = setLocale_;

export { sourceLocale, targetLocales, getLocale, setLocale };
