# Material Design Framework

A lightweight framework for implementing Material Design components using Node.js, Webpack, and Lit.

## Quick start

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

## Bundle Sizes

File | Size
--- | ---
[4092](./dist/4092/4092.js) | 1KB
[614](./dist/614/614.js) | 1KB
[attribute-observer](./dist/attribute-observer/attribute-observer.js) | 1KB
[badge](./dist/badge/badge.js) | 17KB
[bottom-app-bar](./dist/bottom-app-bar/bottom-app-bar.js) | 27KB
[bottom-sheet](./dist/bottom-sheet/bottom-sheet.js) | 28KB
[button](./dist/button/button.js) | 22KB
[card](./dist/card/card.js) | 25KB
[checkbox](./dist/checkbox/checkbox.js) | 25KB
[chip](./dist/chip/chip.js) | 23KB
[chips](./dist/chips/chips.js) | 18KB
[color](./dist/color/color.js) | 54KB
[color-field](./dist/color-field/color-field.js) | 32KB
[color-picker](./dist/color-picker/color-picker.js) | 44KB
[component](./dist/component/component.js) | 16KB
[data-table](./dist/data-table/data-table.js) | 50KB
[data-table-item](./dist/data-table-item/data-table-item.js) | 21KB      
[date-field](./dist/date-field/date-field.js) | 33KB
[date-picker](./dist/date-picker/date-picker.js) | 51KB
[datetime-field](./dist/datetime-field/datetime-field.js) | 32KB
[datetime-picker](./dist/datetime-picker/datetime-picker.js) | 47KB      
[dialog](./dist/dialog/dialog.js) | 28KB
[emoji](./dist/emoji/emoji.js) | 16KB
[emoji-picker](./dist/emoji-picker/emoji-picker.js) | 381KB
[fab](./dist/fab/fab.js) | 22KB
[form](./dist/form/form.js) | 21KB
[functions](./dist/functions/functions.js) | 9KB
[gesture](./dist/gesture/gesture.js) | 7KB
[icon](./dist/icon/icon.js) | 16KB
[icon-button](./dist/icon-button/icon-button.js) | 22KB
[image](./dist/image/image.js) | 21KB
[list](./dist/list/list.js) | 21KB
[list-item](./dist/list-item/list-item.js) | 31KB
[localization](./dist/localization/localization.js) | 6KB
[markdown](./dist/markdown/markdown.js) | 55KB
[material](./dist/material/material.css) | 157KB
[material](./dist/material/material.js) | 673KB
[media-observer](./dist/media-observer/media-observer.js) | 1KB
[menu](./dist/menu/menu.js) | 53KB
[month-field](./dist/month-field/month-field.js) | 33KB
[month-picker](./dist/month-picker/month-picker.js) | 50KB
[navigation-bar](./dist/navigation-bar/navigation-bar.js) | 32KB
[navigation-drawer](./dist/navigation-drawer/navigation-drawer.js) | 32KB
[navigation-rail](./dist/navigation-rail/navigation-rail.js) | 32KB      
[number-field](./dist/number-field/number-field.js) | 29KB
[observer](./dist/observer/observer.js) | 2KB
[pagination](./dist/pagination/pagination.js) | 19KB
[password-field](./dist/password-field/password-field.js) | 29KB
[popper](./dist/popper/popper.js) | 7KB
[progress](./dist/progress/progress.js) | 2KB
[progress-indicator](./dist/progress-indicator/progress-indicator.js) | 19KB
[radio-button](./dist/radio-button/radio-button.js) | 26KB
[ripple](./dist/ripple/ripple.js) | 5KB
[router](./dist/router/router.js) | 6KB
[scrim](./dist/scrim/scrim.js) | 17KB
[search-field](./dist/search-field/search-field.js) | 29KB
[segmented-button](./dist/segmented-button/segmented-button.js) | 19KB   
[select-field](./dist/select-field/select-field.js) | 70KB
[sheet](./dist/sheet/sheet.js) | 27KB
[side-sheet](./dist/side-sheet/side-sheet.js) | 28KB
[slider](./dist/slider/slider.js) | 24KB
[snackbar](./dist/snackbar/snackbar.js) | 29KB
[store](./dist/store/store.js) | 6KB
[switch](./dist/switch/switch.js) | 26KB
[tabs](./dist/tabs/tabs.js) | 21KB
[text-field](./dist/text-field/text-field.js) | 29KB
[textarea-field](./dist/textarea-field/textarea-field.js) | 29KB
[time-field](./dist/time-field/time-field.js) | 33KB
[time-picker](./dist/time-picker/time-picker.js) | 50KB
[tooltip](./dist/tooltip/tooltip.js) | 35KB
[top-app-bar](./dist/top-app-bar/top-app-bar.js) | 28KB
[tree](./dist/tree/tree.js) | 20KB
[tree-item](./dist/tree-item/tree-item.js) | 27KB
[virtual](./dist/virtual/virtual.js) | 4KB
[week-field](./dist/week-field/week-field.js) | 33KB
[week-picker](./dist/week-picker/week-picker.js) | 53KB