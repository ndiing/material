import { html } from "lit";
import { MDComponent } from "../foundation/component";

class MDSideSheetComponent extends MDComponent{
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
        this.classList.add('md-side-sheet')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.classList.remove('md-side-sheet')
    }

    firstUpdated(_changedProperties){}

    updated(_changedProperties){}
}

customElements.define('md-side-sheet',MDSideSheetComponent)

export {
    MDSideSheetComponent
}