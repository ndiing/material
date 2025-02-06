/**
 */
class RippleController {
    /**
     * @param {String} [host]
     * @param {String} [options]
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            // animation:undefined,
            centered: false,
            // color:undefined,
            // disabled:false,
            radius: undefined,
            trigger: undefined,
            unbounded: false,
            container: undefined,
            ...options,
        };
    }

    /**
     * @async
     */
    async hostConnected() {
        await this.host.updateComplete;
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
        this.handlePointerenter = this.handlePointerenter.bind(this);
        this.handlePointerleave = this.handlePointerleave.bind(this);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.trigger.addEventListener("pointerenter", this.handlePointerenter);
        this.trigger.addEventListener("pointerleave", this.handlePointerleave);
        this.trigger.addEventListener("pointerdown", this.handlePointerdown);
        this.trigger.addEventListener("focus", this.handleFocus);
        this.trigger.addEventListener("blur", this.handleBlur);
    }

    /**
     * @async
     */
    async hostDisconnected() {
        await this.host.updateComplete;
        this.container.classList.remove("md-ripple");
        this.container.removeAttribute("tabIndex");
        this.trigger.classList.remove("md-ripple--trigger");
        this.trigger.classList.remove("md-ripple--bounded");
        this.trigger.removeEventListener("pointerenter", this.handlePointerenter);
        this.trigger.removeEventListener("pointerleave", this.handlePointerleave);
        this.trigger.removeEventListener("pointerdown", this.handlePointerdown);
        this.trigger.removeEventListener("focus", this.handleFocus);
        this.trigger.removeEventListener("blur", this.handleBlur);
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handlePointerenter(event) {
        this.container.classList.add("md-ripple--hover");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handlePointerleave(event) {
        this.container.classList.remove("md-ripple--hover");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handlePointerdown(event) {
        window.addEventListener("pointerup", this.handlePointerup);
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

    /**
     * @private
     * @param {Object} [event]
     */
    handlePointerup(event) {
        this.container.classList.remove("md-ripple--press");
        window.removeEventListener("pointerup", this.handlePointerup);
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleFocus(event) {
        this.container.classList.add("md-ripple--focus");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleBlur(event) {
        this.container.classList.remove("md-ripple--focus");
    }
}
export { RippleController };
