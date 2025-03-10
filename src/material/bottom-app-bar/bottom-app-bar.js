import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { styleMap } from "lit/directives/style-map.js";
/**
 * MDBottomAppBarComponent class responsible for displaying a bottom app bar.
 * @extends MdComponent
 * @element md-bottom-app-bar
 *
 * @example
 * <md-bottom-app-bar
 *     id="bottomAppBar"
 *     actions='[{"icon":"image"},{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
 *     fab="image"
 *     open
 *     onBottomAppBarIconButtonClick="${console.log}"
 *     onBottomAppBarFabClick="${console.log}"
 *     onBottomAppBarShown="${console.log}"
 *     onBottomAppBarClosed="${console.log}"
 * ></md-bottom-app-bar>
 */
class MDBottomAppBarComponent extends MdComponent {
    /**
     * The properties of the component.
     * @property {Array} [actions=[]] - The actions to display in the bottom app bar.
     * @property {string} [fab] - The floating action button (FAB) to display.
     * @property {boolean} [open=false] - Indicates if the bottom app bar is open.
     */
    static properties = {
        actions: { type: Array },
        fab: { type: String },
        open: { type: Boolean, reflect: true },
    };

    /**
     * Creates an instance of the MDBottomAppBarComponent class.
     */
    constructor() {
        super();
    }

    styleIconButton(item, index) {
        return {
            "--md-comp-bottom-app-bar-action-index": index,
        };
    }

    // /**
    //  * Renders an icon button.
    //  * @param {Object} item - The item data for the icon button.
    //  * @returns {TemplateResult} The rendered template for the icon button.
    //  */
    renderIconButton(item, index) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                class="md-bottom-app-bar__action"
                style="${styleMap(this.styleIconButton(item,index))}"
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @onIconButtonClick="${this.handleBottomAppBarIconButtonClick}"
            ></md-icon-button>
        `;
    }

    // /**
    //  * Renders a floating action button (FAB).
    //  * @param {Object|string} item - The item data for the FAB or the icon name.
    //  * @returns {TemplateResult} The rendered template for the FAB.
    //  */
    renderFab(item) {
        /* prettier-ignore */
        return html`
            <md-fab
                class="md-bottom-app-bar__fab"
                .data="${item}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .label="${ifDefined(item?.label)}"
                .type="${ifDefined(item?.type)}"
                .size="${ifDefined(item?.size)}"
                .variant="${ifDefined(item?.variant ?? "unelevated")}"
                @click="${this.handleBottomAppBarFabClick}"
            ></md-fab>
        `;
    }

    // /**
    //  * Renders the bottom app bar.
    //  * @returns {TemplateResult} The rendered template for the bottom app bar.
    //  */
    render() {
        /* prettier-ignore */
        return html` 
            ${this.actions?.length ? html` 
                <div class="md-bottom-app-bar__actions">${this.actions.map((item,index) => this.renderIconButton(item,index))}</div>
            ` : nothing} 
            ${this.fab ? this.renderFab(this.fab) : nothing} 
        `;
    }

    // /**
    //  * Called when the element is connected to the DOM.
    //  * Adds the 'md-bottom-app-bar' class and updates the component dimensions.
    //  */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-bottom-app-bar");
        this.style.setProperty("--md-comp-bottom-app-bar-animation", "none");

        await this.updateComplete;

        this.style.setProperty("--md-comp-bottom-app-bar-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-bottom-app-bar-height", this.clientHeight + "px");
    }

    /**
     * Shows the bottom app bar.
     */
    show() {
        this.style.removeProperty("--md-comp-bottom-app-bar-animation");
        this.open = true;
        /**
         * @event onBottomAppBarShow
         * @property {Object} event - The show event.
         */
        this.emit("onBottomAppBarShow");
    }

    /**
     * Closes the bottom app bar.
     */
    close() {
        this.style.removeProperty("--md-comp-bottom-app-bar-animation");
        this.open = false;
        /**
         * @event onBottomAppBarClose
         * @property {Object} event - The close event.
         */
        this.emit("onBottomAppBarClose");
    }

    /**
     * Toggles the visibility of the bottom app bar.
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    // /**
    //  * Handles the icon button click event in the bottom app bar.
    //  * @param {Event} event - The icon button click event.
    //  */
    handleBottomAppBarIconButtonClick(event) {
        /**
         * @event onBottomAppBarIconButtonClick
         * @property {Object} event - The icon button click event.
         */
        this.emit("onBottomAppBarIconButtonClick", { event });
    }

    // /**
    //  * Handles the FAB click event in the bottom app bar.
    //  * @param {Event} event - The FAB click event.
    //  */
    handleBottomAppBarFabClick(event) {
        /**
         * @event onBottomAppBarFabClick
         * @property {Object} event - The FAB click event.
         */
        this.emit("onBottomAppBarFabClick", { event });
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);

export { MDBottomAppBarComponent };
