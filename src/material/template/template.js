import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

function renderButton(item = {}) {
    return html`
        <md-button
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .variant="${ifDefined(item.variant)}"
            .type="${ifDefined(item.type)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @click="${ifDefined(item.onButtonClick)}"
        ></md-button>
    `;
}

function renderCheckbox(item = {}) {
    return html`
        <md-checkbox
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .name="${ifDefined(item.name)}"
            .value="${ifDefined(item.value)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .checked="${ifDefined(item.checked)}"
            .disabled="${ifDefined(item.disabled)}"
            @onCheckboxNativeInput="${ifDefined(item.onCheckboxNativeInput)}"
            @onCheckboxNativeReset="${ifDefined(item.onCheckboxNativeReset)}"
        ></md-checkbox>
    `;
}

function renderColorField(item = {}) {
    return html`
        <md-color-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-color-field>
    `;
}

function renderDateField(item = {}) {
    return html`
        <md-date-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-date-field>
    `;
}

function renderDatetimeField(item = {}) {
    return html`
        <md-datetime-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-datetime-field>
    `;
}

function renderFab(item = {}) {
    return html`
        <md-fab
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .variant="${ifDefined(item.variant)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
        ></md-fab>
    `;
}

function renderIconButton(item = {}) {
    return html`
        <md-icon-button
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .variant="${ifDefined(item.variant)}"
            .icon="${ifDefined(item.icon)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            .name="${ifDefined(item.name)}"
            @onIconButtonClick="${ifDefined(item.onIconButtonClick)}"
        ></md-icon-button>
    `;
}

function renderMonthField(item = {}) {
    return html`
        <md-month-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-month-field>
    `;
}

function renderNumberField(item = {}) {
    return html`
        <md-number-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-number-field>
    `;
}

function renderPasswordField(item = {}) {
    return html`
        <md-password-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-password-field>
    `;
}

function renderRadioButton(item = {}) {
    return html`
        <md-radio-button
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .name="${ifDefined(item.name)}"
            .value="${ifDefined(item.value)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .checked="${ifDefined(item.checked)}"
            .disabled="${ifDefined(item.disabled)}"
            @onRadioButtonNativeInput="${ifDefined(item.onRadioButtonNativeInput)}"
            @onRadioButtonNativeReset="${ifDefined(item.onRadioButtonNativeReset)}"
        ></md-radio-button>
    `;
}

function renderSearchField(item = {}) {
    return html`
        <md-search-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-search-field>
    `;
}

function renderSegmentedButton(item = {}) {
    return html`
        <md-segmented-button
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .buttons="${ifDefined(item.buttons)}"
            .singleSelection="${ifDefined(item.singleSelection)}"
            .multiSelection="${ifDefined(item.multiSelection)}"
            @onSegmentedButtonItemClick="${ifDefined(item.onSegmentedButtonItemClick)}"
        ></md-segmented-button>
    `;
}

function renderSelectField(item = {}) {
    return html`
        <md-select-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-select-field>
    `;
}

function renderSwitch(item = {}) {
    return html`
        <md-switch
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .name="${ifDefined(item.name)}"
            .value="${ifDefined(item.value)}"
            .indeterminate="${ifDefined(item.indeterminate)}"
            .checked="${ifDefined(item.checked)}"
            .disabled="${ifDefined(item.disabled)}"
            .icons="${ifDefined(item.icons)}"
            @onSwitchNativeInput="${ifDefined(item.onSwitchNativeInput)}"
            @onSwitchNativeReset="${ifDefined(item.onSwitchNativeReset)}"
        ></md-switch>
    `;
}

function renderTextField(item = {}) {
    return html`
        <md-text-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-text-field>
    `;
}

function renderTextareaField(item = {}) {
    return html`
        <md-textarea-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-textarea-field>
    `;
}

function renderTimeField(item = {}) {
    return html`
        <md-time-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-time-field>
    `;
}

