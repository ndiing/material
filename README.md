# Material Design Framework

[![Versi NPM](https://img.shields.io/npm/v/%40ndiinginc%2Fmaterial)](https://www.npmjs.com/package/@ndiinginc/material)
[![Unduhan NPM](https://img.shields.io/npm/dm/%40ndiinginc%2Fmaterial)](https://www.npmjs.com/package/@ndiinginc/material)
[![Ukuran Terkompresi NPM](https://img.shields.io/npm/unpacked-size/%40ndiinginc%2Fmaterial)](https://www.npmjs.com/package/@ndiinginc/material)
[![Lisensi GitHub](https://img.shields.io/github/license/ndiing/material)](https://github.com/ndiing/material/blob/main/LICENSE)
[![Demo](https://img.shields.io/badge/Demo-View%20Demo-brightgreen)](https://ndiing.github.io/material/demo)
[![Dokumentasi](https://img.shields.io/badge/Docs-View%20Docs-blue)](https://ndiing.github.io/material/docs)

**Material Design Framework** adalah kerangka kerja ringan yang memudahkan pembuatan komponen Material Design menggunakan Node.js, Webpack, dan Lit.

## Instalasi

### Dengan NPM

Instal paket dengan perintah berikut:

<pre>
npm install @ndiinginc/material
</pre>

## Mengimpor Komponen

### Semua Komponen

Untuk mengimpor seluruh kerangka kerja:

<pre>
import "@ndiinginc/material/dist/material/material.css";
import "@ndiinginc/material/dist/material/material.js";
</pre>

### Komponen Tertentu

Jika Anda hanya memerlukan komponen tertentu:

<pre>
// CSS
import "@ndiinginc/material/dist/button/button.css";
import "@ndiinginc/material/dist/icon-button/icon-button.css";

// JavaScript
import "@ndiinginc/material/dist/button/button.js";
import "@ndiinginc/material/dist/icon-button/icon-button.js";
</pre>

## Integrasi CDN

### Semua Komponen

Untuk menggunakan seluruh kerangka kerja melalui CDN:

<pre>
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.css"&gt;
&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.js"&gt;&lt;/script&gt;
</pre>

### Komponen Tertentu

Untuk mengimpor komponen spesifik:

<pre>
&lt;!-- CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.css"&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.css"&gt;

&lt;!-- JavaScript --&gt;
&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.js"&gt;&lt;/script&gt;
&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.js"&gt;&lt;/script&gt;
</pre>

## Kontribusi

Kami menyambut kontribusi dari komunitas! Ikuti langkah-langkah berikut untuk berkontribusi:

1. Fork repositori ini.
2. Clone fork Anda:

    <pre>
    git clone https://github.com/ndiing/material.git
    </pre>

3. Buat cabang baru untuk fitur atau perbaikan:

    <pre>
    git checkout -b nama-fitur
    </pre>

4. Buat perubahan, lalu komit dengan pesan deskriptif:

    <pre>
    git commit -m "Deskripsi perubahan"
    </pre>

5. Dorong perubahan Anda ke fork:

    <pre>
    git push origin nama-fitur
    </pre>

6. Buat pull request di repositori utama.

## Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE).

## Kontak

Untuk pertanyaan atau dukungan, silakan hubungi [ndiing.inc@gmail.com](mailto:ndiing.inc@gmail.com).
