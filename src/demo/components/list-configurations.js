import { html, nothing } from "lit";
import { MdElement } from "../../material/base/element.js";
import { Store } from "../../material/core/store.js";

class DemoListConfigurations extends MdElement {
    static properties = {};

    constructor() {
        super();

        const src = "https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50";

        // Configurations

        // Leading avatar

        // With leading avatar
        const items0 = [
            { id: "0", leading: [{ component: "avatar", src }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "1", leading: [{ component: "avatar", src }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { id: "2", leading: [{ component: "avatar", src }], trailing: [], label: "Label text" },
        ];
        // With leading avatar and trailing checkbox
        const items1 = [
            { id: "3", leading: [{ component: "avatar", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "4", leading: [{ component: "avatar", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { id: "5", leading: [{ component: "avatar", src }], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Leading image or thumbnail

        // With leading image
        const items2 = [
            { id: "6", leading: [{ component: "image", src }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "7", leading: [{ component: "image", src }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { id: "8", leading: [{ component: "image", src }], trailing: [], label: "Label text" },
        ];
        // With leading image and trailing checkbox
        const items3 = [
            { id: "9", leading: [{ component: "image", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "10", leading: [{ component: "image", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { id: "11", leading: [{ component: "image", src }], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Leading video

        // With leading video
        const items4 = [
            { id: "12", leading: [{ component: "video", src }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "13", leading: [{ component: "video", src }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { id: "14", leading: [{ component: "video", src }], trailing: [], label: "Label text" },
        ];
        // With leading video and trailing checkbox
        const items5 = [
            { id: "15", leading: [{ component: "video", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "16", leading: [{ component: "video", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { id: "17", leading: [{ component: "video", src }], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Leading icon

        // With leading icon
        const items6 = [
            { id: "18", leading: [{ component: "icon", icon: "person" }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "19", leading: [{ component: "icon", icon: "person" }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { id: "20", leading: [{ component: "icon", icon: "person" }], trailing: [], label: "Label text" },
        ];
        // With leading icon and trailing checkbox
        const items7 = [
            { id: "21", leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "22", leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { id: "23", leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Text-only

        // With text only
        const items8 = [
            { id: "24", leading: [], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "25", leading: [], trailing: [], label: "Label text", supporting: "Supporting text" },
            { id: "26", leading: [], trailing: [], label: "Label text" },
        ];
        // With text and trailing checkbox
        const items9 = [
            { id: "27", leading: [], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "28", leading: [], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { id: "29", leading: [], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Leading checkbox

        // With leading checkbox
        const items10 = [
            { id: "30", leading: [{ component: "checkbox" }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "31", leading: [{ component: "checkbox" }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { id: "32", leading: [{ component: "checkbox" }], trailing: [], label: "Label text" },
        ];
        // With leading checkbox and trailing text
        const items11 = [
            { id: "33", leading: [{ component: "checkbox" }], trailing: [{ component: "text", text: "100+" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "34", leading: [{ component: "checkbox" }], trailing: [{ component: "text", text: "100+" }], label: "Label text", supporting: "Supporting text" },
            { id: "35", leading: [{ component: "checkbox" }], trailing: [{ component: "text", text: "100+" }], label: "Label text" },
        ];
        // Leading radio button

        // With leading radio button
        const items12 = [
            { id: "36", leading: [{ component: "radio-button" }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "37", leading: [{ component: "radio-button" }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { id: "38", leading: [{ component: "radio-button" }], trailing: [], label: "Label text" },
        ];
        // With leading radio button and trailing text
        const items13 = [
            { id: "39", leading: [{ component: "radio-button" }], trailing: [{ component: "text", text: "100+" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "40", leading: [{ component: "radio-button" }], trailing: [{ component: "text", text: "100+" }], label: "Label text", supporting: "Supporting text" },
            { id: "41", leading: [{ component: "radio-button" }], trailing: [{ component: "text", text: "100+" }], label: "Label text" },
        ];
        // Trailing switch

        // With trailing switch
        const items14 = [
            { id: "42", leading: [], trailing: [{ component: "switch" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "43", leading: [], trailing: [{ component: "switch" }], label: "Label text", supporting: "Supporting text" },
            { id: "44", leading: [], trailing: [{ component: "switch" }], label: "Label text" },
        ];
        // With leading icon and trailing switch
        const items15 = [
            { id: "45", leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "switch" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { id: "46", leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "switch" }], label: "Label text", supporting: "Supporting text" },
            { id: "47", leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "switch" }], label: "Label text" },
        ];

        this.configurations = [
            [items0, items1, []], //
            [items2, items3, []],
            [items4, items5, []],
            [items6, items7, []],
            [items8, items9, []],
            [items10, items11, []],
            [items12, items13, []],
            [items14, items15, []],
        ];
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-grid">
                ${this.configurations.map(rows=>html`
                    ${rows.map(items=>html`
                        <div class="md-grid__column md-grid__column--expanded4 md-grid__column--medium4 md-grid__column--compact4">
                            ${items.length?html`
                                <md-list .items="${items}"></md-list>
                            `:nothing}
                        </div>
                    `)}
                `)}
            </div>
        `
    }
}

customElements.define("demo-list-configurations", DemoListConfigurations);

export default document.createElement("demo-list-configurations");
