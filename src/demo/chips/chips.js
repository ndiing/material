import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoChips extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips
                            .items="${[{ label: "Label" }, { label: "Label" }, { label: "Label" }, { label: "Label" }]}"
                            @onChipClick="${console.log}"
                        ></md-chips>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips
                            .items="${[
                                { icon: "image", label: "Label" },
                                { icon: "image", label: "Label" },
                                { icon: "image", label: "Label" },
                                { icon: "image", label: "Label" },
                            ]}"
                            @onChipClick="${console.log}"
                        ></md-chips>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips
                            .items="${[
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label" },
                            ]}"
                            @onChipClick="${console.log}"
                        ></md-chips>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips
                            .items="${[
                                { icon: "image", label: "Label", action: "image" },
                                { icon: "image", label: "Label", action: "image" },
                                { icon: "image", label: "Label", action: "image" },
                                { icon: "image", label: "Label", action: "image" },
                            ]}"
                            @onChipClick="${console.log}"
                        ></md-chips>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips
                            .items="${[
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", action: "image" },
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", action: "image" },
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", action: "image" },
                                { avatar: "https://api.dicebear.com/9.x/dylan/svg?seed=Leah", label: "Label", action: "image" },
                            ]}"
                            @onChipClick="${console.log}"
                        ></md-chips>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-chips", DemoChips);

export default document.createElement("demo-chips");
