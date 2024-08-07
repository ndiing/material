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
        // updateWhenLocaleChanges(this);
    }

    /**
     * {{desc}}
     * @private
     */
    createRenderRoot() {
        return this;
    }

    /**
     * {{desc}}
     * @private
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
        this.removeTooltip();
        this.off("pointerenter", this.handlePointerenter);
        this.off("pointerleave", this.handlePointerleave);
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} listener - {{desc}}
     * @private
     */
    on(type, listener) {
        listener = listener.bind(this);
        this.addEventListener(type, listener);
    }

    /**
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} listener - {{desc}}
     * @private
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
     * @private
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} detail - {{desc}}
     * @private
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.dispatchEvent(event);
    }

    /**
     * {{desc}}
     * @private
     */
    async handlePointerenter() {
        await this.createTooltip();
    }

    /**
     * {{desc}}
     * @private
     */
    handlePointerleave() {
        this.removeTooltip();
    }

    /**
     * {{desc}}
     */
    async createTooltip() {
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
    removeTooltip() {
        if (this.tooltipElement) {
            this.tooltipElement.remove();
            this.tooltipElement = null;
        }
    }
}
export { MDComponent };
