import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

// cdk
import DevObserver from "./observer/observer.js";
import DevMediaObserver from "./media-observer/media-observer.js";
import DevAttributeObserver from "./attribute-observer/attribute-observer.js";
import DevStore from "./store/store.js";
import DevRouter from "./router/router.js";
import DevLocalization from "./localization/localization.js";
import DevColor from "./color/color.js";
import DevProgress from "./progress/progress.js";
import DevFunctions from "./functions/functions.js";
import DevRipple from "./ripple/ripple.js";
import DevPopper from "./popper/popper.js";
import DevGesture from "./gesture/gesture.js";
import DevVirtual from "./virtual/virtual.js";
import DevComponent from "./component/component.js";
import DevTemplate from "./template/template.js";
// base
import DevLayoutItem from "./layout-item/layout-item.js";
import DevLayout from "./layout/layout.js";
import DevDivider from "./divider/divider.js";
import DevSpacer from "./spacer/spacer.js";
import DevIcon from "./icon/icon.js";
import DevEmoji from "./emoji/emoji.js";
import DevImage from "./image/image.js";
import DevBadge from "./badge/badge.js";
// button
import DevButton from "./button/button.js";
import DevIconButton from "./icon-button/icon-button.js";
import DevSegmentedButton from "./segmented-button/segmented-button.js";
import DevFab from "./fab/fab.js";
// form
import DevForm from "./form/form.js";
import DevCheckbox from "./checkbox/checkbox.js";
import DevRadioButton from "./radio-button/radio-button.js";
import DevSwitch from "./switch/switch.js";
import DevSlider from "./slider/slider.js";
import DevTextField from "./text-field/text-field.js";
import DevDatetimeField from "./datetime-field/datetime-field.js";
import DevDateField from "./date-field/date-field.js";
import DevMonthField from "./month-field/month-field.js";
import DevWeekField from "./week-field/week-field.js";
import DevTimeField from "./time-field/time-field.js";
import DevColorField from "./color-field/color-field.js";
import DevNumberField from "./number-field/number-field.js";
import DevSearchField from "./search-field/search-field.js";
import DevPasswordField from "./password-field/password-field.js";
import DevTextareaField from "./textarea-field/textarea-field.js";
import DevSelectField from "./select-field/select-field.js";
import DevProgressIndicator from "./progress-indicator/progress-indicator.js";
// card
import DevBlock from "./block/block.js";
import DevPane from "./pane/pane.js";
import DevToolbar from "./toolbar/toolbar.js";
import DevCard from "./card/card.js";
import DevScrim from "./scrim/scrim.js";
import DevDialog from "./dialog/dialog.js";
import DevSnackbar from "./snackbar/snackbar.js";
import DevTooltip from "./tooltip/tooltip.js";
import DevSheet from "./sheet/sheet.js";
import DevSideSheet from "./side-sheet/side-sheet.js";
import DevBottomSheet from "./bottom-sheet/bottom-sheet.js";
import DevTopAppBar from "./top-app-bar/top-app-bar.js";
import DevBottomAppBar from "./bottom-app-bar/bottom-app-bar.js";
// picker
import DevDatetimePicker from "./datetime-picker/datetime-picker.js";
import DevDatePicker from "./date-picker/date-picker.js";
import DevMonthPicker from "./month-picker/month-picker.js";
import DevTimePicker from "./time-picker/time-picker.js";
import DevWeekPicker from "./week-picker/week-picker.js";
import DevColorPicker from "./color-picker/color-picker.js";
import DevEmojiPicker from "./emoji-picker/emoji-picker.js";
// list
import DevChip from "./chip/chip.js";
import DevChips from "./chips/chips.js";
import DevListItem from "./list-item/list-item.js";
import DevList from "./list/list.js";
import DevTree from "./tree/tree.js";
import DevTabs from "./tabs/tabs.js";
import DevMenu from "./menu/menu.js";
import DevNavigationBar from "./navigation-bar/navigation-bar.js";
import DevNavigationDrawer from "./navigation-drawer/navigation-drawer.js";
import DevNavigationRail from "./navigation-rail/navigation-rail.js";
// table
import DevPagination from "./pagination/pagination.js";
import DevDataTableItem from "./data-table-item/data-table-item.js";
import DevDataTableColumnCell from "./data-table-column-cell/data-table-column-cell.js";
import DevDataTableRowCell from "./data-table-row-cell/data-table-row-cell.js";
import DevDataTable from "./data-table/data-table.js";
// main
import DevMain from "./main/main.js";

