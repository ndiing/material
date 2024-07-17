/**
 * The MDRippleController class provides ripple effects for Material Design components.
 */
class MDRippleController {
    /**
     * Creates an instance of MDRippleController.
     * @param {HTMLElement} host - The host element that this controller will be attached to.
     * @param {Object} [options={}] - Options to configure the ripple effect.
     * @param {string|HTMLElement|null} [options.container=null] - The container for the ripple effect.
     * @param {string|HTMLElement|null} [options.button=null] - The button element that triggers the ripple effect.
     * @param {boolean} [options.centered=false] - Whether the ripple effect should be centered.
     * @param {boolean} [options.clipped=false] - Whether the ripple effect should be clipped to the container.
     * @param {boolean} [options.fadeOut=false] - Whether the ripple effect should fade out.
     * @param {number|null} [options.size=null] - The size of the ripple effect.
     */
    constructor(host, options = {}) {
        (this.host = host).addController(this);
        this.options = {
            container: null,
            button: null,
            centered: false,
            clipped: false,
            fadeOut: false,
            size: null,
            ...options,
        };
    }

    /**
     * Gets the container for the ripple effect.
     * @returns {HTMLElement} - The container element.
     */
    get container() {
        return this._container;
    }

    /**
     * Sets the container for the ripple effect.
     * @param {string|HTMLElement|null} value - The container selector or element.
     */
    set container(value) {
        if (this._container !== value) {
            if (this.container) {
                this.container.classList.remove("md-ripple");
            }

            if (value) {
                if (typeof value === "string") {
                    this._container = this.host.querySelector(value);
                } else {
                    this._container = value;
                }
            } else {
                this._container = this.host;
            }

            this.container.classList.add("md-ripple");
        }
    }

    /**
     * Gets the button element that triggers the ripple effect.
     * @returns {HTMLElement} - The button element.
     */
    get button() {
        return this._button;
    }

    /**
     * Sets the button element that triggers the ripple effect.
     * @param {string|HTMLElement|null} value - The button selector or element.
     */
    set button(value) {
        if (this._button !== value) {
            if (this.button) {
                this.button.classList.remove("md-ripple--button");
                this.button.removeAttribute("tabIndex");
            }

            if (value) {
                if (typeof value === "string") {
                    this._button = this.host.querySelector(value);
                } else {
                    this._button = value;
                }
            } else {
                this._button = this.container;
            }

            this.button.classList.add("md-ripple--button");
            this.button.setAttribute("tabIndex", 0);
        }
    }

    /**
     * Gets whether the ripple effect is centered.
     * @returns {boolean} - True if the ripple is centered, false otherwise.
     */
    get centered() {
        return this._centered;
    }

    /**
     * Sets whether the ripple effect is centered.
     * @param {boolean} value - True to center the ripple, false otherwise.
     */
    set centered(value) {
        if (this._centered !== value) {
            if (this.container) {
                this.container.classList.remove("md-ripple--centered");
            }

            this._centered = value;

            this.container.classList.add("md-ripple--centered");
        }
    }

    /**
     * Gets whether the ripple effect is clipped to the container.
     * @returns {boolean} - True if the ripple is clipped, false otherwise.
     */
    get clipped() {
        return this._clipped;
    }

    /**
     * Sets whether the ripple effect is clipped to the container.
     * @param {boolean} value - True to clip the ripple, false otherwise.
     */
    set clipped(value) {
        if (this._clipped !== value) {
            if (this.container) {
                this.container.classList.remove("md-ripple--clipped");
            }

            this._clipped = value;

            this.container.classList.add("md-ripple--clipped");
        }
    }

    /**
     * Gets whether the ripple effect fades out.
     * @returns {boolean} - True if the ripple fades out, false otherwise.
     */
    get fadeOut() {
        return this._fadeOut;
    }

    /**
     * Sets whether the ripple effect fades out.
     * @param {boolean} value - True to enable fade out, false otherwise.
     */
    set fadeOut(value) {
        if (this._fadeOut !== value) {
            if (this.container) {
                this.container.classList.remove("md-ripple--fade-out");
            }

            this._fadeOut = value;

            this.container.classList.add("md-ripple--fade-out");
        }
    }

    /**
     * Gets the size of the ripple effect.
     * @returns {number} - The size of the ripple as a percentage of the container width.
     */
    get size() {
        if (this._size) {
            return (this._size / this.container.clientWidth) * 100;
        }

        return (Math.sqrt(Math.pow(this.container.clientWidth, 2) + Math.pow(this.container.clientHeight, 2)) / this.container.clientWidth) * 100;
    }

