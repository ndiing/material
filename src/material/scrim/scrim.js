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
        this.style.setProperty("--md-comp-scrim-animation", "none");

        this.handleScrimClick = this.handleScrimClick.bind(this);
        this.addEventListener("click", this.handleScrimClick);

        this.handleScrimAnimationend = this.handleScrimAnimationend.bind(this);
        this.addEventListener("animationend", this.handleScrimAnimationend);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("click", this.handleScrimClick);
        this.removeEventListener("animationend", this.handleScrimAnimationend);
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-scrim-animation");
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
        this.style.removeProperty("--md-comp-scrim-animation");
        this.open = false;

        /**
         * @event onScrimClose
         * @property {Object} event
         */
        this.emit("onScrimClose", {});
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    handleScrimShown(event) {
        /**
         * @event onScrimShown
         * @property {Object} event
         */
        this.emit("onScrimShown", { event });
    }

    handleScrimClosed(event) {
        /**
         * @event onScrimClosed
         * @property {Object} event
         */
        this.emit("onScrimClosed", { event });
    }

    handleScrimAnimationend(event) {
        if (event.animationName === "scrim-out") this.handleScrimShown(event);
        else if (event.animationName === "scrim-in") this.handleScrimClosed(event);
    }

    handleScrimClick(event) {
        this.close();

        /**
         * @event onScrimClick
         * @property {Object} event
         */
        this.emit("onScrimClick", { event });
    }
}

customElements.define("md-scrim", MDScrimComponent);

export { MDScrimComponent };
