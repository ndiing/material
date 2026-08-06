import { MdElement } from "../../base/element.js";

class MdLayoutItem extends MdElement {
    static properties = {
        region: { type: String },
        modal: { type: Boolean },
        open: { type: Boolean,reflect:true },
    };

    regions = ["center", "west", "north", "east", "south"];

    constructor() {
        super();

        this.region = "center";

        this._handleLayoutItemTransitionend = this._handleLayoutItemTransitionend.bind(this);
        this._handleLayoutItemScrimClose = this._handleLayoutItemScrimClose.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__item");

        this.on("transitionend", this._handleLayoutItemTransitionend);
        
        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        }
        this.scrimElement.on("onScrimClose", this._handleLayoutItemScrimClose);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.scrimElement) {
            this.scrimElement.off("onScrimClose", this._handleLayoutItemScrimClose);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.off("transitionend", this._handleLayoutItemTransitionend);

        this.classList.remove("md-layout__item");
    }

    update(changedProperties) {
        super.update(changedProperties)

        if (changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-layout__item--${region}`, this.region === region);
            });
        }

        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-layout__item--modal`, !!this.modal);
        }

        if (changedProperties.has("open")) {
            this.classList.toggle(`md-layout__item--open`, !!this.open);
        }
    }

    updated(_changedProperties){
        super.updated(_changedProperties)

        if (_changedProperties.has("open")) {

            if (this.modal) {
                if (this.open) {
                    this.scrimElement.show();
                } else {
                    this.scrimElement.close();
                }
            }
        }
    }

    _handleLayoutItemTransitionend(event) {
        if (this.open) {
            this.emit("onLayoutItemShowed", { event, element: this });
        } else {
            this.emit("onLayoutItemClosed", { event, element: this });
        }
    }

    _handleLayoutItemScrimClose(event) {
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
