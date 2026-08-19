import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/* prettier-ignore */
function renderBadge(properties = {}) {
    return html`
        <md-badge
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .label="${ifDefined(properties.label)}"
            .max="${ifDefined(properties.max)}"
            .maxLength="${ifDefined(properties.maxLength)}"
        ></md-badge>
    `
}

/* prettier-ignore */
function renderButton(properties = {}) {
    return html`
        <md-button
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .variant="${ifDefined(properties.variant)}"
            .size="${ifDefined(properties.size)}"
            .shape="${ifDefined(properties.shape)}"
            .color="${ifDefined(properties.color)}"
            .label="${ifDefined(properties.label)}"
            .icon="${ifDefined(properties.icon)}"
            .selected="${ifDefined(properties.selected)}"
            .disabled="${ifDefined(properties.disabled)}"
            .type="${ifDefined(properties.type)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .selectOnToggle="${ifDefined(properties.selectOnToggle)}"
            @onButtonSelection="${ifDefined(properties.onButtonSelection)}"
            @onButtonClick="${ifDefined(properties.onButtonClick)}"
        ></md-button>
    `
}

/* prettier-ignore */
function renderButtonGroup(properties = {}) {
    return html`
        <md-button-group
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .buttons="${ifDefined(properties.buttons)}"
            .variant="${ifDefined(properties.variant)}"
            .size="${ifDefined(properties.size)}"
            .shape="${ifDefined(properties.shape)}"
            .color="${ifDefined(properties.color)}"
            .vertical="${ifDefined(properties.vertical)}"
            .singleSelect="${ifDefined(properties.singleSelect)}"
            .multiSelect="${ifDefined(properties.multiSelect)}"
            @onButtonGroupItemSelection="${ifDefined(properties.onButtonGroupItemSelection)}"
            @onButtonGroupItemClick="${ifDefined(properties.onButtonGroupItemClick)}"
        ></md-button-group>
    `
}

/* prettier-ignore */
function renderCardBody(properties = {}) {
    return html`
        <md-card-body
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-card-body>
    `
}

/* prettier-ignore */
function renderCardFooter(properties = {}) {
    return html`
        <md-card-footer
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-card-footer>
    `
}

/* prettier-ignore */
function renderCardHeader(properties = {}) {
    return html`
        <md-card-header
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-card-header>
    `
}

/* prettier-ignore */
function renderCard(properties = {}) {
    return html`
        <md-card
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .color="${ifDefined(properties.color)}"
        ></md-card>
    `
}

/* prettier-ignore */
function renderCheckbox(properties = {}) {
    return html`
        <md-checkbox
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .name="${ifDefined(properties.name)}"
            .value="${ifDefined(properties.value)}"
            .indeterminate="${ifDefined(properties.indeterminate)}"
            .checked="${ifDefined(properties.checked)}"
            .disabled="${ifDefined(properties.disabled)}"
            .required="${ifDefined(properties.required)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .validateOnInput="${ifDefined(properties.validateOnInput)}"
            .tabIndex="${ifDefined(properties.tabIndex)}"
            @onCheckboxNativeInvalid="${ifDefined(properties.onCheckboxNativeInvalid)}"
            @onCheckboxNativeInput="${ifDefined(properties.onCheckboxNativeInput)}"
        ></md-checkbox>
    `
}

/* prettier-ignore */
function renderDataTableCell(properties = {}) {
    return html`
        <md-data-table-cell
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .label="${ifDefined(properties.label)}"
        ></md-data-table-cell>
    `
}

/* prettier-ignore */
function renderDataTable(properties = {}) {
    return html`
        <md-data-table
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .columns="${ifDefined(properties.columns)}"
            .rows="${ifDefined(properties.rows)}"
            .valueField="${ifDefined(properties.valueField)}"
            .clearSelection="${ifDefined(properties.clearSelection)}"
            .selectAll="${ifDefined(properties.selectAll)}"
            .activeRow="${ifDefined(properties.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(properties.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(properties.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(properties.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(properties.selectOnArrowDownActiveRow)}"
            .activeCell="${ifDefined(properties.activeCell)}"
            .selectOnEnterActiveRow="${ifDefined(properties.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(properties.selectRange)}"
            .multiSelect="${ifDefined(properties.multiSelect)}"
            .singleSelect="${ifDefined(properties.singleSelect)}"
            .checkbox="${ifDefined(properties.checkbox)}"
            @onDataTableRowSelection="${ifDefined(properties.onDataTableRowSelection)}"
            @onDataTableClick="${ifDefined(properties.onDataTableClick)}"
            @onDataTableKeydown="${ifDefined(properties.onDataTableKeydown)}"
            @onDataTableRowClick="${ifDefined(properties.onDataTableRowClick)}"
            @onDataTableCellClick="${ifDefined(properties.onDataTableCellClick)}"
        ></md-data-table>
    `
}

