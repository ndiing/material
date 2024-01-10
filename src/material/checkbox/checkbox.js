import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDCheckboxComponent extends MDComponent{
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
        this.classList.add('md-checkbox')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-checkbox')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-checkbox',MDCheckboxComponent)

export {
    MDCheckboxComponent
}