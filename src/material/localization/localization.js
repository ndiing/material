import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";
const localization = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

/**
 */
function getLocale() {
    return localization.getLocale(arguments);
}

/**
 * @param {Any} [locale]
 */
function setLocale(locale) {
    return localization.setLocale(locale);
}
export { getLocale, setLocale };
