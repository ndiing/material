import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBlock extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4"> content block </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingActions='[{"icon":"favorite"}]'></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingCheckbox></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingRadioButton></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingSwitch></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingIcon="image"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingSupportingText="leadingSupportingText"></md-block>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4"> content block </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" supportingText="supportingText"></md-block>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4"> content block </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingSupportingText="trailingSupportingText"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingIcon="image"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingVideo="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingImage="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingSwitch></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingRadioButton></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingCheckbox></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingActions='[{"icon":"favorite"}]'></md-block>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4"> content block </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingIcon="image"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingIcon="image"></md-block>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4"> content block </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" leadingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" trailingAvatar="https://api.dicebear.com/9.x/icons/svg?seed=Cleo"></md-block>
                        </md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4"> content block </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" supportingText="supportingText"></md-block>
                        </md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4">
                            <md-block headline="headline" supportingText="supporting Text supporting Text supporting Text"></md-block>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-block", DevBlock);

export default document.createElement("dev-block");
