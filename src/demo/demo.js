import { Router } from "../material/router/router";
import DemoMain from "./main/main.js";
import DemoError from "./error/error.js";
const routes = [
    {
        path: "",
        component: DemoMain,
        children: [
            { path: "badge", load: () => import( "./badge/badge.js").then(m=>m.default) },

            { path: "bottom-app-bar", load: () => import( "./bottom-app-bar/bottom-app-bar.js").then(m=>m.default) },
            { path: "bottom-app-bar-no-fab", load: () => import( "./bottom-app-bar/bottom-app-bar-no-fab.js").then(m=>m.default) },
            
            { path: "bottom-sheet", load: () => import( "./bottom-sheet/bottom-sheet.js").then(m=>m.default) },
            { path: "bottom-sheet-modal", load: () => import( "./bottom-sheet/bottom-sheet-modal.js").then(m=>m.default) },

            { path: "button", load: () => import( "./button/button.js").then(m=>m.default) },
            { path: "button-elevated", load: () => import( "./button/button-elevated.js").then(m=>m.default) },
            { path: "button-filled", load: () => import( "./button/button-filled.js").then(m=>m.default) },
            { path: "button-filled-tonal", load: () => import( "./button/button-filled-tonal.js").then(m=>m.default) },
            { path: "button-outlined", load: () => import( "./button/button-outlined.js").then(m=>m.default) },

            { path: "card", load: () => import( "./card/card.js").then(m=>m.default) },

            { path: "checkbox", load: () => import( "./checkbox/checkbox.js").then(m=>m.default) },

            { path: "chips", load: () => import( "./chips/chips.js").then(m=>m.default) },
            { path: "chips-single-select", load: () => import( "./chips/chips-single-select.js").then(m=>m.default) },
            { path: "chips-multi-select", load: () => import( "./chips/chips-multi-select.js").then(m=>m.default) },
            
            { path: "data-table-cell", load: () => import( "./data-table/data-table-cell.js").then(m=>m.default) },
            { path: "data-table", load: () => import( "./data-table/data-table.js").then(m=>m.default) },

            { path: "dialog", load: () => import( "./dialog/dialog.js").then(m=>m.default) },

            { path: "divider", load: () => import( "./divider/divider.js").then(m=>m.default) },

            { path: "fab", load: () => import( "./fab/fab.js").then(m=>m.default) },
            { path: "fab-unelevated", load: () => import( "./fab/fab-unelevated.js").then(m=>m.default) },
            { path: "fab-extended", load: () => import( "./fab/fab-extended.js").then(m=>m.default) },
            { path: "fab-small", load: () => import( "./fab/fab-small.js").then(m=>m.default) },
            { path: "fab-large", load: () => import( "./fab/fab-large.js").then(m=>m.default) },

            { path: "form", load: () => import( "./form/form.js").then(m=>m.default) },

            { path: "icon", load: () => import( "./icon/icon.js").then(m=>m.default) },

            { path: "icon-button", load: () => import( "./icon-button/icon-button.js").then(m=>m.default) },
            { path: "icon-button-filled", load: () => import( "./icon-button/icon-button-filled.js").then(m=>m.default) },
            { path: "icon-button-filled-tonal", load: () => import( "./icon-button/icon-button-filled-tonal.js").then(m=>m.default) },
            { path: "icon-button-outlined", load: () => import( "./icon-button/icon-button-outlined.js").then(m=>m.default) },
            
            { path: "image", load: () => import( "./image/image.js").then(m=>m.default) },

            { path: "list-item", load: () => import( "./list/list-item.js").then(m=>m.default) },
            { path: "list-row", load: () => import( "./list/list-row.js").then(m=>m.default) },
            { path: "list", load: () => import( "./list/list.js").then(m=>m.default) },
            { path: "list-single-select", load: () => import( "./list/list-single-select.js").then(m=>m.default) },
            { path: "list-multi-select", load: () => import( "./list/list-multi-select.js").then(m=>m.default) },

            { path: "menu", load: () => import( "./menu/menu.js").then(m=>m.default) },

            { path: "navigation-bar", load: () => import( "./navigation-bar/navigation-bar.js").then(m=>m.default) },
            { path: "navigation-bar-no-label", load: () => import( "./navigation-bar/navigation-bar-no-label.js").then(m=>m.default) },

            { path: "navigation-drawer", load: () => import( "./navigation-drawer/navigation-drawer.js").then(m=>m.default) },
            { path: "navigation-drawer-modal", load: () => import( "./navigation-drawer/navigation-drawer-modal.js").then(m=>m.default) },
            
            { path: "navigation-list-item", load: () => import( "./navigation-list/navigation-list-item.js").then(m=>m.default) },
            { path: "navigation-list-row", load: () => import( "./navigation-list/navigation-list-row.js").then(m=>m.default) },
            { path: "navigation-list", load: () => import( "./navigation-list/navigation-list.js").then(m=>m.default) },
            
            { path: "navigation-rail", load: () => import( "./navigation-rail/navigation-rail.js").then(m=>m.default) },
            { path: "navigation-rail-no-label", load: () => import( "./navigation-rail/navigation-rail-no-label.js").then(m=>m.default) },
            
            { path: "progress-indicator", load: () => import( "./progress-indicator/progress-indicator.js").then(m=>m.default) },
            { path: "progress-indicator-circular", load: () => import( "./progress-indicator/progress-indicator-circular.js").then(m=>m.default) },
            
            { path: "radio-button", load: () => import( "./radio-button/radio-button.js").then(m=>m.default) },

            { path: "scrim", load: () => import( "./scrim/scrim.js").then(m=>m.default) },

            { path: "segmented-button", load: () => import( "./segmented-button/segmented-button.js").then(m=>m.default) },
            { path: "segmented-button-single-select", load: () => import( "./segmented-button/segmented-button-single-select.js").then(m=>m.default) },
            { path: "segmented-button-multi-select", load: () => import( "./segmented-button/segmented-button-multi-select.js").then(m=>m.default) },
            
            { path: "sheet", load: () => import( "./sheet/sheet.js").then(m=>m.default) },
            { path: "sheet-north", load: () => import( "./sheet/sheet-north.js").then(m=>m.default) },
            { path: "sheet-north-modal", load: () => import( "./sheet/sheet-north-modal.js").then(m=>m.default) },
            { path: "sheet-east", load: () => import( "./sheet/sheet-east.js").then(m=>m.default) },
            { path: "sheet-east-modal", load: () => import( "./sheet/sheet-east-modal.js").then(m=>m.default) },
            { path: "sheet-south", load: () => import( "./sheet/sheet-south.js").then(m=>m.default) },
            { path: "sheet-south-modal", load: () => import( "./sheet/sheet-south-modal.js").then(m=>m.default) },
            { path: "sheet-west", load: () => import( "./sheet/sheet-west.js").then(m=>m.default) },
            { path: "sheet-west-modal", load: () => import( "./sheet/sheet-west-modal.js").then(m=>m.default) },
            { path: "sheet-center", load: () => import( "./sheet/sheet-center.js").then(m=>m.default) },

            { path: "side-sheet", load: () => import( "./side-sheet/side-sheet.js").then(m=>m.default) },
            { path: "side-sheet-modal", load: () => import( "./side-sheet/side-sheet-modal.js").then(m=>m.default) },

            { path: "slider", load: () => import( "./slider/slider.js").then(m=>m.default) },
            { path: "slider-centered", load: () => import( "./slider/slider-centered.js").then(m=>m.default) },
            { path: "slider-continuous", load: () => import( "./slider/slider-continuous.js").then(m=>m.default) },
            { path: "slider-discrete", load: () => import( "./slider/slider-discrete.js").then(m=>m.default) },
            { path: "slider-range-selection", load: () => import( "./slider/slider-range-selection.js").then(m=>m.default) },
            
            { path: "snackbar", load: () => import( "./snackbar/snackbar.js").then(m=>m.default) },

            { path: "switch", load: () => import( "./switch/switch.js").then(m=>m.default) },

            { path: "tab", load: () => import( "./tabs/tab.js").then(m=>m.default) },
            { path: "tabs", load: () => import( "./tabs/tabs.js").then(m=>m.default) },
            { path: "tabs-primary", load: () => import( "./tabs/tabs-primary.js").then(m=>m.default) },
            { path: "tabs-secondary", load: () => import( "./tabs/tabs-secondary.js").then(m=>m.default) },
            
            { path: "text-field", load: () => import( "./text-field/text-field.js").then(m=>m.default) },
            { path: "text-field-outlined", load: () => import( "./text-field/text-field-outlined.js").then(m=>m.default) },
            { path: "text-field-filled", load: () => import( "./text-field/text-field-filled.js").then(m=>m.default) },

            { path: "tooltip", load: () => import( "./tooltip/tooltip.js").then(m=>m.default) },

            { path: "top-app-bar", load: () => import( "./top-app-bar/top-app-bar.js").then(m=>m.default) },

            { path: "tree-item", load: () => import( "./tree/tree-item.js").then(m=>m.default) },
            { path: "tree-row", load: () => import( "./tree/tree-row.js").then(m=>m.default) },
            { path: "tree", load: () => import( "./tree/tree.js").then(m=>m.default) },

            { path: "test", load: () => import( "./test/test.js").then(m=>m.default) },
            
            { path: "datetime-picker", load: () => import( "./datetime-picker/datetime-picker.js").then(m=>m.default) },
            { path: "datetime-picker-modal", load: () => import( "./datetime-picker/datetime-picker-modal.js").then(m=>m.default) },

            { path: "date-picker", load: () => import( "./date-picker/date-picker.js").then(m=>m.default) },
            { path: "date-picker-modal", load: () => import( "./date-picker/date-picker-modal.js").then(m=>m.default) },
            
            { path: "time-picker", load: () => import( "./time-picker/time-picker.js").then(m=>m.default) },
            { path: "time-picker-modal", load: () => import( "./time-picker/time-picker-modal.js").then(m=>m.default) },
            
            { path: "week-picker", load: () => import( "./week-picker/week-picker.js").then(m=>m.default) },
            { path: "week-picker-modal", load: () => import( "./week-picker/week-picker-modal.js").then(m=>m.default) },
            
            { path: "month-picker", load: () => import( "./month-picker/month-picker.js").then(m=>m.default) },
            { path: "month-picker-modal", load: () => import( "./month-picker/month-picker-modal.js").then(m=>m.default) },
        ],
    },
    {
        path: "*",
        component: DemoError,
    },
];
Router.use(routes);
