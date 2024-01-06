import { MDCDK } from "./cdk";

/**
 * Represents a Material Design Ripple effect applied to an element.
 * @extends MDCDK
 */
class MDRipple extends MDCDK {
    /**
     * Creates an instance of MDRipple.
     * @param {HTMLElement} root - The root element to apply the ripple effect.
     * @param {Object} [options={}] - Additional options for the ripple effect.
     * @param {boolean} [options.bounded=true] - Whether the ripple effect is bounded.
     * @param {boolean} [options.centered=false] - Whether the ripple effect is centered.
     * @param {HTMLElement} [options.trigger] - The element triggering the ripple effect.
     * @param {number} [options.diameter] - The diameter of the ripple effect.
     * @param {boolean} [options.fadeout] - Whether to apply a fade-out effect.
     */
    constructor(root, options = {}) {
        super(root, options);
    }

    /**
     * Calculates the diameter for the ripple effect.
     * @private
     * @returns {number} The calculated diameter.
     */
    get diameter() {
        const rect = this.root.getBoundingClientRect();
        const diameter = (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / rect.width) * 100;
        return diameter;
    }

    /**
     * Initializes the ripple effect.
     */
    init() {
        this.options.diameter = this.options.diameter ?? this.diameter;

        this.root.classList.add("md-ripple");

        if (this.options.bounded !== false) this.root.classList.add("md-ripple--bounded");

        if (this.options.fadeout) this.root.classList.add("md-ripple--fadeout");

        this.root.style.setProperty("--md-ripple-diameter", this.options.diameter + "%");

        this.trigger = this.options.trigger ?? this.root;
        this.trigger.classList.add("md-ripple--trigger");
        this.trigger.setAttribute("tabIndex", 0);

        this.handleMouseenter = this.handleMouseenter.bind(this);
        this.handleMouseleave = this.handleMouseleave.bind(this);
        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleAnimationend = this.handleAnimationend.bind(this);

        this.trigger.addEventListener("mouseenter", this.handleMouseenter);
        this.trigger.addEventListener("mouseleave", this.handleMouseleave);
        this.trigger.addEventListener("mousedown", this.handleMousedown);
        // this.trigger.addEventListener("mouseup", this.handleMouseup);
        this.trigger.addEventListener("focus", this.handleFocus);
        this.trigger.addEventListener("blur", this.handleBlur);
    }

    /**
     * Destroys the ripple effect and removes event listeners.
     */
    destroy() {
        this.root.style.removeProperty("--md-ripple");
        this.root.style.removeProperty("--md-ripple-fadeout");
        this.root.style.removeProperty("--md-ripple-diameter");
        this.root.style.removeProperty("--md-ripple-left");
        this.root.style.removeProperty("--md-ripple-top");
        this.root.style.removeProperty("--md-ripple-x");
        this.root.style.removeProperty("--md-ripple-y");
        this.root.classList.remove("md-ripple--trigger");
        this.root.classList.remove("md-ripple--bounded");
        this.root.classList.remove("md-ripple");
        this.trigger.removeEventListener("mouseenter", this.handleMouseenter);
        this.trigger.removeEventListener("mouseleave", this.handleMouseleave);
        this.trigger.removeEventListener("mousedown", this.handleMousedown);
        // // this.trigger.removeEventListener("mouseup", this.handleMouseup);
        this.trigger.removeEventListener("focus", this.handleFocus);
        this.trigger.removeEventListener("blur", this.handleBlur);
    }

    /**
     * Handles the mouseenter event to add the "md-ripple--hover" class.
     * @private
     * @param {MouseEvent} event - The mouseenter event.
     */
    handleMouseenter(event) {
        this.root.classList.add("md-ripple--hover");
    }

    /**
     * Handles the mouseleave event to remove the "md-ripple--hover" class.
     * @private
     * @param {MouseEvent} event - The mouseleave event.
     */
    handleMouseleave(event) {
        this.root.classList.remove("md-ripple--hover");
    }

    /**
     * Handles the mousedown event to trigger the ripple effect.
     * @private
     * @param {MouseEvent} event - The mousedown event.
     */
    handleMousedown(event) {
        this.root.addEventListener("animationend", this.handleAnimationend);
        window.addEventListener("mouseup", this.handleMouseup);

        this.root.classList.add("md-ripple--pressed");

        this.root.style.setProperty("--md-ripple", "none");
        this.root.style.setProperty("--md-ripple-fadeout", "none");

        const rect = this.root.getBoundingClientRect();

        if (!this.options.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.options.diameter);
            const y = (0.5 - top) * ((100 / this.options.diameter) * (rect.height / rect.width));

            this.root.style.setProperty("--md-ripple-diameter", this.options.diameter + "%");
            this.root.style.setProperty("--md-ripple-left", left * 100 + "%");
            this.root.style.setProperty("--md-ripple-top", top * 100 + "%");
            this.root.style.setProperty("--md-ripple-x", x * 100 + "%");
            this.root.style.setProperty("--md-ripple-y", y * 100 + "%");
        }

        // this.root.style.removeProperty("--md-ripple");
        // this.root.style.removeProperty("--md-ripple-fadeout");
        this.root.style.setProperty("--md-ripple", "md-ripple");
        this.root.style.setProperty("--md-ripple-fadeout", "md-ripple-fadeout");
    }

    /**
     * Handles the mouseup event to finish the ripple effect.
     * @private
     * @param {MouseEvent} event - The mouseup event.
     */
    handleMouseup(event) {
        this.root.classList.remove("md-ripple--pressed");
        window.removeEventListener("mouseup", this.handleMouseup);
    }

    /**
     * Handles the focus event to add the "md-ripple--focused" class.
     * @private
     * @param {FocusEvent} event - The focus event.
     */
    handleFocus(event) {
        this.root.classList.add("md-ripple--focused");
    }

    /**
     * Handles the blur event to remove the "md-ripple--focused" class.
     * @private
     * @param {FocusEvent} event - The blur event.
     */
    handleBlur(event) {
        this.root.classList.remove("md-ripple--focused");
    }

    handleAnimationend(event) {
        if (event.animationName === "md-ripple-fadeout") {
            this.root.style.removeProperty("--md-ripple");
            this.root.style.removeProperty("--md-ripple-fadeout");
            this.root.removeEventListener("animationend", this.handleAnimationend);
        }
    }
}

export { MDRipple };
