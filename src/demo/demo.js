import DemoMain from "./main/main.js"

const DemoBadge = () => import( "./badge/badge.js").then(m=>m.default)

const DemoBottomAppBar = () => import( "./bottom-app-bar/bottom-app-bar.js").then(m=>m.default)
const DemoBottomAppBarNoFab = () => import( "./bottom-app-bar/bottom-app-bar-no-fab.js").then(m=>m.default)

const DemoBottomSheet = () => import( "./bottom-sheet/bottom-sheet.js").then(m=>m.default)
const DemoBottomSheetModal = () => import( "./bottom-sheet/bottom-sheet-modal.js").then(m=>m.default)

const DemoButton = () => import( "./button/button.js").then(m=>m.default)
const DemoButtonElevated = () => import( "./button/button-elevated.js").then(m=>m.default)
const DemoButtonFilled = () => import( "./button/button-filled.js").then(m=>m.default)
const DemoButtonFilledTonal = () => import( "./button/button-filled-tonal.js").then(m=>m.default)
const DemoButtonOutlined = () => import( "./button/button-outlined.js").then(m=>m.default)

const DemoCard = () => import( "./card/card.js").then(m=>m.default)

const DemoCheckbox = () => import( "./checkbox/checkbox.js").then(m=>m.default)

const DemoChips = () => import( "./chips/chips.js").then(m=>m.default)
const DemoChipsSingleSelect = () => import( "./chips/chips-single-select.js").then(m=>m.default)
const DemoChipsMultiSelect = () => import( "./chips/chips-multi-select.js").then(m=>m.default)

const DemoDataTableCell = () => import( "./data-table/data-table-cell.js").then(m=>m.default)
const DemoDataTable = () => import( "./data-table/data-table.js").then(m=>m.default)
const DemoDataTableCheckbox = () => import( "./data-table/data-table-checkbox.js").then(m=>m.default)
const DemoDataTableSortable = () => import( "./data-table/data-table-sortable.js").then(m=>m.default)

const DemoDialog = () => import( "./dialog/dialog.js").then(m=>m.default)

const DemoDivider = () => import( "./divider/divider.js").then(m=>m.default)

const DemoFab = () => import( "./fab/fab.js").then(m=>m.default)
const DemoFabUnelevated = () => import( "./fab/fab-unelevated.js").then(m=>m.default)
const DemoFabExtended = () => import( "./fab/fab-extended.js").then(m=>m.default)
const DemoFabSmall = () => import( "./fab/fab-small.js").then(m=>m.default)
const DemoFabLarge = () => import( "./fab/fab-large.js").then(m=>m.default)

const DemoForm = () => import( "./form/form.js").then(m=>m.default)

const DemoIcon = () => import( "./icon/icon.js").then(m=>m.default)
const DemoIconButton = () => import( "./icon-button/icon-button.js").then(m=>m.default)
const DemoIconButtonFilled = () => import( "./icon-button/icon-button-filled.js").then(m=>m.default)
const DemoIconButtonFilledTonal = () => import( "./icon-button/icon-button-filled-tonal.js").then(m=>m.default)
const DemoIconButtonOutlined = () => import( "./icon-button/icon-button-outlined.js").then(m=>m.default)

const DemoImage = () => import( "./image/image.js").then(m=>m.default)

const DemoListItem = () => import( "./list/list-item.js").then(m=>m.default)
const DemoListRow = () => import( "./list/list-row.js").then(m=>m.default)
const DemoList = () => import( "./list/list.js").then(m=>m.default)
const DemoListSingleSelect = () => import( "./list/list-single-select.js").then(m=>m.default)
const DemoListMultiSelect = () => import( "./list/list-multi-select.js").then(m=>m.default)

const DemoMenu = () => import( "./menu/menu.js").then(m=>m.default)

const DemoNavigationBar = () => import( "./navigation-bar/navigation-bar.js").then(m=>m.default)
const DemoNavigationBarNoLabel = () => import( "./navigation-bar/navigation-bar-no-label.js").then(m=>m.default)

