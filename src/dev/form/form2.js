import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { choose } from "lit/directives/choose.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";

class DevForm2 extends MDComponent {
    renderCheckbox(item) {
        /* prettier-ignore */
        return html`
            <md-checkbox
                .name="${ifDefined(item.name)}"
                .value="${ifDefined(item.value)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .checked="${ifDefined(item.checked)}"
                .disabled="${ifDefined(item.disabled)}"
                @onCheckboxNativeInput="${ifDefined(item.onCheckboxNativeInput)}"
                @onCheckboxNativeReset="${ifDefined(item.onCheckboxNativeReset)}"
            ></md-checkbox>
        `
    }

    renderColorField(item) {
        /* prettier-ignore */
        return html`
            <md-color-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-color-field>
        `
    }

    renderDateField(item) {
        /* prettier-ignore */
        return html`
            <md-date-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-date-field>
        `
    }

    renderDatetimeField(item) {
        /* prettier-ignore */
        return html`
            <md-datetime-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-datetime-field>
        `
    }

    renderMonthField(item) {
        /* prettier-ignore */
        return html`
            <md-month-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-month-field>
        `
    }

    renderNumberField(item) {
        /* prettier-ignore */
        return html`
            <md-number-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-number-field>
        `
    }

    renderPasswordField(item) {
        /* prettier-ignore */
        return html`
            <md-password-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-password-field>
        `
    }

    renderRadioButton(item) {
        /* prettier-ignore */
        return html`
            <md-radio-button
                .name="${ifDefined(item.name)}"
                .value="${ifDefined(item.value)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .checked="${ifDefined(item.checked)}"
                .disabled="${ifDefined(item.disabled)}"
                @onRadioButtonNativeInput="${ifDefined(item.onRadioButtonNativeInput)}"
                @onRadioButtonNativeReset="${ifDefined(item.onRadioButtonNativeReset)}"
            ></md-radio-button>
        `
    }

    renderSearchField(item) {
        /* prettier-ignore */
        return html`
            <md-search-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-search-field>
        `
    }

    renderSelectField(item) {
        /* prettier-ignore */
        return html`
            <md-select-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-select-field>
        `
    }

    renderSlider(item) {
        /* prettier-ignore */
        return html`
            <md-slider
                .name="${ifDefined(item.name)}"
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

    renderSwitch(item) {
        /* prettier-ignore */
        return html`
            <md-switch
                .name="${ifDefined(item.name)}"
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

    renderTextField(item) {
        /* prettier-ignore */
        return html`
            <md-text-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-text-field>
        `
    }

    renderTextareaField(item) {
        /* prettier-ignore */
        return html`
            <md-textarea-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-textarea-field>
        `
    }

    renderTimeField(item) {
        /* prettier-ignore */
        return html`
            <md-time-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-time-field>
        `
    }

    renderWeekField(item) {
        /* prettier-ignore */
        return html`
            <md-week-field
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
                @onTextFieldLabelClick="${ifDefined(item.onTextFieldLabelClick)}"
                @onTextFieldMetaClick="${ifDefined(item.onTextFieldMetaClick)}"
                @onTextFieldActionClick="${ifDefined(item.onTextFieldActionClick)}"
                @onTextFieldIconButtonClick="${ifDefined(item.onTextFieldIconButtonClick)}"
            ></md-week-field>
        `
    }

    renderField(item) {
        return choose(
            item.component,
            [
                ["checkbox", () => this.renderCheckbox(item)],
                ["color-field", () => this.renderColorField(item)],
                ["date-field", () => this.renderDateField(item)],
                ["datetime-field", () => this.renderDatetimeField(item)],
                ["month-field", () => this.renderMonthField(item)],
                ["number-field", () => this.renderNumberField(item)],
                ["password-field", () => this.renderPasswordField(item)],
                ["radio-button", () => this.renderRadioButton(item)],
                ["search-field", () => this.renderSearchField(item)],
                ["select-field", () => this.renderSelectField(item)],
                ["slider", () => this.renderSlider(item)],
                ["switch", () => this.renderSwitch(item)],
                ["text-field", () => this.renderTextField(item)],
                ["textarea-field", () => this.renderTextareaField(item)],
                ["time-field", () => this.renderTimeField(item)],
                ["week-field", () => this.renderWeekField(item)],
            ],
            () => this.renderTextField(item),
        );
    }

    constructor() {
        super();

        this.data = [
            { component: "color-field", name: "favoriteColor", value: "#ff0000", expanded: 3 },
            { component: "date-field", name: "birthDate", value: "1990-01-01", expanded: 3 },
            { component: "datetime-field", name: "appointment", value: "2024-07-16T15:00", expanded: 3 },
            { component: "month-field", name: "birthMonth", value: "1990-01", expanded: 3 },
            { component: "number-field", name: "age", value: "30", expanded: 3 },
            { component: "password-field", name: "password", value: "secret123", expanded: 3 },
            { component: "search-field", name: "search", value: "JavaScript tutorials", expanded: 3 },
            {
                component: "select-field",
                name: "country",
                value: "USA",
                options: [
                    { label: "United States", value: "USA", selected: true },
                    { label: "Canada", value: "CAN" },
                    { label: "United Kingdom", value: "UK" },
                    { label: "Australia", value: "AUS" },
                    { label: "Germany", value: "GER" },
                ],
                expanded: 3,
            },
            { component: "text-field", name: "username", value: "john_doe", expanded: 3 },
            { component: "textarea-field", name: "comments", value: "This is a comment.", expanded: 3 },
            { component: "time-field", name: "meetingTime", value: "14:30", expanded: 3 },
            { component: "week-field", name: "workWeek", value: "2024-W28", expanded: 3 },
            { component: "slider", name: "volume", value: "75", expanded: 12 },
            { component: "checkbox", name: "acceptTerms", value: "true", expanded: 12, onCheckboxNativeInput: console.log, onCheckboxNativeReset: console.log },
            { component: "radio-button", name: "gender", value: "male", expanded: 12 },
            { component: "switch", name: "darkMode", value: "false", expanded: 12 },
        ];
    }

    render() {
        /* prettier-ignore */
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form  
                        @onFormNativeReset="${(event) => console.log(event)}" 
                        @onFormNativeSubmit="${this.handleFormNativeSubmit}"
                    >
                        <div class="md-layout-column">
                            ${this.data.map(doc => html`
                                <div 
                                    class="${classMap({
                                        ...(doc.expanded&&{[`md-layout-column__item--expanded${doc.expanded}`]: doc.expanded}),
                                        ...(doc.medium&&{[`md-layout-column__item--medium${doc.medium}`]: doc.medium}),
                                        ...(doc.compact&&{[`md-layout-column__item--compact${doc.compact}`]: doc.compact}),
                                    })}"
                                >${this.renderField(doc)}</div>
                            `)}
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-button type="reset" label="Reset" variant="outlined"></md-button>
                                <md-button type="submit" label="Submit" variant="filled"></md-button>
                            </div>
                        </div>
                    </md-form>
                </div>
            </div>
        `;
    }

    handleFormNativeSubmit(event) {
        console.log(event.detail.data);
        console.log(event.currentTarget);
    }
}

customElements.define("dev-form2", DevForm2);

export default document.createElement("dev-form2");
