# Material Design Framework

![NPM Version](https://img.shields.io/npm/v/%40ndiinginc%2Fmaterial)
![NPM Downloads](https://img.shields.io/npm/d18m/%40ndiinginc%2Fmaterial)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40ndiinginc%2Fmaterial)
![GitHub License](https://img.shields.io/github/license/ndiing/material)



A lightweight framework for creating Material Design components using Node.js, Webpack, and Lit.

## Installation via NPM

To begin using the Material Design framework, install the `@ndiinginc/material` package via npm:

```bash
npm install @ndiinginc/material
```

### Importing All Components

For comprehensive integration, import the entire framework into your project:

```js
import "@ndiinginc/material/dist/material/material.css";
import "@ndiinginc/material/dist/material/material.js";
```

### Selective Imports

Alternatively, selectively import specific components as required:

```js
import "@ndiinginc/material/dist/button/button.css";
import "@ndiinginc/material/dist/icon-button/icon-button.css";

import "@ndiinginc/material/dist/button/button.js";
import "@ndiinginc/material/dist/icon-button/icon-button.js";
// Add more components as needed
```

## CDN Integration

### Importing All Components

For deployments using a Content Delivery Network (CDN), link to the compiled CSS and JavaScript files:

```html
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.css"
/>
<script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.js"
></script>
```

### Selective Imports

To optimize loading, include CSS and JavaScript files separately for each component:

```html
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.css"
/>
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.css"
/>

<script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.js"
></script>
<script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.js"
></script>
<!-- Include additional components as needed -->
```

## Sizes

| Name                   | Size    |
| ---------------------- | ------- |
| attribute-observer     | 1.25KB  |
| badge                  | 1.47KB  |
| bottom-app-bar         | 0.52KB  |
| bottom-sheet           | 0.60KB  |
| button                 | 3.41KB  |
| card                   | 3.97KB  |
| checkbox               | 4.31KB  |
| chip                   | 3.66KB  |
| chips                  | 2.06KB  |
| color                  | 3.26KB  |
| color-field            | 5.52KB  |
| color-picker           | 15.31KB |
| component              | 3.46KB  |
| data-table             | 21.02KB |
| data-table-column-cell | 1.14KB  |
| data-table-item        | 4.83KB  |
| data-table-row-cell    | 0.38KB  |
| date-field             | 6.53KB  |
| date-picker            | 7.46KB  |
| datetime-field         | 6.04KB  |
| datetime-picker        | 21.18KB |
| dialog                 | 0.55KB  |
| divider                | 1.04KB  |
| emoji                  | 1.06KB  |
| emoji-picker           | 14.12KB |
| fab                    | 2.94KB  |
| form                   | 5.24KB  |
| functions              | 20.09KB |
| gesture                | 10.08KB |
| icon                   | 0.54KB  |
| icon-button            | 3.70KB  |
| image                  | 4.25KB  |
| layout                 | 0.80KB  |
| layout-item            | 2.56KB  |
| list                   | 7.03KB  |
| list-item              | 6.92KB  |
| localization           | 1.03KB  |
| markdown               | 1.80KB  |
| material               | 7.03KB  |
| media-observer         | 1.55KB  |
| menu                   | 9.96KB  |
| month-field            | 6.61KB  |
| month-picker           | 7.13KB  |
| navigation-bar         | 1.49KB  |
| navigation-drawer      | 1.53KB  |
| navigation-rail        | 1.50KB  |
| number-field           | 2.00KB  |
| observer               | 1.51KB  |
| pagination             | 8.09KB  |
| password-field         | 1.62KB  |
| popper                 | 11.95KB |
| progress               | 3.17KB  |
| progress-indicator     | 3.46KB  |
| radio-button           | 4.61KB  |
| ripple                 | 6.71KB  |
| router                 | 11.27KB |
| scrim                  | 1.12KB  |
| search-field           | 1.84KB  |
| segmented-button       | 2.34KB  |
| select-field           | 10.01KB |
| sheet                  | 2.81KB  |
| side-sheet             | 0.58KB  |
| slider                 | 8.05KB  |
| snackbar               | 1.91KB  |
| spacer                 | 0.56KB  |
| store                  | 11.50KB |
| switch                 | 4.55KB  |
| tabs                   | 2.19KB  |
| template               | 93.35KB |
| text-field             | 15.97KB |
| textarea-field         | 0.93KB  |
| time-field             | 6.55KB  |
| time-picker            | 6.73KB  |
| tool                   | 6.03KB  |
| toolbar                | 0.86KB  |
| tooltip                | 2.16KB  |
| top-app-bar            | 0.61KB  |
| tree                   | 6.60KB  |
| tree-item              | 10.07KB |
| virtual                | 4.98KB  |
| week-field             | 6.53KB  |
| week-picker            | 10.75KB |