const DemoNavigationDrawer = () => import( "./navigation-drawer/navigation-drawer.js").then(m=>m.default)
const DemoNavigationDrawerModal = () => import( "./navigation-drawer/navigation-drawer-modal.js").then(m=>m.default)

const DemoNavigationListItem = () => import( "./navigation-list/navigation-list-item.js").then(m=>m.default)
const DemoNavigationListRow = () => import( "./navigation-list/navigation-list-row.js").then(m=>m.default)
const DemoNavigationList = () => import( "./navigation-list/navigation-list.js").then(m=>m.default)

const DemoNavigationRail = () => import( "./navigation-rail/navigation-rail.js").then(m=>m.default)
const DemoNavigationRailNoLabel = () => import( "./navigation-rail/navigation-rail-no-label.js").then(m=>m.default)

const DemoProgressIndicator = () => import( "./progress-indicator/progress-indicator.js").then(m=>m.default)
const DemoProgressIndicatorCircular = () => import( "./progress-indicator/progress-indicator-circular.js").then(m=>m.default)

const DemoRadioButton = () => import( "./radio-button/radio-button.js").then(m=>m.default)

const DemoScrim = () => import( "./scrim/scrim.js").then(m=>m.default)

const DemoSegmentedButton = () => import( "./segmented-button/segmented-button.js").then(m=>m.default)
const DemoSegmentedButtonSingleSelect = () => import( "./segmented-button/segmented-button-single-select.js").then(m=>m.default)
const DemoSegmentedButtonMultiSelect = () => import( "./segmented-button/segmented-button-multi-select.js").then(m=>m.default)

const DemoSheet = () => import( "./sheet/sheet.js").then(m=>m.default)
const DemoSheetNorth = () => import( "./sheet/sheet-north.js").then(m=>m.default)
const DemoSheetNorthModal = () => import( "./sheet/sheet-north-modal.js").then(m=>m.default)
const DemoSheetEast = () => import( "./sheet/sheet-east.js").then(m=>m.default)
const DemoSheetEastModal = () => import( "./sheet/sheet-east-modal.js").then(m=>m.default)
const DemoSheetSouth = () => import( "./sheet/sheet-south.js").then(m=>m.default)
const DemoSheetSouthModal = () => import( "./sheet/sheet-south-modal.js").then(m=>m.default)
const DemoSheetWest = () => import( "./sheet/sheet-west.js").then(m=>m.default)
const DemoSheetWestModal = () => import( "./sheet/sheet-west-modal.js").then(m=>m.default)
const DemoSheetCenter = () => import( "./sheet/sheet-center.js").then(m=>m.default)
const DemoSideSheet = () => import( "./side-sheet/side-sheet.js").then(m=>m.default)
const DemoSideSheetModal = () => import( "./side-sheet/side-sheet-modal.js").then(m=>m.default)

const DemoSlider = () => import( "./slider/slider.js").then(m=>m.default)
const DemoSliderCentered = () => import( "./slider/slider-centered.js").then(m=>m.default)
const DemoSliderContinuous = () => import( "./slider/slider-continuous.js").then(m=>m.default)
const DemoSliderDiscrete = () => import( "./slider/slider-discrete.js").then(m=>m.default)
const DemoSliderRangeSelection = () => import( "./slider/slider-range-selection.js").then(m=>m.default)

const DemoSnackbar = () => import( "./snackbar/snackbar.js").then(m=>m.default)

const DemoSwitch = () => import( "./switch/switch.js").then(m=>m.default)

const DemoTab = () => import( "./tabs/tab.js").then(m=>m.default)
const DemoTabs = () => import( "./tabs/tabs.js").then(m=>m.default)
const DemoTabsPrimary = () => import( "./tabs/tabs-primary.js").then(m=>m.default)
const DemoTabsSecondary = () => import( "./tabs/tabs-secondary.js").then(m=>m.default)

const DemoTextField = () => import( "./text-field/text-field.js").then(m=>m.default)
const DemoTextFieldOutlined = () => import( "./text-field/text-field-outlined.js").then(m=>m.default)
const DemoTextFieldFilled = () => import( "./text-field/text-field-filled.js").then(m=>m.default)

