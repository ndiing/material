import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDOutletComponent extends MDComponent{
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
        this.classList.add('md-outlet')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-outlet')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-outlet',MDOutletComponent)

export {
    MDOutletComponent
}