import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class MainComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded3 md-layout__column--medium8 md-layout__column--compact4">
                        <div>
                            <div tabIndex="0" navigate="/">/</div>
                            <div tabIndex="0" navigate="/users">/users</div>
                            <div tabIndex="0" navigate="/users?user=name&pass=word">/users?user=name&pass=word</div>
                            <div tabIndex="0" navigate="/users/1">/users/1</div>
                            <div tabIndex="0" navigate="/blogs">/blogs</div>
                            <div tabIndex="0" navigate="/blogs?user=name&pass=word">/blogs?user=name&pass=word</div>
                            <div tabIndex="0" navigate="/blogs/1">/blogs/1</div>
                            <div tabIndex="0" navigate="/login">/login</div>
                            <div tabIndex="0" navigate="/error">/error</div>
                            <div tabIndex="0" navigate="/example">/example</div>
                        </div>
                    </div>
                    <div class="md-layout__column--expanded9 md-layout__column--medium8 md-layout__column--compact4">
                        <!-- <h1>Main</h1> -->
                        <md-placeholder></md-placeholder>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('main-component',MainComponent)

export default document.createElement('main-component')