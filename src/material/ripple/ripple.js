import { MDController } from "../base/controller";

class MDRippleController extends MDController {
    constructor(host, options = {}) {
        super(host, {
            // default options
            container: host,
            button: host,
            containment: true,
            inverted: false,
            fadeout: false,
            size: null,
            centered: false,
            ...options,
        });
    }

    hostConnected() {
        // container
        this.options.container.classList.add("md-ripple");

        // button
        this.options.button.classList.add("md-ripple__button");
        this.options.button.setAttribute("tabIndex", 0);

        // layer
        this.layer = document.createElement("span");
        this.layer.classList.add("md-ripple__layer");
        this.options.container.append(this.layer);

        // containment
        if (this.options.containment) {
            this.options.container.classList.add("md-ripple--containment");
        } else {
            this.options.container.classList.remove("md-ripple--containment");
        }

        // inverted
        if (this.options.inverted) {
            this.options.container.classList.add("md-ripple--inverted");
        } else {
            this.options.container.classList.remove("md-ripple--inverted");
        }

        // fadeout
        if (this.options.fadeout) {
            this.options.container.classList.add("md-ripple--fadeout");
        } else {
            this.options.container.classList.remove("md-ripple--fadeout");
        }

        // size
        if (!this.options.size) {
            const rect = this.options.container.getBoundingClientRect();
            const size = (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / rect.width) * 100;
            this.options.size = size;
        }
        this.layer.style.setProperty("width", `${this.options.size}%`);

        // binding
        this.handleRipplePointerenter = this.handleRipplePointerenter.bind(this);
        this.handleRipplePointerleave = this.handleRipplePointerleave.bind(this);
        this.handleRipplePointerdown = this.handleRipplePointerdown.bind(this);
        this.handleRipplePointerup = this.handleRipplePointerup.bind(this);
        this.handleRippleFocus = this.handleRippleFocus.bind(this);
        this.handleRippleBlur = this.handleRippleBlur.bind(this);

        // listen
        this.options.button.addEventListener("pointerenter", this.handleRipplePointerenter);
        this.options.button.addEventListener("pointerleave", this.handleRipplePointerleave);
        this.options.button.addEventListener("pointerdown", this.handleRipplePointerdown);
        this.options.button.addEventListener("pointerup", this.handleRipplePointerup);
        this.options.button.addEventListener("focus", this.handleRippleFocus);
        this.options.button.addEventListener("blur", this.handleRippleBlur);
    }

    hostDisconnected() {
        // container
        this.options.container.classList.remove("md-ripple");

        // button
        this.options.button.classList.remove("md-ripple__button");
        this.options.button.removeAttribute("tabIndex");

        // layer
        this.layer.remove();

        // containment
        this.options.container.classList.remove("md-ripple--containment");

        // inverted
        this.options.container.classList.remove("md-ripple--inverted");

        // fadeout
        this.options.container.classList.remove("md-ripple--fadeout");

        // listen
        this.options.button.removeEventListener("pointerenter", this.handleRipplePointerenter);
        this.options.button.removeEventListener("pointerleave", this.handleRipplePointerleave);
        this.options.button.removeEventListener("pointerdown", this.handleRipplePointerdown);
        this.options.button.removeEventListener("pointerup", this.handleRipplePointerup);
        this.options.button.removeEventListener("focus", this.handleRippleFocus);
        this.options.button.removeEventListener("blur", this.handleRippleBlur);
    }

    handleRipplePointerenter(event) {
        this.options.container.classList.add("md-ripple--hover");
    }

    handleRipplePointerleave(event) {
        this.options.container.classList.remove("md-ripple--hover");
    }

    handleRipplePointerdown(event) {
        window.addEventListener("pointerup", this.handleRipplePointerup);

        this.options.container.classList.add("md-ripple--pressed");

        this.layer.style.setProperty("animation-name", "none");

        const rect = this.options.container.getBoundingClientRect();

        if (!this.options.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.options.size);
            const y = (0.5 - top) * ((100 / this.options.size) * (rect.height / rect.width));

            this.layer.style.setProperty("left", `${left * 100}%`);
            this.layer.style.setProperty("top", `${top * 100}%`);
            this.layer.style.setProperty("transform", `translate3d(-50%, -50%, 0) translate3d(${x * 100}%, ${y * 100}%, 0)`);
        }

        if (this.options.fadeout) {
            this.layer.style.setProperty("animation-name", "md-ripple-animation, md-ripple-fadeout-animation");
        } else {
            this.layer.style.setProperty("animation-name", "md-ripple-animation");
        }
    }

    handleRipplePointerup(event) {
        this.options.container.classList.remove("md-ripple--pressed");

        window.removeEventListener("pointerup", this.handleRipplePointerup);
    }

    handleRippleFocus(event) {
        this.options.container.classList.add("md-ripple--focused");
    }

    handleRippleBlur(event) {
        this.options.container.classList.remove("md-ripple--focused");
    }
}

export { MDRippleController };
