import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayoutDocked extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            
            <md-layout>
                <md-layout-item ${ref(this.north)} region="north" size="64" collapsedSize="32" docked .expanded="${false}" open>
                    <div style="padding:16px 24px;">north</div>
                </md-layout-item>
                <md-layout-item ${ref(this.east)} region="east" size="256" collapsedSize="32" docked .expanded="${false}" open>
                    <div style="padding:16px 24px;">east</div>
                </md-layout-item>
                <md-layout-item ${ref(this.south)} region="south" size="64" collapsedSize="32" docked .expanded="${false}" open>
                    <div style="padding:16px 24px;">south</div>
                </md-layout-item>
                <md-layout-item ${ref(this.west)} region="west" size="256" collapsedSize="32" docked .expanded="${false}" open>
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
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eligendi voluptatum neque corrupti sequi, in est voluptatem harum beatae animi voluptates ipsum dolorum quisquam temporibus inventore nemo? Dolore veniam dolor eius officia quasi nisi excepturi? Voluptas minus explicabo quis, consequuntur praesentium enim porro amet maxime totam repellat impedit quia fugit, veniam ut sunt aliquid! Hic voluptatibus ullam ipsa dolorum iure, dicta at voluptatum quidem maiores. Molestiae saepe suscipit recusandae fuga consequatur et ex molestias ducimus provident non. Inventore exercitationem eos ab quo nesciunt vero repellat, dolores, minus iste illo, laborum voluptatibus qui? Cumque facilis excepturi dicta reprehenderit neque rem illum deleniti perferendis odit adipisci quaerat quae cum libero, assumenda aspernatur debitis harum omnis nihil corrupti. Fugiat, quisquam odio. Ipsum mollitia ab saepe, voluptate perspiciatis explicabo architecto necessitatibus rerum sunt. Eligendi, nulla dolores sed ullam velit consequuntur in sit facilis iusto aliquam iste sapiente nihil quibusdam dolore! In quaerat veniam doloremque beatae at fuga quo illo, labore, qui quod blanditiis facilis quidem praesentium voluptas aperiam? Expedita perferendis tempore enim, ratione voluptatum ut repellendus aliquid consectetur nam, nobis cumque ipsa minima omnis, nisi illo qui quam porro architecto eos. Consequatur nisi nesciunt perspiciatis quas atque ab quasi, iure reprehenderit inventore quaerat fugit minima facilis, dolor obcaecati eveniet itaque repudiandae amet ratione? Accusamus omnis quod officiis, placeat quidem vel atque numquam, amet tempore eligendi ut est quis culpa fugit, impedit minima distinctio itaque obcaecati non aperiam ullam sunt! Deserunt dolores enim perspiciatis officia tempora quaerat sequi, saepe, debitis veritatis quis fugit incidunt dolore maiores quae in. Dolorum nobis beatae maiores dignissimos ullam ratione assumenda excepturi commodi dolorem atque aut, obcaecati porro reprehenderit, perspiciatis fuga recusandae eum. Natus, quasi? Aliquid fugiat consectetur deserunt tempore reiciendis dolorem, dolore qui iure nobis eveniet expedita modi doloribus placeat minima laudantium illum cupiditate dicta, nostrum quis animi amet ipsum sunt! Excepturi numquam, commodi voluptatem quae nihil sapiente ducimus eaque asperiores deserunt repudiandae eligendi quibusdam provident distinctio quisquam rem deleniti non possimus? Perspiciatis, neque necessitatibus. Illum, odit rem placeat veniam consequuntur illo laborum iusto, dolor adipisci necessitatibus sint, iure soluta ea maxime tenetur voluptatem sunt ducimus et nisi repellendus quo repellat? Unde repellat dolore ratione optio sed voluptas voluptatem nemo accusantium sequi atque vel est eos officia vero eligendi quos consequatur quam neque a enim suscipit, ut corporis earum? Totam officiis, laboriosam quos cupiditate beatae explicabo perferendis, vero consectetur iure asperiores in repudiandae quisquam quis. Possimus, atque exercitationem eius blanditiis perspiciatis, repellat voluptatibus assumenda voluptatem perferendis, totam natus quis in harum! Rerum beatae voluptas doloremque ea hic dolores porro ullam. Optio aperiam consequuntur nam est quasi facilis corrupti ad praesentium sapiente officia ipsa sit voluptatibus asperiores ducimus ab rerum accusamus cumque, pariatur et impedit! Distinctio reiciendis adipisci repudiandae eos, reprehenderit sit accusamus autem mollitia eaque maiores, nesciunt nisi aut quod qui ipsam. Enim hic a odit neque cum porro! Corrupti consequuntur placeat nostrum voluptatem quas? Adipisci quis fugit laboriosam repellat nisi sapiente voluptatem sunt corporis beatae, temporibus quaerat, magni assumenda suscipit molestias aspernatur totam quo accusamus mollitia. Eveniet accusamus architecto velit earum ex dolorum consectetur, vel ratione non alias adipisci quo. Inventore numquam quibusdam quia ut, repellat aut. Est impedit, deserunt aliquam quisquam ad corporis cum eligendi. Harum error, alias nemo corrupti maiores culpa itaque eos eveniet neque veritatis aut est tempora ea unde officiis. Aliquid fuga deserunt voluptatum iusto corrupti provident? Officia, architecto? Perferendis fugit nisi id placeat, error delectus vitae molestias ratione soluta expedita voluptatem, fuga reiciendis optio culpa saepe illo accusamus porro, cupiditate officia nostrum adipisci? Id corrupti ipsum illo ullam, expedita exercitationem dignissimos nostrum commodi. Quaerat, eligendi dolorum iusto dolor aspernatur non fugiat molestiae, magni blanditiis autem consectetur quos totam necessitatibus distinctio accusamus illum? Natus nihil iure aspernatur quod illo optio quasi reiciendis, velit odio et dicta suscipit eos possimus asperiores blanditiis eveniet delectus architecto necessitatibus. Quod nemo, sit, quae saepe quibusdam excepturi pariatur odio, praesentium magnam voluptatum accusamus at porro rerum ut! Dignissimos cum illo laborum exercitationem. Minima iusto quisquam expedita asperiores illo corrupti, facere modi. Accusamus vero culpa, blanditiis illo ad animi quae nostrum voluptatum aliquid eius vitae officia fugit. Laudantium omnis impedit dolore, minus natus accusantium quos rem at reiciendis. Ex voluptates doloremque pariatur possimus excepturi illum dolorem, eius ipsam ea voluptatibus, doloribus reiciendis nostrum distinctio quisquam corporis vero hic! Inventore perferendis mollitia doloribus, excepturi eos suscipit, vitae odio dicta sunt delectus, molestiae velit assumenda adipisci eligendi? In nam veniam vitae obcaecati et velit quibusdam neque eaque, debitis consequuntur provident, molestiae inventore aliquam ratione a necessitatibus earum nihil praesentium assumenda impedit sit deserunt quo! Pariatur odit voluptates, labore optio facilis minus dolor saepe a autem dolores nihil repudiandae temporibus iure provident quia expedita molestiae fugit quo cupiditate. Quam omnis unde provident, ea dolorem aperiam blanditiis laudantium excepturi velit similique dignissimos, culpa ratione, incidunt dicta autem atque recusandae odit. Inventore eaque tenetur soluta fuga, porro nostrum consequatur at mollitia, dignissimos placeat, reiciendis delectus eligendi harum tempore corporis exercitationem vel cumque. Dignissimos vitae sequi officia, adipisci, quae voluptatibus totam quaerat, distinctio eum voluptatem nisi. Natus quis placeat ullam deserunt architecto adipisci provident, error vel vitae obcaecati nulla minima animi nam eligendi similique numquam veniam dicta at? Cupiditate commodi magni dolore omnis, recusandae facilis distinctio quisquam facere pariatur perferendis ullam cumque harum. Odio praesentium numquam quos, animi doloribus amet, a fuga nemo delectus, dicta id velit quidem impedit officia inventore tempore. Dolores dolore enim est odit similique animi ipsa, vero, molestiae dicta quasi alias rem soluta voluptates, nihil ex numquam tenetur. Cumque nobis error sit voluptates aut illum optio earum ut corrupti quisquam nesciunt pariatur laboriosam odio facilis, ipsa rem ea voluptas deleniti distinctio deserunt eos tempora recusandae debitis impedit? Ut tempora itaque minus cupiditate quam, distinctio quaerat porro enim provident, perferendis neque iure soluta ullam doloribus modi quo corporis, repudiandae deleniti quibusdam odit similique eaque! Quam, at error mollitia iste tempora fuga corporis quaerat iusto beatae cumque. Quis odio facilis natus tempore quas temporibus fugiat maxime nemo. Ut non repudiandae suscipit nulla voluptatum. Aspernatur reprehenderit beatae atque dignissimos vel, sit repellendus qui nesciunt cupiditate.</div>
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
customElements.define("demo-layout-docked", DemoLayoutDocked);
export default document.createElement("demo-layout-docked");
