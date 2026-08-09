import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayoutModal extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-layout-item size="64" ${ref(this.north)} region="north" modal>
                        north
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perspiciatis impedit quis, assumenda odit saepe harum. Dolorem eum qui dicta nobis repudiandae. Assumenda dolore itaque repudiandae suscipit consequatur enim.
                        Illum, non, eum ducimus iure ullam ratione nulla impedit natus repudiandae aspernatur, perspiciatis doloremque iste recusandae animi corporis labore. Blanditiis et nobis modi quidem, sint autem porro at doloribus soluta.
                        Veniam laboriosam rerum, obcaecati similique ducimus sint assumenda odit voluptatem perspiciatis facilis deserunt dolorum eius culpa. Laudantium et a eum minus, commodi error, praesentium harum aspernatur natus, vitae ea architecto!
                        Molestias assumenda quis, eveniet fugiat adipisci accusantium dolorum saepe quod pariatur provident. Unde blanditiis deleniti maiores aspernatur culpa repellat sit saepe, dolorum nostrum sunt. Beatae consectetur similique placeat et reiciendis?
                        Delectus odio repudiandae eveniet mollitia, facilis quod? Explicabo, pariatur. Minus quos debitis architecto non. Ducimus dolorum animi quod laboriosam ex tempore consequuntur harum placeat aperiam! Earum modi ad dicta corrupti.
                </md-layout-item>
                <md-layout-item size="256" ${ref(this.east)} region="east" modal>
                        east
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perspiciatis impedit quis, assumenda odit saepe harum. Dolorem eum qui dicta nobis repudiandae. Assumenda dolore itaque repudiandae suscipit consequatur enim.
                        Illum, non, eum ducimus iure ullam ratione nulla impedit natus repudiandae aspernatur, perspiciatis doloremque iste recusandae animi corporis labore. Blanditiis et nobis modi quidem, sint autem porro at doloribus soluta.
                        Veniam laboriosam rerum, obcaecati similique ducimus sint assumenda odit voluptatem perspiciatis facilis deserunt dolorum eius culpa. Laudantium et a eum minus, commodi error, praesentium harum aspernatur natus, vitae ea architecto!
                        Molestias assumenda quis, eveniet fugiat adipisci accusantium dolorum saepe quod pariatur provident. Unde blanditiis deleniti maiores aspernatur culpa repellat sit saepe, dolorum nostrum sunt. Beatae consectetur similique placeat et reiciendis?
                        Delectus odio repudiandae eveniet mollitia, facilis quod? Explicabo, pariatur. Minus quos debitis architecto non. Ducimus dolorum animi quod laboriosam ex tempore consequuntur harum placeat aperiam! Earum modi ad dicta corrupti.
                </md-layout-item>
                <md-layout-item size="64" ${ref(this.south)} region="south" modal>
                        south
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perspiciatis impedit quis, assumenda odit saepe harum. Dolorem eum qui dicta nobis repudiandae. Assumenda dolore itaque repudiandae suscipit consequatur enim.
                        Illum, non, eum ducimus iure ullam ratione nulla impedit natus repudiandae aspernatur, perspiciatis doloremque iste recusandae animi corporis labore. Blanditiis et nobis modi quidem, sint autem porro at doloribus soluta.
                        Veniam laboriosam rerum, obcaecati similique ducimus sint assumenda odit voluptatem perspiciatis facilis deserunt dolorum eius culpa. Laudantium et a eum minus, commodi error, praesentium harum aspernatur natus, vitae ea architecto!
                        Molestias assumenda quis, eveniet fugiat adipisci accusantium dolorum saepe quod pariatur provident. Unde blanditiis deleniti maiores aspernatur culpa repellat sit saepe, dolorum nostrum sunt. Beatae consectetur similique placeat et reiciendis?
                        Delectus odio repudiandae eveniet mollitia, facilis quod? Explicabo, pariatur. Minus quos debitis architecto non. Ducimus dolorum animi quod laboriosam ex tempore consequuntur harum placeat aperiam! Earum modi ad dicta corrupti.
                </md-layout-item>
                <md-layout-item size="256" ${ref(this.west)} region="west" modal>
                        west
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perspiciatis impedit quis, assumenda odit saepe harum. Dolorem eum qui dicta nobis repudiandae. Assumenda dolore itaque repudiandae suscipit consequatur enim.
                        Illum, non, eum ducimus iure ullam ratione nulla impedit natus repudiandae aspernatur, perspiciatis doloremque iste recusandae animi corporis labore. Blanditiis et nobis modi quidem, sint autem porro at doloribus soluta.
                        Veniam laboriosam rerum, obcaecati similique ducimus sint assumenda odit voluptatem perspiciatis facilis deserunt dolorum eius culpa. Laudantium et a eum minus, commodi error, praesentium harum aspernatur natus, vitae ea architecto!
                        Molestias assumenda quis, eveniet fugiat adipisci accusantium dolorum saepe quod pariatur provident. Unde blanditiis deleniti maiores aspernatur culpa repellat sit saepe, dolorum nostrum sunt. Beatae consectetur similique placeat et reiciendis?
                        Delectus odio repudiandae eveniet mollitia, facilis quod? Explicabo, pariatur. Minus quos debitis architecto non. Ducimus dolorum animi quod laboriosam ex tempore consequuntur harum placeat aperiam! Earum modi ad dicta corrupti.
                </md-layout-item>
                <md-layout-item region="center">
                    <md-button label="north" @click="${this.handleClickNorth}"></md-button>
                    <md-button label="east" @click="${this.handleClickEast}"></md-button>
                    <md-button label="south" @click="${this.handleClickSouth}"></md-button>
                    <md-button label="west" @click="${this.handleClickWest}"></md-button>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid ea quaerat culpa doloremque quia id nesciunt itaque, fuga iste quo repudiandae corporis eum minima iure sapiente architecto unde harum.
                    Asperiores quo quam, ducimus mollitia modi error. Atque, repellendus! Dolor eaque dolore aliquam. Debitis vero esse eos inventore explicabo perspiciatis, at, quasi quam sit similique cupiditate nisi possimus quibusdam ipsam.
                    Dolorum officia ipsa nobis vero accusantium illo omnis. Deleniti, eaque, id fugit veritatis, ut laborum placeat magni magnam deserunt sint eveniet aliquid pariatur adipisci ipsa necessitatibus officiis. Iusto, sunt facilis?
                    Perspiciatis repudiandae unde quia natus! Amet ea sint dolorem. At natus in voluptate incidunt sit cum saepe provident officiis perferendis earum tenetur odio rerum sequi odit rem, exercitationem quaerat repellat.
                    Vel consequatur officiis earum, sit et est iusto rerum quia excepturi laboriosam dolorum aliquid dignissimos similique, quo doloribus voluptate minima officia veniam, deserunt id eligendi quod velit aut accusamus! Sapiente?
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
customElements.define("demo-layout-modal", DemoLayoutModal);
export default document.createElement("demo-layout-modal");
