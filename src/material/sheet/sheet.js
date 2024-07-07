import { MDCardComponent } from "../card/card.js";
import { MDScrimComponent } from "../scrim/scrim.js";

/**
 * Represents a sheet component that extends from MDCardComponent.
 * @extends MDCardComponent
 * @tagname md-sheet
 * @fires MDSheetComponent#onSheetScrimClick - Triggered when the scrim of the sheet is clicked.
 * @fires MDSheetComponent#onSheetShow - Triggered when the sheet is shown.
 * @fires MDSheetComponent#onSheetClose - Triggered when the sheet is closed.
 */
class MDSheetComponent extends MDCardComponent {
    /**
     * @property {Boolean} open - Controls the visibility state of the sheet. Set to `true` to show the sheet and `false` to hide it.
     */
    static properties = {
        ...MDCardComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    variants = ["north", "east", "south", "west", "modal"];

    connectedCallback() {
        super.connectedCallback();

        this.style.setProperty("--md-comp-sheet-animation", "none");

        this.classList.add("md-card");
        this.classList.add("md-sheet");
    }

    /**
     * Shows a modal sheet by displaying the scrim and setting `open` to `true`. This method adjusts the sheet's dimensions and emits the `onSheetShow` event.
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
     * Handles click events on the scrim of the sheet. Closes the sheet and emits the `onSheetScrimClick` event.
     * @param {MouseEvent} event - The click event object.
     */
    handleSheetScrimClick(event) {
        this.close();

        this.emit("onSheetScrimClick", event);
    }

    /**
     * Shows the sheet by adjusting its dimensions and setting `open` to `true`. Emits the `onSheetShow` event.
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");

        this.open = true;

        this.emit("onSheetShow", this);
    }

    /**
     * Closes the sheet by hiding it and removing the scrim if present. Emits the `onSheetClose` event.
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
     * Toggles the visibility of the sheet. If the sheet is open, it will close it. If closed, it will show it.
     * @param {...any} args - Additional arguments to pass to the `show` method.
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
