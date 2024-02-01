import { MDController } from "../base/controller";

class MDRippleController extends MDController {
    constructor(host, options = {}) {
        super(host, {
            // default options
            // container:true,
            button: null,
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
        this.container = this.options.container ?? this.host;
        this.container.classList.add("md-ripple");
        // this.container.classList.add('md-ripple--container')

        // containment
        if (this.options.containment) {
            this.container.classList.add("md-ripple--containment");
        } else {
            this.container.classList.remove("md-ripple--containment");
        }

        // inverted
        if (this.options.inverted) {
            this.container.classList.add("md-ripple--inverted");
        } else {
            this.container.classList.remove("md-ripple--inverted");
        }

        // fadeout
        if (this.options.fadeout) {
            this.container.classList.add("md-ripple--fadeout");
        } else {
            this.container.classList.remove("md-ripple--fadeout");
        }

        // button
        this.button = this.options.button ?? this.host;
        this.button.classList.add("md-ripple--button");
        this.button.setAttribute("tabIndex", 0);

        // layer
        this.layer = document.createElement("span");
        this.layer.classList.add("md-ripple__layer");
        this.container.append(this.layer);

        // size
        if (!this.options.size) {
            const rect = this.container.getBoundingClientRect();
            const size = (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / rect.width) * 100;
            this.options.size = size;
        }

        this.layer.style.setProperty(`width`, `${this.options.size}%`);

        // binding
        this.handleRipplePointerenter = this.handleRipplePointerenter.bind(this);
        this.handleRipplePointerleave = this.handleRipplePointerleave.bind(this);
        this.handleRipplePointerdown = this.handleRipplePointerdown.bind(this);
        this.handleRipplePointerup = this.handleRipplePointerup.bind(this);
        this.handleRippleFocus = this.handleRippleFocus.bind(this);
        this.handleRippleBlur = this.handleRippleBlur.bind(this);

        // listen
        this.button.addEventListener("pointerenter", this.handleRipplePointerenter);
        this.button.addEventListener("pointerleave", this.handleRipplePointerleave);
        this.button.addEventListener("pointerdown", this.handleRipplePointerdown);
        // this.button.addEventListener("pointerup", this.handleRipplePointerup);
        this.button.addEventListener("focus", this.handleRippleFocus);
        this.button.addEventListener("blur", this.handleRippleBlur);
    }

    hostDisconnected() {
        // unlisten
        this.button.removeEventListener("pointerenter", this.handleRipplePointerenter);
        this.button.removeEventListener("pointerleave", this.handleRipplePointerleave);
        this.button.removeEventListener("pointerdown", this.handleRipplePointerdown);
        // this.button.removeEventListener("pointerup", this.handleRipplePointerup);
        this.button.removeEventListener("focus", this.handleRippleFocus);
        this.button.removeEventListener("blur", this.handleRippleBlur);
    }

    handleRipplePointerenter(event) {
        this.container.classList.add("md-ripple--hover");
    }

    handleRipplePointerleave(event) {
        this.container.classList.remove("md-ripple--hover");
    }

    handleRipplePointerdown(event) {
        window.addEventListener("pointerup", this.handleRipplePointerup);

        this.container.classList.add("md-ripple--pressed");

        this.layer.style.setProperty(`animation-name`, `none`);

        const rect = this.container.getBoundingClientRect();

        if (!this.options.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.options.size);
            const y = (0.5 - top) * ((100 / this.options.size) * (rect.height / rect.width));

            this.layer.style.setProperty("width", `${this.options.size}%`);
            this.layer.style.setProperty("left", `${left * 100}%`);
            this.layer.style.setProperty("top", `${top * 100}%`);
            this.layer.style.setProperty("transform", `translate3d(-50%, -50%, 0) translate3d(${x * 100}%, ${y * 100}%, 0)`);
        }

        this.layer.style.setProperty(`animation-name`, `md-ripple-animation`);
    }

    handleRipplePointerup(event) {
        this.container.classList.remove("md-ripple--pressed");

        window.removeEventListener("pointerup", this.handleRipplePointerup);
    }

    handleRippleFocus(event) {
        this.container.classList.add("md-ripple--focused");
    }

    handleRippleBlur(event) {
        this.container.classList.remove("md-ripple--focused");
    }
}

export { MDRippleController };
