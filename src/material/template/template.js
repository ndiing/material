import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * {{desc}}
 */
function renderBadge(item = {}) {
    /* prettier-ignore */
    return html`
        <md-badge
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .limit="${ifDefined(item.limit)}"
        ></md-badge>
    `
}

/**
 * {{desc}}
 */
function renderBottomAppBar(item = {}) {
    /* prettier-ignore */
    return html`
        <md-bottom-app-bar
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-bottom-app-bar>
    `
}

/**
 * {{desc}}
 */
function renderBottomSheet(item = {}) {
    /* prettier-ignore */
    return html`
        <md-bottom-sheet
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-bottom-sheet>
    `
}

/**
 * {{desc}}
 */
function renderBox(item = {}) {
    /* prettier-ignore */
    return html`
        <md-box
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadio="${ifDefined(item.leadingRadio)}"
            .leadingSwitch="${ifDefined(item.leadingSwitch)}"
            .leadingAvatar="${ifDefined(item.leadingAvatar)}"
            .leadingImage="${ifDefined(item.leadingImage)}"
            .leadingVideo="${ifDefined(item.leadingVideo)}"
            .leadingIcon="${ifDefined(item.leadingIcon)}"
            .leadingSupportingText="${ifDefined(item.leadingSupportingText)}"
            .headline="${ifDefined(item.headline)}"
            .supportingText="${ifDefined(item.supportingText)}"
            .trailingSupportingText="${ifDefined(item.trailingSupportingText)}"
            .trailingIcon="${ifDefined(item.trailingIcon)}"
            .trailingVideo="${ifDefined(item.trailingVideo)}"
            .trailingImage="${ifDefined(item.trailingImage)}"
            .trailingAvatar="${ifDefined(item.trailingAvatar)}"
            .trailingSwitch="${ifDefined(item.trailingSwitch)}"
            .trailingRadio="${ifDefined(item.trailingRadio)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .badge="${ifDefined(item.badge)}"
            .activated="${ifDefined(item.activated)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
        ></md-box>
    `
}

/**
 * {{desc}}
 */
function renderButton(item = {}) {
    /* prettier-ignore */
    return html`
        <md-button
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .type="${ifDefined(item.type)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @click="${ifDefined(item.handleButtonClick)}"
        ></md-button>
    `
}

/**
 * {{desc}}
 */
function renderCard(item = {}) {
    /* prettier-ignore */
    return html`
        <md-card
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
        ></md-card>
    `
}

/**
 * {{desc}}
 */
function renderCheckbox(item = {}) {
    /* prettier-ignore */
    return html`
        <md-checkbox
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .value="${ifDefined(item.value)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .checked="${ifDefined(item.checked)}"
            .disabled="${ifDefined(item.disabled)}"
            @onCheckboxNativeInput="${ifDefined(item.onCheckboxNativeInput)}"
            @onCheckboxNativeReset="${ifDefined(item.onCheckboxNativeReset)}"
        ></md-checkbox>
    `
}

/**
 * {{desc}}
 */
function renderChip(item = {}) {
    /* prettier-ignore */
    return html`
        <md-chip
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .avatar="${ifDefined(item.avatar)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .action="${ifDefined(item.action)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @onChipActionClick="${ifDefined(item.onChipActionClick)}"
        ></md-chip>
    `
}

/**
 * {{desc}}
 */
function renderChips(item = {}) {
    /* prettier-ignore */
    return html`
        <md-chips
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .list="${ifDefined(item.list)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            @onChipClick="${ifDefined(item.onChipClick)}"
        ></md-chips>
    `
}

/**
 * {{desc}}
 */
