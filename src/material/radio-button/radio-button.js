import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDRadioButtonComponent extends MDComponent{
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
        this.classList.add('md-radio-button')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-radio-button')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-radio-button',MDRadioButtonComponent)

export {
    MDRadioButtonComponent
}