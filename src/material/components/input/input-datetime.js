import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";
import { format, getISOWeeksInYear, isValid, parse } from "date-fns";

class MdInputDatetime extends MdElement {
    static properties = {
        type: { type: String },
        value: { type: String },
        placeholder: { type: String },
        format: { type: String },
        min: { type: String },
        max: { type: String },
        year: { type: Number, state: true },
        month: { type: Number, state: true },
    };

    partRegex = /(yyyy|RRRR|MMMM|mm|MM|II|HH|hh|dd|a|-{1,})|([^yyyyRRRRMMMMmmMMIIHHhhdda-]+)/g;
    tokenRegex = /(yyyy|RRRR|MMMM|mm|MM|II|HH|hh|dd|a)/g;
    escapeRegex = /([^yyyyRRRRMMMMmmMMIIHHhhdda]+)/g;

    types = {
        "datetime-local": {
            placeholder: "mm/dd/yyyy --:--",
            format: "MM/dd/yyyy HH:mm",
            value: "yyyy-MM-dd'T'HH:mm",
        },
        date: {
            placeholder: "mm/dd/yyyy",
            format: "MM/dd/yyyy",
            value: "yyyy-MM-dd",
        },
        time: {
            placeholder: "--:--",
            format: "HH:mm",
            value: "HH:mm",
        },
        week: {
            placeholder: "Week --, ----",
            format: "Week II, RRRR",
            value: "RRRR-'W'II",
        },
        month: {
            placeholder: "--------- ----",
            format: "MMMM yyyy",
            value: "yyyy-MM",
        },
    };

    props = {
        yyyy: { component: "input-segment", min: 1000, max: 9999, maxLength: 4, startValue: 2026, clampOnInput: false, autoFocusNextOnComplete: true },
        RRRR: { component: "input-segment", min: 1000, max: 9999, maxLength: 4, startValue: 2026, clampOnInput: false, autoFocusNextOnComplete: true },
        II: { component: "input-segment", min: 1, max: 53, threshold: 5, maxLength: 2, autoFocusNextOnComplete: true },
        MMMM: { component: "input-enum", options: [], autoFocusNextOnComplete: false },
        MM: { component: "input-segment", min: 1, max: 12, threshold: 1, maxLength: 2, autoFocusNextOnComplete: true },
        dd: { component: "input-segment", min: 1, max: 31, threshold: 3, maxLength: 2, autoFocusNextOnComplete: true },
        HH: { component: "input-segment", min: 0, max: 23, threshold: 2, maxLength: 2, autoFocusNextOnComplete: true },
        hh: { component: "input-segment", min: 1, max: 12, threshold: 1, maxLength: 2, autoFocusNextOnComplete: true },
        mm: { component: "input-segment", min: 0, max: 59, threshold: 5, maxLength: 2, autoFocusNextOnComplete: true },
        a: { component: "input-enum", options: [], autoFocusNextOnComplete: false },
    };

    constructor() {
        super();

        this.type = "datetime-local";
        this.value = "";
        this.placeholder = null;
        this.format = null;
        this.min = null;
        this.max = null;

        this.date = new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();

        const format = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
        const months = [];
        for (let i = 0; i < 12; i++) {
            months.push(format(new Date(this.year, i)));
        }
        this.setProperties("MMMM", "options", months);
        this.setProperties("a", "options", ["AM", "PM"]);
    }

    /* prettier-ignore */
    renderInputEnum(properties = {}) {
        return html`
            <md-input-enum
                ${ref(this.getRef(properties.token))}
                data-index="${properties.index}"
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
                @onInputEnumInput="${this._handleInput}"
                @onInputEnumChange="${this._handleChange}"
                @onInputEnumKeydown="${this._handleKeydown}"
                @onInputEnumFocus="${this._handleFocus}"
                @onInputEnumBlur="${this._handleBlur}"
            ></md-input-enum>
        `
    }

    /* prettier-ignore */
    renderInputSegment(properties = {}) {
        return html`
            <md-input-segment
                ${ref(this.getRef(properties.token))}
                data-index="${properties.index}"
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
                @onInputSegmentInput="${this._handleInput}"
                @onInputSegmentChange="${this._handleChange}"
                @onInputSegmentKeydown="${this._handleKeydown}"
                @onInputSegmentFocus="${this._handleFocus}"
                @onInputSegmentBlur="${this._handleBlur}"
            ></md-input-segment>
        `
    }

    /* prettier-ignore */
    renderInputSeparator(properties = {}) {
        return html`
            <span class="md-input-datetime__separator">${properties.placeholder}</span>
        `
    }

    /* prettier-ignore */
    renderComponent(properties = {}) {
        return choose(properties.component,[
            ["input-segment", () => this.renderInputSegment(properties)],
            ["input-enum", () => this.renderInputEnum(properties)],
            ["input-separator", () => this.renderInputSeparator(properties)],
        ], () => nothing,);
    }

