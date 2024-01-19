import { LitElement, html, nothing } from 'lit';
import { MdStateController } from '../state/state';

/**
 * @extends LitElement
 */
class MdIconButtonComponent extends LitElement {
  /**
   * @property {String} type - Type of the button.
   * @property {String} icon - Icon to be displayed inside the button.
   * @property {String} ui - UI style of the button.
   * @property {Boolean} toggle - Indicates whether the button is in toggle mode.
   * @property {Boolean} activated - Indicates whether the button is activated (only applicable in toggle mode).
   */
  static get properties() {
    return {
      type: { type: String },
      icon: { type: String },
      ui: { type: String },
      toggle: { type: Boolean },
      activated: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.type = 'button';
  }

  /**
   * @override
   * @returns {Element} - The element to use as the render root.
   */
  createRenderRoot() {
    return this;
  }

  /**
   * @override
   * @returns {TemplateResult} - The rendered HTML template.
   */
  render() {
    // prettier-ignore
    return html`
            <button class="md-icon-button__native"
                .type="${this.type}"
                @click="${this.onIconButtonClick}"
            ></button>
            ${this.icon ? html`<div class="md-icon-button__icon">${this.icon}</div>` : nothing}
        `;
  }

  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-icon-button');
  }

  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.classList.remove('md-icon-button');
  }

  /**
   * Returns the native button element.
   * @type {Element}
   */
  get iconButtonNative() {
    return this.querySelector('.md-icon-button__native');
  }

  /**
   * @override
   * Initializes the state controller after the element has been first updated.
   */
  firstUpdated() {
    this.state = new MdStateController(this, {
      button: this.iconButtonNative,
      containment: false,
      size: this.ui ? (40 / 40) * 100 : (40 / 24) * 100,
      fadeout: true,
    });
  }

  /**
   * @override
   * Handles updates to the properties of the element.
   * @param {Map} _changedProperties - Map of changed properties.
   */
  updated(_changedProperties) {
    // ... (existing code)
    // Additional code for handling "ui" and "toggle" property changes.
    if (_changedProperties.has('ui')) {
      ['filled', 'filled-tonal', 'outlined'].forEach((ui) => {
        this.classList.remove('md-icon-button--' + ui);
      });
      if (this.ui) {
        this.classList.add('md-icon-button--' + this.ui);
      }
    }
    if (_changedProperties.has('toggle')) {
      if (this.toggle) {
        this.classList.add('md-icon-button--toggle');
      }else{
        this.classList.remove('md-icon-button--toggle');
      }
    }
  }

  /**
   * Handles the click event on the icon button.
   * @param {Event} event - The click event.
   */
  onIconButtonClick(event) {
    if (this.toggle) {
      this.activated = !this.activated;
    }
    /**
     * @fires MdIconButtonComponent#onIconButtonClick
     * @type {CustomEvent}
     * @property {Event} detail.event - The original click event.
     */
    this.dispatchEvent(
      new CustomEvent('onIconButtonClick', {
        bubbles: true,
        cancelable: true,
        detail: { event },
      })
    );
  }
}

customElements.define('md-icon-button', MdIconButtonComponent);

export { MdIconButtonComponent };
