import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

// cdk
const DevObserver = () => import("./observer/observer.js").then((m) => m.default);
const DevMediaObserver = () => import("./media-observer/media-observer.js").then((m) => m.default);
const DevAttributeObserver = () => import("./attribute-observer/attribute-observer.js").then((m) => m.default);
const DevStore = () => import("./store/store.js").then((m) => m.default);
const DevRouter = () => import("./router/router.js").then((m) => m.default);
const DevLocalization = () => import("./localization/localization.js").then((m) => m.default);
const DevColor = () => import("./color/color.js").then((m) => m.default);
const DevProgress = () => import("./progress/progress.js").then((m) => m.default);
const DevFunctions = () => import("./functions/functions.js").then((m) => m.default);
const DevRipple = () => import("./ripple/ripple.js").then((m) => m.default);
const DevPopper = () => import("./popper/popper.js").then((m) => m.default);
const DevGesture = () => import("./gesture/gesture.js").then((m) => m.default);
const DevVirtual = () => import("./virtual/virtual.js").then((m) => m.default);
const DevComponent = () => import("./component/component.js").then((m) => m.default);
const DevTemplate = () => import("./template/template.js").then((m) => m.default);
// base
const DevLayoutItem = () => import("./layout-item/layout-item.js").then((m) => m.default);
const DevLayout = () => import("./layout/layout.js").then((m) => m.default);
const DevDivider = () => import("./divider/divider.js").then((m) => m.default);
const DevSpacer = () => import("./spacer/spacer.js").then((m) => m.default);
const DevIcon = () => import("./icon/icon.js").then((m) => m.default);
const DevEmoji = () => import("./emoji/emoji.js").then((m) => m.default);
const DevImage = () => import("./image/image.js").then((m) => m.default);
const DevBadge = () => import("./badge/badge.js").then((m) => m.default);
// button
const DevButton = () => import("./button/button.js").then((m) => m.default);
const DevIconButton = () => import("./icon-button/icon-button.js").then((m) => m.default);
const DevSegmentedButton = () => import("./segmented-button/segmented-button.js").then((m) => m.default);
const DevFab = () => import("./fab/fab.js").then((m) => m.default);
// form
const DevForm = () => import("./form/form.js").then((m) => m.default);
const DevCheckbox = () => import("./checkbox/checkbox.js").then((m) => m.default);
const DevRadioButton = () => import("./radio-button/radio-button.js").then((m) => m.default);
const DevSwitch = () => import("./switch/switch.js").then((m) => m.default);
const DevSlider = () => import("./slider/slider.js").then((m) => m.default);
const DevTextField = () => import("./text-field/text-field.js").then((m) => m.default);
const DevDatetimeField = () => import("./datetime-field/datetime-field.js").then((m) => m.default);
const DevDateField = () => import("./date-field/date-field.js").then((m) => m.default);
const DevMonthField = () => import("./month-field/month-field.js").then((m) => m.default);
const DevWeekField = () => import("./week-field/week-field.js").then((m) => m.default);
const DevTimeField = () => import("./time-field/time-field.js").then((m) => m.default);
const DevColorField = () => import("./color-field/color-field.js").then((m) => m.default);
const DevNumberField = () => import("./number-field/number-field.js").then((m) => m.default);
const DevSearchField = () => import("./search-field/search-field.js").then((m) => m.default);
const DevPasswordField = () => import("./password-field/password-field.js").then((m) => m.default);
const DevTextareaField = () => import("./textarea-field/textarea-field.js").then((m) => m.default);
const DevSelectField = () => import("./select-field/select-field.js").then((m) => m.default);
const DevProgressIndicator = () => import("./progress-indicator/progress-indicator.js").then((m) => m.default);
// card
const DevBlock = () => import("./block/block.js").then((m) => m.default);
const DevToolbar = () => import("./toolbar/toolbar.js").then((m) => m.default);
const DevCard = () => import("./card/card.js").then((m) => m.default);
const DevScrim = () => import("./scrim/scrim.js").then((m) => m.default);
const DevSheet = () => import("./sheet/sheet.js").then((m) => m.default);
const DevSheet2 = () => import("./sheet/sheet2.js").then((m) => m.default);
const DevDialog = () => import("./dialog/dialog.js").then((m) => m.default);
const DevTopAppBar = () => import("./top-app-bar/top-app-bar.js").then((m) => m.default);
const DevSideSheet = () => import("./side-sheet/side-sheet.js").then((m) => m.default);
const DevBottomSheet = () => import("./bottom-sheet/bottom-sheet.js").then((m) => m.default);
const DevSnackbar = () => import("./snackbar/snackbar.js").then((m) => m.default);
const DevTooltip = () => import("./tooltip/tooltip.js").then((m) => m.default);
const DevBottomAppBar = () => import("./bottom-app-bar/bottom-app-bar.js").then((m) => m.default);
// picker
const DevDatetimePicker = () => import("./datetime-picker/datetime-picker.js").then((m) => m.default);
const DevDatePicker = () => import("./date-picker/date-picker.js").then((m) => m.default);
const DevMonthPicker = () => import("./month-picker/month-picker.js").then((m) => m.default);
const DevTimePicker = () => import("./time-picker/time-picker.js").then((m) => m.default);
const DevWeekPicker = () => import("./week-picker/week-picker.js").then((m) => m.default);
const DevColorPicker = () => import("./color-picker/color-picker.js").then((m) => m.default);
const DevEmojiPicker = () => import("./emoji-picker/emoji-picker.js").then((m) => m.default);
// list
const DevListItem = () => import("./list-item/list-item.js").then((m) => m.default);
const DevList = () => import("./list/list.js").then((m) => m.default);
const DevList2 = () => import("./list/list2.js").then((m) => m.default);
const DevTreeItem = () => import("./tree-item/tree-item.js").then((m) => m.default);
const DevTree = () => import("./tree/tree.js").then((m) => m.default);
const DevChip = () => import("./chip/chip.js").then((m) => m.default);
const DevChips = () => import("./chips/chips.js").then((m) => m.default);
const DevNavigationBar = () => import("./navigation-bar/navigation-bar.js").then((m) => m.default);
const DevNavigationDrawer = () => import("./navigation-drawer/navigation-drawer.js").then((m) => m.default);
const DevNavigationRail = () => import("./navigation-rail/navigation-rail.js").then((m) => m.default);
const DevMenu = () => import("./menu/menu.js").then((m) => m.default);
const DevTabs = () => import("./tabs/tabs.js").then((m) => m.default);
// table
const DevPagination = () => import("./pagination/pagination.js").then((m) => m.default);
const DevDataTableItem = () => import("./data-table-item/data-table-item.js").then((m) => m.default);
const DevDataTable = () => import("./data-table/data-table.js").then((m) => m.default);
// main
const DevMain = () => import("./main/main.js").then((m) => m.default);

