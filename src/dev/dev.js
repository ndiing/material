import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

import DevMain from "./main/main.js";
import DevAttributeObserver from "./attribute-observer/attribute-observer.js";
import DevMediaObserver from "./media-observer/media-observer.js";
import DevBadge from "./badge/badge.js";
import DevBottomAppBar from "./bottom-app-bar/bottom-app-bar.js";
import DevBottomSheet from "./bottom-sheet/bottom-sheet.js";
import DevButton from "./button/button.js";
import DevCard from "./card/card.js";
import DevCheckbox from "./checkbox/checkbox.js";
import DevChip from "./chip/chip.js";
import DevChips from "./chips/chips.js";
import DevColorField from "./color-field/color-field.js";
import DevColorPicker from "./color-picker/color-picker.js";
import DevColor from "./color/color.js";
import DevComponent from "./component/component.js";
import DevDataTableItem from "./data-table-item/data-table-item.js";
import DevDataTable from "./data-table/data-table.js";
import DevDateField from "./date-field/date-field.js";
import DevDatePicker from "./date-picker/date-picker.js";
import DevDatetimeField from "./datetime-field/datetime-field.js";
import DevDatetimePicker from "./datetime-picker/datetime-picker.js";
import DevDialog from "./dialog/dialog.js";
import DevEmojiPicker from "./emoji-picker/emoji-picker.js";
import DevEmoji from "./emoji/emoji.js";
import DevFab from "./fab/fab.js";
import DevForm from "./form/form.js";
import DevForm2 from "./form/form2.js";
import DevFunctions from "./functions/functions.js";
import DevGesture from "./gesture/gesture.js";
import DevIconButton from "./icon-button/icon-button.js";
import DevIcon from "./icon/icon.js";
import DevImage from "./image/image.js";
import DevListItem from "./list-item/list-item.js";
import DevList from "./list/list.js";
import DevLocalization from "./localization/localization.js";
import DevMarkdown from "./markdown/markdown.js";
import DevMenu from "./menu/menu.js";
import DevMonthField from "./month-field/month-field.js";
import DevMonthPicker from "./month-picker/month-picker.js";
import DevNavigationBar from "./navigation-bar/navigation-bar.js";
import DevNavigationDrawer from "./navigation-drawer/navigation-drawer.js";
import DevNavigationRail from "./navigation-rail/navigation-rail.js";
import DevNumberField from "./number-field/number-field.js";
import DevObserver from "./observer/observer.js";
import DevPagination from "./pagination/pagination.js";
import DevPasswordField from "./password-field/password-field.js";
import DevPopper from "./popper/popper.js";
import DevProgressIndicator from "./progress-indicator/progress-indicator.js";
import DevProgress from "./progress/progress.js";
import DevRadioButton from "./radio-button/radio-button.js";
import DevRipple from "./ripple/ripple.js";
import DevRouter from "./router/router.js";
import DevScrim from "./scrim/scrim.js";
import DevSearchField from "./search-field/search-field.js";
import DevSegmentedButton from "./segmented-button/segmented-button.js";
import DevSelectField from "./select-field/select-field.js";
import DevSheet from "./sheet/sheet.js";
import DevSideSheet from "./side-sheet/side-sheet.js";
import DevSlider from "./slider/slider.js";
import DevSnackbar from "./snackbar/snackbar.js";
import DevStore from "./store/store.js";
import DevSwitch from "./switch/switch.js";
import DevTabs from "./tabs/tabs.js";
import DevTextField from "./text-field/text-field.js";
import DevTextareaField from "./textarea-field/textarea-field.js";
import DevTimeField from "./time-field/time-field.js";
import DevTimePicker from "./time-picker/time-picker.js";
import DevTooltip from "./tooltip/tooltip.js";
import DevTopAppBar from "./top-app-bar/top-app-bar.js";
import DevTreeItem from "./tree-item/tree-item.js";
import DevTree from "./tree/tree.js";
import DevVirtual from "./virtual/virtual.js";
import DevWeekField from "./week-field/week-field.js";
import DevWeekPicker from "./week-picker/week-picker.js";
import DevExample from "./example/example.js";

