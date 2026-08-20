/**
 * @class RippleController
 */
class RippleController {
    constructor(host, options = {}) {
        this.host = host;

        this.setOptions(options);

        if (this.register) {
            (this.host = host).addController(this);
        }

        this._handlePointerenter = this._handlePointerenter.bind(this);
        this._handlePointerleave = this._handlePointerleave.bind(this);
        this._handlePointerdown = this._handlePointerdown.bind(this);
        this._handlePointerup = this._handlePointerup.bind(this);
        this._handleFocus = this._handleFocus.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
    }

    /**
     *
     */
    setOptions(options) {
        this.centered = options.centered ?? this.centered ?? false;
        this.radius = options.radius ?? this.radius;
        this.unbounded = options.unbounded ?? this.unbounded ?? false;
        this.trigger = options.trigger ?? this.trigger;
        this.container = options.container ?? this.container;
        this.register = options.register ?? this.register ?? true;
    }

    _handlePointerenter(event) {
        this.containerElement.classList.add("md-ripple--hover");
    }

    _handlePointerleave(event) {
        this.containerElement.classList.remove("md-ripple--hover");
    }

    _handlePointerdown(event) {
        window.addEventListener("pointerup", this._handlePointerup, { passive: true });
        window.addEventListener("touchend", this._handlePointerup, { passive: true });

        this.containerElement.classList.add("md-ripple--press");

        const rect = this.containerElement.getBoundingClientRect();

        let radius;
        if (this.radius) {
            radius = (this.radius / rect.width) * 100;
        } else {
            const hypotenuse = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2));
            radius = (hypotenuse / rect.width) * 100;
        }

        this.containerElement.style.setProperty("--md-comp-ripple-radius", `${radius}%`);

        if (!this.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / radius);
            const y = (0.5 - top) * ((100 / radius) * (rect.height / rect.width));

            this.containerElement.style.setProperty("--md-comp-ripple-left", left * 100 + "%");
            this.containerElement.style.setProperty("--md-comp-ripple-top", top * 100 + "%");
            this.containerElement.style.setProperty("--md-comp-ripple-x", x * 100 + "%");
            this.containerElement.style.setProperty("--md-comp-ripple-y", y * 100 + "%");
        }
    }

    _handlePointerup(event) {
        this.containerElement.classList.remove("md-ripple--press");

        window.removeEventListener("pointerup", this._handlePointerup);
        window.removeEventListener("touchend", this._handlePointerup);
    }

    _handleFocus(event) {
        this.containerElement.classList.add("md-ripple--focus");
    }

    _handleBlur(event) {
        this.containerElement.classList.remove("md-ripple--focus");
    }

    /**
     *
     */
    init() {
        this.containerElement = (typeof this.container === "string" ? this.host.querySelector(this.container) : this.container) ?? this.host;
        this.triggerElement = (typeof this.trigger === "string" ? this.host.querySelector(this.trigger) : this.trigger) ?? this.host;

        this.containerElement.classList.add("md-ripple");

        if (!this.unbounded) {
            this.containerElement.classList.add("md-ripple--bounded");
        }

        this.triggerElement.classList.add("md-ripple--trigger");

        this.triggerElement.addEventListener("pointerenter", this._handlePointerenter);
        this.triggerElement.addEventListener("pointerleave", this._handlePointerleave);
        this.triggerElement.addEventListener("pointerdown", this._handlePointerdown);
        this.triggerElement.addEventListener("focus", this._handleFocus);
        this.triggerElement.addEventListener("blur", this._handleBlur);
    }

    /**
     *
     */
    destroy() {
        this.containerElement.classList.remove("md-ripple");
        this.containerElement.classList.remove("md-ripple--bounded");
        this.containerElement.classList.remove("md-ripple--hover");
        this.containerElement.classList.remove("md-ripple--press");
        this.containerElement.classList.remove("md-ripple--focus");

        this.containerElement.style.removeProperty("--md-comp-ripple-radius");
        this.containerElement.style.removeProperty("--md-comp-ripple-left");
        this.containerElement.style.removeProperty("--md-comp-ripple-top");
        this.containerElement.style.removeProperty("--md-comp-ripple-x");
        this.containerElement.style.removeProperty("--md-comp-ripple-y");

        this.triggerElement.classList.remove("md-ripple--trigger");

        this.triggerElement.removeEventListener("pointerenter", this._handlePointerenter);
        this.triggerElement.removeEventListener("pointerleave", this._handlePointerleave);
        this.triggerElement.removeEventListener("pointerdown", this._handlePointerdown);
        this.triggerElement.removeEventListener("focus", this._handleFocus);
        this.triggerElement.removeEventListener("blur", this._handleBlur);

        this.containerElement = null;
        this.triggerElement = null;
    }

    /**
     *
     */
    reinit(options) {
        this.setOptions(options);
        this.host.updateComplete.then(() => {
            this.destroy();
            this.init();
        });
    }

    /**
     *
     */
    hostConnected() {
        this.host.updateComplete.then(() => {
            this.init();
        });
    }

    /**
     *
     */
    hostDisconnected() {
        this.destroy();
    }
}

export { RippleController };