/* prettier-ignore */
function renderDatetimePicker(properties = {}) {
    return html`
        <md-datetime-picker
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .hour12="${ifDefined(properties.hour12)}"
            .locale="${ifDefined(properties.locale)}"
            .calendarType="${ifDefined(properties.calendarType)}"
            .selection="${ifDefined(properties.selection)}"
            .variant="${ifDefined(properties.variant)}"
            .view="${ifDefined(properties.view)}"
            .type="${ifDefined(properties.type)}"
            .value="${ifDefined(properties.value)}"
            @onDatetimePickerChange="${ifDefined(properties.onDatetimePickerChange)}"
        ></md-datetime-picker>
    `
}

/* prettier-ignore */
function renderDialogBody(properties = {}) {
    return html`
        <md-dialog-body
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-dialog-body>
    `
}

/* prettier-ignore */
function renderDialogFooter(properties = {}) {
    return html`
        <md-dialog-footer
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .buttons="${ifDefined(properties.buttons)}"
        ></md-dialog-footer>
    `
}

/* prettier-ignore */
function renderDialogHeader(properties = {}) {
    return html`
        <md-dialog-header
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .leading="${ifDefined(properties.leading)}"
            .headline="${ifDefined(properties.headline)}"
            .trailing="${ifDefined(properties.trailing)}"
        ></md-dialog-header>
    `
}

/* prettier-ignore */
function renderDialog(properties = {}) {
    return html`
        <md-dialog
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .leading="${ifDefined(properties.leading)}"
            .headline="${ifDefined(properties.headline)}"
            .trailing="${ifDefined(properties.trailing)}"
            .buttons="${ifDefined(properties.buttons)}"
            .open="${ifDefined(properties.open)}"
            .variant="${ifDefined(properties.variant)}"
            .heroIcon="${ifDefined(properties.heroIcon)}"
        ></md-dialog>
    `
}

/* prettier-ignore */
function renderFab(properties = {}) {
    return html`
        <md-fab
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .size="${ifDefined(properties.size)}"
            .color="${ifDefined(properties.color)}"
            .icon="${ifDefined(properties.icon)}"
            .label="${ifDefined(properties.label)}"
            .rippleController="${ifDefined(properties.rippleController)}"
            .unelevated="${ifDefined(properties.unelevated)}"
            @onFabClick="${ifDefined(properties.onFabClick)}"
        ></md-fab>
    `
}

/* prettier-ignore */
function renderForm(properties = {}) {
    return html`
        <md-form
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .method="${ifDefined(properties.method)}"
            .action="${ifDefined(properties.action)}"
            .enctype="${ifDefined(properties.enctype)}"
            .target="${ifDefined(properties.target)}"
            .autocomplete="${ifDefined(properties.autocomplete)}"
            .noValidate="${ifDefined(properties.noValidate)}"
            .inner="${ifDefined(properties.inner)}"
            @onFormNativeFormdata="${ifDefined(properties.onFormNativeFormdata)}"
            @onFormNativeReset="${ifDefined(properties.onFormNativeReset)}"
            @onFormNativeSubmit="${ifDefined(properties.onFormNativeSubmit)}"
        ></md-form>
    `
}

/* prettier-ignore */
function renderGridColumn(properties = {}) {
    return html`
        <md-grid-column
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .expanded="${ifDefined(properties.expanded)}"
            .medium="${ifDefined(properties.medium)}"
            .compact="${ifDefined(properties.compact)}"
        ></md-grid-column>
    `
}

/* prettier-ignore */
function renderGrid(properties = {}) {
    return html`
        <md-grid
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-grid>
    `
}

/* prettier-ignore */
function renderIcon(properties = {}) {
    return html`
        <md-icon
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .icon="${ifDefined(properties.icon)}"
        ></md-icon>
    `
}

