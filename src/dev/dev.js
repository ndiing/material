import ErrorComponent from "./error/error.js";
import MainComponent from "./main/main.js";

// Usage example
import { MDRouter } from "../material/router/router";
// prettier-ignore
MDRouter.register([
    {
        path: '', component: MainComponent, children: [
            { path: "badge", title: "badge", load: () => import("./badge/badge.js").then(m=>m.default)},
            { path: "bottom-app-bar", title: "bottom-app-bar", load: () => import("./bottom-app-bar/bottom-app-bar.js").then(m=>m.default)},
            { path: "bottom-sheet", title: "bottom-sheet", load: () => import("./bottom-sheet/bottom-sheet.js").then(m=>m.default)},
            { path: "button", title: "button", load: () => import("./button/button.js").then(m=>m.default)},
            { path: "card", title: "card", load: () => import("./card/card.js").then(m=>m.default)},
            { path: "carousel", title: "carousel", load: () => import("./carousel/carousel.js").then(m=>m.default)},
            { path: "checkbox", title: "checkbox", load: () => import("./checkbox/checkbox.js").then(m=>m.default)},
            { path: "chip", title: "chip", load: () => import("./chip/chip.js").then(m=>m.default)},
            { path: "date-picker", title: "date-picker", load: () => import("./date-picker/date-picker.js").then(m=>m.default)},
            { path: "dialog", title: "dialog", load: () => import("./dialog/dialog.js").then(m=>m.default)},
            { path: "divider", title: "divider", load: () => import("./divider/divider.js").then(m=>m.default)},
            { path: "emoji", title: "emoji", load: () => import("./emoji/emoji.js").then(m=>m.default)},
            { path: "fab", title: "fab", load: () => import("./fab/fab.js").then(m=>m.default)},
            { path: "icon", title: "icon", load: () => import("./icon/icon.js").then(m=>m.default)},
            { path: "icon-button", title: "icon-button", load: () => import("./icon-button/icon-button.js").then(m=>m.default)},
            { path: "image", title: "image", load: () => import("./image/image.js").then(m=>m.default)},
            { path: "list", title: "list", load: () => import("./list/list.js").then(m=>m.default)},
            { path: "menu", title: "menu", load: () => import("./menu/menu.js").then(m=>m.default)},
            { path: "navigation-bar", title: "navigation-bar", load: () => import("./navigation-bar/navigation-bar.js").then(m=>m.default)},
            { path: "navigation-drawer", title: "navigation-drawer", load: () => import("./navigation-drawer/navigation-drawer.js").then(m=>m.default)},
            { path: "navigation-rail", title: "navigation-rail", load: () => import("./navigation-rail/navigation-rail.js").then(m=>m.default)},
            { path: "progress-indicator", title: "progress-indicator", load: () => import("./progress-indicator/progress-indicator.js").then(m=>m.default)},
            { path: "radio-button", title: "radio-button", load: () => import("./radio-button/radio-button.js").then(m=>m.default)},
            { path: "search", title: "search", load: () => import("./search/search.js").then(m=>m.default)},
            { path: "segmented-button", title: "segmented-button", load: () => import("./segmented-button/segmented-button.js").then(m=>m.default)},
            { path: "sheet", title: "sheet", load: () => import("./sheet/sheet.js").then(m=>m.default)},
            { path: "side-sheet", title: "side-sheet", load: () => import("./side-sheet/side-sheet.js").then(m=>m.default)},
            { path: "slider", title: "slider", load: () => import("./slider/slider.js").then(m=>m.default)},
            { path: "snackbar", title: "snackbar", load: () => import("./snackbar/snackbar.js").then(m=>m.default)},
            { path: "switch", title: "switch", load: () => import("./switch/switch.js").then(m=>m.default)},
            { path: "tab", title: "tab", load: () => import("./tab/tab.js").then(m=>m.default)},
            { path: "text-field", title: "text-field", load: () => import("./text-field/text-field.js").then(m=>m.default)},
            { path: "time-picker", title: "time-picker", load: () => import("./time-picker/time-picker.js").then(m=>m.default)},
            { path: "tooltip", title: "tooltip", load: () => import("./tooltip/tooltip.js").then(m=>m.default)},
            { path: "top-app-bar", title: "top-app-bar", load: () => import("./top-app-bar/top-app-bar.js").then(m=>m.default)},
        ]
    },
    { path: '*', component: ErrorComponent, children: [] },
])
