import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoPushMenu extends MdElement {
    constructor() {
        super();

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
    }
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-push-menu
                        .items="${this.data0}"
                        .singleSelect="${true}"
                    ></md-push-menu>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-push-menu
                        .items="${this.data1}"
                        .singleSelect="${true}"
                    ></md-push-menu>
                </md-grid-column>
                
            </md-grid>
        `
    }
}
customElements.define("demo-push-menu", DemoPushMenu);
export default document.createElement("demo-push-menu");