/* prettier-ignore */
function renderIconButton(properties = {}) {
    return html`
        <md-icon-button
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .icon="${ifDefined(properties.icon)}"
            .variant="${ifDefined(properties.variant)}"
            .size="${ifDefined(properties.size)}"
            .shape="${ifDefined(properties.shape)}"
            .color="${ifDefined(properties.color)}"
            .width="${ifDefined(properties.width)}"
            .selected="${ifDefined(properties.selected)}"
            .disabled="${ifDefined(properties.disabled)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .selectOnToggle="${ifDefined(properties.selectOnToggle)}"
            @onIconButtonSelection="${ifDefined(properties.onIconButtonSelection)}"
            @onIconButtonClick="${ifDefined(properties.onIconButtonClick)}"
        ></md-icon-button>
    `
}

/* prettier-ignore */
function renderImage(properties = {}) {
    return html`
        <md-image
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .src="${ifDefined(properties.src)}"
            .alt="${ifDefined(properties.alt)}"
            .loading="${ifDefined(properties.loading)}"
            .shape="${ifDefined(properties.shape)}"
            .errorSrc="${ifDefined(properties.errorSrc)}"
            @onImageNativeLoad="${ifDefined(properties.onImageNativeLoad)}"
            @onImageNativeError="${ifDefined(properties.onImageNativeError)}"
        ></md-image>
    `
}

/* prettier-ignore */
function renderInputDatetime(properties = {}) {
    return html`
        <my-input-datetime
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .type="${ifDefined(properties.type)}"
        ></my-input-datetime>
    `
}

/* prettier-ignore */
function renderInputEnum(properties = {}) {
    return html`
        <md-input-enum
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .value="${ifDefined(properties.value)}"
            .size="${ifDefined(properties.size)}"
            .placeholder="${ifDefined(properties.placeholder)}"
            .tabIndex="${ifDefined(properties.tabIndex)}"
            .options="${ifDefined(properties.options)}"
            .selectedIndex="${ifDefined(properties.selectedIndex)}"
            .bufferTimeout="${ifDefined(properties.bufferTimeout)}"
            @onInputEnumInput="${ifDefined(properties.onInputEnumInput)}"
            @onInputEnumChange="${ifDefined(properties.onInputEnumChange)}"
            @onInputEnumKeydown="${ifDefined(properties.onInputEnumKeydown)}"
            @onInputEnumFocus="${ifDefined(properties.onInputEnumFocus)}"
            @onInputEnumBlur="${ifDefined(properties.onInputEnumBlur)}"
        ></md-input-enum>
    `
}

/* prettier-ignore */
function renderInputNumber(properties = {}) {
    return html`
        <md-input-number
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .value="${ifDefined(properties.value)}"
            .size="${ifDefined(properties.size)}"
            .step="${ifDefined(properties.step)}"
            .min="${ifDefined(properties.min)}"
            .max="${ifDefined(properties.max)}"
            .tabIndex="${ifDefined(properties.tabIndex)}"
            @onInputNumberInput="${ifDefined(properties.onInputNumberInput)}"
            @onInputNumberChange="${ifDefined(properties.onInputNumberChange)}"
            @onInputNumberKeydown="${ifDefined(properties.onInputNumberKeydown)}"
            @onInputNumberFocus="${ifDefined(properties.onInputNumberFocus)}"
            @onInputNumberBlur="${ifDefined(properties.onInputNumberBlur)}"
        ></md-input-number>
    `
}

/* prettier-ignore */
function renderInputSegment(properties = {}) {
    return html`
        <md-input-segment
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .value="${ifDefined(properties.value)}"
            .size="${ifDefined(properties.size)}"
            .step="${ifDefined(properties.step)}"
            .min="${ifDefined(properties.min)}"
            .max="${ifDefined(properties.max)}"
            .threshold="${ifDefined(properties.threshold)}"
            .startValue="${ifDefined(properties.startValue)}"
            .placeholder="${ifDefined(properties.placeholder)}"
            .maxLength="${ifDefined(properties.maxLength)}"
            .clampOnInput="${ifDefined(properties.clampOnInput)}"
            .tabIndex="${ifDefined(properties.tabIndex)}"
            @onInputSegmentInput="${ifDefined(properties.onInputSegmentInput)}"
            @onInputSegmentChange="${ifDefined(properties.onInputSegmentChange)}"
            @onInputSegmentKeydown="${ifDefined(properties.onInputSegmentKeydown)}"
            @onInputSegmentFocus="${ifDefined(properties.onInputSegmentFocus)}"
            @onInputSegmentBlur="${ifDefined(properties.onInputSegmentBlur)}"
        ></md-input-segment>
    `
}

