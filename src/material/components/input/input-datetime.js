import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { format, getISOWeeksInYear, parse } from "date-fns";

class MdInputDatetime extends MdElement {
    static properties = {
        type: { type: String },
        value: { type: String },
    };

    placeholderRegex = /(MMMM|yyyy|HH|hh|mm|dd|MM|a|II|-{2,})|([^MMMMyyyyHHhhmmaMMddII-]+)/g;
    partRegex = /(MMMM|yyyy|HH|hh|mm|dd|MM|a|II)|([^MMMMyyyyHHhhmmaMMddII]+)/g;
    tokenRegex = /(MMMM|yyyy|HH|hh|mm|dd|MM|a|II)/g;

    formats = {
        date: {
            placeholder: "mm/dd/yyyy",
            template: "MM/dd/yyyy",
            fromTemplate: "MM/dd/yyyy",
            forValue: "yyyy-MM-dd",
        },
        week: {
            placeholder: "Week --, ----",
            template: "Week II, yyyy",
            fromTemplate: "'Week' II, RRRR",
            forValue: "RRRR-'W'II",
        },
        month: {
            placeholder: "--------- ----",
            template: "MMMM yyyy",
            fromTemplate: "MMMM yyyy",
            forValue: "yyyy-MM",
        },
        time: {
            placeholder: "--:--",
            template: "HH:mm",
            fromTemplate: "HH:mm",
            forValue: "HH:mm",
        },
        "datetime-local": {
            placeholder: "mm/dd/yyyy --:--",
            template: "MM/dd/yyyy HH:mm",
            fromTemplate: "MM/dd/yyyy HH:mm",
            forValue: "yyyy-MM-dd'T'HH:mm",
        },
    };

    configs = {
        dd: { component: "input-segment", min: 1, max: 31, threshold: 3, maxLength: 2, placeholder: "dd" },
        MM: { component: "input-segment", min: 1, max: 12, threshold: 1, maxLength: 2, placeholder: "mm" },
        yyyy: { component: "input-segment", min: 1000, max: 9999, startValue: 2026, maxLength: 4, placeholder: "yyyy" },
        HH: { component: "input-segment", min: 0, max: 23, threshold: 2, maxLength: 2, placeholder: "--" },
        hh: { component: "input-segment", min: 1, max: 12, threshold: 1, maxLength: 2, placeholder: "--" },
        mm: { component: "input-segment", min: 0, max: 59, threshold: 5, maxLength: 2, placeholder: "--" },
        II: { component: "input-segment", min: 1, max: 53, threshold: 5, maxLength: 2, placeholder: "--" },
        a: { component: "input-enum", options: [], placeholder: "--" },
        MMMM: { component: "input-enum", options: [], placeholder: "---------" },
    };

    constructor() {
        super();

        this._ref = {};

        this.type = "datetime-local";

        this._setMonths();
        this._setMeridiems();
    }

    _setMeridiems() {
        this.meridiems = [
            { value: 0, label: "AM" },
            { value: 1, label: "PM" },
        ];
    }

    _setMonths() {
        const arr = [];
        const current = new Date();
        const format = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
        for (let i = 0; i < 12; i++) {
            const date = new Date(current.getFullYear(), i);
            const label = format(date);
            arr.push({ value: i, label });
        }
        this.months = arr;
    }

    _getRef(part) {
        if (!this._ref[part]) {
            this._ref[part] = createRef();
        }
        return this._ref[part];
    }

    _getConfig(token) {
        if (!this.configs[token]) {
            return;
        }
        const config = { ...this.configs[token] };

        const date = this.value ? parse(this.value, this.formats[this.type].forValue, new Date()) : new Date();

        let year = date.getFullYear();
        let month = date.getMonth() + 1;

        const yearRef = this._getRef("yyyy").value;
        if (yearRef?.value) {
            const yearNumber = Number(yearRef.value);
            if (!isNaN(yearNumber)) {
                year = yearNumber;
            }
        }

        const monthRef = this._getRef("MM").value;
        if (monthRef?.value) {
            const monthNumber = Number(monthRef.value);
            if (!isNaN(monthNumber)) {
                month = monthNumber;
            }
        }

        if (this.value) {
            config.value = format(date, token);
        }

        if (token === "dd") {
            config.max = 32 - new Date(year, month - 1, 32).getDate();
            config.threshold = Math.floor(config.max / 10);
        } else if (token === "yyyy") {
            config.startValue = year;
        } else if (token === "II") {
            config.max = getISOWeeksInYear(new Date(year, 0));
        } else if (token === "a") {
            config.options = this.meridiems;
        } else if (token === "MMMM") {
            config.options = this.months;
        }

        return config;
    }

