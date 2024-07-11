import { MDGestureController } from "../gesture/gesture.js";

/**
 * Represents a data table column with gesture controls for dragging and resizing.
 * @extends HTMLTableCellElement
 */
class MDDataTableNativeColumnComponent extends HTMLTableCellElement {
    /**
     * Initializes the component and sets up the gesture controller.
     */
    constructor() {
        super();
        this.gesture = new MDGestureController(this, {
            drag: ["x"],
            resize: ["e"],
        });
    }

    /**
     * Called when the component is added to the DOM.
     * @private
     */
    connectedCallback() {
        this.gesture.hostConnected();
    }

    /**
     * Called when the component is removed from the DOM.
     * @private
     */
    disconnectedCallback() {
        this.gesture.hostDisconnected();
    }

    /**
     * Adds a controller to the component. (Currently not implemented)
     */
    addController() {}
}
customElements.define("md-data-table-native-column", MDDataTableNativeColumnComponent, { extends: "th" });
export { MDDataTableNativeColumnComponent };