/* prettier-ignore */
function renderLayoutItem(properties = {}) {
    return html`
        <md-layout-item
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .region="${ifDefined(properties.region)}"
            .size="${ifDefined(properties.size)}"
            .collapsedSize="${ifDefined(properties.collapsedSize)}"
            .modal="${ifDefined(properties.modal)}"
            .open="${ifDefined(properties.open)}"
            .expanded="${ifDefined(properties.expanded)}"
            .docked="${ifDefined(properties.docked)}"
            .showScrimOnOpen="${ifDefined(properties.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(properties.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(properties.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(properties.collapseOnScrimClick)}"
        ></md-layout-item>
    `
}

/* prettier-ignore */
function renderLayout(properties = {}) {
    return html`
        <md-layout
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-layout>
    `
}

/* prettier-ignore */
function renderListItem(properties = {}) {
    return html`
        <md-list-item
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .leading="${ifDefined(properties.leading)}"
            .trailing="${ifDefined(properties.trailing)}"
            .overline="${ifDefined(properties.overline)}"
            .label="${ifDefined(properties.label)}"
            .supporting="${ifDefined(properties.supporting)}"
            .routerLink="${ifDefined(properties.routerLink)}"
            .interactive="${ifDefined(properties.interactive)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .selected="${ifDefined(properties.selected)}"
        ></md-list-item>
    `
}

/* prettier-ignore */
function renderList(properties = {}) {
    return html`
        <md-list
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .items="${ifDefined(properties.items)}"
            .type="${ifDefined(properties.type)}"
            .valueField="${ifDefined(properties.valueField)}"
            .parentField="${ifDefined(properties.parentField)}"
            .labelField="${ifDefined(properties.labelField)}"
            .clearSelection="${ifDefined(properties.clearSelection)}"
            .selectAll="${ifDefined(properties.selectAll)}"
            .activeRow="${ifDefined(properties.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(properties.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(properties.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(properties.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(properties.selectOnArrowDownActiveRow)}"
            .selectOnEnterActiveRow="${ifDefined(properties.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(properties.selectRange)}"
            .multiSelect="${ifDefined(properties.multiSelect)}"
            .singleSelect="${ifDefined(properties.singleSelect)}"
            .virtualScroll="${ifDefined(properties.virtualScroll)}"
            .virtualScrollOptions="${ifDefined(properties.virtualScrollOptions)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            @onListItemSelection="${ifDefined(properties.onListItemSelection)}"
            @onListClick="${ifDefined(properties.onListClick)}"
            @onListKeydown="${ifDefined(properties.onListKeydown)}"
            @onListItemClick="${ifDefined(properties.onListItemClick)}"
        ></md-list>
    `
}

/* prettier-ignore */
function renderNavigationBar(properties = {}) {
    return html`
        <md-navigation-bar
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .items="${ifDefined(properties.items)}"
            .type="${ifDefined(properties.type)}"
            .valueField="${ifDefined(properties.valueField)}"
            .parentField="${ifDefined(properties.parentField)}"
            .labelField="${ifDefined(properties.labelField)}"
            .clearSelection="${ifDefined(properties.clearSelection)}"
            .selectAll="${ifDefined(properties.selectAll)}"
            .activeRow="${ifDefined(properties.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(properties.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(properties.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(properties.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(properties.selectOnArrowDownActiveRow)}"
            .selectOnEnterActiveRow="${ifDefined(properties.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(properties.selectRange)}"
            .multiSelect="${ifDefined(properties.multiSelect)}"
            .singleSelect="${ifDefined(properties.singleSelect)}"
            .virtualScroll="${ifDefined(properties.virtualScroll)}"
            .virtualScrollOptions="${ifDefined(properties.virtualScrollOptions)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .region="${ifDefined(properties.region)}"
            .size="${ifDefined(properties.size)}"
            .collapsedSize="${ifDefined(properties.collapsedSize)}"
            .modal="${ifDefined(properties.modal)}"
            .open="${ifDefined(properties.open)}"
            .expanded="${ifDefined(properties.expanded)}"
            .docked="${ifDefined(properties.docked)}"
            .showScrimOnOpen="${ifDefined(properties.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(properties.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(properties.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(properties.collapseOnScrimClick)}"
            .layout="${ifDefined(properties.layout)}"
        ></md-navigation-bar>
    `
}

