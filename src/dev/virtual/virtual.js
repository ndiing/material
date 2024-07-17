import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { ref } from "lit/directives/ref.js";
import { MDVirtualController } from "../../material/material.js";

class DevVirtual extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:0;" class="md-layout-column">
                        <div style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:0;" class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <div 
                                class="md-virtual" 
                                ${ref(this.handleVirtual1Ref)}
                                @onVirtualScroll="${console.log}"
                            >
                                <div class="md-virtual__scrollbar"></div>
                                <div class="md-virtual__container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleVirtual1Ref(element){
        if(element){
            element.addController = (element) => element
            this.virtual = new MDVirtualController(element)
            this.virtual.hostConnected()
            this.virtual.rowTotal=1000
            this.virtual.rowHeight=52
            this.virtual.columnTotal=100
            this.virtual.columnWidth=112
            this.virtual.handleVirtualScroll()
        }else{
            this.virtual.hostDisconnected()
        }
    }
}

customElements.define("dev-virtual", DevVirtual);

export default document.createElement("dev-virtual");
