import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";

/**
 * @class MdInputEnum
 * @extends MdElement
 *
 * @fires MdInputEnum#input
 * @fires MdInputEnum#change
 * @fires MdInputEnum#keydown
 * @fires MdInputEnum#focus
 * @fires MdInputEnum#blur
 */
class MdInputEnum extends MdElement {
    static formAssociated = true;

    /**
     */
    static properties = {
        value: { type: String },
        size: { type: Number },
        placeholder: { type: String },
        tabIndex: { type: Number },
        options: { type: Array },
        selectedIndex: { type: Number },
        bufferTimeout: { type: Number },
    };

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.buffer = "";
        this.validBuffer = "";
        this.filteredIndex = -1;
        this.filtered = [];
        this.defaultValue = "";
        this.defaultSelectedIndex = -1;

        this.value = "";
        this.placeholder = "";
        this.options = [];
        this.selectedIndex = -1;
        this.bufferTimeout = 1000;
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                ${ref(this.getRef('native'))}
                type="text"
                .value="${ifDefined(this.value||this.placeholder)}"
                .size="${ifDefined(this.size)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @keydown="${this._handleKeydown}"
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @input="${this._handleInput}"
                @change="${this._handleChange}"
            >
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-input-enum");

        this.autoCorrect();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-input-enum");

        clearTimeout(this.timeout);
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("placeholder") && this.placeholder?.length) {
            this.size = this.placeholder.length;
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        if (this.value !== null) {
            this.defaultValue = this.value;
        }

        if (this.selectedIndex !== -1) {
            this.defaultSelectedIndex = this.selectedIndex;
        }
    }

    /**
     *
     */
    formResetCallback(event) {
        const native = this.getRef("native").value;

        this.selectedIndex = this.defaultSelectedIndex;

        this.value = this.defaultValue;
        native.value = this.defaultValue || this.placeholder;
    }

    _moveIndex(n) {
        if (!this.options?.length) {
            return;
        }

        const native = this.getRef("native").value;
        const length = this.options.length;
        const selectedIndex = this.selectedIndex + n;
        this.selectedIndex = ((selectedIndex % length) + length) % length;
        const option = this.options[this.selectedIndex];

        native.setRangeText(option?.label ?? option, 0, native.value.length, "select");
        this.value = option?.label ?? option;

        this.emit("input", { element: this });
    }

    /**
     *
     */
    autoCorrect() {
        if (!this.options?.length) {
            this.value = "";
            this.selectedIndex = -1;
            return;
        }

        if (this.selectedIndex !== -1) {
            const option = this.options[this.selectedIndex];
            if (option) {
                this.value = option?.label ?? option;
            } else {
                this.selectedIndex = -1;
            }
        }

        if (this.value !== undefined && this.value !== null && this.value !== "") {
            const selectedIndex = this.options.findIndex((option) => (option?.label ?? option).toLowerCase() === this.value.toLowerCase());
            if (selectedIndex !== -1) {
                this.selectedIndex = selectedIndex;
            } else {
                this.value = "";
            }
        }

        this.emit("change", { element: this });
    }

    /**
     *
     */
    stepUp() {
        this._moveIndex(1);
    }

    /**
     *
     */
    stepDown() {
        this._moveIndex(-1);
    }

    _handleKeydown(event) {
        event.stopPropagation();

        if (event.key === "ArrowUp") {
            event.preventDefault();
            this.stepUp();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            this.stepDown();
        }

        this.emit("keydown", { event, element: this });
    }

    _handleFocus(event) {
        event.stopPropagation();

        this.buffer = "";
        this.validBuffer = "";

        const native = this.getRef("native").value;
        native.select();

        this.emit("focus", { event, element: this });
    }

    _handleBlur(event) {
        event.stopPropagation();

        this.autoCorrect();

        this.emit("blur", { event, element: this });
    }

    _handleInput(event) {
        event.stopPropagation();

        const native = this.getRef("native").value;
        const data = event.data || "";

        if (!data || data.length !== 1) {
            this.buffer = "";
            this.validBuffer = "";
            this.filteredIndex = -1;
            this.filtered = [];

            this.value = "";
            native.setRangeText(this.placeholder, 0, native.value.length, "select");
            return;
        }

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.buffer = "";
        }, this.bufferTimeout);

        this.buffer += data;

        let filtered = this.options.filter((option) => (option?.label ?? option).toLowerCase().startsWith(this.buffer.toLowerCase()));

        if (filtered.length) {
            this.filtered = filtered;
            this.filteredIndex = 0;
            this.validBuffer = this.buffer;
        } else if (this.filtered.length && this.validBuffer.endsWith(data)) {
            this.filteredIndex = (this.filteredIndex + 1) % this.filtered.length;
        } else {
            this.validBuffer = "";
        }

        this.selectedIndex = this.options.indexOf(this.filtered[this.filteredIndex]);
        if (this.selectedIndex !== -1) {
            const option = this.options[this.selectedIndex];
            native.setRangeText(option?.label ?? option, 0, native.value.length, "select");
            this.value = option?.label ?? option;

            this.emit("input", { event, element: this });
        } else {
            this.value = "";
            native.setRangeText(this.placeholder, 0, native.value.length, "select");
        }
    }

    _handleChange(event) {
        event.stopPropagation();

        this.emit("change", { event, element: this });
    }
}

customElements.define("md-input-enum", MdInputEnum);

export { MdInputEnum };
