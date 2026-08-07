import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { setPosition } from "../../material/core/positioner.js";

class DemoTest extends MdElement {
    constructor() {
        super();

        const placement = ["above-start", "above", "above-end", "after-start", "after", "after-end", "below-start", "below", "below-end", "before-start", "before", "before-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-start", "bottom", "bottom-end", "left-start", "left", "left-end", "north-east", "south-east", "south-west", "north-west", "center"];

        this.items = [
            // { placement },

            // { placement: "top" },
            // { placement: ["top", "right", "bottom", "left"] },
            { placement: ["below-start", "below-end", "below", "above-start", "above-end", "above", "after-start", "after-end", "after", "before-start", "before-end", "before"] },

            // { placement: ["top-start"] },
            // { placement: ["top"] },
            // { placement: ["top-end"] },

            // { placement: ["right-start"] },
            // { placement: ["right"] },
            // { placement: ["right-end"] },

            // { placement: ["bottom-end"] },
            // { placement: ["bottom"] },
            // { placement: ["bottom-start"] },

            // { placement: ["left-end"] },
            // { placement: ["left"] },
            // { placement: ["left-start"] },

            //

            // { placement:[ "above-end"] },
            // { placement:[ "above"] },
            // { placement:[ "above-start"] },

            // { placement:[ "after-end"] },
            // { placement:[ "after"] },
            // { placement:[ "after-start"] },

            // { placement:[ "below-start"] },
            // { placement:[ "below"] },
            // { placement:[ "below-end"] },

            // { placement:[ "before-start"] },
            // { placement:[ "before"] },
            // { placement:[ "before-end"] },

            //
            // { placement:[ "north-east"] },
            // { placement:[ "south-east"] },
            // { placement:[ "south-west"] },
            // { placement:[ "north-west"] },

            //

            // { placement: ["center"] }, //
        ].map((options) => ({
            offset: 0,
            ...options,
        }));
    }

    /* prettier-ignore */
    render(){
        return html`
            <!-- <md-grid style="margin:calc(56px * 3)">
                ${this.items.map(item=>html`
                    <md-grid-column style="height:calc(56px * 6)">
                        <div class="test-container"></div>
                        <div class="test-trigger">${item.placement}</div>
                    </md-grid-column>                
                `)}
            </md-grid> -->
            <!-- <md-grid style="margin:calc(56px * 5)">
                <md-grid-column style="height:calc(56px * 6)">
                    <div class="test-container">container</div>
                    <div class="test-trigger">trigger</div>
                </md-grid-column>       
            </md-grid> -->

            <div class="test-track"></div>
        `
    }

    firstUpdated() {
        super.firstUpdated();

        // const containers = Array.from(this.querySelectorAll(".test-container"));
        // const triggers = Array.from(this.querySelectorAll(".test-trigger"));

        // triggers.forEach((trigger, index) => {
        //     const container = containers[index];
        //     const options = this.items[index];
        //     this.setPosition(trigger, container, options);
        // });

        // const container = this.querySelector(".test-container");
        // // const trigger = this.querySelector(".test-trigger");

        // document.body.addEventListener("contextmenu", (event) => {
        //     event.preventDefault();
        //     const trigger = event;
        //     const options = this.items[0];
        //     const result = setPosition(trigger, container, options);
        //     console.log(result);
        // });

        // let counter = 0;

        // const test = () => {
        //     const index = counter % this.items.length;
        //     const options = this.items[index];
        //     this.setPosition(trigger, container, options);
        //     ++counter;
        // };
        // setInterval(() => {
        //     test();
        // }, 1000);
        // test();
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
