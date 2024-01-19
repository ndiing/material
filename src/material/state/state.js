/**
 * Controller class for managing the state of an element.
 */
class MdStateController {
  /**
   * Creates an instance of MdStateController.
   * @param {HTMLElement} host - The host element.
   * @param {Object} [options={}] - Additional options for the controller.
   * @property {HTMLElement} options.container - The container element for the state.
   * @property {boolean} options.containment - Whether the state is contained.
   * @property {boolean|undefined} options.fadeout - Whether to apply fadeout effect.
   * @property {boolean|undefined} options.inverted - Whether the state is inverted.
   * @property {string|undefined} options.button - The button element selector.
   * @property {number|undefined} options.size - The size of the state.
   */
  constructor(host, options = {}) {
    this.host = host;
    this.options = {
      container: this.host,
      containment: true,
      fadeout: undefined,
      inverted: undefined,
      button: undefined,
      size: undefined,
      ...options,
    };
    this.host.addController(this);
  }

  /**
   * Callback when the host element is connected to the DOM.
   */
  hostConnected() {
    this.options.container.classList.add('md-state');

    if (this.options.containment) {
      this.options.container.classList.add('md-state--containment');
    } else {
      this.options.container.classList.remove('md-state--containment');
    }

    if (this.options.fadeout) {
      this.options.container.classList.add('md-state--fadeout');
    } else {
      this.options.container.classList.remove('md-state--fadeout');
    }

    if (this.options.inverted) {
      this.options.container.classList.add('md-state--inverted');
    } else {
      this.options.container.classList.remove('md-state--inverted');
    }

    // this.button = this.options.container;
    // if (this.options.button) {
    //     this.button = await new Promise((resolve) => {
    //         let button;
    //         let observer;
    //         const callback = () => {
    //             button = this.options.container.querySelector(this.options.button);
    //             if (button) {
    //                 if (observer) {
    //                     observer.disconnect();
    //                 }
    //                 resolve(button);
    //             }
    //         };
    //         callback();
    //         if (!button) {
    //             observer = new MutationObserver(callback);
    //             observer.observe(this.options.container, {
    //                 childList: true,
    //                 subtree: true,
    //             });
    //         }
    //     });
    // }

    /**
     * The button element associated with the state.
     * @type {HTMLElement}
     */
    this.button = this.options.button || this.options.container;
    this.button.classList.add('md-state--button');
    this.button.setAttribute('tabIndex', 0);

    /**
     * The layer element for the state.
     * @type {HTMLElement}
     */
    this.layer = document.createElement('span');
    this.layer.classList.add('md-state__layer');
    this.options.container.append(this.layer);

    const rect = this.options.container.getBoundingClientRect();
    if (!this.options.size) {
      this.options.size =
        (Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) /
          rect.width) *
        100;
    }
    // console.log(this.options.size)
    this.layer.style.setProperty('width', this.options.size + '%');

    this.handlePointerenter = this.handlePointerenter.bind(this);
    this.handlePointerleave = this.handlePointerleave.bind(this);
    this.handlePointerdown = this.handlePointerdown.bind(this);
    this.handlePointerup = this.handlePointerup.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.button.addEventListener('pointerenter', this.handlePointerenter);
    this.button.addEventListener('pointerleave', this.handlePointerleave);
    this.button.addEventListener('pointerdown', this.handlePointerdown);
    this.button.addEventListener('focus', this.handleFocus);
    this.button.addEventListener('blur', this.handleBlur);
  }

  /**
   * Event handler for pointer enter.
   * @param {PointerEvent} event - The pointer enter event.
   * @fires MdStateController#pointerenter
   */
  handlePointerenter(event) {
    this.options.container.classList.add('md-state--hover');
  }

  /**
   * Event handler for pointer leave.
   * @param {PointerEvent} event - The pointer leave event.
   * @fires MdStateController#pointerleave
   */
  handlePointerleave(event) {
    this.options.container.classList.remove('md-state--hover');
  }

  /**
   * Event handler for pointer down.
   * @param {PointerEvent} event - The pointer down event.
   * @fires MdStateController#pointerdown
   */
  handlePointerdown(event) {
    window.addEventListener('pointerup', this.handlePointerup);

    this.layer.style.setProperty('animation-name', 'none');

    const rect = this.options.container.getBoundingClientRect();

    if (!this.options.centered) {
      const left = (event.clientX - rect.left) / rect.width;
      const top = (event.clientY - rect.top) / rect.height;
      const x = (0.5 - left) * (100 / this.options.size);
      const y =
        (0.5 - top) * ((100 / this.options.size) * (rect.height / rect.width));

      this.layer.style.setProperty('left', left * 100 + '%');
      this.layer.style.setProperty('top', top * 100 + '%');
      this.layer.style.setProperty(
        'transform',
        `translate3d(-50%, -50%, 0) translate3d(${x * 100}%, ${y * 100}%, 0)`
      );
    }

    this.layer.style.setProperty('width', this.options.size + '%');

    if (this.options.fadeout) {
      this.layer.style.setProperty(
        'animation-name',
        'md-state,md-state-fadeout'
      );
    } else {
      this.layer.style.setProperty('animation-name', 'md-state');
    }

    this.options.container.classList.add('md-state--pressed');
  }

  /**
   * Event handler for pointer up.
   * @param {PointerEvent} event - The pointer up event.
   * @fires MdStateController#pointerup
   */
  handlePointerup(event) {
    this.options.container.classList.remove('md-state--pressed');
    window.removeEventListener('pointerup', this.handlePointerup);
  }

  /**
   * Event handler for focus.
   * @param {FocusEvent} event - The focus event.
   * @fires MdStateController#focus
   */
  handleFocus(event) {
    this.options.container.classList.add('md-state--focused');
  }

  /**
   * Event handler for blur.
   * @param {FocusEvent} event - The blur event.
   * @fires MdStateController#blur
   */
  handleBlur(event) {
    this.options.container.classList.remove('md-state--focused');
  }

  // hostUpdate() {}

  // hostUpdated() {}

  /**
   * Callback when the host element is disconnected from the DOM.
   */
  hostDisconnected() {
    this.options.container.classList.remove('md-state');

    this.options.container.classList.remove('md-state--containment');

    this.options.container.classList.remove('md-state--fadeout');

    this.options.container.classList.remove('md-state--inverted');

    this.button.classList.remove('md-state--button');
    this.button.removeAttribute('tabIndex');

    this.layer.style.removeProperty('width');
    this.layer.remove();

    this.button.removeEventListener('pointerenter', this.handlePointerenter);
    this.button.removeEventListener('pointerleave', this.handlePointerleave);
    this.button.removeEventListener('pointerdown', this.handlePointerdown);
    this.button.removeEventListener('focus', this.handleFocus);
    this.button.removeEventListener('blur', this.handleBlur);
  }
}

/**
 * Event triggered when the pointer enters the state.
 * @event MdStateController#pointerenter
 * @type {PointerEvent}
 */

/**
 * Event triggered when the pointer leaves the state.
 * @event MdStateController#pointerleave
 * @type {PointerEvent}
 */

/**
 * Event triggered when the pointer is pressed down on the state.
 * @event MdStateController#pointerdown
 * @type {PointerEvent}
 */

/**
 * Event triggered when the pointer is released.
 * @event MdStateController#pointerup
 * @type {PointerEvent}
 */

/**
 * Event triggered when the state gains focus.
 * @event MdStateController#focus
 * @type {FocusEvent}
 */

/**
 * Event triggered when the state loses focus.
 * @event MdStateController#blur
 * @type {FocusEvent}
 */

export { MdStateController };
