import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoSlider extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <form 
                @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <md-grid class="demo-grid">
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider flipped></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider flipped orientation="vertical"></md-slider>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider orientation="vertical"></md-slider>
                    </md-grid-column>
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider min="-100" max="100" value="-50"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider orientation="vertical" min="-100" max="100" value="-50"></md-slider>
                    </md-grid-column>
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider value='[25,60]'></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider orientation="vertical" value='[25,60]'></md-slider>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider step="10"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider orientation="vertical" step="10"></md-slider>
                    </md-grid-column>
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider step="20" min="-100" max="100" value="-50"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider orientation="vertical" step="20" min="-100" max="100" value="-50"></md-slider>
                    </md-grid-column>
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider step="10" value='[25,60]'></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider orientation="vertical" step="10" value='[25,60]'></md-slider>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="extra-small"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="extra-small" orientation="vertical"></md-slider>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="small"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="small" orientation="vertical"></md-slider>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="medium"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="medium" orientation="vertical"></md-slider>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="large"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="large" orientation="vertical"></md-slider>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="extra-large"></md-slider>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' size="extra-large" orientation="vertical"></md-slider>
                    </md-grid-column>

                    <md-grid-column expanded="12">
                        <md-button color="tonal" type="reset" label="Reset"></md-button>
                        <md-button color="tonal" type="submit" label="Submit"></md-button>
                    </md-grid-column>

                </md-grid>
            </form>
        `;
    }

    handleFormdata(event) {
        console.log([...event.formData.entries()]);
    }

    handleReset(event) {}

    handleSubmit(event) {
        event.preventDefault();
        new FormData(event.currentTarget);
    }
}
customElements.define("demo-slider", DemoSlider);
export default document.createElement("demo-slider");
