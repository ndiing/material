import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * Render Badge
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Number} [item.label] - {{desc}}
 * @property {Number} [item.limit] - {{desc}}
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
 * Render Block
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {Boolean} [item.leadingCheckbox] - {{desc}}
 * @property {Boolean} [item.leadingRadioButton] - {{desc}}
 * @property {Boolean} [item.leadingSwitch] - {{desc}}
 * @property {String} [item.leadingAvatar] - {{desc}}
 * @property {String} [item.leadingImage] - {{desc}}
 * @property {String} [item.leadingVideo] - {{desc}}
 * @property {String} [item.leadingIcon] - {{desc}}
 * @property {String} [item.leadingSupportingText] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.supportingText] - {{desc}}
 * @property {String} [item.trailingSupportingText] - {{desc}}
 * @property {String} [item.trailingIcon] - {{desc}}
 * @property {String} [item.trailingVideo] - {{desc}}
 * @property {String} [item.trailingImage] - {{desc}}
 * @property {String} [item.trailingAvatar] - {{desc}}
 * @property {Boolean} [item.trailingSwitch] - {{desc}}
 * @property {Boolean} [item.trailingRadioButton] - {{desc}}
 * @property {Boolean} [item.trailingCheckbox] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Number} [item.badge] - {{desc}}
 * @property {Number} [item.indent] - {{desc}}
 * @property {String} [item.routerLink] - {{desc}}
 * @property {String} [item.defaultLeadingActionComponent] - {{desc}}
 * @property {String} [item.defaultTrailingActionComponent] - {{desc}}
 * @property {Boolean} [item.activated] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {Function} [item.onCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onCheckboxNativeReset] - {{desc}}
 * @property {Function} [item.onRadioButtonNativeInput] - {{desc}}
 * @property {Function} [item.onRadioButtonNativeReset] - {{desc}}
 * @property {Function} [item.onSwitchNativeInput] - {{desc}}
 * @property {Function} [item.onSwitchNativeReset] - {{desc}}
 * @property {Function} [item.onImageNativeLoad] - {{desc}}
 * @property {Function} [item.onImageNativeError] - {{desc}}
 */
function renderBlock(item = {}) {
    /* prettier-ignore */
    return html`
        <md-block
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
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
            .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .badge="${ifDefined(item.badge)}"
            .indent="${ifDefined(item.indent)}"
            .routerLink="${ifDefined(item.routerLink)}"
            .defaultLeadingActionComponent="${ifDefined(item.defaultLeadingActionComponent)}"
            .defaultTrailingActionComponent="${ifDefined(item.defaultTrailingActionComponent)}"
            .activated="${ifDefined(item.activated)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @onCheckboxNativeInput="${ifDefined(item.onCheckboxNativeInput)}"
            @onCheckboxNativeReset="${ifDefined(item.onCheckboxNativeReset)}"
            @onRadioButtonNativeInput="${ifDefined(item.onRadioButtonNativeInput)}"
            @onRadioButtonNativeReset="${ifDefined(item.onRadioButtonNativeReset)}"
            @onSwitchNativeInput="${ifDefined(item.onSwitchNativeInput)}"
            @onSwitchNativeReset="${ifDefined(item.onSwitchNativeReset)}"
            @onImageNativeLoad="${ifDefined(item.onImageNativeLoad)}"
            @onImageNativeError="${ifDefined(item.onImageNativeError)}"
            @click="${ifDefined(item.onBlockClick)}"
        ></md-block>
    `
}