/* prettier-ignore */
function renderNavigationDrawer(properties = {}) {
    return html`
        <md-navigation-drawer
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .items="${ifDefined(properties.items)}"
            .type="${ifDefined(properties.type)}"
            .valueField="${ifDefined(properties.valueField)}"
            .parentField="${ifDefined(properties.parentField)}"
            .labelField="${ifDefined(properties.labelField)}"
            .clearSelection="${ifDefined(properties.clearSelection)}"
            .selectAll="${ifDefined(properties.selectAll)}"
            .activeRow="${ifDefined(properties.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(properties.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(properties.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(properties.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(properties.selectOnArrowDownActiveRow)}"
            .selectOnEnterActiveRow="${ifDefined(properties.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(properties.selectRange)}"
            .multiSelect="${ifDefined(properties.multiSelect)}"
            .singleSelect="${ifDefined(properties.singleSelect)}"
            .virtualScroll="${ifDefined(properties.virtualScroll)}"
            .virtualScrollOptions="${ifDefined(properties.virtualScrollOptions)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .region="${ifDefined(properties.region)}"
            .size="${ifDefined(properties.size)}"
            .collapsedSize="${ifDefined(properties.collapsedSize)}"
            .modal="${ifDefined(properties.modal)}"
            .open="${ifDefined(properties.open)}"
            .expanded="${ifDefined(properties.expanded)}"
            .docked="${ifDefined(properties.docked)}"
            .showScrimOnOpen="${ifDefined(properties.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(properties.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(properties.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(properties.collapseOnScrimClick)}"
        ></md-navigation-drawer>
    `
}

/* prettier-ignore */
function renderNavigationRail(properties = {}) {
    return html`
        <md-navigation-rail
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .items="${ifDefined(properties.items)}"
            .type="${ifDefined(properties.type)}"
            .valueField="${ifDefined(properties.valueField)}"
            .parentField="${ifDefined(properties.parentField)}"
            .labelField="${ifDefined(properties.labelField)}"
            .clearSelection="${ifDefined(properties.clearSelection)}"
            .selectAll="${ifDefined(properties.selectAll)}"
            .activeRow="${ifDefined(properties.activeRow)}"
            .scrollOnArrowUpActiveRow="${ifDefined(properties.scrollOnArrowUpActiveRow)}"
            .selectOnArrowUpActiveRow="${ifDefined(properties.selectOnArrowUpActiveRow)}"
            .scrollOnArrowDownActiveRow="${ifDefined(properties.scrollOnArrowDownActiveRow)}"
            .selectOnArrowDownActiveRow="${ifDefined(properties.selectOnArrowDownActiveRow)}"
            .selectOnEnterActiveRow="${ifDefined(properties.selectOnEnterActiveRow)}"
            .selectRange="${ifDefined(properties.selectRange)}"
            .multiSelect="${ifDefined(properties.multiSelect)}"
            .singleSelect="${ifDefined(properties.singleSelect)}"
            .virtualScroll="${ifDefined(properties.virtualScroll)}"
            .virtualScrollOptions="${ifDefined(properties.virtualScrollOptions)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .region="${ifDefined(properties.region)}"
            .size="${ifDefined(properties.size)}"
            .collapsedSize="${ifDefined(properties.collapsedSize)}"
            .modal="${ifDefined(properties.modal)}"
            .open="${ifDefined(properties.open)}"
            .expanded="${ifDefined(properties.expanded)}"
            .docked="${ifDefined(properties.docked)}"
            .showScrimOnOpen="${ifDefined(properties.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(properties.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(properties.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(properties.collapseOnScrimClick)}"
            .iconButton="${ifDefined(properties.iconButton)}"
            .fab="${ifDefined(properties.fab)}"
        ></md-navigation-rail>
    `
}

/* prettier-ignore */
function renderPushMenu(properties = {}) {
    return html`
        <md-push-menu
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-push-menu>
    `
}

