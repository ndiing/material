import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

/**
 * @typedef {Function} ConfigureLocalizationConfigLocale
 * @param {String} locale
 */

/**
 * @typedef {Object} ConfigureLocalizationConfig
 * @property {Array} sourceLocale
 * @property {Array} targetLocales
 * @property {ConfigureLocalizationConfigLocale} loadLocale
 */

/**
 * @typedef {Object} ConfigureLocalizationReturn
 * @property {Function} getLocale
 * @property {Function} setLocale
 */

/**
 * @function getLocale
*/

/**
 * @function setLocale
 * @param {String} newLocale
*/

/**
 * @private
 * @function configureLocalization
 * @param {ConfigureLocalizationConfig} config
 * @returns {ConfigureLocalizationReturn}
 */
export const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});
