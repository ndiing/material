import { configureLocalization } from "@lit/localize";
import { sourceLocale as sourceLocale_, targetLocales as targetLocales_ } from "../../generated/locale-codes.js";
const sourceLocale = sourceLocale_;
const targetLocales = targetLocales_;
const { getLocale: getLocale_, setLocale: setLocale_ } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});
const getLocale = getLocale_;
const setLocale = setLocale_;
export { sourceLocale, targetLocales, getLocale, setLocale };
