import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MdComponent
 * @fires MdTabsComponent#onTabClick - {"detail":{"event":{}}}
 */
class MdTabsComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {Object} [rippleOptions]
     * @property {String} [variant]
     */
    static properties = {
        items: { type: Array },
        rippleOptions: { type: Object },
        variant: { type: String },
    };
    variants = ["primary", "secondary"];

    /**
     */
    constructor() {
        super();
        this.items = [];
        this.variant = "primary";
    }

    /**
     * @private
     * @param {String} [item]
     */
    renderTab(item) {
        return html`
            <md-tab
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .rippleOptions="${ifDefined(item.rippleOptions || this.rippleOptions)}"
                .badge="${ifDefined(item.badge)}"
                @click="${this.handleTabClick}"
                @onTabSelected="${this.handleTabSelected}"
            ></md-tab>
        `;
    }

    /**
     * @private
     */
    render() {
        return this.items.map((item) => this.renderTab(item));
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
        this.style.setProperty("--md-comp-tabs-indicator-transition-property", "none");
    }

    /**
     * @private
     * @param {String} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-tabs--${variant}`, variant === this.variant);
            });
        }
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleTabClick(event) {
        this.style.removeProperty("--md-comp-tabs-indicator-transition-property");
        const data = event.currentTarget.data;
        this.singleSelect(data);
        this.requestUpdate();
        this.emit("onTabClick", { event });
    }

    /**
     * @param {Object} [data]
     */
    singleSelect(data) {
        this.items.forEach((item) => {
            item.selected = item === data;
        });
    }

    /**
     * @private
     * @async
     * @param {Object} [event]
     */
    async handleTabSelected(event) {
        if (this.classList.contains("md-tabs")) {
            const tab = event.detail.tab;
            const data = tab.data;
            this.currIndex = this.items.indexOf(data);
            this.prevIndex = this.prevIndex ?? this.currIndex;
            const direction = this.currIndex > this.prevIndex ? "right" : "left";
            this.classList.remove("md-tabs--left");
            this.classList.remove("md-tabs--right");
            this.classList.add("md-tabs--" + direction);
            this.prevIndex = this.currIndex;
            let left = tab.offsetLeft;
            let right = this.clientWidth - (left + tab.clientWidth);
            if (this.classList.contains("md-tabs--primary")) {
                const label = tab.querySelector(".md-tab__label");
                left = label.offsetLeft + tab.offsetLeft;
                right = this.clientWidth - (left + label.clientWidth);
                if (!tab.classList.contains("md-tab--with-icon")) {
                    const badge = tab.querySelector(".md-tab__badge");
                    if (badge) {
                        right = this.clientWidth - (badge.offsetLeft + tab.offsetLeft + badge.clientWidth);
                    }
                }
            }
            this.style.setProperty("--md-comp-tabs-indicator-left", left + "px");
            this.style.setProperty("--md-comp-tabs-indicator-right", right + "px");
        }
    }
}
customElements.define("md-tabs", MdTabsComponent);
export { MdTabsComponent };
