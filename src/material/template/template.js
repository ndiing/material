import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

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
 * Render Tree
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {Array} [item.items] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Function} [item.onTreeItemClick] - {{desc}}
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
            .variant="${ifDefined(item.variant)}"
            @onTreeItemClick="${ifDefined(item.onTreeItemClick)}"
        ></md-tree>
    `
}

/**
 * Render Tree Item
 * @param {Object} item - {{desc}}
 * @property {String} [item.tooltip] - {{desc}}
 * @property {String} [item.icon] - {{desc}}
 * @property {String} [item.label] - {{desc}}
 * @property {Number} [item.badge] - {{desc}}
 * @property {Boolean} [item.selected] - {{desc}}
 * @property {String} [item.routerLink] - {{desc}}
 * @property {Number} [item.indent] - {{desc}}
 * @property {Boolean} [item.isNode] - {{desc}}
 * @property {Boolean} [item.expanded] - {{desc}}
 * @property {Boolean} [item.activated] - {{desc}}
 * @property {String} [item.variant] - {{desc}}
 * @property {Boolean} [item.isParent] - {{desc}}
 * @property {Array} [item.nodeActions] - {{desc}}
 * @property {Array} [item.nodeIcons] - {{desc}}
 * @property {Array} [item.leafIcons] - {{desc}}
 * @property {Function} [item.onTreeItemSelected] - {{desc}}
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
            @click="${ifDefined(item.onTreeItemClick)}"
        ></md-tree-item>
    `
}

/**
 * {{desc}}
 */
function renderComponent(item) {
    /* prettier-ignore */
    return choose(item.component, [
        ["block", () => renderBlock(item)],
        ["button", () => renderButton(item)],
        ["card", () => renderCard(item)],
        ["chip", () => renderChip(item)],
        ["data-table-item", () => renderDataTableItem(item)],
        ["datetime-picker", () => renderDatetimePicker(item)],
        ["divider", () => renderDivider(item)],
        ["list", () => renderList(item)],
        ["list-item", () => renderListItem(item)],
        ["pane", () => renderPane(item)],
        ["tree", () => renderTree(item)],
        ["tree-item", () => renderTreeItem(item)],
    ], () => nothing)
}

export {
    renderBlock,
    renderButton,
    renderCard,
    renderChip,
    renderDataTableItem,
    renderDatetimePicker,
    renderDivider,
    renderList,
    renderListItem,
    renderPane,
    renderTree,
    renderTreeItem,
    renderComponent,
};
