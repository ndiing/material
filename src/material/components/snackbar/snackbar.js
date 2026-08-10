import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { choose } from "lit/directives/choose.js";
import { renderButton, renderIconButton } from "../../core/template.js";

class MdSnackbar extends MdElement {
    static properties = {
        supporting: { type: String },
        actions: { type: Array },
        open: { type: Boolean },
    };

    constructor() {
        super();

        this.actions = [];

        this._handleSnackbarAnimationend = this._handleSnackbarAnimationend.bind(this);
    }

    /* prettier-ignore */
    renderComponent(component,properties){
        return choose(component,[
            ['icon-button', () => renderIconButton({ classMap: { "md-snackbar__icon-button": true, ...properties.classMap }, color:'standard', ...properties })],
            ['button', () => renderButton({ classMap: { "md-snackbar__button": true, ...properties.classMap }, color:'text', ...properties })],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderActions(){
        return html`
            <div class="md-snackbar__actions">
                ${this.actions.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-snackbar__supporting">${this.supporting}</div>
            ${this.actions?.length?this.renderActions():nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-snackbar");

        this.addEventListener("animationend", this._handleSnackbarAnimationend);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("animationend", this._handleSnackbarAnimationend);

        this.classList.remove("md-snackbar");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("actions")) {
            this.classList.toggle("md-snackbar--with-action", Boolean(this.actions?.length));
        }

        if (_changedProperties.has("open")) {
            this.classList.toggle("md-snackbar--open", Boolean(this.open));
            if (!this.open) {
                this.classList.add("md-snackbar--close");
            }
        }
    }

    _handleSnackbarAnimationend(event) {
        if (event.target !== event.currentTarget) {
            return;
        }
        if (!this.open) {
            this.classList.remove("md-snackbar--close");
            this.emit("onSnackbarClosed", { element: this });
        } else {
            this.emit("onSnackbarShowed", { element: this });
        }
    }

    show() {
        this.open = true;
        this.emit("onSnackbarShow", { element: this });
    }
    close() {
        this.open = false;
        this.emit("onSnackbarClose", { element: this });
    }
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-snackbar", MdSnackbar);

export { MdSnackbar };
