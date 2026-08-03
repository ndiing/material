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
            { leading: [{ component: "avatar", src }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "avatar", src }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "avatar", src }], trailing: [], label: "Label text" },
        ];
        // With leading avatar and trailing checkbox
        const items1 = [
            { leading: [{ component: "avatar", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "avatar", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "avatar", src }], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Leading image or thumbnail

        // With leading image
        const items2 = [
            { leading: [{ component: "image", src }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "image", src }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "image", src }], trailing: [], label: "Label text" },
        ];
        // With leading image and trailing checkbox
        const items3 = [
            { leading: [{ component: "image", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "image", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "image", src }], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Leading video

        // With leading video
        const items4 = [
            { leading: [{ component: "video", src }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "video", src }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "video", src }], trailing: [], label: "Label text" },
        ];
        // With leading video and trailing checkbox
        const items5 = [
            { leading: [{ component: "video", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "video", src }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "video", src }], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Leading icon

        // With leading icon
        const items6 = [
            { leading: [{ component: "icon", icon: "person" }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "icon", icon: "person" }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "icon", icon: "person" }], trailing: [], label: "Label text" },
        ];
        // With leading icon and trailing checkbox
        const items7 = [
            { leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Text-only

        // With text only
        const items8 = [
            { leading: [], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [], trailing: [], label: "Label text", supporting: "Supporting text" },
            { leading: [], trailing: [], label: "Label text" },
        ];
        // With text and trailing checkbox
        const items9 = [
            { leading: [], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [], trailing: [{ component: "checkbox" }], label: "Label text", supporting: "Supporting text" },
            { leading: [], trailing: [{ component: "checkbox" }], label: "Label text" },
        ];
        // Leading checkbox

        // With leading checkbox
        const items10 = [
            { leading: [{ component: "checkbox" }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "checkbox" }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "checkbox" }], trailing: [], label: "Label text" },
        ];
        // With leading checkbox and trailing text
        const items11 = [
            { leading: [{ component: "checkbox" }], trailing: [{ component: "text", text: "100+" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "checkbox" }], trailing: [{ component: "text", text: "100+" }], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "checkbox" }], trailing: [{ component: "text", text: "100+" }], label: "Label text" },
        ];
        // Leading radio button

        // With leading radio button
        const items12 = [
            { leading: [{ component: "radioButton" }], trailing: [], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "radioButton" }], trailing: [], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "radioButton" }], trailing: [], label: "Label text" },
        ];
        // With leading radio button and trailing text
        const items13 = [
            { leading: [{ component: "radioButton" }], trailing: [{ component: "text", text: "100+" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "radioButton" }], trailing: [{ component: "text", text: "100+" }], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "radioButton" }], trailing: [{ component: "text", text: "100+" }], label: "Label text" },
        ];
        // Trailing switch

        // With trailing switch
        const items14 = [
            { leading: [], trailing: [{ component: "switch" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [], trailing: [{ component: "switch" }], label: "Label text", supporting: "Supporting text" },
            { leading: [], trailing: [{ component: "switch" }], label: "Label text" },
        ];
        // With leading icon and trailing switch
        const items15 = [
            { leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "switch" }], label: "Label text", supporting: "Supporting text that is long enough to fill up multiple lines" },
            { leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "switch" }], label: "Label text", supporting: "Supporting text" },
            { leading: [{ component: "icon", icon: "person" }], trailing: [{ component: "switch" }], label: "Label text" },
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
