import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { getISOWeeksInYear } from "date-fns";

class MdInputDatetime extends MdElement {
    static properties = {
        format: { type: String },
        type: { type: String },
    };

    ref = {
        dd: createRef(),
        MM: createRef(),
        yyyy: createRef(),
        HH: createRef(),
        hh: createRef(),
        mm: createRef(),
        a: createRef(),
        MMMM: createRef(),
        II: createRef(),
    };

    regex = {
        token: /(MMMM|yyyy|HH|hh|mm|dd|MM|a|II)/g,
        part: /(MMMM|yyyy|HH|hh|mm|dd|MM|a|II)|([^MMMMyyyyHHhhmmaMMddII]+)/g,
    };

    get config() {
        const date = new Date();

        const year = this.ref.yyyy.value?.value ? Number(this.ref.yyyy.value.value) : date.getFullYear();
        const month = this.ref.MM.value?.value ? Number(this.ref.MM.value.value) : date.getMonth() + 1;

        const ddMax = 32 - new Date(year, month - 1, 32).getDate();

        const ddConfig = {
            max: ddMax,
            threshold: Math.floor(ddMax / 10),
        };

        // console.log(year,month,ddConfig)

        const yyyyConfig = {
            startValue: date.getFullYear(),
        };

        const IIConfig = {
            max: getISOWeeksInYear(date),
        };

        return {
            dd: { component: "input-segment", min: 1, max: 31, threshold: 3, maxLength: 2, placeholder: "dd", ...ddConfig },
            MM: { component: "input-segment", min: 1, max: 12, threshold: 1, maxLength: 2, placeholder: "mm" },
            yyyy: { component: "input-segment", min: 1000, max: 9999, startValue: 2026, maxLength: 4, placeholder: "yyyy", ...yyyyConfig },
            HH: { component: "input-segment", min: 0, max: 23, threshold: 2, maxLength: 2, placeholder: "--" },
            hh: { component: "input-segment", min: 1, max: 12, threshold: 1, maxLength: 2, placeholder: "--" },
            mm: { component: "input-segment", min: 0, max: 59, threshold: 5, maxLength: 2, placeholder: "--" },
            II: { component: "input-segment", min: 1, max: 53, threshold: 5, maxLength: 2, placeholder: "--", ...IIConfig },
            a: { component: "input-enum", options: [], placeholder: "--" },
            MMMM: { component: "input-enum", options: this.months, placeholder: "---------" },
        };
    }

    formats = {
        "datetime-local": "MM/dd/yyyy HH:mm",
        date: "MM/dd/yyyy",
        month: "MMMM yyyy",
        week: "Week II, yyyy",
        time: "HH:mm",
    };

    constructor() {
        super();

        this.type = "datetime-local";

        this._setMonths();
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

    /* prettier-ignore */
    renderInputSegment(params = {}) {
        return html`
            <md-input-segment
                ${ref(this.ref[params.name])}
                .data="${params}"
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
                @onInputSegmentStepUp="${ifDefined(params.onInputSegmentStepUp)}"
                @onInputSegmentStepDown="${ifDefined(params.onInputSegmentStepDown)}"
                @onInputSegmentKeydown="${this._handleInputDatetimeKeydown}"
                @onInputSegmentClick="${ifDefined(params.onInputSegmentClick)}"
                @onInputSegmentFocus="${ifDefined(params.onInputSegmentFocus)}"
                @onInputSegmentInput="${this._handleInputDatetimeInput}"
                @onInputSegmentChange="${ifDefined(params.onInputSegmentChange)}"
            ></md-input-segment>
        `
    }

    /* prettier-ignore */
    renderInputEnum(params = {}) {
        return html`
            <md-input-enum
                ${ref(this.ref[params.name])}
                .data="${params}"
                class="${classMap(params.classMap ?? {})}"
                style="${styleMap(params.styleMap ?? {})}"
                .value="${ifDefined(params.value)}"
                .tabIndex="${ifDefined(params.tabIndex)}"
                .min="${ifDefined(params.min)}"
                .max="${ifDefined(params.max)}"
                .size="${ifDefined(params.size)}"
                .placeholder="${ifDefined(params.placeholder)}"
                .options="${ifDefined(params.options)}"
                @onInputEnumStepUp="${ifDefined(params.onInputEnumStepUp)}"
                @onInputEnumStepDown="${ifDefined(params.onInputEnumStepDown)}"
                @onInputEnumKeydown="${this._handleInputDatetimeKeydown}"
                @onInputEnumClick="${ifDefined(params.onInputEnumClick)}"
                @onInputEnumFocus="${ifDefined(params.onInputEnumFocus)}"
                @onInputEnumInput="${this._handleInputDatetimeInput}"
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
    renderComponent(component,params){
        return choose(component,[
            ['input-segment',() => this.renderInputSegment(params)],
            ['input-enum',() => this.renderInputEnum(params)],
            ['separator',() => this.renderInputSeparator(params)],
        ],() => nothing)
    }

    /* prettier-ignore */
    render(){
        return this.parts.map((part)=>{
            const config = this.config[part]
            if(config){
                const index=this.tokens.indexOf(part)
                const tabIndex = index>0?-1:0
                const {component,...params} = config
                return this.renderComponent(component,{name:part,tabIndex,...params})
            }
            return this.renderComponent('separator',{label:part})
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

        if (_changedProperties.has("type") || _changedProperties.has("format")) {
            const format = this.format || this.formats[this.type];
            this.parts = format.match(this.regex.part);
            this.tokens = format.match(this.regex.token);
        }
    }

    _moveFocus(event, n) {
        const config = event.currentTarget.data;
        const index = Math.max(0, Math.min(this.tokens.indexOf(config.name) + n, this.tokens.length - 1));
        const name = this.tokens[index];
        const ref = this.ref[name].value;
        const input = ref.native.value;
        input.focus();
    }

    focusLeft(event) {
        const n = -1;
        this._moveFocus(event, n);
    }

    focusRight(event) {
        const n = +1;
        this._moveFocus(event, n);
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
        const config = event.currentTarget.data;
        if (config.name === "MM" || config.name === "yyyy") {
            // MM untuk update config dd
            // yyyy untuk update II
            this.requestUpdate();
        }
        const finished = this.tokens.every((token) => Boolean(this.ref[token].value.value));
        if (finished) {
            // emit ketika sudah selesai
            console.log(Object.fromEntries(this.tokens.map((token) => [token, this.ref[token].value.value])));
        }
    }
}

customElements.define("md-input-datetime", MdInputDatetime);

export { MdInputDatetime };
