import { html, nothing } from "lit";
import { MdElement } from "../../material/base/element.js";
import { Store } from "../../material/core/store.js";

class DemoList extends MdElement {
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

        
        this.data0 = [
            // Level 1 - C-Level
            { id: 1, parent_id: null, label: "CEO Office" },
            { id: 2, parent_id: null, label: "Board of Directors" },

            // Level 2 - Divisi
            { id: 3, parent_id: 1, label: "Technology Division" },
            { id: 4, parent_id: 1, label: "Operations Division" },
            { id: 5, parent_id: 1, label: "Finance Division" },
            { id: 6, parent_id: 1, label: "HR & GA Division" },

            // Technology Division
            { id: 7, parent_id: 3, label: "Software Engineering" },
            { id: 8, parent_id: 3, label: "Infrastructure & DevOps" },
            { id: 9, parent_id: 3, label: "Data & Analytics" },
            { id: 10, parent_id: 3, label: "Product Management" },
            { id: 11, parent_id: 3, label: "Quality Assurance" },

            // Software Engineering Teams
            { id: 12, parent_id: 7, label: "Frontend Team" },
            { id: 13, parent_id: 7, label: "Backend Team" },
            { id: 14, parent_id: 7, label: "Mobile Team" },

            // Frontend Team
            { id: 15, parent_id: 12, label: "React Development" },
            { id: 16, parent_id: 12, label: "Vue Development" },
            { id: 17, parent_id: 12, label: "Angular Development" },

            // Backend Team
            { id: 18, parent_id: 13, label: "Node.js Services" },
            { id: 19, parent_id: 13, label: "Java Microservices" },
            { id: 20, parent_id: 13, label: "Python AI Services" },

            // Infrastructure
            { id: 21, parent_id: 8, label: "Cloud Operations" },
            { id: 22, parent_id: 8, label: "Network Security" },
            { id: 23, parent_id: 8, label: "Database Administration" },

            // Data & Analytics
            { id: 24, parent_id: 9, label: "Data Engineering" },
            { id: 25, parent_id: 9, label: "Data Science" },
            { id: 26, parent_id: 9, label: "Business Intelligence" },

            // Operations Division
            { id: 27, parent_id: 4, label: "Supply Chain" },
            { id: 28, parent_id: 4, label: "Manufacturing" },
            { id: 29, parent_id: 4, label: "Quality Control" },
            { id: 30, parent_id: 4, label: "Logistics" },

            // Finance Division
            { id: 31, parent_id: 5, label: "Accounting" },
            { id: 32, parent_id: 5, label: "Treasury" },
            { id: 33, parent_id: 5, label: "Budgeting & Planning" },
            { id: 34, parent_id: 5, label: "Taxation" },

            // HR & GA
            { id: 35, parent_id: 6, label: "Recruitment" },
            { id: 36, parent_id: 6, label: "Training & Development" },
            { id: 37, parent_id: 6, label: "Compensation & Benefit" },
            { id: 38, parent_id: 6, label: "General Affairs" },
        ];
        this.data1 = [
            // Level 1 - C-Level
            { id: 1, parent_id: null, label: "CEO Office" },
            { id: 2, parent_id: null, label: "Board of Directors" },

            // Level 2 - Divisi
            { id: 3, parent_id: 1, label: "Technology Division" },
            { id: 4, parent_id: 1, label: "Operations Division" },
            { id: 5, parent_id: 1, label: "Finance Division" },
            { id: 6, parent_id: 1, label: "HR & GA Division" },

            // Technology Division
            { id: 7, parent_id: 3, label: "Software Engineering" },
            { id: 8, parent_id: 3, label: "Infrastructure & DevOps" },
            { id: 9, parent_id: 3, label: "Data & Analytics" },
            { id: 10, parent_id: 3, label: "Product Management" },
            { id: 11, parent_id: 3, label: "Quality Assurance" },

            // Software Engineering Teams
            { id: 12, parent_id: 7, label: "Frontend Team" },
            { id: 13, parent_id: 7, label: "Backend Team" },
            { id: 14, parent_id: 7, label: "Mobile Team" },

            // Frontend Team
            { id: 15, parent_id: 12, label: "React Development" },
            { id: 16, parent_id: 12, label: "Vue Development" },
            { id: 17, parent_id: 12, label: "Angular Development" },

            // Backend Team
            { id: 18, parent_id: 13, label: "Node.js Services" },
            { id: 19, parent_id: 13, label: "Java Microservices" },
            { id: 20, parent_id: 13, label: "Python AI Services" },

            // Infrastructure
            { id: 21, parent_id: 8, label: "Cloud Operations" },
            { id: 22, parent_id: 8, label: "Network Security" },
            { id: 23, parent_id: 8, label: "Database Administration" },

            // Data & Analytics
            { id: 24, parent_id: 9, label: "Data Engineering" },
            { id: 25, parent_id: 9, label: "Data Science" },
            { id: 26, parent_id: 9, label: "Business Intelligence" },

            // Operations Division
            { id: 27, parent_id: 4, label: "Supply Chain", selected: true },
            { id: 28, parent_id: 4, label: "Manufacturing" },
            { id: 29, parent_id: 4, label: "Quality Control" },
            { id: 30, parent_id: 4, label: "Logistics" },

            // Finance Division
            { id: 31, parent_id: 5, label: "Accounting" },
            { id: 32, parent_id: 5, label: "Treasury" },
            { id: 33, parent_id: 5, label: "Budgeting & Planning" },
            { id: 34, parent_id: 5, label: "Taxation" },

            // HR & GA
            { id: 35, parent_id: 6, label: "Recruitment" },
            { id: 36, parent_id: 6, label: "Training & Development" },
            { id: 37, parent_id: 6, label: "Compensation & Benefit" },
            { id: 38, parent_id: 6, label: "General Affairs" },
        ];

        this.docs = [
            {label:'Leading avatar',items:[items0, items1]},
            {label:'With leading image',items:[items2, items3]},
            {label:'Leading video',items:[items4, items5]},
            {label:'Leading icon',items:[items6, items7]},
            {label:'Text-only',items:[items8, items9]},
            {label:'Leading checkbox',items:[items10, items11]},
            {label:'Leading radio button',items:[items12, items13]},
            {label:'Trailing switch',items:[items14, items15]},
        ];
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">
                
                ${this.docs.map(doc=>html`
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>${doc.label}</h3>
                            </md-grid-column>
    
                            ${doc.items.map(items=>html`
                                <md-grid-column expanded="6" medium="4" compact="4">
                                    ${items.length?html`<md-list .items="${items}"></md-list>`:nothing}
                                </md-grid-column>
                            `)}
                        </md-grid>
                    </md-grid-column>
                `)}
                
                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>List interactions</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-list
                                .items="${this.data0}"
                                .singleSelect="${true}"
                            ></md-list>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-list
                                .items="${this.data1}"
                                .singleSelect="${true}"
                            ></md-list>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>
                
            </md-grid>
        `
    }
}

customElements.define("demo-list", DemoList);

export default document.createElement("demo-list");