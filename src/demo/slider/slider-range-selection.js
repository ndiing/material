import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSliderRangeSelection extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-slider variant="range-selection" name="slider" value="[25,75]"></md-slider>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-slider-range-selection", DemoSliderRangeSelection);

export default document.createElement("demo-slider-range-selection");
