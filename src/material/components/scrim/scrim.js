import { MdElement } from "../../base/element.js";


/**
 * @class MdScrim
 * @extends MdElement
 * 
 * @fires MdScrim#after-show
 * @fires MdScrim#after-close
 * @fires MdScrim#show
 * @fires MdScrim#close
 */
class MdScrim extends MdElement {
    
    /**
     * @property {Boolean} open - 
     */
    static properties = {
        open: { type: Boolean, reflect: true },
    };

    constructor() {
        super();

        this._handleTransitionend = this._handleTransitionend.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-scrim");

        this.addEventListener("transitionend", this._handleTransitionend);
        this.addEventListener("click", this._handleClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("click", this._handleClick);
        this.removeEventListener("transitionend", this._handleTransitionend);

        this.classList.remove("md-scrim");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("open")) {
            this.classList.toggle("md-scrim--open", Boolean(this.open));
        }
    }

    _handleTransitionend(event) {
        if (this.open) {
            this.emit("after-show", { event, element: this });
        } else {
            this.emit("after-close", { event, element: this });
        }
    }

    
    /**
     * 
     */
    show() {
        this.open = true;
        this.emit("show", { element: this });
    }

    
    /**
     * 
     */
    close() {
        this.open = false;
        this.emit("close", { element: this });
    }

    
    /**
     * 
     */
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