function renderColorField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-color-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-color-field>
    `
}

/**
 * {{desc}}
 */
function renderColorPicker(item = {}) {
    /* prettier-ignore */
    return html`
        <md-color-picker
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .value="${ifDefined(item.value)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onColorPickerButtonLabelClick="${ifDefined(item.onColorPickerButtonLabelClick)}"
            @onColorPickerSelection="${ifDefined(item.onColorPickerSelection)}"
            @onColorPickerGradientTrackPointerdown="${ifDefined(item.onColorPickerGradientTrackPointerdown)}"
            @onColorPickerGradientTrackPointermove="${ifDefined(item.onColorPickerGradientTrackPointermove)}"
            @onColorPickerGradientTrackPointerup="${ifDefined(item.onColorPickerGradientTrackPointerup)}"
            @onColorPickerHueNativeInput="${ifDefined(item.onColorPickerHueNativeInput)}"
            @onColorPickerOpacityNativeInput="${ifDefined(item.onColorPickerOpacityNativeInput)}"
            @onColorPickerButtonCancelClick="${ifDefined(item.onColorPickerButtonCancelClick)}"
            @onColorPickerButtonOkClick="${ifDefined(item.onColorPickerButtonOkClick)}"
        ></md-color-picker>
    `
}

/**
 * {{desc}}
 */
function renderDataTable(item = {}) {
    /* prettier-ignore */
    return html`
        <md-data-table
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .columns="${ifDefined(item.columns)}"
            .rows="${ifDefined(item.rows)}"
            .footer="${ifDefined(item.footer)}"
            .stickyHeader="${ifDefined(item.stickyHeader)}"
            .stickyFooter="${ifDefined(item.stickyFooter)}"
            .checkboxSelection="${ifDefined(item.checkboxSelection)}"
            .stickyCheckboxSelection="${ifDefined(item.stickyCheckboxSelection)}"
            .rangeSelection="${ifDefined(item.rangeSelection)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            .singleSelection="${ifDefined(item.singleSelection)}"
            .allSelection="${ifDefined(item.allSelection)}"
            .toolbarItems="${ifDefined(item.toolbarItems)}"
            @onDataTableTextFieldNativeSearch="${ifDefined(item.onDataTableTextFieldNativeSearch)}"
            @onDataTableColumnCellDragStart="${ifDefined(item.onDataTableColumnCellDragStart)}"
            @onDataTableColumnCellDrag="${ifDefined(item.onDataTableColumnCellDrag)}"
            @onDataTableColumnCellDragEnd="${ifDefined(item.onDataTableColumnCellDragEnd)}"
            @onDataTableColumnCellResizeStart="${ifDefined(item.onDataTableColumnCellResizeStart)}"
            @onDataTableColumnCellResize="${ifDefined(item.onDataTableColumnCellResize)}"
            @onDataTableColumnCellResizeEnd="${ifDefined(item.onDataTableColumnCellResizeEnd)}"
            @onDataTableColumnCellPointerenter="${ifDefined(item.onDataTableColumnCellPointerenter)}"
            @onDataTableColumnCellPointerleave="${ifDefined(item.onDataTableColumnCellPointerleave)}"
            @onDataTableColumnCellClick="${ifDefined(item.onDataTableColumnCellClick)}"
            @onDataTableColumnCellCheckboxNativeInput="${ifDefined(item.onDataTableColumnCellCheckboxNativeInput)}"
            @onDataTableRowCellCheckboxNativeInput="${ifDefined(item.onDataTableRowCellCheckboxNativeInput)}"
            @onDataTableRowClick="${ifDefined(item.onDataTableRowClick)}"
            @onDataTableKeydown="${ifDefined(item.onDataTableKeydown)}"
            @onDataTablePaginationChange="${ifDefined(item.onDataTablePaginationChange)}"
        ></md-data-table>
    `
}

/**
 * {{desc}}
 */
function renderDataTableColumnCell(item = {}) {
    /* prettier-ignore */
    return html`
        <md-data-table-column-cell
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadio="${ifDefined(item.leadingRadio)}"
            .leadingSwitch="${ifDefined(item.leadingSwitch)}"
            .leadingAvatar="${ifDefined(item.leadingAvatar)}"
            .leadingImage="${ifDefined(item.leadingImage)}"
            .leadingVideo="${ifDefined(item.leadingVideo)}"
            .leadingIcon="${ifDefined(item.leadingIcon)}"
            .leadingSupportingText="${ifDefined(item.leadingSupportingText)}"
            .headline="${ifDefined(item.headline)}"
            .supportingText="${ifDefined(item.supportingText)}"
            .trailingSupportingText="${ifDefined(item.trailingSupportingText)}"
            .trailingIcon="${ifDefined(item.trailingIcon)}"
            .trailingVideo="${ifDefined(item.trailingVideo)}"
            .trailingImage="${ifDefined(item.trailingImage)}"
            .trailingAvatar="${ifDefined(item.trailingAvatar)}"
            .trailingSwitch="${ifDefined(item.trailingSwitch)}"
            .trailingRadio="${ifDefined(item.trailingRadio)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .badge="${ifDefined(item.badge)}"
            .activated="${ifDefined(item.activated)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
        ></md-data-table-column-cell>
    `
}

/**
 * {{desc}}
 */
function renderDataTableItem(item = {}) {
    /* prettier-ignore */
    return html`
        <md-data-table-item
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadio="${ifDefined(item.leadingRadio)}"
            .leadingSwitch="${ifDefined(item.leadingSwitch)}"
            .leadingAvatar="${ifDefined(item.leadingAvatar)}"
            .leadingImage="${ifDefined(item.leadingImage)}"
            .leadingVideo="${ifDefined(item.leadingVideo)}"
            .leadingIcon="${ifDefined(item.leadingIcon)}"
            .leadingSupportingText="${ifDefined(item.leadingSupportingText)}"
            .headline="${ifDefined(item.headline)}"
            .supportingText="${ifDefined(item.supportingText)}"
            .trailingSupportingText="${ifDefined(item.trailingSupportingText)}"
            .trailingIcon="${ifDefined(item.trailingIcon)}"
            .trailingVideo="${ifDefined(item.trailingVideo)}"
            .trailingImage="${ifDefined(item.trailingImage)}"
            .trailingAvatar="${ifDefined(item.trailingAvatar)}"
            .trailingSwitch="${ifDefined(item.trailingSwitch)}"
            .trailingRadio="${ifDefined(item.trailingRadio)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .badge="${ifDefined(item.badge)}"
            .activated="${ifDefined(item.activated)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
        ></md-data-table-item>
    `
}

/**
 * {{desc}}
 */
function renderDataTableRowCell(item = {}) {
    /* prettier-ignore */
    return html`
        <md-data-table-row-cell
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadio="${ifDefined(item.leadingRadio)}"
            .leadingSwitch="${ifDefined(item.leadingSwitch)}"
            .leadingAvatar="${ifDefined(item.leadingAvatar)}"
            .leadingImage="${ifDefined(item.leadingImage)}"
            .leadingVideo="${ifDefined(item.leadingVideo)}"
            .leadingIcon="${ifDefined(item.leadingIcon)}"
            .leadingSupportingText="${ifDefined(item.leadingSupportingText)}"
            .headline="${ifDefined(item.headline)}"
            .supportingText="${ifDefined(item.supportingText)}"
            .trailingSupportingText="${ifDefined(item.trailingSupportingText)}"
            .trailingIcon="${ifDefined(item.trailingIcon)}"
            .trailingVideo="${ifDefined(item.trailingVideo)}"
            .trailingImage="${ifDefined(item.trailingImage)}"
            .trailingAvatar="${ifDefined(item.trailingAvatar)}"
            .trailingSwitch="${ifDefined(item.trailingSwitch)}"
            .trailingRadio="${ifDefined(item.trailingRadio)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .badge="${ifDefined(item.badge)}"
            .activated="${ifDefined(item.activated)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
        ></md-data-table-row-cell>
    `
}

/**
 * {{desc}}
 */
function renderDateField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-date-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-date-field>
    `
}

