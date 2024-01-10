import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDTopAppBarComponent extends MDComponent{
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
        this.classList.add('md-top-app-bar')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-top-app-bar')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-top-app-bar',MDTopAppBarComponent)

export {
    MDTopAppBarComponent
}