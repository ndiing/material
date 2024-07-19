import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * Represents a base component class.
 * @extends LitElement
 */
class MDComponent extends LitElement {
    /**
     * Initializes the component.
     */
    constructor() {
        super();

        updateWhenLocaleChanges(this);
    }

    /**
     * Overrides LitElement's method to use the component itself as the render root.
     * @private
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Attaches an event listener that is bound to the component instance.
     * @param {String} type - The type of event to listen for.
     * @param {Function} listener - The callback function to execute when the event occurs.
     * @private
     */
    on(type, listener) {
        listener = listener.bind(this);

        this.addEventListener(type, listener);
    }

    /**
     * Attaches an event listener that listens once and automatically removes itself after handling the event.
     * @param {String} type - The type of event to listen for.
     * @param {Function} listener - The callback function to execute when the event occurs.
     * @private
     */
    once(type, listener) {
        const handleListener = (event) => {
            listener(event);

            this.off(type, handleListener);
        };

        this.on(type, handleListener);
    }

    /**
     * Removes an event listener from the component.
     * @param {String} type - The type of event the listener was attached to.
     * @param {Function} listener - The callback function to remove.
     * @private
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * Dispatches a custom event from the component with optional detail.
     * @param {String} type - The type of event to dispatch.
     * @param {any} detail - Optional data to include with the event.
     * @private
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        this.dispatchEvent(event);
    }
}
export { MDComponent };
