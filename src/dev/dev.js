import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

import DevBadgeComponent from "./badge/badge.js";
import DevBottomAppBarComponent from "./bottom-app-bar/bottom-app-bar.js";
import DevBottomSheetComponent from "./bottom-sheet/bottom-sheet.js";
import DevButtonComponent from "./button/button.js";
import DevCardComponent from "./card/card.js";
import DevChartComponent from "./chart/chart.js";
import DevCheckboxComponent from "./checkbox/checkbox.js";
import DevChipsComponent from "./chips/chips.js";
import DevColorComponent from "./color/color.js";
import DevColorPickerComponent from "./color-picker/color-picker.js";
import DevDataTableComponent from "./data-table/data-table.js";
import DevDatePickerComponent from "./date-picker/date-picker.js";
import DevDatetimePickerComponent from "./datetime-picker/datetime-picker.js";
import DevDialogComponent from "./dialog/dialog.js";
import DevEmojiComponent from "./emoji/emoji.js";
import DevEmojiPickerComponent from "./emoji-picker/emoji-picker.js";
import DevFabComponent from "./fab/fab.js";
import DevForm2Component from "./form/form2.js";
import DevFormComponent from "./form/form.js";
import DevGestureComponent from "./gesture/gesture.js";
import DevIconButtonComponent from "./icon-button/icon-button.js";
import DevIconComponent from "./icon/icon.js";
import DevImageComponent from "./image/image.js";
import DevListComponent from "./list/list.js";
import DevLocalizationComponent from "./localization/localization.js";
import DevMainComponent from "./main/main.js";
import DevMarkdownComponent from "./markdown/markdown.js";
import DevMenuComponent from "./menu/menu.js";
import DevMonthPickerComponent from "./month-picker/month-picker.js";
import DevNavigationBarComponent from "./navigation-bar/navigation-bar.js";
import DevNavigationComponent from "./navigation/navigation.js";
import DevNavigationDrawerComponent from "./navigation-drawer/navigation-drawer.js";
import DevNavigationRailComponent from "./navigation-rail/navigation-rail.js";
import DevPaginationComponent from "./pagination/pagination.js";
import DevPickerComponent from "./picker/picker.js";
import DevPopperComponent from "./popper/popper.js";
import DevProgressIndicatorComponent from "./progress-indicator/progress-indicator.js";
import DevRadioButtonComponent from "./radio-button/radio-button.js";
import DevRippleComponent from "./ripple/ripple.js";
import DevSegmentedButtonComponent from "./segmented-button/segmented-button.js";
import DevSelectionComponent from "./selection/selection.js";
import DevSheetComponent from "./sheet/sheet.js";
import DevSideSheetComponent from "./side-sheet/side-sheet.js";
import DevSliderComponent from "./slider/slider.js";
import DevSnackbarComponent from "./snackbar/snackbar.js";
import DevSwitchComponent from "./switch/switch.js";
import DevTabsComponent from "./tabs/tabs.js";
import DevTextField2Component from "./text-field/text-field2.js";
import DevTextField3Component from "./text-field/text-field3.js";
import DevTextFieldComponent from "./text-field/text-field.js";
import DevTimePickerComponent from "./time-picker/time-picker.js";
import DevTooltipComponent from "./tooltip/tooltip.js";
import DevTopAppBarComponent from "./top-app-bar/top-app-bar.js";
import DevTreeComponent from "./tree/tree.js";
import DevVirtualComponent from "./virtual/virtual.js";
import DevWeekPickerComponent from "./week-picker/week-picker.js";

const routes = [
    {
        path: "",
        component: DevMainComponent,
        children: [
            { path: "badge", component: DevBadgeComponent },
            { path: "bottom-app-bar", component: DevBottomAppBarComponent },
            { path: "bottom-sheet", component: DevBottomSheetComponent },
            { path: "button", component: DevButtonComponent },
            { path: "card", component: DevCardComponent },
            { path: "chart", component: DevChartComponent },
            { path: "checkbox", component: DevCheckboxComponent },
            { path: "chips", component: DevChipsComponent },
            { path: "color-picker", component: DevColorPickerComponent },
            { path: "color", component: DevColorComponent },
            { path: "data-table", component: DevDataTableComponent },
            { path: "date-picker", component: DevDatePickerComponent },
            { path: "datetime-picker", component: DevDatetimePickerComponent },
            { path: "dialog", component: DevDialogComponent },
            { path: "emoji-picker", component: DevEmojiPickerComponent },
            { path: "emoji", component: DevEmojiComponent },
            { path: "fab", component: DevFabComponent },
            { path: "form", component: DevFormComponent },
            { path: "form2", component: DevForm2Component },
            { path: "gesture", component: DevGestureComponent },
            { path: "icon-button", component: DevIconButtonComponent },
            { path: "icon", component: DevIconComponent },
            { path: "image", component: DevImageComponent },
            { path: "list", component: DevListComponent },
            { path: "localization", component: DevLocalizationComponent },
            { path: "markdown", component: DevMarkdownComponent },
            { path: "menu", component: DevMenuComponent },
            { path: "month-picker", component: DevMonthPickerComponent },
            { path: "navigation-bar", component: DevNavigationBarComponent },
            { path: "navigation-drawer", component: DevNavigationDrawerComponent },
            { path: "navigation-rail", component: DevNavigationRailComponent },
            { path: "navigation", component: DevNavigationComponent },
            { path: "pagination", component: DevPaginationComponent },
            { path: "picker", component: DevPickerComponent },
            { path: "popper", component: DevPopperComponent },
            { path: "progress-indicator", component: DevProgressIndicatorComponent },
            { path: "radio-button", component: DevRadioButtonComponent },
            { path: "ripple", component: DevRippleComponent },
            { path: "segmented-button", component: DevSegmentedButtonComponent },
            { path: "selection", component: DevSelectionComponent },
            { path: "sheet", component: DevSheetComponent },
            { path: "side-sheet", component: DevSideSheetComponent },
            { path: "slider", component: DevSliderComponent },
            { path: "snackbar", component: DevSnackbarComponent },
            { path: "switch", component: DevSwitchComponent },
            { path: "tabs", component: DevTabsComponent },
            { path: "text-field", component: DevTextFieldComponent },
            { path: "text-field2", component: DevTextField2Component },
            { path: "text-field3", component: DevTextField3Component },
            { path: "time-picker", component: DevTimePickerComponent },
            { path: "tooltip", component: DevTooltipComponent },
            { path: "top-app-bar", component: DevTopAppBarComponent },
            { path: "tree", component: DevTreeComponent },
            { path: "virtual", component: DevVirtualComponent },
            { path: "week-picker", component: DevWeekPickerComponent },
        ],
    },
    { path: "*", component: DevMainComponent },
];

MDRouter.init(routes);
