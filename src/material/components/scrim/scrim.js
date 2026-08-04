import { MdElement } from "../../base/element.js";

class MdScrim extends MdElement {
    static properties = {
        open: { type: Boolean },
    };

    constructor() {
        super();
        this._handleScrimTransitionend = this._handleScrimTransitionend.bind(this);
        this._handleScrimClick = this._handleScrimClick.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-scrim");

        this.on("transitionend", this._handleScrimTransitionend);
        this.on("click", this._handleScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this._handleScrimClick);
        this.off("transitionend", this._handleScrimTransitionend);

        this.classList.remove("md-scrim");
    }

    updated(_changedProperties) {
        if (_changedProperties.has("open")) {
            this.classList.toggle("md-scrim--open", !!this.open);
        }
    }

    _handleScrimClick(event) {
        this.close();
    }

    _handleScrimTransitionend(event) {
        if (this.open) {
            this.emit("onScrimShowed", { event, element: this });
        } else {
            this.emit("onScrimClosed", { event, element: this });
        }
    }

    show() {
        this.open = true;

        this.emit("onScrimShow", { element: this });
    }

    close() {
        this.open = false;

        this.emit("onScrimClose", { element: this });
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-scrim", MdScrim);

export { MdScrim };
