import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ListComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .items="${[
                            {avatar:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',},
                            {image:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',},
                            {video:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',},
                            {icon:'image',label:'Headline',},
                            {label:'Headline',},
                            {checkbox:'',label:'Headline',},
                            {radioButton:'',label:'Headline',},
                            {trailingSwitch:'',label:'Headline',},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .size="${'two-line'}"
                        .items="${[
                            {avatar:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text',},
                            {image:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text',},
                            {video:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text',},
                            {icon:'image',label:'Headline',supportingText:'Supporting text',},
                            {label:'Headline',supportingText:'Supporting text',},
                            {checkbox:'',label:'Headline',supportingText:'Supporting text',},
                            {radioButton:'',label:'Headline',supportingText:'Supporting text',},
                            {trailingSwitch:'',label:'Headline',supportingText:'Supporting text',},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .size="${'three-line'}"
                        .items="${[
                            {avatar:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',},
                            {image:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',},
                            {video:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',},
                            {icon:'image',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',},
                            {label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',},
                            {checkbox:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',},
                            {radioButton:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',},
                            {trailingSwitch:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',},
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .items="${[
                            {avatar:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',trailingCheckbox:''},
                            {image:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',trailingCheckbox:''},
                            {video:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',trailingCheckbox:''},
                            {icon:'image',label:'Headline',trailingCheckbox:''},
                            {label:'Headline',trailingCheckbox:''},
                            {checkbox:'',label:'Headline',trailingSupportingText:'100+'},
                            {radioButton:'',label:'Headline',trailingSupportingText:'100+'},
                            {trailingSwitch:'',label:'Headline',icon:'image'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .size="${'two-line'}"
                        .items="${[
                            {avatar:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},
                            {image:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},
                            {video:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},
                            {icon:'image',label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},
                            {label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},
                            {checkbox:'',label:'Headline',supportingText:'Supporting text',trailingSupportingText:'100+'},
                            {radioButton:'',label:'Headline',supportingText:'Supporting text',trailingSupportingText:'100+'},
                            {trailingSwitch:'',label:'Headline',supportingText:'Supporting text',icon:'image'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .size="${'three-line'}"
                        .items="${[
                            {avatar:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},
                            {image:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},
                            {video:'https://api.dicebear.com/7.x/icons/svg?seed=Oliver',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},
                            {icon:'image',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},
                            {label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},
                            {checkbox:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingSupportingText:'100+'},
                            {radioButton:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingSupportingText:'100+'},
                            {trailingSwitch:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',icon:'image'},
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .items="${[
                            {label:'Label'},
                            {label:'Label'},
                            {label:'Label'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .selectable="${true}"
                        .type="${'single-select'}"
                        .items="${[
                            {radioButton:'',label:'Label',activated:true},
                            {radioButton:'',label:'Label'},
                            {radioButton:'',label:'Label'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .selectable="${true}"
                        .type="${'multi-select'}"
                        .items="${[
                            {checkbox:'',label:'Label',activated:true},
                            {checkbox:'',label:'Label',activated:true},
                            {checkbox:'',label:'Label'},
                        ]}"
                    ></md-list>
                </div>
            </div>
        `;
    }
}

customElements.define("list-component", ListComponent);

export default document.createElement("list-component");
