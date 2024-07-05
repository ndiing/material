import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTreeComponent extends MDComponent {
    constructor() {
        super();

        this.list1 = [
            {
                label: "Item 1",
                children: [
                    { label: "Item 1.1", expanded: true, children: [{ label: "Item 1.1.1" }, { label: "Item 1.1.2" }] },
                    { label: "Item 1.2", children: [{ label: "Item 1.2.1" }, { label: "Item 1.2.2" }] },
                ],
            },
            {
                label: "Item 2",
                children: [
                    { label: "Item 2.1", children: [{ label: "Item 2.1.1", selected: true }, { label: "Item 2.1.2" }] },
                    { label: "Item 2.2", children: [{ label: "Item 2.2.1" }, { label: "Item 2.2.2" }] },
                ],
            },
            {
                label: "Item 3",
                children: [
                    { label: "Item 3.1", children: [{ label: "Item 3.1.1" }, { label: "Item 3.1.2" }] },
                    { label: "Item 3.2", children: [{ label: "Item 3.2.1" }, { label: "Item 3.2.2" }] },
                ],
            },
        ];
        this.list2 = [
            {
                label: "Item 1",
                children: [
                    { label: "Item 1.1", expanded: true, children: [{ label: "Item 1.1.1" }, { label: "Item 1.1.2" }] },
                    { label: "Item 1.2", children: [{ label: "Item 1.2.1" }, { label: "Item 1.2.2" }] },
                ],
            },
            {
                label: "Item 2",
                children: [
                    { label: "Item 2.1", children: [{ label: "Item 2.1.1", selected: true }, { label: "Item 2.1.2" }] },
                    { label: "Item 2.2", children: [{ label: "Item 2.2.1" }, { label: "Item 2.2.2" }] },
                ],
            },
            {
                label: "Item 3",
                children: [
                    { label: "Item 3.1", children: [{ label: "Item 3.1.1" }, { label: "Item 3.1.2" }] },
                    { label: "Item 3.2", children: [{ label: "Item 3.2.1" }, { label: "Item 3.2.2" }] },
                ],
            },
        ];
        this.list3 = [
            {
                label: "Item 1",
                children: [
                    { label: "Item 1.1", expanded: true, children: [{ label: "Item 1.1.1" }, { label: "Item 1.1.2" }] },
                    { label: "Item 1.2", children: [{ label: "Item 1.2.1" }, { label: "Item 1.2.2" }] },
                ],
            },
            {
                label: "Item 2",
                children: [
                    { label: "Item 2.1", children: [{ label: "Item 2.1.1", selected: true }, { label: "Item 2.1.2" }] },
                    { label: "Item 2.2", children: [{ label: "Item 2.2.1" }, { label: "Item 2.2.2" }] },
                ],
            },
            {
                label: "Item 3",
                children: [
                    { label: "Item 3.1", children: [{ label: "Item 3.1.1" }, { label: "Item 3.1.2" }] },
                    { label: "Item 3.2", children: [{ label: "Item 3.2.1" }, { label: "Item 3.2.2" }] },
                ],
            },
        ];
        this.list4 = [
            {
                label: "Item 1",
                children: [
                    { label: "Item 1.1", expanded: true, children: [{ label: "Item 1.1.1" }, { label: "Item 1.1.2" }] },
                    { label: "Item 1.2", children: [{ label: "Item 1.2.1" }, { label: "Item 1.2.2" }] },
                ],
            },
            {
                label: "Item 2",
                children: [
                    { label: "Item 2.1", children: [{ label: "Item 2.1.1", selected: true }, { label: "Item 2.1.2" }] },
                    { label: "Item 2.2", children: [{ label: "Item 2.2.1" }, { label: "Item 2.2.2" }] },
                ],
            },
            {
                label: "Item 3",
                children: [
                    { label: "Item 3.1", children: [{ label: "Item 3.1.1" }, { label: "Item 3.1.2" }] },
                    { label: "Item 3.2", children: [{ label: "Item 3.2.1" }, { label: "Item 3.2.2" }] },
                ],
            },
        ];
    }
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        variant="plain"
                        .list="${this.list1}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        variant="accordion"
                        .list="${this.list2}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        variant="tree"
                        .list="${this.list3}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        variant="level"
                        .list="${this.list4}"
                    ></md-tree>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-tree", DevTreeComponent);

export default document.createElement("dev-tree");
