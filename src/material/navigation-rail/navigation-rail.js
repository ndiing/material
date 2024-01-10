import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDNavigationRailComponent extends MDComponent{
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
        this.classList.add('md-navigation-rail')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-navigation-rail')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-navigation-rail',MDNavigationRailComponent)

export {
    MDNavigationRailComponent
}