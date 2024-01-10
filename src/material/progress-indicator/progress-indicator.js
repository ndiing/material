import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDProgressIndicatorComponent extends MDComponent{
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
        this.classList.add('md-progress-indicator')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-progress-indicator')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-progress-indicator',MDProgressIndicatorComponent)

export {
    MDProgressIndicatorComponent
}