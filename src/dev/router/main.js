import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";
import { MDRouter } from "../../material/foundation/router";

class DevMainComponent extends MDComponent{
    static get properties(){
        return {
            isAuthenticated:{type:Boolean}
        }
    }
    
    render(){
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="
                        md-layout__column
                        md-layout__column--expanded2
                        md-layout__column--medium4
                        md-layout__column--compact4
                    ">
                        <div>
                            <!-- <div routerLink="/">/</div>
                            <div routerLink="/users">/users</div>
                            <div routerLink="/users/ndiing">/users/ndiing</div>
                            <div routerLink="/blogs">/blogs</div>
                            <div routerLink="/blogs/ndiing">/blogs/ndiing</div>
                            <div routerLink="/error">/error</div>
                            ${localStorage.isAuthenticated==='1'?html`<div @click="${this.handleLogout}">/logout</div>`:``} -->

                            <div routerLink="/badge">badge</div>
                            <div routerLink="/bottom-app-bar">bottom-app-bar</div>
                            <div routerLink="/bottom-sheet">bottom-sheet</div>
                            <div routerLink="/button">button</div>
                            <div routerLink="/card">card</div>
                            <div routerLink="/carousel">carousel</div>
                            <div routerLink="/checkbox">checkbox</div>
                            <div routerLink="/chip">chip</div>
                            <div routerLink="/date-picker">date-picker</div>
                            <div routerLink="/dialog">dialog</div>
                            <div routerLink="/divider">divider</div>
                            <!-- <div routerLink="/extended-fab">extended-fab</div> -->
                            <div routerLink="/fab">fab</div>
                            <div routerLink="/icon-button">icon-button</div>
                            <div routerLink="/list">list</div>
                            <div routerLink="/menu">menu</div>
                            <div routerLink="/navigation-bar">navigation-bar</div>
                            <div routerLink="/navigation-drawer">navigation-drawer</div>
                            <div routerLink="/navigation-rail">navigation-rail</div>
                            <div routerLink="/progress-indicator">progress-indicator</div>
                            <div routerLink="/radio-button">radio-button</div>
                            <!-- <div routerLink="/router">router</div> -->
                            <div routerLink="/search">search</div>
                            <div routerLink="/segmented-button">segmented-button</div>
                            <div routerLink="/side-sheet">side-sheet</div>
                            <div routerLink="/slider">slider</div>
                            <div routerLink="/snackbar">snackbar</div>
                            <div routerLink="/switch">switch</div>
                            <div routerLink="/tab">tab</div>
                            <div routerLink="/text-field">text-field</div>
                            <div routerLink="/time-picker">time-picker</div>
                            <div routerLink="/tooltip">tooltip</div>
                            <div routerLink="/top-app-bar">top-app-bar</div>
                        </div>
                    </div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded10
                        md-layout__column--medium4
                        md-layout__column--compact4
                    ">
                        <md-outlet></md-outlet>
                    </div>
                </div>
            <!-- </div> -->
        `
    }

    connectedCallback(){
        super.connectedCallback()
        this.isAuthenticated=localStorage.isAuthenticated
    }

    handleLogout(){
        localStorage.isAuthenticated=0
        MDRouter.navigate('/login')
    }
}

customElements.define('dev-main',DevMainComponent)

export default document.createElement('dev-main')