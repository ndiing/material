import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    { leadingAvatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { leadingAvatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { leadingAvatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum" },
];
const items1 = [
    { trailingCheckbox: true, leadingAvatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { trailingCheckbox: true, leadingAvatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { trailingCheckbox: true, leadingAvatar: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum" },
];
const items2 = [
    { leadingImage: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { leadingImage: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { leadingImage: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum" },
];
const items3 = [
    { trailingCheckbox: true, leadingImage: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { trailingCheckbox: true, leadingImage: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { trailingCheckbox: true, leadingImage: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum" },
];
const items4 = [
    { leadingVideo: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { leadingVideo: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { leadingVideo: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum" },
];
const items5 = [
    { trailingCheckbox: true, leadingVideo: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { trailingCheckbox: true, leadingVideo: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { trailingCheckbox: true, leadingVideo: "https://api.dicebear.com/9.x/micah/svg?seed=Abby", headline: "Lorem ipsum" },
];
const items6 = [
    { leadingIcon: "image", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { leadingIcon: "image", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { leadingIcon: "image", headline: "Lorem ipsum" },
];
const items7 = [
    { trailingCheckbox: true, leadingIcon: "image", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { trailingCheckbox: true, leadingIcon: "image", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { trailingCheckbox: true, leadingIcon: "image", headline: "Lorem ipsum" },
];
const items8 = [
    //
    { headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { headline: "Lorem ipsum" },
];
const items9 = [
    { trailingCheckbox: true, headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { trailingCheckbox: true, headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { trailingCheckbox: true, headline: "Lorem ipsum" },
];
const items10 = [
    { leadingCheckbox: true, headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { leadingCheckbox: true, headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { leadingCheckbox: true, headline: "Lorem ipsum" },
];
const items11 = [
    { leadingCheckbox: true, trailingSupportingText: "100", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { leadingCheckbox: true, trailingSupportingText: "100", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { leadingCheckbox: true, trailingSupportingText: "100", headline: "Lorem ipsum" },
];
const items12 = [
    { leadingRadioButton: true, headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { leadingRadioButton: true, headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { leadingRadioButton: true, headline: "Lorem ipsum" },
];
const items13 = [
    { leadingRadioButton: true, trailingSupportingText: "100", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { leadingRadioButton: true, trailingSupportingText: "100", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { leadingRadioButton: true, trailingSupportingText: "100", headline: "Lorem ipsum" },
];
const items14 = [
    { trailingSwitch: true, headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { trailingSwitch: true, headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { trailingSwitch: true, headline: "Lorem ipsum" },
];
const items15 = [
    { trailingSwitch: true, leadingIcon: "image", headline: "Lorem ipsum", supportingText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquam." },
    { trailingSwitch: true, leadingIcon: "image", headline: "Lorem ipsum", supportingText: "Lorem ipsum" },
    { trailingSwitch: true, leadingIcon: "image", headline: "Lorem ipsum" },
];

class DevList extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items0}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items1}" map='{"headline":"headline","value":"value"}' format="" rangeSelection multiSelection singleSelection allSelection></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items2}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items3}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items4}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items5}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items6}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items7}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items8}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items9}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items10}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items11}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items12}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items13}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items14}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list .items="${items15}" map='{"headline":"headline","value":"value"}' format=""></md-list>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-list", DevList);

export default document.createElement("dev-list");
