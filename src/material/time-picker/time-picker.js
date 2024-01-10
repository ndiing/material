import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDTimePickerComponent extends MDComponent{
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
        this.classList.add('md-time-picker')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-time-picker')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-time-picker',MDTimePickerComponent)

export {
    MDTimePickerComponent
}