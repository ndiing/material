import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

import DevAttributeObserver from "./attribute-observer/attribute-observer.js";
import DevBadge from "./badge/badge.js";
import DevBottomAppBar from "./bottom-app-bar/bottom-app-bar.js";
import DevBottomSheet from "./bottom-sheet/bottom-sheet.js";
import DevButton from "./button/button.js";
import DevCard from "./card/card.js";
import DevCheckbox from "./checkbox/checkbox.js";
import DevChip from "./chip/chip.js";
import DevChips from "./chips/chips.js";
import DevColor from "./color/color.js";
import DevColorField from "./color-field/color-field.js";
import DevColorPicker from "./color-picker/color-picker.js";
import DevComponent from "./component/component.js";
import DevDataTable from "./data-table/data-table.js";
import DevDataTableItem from "./data-table-item/data-table-item.js";
import DevDateField from "./date-field/date-field.js";
import DevDatePicker from "./date-picker/date-picker.js";
import DevDatetimeField from "./datetime-field/datetime-field.js";
import DevDatetimePicker from "./datetime-picker/datetime-picker.js";
import DevDialog from "./dialog/dialog.js";
import DevDivider from "./divider/divider.js";
import DevEmoji from "./emoji/emoji.js";
import DevEmojiPicker from "./emoji-picker/emoji-picker.js";
import DevFab from "./fab/fab.js";
import DevForm from "./form/form.js";
import DevFunctions from "./functions/functions.js";
import DevGesture from "./gesture/gesture.js";
import DevIcon from "./icon/icon.js";
import DevIconButton from "./icon-button/icon-button.js";
import DevImage from "./image/image.js";
import DevLayout from "./layout/layout.js";
import DevList from "./list/list.js";
import DevListItem from "./list-item/list-item.js";
import DevLocalization from "./localization/localization.js";
import DevMain from "./main/main.js";
import DevMarkdown from "./markdown/markdown.js";
import DevMediaObserver from "./media-observer/media-observer.js";
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
import DevProgress from "./progress/progress.js";
import DevProgressIndicator from "./progress-indicator/progress-indicator.js";
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
import DevTextareaField from "./textarea-field/textarea-field.js";
import DevTextField from "./text-field/text-field.js";
import DevTimeField from "./time-field/time-field.js";
import DevTimePicker from "./time-picker/time-picker.js";
import DevToolbar from "./toolbar/toolbar.js";
import DevTooltip from "./tooltip/tooltip.js";
import DevTopAppBar from "./top-app-bar/top-app-bar.js";
import DevTree from "./tree/tree.js";
import DevTreeItem from "./tree-item/tree-item.js";
import DevVirtual from "./virtual/virtual.js";
import DevWeekField from "./week-field/week-field.js";
import DevWeekPicker from "./week-picker/week-picker.js";
import DevBox from "./box/box.js";

const routes = [
    {
        path: "",
        component: DevMain,
        children: [
            { component: DevBox, path: "box" },
            { component: DevAttributeObserver, path: "attribute-observer" },
            { component: DevBadge, path: "badge" },
            { component: DevBottomAppBar, path: "bottom-app-bar" },
            { component: DevBottomSheet, path: "bottom-sheet" },
            { component: DevButton, path: "button" },
            { component: DevCard, path: "card" },
            { component: DevCheckbox, path: "checkbox" },
            { component: DevChip, path: "chip" },
            { component: DevChips, path: "chips" },
            { component: DevColor, path: "color" },
            { component: DevColorField, path: "color-field" },
            { component: DevColorPicker, path: "color-picker" },
            { component: DevComponent, path: "component" },
            { component: DevDataTable, path: "data-table" },
            { component: DevDataTableItem, path: "data-table-item" },
            { component: DevDateField, path: "date-field" },
            { component: DevDatePicker, path: "date-picker" },
            { component: DevDatetimeField, path: "datetime-field" },
            { component: DevDatetimePicker, path: "datetime-picker" },
            { component: DevDialog, path: "dialog" },
            { component: DevDivider, path: "divider" },
            { component: DevEmoji, path: "emoji" },
            { component: DevEmojiPicker, path: "emoji-picker" },
            { component: DevFab, path: "fab" },
            { component: DevForm, path: "form" },
            { component: DevFunctions, path: "functions" },
            { component: DevGesture, path: "gesture" },
            { component: DevIcon, path: "icon" },
            { component: DevIconButton, path: "icon-button" },
            { component: DevImage, path: "image" },
            { component: DevLayout, path: "layout" },
            { component: DevList, path: "list" },
            { component: DevListItem, path: "list-item" },
            { component: DevLocalization, path: "localization" },
            { component: DevMarkdown, path: "markdown" },
            { component: DevMediaObserver, path: "media-observer" },
            { component: DevMenu, path: "menu" },
            { component: DevMonthField, path: "month-field" },
            { component: DevMonthPicker, path: "month-picker" },
            { component: DevNavigationBar, path: "navigation-bar" },
            { component: DevNavigationDrawer, path: "navigation-drawer" },
            { component: DevNavigationRail, path: "navigation-rail" },
            { component: DevNumberField, path: "number-field" },
            { component: DevObserver, path: "observer" },
            { component: DevPagination, path: "pagination" },
            { component: DevPasswordField, path: "password-field" },
            { component: DevPopper, path: "popper" },
            { component: DevProgress, path: "progress" },
            { component: DevProgressIndicator, path: "progress-indicator" },
            { component: DevRadioButton, path: "radio-button" },
            { component: DevRipple, path: "ripple" },
            { component: DevRouter, path: "router" },
            // { component: DevScrim, path: "scrim" },
            { component: DevSearchField, path: "search-field" },
            { component: DevSegmentedButton, path: "segmented-button" },
            { component: DevSelectField, path: "select-field" },
            { component: DevSheet, path: "sheet" },
            { component: DevSideSheet, path: "side-sheet" },
            { component: DevSlider, path: "slider" },
            { component: DevSnackbar, path: "snackbar" },
            { component: DevStore, path: "store" },
            { component: DevSwitch, path: "switch" },
            { component: DevTabs, path: "tabs" },
            { component: DevTextareaField, path: "textarea-field" },
            { component: DevTextField, path: "text-field" },
            { component: DevTimeField, path: "time-field" },
            { component: DevTimePicker, path: "time-picker" },
            { component: DevToolbar, path: "toolbar" },
            { component: DevTooltip, path: "tooltip" },
            { component: DevTopAppBar, path: "top-app-bar" },
            { component: DevTree, path: "tree" },
            { component: DevTreeItem, path: "tree-item" },
            { component: DevVirtual, path: "virtual" },
            { component: DevWeekField, path: "week-field" },
            { component: DevWeekPicker, path: "week-picker" },
        ],
    },
    { path: "*", component: DevMain },
];

MDRouter.init(routes);
