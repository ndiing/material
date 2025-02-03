import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Movable } from "../../material/movable/movable";
import { VirtualScroll } from "../../material/virtual-scroll/virtual-scroll";

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
                        <div class="demo-movable"></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="demo-movable"></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="demo-movable"></div>
                    </div>

                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="demo-virtual-scroll ">
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                            <div class="demo-virtual-scroll__item md-virtual-scroll__item">item 1</div>
                        </div>
                    </div>

                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="screen">
                            ${Array.from({length:50}, () => html`<div class="window"></div>`)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    firstUpdated() {
        document.querySelectorAll(".demo-movable").forEach((element) => {
            new Movable(element);
        });
        document.querySelectorAll(".demo-virtual-scroll").forEach((element) => {
            element.addEventListener("onVirtualScroll", console.log);
            new VirtualScroll(element, {
                total: 1000,
            });
        });

        // const screenWidth = window.innerWidth;
        // const screenHeight = window.innerHeight;

        // const columns = 16;
        // const gap = 4;
        // const containerMargin = 4;

        // const availableWidth = screenWidth - 2 * containerMargin;
        // let appWidth = (availableWidth - gap * (columns - 1)) / columns;
        // let appHeight = appWidth/720*1600;
        
        // document.querySelectorAll(".window").forEach((win, index) => {
        //     win.style.setProperty("width", appWidth + "px");
        //     win.style.setProperty("height", appHeight + "px");
        //     const col = index % columns;
        //     const row = Math.floor(index / columns);
        //     win.style.setProperty("position", "absolute");
        //     win.style.setProperty("top", row * (appHeight + gap) + containerMargin + "px");
        //     win.style.setProperty("left", col * (appWidth + gap) + containerMargin + "px");
        // });

        // 1500000*100 = 150.000.000
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
