# Material

Material adalah framework berbasis Material Design yang memudahkan pembuatan antarmuka pengguna yang modern dan responsif.

---

## Fitur Utama
- **Desain Modern**: Menggunakan prinsip Material Design untuk tampilan yang estetis.
- **Responsif**: Komponen otomatis menyesuaikan dengan berbagai ukuran layar.
- **Sistem Routing**: Mempermudah navigasi antar halaman dalam aplikasi.
- **Komponen Fleksibel**: Mudah digunakan dan dapat disesuaikan sesuai kebutuhan.

---

## Instalasi
Ikuti langkah-langkah berikut untuk mulai menggunakan Material:

```bash
# Clone repository
git clone https://github.com/ndiing/material.git
cd material

# Install dependensi
npm install
```

---

## Penggunaan Material
Tambahkan file berikut ke proyek Anda untuk memuat semua komponen Material:

```js
import "./material/material.scss";
import "./material/material.js";
```

---

## Routing Dasar
Material memiliki sistem routing bawaan untuk mengelola navigasi antar halaman. Berikut contoh penggunaannya:

```js
import { Router } from "../material/router/router";
import DemoMain from "./main/main.js";
import DemoError from "./error/error.js";

const routes = [
    { path: "", component: DemoMain },
    { path: "*", component: DemoError },
];
Router.use(routes);
```

---

## Membuat Halaman
Contoh pembuatan halaman dasar menggunakan komponen Material:

```js
import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoMain extends MdComponent {
    constructor() {
        super();
        this.items = [
            { label: "page1", routerLink: "/page1" },
            { label: "page2", routerLink: "/page2" },
            { label: "page3", routerLink: "/page3" },
            { label: "page4", routerLink: "/page4" },
        ];
    }

    render() {
        return html`
            <div class="md-layout__border">
                <md-top-app-bar
                    label="Main Page"
                    .leadingActions="${[{ icon: "menu" }]}"
                    open
                    @onTopAppBarIconButtonClick="${() => mainNavigationDrawer.toggle()}"
                ></md-top-app-bar>
                <md-navigation-drawer
                    id="mainNavigationDrawer"
                    type="tree"
                    .items="${this.items}"
                    open
                ></md-navigation-drawer>
                <md-sheet region="center">
                    <md-outlet></md-outlet>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-main", DemoMain);
export default document.createElement("demo-main");
```

---

## Struktur Dasar HTML
Berikut contoh file HTML dasar untuk menggunakan Material:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
        <title>Material App</title>
        <base href="./" />
    </head>
    <body>
        <md-outlet></md-outlet>
    </body>
</html>
```

---

## Dokumentasi & Demo
- **Dokumentasi**: [Material Docs](https://ndiing.github.io/material/docs/)
- **Demo**: [Material Demo](https://ndiing.github.io/material/dist/)

---

## Kesimpulan
Material adalah framework yang mempermudah pembuatan antarmuka berbasis Material Design. Dengan sistem routing bawaan dan komponen yang fleksibel, Anda bisa dengan mudah membangun aplikasi web yang modern dan responsif.

Selamat mencoba!

