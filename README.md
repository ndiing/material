# Material Design Framework

[![npm version](https://badge.fury.io/js/%40ndiinginc%2Fmaterial.svg)](https://badge.fury.io/js/%40ndiinginc%2Fmaterial)

A lightweight framework for implementing Material Design components using Node.js, Webpack, and Lit.

## Installation via NPM

Install the `@ndiinginc/material` package from npm:

```html
npm install @ndiinginc/material
```

### Import All Components

For full integration, import the entire Material Design framework:

```js
import "@ndiinginc/material/dist/material/material.css";
import "@ndiinginc/material/dist/material/material.js";
```

### Selective Imports

Alternatively, import specific components as needed:

```js
import "@ndiinginc/material/dist/button/button.css";
import "@ndiinginc/material/dist/icon-button/icon-button.css";

import "@ndiinginc/material/dist/button/button.js";
import "@ndiinginc/material/dist/icon-button/icon-button.js";
// Add more components here
```

## CDN Integration

### Import All Components

For CDN-based deployments, link the compiled CSS and JavaScript files:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.js"></script>
```

### Selective Imports

To optimize loading, include CSS and JavaScript separately for each component:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.css" />

<script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.js"></script>
<!-- Include additional components as needed -->
```

