import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/* prettier-ignore */
function renderBadge(properties = {}) {
    return html`
        <md-badge
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
            @onButtonSelection="${ifDefined(properties.onButtonSelection)}"
            @onButtonClick="${ifDefined(properties.onButtonClick)}"
        ></md-button>
    `
}

/* prettier-ignore */
function renderCardBody(properties = {}) {
    return html`
        <md-card-body
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-card-body>
    `
}

/* prettier-ignore */
function renderCardFooter(properties = {}) {
    return html`
        <md-card-footer
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-card-footer>
    `
}

/* prettier-ignore */
function renderCardHeader(properties = {}) {
    return html`
        <md-card-header
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-card-header>
    `
}

/* prettier-ignore */
function renderCardMain(properties = {}) {
    return html`
        <md-card-main
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-card-main>
    `
}

/* prettier-ignore */
function renderCard(properties = {}) {
    return html`
        <md-card
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
function renderDialogBody(properties = {}) {
    return html`
        <md-dialog-body
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-dialog-body>
    `
}

/* prettier-ignore */
function renderDialogFooter(properties = {}) {
    return html`
        <md-dialog-footer
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
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .leading="${ifDefined(properties.leading)}"
            .headline="${ifDefined(properties.headline)}"
            .trailing="${ifDefined(properties.trailing)}"
        ></md-dialog-header>
    `
}

/* prettier-ignore */
function renderDialogMain(properties = {}) {
    return html`
        <md-dialog-main
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-dialog-main>
    `
}

/* prettier-ignore */
function renderDialog(properties = {}) {
    return html`
        <md-dialog
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .open="${ifDefined(properties.open)}"
            .variant="${ifDefined(properties.variant)}"
            .heroIcon="${ifDefined(properties.heroIcon)}"
        ></md-dialog>
    `
}

/* prettier-ignore */
function renderForm(properties = {}) {
    return html`
        <md-form
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .method="${ifDefined(properties.method)}"
            .action="${ifDefined(properties.action)}"
            .enctype="${ifDefined(properties.enctype)}"
            .target="${ifDefined(properties.target)}"
            .autocomplete="${ifDefined(properties.autocomplete)}"
            .noValidate="${ifDefined(properties.noValidate)}"
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
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-grid>
    `
}

/* prettier-ignore */
function renderIcon(properties = {}) {
    return html`
        <md-icon
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
            @onIconButtonSelection="${ifDefined(properties.onIconButtonSelection)}"
            @onIconButtonClick="${ifDefined(properties.onIconButtonClick)}"
        ></md-icon-button>
    `
}

/* prettier-ignore */
function renderImage(properties = {}) {
    return html`
        <md-image
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
function renderLayoutItem(properties = {}) {
    return html`
        <md-layout-item
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .region="${ifDefined(properties.region)}"
            .modal="${ifDefined(properties.modal)}"
            .open="${ifDefined(properties.open)}"
            @onLayoutItemShowed="${ifDefined(properties.onLayoutItemShowed)}"
            @onLayoutItemClosed="${ifDefined(properties.onLayoutItemClosed)}"
            @onLayoutItemShow="${ifDefined(properties.onLayoutItemShow)}"
            @onLayoutItemClose="${ifDefined(properties.onLayoutItemClose)}"
        ></md-layout-item>
    `
}

/* prettier-ignore */
function renderLayout(properties = {}) {
    return html`
        <md-layout
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-layout>
    `
}

/* prettier-ignore */
function renderListItem(properties = {}) {
    return html`
        <md-list-item
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
function renderPushMenu(properties = {}) {
    return html`
        <md-push-menu
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
        ></md-push-menu>
    `
}

/* prettier-ignore */
function renderRadioButton(properties = {}) {
    return html`
        <md-radio-button
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
function renderSlider(properties = {}) {
    return html`
        <md-slider
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .name="${ifDefined(properties.name)}"
            .min="${ifDefined(properties.min)}"
            .max="${ifDefined(properties.max)}"
            .step="${ifDefined(properties.step)}"
            .value="${ifDefined(properties.value)}"
            .icon="${ifDefined(properties.icon)}"
            .orientation="${ifDefined(properties.orientation)}"
            .size="${ifDefined(properties.size)}"
            .stopIndicator="${ifDefined(properties.stopIndicator)}"
            .valueIndicator="${ifDefined(properties.valueIndicator)}"
        ></md-slider>
    `
}

/* prettier-ignore */
function renderSwitch(properties = {}) {
    return html`
        <md-switch
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
            @onTextFieldNativeInvalid="${ifDefined(properties.onTextFieldNativeInvalid)}"
        ></md-text-field>
    `
}

/* prettier-ignore */
function renderTextarea(properties = {}) {
    return html`
        <md-textarea
            class="${classMap(properties.classMap ?? {})}"
            style="${styleMap(properties.styleMap ?? {})}"
            .items="${ifDefined(properties.items)}"
            .type="${ifDefined(properties.type)}"
            .valueField="${ifDefined(properties.valueField)}"
            .parentField="${ifDefined(properties.parentField)}"
            .labelField="${ifDefined(properties.labelField)}"
            .rows="${ifDefined(properties.rows)}"
            .cols="${ifDefined(properties.cols)}"
        ></md-textarea>
    `
}

/* prettier-ignore */
function renderTree(properties = {}) {
    return html`
        <md-tree
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
        ["card-body", () => renderCardBody(component, properties)],
        ["card-footer", () => renderCardFooter(component, properties)],
        ["card-header", () => renderCardHeader(component, properties)],
        ["card-main", () => renderCardMain(component, properties)],
        ["card", () => renderCard(component, properties)],
        ["checkbox", () => renderCheckbox(component, properties)],
        ["data-table-cell", () => renderDataTableCell(component, properties)],
        ["data-table", () => renderDataTable(component, properties)],
        ["dialog-body", () => renderDialogBody(component, properties)],
        ["dialog-footer", () => renderDialogFooter(component, properties)],
        ["dialog-header", () => renderDialogHeader(component, properties)],
        ["dialog-main", () => renderDialogMain(component, properties)],
        ["dialog", () => renderDialog(component, properties)],
        ["form", () => renderForm(component, properties)],
        ["grid-column", () => renderGridColumn(component, properties)],
        ["grid", () => renderGrid(component, properties)],
        ["icon", () => renderIcon(component, properties)],
        ["icon-button", () => renderIconButton(component, properties)],
        ["image", () => renderImage(component, properties)],
        ["layout-item", () => renderLayoutItem(component, properties)],
        ["layout", () => renderLayout(component, properties)],
        ["list-item", () => renderListItem(component, properties)],
        ["list", () => renderList(component, properties)],
        ["push-menu", () => renderPushMenu(component, properties)],
        ["radio-button", () => renderRadioButton(component, properties)],
        ["scrim", () => renderScrim(component, properties)],
        ["slider", () => renderSlider(component, properties)],
        ["switch", () => renderSwitch(component, properties)],
        ["text-field", () => renderTextField(component, properties)],
        ["textarea", () => renderTextarea(component, properties)],
        ["tree", () => renderTree(component, properties)],
    ], () => nothing,);
}

/* prettier-ignore */
export { 
    renderBadge,
    renderButton,
    renderCardBody,
    renderCardFooter,
    renderCardHeader,
    renderCardMain,
    renderCard,
    renderCheckbox,
    renderDataTableCell,
    renderDataTable,
    renderDialogBody,
    renderDialogFooter,
    renderDialogHeader,
    renderDialogMain,
    renderDialog,
    renderForm,
    renderGridColumn,
    renderGrid,
    renderIcon,
    renderIconButton,
    renderImage,
    renderLayoutItem,
    renderLayout,
    renderListItem,
    renderList,
    renderPushMenu,
    renderRadioButton,
    renderScrim,
    renderSlider,
    renderSwitch,
    renderTextField,
    renderTextarea,
    renderTree,
};
