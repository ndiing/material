import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevImage extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-image style="width:96px;" ratio="16/9" src="https://api.dicebear.com/9.x/icons/svg?seed=Lorem" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" ratio="3/2" src="https://api.dicebear.com/9.x/icons/svg?seed=Saepe" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" ratio="4/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Cum" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" ratio="1/1" src="https://api.dicebear.com/9.x/icons/svg?seed=Sequi" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" ratio="3/4" src="https://api.dicebear.com/9.x/icons/svg?seed=Reiciendis" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" ratio="2/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Reiciendis" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-image style="height:96px;" ratio="16/9" src="https://api.dicebear.com/9.x/icons/svg?seed=Temporibus" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" ratio="3/2" src="https://api.dicebear.com/9.x/icons/svg?seed=Maxime" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" ratio="4/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Animi" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" ratio="1/1" src="https://api.dicebear.com/9.x/icons/svg?seed=Odit" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" ratio="3/4" src="https://api.dicebear.com/9.x/icons/svg?seed=Officiis" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" ratio="2/3" src="https://api.dicebear.com/9.x/icons/svg?seed=In" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-image style="width:96px;" variant="rounded" ratio="16/9" src="https://api.dicebear.com/9.x/icons/svg?seed=Qui" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" variant="rounded" ratio="3/2" src="https://api.dicebear.com/9.x/icons/svg?seed=Delectus" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" variant="rounded" ratio="4/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Accusamus" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" variant="rounded" ratio="1/1" src="https://api.dicebear.com/9.x/icons/svg?seed=Ut" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" variant="rounded" ratio="3/4" src="https://api.dicebear.com/9.x/icons/svg?seed=Blanditiis" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:96px;" variant="rounded" ratio="2/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Fugit" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-image style="height:96px;" variant="rounded" ratio="16/9" src="https://api.dicebear.com/9.x/icons/svg?seed=Quis" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" variant="rounded" ratio="3/2" src="https://api.dicebear.com/9.x/icons/svg?seed=Nemo" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" variant="rounded" ratio="4/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Numquam" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" variant="rounded" ratio="1/1" src="https://api.dicebear.com/9.x/icons/svg?seed=Ducimus" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" variant="rounded" ratio="3/4" src="https://api.dicebear.com/9.x/icons/svg?seed=Corporis" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:96px;" variant="rounded" ratio="2/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Beatae" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-image", DevImage);

export default document.createElement("dev-image");
