import { MdLibrary } from "../library/library.js";

/**
 * Class representing an MdRipple instance.
 * @extends MdLibrary
 * @class
 * @classdesc Creates a material design ripple effect on an element.
 * @author Ridho Prasetya
 */
class MdRipple extends MdLibrary {
     /**
     * Creates an MdRipple instance.
     * @param {HTMLElement|null} root - The root element for MdRipple.
     * @param {Object} [options] - The options for MdRipple.
     * @param {boolean} [options.bounded=true] - Indicates whether the ripple effect is bounded within the element.
     * @param {HTMLElement|null} [options.trigger=null] - The element that triggers the ripple effect.
     *   If not provided, defaults to the root element.
     * @param {boolean} [options.centered=false] - Indicates whether the ripple effect is centered around the pointer coordinates.
     */
    constructor(...args){
        super(...args)
    }

    /**
     * Initializes MdRipple.
     */
    init() {
        // Adding classes and attributes for ripple effect
        this.root.classList.add("md-ripple");

        if (this.options.bounded !== false) this.root.classList.add("md-ripple--bounded");

        this.trigger = this.options.trigger ?? this.root;
        this.trigger.classList.add("md-ripple--trigger");
        this.trigger.setAttribute("tabIndex", 0);

        // Calculating diameter and setting CSS property for ripple effect
        const rect = this.root.getBoundingClientRect();
        const max = Math.max(rect.width, rect.height);
        const min = Math.min(rect.width, rect.height);
        const diameter = (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / min) * 100;
        this.root.style.setProperty("--md-ripple-diameter", diameter + "%");

        // Binding event handlers
        this.handlePointerenter = this.handlePointerenter.bind(this);
        this.handlePointerleave = this.handlePointerleave.bind(this);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        // Adding event listeners for different pointer and focus events
        this.trigger.addEventListener("pointerenter", this.handlePointerenter);
        this.trigger.addEventListener("pointerleave", this.handlePointerleave);
        this.trigger.addEventListener("pointerdown", this.handlePointerdown);
        // this.trigger.addEventListener("pointerup", this.handlePointerup); // This line is commented out in the original code
        this.trigger.addEventListener("focus", this.handleFocus);
        this.trigger.addEventListener("blur", this.handleBlur);
    }

    /**
     * Destroys MdRipple by removing event listeners.
     */
    destory() {
        this.trigger.removeEventListener("pointerenter", this.handlePointerenter);
        this.trigger.removeEventListener("pointerleave", this.handlePointerleave);
        this.trigger.removeEventListener("pointerdown", this.handlePointerdown);
        // this.trigger.removeEventListener("pointerup", this.handlePointerup); // This line is commented out in the original code
        this.trigger.removeEventListener("focus", this.handleFocus);
        this.trigger.removeEventListener("blur", this.handleBlur);
    }

    // Event handler methods with JSDoc comments
    /**
     * Handles pointer entering the element.
     * @private
     * @param {PointerEvent} event - The PointerEvent object.
     */
    handlePointerenter(event) {
        this.root.classList.add("md-ripple--hovered");
    }

    /**
     * Handles pointer leaving the element.
     * @private
     * @param {PointerEvent} event - The PointerEvent object.
     */
    handlePointerleave(event) {
        this.root.classList.remove("md-ripple--hovered");
    }

    /**
     * Handles pointer down event on the element.
     * @private
     * @param {PointerEvent} event - The PointerEvent object.
     */
    handlePointerdown(event) {
        // Adding event listener for pointerup
        window.addEventListener("pointerup", this.handlePointerup);

        // Adding classes and properties for ripple effect
        this.root.classList.add("md-ripple--pressed");
        this.root.style.setProperty("--md-ripple-animation", "none");

        const rect = this.root.getBoundingClientRect();

        if (this.options.centered !== true) {
            // Calculating ripple properties based on pointer coordinates
            const max = Math.max(rect.width, rect.height);
            const min = Math.min(rect.width, rect.height);
            const diameter = (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / min) * 100;
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / diameter);
            const y = (0.5 - top) * ((100 / diameter) * (max / min));

            // Setting ripple properties
            this.root.style.setProperty("--md-ripple-diameter", diameter + "%");
            this.root.style.setProperty("--md-ripple-left", left * 100 + "%");
            this.root.style.setProperty("--md-ripple-top", top * 100 + "%");
            this.root.style.setProperty("--md-ripple-x", x * 100 + "%");
            this.root.style.setProperty("--md-ripple-y", y * 100 + "%");
        }

        // Removing animation property
        this.root.style.removeProperty("--md-ripple-animation");
    }

    /**
     * Handles pointer up event on the element.
     * @private
     * @param {PointerEvent} event - The PointerEvent object.
     */
    handlePointerup(event) {
        this.root.classList.remove("md-ripple--pressed");
        window.removeEventListener("pointerup", this.handlePointerup);
    }

    /**
     * Handles focus event on the element.
     * @private
     * @param {FocusEvent} event - The FocusEvent object.
     */
    handleFocus(event) {
        this.root.classList.add("md-ripple--focused");
    }

    /**
     * Handles blur event on the element.
     * @private
     * @param {FocusEvent} event - The FocusEvent object.
     */
    handleBlur(event) {
        this.root.classList.remove("md-ripple--focused");
    }
}

export { MdRipple };
