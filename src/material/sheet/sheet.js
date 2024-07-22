import { MDCardComponent } from "../card/card.js";

/**
 * {{desc}}
 * @extends MDCardComponent
 * @element md-sheet
 * @fires MDSheetComponent#onSheetShow - {{desc}}
 * @fires MDSheetComponent#onSheetClose - {{desc}}
 * @fires MDSheetComponent#onSheetScrimClick - {{desc}}
 */
class MDSheetComponent extends MDCardComponent {
    
    
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} subLabel - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Boolean} open - {{desc}}
     */
    static properties = {
        ...MDCardComponent.properties,
        open: { type: Boolean, reflect: true },
    };
    variants = ["north", "east", "south", "west", "modal"];
    
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-sheet");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }
    
    
    /**
     * {{desc}}
     */
    showModal() {
        this.show(true);
    }
    
    
    /**
     * {{desc}}
     * @param {Any} modal - {{desc}}
     */
    async show(modal) {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        if (modal) {
            this.scrim = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
            this.handleSheetScrimClick = this.handleSheetScrimClick.bind(this);
            this.scrim.on("click", this.handleSheetScrimClick);
            this.scrim.show();
        }
        this.open = true;
        this.emit("onSheetShow", this);
    }
    
    
    /**
     * {{desc}}
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        if (this.scrim) {
            this.scrim.off("click", this.handleSheetScrimClick);
            this.scrim.remove();
            this.scrim = null;
        }
        this.open = false;
        this.emit("onSheetClose", this);
    }
    
    
    /**
     * {{desc}}
     * @param {Any} ...args - {{desc}}
     */
    toggle(...args) {
        if (this.open) {
            this.close();
        } else {
            this.show(...args);
        }
    }
    
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleSheetScrimClick(event) {
        this.close();
        this.emit("onSheetScrimClick", event);
    }
}
customElements.define("md-sheet", MDSheetComponent);
export { MDSheetComponent };