const routes = [
    {
        path: "",
        component: DevMain,
        children: [
            { path: "example", component: DevExample },
            // { path: "attribute-observer", component: DevAttributeObserver },
            // { path: "media-observer", component: DevMediaObserver },
            { path: "badge", component: DevBadge },
            { path: "bottom-app-bar", component: DevBottomAppBar },
            { path: "bottom-sheet", component: DevBottomSheet },
            { path: "button", component: DevButton },
            { path: "card", component: DevCard },
            { path: "checkbox", component: DevCheckbox },
            { path: "chip", component: DevChip },
            { path: "chips", component: DevChips },
            { path: "color-field", component: DevColorField },
            { path: "color-picker", component: DevColorPicker },
            { path: "color", component: DevColor },
            { path: "component", component: DevComponent },
            { path: "data-table-item", component: DevDataTableItem },
            { path: "data-table", component: DevDataTable },
            { path: "date-field", component: DevDateField },
            { path: "date-picker", component: DevDatePicker },
            { path: "datetime-field", component: DevDatetimeField },
            { path: "datetime-picker", component: DevDatetimePicker },
            { path: "dialog", component: DevDialog },
            { path: "emoji-picker", component: DevEmojiPicker },
            { path: "emoji", component: DevEmoji },
            { path: "fab", component: DevFab },
            { path: "form", component: DevForm },
            { path: "form2", component: DevForm2 },
            // { path: "functions", component: DevFunctions },
            // { path: "gesture", component: DevGesture },
            { path: "icon-button", component: DevIconButton },
            { path: "icon", component: DevIcon },
            { path: "image", component: DevImage },
            { path: "list-item", component: DevListItem },
            { path: "list", component: DevList },
            { path: "localization", component: DevLocalization },
            { path: "markdown", component: DevMarkdown },
            { path: "menu", component: DevMenu },
            { path: "month-field", component: DevMonthField },
            { path: "month-picker", component: DevMonthPicker },
            { path: "navigation-bar", component: DevNavigationBar },
            { path: "navigation-drawer", component: DevNavigationDrawer },
            { path: "navigation-rail", component: DevNavigationRail },
            { path: "number-field", component: DevNumberField },
            // { path: "observer", component: DevObserver },
            { path: "pagination", component: DevPagination },
            { path: "password-field", component: DevPasswordField },
            // { path: "popper", component: DevPopper },
            { path: "progress-indicator", component: DevProgressIndicator },
            // { path: "progress", component: DevProgress },
            { path: "radio-button", component: DevRadioButton },
            { path: "ripple", component: DevRipple },
            // { path: "router", component: DevRouter },
            // { path: "scrim", component: DevScrim },
            { path: "search-field", component: DevSearchField },
            { path: "segmented-button", component: DevSegmentedButton },
            { path: "select-field", component: DevSelectField },
            { path: "sheet", component: DevSheet },
            { path: "side-sheet", component: DevSideSheet },
            { path: "slider", component: DevSlider },
            { path: "snackbar", component: DevSnackbar },
            // { path: "store", component: DevStore },
            { path: "switch", component: DevSwitch },
            { path: "tabs", component: DevTabs },
            { path: "text-field", component: DevTextField },
            { path: "textarea-field", component: DevTextareaField },
            { path: "time-field", component: DevTimeField },
            { path: "time-picker", component: DevTimePicker },
            { path: "tooltip", component: DevTooltip },
            { path: "top-app-bar", component: DevTopAppBar },
            { path: "tree-item", component: DevTreeItem },
            { path: "tree", component: DevTree },
            // { path: "virtual", component: DevVirtual },
            { path: "week-field", component: DevWeekField },
            { path: "week-picker", component: DevWeekPicker },
        ],
    },
    { path: "*", component: DevMain },
];

MDRouter.init(routes);
