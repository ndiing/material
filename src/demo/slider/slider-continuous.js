import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSliderContinuous extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-slider
                            variant="continuous"
                            name="slider"
                            value="50"
                            @onSliderNativeInput="${console.log}"
                            @onSliderNativeReset="${console.log}"
                        ></md-slider>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-slider-continuous", DemoSliderContinuous);

export default document.createElement("demo-slider-continuous");
