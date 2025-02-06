import { Router } from "../material/router/router";
import DemoMain from "./main/main.js";
import DemoError from "./error/error.js";
Router.use([
    {
        path: "",
        component: DemoMain,
        children: [
            // start base

            { path: "test", load: () => import("./test/test.js").then((m) => m.default) },

            { path: "icon", load: () => import("./icon/icon.js").then((m) => m.default) },
            { path: "image", load: () => import("./image/image.js").then((m) => m.default) },

            { path: "layout-grid", load: () => import("./layout-grid/layout-grid.js").then((m) => m.default) },
            { path: "layout-border", load: () => import("./layout-border/layout-border.js").then((m) => m.default) },

            { path: "scrim", load: () => import("./scrim/scrim.js").then((m) => m.default) },

            { path: "sheet", load: () => import("./sheet/sheet.js").then((m) => m.default) },
            { path: "sheet-modal", load: () => import("./sheet/sheet-modal.js").then((m) => m.default) },

            { path: "form", load: () => import("./form/form.js").then((m) => m.default) },

            { path: "data-table", load: () => import("./data-table/data-table.js").then((m) => m.default) },

            // end base

            { path: "bottom-app-bar", load: () => import("./bottom-app-bar/bottom-app-bar.js").then((m) => m.default) },
            { path: "bottom-app-bar-no-fab", load: () => import("./bottom-app-bar/bottom-app-bar-no-fab.js").then((m) => m.default) },

            { path: "top-app-bar", load: () => import("./top-app-bar/top-app-bar.js").then((m) => m.default) },

            { path: "badge", load: () => import("./badge/badge.js").then((m) => m.default) },
            { path: "badge-large", load: () => import("./badge/badge-large.js").then((m) => m.default) },
            { path: "badge-large-with-max", load: () => import("./badge/badge-large-with-max.js").then((m) => m.default) },

            { path: "button", load: () => import("./button/button.js").then((m) => m.default) },
            { path: "button-elevated", load: () => import("./button/button-elevated.js").then((m) => m.default) },
            { path: "button-filled", load: () => import("./button/button-filled.js").then((m) => m.default) },
            { path: "button-filled-tonal", load: () => import("./button/button-filled-tonal.js").then((m) => m.default) },
            { path: "button-outlined", load: () => import("./button/button-outlined.js").then((m) => m.default) },

            { path: "fab", load: () => import("./fab/fab.js").then((m) => m.default) },
            { path: "fab-small", load: () => import("./fab/fab-small.js").then((m) => m.default) },
            { path: "fab-large", load: () => import("./fab/fab-large.js").then((m) => m.default) },

            { path: "fab-extended", load: () => import("./fab/fab-extended.js").then((m) => m.default) },
            { path: "fab-extended-without-icon", load: () => import("./fab/fab-extended-without-icon.js").then((m) => m.default) },

            { path: "icon-button", load: () => import("./icon-button/icon-button.js").then((m) => m.default) },
            // { path: "icon-button-filled", load: () => import("./icon-button/icon-button-filled.js").then((m) => m.default) },
            // { path: "icon-button-filled-tonal", load: () => import("./icon-button/icon-button-filled-tonal.js").then((m) => m.default) },
            // { path: "icon-button-outlined", load: () => import("./icon-button/icon-button-outlined.js").then((m) => m.default) },

            { path: "segmented-button", load: () => import("./segmented-button/segmented-button.js").then((m) => m.default) },
            // { path: "segmented-button-multi", load: () => import("./segmented-button/segmented-button-multi.js").then((m) => m.default) },

            { path: "card", load: () => import("./card/card.js").then((m) => m.default) },

            { path: "checkbox", load: () => import("./checkbox/checkbox.js").then((m) => m.default) },

            { path: "chips", load: () => import("./chips/chips.js").then((m) => m.default) },

            { path: "datetime-picker", load: () => import("./datetime-picker/datetime-picker.js").then((m) => m.default) },

            { path: "dialog", load: () => import("./dialog/dialog.js").then((m) => m.default) },

            { path: "list", load: () => import("./list/list.js").then((m) => m.default) },

            { path: "menu", load: () => import("./menu/menu.js").then((m) => m.default) },

            { path: "navigation-bar", load: () => import("./navigation-bar/navigation-bar.js").then((m) => m.default) },
            { path: "navigation-bar-no-label", load: () => import("./navigation-bar/navigation-bar-no-label.js").then((m) => m.default) },

            { path: "navigation-drawer", load: () => import("./navigation-drawer/navigation-drawer.js").then((m) => m.default) },
            { path: "navigation-drawer-no-icon", load: () => import("./navigation-drawer/navigation-drawer-no-icon.js").then((m) => m.default) },
            { path: "navigation-drawer-modal", load: () => import("./navigation-drawer/navigation-drawer-modal.js").then((m) => m.default) },

            { path: "navigation-rail", load: () => import("./navigation-rail/navigation-rail.js").then((m) => m.default) },
            { path: "navigation-rail-no-label", load: () => import("./navigation-rail/navigation-rail-no-label.js").then((m) => m.default) },

            { path: "progress-indicator", load: () => import("./progress-indicator/progress-indicator.js").then((m) => m.default) },

            { path: "radio-button", load: () => import("./radio-button/radio-button.js").then((m) => m.default) },

            { path: "side-sheet", load: () => import("./side-sheet/side-sheet.js").then((m) => m.default) },
            { path: "side-sheet-modal", load: () => import("./side-sheet/side-sheet-modal.js").then((m) => m.default) },

            { path: "bottom-sheet", load: () => import("./bottom-sheet/bottom-sheet.js").then((m) => m.default) },
            { path: "bottom-sheet-modal", load: () => import("./bottom-sheet/bottom-sheet-modal.js").then((m) => m.default) },

            { path: "slider", load: () => import("./slider/slider.js").then((m) => m.default) },

            { path: "snackbar", load: () => import("./snackbar/snackbar.js").then((m) => m.default) },

            { path: "switch", load: () => import("./switch/switch.js").then((m) => m.default) },

            { path: "tabs", load: () => import("./tabs/tabs.js").then((m) => m.default) },

            { path: "text-field", load: () => import("./text-field/text-field.js").then((m) => m.default) },
            { path: "text-field-types", load: () => import("./text-field/text-field-types.js").then((m) => m.default) },

            { path: "tooltip", load: () => import("./tooltip/tooltip.js").then((m) => m.default) },

            { path: "tree", load: () => import("./tree/tree.js").then((m) => m.default) },

            { path: "navigation-list", load: () => import("./navigation-list/navigation-list.js").then((m) => m.default) },
        ],
    },
    {
        path: "*",
        component: DemoError,
    },
]);