/**
 * {{desc}}
 */
function renderDatePicker(item = {}) {
    /* prettier-ignore */
    return html`
        <md-date-picker
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onDatetimePickerSelection="${ifDefined(item.onDatetimePickerSelection)}"
            @onDatetimePickerIconButtonPrevClick="${ifDefined(item.onDatetimePickerIconButtonPrevClick)}"
            @onDatetimePickerIconButtonNextClick="${ifDefined(item.onDatetimePickerIconButtonNextClick)}"
            @onDatetimePickerButtonLabelClick="${ifDefined(item.onDatetimePickerButtonLabelClick)}"
            @onDatetimePickerButtonCancelClick="${ifDefined(item.onDatetimePickerButtonCancelClick)}"
            @onDatetimePickerButtonOkClick="${ifDefined(item.onDatetimePickerButtonOkClick)}"
            @onDatetimePickerYearItemClick="${ifDefined(item.onDatetimePickerYearItemClick)}"
            @onDatetimePickerMonthItemClick="${ifDefined(item.onDatetimePickerMonthItemClick)}"
            @onDatetimePickerDayItemClick="${ifDefined(item.onDatetimePickerDayItemClick)}"
            @onDatetimePickerHourItemClick="${ifDefined(item.onDatetimePickerHourItemClick)}"
            @onDatetimePickerMinuteItemClick="${ifDefined(item.onDatetimePickerMinuteItemClick)}"
            @onDatePickerButtonLabelClick="${ifDefined(item.onDatePickerButtonLabelClick)}"
            @onDatePickerSelection="${ifDefined(item.onDatePickerSelection)}"
            @onDatePickerIconButtonPrevClick="${ifDefined(item.onDatePickerIconButtonPrevClick)}"
            @onDatePickerIconButtonNextClick="${ifDefined(item.onDatePickerIconButtonNextClick)}"
            @onDatePickerYearItemClick="${ifDefined(item.onDatePickerYearItemClick)}"
            @onDatePickerMonthItemClick="${ifDefined(item.onDatePickerMonthItemClick)}"
            @onDatePickerDayItemClick="${ifDefined(item.onDatePickerDayItemClick)}"
            @onDatePickerButtonCancelClick="${ifDefined(item.onDatePickerButtonCancelClick)}"
            @onDatePickerButtonOkClick="${ifDefined(item.onDatePickerButtonOkClick)}"
        ></md-date-picker>
    `
}

/**
 * {{desc}}
 */
