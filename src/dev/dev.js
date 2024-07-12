import { MDRouter } from "../material/router/router.js";

MDRouter.historyApiFallback = false;

import DevMain from "./main/main.js"
import DevAttributeObserver from "./attribute-observer/attribute-observer"
import DevBadge from "./badge/badge"
import DevBottomAppBar from "./bottom-app-bar/bottom-app-bar"
import DevBottomSheet from "./bottom-sheet/bottom-sheet"
import DevButton from "./button/button"
import DevCard from "./card/card"
import DevCheckbox from "./checkbox/checkbox"
import DevChip from "./chip/chip"
import DevChips from "./chips/chips"
import DevColorField from "./color-field/color-field"
import DevColorPicker from "./color-picker/color-picker"
import DevColor from "./color/color"
import DevComponent from "./component/component"
import DevDataTableItem from "./data-table-item/data-table-item"
import DevDataTable from "./data-table/data-table"
import DevDateField from "./date-field/date-field"
import DevDatePicker from "./date-picker/date-picker"
import DevDatetimeField from "./datetime-field/datetime-field"
import DevDatetimePicker from "./datetime-picker/datetime-picker"
import DevDialog from "./dialog/dialog"
import DevEmojiPicker from "./emoji-picker/emoji-picker"
import DevEmoji from "./emoji/emoji"
import DevFab from "./fab/fab"
import DevForm from "./form/form"
import DevFunctions from "./functions/functions"
import DevGesture from "./gesture/gesture"
import DevIconButton from "./icon-button/icon-button"
import DevIcon from "./icon/icon"
import DevImage from "./image/image"
import DevListItem from "./list-item/list-item"
import DevList from "./list/list"
import DevLocalization from "./localization/localization"
import DevMarkdown from "./markdown/markdown"
import DevMenu from "./menu/menu"
import DevMonthField from "./month-field/month-field"
import DevMonthPicker from "./month-picker/month-picker"
import DevNavigationBar from "./navigation-bar/navigation-bar"
import DevNavigationDrawer from "./navigation-drawer/navigation-drawer"
import DevNavigationRail from "./navigation-rail/navigation-rail"
import DevNumberField from "./number-field/number-field"
import DevObserver from "./observer/observer"
import DevPagination from "./pagination/pagination"
import DevPasswordField from "./password-field/password-field"
import DevPopper from "./popper/popper"
import DevProgressIndicator from "./progress-indicator/progress-indicator"
import DevProgress from "./progress/progress"
import DevRadioButton from "./radio-button/radio-button"
import DevRipple from "./ripple/ripple"
import DevRouter from "./router/router"
import DevScrim from "./scrim/scrim"
import DevSearchField from "./search-field/search-field"
import DevSegmentedButton from "./segmented-button/segmented-button"
import DevSelectField from "./select-field/select-field"
import DevSheet from "./sheet/sheet"
import DevSideSheet from "./side-sheet/side-sheet"
import DevSlider from "./slider/slider"
import DevSnackbar from "./snackbar/snackbar"
import DevStore from "./store/store"
import DevSwitch from "./switch/switch"
import DevTabs from "./tabs/tabs"
import DevTextField from "./text-field/text-field"
import DevTextareaField from "./textarea-field/textarea-field"
import DevTimeField from "./time-field/time-field"
import DevTimePicker from "./time-picker/time-picker"
import DevTooltip from "./tooltip/tooltip"
import DevTopAppBar from "./top-app-bar/top-app-bar"
import DevTreeItem from "./tree-item/tree-item"
import DevTree from "./tree/tree"
import DevVirtual from "./virtual/virtual"
import DevWeekField from "./week-field/week-field"
import DevWeekPicker from "./week-picker/week-picker"
// import DevMain from "./main/main.js"

const routes = [
    {
        path: "",
        component: DevMain,
        children: [
            { path: "attribute-observer", component: DevAttributeObserver },
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
            { path: "functions", component: DevFunctions },
            { path: "gesture", component: DevGesture },
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
            { path: "observer", component: DevObserver },
            { path: "pagination", component: DevPagination },
            { path: "password-field", component: DevPasswordField },
            { path: "popper", component: DevPopper },
            { path: "progress-indicator", component: DevProgressIndicator },
            { path: "progress", component: DevProgress },
            { path: "radio-button", component: DevRadioButton },
            { path: "ripple", component: DevRipple },
            { path: "router", component: DevRouter },
            // { path: "scrim", component: DevScrim },
            { path: "search-field", component: DevSearchField },
            { path: "segmented-button", component: DevSegmentedButton },
            { path: "select-field", component: DevSelectField },
            { path: "sheet", component: DevSheet },
            { path: "side-sheet", component: DevSideSheet },
            { path: "slider", component: DevSlider },
            { path: "snackbar", component: DevSnackbar },
            { path: "store", component: DevStore },
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
            { path: "virtual", component: DevVirtual },
            { path: "week-field", component: DevWeekField },
            { path: "week-picker", component: DevWeekPicker },
        ],
    },
    { path: "*", component: DevMain },
];

MDRouter.init(routes);
