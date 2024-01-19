import { LitElement, html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdStateController } from '../state/state';

/**
 * A custom switch component built using LitElement.
 *
 * @extends LitElement
 */
class MdSwitchComponent extends LitElement {
  /**
   * Static getter for defining properties of the element.
   *
   * @property {String} name - The name attribute of the switch.
   * @property {Boolean} checked - The checked state of the switch.
   */
  static get properties() {
    return {
      name: { type: String },
      checked: { type: Boolean },
    };
  }

  /**
   * Constructor for MdSwitchComponent.
   */
  constructor() {
    super();
  }

  /**
   * Overrides LitElement's createRenderRoot method.
   *
   * @returns {this} The instance of the element.
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Renders the switch component using LitElement's html template.
   *
   * @returns {TemplateResult} The rendered template.
   */
  render() {
    // prettier-ignore
    return html`
            <input 
                type="checkbox" 
                class="md-switch__native"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                @input="${this.onSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
            </div>
        `
  }

  /**
   * Lifecycle callback when the element is connected to the DOM.
   */
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-switch');
  }

  /**
   * Lifecycle callback when the element is disconnected from the DOM.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove('md-switch');
  }

  /**
   * Returns the native switch element.
   *
   * @returns {HTMLElement} The native switch element.
   */
  get switchNative() {
    return this.querySelector('.md-switch__native');
  }

  /**
   * Returns the switch track element.
   *
   * @returns {HTMLElement} The switch track element.
   */
  get switchTrack() {
    return this.querySelector('.md-switch__track');
  }

  /**
   * Returns the switch thumb element.
   *
   * @returns {HTMLElement} The switch thumb element.
   */
  get switchThumb() {
    return this.querySelector('.md-switch__thumb');
  }

  /**
   * Lifecycle callback when the element is first updated.
   */
  firstUpdated() {
    this.state = new MdStateController(this, {
      container: this.switchThumb,
      button: this.switchNative,
      containment: false,
      fadeout: true,
      centered: true,
    });
  }

  /**
   * Lifecycle callback when the element is updated.
   *
   * @param {Map} _changedProperties - A map of changed properties.
   */
  updated(_changedProperties) {}

  /**
   * Event handler for the native switch input event.
   *
   * @param {Event} event - The input event.
   */
  onSwitchNativeInput(event) {
    this.checked = event.currentTarget.checked;
    /**
     * Fired when the native switch input event occurs.
     *
     * @event MdSwitchComponent#onSwitchNativeInput
     * @type {CustomEvent}
     * @property {Event} detail.event - The input event detail.
     */
    this.dispatchEvent(
      new CustomEvent('onSwitchNativeInput', {
        bubbles: true,
        cancelable: true,
        detail: { event },
      })
    );
  }
}

// Define the custom element.
customElements.define('md-switch', MdSwitchComponent);

export { MdSwitchComponent };