/* prettier-ignore */
function renderRadioButton(properties = {}) {
    return html`
        <md-radio-button
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .name="${ifDefined(properties.name)}"
            .value="${ifDefined(properties.value)}"
            .checked="${ifDefined(properties.checked)}"
            .disabled="${ifDefined(properties.disabled)}"
            .required="${ifDefined(properties.required)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .tabIndex="${ifDefined(properties.tabIndex)}"
            @onRadioButtonNativeInput="${ifDefined(properties.onRadioButtonNativeInput)}"
        ></md-radio-button>
    `
}

/* prettier-ignore */
function renderScrim(properties = {}) {
    return html`
        <md-scrim
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .open="${ifDefined(properties.open)}"
            @onScrimClick="${ifDefined(properties.onScrimClick)}"
            @onScrimShowed="${ifDefined(properties.onScrimShowed)}"
            @onScrimClosed="${ifDefined(properties.onScrimClosed)}"
            @onScrimShow="${ifDefined(properties.onScrimShow)}"
            @onScrimClose="${ifDefined(properties.onScrimClose)}"
        ></md-scrim>
    `
}

/* prettier-ignore */
function renderSheetBody(properties = {}) {
    return html`
        <md-sheet-body
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-sheet-body>
    `
}

/* prettier-ignore */
function renderSheetFooter(properties = {}) {
    return html`
        <md-sheet-footer
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .buttons="${ifDefined(properties.buttons)}"
        ></md-sheet-footer>
    `
}

/* prettier-ignore */
function renderSheetHeader(properties = {}) {
    return html`
        <md-sheet-header
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .leading="${ifDefined(properties.leading)}"
            .headline="${ifDefined(properties.headline)}"
            .trailing="${ifDefined(properties.trailing)}"
        ></md-sheet-header>
    `
}

/* prettier-ignore */
function renderSheet(properties = {}) {
    return html`
        <md-sheet
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .region="${ifDefined(properties.region)}"
            .size="${ifDefined(properties.size)}"
            .collapsedSize="${ifDefined(properties.collapsedSize)}"
            .modal="${ifDefined(properties.modal)}"
            .open="${ifDefined(properties.open)}"
            .expanded="${ifDefined(properties.expanded)}"
            .docked="${ifDefined(properties.docked)}"
            .showScrimOnOpen="${ifDefined(properties.showScrimOnOpen)}"
            .showScrimOnExpanded="${ifDefined(properties.showScrimOnExpanded)}"
            .closeOnScrimClick="${ifDefined(properties.closeOnScrimClick)}"
            .collapseOnScrimClick="${ifDefined(properties.collapseOnScrimClick)}"
            .leading="${ifDefined(properties.leading)}"
            .headline="${ifDefined(properties.headline)}"
            .trailing="${ifDefined(properties.trailing)}"
            .buttons="${ifDefined(properties.buttons)}"
            .inner="${ifDefined(properties.inner)}"
        ></md-sheet>
    `
}

/* prettier-ignore */
function renderSlider(properties = {}) {
    return html`
        <md-slider
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .name="${ifDefined(properties.name)}"
            .min="${ifDefined(properties.min)}"
            .max="${ifDefined(properties.max)}"
            .step="${ifDefined(properties.step)}"
            .value="${ifDefined(properties.value)}"
            .orientation="${ifDefined(properties.orientation)}"
            .size="${ifDefined(properties.size)}"
            .icon="${ifDefined(properties.icon)}"
            .label="${ifDefined(properties.label)}"
            .flipLabel="${ifDefined(properties.flipLabel)}"
        ></md-slider>
    `
}

/* prettier-ignore */
function renderSnackbar(properties = {}) {
    return html`
        <md-snackbar
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .supporting="${ifDefined(properties.supporting)}"
            .actions="${ifDefined(properties.actions)}"
            .open="${ifDefined(properties.open)}"
            @onSnackbarClosed="${ifDefined(properties.onSnackbarClosed)}"
            @onSnackbarShowed="${ifDefined(properties.onSnackbarShowed)}"
            @onSnackbarShow="${ifDefined(properties.onSnackbarShow)}"
            @onSnackbarClose="${ifDefined(properties.onSnackbarClose)}"
        ></md-snackbar>
    `
}

