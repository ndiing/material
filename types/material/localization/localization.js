"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLocale = exports.getLocale = void 0;
var localize_1 = require("@lit/localize");
var locale_codes_js_1 = require("../../generated/locale-codes.js");
var localization = (0, localize_1.configureLocalization)({
    sourceLocale: locale_codes_js_1.sourceLocale,
    targetLocales: locale_codes_js_1.targetLocales,
    loadLocale: function (locale) {
        return Promise.resolve("".concat("../../generated/locales/".concat(locale, ".js"))).then(function (s) {
            return require(s);
        });
    },
});
exports.getLocale = localization.getLocale;
exports.setLocale = localization.setLocale;
