import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";

class MDNavigationBarComponent extends MDComponent{
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
            ${this.label?html`<div class="md-navigation-bar__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback(){
        super.connectedCallback()
    }

    disconnectedCallback(){
        super.disconnectedCallback()
    }

    firstUpdated(changedProperties){
    }

    updated(changedProperties){
    }
}

customElements.define('md-navigation-bar',MDNavigationBarComponent)

export{MDNavigationBarComponent}