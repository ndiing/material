import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoImage extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah"></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="16/9"></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="3/2"></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="4/3"></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="1/1"></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="3/4"></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="2/3"></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" circular></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="16/9" circular></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="3/2" circular></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="4/3" circular></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="1/1" circular></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="3/4" circular></md-image>
                    </div>
                    <div class="md-layout__column--expanded2 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image src="https://api.dicebear.com/9.x/dylan/svg?seed=Leah" ratio="2/3" circular></md-image>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-image", DemoImage);

export default document.createElement("demo-image");
