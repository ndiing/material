import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardComponent } from "../card/card";

/**
 * MDSheetComponent represents a material design sheet.
 *
 * @extends MDCardComponent
 */
class MDSheetComponent extends MDCardComponent {
    /**
     * @property {Boolean} open - Indicates whether the sheet is open.
     * @property {String} region - Defines the region(s) of the sheet.
     */
    static properties = Object.assign(MDCardComponent.properties, {
        open: { type: Boolean, reflect: true },
        region: { type: String },
    });

    /**
     * Called when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-sheet' class to the component
        this.classList.add("md-sheet");
    }

    /**
     * Called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-sheet' class from the component
        this.classList.remove("md-sheet");
    }

    /**
     * Called after the component's first update.
     *
     * @param {Map} changedProperties - Map of changed properties.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    /**
     * Called when the component is updated.
     *
     * @param {Map} changedProperties - Map of changed properties.
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("open")) {
            if (this.open) {
                this.createSheetScrim();
            } else {
                this.removeSheetScrim();
            }
        }

        if (changedProperties.has("region")) {
            [
                'north',
                'east',
                'south',
                'west',
            ].forEach((region) => {
                this.classList.remove(`md-sheet--${region}`);
            });
            if (this.region) {
                this.region.split(" ").forEach((region) => {
                    this.classList.add(`md-sheet--${region}`);
                });
            }
        }
    }

    /**
     * Creates the sheet scrim (overlay) and appends it to the body.
     */
    createSheetScrim() {
        if (!this.sheetScrim) {
            this.sheetScrim = document.createElement("md-sheet-scrim");
            this.handleSheetScrimClick = this.handleSheetScrimClick.bind(this);
            this.sheetScrim.addEventListener("click", this.handleSheetScrimClick);
            document.body.append(this.sheetScrim);
        }
    }

    /**
     * Removes the sheet scrim from the body.
     */
    removeSheetScrim() {
        if (this.sheetScrim) {
            this.sheetScrim.removeEventListener("click", this.handleSheetScrimClick);
            this.sheetScrim.remove();
            this.sheetScrim = null;
        }
    }

    /**
     * Shows the sheet.
     */
    show() {
        this.open = true;
    }

    /**
     * Closes the sheet.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the open state of the sheet.
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    /**
     * Handles the click event on the sheet scrim.
     *
     * @param {Event} event - The click event.
     */
    handleSheetScrimClick(event) {
        this.close();

        this.emit("onSheetScrimClick", { event });
    }
}

// Define the custom element
customElements.define("md-sheet", MDSheetComponent);

// Export the component
export { MDSheetComponent };