function renderDatetimeField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-datetime-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-datetime-field>
    `
}

/**
 * {{desc}}
 */
function renderDatetimePicker(item = {}) {
    /* prettier-ignore */
    return html`
        <md-datetime-picker
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onDatetimePickerSelection="${ifDefined(item.onDatetimePickerSelection)}"
            @onDatetimePickerIconButtonPrevClick="${ifDefined(item.onDatetimePickerIconButtonPrevClick)}"
            @onDatetimePickerIconButtonNextClick="${ifDefined(item.onDatetimePickerIconButtonNextClick)}"
            @onDatetimePickerButtonLabelClick="${ifDefined(item.onDatetimePickerButtonLabelClick)}"
            @onDatetimePickerButtonCancelClick="${ifDefined(item.onDatetimePickerButtonCancelClick)}"
            @onDatetimePickerButtonOkClick="${ifDefined(item.onDatetimePickerButtonOkClick)}"
            @onDatetimePickerYearItemClick="${ifDefined(item.onDatetimePickerYearItemClick)}"
            @onDatetimePickerMonthItemClick="${ifDefined(item.onDatetimePickerMonthItemClick)}"
            @onDatetimePickerDayItemClick="${ifDefined(item.onDatetimePickerDayItemClick)}"
            @onDatetimePickerHourItemClick="${ifDefined(item.onDatetimePickerHourItemClick)}"
            @onDatetimePickerMinuteItemClick="${ifDefined(item.onDatetimePickerMinuteItemClick)}"
        ></md-datetime-picker>
    `
}

/**
 * {{desc}}
 */
function renderDialog(item = {}) {
    /* prettier-ignore */
    return html`
        <md-dialog
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-dialog>
    `
}

/**
 * {{desc}}
 */
function renderDivider(item = {}) {
    /* prettier-ignore */
    return html`
        <md-divider
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
        ></md-divider>
    `
}

/**
 * {{desc}}
 */
function renderEmoji(item = {}) {
    /* prettier-ignore */
    return html`
        <md-emoji
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .emoji="${ifDefined(item.emoji)}"
            @click="${ifDefined(item.handleEmojiClick)}"
        ></md-emoji>
    `
}

/**
 * {{desc}}
 */
function renderEmojiPicker(item = {}) {
    /* prettier-ignore */
    return html`
        <md-emoji-picker
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .tabs="${ifDefined(item.tabs)}"
            .rows="${ifDefined(item.rows)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onEmojiPickerTextFieldNativeInput="${ifDefined(item.onEmojiPickerTextFieldNativeInput)}"
            @onEmojiPickerTabsItemClick="${ifDefined(item.onEmojiPickerTabsItemClick)}"
            @onEmojiPickerViewportVirtualScroll="${ifDefined(item.onEmojiPickerViewportVirtualScroll)}"
            @onEmojiPickerGridColumnClick="${ifDefined(item.onEmojiPickerGridColumnClick)}"
            @onEmojiPickerButtonClick="${ifDefined(item.onEmojiPickerButtonClick)}"
            @onEmojiPickerButtonCancelClick="${ifDefined(item.onEmojiPickerButtonCancelClick)}"
            @onEmojiPickerButtonOkClick="${ifDefined(item.onEmojiPickerButtonOkClick)}"
        ></md-emoji-picker>
    `
}

/**
 * {{desc}}
 */
function renderFab(item = {}) {
    /* prettier-ignore */
    return html`
        <md-fab
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @click="${ifDefined(item.handleFabClick)}"
        ></md-fab>
    `
}

/**
 * {{desc}}
 */
function renderForm(item = {}) {
    /* prettier-ignore */
    return html`
        <md-form
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .acceptCharset="${ifDefined(item.acceptCharset)}"
            .action="${ifDefined(item.action)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .enctype="${ifDefined(item.enctype)}"
            .method="${ifDefined(item.method)}"
            .novalidate="${ifDefined(item.novalidate)}"
            .target="${ifDefined(item.target)}"
            .items="${ifDefined(item.items)}"
            @onFormNativeReset="${ifDefined(item.onFormNativeReset)}"
            @onFormNativeSubmit="${ifDefined(item.onFormNativeSubmit)}"
        ></md-form>
    `
}

/**
 * {{desc}}
 */
function renderIcon(item = {}) {
    /* prettier-ignore */
    return html`
        <md-icon
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .icon="${ifDefined(item.icon)}"
            @click="${ifDefined(item.handleIconClick)}"
        ></md-icon>
    `
}

/**
 * {{desc}}
 */
function renderIconButton(item = {}) {
    /* prettier-ignore */
    return html`
        <md-icon-button
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .icon="${ifDefined(item.icon)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @onIconButtonToggleClick="${ifDefined(item.onIconButtonToggleClick)}"
            @click="${ifDefined(item.handleIconButtonClick)}"
        ></md-icon-button>
    `
}

/**
 * {{desc}}
 */
function renderImage(item = {}) {
    /* prettier-ignore */
    return html`
        <md-image
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .src="${ifDefined(item.src)}"
            .alt="${ifDefined(item.alt)}"
            .loading="${ifDefined(item.loading)}"
            .ratio="${ifDefined(item.ratio)}"
            .variant="${ifDefined(item.variant)}"
            @onImageNativeLoad="${ifDefined(item.onImageNativeLoad)}"
            @onImageNativeError="${ifDefined(item.onImageNativeError)}"
        ></md-image>
    `
}

/**
 * {{desc}}
 */
function renderLayout(item = {}) {
    /* prettier-ignore */
    return html`
        <md-layout
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
        ></md-layout>
    `
}

/**
 * {{desc}}
 */
function renderLayoutItem(item = {}) {
    /* prettier-ignore */
    return html`
        <md-layout-item
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .expanded="${ifDefined(item.expanded)}"
            .medium="${ifDefined(item.medium)}"
            .compact="${ifDefined(item.compact)}"
            .region="${ifDefined(item.region)}"
        ></md-layout-item>
    `
}

/**
 * {{desc}}
 */
function renderList(item = {}) {
    /* prettier-ignore */
    return html`
        <md-list
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .list="${ifDefined(item.list)}"
            .map="${ifDefined(item.map)}"
            .format="${ifDefined(item.format)}"
            .rangeSelection="${ifDefined(item.rangeSelection)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            .singleSelection="${ifDefined(item.singleSelection)}"
            .allSelection="${ifDefined(item.allSelection)}"
            @onListItemClick="${ifDefined(item.onListItemClick)}"
            @onListKeydown="${ifDefined(item.onListKeydown)}"
            @onListItemCheckboxNativeInput="${ifDefined(item.onListItemCheckboxNativeInput)}"
            @onListItemRadioButtonNativeInput="${ifDefined(item.onListItemRadioButtonNativeInput)}"
            @onListItemSwitchNativeInput="${ifDefined(item.onListItemSwitchNativeInput)}"
        ></md-list>
    `
}

/**
 * {{desc}}
 */
function renderListItem(item = {}) {
    /* prettier-ignore */
    return html`
        <md-list-item
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .avatar="${ifDefined(item.avatar)}"
            .thumbnail="${ifDefined(item.thumbnail)}"
            .video="${ifDefined(item.video)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .badge="${ifDefined(item.badge)}"
            .text="${ifDefined(item.text)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
            .leadingSwitch="${ifDefined(item.leadingSwitch)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
            .trailingSwitch="${ifDefined(item.trailingSwitch)}"
            .selected="${ifDefined(item.selected)}"
            .routerLink="${ifDefined(item.routerLink)}"
            .activated="${ifDefined(item.activated)}"
            @onListItemSelected="${ifDefined(item.onListItemSelected)}"
        ></md-list-item>
    `
}

/**
 * {{desc}}
 */
function renderMarkdown(item = {}) {
    /* prettier-ignore */
    return html`
        <md-markdown
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .href="${ifDefined(item.href)}"
            .text="${ifDefined(item.text)}"
        ></md-markdown>
    `
}

/**
 * {{desc}}
 */
function renderMenu(item = {}) {
    /* prettier-ignore */
    return html`
        <md-menu
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .list="${ifDefined(item.list)}"
            .map="${ifDefined(item.map)}"
            .rowHeight="${ifDefined(item.rowHeight)}"
            .maxRows="${ifDefined(item.maxRows)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onMenuListSelection="${ifDefined(item.onMenuListSelection)}"
            @onMenuListItemEnter="${ifDefined(item.onMenuListItemEnter)}"
            @onMenuViewportVirtualScroll="${ifDefined(item.onMenuViewportVirtualScroll)}"
            @onMenuViewportVirtualScrollInitialized="${ifDefined(item.onMenuViewportVirtualScrollInitialized)}"
            @onMenuListItemClick="${ifDefined(item.onMenuListItemClick)}"
        ></md-menu>
    `
}

/**
 * {{desc}}
 */
function renderMonthField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-month-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-month-field>
    `
}

