import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDCardComponent extends MDComponent{
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
        this.classList.add('md-card')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-card')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-card',MDCardComponent)

export {
    MDCardComponent
}