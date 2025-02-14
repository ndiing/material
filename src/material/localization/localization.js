import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

/**
 * @namespace Localization
 */

/**
 * Konfigurasi sistem lokalisasi menggunakan Lit Localize.
 * @memberof Localization
 */
const localization = configureLocalization({
    sourceLocale,
    targetLocales,
    /**
     * Memuat file lokal yang sesuai dengan bahasa yang dipilih.
     *
     * @private
     * @memberof Localization
     * @param {string} locale - Kode bahasa yang akan dimuat (misal: "en", "id").
     * @returns {Promise<Module>} - Modul yang berisi terjemahan bahasa yang dimuat.
     */
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

/**
 * Mendapatkan locale (bahasa) saat ini.
 *
 * @memberof Localization
 * @returns {string} - Kode bahasa saat ini (misal: "en", "id").
 */
export const getLocale = localization.getLocale;

/**
 * Mengatur locale (bahasa) aplikasi.
 *
 * @memberof Localization
 * @param {string} locale - Kode bahasa yang akan digunakan (misal: "en", "id").
 * @returns {Promise<void>} - Promise yang selesai setelah bahasa diubah.
 */
export const setLocale = localization.setLocale;