/**
 * {{desc}}
 */
function renderMonthPicker(item = {}) {
    /* prettier-ignore */
    return html`
        <md-month-picker
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onDatetimePickerSelection="${ifDefined(item.onDatetimePickerSelection)}"
            @onDatetimePickerIconButtonPrevClick="${ifDefined(item.onDatetimePickerIconButtonPrevClick)}"
            @onDatetimePickerIconButtonNextClick="${ifDefined(item.onDatetimePickerIconButtonNextClick)}"
            @onDatetimePickerButtonLabelClick="${ifDefined(item.onDatetimePickerButtonLabelClick)}"
            @onDatetimePickerButtonCancelClick="${ifDefined(item.onDatetimePickerButtonCancelClick)}"
            @onDatetimePickerButtonOkClick="${ifDefined(item.onDatetimePickerButtonOkClick)}"
            @onDatetimePickerYearItemClick="${ifDefined(item.onDatetimePickerYearItemClick)}"
            @onDatetimePickerMonthItemClick="${ifDefined(item.onDatetimePickerMonthItemClick)}"
            @onDatetimePickerDayItemClick="${ifDefined(item.onDatetimePickerDayItemClick)}"
            @onDatetimePickerHourItemClick="${ifDefined(item.onDatetimePickerHourItemClick)}"
            @onDatetimePickerMinuteItemClick="${ifDefined(item.onDatetimePickerMinuteItemClick)}"
            @onMonthPickerButtonLabelClick="${ifDefined(item.onMonthPickerButtonLabelClick)}"
            @onMonthPickerSelection="${ifDefined(item.onMonthPickerSelection)}"
            @onMonthPickerIconButtonPrevClick="${ifDefined(item.onMonthPickerIconButtonPrevClick)}"
            @onMonthPickerIconButtonNextClick="${ifDefined(item.onMonthPickerIconButtonNextClick)}"
            @onMonthPickerYearItemClick="${ifDefined(item.onMonthPickerYearItemClick)}"
            @onMonthPickerMonthItemClick="${ifDefined(item.onMonthPickerMonthItemClick)}"
            @onMonthPickerButtonCancelClick="${ifDefined(item.onMonthPickerButtonCancelClick)}"
            @onMonthPickerButtonOkClick="${ifDefined(item.onMonthPickerButtonOkClick)}"
        ></md-month-picker>
    `
}

/**
 * {{desc}}
 */
function renderNavigationBar(item = {}) {
    /* prettier-ignore */
    return html`
        <md-navigation-bar
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-navigation-bar>
    `
}

/**
 * {{desc}}
 */
function renderNavigationDrawer(item = {}) {
    /* prettier-ignore */
    return html`
        <md-navigation-drawer
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-navigation-drawer>
    `
}

/**
 * {{desc}}
 */
function renderNavigationRail(item = {}) {
    /* prettier-ignore */
    return html`
        <md-navigation-rail
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-navigation-rail>
    `
}

/**
 * {{desc}}
 */
function renderNumberField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-number-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-number-field>
    `
}

/**
 * {{desc}}
 */
function renderPagination(item = {}) {
    /* prettier-ignore */
    return html`
        <md-pagination
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .total="${ifDefined(item.total)}"
            .limit="${ifDefined(item.limit)}"
            .page="${ifDefined(item.page)}"
            .label="${ifDefined(item.label)}"
            .options="${ifDefined(item.options)}"
            .text="${ifDefined(item.text)}"
            .firstPage="${ifDefined(item.firstPage)}"
            .prevPage="${ifDefined(item.prevPage)}"
            .nextPage="${ifDefined(item.nextPage)}"
            .lastPage="${ifDefined(item.lastPage)}"
            @onPaginationChange="${ifDefined(item.onPaginationChange)}"
            @onPaginationLimitChange="${ifDefined(item.onPaginationLimitChange)}"
            @onPaginationFirstClick="${ifDefined(item.onPaginationFirstClick)}"
            @onPaginationPrevClick="${ifDefined(item.onPaginationPrevClick)}"
            @onPaginationNextClick="${ifDefined(item.onPaginationNextClick)}"
            @onPaginationLastClick="${ifDefined(item.onPaginationLastClick)}"
        ></md-pagination>
    `
}

/**
 * {{desc}}
 */
function renderPasswordField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-password-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-password-field>
    `
}

