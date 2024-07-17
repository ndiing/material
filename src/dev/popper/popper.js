import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { ref } from "lit/directives/ref.js";
import { MDPopperController } from "../../material/material.js";

class DevPopper extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div
                                class="dev-popper__button"
                                @click="${(event) => {
                                    popper1.style.visibility = "visible";
                                    this.popper1.setPosition(event.currentTarget);
                                }}"
                            ></div>
                            <div
                                id="popper1"
                                class="dev-popper__container"
                                style="visibility:hidden;"
                                ${ref(this.handlePopper1Ref)}
                                @click="${() => {
                                    popper1.style.visibility = "hidden";
                                }}"
                            >
                                ${JSON.stringify({})}
                            </div>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div
                                class="dev-popper__button"
                                @click="${(event) => {
                                    popper2.style.visibility = "visible";
                                    this.popper2.setPosition(event.currentTarget);
                                }}"
                            ></div>
                            <div
                                id="popper2"
                                class="dev-popper__container"
                                style="visibility:hidden;"
                                ${ref(this.handlePopper2Ref)}
                                @click="${() => {
                                    popper2.style.visibility = "hidden";
                                }}"
                            >
                                ${JSON.stringify({ placements: [] })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handlePopper1Ref(element) {
        if (element) {
            this.popper1 = new MDPopperController(element, {});
        }
    }

    handlePopper2Ref(element) {
        if (element) {
            this.popper2 = new MDPopperController(element, {
                placements: [
                    // "top","top-start","top-end",
                    // "bottom","bottom-start","bottom-end",
                    // "right","right-start","right-end",
                    // "left","left-start","left-end",
                    "below",
                    "below-start",
                    "below-end",
                    "above",
                    "above-start",
                    "above-end",
                    "after",
                    "after-start",
                    "after-end",
                    "before",
                    "before-start",
                    "before-end",
                    // "north-east","south-east","south-west","north-west",
                    // "center",
                ],
            });
        }
    }
}

customElements.define("dev-popper", DevPopper);

export default document.createElement("dev-popper");
