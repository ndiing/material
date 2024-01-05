import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

class MDIconButtonComponent extends MDComponent{
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

    async connectedCallback(){
        super.connectedCallback()
        await this.updateComplete
        this.classList.add('md-icon-button')
        new MDRipple(this,{
            bounded:false,
            diameter:40/24*100,
            centered:true,
            fadeout:true
        })
    }

    disconnectedCallback(){
        super.disconnectedCallback()
    }

    firstUpdated(changedProperties){
    }

    updated(changedProperties){
    }
}

customElements.define('md-icon-button',MDIconButtonComponent)

export{MDIconButtonComponent}