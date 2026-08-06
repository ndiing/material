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
        if (!this.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.r);
            const y = (0.5 - top) * ((100 / this.r) * (rect.height / rect.width));
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

    async init() {
        await this.host.updateComplete;
        this.containerElement = this.container ? (typeof this.container === "string" ? this.host.querySelector(this.container) : this.container) : this.host;
        this.containerElement.classList.add("md-ripple");
        if (!this.unbounded) {
            this.containerElement.classList.add("md-ripple--bounded");
        }
        const rect = {
            width: this.containerElement.clientWidth,
            height: this.containerElement.clientHeight,
        };
        if (this.radius) {
            this.r = (this.radius / rect.width) * 100;
        } else {
            const hypotenuse = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2));
            this.r = (hypotenuse / rect.width) * 100;
        }
        this.containerElement.style.setProperty("--md-comp-ripple-radius", `${this.r}%`);
        this.triggerElement = this.trigger ? (typeof this.trigger === "string" ? this.host.querySelector(this.trigger) : this.trigger) : this.host;
        this.triggerElement.classList.add("md-ripple--trigger");
        this.triggerElement.addEventListener("pointerenter", this._handlePointerenter);
        this.triggerElement.addEventListener("pointerleave", this._handlePointerleave);
        this.triggerElement.addEventListener("pointerdown", this._handlePointerdown);
        this.triggerElement.addEventListener("focus", this._handleFocus);
        this.triggerElement.addEventListener("blur", this._handleBlur);
    }

    async destroy() {
        await this.host.updateComplete;
        this.containerElement.classList.remove("md-ripple");
        this.containerElement.classList.remove("md-ripple--bounded");
        this.containerElement.style.removeProperty("--md-comp-ripple-radius");
        this.triggerElement.classList.remove("md-ripple--trigger");
        this.triggerElement.removeEventListener("pointerenter", this._handlePointerenter);
        this.triggerElement.removeEventListener("pointerleave", this._handlePointerleave);
        this.triggerElement.removeEventListener("pointerdown", this._handlePointerdown);
        this.triggerElement.removeEventListener("focus", this._handleFocus);
        this.triggerElement.removeEventListener("blur", this._handleBlur);
    }

    async reinit(options) {
        this.setOptions(options);
        await this.destroy();
        await this.init();
    }

    async hostConnected() {
        await this.init();
    }

    async hostDisconnected() {
        await this.destroy();
    }

    // hostUpdate(){}
    // hostUpdated(){}
}

export { RippleController };
