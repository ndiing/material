import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDNavigationDrawerComponent extends MDComponent{
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
        this.classList.add('md-navigation-drawer')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-navigation-drawer')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-navigation-drawer',MDNavigationDrawerComponent)

export {
    MDNavigationDrawerComponent
}