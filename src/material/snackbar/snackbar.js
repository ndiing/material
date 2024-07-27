import { createQueue } from "../functions/functions.js";
import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-snackbar
 * @fires MDSnackbarComponent#onScrimClick - {{desc}}
 * @fires MDSnackbarComponent#onSnackbarShow - {{desc}}
 * @fires MDSnackbarComponent#onSnackbarClose - {{desc}}
 */
class MDSnackbarComponent extends MDPaneComponent {
    static queue = createQueue();

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-snackbar");
    }

    /**
     * {{desc}}
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
     * {{desc}}
     */
    close() {
        super.close();
        this.emit("onSnackbarClose", this);
    }
}
customElements.define("md-snackbar", MDSnackbarComponent);
export { MDSnackbarComponent };
