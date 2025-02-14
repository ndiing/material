import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 * @fires MdScrimComponent#onScrimShow
 * @fires MdScrimComponent#onScrimClose
 * @fires MdScrimComponent#onScrimClick
 * @fires MdScrimComponent#onScrimShown
 * @fires MdScrimComponent#onScrimClosed
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
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-scrim");
        this.handleScrimClick = this.handleScrimClick.bind(this);
        this.addEventListener("click", this.handleScrimClick);
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleScrimClick);
    }

    /**
     */
    show() {
        this.handleScrimShown = this.handleScrimShown.bind(this);
        this.addEventListener("animationend", this.handleScrimShown);
        this.open = true;
        this.emit("onScrimShow");
    }

    /**
     */
    close() {
        this.handleScrimClosed = this.handleScrimClosed.bind(this);
        this.addEventListener("animationend", this.handleScrimClosed);
        this.open = false;
        this.emit("onScrimClose");
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
    handleScrimClick(event) {
        this.close();
        this.emit("onScrimClick", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleScrimShown(event) {
        if (event.animationName === "scrim-out") {
            this.removeEventListener("animationend", this.handleScrimShown);
            this.emit("onScrimShown", { event });
        }
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleScrimClosed(event) {
        if (event.animationName === "scrim-in") {
            this.removeEventListener("animationend", this.handleScrimClosed);
            this.emit("onScrimClosed", { event });
        }
    }
}
customElements.define("md-scrim", MdScrimComponent);
export { MdScrimComponent };
