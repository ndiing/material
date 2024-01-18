import { LitElement, html } from "lit";

class MainComponent extends LitElement{
    createRenderRoot(){
        return this
    }

    render(){
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <!--  -->
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <md-placeholder></md-placeholder>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                    </div>
                    <!--  -->
                </div>
            </div>
        `
    }
}

customElements.define('main-component',MainComponent)

export default document.createElement('main-component')