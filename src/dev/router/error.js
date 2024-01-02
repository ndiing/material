import { LitElement, html } from "lit";

class AppError extends LitElement{
    createRenderRoot(){return this}

    render(){
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <div>
                            <div routerLink="/">/</div>
                        </div>
                    </div>
                    <div class="md-layout__column md-layout__column--expanded10 md-layout__column--medium4 md-layout__column--compact4">
                        <h1>Error</h1>
                        <md-outlet></md-outlet>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('app-error',AppError)

export default document.createElement('app-error')