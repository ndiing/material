import { MdElement } from "../../base/element.js";

class MdLayoutItem extends MdElement {
    static properties = {
        region: { type: String },
        modal: { type: Boolean },
        open: { type: Boolean, reflect: true },
        width: { type: Number },
        height: { type: Number },
    };

    regions = ["center", "west", "north", "east", "south"];

    get regionSize() {
        return {
            north: { property: "--md-comp-layout-north-height", value: this.height + "px" },
            south: { property: "--md-comp-layout-south-height", value: this.height + "px" },
            west: { property: "--md-comp-layout-west-width", value: this.width + "px" },
            east: { property: "--md-comp-layout-east-width", value: this.width + "px" },
        };
    }

    get regionTranslate() {
        return {
            north: { property: "--md-comp-layout-north-translate-y", value: (this.modal ? 0 : this.height) + "px" },
            south: { property: "--md-comp-layout-south-translate-y", value: this.height + "px" },
            west: { property: "--md-comp-layout-west-translate-x", value: (this.modal ? 0 : this.width) + "px" },
            east: { property: "--md-comp-layout-east-translate-x", value: this.width + "px" },
        };
    }

    constructor() {
        super();

        this.region = "center";

        this._handleLayoutItemTransitionend = this._handleLayoutItemTransitionend.bind(this);
        this._handleLayoutItemScrimClick = this._handleLayoutItemScrimClick.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__item");

        this.on("transitionend", this._handleLayoutItemTransitionend);

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        }
        this.scrimElement.on("onScrimClick", this._handleLayoutItemScrimClick);

        this._restoreState();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this._cleanState();

        if (this.scrimElement) {
            this.scrimElement.off("onScrimClick", this._handleLayoutItemScrimClick);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.off("transitionend", this._handleLayoutItemTransitionend);

        this.classList.remove("md-layout__item");
    }

    _restoreState() {
        this.requestUpdate("open", false);
    }

    _cleanState() {
        this.classList.remove('md-layout__item--open');

        const regionTranslate = this.regionTranslate[this.region];
        if (regionTranslate) {
            this.parentElement.style.removeProperty(regionTranslate.property);
            this.parentElement.classList.remove('md-layout--open');
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-layout__item--${region}`, this.region === region);
            });
        }

        if (_changedProperties.has("modal")) {
            this.classList.toggle(`md-layout__item--modal`, Boolean(this.modal));
        }

        if (_changedProperties.has("width") || _changedProperties.has("height")) {
            const regionSize = this.regionSize[this.region];
            if (regionSize) {
                this.parentElement.style.setProperty(regionSize.property, regionSize.value);
            }
        }

        if (_changedProperties.has("open")) {
            const regionTranslate = this.regionTranslate[this.region];
            if (this.open) {
                if (regionTranslate) {
                    this.parentElement.style.setProperty(regionTranslate.property, regionTranslate.value);
                    this.parentElement.classList.add('md-layout--open');
                }
                this.classList.add('md-layout__item--open');
                if (this.modal) {
                    this.scrimElement.show();
                }
            } else {
                if (regionTranslate) {
                    this.parentElement.style.removeProperty(regionTranslate.property);
                }
                this.classList.remove('md-layout__item--open');
                this.scrimElement.close();
            }
        }
    }

    _handleLayoutItemTransitionend(event) {
        if (this.open) {
            this.parentElement.classList.remove('md-layout--open');
            this.emit("onLayoutItemShowed", { event, element: this });
        } else {
            this.emit("onLayoutItemClosed", { event, element: this });
        }
    }

    _handleLayoutItemScrimClick(event) {
        this.close();
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
}

customElements.define("md-layout-item", MdLayoutItem);

export { MdLayoutItem };
