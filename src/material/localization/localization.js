import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

/**
 * @module Localization
 */

const localization = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

/**
 * @memberof module:Localization
 * @function getLocale
 */
export const getLocale = localization.getLocale;

/**
 * @memberof module:Localization
 * @function setLocale
 * @param {String} locale
 */
export const setLocale = localization.setLocale;
