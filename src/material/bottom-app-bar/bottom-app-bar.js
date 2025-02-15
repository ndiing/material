import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @extends MdComponent
 * @element md-bottom-app-bar
 */
class MdBottomAppBarComponent extends MdComponent {
    /**
     * @property {Array} [actions]
     * @property {String} [fab]
     * @property {Boolean} [open]
     */
    static properties = {
        actions: { type: Array },
        fab: { type: String },
        open: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                class="md-bottom-app-bar__action"
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleBottomAppBarIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderFab(item) {
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

    render() {
        return html` ${this.actions?.length ? html` <div class="md-bottom-app-bar__actions">${this.actions.map((action) => this.renderIconButton(action))}</div> ` : nothing} ${this.fab ? this.renderFab(this.fab) : nothing} `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
        /**
         * @event onBottomAppBarShow
         * @type \{Object\}
         */
        this.emit("onBottomAppBarShow");
    }

    /**
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        /**
         * @event onBottomAppBarClose
         * @type \{Object\}
         */
        this.emit("onBottomAppBarClose");
    }

    /**
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    handleBottomAppBarIconButtonClick(event) {
        /**
         * @event onBottomAppBarIconButtonClick
         * @type \{Object\}
         */
        this.emit("onBottomAppBarIconButtonClick", { event });
    }

    handleBottomAppBarFabClick(event) {
        /**
         * @event onBottomAppBarFabClick
         * @type \{Object\}
         */
        this.emit("onBottomAppBarFabClick", { event });
    }
}
customElements.define("md-bottom-app-bar", MdBottomAppBarComponent);
export { MdBottomAppBarComponent };
