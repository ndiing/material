import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdLayoutItem extends MdElement {
    static properties = {
        region: { type: String },
        size: { type: Number },
        collapsedSize: { type: Number },
        modal: { type: Boolean },
        open: { type: Boolean },
        expanded: { type: Boolean },
        docked: { type: Boolean },
        showScrimOnOpen: { type: Boolean },
        showScrimOnExpanded: { type: Boolean },
        closeOnScrimClick: { type: Boolean },
        collapseOnScrimClick: { type: Boolean },
    };

    regions = ["north", "east", "south", "west", "center"];

    constructor() {
        super();

        this.region = "center";
        this.collapsedSize = 0;
        this.expanded = true;
        this.showScrimOnOpen = true;
        this.showScrimOnExpanded = false;
        this.closeOnScrimClick = true;
        this.collapseOnScrimClick = false;

        this._handleLayoutItemScrimClick = this._handleLayoutItemScrimClick.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__item");

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
            this.scrimElement.addEventListener("onScrimClick", this._handleLayoutItemScrimClick);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.scrimElement) {
            this.scrimElement.removeEventListener("onScrimClick", this._handleLayoutItemScrimClick);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.classList.remove("md-layout__item");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-layout__item--${region}`, this.region === region);
            });
        }

        if (_changedProperties.has("modal")) {
            this.classList.toggle("md-layout__item--modal", Boolean(this.modal));
        }

        if (_changedProperties.has("docked")) {
            this.classList.toggle("md-layout__item--docked", Boolean(this.docked));
        }

        if (_changedProperties.has("size")) {
            const currentSize = this.expanded ? this.size : this.collapsedSize;
            this.parentElement.style.setProperty(`--md-comp-layout-item-${this.region}-size`, `${currentSize}px`);
        }

        if (_changedProperties.has("collapsedSize")) {
            this.parentElement.style.setProperty(`--md-comp-layout-item-${this.region}-collapsed-size`, `${this.collapsedSize}px`);
        }

        if (_changedProperties.has("open")) {
            this.classList.toggle("md-layout__item--open", Boolean(this.open));
            this._updateCssVars();
            if (this.modal && this.showScrimOnOpen) {
                if (this.open) {
                    this.scrimElement.show();
                } else {
                    this.scrimElement.close();
                }
            }
        }

        if (_changedProperties.has("expanded")) {
            this.classList.toggle("md-layout__item--expanded", Boolean(this.expanded));
            this._updateCssVars();
            if (this.modal && this.showScrimOnExpanded) {
                if (this.expanded) {
                    this.scrimElement.show();
                } else {
                    this.scrimElement.close();
                }
            }
        }
    }

    _updateCssVars() {
        const currentSize = this.expanded ? this.size : this.collapsedSize;
        const dockedSize = this.docked ? this.collapsedSize : 0;
        const currentValue = this.modal ? dockedSize : currentSize;
        if (this.open) {
            this.parentElement.style.setProperty(`--md-comp-layout-item-${this.region}-value`, `${currentValue}px`);
        } else {
            this.parentElement.style.removeProperty(`--md-comp-layout-item-${this.region}-value`);
        }
        this.parentElement.style.setProperty(`--md-comp-layout-item-${this.region}-size`, `${currentSize}px`);
    }

    _handleLayoutItemScrimClick() {
        if (this.closeOnScrimClick) {
            this.close();
        }
        if (this.collapseOnScrimClick) {
            this.collapse();
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    expand() {
        if (!this.open) {
            return;
        }
        this.expanded = true;
    }

    collapse() {
        if (!this.open) {
            return;
        }
        this.expanded = false;
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
