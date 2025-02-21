# Material

Material adalah **front-end framework** yang menggunakan **Webpack**, **Lit**, dan **Material Design 3** ([M3](https://m3.material.io/)). Framework ini dirancang untuk membangun antarmuka web yang modern, ringan, dan efisien.

## Inisialisasi Proyek

Gunakan perintah berikut untuk membuat proyek Webpack baru:

```sh
npx create-new-webpack-app [generation-path] [options]
```

Gantilah `[generation-path]` dengan lokasi proyek yang diinginkan dan `[options]` dengan opsi tambahan jika diperlukan.

## Instalasi

Setelah proyek dibuat, instal dependensi berikut:

```sh
npm install lit
```

Kemudian, instal paket `@ndiing/material` dengan versi yang sesuai:

```sh
npm install @ndiing/material@0.71.11
```

## Struktur Proyek

### File HTML Utama (`./src/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="material" />
        <title>Material</title>
        <base href="./" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans+Mono:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
    </head>
    <body>
        <md-outlet></md-outlet>
    </body>
</html>
```

### Import Komponen dan SCSS (`./src/index.js`)

```js
import "@ndiing/material/src/material/material.scss";
import "@ndiing/material/src/material/material.js";
```

### Konfigurasi Routing (`./src/index.js`)

```js
import { Router } from "@materia/ndiing/src/material/router/router";

Router.use([
    {
        path: "",
        load: () => import("./main/main.js").then((module) => module.default),
    },
    {
        path: "*",
        load: () => import("./error/error.js").then((module) => module.default),
    },
]);
```

## Tautan Penting

- **Material Design 3**: [M3](https://m3.material.io/)
- **Repository GitHub**: [Material Repo](https://github.com/ndiing/material)
- **Paket GitHub**: [Material Package](https://github.com/ndiing?tab=packages&repo_name=material)
- **Demo Aplikasi**: [Lihat Demo](https://ndiing.github.io/material/dist/#/demo)
- **Dokumentasi API**: [Baca Dokumentasi](https://ndiing.github.io/material/dist/#/docs)

## Lisensi

Proyek ini dirilis di bawah lisensi **MIT**. Silakan baca [LICENSE](LICENSE) untuk informasi lebih lanjut.

