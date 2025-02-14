import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
const queue = () => {
    let pending = Promise.resolve();
    let execute = async (callback) => {
        try {
            await pending;
        } finally {
            return callback();
        }
    };
    return (callback) => (pending = execute(callback));
};
const task = queue();

/**
 * @extends MdComponent
 * @element md-snackbar
 * @fires MdSnackbarComponent#onSnackbarShow
 * @fires MdSnackbarComponent#onSnackbarClose
 * @fires MdSnackbarComponent#onSnackbarShown
 * @fires MdSnackbarComponent#onSnackbarClosed
 * @fires MdSnackbarComponent#onSnackbarIconButtonClick
 * @fires MdSnackbarComponent#onSnackbarButtonClick
 */
class MdSnackbarComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     * @property {Number} [autoDismiss]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        autoDismiss: { type: Number },
    };

    /**
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
        this.autoDismiss = 1000 * 4;
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleSnackbarIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .disabled="${ifDefined(item.disabled)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleSnackbarButtonClick}"
            ></md-button>
        `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-snackbar__spacer"></div> `;
    }

    /**
     * @private
     * @param {Undefined} [item]
     * @param {String} [component="icon"]
     */
    renderComponent(item, component = "icon") {
        const components = [
            ["icon", () => this.renderIcon(item)],
            ["icon-button", () => this.renderIconButton(item)],
            ["button", () => this.renderButton(item)],
            ["spacer", () => this.renderSpacer(item)],
        ];
        return choose(item.component || component, components, () => nothing);
    }

    /**
     * @private
     */
    render() {
        return html` ${this.body?.length ? html`<div class="md-snackbar__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-snackbar__footer">${this.buttons?.length ? html` <div class="md-snackbar__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div> ` : nothing}</div> ` : nothing} `;
    }

    /**
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-snackbar");
        this.style.setProperty("--md-comp-snackbar-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-snackbar-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-snackbar-width", this.clientWidth + "px");
    }

    /**
     */
    show() {
        task(
            () =>
                new Promise((resolve) => {
                    const handleSnackbarAutoDismiss = () => {
                        this.close();
                    };
                    const timeout = setTimeout(handleSnackbarAutoDismiss, this.autoDismiss);
                    const handleSnackbarDismissed = () => {
                        clearTimeout(timeout);
                        this.removeEventListener("onSnackbarClosed", handleSnackbarDismissed);
                        resolve();
                    };
                    this.addEventListener("onSnackbarClosed", handleSnackbarDismissed);
                    this.handleSnackbarShown = this.handleSnackbarShown.bind(this);
                    this.addEventListener("animationend", this.handleSnackbarShown);
                    this.style.removeProperty("--md-comp-snackbar-animation");
                    this.open = true;
                    this.emit("onSnackbarShow");
                }),
        );
    }

    /**
     */
    close() {
        this.handleSnackbarClosed = this.handleSnackbarClosed.bind(this);
        this.addEventListener("animationend", this.handleSnackbarClosed);
        this.style.removeProperty("--md-comp-snackbar-animation");
        this.open = false;
        this.emit("onSnackbarClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleSnackbarShown(event) {
        if (event.animationName === "snackbar-out") {
            this.removeEventListener("animationend", this.handleSnackbarShown);
            this.emit("onSnackbarShown");
        }
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleSnackbarClosed(event) {
        if (event.animationName === "snackbar-in") {
            this.removeEventListener("animationend", this.handleSnackbarClosed);
            this.emit("onSnackbarClosed");
        }
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleSnackbarIconButtonClick(event) {
        this.emit("onSnackbarIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleSnackbarButtonClick(event) {
        this.emit("onSnackbarButtonClick", { event });
    }
}
customElements.define("md-snackbar", MdSnackbarComponent);
export { MdSnackbarComponent };
