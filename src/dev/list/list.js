import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const data=[
    [
        {avatar:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {avatar:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {avatar:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum'},
    ],
    [
        {trailingCheckbox:true,avatar:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {trailingCheckbox:true,avatar:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {trailingCheckbox:true,avatar:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum'},
    ],
    [
        {thumbnail:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {thumbnail:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {thumbnail:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum'},
    ],
    [
        {trailingCheckbox:true,thumbnail:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {trailingCheckbox:true,thumbnail:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {trailingCheckbox:true,thumbnail:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum'},
    ],
    [
        {image:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {image:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {image:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum'},
    ],
    [
        {trailingCheckbox:true,image:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {trailingCheckbox:true,image:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {trailingCheckbox:true,image:'https://api.dicebear.com/9.x/micah/svg?seed=Abby',label:'Lorem ipsum'},
    ],
    [
        {icon:'image',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {icon:'image',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {icon:'image',label:'Lorem ipsum'},
    ],
    [
        {trailingCheckbox:true,icon:'image',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {trailingCheckbox:true,icon:'image',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {trailingCheckbox:true,icon:'image',label:'Lorem ipsum'},
    ],
    [
        {label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {label:'Lorem ipsum'},
    ],
    [
        {trailingCheckbox:true,label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {trailingCheckbox:true,label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {trailingCheckbox:true,label:'Lorem ipsum'},
    ],
    [
        {leadingCheckbox:true,label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {leadingCheckbox:true,label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {leadingCheckbox:true,label:'Lorem ipsum'},
    ],
    [
        {leadingCheckbox:true,text:'100',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {leadingCheckbox:true,text:'100',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {leadingCheckbox:true,text:'100',label:'Lorem ipsum'},
    ],
    [
        {leadingRadioButton:true,label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {leadingRadioButton:true,label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {leadingRadioButton:true,label:'Lorem ipsum'},
    ],
    [
        {leadingRadioButton:true,text:'100',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {leadingRadioButton:true,text:'100',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {leadingRadioButton:true,text:'100',label:'Lorem ipsum'},
    ],
    [
        {trailingSwitch:true,label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {trailingSwitch:true,label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {trailingSwitch:true,label:'Lorem ipsum'},
    ],
    [
        {trailingSwitch:true,icon:'image',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'},
        {trailingSwitch:true,icon:'image',label:'Lorem ipsum',subLabel:'Lorem ipsum dolor sit amet'},
        {trailingSwitch:true,icon:'image',label:'Lorem ipsum'},
    ],
]



class DevList extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">

                        ${data.map(list=>html`
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-list
                                    .list="${list}"
                                    map='{"label":"label","value":"value"}'
                                    format=""
                                    @onListItemClick="${console.log}"
                                    @handleListKeydown="${console.log}"
                                    @onListItemSelectionStart="${console.log}"
                                    @onListItemSelection="${console.log}"
                                    @onListItemSelectionEnd="${console.log}"
                                    @onListItemCheckboxNativeInput="${console.log}"
                                    @onListItemRadioButtonNativeInput="${console.log}"
                                    @onListItemSwitchNativeInput="${console.log}"
                                ></md-list>
                            </div>
                        `)}
                        
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-list", DevList);

export default document.createElement("dev-list");
