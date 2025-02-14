import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

/**
 * Konfigurasi sistem lokalisasi menggunakan Lit Localize.
 */
const localization = configureLocalization({
    sourceLocale,
    targetLocales,
    /**
     * Memuat file lokal yang sesuai dengan bahasa yang dipilih.
     *
     * @param {string} locale - Kode bahasa yang akan dimuat (misal: "en", "id").
     * @returns {Promise<Module>} - Modul yang berisi terjemahan bahasa yang dimuat.
     */
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

/**
 * Mendapatkan locale (bahasa) saat ini.
 *
 * @returns {string} - Kode bahasa saat ini (misal: "en", "id").
 */
export const getLocale = localization.getLocale;

/**
 * Mengatur locale (bahasa) aplikasi.
 *
 * @param {string} locale - Kode bahasa yang akan digunakan (misal: "en", "id").
 * @returns {Promise<void>} - Promise yang selesai setelah bahasa diubah.
 */
export const setLocale = localization.setLocale;
