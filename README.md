# Material Design Framework

[![npm version](https://badge.fury.io/js/%40ndiinginc%2Fmaterial.svg)](https://badge.fury.io/js/%40ndiinginc%2Fmaterial)

A lightweight framework for creating Material Design components using Node.js, Webpack, and Lit.

## Installation via NPM

To begin using the Material Design framework, install the `@ndiinginc/material` package via npm:

<pre>
npm install @ndiinginc/material
</pre>

### Importing All Components

For comprehensive integration, import the entire framework into your project:

<pre>
import "@ndiinginc/material/dist/material/material.css";
import "@ndiinginc/material/dist/material/material.js";
</pre>

### Selective Imports

Alternatively, selectively import specific components as required:

<pre>
import "@ndiinginc/material/dist/button/button.css";
import "@ndiinginc/material/dist/icon-button/icon-button.css";

import "@ndiinginc/material/dist/button/button.js";
import "@ndiinginc/material/dist/icon-button/icon-button.js";
// Add more components as needed
</pre>

## CDN Integration

### Importing All Components

For deployments using a Content Delivery Network (CDN), link to the compiled CSS and JavaScript files:

<pre>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/material/material.js"></script>
</pre>

### Selective Imports

To optimize loading, include CSS and JavaScript files separately for each component:

<pre>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.css" />

<script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/button/button.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@ndiinginc/material/dist/icon-button/icon-button.js"></script>
<!-- Include additional components as needed -->
</pre>
