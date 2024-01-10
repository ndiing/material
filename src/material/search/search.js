import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDSearchComponent extends MDComponent{
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
        this.classList.add('md-search')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-search')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-search',MDSearchComponent)

export {
    MDSearchComponent
}