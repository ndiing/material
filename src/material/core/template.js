import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/* prettier-ignore */
function renderBadge(params = {}) {
    return html`
        <md-badge
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .label="${ifDefined(params.label)}"
            .max="${ifDefined(params.max)}"
            .maxLength="${ifDefined(params.maxLength)}"
        ></md-badge>
    `
}

/* prettier-ignore */
function renderButton(params = {}) {
    return html`
        <md-button
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .variant="${ifDefined(params.variant)}"
            .size="${ifDefined(params.size)}"
            .shape="${ifDefined(params.shape)}"
            .color="${ifDefined(params.color)}"
            .label="${ifDefined(params.label)}"
            .icon="${ifDefined(params.icon)}"
            .selected="${ifDefined(params.selected)}"
            .disabled="${ifDefined(params.disabled)}"
            .type="${ifDefined(params.type)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .selectOnToggle="${ifDefined(params.selectOnToggle)}"
            @onButtonSelection="${ifDefined(params.onButtonSelection)}"
            @onButtonClick="${ifDefined(params.onButtonClick)}"
        ></md-button>
    `
}

/* prettier-ignore */
function renderButtonGroup(params = {}) {
    return html`
        <md-button-group
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .buttons="${ifDefined(params.buttons)}"
            .variant="${ifDefined(params.variant)}"
            .size="${ifDefined(params.size)}"
            .shape="${ifDefined(params.shape)}"
            .color="${ifDefined(params.color)}"
            .vertical="${ifDefined(params.vertical)}"
            .singleSelect="${ifDefined(params.singleSelect)}"
            .multiSelect="${ifDefined(params.multiSelect)}"
            @onButtonGroupItemSelection="${ifDefined(params.onButtonGroupItemSelection)}"
            @onButtonGroupItemClick="${ifDefined(params.onButtonGroupItemClick)}"
        ></md-button-group>
    `
}

/* prettier-ignore */
function renderCardBody(params = {}) {
    return html`
        <md-card-body
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-card-body>
    `
}

/* prettier-ignore */
function renderCardFooter(params = {}) {
    return html`
        <md-card-footer
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-card-footer>
    `
}

/* prettier-ignore */
function renderCardHeader(params = {}) {
    return html`
        <md-card-header
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-card-header>
    `
}

/* prettier-ignore */
function renderCard(params = {}) {
    return html`
        <md-card
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .color="${ifDefined(params.color)}"
        ></md-card>
    `
}

/* prettier-ignore */
function renderCheckbox(params = {}) {
    return html`
        <md-checkbox
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .name="${ifDefined(params.name)}"
            .value="${ifDefined(params.value)}"
            .indeterminate="${ifDefined(params.indeterminate)}"
            .checked="${ifDefined(params.checked)}"
            .disabled="${ifDefined(params.disabled)}"
            .required="${ifDefined(params.required)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .validateOnInput="${ifDefined(params.validateOnInput)}"
            .tabIndex="${ifDefined(params.tabIndex)}"
            @onCheckboxNativeInvalid="${ifDefined(params.onCheckboxNativeInvalid)}"
            @onCheckboxNativeInput="${ifDefined(params.onCheckboxNativeInput)}"
        ></md-checkbox>
    `
}

/* prettier-ignore */
function renderDataTableCell(params = {}) {
    return html`
        <md-data-table-cell
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .label="${ifDefined(params.label)}"
        ></md-data-table-cell>
    `
}

/* prettier-ignore */
function renderDataTable(params = {}) {
    return html`
        <md-data-table
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .columns="${ifDefined(params.columns)}"
            .rows="${ifDefined(params.rows)}"
            .valueField="${ifDefined(params.valueField)}"
            .clearSelection="${ifDefined(params.clearSelection)}"
            .selectAll="${ifDefined(params.selectAll)}"
            .activeRow="${ifDefined(params.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(params.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(params.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(params.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(params.selectOnArrowDownActiveRow)}"
            .activeCell="${ifDefined(params.activeCell)}"
            .selectOnEnterActiveRow="${ifDefined(params.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(params.selectRange)}"
            .multiSelect="${ifDefined(params.multiSelect)}"
            .singleSelect="${ifDefined(params.singleSelect)}"
            .checkbox="${ifDefined(params.checkbox)}"
            @onDataTableRowSelection="${ifDefined(params.onDataTableRowSelection)}"
            @onDataTableClick="${ifDefined(params.onDataTableClick)}"
            @onDataTableKeydown="${ifDefined(params.onDataTableKeydown)}"
            @onDataTableRowClick="${ifDefined(params.onDataTableRowClick)}"
            @onDataTableCellClick="${ifDefined(params.onDataTableCellClick)}"
        ></md-data-table>
    `
}