const DemoTooltip = () => import( "./tooltip/tooltip.js").then(m=>m.default)

const DemoTopAppBar = () => import( "./top-app-bar/top-app-bar.js").then(m=>m.default)

const DemoTreeItem = () => import( "./tree/tree-item.js").then(m=>m.default)
const DemoTreeRow = () => import( "./tree/tree-row.js").then(m=>m.default)
const DemoTree = () => import( "./tree/tree.js").then(m=>m.default)

const DemoDatetimePicker = () => import( "./datetime-picker/datetime-picker.js").then(m=>m.default)
const DemoDatetimePickerModal = () => import( "./datetime-picker/datetime-picker-modal.js").then(m=>m.default)

const DemoDatePicker = () => import( "./date-picker/date-picker.js").then(m=>m.default)
const DemoDatePickerModal = () => import( "./date-picker/date-picker-modal.js").then(m=>m.default)

const DemoTimePicker = () => import( "./time-picker/time-picker.js").then(m=>m.default)
const DemoTimePickerModal = () => import( "./time-picker/time-picker-modal.js").then(m=>m.default)

const DemoMonthPicker = () => import( "./month-picker/month-picker.js").then(m=>m.default)
const DemoMonthPickerModal = () => import( "./month-picker/month-picker-modal.js").then(m=>m.default)

const DemoWeekPicker = () => import( "./week-picker/week-picker.js").then(m=>m.default)
const DemoWeekPickerModal = () => import( "./week-picker/week-picker-modal.js").then(m=>m.default)

const DemoDatetimeField = () => import( "./datetime-field/datetime-field.js").then(m=>m.default)
const DemoDateField = () => import( "./date-field/date-field.js").then(m=>m.default)
const DemoTimeField = () => import( "./time-field/time-field.js").then(m=>m.default)
const DemoMonthField = () => import( "./month-field/month-field.js").then(m=>m.default)
const DemoWeekField = () => import( "./week-field/week-field.js").then(m=>m.default)

