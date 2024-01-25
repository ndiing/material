import { html, nothing } from "lit";
import { MdStateController } from "../state/state";
import { choose } from "lit/directives/choose.js";
import { MdComponent } from "../component/component";

class MdPanelHeaderComponent extends MdComponent {
    static get properties() {
        return {
            label: { type: String },
            supportingText: { type: String },
            leadingItems: { type: Array },
            trailingItems: { type: Array },
        };
    }

    constructor() {
        super();
        this.leadingItems = [];
        this.trailingItems = [];
    }

    renderItem(item = {}) {
        /* prettier-ignore */
        return choose(item.item,[
            ['md-icon-button',() => html`<md-icon-button icon="${item.icon}" @click="${this.onPanelItemClick}"></md-icon-button>`]
        ],() => nothing)
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingItems?.length?html`<div class="md-panel__start">${this.leadingItems.map(item=>this.renderItem(item))}</div>`:nothing}
            ${this.label||this.supportingText?html`
            <div class="md-panel__center">
                ${this.label?html`<div class="md-panel__label">${this.label}</div>`:nothing}
                ${this.supportingText?html`<div class="md-panel__supporting-text">${this.supportingText}</div>`:nothing}
            </div>
            `:nothing}
            ${this.trailingItems?.length?html`<div class="md-panel__end">${this.trailingItems.map(item=>this.renderItem(item))}</div>`:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel__header");
    }

    onPanelItemClick(event) {
        let item = event.currentTarget;

        this.emit("onPanelItemClick", { event, item });
    }
}

customElements.define("md-panel-header", MdPanelHeaderComponent);

class MdPanelBodyComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel__body");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel__body");
    }
}

customElements.define("md-panel-body", MdPanelBodyComponent);

class MdPanelFooterComponent extends MdComponent {
    static get properties() {
        return {
            items: { type: Array },
        };
    }

    constructor() {
        super();
        this.items = [];
    }

    renderItem(item = {}) {
        /* prettier-ignore */
        return choose(item.item,[
            ['md-button',() => html`<md-button .icon="${item.icon}" .label="${item.label}" @click="${this.onPanelItemClick}"></md-button>`]
        ],() => nothing)
    }

    render() {
        /* prettier-ignore */
        return this.items.map(item=>this.renderItem(item))
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel__footer");
    }

    onPanelItemClick(event) {
        let item = event.currentTarget;

        this.emit("onPanelItemClick", { event, item });
    }
}

customElements.define("md-panel-footer", MdPanelFooterComponent);

class MdPanelScrimComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel__scrim");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel__scrim");
    }
}

customElements.define("md-panel-scrim", MdPanelScrimComponent);

class MdPanelComponent extends MdComponent {
    static get properties() {
        return {
            open: { type: Boolean },
            type: { type: String },
            position: { type: String },
            modal: { type: Boolean },
            label: { type: String },
            supportingText: { type: String },
            leadingItems: { type: Array },
            trailingItems: { type: Array },
            buttons: { type: Array },
        };
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel");
    }

    removePanelScrim() {
        this.panelScrim.removeEventListener("click", this.onPanelScrimClick);
        this.panelScrim.remove();
    }

    createPanelScrim() {
        this.panelScrim = document.createElement("md-panel-scrim");
        this.onPanelScrimClick = this.onPanelScrimClick.bind(this);
        this.panelScrim.addEventListener("click", this.onPanelScrimClick);
        document.body.append(this.panelScrim);
    }

    updated(_changedProperties) {
        // console.log(this.type,this.modal,this.open)
        if (_changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-panel--open");
                this.classList.add("md-panel--transition");
                if (["dialog", "drawer"].includes(this.type) && this.modal) {
                    this.createPanelScrim();
                }
            } else {
                this.classList.remove("md-panel--open");
                if (["dialog", "drawer"].includes(this.type) && this.modal) {
                    this.removePanelScrim();
                }
            }

            if (this.type === "drawer" && !this.modal) {
                const mapSize = {
                    left: "width",
                    top: "height",
                    right: "width",
                    bottom: "height",
                };
                const rect = this.getBoundingClientRect();
                const padding = this.open ? rect[mapSize[this.position]] : 0;
                document.body.style.setProperty("--md-panel-" + this.position, padding + "px");
            }
        }
        if (_changedProperties.has("modal")) {
            if (this.modal) {
                this.classList.add("md-panel--modal");
            } else {
                this.classList.remove("md-panel--modal");
            }
        }
        if (_changedProperties.has("type")) {
            ["dialog", "drawer"].forEach((type) => {
                this.classList.remove("md-panel--" + type);
            });
            if (this.type) {
                this.classList.add("md-panel--" + this.type);
            }
        }
        if (_changedProperties.has("position")) {
            ["top", "right", "bottom", "left"].forEach((position) => {
                this.classList.remove("md-panel--" + position);
            });
            if (this.position) {
                this.classList.add("md-panel--" + this.position);
            }
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

    onPanelScrimClick(event) {
        this.close();

        this.emit("onPanelScrimClick", { event });
    }
}

customElements.define("md-panel", MdPanelComponent);

export { MdPanelHeaderComponent, MdPanelBodyComponent, MdPanelFooterComponent, MdPanelScrimComponent, MdPanelComponent };