/* prettier-ignore */
function renderDatetimePicker(params = {}) {
    return html`
        <md-datetime-picker
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .hour12="${ifDefined(params.hour12)}"
            .locale="${ifDefined(params.locale)}"
            .calendarType="${ifDefined(params.calendarType)}"
            .selection="${ifDefined(params.selection)}"
            .variant="${ifDefined(params.variant)}"
            .view="${ifDefined(params.view)}"
            .type="${ifDefined(params.type)}"
            .value="${ifDefined(params.value)}"
            @onDatetimePickerChange="${ifDefined(params.onDatetimePickerChange)}"
        ></md-datetime-picker>
    `
}

/* prettier-ignore */
function renderDialogBody(params = {}) {
    return html`
        <md-dialog-body
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-dialog-body>
    `
}

/* prettier-ignore */
function renderDialogFooter(params = {}) {
    return html`
        <md-dialog-footer
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .buttons="${ifDefined(params.buttons)}"
        ></md-dialog-footer>
    `
}

/* prettier-ignore */
function renderDialogHeader(params = {}) {
    return html`
        <md-dialog-header
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .leading="${ifDefined(params.leading)}"
            .headline="${ifDefined(params.headline)}"
            .trailing="${ifDefined(params.trailing)}"
        ></md-dialog-header>
    `
}

/* prettier-ignore */
function renderDialog(params = {}) {
    return html`
        <md-dialog
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .leading="${ifDefined(params.leading)}"
            .headline="${ifDefined(params.headline)}"
            .trailing="${ifDefined(params.trailing)}"
            .buttons="${ifDefined(params.buttons)}"
            .open="${ifDefined(params.open)}"
            .variant="${ifDefined(params.variant)}"
            .heroIcon="${ifDefined(params.heroIcon)}"
        ></md-dialog>
    `
}

/* prettier-ignore */
function renderFab(params = {}) {
    return html`
        <md-fab
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .size="${ifDefined(params.size)}"
            .color="${ifDefined(params.color)}"
            .icon="${ifDefined(params.icon)}"
            .label="${ifDefined(params.label)}"
            .rippleController="${ifDefined(params.rippleController)}"
            .unelevated="${ifDefined(params.unelevated)}"
            @onFabClick="${ifDefined(params.onFabClick)}"
        ></md-fab>
    `
}

/* prettier-ignore */
function renderForm(params = {}) {
    return html`
        <md-form
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .method="${ifDefined(params.method)}"
            .action="${ifDefined(params.action)}"
            .enctype="${ifDefined(params.enctype)}"
            .target="${ifDefined(params.target)}"
            .autocomplete="${ifDefined(params.autocomplete)}"
            .noValidate="${ifDefined(params.noValidate)}"
            .inner="${ifDefined(params.inner)}"
            @onFormNativeFormdata="${ifDefined(params.onFormNativeFormdata)}"
            @onFormNativeReset="${ifDefined(params.onFormNativeReset)}"
            @onFormNativeSubmit="${ifDefined(params.onFormNativeSubmit)}"
        ></md-form>
    `
}

/* prettier-ignore */
function renderGridColumn(params = {}) {
    return html`
        <md-grid-column
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .expanded="${ifDefined(params.expanded)}"
            .medium="${ifDefined(params.medium)}"
            .compact="${ifDefined(params.compact)}"
        ></md-grid-column>
    `
}

/* prettier-ignore */
function renderGrid(params = {}) {
    return html`
        <md-grid
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-grid>
    `
}

/* prettier-ignore */
function renderIcon(params = {}) {
    return html`
        <md-icon
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .icon="${ifDefined(params.icon)}"
        ></md-icon>
    `
}

