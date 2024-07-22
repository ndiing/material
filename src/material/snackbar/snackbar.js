import { createQueue } from "../functions/functions.js";
import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-snackbar
 * @fires MDSnackbarComponent#onSheetShow - {{desc}}
 * @fires MDSnackbarComponent#onSheetClose - {{desc}}
 * @fires MDSnackbarComponent#onSheetScrimClick - {{desc}}
 * @fires MDSnackbarComponent#onSnackbarShow - {{desc}}
 * @fires MDSnackbarComponent#onSnackbarClose - {{desc}}
 */
class MDSnackbarComponent extends MDSheetComponent {
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
        ...MDSheetComponent.properties,
    };
    static queue = createQueue();

    /**
     * {{desc}}
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
