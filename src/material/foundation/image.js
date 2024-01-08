import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "./component";

/**
 * Komponen gambar kustom yang memperluas MDComponent.
 * @extends MDComponent
 */
class MDImageComponent extends MDComponent{
    /**
     * Properti untuk MDImageComponent.
     * @property {string} src - Sumber dari gambar.
     * @property {string} alt - Teks alternatif untuk gambar.
     * @property {string} ratio - Rasio aspek gambar.
     * @property {boolean} rounded - Menentukan apakah gambar diberi border-radius bulat atau tidak.
     */
    static get properties(){
        return {
            src:{type:String},
            alt:{type:String},
            ratio:{type:String},
            rounded:{type:Boolean},
        }
    }

    constructor(){
        super()

    }

    render(){
        // prettier-ignore
        return html`
            <img 
                .src="${ifDefined(this.src)}" 
                .alt="${ifDefined(this.alt)}"
            >
        `
    }

    connectedCallback(){
        super.connectedCallback()
        this.classList.add('md-image')
    }

    disconnectedCallback(){
        super.disconnectedCallback()
    }

    firstUpdated(changedProperties){
    }

    updated(changedProperties){
        this.style.setProperty('aspect-ratio',this.ratio)
        if(this.rounded)
        this.style.setProperty('border-radius','100% / '+(eval(this.ratio)*100)+'%')
    }
}

customElements.define('md-image',MDImageComponent)

export{MDImageComponent}