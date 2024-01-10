import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDTabComponent extends MDComponent{
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
        this.classList.add('md-tab')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-tab')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-tab',MDTabComponent)

export {
    MDTabComponent
}