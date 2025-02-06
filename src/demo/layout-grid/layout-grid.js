import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoLayoutGrid extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="demo-layout__column md-layout__column--expanded1 md-layout__column--medium1 md-layout__column--compact1">1/1/1</div>
                    <div class="demo-layout__column md-layout__column--expanded11 md-layout__column--medium7 md-layout__column--compact3">11/7/3</div>
                    <div class="demo-layout__column md-layout__column--expanded2 md-layout__column--medium2 md-layout__column--compact1">2/2/1</div>
                    <div class="demo-layout__column md-layout__column--expanded10 md-layout__column--medium6 md-layout__column--compact3">10/6/3</div>
                    <div class="demo-layout__column md-layout__column--expanded3 md-layout__column--medium3 md-layout__column--compact1">3/3/1</div>
                    <div class="demo-layout__column md-layout__column--expanded9 md-layout__column--medium5 md-layout__column--compact3">9/5/3</div>
                    <div class="demo-layout__column md-layout__column--expanded4 md-layout__column--medium2 md-layout__column--compact1">4/2/1</div>
                    <div class="demo-layout__column md-layout__column--expanded8 md-layout__column--medium6 md-layout__column--compact3">8/6/3</div>
                    <div class="demo-layout__column md-layout__column--expanded5 md-layout__column--medium3 md-layout__column--compact1">5/3/1</div>
                    <div class="demo-layout__column md-layout__column--expanded7 md-layout__column--medium5 md-layout__column--compact3">7/5/3</div>
                    <div class="demo-layout__column md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact2">6/4/2</div>
                    <div class="demo-layout__column md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact2">6/4/2</div>
                    <div class="demo-layout__column md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">12/8/4</div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-layout-grid", DemoLayoutGrid);
export default document.createElement("demo-layout-grid");
