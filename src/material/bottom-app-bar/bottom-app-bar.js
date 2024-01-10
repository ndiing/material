import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDBottomAppBarComponent extends MDComponent{
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
        this.classList.add('md-bottom-app-bar')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-bottom-app-bar')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-bottom-app-bar',MDBottomAppBarComponent)

export {
    MDBottomAppBarComponent
}