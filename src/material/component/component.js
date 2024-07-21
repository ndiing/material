import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * {{desc}}
 * @extends LitElement
 */
class MDComponent extends LitElement {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     */
    static properties = {
        tooltip: { type: String },
    };

    /**
     * {{desc}}
     */
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    /**
     * {{desc}}
     */
    createRenderRoot() {
        return this;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.on("pointerenter", this.handlePointerenter);
        this.on("pointerleave", this.handlePointerleave);
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.off("pointerenter", this.handlePointerenter);
        this.off("pointerleave", this.handlePointerleave);
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     * {{desc}}
     */
    async handlePointerenter() {
        if (this.tooltip && !this.tooltipElement) {
            this.tooltipElement = document.createElement("md-tooltip");
            this.tooltipElement.childNodes_ = [this.tooltip];
            this.tooltipElement.variant = "plain";
            document.body.append(this.tooltipElement);
            await this.tooltipElement.updateComplete;
            this.tooltipElement.show(this);
        }
    }

    /**
     * {{desc}}
     */
    handlePointerleave() {
        if (this.tooltipElement) {
            this.tooltipElement.remove();
            this.tooltipElement = null;
        }
    }

    /**
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} listener - {{desc}}
     */
    on(type, listener) {
        listener = listener.bind(this);
        this.addEventListener(type, listener);
    }

    /**
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} listener - {{desc}}
     */
    once(type, listener) {
        const handleListener = (event) => {
            listener(event);
            this.off(type, handleListener);
        };
        this.on(type, handleListener);
    }

    /**
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} listener - {{desc}}
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} detail - {{desc}}
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.dispatchEvent(event);
    }
}
export { MDComponent };
