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
                <md-grid >
                    <md-grid-column expanded="12">
                        <h2>Variants</h2>

                        
                        <md-slider name="slider0" min="0" max="100" value="60"></md-slider>
                        <md-slider name="slider1" min="-100" max="100" value="20"></md-slider>
                        <md-slider name="slider2" min="0" max="100" value='[40,60]'></md-slider>
                        <br>
                        <br>
                        

                        <h2>Configurations</h2>
                        <h3>Orientation</h3>
                        
                                                
                        <md-slider name="slider3" orientation="horizontal" min="0" max="100" value="60"></md-slider>
                        <md-slider name="slider4" orientation="vertical" min="0" max="100" value="60"></md-slider>
                        <br>
                        <br>

                        <md-slider name="slider5" orientation="horizontal" min="-100" max="100" value="20"></md-slider>
                        <md-slider name="slider6" orientation="vertical" min="-100" max="100" value="20"></md-slider>
                        <br>
                        <br>

                        <md-slider name="slider7" orientation="horizontal" min="0" max="100" value='[40,60]'></md-slider>
                        <md-slider name="slider8" orientation="vertical" min="0" max="100" value='[40,60]'></md-slider>
                        <br>
                        <br>

                        
                        <md-slider step="10" name="slider9" min="0" max="100" value="60"></md-slider>
                        <md-slider step="10" orientation="vertical" name="slider10" min="0" max="100" value="60"></md-slider>

                        <br>
                        <br>

                        <md-slider step="20" name="slider11" min="-100" max="100" value="20"></md-slider>
                        <md-slider step="20" orientation="vertical" name="slider12" min="-100" max="100" value="20"></md-slider>

                        <br>
                        <br>

                        <md-slider step="10" name="slider13" min="0" max="100" value='[40,60]'></md-slider>
                        <md-slider step="10" orientation="vertical" name="slider14" min="0" max="100" value='[40,60]'></md-slider>

                        <br>
                        <br>


                        <h3>Size</h3>
                        
                        <md-slider name="slider15" size="extra-small"></md-slider>
                        <md-slider name="slider16" orientation="vertical" size="extra-small"></md-slider>
                        <br>
                        <br>

                        <md-slider name="slider17" size="small"></md-slider>
                        <md-slider name="slider18" orientation="vertical" size="small"></md-slider>
                        <br>
                        <br>

                        <md-slider icon='["volume_mute","volume_down","volume_up"]' name="slider19" size="medium"></md-slider>
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' name="slider20" orientation="vertical" size="medium"></md-slider>
                        <br>
                        <br>

                        <md-slider icon='["volume_mute","volume_down","volume_up"]' name="slider21" size="large"></md-slider>
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' name="slider22" orientation="vertical" size="large"></md-slider>
                        <br>
                        <br>

                        <md-slider icon='["volume_mute","volume_down","volume_up"]' name="slider23" size="extra-large"></md-slider>
                        <md-slider icon='["volume_mute","volume_down","volume_up"]' name="slider24" orientation="vertical" size="extra-large"></md-slider>

                    </md-grid-column>
                    

                    <md-grid-column expanded="12">
                        <md-button type="reset" label="reset"></md-button>
                        <md-button type="submit" label="submit"></md-button>
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
