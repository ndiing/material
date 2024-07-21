import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
class DevTree extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-tree
                                .list="${[
                                    {
                                        label: "Fruits",
                                        children: [
                                            {
                                                label: "Citrus",
                                                children: [
                                                    { label: "Orange", children: [] },
                                                    { label: "Lemon", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Berries",
                                                children: [
                                                    { label: "Strawberry", children: [] },
                                                    { label: "Blueberry", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Vegetables",
                                        children: [
                                            {
                                                label: "Leafy Green",
                                                expanded: true,
                                                children: [
                                                    { label: "Spinach", children: [] },
                                                    { label: "Kale", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Root",
                                                children: [
                                                    { selected: true, label: "Carrot", children: [] },
                                                    { label: "Beetroot", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Grains",
                                        children: [
                                            {
                                                label: "Cereal",
                                                children: [
                                                    { label: "Wheat", children: [] },
                                                    { label: "Rice", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Legumes",
                                                children: [
                                                    { label: "Lentils", children: [] },
                                                    { label: "Chickpeas", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                ]}"
                                variant="plain"
                                @onTreeItemClick="${console.log}"
                            ></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-tree
                                .list="${[
                                    {
                                        label: "Fruits",
                                        children: [
                                            {
                                                label: "Citrus",
                                                children: [
                                                    { label: "Orange", children: [] },
                                                    { label: "Lemon", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Berries",
                                                children: [
                                                    { label: "Strawberry", children: [] },
                                                    { label: "Blueberry", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Vegetables",
                                        children: [
                                            {
                                                label: "Leafy Green",
                                                expanded: true,
                                                children: [
                                                    { label: "Spinach", children: [] },
                                                    { label: "Kale", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Root",
                                                children: [
                                                    { selected: true, label: "Carrot", children: [] },
                                                    { label: "Beetroot", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Grains",
                                        children: [
                                            {
                                                label: "Cereal",
                                                children: [
                                                    { label: "Wheat", children: [] },
                                                    { label: "Rice", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Legumes",
                                                children: [
                                                    { label: "Lentils", children: [] },
                                                    { label: "Chickpeas", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                ]}"
                                variant="accordion"
                                @onTreeItemClick="${console.log}"
                            ></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-tree
                                .list="${[
                                    {
                                        label: "Fruits",
                                        children: [
                                            {
                                                label: "Citrus",
                                                children: [
                                                    { label: "Orange", children: [] },
                                                    { label: "Lemon", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Berries",
                                                children: [
                                                    { label: "Strawberry", children: [] },
                                                    { label: "Blueberry", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Vegetables",
                                        children: [
                                            {
                                                label: "Leafy Green",
                                                expanded: true,
                                                children: [
                                                    { label: "Spinach", children: [] },
                                                    { label: "Kale", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Root",
                                                children: [
                                                    { selected: true, label: "Carrot", children: [] },
                                                    { label: "Beetroot", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Grains",
                                        children: [
                                            {
                                                label: "Cereal",
                                                children: [
                                                    { label: "Wheat", children: [] },
                                                    { label: "Rice", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Legumes",
                                                children: [
                                                    { label: "Lentils", children: [] },
                                                    { label: "Chickpeas", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                ]}"
                                variant="tree"
                                @onTreeItemClick="${console.log}"
                            ></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-tree
                                .list="${[
                                    {
                                        label: "Fruits",
                                        children: [
                                            {
                                                label: "Citrus",
                                                children: [
                                                    { label: "Orange", children: [] },
                                                    { label: "Lemon", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Berries",
                                                children: [
                                                    { label: "Strawberry", children: [] },
                                                    { label: "Blueberry", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Vegetables",
                                        children: [
                                            {
                                                label: "Leafy Green",
                                                expanded: true,
                                                children: [
                                                    { label: "Spinach", children: [] },
                                                    { label: "Kale", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Root",
                                                children: [
                                                    { selected: true, label: "Carrot", children: [] },
                                                    { label: "Beetroot", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Grains",
                                        children: [
                                            {
                                                label: "Cereal",
                                                children: [
                                                    { label: "Wheat", children: [] },
                                                    { label: "Rice", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Legumes",
                                                children: [
                                                    { label: "Lentils", children: [] },
                                                    { label: "Chickpeas", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                ]}"
                                variant="level"
                                @onTreeItemClick="${console.log}"
                            ></md-tree>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("dev-tree", DevTree);
export default document.createElement("dev-tree");
