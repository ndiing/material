import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";

class MdInputEnum extends MdElement {
    static formAssociated = true;

    static properties = {
        value: { type: String },
        min: { type: Number },
        max: { type: Number },
        size: { type: Number },
        tabIndex: { type: Number },
        placeholder: { type: String },
        options: { type: Array },
        selectedIndex: { type: Number },
    };

    native = createRef();

    constructor() {
        super();

        this.internals = this.attachInternals();

        this.buffer = "";
        this.filteredIndex = -1;
        this.filtered = [];

        this.defaultValue = "";
        this.defaultSelectedIndex = -1;

        this.min = 0;
        this.max = 0;
        this.placeholder = "";

        this.options = [];
        this.selectedIndex = -1;
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                ${ref(this.native)}
                type="text"
                .tabIndex="${ifDefined(this.tabIndex)}"
                .value="${ifDefined(this.value||this.placeholder)}"
                size="${ifDefined(this.size)}"
                @keydown="${this._handleKeydown}"
                @click="${this._handleClick}"
                @focus="${this._handleFocus}"
                @input="${this._handleInput}"
                @change="${this._handleChange}"
            >
        `
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("options")) {
            this.max = this.options.length - 1;
        }

        if (_changedProperties.has("selectedIndex")) {
            if (this.selectedIndex !== -1) {
                const option = this.options[this.selectedIndex];
                this.value = option ? option.label : undefined;
                this.selectedIndex = option ? this.selectedIndex : -1;
            }
        }

        if (_changedProperties.has("value")) {
            if (this.value !== undefined && this.value !== null) {
                const selectedIndex = this.options.findIndex((option) => option.label.toLowerCase() === this.value.toLowerCase());
                this.selectedIndex = selectedIndex !== -1 ? selectedIndex : -1;
                const option = this.options[this.selectedIndex];
                this.value = option ? this.value : undefined;
            }
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        if (_changedProperties.has("selectedIndex")) {
            if (this.selectedIndex !== -1) {
                this.defaultSelectedIndex = this.selectedIndex;
            }
        }

        if (_changedProperties.has("value")) {
            if (this.value !== undefined && this.value !== null) {
                this.defaultValue = this.value;
            }
        }
    }

    formResetCallback() {
        const input = this.native.value;

        input.value = this.defaultValue || this.placeholder;
        this.value = this.defaultValue;
        this.selectedIndex = this.defaultSelectedIndex;
    }

    _moveIndex(n) {
        if (!this.options.length) {
            return;
        }
        const input = this.native.value;

        let result;
        if (this.selectedIndex == -1) {
            result = n > 0 ? this.min : this.max;
        } else {
            result = this.selectedIndex + n;
            const range = this.max - this.min + 1;
            result = ((((result - this.min) % range) + range) % range) + this.min;
        }
        this.selectedIndex = result;
        const option = this.options[this.selectedIndex];
        input.setRangeText(option.label, 0, input.value.length, "select");
        this.value = option.label;
        this.emit("onInputEnumInput", { event, element: this });
    }

    stepUp() {
        const n = +1;
        this._moveIndex(n);
        this.emit("onInputEnumStepUp", { element: this });
    }

    stepDown() {
        const n = -1;
        this._moveIndex(n);
        this.emit("onInputEnumStepDown", { element: this });
    }

    _handleKeydown(event) {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            this.stepUp();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            this.stepDown();
        }
        this.emit("onInputEnumKeydown", { event, element: this });
    }

    _handleClick(event) {
        this.buffer = "";
        const input = this.native.value;
        input.select();
        this.emit("onInputEnumClick", { event, element: this });
    }

    _handleFocus(event) {
        this.buffer = "";
        const input = this.native.value;
        input.select();
        this.emit("onInputEnumFocus", { event, element: this });
    }

    _handleInput(event) {
        window.clearTimeout(this.timeout);
        this.timeout = window.setTimeout(() => {
            this.buffer = "";
            this.filteredIndex = -1;
            this.filtered = [];
        }, 1000);

        const input = this.native.value;

        const data = event.data || "";
        if (!data || data.length > 1) {
            this.buffer = "";
            input.setRangeText(this.placeholder, 0, input.value.length, "select");
            this.value = this.placeholder;
            return;
        }

        this.buffer += data;

        let filtered = this.options.filter((option) => option.label.toLowerCase().startsWith(this.buffer.toLowerCase()));

        if (filtered.length) {
            this.filteredIndex = 0;
            this.filtered = filtered;
        } else if (this.filtered.length) {
            filtered = this.filtered;
            this.filteredIndex = (this.filteredIndex + 1) % filtered.length;
        }

        if (filtered.length) {
            this.selectedIndex = this.options.indexOf(filtered[this.filteredIndex]);
            const option = this.options[this.selectedIndex];

            input.setRangeText(option.label, 0, input.value.length, "select");
            this.value = option.label;
        } else {
            this.buffer = "";
            this.selectedIndex = -1;
            input.setRangeText(this.placeholder, 0, input.value.length, "select");
            this.value = this.placeholder;
        }

        this.emit("onInputEnumInput", { event, element: this });
    }

    
    _handleChange(event) {
        this.emit("onInputEnumChange", { event, element: this });
    }

}

customElements.define("md-input-enum", MdInputEnum);

export { MdInputEnum };
