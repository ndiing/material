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

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Standard</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" ></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Centered</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" min="-100" max="100" value="-50"></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Range</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" value='[25,60]'></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Orientation</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" orientation="horizontal"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" orientation="vertical"></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Size</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" size="extra-small"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" size="small"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" size="medium"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" size="large"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" size="extra-large"></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Inset icon</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" size="medium" icon='["volume_mute","volume_down","volume_up"]'></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Stops</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider .label="${false}" step="10"></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Value indicator</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Stops + All variants</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider  step="10"></md-slider>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider min="-100" max="100" value="-50" step="20"></md-slider>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider value='[25,60]' step="10"></md-slider>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider  orientation="vertical" step="10"></md-slider>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider orientation="vertical" min="-100" max="100" value="-50" step="20"></md-slider>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider orientation="vertical" value='[25,60]' step="10"></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Value indicator + [flipLabel="true"]</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider orientation="vertical"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider flipLabel></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider flipLabel orientation="vertical"></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Inset icon + Size</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider icon='["volume_mute","volume_down","volume_up"]' .label="${false}" size="extra-small"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider icon='["volume_mute","volume_down","volume_up"]' .label="${false}" size="small"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider icon='["volume_mute","volume_down","volume_up"]' .label="${false}" size="medium"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider icon='["volume_mute","volume_down","volume_up"]' .label="${false}" size="large"></md-slider>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-slider icon='["volume_mute","volume_down","volume_up"]' .label="${false}" size="extra-large"></md-slider>
                            </md-grid-column>
                            
                        </md-grid>
                    </md-grid-column>

                    
                    <md-grid-column expanded="12">
                        <md-button color="outlined" type="reset" label="Reset"></md-button>
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
