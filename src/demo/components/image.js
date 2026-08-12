import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoImage extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-image style="height:64px;aspect-ratio:1/1;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-image style="height:64px;aspect-ratio:1/1;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-image style="height:64px;aspect-ratio:1/1;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4"></md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-image style="height:64px;aspect-ratio:16/9;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:3/2;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:4/3;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:1/1;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:3/4;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:2/3;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-image style="height:64px;aspect-ratio:16/9;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:3/2;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:4/3;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:1/1;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:3/4;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:2/3;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-image style="height:64px;aspect-ratio:16/9;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:3/2;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:4/3;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:1/1;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:3/4;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="height:64px;aspect-ratio:2/3;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-image style="width:64px;aspect-ratio:16/9;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:3/2;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:4/3;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:1/1;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:3/4;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:2/3;" shape="round" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-image style="width:64px;aspect-ratio:16/9;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:3/2;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:4/3;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:1/1;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:3/4;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:2/3;" shape="square" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-image style="width:64px;aspect-ratio:16/9;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:3/2;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:4/3;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:1/1;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:3/4;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                    <md-image style="width:64px;aspect-ratio:2/3;" shape="sharp" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"></md-image>
                </md-grid-column>

            </md-grid>

        `
    }
}
customElements.define("demo-image", DemoImage);
export default document.createElement("demo-image");
