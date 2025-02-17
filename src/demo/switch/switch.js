import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSwitch extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-switch
                            name="switch"
                            value="switch"
                            @onSwitchNativeInput="${console.log}"
                            @onSwitchNativeReset="${console.log}"
                        ></md-switch>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-switch
                            name="switch"
                            value="switch"
                            checked=""
                            @onSwitchNativeInput="${console.log}"
                            @onSwitchNativeReset="${console.log}"
                        ></md-switch>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-switch
                            name="switch"
                            value="switch"
                            .icons="${["image", "image"]}"
                            @onSwitchNativeInput="${console.log}"
                            @onSwitchNativeReset="${console.log}"
                        ></md-switch>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-switch
                            name="switch"
                            value="switch"
                            checked=""
                            .icons="${["image", "image"]}"
                            @onSwitchNativeInput="${console.log}"
                            @onSwitchNativeReset="${console.log}"
                        ></md-switch>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-switch", DemoSwitch);

export default document.createElement("demo-switch");
