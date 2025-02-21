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
 */
class MDSnackbarComponent extends MdComponent {
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

    constructor() {
        super();

        this.body = Array.from(this.childNodes);
        this.autoDismiss = 1000 * 4;
    }

    renderIcon(item) {
        /* prettier-ignore */
        return html` <md-icon .data="${item}">${item.icon}</md-icon> `;
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @onIconButtonClick="${this.handleSnackbarIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        /* prettier-ignore */
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

    renderSpacer(item) {
        /* prettier-ignore */
        return html` <div class="md-snackbar__spacer"></div> `;
    }

    renderComponent(item, component = "icon") {
        const components = [
            ["icon", () => this.renderIcon(item)],
            ["icon-button", () => this.renderIconButton(item)],
            ["button", () => this.renderButton(item)],
            ["spacer", () => this.renderSpacer(item)],
        ];
        return choose(item.component || component, components, () => nothing);
    }

    render() {
        /* prettier-ignore */
        return html` 
            ${this.body?.length ? html`
                <div class="md-snackbar__body">${this.body}</div>
                ` : nothing} 
                ${this.buttons?.length ? html` 
                <div class="md-snackbar__footer">
                    
                    ${this.buttons?.length ? html` 
                    <div class="md-snackbar__buttons">${this.buttons.map((button) => this.renderComponent(button, "button"))}</div>
                    ` : nothing}
                </div>
            ` : nothing} 
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-snackbar");
        this.style.setProperty("--md-comp-snackbar-animation", "none");
        this.handleSnackbarAnimationend = this.handleSnackbarAnimationend.bind(this);
        this.addEventListener("animationend", this.handleSnackbarAnimationend);

        await this.updateComplete;

        this.style.setProperty("--md-comp-snackbar-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-snackbar-width", this.clientWidth + "px");
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("animationend", this.handleSnackbarAnimationend);
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
                    this.style.removeProperty("--md-comp-snackbar-animation");
                    this.open = true;
                    /**
                     * @event onSnackbarShow
                     * @property {Object} event
                     */
                    this.emit("onSnackbarShow");
                }),
        );
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-snackbar-animation");
        this.open = false;
        /**
         * @event onSnackbarClose
         * @property {Object} event
         */
        this.emit("onSnackbarClose");
    }

    /**
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleSnackbarShown(event) {
        /**
         * @event onSnackbarShown
         * @property {Object} event
         */
        this.emit("onSnackbarShown");
    }

    handleSnackbarClosed(event) {
        /**
         * @event onSnackbarClosed
         * @property {Object} event
         */
        this.emit("onSnackbarClosed");
    }

    handleSnackbarAnimationend(event) {
        if (event.animationName === "snackbar-in") {
            this.handleSnackbarClosed(event);
        } else if (event.animationName === "snackbar-out") {
            this.handleSnackbarShown(event);
        }
    }

    handleSnackbarIconButtonClick(event) {
        /**
         * @event onSnackbarIconButtonClick
         * @property {Object} event
         */
        this.emit("onSnackbarIconButtonClick", { event });
    }

    handleSnackbarButtonClick(event) {
        /**
         * @event onSnackbarButtonClick
         * @property {Object} event
         */
        this.emit("onSnackbarButtonClick", { event });
    }
}

customElements.define("md-snackbar", MDSnackbarComponent);

export { MDSnackbarComponent };
