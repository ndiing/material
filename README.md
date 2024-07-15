# Material Design Framework

A lightweight framework for implementing Material Design components using Node.js, Webpack, and Lit.

## Getting Started

Integrate this framework into your project with the following HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Material Design App</title>
    <base href="./">
    <!-- Include Google Fonts for Material Design -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
</head>
<body>
    <!-- Use md-outlet to initialize your Material Design components -->
    <md-outlet></md-outlet>
</body>
</html>
```

## Installation via NPM

### Import All Components

For full integration, import the entire Material Design framework:

```js
import "./material/material.scss";
import "./material/material.js";
```

### Selective Imports

Alternatively, import specific components as needed:

```js
import "./material/button.scss";
import "./material/icon-button.scss";

import "./material/button.js";
import "./material/icon-button.js";
// Add more components here
```

## CDN Integration

### Import All Components

For CDN-based deployments, link the compiled CSS and JavaScript files:

```html
<link rel="stylesheet" href="./dist/material/material.css">
<script type="module" src="./dist/material/material.js"></script>
```

### Selective Imports

To optimize loading, include CSS and JavaScript separately for each component:

```html
<link rel="stylesheet" href="./dist/button/button.css">
<link rel="stylesheet" href="./dist/icon-button/icon-button.css">

<script type="module" src="./dist/button/button.js"></script>
<script type="module" src="./dist/icon-button/icon-button.js"></script>
<!-- Include additional components as needed -->
```
