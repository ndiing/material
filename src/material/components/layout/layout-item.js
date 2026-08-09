import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdLayoutItem extends MdElement {
    static properties = {
        region: { type: String },
        open: { type: Boolean, reflect: true },
        size: { type: Number },
        modal: { type: Boolean },
        collapsedSize: { type: Number },
        expanded: { type: Boolean },
        dockedOnCollapsed: { type: Boolean },
        closeOnScrimClick: { type: Boolean },
        collapseOnScrimClick: { type: Boolean },
        showScrimOnOpen: { type: Boolean },
        showScrimOnExpanded: { type: Boolean },
    };

    regions = ["north", "east", "south", "west", "center"];

    get currentSize() {
        return this.expanded ? this.size : this.collapsedSize;
    }

    get currentValue() {
        const size = this.currentSize;
        const dockedSize = this.dockedOnCollapsed ? this.collapsedSize : 0;
        return {
            north: this.modal ? dockedSize : size,
            east: this.modal ? dockedSize : size,
            south: this.modal ? dockedSize : size,
            west: this.modal ? dockedSize : size,
        }[this.region];
    }

    constructor() {
        super();

        this.region = "center";
        this.size = 0;
        this.collapsedSize = 0;
        this.expanded = true;
        this.dockedOnCollapsed = false;
        this.closeOnScrimClick = true;
        this.showScrimOnOpen = true;
        this.showScrimOnExpanded = false;
        this.collapseOnScrimClick = false;

        this._handleLayoutItemTransitionend = this._handleLayoutItemTransitionend.bind(this);
        this._handleLayoutItemScrimClick = this._handleLayoutItemScrimClick.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.on("transitionend", this._handleLayoutItemTransitionend);

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
            this.scrimElement.on("onScrimClick", this._handleLayoutItemScrimClick);
        }

        this.classList.add("md-layout__item");

        this.requestUpdate("open", false);
        this.requestUpdate("expanded", false);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.parentElement.style.removeProperty(`--md-comp-layout-item-${this.region}-value`);
        this.parentElement.classList.remove("md-layout--open");
        this.parentElement.classList.remove("md-layout--expanded");

        if (this.scrimElement) {
            this.scrimElement.off("onScrimClick", this._handleLayoutItemScrimClick);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.off("transitionend", this._handleLayoutItemTransitionend);

        this.classList.remove("md-layout__item");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-layout__item--${region}`, this.region === region);
            });
        }

        if (_changedProperties.has("open")) {
            this._updateValue();
            this.classList.toggle("md-layout__item--open", Boolean(this.open));
            if (this.showScrimOnOpen && this.modal) {
                if (this.open) {
                    this.scrimElement.show();
                } else {
                    this.scrimElement.close();
                }
            }
        }

        if (_changedProperties.has("size")) {
            this._updateSize();
        }

        if (_changedProperties.has("dockedOnCollapsed") || _changedProperties.has("collapsedSize")) {
            if (this.dockedOnCollapsed) {
                this.parentElement.style.setProperty(`--md-comp-layout-item-${this.region}-collapsed-size`, `${this.collapsedSize}px`);
            }
        }

        if (_changedProperties.has("modal")) {
            this.classList.toggle("md-layout__item--modal", Boolean(this.modal));
        }

        if (_changedProperties.has("expanded")) {
            this._updateSize();
            this._updateValue();
            this.classList.toggle("md-layout__item--expanded", Boolean(this.expanded));
            this.parentElement.classList.add("md-layout--expanded");
            if (this.showScrimOnExpanded && this.modal) {
                if (this.expanded) {
                    this.scrimElement.show();
                } else {
                    this.scrimElement.close();
                }
            }
        }
    }

    _handleLayoutItemScrimClick(event) {
        if (this.closeOnScrimClick) {
            this.close();
        }
        if (this.collapseOnScrimClick) {
            this.collapse();
        }
    }

    _updateSize() {
        this.parentElement.style.setProperty(`--md-comp-layout-item-${this.region}-size`, `${this.currentSize}px`);
    }

    _updateValue() {
        if (this.open) {
            this.parentElement.classList.add("md-layout--open");
            this.parentElement.style.setProperty(`--md-comp-layout-item-${this.region}-value`, `${this.currentValue}px`);
        } else {
            this.parentElement.style.removeProperty(`--md-comp-layout-item-${this.region}-value`);
        }
    }

    _handleLayoutItemTransitionend(event) {
        if (event.target !== event.currentTarget) {
            return;
        }

        if (this.open) {
            this.parentElement.classList.remove("md-layout--open");
            this.emit("onLayoutItemShowed", { event, element: this });
        } else {
            this.emit("onLayoutItemClosed", { event, element: this });
        }

        this.parentElement.classList.remove("md-layout--expanded");
        if (this.expanded) {
            this.emit("onLayoutItemExpanded", { event, element: this });
        } else {
            this.emit("onLayoutItemCollapsed", { event, element: this });
        }
    }

    show() {
        this.open = true;
        this.emit("onLayoutItemShow", { element: this });
    }
    close() {
        this.open = false;
        this.emit("onLayoutItemClose", { element: this });
    }
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    expand() {
        if (this.collapsedSize === 0 || !this.open) {
            return;
        }
        this.expanded = true;
        this.emit("onLayoutItemExpand", { element: this });
    }
    collapse() {
        if (this.collapsedSize === 0 || !this.open) {
            return;
        }
        this.expanded = false;
        this.emit("onLayoutItemCollapse", { element: this });
    }
    toggleCollapse() {
        if (this.expanded) {
            this.collapse();
        } else {
            this.expand();
        }
    }
}

customElements.define("md-layout-item", MdLayoutItem);

export { MdLayoutItem };