export default {
    path: "demo",
    component: DemoMain,
    children: [
        { path: "badge", load: DemoBadge },

        { path: "bottom-app-bar", load: DemoBottomAppBar },
        { path: "bottom-app-bar-no-fab", load: DemoBottomAppBarNoFab },

        { path: "bottom-sheet", load: DemoBottomSheet },
        { path: "bottom-sheet-modal", load: DemoBottomSheetModal },

        { path: "button", load: DemoButton },
        { path: "button-elevated", load: DemoButtonElevated },
        { path: "button-filled", load: DemoButtonFilled },
        { path: "button-filled-tonal", load: DemoButtonFilledTonal },
        { path: "button-outlined", load: DemoButtonOutlined },

        { path: "card", load: DemoCard },

        { path: "checkbox", load: DemoCheckbox },

        { path: "chips", load: DemoChips },
        { path: "chips-single-select", load: DemoChipsSingleSelect },
        { path: "chips-multi-select", load: DemoChipsMultiSelect },

        { path: "data-table-cell", load: DemoDataTableCell },
        { path: "data-table", load: DemoDataTable },
        { path: "data-table-checkbox", load: DemoDataTableCheckbox },
        { path: "data-table-sortable", load: DemoDataTableSortable },

        { path: "dialog", load: DemoDialog },

        { path: "divider", load: DemoDivider },

        { path: "fab", load: DemoFab },
        { path: "fab-unelevated", load: DemoFabUnelevated },
        { path: "fab-extended", load: DemoFabExtended },
        { path: "fab-small", load: DemoFabSmall },
        { path: "fab-large", load: DemoFabLarge },

        { path: "form", load: DemoForm },

        { path: "icon", load: DemoIcon },

        { path: "icon-button", load: DemoIconButton },
        { path: "icon-button-filled", load: DemoIconButtonFilled },
        { path: "icon-button-filled-tonal", load: DemoIconButtonFilledTonal },
        { path: "icon-button-outlined", load: DemoIconButtonOutlined },

        { path: "image", load: DemoImage },

        { path: "list-item", load: DemoListItem },
        { path: "list-row", load: DemoListRow },
        { path: "list", load: DemoList },
        { path: "list-single-select", load: DemoListSingleSelect },
        { path: "list-multi-select", load: DemoListMultiSelect },

        { path: "menu", load: DemoMenu },

        { path: "navigation-bar", load: DemoNavigationBar },
        { path: "navigation-bar-no-label", load: DemoNavigationBarNoLabel },

        { path: "navigation-drawer", load: DemoNavigationDrawer },
        { path: "navigation-drawer-modal", load: DemoNavigationDrawerModal },

        { path: "navigation-list-item", load: DemoNavigationListItem },
        { path: "navigation-list-row", load: DemoNavigationListRow },
        { path: "navigation-list", load: DemoNavigationList },

        { path: "navigation-rail", load: DemoNavigationRail },
        { path: "navigation-rail-no-label", load: DemoNavigationRailNoLabel },

        { path: "progress-indicator", load: DemoProgressIndicator },
        { path: "progress-indicator-circular", load: DemoProgressIndicatorCircular },

        { path: "radio-button", load: DemoRadioButton },

        { path: "scrim", load: DemoScrim },

        { path: "segmented-button", load: DemoSegmentedButton },
        { path: "segmented-button-single-select", load: DemoSegmentedButtonSingleSelect },
        { path: "segmented-button-multi-select", load: DemoSegmentedButtonMultiSelect },

        { path: "sheet", load: DemoSheet },
        { path: "sheet-north", load: DemoSheetNorth },
        { path: "sheet-north-modal", load: DemoSheetNorthModal },
        { path: "sheet-east", load: DemoSheetEast },
        { path: "sheet-east-modal", load: DemoSheetEastModal },
        { path: "sheet-south", load: DemoSheetSouth },
        { path: "sheet-south-modal", load: DemoSheetSouthModal },
        { path: "sheet-west", load: DemoSheetWest },
        { path: "sheet-west-modal", load: DemoSheetWestModal },
        { path: "sheet-center", load: DemoSheetCenter },

        { path: "side-sheet", load: DemoSideSheet },
        { path: "side-sheet-modal", load: DemoSideSheetModal },

        { path: "slider", load: DemoSlider },
        { path: "slider-centered", load: DemoSliderCentered },
        { path: "slider-continuous", load: DemoSliderContinuous },
        { path: "slider-discrete", load: DemoSliderDiscrete },
        { path: "slider-range-selection", load: DemoSliderRangeSelection },

        { path: "snackbar", load: DemoSnackbar },

        { path: "switch", load: DemoSwitch },

        { path: "tab", load: DemoTab },
        { path: "tabs", load: DemoTabs },
        { path: "tabs-primary", load: DemoTabsPrimary },
        { path: "tabs-secondary", load: DemoTabsSecondary },

        { path: "text-field", load: DemoTextField },
        { path: "text-field-outlined", load: DemoTextFieldOutlined },
        { path: "text-field-filled", load: DemoTextFieldFilled },

        { path: "tooltip", load: DemoTooltip },

        { path: "top-app-bar", load: DemoTopAppBar },

        { path: "tree-item", load: DemoTreeItem },
        { path: "tree-row", load: DemoTreeRow },
        { path: "tree", load: DemoTree },

        { path: "datetime-picker", load: DemoDatetimePicker },
        { path: "datetime-picker-modal", load: DemoDatetimePickerModal },

        { path: "date-picker", load: DemoDatePicker },
        { path: "date-picker-modal", load: DemoDatePickerModal },

        { path: "time-picker", load: DemoTimePicker },
        { path: "time-picker-modal", load: DemoTimePickerModal },

        { path: "week-picker", load: DemoWeekPicker },
        { path: "week-picker-modal", load: DemoWeekPickerModal },

        { path: "month-picker", load: DemoMonthPicker },
        { path: "month-picker-modal", load: DemoMonthPickerModal },

        { path: "datetime-field", load: DemoDatetimeField },
        { path: "date-field", load: DemoDateField },
        { path: "time-field", load: DemoTimeField },
        { path: "month-field", load: DemoMonthField },
        { path: "week-field", load: DemoWeekField },
    ],
};
