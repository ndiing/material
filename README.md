# Material Design Framework

![Versi NPM](https://img.shields.io/npm/v/%40ndiinginc%2Fmaterial)
![Unduhan NPM](https://img.shields.io/npm/dm/%40ndiinginc%2Fmaterial)
![Ukuran Terkompresi NPM](https://img.shields.io/npm/unpacked-size/%40ndiinginc%2Fmaterial)
![Lisensi GitHub](https://img.shields.io/github/license/ndiing/material)

Sebuah kerangka kerja ringan untuk membuat komponen Material Design menggunakan Node.js, Webpack, dan Lit.

## Instalasi

### Menggunakan NPM

Untuk mulai menggunakan kerangka kerja Material Design, instal paket `@ndiinginc/material` melalui npm:

<pre>
npm install @ndiinginc/material
</pre>

## Mengimpor Komponen

### Mengimpor Semua Komponen

Untuk integrasi penuh, impor seluruh kerangka kerja ke dalam proyek Anda:

<pre>
import "@ndiinginc/material/dist/material/material.css";
import "@ndiinginc/material/dist/material/material.js";
</pre>

### Impor Selektif

Sebagai alternatif, impor komponen spesifik sesuai kebutuhan:

<pre>
// CSS
import "@ndiinginc/material/dist/button/button.css";
import "@ndiinginc/material/dist/icon-button/icon-button.css";

// JavaScript
import "@ndiinginc/material/dist/button/button.js";
import "@ndiinginc/material/dist/icon-button/icon-button.js";
</pre>

## Integrasi CDN

### Mengimpor Semua Komponen

Untuk penerapan menggunakan Content Delivery Network (CDN), tautkan ke file CSS dan JavaScript yang sudah dikompilasi:

<pre>
&lt;link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.css"
/&gt;
&lt;script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.js"
/&gt;
</pre>

### Impor Selektif

Untuk mengoptimalkan pemuatan, sertakan file CSS dan JavaScript secara terpisah untuk setiap komponen:

<pre>
&lt;!-- CSS --&gt;
&lt;link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.css"
/&gt;
&lt;link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.css"
/&gt;

&lt;!-- JavaScript --&gt;
&lt;script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.js"
/&gt;
&lt;script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.js"
/&gt;
</pre>

## Kontribusi

Kami menerima kontribusi untuk kerangka kerja Material Design! Untuk memulai, ikuti langkah-langkah berikut:

1. Fork repositori.
2. Clone fork Anda:

<pre>
git clone https://github.com/ndiing/material.git
</pre>

3. Buat cabang baru untuk fitur atau perbaikan bug Anda:

<pre>
git checkout -b nama-fitur
</pre>

4. Buat perubahan Anda dan komit dengan pesan deskriptif:

<pre>
git commit -m "Deskripsi perubahan"
</pre>

5. Dorong perubahan Anda ke fork Anda:

<pre>
git push origin nama-fitur
</pre>

6. Buat pull request di repositori utama.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file [LICENSE](LICENSE) untuk lebih jelasnya.

## Kontak

Untuk pertanyaan atau dukungan, silakan hubungi [ndiing.inc@gmail.com](mailto:ndiing.inc@gmail.com).
