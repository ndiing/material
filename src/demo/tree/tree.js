import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoTree extends MdComponent {
    constructor(){
        super()
        
        this.items = [
            {
                label: 'Fruits',
                children: [
                    { label: 'Apple', children: [] },
                    { label: 'Banana', children: [] },
                    { label: 'Orange', children: [] }
                ]
            },
            {
                label: 'Vegetables',
                children: [
                    { label: 'Carrot', children: [] },
                    { label: 'Broccoli', children: [] },
                    {
                        label: 'Leafy Greens',
                        children: [
                            { label: 'Spinach', children: [] },
                            { label: 'Kale', children: [] }
                        ]
                    }
                ]
            },
            {
                label: 'Dairy',
                children: [
                    { label: 'Milk', children: [] },
                    { label: 'Cheese', children: [] }
                ]
            }
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
