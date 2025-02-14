/**
 * Efek ripple interaktif untuk elemen UI.
 */
class Ripple {
    /**
     * Membuat efek ripple pada elemen host.
     * @param {HTMLElement} host Elemen yang akan memiliki efek ripple.
     * @param {Object} [options] Opsi konfigurasi ripple.
     * @param {boolean} [options.centered=false] Jika true, ripple akan dimulai dari tengah elemen.
     * @param {number} [options.radius] Radius ripple dalam pixel.
     * @param {string|HTMLElement} [options.trigger] Elemen pemicu ripple.
     * @param {boolean} [options.unbounded=false] Jika true, ripple tidak akan dibatasi oleh elemen host.
     * @param {string|HTMLElement} [options.container] Elemen tempat ripple akan dirender.
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
     * Inisialisasi efek ripple. 
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
     * Menghancurkan efek ripple dan membersihkan event listener. 
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
            this.trigger.removeEventListener("pointerenter", this.handlePointerenter);
            this.trigger.removeEventListener("pointerleave", this.handlePointerleave);
            this.trigger.removeEventListener("pointerdown", this.handlePointerdown);
            this.trigger.removeEventListener("focus", this.handleFocus);
            this.trigger.removeEventListener("blur", this.handleBlur);
        }
        this.container = null;
        this.trigger = null;
    }

    /** 
     * Menangani event pointer enter. 
     * @private 
     */
    handlePointerenter(event) {
        this.container.classList.add("md-ripple--hover");
    }

    /** 
     * Menangani event pointer leave. 
     * @private 
     */
    handlePointerleave(event) {
        this.container.classList.remove("md-ripple--hover");
    }

    /** 
     * Menangani event pointer down. 
     * @private 
     */
    handlePointerdown(event) {
        window.addEventListener("pointerup", this.handlePointerup, { passive: true });
        window.addEventListener("touchend", this.handlePointerup, { passive: true });
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
     * Menangani event pointer up. 
     * @private 
     */
    handlePointerup(event) {
        this.container.classList.remove("md-ripple--press");
        window.removeEventListener("pointerup", this.handlePointerup);
        window.removeEventListener("touchend", this.handlePointerup);
    }

    /** 
     * Menangani event focus. 
     * @private 
     */
    handleFocus(event) {
        this.container.classList.add("md-ripple--focus");
    }

    /** 
     * Menangani event blur. 
     * @private 
     */
    handleBlur(event) {
        this.container.classList.remove("md-ripple--focus");
    }
}
export { Ripple };
