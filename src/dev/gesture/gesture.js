import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevGesture extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-gesture
                                @onDragStart="${console.log}"
                                @onResizeStart="${console.log}"
                                @onSelectionStart="${console.log}"
                                @onLongPress="${console.log}"
                                @onDrag="${console.log}"
                                @onResize="${console.log}"
                                @onSelection="${console.log}"
                                @onTap="${console.log}"
                                @onDoubleTap="${console.log}"
                                @onSelectionEnd="${console.log}"
                                @onDragEnd="${console.log}"
                                @onResizeEnd="${console.log}"
                            ></md-gesture>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-gesture", DevGesture);

export default document.createElement("dev-gesture");