/**
 * Render Bottom App Bar
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-bottom-app-bar>
    `
}

/**
 * Render Bottom Sheet
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-bottom-sheet>
    `
}

/**
 * Render Button
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
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
            @click="${ifDefined(item.onButtonClick)}"
        ></md-button>
    `
}

/**
 * Render Card
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-card>
    `
}

/**
 * Render Checkbox
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.checked] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {Function} [item.onCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onCheckboxNativeReset] - {{desc}}
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
 * Render Chip
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.avatar] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.action] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {Function} [item.onChipActionClick] - {{desc}}
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
            @click="${ifDefined(item.onChipClick)}"
        ></md-chip>
    `
}

/**
 * Render Chips
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {Boolean} [item.multiSelection] - {{desc}}
 * @property {Function} [item.onChipClick] - {{desc}}
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
            .items="${ifDefined(item.items)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            @onChipClick="${ifDefined(item.onChipClick)}"
        ></md-chips>
    `
}

/**
 * Render Color Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Color Picker
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onColorPickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onColorPickerSelection] - {{desc}}
 * @property {Function} [item.onColorPickerGradientTrackPointerdown] - {{desc}}
 * @property {Function} [item.onColorPickerGradientTrackPointermove] - {{desc}}
 * @property {Function} [item.onColorPickerGradientTrackPointerup] - {{desc}}
 * @property {Function} [item.onColorPickerHueNativeInput] - {{desc}}
 * @property {Function} [item.onColorPickerOpacityNativeInput] - {{desc}}
 * @property {Function} [item.onColorPickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onColorPickerButtonOkClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .value="${ifDefined(item.value)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
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
 * Render Data Table
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Array} [item.columns] - {{desc}}
 * @property {Array} [item.rows] - {{desc}}
 * @property {Array} [item.footer] - {{desc}}
 * @property {Boolean} [item.stickyHeader] - {{desc}}
 * @property {Boolean} [item.stickyFooter] - {{desc}}
 * @property {Boolean} [item.checkboxSelection] - {{desc}}
 * @property {Boolean} [item.stickyCheckboxSelection] - {{desc}}
 * @property {Boolean} [item.rangeSelection] - {{desc}}
 * @property {Boolean} [item.multiSelection] - {{desc}}
 * @property {Boolean} [item.singleSelection] - {{desc}}
 * @property {Boolean} [item.allSelection] - {{desc}}
 * @property {Array} [item.toolbarItems] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onDataTableTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellDragStart] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellDrag] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellDragEnd] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellResizeStart] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellResize] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellResizeEnd] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellPointerenter] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellPointerleave] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellClick] - {{desc}}
 * @property {Function} [item.onDataTableColumnCellCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onDataTableRowCellCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onDataTableRowClick] - {{desc}}
 * @property {Function} [item.onDataTableKeydown] - {{desc}}
 * @property {Function} [item.onDataTablePaginationChange] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
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
            @onScrimClick="${ifDefined(item.onScrimClick)}"
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
 * Render Data Table Column Cell
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {Boolean} [item.leadingCheckbox] - {{desc}}
 * @property {Boolean} [item.leadingRadio] - {{desc}}
 * @property {Boolean} [item.leadingSwitch] - {{desc}}
 * @property {String} [item.leadingAvatar] - {{desc}}
 * @property {String} [item.leadingImage] - {{desc}}
 * @property {String} [item.leadingVideo] - {{desc}}
 * @property {String} [item.leadingIcon] - {{desc}}
 * @property {String} [item.leadingSupportingText] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.supportingText] - {{desc}}
 * @property {String} [item.trailingSupportingText] - {{desc}}
 * @property {String} [item.trailingIcon] - {{desc}}
 * @property {String} [item.trailingVideo] - {{desc}}
 * @property {String} [item.trailingImage] - {{desc}}
 * @property {String} [item.trailingAvatar] - {{desc}}
 * @property {Boolean} [item.trailingSwitch] - {{desc}}
 * @property {Boolean} [item.trailingRadio] - {{desc}}
 * @property {Boolean} [item.trailingCheckbox] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Number} [item.badge] - {{desc}}
 * @property {Boolean} [item.activated] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
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
 * Render Data Table Item
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {Boolean} [item.leadingCheckbox] - {{desc}}
 * @property {Boolean} [item.leadingRadio] - {{desc}}
 * @property {Boolean} [item.leadingSwitch] - {{desc}}
 * @property {String} [item.leadingAvatar] - {{desc}}
 * @property {String} [item.leadingImage] - {{desc}}
 * @property {String} [item.leadingVideo] - {{desc}}
 * @property {String} [item.leadingIcon] - {{desc}}
 * @property {String} [item.leadingSupportingText] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.supportingText] - {{desc}}
 * @property {String} [item.trailingSupportingText] - {{desc}}
 * @property {String} [item.trailingIcon] - {{desc}}
 * @property {String} [item.trailingVideo] - {{desc}}
 * @property {String} [item.trailingImage] - {{desc}}
 * @property {String} [item.trailingAvatar] - {{desc}}
 * @property {Boolean} [item.trailingSwitch] - {{desc}}
 * @property {Boolean} [item.trailingRadio] - {{desc}}
 * @property {Boolean} [item.trailingCheckbox] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Number} [item.badge] - {{desc}}
 * @property {Boolean} [item.activated] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
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
 * Render Data Table Row Cell
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {Boolean} [item.leadingCheckbox] - {{desc}}
 * @property {Boolean} [item.leadingRadio] - {{desc}}
 * @property {Boolean} [item.leadingSwitch] - {{desc}}
 * @property {String} [item.leadingAvatar] - {{desc}}
 * @property {String} [item.leadingImage] - {{desc}}
 * @property {String} [item.leadingVideo] - {{desc}}
 * @property {String} [item.leadingIcon] - {{desc}}
 * @property {String} [item.leadingSupportingText] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.supportingText] - {{desc}}
 * @property {String} [item.trailingSupportingText] - {{desc}}
 * @property {String} [item.trailingIcon] - {{desc}}
 * @property {String} [item.trailingVideo] - {{desc}}
 * @property {String} [item.trailingImage] - {{desc}}
 * @property {String} [item.trailingAvatar] - {{desc}}
 * @property {Boolean} [item.trailingSwitch] - {{desc}}
 * @property {Boolean} [item.trailingRadio] - {{desc}}
 * @property {Boolean} [item.trailingCheckbox] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Number} [item.badge] - {{desc}}
 * @property {Boolean} [item.activated] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
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
 * Render Date Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Date Picker
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Number} [item.index] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerSelection] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonOkClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerYearItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMonthItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerDayItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerHourItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMinuteItemClick] - {{desc}}
 * @property {Function} [item.onDatePickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onDatePickerSelection] - {{desc}}
 * @property {Function} [item.onDatePickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onDatePickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onDatePickerYearItemClick] - {{desc}}
 * @property {Function} [item.onDatePickerMonthItemClick] - {{desc}}
 * @property {Function} [item.onDatePickerDayItemClick] - {{desc}}
 * @property {Function} [item.onDatePickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onDatePickerButtonOkClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
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
 * Render Datetime Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Datetime Picker
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Number} [item.index] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerSelection] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonOkClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerYearItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMonthItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerDayItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerHourItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMinuteItemClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
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
 * Render Dialog
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-dialog>
    `
}

/**
 * Render Divider
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
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
 * Render Emoji
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.emoji] - {{desc}}
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
            @click="${ifDefined(item.onEmojiClick)}"
        ></md-emoji>
    `
}

/**
 * Render Emoji Picker
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Object} [item.tabs] - {{desc}}
 * @property {Array} [item.rows] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onEmojiPickerTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onEmojiPickerTabsItemClick] - {{desc}}
 * @property {Function} [item.onEmojiPickerViewportVirtualScroll] - {{desc}}
 * @property {Function} [item.onEmojiPickerGridColumnClick] - {{desc}}
 * @property {Function} [item.onEmojiPickerButtonClick] - {{desc}}
 * @property {Function} [item.onEmojiPickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onEmojiPickerButtonOkClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .tabs="${ifDefined(item.tabs)}"
            .rows="${ifDefined(item.rows)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
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
 * Render Fab
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
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
            @click="${ifDefined(item.onFabClick)}"
        ></md-fab>
    `
}

/**
 * Render Form
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.acceptCharset] - {{desc}}
 * @property {String} [item.action] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {String} [item.enctype] - {{desc}}
 * @property {String} [item.method] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {Boolean} [item.novalidate] - {{desc}}
 * @property {String} [item.target] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {Function} [item.onFormNativeReset] - {{desc}}
 * @property {Function} [item.onFormNativeSubmit] - {{desc}}
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
 * Render Icon
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
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
            @click="${ifDefined(item.onIconClick)}"
        ></md-icon>
    `
}

/**
 * Render Icon Button
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {Function} [item.onIconButtonToggleClick] - {{desc}}
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
            @click="${ifDefined(item.onIconButtonClick)}"
        ></md-icon-button>
    `
}

/**
 * Render Image
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.src] - {{desc}}
 * @property {String} [item.alt] - {{desc}}
 * @property {String} [item.loading] - {{desc}}
 * @property {String} [item.ratio] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Function} [item.onImageNativeLoad] - {{desc}}
 * @property {Function} [item.onImageNativeError] - {{desc}}
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
 * Render Layout
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
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
 * Render Layout Item
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Number} [item.expanded] - {{desc}}
 * @property {Number} [item.medium] - {{desc}}
 * @property {Number} [item.compact] - {{desc}}
 * @property {String} [item.region] - {{desc}}
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
 * Render List
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {Boolean} [item.rangeSelection] - {{desc}}
 * @property {Boolean} [item.multiSelection] - {{desc}}
 * @property {Boolean} [item.singleSelection] - {{desc}}
 * @property {Boolean} [item.allSelection] - {{desc}}
 * @property {Function} [item.onListItemClick] - {{desc}}
 * @property {Function} [item.onListKeydown] - {{desc}}
 * @property {Function} [item.onListItemCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onListItemRadioButtonNativeInput] - {{desc}}
 * @property {Function} [item.onListItemSwitchNativeInput] - {{desc}}
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
            .items="${ifDefined(item.items)}"
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
 * Render List Item
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {Boolean} [item.leadingCheckbox] - {{desc}}
 * @property {Boolean} [item.leadingRadioButton] - {{desc}}
 * @property {Boolean} [item.leadingSwitch] - {{desc}}
 * @property {String} [item.leadingAvatar] - {{desc}}
 * @property {String} [item.leadingImage] - {{desc}}
 * @property {String} [item.leadingVideo] - {{desc}}
 * @property {String} [item.leadingIcon] - {{desc}}
 * @property {String} [item.leadingSupportingText] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.supportingText] - {{desc}}
 * @property {String} [item.trailingSupportingText] - {{desc}}
 * @property {String} [item.trailingIcon] - {{desc}}
 * @property {String} [item.trailingVideo] - {{desc}}
 * @property {String} [item.trailingImage] - {{desc}}
 * @property {String} [item.trailingAvatar] - {{desc}}
 * @property {Boolean} [item.trailingSwitch] - {{desc}}
 * @property {Boolean} [item.trailingRadioButton] - {{desc}}
 * @property {Boolean} [item.trailingCheckbox] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Number} [item.badge] - {{desc}}
 * @property {Number} [item.indent] - {{desc}}
 * @property {String} [item.routerLink] - {{desc}}
 * @property {String} [item.defaultLeadingActionComponent] - {{desc}}
 * @property {String} [item.defaultTrailingActionComponent] - {{desc}}
 * @property {Boolean} [item.activated] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {Function} [item.onCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onCheckboxNativeReset] - {{desc}}
 * @property {Function} [item.onRadioButtonNativeInput] - {{desc}}
 * @property {Function} [item.onRadioButtonNativeReset] - {{desc}}
 * @property {Function} [item.onSwitchNativeInput] - {{desc}}
 * @property {Function} [item.onSwitchNativeReset] - {{desc}}
 * @property {Function} [item.onImageNativeLoad] - {{desc}}
 * @property {Function} [item.onImageNativeError] - {{desc}}
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
            .leadingActions="${ifDefined(item.leadingActions)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
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
            .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .badge="${ifDefined(item.badge)}"
            .indent="${ifDefined(item.indent)}"
            .routerLink="${ifDefined(item.routerLink)}"
            .defaultLeadingActionComponent="${ifDefined(item.defaultLeadingActionComponent)}"
            .defaultTrailingActionComponent="${ifDefined(item.defaultTrailingActionComponent)}"
            .activated="${ifDefined(item.activated)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @onCheckboxNativeInput="${ifDefined(item.onCheckboxNativeInput)}"
            @onCheckboxNativeReset="${ifDefined(item.onCheckboxNativeReset)}"
            @onRadioButtonNativeInput="${ifDefined(item.onRadioButtonNativeInput)}"
            @onRadioButtonNativeReset="${ifDefined(item.onRadioButtonNativeReset)}"
            @onSwitchNativeInput="${ifDefined(item.onSwitchNativeInput)}"
            @onSwitchNativeReset="${ifDefined(item.onSwitchNativeReset)}"
            @onImageNativeLoad="${ifDefined(item.onImageNativeLoad)}"
            @onImageNativeError="${ifDefined(item.onImageNativeError)}"
            @click="${ifDefined(item.onListItemClick)}"
        ></md-list-item>
    `
}

/**
 * Render Menu
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {Number} [item.rowHeight] - {{desc}}
 * @property {Number} [item.maxRows] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onMenuListSelection] - {{desc}}
 * @property {Function} [item.onMenuListItemEnter] - {{desc}}
 * @property {Function} [item.onMenuViewportVirtualScroll] - {{desc}}
 * @property {Function} [item.onMenuViewportVirtualScrollInitialized] - {{desc}}
 * @property {Function} [item.onMenuListItemClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .items="${ifDefined(item.items)}"
            .rowHeight="${ifDefined(item.rowHeight)}"
            .maxRows="${ifDefined(item.maxRows)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
            @onMenuListSelection="${ifDefined(item.onMenuListSelection)}"
            @onMenuListItemEnter="${ifDefined(item.onMenuListItemEnter)}"
            @onMenuViewportVirtualScroll="${ifDefined(item.onMenuViewportVirtualScroll)}"
            @onMenuViewportVirtualScrollInitialized="${ifDefined(item.onMenuViewportVirtualScrollInitialized)}"
            @onMenuListItemClick="${ifDefined(item.onMenuListItemClick)}"
        ></md-menu>
    `
}

/**
 * Render Month Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Month Picker
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Number} [item.index] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerSelection] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonOkClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerYearItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMonthItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerDayItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerHourItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMinuteItemClick] - {{desc}}
 * @property {Function} [item.onMonthPickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onMonthPickerSelection] - {{desc}}
 * @property {Function} [item.onMonthPickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onMonthPickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onMonthPickerYearItemClick] - {{desc}}
 * @property {Function} [item.onMonthPickerMonthItemClick] - {{desc}}
 * @property {Function} [item.onMonthPickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onMonthPickerButtonOkClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
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
 * Render Navigation Bar
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-navigation-bar>
    `
}

/**
 * Render Navigation Drawer
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-navigation-drawer>
    `
}

/**
 * Render Navigation Rail
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-navigation-rail>
    `
}

/**
 * Render Number Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Pagination
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Number} [item.total] - {{desc}}
 * @property {Number} [item.limit] - {{desc}}
 * @property {Number} [item.page] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {Boolean} [item.firstPage] - {{desc}}
 * @property {Boolean} [item.prevPage] - {{desc}}
 * @property {Boolean} [item.nextPage] - {{desc}}
 * @property {Boolean} [item.lastPage] - {{desc}}
 * @property {Function} [item.onPaginationChange] - {{desc}}
 * @property {Function} [item.onPaginationLimitChange] - {{desc}}
 * @property {Function} [item.onPaginationFirstClick] - {{desc}}
 * @property {Function} [item.onPaginationPrevClick] - {{desc}}
 * @property {Function} [item.onPaginationNextClick] - {{desc}}
 * @property {Function} [item.onPaginationLastClick] - {{desc}}
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
 * Render Pane
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 */
function renderPane(item = {}) {
    /* prettier-ignore */
    return html`
        <md-pane
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({...item.classMap})}"
            style="${styleMap({...item.styleMap})}"
            .tooltip="${ifDefined(item.tooltip)}"
            .variant="${ifDefined(item.variant)}"
            .leadingActions="${ifDefined(item.leadingActions)}"
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-pane>
    `
}

