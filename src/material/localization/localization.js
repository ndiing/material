import { configureLocalization } from "@lit/localize";
import { sourceLocale as sourceLocaleInternal, targetLocales as targetLocalesInternal } from "../../generated/locale-codes.js";

/**
 * The locale code that templates in this source code are written in.
 * @type {string}
 */
const sourceLocale = sourceLocaleInternal;

/**
 * The other locale codes that this application is localized into. Sorted
 * lexicographically.
 * @type {string[]}
 */
const targetLocales = targetLocalesInternal;

const { getLocale: getLocaleInternal, setLocale: setLocaleInternal } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

/**
 * Return the active locale code.
 * @returns {string} The active locale code.
 */
const getLocale = getLocaleInternal;

/**
 * Set the active locale code.
 * @param {string} locale - The locale code to set as active.
 * @returns {Promise<void>} A promise that resolves when the locale has been set.
 */
const setLocale = setLocaleInternal;

export { 
    sourceLocale, 
    targetLocales, 
    getLocale, 
    setLocale 
};
