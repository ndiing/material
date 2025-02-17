import { Movable } from "../movable/movable";

class MdDataTableNativeHeaderCellComponent extends HTMLTableCellElement {
    get resizable() {
        return this.hasAttribute("resizable");
    }

    handleDataTableNativeHeaderCellMovableMove(event) {
        this.data.width = this.movable.currentWidth;
        this.style.setProperty("min-width", this.data.width + "px");
        // this.style.setProperty('max-width',this.data.width+'px')
    }

    connectedCallback() {
        if (this.resizable) {
            this.handleDataTableNativeHeaderCellMovableMove = this.handleDataTableNativeHeaderCellMovableMove.bind(this);
            this.addEventListener("onMovableMove", this.handleDataTableNativeHeaderCellMovableMove);
            this.movable = new Movable(this, {
                axis: [],
                handles: ["e"],
                updateStyle: false,
            });
        }
    }

    disconnectedCallback() {
        if (this.resizable && this.movable) {
            this.removeEventListener("onMovableMove", this.handleDataTableNativeHeaderCellMovableMove);
            this.movable.destroy();
        }
    }
}

customElements.define("md-data-table-native-header-cell", MdDataTableNativeHeaderCellComponent, { extends: "th" });

export { MdDataTableNativeHeaderCellComponent };
