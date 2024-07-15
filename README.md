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
[4092.js](./dist/4092/4092.js) | **1KB**
[614.js](./dist/614/614.js) | **1KB**
[attribute-observer.js](./dist/attribute-observer/attribute-observer.js) | **1KB**
[badge.js](./dist/badge/badge.js) | **17KB**
[bottom-app-bar.js](./dist/bottom-app-bar/bottom-app-bar.js) | **27KB**
[bottom-sheet.js](./dist/bottom-sheet/bottom-sheet.js) | **28KB**
[button.js](./dist/button/button.js) | **22KB**
[card.js](./dist/card/card.js) | **25KB**
[checkbox.js](./dist/checkbox/checkbox.js) | **25KB**
[chip.js](./dist/chip/chip.js) | **23KB**
[chips.js](./dist/chips/chips.js) | **18KB**
[color.js](./dist/color/color.js) | **54KB**
[color-field.js](./dist/color-field/color-field.js) | **32KB**
[color-picker.js](./dist/color-picker/color-picker.js) | **44KB**
[component.js](./dist/component/component.js) | **16KB**
[data-table.js](./dist/data-table/data-table.js) | **50KB**
[data-table-item.js](./dist/data-table-item/data-table-item.js) | **21KB**        
[date-field.js](./dist/date-field/date-field.js) | **33KB**
[date-picker.js](./dist/date-picker/date-picker.js) | **51KB**
[datetime-field.js](./dist/datetime-field/datetime-field.js) | **32KB**
[datetime-picker.js](./dist/datetime-picker/datetime-picker.js) | **47KB**        
[dialog.js](./dist/dialog/dialog.js) | **28KB**
[emoji.js](./dist/emoji/emoji.js) | **16KB**
[emoji-picker.js](./dist/emoji-picker/emoji-picker.js) | **381KB**
[fab.js](./dist/fab/fab.js) | **22KB**
[form.js](./dist/form/form.js) | **21KB**
[functions.js](./dist/functions/functions.js) | **9KB**
[gesture.js](./dist/gesture/gesture.js) | **7KB**
[icon.js](./dist/icon/icon.js) | **16KB**
[icon-button.js](./dist/icon-button/icon-button.js) | **22KB**
[image.js](./dist/image/image.js) | **21KB**
[list.js](./dist/list/list.js) | **21KB**
[list-item.js](./dist/list-item/list-item.js) | **31KB**
[localization.js](./dist/localization/localization.js) | **6KB**
[markdown.js](./dist/markdown/markdown.js) | **55KB**
[material.css](./dist/material/material.css) | **157KB**
[material.js](./dist/material/material.js) | **673KB**
[media-observer.js](./dist/media-observer/media-observer.js) | **1KB**
[menu.js](./dist/menu/menu.js) | **53KB**
[month-field.js](./dist/month-field/month-field.js) | **33KB**
[month-picker.js](./dist/month-picker/month-picker.js) | **50KB**
[navigation-bar.js](./dist/navigation-bar/navigation-bar.js) | **32KB**
[navigation-drawer.js](./dist/navigation-drawer/navigation-drawer.js) | **32KB**
[navigation-rail.js](./dist/navigation-rail/navigation-rail.js) | **32KB**
[number-field.js](./dist/number-field/number-field.js) | **29KB**
[observer.js](./dist/observer/observer.js) | **2KB**
[pagination.js](./dist/pagination/pagination.js) | **19KB**
[password-field.js](./dist/password-field/password-field.js) | **29KB**
[popper.js](./dist/popper/popper.js) | **7KB**
[progress.js](./dist/progress/progress.js) | **2KB**
[progress-indicator.js](./dist/progress-indicator/progress-indicator.js) | **19KB**
[radio-button.js](./dist/radio-button/radio-button.js) | **26KB**
[ripple.js](./dist/ripple/ripple.js) | **5KB**
[router.js](./dist/router/router.js) | **6KB**
[scrim.js](./dist/scrim/scrim.js) | **17KB**
[search-field.js](./dist/search-field/search-field.js) | **29KB**
[segmented-button.js](./dist/segmented-button/segmented-button.js) | **19KB**
[select-field.js](./dist/select-field/select-field.js) | **70KB**
[sheet.js](./dist/sheet/sheet.js) | **27KB**
[side-sheet.js](./dist/side-sheet/side-sheet.js) | **28KB**
[slider.js](./dist/slider/slider.js) | **24KB**
[snackbar.js](./dist/snackbar/snackbar.js) | **29KB**
[store.js](./dist/store/store.js) | **6KB**
[switch.js](./dist/switch/switch.js) | **26KB**
[tabs.js](./dist/tabs/tabs.js) | **21KB**
[text-field.js](./dist/text-field/text-field.js) | **29KB**
[textarea-field.js](./dist/textarea-field/textarea-field.js) | **29KB**
[time-field.js](./dist/time-field/time-field.js) | **33KB**
[time-picker.js](./dist/time-picker/time-picker.js) | **50KB**
[tooltip.js](./dist/tooltip/tooltip.js) | **35KB**
[top-app-bar.js](./dist/top-app-bar/top-app-bar.js) | **28KB**
[tree.js](./dist/tree/tree.js) | **20KB**
[tree-item.js](./dist/tree-item/tree-item.js) | **27KB**
[virtual.js](./dist/virtual/virtual.js) | **4KB**
[week-field.js](./dist/week-field/week-field.js) | **33KB**
[week-picker.js](./dist/week-picker/week-picker.js) | **53KB**