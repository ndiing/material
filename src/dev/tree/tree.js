import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    {
        label: "Fruits",
        items: [
            {
                label: "Citrus",
                items: [
                    { label: "Orange", items: [] },
                    { label: "Lemon", items: [] },
                ],
            },
            {
                label: "Berries",
                items: [
                    { label: "Strawberry", items: [] },
                    { label: "Blueberry", items: [] },
                ],
            },
        ],
    },
    {
        label: "Vegetables",
        items: [
            {
                label: "Leafy Green",
                expanded: true,
                items: [
                    { label: "Spinach", items: [] },
                    { label: "Kale", items: [] },
                ],
            },
            {
                label: "Root",
                items: [
                    { selected: true, label: "Carrot", items: [] },
                    { label: "Beetroot", items: [] },
                ],
            },
        ],
    },
    {
        label: "Grains",
        items: [
            {
                label: "Cereal",
                items: [
                    { label: "Wheat", items: [] },
                    { label: "Rice", items: [] },
                ],
            },
            {
                label: "Legumes",
                items: [
                    { label: "Lentils", items: [] },
                    { label: "Chickpeas", items: [] },
                ],
            },
        ],
    },
];
const items1 = [
    {
        label: "Fruits",
        items: [
            {
                label: "Citrus",
                items: [
                    { label: "Orange", items: [] },
                    { label: "Lemon", items: [] },
                ],
            },
            {
                label: "Berries",
                items: [
                    { label: "Strawberry", items: [] },
                    { label: "Blueberry", items: [] },
                ],
            },
        ],
    },
    {
        label: "Vegetables",
        items: [
            {
                label: "Leafy Green",
                expanded: true,
                items: [
                    { label: "Spinach", items: [] },
                    { label: "Kale", items: [] },
                ],
            },
            {
                label: "Root",
                items: [
                    { selected: true, label: "Carrot", items: [] },
                    { label: "Beetroot", items: [] },
                ],
            },
        ],
    },
    {
        label: "Grains",
        items: [
            {
                label: "Cereal",
                items: [
                    { label: "Wheat", items: [] },
                    { label: "Rice", items: [] },
                ],
            },
            {
                label: "Legumes",
                items: [
                    { label: "Lentils", items: [] },
                    { label: "Chickpeas", items: [] },
                ],
            },
        ],
    },
];
const items2 = [
    {
        label: "Fruits",
        items: [
            {
                label: "Citrus",
                items: [
                    { label: "Orange", items: [] },
                    { label: "Lemon", items: [] },
                ],
            },
            {
                label: "Berries",
                items: [
                    { label: "Strawberry", items: [] },
                    { label: "Blueberry", items: [] },
                ],
            },
        ],
    },
    {
        label: "Vegetables",
        items: [
            {
                label: "Leafy Green",
                expanded: true,
                items: [
                    { label: "Spinach", items: [] },
                    { label: "Kale", items: [] },
                ],
            },
            {
                label: "Root",
                items: [
                    { selected: true, label: "Carrot", items: [] },
                    { label: "Beetroot", items: [] },
                ],
            },
        ],
    },
    {
        label: "Grains",
        items: [
            {
                label: "Cereal",
                items: [
                    { label: "Wheat", items: [] },
                    { label: "Rice", items: [] },
                ],
            },
            {
                label: "Legumes",
                items: [
                    { label: "Lentils", items: [] },
                    { label: "Chickpeas", items: [] },
                ],
            },
        ],
    },
];
const items3 = [
    {
        label: "Fruits",
        items: [
            {
                label: "Citrus",
                items: [
                    { label: "Orange", items: [] },
                    { label: "Lemon", items: [] },
                ],
            },
            {
                label: "Berries",
                items: [
                    { label: "Strawberry", items: [] },
                    { label: "Blueberry", items: [] },
                ],
            },
        ],
    },
    {
        label: "Vegetables",
        items: [
            {
                label: "Leafy Green",
                expanded: true,
                items: [
                    { label: "Spinach", items: [] },
                    { label: "Kale", items: [] },
                ],
            },
            {
                label: "Root",
                items: [
                    { selected: true, label: "Carrot", items: [] },
                    { label: "Beetroot", items: [] },
                ],
            },
        ],
    },
    {
        label: "Grains",
        items: [
            {
                label: "Cereal",
                items: [
                    { label: "Wheat", items: [] },
                    { label: "Rice", items: [] },
                ],
            },
            {
                label: "Legumes",
                items: [
                    { label: "Lentils", items: [] },
                    { label: "Chickpeas", items: [] },
                ],
            },
        ],
    },
];

class DevTree extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree .items="${items0}" variant="plain" @onTreeItemClick="${console.log}"></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree .items="${items1}" variant="accordion" @onTreeItemClick="${console.log}"></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree .items="${items2}" variant="tree" @onTreeItemClick="${console.log}"></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree .items="${items3}" variant="level" @onTreeItemClick="${console.log}"></md-tree>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("dev-tree", DevTree);
export default document.createElement("dev-tree");
