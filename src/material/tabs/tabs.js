import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MdComponent
 * @element md-tabs
 */
class MDTabsComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {Object} [rippleOptions]
     * @property {primary|secondary} [variant]
     */
    static properties = {
        items: { type: Array },
        rippleOptions: { type: Object },
        variant: { type: String },
    };

    variants = ["primary", "secondary"];

    constructor() {
        super();
        this.items = [];
        this.variant = "primary";
    }

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

    render() {
        return this.items.map((item) => this.renderTab(item));
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
        this.style.setProperty("--md-comp-tabs-indicator-transition-property", "none");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-tabs--${variant}`, variant === this.variant);
            });
        }
    }

    handleTabClick(event) {
        this.style.removeProperty("--md-comp-tabs-indicator-transition-property");
        const data = event.currentTarget.data;

        this.items.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();

        /**
         * @event onTabClick
         * @property {Object} event
         */
        this.emit("onTabClick", { event });
    }

    async handleTabSelected(event) {
        if (this.classList.contains("md-tabs")) {
            const currentTarget = event.detail.currentTarget;
            const data = currentTarget.data;
            this.currIndex = this.items.indexOf(data);
            this.prevIndex = this.prevIndex ?? this.currIndex;
            const direction = this.currIndex > this.prevIndex ? "right" : "left";
            this.classList.remove("md-tabs--left");
            this.classList.remove("md-tabs--right");
            this.classList.add("md-tabs--" + direction);
            this.prevIndex = this.currIndex;
            let left = currentTarget.offsetLeft;
            let right = this.clientWidth - (left + currentTarget.clientWidth);

            if (this.classList.contains("md-tabs--primary")) {
                const label = currentTarget.querySelector(".md-tab__label");
                left = label.offsetLeft + currentTarget.offsetLeft;
                right = this.clientWidth - (left + label.clientWidth);

                if (!currentTarget.classList.contains("md-tab--with-icon")) {
                    const badge = currentTarget.querySelector(".md-tab__badge");

                    if (badge) {
                        right = this.clientWidth - (badge.offsetLeft + currentTarget.offsetLeft + badge.clientWidth);
                    }
                }
            }
            this.style.setProperty("--md-comp-tabs-indicator-left", left + "px");
            this.style.setProperty("--md-comp-tabs-indicator-right", right + "px");
        }
    }
}

customElements.define("md-tabs", MDTabsComponent);

export { MDTabsComponent };