/* prettier-ignore */
function renderSplitButton(properties = {}) {
    return html`
        <md-split-button
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .icon="${ifDefined(properties.icon)}"
            .label="${ifDefined(properties.label)}"
            .trailingIcon="${ifDefined(properties.trailingIcon)}"
            .size="${ifDefined(properties.size)}"
            .color="${ifDefined(properties.color)}"
            .selected="${ifDefined(properties.selected)}"
            @onSplitButtonClick="${ifDefined(properties.onSplitButtonClick)}"
            @onSplitButtonPress="${ifDefined(properties.onSplitButtonPress)}"
            @onSplitButtonKeydown="${ifDefined(properties.onSplitButtonKeydown)}"
            @onSplitButtonIconClick="${ifDefined(properties.onSplitButtonIconClick)}"
            @onSplitButtonSelection="${ifDefined(properties.onSplitButtonSelection)}"
        ></md-split-button>
    `
}

/* prettier-ignore */
function renderSwitch(properties = {}) {
    return html`
        <md-switch
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .name="${ifDefined(properties.name)}"
            .value="${ifDefined(properties.value)}"
            .checked="${ifDefined(properties.checked)}"
            .disabled="${ifDefined(properties.disabled)}"
            .required="${ifDefined(properties.required)}"
            .rippleOptions="${ifDefined(properties.rippleOptions)}"
            .icon="${ifDefined(properties.icon)}"
            .tabIndex="${ifDefined(properties.tabIndex)}"
            @onSwitchNativeInput="${ifDefined(properties.onSwitchNativeInput)}"
        ></md-switch>
    `
}

/* prettier-ignore */
function renderTextField(properties = {}) {
    return html`
        <md-text-field
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .leading="${ifDefined(properties.leading)}"
            .label="${ifDefined(properties.label)}"
            .prefix="${ifDefined(properties.prefix)}"
            .suffix="${ifDefined(properties.suffix)}"
            .clearable="${ifDefined(properties.clearable)}"
            .trailing="${ifDefined(properties.trailing)}"
            .supporting="${ifDefined(properties.supporting)}"
            .color="${ifDefined(properties.color)}"
            .type="${ifDefined(properties.type)}"
            .name="${ifDefined(properties.name)}"
            .value="${ifDefined(properties.value)}"
            .placeholder="${ifDefined(properties.placeholder)}"
            .disabled="${ifDefined(properties.disabled)}"
            .readonly="${ifDefined(properties.readonly)}"
            .required="${ifDefined(properties.required)}"
            .minLength="${ifDefined(properties.minLength)}"
            .maxLength="${ifDefined(properties.maxLength)}"
            .min="${ifDefined(properties.min)}"
            .max="${ifDefined(properties.max)}"
            .step="${ifDefined(properties.step)}"
            .pattern="${ifDefined(properties.pattern)}"
            .autocomplete="${ifDefined(properties.autocomplete)}"
            .inputmode="${ifDefined(properties.inputmode)}"
            .validateOnBlur="${ifDefined(properties.validateOnBlur)}"
            .validateOnInput="${ifDefined(properties.validateOnInput)}"
            @onTextFieldNativeFocus="${ifDefined(properties.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(properties.onTextFieldNativeBlur)}"
            @onTextFieldNativeInput="${ifDefined(properties.onTextFieldNativeInput)}"
            @onTextFieldNativeChange="${ifDefined(properties.onTextFieldNativeChange)}"
            @onTextFieldNativeClick="${ifDefined(properties.onTextFieldNativeClick)}"
            @onTextFieldNativeInvalid="${ifDefined(properties.onTextFieldNativeInvalid)}"
        ></md-text-field>
    `
}

/* prettier-ignore */
function renderTextarea(properties = {}) {
    return html`
        <md-textarea
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .leading="${ifDefined(properties.leading)}"
            .label="${ifDefined(properties.label)}"
            .prefix="${ifDefined(properties.prefix)}"
            .suffix="${ifDefined(properties.suffix)}"
            .clearable="${ifDefined(properties.clearable)}"
            .trailing="${ifDefined(properties.trailing)}"
            .supporting="${ifDefined(properties.supporting)}"
            .color="${ifDefined(properties.color)}"
            .type="${ifDefined(properties.type)}"
            .name="${ifDefined(properties.name)}"
            .value="${ifDefined(properties.value)}"
            .placeholder="${ifDefined(properties.placeholder)}"
            .disabled="${ifDefined(properties.disabled)}"
            .readonly="${ifDefined(properties.readonly)}"
            .required="${ifDefined(properties.required)}"
            .minLength="${ifDefined(properties.minLength)}"
            .maxLength="${ifDefined(properties.maxLength)}"
            .min="${ifDefined(properties.min)}"
            .max="${ifDefined(properties.max)}"
            .step="${ifDefined(properties.step)}"
            .pattern="${ifDefined(properties.pattern)}"
            .autocomplete="${ifDefined(properties.autocomplete)}"
            .inputmode="${ifDefined(properties.inputmode)}"
            .validateOnBlur="${ifDefined(properties.validateOnBlur)}"
            .validateOnInput="${ifDefined(properties.validateOnInput)}"
            .rows="${ifDefined(properties.rows)}"
            .cols="${ifDefined(properties.cols)}"
        ></md-textarea>
    `
}

