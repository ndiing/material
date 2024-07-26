import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

// cdk
import DevObserver from "./observer/observer.js"
import DevMediaObserver from "./media-observer/media-observer.js"
import DevAttributeObserver from "./attribute-observer/attribute-observer.js"
import DevStore from "./store/store.js"
import DevRouter from "./router/router.js"
import DevLocalization from "./localization/localization.js"
import DevColor from "./color/color.js"
import DevProgress from "./progress/progress.js"
import DevFunctions from "./functions/functions.js"
import DevRipple from "./ripple/ripple.js"
import DevPopper from "./popper/popper.js"
import DevGesture from "./gesture/gesture.js"
import DevVirtual from "./virtual/virtual.js"
import DevComponent from "./component/component.js"
import DevTemplate from "./template/template.js"
// base
import DevLayoutItem from "./layout-item/layout-item.js"
import DevLayout from "./layout/layout.js"
import DevDivider from "./divider/divider.js"
import DevSpacer from "./spacer/spacer.js"
import DevIcon from "./icon/icon.js"
import DevEmoji from "./emoji/emoji.js"
import DevImage from "./image/image.js"
import DevBadge from "./badge/badge.js"
// button
import DevButton from "./button/button.js"
import DevIconButton from "./icon-button/icon-button.js"
import DevSegmentedButton from "./segmented-button/segmented-button.js"
import DevFab from "./fab/fab.js"
// form
import DevForm from "./form/form.js"
import DevCheckbox from "./checkbox/checkbox.js"
import DevRadioButton from "./radio-button/radio-button.js"
import DevSwitch from "./switch/switch.js"
import DevSlider from "./slider/slider.js"
import DevTextField from "./text-field/text-field.js"
import DevDatetimeField from "./datetime-field/datetime-field.js"
import DevDateField from "./date-field/date-field.js"
import DevMonthField from "./month-field/month-field.js"
import DevWeekField from "./week-field/week-field.js"
import DevTimeField from "./time-field/time-field.js"
import DevColorField from "./color-field/color-field.js"
import DevNumberField from "./number-field/number-field.js"
import DevSearchField from "./search-field/search-field.js"
import DevPasswordField from "./password-field/password-field.js"
import DevTextareaField from "./textarea-field/textarea-field.js"
import DevSelectField from "./select-field/select-field.js"
import DevProgressIndicator from "./progress-indicator/progress-indicator.js"
// card
import DevBlock from "./block/block.js"
import DevToolbar from "./toolbar/toolbar.js"
import DevCard from "./card/card.js"
import DevScrim from "./scrim/scrim.js"
import DevSheet from "./sheet/sheet.js"
import DevSheet2 from "./sheet/sheet2.js"
import DevDialog from "./dialog/dialog.js"
import DevTopAppBar from "./top-app-bar/top-app-bar.js"
import DevSideSheet from "./side-sheet/side-sheet.js"
import DevBottomSheet from "./bottom-sheet/bottom-sheet.js"
import DevSnackbar from "./snackbar/snackbar.js"
import DevTooltip from "./tooltip/tooltip.js"
import DevBottomAppBar from "./bottom-app-bar/bottom-app-bar.js"
// picker
import DevDatetimePicker from "./datetime-picker/datetime-picker.js"
import DevDatePicker from "./date-picker/date-picker.js"
import DevMonthPicker from "./month-picker/month-picker.js"
import DevTimePicker from "./time-picker/time-picker.js"
import DevWeekPicker from "./week-picker/week-picker.js"
import DevColorPicker from "./color-picker/color-picker.js"
import DevEmojiPicker from "./emoji-picker/emoji-picker.js"
// list
import DevListItem from "./list-item/list-item.js"
import DevList from "./list/list.js"
import DevList2 from "./list/list2.js"
import DevTree from "./tree/tree.js"
import DevChip from "./chip/chip.js"
import DevChips from "./chips/chips.js"
import DevNavigationBar from "./navigation-bar/navigation-bar.js"
import DevNavigationDrawer from "./navigation-drawer/navigation-drawer.js"
import DevNavigationRail from "./navigation-rail/navigation-rail.js"
import DevMenu from "./menu/menu.js"
import DevTabs from "./tabs/tabs.js"
// table
import DevPagination from "./pagination/pagination.js"
import DevDataTableItem from "./data-table-item/data-table-item.js"
import DevDataTable from "./data-table/data-table.js"
// main
import DevMain from "./main/main.js"

const routes = [
    {
        path: "",
        component: DevMain,
        children: [
            { component: DevBlock, path: "block" },
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
            { component: DevList2, path: "list2" },
            { component: DevListItem, path: "list-item" },
            { component: DevLocalization, path: "localization" },
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
            { component: DevSheet2, path: "sheet2" },
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
            { component: DevVirtual, path: "virtual" },
            { component: DevWeekField, path: "week-field" },
            { component: DevWeekPicker, path: "week-picker" },
        ],
    },
    { path: "*", component: DevMain },
];

MDRouter.init(routes);
