import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDLayoutComponent extends MDComponent{
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
        this.classList.add('md-layout')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-layout')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-layout',MDLayoutComponent)

export {
    MDLayoutComponent
}