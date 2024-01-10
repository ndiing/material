import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDTextFieldComponent extends MDComponent{
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
        this.classList.add('md-text-field')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-text-field')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-text-field',MDTextFieldComponent)

export {
    MDTextFieldComponent
}