/**
 * {{desc}}
 */
function renderProgressIndicator(item = {}) {
    /* prettier-ignore */
    return html`
        <md-progress-indicator
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .value="${ifDefined(item.value)}"
            .max="${ifDefined(item.max)}"
        ></md-progress-indicator>
    `
}

/**
 * {{desc}}
 */
function renderRadioButton(item = {}) {
    /* prettier-ignore */
    return html`
        <md-radio-button
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .value="${ifDefined(item.value)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .checked="${ifDefined(item.checked)}"
            .disabled="${ifDefined(item.disabled)}"
            @onRadioButtonNativeInput="${ifDefined(item.onRadioButtonNativeInput)}"
            @onRadioButtonNativeReset="${ifDefined(item.onRadioButtonNativeReset)}"
        ></md-radio-button>
    `
}

/**
 * {{desc}}
 */
function renderScrim(item = {}) {
    /* prettier-ignore */
    return html`
        <md-scrim
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .open="${ifDefined(item.open)}"
        ></md-scrim>
    `
}

/**
 * {{desc}}
 */
function renderSearchField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-search-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-search-field>
    `
}

/**
 * {{desc}}
 */
function renderSegmentedButton(item = {}) {
    /* prettier-ignore */
    return html`
        <md-segmented-button
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .buttons="${ifDefined(item.buttons)}"
            .singleSelection="${ifDefined(item.singleSelection)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            @onSegmentedButtonItemClick="${ifDefined(item.onSegmentedButtonItemClick)}"
        ></md-segmented-button>
    `
}

/**
 * {{desc}}
 */
function renderSelectField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-select-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-select-field>
    `
}

/**
 * {{desc}}
 */
function renderSheet(item = {}) {
    /* prettier-ignore */
    return html`
        <md-sheet
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-sheet>
    `
}

/**
 * {{desc}}
 */
function renderSideSheet(item = {}) {
    /* prettier-ignore */
    return html`
        <md-side-sheet
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-side-sheet>
    `
}

/**
 * {{desc}}
 */
function renderSlider(item = {}) {
    /* prettier-ignore */
    return html`
        <md-slider
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .step="${ifDefined(item.step)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            @onSliderNativeInput="${ifDefined(item.onSliderNativeInput)}"
            @onSliderNativeReset="${ifDefined(item.onSliderNativeReset)}"
        ></md-slider>
    `
}

/**
 * {{desc}}
 */
function renderSnackbar(item = {}) {
    /* prettier-ignore */
    return html`
        <md-snackbar
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onSnackbarShow="${ifDefined(item.onSnackbarShow)}"
            @onSnackbarClose="${ifDefined(item.onSnackbarClose)}"
        ></md-snackbar>
    `
}

/**
 * {{desc}}
 */
function renderSpacer(item = {}) {
    /* prettier-ignore */
    return html`
        <md-spacer
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
        ></md-spacer>
    `
}

/**
 * {{desc}}
 */
function renderSwitch(item = {}) {
    /* prettier-ignore */
    return html`
        <md-switch
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .value="${ifDefined(item.value)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .checked="${ifDefined(item.checked)}"
            .disabled="${ifDefined(item.disabled)}"
            .icons="${ifDefined(item.icons)}"
            @onSwitchNativeInput="${ifDefined(item.onSwitchNativeInput)}"
            @onSwitchNativeReset="${ifDefined(item.onSwitchNativeReset)}"
        ></md-switch>
    `
}

/**
 * {{desc}}
 */
function renderTabs(item = {}) {
    /* prettier-ignore */
    return html`
        <md-tabs
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .list="${ifDefined(item.list)}"
            .variant="${ifDefined(item.variant)}"
            @onTreeItemClick="${ifDefined(item.onTreeItemClick)}"
        ></md-tabs>
    `
}

/**
 * {{desc}}
 */
function renderTextField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-text-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-text-field>
    `
}

/**
 * {{desc}}
 */
function renderTextareaField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-textarea-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-textarea-field>
    `
}

/**
 * {{desc}}
 */
