import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDChipComponent extends MDComponent{
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
        this.classList.add('md-chip')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-chip')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-chip',MDChipComponent)

export {
    MDChipComponent
}