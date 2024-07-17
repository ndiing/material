import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { ref } from "lit/directives/ref.js";
import { MDRippleController } from "../../material/material.js";

class DevRipple extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>centered ripple</md-markdown>
                            <pre
                                class="dev-ripple__item"
                                ${ref(this.handleRipple1Ref)}
                            >${JSON.stringify({ centered: true }, null, 4)}</pre>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>clipped ripple</md-markdown>
                            <pre
                                class="dev-ripple__item"
                                ${ref(this.handleRipple2Ref)}
                            >${JSON.stringify({ clipped: true }, null, 4)}</pre>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>fade out ripple</md-markdown>
                            <pre
                                class="dev-ripple__item"
                                ${ref(this.handleRipple3Ref)}
                            >${JSON.stringify({ fadeOut: true }, null, 4)}</pre>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>ripple with custom size</md-markdown>
                            <pre
                                class="dev-ripple__item"
                                ${ref(this.handleRipple4Ref)}
                            >${JSON.stringify({ size: 100 }, null, 4)}</pre>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>show ripple when interact with button</md-markdown>
                            <div
                                class="dev-ripple__item"
                                ${ref(this.handleRipple5Ref)}
                            ><pre class="dev-ripple__inner">${JSON.stringify({ button: ".dev-ripple__inner" }, null, 4)}</pre></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>show ripple in container</md-markdown>
                            <div
                                class="dev-ripple__item"
                                ${ref(this.handleRipple6Ref)}
                            ><pre class="dev-ripple__inner">${JSON.stringify({ container: ".dev-ripple__inner" }, null, 4)}</pre></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    async handleRipple1Ref(element) {
        if (element) {
            element.addController = (element) => element;
            this.ripple1 = new MDRippleController(element, { centered: true });
            this.ripple1.hostConnected();
        } else {
            this.ripple1.hostDisconnected();
        }
    }

    async handleRipple2Ref(element) {
        if (element) {
            element.addController = (element) => element;
            this.ripple2 = new MDRippleController(element, { clipped: true });
            this.ripple2.hostConnected();
        } else {
            this.ripple2.hostDisconnected();
        }
    }

    async handleRipple3Ref(element) {
        if (element) {
            element.addController = (element) => element;
            this.ripple3 = new MDRippleController(element, { fadeOut: true });
            this.ripple3.hostConnected();
        } else {
            this.ripple3.hostDisconnected();
        }
    }

    async handleRipple4Ref(element) {
        if (element) {
            element.addController = (element) => element;
            this.ripple4 = new MDRippleController(element, { size: 100 });
            this.ripple4.hostConnected();
        } else {
            this.ripple4.hostDisconnected();
        }
    }

    async handleRipple5Ref(element) {
        if (element) {
            element.addController = (element) => element;
            this.ripple5 = new MDRippleController(element, { button: ".dev-ripple__inner" });
            this.ripple5.hostConnected();
        } else {
            this.ripple5.hostDisconnected();
        }
    }

    async handleRipple6Ref(element) {
        if (element) {
            element.addController = (element) => element;
            this.ripple6 = new MDRippleController(element, { container: ".dev-ripple__inner" });
            this.ripple6.hostConnected();
        } else {
            this.ripple6.hostDisconnected();
        }
    }
}

customElements.define("dev-ripple", DevRipple);

export default document.createElement("dev-ripple");
