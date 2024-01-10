import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class CarouselComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-carousel></md-carousel>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define('carousel-component',CarouselComponent)

export default document.createElement('carousel-component')