function renderTimeField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-time-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-time-field>
    `
}

/**
 * {{desc}}
 */
function renderTimePicker(item = {}) {
    /* prettier-ignore */
    return html`
        <md-time-picker
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onDatetimePickerSelection="${ifDefined(item.onDatetimePickerSelection)}"
            @onDatetimePickerIconButtonPrevClick="${ifDefined(item.onDatetimePickerIconButtonPrevClick)}"
            @onDatetimePickerIconButtonNextClick="${ifDefined(item.onDatetimePickerIconButtonNextClick)}"
            @onDatetimePickerButtonLabelClick="${ifDefined(item.onDatetimePickerButtonLabelClick)}"
            @onDatetimePickerButtonCancelClick="${ifDefined(item.onDatetimePickerButtonCancelClick)}"
            @onDatetimePickerButtonOkClick="${ifDefined(item.onDatetimePickerButtonOkClick)}"
            @onDatetimePickerYearItemClick="${ifDefined(item.onDatetimePickerYearItemClick)}"
            @onDatetimePickerMonthItemClick="${ifDefined(item.onDatetimePickerMonthItemClick)}"
            @onDatetimePickerDayItemClick="${ifDefined(item.onDatetimePickerDayItemClick)}"
            @onDatetimePickerHourItemClick="${ifDefined(item.onDatetimePickerHourItemClick)}"
            @onDatetimePickerMinuteItemClick="${ifDefined(item.onDatetimePickerMinuteItemClick)}"
            @onTimePickerButtonLabelClick="${ifDefined(item.onTimePickerButtonLabelClick)}"
            @onTimePickerSelection="${ifDefined(item.onTimePickerSelection)}"
            @onTimePickerIconButtonPrevClick="${ifDefined(item.onTimePickerIconButtonPrevClick)}"
            @onTimePickerIconButtonNextClick="${ifDefined(item.onTimePickerIconButtonNextClick)}"
            @onTimePickerHourItemClick="${ifDefined(item.onTimePickerHourItemClick)}"
            @onTimePickerMinuteItemClick="${ifDefined(item.onTimePickerMinuteItemClick)}"
            @onTimePickerButtonCancelClick="${ifDefined(item.onTimePickerButtonCancelClick)}"
            @onTimePickerButtonOkClick="${ifDefined(item.onTimePickerButtonOkClick)}"
        ></md-time-picker>
    `
}

/**
 * {{desc}}
 */
function renderToolbar(item = {}) {
    /* prettier-ignore */
    return html`
        <md-toolbar
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .items="${ifDefined(item.items)}"
        ></md-toolbar>
    `
}

/**
 * {{desc}}
 */
function renderTooltip(item = {}) {
    /* prettier-ignore */
    return html`
        <md-tooltip
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-tooltip>
    `
}

/**
 * {{desc}}
 */
function renderTopAppBar(item = {}) {
    /* prettier-ignore */
    return html`
        <md-top-app-bar
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
        ></md-top-app-bar>
    `
}

/**
 * {{desc}}
 */
function renderTree(item = {}) {
    /* prettier-ignore */
    return html`
        <md-tree
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .list="${ifDefined(item.list)}"
            .variant="${ifDefined(item.variant)}"
            @onTreeItemClick="${ifDefined(item.onTreeItemClick)}"
        ></md-tree>
    `
}

/**
 * {{desc}}
 */
function renderTreeItem(item = {}) {
    /* prettier-ignore */
    return html`
        <md-tree-item
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .badge="${ifDefined(item.badge)}"
            .selected="${ifDefined(item.selected)}"
            .routerLink="${ifDefined(item.routerLink)}"
            .indent="${ifDefined(item.indent)}"
            .isNode="${ifDefined(item.isNode)}"
            .expanded="${ifDefined(item.expanded)}"
            .activated="${ifDefined(item.activated)}"
            .variant="${ifDefined(item.variant)}"
            .isParent="${ifDefined(item.isParent)}"
            .nodeActions="${ifDefined(item.nodeActions)}"
            .nodeIcons="${ifDefined(item.nodeIcons)}"
            .leafIcons="${ifDefined(item.leafIcons)}"
            @onTreeItemSelected="${ifDefined(item.onTreeItemSelected)}"
        ></md-tree-item>
    `
}

/**
 * {{desc}}
 */
function renderWeekField(item = {}) {
    /* prettier-ignore */
    return html`
        <md-week-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .value="${ifDefined(item.value)}"
            .min="${ifDefined(item.min)}"
            .max="${ifDefined(item.max)}"
            .cols="${ifDefined(item.cols)}"
            .rows="${ifDefined(item.rows)}"
            .minLength="${ifDefined(item.minLength)}"
            .maxLength="${ifDefined(item.maxLength)}"
            .pattern="${ifDefined(item.pattern)}"
            .required="${ifDefined(item.required)}"
            .readOnly="${ifDefined(item.readOnly)}"
            .disabled="${ifDefined(item.disabled)}"
            .autocomplete="${ifDefined(item.autocomplete)}"
            .multiple="${ifDefined(item.multiple)}"
            .options="${ifDefined(item.options)}"
            .validationMessage="${ifDefined(item.validationMessage)}"
            .focused="${ifDefined(item.focused)}"
            .variant="${ifDefined(item.variant)}"
            .mask="${ifDefined(item.mask)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-week-field>
    `
}

/**
 * {{desc}}
 */
function renderWeekPicker(item = {}) {
    /* prettier-ignore */
    return html`
        <md-week-picker
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .label="${ifDefined(item.label)}"
            .subLabel="${ifDefined(item.subLabel)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onSheetShow="${ifDefined(item.onSheetShow)}"
            @onSheetClose="${ifDefined(item.onSheetClose)}"
            @onSheetScrimClick="${ifDefined(item.onSheetScrimClick)}"
            @onDatetimePickerSelection="${ifDefined(item.onDatetimePickerSelection)}"
            @onDatetimePickerIconButtonPrevClick="${ifDefined(item.onDatetimePickerIconButtonPrevClick)}"
            @onDatetimePickerIconButtonNextClick="${ifDefined(item.onDatetimePickerIconButtonNextClick)}"
            @onDatetimePickerButtonLabelClick="${ifDefined(item.onDatetimePickerButtonLabelClick)}"
            @onDatetimePickerButtonCancelClick="${ifDefined(item.onDatetimePickerButtonCancelClick)}"
            @onDatetimePickerButtonOkClick="${ifDefined(item.onDatetimePickerButtonOkClick)}"
            @onDatetimePickerYearItemClick="${ifDefined(item.onDatetimePickerYearItemClick)}"
            @onDatetimePickerMonthItemClick="${ifDefined(item.onDatetimePickerMonthItemClick)}"
            @onDatetimePickerDayItemClick="${ifDefined(item.onDatetimePickerDayItemClick)}"
            @onDatetimePickerHourItemClick="${ifDefined(item.onDatetimePickerHourItemClick)}"
            @onDatetimePickerMinuteItemClick="${ifDefined(item.onDatetimePickerMinuteItemClick)}"
            @onWeekPickerButtonLabelClick="${ifDefined(item.onWeekPickerButtonLabelClick)}"
            @onWeekPickerSelection="${ifDefined(item.onWeekPickerSelection)}"
            @onWeekPickerIconButtonPrevClick="${ifDefined(item.onWeekPickerIconButtonPrevClick)}"
            @onWeekPickerIconButtonNextClick="${ifDefined(item.onWeekPickerIconButtonNextClick)}"
            @onWeekPickerYearItemClick="${ifDefined(item.onWeekPickerYearItemClick)}"
            @onWeekPickerMonthItemClick="${ifDefined(item.onWeekPickerMonthItemClick)}"
            @onWeekPickerDayItemClick="${ifDefined(item.onWeekPickerDayItemClick)}"
            @onWeekPickerButtonCancelClick="${ifDefined(item.onWeekPickerButtonCancelClick)}"
            @onWeekPickerButtonOkClick="${ifDefined(item.onWeekPickerButtonOkClick)}"
        ></md-week-picker>
    `
}

/**
 * {{desc}}
 */
function renderComponent(item) {
    /* prettier-ignore */
    return choose(item.component, [
        ["badge", () => renderBadge(item)],
        ["bottom-app-bar", () => renderBottomAppBar(item)],
        ["bottom-sheet", () => renderBottomSheet(item)],
        ["box", () => renderBox(item)],
        ["button", () => renderButton(item)],
        ["card", () => renderCard(item)],
        ["checkbox", () => renderCheckbox(item)],
        ["chip", () => renderChip(item)],
        ["chips", () => renderChips(item)],
        ["color-field", () => renderColorField(item)],
        ["color-picker", () => renderColorPicker(item)],
        ["data-table", () => renderDataTable(item)],
        ["data-table-column-cell", () => renderDataTableColumnCell(item)],
        ["data-table-item", () => renderDataTableItem(item)],
        ["data-table-row-cell", () => renderDataTableRowCell(item)],
        ["date-field", () => renderDateField(item)],
        ["date-picker", () => renderDatePicker(item)],
        ["datetime-field", () => renderDatetimeField(item)],
        ["datetime-picker", () => renderDatetimePicker(item)],
        ["dialog", () => renderDialog(item)],
        ["divider", () => renderDivider(item)],
        ["emoji", () => renderEmoji(item)],
        ["emoji-picker", () => renderEmojiPicker(item)],
        ["fab", () => renderFab(item)],
        ["form", () => renderForm(item)],
        ["icon", () => renderIcon(item)],
        ["icon-button", () => renderIconButton(item)],
        ["image", () => renderImage(item)],
        ["layout", () => renderLayout(item)],
        ["layout-item", () => renderLayoutItem(item)],
        ["list", () => renderList(item)],
        ["list-item", () => renderListItem(item)],
        ["markdown", () => renderMarkdown(item)],
        ["menu", () => renderMenu(item)],
        ["month-field", () => renderMonthField(item)],
        ["month-picker", () => renderMonthPicker(item)],
        ["navigation-bar", () => renderNavigationBar(item)],
        ["navigation-drawer", () => renderNavigationDrawer(item)],
        ["navigation-rail", () => renderNavigationRail(item)],
        ["number-field", () => renderNumberField(item)],
        ["pagination", () => renderPagination(item)],
        ["password-field", () => renderPasswordField(item)],
        ["progress-indicator", () => renderProgressIndicator(item)],
        ["radio-button", () => renderRadioButton(item)],
        ["scrim", () => renderScrim(item)],
        ["search-field", () => renderSearchField(item)],
        ["segmented-button", () => renderSegmentedButton(item)],
        ["select-field", () => renderSelectField(item)],
        ["sheet", () => renderSheet(item)],
        ["side-sheet", () => renderSideSheet(item)],
        ["slider", () => renderSlider(item)],
        ["snackbar", () => renderSnackbar(item)],
        ["spacer", () => renderSpacer(item)],
        ["switch", () => renderSwitch(item)],
        ["tabs", () => renderTabs(item)],
        ["text-field", () => renderTextField(item)],
        ["textarea-field", () => renderTextareaField(item)],
        ["time-field", () => renderTimeField(item)],
        ["time-picker", () => renderTimePicker(item)],
        ["toolbar", () => renderToolbar(item)],
        ["tooltip", () => renderTooltip(item)],
        ["top-app-bar", () => renderTopAppBar(item)],
        ["tree", () => renderTree(item)],
        ["tree-item", () => renderTreeItem(item)],
        ["week-field", () => renderWeekField(item)],
        ["week-picker", () => renderWeekPicker(item)],
    ], () => nothing)
}
export { renderComponent };
