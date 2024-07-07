import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * Represents a menu component.
 * @extends MDSheetComponent
 * @tagname md-menu
 * @fires MDMenuComponent#onMenuTreeItemClick - Event fired when a tree item in the menu is clicked.
 */
class MDMenuComponent extends MDSheetComponent {
    /**
     * Inherits properties from MDSheetComponent and MDTreeComponent.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * Gets the body of the menu, which includes a tree component.
     * @returns {TemplateResult} The HTML template for the menu body.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-menu__tree"
                .variant="${"plain"}"
                .list="${this.list}"
                @onTreeItemClick="${this.handleMenuTreeItemClick}"
            ></md-tree>
        `];
    }

    /**
     * Sets the body of the menu.
     * @param {TemplateResult} value - The new value for the menu body.
     */
    set body(value) {
        this._body = value;
    }

    constructor() {
        super();
        this.popper = new MDPopperController(this, {});
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-menu");
    }

    handleMenuTreeItemClick(event) {
        this.close();
        this.emit("onMenuTreeItemClick", event);
    }

    /**
     * Shows the menu as a modal.
     * @param {HTMLElement} button - The button element that triggers the menu.
     * @param {Object} options - Additional options for customizing menu behavior.
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * Shows the menu.
     * @param {HTMLElement} button - The button element that triggers the menu.
     * @param {Object} options - Additional options for customizing menu behavior.
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * Sets the placement of the menu relative to a button.
     * @param {HTMLElement} button - The button element that triggers the menu.
     * @param {Object} options - Additional options for customizing menu placement.
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            /* prettier-ignore */
            placements: [
                "top-start", "top-end", "top", 
                "below-start", "below-end", "below", 
                "bottom-start", "bottom-end", "bottom", 
                "above-start", "above-end", "above", 
                "left-start", "left-end", "left", 
                "after-start", "after-end", "after", 
                "right-start", "right-end", "right", 
                "before-start", "before-end", "before", 
                "center"
            ],
            ...options,
        });
    }
}

customElements.define("md-menu", MDMenuComponent);

export { MDMenuComponent };