    /* prettier-ignore */
    renderInputSegment(params = {}) {
        return html`
            <md-input-segment
                ${ref(this._getRef(params['data-part']))}
                .data="${params}"
                data-index="${params['data-index']}"
                data-part="${params['data-part']}"
                class="${classMap(params.classMap ?? {})}"
                style="${styleMap(params.styleMap ?? {})}"
                .value="${ifDefined(params.value)}"
                .tabIndex="${ifDefined(params.tabIndex)}"
                .step="${ifDefined(params.step)}"
                .min="${ifDefined(params.min)}"
                .max="${ifDefined(params.max)}"
                .maxLength="${ifDefined(params.maxLength)}"
                .size="${ifDefined(params.size)}"
                .threshold="${ifDefined(params.threshold)}"
                .placeholder="${ifDefined(params.placeholder)}"
                .startValue="${ifDefined(params.startValue)}"
                @onInputSegmentKeydown="${this._handleInputDatetimeKeydown}"
                @onInputSegmentInput="${this._handleInputDatetimeInput}"
                @onInputSegmentBlur="${this._handleInputDatetimeBlur}"
            ></md-input-segment>
        `
    }

    /* prettier-ignore */
    renderInputEnum(params = {}) {
        return html`
            <md-input-enum
                ${ref(this._getRef(params['data-part']))}
                .data="${params}"
                data-index="${params['data-index']}"
                data-part="${params['data-part']}"
                class="${classMap(params.classMap ?? {})}"
                style="${styleMap(params.styleMap ?? {})}"
                .value="${ifDefined(params.value)}"
                .tabIndex="${ifDefined(params.tabIndex)}"
                .min="${ifDefined(params.min)}"
                .max="${ifDefined(params.max)}"
                .size="${ifDefined(params.size)}"
                .placeholder="${ifDefined(params.placeholder)}"
                .options="${ifDefined(params.options)}"
                @onInputEnumKeydown="${this._handleInputDatetimeKeydown}"
                @onInputEnumInput="${this._handleInputDatetimeInput}"
                @onInputEnumBlur="${this._handleInputDatetimeBlur}"
            ></md-input-enum>
        `
    }

    /* prettier-ignore */
    renderInputSeparator(params={}){
        return html`
            <span class="md-input-datetime__separator">${params.label}</span>
        `
    }

    /* prettier-ignore */
    renderComponent(params){
        return choose(params.component,[
            ['input-segment',() => this.renderInputSegment(params)],
            ['input-enum',() => this.renderInputEnum(params)],
            ['input-separator',() => this.renderInputSeparator(params)],
        ],() => nothing)
    }

    /* prettier-ignore */
    render(){
        let count = 0;
        return this.parts.map((part,i) => {
            const config = this._getConfig(part);
            if (config) {
                const index = count++;
                return this.renderComponent({
                    ...config,
                    tabIndex: index === 0 ? 0 : -1,
                    "data-index": index,
                    "data-part": part,
                    placeholder: this.placeholders[i],
                });
            } else {
                return this.renderComponent({ component: "input-separator", label: part });
            }
        })
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-input-datetime");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-input-datetime");
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("type") || _changedProperties.has("format") || _changedProperties.has("placeholder")) {
            const formats = this.formats[this.type];

            const parts = formats.template.match(this.partRegex);
            const tokens = formats.template.match(this.tokenRegex);
            const placeholders = formats.placeholder.match(this.placeholderRegex);

            this.parts = parts;
            this.tokens = tokens;
            this.placeholders = placeholders;
        }
    }

    _moveFocus(event, n) {
        const current = event.currentTarget;
        const currentIndex = Number(current.dataset.index || 0);
        const nextIndex = currentIndex + n;

        const next = this.querySelector(`[data-index="${nextIndex}"]`);
        if (next) {
            const input = next.native.value;
            input.focus();
        }
    }

    focusLeft(event) {
        this._moveFocus(event, -1);
    }

    focusRight(event) {
        this._moveFocus(event, +1);
    }

    _handleInputDatetimeKeydown(event) {
        const originalEvent = event.detail.event;
        if (originalEvent.key === "ArrowLeft") {
            originalEvent.preventDefault();
            this.focusLeft(event);
        } else if (originalEvent.key === "ArrowRight") {
            originalEvent.preventDefault();
            this.focusRight(event);
        }
    }

    _handleInputDatetimeInput(event) {
        const dataset = event.currentTarget.dataset;
        if (dataset.part === "MM" || dataset.part === "yyyy") {
            this.requestUpdate();
        }

        const fulfilled = this.tokens.every((token) => Boolean(this._getRef(token).value.value));
        if (!fulfilled) {
            return;
        }

        const result = this.formats[this.type].template.replace(this.tokenRegex, ($, $2) => this._getRef($2).value.value);
        const date = parse(result, this.formats[this.type].fromTemplate, new Date());

        if ((this.type === "datetime-local" || this.type === "date") && isNaN(date.getDate())) {
            return;
        }
        if (this.type === "week" && getISOWeeksInYear(date) > this._getConfig("II").max) {
            return;
        }

        const value = format(date, this.formats[this.type].forValue);
        this.value = value;
    }

    _handleInputDatetimeBlur(event) {
        this.tokens.forEach((token) => {
            this._getRef(token).value.autoCorrect();
        });
    }
}

customElements.define("md-input-datetime", MdInputDatetime);

export { MdInputDatetime };
