import { MDGestureController } from "../gesture/gesture.js";

/**
 * {{description}}
 * @extends HTMLTableCellElement
 */
class MDDataTableNativeColumnComponent extends HTMLTableCellElement {
    /**
     * {{description}}
     */
    constructor() {
        super();

        this.gesture = new MDGestureController(this, {
            drag: ["x"],
            resize: ["e"],
        });
    }

    /**
     * @private
     */
    connectedCallback() {
        this.gesture.hostConnected();
    }

    /**
     * @private
     */
    disconnectedCallback() {
        this.gesture.hostDisconnected();
    }

    addController() {}
}

customElements.define("md-data-table-native-column", MDDataTableNativeColumnComponent, { extends: "th" });

export { MDDataTableNativeColumnComponent };