/* prettier-ignore */
function renderIconButton(params = {}) {
    return html`
        <md-icon-button
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .icon="${ifDefined(params.icon)}"
            .variant="${ifDefined(params.variant)}"
            .size="${ifDefined(params.size)}"
            .shape="${ifDefined(params.shape)}"
            .color="${ifDefined(params.color)}"
            .width="${ifDefined(params.width)}"
            .selected="${ifDefined(params.selected)}"
            .disabled="${ifDefined(params.disabled)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .selectOnToggle="${ifDefined(params.selectOnToggle)}"
            @onIconButtonSelection="${ifDefined(params.onIconButtonSelection)}"
            @onIconButtonClick="${ifDefined(params.onIconButtonClick)}"
        ></md-icon-button>
    `
}

/* prettier-ignore */
function renderImage(params = {}) {
    return html`
        <md-image
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .src="${ifDefined(params.src)}"
            .alt="${ifDefined(params.alt)}"
            .loading="${ifDefined(params.loading)}"
            .shape="${ifDefined(params.shape)}"
            .errorSrc="${ifDefined(params.errorSrc)}"
            @onImageNativeLoad="${ifDefined(params.onImageNativeLoad)}"
            @onImageNativeError="${ifDefined(params.onImageNativeError)}"
        ></md-image>
    `
}

/* prettier-ignore */
function renderInputDatetime(params = {}) {
    return html`
        <md-input-datetime
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .format="${ifDefined(params.format)}"
        ></md-input-datetime>
    `
}

/* prettier-ignore */
function renderInputEnum(params = {}) {
    return html`
        <md-input-enum
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .value="${ifDefined(params.value)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            .size="${ifDefined(params.size)}"
            .placeholder="${ifDefined(params.placeholder)}"
            .options="${ifDefined(params.options)}"
            @onInputEnumStepUp="${ifDefined(params.onInputEnumStepUp)}"
            @onInputEnumStepDown="${ifDefined(params.onInputEnumStepDown)}"
            @onInputEnumKeydown="${ifDefined(params.onInputEnumKeydown)}"
            @onInputEnumClick="${ifDefined(params.onInputEnumClick)}"
            @onInputEnumFocus="${ifDefined(params.onInputEnumFocus)}"
            @onInputEnumInput="${ifDefined(params.onInputEnumInput)}"
        ></md-input-enum>
    `
}

/* prettier-ignore */
function renderInputNumber(params = {}) {
    return html`
        <md-input-number
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .value="${ifDefined(params.value)}"
            .step="${ifDefined(params.step)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            @onInputNumberStepUp="${ifDefined(params.onInputNumberStepUp)}"
            @onInputNumberStepDown="${ifDefined(params.onInputNumberStepDown)}"
            @onInputNumberKeydown="${ifDefined(params.onInputNumberKeydown)}"
            @onInputNumberInput="${ifDefined(params.onInputNumberInput)}"
            @onInputNumberChange="${ifDefined(params.onInputNumberChange)}"
        ></md-input-number>
    `
}

/* prettier-ignore */
function renderInputSegment(params = {}) {
    return html`
        <md-input-segment
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .value="${ifDefined(params.value)}"
            .step="${ifDefined(params.step)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            .maxLength="${ifDefined(params.maxLength)}"
            .size="${ifDefined(params.size)}"
            .threshold="${ifDefined(params.threshold)}"
            .placeholder="${ifDefined(params.placeholder)}"
            .startValue="${ifDefined(params.startValue)}"
            @onInputSegmentStepUp="${ifDefined(params.onInputSegmentStepUp)}"
            @onInputSegmentStepDown="${ifDefined(params.onInputSegmentStepDown)}"
            @onInputSegmentKeydown="${ifDefined(params.onInputSegmentKeydown)}"
            @onInputSegmentClick="${ifDefined(params.onInputSegmentClick)}"
            @onInputSegmentFocus="${ifDefined(params.onInputSegmentFocus)}"
            @onInputSegmentInput="${ifDefined(params.onInputSegmentInput)}"
            @onInputSegmentChange="${ifDefined(params.onInputSegmentChange)}"
        ></md-input-segment>
    `
}

