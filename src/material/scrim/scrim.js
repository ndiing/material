import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 *
 * @extends MdComponent
 * @fires MdScrimComponent#onScrimShown
 * @fires MdScrimComponent#onScrimClosed
 * @fires MdScrimComponent#onScrimClick
 * @element md-scrim
 */
class MdScrimComponent extends MdComponent {
    /**
     * @property {Boolean} [open]
     */
    static properties = {
        open: { type: Boolean, reflect: true },
    };

    /**
     *
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.handleScrimClick = this.handleScrimClick.bind(this);
        this.addEventListener("click", this.handleScrimClick);
        this.classList.add("md-scrim");
    }

    /**
     *
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleScrimClick);
    }

    /**
     *
     */
    show() {
        this.handleScrimShown = this.handleScrimShown.bind(this);
        this.addEventListener("animationend", this.handleScrimShown);
        this.open = true;
    }

    /**
     *
     */
    close() {
        this.handleScrimClosed = this.handleScrimClosed.bind(this);
        this.addEventListener("animationend", this.handleScrimClosed);
        this.open = false;
    }

    /**
     *
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleScrimShown(event) {
        if (event.animationName === "scrim-out") {
            this.removeEventListener("animationend", this.handleScrimShown);
            this.emit("onScrimShown", { event });
        }
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleScrimClosed(event) {
        if (event.animationName === "scrim-in") {
            this.removeEventListener("animationend", this.handleScrimClosed);
            this.emit("onScrimClosed", { event });
        }
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleScrimClick(event) {
        this.close();
        this.emit("onScrimClick", { event });
    }
}
customElements.define("md-scrim", MdScrimComponent);
export { MdScrimComponent };
