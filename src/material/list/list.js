import { LitElement, html, nothing } from 'lit';
import { choose } from 'lit/directives/choose.js';
import { MdStateController } from '../state/state';

/**
 * Represents a Material Design list item.
 *
 * @extends LitElement
 */
class MdListItemComponent extends LitElement {
  /**
   * @property {String} label - The label of the list item.
   * @property {String} supportingText - The supporting text of the list item.
   * @property {Array} leadingItems - An array of leading items for the list item.
   * @property {Array} trailingItems - An array of trailing items for the list item.
   * @property {Boolean} activated - Indicates whether the list item is activated.
   */
  static get properties() {
    return {
      label: { type: String },
      supportingText: { type: String },
      leadingItems: { type: Array },
      trailingItems: { type: Array },
      activated: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.leadingItems = [];
    this.trailingItems = [];
  }

  createRenderRoot() {
    return this;
  }

  /**
   * Renders an individual item based on its type.
   *
   * @param {Object} item - The item to render.
   * @returns {TemplateResult} The HTML template for the rendered item.
   */
  renderItem(item = {}) {
    // prettier-ignore
    return choose(item.item, [
            // ... (existing code remains unchanged)
        ], () => nothing);
  }

  render() {
    // prettier-ignore
    return html`
            ${this.leadingItems?.length ? html`<div class="md-list__start">${this.leadingItems.map(item => this.renderItem(item))}</div>` : nothing}
            ${this.label || this.supportingText ? html`
                <div class="md-list__center">
                    ${this.label ? html`<div class="md-list__label">${this.label}</div>` : nothing}
                    ${this.supportingText ? html`<div class="md-list__supporting-text">${this.supportingText}</div>` : nothing}
                </div>
            ` : nothing}
            ${this.trailingItems?.length ? html`<div class="md-list__end">${this.trailingItems.map(item => this.renderItem(item))}</div>` : nothing}
        `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-list__item');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove('md-list__item');
  }

  /**
   * Initializes the state controller when the element is first updated.
   */
  firstUpdated() {
    this.state = new MdStateController(this, {});
  }

  /**
   * Handles updates to the element.
   *
   * @param {Map} _changedProperties - The changed properties.
   */
  updated(_changedProperties) {
    // ... (existing code remains unchanged)
  }
}

customElements.define('md-list-item', MdListItemComponent);

// ... (MdListRowComponent and MdListComponent remain unchanged)

export { MdListItemComponent, MdListRowComponent, MdListComponent };