function renderWeekField(item = {}) {
    return html`
        <md-week-field
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .label="${ifDefined(item.label)}"
            .icon="${ifDefined(item.icon)}"
            .prefix="${ifDefined(item.prefix)}"
            .suffix="${ifDefined(item.suffix)}"
            .actions="${ifDefined(item.actions)}"
            .text="${ifDefined(item.text)}"
            .type="${ifDefined(item.type)}"
            .placeholder="${ifDefined(item.placeholder)}"
            .name="${ifDefined(item.name)}"
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
            @onTextFieldNativeFocus="${ifDefined(item.onTextFieldNativeFocus)}"
            @onTextFieldNativeBlur="${ifDefined(item.onTextFieldNativeBlur)}"
            @onTextFieldNativeClick="${ifDefined(item.onTextFieldNativeClick)}"
            @onTextFieldNativeKeydown="${ifDefined(item.onTextFieldNativeKeydown)}"
            @onTextFieldNativeSelect="${ifDefined(item.onTextFieldNativeSelect)}"
            @onTextFieldNativeInput="${ifDefined(item.onTextFieldNativeInput)}"
            @onTextFieldNativeSearch="${ifDefined(item.onTextFieldNativeSearch)}"
            @onTextFieldNativeInvalid="${ifDefined(item.onTextFieldNativeInvalid)}"
            @onTextFieldNativeReset="${ifDefined(item.onTextFieldNativeReset)}"
            @onTextFieldContainerClick="${ifDefined(item.onTextFieldContainerClick)}"
            @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
            @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
            @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
            @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
        ></md-week-field>
    `;
}

function renderIcon(item = {}) {
    return html`
        <md-icon
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            >${item.icon}</md-icon
        >
    `;
}

function renderListItem(item = {}) {
    return html`
        <md-list-item
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
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
            @click="${ifDefined(item.onListItemClick)}"
            @onListItemSelected="${ifDefined(item.onListItemSelected)}"
            @onCheckboxNativeInput="${ifDefined(item.onCheckboxNativeInput)}"
            @onRadioButtonNativeInput="${ifDefined(item.onRadioButtonNativeInput)}"
            @onSwitchNativeInput="${ifDefined(item.onSwitchNativeInput)}"
        ></md-list-item>
    `;
}

function renderTreeItem(item = {}) {
    return html`
        <md-tree-item
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
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
            @click="${ifDefined(item.onTreeItemClick)}"
            @onTreeItemSelected="${ifDefined(item.onTreeItemSelected)}"
        ></md-tree-item>
    `;
}

function renderChip(item = {}) {
    return html`
        <md-chip
            .data="${item}"
            id="${ifDefined(item.id)}"
            class="${classMap({ ...item.classMap })}"
            style="${styleMap({ ...item.styleMap })}"
            .variant="${ifDefined(item.variant)}"
            .avatar="${ifDefined(item.avatar)}"
            .icon="${ifDefined(item.icon)}"
            .label="${ifDefined(item.label)}"
            .action="${ifDefined(item.action)}"
            .selected="${ifDefined(item.selected)}"
            .disabled="${ifDefined(item.disabled)}"
            @click="${ifDefined(item.onChipClick)}"
            @onChipActionClick="${ifDefined(item.onChipActionClick)}"
        ></md-chip>
    `;
}

function renderComponent(item) {
    return choose(
        item.component,
        [
            ["button", () => renderButton(item)],
            ["checkbox", () => renderCheckbox(item)],
            ["chip", () => renderChip(item)],
            ["color-field", () => renderColorField(item)],
            ["date-field", () => renderDateField(item)],
            ["datetime-field", () => renderDatetimeField(item)],
            ["fab", () => renderFab(item)],
            ["icon-button", () => renderIconButton(item)],
            ["icon", () => renderIcon(item)],
            ["list-item", () => renderListItem(item)],
            ["month-field", () => renderMonthField(item)],
            ["number-field", () => renderNumberField(item)],
            ["password-field", () => renderPasswordField(item)],
            ["radio-button", () => renderRadioButton(item)],
            ["search-field", () => renderSearchField(item)],
            ["segmented-button", () => renderSegmentedButton(item)],
            ["select-field", () => renderSelectField(item)],
            ["spacer", () => html`<div class="md-pane__spacer"></div>`],
            ["switch", () => renderSwitch(item)],
            ["text-field", () => renderTextField(item)],
            ["textarea-field", () => renderTextareaField(item)],
            ["time-field", () => renderTimeField(item)],
            ["tree-item", () => renderTreeItem(item)],
            ["week-field", () => renderWeekField(item)],
        ],
        () => nothing,
    );
}

export { renderComponent };
