import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayout extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-layout-item size="64" ${ref(this.north)} region="north">
                        north
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam a, dolorum possimus totam maiores quas harum! Aperiam repellat nesciunt quod quibusdam voluptas porro exercitationem impedit. Obcaecati nulla unde tempora?
                        Iusto eligendi consequatur molestias. Fugit numquam blanditiis asperiores tempore perferendis amet rem architecto non, repellat eligendi vero porro expedita nostrum quo eveniet nemo unde, quis quisquam! Ex vitae eligendi provident!
                        Aperiam vel totam ipsam, nobis repellendus distinctio veritatis, tempora eius laudantium delectus provident repellat iste ut earum necessitatibus odit facilis doloribus quos assumenda fuga molestias! Fugit hic deleniti laborum odio?
                        Incidunt quia quasi a reprehenderit vel. Odit tempora incidunt numquam unde esse ipsum eius culpa provident repellendus nisi, non laborum vero, consequatur quod optio temporibus iusto voluptatum laboriosam. Nesciunt, ipsa?
                        Dicta natus aspernatur, tempora minus maxime deserunt commodi accusamus accusantium, omnis adipisci vitae tenetur illo nobis a, atque magni impedit quos fugiat numquam consectetur. Dolorum nostrum asperiores modi quibusdam voluptatum.
                </md-layout-item>
                <md-layout-item size="256" ${ref(this.east)} region="east">
                        east
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam a, dolorum possimus totam maiores quas harum! Aperiam repellat nesciunt quod quibusdam voluptas porro exercitationem impedit. Obcaecati nulla unde tempora?
                        Iusto eligendi consequatur molestias. Fugit numquam blanditiis asperiores tempore perferendis amet rem architecto non, repellat eligendi vero porro expedita nostrum quo eveniet nemo unde, quis quisquam! Ex vitae eligendi provident!
                        Aperiam vel totam ipsam, nobis repellendus distinctio veritatis, tempora eius laudantium delectus provident repellat iste ut earum necessitatibus odit facilis doloribus quos assumenda fuga molestias! Fugit hic deleniti laborum odio?
                        Incidunt quia quasi a reprehenderit vel. Odit tempora incidunt numquam unde esse ipsum eius culpa provident repellendus nisi, non laborum vero, consequatur quod optio temporibus iusto voluptatum laboriosam. Nesciunt, ipsa?
                        Dicta natus aspernatur, tempora minus maxime deserunt commodi accusamus accusantium, omnis adipisci vitae tenetur illo nobis a, atque magni impedit quos fugiat numquam consectetur. Dolorum nostrum asperiores modi quibusdam voluptatum.
                </md-layout-item>
                <md-layout-item size="64" ${ref(this.south)} region="south">
                        south
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam a, dolorum possimus totam maiores quas harum! Aperiam repellat nesciunt quod quibusdam voluptas porro exercitationem impedit. Obcaecati nulla unde tempora?
                        Iusto eligendi consequatur molestias. Fugit numquam blanditiis asperiores tempore perferendis amet rem architecto non, repellat eligendi vero porro expedita nostrum quo eveniet nemo unde, quis quisquam! Ex vitae eligendi provident!
                        Aperiam vel totam ipsam, nobis repellendus distinctio veritatis, tempora eius laudantium delectus provident repellat iste ut earum necessitatibus odit facilis doloribus quos assumenda fuga molestias! Fugit hic deleniti laborum odio?
                        Incidunt quia quasi a reprehenderit vel. Odit tempora incidunt numquam unde esse ipsum eius culpa provident repellendus nisi, non laborum vero, consequatur quod optio temporibus iusto voluptatum laboriosam. Nesciunt, ipsa?
                        Dicta natus aspernatur, tempora minus maxime deserunt commodi accusamus accusantium, omnis adipisci vitae tenetur illo nobis a, atque magni impedit quos fugiat numquam consectetur. Dolorum nostrum asperiores modi quibusdam voluptatum.
                </md-layout-item>
                <md-layout-item size="256" ${ref(this.west)} region="west">
                        west
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam a, dolorum possimus totam maiores quas harum! Aperiam repellat nesciunt quod quibusdam voluptas porro exercitationem impedit. Obcaecati nulla unde tempora?
                        Iusto eligendi consequatur molestias. Fugit numquam blanditiis asperiores tempore perferendis amet rem architecto non, repellat eligendi vero porro expedita nostrum quo eveniet nemo unde, quis quisquam! Ex vitae eligendi provident!
                        Aperiam vel totam ipsam, nobis repellendus distinctio veritatis, tempora eius laudantium delectus provident repellat iste ut earum necessitatibus odit facilis doloribus quos assumenda fuga molestias! Fugit hic deleniti laborum odio?
                        Incidunt quia quasi a reprehenderit vel. Odit tempora incidunt numquam unde esse ipsum eius culpa provident repellendus nisi, non laborum vero, consequatur quod optio temporibus iusto voluptatum laboriosam. Nesciunt, ipsa?
                        Dicta natus aspernatur, tempora minus maxime deserunt commodi accusamus accusantium, omnis adipisci vitae tenetur illo nobis a, atque magni impedit quos fugiat numquam consectetur. Dolorum nostrum asperiores modi quibusdam voluptatum.
                </md-layout-item>
                <md-layout-item region="center">
                    <md-button label="north" @click="${this.handleClickNorth}"></md-button>
                    <md-button label="east" @click="${this.handleClickEast}"></md-button>
                    <md-button label="south" @click="${this.handleClickSouth}"></md-button>
                    <md-button label="west" @click="${this.handleClickWest}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickNorth() {
        this.north.value.toggle();
    }
    handleClickEast() {
        this.east.value.toggle();
    }
    handleClickSouth() {
        this.south.value.toggle();
    }
    handleClickWest() {
        this.west.value.toggle();
    }
}
customElements.define("demo-layout", DemoLayout);
export default document.createElement("demo-layout");
