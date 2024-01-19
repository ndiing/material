import { LitElement, html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdStateController } from '../state/state';

/**
 * Custom element for a radio button.
 *
 * @extends LitElement
 */
class MdRadioButtonComponent extends LitElement {
  /**
   * Properties for the MdRadioButtonComponent.
   *
   * @static
   * @property {String} name - The name attribute for the radio button.
   * @property {Boolean} checked - The checked attribute for the radio button.
   */
  static get properties() {
    return {
      name: { type: String },
      checked: { type: Boolean },
    };
  }

  /**
   * Constructor for MdRadioButtonComponent.
   */
  constructor() {
    super();
  }

  /**
   * Overrides the default render root to use the element itself.
   *
   * @returns {MdRadioButtonComponent} The current instance.
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Renders the radio button element.
   *
   * @returns {TemplateResult} The HTML template result.
   */
  render() {
    // prettier-ignore
    return html`
            <input 
                type="radio" 
                class="md-radio-button__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.onRadioButtonNativeInput}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `;
  }

  /**
   * Adds the "md-radio-button" class when the component is connected.
   */
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-radio-button');
  }

  /**
   * Removes the "md-radio-button" class when the component is disconnected.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove('md-radio-button');
  }

  /**
   * Returns the native radio button element.
   *
   * @returns {HTMLElement} The native radio button element.
   */
  get radioButtonNative() {
    return this.querySelector('.md-radio-button__native');
  }

  /**
   * Returns the track element of the radio button.
   *
   * @returns {HTMLElement} The track element.
   */
  get radioButtonTrack() {
    return this.querySelector('.md-radio-button__track');
  }

  /**
   * Returns the thumb element of the radio button.
   *
   * @returns {HTMLElement} The thumb element.
   */
  get radioButtonThumb() {
    return this.querySelector('.md-radio-button__thumb');
  }

  /**
   * Initializes the state controller after the first update.
   */
  firstUpdated() {
    this.state = new MdStateController(this, {
      container: this.radioButtonTrack,
      button: this.radioButtonNative,
      containment: false,
      fadeout: true,
      size: (40 / 16) * 100,
    });
  }

  /**
   * Handles the input event on the native radio button.
   *
   * @param {Event} event - The input event.
   */
  onRadioButtonNativeInput(event) {
    this.checked = event.currentTarget.checked;
    /**
     * Dispatched when the native radio button is input.
     *
     * @event MdRadioButtonComponent#onRadioButtonNativeInput
     * @type {CustomEvent}
     * @property {Event} detail.event - The input event.
     */
    this.dispatchEvent(
      new CustomEvent('onRadioButtonNativeInput', {
        bubbles: true,
        cancelable: true,
        detail: { event },
      })
    );
  }
}

customElements.define('md-radio-button', MdRadioButtonComponent);

export { MdRadioButtonComponent };
