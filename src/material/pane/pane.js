import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderBlock } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-pane
 * @fires MDPaneComponent#onScrimClick - {{desc}}
 */
class MDPaneComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} headline - {{desc}}
     * @property {String} subhead - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Boolean} open - {{desc}}
     */
    static properties = {
        variant: { type: String },
        leadingActions: { type: Array },
        headline: { type: String },
        subhead: { type: String },
        trailingActions: { type: Array },
        actions: { type: Array },
        open: { type: Boolean, reflect: true },
    };
    variants = [];

    /**
     * {{desc}}
     */
    get hasHeader() {
        return this.leadingActions?.length || this.headline || this.subhead || this.trailingActions?.length;
    }

    /**
     * {{desc}}
     */
    get hasBody() {
        return this.childNodes_?.length;
    }

    /**
     * {{desc}}
     */
    get hasFooter() {
        return this.actions?.length;
    }

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.childNodes_ = Array.from(this.childNodes);
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader?html`
                ${renderBlock({
                    classMap: { "md-pane__header": true },
                    leadingActions: this.leadingActions,
                    headline: this.headline,
                    supportingText: this.subhead,
                    trailingActions: this.trailingActions,
                })}
            `:nothing}
            ${this.hasBody||this.hasFooter?html`
                <div class="md-pane__wrapper">
                    ${this.hasBody?html`<div class="md-pane__body">${this.childNodes_}</div>`:nothing}
                    ${this.hasFooter?html`
                        ${renderBlock({
                            classMap: { "md-pane__footer": true },
                            leadingActions: this.actions,
                            defaultLeadingActionComponent: "button",
                        })}
                    `:nothing}
                </div>
            `:nothing}
        `;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-pane");
        this.style.setProperty("--md-comp-pane-animation", "none");
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeScrim();
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-pane--${variant}`, variants.includes(variant));
            });
        }
    }

    /**
     * {{desc}}
     */
    updateStyle() {
        this.style.removeProperty("--md-comp-pane-animation");
        this.style.setProperty("--md-comp-pane-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-pane-height", this.clientHeight + "px");
    }

    /**
     * {{desc}}
     * @param {Any} scrim - {{desc}}
     */
    createScrim(scrim) {
        if (scrim) {
            this.scrim = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
            this.scrim.addEventListener("click", this.handleScrimClick.bind(this));
            this.scrim.show();
        }
    }

    /**
     * {{desc}}
     */
    removeScrim() {
        if (this.scrim) {
            this.scrim.close();
            this.scrim.remove();
            this.scrim = undefined;
        }
    }

    /**
     * {{desc}}
     * @param {Any} scrim - {{desc}}
     */
    show(scrim) {
        this.open = true;
        this.updateStyle();
        this.createScrim(scrim);
    }

    /**
     * {{desc}}
     */
    close() {
        this.open = false;
        this.updateStyle();
        this.removeScrim();
    }

    /**
     * {{desc}}
     * @param {Any} scrim - {{desc}}
     */
    toggle(scrim) {
        if (this.open) {
            this.close();
        } else {
            this.show(scrim);
        }
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleScrimClick(event) {
        this.close();
        this.emit("onScrimClick", event);
    }
}
customElements.define("md-pane", MDPaneComponent);
export { MDPaneComponent };
