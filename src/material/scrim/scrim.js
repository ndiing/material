import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 * @element md-scrim
 * @fires MdScrimComponent#onScrimShow
 * @fires MdScrimComponent#onScrimClose
 * @fires MdScrimComponent#onScrimClick
 * @fires MdScrimComponent#onScrimShown
 * @fires MdScrimComponent#onScrimClosed
 */
class MdScrimComponent extends MdComponent {
    /**
     * @property {Boolean} [open]
     */
    static properties = {
        open: { type: Boolean, reflect: true },
    };

    /**
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-scrim");
        this.handleScrimClick = this.handleScrimClick.bind(this);
        this.addEventListener("click", this.handleScrimClick);
    }

    /**
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
     * @param {Object} [event]
     */
    handleScrimClick(event) {
        this.close();
        this.emit("onScrimClick", { event });
    }

    /**
     * @param {Object} [event]
     */
    handleScrimShown(event) {
        if (event.animationName === "scrim-out") {
            this.removeEventListener("animationend", this.handleScrimShown);
            this.emit("onScrimShown", { event });
        }
    }

    /**
     * @param {Object} [event]
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
