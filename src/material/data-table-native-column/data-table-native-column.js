import { MDGestureController } from "../gesture/gesture.js";


/**
 * {{desc}}
 * @extends HTMLTableCellElement
 * @tagname md-data-table-native-column
 */
class MDDataTableNativeColumnComponent extends HTMLTableCellElement {
    constructor() {
        super();

        // Initialize gesture controller for drag and resize functionalities.
        this.gesture = new MDGestureController(this, {
            drag: ["x"],
            resize: ["e"],
        });
    }

    connectedCallback() {
        // Connect the gesture controller when the component is connected to the DOM.
        this.gesture.hostConnected();
    }

    disconnectedCallback() {
        // Disconnect the gesture controller when the component is disconnected from the DOM.
        this.gesture.hostDisconnected();
    }

    
    addController() {}
}

customElements.define("md-data-table-native-column", MDDataTableNativeColumnComponent, { extends: "th" });

export { MDDataTableNativeColumnComponent };
