import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

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
// import DevTemplate from "./template/template.js";
import DevMarkdown from "./markdown/markdown.js";
import DevDivider from "./divider/divider.js";
// import DevSpacer from "./spacer/spacer.js";
import DevIcon from "./icon/icon.js";
import DevEmoji from "./emoji/emoji.js";
import DevImage from "./image/image.js";
import DevBadge from "./badge/badge.js";
import DevButton from "./button/button.js";
import DevIconButton from "./icon-button/icon-button.js";
import DevSegmentedButton from "./segmented-button/segmented-button.js";
import DevFab from "./fab/fab.js";
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
import DevToolbar from "./toolbar/toolbar.js";
import DevCard from "./card/card.js";
import DevScrim from "./scrim/scrim.js";
import DevSheet from "./sheet/sheet.js";
import DevDialog from "./dialog/dialog.js";
import DevTopAppBar from "./top-app-bar/top-app-bar.js";
import DevSideSheet from "./side-sheet/side-sheet.js";
import DevBottomSheet from "./bottom-sheet/bottom-sheet.js";
import DevSnackbar from "./snackbar/snackbar.js";
import DevTooltip from "./tooltip/tooltip.js";
import DevBottomAppBar from "./bottom-app-bar/bottom-app-bar.js";
import DevDatetimePicker from "./datetime-picker/datetime-picker.js";
import DevDatePicker from "./date-picker/date-picker.js";
import DevMonthPicker from "./month-picker/month-picker.js";
import DevTimePicker from "./time-picker/time-picker.js";
import DevWeekPicker from "./week-picker/week-picker.js";
import DevColorPicker from "./color-picker/color-picker.js";
import DevEmojiPicker from "./emoji-picker/emoji-picker.js";
import DevListItem from "./list-item/list-item.js";
import DevList from "./list/list.js";
import DevTreeItem from "./tree-item/tree-item.js";
import DevTree from "./tree/tree.js";
import DevChip from "./chip/chip.js";
import DevChips from "./chips/chips.js";
import DevNavigationBar from "./navigation-bar/navigation-bar.js";
import DevNavigationDrawer from "./navigation-drawer/navigation-drawer.js";
import DevNavigationRail from "./navigation-rail/navigation-rail.js";
import DevMenu from "./menu/menu.js";
import DevTabs from "./tabs/tabs.js";
import DevPagination from "./pagination/pagination.js";
import DevDataTableItem from "./data-table-item/data-table-item.js";
// import DevDataTableColumnCell from "./data-table-column-cell/data-table-column-cell.js";
// import DevDataTableRowCell from "./data-table-row-cell/data-table-row-cell.js";
import DevDataTable from "./data-table/data-table.js";

import DevMain from "./main/main.js";

const routes = [
    {
        path: "",
        component: DevMain,
        children: [
            { component: DevObserver, path: "observer" },
            { component: DevMediaObserver, path: "media-observer" },
            { component: DevAttributeObserver, path: "attribute-observer" },
            { component: DevStore, path: "store" },
            { component: DevRouter, path: "router" },
            { component: DevLocalization, path: "localization" },
            { component: DevColor, path: "color" },
            { component: DevProgress, path: "progress" },
            { component: DevFunctions, path: "functions" },
            { component: DevRipple, path: "ripple" },
            { component: DevPopper, path: "popper" },
            { component: DevGesture, path: "gesture" },
            { component: DevVirtual, path: "virtual" },
            { component: DevComponent, path: "component" },
            // { component: DevTemplate, path: "template" },
            { component: DevMarkdown, path: "markdown" },
            { component: DevDivider, path: "divider" },
            // { component: DevSpacer, path: "spacer" },
            { component: DevIcon, path: "icon" },
            { component: DevEmoji, path: "emoji" },
            { component: DevImage, path: "image" },
            { component: DevBadge, path: "badge" },
            { component: DevButton, path: "button" },
            { component: DevIconButton, path: "icon-button" },
            { component: DevSegmentedButton, path: "segmented-button" },
            { component: DevFab, path: "fab" },
            { component: DevForm, path: "form" },
            { component: DevCheckbox, path: "checkbox" },
            { component: DevRadioButton, path: "radio-button" },
            { component: DevSwitch, path: "switch" },
            { component: DevSlider, path: "slider" },
            { component: DevTextField, path: "text-field" },
            { component: DevDatetimeField, path: "datetime-field" },
            { component: DevDateField, path: "date-field" },
            { component: DevMonthField, path: "month-field" },
            { component: DevWeekField, path: "week-field" },
            { component: DevTimeField, path: "time-field" },
            { component: DevColorField, path: "color-field" },
            { component: DevNumberField, path: "number-field" },
            { component: DevSearchField, path: "search-field" },
            { component: DevPasswordField, path: "password-field" },
            { component: DevTextareaField, path: "textarea-field" },
            { component: DevSelectField, path: "select-field" },
            { component: DevProgressIndicator, path: "progress-indicator" },
            { component: DevToolbar, path: "toolbar" },
            { component: DevCard, path: "card" },
            // { component: DevScrim, path: "scrim" },
            { component: DevSheet, path: "sheet" },
            { component: DevDialog, path: "dialog" },
            { component: DevTopAppBar, path: "top-app-bar" },
            { component: DevSideSheet, path: "side-sheet" },
            { component: DevBottomSheet, path: "bottom-sheet" },
            { component: DevSnackbar, path: "snackbar" },
            { component: DevTooltip, path: "tooltip" },
            { component: DevBottomAppBar, path: "bottom-app-bar" },
            { component: DevDatetimePicker, path: "datetime-picker" },
            { component: DevDatePicker, path: "date-picker" },
            { component: DevMonthPicker, path: "month-picker" },
            { component: DevTimePicker, path: "time-picker" },
            { component: DevWeekPicker, path: "week-picker" },
            { component: DevColorPicker, path: "color-picker" },
            { component: DevEmojiPicker, path: "emoji-picker" },
            { component: DevListItem, path: "list-item" },
            { component: DevList, path: "list" },
            { component: DevTreeItem, path: "tree-item" },
            { component: DevTree, path: "tree" },
            { component: DevChip, path: "chip" },
            { component: DevChips, path: "chips" },
            { component: DevNavigationBar, path: "navigation-bar" },
            { component: DevNavigationDrawer, path: "navigation-drawer" },
            { component: DevNavigationRail, path: "navigation-rail" },
            { component: DevMenu, path: "menu" },
            { component: DevTabs, path: "tabs" },
            { component: DevPagination, path: "pagination" },
            { component: DevDataTableItem, path: "data-table-item" },
            // { component: DevDataTableColumnCell, path: "data-table-column-cell" },
            // { component: DevDataTableRowCell, path: "data-table-row-cell" },
            { component: DevDataTable, path: "data-table" },
        ],
    },
    { path: "*", component: DevMain },
];

MDRouter.init(routes);
