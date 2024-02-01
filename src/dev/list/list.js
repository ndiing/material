import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ListComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-list .items="${[
                        {leadingAvatar:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline'},
                        {leadingAvatar:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',trailingCheckbox:''},

                        {leadingImage:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline'},
                        {leadingImage:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',trailingCheckbox:''},

                        {leadingVideo:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline'},
                        {leadingVideo:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',trailingCheckbox:''},

                        {leadingIcon:'image',label:'Headline'},
                        {leadingIcon:'image',label:'Headline',trailingCheckbox:''},

                        {label:'Headline'},
                        {label:'Headline',trailingCheckbox:''},

                        {leadingCheckbox:'',label:'Headline'},
                        {leadingCheckbox:'',label:'Headline',trailingSupportingText:'100+'},

                        {leadingRadioButton:'',label:'Headline'},
                        {leadingRadioButton:'',label:'Headline',trailingSupportingText:'100+'},
                        
                        {label:'Headline',trailingSwitch:''},
                        {leadingIcon:'image',label:'Headline',trailingSwitch:''},
                    ]}"></md-list>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-list size="two-line" .items="${[
                        {leadingAvatar:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text'},
                        {leadingAvatar:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},

                        {leadingImage:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text'},
                        {leadingImage:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},

                        {leadingVideo:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text'},
                        {leadingVideo:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},

                        {leadingIcon:'image',label:'Headline',supportingText:'Supporting text'},
                        {leadingIcon:'image',label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},

                        {label:'Headline',supportingText:'Supporting text'},
                        {label:'Headline',supportingText:'Supporting text',trailingCheckbox:''},

                        {leadingCheckbox:'',label:'Headline',supportingText:'Supporting text'},
                        {leadingCheckbox:'',label:'Headline',supportingText:'Supporting text',trailingSupportingText:'100+'},

                        {leadingRadioButton:'',label:'Headline',supportingText:'Supporting text'},
                        {leadingRadioButton:'',label:'Headline',supportingText:'Supporting text',trailingSupportingText:'100+'},

                        {label:'Headline',supportingText:'Supporting text',trailingSwitch:''},
                        {leadingIcon:'image',label:'Headline',supportingText:'Supporting text',trailingSwitch:''},
                    ]}"></md-list>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-list size="three-line" .items="${[
                        {leadingAvatar:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                        {leadingAvatar:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},

                        {leadingImage:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                        {leadingImage:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},

                        {leadingVideo:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                        {leadingVideo:'https://api.dicebear.com/7.x/icons/svg?seed=Smokey&scale=50',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},

                        {leadingIcon:'image',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                        {leadingIcon:'image',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},

                        {label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                        {label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingCheckbox:''},

                        {leadingCheckbox:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                        {leadingCheckbox:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingSupportingText:'100+'},

                        {leadingRadioButton:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                        {leadingRadioButton:'',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingSupportingText:'100+'},

                        {label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingSwitch:''},
                        {leadingIcon:'image',label:'Headline',supportingText:'Supporting text that is long enough to fill up multiple lines',trailingSwitch:''},
                    ]}"></md-list>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-list selectable .items="${[
                        {label:"Label 1",expanded:false,children:[
                            {label:"Label 1.1",expanded:false,children:[
                                {label:"Label 1.1.1"},
                                {label:"Label 1.1.2"},
                                {label:"Label 1.1.3"},
                                {label:"Label 1.1.4"},
                            ]},
                            {label:"Label 1.2",expanded:false,children:[
                                {label:"Label 1.2.1"},
                                {label:"Label 1.2.2"},
                                {label:"Label 1.2.3"},
                                {label:"Label 1.2.4"},
                            ]},
                            {label:"Label 1.3"},
                            {label:"Label 1.4"},
                        ]},
                        {label:"Label 2",expanded:false,children:[
                            {label:"Label 2.1",expanded:false,children:[
                                {label:"Label 2.1.1"},
                                {label:"Label 2.1.2"},
                                {label:"Label 2.1.3"},
                                {label:"Label 2.1.4"},
                            ]},
                            {label:"Label 2.2",expanded:false,children:[
                                {label:"Label 2.2.1"},
                                {label:"Label 2.2.2"},
                                {label:"Label 2.2.3"},
                                {label:"Label 2.2.4"},
                            ]},
                            {label:"Label 2.3"},
                            {label:"Label 2.4"},
                        ]},
                        {label:"Label 3"},
                        {label:"Label 4"},
                    ]}"></md-list>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-list selectable ui="tree-view" .items="${[
                        {label:"Label 1",expanded:false,children:[
                            {label:"Label 1.1",expanded:false,children:[
                                {label:"Label 1.1.1"},
                                {label:"Label 1.1.2"},
                                {label:"Label 1.1.3"},
                                {label:"Label 1.1.4"},
                            ]},
                            {label:"Label 1.2",expanded:false,children:[
                                {label:"Label 1.2.1"},
                                {label:"Label 1.2.2"},
                                {label:"Label 1.2.3"},
                                {label:"Label 1.2.4"},
                            ]},
                            {label:"Label 1.3"},
                            {label:"Label 1.4"},
                        ]},
                        {label:"Label 2",expanded:false,children:[
                            {label:"Label 2.1",expanded:false,children:[
                                {label:"Label 2.1.1"},
                                {label:"Label 2.1.2"},
                                {label:"Label 2.1.3"},
                                {label:"Label 2.1.4"},
                            ]},
                            {label:"Label 2.2",expanded:false,children:[
                                {label:"Label 2.2.1"},
                                {label:"Label 2.2.2"},
                                {label:"Label 2.2.3"},
                                {label:"Label 2.2.4"},
                            ]},
                            {label:"Label 2.3"},
                            {label:"Label 2.4"},
                        ]},
                        {label:"Label 3"},
                        {label:"Label 4"},
                    ]}"></md-list>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-list selectable ui="level-view" .items="${[
                        {label:"Label 1",expanded:false,children:[
                            {label:"Label 1.1",expanded:false,children:[
                                {label:"Label 1.1.1"},
                                {label:"Label 1.1.2"},
                                {label:"Label 1.1.3"},
                                {label:"Label 1.1.4"},
                            ]},
                            {label:"Label 1.2",expanded:false,children:[
                                {label:"Label 1.2.1"},
                                {label:"Label 1.2.2"},
                                {label:"Label 1.2.3"},
                                {label:"Label 1.2.4"},
                            ]},
                            {label:"Label 1.3"},
                            {label:"Label 1.4"},
                        ]},
                        {label:"Label 2",expanded:false,children:[
                            {label:"Label 2.1",expanded:false,children:[
                                {label:"Label 2.1.1"},
                                {label:"Label 2.1.2"},
                                {label:"Label 2.1.3"},
                                {label:"Label 2.1.4"},
                            ]},
                            {label:"Label 2.2",expanded:false,children:[
                                {label:"Label 2.2.1"},
                                {label:"Label 2.2.2"},
                                {label:"Label 2.2.3"},
                                {label:"Label 2.2.4"},
                            ]},
                            {label:"Label 2.3"},
                            {label:"Label 2.4"},
                        ]},
                        {label:"Label 3"},
                        {label:"Label 4"},
                    ]}"></md-list>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("list-component", ListComponent);

export default document.createElement("list-component");
