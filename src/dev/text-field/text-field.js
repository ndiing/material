import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTextFieldComponent extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field text="text" type="text" name="text0"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field text="text" maxLength="10" type="text" name="text1" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field text="text" prefix="prefix" suffix="suffix" type="text" name="text2" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text3" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text4" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text5" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required label="label" text="text" type="text" name="text6"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required label="label" text="text" maxLength="10" type="text" name="text7" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field label="label" text="text" prefix="prefix" suffix="suffix" type="text" name="text8" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field label="label" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text9" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field label="label" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text10" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field label="label" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text11" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" text="text" type="text" name="text0"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" text="text" maxLength="10" type="text" name="text1" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" text="text" prefix="prefix" suffix="suffix" type="text" name="text2" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text3" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text4" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text5" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required label="label" text="text" type="text" name="text6"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required label="label" text="text" maxLength="10" type="text" name="text7" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" label="label" text="text" prefix="prefix" suffix="suffix" type="text" name="text8" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" label="label" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text9" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" label="label" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text10" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" label="label" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text11" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" text="text" type="text" name="text0"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" text="text" maxLength="10" type="text" name="text1" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" text="text" prefix="prefix" suffix="suffix" type="text" name="text2" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text3" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text4" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text5" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required label="label" text="text" type="text" name="text6"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required label="label" text="text" maxLength="10" type="text" name="text7" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" label="label" text="text" prefix="prefix" suffix="suffix" type="text" name="text8" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" label="label" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text9" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" label="label" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text10" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" label="label" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text11" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" text="text" type="text" name="text0"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" text="text" maxLength="10" type="text" name="text1" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" text="text" prefix="prefix" suffix="suffix" type="text" name="text2" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text3" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text4" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text5" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required label="label" text="text" type="text" name="text6"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required label="label" text="text" maxLength="10" type="text" name="text7" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" label="label" text="text" prefix="prefix" suffix="suffix" type="text" name="text8" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" label="label" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text9" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" label="label" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text10" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" label="label" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text11" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" text="text" type="text" name="text0"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" text="text" maxLength="10" type="text" name="text1" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" text="text" prefix="prefix" suffix="suffix" type="text" name="text2" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text3" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text4" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text5" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" required label="label" text="text" type="text" name="text6"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" required label="label" text="text" maxLength="10" type="text" name="text7" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" label="label" text="text" prefix="prefix" suffix="suffix" type="text" name="text8" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" label="label" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text9" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" label="label" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text10" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled rounded" label="label" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text11" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" text="text" type="text" name="text0"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" text="text" maxLength="10" type="text" name="text1" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" text="text" prefix="prefix" suffix="suffix" type="text" name="text2" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text3" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text4" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text5" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" required label="label" text="text" type="text" name="text6"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" required label="label" text="text" maxLength="10" type="text" name="text7" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" label="label" text="text" prefix="prefix" suffix="suffix" type="text" name="text8" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" label="label" text="text" maxLength="10" prefix="prefix" suffix="suffix" type="text" name="text9" placeholder="placeholder" value="value"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" label="label" text="text" icon="image" actions='[{"icon":"image"}]' type="text" name="text10" placeholder="placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined rounded" label="label" text="text" maxLength="10" icon="image" actions='[{"icon":"image"}]' type="text" name="text11" placeholder="placeholder" value="value"></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name0" variant="filled" label="color" type="color" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name1" variant="filled" label="color" type="color" value="#ff0000"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name2" variant="filled" label="date" type="date" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name3" variant="filled" label="date" type="date" value="1990-10-17"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name4" variant="filled" label="datetime-local" type="datetime-local" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name5" variant="filled" label="datetime-local" type="datetime-local" value="1990-10-17T20:30"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name6" variant="filled" label="email" type="email" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name7" variant="filled" label="email" type="email" value="ndiing.inc@gmail.com"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name8" variant="filled" label="file" type="file" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name9" variant="filled" label="file" type="file"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name10" variant="filled" label="month" type="month" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name11" variant="filled" label="month" type="month" value="1990-10"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name12" variant="filled" label="number" type="number" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name13" variant="filled" label="number" type="number" value="123456789"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name14" variant="filled" label="password" type="password" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name15" variant="filled" label="password" type="password" value="password"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name16" variant="filled" label="search" type="search" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name17" variant="filled" label="search" type="search" value="search"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name18" variant="filled" label="tel" type="tel" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name19" variant="filled" label="tel" type="tel" value="+6281935155404"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name20" variant="filled" label="text" type="text" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name21" variant="filled" label="text" type="text" value="text"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name22" variant="filled" label="time" type="time" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name23" variant="filled" label="time" type="time" value="20:30"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name24" variant="filled" label="url" type="url" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name25" variant="filled" label="url" type="url" value="https://www.google.com"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name26" variant="filled" label="week" type="week" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name27" variant="filled" label="week" type="week" value="1990-W42"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name28" variant="filled" label="textarea" type="textarea" ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name29" variant="filled" label="textarea" type="textarea" value="Lorem ipsum dolor sit amet consectetur adipisicing elit."></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name30" variant="filled" label="select" type="select" options='[{"label":"","value":""},{"label":"label 1","value":"1"},{"label":"label 2","value":"2"},{"label":"label 3","value":"3"}]'></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required name="name31" variant="filled" label="select" type="select" options='[{"label":"","value":""},{"label":"label 1","value":"1"},{"label":"label 2","value":"2"},{"label":"label 3","value":"3","selected":true}]'></md-text-field>
                    </div>

                    

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button type="reset" label="reset"></md-button>
                        <md-button type="submit" label="submit"></md-button>
                    </div>

                </div>
            </md-form>
        `;
    }

    handleFormNativeReset(event){
        console.log(event)
    }

    handleFormNativeSubmit(event){
        console.log(JSON.stringify(event.detail.data,null,4))
    }
}

customElements.define("dev-text-field", DevTextFieldComponent);

export default document.createElement("dev-text-field");
