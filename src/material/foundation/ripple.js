import { MDCDK } from "./cdk";

/**
 * Mewakili efek Ripple Material Design yang diterapkan pada sebuah elemen.
 * @extends MDCDK
 */
class MDRipple extends MDCDK {
    /**
     * Membuat sebuah instance dari MDRipple.
     * @param {HTMLElement} root - Elemen root untuk menerapkan efek ripple.
     * @param {Object} [options={}] - Opsi tambahan untuk efek ripple.
     * @param {boolean} [options.bounded=true] - Apakah efek ripple dibatasi.
     * @param {boolean} [options.centered=false] - Apakah efek ripple berada di tengah.
     * @param {HTMLElement} [options.trigger] - Elemen yang memicu efek ripple.
     * @param {number} [options.diameter] - Diameter dari efek ripple.
     * @param {boolean} [options.fadeout] - Apakah menerapkan efek fade-out.
     */
    constructor(root, options = {}) {
        super(root, options);
    }

    get diameter() {
        return this._diameter;
    }
    set diameter(value) {
        this._diameter = value;
    }

    /**
     * Menginisialisasi efek ripple.
     */
    init() {
        this.root.classList.add("md-ripple");

        if (this.options.bounded !== false) this.root.classList.add("md-ripple--bounded");

        if (this.options.fadeout) this.root.classList.add("md-ripple--fadeout");

        let diameter = parseFloat(window.getComputedStyle(this.root).getPropertyValue("--md-ripple-diameter"));

        if (isNaN(diameter)) {
            diameter = this.options.diameter;

            if (!diameter) {
                const rect = this.root.getBoundingClientRect();
                diameter = (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / rect.width) * 100;
            }

            this.root.style.setProperty("--md-ripple-diameter", diameter + "%");
        }

        this.diameter = diameter;

        this.trigger = this.options.trigger ?? this.root;
        this.trigger.classList.add("md-ripple--trigger");
        this.trigger.setAttribute("tabIndex", 0);

        this.handleMouseenter = this.handleMouseenter.bind(this);
        this.handleMouseleave = this.handleMouseleave.bind(this);
        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleAnimationend = this.handleAnimationend.bind(this);

        this.trigger.addEventListener("mouseenter", this.handleMouseenter);
        this.trigger.addEventListener("mouseleave", this.handleMouseleave);
        this.trigger.addEventListener("mousedown", this.handleMousedown);
        // this.trigger.addEventListener("mouseup", this.handleMouseup);
        this.trigger.addEventListener("focus", this.handleFocus);
        this.trigger.addEventListener("blur", this.handleBlur);
    }

    /**
     * Menghancurkan efek ripple dan menghapus event listener.
     */
    destroy() {
        this.root.style.removeProperty("md-ripple");
        this.root.style.removeProperty("md-ripple--bounded");
        this.root.style.removeProperty("md-ripple--fadeout");

        this.root.style.removeProperty("--md-ripple-left");
        this.root.style.removeProperty("--md-ripple-top");
        this.root.style.removeProperty("--md-ripple-x");
        this.root.style.removeProperty("--md-ripple-y");

        this.trigger.style.removeProperty("md-ripple--trigger");
        this.trigger.removeAttribute("tabIndex");

        this.trigger.removeEventListener("mouseenter", this.handleMouseenter);
        this.trigger.removeEventListener("mouseleave", this.handleMouseleave);
        this.trigger.removeEventListener("mousedown", this.handleMousedown);
        // this.trigger.removeEventListener("mouseup", this.handleMouseup);
        this.trigger.removeEventListener("focus", this.handleFocus);
        this.trigger.removeEventListener("blur", this.handleBlur);
    }

    /**
     * Handles the mouseenter event to add the "md-ripple--hover" class.
     * @private
     * @param {MouseEvent} event - The mouseenter event.
     */
    handleMouseenter(event) {
        this.root.classList.add("md-ripple--hover");
    }

    /**
     * Handles the mouseleave event to remove the "md-ripple--hover" class.
     * @private
     * @param {MouseEvent} event - The mouseleave event.
     */
    handleMouseleave(event) {
        this.root.classList.remove("md-ripple--hover");
    }

    /**
     * Handles the mousedown event to trigger the ripple effect.
     * @private
     * @param {MouseEvent} event - The mousedown event.
     */
    handleMousedown(event) {
        this.root.addEventListener("animationend", this.handleAnimationend);

        window.addEventListener("mouseup", this.handleMouseup);

        this.root.classList.add("md-ripple--pressed");

        this.root.style.setProperty("--md-ripple", "none");
        this.root.style.setProperty("--md-ripple-fadeout", "none");

        const rect = this.root.getBoundingClientRect();

        // this.root.style.setProperty("--md-ripple-diameter", this.diameter + "%");

        if (!this.options.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.diameter);
            const y = (0.5 - top) * ((100 / this.diameter) * (rect.height / rect.width));

            this.root.style.setProperty("--md-ripple-left", left * 100 + "%");
            this.root.style.setProperty("--md-ripple-top", top * 100 + "%");
            this.root.style.setProperty("--md-ripple-x", x * 100 + "%");
            this.root.style.setProperty("--md-ripple-y", y * 100 + "%");
        }

        this.root.style.setProperty("--md-ripple", "md-ripple");
        this.root.style.setProperty("--md-ripple-fadeout", "md-ripple-fadeout");
    }

    /**
     * Handles the mouseup event to finish the ripple effect.
     * @private
     * @param {MouseEvent} event - The mouseup event.
     */
    handleMouseup(event) {
        this.root.classList.remove("md-ripple--pressed");

        window.removeEventListener("mouseup", this.handleMouseup);
    }

    /**
     * Handles the focus event to add the "md-ripple--focused" class.
     * @private
     * @param {FocusEvent} event - The focus event.
     */
    handleFocus(event) {
        this.root.classList.add("md-ripple--focused");
    }

    /**
     * Handles the blur event to remove the "md-ripple--focused" class.
     * @private
     * @param {FocusEvent} event - The blur event.
     */
    handleBlur(event) {
        this.root.classList.remove("md-ripple--focused");
    }

    /**
     * Handles the animationend event to clean up after the ripple effect.
     * @private
     * @param {AnimationEvent} event - The animationend event.
     */
    handleAnimationend(event) {
        const animationName = this.options.fadeout ? "md-ripple-fadeout" : "md-ripple";
        if (event.animationName === animationName) {
            this.root.style.removeProperty("--md-ripple");
            this.root.style.removeProperty("--md-ripple-fadeout");
            this.root.style.removeProperty("--md-ripple-left");
            this.root.style.removeProperty("--md-ripple-top");
            this.root.style.removeProperty("--md-ripple-x");
            this.root.style.removeProperty("--md-ripple-y");

            this.root.removeEventListener("animationend", this.handleAnimationend);
        }
    }
}

export { MDRipple };
