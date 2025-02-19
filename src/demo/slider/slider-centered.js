import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSliderCentered extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-slider
                            variant="centered"
                            min="-5000000000"
                            max="5000000000"
                            name="slider"
                            value="0"
                            @onSliderNativeInput="${console.log}"
                            @onSliderNativeReset="${console.log}"
                        ></md-slider>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-slider-centered", DemoSliderCentered);

export default document.createElement("demo-slider-centered");
