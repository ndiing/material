import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
class MdScrimComponent extends MdComponent {
    static properties = {
        open: { type: Boolean, reflect: true },
    };
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-scrim");
        this.handleScrimClick = this.handleScrimClick.bind(this);
        this.addEventListener("click", this.handleScrimClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-scrim");
        this.removeEventListener("click", this.handleScrimClick);
    }
    show() {
        this.open = true;
        this.emit("onScrimShown");
    }
    close() {
        this.open = false;
        this.emit("onScrimClosed");
    }
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
    handleScrimClick(event) {
        this.close();
        this.emit("onScrimClick", { event });
    }
}
customElements.define("md-scrim", MdScrimComponent);
export { MdScrimComponent };
