import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDBadgeComponent extends MDComponent{
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
        this.classList.add('md-badge')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-badge')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-badge',MDBadgeComponent)

export {
    MDBadgeComponent
}