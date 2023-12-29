/**
 * Represents a custom element that extends LitElement and provides additional methods.
 * @class
 * @name MdElement
 * @description Custom element providing additional functionality on top of LitElement.
 * @author Ridho Prasetya
 */
import { LitElement } from "lit";

class MdElement extends LitElement {
    /**
     * Overrides LitElement's createRenderRoot to use the element itself as the render root.
     * @returns {this} The instance of MdElement.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Attaches an event listener to the element.
     * @param {string} type - The type of event to listen for.
     * @param {Function} listener - The callback function to execute when the event occurs.
     */
    on(type, listener) {
        this.addEventListener(type, listener);
    }

    /**
     * Dispatches a custom event from the element with the given type and detail.
     * @param {string} type - The type of event to dispatch.
     * @param {*} detail - Additional information to include with the event.
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

export { MdElement };
