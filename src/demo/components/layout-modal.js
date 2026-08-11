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
                <md-layout-item ${ref(this.north)} region="north" size="64" modal>
                    <div style="padding:16px 24px;">north</div>
                </md-layout-item>
                <md-layout-item ${ref(this.east)} region="east" size="256" modal>
                    <div style="padding:16px 24px;">east</div>
                </md-layout-item>
                <md-layout-item ${ref(this.south)} region="south" size="64" modal>
                    <div style="padding:16px 24px;">south</div>
                </md-layout-item>
                <md-layout-item ${ref(this.west)} region="west" size="256" modal>
                    <div style="padding:16px 24px;">west</div>
                </md-layout-item>
                <md-layout-item region="center">
                    <div style="padding:24px;">
                        <md-button label="North Toggle" @click="${this._handleNorthToggle}"></md-button><br><br>
                        <md-button label="East Toggle" @click="${this._handleEastToggle}"></md-button><br><br>
                        <md-button label="South Toggle" @click="${this._handleSouthToggle}"></md-button><br><br>
                        <md-button label="West Toggle" @click="${this._handleWestToggle}"></md-button><br><br>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sequi exercitationem, laudantium sed ad id temporibus aut voluptatem nesciunt quia dolorem dignissimos nam fugit a nihil eum iure recusandae ratione, dolor blanditiis minima rem consequatur. Accusamus beatae nisi eos ipsa autem sit labore, omnis quasi illum eius animi quo tempora sequi eveniet perferendis earum consectetur alias dignissimos distinctio facere cupiditate nobis quidem, hic excepturi. Repudiandae amet sequi temporibus tempora, laboriosam iure quo fugit omnis blanditiis doloribus repellendus? Quibusdam praesentium quidem ut facere quo maxime quasi tenetur delectus quis! Sed illum vitae voluptatibus, pariatur eligendi optio vel laboriosam tempore praesentium sapiente exercitationem, amet cupiditate ab fugiat atque saepe. Dicta iusto error animi ea tenetur recusandae ex, iure magni necessitatibus! Commodi laboriosam sequi illo tempora nisi quidem quia saepe earum totam perspiciatis. Fugit ipsam atque illo, itaque incidunt praesentium iure odio laboriosam non veniam excepturi quibusdam accusamus tempore autem officiis quidem officia, facilis inventore delectus! Nam animi ullam esse rem enim error similique dolor, itaque illum praesentium suscipit quidem dolore, unde aliquid facilis totam iste eius nobis, ea dolorem! Ipsam minus dolore ut veniam. Aperiam provident, fugit odit eius accusantium ab ratione similique tenetur cum eum dolorum placeat assumenda, iste quae vel ipsum culpa. Sequi, neque nostrum praesentium, minus esse suscipit similique, distinctio minima inventore numquam illo! Doloremque facere velit neque sunt tenetur veniam alias sequi unde vitae dolorem! Nobis in libero eaque placeat consequatur! Nulla sequi sint nam? Facere eius deleniti quod aperiam veritatis quibusdam quo, cupiditate enim numquam libero velit harum atque aspernatur praesentium optio porro? Veritatis voluptas ipsum odit cumque nobis accusantium aut dicta. Doloribus, at est, atque aut ea voluptatem ab amet pariatur ad magni nihil id non excepturi. Voluptate error explicabo ullam adipisci, laudantium delectus illo unde a inventore totam, dignissimos earum! Incidunt ullam laboriosam, architecto aliquam odio soluta non vel corporis, ratione qui quis dolor ipsum, voluptatum ab? Voluptates, error, ad voluptatibus quo dolorem eius consectetur cupiditate veritatis voluptatum accusamus explicabo molestiae animi cumque alias ipsam quaerat iusto debitis minus maiores. Soluta, architecto. Dolores sequi libero facere totam ipsam voluptatem earum accusantium cumque, temporibus cupiditate. Nihil, illum! Incidunt consequuntur perspiciatis excepturi explicabo veniam! Cupiditate corrupti nostrum eos facilis molestiae voluptate. Ducimus dolore laborum eaque a deserunt, quis doloremque recusandae quidem libero odio optio quaerat repellendus, sed, minima voluptatem facilis. Doloribus voluptates cupiditate illum labore reprehenderit quibusdam provident repudiandae corporis, quis iste voluptatem iusto, inventore nisi. Quos sit quas sed eaque ullam dolor nulla dolores iusto voluptate esse reprehenderit beatae, quisquam quidem, magni, ab nisi repellat ipsum pariatur soluta vitae aperiam ut obcaecati quis dicta. Earum expedita odio voluptas exercitationem! Quibusdam mollitia voluptatum ab illum rem cumque nobis, adipisci maxime amet, quas id incidunt fuga fugiat ex illo. Quos molestiae natus corrupti? Delectus, at sit corrupti recusandae quasi doloremque, unde dolores voluptatem eveniet explicabo vel omnis velit. Ipsum unde voluptas accusantium, eaque ad dolores in nihil? Aut nisi reprehenderit hic libero numquam itaque facilis quas perspiciatis saepe dolor dignissimos, soluta atque ratione consequuntur molestias repellendus obcaecati ex eius qui eveniet quis quae, illo minus repudiandae. Ex consectetur impedit asperiores pariatur? Quisquam expedita quaerat facere delectus officia et ut, temporibus at dolore, impedit cumque officiis omnis? Nulla, sunt incidunt corrupti soluta veniam quae. Similique impedit ab assumenda repudiandae. Vel explicabo quod eaque dolorum sunt ab asperiores omnis tenetur eligendi magnam veritatis iusto, quaerat accusamus qui harum numquam quia officiis ad quidem quas quam voluptatem molestias! Numquam, quibusdam non soluta quas nobis libero eos facilis ex doloremque quia, adipisci blanditiis rerum molestiae. Veritatis ad vitae sapiente? Quae, amet. Eum quia minus blanditiis quibusdam non. Officiis quos iure fugiat enim, sapiente qui consequuntur cupiditate atque, incidunt cum distinctio eveniet libero vitae deleniti laboriosam suscipit dignissimos similique est ea velit nostrum sequi. Officiis autem illum dolorum deserunt maiores veritatis ducimus nihil dignissimos, neque repudiandae? Minima dolor deserunt libero? Vel modi quasi reprehenderit libero beatae, error corrupti obcaecati minus dolorum iste eveniet quisquam voluptatem rerum harum nulla fugit est illo nobis. Velit iusto dolorum natus, dolorem temporibus numquam reiciendis ipsam, quaerat sapiente fuga amet sint minima fugit. Doloribus laudantium atque maiores natus accusamus dolorum iusto placeat, veniam, pariatur labore nobis perferendis, mollitia inventore beatae eaque aspernatur temporibus optio. Blanditiis obcaecati culpa voluptatibus tenetur. Aut ducimus aliquam consequatur nulla voluptatibus. Fugit architecto sapiente reprehenderit quae vel id laborum temporibus vitae assumenda est suscipit nisi neque facere, sint sunt dolorum deserunt optio eius aut doloremque corporis nemo? Iusto at quibusdam delectus eaque quaerat nesciunt pariatur dicta ipsam natus facere esse voluptatibus, possimus fugit! Similique, totam illo unde voluptatem quaerat repudiandae nulla modi fugiat inventore nesciunt assumenda cupiditate porro officiis iste nostrum impedit repellat? Nisi nostrum fugiat optio, quis, quae maxime facilis repudiandae id eum laudantium tenetur corrupti veritatis! Perferendis, similique, non, necessitatibus maiores assumenda cum hic tempore alias aspernatur natus dolorem qui! In excepturi consequuntur esse quia, autem expedita dolor adipisci suscipit nihil possimus blanditiis. Enim dolore illum soluta quas temporibus eaque harum quidem, blanditiis et maxime placeat non, nemo laborum sed recusandae dolor! Cum doloribus voluptates magnam! Ipsam doloribus expedita aspernatur officiis sit at ipsum? Suscipit dolorum, repudiandae ex commodi architecto accusantium! Tempora iusto, adipisci odit consequatur minus quisquam, porro nam repellendus, debitis iure ratione omnis maiores voluptate magnam delectus ex dicta impedit sapiente quam unde! Quis numquam qui laboriosam aliquid earum tenetur quidem non ad voluptatum inventore, nihil explicabo. At, quam autem soluta ratione libero qui voluptates sequi debitis enim minus sunt veritatis repudiandae pariatur blanditiis harum ea dicta voluptatum nihil! Laudantium sequi distinctio quos et ipsa quas voluptatem magnam vel unde maxime, obcaecati suscipit at repellendus aliquam ullam nam excepturi totam. Deserunt impedit facere, soluta, qui excepturi quas animi inventore minus labore quisquam obcaecati. Qui odio quod iure quasi? Cum consequatur sunt ipsam perferendis praesentium ratione in odit veritatis minus rem vitae vero blanditiis id eius, dolorem alias possimus repellendus incidunt consequuntur, minima nisi maiores nihil quidem? Non, distinctio laborum. Ducimus animi perspiciatis dolorem odit repudiandae iste, laborum aliquam, quam repellat nobis natus accusamus tempore fugiat corrupti dignissimos, quos explicabo recusandae?</div>
                    </div>
                </md-layout-item>
            </md-layout>
            
        `
    }

    _handleNorthToggle() {
        this.north.value.toggle();
    }
    _handleEastToggle() {
        this.east.value.toggle();
    }
    _handleSouthToggle() {
        this.south.value.toggle();
    }
    _handleWestToggle() {
        this.west.value.toggle();
    }

    _handleNorthToggleCollapse() {
        this.north.value.toggleCollapse();
    }
    _handleEastToggleCollapse() {
        this.east.value.toggleCollapse();
    }
    _handleSouthToggleCollapse() {
        this.south.value.toggleCollapse();
    }
    _handleWestToggleCollapse() {
        this.west.value.toggleCollapse();
    }
}
customElements.define("demo-layout-modal", DemoLayoutModal);
export default document.createElement("demo-layout-modal");
