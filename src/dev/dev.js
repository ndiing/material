import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

import DevMainComponent from "./main/main.js";
import DevIconComponent from "./icon/icon.js";
import DevButtonComponent from "./button/button.js";
import DevIconButtonComponent from "./icon-button/icon-button.js";
import DevCardComponent from "./card/card.js";
import DevSheetComponent from "./sheet/sheet.js";
import DevDialogComponent from "./dialog/dialog.js";
import DevTopAppBarComponent from "./top-app-bar/top-app-bar.js";
import DevSideSheetComponent from "./side-sheet/side-sheet.js";
import DevBottomSheetComponent from "./bottom-sheet/bottom-sheet.js";
import DevSegmentedButtonComponent from "./segmented-button/segmented-button.js";
import DevSnackbarComponent from "./snackbar/snackbar.js";
import DevLocalizationComponent from "./localization/localization.js";
import DevColorComponent from "./color/color.js";
import DevRippleComponent from "./ripple/ripple.js";
import DevTooltipComponent from "./tooltip/tooltip.js";
import DevPickerComponent from "./picker/picker.js";
import DevDatetimePickerComponent from "./datetime-picker/datetime-picker.js";
import DevDatePickerComponent from "./date-picker/date-picker.js";
import DevMonthPickerComponent from "./month-picker/month-picker.js";
import DevTimePickerComponent from "./time-picker/time-picker.js";
import DevWeekPickerComponent from "./week-picker/week-picker.js";
import DevColorPickerComponent from "./color-picker/color-picker.js";
import DevEmojiPickerComponent from "./emoji-picker/emoji-picker.js";
import DevFabComponent from "./fab/fab.js";
import DevBottomAppBarComponent from "./bottom-app-bar/bottom-app-bar.js";
import DevImageComponent from "./image/image.js";
import DevPopperComponent from "./popper/popper.js";
import DevBadgeComponent from "./badge/badge.js";
import DevFormComponent from "./form/form.js";
import DevForm2Component from "./form/form2.js";
import DevCheckboxComponent from "./checkbox/checkbox.js";
import DevRadioButtonComponent from "./radio-button/radio-button.js";
import DevSwitchComponent from "./switch/switch.js";
import DevSliderComponent from "./slider/slider.js";
import DevProgressIndicatorComponent from "./progress-indicator/progress-indicator.js";
import DevGestureComponent from "./gesture/gesture.js";
import DevListComponent from "./list/list.js";
import DevSelectionComponent from "./selection/selection.js";
import DevTreeComponent from "./tree/tree.js";
import DevNavigationComponent from "./navigation/navigation.js";
import DevNavigationBarComponent from "./navigation-bar/navigation-bar.js";
import DevNavigationDrawerComponent from "./navigation-drawer/navigation-drawer.js";
import DevNavigationRailComponent from "./navigation-rail/navigation-rail.js";
import DevMenuComponent from "./menu/menu.js";
import DevTabsComponent from "./tabs/tabs.js";
import DevChipsComponent from "./chips/chips.js";
import DevTextFieldComponent from "./text-field/text-field.js";
import DevTextField2Component from "./text-field/text-field2.js";
import DevTextField3Component from "./text-field/text-field3.js";
import DevVirtualComponent from "./virtual/virtual.js";
import DevEmojiComponent from "./emoji/emoji.js";
import DevPaginationComponent from "./pagination/pagination.js";
import DevDataTableComponent from "./data-table/data-table.js";
import DevMarkdownComponent from "./markdown/markdown.js";

const routes = [
    {
        path: "",
        component: DevMainComponent,
        children: [
            { path: "icon", component: DevIconComponent },
            { path: "button", component: DevButtonComponent },
            { path: "icon-button", component: DevIconButtonComponent },
            { path: "card", component: DevCardComponent },
            { path: "sheet", component: DevSheetComponent },
            { path: "dialog", component: DevDialogComponent },
            { path: "top-app-bar", component: DevTopAppBarComponent },
            { path: "side-sheet", component: DevSideSheetComponent },
            { path: "bottom-sheet", component: DevBottomSheetComponent },
            { path: "segmented-button", component: DevSegmentedButtonComponent },
            { path: "snackbar", component: DevSnackbarComponent },
            { path: "localization", component: DevLocalizationComponent },
            { path: "color", component: DevColorComponent },
            { path: "ripple", component: DevRippleComponent },
            { path: "tooltip", component: DevTooltipComponent },
            { path: "picker", component: DevPickerComponent },
            { path: "datetime-picker", component: DevDatetimePickerComponent },
            { path: "date-picker", component: DevDatePickerComponent },
            { path: "month-picker", component: DevMonthPickerComponent },
            { path: "time-picker", component: DevTimePickerComponent },
            { path: "week-picker", component: DevWeekPickerComponent },
            { path: "color-picker", component: DevColorPickerComponent },
            { path: "emoji-picker", component: DevEmojiPickerComponent },
            { path: "fab", component: DevFabComponent },
            { path: "bottom-app-bar", component: DevBottomAppBarComponent },
            { path: "image", component: DevImageComponent },
            { path: "popper", component: DevPopperComponent },
            { path: "badge", component: DevBadgeComponent },
            { path: "form", component: DevFormComponent },
            { path: "checkbox", component: DevCheckboxComponent },
            { path: "radio-button", component: DevRadioButtonComponent },
            { path: "switch", component: DevSwitchComponent },
            { path: "slider", component: DevSliderComponent },
            { path: "form2", component: DevForm2Component },
            { path: "progress-indicator", component: DevProgressIndicatorComponent },
            { path: "gesture", component: DevGestureComponent },
            { path: "list", component: DevListComponent },
            { path: "selection", component: DevSelectionComponent },
            { path: "tree", component: DevTreeComponent },
            { path: "navigation", component: DevNavigationComponent },
            { path: "navigation-bar", component: DevNavigationBarComponent },
            { path: "navigation-drawer", component: DevNavigationDrawerComponent },
            { path: "navigation-rail", component: DevNavigationRailComponent },
            { path: "menu", component: DevMenuComponent },
            { path: "tabs", component: DevTabsComponent },
            { path: "chips", component: DevChipsComponent },
            { path: "text-field", component: DevTextFieldComponent },
            { path: "text-field2", component: DevTextField2Component },
            { path: "text-field3", component: DevTextField3Component },
            { path: "virtual", component: DevVirtualComponent },
            { path: "emoji", component: DevEmojiComponent },
            { path: "pagination", component: DevPaginationComponent },
            { path: "data-table", component: DevDataTableComponent },
            { path: "markdown", component: DevMarkdownComponent },
        ],
    },
    { path: "*", component: DevMainComponent },
];

MDRouter.init(routes);
