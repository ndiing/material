import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDTooltipComponent extends MDComponent{
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
        this.classList.add('md-tooltip')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-tooltip')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-tooltip',MDTooltipComponent)

export {
    MDTooltipComponent
}