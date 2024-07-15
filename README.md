# Material Design Framework

Sebuah framework ringan untuk mengimplementasikan komponen Material Design menggunakan Node.js, Webpack, dan Lit.

## Memulai

Untuk memulai, masukkan struktur HTML berikut ke dalam proyek Anda:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aplikasi Material Design Anda</title>
    <base href="./">
    <!-- Sertakan Google Fonts untuk Material Design -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
</head>
<body>
    <!-- Gunakan md-outlet untuk menginisialisasi komponen Material Design -->
    <md-outlet></md-outlet>
</body>
</html>
```

### Instalasi menggunakan NPM

#### Impor Semua Komponen

Untuk integrasi penuh, impor seluruh framework Material Design:

```js
import "./material/material.scss";
import "./material/material.js";
```

#### Impor Secara Selektif

Atau, impor komponen tertentu sesuai kebutuhan:

```js
import "./material/button.scss";
import "./material/icon-button.scss";

import "./material/button.js";
import "./material/icon-button.js";
// Tambahkan komponen lain di sini
```

## Integrasi menggunakan CDN

### Impor Semua Komponen

Untuk implementasi berbasis CDN, sertakan file CSS dan JavaScript yang sudah dikompilasi:

```html
<link rel="stylesheet" href="./dist/material/material.css">
<script type="module" src="./dist/material/material.js"></script>
```

### Impor Secara Selektif

Untuk optimasi pemuatan, masukkan CSS dan JavaScript secara terpisah untuk setiap komponen:

```html
<link rel="stylesheet" href="./dist/button/button.css">
<link rel="stylesheet" href="./dist/icon-button/icon-button.css">

<script type="module" src="./dist/button/button.js"></script>
<script type="module" src="./dist/icon-button/icon-button.js"></script>
<!-- Sertakan komponen tambahan sesuai kebutuhan -->
```

