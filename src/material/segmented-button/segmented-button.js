import { LitElement, html } from 'lit';
import { MdStateController } from '../state/state';

/**
 * Custom element for a segmented button.
 *
 * @extends LitElement
 */
class MdSegmentedButtonComponent extends LitElement {
  /**
   * @property {Array} items - An array of items for the segmented button.
   * @property {String} type - The type of the segmented button (e.g., "single-select" or "multi-select").
   */
  static get properties() {
    return {
      items: { type: Array },
      type: { type: String },
    };
  }

  /**
   * Constructor for MdSegmentedButtonComponent.
   */
  constructor() {
    super();
    this.items = [];
  }

  /**
   * Overrides the default render root to be the component itself.
   *
   * @returns {this}
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Renders the segmented button based on the provided items.
   *
   * @returns {TemplateResult} The rendered HTML template.
   */
  render() {
    // prettier-ignore
    return this.items.map(item=>html`
            <md-button
                .item="${item}"
                .ui="${"outlined"}"
                .label="${item.label}"
                .icon="${item.icon}"
                .activated="${item.activated}"
                @click="${this.onSegmentedButtonClick}"
            ></md-button>
        `);
  }

  /**
   * Adds the "md-segmented-button" class when connected to the DOM.
   */
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-segmented-button');
  }

  /**
   * Removes the "md-segmented-button" class when disconnected from the DOM.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove('md-segmented-button');
  }

  /**
   * Handles the click event on a segmented button.
   *
   * @param {Event} event - The click event.
   */
  onSegmentedButtonClick(event) {
    const button = event.currentTarget;

    if (this.type === 'multi-select') {
      button.item.activated = !button.item.activated;
    } else {
      for (const item of this.items) {
        item.activated = item === button.item;
      }
    }

    this.requestUpdate();

    /**
     * @fires MdSegmentedButtonComponent#onSegmentedButtonClick
     * @type {CustomEvent}
     * @property {Event} event - The original click event.
     * @property {HTMLElement} button - The clicked button.
     */
    this.dispatchEvent(
      new CustomEvent('onSegmentedButtonClick', {
        bubbles: true,
        cancelable: true,
        detail: { event, button },
      })
    );
  }
}

customElements.define('md-segmented-button', MdSegmentedButtonComponent);

export { MdSegmentedButtonComponent };
