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
                <md-layout-item ${ref(this.north)} region="north" size="64">
                    <div style="padding:16px 24px;">north</div>
                </md-layout-item>
                <md-layout-item ${ref(this.east)} region="east" size="256">
                    <div style="padding:16px 24px;">east</div>
                </md-layout-item>
                <md-layout-item ${ref(this.south)} region="south" size="64">
                    <div style="padding:16px 24px;">south</div>
                </md-layout-item>
                <md-layout-item ${ref(this.west)} region="west" size="256">
                    <div style="padding:16px 24px;">west</div>
                </md-layout-item>
                <md-layout-item region="center">
                    <div style="padding:24px;">
                        <md-button label="North Toggle" @click="${this._handleNorthToggle}"></md-button><br><br>
                        <md-button label="East Toggle" @click="${this._handleEastToggle}"></md-button><br><br>
                        <md-button label="South Toggle" @click="${this._handleSouthToggle}"></md-button><br><br>
                        <md-button label="West Toggle" @click="${this._handleWestToggle}"></md-button><br><br>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at tenetur quos deleniti, eius culpa! Deleniti quia distinctio, debitis expedita in consectetur rem eaque corrupti id, velit accusamus, est sed unde? Maxime, veritatis eos iste porro fuga aliquid nisi assumenda qui harum quidem, nulla odit, deleniti commodi suscipit. Molestiae, ab expedita? Itaque magni similique unde, placeat eius quae? Eveniet voluptas non tenetur ab maiores veniam deleniti, eius veritatis vitae! Reiciendis obcaecati corrupti voluptates odit architecto tempore sapiente minima praesentium expedita debitis, beatae illo sed possimus distinctio ullam consectetur perferendis delectus, dolorum molestias dolores repudiandae. Repellat tenetur qui, placeat ut rerum voluptatibus magni quasi voluptatum nesciunt molestiae veniam dolor fugiat harum iure repudiandae? Commodi similique eius quasi corporis, quos a ratione ad atque accusamus soluta. Neque officiis ex quod officia delectus, consectetur molestias autem adipisci architecto voluptatum at id veritatis quae similique. Inventore fugit atque saepe, ducimus quam expedita quo hic consectetur modi. Aspernatur nisi rerum, tenetur incidunt maxime deleniti aperiam, laudantium similique quo quaerat ipsum placeat! Esse totam asperiores quod et id aliquid, harum error. Nesciunt aliquid explicabo sit, soluta eveniet ipsa fugiat tempora, odio molestiae et ipsum perferendis ab magnam placeat dicta quas blanditiis id nulla animi error facere? Voluptatum veritatis provident aspernatur aliquid deserunt fugit consectetur illo tempore quo minima est, earum nihil eveniet voluptas eaque? Eaque unde reprehenderit quod molestiae sunt suscipit ducimus assumenda nulla exercitationem ipsum tempore earum omnis, voluptatem similique atque! Officiis perferendis quae consequuntur ipsam id, numquam vitae itaque eos voluptatum at quidem, qui nisi non? Magnam, voluptatem facilis nulla, expedita reiciendis omnis ratione sint illum illo quasi distinctio? Ea porro id ullam laboriosam illum non, nisi eligendi. Perferendis minus, aperiam iusto consequuntur praesentium accusantium laudantium vitae eveniet nulla quis excepturi consectetur aspernatur ab illo eligendi magnam rem minima temporibus a, doloribus non molestiae asperiores perspiciatis ducimus. Facere illo numquam commodi recusandae fugit voluptatem vero, quis provident libero, est itaque mollitia nemo reiciendis iusto soluta quam aliquam. Necessitatibus nihil quaerat debitis dicta in? Libero, nemo. Omnis sed rem perferendis, optio possimus, quos quis aut voluptas veritatis id laudantium exercitationem cumque in! Asperiores in maxime consectetur earum, eligendi blanditiis distinctio expedita reprehenderit iusto magni eos numquam vel officiis quam amet aut velit nesciunt neque quae? In, libero maxime doloremque esse harum repellendus dicta, labore omnis reiciendis eaque rerum commodi veritatis ratione id. Error assumenda laudantium dolorem provident praesentium odio quaerat architecto, voluptates sapiente fugiat perferendis vitae ea qui repellendus. Sit ipsa iste expedita quidem, sint culpa harum nemo facere. Voluptate ut similique modi deleniti est quisquam ipsam, vel magni veniam aliquid, voluptatem consectetur sunt quod tempora a! Fuga rem nulla voluptatem architecto velit commodi? Autem eius numquam amet quae ad nemo unde ratione? Necessitatibus doloribus incidunt maiores porro optio. Reprehenderit quaerat nemo, dolorum corrupti voluptas similique aliquid provident est laudantium laborum illo deleniti ab cupiditate tempora, magnam doloremque animi incidunt totam optio voluptate repellendus vero modi sed. Consequuntur vel temporibus voluptates quod, sint nostrum consequatur accusamus eum officia odit, iure harum, ipsam doloribus? Aliquam necessitatibus eligendi illum, ad, magnam corporis mollitia rem ratione debitis at ipsum tempora odit ducimus harum deleniti sed dolorem adipisci labore nostrum, hic exercitationem distinctio. Assumenda voluptate dolor porro atque rem architecto, molestiae ipsum neque vero saepe aliquam, fugiat nam accusamus itaque magnam minima autem debitis veniam delectus ducimus consequatur doloribus deleniti quasi animi. Aut tenetur ad consequatur doloribus quasi unde maxime corrupti, facere modi eligendi praesentium non vitae nam? Quisquam officia culpa vel, minus sunt earum enim fugit est esse incidunt dolores, eius odit iste soluta aliquam iure? Ratione harum magni ullam rem expedita, quos quisquam aut voluptatibus eligendi. Ipsam voluptatibus rerum fuga inventore, alias voluptate ipsum odio consequatur enim veritatis optio autem pariatur quas iste quae ut laborum magnam similique, quasi quia dignissimos possimus a blanditiis. Assumenda neque nostrum veritatis, illum illo soluta perspiciatis qui ipsum dolore consequuntur esse inventore aspernatur nisi ratione accusamus sint, pariatur animi quas nam porro provident consectetur. Vero ut aliquid eligendi quos facilis non quaerat magnam, explicabo itaque recusandae cumque obcaecati veniam nisi! Possimus porro, doloremque eos distinctio ipsa eaque itaque facere asperiores deserunt, modi nemo, atque explicabo ab quia libero commodi nobis voluptatum quidem cum molestiae. Eveniet deleniti quasi ea sed eligendi adipisci, veritatis possimus asperiores, aspernatur, aliquid veniam. Iusto aliquam ab dolor quae ad, eaque nisi dolores ipsam fuga, iste praesentium ut facilis minima nobis voluptas! Provident perferendis suscipit consequuntur explicabo sequi odio voluptatum voluptas adipisci distinctio, nam, earum quis corporis veniam ducimus beatae praesentium laborum ipsam excepturi vero. Culpa debitis ex quaerat totam quo itaque delectus esse, rerum, eos velit, facilis quia non architecto. Distinctio voluptas porro illum dignissimos similique inventore praesentium laborum, accusantium vero omnis unde quibusdam repellat voluptate dolor laboriosam saepe libero nam! Accusamus quidem, hic voluptas, delectus, doloremque vel eveniet nemo ab temporibus corrupti sequi voluptates facere adipisci nostrum sint culpa voluptate rem itaque debitis. Laudantium facere iste nam optio! Aut, praesentium explicabo numquam delectus perspiciatis temporibus molestiae quod quaerat consequatur, nostrum tenetur aliquid doloribus placeat, quae laborum ea. Impedit explicabo non est tenetur quaerat exercitationem hic reprehenderit quisquam, ex ut corrupti consectetur expedita repudiandae! Aliquid, alias accusamus. Perspiciatis blanditiis cumque explicabo suscipit culpa voluptatum! Maxime exercitationem est, ullam fugiat totam corrupti dolor cupiditate atque quis quidem error ea dicta vero voluptas molestias perferendis? Dolore hic praesentium odio voluptates quasi illo labore suscipit earum nesciunt, autem ad eos nostrum inventore sed temporibus ut cum. Nihil cupiditate nobis eveniet ipsum at! Blanditiis nesciunt perspiciatis sunt dicta neque magnam enim ipsum est, nisi, veniam expedita iure provident, omnis earum. At quas exercitationem officiis quam inventore, obcaecati recusandae sunt velit natus rerum. Beatae veniam velit qui praesentium natus eligendi dolor unde esse consequatur suscipit nisi cumque at animi illo nihil, fuga, temporibus voluptates amet perferendis voluptatum, nam quaerat id? Dolore totam vitae, perspiciatis at, necessitatibus, possimus quos ratione reiciendis quia maiores a aliquid explicabo quasi ea iusto? Libero qui quae expedita, harum ratione impedit amet illum quidem nam ex maxime dolore ea itaque recusandae ut ipsum ullam voluptatum ab aspernatur. Consequatur?</div>
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
customElements.define("demo-layout", DemoLayout);
export default document.createElement("demo-layout");
