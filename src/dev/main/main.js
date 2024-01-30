import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class MainComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <md-navigation-drawer style="width:360px;" ui="drawer" position="left" open .items="${[
                {label:'icon',routerLink:'/icon'},
                {label:'emoji',routerLink:'/emoji'},
                {label:'image',routerLink:'/image'},
                {label:'button',routerLink:'/button'},
                {label:'fab',routerLink:'/fab'},
                {label:'icon-button',routerLink:'/icon-button'},
                {label:'segmented-button',routerLink:'/segmented-button'},
                {label:'chip',routerLink:'/chip'},
                {label:'chip-set',routerLink:'/chip-set'},
                {label:'checkbox',routerLink:'/checkbox'},
                {label:'radio-button',routerLink:'/radio-button'},
                {label:'switch',routerLink:'/switch'},
                {label:'badge',routerLink:'/badge'},
                {label:'list',routerLink:'/list'},
                {label:'panel',routerLink:'/panel'},
                {label:'navigation-bar',routerLink:'/navigation-bar'},
                {label:'navigation-drawer',routerLink:'/navigation-drawer'},
                {label:'navigation-rail',routerLink:'/navigation-rail'},
                {label:'tooltip',routerLink:'/tooltip'},
            ]}"></md-navigation-drawer>

            <div class="md-layout">
                <div class="md-layout__grid">
                    <!-- <div class="md-layout__column md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <div>
                            <div routerLink="/">/</div>
                            <div routerLink="/users">/users</div>
                            <div routerLink="/users/1">/users/1</div>
                            <div routerLink="/blogs?user=name&pass=word">/blogs?user=name&pass=word</div>
                            <div routerLink="/blogs/1">/blogs/1</div>
                            <div routerLink="/login">/login</div>
                            <div routerLink="/error">/error</div>
                            <div routerLink="/icon">/icon</div>
                            <div routerLink="/emoji">/emoji</div>
                            <div routerLink="/image">/image</div>
                            <div routerLink="/button">/button</div>
                            <div routerLink="/fab">/fab</div>
                            <div routerLink="/icon-button">/icon-button</div>
                            <div routerLink="/segmented-button">/segmented-button</div>
                            <div routerLink="/chip">/chip</div>
                            <div routerLink="/chip-set">/chip-set</div>
                            <div routerLink="/checkbox">/checkbox</div>
                            <div routerLink="/radio-button">/radio-button</div>
                            <div routerLink="/switch">/switch</div>
                            <div routerLink="/badge">/badge</div>
                            <div routerLink="/list">/list</div>
                            <div routerLink="/panel">/panel</div>
                            <div routerLink="/navigation-bar">/navigation-bar</div>
                            <div routerLink="/navigation-drawer">/navigation-drawer</div>
                            <div routerLink="/navigation-rail">/navigation-rail</div>
                            <div routerLink="/tooltip">/tooltip</div>
                        </div>
                    </div> -->
                    <div class="md-layout__column md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <!-- <h1>Main</h1> -->
                        <md-outlet></md-outlet>
                        <md-outlet name="blog"></md-outlet>
                    </div>
                    <!-- <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-outlet name="blog"></md-outlet>
                    </div> -->
                </div>
            </div>
        `;
    }
}

customElements.define("main-component", MainComponent);

export default document.createElement("main-component");
