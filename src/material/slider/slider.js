import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDSliderComponent extends MDComponent{
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
        this.classList.add('md-slider')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-slider')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-slider',MDSliderComponent)

export {
    MDSliderComponent
}