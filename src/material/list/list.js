import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDListComponent extends MDComponent{
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
        this.classList.add('md-list')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-list')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-list',MDListComponent)

export {
    MDListComponent
}