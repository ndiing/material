import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDSwitchComponent extends MDComponent{
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
        this.classList.add('md-switch')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-switch')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-switch',MDSwitchComponent)

export {
    MDSwitchComponent
}