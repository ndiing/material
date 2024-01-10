import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class MainComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded2 md-layout__column--medium8 md-layout__column--compact4">
                        <div>
                            <!-- <div href="/">/</div> -->
                            
                            <!-- <div href="/users">/users</div> -->
                            <!-- <div href="/users?user=name&pass=word">/users?user=name&pass=word</div> -->
                            <!-- <div href="/users/1">/users/1</div> -->

                            <!-- <div href="/blogs">/blogs</div> -->
                            <!-- <div href="/blogs?user=name&pass=word">/blogs?user=name&pass=word</div> -->
                            <!-- <div href="/blogs/1">/blogs/1</div> -->
                            
                            <!-- <div href="/login">/login</div> -->
                            <!-- <div href="/error">/error</div> -->

                            <!-- <div href="/example">/example</div> -->

                            <!-- <div href="/layout">Layout</div> -->
                            <!-- <div href="/ripple">Ripple</div> -->
                            <!-- <div href="/store">Store</div> -->
                            <!-- <div href="/scroll">Scroll</div> -->
                            <!-- <div href="/popover">Popover</div> -->
                            <!-- <div href="/moveable">Moveable</div> -->
                            <!-- <div href="/color">Color</div> -->
                            <!-- <div href="/elevation">Elevation</div> -->
                            <!-- <div href="/icon">Icon</div> -->
                            <!-- <div href="/motion">Motion</div> -->
                            <!-- <div href="/shape">Shape</div> -->
                            <div href="/typography">Typography</div>
                            <!-- <div href="/bottom-app-bar">Bottom App Bar</div> -->
                            <!-- <div href="/top-app-bar">Top App Bar</div> -->
                            <!-- <div href="/badge">Badge</div> -->
                            <div href="/button">Button</div>
                            <div href="/fab">Fab</div>
                            <div href="/icon-button">Icon Button</div>
                            <div href="/segmented-button">Segmented Button</div>
                            <!-- <div href="/card">Card</div> -->
                            <!-- <div href="/carousel">Carousel</div> -->
                            <!-- <div href="/checkbox">Checkbox</div> -->
                            <!-- <div href="/chip">Chip</div> -->
                            <!-- <div href="/date-picker">Date Picker</div> -->
                            <!-- <div href="/dialog">Dialog</div> -->
                            <!-- <div href="/divider">Divider</div> -->
                            <!-- <div href="/list">List</div> -->
                            <!-- <div href="/menu">Menu</div> -->
                            <!-- <div href="/navigation-bar">Navigation Bar</div> -->
                            <!-- <div href="/navigation-drawer">Navigation Drawer</div> -->
                            <!-- <div href="/navigation-rail">Navigation Rail</div> -->
                            <!-- <div href="/progress-indicator">Progress Indicator</div> -->
                            <!-- <div href="/radio-button">Radio Button</div> -->
                            <!-- <div href="/search">Search</div> -->
                            <!-- <div href="/bottom-sheet">Bottom Sheet</div> -->
                            <!-- <div href="/side-sheet">Side Sheet</div> -->
                            <!-- <div href="/slider">Slider</div> -->
                            <!-- <div href="/snackbar">Snackbar</div> -->
                            <!-- <div href="/switch">Switch</div> -->
                            <!-- <div href="/tab">Tab</div> -->
                            <!-- <div href="/text-field">Text Field</div> -->
                            <!-- <div href="/time-picker">Time Picker</div> -->
                            <!-- <div href="/tooltip">Tooltip</div> -->
                        </div>
                    </div>
                    <div class="md-layout__column--expanded10 md-layout__column--medium8 md-layout__column--compact4">
                        <!-- <h1>Main</h1> -->
                        <md-outlet></md-outlet>
                    </div>
                    <div class="md-layout__column--expanded10 md-layout__column--medium8 md-layout__column--compact4"></div>
                </div>
            </div>            
        `
    }
}

customElements.define('main-component',MainComponent)

export default document.createElement('main-component')