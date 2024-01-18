class MdStateController {
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            container: this.host,
            containment: true,
            fadeout: undefined,
            inverted: undefined,
            button: undefined,
            size: undefined,
            ...options,
        };
        this.host.addController(this);
    }

    hostConnected() {
        this.options.container.classList.add("md-state");

        if (this.options.containment) {
            this.options.container.classList.add("md-state--containment");
        } else {
            this.options.container.classList.remove("md-state--containment");
        }

        if (this.options.fadeout) {
            this.options.container.classList.add("md-state--fadeout");
        } else {
            this.options.container.classList.remove("md-state--fadeout");
        }

        if (this.options.inverted) {
            this.options.container.classList.add("md-state--inverted");
        } else {
            this.options.container.classList.remove("md-state--inverted");
        }

        // this.button = this.options.container;
        // if (this.options.button) {
        //     this.button = await new Promise((resolve) => {
        //         let button;
        //         let observer;
        //         const callback = () => {
        //             button = this.options.container.querySelector(this.options.button);
        //             if (button) {
        //                 if (observer) {
        //                     observer.disconnect();
        //                 }
        //                 resolve(button);
        //             }
        //         };
        //         callback();
        //         if (!button) {
        //             observer = new MutationObserver(callback);
        //             observer.observe(this.options.container, {
        //                 childList: true,
        //                 subtree: true,
        //             });
        //         }
        //     });
        // }
        this.button = this.options.button || this.options.container;
        this.button.classList.add("md-state--button");
        this.button.setAttribute("tabIndex", 0);

        this.layer = document.createElement("span");
        this.layer.classList.add("md-state__layer");
        this.options.container.append(this.layer);

        const rect = this.options.container.getBoundingClientRect();
        if (!this.options.size) {
            this.options.size = (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / rect.width) * 100;
        }
        // console.log(this.options.size)
        this.layer.style.setProperty("width", this.options.size + "%");

        this.handlePointerenter = this.handlePointerenter.bind(this);
        this.handlePointerleave = this.handlePointerleave.bind(this);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.button.addEventListener("pointerenter", this.handlePointerenter);
        this.button.addEventListener("pointerleave", this.handlePointerleave);
        this.button.addEventListener("pointerdown", this.handlePointerdown);
        this.button.addEventListener("focus", this.handleFocus);
        this.button.addEventListener("blur", this.handleBlur);
    }

    handlePointerenter(event) {
        this.options.container.classList.add("md-state--hover");
    }
    handlePointerleave(event) {
        this.options.container.classList.remove("md-state--hover");
    }
    handlePointerdown(event) {
        window.addEventListener("pointerup", this.handlePointerup);

        this.layer.style.setProperty("animation-name", "none");

        const rect = this.options.container.getBoundingClientRect();
       
        if(!this.options.centered){
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.options.size);
            const y = (0.5 - top) * ((100 / this.options.size) * (rect.height / rect.width));
    
            this.layer.style.setProperty("left", left * 100 + "%");
            this.layer.style.setProperty("top", top * 100 + "%");
            this.layer.style.setProperty("transform", `translate3d(-50%, -50%, 0) translate3d(${x * 100}%, ${y * 100}%, 0)`);
            
        }

        this.layer.style.setProperty("width", this.options.size + "%");

        if (this.options.fadeout) {
            this.layer.style.setProperty("animation-name", "md-state,md-state-fadeout");
        } else {
            this.layer.style.setProperty("animation-name", "md-state");
        }

        this.options.container.classList.add("md-state--pressed");
    }
    handlePointerup(event) {
        this.options.container.classList.remove("md-state--pressed");
        window.removeEventListener("pointerup", this.handlePointerup);
    }
    handleFocus(event) {
        this.options.container.classList.add("md-state--focused");
    }
    handleBlur(event) {
        this.options.container.classList.remove("md-state--focused");
    }

    // hostUpdate() {}

    // hostUpdated() {}

    hostDisconnected() {
        this.options.container.classList.remove("md-state");

        this.options.container.classList.remove("md-state--containment");

        this.options.container.classList.remove("md-state--fadeout");

        this.options.container.classList.remove("md-state--inverted");

        this.button.classList.remove("md-state--button");
        this.button.removeAttribute("tabIndex");

        this.layer.style.removeProperty("width");
        this.layer.remove();

        this.button.removeEventListener("pointerenter", this.handlePointerenter);
        this.button.removeEventListener("pointerleave", this.handlePointerleave);
        this.button.removeEventListener("pointerdown", this.handlePointerdown);
        this.button.removeEventListener("focus", this.handleFocus);
        this.button.removeEventListener("blur", this.handleBlur);
    }
}

export { MdStateController };
