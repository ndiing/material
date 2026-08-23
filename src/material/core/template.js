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
            @select="${ifDefined(params.select)}"
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
            @item-select="${ifDefined(params.itemSelect)}"
            @item-click="${ifDefined(params.itemClick)}"
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
            @invalid="${ifDefined(params.invalid)}"
            @input="${ifDefined(params.input)}"
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
            @row-select="${ifDefined(params.rowSelect)}"
            @row-click="${ifDefined(params.rowClick)}"
            @cell-click="${ifDefined(params.cellClick)}"
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
            .calendarType="${ifDefined(params.calendarType)}"
            .selection="${ifDefined(params.selection)}"
            .variant="${ifDefined(params.variant)}"
            .view="${ifDefined(params.view)}"
            .type="${ifDefined(params.type)}"
            .value="${ifDefined(params.value)}"
            @change="${ifDefined(params.change)}"
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
            @formdata="${ifDefined(params.formdata)}"
            @reset="${ifDefined(params.reset)}"
            @submit="${ifDefined(params.submit)}"
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
            @select="${ifDefined(params.select)}"
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
            @load="${ifDefined(params.load)}"
            @error="${ifDefined(params.error)}"
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
            .type="${ifDefined(params.type)}"
            .value="${ifDefined(params.value)}"
            .placeholder="${ifDefined(params.placeholder)}"
            .format="${ifDefined(params.format)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            @input="${ifDefined(params.input)}"
            @change="${ifDefined(params.change)}"
            @keydown="${ifDefined(params.keydown)}"
            @focus="${ifDefined(params.focus)}"
            @blur="${ifDefined(params.blur)}"
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
            .size="${ifDefined(params.size)}"
            .placeholder="${ifDefined(params.placeholder)}"
            .tabIndex="${ifDefined(params.tabIndex)}"
            .options="${ifDefined(params.options)}"
            .selectedIndex="${ifDefined(params.selectedIndex)}"
            .bufferTimeout="${ifDefined(params.bufferTimeout)}"
            @input="${ifDefined(params.input)}"
            @change="${ifDefined(params.change)}"
            @keydown="${ifDefined(params.keydown)}"
            @focus="${ifDefined(params.focus)}"
            @blur="${ifDefined(params.blur)}"
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
            .size="${ifDefined(params.size)}"
            .step="${ifDefined(params.step)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            .tabIndex="${ifDefined(params.tabIndex)}"
            @input="${ifDefined(params.input)}"
            @change="${ifDefined(params.change)}"
            @keydown="${ifDefined(params.keydown)}"
            @focus="${ifDefined(params.focus)}"
            @blur="${ifDefined(params.blur)}"
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
            .size="${ifDefined(params.size)}"
            .step="${ifDefined(params.step)}"
            .min="${ifDefined(params.min)}"
            .max="${ifDefined(params.max)}"
            .threshold="${ifDefined(params.threshold)}"
            .startValue="${ifDefined(params.startValue)}"
            .placeholder="${ifDefined(params.placeholder)}"
            .maxLength="${ifDefined(params.maxLength)}"
            .clampOnInput="${ifDefined(params.clampOnInput)}"
            .tabIndex="${ifDefined(params.tabIndex)}"
            @input="${ifDefined(params.input)}"
            @change="${ifDefined(params.change)}"
            @keydown="${ifDefined(params.keydown)}"
            @focus="${ifDefined(params.focus)}"
            @blur="${ifDefined(params.blur)}"
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
            @select="${ifDefined(params.select)}"
            @item-click="${ifDefined(params.itemClick)}"
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
            @input="${ifDefined(params.input)}"
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
            @after-show="${ifDefined(params.afterShow)}"
            @after-close="${ifDefined(params.afterClose)}"
            @show="${ifDefined(params.show)}"
            @close="${ifDefined(params.close)}"
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
            @after-close="${ifDefined(params.afterClose)}"
            @after-show="${ifDefined(params.afterShow)}"
            @show="${ifDefined(params.show)}"
            @close="${ifDefined(params.close)}"
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
            @click="${ifDefined(params.click)}"
            @keydown="${ifDefined(params.keydown)}"
            @icon-click="${ifDefined(params.iconClick)}"
            @icon-keydown="${ifDefined(params.iconKeydown)}"
            @select="${ifDefined(params.select)}"
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
            @input="${ifDefined(params.input)}"
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
            @focus="${ifDefined(params.focus)}"
            @blur="${ifDefined(params.blur)}"
            @input="${ifDefined(params.input)}"
            @change="${ifDefined(params.change)}"
            @click="${ifDefined(params.click)}"
            @invalid="${ifDefined(params.invalid)}"
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
function renderComponent(params = {}) {
    return choose(params.component,[
        ["badge", () => renderBadge(params)],
        ["button", () => renderButton(params)],
        ["button-group", () => renderButtonGroup(params)],
        ["card-body", () => renderCardBody(params)],
        ["card-footer", () => renderCardFooter(params)],
        ["card-header", () => renderCardHeader(params)],
        ["card", () => renderCard(params)],
        ["checkbox", () => renderCheckbox(params)],
        ["data-table-cell", () => renderDataTableCell(params)],
        ["data-table", () => renderDataTable(params)],
        ["datetime-picker", () => renderDatetimePicker(params)],
        ["dialog-body", () => renderDialogBody(params)],
        ["dialog-footer", () => renderDialogFooter(params)],
        ["dialog-header", () => renderDialogHeader(params)],
        ["dialog", () => renderDialog(params)],
        ["fab", () => renderFab(params)],
        ["form", () => renderForm(params)],
        ["grid-column", () => renderGridColumn(params)],
        ["grid", () => renderGrid(params)],
        ["icon", () => renderIcon(params)],
        ["icon-button", () => renderIconButton(params)],
        ["image", () => renderImage(params)],
        ["input-datetime", () => renderInputDatetime(params)],
        ["input-enum", () => renderInputEnum(params)],
        ["input-number", () => renderInputNumber(params)],
        ["input-segment", () => renderInputSegment(params)],
        ["layout-item", () => renderLayoutItem(params)],
        ["layout", () => renderLayout(params)],
        ["list-item", () => renderListItem(params)],
        ["list", () => renderList(params)],
        ["navigation-bar", () => renderNavigationBar(params)],
        ["navigation-drawer", () => renderNavigationDrawer(params)],
        ["navigation-rail", () => renderNavigationRail(params)],
        ["push-menu", () => renderPushMenu(params)],
        ["radio-button", () => renderRadioButton(params)],
        ["scrim", () => renderScrim(params)],
        ["sheet-body", () => renderSheetBody(params)],
        ["sheet-footer", () => renderSheetFooter(params)],
        ["sheet-header", () => renderSheetHeader(params)],
        ["sheet", () => renderSheet(params)],
        ["slider", () => renderSlider(params)],
        ["snackbar", () => renderSnackbar(params)],
        ["split-button", () => renderSplitButton(params)],
        ["switch", () => renderSwitch(params)],
        ["text-field", () => renderTextField(params)],
        ["textarea", () => renderTextarea(params)],
        ["tooltip", () => renderTooltip(params)],
        ["tree", () => renderTree(params)],
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
