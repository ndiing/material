import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { renderFab, renderIconButton, renderList } from "../../utils/render-component.js";
import { MdList } from "../list/list.js";
import { MdLayoutItem } from "../layout/layout-item.js";

class MdNavigationRail extends MdLayoutItem {
    static properties = {
        ...MdList.properties,
        ...MdLayoutItem.properties,
        iconButton: { type: Object },
        fab: { type: Object },
        expanded: { type: Boolean },
    };

    constructor() {
        super();

        this.region = "west";
        this.expanded = false;
        this.showScrimOnExpanded = true;
        this.showScrimOnOpen = false;
        this.closeOnScrimClick = false;
        this.collapseOnScrimClick = true;
        this.dockedOnCollapsed = true;
        this.size = 220;
        this.collapsedSize = 96;
    }

    renderIconButton() {
        const iconButtonProperties = {
            classMap: {
                "md-navigation-rail__icon-button": true,
            },
            variant: "toggle",
            color: "standard",
            ...this.iconButton,
            selected: this.expanded,
        };
        return renderIconButton(iconButtonProperties);
    }

    renderFab() {
        const fabProperties = {
            classMap: {
                "md-navigation-rail__fab": true,
            },
            unelevated: true,
            ...this.fab,
            label: this.expanded ? this.fab.label : "",
        };
        return renderFab(fabProperties);
    }

    renderList() {
        const listProperties = {
            classMap: {
                "md-navigation-rail__list": true,
            },
            items: this.items,
            singleSelect: true,
            activeRow: true,
            selectOnEnterActiveRow: true,
            rippleOptions: this.expanded ? { container: ".md-list__item", centered: true } : { container: ".md-list__icon", centered: true },
        };
        return renderList(listProperties);
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.iconButton?this.renderIconButton():nothing}
            ${this.fab?this.renderFab():nothing}
            ${this.renderList()}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-rail");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("expanded")) {
            this.classList.toggle(`md-navigation-rail--expanded`, Boolean(this.expanded));
            this.classList.toggle(`md-navigation-rail--collapsed`, !Boolean(this.expanded));
        }

        if (_changedProperties.has("modal")) {
            this.classList.toggle(`md-navigation-rail--modal`, Boolean(this.modal));
        }
    }
}

customElements.define("md-navigation-rail", MdNavigationRail);

export { MdNavigationRail };
