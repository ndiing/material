import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDDividerComponent extends MDComponent{
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
        this.classList.add('md-divider')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-divider')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-divider',MDDividerComponent)

export {
    MDDividerComponent
}