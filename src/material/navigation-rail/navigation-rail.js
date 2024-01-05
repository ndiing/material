import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";

class MDNavigationRailComponent extends MDComponent{
    static get properties(){
        return {
            label:{type:String}
        }
    }

    constructor(){
        super()

        this.label='Label'
    }

    render(){
        // prettier-ignore
        return html`
            ${this.label?html`<div class="md-navigation-rail__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback(){
        super.connectedCallback()
        this.classList.add('md-navigation-rail')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
    }

    firstUpdated(changedProperties){
    }

    updated(changedProperties){
    }
}

customElements.define('md-navigation-rail',MDNavigationRailComponent)

export{MDNavigationRailComponent}