import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Movable } from "../../material/movable/movable";

/**
 * @extends MdComponent
 */
class DemoTest extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-movable"
                            style="background:var(--md-sys-color-primary8);"
                        ></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-movable"
                            style="background:var(--md-sys-color-primary10);"
                        ></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-movable"
                            style="background:var(--md-sys-color-primary16);"
                        ></div>
                    </div>

                    <!-- <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-resizable"
                            style="background:var(--md-sys-color-primary8);"
                        ></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-resizable"
                            style="background:var(--md-sys-color-primary10);"
                        ></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-resizable"
                            style="background:var(--md-sys-color-primary16);"
                        ></div>
                    </div> -->
                </div>
            </div>
        `;
    }

    firstUpdated() {
        document.querySelectorAll(".demo-movable").forEach((element) => {
            new Movable(element);
        });

        // document.querySelectorAll('.demo-resizable')
        // .forEach(element => {

        //     new Resizer(element)

        // })
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