const routes = [
    {
        path: "",
        children: [
            { path: "observer", component: DevObserver },
            { path: "media-observer", component: DevMediaObserver },
            { path: "attribute-observer", component: DevAttributeObserver },
            { path: "store", component: DevStore },
            { path: "router", component: DevRouter },
            { path: "localization", component: DevLocalization },
            { path: "color", component: DevColor },
            { path: "progress", component: DevProgress },
            { path: "functions", component: DevFunctions },
            { path: "ripple", component: DevRipple },
            { path: "popper", component: DevPopper },
            { path: "gesture", component: DevGesture },
            { path: "virtual", component: DevVirtual },
            { path: "component", component: DevComponent },
            // { path: "template", component: DevTemplate },
            { path: "layout-item", component: DevLayoutItem },
            { path: "layout", component: DevLayout },
            { path: "divider", component: DevDivider },
            // { path: "spacer", component: DevSpacer },
            { path: "icon", component: DevIcon },
            { path: "emoji", component: DevEmoji },
            { path: "image", component: DevImage },
            { path: "badge", component: DevBadge },
            { path: "button", component: DevButton },
            { path: "icon-button", component: DevIconButton },
            { path: "segmented-button", component: DevSegmentedButton },
            { path: "fab", component: DevFab },
            { path: "form", component: DevForm },
            { path: "checkbox", component: DevCheckbox },
            { path: "radio-button", component: DevRadioButton },
            { path: "switch", component: DevSwitch },
            { path: "slider", component: DevSlider },
            { path: "text-field", component: DevTextField },
            { path: "datetime-field", component: DevDatetimeField },
            { path: "date-field", component: DevDateField },
            { path: "month-field", component: DevMonthField },
            { path: "week-field", component: DevWeekField },
            { path: "time-field", component: DevTimeField },
            { path: "color-field", component: DevColorField },
            { path: "number-field", component: DevNumberField },
            { path: "search-field", component: DevSearchField },
            { path: "password-field", component: DevPasswordField },
            { path: "textarea-field", component: DevTextareaField },
            { path: "select-field", component: DevSelectField },
            { path: "progress-indicator", component: DevProgressIndicator },
            { path: "block", component: DevBlock },
            // { path: "pane", component: DevPane },
            { path: "toolbar", component: DevToolbar },
            { path: "card", component: DevCard },
            // { path: "scrim", component: DevScrim },
            { path: "dialog", component: DevDialog },
            { path: "snackbar", component: DevSnackbar },
            { path: "tooltip", component: DevTooltip },
            { path: "sheet", component: DevSheet },
            { path: "side-sheet", component: DevSideSheet },
            { path: "bottom-sheet", component: DevBottomSheet },
            { path: "top-app-bar", component: DevTopAppBar },
            { path: "bottom-app-bar", component: DevBottomAppBar },
            { path: "datetime-picker", component: DevDatetimePicker },
            { path: "date-picker", component: DevDatePicker },
            { path: "month-picker", component: DevMonthPicker },
            { path: "time-picker", component: DevTimePicker },
            { path: "week-picker", component: DevWeekPicker },
            { path: "color-picker", component: DevColorPicker },
            { path: "emoji-picker", component: DevEmojiPicker },
            { path: "chip", component: DevChip },
            { path: "chips", component: DevChips },
            { path: "list-item", component: DevListItem },
            { path: "list", component: DevList },
            { path: "tree", component: DevTree },
            { path: "tabs", component: DevTabs },
            { path: "menu", component: DevMenu },
            { path: "navigation-bar", component: DevNavigationBar },
            { path: "navigation-drawer", component: DevNavigationDrawer },
            { path: "navigation-rail", component: DevNavigationRail },
            { path: "pagination", component: DevPagination },
            { path: "data-table-item", component: DevDataTableItem },
            // { path: "data-table-column-cell", component: DevDataTableColumnCell },
            // { path: "data-table-row-cell", component: DevDataTableRowCell },
            { path: "data-table", component: DevDataTable },
        ],
        component: DevMain,
    },
    {
        path: "*",
        component: DevMain,
    }
];

MDRouter.init(routes);