    /* prettier-ignore */
    render(){
        let count=0
        return this.parts.map((token,i)=>{
            let properties = this.getProperties(token);
            let placeholder = this.placeholders[i]

            if(properties){
                const index=count++
                properties.index=index
                properties.tabIndex=index===0?0:-1
            }else{
                properties={
                    component:'input-separator',
                }
            }

            properties.placeholder=placeholder
            properties.token=token

            return this.renderComponent(properties)
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

        if (_changedProperties.has("placeholder") && this.placeholder) {
            this.setPattern("placeholder", this.placeholder);
        }

        if (_changedProperties.has("format") && this.format) {
            this.setPattern("format", this.format);
        }

        if (_changedProperties.has("type")) {
            const placeholderPattern = this.getPattern("placeholder");
            const formatPattern = this.getPattern("format");

            this.setPattern("reverse", formatPattern.replace(this.escapeRegex, "'$1'"));

            this.parts = formatPattern.match(this.partRegex);
            this.placeholders = placeholderPattern.match(this.partRegex);
            this.tokens = formatPattern.match(this.tokenRegex);
        }

        if (_changedProperties.has("value") && this.value) {
            this.date = new Date();

            const valuePattern = this.getPattern("value");
            const date = parse(this.value, valuePattern, new Date());
            if (isValid(date)) {
                this.date = new Date(date);
                this.tokens.forEach((token) => {
                    this.setProperties(token, "value", format(date, token));
                });
            }

            this.year = this.date.getFullYear();
            this.month = this.date.getMonth();
        }

        if (_changedProperties.has("min") && this.min) {
            const valuePattern = this.getPattern("value");

            const date = parse(this.min, valuePattern, new Date());
            if (isValid(date)) {
                this.tokens.forEach((token) => {
                    this.setProperties(token, "min", Number(format(date, token)));
                });
            }
        }

        if (_changedProperties.has("max") && this.max) {
            const valuePattern = this.getPattern("value");
            const date = parse(this.max, valuePattern, new Date());
            if (isValid(date)) {
                this.tokens.forEach((token) => {
                    this.setProperties(token, "max", Number(format(date, token)));
                });
            }
        }

        if (_changedProperties.has("year") && this.year) {
            this.setProperties("yyyy", "startValue", this.year);
            this.setProperties("RRRR", "startValue", this.year);
            this.setProperties("II", "max", getISOWeeksInYear(new Date(this.year, 0)));
        }

        if (_changedProperties.has("month") && this.month) {
            const max = 32 - new Date(this.year, this.month, 32).getDate();
            this.setProperties("dd", "max", max);
            this.setProperties("dd", "threshold", Math.floor(max / 10));
        }
    }

    getPattern(key) {
        return this.types[this.type][key];
    }

    setPattern(key, value) {
        this.types[this.type][key] = value;
    }

    getProperties(token) {
        const prop = this.props[token];
        if (!prop) {
            return;
        }
        return prop;
    }

    setProperties(token, key, value) {
        const prop = this.props[token];
        if (!prop) {
            return;
        }
        prop[key] = value;
    }

    _moveFocus(event, n) {
        const index = Number(event.currentTarget.dataset.index);
        const target = this.querySelector(`[data-index="${index + n}"]`);
        if (target) {
            const native = target.getRef("native").value;
            native.focus();
        }
    }

    focusNext(event) {
        this._moveFocus(event, 1);
    }

    focusPrev(event) {
        this._moveFocus(event, -1);
    }

    async _handleInput(event) {
        const data = event.currentTarget.data;
        const originalEvent = event.detail.event;

        const number = Number(event.currentTarget.value);
        if ((data.token === "yyyy" || data.token === "RRRR") && !isNaN(number)) {
            this.year = number;
        }
        if (data.token === "MM" && !isNaN(number)) {
            this.month = number - 1;
        }

        if (originalEvent && data.autoFocusNextOnComplete) {
            this.focusNext(event);
        }

        await this.updateComplete;

        await Promise.all(
            this.tokens.map((token) => {
                const part = this.getRef(token).value;
                part.autoCorrect();
                return part.updateComplete;
            }),
        );

        const fulfilled = this.tokens.every((token) => Boolean(this.getRef(token).value.value));
        if (!fulfilled) {
            return;
        }

        const formatPattern = this.getPattern("format");
        const reversePattern = this.getPattern("reverse");
        const valuePattern = this.getPattern("value");

        const result = formatPattern.replace(this.tokenRegex, ($, token) => this.getRef(token).value.value);
        const date = parse(result, reversePattern, new Date());
        const value = format(date, valuePattern);

        this.value = value;

        this.emit("onInputDatetimeInput", { event, element: this });
    }

    _handleChange(event) {
        this.emit("onInputDatetimeChange", { event, element: this });
    }

    _handleKeydown(event) {
        const originalEvent = event.detail.event;
        if (originalEvent.key === "ArrowRight") {
            originalEvent.preventDefault();
            this.focusNext(event);
        } else if (originalEvent.key === "ArrowLeft") {
            originalEvent.preventDefault();
            this.focusPrev(event);
        }

        this.emit("onInputDatetimeKeydown", { event, element: this });
    }

    _handleFocus(event) {
        this.emit("onInputDatetimeFocus", { event, element: this });
    }

    _handleBlur(event) {
        this.emit("onInputDatetimeBlur", { event, element: this });
    }
}

customElements.define("md-input-datetime", MdInputDatetime);

export { MdInputDatetime };
