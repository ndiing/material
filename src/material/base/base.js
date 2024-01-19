import { LitElement, html, nothing } from 'lit';
import { MdStateController } from '../state/state';

/**
 * Base class for Material Design components.
 *
 * @extends LitElement
 */
class MdBaseComponent extends LitElement {
  /**
   * Static getter for defining properties on the class.
   *
   * @readonly
   * @static
   * @property {Object} properties - The properties object.
   * @property {String} properties.label - The label for the component.
   */
  static get properties() {
    return {
      label: { type: String },
    };
  }

  /**
   * Constructor for MdBaseComponent.
   */
  constructor() {
    super();
    this.label = 'Label';
  }

  /**
   * Overrides the default render root to use the component itself.
   *
   * @returns {this} The instance of the element.
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Renders the component template.
   *
   * @returns {TemplateResult} The HTML template.
   */
  render() {
    // prettier-ignore
    return html`
            ${this.label ? html`<div class="md-base__label">${this.label}</div>` : nothing}
        `;
  }

  /**
   * Lifecycle callback when the element is added to the DOM.
   */
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-base');
  }

  /**
   * Lifecycle callback when the element is removed from the DOM.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove('md-base');
  }

  /**
   * Lifecycle callback when the element's first update occurs.
   */
  firstUpdated() {}

  /**
   * Lifecycle callback when the element is updated.
   *
   * @param {Map} _changedProperties - Map of changed properties.
   */
  updated(_changedProperties) {}
}

/**
 * Event fired when a change occurs.
 *
 * @event MdBaseComponent#change
 * @type {Event}
 */

customElements.define('md-base', MdBaseComponent);

export { MdBaseComponent };
