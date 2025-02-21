# Material

**[Demo](https://ndiing.github.io/material/dist/#/demo) | [API Documentation](https://ndiing.github.io/material/dist/#/docs)**

Material adalah sebuah library UI berbasis [Lit](https://lit.dev/) yang dapat digunakan dalam proyek Webpack. Library ini menyediakan komponen dan modul yang membantu dalam pengembangan antarmuka pengguna dengan lebih efisien.

## Instalasi

Untuk menginstal package ini, jalankan perintah berikut di terminal:

```sh
npm install @ndiing/material@0.71.11
```

## Penggunaan

Setelah instalasi, Anda dapat mengimpor komponen, modul, dan SCSS ke dalam proyek Webpack Anda dengan menambahkan kode berikut:

```js
import "@ndiing/material/src/material/material.scss";
import "@ndiing/material/src/material/material.js";
```

## Membuat Proyek Webpack

Jika Anda belum memiliki proyek Webpack, ikuti langkah-langkah berikut untuk membuatnya:

### 1. Inisialisasi Proyek

Jalankan perintah berikut untuk membuat folder proyek dan menginisialisasi package manager:

```sh
mkdir my-material-project && cd my-material-project
npm init -y
```

### 2. Instal Webpack dan Dependensi

```sh
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader sass-loader sass
```

### 3. Struktur Direktori

Buat struktur direktori seperti berikut:

```
my-material-project/
├── src/
│   ├── index.js
│   ├── index.html
│   ├── styles.scss
├── package.json
├── webpack.config.js
└── .gitignore
```

### 4. Konfigurasi Webpack

Buat file `webpack.config.js` dengan isi berikut:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: './dist',
  },
  mode: 'development',
};
```

### 5. Tambahkan Kode dalam `src/index.js`

```js
import "@ndiing/material/src/material/material.scss";
import "@ndiing/material/src/material/material.js";

console.log('Material UI berhasil dimuat');
```

### 6. Buat File `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Material UI">
    <title>Material UI</title>
    <base href="./">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700">
</head>
<body>
    <md-outlet></md-outlet>
</body>
</html>
```

### 7. Konfigurasi Router Dasar

Tambahkan kode berikut untuk mengatur routing dalam aplikasi:

```js
import { Router } from "./material/router/router";

Router.use(
    {
        path: "",
        exact: true,
        load: () => import("./main/main.js").then((module) => module.default),
        children: [
            ...DemoRoutes,
            ...DocsRoutes,
        ],
    },
    {
        path: "*",
        load: () => import("./error/error.js").then((module) => module.default),
    }
);
```

### 8. Menjalankan Proyek

Jalankan perintah berikut untuk menjalankan server pengembangan Webpack:

```sh
npx webpack serve
```

## Repository dan Lisensi

- **GitHub Repository:** [Material](https://github.com/ndiing/material)
- **NPM Package:** [@ndiing/material](https://github.com/ndiing/material/pkgs/npm/material)
- **Lisensi:** Proyek ini dilisensikan di bawah [MIT License](LICENSE).

Dokumentasi ini dibuat agar mudah dipahami bahkan bagi pengguna yang baru mengenal Webpack dan Lit. Jika ada pertanyaan atau kendala, silakan buka *issue* di GitHub repository.

