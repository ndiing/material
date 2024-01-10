import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDBottomSheetComponent extends MDComponent{
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
        this.classList.add('md-bottom-sheet')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-bottom-sheet')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-bottom-sheet',MDBottomSheetComponent)

export {
    MDBottomSheetComponent
}