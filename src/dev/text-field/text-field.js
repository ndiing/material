import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTextFieldComponent extends MDComponent {
    render() {
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleFormNativeReset(event) {
        console.log(event);
    }

    handleFormNativeSubmit(event) {
        console.log(JSON.stringify(event.detail.data, null, 4));
    }
}

customElements.define("dev-text-field", DevTextFieldComponent);

export default document.createElement("dev-text-field");
