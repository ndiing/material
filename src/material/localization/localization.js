import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

/**
 * @typedef {Function} ConfigureLocalizationConfigLocale
 * @param {string} locale
 */

/**
 * @typedef {Object} ConfigureLocalizationConfig
 * @property {string} sourceLocale
 * @property {string[]} targetLocales
 * @property {ConfigureLocalizationConfigLocale} loadLocale
 */

/**
 * @typedef {Object} ConfigureLocalizationReturn
 * @property {Function} getLocale
 * @property {Function} setLocale
 */

/**
 * @namespace Localization
 */

const localization = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

/**
 * Mendapatkan locale saat ini.
 * @function getLocale
 * @memberof Localization
 * @returns {string}
 */
export const getLocale = localization.getLocale;

/**
 * Mengatur locale baru.
 * @function setLocale
 * @memberof Localization
 * @param {string} newLocale - Locale baru yang akan diatur.
 */
export const setLocale = localization.setLocale;