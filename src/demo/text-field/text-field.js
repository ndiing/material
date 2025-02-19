import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTextField extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            text="Supporting text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            value="Input text"
                            text="Supporting text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field label="Label text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            value="Input text"
                            cancelAction
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            .icons="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            value="Input text"
                            .icons="${[{ icon: "image" }]}"
                            cancelAction
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            prefix="$"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            value="Input text"
                            prefix="$"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            suffix="lbs"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            value="Input text"
                            suffix="lbs"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field value="Input text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field label="Label text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            label="Label text"
                            value="Input text Input text Input text Input text Input text Input text Input text Input text"
                        ></md-text-field>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-text-field", DemoTextField);

export default document.createElement("demo-text-field");