/* prettier-ignore */
function renderLayoutItem(params = {}) {
    return html`
        <md-layout-item
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .region="${ifDefined(params.region)}"
            .size="${ifDefined(params.size)}"
            .collapsedSize="${ifDefined(params.collapsedSize)}"
            .modal="${ifDefined(params.modal)}"
            .open="${ifDefined(params.open)}"
            .expanded="${ifDefined(params.expanded)}"
            .docked="${ifDefined(params.docked)}"
            .showScrimOnOpen="${ifDefined(params.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(params.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(params.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(params.collapseOnScrimClick)}"
        ></md-layout-item>
    `
}

/* prettier-ignore */
function renderLayout(params = {}) {
    return html`
        <md-layout
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-layout>
    `
}

/* prettier-ignore */
function renderListItem(params = {}) {
    return html`
        <md-list-item
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .leading="${ifDefined(params.leading)}"
            .trailing="${ifDefined(params.trailing)}"
            .overline="${ifDefined(params.overline)}"
            .label="${ifDefined(params.label)}"
            .supporting="${ifDefined(params.supporting)}"
            .routerLink="${ifDefined(params.routerLink)}"
            .interactive="${ifDefined(params.interactive)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .selected="${ifDefined(params.selected)}"
        ></md-list-item>
    `
}

/* prettier-ignore */
function renderList(params = {}) {
    return html`
        <md-list
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .items="${ifDefined(params.items)}"
            .type="${ifDefined(params.type)}"
            .valueField="${ifDefined(params.valueField)}"
            .parentField="${ifDefined(params.parentField)}"
            .labelField="${ifDefined(params.labelField)}"
            .clearSelection="${ifDefined(params.clearSelection)}"
            .selectAll="${ifDefined(params.selectAll)}"
            .activeRow="${ifDefined(params.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(params.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(params.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(params.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(params.selectOnArrowDownActiveRow)}"
            .selectOnEnterActiveRow="${ifDefined(params.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(params.selectRange)}"
            .multiSelect="${ifDefined(params.multiSelect)}"
            .singleSelect="${ifDefined(params.singleSelect)}"
            .virtualScroll="${ifDefined(params.virtualScroll)}"
            .virtualScrollOptions="${ifDefined(params.virtualScrollOptions)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            @onListItemSelection="${ifDefined(params.onListItemSelection)}"
            @onListClick="${ifDefined(params.onListClick)}"
            @onListKeydown="${ifDefined(params.onListKeydown)}"
            @onListItemClick="${ifDefined(params.onListItemClick)}"
        ></md-list>
    `
}

/* prettier-ignore */
function renderNavigationBar(params = {}) {
    return html`
        <md-navigation-bar
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .items="${ifDefined(params.items)}"
            .type="${ifDefined(params.type)}"
            .valueField="${ifDefined(params.valueField)}"
            .parentField="${ifDefined(params.parentField)}"
            .labelField="${ifDefined(params.labelField)}"
            .clearSelection="${ifDefined(params.clearSelection)}"
            .selectAll="${ifDefined(params.selectAll)}"
            .activeRow="${ifDefined(params.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(params.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(params.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(params.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(params.selectOnArrowDownActiveRow)}"
            .selectOnEnterActiveRow="${ifDefined(params.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(params.selectRange)}"
            .multiSelect="${ifDefined(params.multiSelect)}"
            .singleSelect="${ifDefined(params.singleSelect)}"
            .virtualScroll="${ifDefined(params.virtualScroll)}"
            .virtualScrollOptions="${ifDefined(params.virtualScrollOptions)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .region="${ifDefined(params.region)}"
            .size="${ifDefined(params.size)}"
            .collapsedSize="${ifDefined(params.collapsedSize)}"
            .modal="${ifDefined(params.modal)}"
            .open="${ifDefined(params.open)}"
            .expanded="${ifDefined(params.expanded)}"
            .docked="${ifDefined(params.docked)}"
            .showScrimOnOpen="${ifDefined(params.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(params.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(params.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(params.collapseOnScrimClick)}"
            .layout="${ifDefined(params.layout)}"
        ></md-navigation-bar>
    `
}

