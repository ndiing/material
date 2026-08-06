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

                        
                        <md-slider name="slider2" min="0" max="100" value="60"></md-slider>
                        <md-slider name="slider3" min="-100" max="100" value="20"></md-slider>
                        <md-slider name="slider4" min="0" max="100" value='[40,60]'></md-slider>
                        <br>
                        <br>
                        

                        <h2>Configurations</h2>
                        <h3>Orientation</h3>
                        
                                                
                        <md-slider name="slider5" orientation="horizontal" min="0" max="100" value="60"></md-slider>
                        <md-slider name="slider6" orientation="vertical" min="0" max="100" value="60"></md-slider>
                        <br>
                        <br>

                        <md-slider name="slider7" orientation="horizontal" min="-100" max="100" value="20"></md-slider>
                        <md-slider name="slider8" orientation="vertical" min="-100" max="100" value="20"></md-slider>
                        <br>
                        <br>

                        <md-slider name="slider9" orientation="horizontal" min="0" max="100" value='[40,60]'></md-slider>
                        <md-slider name="slider10" orientation="vertical" min="0" max="100" value='[40,60]'></md-slider>
                        <br>
                        <br>

                        
                        <md-slider step="10" name="slider2" min="0" max="100" value="60"></md-slider>
                        <md-slider step="10" orientation="vertical" name="slider2" min="0" max="100" value="60"></md-slider>

                        <br>
                        <br>

                        <md-slider step="20" name="slider3" min="-100" max="100" value="20"></md-slider>
                        <md-slider step="20" orientation="vertical" name="slider3" min="-100" max="100" value="20"></md-slider>

                        <br>
                        <br>

                        <md-slider step="10" name="slider4" min="0" max="100" value='[40,60]'></md-slider>
                        <md-slider step="10" orientation="vertical" name="slider4" min="0" max="100" value='[40,60]'></md-slider>

                        <br>
                        <br>


                        <h3>Size</h3>
                        
                        <md-slider name="slider11" size="extra-small"></md-slider>
                        <md-slider name="slider12" orientation="vertical" size="extra-small"></md-slider>
                        <br>
                        <br>

                        <md-slider name="slider13" size="small"></md-slider>
                        <md-slider name="slider14" orientation="vertical" size="small"></md-slider>
                        <br>
                        <br>

                        <md-slider icon="volume_up" name="slider15" size="medium"></md-slider>
                        <md-slider icon="volume_up" name="slider16" orientation="vertical" size="medium"></md-slider>
                        <br>
                        <br>

                        <md-slider icon="volume_up" name="slider17" size="large"></md-slider>
                        <md-slider icon="volume_up" name="slider18" orientation="vertical" size="large"></md-slider>
                        <br>
                        <br>

                        <md-slider icon="volume_up" name="slider0" size="extra-large"></md-slider>
                        <md-slider icon="volume_up" name="slider1" orientation="vertical" size="extra-large"></md-slider>

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
