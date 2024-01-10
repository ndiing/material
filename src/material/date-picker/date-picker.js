import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDDatePickerComponent extends MDComponent{
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
        this.classList.add('md-date-picker')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-date-picker')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-date-picker',MDDatePickerComponent)

export {
    MDDatePickerComponent
}