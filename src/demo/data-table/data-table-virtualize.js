import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoDataTableVirtualize extends MdComponent {
    static properties = {
        data: { type: Array },
    };

    constructor() {
        super();

        this.headers = [
            [
                { name: "albumId", label: "Album Id", rightAligned: true, width: 128, sortable: true, resizable: true },
                { name: "id", label: "Id", rightAligned: true, width: 128, sortable: true, resizable: true },
                { name: "title", label: "Title", width: 256, sortable: true, resizable: true },
            ],
        ];

        this.bodies = [
            [
                { name: "albumId", label: "Album Id", rightAligned: true },
                { name: "id", label: "Id", rightAligned: true },
                { name: "title", label: "Title" },
            ],
        ];

        this.footers = [];

        function generateAlbumData(count) {
            const data = [];
            for (let i = 1; i <= count; i++) {
                data.push({
                    albumId: Math.floor(Math.random() * 100) + 1,
                    id: i,
                    title: `Album Title ${i}`,
                });
            }
            return data;
        }

        this.data = generateAlbumData(10000);
    }

    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid" style="height:100%;min-height:0;">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4" style="height:100%;min-height:0;">
                        <md-data-table .headers="${this.headers}" .bodies="${this.bodies}" .footers="${this.footers}" .data="${this.data}" checkbox virtualize></md-data-table>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        // fetch('https://jsonplaceholder.typicode.com/photos')
        // .then(res=>res.json())
        // .then(json => {
        //     this.data=json
        // })
    }
}

customElements.define("demo-data-table-virtualize", DemoDataTableVirtualize);

export default document.createElement("demo-data-table-virtualize");
