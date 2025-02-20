import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSliderDiscrete extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-slider
                            variant="discrete"
                            step="10"
                            name="slider"
                            value="50"
                        ></md-slider>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-slider-discrete", DemoSliderDiscrete);

export default document.createElement("demo-slider-discrete");
