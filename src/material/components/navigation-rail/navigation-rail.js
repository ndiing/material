import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { renderFab, renderIconButton, renderList } from "../../utils/render-component.js";
import { MdList } from "../list/list.js";
import { MdLayoutItem } from "../layout/layout-item.js";

class MdNavigationRail extends MdLayoutItem {
    static properties = {
        ...MdList.properties,
        ...MdLayoutItem.properties,
        collapsedWidth: { type: Number },
        expandedWidth: { type: Number },
        iconButton: { type: Object },
        fab: { type: Object },
        expanded: { type: Boolean },
    };

    /**@override*/
    get regionTranslate() {
        return {
            west: { property: "--md-comp-layout-west-translate-x", value: (this.modal ? this.collapsedWidth : this.width) + "px" },
        };
    }

    constructor() {
        super();

        this.region = "west";
        this.collapsedWidth = 96;
        this.expandedWidth = 220;
        this.width = this.collapsedWidth;
        this.closeOnScrimClick = false;
        this.showScrimOnOpen = false;
        this.expanded = false;

        this._handleNavigationRailScrimClick = this._handleNavigationRailScrimClick.bind(this);
        this._handleNavigationRailTransitionend = this._handleNavigationRailTransitionend.bind(this);
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

        this.on("transitionend", this._handleNavigationRailTransitionend);

        if (this.scrimElement) {
            this.scrimElement.on("onScrimClick", this._handleNavigationRailScrimClick);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.scrimElement) {
            this.scrimElement.off("onScrimClick", this._handleNavigationRailScrimClick);
        }

        this.off("transitionend", this._handleNavigationRailTransitionend);

        this.classList.remove("md-navigation-rail");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("expanded") && this.open) {
            queueMicrotask(() => {
                if (this.expanded) {
                    this.width = this.expandedWidth;
                } else {
                    this.width = this.collapsedWidth;
                }
            });
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("expanded") && this.open) {
            if (this.expanded) {
                this.classList.add(`md-navigation-rail--expanded`);
                this.classList.remove(`md-navigation-rail--collapsed`);
                if (this.modal) {
                    this.scrimElement.show();
                }
            } else {
                this.classList.remove(`md-navigation-rail--expanded`);
                this.classList.add(`md-navigation-rail--collapsed`);
                this.scrimElement.close();
            }
        }

        if (_changedProperties.has("modal")) {
            this.classList.toggle(`md-navigation-rail--modal`, Boolean(this.modal));
        }
    }

    /**@override*/
    _restoreState() {
        super._restoreState();
        this.requestUpdate("expanded", false);
    }

    /**@override*/
    _cleanState() {
        super._cleanState();
        this.classList.remove(`md-navigation-rail--expanded`);
    }

    _handleNavigationRailTransitionend(event) {
        if (this.expanded) {
            this.emit("onNavigationRailExpanded", { event, element: this });
        } else {
            this.emit("onNavigationRailCollapsed", { event, element: this });
        }
    }

    _handleNavigationRailScrimClick(event) {
        this.collapse();
        this.emit("onNavigationRailScrimClick", { event, element: this });
    }

    collapse() {
        if (!this.open) {
            return;
        }
        this.expanded = false;
        this.emit("onNavigationRailCollapse", { element: this });
    }

    expand() {
        if (!this.open) {
            return;
        }
        this.expanded = true;
        this.emit("onNavigationRailExpand", { element: this });
    }

    toggleCollapse() {
        if (this.expanded) {
            this.collapse();
        } else {
            this.expand();
        }
    }
}

customElements.define("md-navigation-rail", MdNavigationRail);

export { MdNavigationRail };
