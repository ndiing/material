import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";
/**
 * @extends MdComponent
 * @element md-navigation-list
 */
class MDNavigationListComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {Object} [rippleOptions]
     */
    static properties = {
        items: { type: Array },
        rippleOptions: { type: Object },
    };

    constructor() {
        super();
        this.items = [];
    }

    renderNavigationListItem(item) {
        return html`
            <md-navigation-list-row>
                <md-navigation-list-item
                    .data="${item}"
                    .icon="${ifDefined(item.icon)}"
                    .label="${ifDefined(item.label)}"
                    .selected="${ifDefined(item.selected)}"
                    .disabled="${ifDefined(item.disabled)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .rippleOptions="${ifDefined(item.rippleOptions || this.rippleOptions)}"
                    .badge="${ifDefined(item.badge)}"
                    @click="${this.handleNavigationListItemClick}"
                ></md-navigation-list-item>
            </md-navigation-list-row>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.items.map((item) => this.renderNavigationListItem(item))}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list");
        this.style.setProperty("--md-comp-navigation-list-icon-animation", "none");
        this.handleNavigationListKeydown = this.handleNavigationListKeydown.bind(this);
        window.addEventListener("keydown", this.handleNavigationListKeydown);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("keydown", this.handleNavigationListKeydown);
    }

    async updateScroll() {
        await this.updateComplete;
        const navigationListItemSelected = this.querySelector("md-navigation-list-item[selected]");
        navigationListItemSelected.focus();
        navigationListItemSelected.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant",
        });
    }

    handleNavigationListKeydownArrowUp(event) {
        event.preventDefault();
        const selectedIndex = this.items.findIndex((item) => item.selected);
        const prevIndex = selectedIndex - 1;

        if (prevIndex === -1) return;
        this.items.forEach((item, index) => {
            item.selected = index === prevIndex;
        });
        this.requestUpdate();
        this.updateScroll();
        /**
         * @event onNavigationListKeydownArrowUp
         * @property {Object} event
         */
        this.emit("onNavigationListKeydownArrowUp", { event });
    }

    async handleNavigationListKeydownArrowDown(event) {
        event.preventDefault();
        const selectedIndex = this.items.findIndex((item) => item.selected);
        const nextIndex = selectedIndex + 1;

        if (nextIndex === this.items.length) return;
        this.items.forEach((item, index) => {
            item.selected = index === nextIndex;
        });
        this.requestUpdate();
        this.updateScroll();
        /**
         * @event onNavigationListKeydownArrowDown
         * @property {Object} event
         */
        this.emit("onNavigationListKeydownArrowDown", { event });
    }

    handleNavigationListKeydownEnter(event) {
        event.preventDefault();
        /**
         * @event onNavigationListKeydownEnter
         * @property {Object} event
         */
        this.emit("onNavigationListKeydownEnter", { event });
    }

    handleNavigationListKeydown(event) {
        if (this.contains(document.activeElement)) {
            if (event.key === "ArrowUp") this.handleNavigationListKeydownArrowUp(event);
            else if (event.key === "ArrowDown") this.handleNavigationListKeydownArrowDown(event);
            else if (event.key === "Enter") this.handleNavigationListKeydownEnter(event);
            /**
             * @event onNavigationListKeydown
             * @property {Object} event
             */
            this.emit("onNavigationListKeydown", { event });
        }
    }

    handleNavigationListItemClick(event) {
        this.style.removeProperty("--md-comp-navigation-list-icon-animation");
        const data = event.currentTarget.data;
        this.items.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        /**
         * @event onNavigationListItemClick
         * @property {Object} event
         */
        this.emit("onNavigationListItemClick", { event });
    }
}

customElements.define("md-navigation-list", MDNavigationListComponent);

export { MDNavigationListComponent };
