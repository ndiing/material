import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDCarouselComponent extends MDComponent{
    static get properties(){
        return {
        }
    }

    constructor(){
        super()
    }

    render(){
        // prettier-ignore
        return html``
    }

    connectedCallback(){
        super.connectedCallback()
        this.classList.add('md-carousel')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-carousel')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-carousel',MDCarouselComponent)

export {
    MDCarouselComponent
}