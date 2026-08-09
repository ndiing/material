## src\material\components\layout

### layout-item
src\material\components\layout\layout-item.js

```js
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
        return this.modal ? dockedSize : size
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

```
### layout
src\material\components\layout\layout.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdLayout extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout");
    }
}

customElements.define("md-layout", MdLayout);

export { MdLayout };

```
### layout
src\material\components\layout\layout.scss

```scss
.md-layout {
    --md-comp-layout-item-north-size: 64px;
    --md-comp-layout-item-south-size: 64px;
    --md-comp-layout-item-west-size: 256px;
    --md-comp-layout-item-east-size: 256px;

    --md-comp-layout-item-north-collapsed-size: 0px;
    --md-comp-layout-item-south-collapsed-size: 0px;
    --md-comp-layout-item-west-collapsed-size: 0px;
    --md-comp-layout-item-east-collapsed-size: 0px;

    --md-comp-layout-item-north-value: 0px;
    --md-comp-layout-item-south-value: 0px;
    --md-comp-layout-item-west-value: 0px;
    --md-comp-layout-item-east-value: 0px;

    display: grid;
    grid-template-rows: var(--md-comp-layout-item-north-value) 1fr var(--md-comp-layout-item-south-value);
    grid-template-columns: var(--md-comp-layout-item-west-value) 1fr var(--md-comp-layout-item-east-value);
    grid-template-areas:
        "north north north"
        "west center east"
        "south south south";
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    //will-change: grid-template-columns, grid-template-rows;
    transition-property: grid-template-columns, grid-template-rows;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-layout__item {
    display: block;
    width: 100%;
    height: 100%;
    overflow: auto;
    //will-change: transform, width, height;
    transition-property: transform, width, height;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-layout__item--north {
    grid-area: north;
    height: var(--md-comp-layout-item-north-size);
    transform: translate3d(0, calc(0px - var(--md-comp-layout-item-north-size)), 0);
    // &.md-layout__item--modal{
    //     &.md-layout__item--open {
    //     }
    // }
}

.md-layout__item--south {
    grid-area: south;
    height: var(--md-comp-layout-item-south-size);
    transform: translate3d(0, 0, 0);
    &.md-layout__item--modal {
        &.md-layout__item--open {
            transform: translate3d(0, calc(0px - var(--md-comp-layout-item-south-size) + var(--md-comp-layout-item-south-collapsed-size)), 0);
        }
    }
}

.md-layout__item--west {
    grid-area: west;
    width: var(--md-comp-layout-item-west-size);
    transform: translate3d(calc(0px - var(--md-comp-layout-item-west-size)), 0, 0);
    // &.md-layout__item--modal{
    //     &.md-layout__item--open {
    //     }
    // }
}

.md-layout__item--east {
    grid-area: east;
    width: var(--md-comp-layout-item-east-size);
    transform: translate3d(0, 0, 0);
    &.md-layout__item--modal {
        &.md-layout__item--open {
            transform: translate3d(calc(0px - var(--md-comp-layout-item-east-size) + var(--md-comp-layout-item-east-collapsed-size)), 0, 0);
        }
    }
}

.md-layout__item--center {
    grid-area: center;
}

.md-layout__item--modal {
    z-index: 20;
    background-color: var(--md-sys-color-surface-container);
    color: var(--md-sys-color-on-surface);
}

.md-layout__item--open {
    transform: translate3d(0, 0, 0);
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-layout__item--expanded {
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-layout--open {
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-layout--expanded {
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

```
