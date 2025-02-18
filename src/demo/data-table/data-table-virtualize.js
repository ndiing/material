import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoDataTableVirtualize extends MdComponent {
    constructor() {
        super();

        this.headers = [
            [
                { name: "userId", label: "User Id", rightAligned: true, width: 128 },
                { name: "id", label: "Id", rightAligned: true, width: 128 },
                { name: "title", label: "Title", width: 256 },
                { name: "body", label: "Body", width: 256 },
            ],
        ];
        this.bodies = this.headers;
        this.footers = [];

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function generateRandomData(count) {
            const titles = ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit", "Sed do eiusmod tempor incididunt", "Ut labore et dolore magna aliqua", "Ullamco laboris nisi ut aliquip", "Duis aute irure dolor in reprehenderit"];

            const bodies = ["Quia et suscipit suscipit recusandae consequuntur expedita et cum.", "Reprehenderit molestiae ut ut quas totam nostrum rerum est.", "Autem sunt rem eveniet architecto excepteur sint occaecat cupidatat.", "Sunt in culpa qui officia deserunt mollit anim id est laborum.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.", "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet."];

            let data = [];
            for (let i = 1; i <= count; i++) {
                data.push({
                    userId: getRandomInt(1, 10),
                    id: i,
                    title: titles[getRandomInt(0, titles.length - 1)],
                    body: bodies[getRandomInt(0, bodies.length - 1)],
                });
            }
            return data;
        }

        this.data = generateRandomData(10000);
    }

    render() {
        return html`
            <div class="md-layout">
                <div
                    class="md-layout__grid"
                    style="height:100%;min-height:0;"
                >
                    <div
                        class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"
                        style="height:100%;min-height:0;"
                    >
                        <md-data-table
                            .headers="${this.headers}"
                            .bodies="${this.bodies}"
                            .footers="${this.footers}"
                            .data="${this.data}"
                            virtualize
                        ></md-data-table>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-data-table-virtualize", DemoDataTableVirtualize);

export default document.createElement("demo-data-table-virtualize");
