import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTree extends MdComponent {
    constructor() {
        super();
        this.items = [
            {
                label: "Node 1",
                children: [
                    {
                        label: "Node 1.1",
                        children: [
                            { label: "Node 1.1.1", children: [] },
                            { label: "Node 1.1.2", children: [] },
                            { label: "Node 1.1.3", children: [] },
                        ],
                    },
                    {
                        label: "Node 1.2",
                        children: [
                            { label: "Node 1.2.1", children: [] },
                            { label: "Node 1.2.2", children: [] },
                            { label: "Node 1.2.3", children: [] },
                        ],
                    },
                    {
                        label: "Node 1.3",
                        children: [
                            { label: "Node 1.3.1", children: [] },
                            { label: "Node 1.3.2", children: [] },
                            { label: "Node 1.3.3", children: [] },
                        ],
                    },
                ],
            },
            {
                label: "Node 2",
                children: [
                    {
                        label: "Node 2.1",
                        children: [
                            { label: "Node 2.1.1", children: [] },
                            { label: "Node 2.1.2", children: [] },
                            { label: "Node 2.1.3", children: [] },
                        ],
                    },
                    {
                        label: "Node 2.2",
                        children: [
                            { label: "Node 2.2.1", children: [] },
                            { label: "Node 2.2.2", children: [] },
                            { label: "Node 2.2.3", children: [] },
                        ],
                    },
                    {
                        label: "Node 2.3",
                        children: [
                            { label: "Node 2.3.1", children: [] },
                            { label: "Node 2.3.2", children: [] },
                            { label: "Node 2.3.3", children: [] },
                        ],
                    },
                ],
            },
            {
                label: "Node 3",
                children: [
                    {
                        label: "Node 3.1",
                        children: [
                            { label: "Node 3.1.1", children: [] },
                            { label: "Node 3.1.2", children: [] },
                            { label: "Node 3.1.3", children: [] },
                        ],
                    },
                    {
                        label: "Node 3.2",
                        children: [
                            { label: "Node 3.2.1", children: [] },
                            { label: "Node 3.2.2", children: [] },
                            { label: "Node 3.2.3", children: [] },
                        ],
                    },
                    {
                        label: "Node 3.3",
                        children: [
                            { label: "Node 3.3.1", children: [] },
                            { label: "Node 3.3.2", children: [] },
                            { label: "Node 3.3.3", children: [] },
                        ],
                    },
                ],
            },
        ];
    }

    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tree
                            .items="${this.items}"
                            @onTreeItemClick="${console.log}"
                        ></md-tree>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tree", DemoTree);

export default document.createElement("demo-tree");
