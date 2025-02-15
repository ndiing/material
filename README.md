# Material Framework

Material adalah sebuah framework yang membantu Anda membuat tampilan website yang modern, responsif, dan mudah digunakan dengan mengikuti standar Material Design.

---

## Dokumentasi & Demo

- **Panduan Lengkap**: [Material Docs](https://ndiing.github.io/material/dist/#/docs/badge)
- **Contoh Aplikasi**: [Material Demo](https://ndiing.github.io/material/dist/#/demo)

---

## Kenapa Menggunakan Material?

- **Tampilan Profesional**: Mengikuti standar Material Design.
- **Responsif**: Cocok untuk berbagai ukuran layar.
- **Navigasi Mudah**: Sistem routing bawaan untuk berpindah halaman.
- **Mudah Dikustomisasi**: Bisa disesuaikan sesuai kebutuhan.

---

## Cara Memulai

1. **Unduh & Instalasi**

   ```bash
   git clone https://github.com/ndiing/material.git
   cd material
   npm install
   ```

2. **Tambahkan ke Proyek**

   Tambahkan file berikut ke proyek Anda:

   ```js
   import "./material/material.scss";
   import "./material/material.js";
   ```

---

## Cara Mengatur Halaman

Material memiliki sistem routing untuk berpindah halaman tanpa perlu refresh.

```js
import { Router } from "../material/router/router";
import DemoMain from "./main/main.js";
import DemoError from "./error/error.js";

Router.use([
    { path: "", component: DemoMain },
    { path: "*", component: DemoError },
]);
```

---

## Contoh Pembuatan Halaman

Berikut adalah contoh bagaimana Anda bisa membuat halaman utama menggunakan Material.

```js
import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoMain extends MdComponent {
    constructor() {
        super();
        this.items = [
            { label: "Halaman 1", routerLink: "/page1" },
            { label: "Halaman 2", routerLink: "/page2" },
        ];
    }

    render() {
        return html`
            <md-top-app-bar label="Beranda" open></md-top-app-bar>
            <md-navigation-drawer .items="${this.items}" open></md-navigation-drawer>
            <md-sheet region="center"><md-outlet></md-outlet></md-sheet>
        `;
    }
}
customElements.define("demo-main", DemoMain);
export default document.createElement("demo-main");
```

---

## Struktur Dasar HTML

Gunakan struktur berikut sebagai dasar untuk aplikasi Anda.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aplikasi Material</title>
</head>
<body>
    <md-outlet></md-outlet>
</body>
</html>
```

---

## Kesimpulan

Material adalah solusi yang mudah digunakan untuk membangun antarmuka web yang modern dan responsif. Dengan fitur routing bawaan dan komponen yang fleksibel, Anda bisa membuat aplikasi dengan cepat.

Untuk informasi lebih lanjut, kunjungi dokumentasi resminya.

