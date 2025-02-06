import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
const task = (() => {
    let pending = Promise.resolve();
    let execute = async (callback) => {
        try {
            await pending;
        } finally {
            return callback();
        }
    };
    return (callback) => (pending = execute(callback));
})();

/**
 * @extends MdComponent
 * @fires MdSnackbarComponent#onSnackbarIconButtonClick - {"detail":{"event":{}}}
 * @fires MdSnackbarComponent#onSnackbarButtonClick - {"detail":{"event":{}}}
 */
class MdSnackbarComponent extends MdComponent {
    /**
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
    };

    /**
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    /**
     * @private
     * @param {String} [item]
     */
    renderIcon(item) {
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    /**
     * @private
     * @param {String} [item]
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
     * @param {String} [item]
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
     * @param {String} [item]
     */
    renderSpacer(item) {
        return html` <div class="md-snackbar__spacer"></div> `;
    }

    /**
     * @private
     * @param {String} [item]
     * @param {String} [component=icon]
     */
    renderItem(item, component = "icon") {
        return choose(
            item.component || component,
            [
                ["icon", () => this.renderIcon(item)],
                ["icon-button", () => this.renderIconButton(item)],
                ["button", () => this.renderButton(item)],
                ["spacer", () => this.renderSpacer(item)],
            ],
            () => nothing,
        );
    }

    /**
     * @private
     */
    render() {
        return html` ${this.body?.length ? html`<div class="md-snackbar__body">${this.body}</div>` : nothing} ${this.buttons?.length ? html` <div class="md-snackbar__footer">${this.buttons?.length ? html` <div class="md-snackbar__buttons">${this.buttons.map((button) => this.renderItem(button, "button"))}</div> ` : nothing}</div> ` : nothing} `;
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
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-snackbar");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleSnackbarIconButtonClick(event) {
        this.emit("onSnackbarIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleSnackbarButtonClick(event) {
        this.emit("onSnackbarButtonClick", { event });
    }

    /**
     */
    show() {
        task(() => {
            return new Promise((resolve) => {
                const callback1 = () => {
                    this.close();
                };
                const timeout = setTimeout(callback1, 1000 * 4);
                const callback2 = () => {
                    clearTimeout(timeout);
                    this.removeEventListener("onSnackbarClosed", callback2);
                    resolve();
                };
                this.addEventListener("onSnackbarClosed", callback2);
                this.style.removeProperty("--md-comp-snackbar-animation");
                this.open = true;
                this.emit("onSnackbarShown");
            });
        });
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-snackbar-animation");
        this.open = false;
        const callback = (event) => {
            if (event.animationName === "snackbar-in") {
                this.removeEventListener("animationend", callback);
                this.emit("onSnackbarClosed");
            }
        };
        this.addEventListener("animationend", callback);
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
}
customElements.define("md-snackbar", MdSnackbarComponent);
export { MdSnackbarComponent };
