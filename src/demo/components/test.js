import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoTest extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            
            <my-layout>
                <my-layout-item ${ref(this.north)} region="north" size="64" collapsedSize="32" docked .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick .expanded="${false}" modal>
                    <div style="padding:16px 24px;">north</div>
                </my-layout-item>
                <my-layout-item ${ref(this.east)} region="east" size="256" collapsedSize="32" docked .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick .expanded="${false}" modal>
                    <div style="padding:16px 24px;">east</div>
                </my-layout-item>
                <my-layout-item ${ref(this.south)} region="south" size="64" collapsedSize="32" docked .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick .expanded="${false}" modal>
                    <div style="padding:16px 24px;">south</div>
                </my-layout-item>
                <my-layout-item ${ref(this.west)} region="west" size="256" collapsedSize="32" docked .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick .expanded="${false}" modal>
                    <div style="padding:16px 24px;">west</div>
                </my-layout-item>
                <my-layout-item region="center">
                    <div style="padding:24px;">
                        <md-button label="North Toggle" @click="${this._handleNorthToggle}"></md-button><br><br>
                        <md-button label="North Toggle Collapse" @click="${this._handleNorthToggleCollapse}"></md-button><br><br><br><br>
                        <md-button label="East Toggle" @click="${this._handleEastToggle}"></md-button><br><br>
                        <md-button label="East Toggle Collapse" @click="${this._handleEastToggleCollapse}"></md-button><br><br><br><br>
                        <md-button label="South Toggle" @click="${this._handleSouthToggle}"></md-button><br><br>
                        <md-button label="South Toggle Collapse" @click="${this._handleSouthToggleCollapse}"></md-button><br><br><br><br>
                        <md-button label="West Toggle" @click="${this._handleWestToggle}"></md-button><br><br>
                        <md-button label="West Toggle Collapse" @click="${this._handleWestToggleCollapse}"></md-button><br><br><br><br>
                        <div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed omnis at necessitatibus, rerum ullam veritatis deserunt quod? Voluptatum facilis sed, libero dignissimos veniam pariatur aperiam maxime vel obcaecati cupiditate.</div>
                            <div>Nobis magni, adipisci eligendi aspernatur asperiores, dolore inventore odio reprehenderit velit, est doloremque! Consectetur dicta distinctio quidem dolor, ipsam suscipit quasi quos ab eos, nam veritatis voluptates ipsum consequuntur ratione.</div>
                            <div>Omnis fugiat voluptatem ipsum repellat in illum quia obcaecati recusandae quos maxime dolor dolorem modi corporis dignissimos dicta, amet non iste eaque dolore? Quaerat enim quas repudiandae facere eum culpa.</div>
                            <div>Corrupti maiores quibusdam atque consequatur quisquam voluptate ullam eveniet dolor suscipit voluptas necessitatibus molestias, doloribus ipsam soluta! Pariatur neque quae est ab voluptas! Aspernatur molestias numquam iure voluptatem impedit. Harum!</div>
                            <div>Asperiores quidem, similique expedita voluptatibus fuga cumque vel sit nostrum fugit, perspiciatis sed quisquam, cum facere earum quia modi suscipit explicabo quae tempore consectetur? Quibusdam autem atque suscipit quod minima!</div>
                            <div>Culpa, quo iure. Aspernatur totam animi reprehenderit nisi, vel sunt, accusantium tempora quasi blanditiis facilis at culpa quaerat sit, in doloribus est repellendus nemo eveniet provident voluptatem omnis? Unde, consequuntur.</div>
                            <div>Voluptatem ex, non nihil perferendis laboriosam eligendi similique minus, sed facilis qui numquam dicta! Quibusdam obcaecati itaque omnis deleniti, eligendi, libero asperiores ipsum eos laborum numquam nulla excepturi quisquam recusandae?</div>
                            <div>Dicta asperiores vitae voluptate perspiciatis obcaecati eum pariatur fuga repellendus. Dignissimos neque optio pariatur fuga omnis alias facere numquam odio, excepturi aspernatur? Quae repellat nulla mollitia odit, ipsum doloremque tempore.</div>
                            <div>Qui vero nam nostrum explicabo aspernatur mollitia corrupti iusto, nesciunt at, laudantium error, cum temporibus natus incidunt omnis sequi magnam totam quae nihil! Pariatur dolor distinctio a! Quasi, sequi expedita?</div>
                            <div>Quia eligendi voluptatibus unde deserunt ea expedita facere reprehenderit cum accusantium! Provident minima sequi aspernatur cupiditate! Minus maiores, quasi sunt tenetur consequatur sapiente officia quia corrupti mollitia quam, repellat laudantium.</div>
                            <div>Beatae eum temporibus, veritatis maxime dolorem iure voluptate neque? Nam optio iusto itaque consectetur voluptatem eligendi corrupti recusandae quasi cupiditate suscipit commodi consequuntur doloribus veritatis maxime blanditiis esse, tempore velit.</div>
                            <div>Quas expedita ea perferendis illo provident perspiciatis necessitatibus velit facilis libero maxime voluptate ullam, molestias fugiat ut dignissimos quibusdam placeat, numquam vel, deserunt dolorum cupiditate alias. Asperiores illo tenetur quis!</div>
                            <div>Recusandae id asperiores, debitis exercitationem est sit incidunt expedita consectetur ut impedit neque assumenda ipsa suscipit corrupti dolores, voluptas quisquam facere, ex totam accusamus quidem! Mollitia reiciendis eum harum quae?</div>
                            <div>Fugiat delectus mollitia ullam. Praesentium fuga fugit assumenda mollitia provident dolorem, minus a dolorum ipsam recusandae est ratione saepe id quis adipisci dicta ipsa suscipit voluptatibus omnis eius nesciunt sunt.</div>
                            <div>Accusamus id hic possimus natus unde laudantium itaque cumque dolores, placeat distinctio cupiditate exercitationem, deserunt, dolor aut in odit voluptas! Tenetur blanditiis temporibus mollitia natus assumenda veniam aliquid excepturi molestias.</div>
                            <div>Error culpa quis magni cum veniam, totam nulla velit unde! Corporis modi delectus animi aliquam adipisci perferendis maxime? Id aliquam quibusdam hic sed similique natus obcaecati porro molestias vero aliquid?</div>
                            <div>Magni quasi quia rem similique dolores atque blanditiis quis eligendi non veniam exercitationem maiores, totam illum cum obcaecati unde iste dignissimos nemo velit aut? Eaque incidunt facilis sapiente reiciendis illo.</div>
                            <div>Minima ad est quo reprehenderit culpa facere accusantium exercitationem, incidunt, sit similique nesciunt quod sint ab? Ducimus placeat repudiandae quae voluptate, eaque sint porro dolores? Nulla cumque accusamus corporis at!</div>
                            <div>Possimus facilis maiores veritatis nobis quidem reprehenderit, neque voluptas unde? Nihil dolorum voluptates, quas repellendus ipsam amet ex sit accusamus dolorem minima eum necessitatibus ab. Aspernatur ut quis eos amet?</div>
                            <div>Ullam quisquam nihil similique dolorum obcaecati blanditiis illum nam exercitationem vitae. Maiores illum quas sed tempora repellendus inventore sint neque vero laudantium impedit consequuntur officia necessitatibus laboriosam, molestias alias velit!</div>
                        </div>
                    </div>
                </my-layout-item>
            </my-layout>
            
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
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
