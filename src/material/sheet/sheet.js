import { MDCardComponent } from "../card/card.js";

/**
 * Represents a sheet component that extends MDCardComponent.
 * @element md-sheet
 * @extends MDCardComponent
 * @fires MDSheetComponent#onSheetScrimClick - Triggered when the sheet scrim is clicked.
 * @fires MDSheetComponent#onSheetShow - Triggered when the sheet is shown.
 * @fires MDSheetComponent#onSheetClose - Triggered when the sheet is closed.
 */
class MDSheetComponent extends MDCardComponent {
    /**
     * Properties of the MDSheetComponent.
     * @property {Boolean} open - Reflects whether the sheet is open.
     */
    static properties = {
        ...MDCardComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    variants = ["north", "east", "south", "west", "modal"];

    /**
     * Enhances connectedCallback to initialize sheet styling and add necessary classes.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-sheet");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }

    /**
     * Shows the sheet as a modal.
     */
    showModal() {
        this.show(true);
    }

    /**
     * Handles click events on the sheet scrim.
     * @private
     */
    handleSheetScrimClick(event) {
        this.close();
        this.emit("onSheetScrimClick", event);
    }

    /**
     * Shows the sheet.
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
     * Closes the sheet.
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
     * Toggles the sheet visibility.
     */
    toggle(...args) {
        if (this.open) {
            this.close();
        } else {
            this.show(...args);
        }
    }
}
customElements.define("md-sheet", MDSheetComponent);
export { MDSheetComponent };
