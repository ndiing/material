import { MDCDK } from "./cdk";

/**
 * MDRipple is a class that manages ripple effect functionality based on MDCDK.
 */
class MDRipple extends MDCDK {
    /**
     * Initializes the ripple effect and sets up event listeners.
     */
    init() {
        this.root.classList.add("md-ripple");
        
        const rect = this.root.getBoundingClientRect();
        this.diameter = this.options.diameter ?? (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / rect.width) * 100;
        this.root.style.setProperty("--md-ripple-diameter", this.diameter + "%");
        
        if (this.options.bounded !== false) this.root.classList.add("md-ripple--bounded");
        
        if (this.options.fadeout) this.root.classList.add("md-ripple--fadeout");
        
        if (this.options.inverted) this.root.classList.add("md-ripple--inverted");
        
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
     * Cleans up and removes the ripple effect and event listeners.
     */
    destroy() {
        this.root.classList.remove("md-ripple");
        this.root.style.removeProperty("--md-ripple-diameter");
        this.root.classList.remove("md-ripple--bounded");
        this.root.classList.remove("md-ripple--fadeout");
        
        this.trigger.classList.remove("md-ripple--trigger");
        this.trigger.removeAttribute("tabIndex");
        
        this.trigger.removeEventListener("mouseenter", this.handleMouseenter);
        this.trigger.removeEventListener("mouseleave", this.handleMouseleave);
        this.trigger.removeEventListener("mousedown", this.handleMousedown);
        // this.trigger.removeEventListener("mouseup", this.handleMouseup);
        this.trigger.removeEventListener("focus", this.handleFocus);
        this.trigger.removeEventListener("blur", this.handleBlur);
    }

    /**
     * Handles mouse enter event to add ripple hover effect.
     * @param {MouseEvent} event - The mouse event triggering the action.
     */
    handleMouseenter(event) {
        this.root.classList.add("md-ripple--hover");
    }

    /**
     * Handles mouse leave event to remove ripple hover effect.
     * @param {MouseEvent} event - The mouse event triggering the action.
     */
    handleMouseleave(event) {
        this.root.classList.remove("md-ripple--hover");
    }

    /**
     * Handles mouse down event to display the ripple effect.
     * @param {MouseEvent} event - The mouse event triggering the action.
     */
    handleMousedown(event) {
        this.root.addEventListener("animationend", this.handleAnimationend);
        
        window.addEventListener("mouseup", this.handleMouseup);
        
        this.root.classList.add("md-ripple--pressed");
        this.root.style.setProperty("--md-ripple", "none");
        this.root.style.setProperty("--md-ripple-fadeout", "none");
        
        const rect = this.root.getBoundingClientRect();
        if (!this.options.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.diameter);
            const y = (0.5 - top) * ((100 / this.diameter) * (rect.height / rect.width));
            
            // this.root.style.setProperty("--md-ripple-diameter", this.diameter + "%");
            this.root.style.setProperty("--md-ripple-left", left * 100 + "%");
            this.root.style.setProperty("--md-ripple-top", top * 100 + "%");
            this.root.style.setProperty("--md-ripple-x", x * 100 + "%");
            this.root.style.setProperty("--md-ripple-y", y * 100 + "%");
        }
        
        this.root.style.setProperty("--md-ripple", "md-ripple");
        this.root.style.setProperty("--md-ripple-fadeout", "md-ripple-fadeout");
    }

    /**
     * Handles mouse up event to remove the pressed state.
     * @param {MouseEvent} event - The mouse event triggering the action.
     */
    handleMouseup(event) {
        this.root.classList.remove("md-ripple--pressed");
        window.removeEventListener("mouseup", this.handleMouseup);
    }

    /**
     * Handles focus event to add the ripple focus effect.
     * @param {FocusEvent} event - The focus event triggering the action.
     */
    handleFocus(event) {
        this.root.classList.add("md-ripple--focused");
    }

    /**
     * Handles blur event to remove the ripple focus effect.
     * @param {FocusEvent} event - The blur event triggering the action.
     */
    handleBlur(event) {
        this.root.classList.remove("md-ripple--focused");
    }

    /**
     * Handles animation end event to clean up after ripple animation.
     * @param {AnimationEvent} event - The animation event triggering the action.
     */
    handleAnimationend(event) {
        const animationend = this.options.fadeout ? "md-ripple-fadeout" : "md-ripple";
        if (event.animationName === animationend) {
            // this.root.style.removeProperty('--md-ripple-diameter')
            this.root.style.removeProperty("--md-ripple-left");
            this.root.style.removeProperty("--md-ripple-top");
            this.root.style.removeProperty("--md-ripple-x");
            this.root.style.removeProperty("--md-ripple-y");
            this.root.style.removeProperty("--md-ripple");
            this.root.style.removeProperty("--md-ripple-fadeout");
            this.root.removeEventListener("animationend", this.handleAnimationend);
        }
    }
}
export { MDRipple };
