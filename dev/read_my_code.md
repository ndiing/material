## src\demo

### demo

src\demo\demo.js

```js
import { Router } from "../material/core/router.js";
import { routes } from "./routes.js";

const router = new Router(routes, {
    historyApiFallback: true,
});
router.listen();
```

### demo

src\demo\demo.scss

```scss
// grid
.demo-grid {
    margin: 24px;
}
.demo-grid__column {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    background-color: var(--md-sys-color-surface-container);
}

// layout
.demo-layout__item {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 16px;
}
.demo-layout__center {
    padding: 16px;
}

// icon
.demo-icon {
    padding: 24px;
}
.demo-icon__item {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: center;
    height: 56px;
    padding: 0 16px;
}
```

## src\material

### material

src\material\material.js

```js
import "./core/router.js";
import "./core/observer.js";
import "./core/breakpoint-observer.js";
import "./core/scheme-observer.js";
import "./core/orientation-observer.js";
import "./core/theme.js";
import "./core/localization.js";
import "./core/store.js";
import "./core/query-builder.js";
import "./core/positioner.js";
import "./core/task-queue.js";
import "./core/date-formatter.js";
import "./core/template.js";

import "./base/element.js";
import "./base/list.js";
import "./base/datetime-picker.js";

import "./controller/virtual-scroll.js";
import "./controller/ripple.js";

import "./components/input/input-number.js";
import "./components/input/input-segment.js";
import "./components/input/input-enum.js";
import "./components/input/input-datetime.js";

import "./components/grid/grid-column.js";
import "./components/grid/grid.js";
import "./components/scrim/scrim.js";
import "./components/layout/layout-item.js";
import "./components/layout/layout.js";

import "./components/icon/icon.js";
import "./components/image/image.js";
import "./components/badge/badge.js";

import "./components/button/button.js";
import "./components/icon-button/icon-button.js";
import "./components/button-group/button-group.js";
import "./components/fab/fab.js";
import "./components/split-button/split-button.js";

import "./components/card/card-header.js";
import "./components/card/card-body.js";
import "./components/card/card-footer.js";
import "./components/card/card.js";

import "./components/dialog/dialog-header.js";
import "./components/dialog/dialog-body.js";
import "./components/dialog/dialog-footer.js";
import "./components/dialog/dialog.js";

import "./components/sheet/sheet-header.js";
import "./components/sheet/sheet-body.js";
import "./components/sheet/sheet-footer.js";
import "./components/sheet/sheet.js";

import "./components/tooltip/tooltip.js";
import "./components/snackbar/snackbar.js";

import "./components/checkbox/checkbox.js";
import "./components/radio-button/radio-button.js";
import "./components/switch/switch.js";
import "./components/text-field/text-field.js";
import "./components/textarea/textarea.js";
import "./components/slider/slider.js";
import "./components/form/form.js";

import "./components/data-table/data-table-cell.js";
import "./components/data-table/data-table.js";

import "./components/list/list-item.js";
import "./components/list/list.js";
import "./components/tree/tree.js";
import "./components/push-menu/push-menu.js";

import "./components/navigation-bar/navigation-bar.js";
import "./components/navigation-drawer/navigation-drawer.js";
import "./components/navigation-rail/navigation-rail.js";

import "./components/datetime-picker/datetime-picker.js";

// import "./service/snackbar.js";

// import "./components/test/test.js";
```

### material

src\material\material.scss

```scss
@use "./shared/mixins.scss";

@use "./base/tokens.scss";
@use "./base/animations.scss";
@use "./base/fonts.scss";
@use "./base/reset.scss";

@use "./controller/virtual-scroll.scss";
@use "./controller/ripple.scss";

@use "./components/input/input.scss";

@use "./components/grid/grid.scss";
@use "./components/scrim/scrim.scss";
@use "./components/layout/layout.scss";

@use "./components/typography/typography.scss";
@use "./components/icon/icon.scss";
@use "./components/image/image.scss";
@use "./components/badge/badge.scss";

@use "./components/button/button.scss";
@use "./components/icon-button/icon-button.scss";
@use "./components/button-group/button-group.scss";
@use "./components/fab/fab.scss";
@use "./components/split-button/split-button.scss";

@use "./components/card/card.scss";
@use "./components/dialog/dialog.scss";
@use "./components/sheet/sheet.scss";

@use "./components/tooltip/tooltip.scss";
@use "./components/snackbar/snackbar.scss";

@use "./components/checkbox/checkbox.scss";
@use "./components/radio-button/radio-button.scss";
@use "./components/switch/switch.scss";
@use "./components/text-field/text-field.scss";
@use "./components/textarea/textarea.scss";
@use "./components/slider/slider.scss";
@use "./components/form/form.scss";

@use "./components/data-table/data-table.scss";
@use "./components/list/list.scss";
@use "./components/tree/tree.scss";
@use "./components/push-menu/push-menu.scss";

@use "./components/navigation-bar/navigation-bar.scss";
@use "./components/navigation-drawer/navigation-drawer.scss";
@use "./components/navigation-rail/navigation-rail.scss";

@use "./components/datetime-picker/datetime-picker.scss";

// @use "./components/test/test.scss";
```
