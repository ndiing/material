import { LitElement, html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdStateController } from '../state/state';

/**
 * Checkbox component for Material Design.
 *
 * @extends LitElement
 */
class MdCheckboxComponent extends LitElement {
  /**
   * Static property definitions for the component.
   *
   * @property {String} name - The name of the checkbox.
   * @property {Boolean} indeterminate - Indicates whether the checkbox is in an indeterminate state.
   * @property {Boolean} checked - Indicates whether the checkbox is checked.
   */
  static get properties() {
    return {
      name: { type: String },
      indeterminate: { type: Boolean },
      checked: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  /**
   * Renders the checkbox component.
   *
   * @returns {TemplateResult} The HTML template result.
   */
  render() {
    // prettier-ignore
    return html`
            <input 
                type="checkbox" 
                class="md-checkbox__native"
                .name="${ifDefined(this.name)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.onCheckboxNativeInput}"
            >
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-checkbox');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove('md-checkbox');
  }

  /**
   * Returns the checkbox native element.
   *
   * @property {HTMLElement} checkboxNative - The checkbox native element.
   */
  get checkboxNative() {
    return this.querySelector('.md-checkbox__native');
  }

  /**
   * Returns the checkbox track element.
   *
   * @property {HTMLElement} checkboxTrack - The checkbox track element.
   */
  get checkboxTrack() {
    return this.querySelector('.md-checkbox__track');
  }

  /**
   * Returns the checkbox thumb element.
   *
   * @property {HTMLElement} checkboxThumb - The checkbox thumb element.
   */
  get checkboxThumb() {
    return this.querySelector('.md-checkbox__thumb');
  }

  /**
   * Called after the element's first update.
   */
  firstUpdated() {
    this.state = new MdStateController(this, {
      container: this.checkboxTrack,
      button: this.checkboxNative,
      containment: false,
      fadeout: true,
      size: (40 / 14) * 100,
    });
  }

  /**
   * Called when the element has been updated.
   *
   * @param {Map} _changedProperties - The changed properties.
   */
  updated(_changedProperties) {}

  /**
   * Handles the input event on the checkbox native element.
   *
   * @param {Event} event - The input event.
   */
  onCheckboxNativeInput(event) {
    this.indeterminate = event.currentTarget.indeterminate;
    this.checked = event.currentTarget.checked;
    /**
     * Dispatched when the checkbox native input event occurs.
     *
     * @event MdCheckboxComponent#onCheckboxNativeInput
     * @type {CustomEvent}
     * @property {Event} detail.event - The original input event.
     */
    this.dispatchEvent(
      new CustomEvent('onCheckboxNativeInput', {
        bubbles: true,
        cancelable: true,
        detail: { event },
      })
    );
  }
}

customElements.define('md-checkbox', MdCheckboxComponent);

export { MdCheckboxComponent };
