import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { ref } from "lit/directives/ref.js";
import { MDRippleController } from "../../material/ripple/ripple.js";
import { MDObserver } from "../../material/observer/observer.js";
import { waitFor } from "../../material/functions/functions.js";

class DevRipple extends MDComponent {
    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            containerSelector:'.dev-ripple0',
            centered: true,
        });
        this.ripple2 = new MDRippleController(this, {
            containerSelector:'.dev-ripple1',
            clipped: true,
        });
        this.ripple3 = new MDRippleController(this, {
            containerSelector:'.dev-ripple2',
            fadeOut: true,
        });
        this.ripple4 = new MDRippleController(this, {
            containerSelector:'.dev-ripple3',
            size: 24,
        });
        this.ripple5 = new MDRippleController(this, {
            containerSelector:'.dev-ripple4',
            buttonSelector: ".dev-ripple-inner",
        });
    }
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-low);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple dev-ripple0"></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple dev-ripple1"></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple dev-ripple2"></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple dev-ripple3"></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple dev-ripple4">
                                <div class="dev-ripple-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // button
    // container
    // containerSelector
}

customElements.define("dev-ripple", DevRipple);

export default document.createElement("dev-ripple");