/* prettier-ignore */
function renderNavigationDrawer(params = {}) {
    return html`
        <md-navigation-drawer
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .items="${ifDefined(params.items)}"
            .type="${ifDefined(params.type)}"
            .valueField="${ifDefined(params.valueField)}"
            .parentField="${ifDefined(params.parentField)}"
            .labelField="${ifDefined(params.labelField)}"
            .clearSelection="${ifDefined(params.clearSelection)}"
            .selectAll="${ifDefined(params.selectAll)}"
            .activeRow="${ifDefined(params.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(params.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(params.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(params.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(params.selectOnArrowDownActiveRow)}"
            .selectOnEnterActiveRow="${ifDefined(params.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(params.selectRange)}"
            .multiSelect="${ifDefined(params.multiSelect)}"
            .singleSelect="${ifDefined(params.singleSelect)}"
            .virtualScroll="${ifDefined(params.virtualScroll)}"
            .virtualScrollOptions="${ifDefined(params.virtualScrollOptions)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .region="${ifDefined(params.region)}"
            .size="${ifDefined(params.size)}"
            .collapsedSize="${ifDefined(params.collapsedSize)}"
            .modal="${ifDefined(params.modal)}"
            .open="${ifDefined(params.open)}"
            .expanded="${ifDefined(params.expanded)}"
            .docked="${ifDefined(params.docked)}"
            .showScrimOnOpen="${ifDefined(params.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(params.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(params.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(params.collapseOnScrimClick)}"
        ></md-navigation-drawer>
    `
}

/* prettier-ignore */
function renderNavigationRail(params = {}) {
    return html`
        <md-navigation-rail
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .items="${ifDefined(params.items)}"
            .type="${ifDefined(params.type)}"
            .valueField="${ifDefined(params.valueField)}"
            .parentField="${ifDefined(params.parentField)}"
            .labelField="${ifDefined(params.labelField)}"
            .clearSelection="${ifDefined(params.clearSelection)}"
            .selectAll="${ifDefined(params.selectAll)}"
            .activeRow="${ifDefined(params.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(params.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(params.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(params.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(params.selectOnArrowDownActiveRow)}"
            .selectOnEnterActiveRow="${ifDefined(params.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(params.selectRange)}"
            .multiSelect="${ifDefined(params.multiSelect)}"
            .singleSelect="${ifDefined(params.singleSelect)}"
            .virtualScroll="${ifDefined(params.virtualScroll)}"
            .virtualScrollOptions="${ifDefined(params.virtualScrollOptions)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .region="${ifDefined(params.region)}"
            .size="${ifDefined(params.size)}"
            .collapsedSize="${ifDefined(params.collapsedSize)}"
            .modal="${ifDefined(params.modal)}"
            .open="${ifDefined(params.open)}"
            .expanded="${ifDefined(params.expanded)}"
            .docked="${ifDefined(params.docked)}"
            .showScrimOnOpen="${ifDefined(params.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(params.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(params.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(params.collapseOnScrimClick)}"
            .iconButton="${ifDefined(params.iconButton)}"
            .fab="${ifDefined(params.fab)}"
        ></md-navigation-rail>
    `
}

/* prettier-ignore */
function renderPushMenu(params = {}) {
    return html`
        <md-push-menu
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-push-menu>
    `
}

/* prettier-ignore */
function renderRadioButton(params = {}) {
    return html`
        <md-radio-button
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .name="${ifDefined(params.name)}"
            .value="${ifDefined(params.value)}"
            .checked="${ifDefined(params.checked)}"
            .disabled="${ifDefined(params.disabled)}"
            .required="${ifDefined(params.required)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .tabIndex="${ifDefined(params.tabIndex)}"
            @onRadioButtonNativeInput="${ifDefined(params.onRadioButtonNativeInput)}"
        ></md-radio-button>
    `
}

/* prettier-ignore */
function renderScrim(params = {}) {
    return html`
        <md-scrim
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .open="${ifDefined(params.open)}"
            @onScrimClick="${ifDefined(params.onScrimClick)}"
            @onScrimShowed="${ifDefined(params.onScrimShowed)}"
            @onScrimClosed="${ifDefined(params.onScrimClosed)}"
            @onScrimShow="${ifDefined(params.onScrimShow)}"
            @onScrimClose="${ifDefined(params.onScrimClose)}"
        ></md-scrim>
    `
}