/**
 * Render Password Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Progress Indicator
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Number} [item.value] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
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
 * Render Radio Button
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.checked] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {Function} [item.onRadioButtonNativeInput] - {{desc}}
 * @property {Function} [item.onRadioButtonNativeReset] - {{desc}}
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
 * Render Scrim
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
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
 * Render Search Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Segmented Button
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {Boolean} [item.singleSelection] - {{desc}}
 * @property {Boolean} [item.multiSelection] - {{desc}}
 * @property {Function} [item.onSegmentedButtonItemClick] - {{desc}}
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
            .items="${ifDefined(item.items)}"
            .singleSelection="${ifDefined(item.singleSelection)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            @onSegmentedButtonItemClick="${ifDefined(item.onSegmentedButtonItemClick)}"
        ></md-segmented-button>
    `
}

/**
 * Render Select Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Sheet
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-sheet>
    `
}

/**
 * Render Side Sheet
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-side-sheet>
    `
}

/**
 * Render Slider
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.step] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Function} [item.onSliderNativeInput] - {{desc}}
 * @property {Function} [item.onSliderNativeReset] - {{desc}}
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
 * Render Snackbar
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onSnackbarShow] - {{desc}}
 * @property {Function} [item.onSnackbarClose] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
            @onSnackbarShow="${ifDefined(item.onSnackbarShow)}"
            @onSnackbarClose="${ifDefined(item.onSnackbarClose)}"
        ></md-snackbar>
    `
}

/**
 * Render Spacer
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
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
 * Render Switch
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.checked] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {Array} [item.icons] - {{desc}}
 * @property {Function} [item.onSwitchNativeInput] - {{desc}}
 * @property {Function} [item.onSwitchNativeReset] - {{desc}}
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
 * Render Tabs
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {Boolean} [item.rangeSelection] - {{desc}}
 * @property {Boolean} [item.multiSelection] - {{desc}}
 * @property {Boolean} [item.singleSelection] - {{desc}}
 * @property {Boolean} [item.allSelection] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Function} [item.onListItemClick] - {{desc}}
 * @property {Function} [item.onListKeydown] - {{desc}}
 * @property {Function} [item.onListItemCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onListItemRadioButtonNativeInput] - {{desc}}
 * @property {Function} [item.onListItemSwitchNativeInput] - {{desc}}
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
            .items="${ifDefined(item.items)}"
            .rangeSelection="${ifDefined(item.rangeSelection)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            .singleSelection="${ifDefined(item.singleSelection)}"
            .allSelection="${ifDefined(item.allSelection)}"
            .variant="${ifDefined(item.variant)}"
            @onListItemClick="${ifDefined(item.onListItemClick)}"
            @onListKeydown="${ifDefined(item.onListKeydown)}"
            @onListItemCheckboxNativeInput="${ifDefined(item.onListItemCheckboxNativeInput)}"
            @onListItemRadioButtonNativeInput="${ifDefined(item.onListItemRadioButtonNativeInput)}"
            @onListItemSwitchNativeInput="${ifDefined(item.onListItemSwitchNativeInput)}"
        ></md-tabs>
    `
}

/**
 * Render Text Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Textarea Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Time Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Time Picker
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Number} [item.index] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerSelection] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonOkClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerYearItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMonthItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerDayItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerHourItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMinuteItemClick] - {{desc}}
 * @property {Function} [item.onTimePickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onTimePickerSelection] - {{desc}}
 * @property {Function} [item.onTimePickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onTimePickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onTimePickerHourItemClick] - {{desc}}
 * @property {Function} [item.onTimePickerMinuteItemClick] - {{desc}}
 * @property {Function} [item.onTimePickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onTimePickerButtonOkClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
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
 * Render Toolbar
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {Boolean} [item.leadingCheckbox] - {{desc}}
 * @property {Boolean} [item.leadingRadioButton] - {{desc}}
 * @property {Boolean} [item.leadingSwitch] - {{desc}}
 * @property {String} [item.leadingAvatar] - {{desc}}
 * @property {String} [item.leadingImage] - {{desc}}
 * @property {String} [item.leadingVideo] - {{desc}}
 * @property {String} [item.leadingIcon] - {{desc}}
 * @property {String} [item.leadingSupportingText] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.supportingText] - {{desc}}
 * @property {String} [item.trailingSupportingText] - {{desc}}
 * @property {String} [item.trailingIcon] - {{desc}}
 * @property {String} [item.trailingVideo] - {{desc}}
 * @property {String} [item.trailingImage] - {{desc}}
 * @property {String} [item.trailingAvatar] - {{desc}}
 * @property {Boolean} [item.trailingSwitch] - {{desc}}
 * @property {Boolean} [item.trailingRadioButton] - {{desc}}
 * @property {Boolean} [item.trailingCheckbox] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Number} [item.badge] - {{desc}}
 * @property {Number} [item.indent] - {{desc}}
 * @property {String} [item.routerLink] - {{desc}}
 * @property {String} [item.defaultLeadingActionComponent] - {{desc}}
 * @property {String} [item.defaultTrailingActionComponent] - {{desc}}
 * @property {Boolean} [item.activated] - {{desc}}
 * @property {Boolean} [item.indeterminate] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {Function} [item.onCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onCheckboxNativeReset] - {{desc}}
 * @property {Function} [item.onRadioButtonNativeInput] - {{desc}}
 * @property {Function} [item.onRadioButtonNativeReset] - {{desc}}
 * @property {Function} [item.onSwitchNativeInput] - {{desc}}
 * @property {Function} [item.onSwitchNativeReset] - {{desc}}
 * @property {Function} [item.onImageNativeLoad] - {{desc}}
 * @property {Function} [item.onImageNativeError] - {{desc}}
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
            .leadingActions="${ifDefined(item.leadingActions)}"
            .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
            .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
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
            .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
            .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .badge="${ifDefined(item.badge)}"
            .indent="${ifDefined(item.indent)}"
            .routerLink="${ifDefined(item.routerLink)}"
            .defaultLeadingActionComponent="${ifDefined(item.defaultLeadingActionComponent)}"
            .defaultTrailingActionComponent="${ifDefined(item.defaultTrailingActionComponent)}"
            .activated="${ifDefined(item.activated)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            .items="${ifDefined(item.items)}"
            @onCheckboxNativeInput="${ifDefined(item.onCheckboxNativeInput)}"
            @onCheckboxNativeReset="${ifDefined(item.onCheckboxNativeReset)}"
            @onRadioButtonNativeInput="${ifDefined(item.onRadioButtonNativeInput)}"
            @onRadioButtonNativeReset="${ifDefined(item.onRadioButtonNativeReset)}"
            @onSwitchNativeInput="${ifDefined(item.onSwitchNativeInput)}"
            @onSwitchNativeReset="${ifDefined(item.onSwitchNativeReset)}"
            @onImageNativeLoad="${ifDefined(item.onImageNativeLoad)}"
            @onImageNativeError="${ifDefined(item.onImageNativeError)}"
        ></md-toolbar>
    `
}

/**
 * Render Tooltip
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-tooltip>
    `
}

/**
 * Render Top App Bar
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
        ></md-top-app-bar>
    `
}

/**
 * Render Tree
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {Boolean} [item.rangeSelection] - {{desc}}
 * @property {Boolean} [item.multiSelection] - {{desc}}
 * @property {Boolean} [item.singleSelection] - {{desc}}
 * @property {Boolean} [item.allSelection] - {{desc}}
 * @property {Function} [item.onTreeItemClick] - {{desc}}
 * @property {Function} [item.onTreeKeydown] - {{desc}}
 * @property {Function} [item.onTreeItemCheckboxNativeInput] - {{desc}}
 * @property {Function} [item.onTreeItemRadioButtonNativeInput] - {{desc}}
 * @property {Function} [item.onTreeItemSwitchNativeInput] - {{desc}}
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
            .items="${ifDefined(item.items)}"
            .rangeSelection="${ifDefined(item.rangeSelection)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            .singleSelection="${ifDefined(item.singleSelection)}"
            .allSelection="${ifDefined(item.allSelection)}"
            @onTreeItemClick="${ifDefined(item.onTreeItemClick)}"
            @onTreeKeydown="${ifDefined(item.onTreeKeydown)}"
            @onTreeItemCheckboxNativeInput="${ifDefined(item.onTreeItemCheckboxNativeInput)}"
            @onTreeItemRadioButtonNativeInput="${ifDefined(item.onTreeItemRadioButtonNativeInput)}"
            @onTreeItemSwitchNativeInput="${ifDefined(item.onTreeItemSwitchNativeInput)}"
        ></md-tree>
    `
}

/**
 * Render Week Field
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.prefix] - {{desc}}
 * @property {String} [item.suffix] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {String} [item.text] - {{desc}}
 * @property {String} [item.type] - {{desc}}
 * @property {String} [item.placeholder] - {{desc}}
 * @property {String} [item.name] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Number} [item.min] - {{desc}}
 * @property {Number} [item.max] - {{desc}}
 * @property {Number} [item.cols] - {{desc}}
 * @property {Number} [item.rows] - {{desc}}
 * @property {Number} [item.minLength] - {{desc}}
 * @property {Number} [item.maxLength] - {{desc}}
 * @property {String} [item.pattern] - {{desc}}
 * @property {Boolean} [item.required] - {{desc}}
 * @property {Boolean} [item.readOnly] - {{desc}}
 * @property {Boolean} [item.disabled] - {{desc}}
 * @property {String} [item.autocomplete] - {{desc}}
 * @property {Boolean} [item.multiple] - {{desc}}
 * @property {Array} [item.options] - {{desc}}
 * @property {Boolean} [item.validationMessage] - {{desc}}
 * @property {Boolean} [item.focused] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {String} [item.mask] - {{desc}}
 * @property {Function} [item.onTextFieldContainerClick] - {{desc}}
 * @property {Function} [item.onTextFieldLabelClick] - {{desc}}
 * @property {Function} [item.onTextFieldMetaClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeFocus] - {{desc}}
 * @property {Function} [item.onTextFieldNativeBlur] - {{desc}}
 * @property {Function} [item.onTextFieldNativeClick] - {{desc}}
 * @property {Function} [item.onTextFieldNativeKeydown] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSelect] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInput] - {{desc}}
 * @property {Function} [item.onTextFieldNativeSearch] - {{desc}}
 * @property {Function} [item.onTextFieldNativeInvalid] - {{desc}}
 * @property {Function} [item.onTextFieldNativeReset] - {{desc}}
 * @property {Function} [item.onTextFieldActionClick] - {{desc}}
 * @property {Function} [item.onTextFieldIconButtonClick] - {{desc}}
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
 * Render Week Picker
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Array} [item.leadingActions] - {{desc}}
 * @property {String} [item.headline] - {{desc}}
 * @property {String} [item.subhead] - {{desc}}
 * @property {Array} [item.trailingActions] - {{desc}}
 * @property {Array} [item.actions] - {{desc}}
 * @property {Boolean} [item.open] - {{desc}}
 * @property {Number} [item.index] - {{desc}}
 * @property {String} [item.value] - {{desc}}
 * @property {Function} [item.onScrimClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerSelection] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerButtonOkClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerYearItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMonthItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerDayItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerHourItemClick] - {{desc}}
 * @property {Function} [item.onDatetimePickerMinuteItemClick] - {{desc}}
 * @property {Function} [item.onWeekPickerButtonLabelClick] - {{desc}}
 * @property {Function} [item.onWeekPickerSelection] - {{desc}}
 * @property {Function} [item.onWeekPickerIconButtonPrevClick] - {{desc}}
 * @property {Function} [item.onWeekPickerIconButtonNextClick] - {{desc}}
 * @property {Function} [item.onWeekPickerYearItemClick] - {{desc}}
 * @property {Function} [item.onWeekPickerMonthItemClick] - {{desc}}
 * @property {Function} [item.onWeekPickerDayItemClick] - {{desc}}
 * @property {Function} [item.onWeekPickerButtonCancelClick] - {{desc}}
 * @property {Function} [item.onWeekPickerButtonOkClick] - {{desc}}
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
            .headline="${ifDefined(item.headline)}"
            .subhead="${ifDefined(item.subhead)}"
            .trailingActions="${ifDefined(item.trailingActions)}"
            .actions="${ifDefined(item.actions)}"
            .open="${ifDefined(item.open)}"
            .index="${ifDefined(item.index)}"
            .value="${ifDefined(item.value)}"
            @onScrimClick="${ifDefined(item.onScrimClick)}"
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
        ["block", () => renderBlock(item)],
        ["bottom-app-bar", () => renderBottomAppBar(item)],
        ["bottom-sheet", () => renderBottomSheet(item)],
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
        ["menu", () => renderMenu(item)],
        ["month-field", () => renderMonthField(item)],
        ["month-picker", () => renderMonthPicker(item)],
        ["navigation-bar", () => renderNavigationBar(item)],
        ["navigation-drawer", () => renderNavigationDrawer(item)],
        ["navigation-rail", () => renderNavigationRail(item)],
        ["number-field", () => renderNumberField(item)],
        ["pagination", () => renderPagination(item)],
        ["pane", () => renderPane(item)],
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
        ["week-field", () => renderWeekField(item)],
        ["week-picker", () => renderWeekPicker(item)],
    ], () => nothing)
}

export {
    renderBadge,
    renderBlock,
    renderBottomAppBar,
    renderBottomSheet,
    renderButton,
    renderCard,
    renderCheckbox,
    renderChip,
    renderChips,
    renderColorField,
    renderColorPicker,
    renderDataTable,
    renderDataTableColumnCell,
    renderDataTableItem,
    renderDataTableRowCell,
    renderDateField,
    renderDatePicker,
    renderDatetimeField,
    renderDatetimePicker,
    renderDialog,
    renderDivider,
    renderEmoji,
    renderEmojiPicker,
    renderFab,
    renderForm,
    renderIcon,
    renderIconButton,
    renderImage,
    renderLayout,
    renderLayoutItem,
    renderList,
    renderListItem,
    renderMenu,
    renderMonthField,
    renderMonthPicker,
    renderNavigationBar,
    renderNavigationDrawer,
    renderNavigationRail,
    renderNumberField,
    renderPagination,
    renderPane,
    renderPasswordField,
    renderProgressIndicator,
    renderRadioButton,
    renderScrim,
    renderSearchField,
    renderSegmentedButton,
    renderSelectField,
    renderSheet,
    renderSideSheet,
    renderSlider,
    renderSnackbar,
    renderSpacer,
    renderSwitch,
    renderTabs,
    renderTextField,
    renderTextareaField,
    renderTimeField,
    renderTimePicker,
    renderToolbar,
    renderTooltip,
    renderTopAppBar,
    renderTree,
    renderWeekField,
    renderWeekPicker,
    renderComponent,
};
