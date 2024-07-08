import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

const DevMainComponent = () => import( "./main/main.js").then(m=>m.default)
const DevIconComponent = () => import( "./icon/icon.js").then(m=>m.default)
const DevButtonComponent = () => import( "./button/button.js").then(m=>m.default)
const DevIconButtonComponent = () => import( "./icon-button/icon-button.js").then(m=>m.default)
const DevCardComponent = () => import( "./card/card.js").then(m=>m.default)
const DevSheetComponent = () => import( "./sheet/sheet.js").then(m=>m.default)
const DevDialogComponent = () => import( "./dialog/dialog.js").then(m=>m.default)
const DevTopAppBarComponent = () => import( "./top-app-bar/top-app-bar.js").then(m=>m.default)
const DevSideSheetComponent = () => import( "./side-sheet/side-sheet.js").then(m=>m.default)
const DevBottomSheetComponent = () => import( "./bottom-sheet/bottom-sheet.js").then(m=>m.default)
const DevSegmentedButtonComponent = () => import( "./segmented-button/segmented-button.js").then(m=>m.default)
const DevSnackbarComponent = () => import( "./snackbar/snackbar.js").then(m=>m.default)
const DevLocalizationComponent = () => import( "./localization/localization.js").then(m=>m.default)
const DevColorComponent = () => import( "./color/color.js").then(m=>m.default)
const DevRippleComponent = () => import( "./ripple/ripple.js").then(m=>m.default)
const DevTooltipComponent = () => import( "./tooltip/tooltip.js").then(m=>m.default)
const DevPickerComponent = () => import( "./picker/picker.js").then(m=>m.default)
const DevDatetimePickerComponent = () => import( "./datetime-picker/datetime-picker.js").then(m=>m.default)
const DevDatePickerComponent = () => import( "./date-picker/date-picker.js").then(m=>m.default)
const DevMonthPickerComponent = () => import( "./month-picker/month-picker.js").then(m=>m.default)
const DevTimePickerComponent = () => import( "./time-picker/time-picker.js").then(m=>m.default)
const DevWeekPickerComponent = () => import( "./week-picker/week-picker.js").then(m=>m.default)
const DevColorPickerComponent = () => import( "./color-picker/color-picker.js").then(m=>m.default)
const DevEmojiPickerComponent = () => import( "./emoji-picker/emoji-picker.js").then(m=>m.default)
const DevFabComponent = () => import( "./fab/fab.js").then(m=>m.default)
const DevBottomAppBarComponent = () => import( "./bottom-app-bar/bottom-app-bar.js").then(m=>m.default)
const DevImageComponent = () => import( "./image/image.js").then(m=>m.default)
const DevPopperComponent = () => import( "./popper/popper.js").then(m=>m.default)
const DevBadgeComponent = () => import( "./badge/badge.js").then(m=>m.default)
const DevFormComponent = () => import( "./form/form.js").then(m=>m.default)
const DevForm2Component = () => import( "./form/form2.js").then(m=>m.default)
const DevCheckboxComponent = () => import( "./checkbox/checkbox.js").then(m=>m.default)
const DevRadioButtonComponent = () => import( "./radio-button/radio-button.js").then(m=>m.default)
const DevSwitchComponent = () => import( "./switch/switch.js").then(m=>m.default)
const DevSliderComponent = () => import( "./slider/slider.js").then(m=>m.default)
const DevProgressIndicatorComponent = () => import( "./progress-indicator/progress-indicator.js").then(m=>m.default)
const DevGestureComponent = () => import( "./gesture/gesture.js").then(m=>m.default)
const DevListComponent = () => import( "./list/list.js").then(m=>m.default)
const DevSelectionComponent = () => import( "./selection/selection.js").then(m=>m.default)
const DevTreeComponent = () => import( "./tree/tree.js").then(m=>m.default)
const DevNavigationComponent = () => import( "./navigation/navigation.js").then(m=>m.default)
const DevNavigationBarComponent = () => import( "./navigation-bar/navigation-bar.js").then(m=>m.default)
const DevNavigationDrawerComponent = () => import( "./navigation-drawer/navigation-drawer.js").then(m=>m.default)
const DevNavigationRailComponent = () => import( "./navigation-rail/navigation-rail.js").then(m=>m.default)
const DevMenuComponent = () => import( "./menu/menu.js").then(m=>m.default)
const DevTabsComponent = () => import( "./tabs/tabs.js").then(m=>m.default)
const DevChipsComponent = () => import( "./chips/chips.js").then(m=>m.default)
const DevTextFieldComponent = () => import( "./text-field/text-field.js").then(m=>m.default)
const DevTextField2Component = () => import( "./text-field/text-field2.js").then(m=>m.default)
const DevTextField3Component = () => import( "./text-field/text-field3.js").then(m=>m.default)
const DevVirtualComponent = () => import( "./virtual/virtual.js").then(m=>m.default)
const DevEmojiComponent = () => import( "./emoji/emoji.js").then(m=>m.default)
const DevPaginationComponent = () => import( "./pagination/pagination.js").then(m=>m.default)
const DevDataTableComponent = () => import( "./data-table/data-table.js").then(m=>m.default)
const DevMarkdownComponent = () => import( "./markdown/markdown.js").then(m=>m.default)
const DevChartComponent = () => import( "./chart/chart.js").then(m=>m.default)

