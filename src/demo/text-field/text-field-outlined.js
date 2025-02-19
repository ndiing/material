import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTextFieldOutlined extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            text="Supporting text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            value="Input text"
                            text="Supporting text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            value="Input text"
                            .actions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            .icons="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            value="Input text"
                            .icons="${[{ icon: "image" }]}"
                            .actions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            prefix="$"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            value="Input text"
                            prefix="$"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            suffix="lbs"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            value="Input text"
                            suffix="lbs"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="outlined"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            value="Input text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field
                            variant="outlined"
                            label="Label text"
                            value="Input text Input text Input text Input text Input text Input text Input text Input text"
                        ></md-text-field>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-text-field-outlined", DemoTextFieldOutlined);

export default document.createElement("demo-text-field-outlined");
