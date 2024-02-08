import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardComponent } from "../card/card.js";

/**
 * MDSnackbarComponent represents a snackbar component.
 *
 * @extends MDCardComponent
 * @fires MDSnackbarComponent#onSnackbarScrimClick
 */
class MDSnackbarComponent extends MDCardComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} supportingText - The text displayed in the snackbar body.
     * @property {String} icon - The icon to be displayed in the snackbar footer.
     * @property {String} button - The label of the button to be displayed in the snackbar footer.
     */
    static properties = {
        open: { type: Boolean, reflect: true },
        supportingText: { type: String },
        icon: { type: String },
        button: { type: String },
    };

    /**
     * Checks if the snackbar has a footer (icon or button).
     *
     * @returns {boolean} - True if the snackbar has a footer, otherwise false.
     */
    get hasSnackbarFooter() {
        return this.icon || this.button;
    }

    /**
     * Constructor for MDSnackbarComponent.
     */
    constructor() {
        super();

        // // Default supporting text is derived from child nodes
        // this.supportingText = Array.from(this.childNodes);
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-snackbar");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-snackbar");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     * @override
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     * @override
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-snackbar__body">${this.supportingText}</div>
            ${this.hasSnackbarFooter ? html`
                <div class="md-snackbar__footer">
                    ${this.icon ? html`<md-icon-button 
                        class="md-snackbar__icon-button" 
                        .icon="${this.icon?.icon ?? this.icon}"
                        @click="${this.handleIconButtonClick}"
                    ></md-icon-button>` : nothing}
                    ${this.button ? html`<md-button 
                        class="md-snackbar__button" 
                        .label="${this.button?.label ?? this.button}"
                        @click="${this.handleButtonClick}"
                    ></md-button>` : nothing}
                </div>
            ` : nothing}
        `;
    }

    /**
     * Shows the snackbar.
     */
    show() {
        this.open = true;
        this.timeout = setTimeout(() => {
            this.close();
        }, 1000 * 3);
    }

    /**
     * Closes the snackbar.
     */
    close() {
        clearTimeout(this.timeout);
        const callback = () => {
            this.off("transitionend", callback);
            this.emit("onClosed");
        };
        this.on("transitionend", callback);
        this.open = false;
    }

    /**
     * Toggles the snackbar's visibility.
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleIconButtonClick(event){
        this.emit('onIconButtonClick',{event})
    }
    handleButtonClick(event){
        this.emit('onButtonClick',{event})
    }

    static queue = (() => {
        let pending = Promise.resolve();
        let execute = async (callback) => {
            try {
                await pending;
            } finally {
                return callback();
            }
        };
        return (callback) => (pending = execute(callback));
    })();

    static show(options = {}) {
        options={
            onIconButtonClick: () => {},
            onButtonClick: () => {},
            ...options
        }
        return this.queue(
            () =>
                new Promise((resolve) => {
                    const element = document.createElement("md-snackbar");
                    element.supportingText = options.supportingText;
                    element.icon = options.icon;
                    element.button = options.button;
                    element.on('onIconButtonClick',() => options.onIconButtonClick)
                    element.on('onButtonClick',() => options.onButtonClick)
                    element.on('onClosed',() => {
                        element.remove()
                        resolve()
                    })
                    document.body.append(element);
                    element.show();
                })
        );
    }
}

// Define the component
customElements.define("md-snackbar", MDSnackbarComponent);

export { MDSnackbarComponent };
