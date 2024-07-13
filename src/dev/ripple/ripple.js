import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { ref } from "lit/directives/ref.js";
import { MDRippleController } from "../../material/ripple/ripple.js";

class DevRipple extends MDComponent {
    constructor() {
        super();
    }
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple" ${ref(this.handleRef)}></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple" ${ref(this.handleRef2)}></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple" ${ref(this.handleRef3)}></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple" ${ref(this.handleRef4)}></div>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div class="dev-ripple" ${ref(this.handleRef5)}>
                                <div class="dev-ripple-inner"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }

    handleRef(host) {
        if (host) {
            host.addController = (host) => {};
            this.ripple = new MDRippleController(host, {
                centered:true
            });
            this.ripple.hostConnected();
        } else {
            this.ripple.hostDisconnected();
        }
    }

    handleRef2(host) {
        if (host) {
            host.addController = (host) => {};
            this.ripple2 = new MDRippleController(host, {
                clipped:true
            });
            this.ripple2.hostConnected();
        } else {
            this.ripple2.hostDisconnected();
        }
    }

    handleRef3(host) {
        if (host) {
            host.addController = (host) => {};
            this.ripple3 = new MDRippleController(host, {
                fadeOut:true
            });
            this.ripple3.hostConnected();
        } else {
            this.ripple3.hostDisconnected();
        }
    }

    handleRef4(host) {
        if (host) {
            host.addController = (host) => {};
            this.ripple4 = new MDRippleController(host, {
                size:24
            });
            this.ripple4.hostConnected();
        } else {
            this.ripple4.hostDisconnected();
        }
    }

    handleRef5(host) {
        if (host) {
            host.addController = (host) => {};
            this.ripple5 = new MDRippleController(host, {
                buttonSelector:'.dev-ripple-inner'
            });
            this.ripple5.hostConnected();
        } else {
            this.ripple5.hostDisconnected();
        }
    }

    // button
    // container
    // containerSelector
}

customElements.define("dev-ripple", DevRipple);

export default document.createElement("dev-ripple");
