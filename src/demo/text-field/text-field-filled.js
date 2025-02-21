import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTextFieldFilled extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" text="Supporting text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" value="Input text" text="Supporting text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" value="Input text" .actions="${[{ icon: "image" }]}"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" .icons="${[{ icon: "image" }]}"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" value="Input text" .icons="${[{ icon: "image" }]}" .actions="${[{ icon: "image" }]}"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" prefix="$"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" value="Input text" prefix="$"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" suffix="lbs"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" value="Input text" suffix="lbs"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" value="Input text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text"></md-text-field>
                    </div>
                    <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                        <md-text-field variant="filled" label="Label text" value="Input text Input text Input text Input text Input text Input text Input text Input text"></md-text-field>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-text-field-filled", DemoTextFieldFilled);

export default document.createElement("demo-text-field-filled");
