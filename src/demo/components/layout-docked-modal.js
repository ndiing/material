import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayoutDockedModal extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            
            <md-layout>
                <md-layout-item ${ref(this.north)} region="north" size="64" collapsedSize="32" docked .expanded="${false}" open modal .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick>
                    <div style="padding:16px 24px;">north</div>
                </md-layout-item>
                <md-layout-item ${ref(this.east)} region="east" size="256" collapsedSize="32" docked .expanded="${false}" open modal .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick>
                    <div style="padding:16px 24px;">east</div>
                </md-layout-item>
                <md-layout-item ${ref(this.south)} region="south" size="64" collapsedSize="32" docked .expanded="${false}" open modal .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick>
                    <div style="padding:16px 24px;">south</div>
                </md-layout-item>
                <md-layout-item ${ref(this.west)} region="west" size="256" collapsedSize="32" docked .expanded="${false}" open modal .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick>
                    <div style="padding:16px 24px;">west</div>
                </md-layout-item>
                <md-layout-item region="center">
                    <div style="padding:24px;">
                        <md-button label="North Toggle" @click="${this._handleNorthToggle}"></md-button><br><br>
                        <md-button label="North Toggle Collapse" @click="${this._handleNorthToggleCollapse}"></md-button><br><br><br><br>
                        <md-button label="East Toggle" @click="${this._handleEastToggle}"></md-button><br><br>
                        <md-button label="East Toggle Collapse" @click="${this._handleEastToggleCollapse}"></md-button><br><br><br><br>
                        <md-button label="South Toggle" @click="${this._handleSouthToggle}"></md-button><br><br>
                        <md-button label="South Toggle Collapse" @click="${this._handleSouthToggleCollapse}"></md-button><br><br><br><br>
                        <md-button label="West Toggle" @click="${this._handleWestToggle}"></md-button><br><br>
                        <md-button label="West Toggle Collapse" @click="${this._handleWestToggleCollapse}"></md-button><br><br><br><br>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit culpa nostrum sunt delectus doloremque quis vitae praesentium, nam, aliquam ex modi. Magnam doloremque incidunt saepe officia id aliquam itaque, rem provident laboriosam laudantium optio recusandae quam veritatis unde numquam inventore voluptatibus nihil necessitatibus. Minima culpa sed reiciendis, necessitatibus maxime dolorum accusantium ducimus quis. Illum sint nisi ex ducimus totam id dolorem odit amet velit autem. Illo eos enim voluptatibus architecto, eveniet explicabo placeat harum maxime, eligendi laboriosam ullam accusamus id tempora! Non neque eveniet minus perferendis quae harum sed praesentium quasi deleniti nesciunt vero nisi ab adipisci quidem cupiditate exercitationem accusamus maxime quam beatae soluta, odit tempore! Necessitatibus voluptates recusandae earum, dicta modi debitis aliquam cum quas reiciendis soluta vero, quasi, in dolorem dolore beatae delectus veniam numquam libero. Provident expedita a corporis ipsa suscipit ipsam officia dicta repellat omnis blanditiis, impedit earum ea, esse aliquid deleniti similique quod labore accusamus eveniet! Vero perspiciatis delectus consectetur deleniti, maiores corrupti aliquam, laborum ullam minus error quaerat id atque dolorum eaque sint, recusandae beatae expedita dolor nisi. Officia, hic! Reprehenderit fugiat expedita quos deleniti corporis, nobis accusamus nostrum officiis error repellat numquam saepe iure veritatis dolore hic obcaecati doloribus dolorem corrupti rem debitis molestiae facere. Debitis distinctio sint sequi ducimus illum praesentium deserunt ea nihil consectetur optio enim hic harum molestias voluptates dolorum veniam dicta eligendi id culpa, similique quae? Fugit provident minima vero voluptas ducimus labore nisi totam repellat eveniet debitis quod aliquam, a modi? Vitae pariatur facere cumque aperiam dignissimos porro accusantium dolores mollitia excepturi deserunt magni perferendis, laudantium eveniet? Pariatur facilis alias facere beatae, nobis nisi impedit minus hic sint, reprehenderit aliquam consequuntur quia placeat voluptas deleniti labore quos voluptates similique, vel optio possimus sapiente numquam! Doloremque mollitia dignissimos, porro expedita, obcaecati adipisci quod provident facilis, officia vel ab quia enim quibusdam accusamus iste a architecto! In consequuntur unde adipisci commodi voluptates libero repudiandae dolor soluta, impedit laudantium illo enim inventore! Molestiae, consequuntur! Consequatur facere voluptate voluptates porro debitis earum labore! Iure, assumenda ullam sed laboriosam omnis, aperiam quae doloremque sit necessitatibus maxime pariatur. Eos, unde eius odit eaque consectetur error laborum, voluptates, illo inventore tempora nobis asperiores? Sint similique ullam et dolore, debitis natus autem, dignissimos minus praesentium pariatur cupiditate corporis exercitationem maiores eum laudantium assumenda nemo itaque labore impedit? Deserunt eveniet reiciendis fuga, perspiciatis quia sit saepe sed, voluptatibus ipsum, incidunt praesentium. Beatae laborum ea voluptatibus non, dolore minus labore quod blanditiis, laboriosam hic, ipsam error libero consequuntur similique vero ad et magni eius. Soluta, debitis. Eum, neque. Deleniti odio reiciendis quia aliquid! Iusto animi perspiciatis ipsam numquam nesciunt? Quasi possimus amet temporibus commodi obcaecati accusamus fuga modi, assumenda quae, consequuntur voluptates fugiat ratione enim ex velit doloribus quam ipsa iste debitis harum, qui minus labore vero? Quibusdam, exercitationem esse. Nisi doloribus odio dolorem labore soluta accusamus ratione totam ipsum libero iure sed quasi vel, sint error et, deserunt nobis odit? Ipsum, nam quaerat! Possimus voluptates accusantium, iure doloremque qui id reprehenderit fugiat distinctio esse. Labore, voluptatibus cupiditate necessitatibus sapiente error exercitationem quia veritatis totam harum. Dignissimos expedita magnam fugit minima tenetur temporibus libero quo quod, nemo aliquid enim veritatis eos doloribus. Beatae obcaecati autem nemo aperiam odit facere, sed doloremque minima iste corporis quidem placeat reprehenderit ea quo aut repellat, numquam fugit hic aliquam maiores velit voluptatum consequuntur. Laboriosam eius earum recusandae eum distinctio voluptas nostrum sed, repellat ratione consectetur assumenda beatae eligendi unde asperiores doloribus, blanditiis quisquam enim. Aliquid, quasi tempore! Porro aliquam omnis corrupti non enim deserunt consequuntur reprehenderit minima sapiente ut corporis mollitia voluptate officiis qui, beatae optio natus eligendi aut, neque perspiciatis? A, assumenda accusantium modi sunt laborum saepe iure quo harum quam dolorum incidunt inventore commodi dolorem, deleniti corrupti veniam sed error! Nesciunt iste adipisci voluptate corrupti, animi eligendi mollitia ducimus explicabo, nobis illo perspiciatis minus voluptatibus voluptatem. Ut amet quas nam sed eligendi beatae, reiciendis porro totam sunt. Rem placeat libero quos optio, atque praesentium totam accusamus laboriosam ex, omnis magni odio asperiores distinctio aut quo voluptates repellat a aperiam expedita enim fuga est. Architecto amet sunt sint vitae illo esse consequatur quos dolor rem labore, in quia accusamus totam ut! Perspiciatis tempore blanditiis accusantium, delectus molestiae nam explicabo illum quasi vitae vero molestias eligendi ducimus quo doloribus, itaque illo. Alias cum voluptatibus odio debitis ex est excepturi nostrum, non consequatur eos nemo inventore. Nam quae dignissimos veritatis porro expedita culpa dolores neque sit nulla recusandae, vitae assumenda ex consectetur rerum voluptatem temporibus cupiditate quisquam iure. Adipisci sit at delectus, laudantium tempora harum sequi, consequatur odio excepturi iure ea quis earum nulla perferendis accusantium unde est beatae amet architecto, neque sed quam? At, temporibus officiis culpa quam nesciunt sint eius omnis sed commodi alias maxime est? Laudantium laborum eveniet mollitia culpa maxime, perferendis exercitationem nam asperiores nemo illo atque? Nam vero, natus velit optio voluptatem placeat autem id, ad cupiditate repellat exercitationem magnam aliquid quaerat expedita maxime nisi mollitia nihil sequi! Ut reiciendis, molestias illum unde obcaecati, velit iusto sit esse voluptates omnis beatae quaerat vel maiores eum error autem quis? Illum corporis, totam eligendi inventore exercitationem eos accusamus! Ea totam deleniti suscipit, recusandae, perspiciatis commodi repellendus explicabo facilis quam assumenda numquam voluptatibus necessitatibus. Adipisci numquam deserunt inventore perspiciatis voluptate, doloremque nam quis ad! Quis explicabo quia illum doloribus, dolore quod autem quaerat accusantium sunt modi molestiae ex nesciunt dolorem amet et ipsa sequi mollitia in eligendi iste? Numquam dolor excepturi voluptas, id fuga voluptatibus iusto, sit architecto, aut doloremque autem temporibus nostrum earum praesentium! Ipsa odit illum eveniet ipsam sequi labore totam, autem minus earum! Consequatur aut dicta quo voluptas tempora porro laboriosam soluta, maiores quidem, rerum eius numquam nostrum odio placeat, fugiat quia repellendus? Repellendus vel totam accusamus sed minus nisi inventore dolores atque doloremque. Adipisci in nam ab? Mollitia reiciendis fugit ullam, harum numquam quia. Accusamus consequatur quo velit odio mollitia quod eaque! Porro ratione at ullam non deleniti libero harum incidunt corporis nemo consectetur vel excepturi, sequi et quaerat dignissimos iusto qui, similique voluptate aut!</div>
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
customElements.define("demo-layout-docked-modal", DemoLayoutDockedModal);
export default document.createElement("demo-layout-docked-modal");
