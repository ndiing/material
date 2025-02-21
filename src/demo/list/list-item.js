import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoListItem extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list-item leadingCheckbox="" leadingRadioButton="" leadingSwitch="" avatar="" image="" video="" icon="" label="" sublabel="" text="" trailingCheckbox="" trailingRadioButton="" trailingSwitch="" selected="" disabled="" routerLink="" rippleOptions="" badge=""></md-list-item>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-list-item", DemoListItem);

export default document.createElement("demo-list-item");
