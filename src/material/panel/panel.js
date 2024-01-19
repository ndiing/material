import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdPanelScrimComponent extends LitElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel__scrim");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel__scrim");
    }

    firstUpdated() {}

    updated(_changedProperties) {}
}

customElements.define("md-panel-scrim", MdPanelScrimComponent);

export { MdPanelScrimComponent };

class MdPanelComponent extends LitElement {
    static get properties() {
        return {
            open: { type: Boolean },
            type: { type: String },
            position: { type: String },
        };
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        /*prettier-ignore*/() {
                return html`
            <div class="md-panel__header">
                <div class="md-panel__start">
                    <md-icon-button icon="arrow_back"></md-icon-button>
                </div>
                <div class="md-panel__center">
                    <div class="md-panel__label">Label</div>
                    <div class="md-panel__supporting-text">Supporting text</div>
                </div>
                <div class="md-panel__end">
                    <md-icon-button icon="close"></md-icon-button>
                </div>
            </div>
            <!-- <div class="md-panel__body">
                A dialog is a type of modal window that
                appears in front of app content to provide
                critical information, or ask for decision.
            </div> -->
            <!-- <div class="md-panel__footer">
                <md-button label="Enabled"></md-button>
                <md-button label="Enabled"></md-button>
            </div> -->
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel");
    }

    firstUpdated() {
        this.panelScrim = document.createElement("md-panel-scrim");
        this.onPanelScrimClick = this.onPanelScrimClick.bind(this);
        this.panelScrim.addEventListener("click", this.onPanelScrimClick);
        document.body.append(this.panelScrim);

        this.panelScrim.removeEventListener("click", this.onPanelScrimClick);
        this.panelScrim.remove();
    }

    updated(_changedProperties) {
        if (_changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-panel--open");
            } else {
                this.classList.remove("md-panel--open");
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

        this.dispatchEvent(
            new CustomEvent("onPanelScrimClick", {
                bubbles: true,
                cancelable: true,
                detail: { event },
            })
        );
    }
}

customElements.define("md-panel", MdPanelComponent);

export { MdPanelComponent };
