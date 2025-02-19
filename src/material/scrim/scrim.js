import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 * @element md-scrim
 */
class MDScrimComponent extends MdComponent {
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
         * @property {Object} event
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
         * @property {Object} event
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
         * @property {Object} event
         */
        this.emit("onScrimClick", { event });
    }

    handleScrimShown(event) {
        if (event.animationName === "scrim-out") {
            this.removeEventListener("animationend", this.handleScrimShown);

            /**
             * @event onScrimShown
             * @property {Object} event
             */
            this.emit("onScrimShown", { event });
        }
    }

    handleScrimClosed(event) {
        if (event.animationName === "scrim-in") {
            this.removeEventListener("animationend", this.handleScrimClosed);

            /**
             * @event onScrimClosed
             * @property {Object} event
             */
            this.emit("onScrimClosed", { event });
        }
    }
}

customElements.define("md-scrim", MDScrimComponent);

export { MDScrimComponent };
