import { MDCDK } from "./cdk";

/**
 * Represents a stateful UI element with interactive behaviors.
 * @class
 * @extends MDCDK
 */
class MDState extends MDCDK {
    /**
     * Initializes the MDState instance.
     * @public
     * @override
     */
    init() {
        this.root.classList.add("md-state");

        this.size = this.options.size;
        if (!this.size) {
            const rect = this.root.getBoundingClientRect();
            this.size = (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / rect.width) * 100;
        }
        this.root.style.setProperty("--md-state-size", this.size + "%");

        if (this.options.inverted) this.root.classList.add("md-state--inverted");
        else this.root.classList.remove("md-state--inverted");

        this.options.bounded = this.options.bounded ?? true;
        if (this.options.bounded) this.root.classList.add("md-state--bounded");
        else this.root.classList.remove("md-state--bounded");

        if (this.options.fadeout) this.root.classList.add("md-state--fadeout");
        else this.root.classList.remove("md-state--fadeout");

        this.trigger = this.options.trigger ?? this.root;
        this.trigger.classList.add("md-state--trigger");
        this.trigger.setAttribute("tabIndex", 0);

        this.handleMouseenter = this.handleMouseenter.bind(this);
        this.handleMouseleave = this.handleMouseleave.bind(this);
        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.trigger.addEventListener("mouseenter", this.handleMouseenter);
        this.trigger.addEventListener("mouseleave", this.handleMouseleave);
        this.trigger.addEventListener("mousedown", this.handleMousedown);
        this.trigger.addEventListener("focus", this.handleFocus);
        this.trigger.addEventListener("blur", this.handleBlur);

        this.handleAnimationend = this.handleAnimationend.bind(this);

        this.root.addEventListener("animationend", this.handleAnimationend);
    }

    /**
     * Destroys the MDState instance.
     * @public
     * @override
     */
    destroy() {}

    /**
     * Handles the mouseenter event by adding a hover state.
     * @private
     * @param {Event} event - The mouseenter event.
     */
    handleMouseenter(event) {
        this.root.classList.add("md-state--hover");
    }

    /**
     * Handles the mouseleave event by removing the hover state.
     * @private
     * @param {Event} event - The mouseleave event.
     */
    handleMouseleave(event) {
        this.root.classList.remove("md-state--hover");
    }

    /**
     * Handles the mousedown event by adding a pressed state and updating styles.
     * @private
     * @param {Event} event - The mousedown event.
     */
    handleMousedown(event) {
        window.addEventListener("mouseup", this.handleMouseup);
        this.root.classList.add("md-state--pressed");

        this.root.style.setProperty("--md-state", "none");
        this.root.style.setProperty("--md-state-fadeout", "none");

        const rect = this.root.getBoundingClientRect();

        if (!this.options.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.size);
            const y = (0.5 - top) * ((100 / this.size) * (rect.height / rect.width));

            this.root.style.setProperty("--md-state-left", left * 100 + "%");
            this.root.style.setProperty("--md-state-top", top * 100 + "%");
            this.root.style.setProperty("--md-state-x", x * 100 + "%");
            this.root.style.setProperty("--md-state-y", y * 100 + "%");
        }

        this.root.style.setProperty("--md-state", "md-state");
        this.root.style.setProperty("--md-state-fadeout", "md-state-fadeout");
    }

    /**
     * Handles the mouseup event by removing the pressed state.
     * @private
     * @param {Event} event - The mouseup event.
     */
    handleMouseup(event) {
        this.root.classList.remove("md-state--pressed");
        window.addEventListener("mouseup", this.handleMouseup);
    }

    /**
     * Handles the focus event by adding a focused state.
     * @private
     * @param {Event} event - The focus event.
     */
    handleFocus(event) {
        this.root.classList.add("md-state--focused");
    }

    /**
     * Handles the blur event by removing the focused state.
     * @private
     * @param {Event} event - The blur event.
     */
    handleBlur(event) {
        this.root.classList.remove("md-state--focused");
    }

    /**
     * Handles the animationend event by removing animation-related styles.
     * @private
     * @param {Event} event - The animationend event.
     */
    handleAnimationend(event) {
        const animationName = this.options.fadeout ? "md-state-fadeout" : "md-state";
        if (event.animationName === animationName) {
            this.root.style.removeProperty("--md-state-left");
            this.root.style.removeProperty("--md-state-top");
            this.root.style.removeProperty("--md-state-x");
            this.root.style.removeProperty("--md-state-y");
            this.root.style.removeProperty("--md-state");
            this.root.style.removeProperty("--md-state-fadeout");
        }
    }
}

export { MDState };