/* prettier-ignore */
function renderTooltip(properties = {}) {
    return html`
        <md-tooltip
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .subhead="${ifDefined(properties.subhead)}"
            .supporting="${ifDefined(properties.supporting)}"
            .buttons="${ifDefined(properties.buttons)}"
            .variant="${ifDefined(properties.variant)}"
            .open="${ifDefined(properties.open)}"
            .placement="${ifDefined(properties.placement)}"
            .offset="${ifDefined(properties.offset)}"
            .for="${ifDefined(properties.for)}"
        ></md-tooltip>
    `
}

/* prettier-ignore */
function renderTree(properties = {}) {
    return html`
        <md-tree
            .data="${properties}"
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-tree>
    `
}

/* prettier-ignore */
function renderComponent(component, properties = {}) {
    return choose(component,[
        ["badge", () => renderBadge(component, properties)],
        ["button", () => renderButton(component, properties)],
        ["button-group", () => renderButtonGroup(component, properties)],
        ["card-body", () => renderCardBody(component, properties)],
        ["card-footer", () => renderCardFooter(component, properties)],
        ["card-header", () => renderCardHeader(component, properties)],
        ["card", () => renderCard(component, properties)],
        ["checkbox", () => renderCheckbox(component, properties)],
        ["data-table-cell", () => renderDataTableCell(component, properties)],
        ["data-table", () => renderDataTable(component, properties)],
        ["datetime-picker", () => renderDatetimePicker(component, properties)],
        ["dialog-body", () => renderDialogBody(component, properties)],
        ["dialog-footer", () => renderDialogFooter(component, properties)],
        ["dialog-header", () => renderDialogHeader(component, properties)],
        ["dialog", () => renderDialog(component, properties)],
        ["fab", () => renderFab(component, properties)],
        ["form", () => renderForm(component, properties)],
        ["grid-column", () => renderGridColumn(component, properties)],
        ["grid", () => renderGrid(component, properties)],
        ["icon", () => renderIcon(component, properties)],
        ["icon-button", () => renderIconButton(component, properties)],
        ["image", () => renderImage(component, properties)],
        ["input-datetime", () => renderInputDatetime(component, properties)],
        ["input-enum", () => renderInputEnum(component, properties)],
        ["input-number", () => renderInputNumber(component, properties)],
        ["input-segment", () => renderInputSegment(component, properties)],
        ["layout-item", () => renderLayoutItem(component, properties)],
        ["layout", () => renderLayout(component, properties)],
        ["list-item", () => renderListItem(component, properties)],
        ["list", () => renderList(component, properties)],
        ["navigation-bar", () => renderNavigationBar(component, properties)],
        ["navigation-drawer", () => renderNavigationDrawer(component, properties)],
        ["navigation-rail", () => renderNavigationRail(component, properties)],
        ["push-menu", () => renderPushMenu(component, properties)],
        ["radio-button", () => renderRadioButton(component, properties)],
        ["scrim", () => renderScrim(component, properties)],
        ["sheet-body", () => renderSheetBody(component, properties)],
        ["sheet-footer", () => renderSheetFooter(component, properties)],
        ["sheet-header", () => renderSheetHeader(component, properties)],
        ["sheet", () => renderSheet(component, properties)],
        ["slider", () => renderSlider(component, properties)],
        ["snackbar", () => renderSnackbar(component, properties)],
        ["split-button", () => renderSplitButton(component, properties)],
        ["switch", () => renderSwitch(component, properties)],
        ["text-field", () => renderTextField(component, properties)],
        ["textarea", () => renderTextarea(component, properties)],
        ["tooltip", () => renderTooltip(component, properties)],
        ["tree", () => renderTree(component, properties)],
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
