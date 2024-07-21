# Material Design Framework

![NPM Version](https://img.shields.io/npm/v/%40ndiinginc%2Fmaterial)
![NPM Downloads](https://img.shields.io/npm/dm/%40ndiinginc%2Fmaterial)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40ndiinginc%2Fmaterial)
![GitHub License](https://img.shields.io/github/license/ndiing/material)

A lightweight framework for creating Material Design components using Node.js, Webpack, and Lit.

## Installation

### Using NPM

To start using the Material Design framework, install the `@ndiinginc/material` package via npm:

<pre>
npm install @ndiinginc/material
</pre>

## Importing Components

### Importing All Components

For full integration, import the entire framework into your project:

<pre>
import "@ndiinginc/material/dist/material/material.css";
import "@ndiinginc/material/dist/material/material.js";
</pre>

### Selective Import

Alternatively, import specific components as needed:

<pre>
// CSS
import "@ndiinginc/material/dist/button/button.css";
import "@ndiinginc/material/dist/icon-button/icon-button.css";

// JavaScript
import "@ndiinginc/material/dist/button/button.js";
import "@ndiinginc/material/dist/icon-button/icon-button.js";
</pre>

## CDN Integration

### Importing All Components

For deployment using a Content Delivery Network (CDN), link to the compiled CSS and JavaScript files:

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

### Selective Import

To optimize loading, include the CSS and JavaScript files separately for each component:

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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
