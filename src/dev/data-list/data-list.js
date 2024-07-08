import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
// import data from "../../assets/screener.json"


class DevDataListComponent extends MDComponent {
    constructor(){
        super()
        // this.data=data.map(doc=>{
        //     doc.avatar='https://api.dicebear.com/9.x/croodles/svg?seed='+doc.logoid
        //     return doc
        // })
    }
    render() {
        return html`
            <div 
                style="
                    padding:24px;
                    margin:0;
                    min-width:0;
                    min-height:0;
                    width:100%;
                    height:100%;
                " 
            class="md-layout-column">
                <div 
                    style="
                        margin:0;
                        min-width:0;
                        min-height:0;
                        width:100%;
                        height:100%;
                    " 
                class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <input 
                        id="input"
                        type="text"
                        autocomplete="off"
                        @input="${(event) => dataList.filter(event.currentTarget.value)}"
                    >
                    <md-data-list
                        id="dataList"
                        style="
                            width:calc(56px * 3);
                            height:calc(56px * 5);
                        "
                        .list="${this.data}"
                        .map="${{
                            label:'title',
                            value:'id',
                        }}"
                        @onDataListItemSelected="${(event) => input.value=dataList.selectedList[0][dataList.map.label]}"
                    ></md-data-list>
                </div>
            </div>
        `;
    }

    connectedCallback(){
        super.connectedCallback()

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(data=>{
            dataList.load(data)
        })
    }
}

customElements.define("dev-data-list", DevDataListComponent);

export default document.createElement("dev-data-list");