const routes = [
    {
        path: "",
        load: DevMainComponent,
        children: [
            { path: "icon", load: DevIconComponent },
            { path: "button", load: DevButtonComponent },
            { path: "icon-button", load: DevIconButtonComponent },
            { path: "card", load: DevCardComponent },
            { path: "sheet", load: DevSheetComponent },
            { path: "dialog", load: DevDialogComponent },
            { path: "top-app-bar", load: DevTopAppBarComponent },
            { path: "side-sheet", load: DevSideSheetComponent },
            { path: "bottom-sheet", load: DevBottomSheetComponent },
            { path: "segmented-button", load: DevSegmentedButtonComponent },
            { path: "snackbar", load: DevSnackbarComponent },
            { path: "localization", load: DevLocalizationComponent },
            { path: "color", load: DevColorComponent },
            { path: "ripple", load: DevRippleComponent },
            { path: "tooltip", load: DevTooltipComponent },
            { path: "picker", load: DevPickerComponent },
            { path: "datetime-picker", load: DevDatetimePickerComponent },
            { path: "date-picker", load: DevDatePickerComponent },
            { path: "month-picker", load: DevMonthPickerComponent },
            { path: "time-picker", load: DevTimePickerComponent },
            { path: "week-picker", load: DevWeekPickerComponent },
            { path: "color-picker", load: DevColorPickerComponent },
            { path: "emoji-picker", load: DevEmojiPickerComponent },
            { path: "fab", load: DevFabComponent },
            { path: "bottom-app-bar", load: DevBottomAppBarComponent },
            { path: "image", load: DevImageComponent },
            { path: "popper", load: DevPopperComponent },
            { path: "badge", load: DevBadgeComponent },
            { path: "form", load: DevFormComponent },
            { path: "checkbox", load: DevCheckboxComponent },
            { path: "radio-button", load: DevRadioButtonComponent },
            { path: "switch", load: DevSwitchComponent },
            { path: "slider", load: DevSliderComponent },
            { path: "form2", load: DevForm2Component },
            { path: "progress-indicator", load: DevProgressIndicatorComponent },
            { path: "gesture", load: DevGestureComponent },
            { path: "list", load: DevListComponent },
            { path: "selection", load: DevSelectionComponent },
            { path: "tree", load: DevTreeComponent },
            { path: "navigation", load: DevNavigationComponent },
            { path: "navigation-bar", load: DevNavigationBarComponent },
            { path: "navigation-drawer", load: DevNavigationDrawerComponent },
            { path: "navigation-rail", load: DevNavigationRailComponent },
            { path: "menu", load: DevMenuComponent },
            { path: "tabs", load: DevTabsComponent },
            { path: "chips", load: DevChipsComponent },
            { path: "text-field", load: DevTextFieldComponent },
            { path: "text-field2", load: DevTextField2Component },
            { path: "text-field3", load: DevTextField3Component },
            { path: "virtual", load: DevVirtualComponent },
            { path: "emoji", load: DevEmojiComponent },
            { path: "pagination", load: DevPaginationComponent },
            { path: "data-table", load: DevDataTableComponent },
            { path: "markdown", load: DevMarkdownComponent },
            { path: "chart", load: DevChartComponent },
        ],
    },
    { path: "*", load: DevMainComponent },
];

MDRouter.init(routes);
