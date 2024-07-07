import { MDGestureController } from "../gesture/gesture.js";

/**
 * {{desc}}
 * @extends HTMLTableCellElement
 * @tagname md-data-table-native-column
 */
class MDDataTableNativeColumnComponent extends HTMLTableCellElement {
    constructor() {
        super();

        this.gesture = new MDGestureController(this, {
            drag: ["x"],
            resize: ["e"],
        });
    }

    connectedCallback() {
        this.gesture.hostConnected();
    }

    disconnectedCallback() {
        this.gesture.hostDisconnected();
    }

    /**
     * {{desc}}
     */
    addController() {}
}
customElements.define("md-data-table-native-column", MDDataTableNativeColumnComponent, { extends: "th" });

export { MDDataTableNativeColumnComponent };
