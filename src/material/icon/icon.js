import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

/**
 * Represents an icon component.
 *
 * @extends LitElement
 */
class MdIconComponent extends LitElement {
    /**
     * A static property that defines the properties for MdIconComponent.
     *
     * @static
     * @property {Object} properties - The properties object.
     */
    static get properties() {
        return {
            // Define your properties here if needed.
        };
    }

    /**
     * Creates the render root for the element.
     *
     * @returns {MdIconComponent} - The render root.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Connected callback. Adds "md-icon" class when connected.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }

    /**
     * Disconnected callback. Removes "md-icon" class when disconnected.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon");
    }

    /**
     * First updated callback.
     */
    firstUpdated() {
        // Add first updated logic if needed.
    }

    /**
     * Updated callback.
     *
     * @param {Map} _changedProperties - The changed properties.
     */
    updated(_changedProperties) {
        // Add updated logic if needed.
    }

    /**
     * Dispatches a custom event.
     *
     * @fires MdIconComponent#custom-event
     */
    dispatchCustomEvent() {
        this.dispatchEvent(new CustomEvent("custom-event"));
    }
}

/**
 * Custom element definition for MdIconComponent.
 */
customElements.define("md-icon", MdIconComponent);

export { MdIconComponent };