/* prettier-ignore */
function renderSheetBody(params = {}) {
    return html`
        <md-sheet-body
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-sheet-body>
    `
}

/* prettier-ignore */
function renderSheetFooter(params = {}) {
    return html`
        <md-sheet-footer
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .buttons="${ifDefined(params.buttons)}"
        ></md-sheet-footer>
    `
}

/* prettier-ignore */
function renderSheetHeader(params = {}) {
    return html`
        <md-sheet-header
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .leading="${ifDefined(params.leading)}"
            .headline="${ifDefined(params.headline)}"
            .trailing="${ifDefined(params.trailing)}"
        ></md-sheet-header>
    `
}

/* prettier-ignore */
function renderSheet(params = {}) {
    return html`
        <md-sheet
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .region="${ifDefined(params.region)}"
            .size="${ifDefined(params.size)}"
            .collapsedSize="${ifDefined(params.collapsedSize)}"
            .modal="${ifDefined(params.modal)}"
            .open="${ifDefined(params.open)}"
            .expanded="${ifDefined(params.expanded)}"
            .docked="${ifDefined(params.docked)}"
            .showScrimOnOpen="${ifDefined(params.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(params.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(params.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(params.collapseOnScrimClick)}"
            .leading="${ifDefined(params.leading)}"
            .headline="${ifDefined(params.headline)}"
            .trailing="${ifDefined(params.trailing)}"
            .buttons="${ifDefined(params.buttons)}"
            .inner="${ifDefined(params.inner)}"
        ></md-sheet>
    `
}

/* prettier-ignore */
function renderSlider(params = {}) {
    return html`
        <md-slider
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .name="${ifDefined(params.name)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            .step="${ifDefined(params.step)}"
            .value="${ifDefined(params.value)}"
            .orientation="${ifDefined(params.orientation)}"
            .size="${ifDefined(params.size)}"
            .icon="${ifDefined(params.icon)}"
            .label="${ifDefined(params.label)}"
            .flipLabel="${ifDefined(params.flipLabel)}"
        ></md-slider>
    `
}

/* prettier-ignore */
function renderSnackbar(params = {}) {
    return html`
        <md-snackbar
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .supporting="${ifDefined(params.supporting)}"
            .actions="${ifDefined(params.actions)}"
            .open="${ifDefined(params.open)}"
            @onSnackbarClosed="${ifDefined(params.onSnackbarClosed)}"
            @onSnackbarShowed="${ifDefined(params.onSnackbarShowed)}"
            @onSnackbarShow="${ifDefined(params.onSnackbarShow)}"
            @onSnackbarClose="${ifDefined(params.onSnackbarClose)}"
        ></md-snackbar>
    `
}

/* prettier-ignore */
function renderSplitButton(params = {}) {
    return html`
        <md-split-button
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .icon="${ifDefined(params.icon)}"
            .label="${ifDefined(params.label)}"
            .trailingIcon="${ifDefined(params.trailingIcon)}"
            .size="${ifDefined(params.size)}"
            .color="${ifDefined(params.color)}"
            .selected="${ifDefined(params.selected)}"
            @onSplitButtonClick="${ifDefined(params.onSplitButtonClick)}"
            @onSplitButtonPress="${ifDefined(params.onSplitButtonPress)}"
            @onSplitButtonKeydown="${ifDefined(params.onSplitButtonKeydown)}"
            @onSplitButtonIconClick="${ifDefined(params.onSplitButtonIconClick)}"
            @onSplitButtonSelection="${ifDefined(params.onSplitButtonSelection)}"
        ></md-split-button>
    `
}

/* prettier-ignore */
function renderSwitch(params = {}) {
    return html`
        <md-switch
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .name="${ifDefined(params.name)}"
            .value="${ifDefined(params.value)}"
            .checked="${ifDefined(params.checked)}"
            .disabled="${ifDefined(params.disabled)}"
            .required="${ifDefined(params.required)}"
            .rippleOptions="${ifDefined(params.rippleOptions)}"
            .icon="${ifDefined(params.icon)}"
            .tabIndex="${ifDefined(params.tabIndex)}"
            @onSwitchNativeInput="${ifDefined(params.onSwitchNativeInput)}"
        ></md-switch>
    `
}

