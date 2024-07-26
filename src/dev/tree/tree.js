import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    {
        headline: "Fruits",
        items: [
            {
                headline: "Citrus",
                items: [
                    { headline: "Orange", items: [] },
                    { headline: "Lemon", items: [] },
                ],
            },
            {
                headline: "Berries",
                items: [
                    { headline: "Strawberry", items: [] },
                    { headline: "Blueberry", items: [] },
                ],
            },
        ],
    },
    {
        headline: "Vegetables",
        items: [
            {
                headline: "Leafy Green",
                expanded: true,
                items: [
                    { headline: "Spinach", items: [] },
                    { headline: "Kale", items: [] },
                ],
            },
            {
                headline: "Root",
                items: [
                    { selected: true, headline: "Carrot", items: [] },
                    { headline: "Beetroot", items: [] },
                ],
            },
        ],
    },
    {
        headline: "Grains",
        items: [
            {
                headline: "Cereal",
                items: [
                    { headline: "Wheat", items: [] },
                    { headline: "Rice", items: [] },
                ],
            },
            {
                headline: "Legumes",
                items: [
                    { headline: "Lentils", items: [] },
                    { headline: "Chickpeas", items: [] },
                ],
            },
        ],
    },
];
const items1 = [
    {
        headline: "Fruits",
        items: [
            {
                headline: "Citrus",
                items: [
                    { headline: "Orange", items: [] },
                    { headline: "Lemon", items: [] },
                ],
            },
            {
                headline: "Berries",
                items: [
                    { headline: "Strawberry", items: [] },
                    { headline: "Blueberry", items: [] },
                ],
            },
        ],
    },
    {
        headline: "Vegetables",
        items: [
            {
                headline: "Leafy Green",
                expanded: true,
                items: [
                    { headline: "Spinach", items: [] },
                    { headline: "Kale", items: [] },
                ],
            },
            {
                headline: "Root",
                items: [
                    { selected: true, headline: "Carrot", items: [] },
                    { headline: "Beetroot", items: [] },
                ],
            },
        ],
    },
    {
        headline: "Grains",
        items: [
            {
                headline: "Cereal",
                items: [
                    { headline: "Wheat", items: [] },
                    { headline: "Rice", items: [] },
                ],
            },
            {
                headline: "Legumes",
                items: [
                    { headline: "Lentils", items: [] },
                    { headline: "Chickpeas", items: [] },
                ],
            },
        ],
    },
];
const items2 = [
    {
        headline: "Fruits",
        items: [
            {
                headline: "Citrus",
                items: [
                    { headline: "Orange", items: [] },
                    { headline: "Lemon", items: [] },
                ],
            },
            {
                headline: "Berries",
                items: [
                    { headline: "Strawberry", items: [] },
                    { headline: "Blueberry", items: [] },
                ],
            },
        ],
    },
    {
        headline: "Vegetables",
        items: [
            {
                headline: "Leafy Green",
                expanded: true,
                items: [
                    { headline: "Spinach", items: [] },
                    { headline: "Kale", items: [] },
                ],
            },
            {
                headline: "Root",
                items: [
                    { selected: true, headline: "Carrot", items: [] },
                    { headline: "Beetroot", items: [] },
                ],
            },
        ],
    },
    {
        headline: "Grains",
        items: [
            {
                headline: "Cereal",
                items: [
                    { headline: "Wheat", items: [] },
                    { headline: "Rice", items: [] },
                ],
            },
            {
                headline: "Legumes",
                items: [
                    { headline: "Lentils", items: [] },
                    { headline: "Chickpeas", items: [] },
                ],
            },
        ],
    },
];
const items3 = [
    {
        headline: "Fruits",
        items: [
            {
                headline: "Citrus",
                items: [
                    { headline: "Orange", items: [] },
                    { headline: "Lemon", items: [] },
                ],
            },
            {
                headline: "Berries",
                items: [
                    { headline: "Strawberry", items: [] },
                    { headline: "Blueberry", items: [] },
                ],
            },
        ],
    },
    {
        headline: "Vegetables",
        items: [
            {
                headline: "Leafy Green",
                expanded: true,
                items: [
                    { headline: "Spinach", items: [] },
                    { headline: "Kale", items: [] },
                ],
            },
            {
                headline: "Root",
                items: [
                    { selected: true, headline: "Carrot", items: [] },
                    { headline: "Beetroot", items: [] },
                ],
            },
        ],
    },
    {
        headline: "Grains",
        items: [
            {
                headline: "Cereal",
                items: [
                    { headline: "Wheat", items: [] },
                    { headline: "Rice", items: [] },
                ],
            },
            {
                headline: "Legumes",
                items: [
                    { headline: "Lentils", items: [] },
                    { headline: "Chickpeas", items: [] },
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
                            <md-tree .items="${items0}" variant="plain"></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree .items="${items1}" variant="accordion"></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree .items="${items2}" variant="tree"></md-tree>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tree .items="${items3}" variant="level"></md-tree>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("dev-tree", DevTree);
export default document.createElement("dev-tree");
