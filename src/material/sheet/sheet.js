import { MDCardComponent } from "../card/card.js";

/**
 * {{description}}
 * @element md-sheet
 * @extends MDCardComponent
 * @fires MDSheetComponent#onSheetScrimClick - {{description}}
 * @fires MDSheetComponent#onSheetShow - {{description}}
 * @fires MDSheetComponent#onSheetClose - {{description}}
 */
class MDSheetComponent extends MDCardComponent {
    /**
     * {{description}}
     * @property {Boolean} open - {{description}}
     */
    static properties = {
        ...MDCardComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    variants = ["north", "east", "south", "west", "modal"];

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.style.setProperty("--md-comp-sheet-animation", "none");

        this.classList.add("md-card");
        this.classList.add("md-sheet");
    }

    /**
     * {{description}}
     */
    showModal() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");

        this.scrim = document.createElement("md-scrim");

        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);

        this.handleSheetScrimClick = this.handleSheetScrimClick.bind(this);
        this.scrim.on("click", this.handleSheetScrimClick);

        this.scrim.show();

        this.open = true;
    }

    /**
     * @private
     */
    handleSheetScrimClick(event) {
        this.close();

        this.emit("onSheetScrimClick", event);
    }

    /**
     * {{description}}
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");

        this.open = true;

        this.emit("onSheetShow", this);
    }

    /**
     * {{description}}
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
     * {{description}}
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