/* prettier-ignore */
function renderTextField(params = {}) {
    return html`
        <md-text-field
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .leading="${ifDefined(params.leading)}"
            .label="${ifDefined(params.label)}"
            .prefix="${ifDefined(params.prefix)}"
            .suffix="${ifDefined(params.suffix)}"
            .clearable="${ifDefined(params.clearable)}"
            .trailing="${ifDefined(params.trailing)}"
            .supporting="${ifDefined(params.supporting)}"
            .color="${ifDefined(params.color)}"
            .type="${ifDefined(params.type)}"
            .name="${ifDefined(params.name)}"
            .value="${ifDefined(params.value)}"
            .placeholder="${ifDefined(params.placeholder)}"
            .disabled="${ifDefined(params.disabled)}"
            .readonly="${ifDefined(params.readonly)}"
            .required="${ifDefined(params.required)}"
            .minLength="${ifDefined(params.minLength)}"
            .maxLength="${ifDefined(params.maxLength)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            .step="${ifDefined(params.step)}"
            .pattern="${ifDefined(params.pattern)}"
            .autocomplete="${ifDefined(params.autocomplete)}"
            .inputmode="${ifDefined(params.inputmode)}"
            .validateOnBlur="${ifDefined(params.validateOnBlur)}"
            .validateOnInput="${ifDefined(params.validateOnInput)}"
            @onTextFieldNativeFocus="${ifDefined(params.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(params.onTextFieldNativeBlur)}"
            @onTextFieldNativeInput="${ifDefined(params.onTextFieldNativeInput)}"
            @onTextFieldNativeChange="${ifDefined(params.onTextFieldNativeChange)}"
            @onTextFieldNativeClick="${ifDefined(params.onTextFieldNativeClick)}"
            @onTextFieldNativeInvalid="${ifDefined(params.onTextFieldNativeInvalid)}"
        ></md-text-field>
    `
}

/* prettier-ignore */
function renderTextarea(params = {}) {
    return html`
        <md-textarea
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .leading="${ifDefined(params.leading)}"
            .label="${ifDefined(params.label)}"
            .prefix="${ifDefined(params.prefix)}"
            .suffix="${ifDefined(params.suffix)}"
            .clearable="${ifDefined(params.clearable)}"
            .trailing="${ifDefined(params.trailing)}"
            .supporting="${ifDefined(params.supporting)}"
            .color="${ifDefined(params.color)}"
            .type="${ifDefined(params.type)}"
            .name="${ifDefined(params.name)}"
            .value="${ifDefined(params.value)}"
            .placeholder="${ifDefined(params.placeholder)}"
            .disabled="${ifDefined(params.disabled)}"
            .readonly="${ifDefined(params.readonly)}"
            .required="${ifDefined(params.required)}"
            .minLength="${ifDefined(params.minLength)}"
            .maxLength="${ifDefined(params.maxLength)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            .step="${ifDefined(params.step)}"
            .pattern="${ifDefined(params.pattern)}"
            .autocomplete="${ifDefined(params.autocomplete)}"
            .inputmode="${ifDefined(params.inputmode)}"
            .validateOnBlur="${ifDefined(params.validateOnBlur)}"
            .validateOnInput="${ifDefined(params.validateOnInput)}"
            .rows="${ifDefined(params.rows)}"
            .cols="${ifDefined(params.cols)}"
        ></md-textarea>
    `
}

/* prettier-ignore */
function renderTooltip(params = {}) {
    return html`
        <md-tooltip
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
            .subhead="${ifDefined(params.subhead)}"
            .supporting="${ifDefined(params.supporting)}"
            .buttons="${ifDefined(params.buttons)}"
            .variant="${ifDefined(params.variant)}"
            .open="${ifDefined(params.open)}"
            .placement="${ifDefined(params.placement)}"
            .offset="${ifDefined(params.offset)}"
            .for="${ifDefined(params.for)}"
        ></md-tooltip>
    `
}

