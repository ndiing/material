import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevImage extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Ratio 16/9, 3/2, 4/3, 1/1, 3/4, 2/3 from width</md-markdown>
                            <md-image style="width:56px;" ratio="16/9" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" ratio="3/2" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" ratio="4/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" ratio="1/1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" ratio="3/4" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" ratio="2/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Ratio 16/9, 3/2, 4/3, 1/1, 3/4, 2/3 from height</md-markdown>
                            <md-image style="height:56px;" ratio="16/9" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" ratio="3/2" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" ratio="4/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" ratio="1/1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" ratio="3/4" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" ratio="2/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Ratio+Rounded 16/9, 3/2, 4/3, 1/1, 3/4, 2/3 from width</md-markdown>
                            <md-image style="width:56px;" variant="rounded" ratio="16/9" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" variant="rounded" ratio="3/2" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" variant="rounded" ratio="4/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" variant="rounded" ratio="1/1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" variant="rounded" ratio="3/4" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="width:56px;" variant="rounded" ratio="2/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Ratio+Rounded 16/9, 3/2, 4/3, 1/1, 3/4, 2/3 from height</md-markdown>
                            <md-image style="height:56px;" variant="rounded" ratio="16/9" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" variant="rounded" ratio="3/2" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" variant="rounded" ratio="4/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" variant="rounded" ratio="1/1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" variant="rounded" ratio="3/4" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                            <md-image style="height:56px;" variant="rounded" ratio="2/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Misty" alt="alt" @onImageNativeLoad="${console.log}" @onImageNativeError="${console.log}"></md-image>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-image", DevImage);

export default document.createElement("dev-image");
