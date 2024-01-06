import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";

class MDSegmentedButtonComponent extends MDComponent{
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
        this.classList.add('md-segmented-button')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
    }

    firstUpdated(changedProperties){
    }

    updated(changedProperties){
    }
}

customElements.define('md-segmented-button',MDSegmentedButtonComponent)

export{MDSegmentedButtonComponent}