    /**
     * Sets the size of the ripple effect.
     * @param {number|null} value - The size of the ripple as a percentage of the container width.
     */
    set size(value) {
        if (this._size !== value) {
            if (this.container) {
                this.container.style.removeProperty("--md-comp-ripple-size");
            }

            this._size = value;

            this.container.style.setProperty("--md-comp-ripple-size", `${this.size}%`);
        }
    }

    /**
     * Called when the host element is connected to the DOM.
     * @private
     */
    async hostConnected() {
        await this.host.updateComplete;

        this.container = this.options.container;
        this.button = this.options.button;
        this.centered = this.options.centered;
        this.clipped = this.options.clipped;
        this.fadeOut = this.options.fadeOut;
        this.size = this.options.size;

        this.container.style.setProperty("--md-comp-ripple-animation", "none");

        this.handleRipplePointerenter = this.handleRipplePointerenter.bind(this);
        this.handleRipplePointerleave = this.handleRipplePointerleave.bind(this);
        this.handleRipplePointerdown = this.handleRipplePointerdown.bind(this);
        this.handleRipplePointerup = this.handleRipplePointerup.bind(this);
        this.handleRippleFocus = this.handleRippleFocus.bind(this);
        this.handleRippleBlur = this.handleRippleBlur.bind(this);

        this.button.addEventListener("pointerenter", this.handleRipplePointerenter);
        this.button.addEventListener("pointerleave", this.handleRipplePointerleave);
        this.button.addEventListener("pointerdown", this.handleRipplePointerdown);
        this.button.addEventListener("focus", this.handleRippleFocus);
        this.button.addEventListener("blur", this.handleRippleBlur);
    }

    /**
     * Called when the host element is disconnected from the DOM.
     * @private
     */
    async hostDisconnected() {
        await this.host.updateComplete;

        this.button.removeEventListener("pointerenter", this.handleRipplePointerenter);
        this.button.removeEventListener("pointerleave", this.handleRipplePointerleave);
        this.button.removeEventListener("pointerdown", this.handleRipplePointerdown);
        this.button.removeEventListener("focus", this.handleRippleFocus);
        this.button.removeEventListener("blur", this.handleRippleBlur);
    }

    /**
     * Handles the pointerenter event for the ripple effect.
     * @private
     */
    handleRipplePointerenter() {
        this.container.style.removeProperty("--md-comp-ripple-animation");

        this.container.classList.add("md-ripple--hover");
    }

    /**
     * Handles the pointerleave event for the ripple effect.
     * @private
     */
    handleRipplePointerleave() {
        this.container.classList.remove("md-ripple--hover");
    }

    /**
     * Handles the pointerdown event for the ripple effect.
     * @private
     * @param {PointerEvent} event - The pointerdown event.
     */
    handleRipplePointerdown(event) {
        this.container.classList.add("md-ripple--pressed");

        window.addEventListener("pointerup", this.handleRipplePointerup);

        this.container.style.setProperty("--md-comp-ripple-animation", "none");

        const rect = this.container.getBoundingClientRect();

        this.container.style.removeProperty("--md-comp-ripple-animation");

        if (!this.options.centered) {
            const size = this.size;
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / size);
            const y = (0.5 - top) * ((100 / size) * (rect.height / rect.width));

            this.container.style.setProperty("--md-comp-ripple-size", `${size}%`);
            this.container.style.setProperty("--md-comp-ripple-left", `${left * 100}%`);
            this.container.style.setProperty("--md-comp-ripple-top", `${top * 100}%`);
            this.container.style.setProperty("--md-comp-ripple-x", `${x * 100}%`);
            this.container.style.setProperty("--md-comp-ripple-y", `${y * 100}%`);
        }
    }

    /**
     * Handles the pointerup event for the ripple effect.
     * @private
     */
    handleRipplePointerup() {
        this.container.classList.remove("md-ripple--pressed");

        window.removeEventListener("pointerup", this.handleRipplePointerup);
    }

    /**
     * Handles the focus event for the ripple effect.
     * @private
     */
    handleRippleFocus() {
        this.container.classList.add("md-ripple--focused");
    }

    /**
     * Handles the blur event for the ripple effect.
     * @private
     */
    handleRippleBlur() {
        this.container.classList.remove("md-ripple--focused");
    }
}
export { MDRippleController };
