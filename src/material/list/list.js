import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * Material Design List Component.
 * @extends MDComponent
 */
class MDListComponent extends MDComponent {
    /**
     * Properties for the MDListComponent.
     * @property {String} size - Size of the list items ("one-line", "two-line", "three-line").
     * @property {Array} items - Array of items to be rendered in the list.
     * @property {String} type - Type of list selection ("single-select" or "multi-select").
     * @property {Boolean} selectable - Flag indicating if list items are selectable.
     */
    static properties = {
        size: { type: String },
        items: { type: Array },
        type: { type: String },
        selectable: { type: Boolean },
    };

    /**
     * Constructor for MDListComponent.
     */
    constructor() {
        super();

        // default
        this.size = "one-line";
        this.items = [];
        this.type = "single-select";
    }

    /**
     * Callback when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list");
    }

    /**
     * Callback when the element is updated.
     * @param {Map} changedProperties - Map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("size")) {
            ["one-line", "two-line", "three-line"].forEach((size) => {
                this.classList.remove(`md-list--${size}`);
            });
            if (this.size) {
                this.size.split(" ").forEach((size) => {
                    this.classList.add(`md-list--${size}`);
                });
            }
        }
    }

    /**
     * Render method for MDListComponent.
     * @returns {TemplateResult} - The rendered HTML template.
     */
    render() {
        // prettier-ignore
        return this.items.map(
            (item) => html`
                <md-list-row>
                    ${item.headline ? html`<div class="md-list__headline">${item.headline}</div>` : nothing}
                    ${!item.divider && !item.headline ? html`
                        <md-list-item 
                            .item="${item}" 
                            .avatar="${item.avatar}" 
                            .image="${item.image}" 
                            .video="${item.video}" 
                            .icon="${item.icon}" 
                            .label="${item.label}" 
                            .supportingText="${item.supportingText}" 
                            .checkbox="${item.checkbox}" 
                            .radioButton="${item.radioButton}" 
                            .trailingSwitch="${item.trailingSwitch}" 
                            .trailingCheckbox="${item.trailingCheckbox}" 
                            .trailingSupportingText="${item.trailingSupportingText}" 
                            .trailingIcon="${item.trailingIcon}" 
                            .badge="${item.badge}" 
                            .activated="${item.activated}" 
                            .routerLink="${item.routerLink}" 
                            @click="${this.handleListItemClick}"
                        ></md-list-item>
                    ` : nothing}
                    ${item.divider ? html`<md-divider class="md-list__divider"></md-divider>` : nothing}
                </md-list-row>
            `
        );
    }

    /**
     * Event handler for list item click.
     * @param {Event} event - The click event.
     * @fires MDListComponent#onListItemClick
     */
    handleListItemClick(event) {
        const listItem = event.currentTarget;
        const listItemData = listItem.item;

        if (this.selectable) {
            if (this.type === "single-select") {
                for (const item of this.items) {
                    item.activated = item === listItemData;
                }
            } else if (this.type === "multi-select") {
                listItemData.activated = !listItemData.activated;
            }

            this.requestUpdate();
        }

        this.emit("onListItemClick", { event });
    }
}

// Define the custom element.
customElements.define("md-list", MDListComponent);

// Export the component.
export { MDListComponent };
