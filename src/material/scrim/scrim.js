import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 * @element md-scrim
 */
class MdScrimComponent extends MdComponent {
    /**
     * @property {Boolean} [open]
     */
    static properties = {
        open: { type: Boolean, reflect: true },
    };

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-scrim");
        this.handleScrimClick = this.handleScrimClick.bind(this);
        this.addEventListener("click", this.handleScrimClick);
    }

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
        /**
         * @event onScrimShow
         * @type {Object}
         */
        this.emit("onScrimShow");
    }

    /**
     */
    close() {
        this.handleScrimClosed = this.handleScrimClosed.bind(this);
        this.addEventListener("animationend", this.handleScrimClosed);
        this.open = false;
        /**
         * @event onScrimClose
         * @type {Object}
         */
        this.emit("onScrimClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    handleScrimClick(event) {
        this.close();
        /**
         * @event onScrimClick
         * @type {Object}
         */
        this.emit("onScrimClick", { event });
    }

    handleScrimShown(event) {
        if (event.animationName === "scrim-out") {
            this.removeEventListener("animationend", this.handleScrimShown);
            /**
             * @event onScrimShown
             * @type {Object}
             */
            this.emit("onScrimShown", { event });
        }
    }

    handleScrimClosed(event) {
        if (event.animationName === "scrim-in") {
            this.removeEventListener("animationend", this.handleScrimClosed);
            /**
             * @event onScrimClosed
             * @type {Object}
             */
            this.emit("onScrimClosed", { event });
        }
    }
}
customElements.define("md-scrim", MdScrimComponent);
export { MdScrimComponent };
