/**
 * Controller class for managing ripple effects on a host element.
 */
class MDRippleController {
    /**
     * Constructs a new instance of MDRippleController.
     * @param {HTMLElement} host - The host element to attach ripple effects to.
     * @param {Object} options - Options for configuring the ripple behavior.
     * @param {HTMLElement} options.button - The button element to use for the ripple effect.
     * @param {HTMLElement} options.container - The container element to apply the ripple effect within.
     * @param {String} options.buttonSelector - CSS selector for the button element.
     * @param {String} options.containerSelector - CSS selector for the container element.
     * @param {Boolean} options.centered - Whether the ripple should be centered.
     * @param {Boolean} options.clipped - Whether the ripple effect should be clipped.
     * @param {Boolean} options.fadeOut - Whether the ripple effect should fade out.
     * @param {Number} options.size - Size of the ripple effect relative to the container.
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

    get container() {
        return this._container;
    }

    set container(value) {
        if (this._value !== value) {
            if (typeof value === "string") {
                this._container = this.host.querySelector(value);
            } else if (value) {
                this._container = value;
            } else {
                this._container = this.host;
            }
            this.container.classList.add("md-ripple");
        }
    }

    get button() {
        return this._button;
    }

    set button(value) {
        if (this._value !== value) {
            if (typeof value === "string") {
                this._button = this.host.querySelector(value);
            } else if (value) {
                this._button = value;
            } else {
                this._button = this.container;
            }
            this.button.classList.add("md-ripple--button");
            this.button.setAttribute("tabIndex", 0);
        }
    }

    get centered() {
        return this._centered;
    }

    set centered(value) {
        if (this._value !== value) {
            this._centered = value;
            this.container.classList.toggle("md-ripple--centered", !!this.centered);
        }
    }

    get clipped() {
        return this._clipped;
    }

    set clipped(value) {
        if (this._value !== value) {
            this._clipped = value;
            this.container.classList.toggle("md-ripple--clipped", !!this.clipped);
        }
    }

    get fadeOut() {
        return this._fadeOut;
    }

    set fadeOut(value) {
        if (this._value !== value) {
            this._fadeOut = value;
            this.container.classList.toggle("md-ripple--fade-out", !!this.fadeOut);
        }
    }

    get size() {
        if (this._size) {
            return (this._size / this.container.clientWidth) * 100;
        }
        return (Math.sqrt(Math.pow(this.container.clientWidth, 2) + Math.pow(this.container.clientHeight, 2)) / this.container.clientWidth) * 100;
    }

    set size(value) {
        if (this._value !== value) {
            this._size = value;
            this.container.style.setProperty("--md-comp-ripple-size", `${this.size}%`);
        }
    }

    /**
     * Performs tasks when the host element is connected to the DOM.
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
     * Performs tasks when the host element is disconnected from the DOM.
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
     * Handles the pointer enter event to initiate the ripple effect.
     * @private
     */
    handleRipplePointerenter() {
        this.container.style.removeProperty("--md-comp-ripple-animation");

        this.container.classList.add("md-ripple--hover");
    }

    /**
     * Handles the pointer leave event to remove the hover effect.
     * @private
     */
    handleRipplePointerleave() {
        this.container.classList.remove("md-ripple--hover");
    }

    /**
     * Handles the pointer down event to start the ripple effect animation.
     * @private
     * @param {PointerEvent} event - The pointer down event.
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
     * Handles the pointer up event to end the ripple effect animation.
     * @private
     */
    handleRipplePointerup() {
        this.container.classList.remove("md-ripple--pressed");

        window.removeEventListener("pointerup", this.handleRipplePointerup);
    }

    /**
     * Handles the focus event to add focus effect.
     * @private
     */
    handleRippleFocus() {
        this.container.classList.add("md-ripple--focused");
    }

    /**
     * Handles the blur event to remove focus effect.
     * @private
     */
    handleRippleBlur() {
        this.container.classList.remove("md-ripple--focused");
    }
}
export { MDRippleController };
