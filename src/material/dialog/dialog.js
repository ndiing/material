import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardComponent } from "../card/card.js";

/**
 * MDDialogComponent represents a dialog component.
 *
 * @extends MDCardComponent
 */
class MDDialogComponent extends MDCardComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {Boolean} open - Indicates whether the dialog is open.
     */
    static properties = Object.assign(MDCardComponent.properties, {
        open: { type: Boolean, reflect: true },
    });

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("open")) {
            if (this.open) {
                this.createDialogScrim();
            } else {
                this.removeDialogScrim();
            }
        }
    }

    /**
     * Creates the dialog scrim.
     *
     * @private
     */
    createDialogScrim() {
        if (!this.dialogScrim) {
            this.dialogScrim = document.createElement("md-dialog-scrim");
            this.handleDialogScrimClick = this.handleDialogScrimClick.bind(this);
            this.dialogScrim.addEventListener("click", this.handleDialogScrimClick);
            document.body.append(this.dialogScrim);
        }
    }

    /**
     * Removes the dialog scrim.
     *
     * @private
     */
    removeDialogScrim() {
        if (this.dialogScrim) {
            this.dialogScrim.removeEventListener("click", this.handleDialogScrimClick);
            this.dialogScrim.remove();
            this.dialogScrim = null;
        }
    }

    /**
     * Shows the dialog.
     */
    show() {
        this.open = true;
    }

    /**
     * Closes the dialog.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the dialog's visibility.
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    /**
     * Handles the click event on the dialog scrim.
     *
     * @param {Event} event - The click event.
     * @fires MDDialogComponent#onDialogScrimClick
     * @private
     */
    handleDialogScrimClick(event) {
        this.close();

        this.emit("onDialogScrimClick", { event });
    }
}

// Define the component
customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
