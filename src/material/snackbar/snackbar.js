import { createQueue } from "../functions/functions.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{description}}
 * @element md-snackbar
 * @extends MDSheetComponent
 * @fires MDSnackbarComponent#onSnackbarShow - {{description}}
 * @fires MDSnackbarComponent#onSnackbarClose - {{description}}
 */
class MDSnackbarComponent extends MDSheetComponent {
    /**
     * {{description}}
     */
    static properties = {
        ...MDSheetComponent.properties,
    };

    static queue = createQueue();

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-snackbar");
    }

    /**
     * {{description}}
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
     * {{description}}
     */
    close() {
        super.close();

        this.emit("onSnackbarClose", this);
    }
}

customElements.define("md-snackbar", MDSnackbarComponent);

export { MDSnackbarComponent };
