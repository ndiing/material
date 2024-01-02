import { LitElement, html } from "lit";

class AppMain extends LitElement{
    createRenderRoot(){return this}

    render(){
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <div>
                            <div routerLink="/">/</div>
                            <div routerLink="/users">/users</div>
                            <div routerLink="/users/ndiing">/users/ndiing</div>
                            <div routerLink="/blogs">/blogs</div>
                            <div routerLink="/blogs/welcome">/blogs/welcome</div>
                            <div routerLink="/error">/error</div>
                        </div>
                    </div>
                    <div class="md-layout__column md-layout__column--expanded10 md-layout__column--medium4 md-layout__column--compact4">
                        <h1>Main</h1>
                        <md-outlet></md-outlet>
                    </div>
                </div>
            </div>

            <!-- <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>
                    <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>
                    <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>
                </div>
            </div> -->

            <!-- <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="
                        md-layout__column 
                        md-layout__column--expanded4 
                        md-layout__column--medium4 
                        md-layout__column--compact4"
                    >4</div>
                    <div class="
                        md-layout__column 
                        md-layout__column--expanded4 
                        md-layout__column--medium4 
                        md-layout__column--compact4"
                    >4</div>
                    <div class="
                        md-layout__column 
                        md-layout__column--expanded4 
                        md-layout__column--medium4 
                        md-layout__column--compact4"
                    >4</div>
                </div>
            </div> -->
        `
    }
}

customElements.define('app-main',AppMain)

export default document.createElement('app-main')