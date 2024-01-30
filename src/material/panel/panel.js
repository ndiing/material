import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
class MDPanelHeaderComponent extends MDComponent {
    static properties = {
        leadingIcon: { type: String },
        trailingIcon: { type: String },
        label: { type: String },
        supportingText: { type: String },
    };

    get hasLeadingItems() {
        return this.leadingIcon;
    }
    get hasItems() {
        return this.label || this.supportingText;
    }
    get hasTrailingItems() {
        return this.trailingIcon;
    }

    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel__header");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {
        // prettier-ignore
        return html`
            ${this.hasLeadingItems?html`
                <div class="md-panel__start">
                    ${this.leadingIcon?html`<md-icon-button class="md-panel__icon" .icon="${this.leadingIcon}" @click="${this.handlePanelIconClick}"></md-icon-button>`:nothing}
                </div>
            `:nothing}
            ${this.hasItems?html`
                <div class="md-panel__center">
                    ${this.label?html`<div class="md-panel__label">${this.label}</div>`:nothing}
                    ${this.supportingText?html`<div class="md-panel__supporting-text">${this.supportingText}</div>`:nothing}
                </div>
            `:nothing}
            ${this.hasTrailingItems?html`
                <div class="md-panel__end">
                    ${this.trailingIcon?html`<md-icon-button class="md-panel__icon" .icon="${this.trailingIcon}" @click="${this.handlePanelIconClick}"></md-icon-button>`:nothing}
                </div>
            `:nothing}
            `;
    }

    handlePanelIconClick(event) {
        this.emit("onPanelIconClick", { event });
    }
}

customElements.define("md-panel-header", MDPanelHeaderComponent);

export { MDPanelHeaderComponent };

class MDPanelBodyComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel__body");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel__body");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-panel-body", MDPanelBodyComponent);

export { MDPanelBodyComponent };

class MDPanelFooterComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel__footer");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-panel-footer", MDPanelFooterComponent);

export { MDPanelFooterComponent };

class MDPanelScrimComponent extends MDComponent {
    static properties = {};

    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel__scrim");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel__scrim");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    render() {}
}

customElements.define("md-panel-scrim", MDPanelScrimComponent);

export { MDPanelScrimComponent };

class MDPanelComponent extends MDComponent {
    static properties = {
        ui: { type: String },
        position: { type: String }, // drawer position
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean, reflect: true },
    };

    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-panel");

        this.setPanelDrawerPosition();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel");

        this.removePanelDrawerPosition();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove(`md-panel--dialog`);
            this.classList.remove(`md-panel--drawer`);

            if (this.ui) {
                this.classList.add(`md-panel--${this.ui}`);
            }
        }

        if (changedProperties.has("position")) {
            this.classList.remove(`md-panel--top`);
            this.classList.remove(`md-panel--right`);
            this.classList.remove(`md-panel--bottom`);
            this.classList.remove(`md-panel--left`);

            if (this.position) {
                this.classList.add(`md-panel--${this.position}`);
            }
        }

        if (changedProperties.has("open")) {
            this.removePanelDrawerPosition();
            this.setPanelDrawerPosition();

            this.removePanelScrim();
            this.createPanelScrim();

            this.style.setProperty("transition-property", "all");
        }
    }

    setPanelDrawerPosition() {
        const panelDrawers = document.body.querySelectorAll(".md-panel--drawer:not([modal])[open]");

        const padding = {};

        for (const panelDrawer of panelDrawers) {
            const position = {
                top: "height",
                bottom: "height",
                left: "width",
                right: "width",
            }[panelDrawer.position];

            const rect = panelDrawer.getBoundingClientRect();

            if (!padding[panelDrawer.position]) {
                padding[panelDrawer.position] = 0;
            }

            // panelDrawer.style.setProperty(panelDrawer.position, padding[panelDrawer.position] + "px");
            // console.log(panelDrawer.position, padding[panelDrawer.position]);

            padding[panelDrawer.position] += rect[position];
        }

        for (const name in padding) {
            const value = padding[name];
            document.body.style.setProperty(`--md-panel-drawer-${name}`, `${value}px`);
        }

        // if (this.ui === "drawer" && this.position && !this.modal && this.open) {
        //     const position = {
        //         top: "height",
        //         bottom: "height",
        //         left: "width",
        //         right: "width",
        //     }[this.position];

        //     const rect = this.getBoundingClientRect();

        //     document.body.style.setProperty(`--md-panel-drawer-${this.position}`, `${rect[position]}px`);
        // }
    }

    removePanelDrawerPosition() {
        this.setPanelDrawerPosition();
        // if (this.position) {
        //     document.body.style.setProperty(`--md-panel-drawer-${this.position}`, `0px`);
        // }
    }

    render() {}

    createPanelScrim() {
        if (this.modal && this.open && !this.panelScrim) {
            this.panelScrim = document.createElement("md-panel-scrim");

            this.handlePanelScrimClick = this.handlePanelScrimClick.bind(this);
            this.panelScrim.addEventListener("click", this.handlePanelScrimClick);

            document.body.append(this.panelScrim);
        }
    }

    removePanelScrim() {
        if (this.panelScrim) {
            this.panelScrim.removeEventListener("click", this.handlePanelScrimClick);

            this.panelScrim.remove();

            this.panelScrim = null;
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handlePanelScrimClick(event) {
        this.close();

        this.emit("onPanelScrimClick", { event });
    }
}

customElements.define("md-panel", MDPanelComponent);

export { MDPanelComponent };