const routes = [
    {
        path: "",
        load: DevMain,
        children: [
            { load: DevBlock, path: "block" },
            { load: DevAttributeObserver, path: "attribute-observer" },
            { load: DevBadge, path: "badge" },
            { load: DevBottomAppBar, path: "bottom-app-bar" },
            { load: DevBottomSheet, path: "bottom-sheet" },
            { load: DevButton, path: "button" },
            { load: DevCard, path: "card" },
            { load: DevCheckbox, path: "checkbox" },
            { load: DevChip, path: "chip" },
            { load: DevChips, path: "chips" },
            { load: DevColor, path: "color" },
            { load: DevColorField, path: "color-field" },
            { load: DevColorPicker, path: "color-picker" },
            { load: DevComponent, path: "component" },
            { load: DevDataTable, path: "data-table" },
            { load: DevDataTableItem, path: "data-table-item" },
            { load: DevDateField, path: "date-field" },
            { load: DevDatePicker, path: "date-picker" },
            { load: DevDatetimeField, path: "datetime-field" },
            { load: DevDatetimePicker, path: "datetime-picker" },
            { load: DevDialog, path: "dialog" },
            { load: DevDivider, path: "divider" },
            { load: DevEmoji, path: "emoji" },
            { load: DevEmojiPicker, path: "emoji-picker" },
            { load: DevFab, path: "fab" },
            { load: DevForm, path: "form" },
            { load: DevFunctions, path: "functions" },
            { load: DevGesture, path: "gesture" },
            { load: DevIcon, path: "icon" },
            { load: DevIconButton, path: "icon-button" },
            { load: DevImage, path: "image" },
            { load: DevLayout, path: "layout" },
            { load: DevList, path: "list" },
            { load: DevList2, path: "list2" },
            { load: DevListItem, path: "list-item" },
            { load: DevLocalization, path: "localization" },
            { load: DevMediaObserver, path: "media-observer" },
            { load: DevMenu, path: "menu" },
            { load: DevMonthField, path: "month-field" },
            { load: DevMonthPicker, path: "month-picker" },
            { load: DevNavigationBar, path: "navigation-bar" },
            { load: DevNavigationDrawer, path: "navigation-drawer" },
            { load: DevNavigationRail, path: "navigation-rail" },
            { load: DevNumberField, path: "number-field" },
            { load: DevObserver, path: "observer" },
            { load: DevPagination, path: "pagination" },
            { load: DevPasswordField, path: "password-field" },
            { load: DevPopper, path: "popper" },
            { load: DevProgress, path: "progress" },
            { load: DevProgressIndicator, path: "progress-indicator" },
            { load: DevRadioButton, path: "radio-button" },
            { load: DevRipple, path: "ripple" },
            { load: DevRouter, path: "router" },
            // { load: DevScrim, path: "scrim" },
            { load: DevSearchField, path: "search-field" },
            { load: DevSegmentedButton, path: "segmented-button" },
            { load: DevSelectField, path: "select-field" },
            { load: DevSheet, path: "sheet" },
            { load: DevSheet2, path: "sheet2" },
            { load: DevSideSheet, path: "side-sheet" },
            { load: DevSlider, path: "slider" },
            { load: DevSnackbar, path: "snackbar" },
            { load: DevStore, path: "store" },
            { load: DevSwitch, path: "switch" },
            { load: DevTabs, path: "tabs" },
            { load: DevTextareaField, path: "textarea-field" },
            { load: DevTextField, path: "text-field" },
            { load: DevTimeField, path: "time-field" },
            { load: DevTimePicker, path: "time-picker" },
            { load: DevToolbar, path: "toolbar" },
            { load: DevTooltip, path: "tooltip" },
            { load: DevTopAppBar, path: "top-app-bar" },
            { load: DevTree, path: "tree" },
            { load: DevTreeItem, path: "tree-item" },
            { load: DevVirtual, path: "virtual" },
            { load: DevWeekField, path: "week-field" },
            { load: DevWeekPicker, path: "week-picker" },
        ],
    },
    { path: "*", load: DevMain },
];

MDRouter.init(routes);
