import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";
const localization = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});
/**
 * Retrieves the current locale.
 * @returns {string} The current locale.
 */
function getLocale() {
    return localization.getLocale(arguments);
}
/**
 * Sets the specified locale.
 * @param {string} [locale] - The locale to set.
 * @returns {Promise<void>} A promise that resolves when the locale is set.
 */
function setLocale(locale) {
    return localization.setLocale(locale);
}

export { getLocale, setLocale };
