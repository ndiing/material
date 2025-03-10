export default {
    path: "demo",
    load: () => import("./main/main.js").then((module) => module.default),
    children: [
        { path: "badge", load: () => import("./badge/badge.js").then((module) => module.default) },
        { path: "bottom-app-bar-no-fab", load: () => import("./bottom-app-bar/bottom-app-bar-no-fab.js").then((module) => module.default) },
        { path: "bottom-app-bar", load: () => import("./bottom-app-bar/bottom-app-bar.js").then((module) => module.default) },
        { path: "bottom-sheet-modal", load: () => import("./bottom-sheet/bottom-sheet-modal.js").then((module) => module.default) },
        { path: "bottom-sheet", load: () => import("./bottom-sheet/bottom-sheet.js").then((module) => module.default) },
        { path: "button-elevated", load: () => import("./button/button-elevated.js").then((module) => module.default) },
        { path: "button-filled-tonal", load: () => import("./button/button-filled-tonal.js").then((module) => module.default) },
        { path: "button-filled", load: () => import("./button/button-filled.js").then((module) => module.default) },
        { path: "button-outlined", load: () => import("./button/button-outlined.js").then((module) => module.default) },
        { path: "button", load: () => import("./button/button.js").then((module) => module.default) },
        { path: "card", load: () => import("./card/card.js").then((module) => module.default) },
        { path: "checkbox", load: () => import("./checkbox/checkbox.js").then((module) => module.default) },
        { path: "chips-multi-select", load: () => import("./chips/chips-multi-select.js").then((module) => module.default) },
        { path: "chips-single-select", load: () => import("./chips/chips-single-select.js").then((module) => module.default) },
        { path: "chips", load: () => import("./chips/chips.js").then((module) => module.default) },
        { path: "data-table-cell", load: () => import("./data-table/data-table-cell.js").then((module) => module.default) },
        { path: "data-table-checkbox", load: () => import("./data-table/data-table-checkbox.js").then((module) => module.default) },
        { path: "data-table-resizable", load: () => import("./data-table/data-table-resizable.js").then((module) => module.default) },
        { path: "data-table-sortable", load: () => import("./data-table/data-table-sortable.js").then((module) => module.default) },
        { path: "data-table-virtualize", load: () => import("./data-table/data-table-virtualize.js").then((module) => module.default) },
        { path: "data-table", load: () => import("./data-table/data-table.js").then((module) => module.default) },
        { path: "date-field", load: () => import("./date-field/date-field.js").then((module) => module.default) },
        { path: "date-picker-modal", load: () => import("./date-picker/date-picker-modal.js").then((module) => module.default) },
        { path: "date-picker", load: () => import("./date-picker/date-picker.js").then((module) => module.default) },
        { path: "datetime-field", load: () => import("./datetime-field/datetime-field.js").then((module) => module.default) },
        { path: "datetime-picker-modal", load: () => import("./datetime-picker/datetime-picker-modal.js").then((module) => module.default) },
        { path: "datetime-picker", load: () => import("./datetime-picker/datetime-picker.js").then((module) => module.default) },
        { path: "demo", load: () => import("./demo.js").then((module) => module.default) },
        { path: "dialog", load: () => import("./dialog/dialog.js").then((module) => module.default) },
        { path: "divider", load: () => import("./divider/divider.js").then((module) => module.default) },
        { path: "fab-extended", load: () => import("./fab/fab-extended.js").then((module) => module.default) },
        { path: "fab-large", load: () => import("./fab/fab-large.js").then((module) => module.default) },
        { path: "fab-small", load: () => import("./fab/fab-small.js").then((module) => module.default) },
        { path: "fab-unelevated", load: () => import("./fab/fab-unelevated.js").then((module) => module.default) },
        { path: "fab", load: () => import("./fab/fab.js").then((module) => module.default) },
        { path: "form", load: () => import("./form/form.js").then((module) => module.default) },
        { path: "icon", load: () => import("./icon/icon.js").then((module) => module.default) },
        { path: "icon-button-filled-tonal", load: () => import("./icon-button/icon-button-filled-tonal.js").then((module) => module.default) },
        { path: "icon-button-filled", load: () => import("./icon-button/icon-button-filled.js").then((module) => module.default) },
        { path: "icon-button-outlined", load: () => import("./icon-button/icon-button-outlined.js").then((module) => module.default) },
        { path: "icon-button", load: () => import("./icon-button/icon-button.js").then((module) => module.default) },
        { path: "image", load: () => import("./image/image.js").then((module) => module.default) },
        { path: "list-avatar", load: () => import("./list/list-avatar.js").then((module) => module.default) },
        { path: "list-checkbox", load: () => import("./list/list-checkbox.js").then((module) => module.default) },
        { path: "list-icon", load: () => import("./list/list-icon.js").then((module) => module.default) },
        { path: "list-image", load: () => import("./list/list-image.js").then((module) => module.default) },
        { path: "list-item", load: () => import("./list/list-item.js").then((module) => module.default) },
        { path: "list-multi-select", load: () => import("./list/list-multi-select.js").then((module) => module.default) },
        { path: "list-radio-button", load: () => import("./list/list-radio-button.js").then((module) => module.default) },
        { path: "list-row", load: () => import("./list/list-row.js").then((module) => module.default) },
        { path: "list-single-select", load: () => import("./list/list-single-select.js").then((module) => module.default) },
        { path: "list-switch", load: () => import("./list/list-switch.js").then((module) => module.default) },
        { path: "list-text", load: () => import("./list/list-text.js").then((module) => module.default) },
        { path: "list-video", load: () => import("./list/list-video.js").then((module) => module.default) },
        { path: "list-virtualize", load: () => import("./list/list-virtualize.js").then((module) => module.default) },
        { path: "list", load: () => import("./list/list.js").then((module) => module.default) },
        { path: "menu", load: () => import("./menu/menu.js").then((module) => module.default) },
        { path: "month-field", load: () => import("./month-field/month-field.js").then((module) => module.default) },
        { path: "month-picker-modal", load: () => import("./month-picker/month-picker-modal.js").then((module) => module.default) },
        { path: "month-picker", load: () => import("./month-picker/month-picker.js").then((module) => module.default) },
        { path: "navigation-bar-no-label", load: () => import("./navigation-bar/navigation-bar-no-label.js").then((module) => module.default) },
        { path: "navigation-bar", load: () => import("./navigation-bar/navigation-bar.js").then((module) => module.default) },
        { path: "navigation-drawer-modal", load: () => import("./navigation-drawer/navigation-drawer-modal.js").then((module) => module.default) },
        { path: "navigation-drawer", load: () => import("./navigation-drawer/navigation-drawer.js").then((module) => module.default) },
        { path: "navigation-rail-no-label", load: () => import("./navigation-rail/navigation-rail-no-label.js").then((module) => module.default) },
        { path: "navigation-rail", load: () => import("./navigation-rail/navigation-rail.js").then((module) => module.default) },
        { path: "number-field", load: () => import("./number-field/number-field.js").then((module) => module.default) },
        { path: "password-field", load: () => import("./password-field/password-field.js").then((module) => module.default) },
        { path: "progress-indicator-circular", load: () => import("./progress-indicator/progress-indicator-circular.js").then((module) => module.default) },
        { path: "progress-indicator", load: () => import("./progress-indicator/progress-indicator.js").then((module) => module.default) },
        { path: "radio-button", load: () => import("./radio-button/radio-button.js").then((module) => module.default) },
        { path: "scrim", load: () => import("./scrim/scrim.js").then((module) => module.default) },
        { path: "segmented-button-multi-select", load: () => import("./segmented-button/segmented-button-multi-select.js").then((module) => module.default) },
        { path: "segmented-button-single-select", load: () => import("./segmented-button/segmented-button-single-select.js").then((module) => module.default) },
        { path: "segmented-button", load: () => import("./segmented-button/segmented-button.js").then((module) => module.default) },
        { path: "sheet-center", load: () => import("./sheet/sheet-center.js").then((module) => module.default) },
        { path: "sheet-east-modal", load: () => import("./sheet/sheet-east-modal.js").then((module) => module.default) },
        { path: "sheet-east", load: () => import("./sheet/sheet-east.js").then((module) => module.default) },
        { path: "sheet-north-modal", load: () => import("./sheet/sheet-north-modal.js").then((module) => module.default) },
        { path: "sheet-north", load: () => import("./sheet/sheet-north.js").then((module) => module.default) },
        { path: "sheet-south-modal", load: () => import("./sheet/sheet-south-modal.js").then((module) => module.default) },
        { path: "sheet-south", load: () => import("./sheet/sheet-south.js").then((module) => module.default) },
        { path: "sheet-west-modal", load: () => import("./sheet/sheet-west-modal.js").then((module) => module.default) },
        { path: "sheet-west", load: () => import("./sheet/sheet-west.js").then((module) => module.default) },
        { path: "sheet", load: () => import("./sheet/sheet.js").then((module) => module.default) },
        { path: "side-sheet-modal", load: () => import("./side-sheet/side-sheet-modal.js").then((module) => module.default) },
        { path: "side-sheet", load: () => import("./side-sheet/side-sheet.js").then((module) => module.default) },
        { path: "slider-centered", load: () => import("./slider/slider-centered.js").then((module) => module.default) },
        { path: "slider-continuous", load: () => import("./slider/slider-continuous.js").then((module) => module.default) },
        { path: "slider-discrete", load: () => import("./slider/slider-discrete.js").then((module) => module.default) },
        { path: "slider-range-selection", load: () => import("./slider/slider-range-selection.js").then((module) => module.default) },
        { path: "slider", load: () => import("./slider/slider.js").then((module) => module.default) },
        { path: "snackbar", load: () => import("./snackbar/snackbar.js").then((module) => module.default) },
        { path: "switch", load: () => import("./switch/switch.js").then((module) => module.default) },
        { path: "tab", load: () => import("./tabs/tab.js").then((module) => module.default) },
        { path: "tabs-primary", load: () => import("./tabs/tabs-primary.js").then((module) => module.default) },
        { path: "tabs-secondary", load: () => import("./tabs/tabs-secondary.js").then((module) => module.default) },
        { path: "tabs", load: () => import("./tabs/tabs.js").then((module) => module.default) },
        { path: "test", load: () => import("./test/test.js").then((module) => module.default) },
        { path: "text-field-filled", load: () => import("./text-field/text-field-filled.js").then((module) => module.default) },
        { path: "text-field-outlined", load: () => import("./text-field/text-field-outlined.js").then((module) => module.default) },
        { path: "text-field", load: () => import("./text-field/text-field.js").then((module) => module.default) },
        { path: "time-field", load: () => import("./time-field/time-field.js").then((module) => module.default) },
        { path: "time-picker-modal", load: () => import("./time-picker/time-picker-modal.js").then((module) => module.default) },
        { path: "time-picker", load: () => import("./time-picker/time-picker.js").then((module) => module.default) },
        { path: "tooltip", load: () => import("./tooltip/tooltip.js").then((module) => module.default) },
        { path: "top-app-bar", load: () => import("./top-app-bar/top-app-bar.js").then((module) => module.default) },
        { path: "tree-item", load: () => import("./tree/tree-item.js").then((module) => module.default) },
        { path: "tree-row", load: () => import("./tree/tree-row.js").then((module) => module.default) },
        { path: "tree", load: () => import("./tree/tree.js").then((module) => module.default) },
        { path: "week-field", load: () => import("./week-field/week-field.js").then((module) => module.default) },
        { path: "week-picker-modal", load: () => import("./week-picker/week-picker-modal.js").then((module) => module.default) },
        { path: "week-picker", load: () => import("./week-picker/week-picker.js").then((module) => module.default) },
    ],
};