/* prettier-ignore */
function renderTree(params = {}) {
    return html`
        <md-tree
            .data="${params}"
            class="${classMap(params.classMap ?? {})}"
            style="${styleMap(params.styleMap ?? {})}"
        ></md-tree>
    `
}

/* prettier-ignore */
function renderComponent(component, params = {}) {
    return choose(component,[
        ["badge", () => renderBadge(component, params)],
        ["button", () => renderButton(component, params)],
        ["button-group", () => renderButtonGroup(component, params)],
        ["card-body", () => renderCardBody(component, params)],
        ["card-footer", () => renderCardFooter(component, params)],
        ["card-header", () => renderCardHeader(component, params)],
        ["card", () => renderCard(component, params)],
        ["checkbox", () => renderCheckbox(component, params)],
        ["data-table-cell", () => renderDataTableCell(component, params)],
        ["data-table", () => renderDataTable(component, params)],
        ["datetime-picker", () => renderDatetimePicker(component, params)],
        ["dialog-body", () => renderDialogBody(component, params)],
        ["dialog-footer", () => renderDialogFooter(component, params)],
        ["dialog-header", () => renderDialogHeader(component, params)],
        ["dialog", () => renderDialog(component, params)],
        ["fab", () => renderFab(component, params)],
        ["form", () => renderForm(component, params)],
        ["grid-column", () => renderGridColumn(component, params)],
        ["grid", () => renderGrid(component, params)],
        ["icon", () => renderIcon(component, params)],
        ["icon-button", () => renderIconButton(component, params)],
        ["image", () => renderImage(component, params)],
        ["input-datetime", () => renderInputDatetime(component, params)],
        ["input-enum", () => renderInputEnum(component, params)],
        ["input-number", () => renderInputNumber(component, params)],
        ["input-segment", () => renderInputSegment(component, params)],
        ["layout-item", () => renderLayoutItem(component, params)],
        ["layout", () => renderLayout(component, params)],
        ["list-item", () => renderListItem(component, params)],
        ["list", () => renderList(component, params)],
        ["navigation-bar", () => renderNavigationBar(component, params)],
        ["navigation-drawer", () => renderNavigationDrawer(component, params)],
        ["navigation-rail", () => renderNavigationRail(component, params)],
        ["push-menu", () => renderPushMenu(component, params)],
        ["radio-button", () => renderRadioButton(component, params)],
        ["scrim", () => renderScrim(component, params)],
        ["sheet-body", () => renderSheetBody(component, params)],
        ["sheet-footer", () => renderSheetFooter(component, params)],
        ["sheet-header", () => renderSheetHeader(component, params)],
        ["sheet", () => renderSheet(component, params)],
        ["slider", () => renderSlider(component, params)],
        ["snackbar", () => renderSnackbar(component, params)],
        ["split-button", () => renderSplitButton(component, params)],
        ["switch", () => renderSwitch(component, params)],
        ["text-field", () => renderTextField(component, params)],
        ["textarea", () => renderTextarea(component, params)],
        ["tooltip", () => renderTooltip(component, params)],
        ["tree", () => renderTree(component, params)],
    ], () => nothing,);
}

/* prettier-ignore */
export { 
    renderBadge,
    renderButton,
    renderButtonGroup,
    renderCardBody,
    renderCardFooter,
    renderCardHeader,
    renderCard,
    renderCheckbox,
    renderDataTableCell,
    renderDataTable,
    renderDatetimePicker,
    renderDialogBody,
    renderDialogFooter,
    renderDialogHeader,
    renderDialog,
    renderFab,
    renderForm,
    renderGridColumn,
    renderGrid,
    renderIcon,
    renderIconButton,
    renderImage,
    renderInputDatetime,
    renderInputEnum,
    renderInputNumber,
    renderInputSegment,
    renderLayoutItem,
    renderLayout,
    renderListItem,
    renderList,
    renderNavigationBar,
    renderNavigationDrawer,
    renderNavigationRail,
    renderPushMenu,
    renderRadioButton,
    renderScrim,
    renderSheetBody,
    renderSheetFooter,
    renderSheetHeader,
    renderSheet,
    renderSlider,
    renderSnackbar,
    renderSplitButton,
    renderSwitch,
    renderTextField,
    renderTextarea,
    renderTooltip,
    renderTree,
};
