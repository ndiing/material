import { createQueue } from "../functions/functions.js";
import { MDSheetComponent } from "../sheet/sheet.js";
/**
 * Represents a snackbar component for displaying temporary messages.
 * @element md-snackbar
 * @extends MDSheetComponent
 * @fires MDSnackbarComponent#onSnackbarShow - Triggered when the snackbar is shown.
 * @fires MDSnackbarComponent#onSnackbarClose - Triggered when the snackbar is closed.
 */
class MDSnackbarComponent extends MDSheetComponent {
    /**
     * Inherit properties from MDSheetComponent.
     */
    static properties = {
        ...MDSheetComponent.properties,
    };
    /**
     * Queue for managing sequential showing of snackbar instances.
     */
    static queue = createQueue();
    /**
     * Enhances connectedCallback to add specific CSS classes for snackbar styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-snackbar");
    }

    /**
     * Shows the snackbar.
     * @returns {Promise} A promise that resolves when the snackbar is shown.
     */
    show() {
        return MDSnackbarComponent.queue(() => {
            return new Promise((resolve) => {
                this.timeout = window.setTimeout(() => {
                    this.close();
                }, 4000);
                const handleSnackbarClose = (event) => {
                    if (event.animationName === "snackbarOut") {
                        window.clearTimeout(this.timeout);
                        resolve();
                    }
                };
                this.once("animationend", handleSnackbarClose);
                super.show();
                this.emit("onSnackbarShow", this);
            });
        });
    }
    /**
     * Closes the snackbar.
     */
    close() {
        super.close();
        this.emit("onSnackbarClose", this);
    }
}
customElements.define("md-snackbar", MDSnackbarComponent);
export { MDSnackbarComponent };
