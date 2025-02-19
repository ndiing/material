/**
 * Ripple class responsible for managing ripple effects on elements.
 */
class Ripple {
    /**
     * @typedef {Object} RippleOptions
     * @property {boolean} [centered=false] - Whether the ripple effect is centered.
     * @property {number} [radius] - The radius of the ripple effect.
     * @property {HTMLElement|string} [trigger] - The trigger element or selector for the ripple effect.
     * @property {boolean} [unbounded=false] - Whether the ripple effect is unbounded.
     * @property {HTMLElement|string} [container] - The container element or selector for the ripple effect.
     */

    /**
     * Creates an instance of the Ripple class.
     * @param {HTMLElement} host - The host element.
     * @param {RippleOptions} [options] - Additional options for the ripple effect.
     */
    constructor(host, options) {
        this.host = host;
        this.options = {
            centered: false,
            radius: undefined,
            trigger: undefined,
            unbounded: false,
            container: undefined,
            ...options,
        };

        this.init();
    }

    /**
     * Initializes the ripple effect.
     * @async
     */
    async init() {
        this.container = this.host;

        if (this.options.container) {
            if (typeof this.options.container === "string") {
                this.container = this.host.querySelector(this.options.container);
            } else {
                this.container = this.options.container;
            }
        }
        this.trigger = this.host;

        if (this.options.trigger) {
            if (typeof this.options.trigger === "string") {
                this.trigger = this.host.querySelector(this.options.trigger);
            } else {
                this.trigger = this.options.trigger;
            }
        }
        this.container.classList.add("md-ripple");
        this.container.classList.toggle("md-ripple--bounded", !this.options.unbounded);
        this.container.setAttribute("tabIndex", 0);
        this.trigger.classList.add("md-ripple--trigger");
        this.radius = 141.4213562373095;

        if (this.options.radius) {
            this.radius = (this.options.radius / this.container.clientWidth) * 100;
        }
        this.container.style.setProperty("--md-comp-ripple-radius", this.radius + "%");
        this.handleRippleHoverIn = this.handleRippleHoverIn.bind(this);
        this.handleRippleHoverOut = this.handleRippleHoverOut.bind(this);
        this.handleRipplePressIn = this.handleRipplePressIn.bind(this);
        this.handleRipplePressOut = this.handleRipplePressOut.bind(this);
        this.handleRippleFocusIn = this.handleRippleFocusIn.bind(this);
        this.handleRippleFocusOut = this.handleRippleFocusOut.bind(this);
        this.trigger.addEventListener("pointerenter", this.handleRippleHoverIn);
        this.trigger.addEventListener("pointerleave", this.handleRippleHoverOut);
        this.trigger.addEventListener("pointerdown", this.handleRipplePressIn);
        this.trigger.addEventListener("focus", this.handleRippleFocusIn);
        this.trigger.addEventListener("blur", this.handleRippleFocusOut);
    }

    /**
     * Destroys the ripple effect.
     * @async
     */
    async destroy() {
        if (this.container) {
            this.container.classList.remove("md-ripple");
            this.container.classList.remove("md-ripple--bounded");
            this.container.removeAttribute("tabIndex");
            this.container.style.removeProperty("--md-comp-ripple-radius");
        }

        if (this.trigger) {
            this.trigger.classList.remove("md-ripple--trigger");
            this.trigger.removeEventListener("pointerenter", this.handleRippleHoverIn);
            this.trigger.removeEventListener("pointerleave", this.handleRippleHoverOut);
            this.trigger.removeEventListener("pointerdown", this.handleRipplePressIn);
            this.trigger.removeEventListener("focus", this.handleRippleFocusIn);
            this.trigger.removeEventListener("blur", this.handleRippleFocusOut);
        }
        this.container = null;
        this.trigger = null;
    }

    // /**
    //  * Handles the ripple hover-in event.
    //  * @param {Event} event - The hover-in event.
    //  */
    handleRippleHoverIn(event) {
        this.container.classList.add("md-ripple--hover");
    }

    // /**
    //  * Handles the ripple hover-out event.
    //  * @param {Event} event - The hover-out event.
    //  */
    handleRippleHoverOut(event) {
        this.container.classList.remove("md-ripple--hover");
    }

    // /**
    //  * Handles the ripple press-in event.
    //  * @param {Event} event - The press-in event.
    //  */
    handleRipplePressIn(event) {
        window.addEventListener("pointerup", this.handleRipplePressOut, { passive: true });
        window.addEventListener("touchend", this.handleRipplePressOut, { passive: true });
        this.container.classList.add("md-ripple--press");
        const rect = this.container.getBoundingClientRect();

        if (!this.options.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.radius);
            const y = (0.5 - top) * ((100 / this.radius) * (rect.height / rect.width));
            this.container.style.setProperty("--md-comp-ripple-radius", this.radius + "%");
            this.container.style.setProperty("--md-comp-ripple-left", left * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-top", top * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-x", x * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-y", y * 100 + "%");
        }
    }

    // /**
    //  * Handles the ripple press-out event.
    //  * @param {Event} event - The press-out event.
    //  */
    handleRipplePressOut(event) {
        window.removeEventListener("pointerup", this.handleRipplePressOut);
        window.removeEventListener("touchend", this.handleRipplePressOut);
        this.container.classList.remove("md-ripple--press");
    }

    // /**
    //  * Handles the ripple focus-in event.
    //  * @param {Event} event - The focus-in event.
    //  */
    handleRippleFocusIn(event) {
        this.container.classList.add("md-ripple--focus");
    }

    // /**
    //  * Handles the ripple focus-out event.
    //  * @param {Event} event - The focus-out event.
    //  */
    handleRippleFocusOut(event) {
        this.container.classList.remove("md-ripple--focus");
    }
}

export { Ripple };
