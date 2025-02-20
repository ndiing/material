import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTabsPrimary extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tabs
                            variant="primary"
                            .items="${[
                                { icon: "image", label: "Label", badge: "", selected: true },
                                { icon: "image", label: "Label", badge: "3" },
                                { icon: "image", label: "Label", badge: "32" },
                                { icon: "image", label: "Label", badge: "3200" },
                            ]}"
                        ></md-tabs>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tabs
                            variant="primary"
                            .items="${[
                                { label: "Label", badge: "", selected: true },
                                { label: "Label", badge: "3" },
                                { label: "Label", badge: "32" },
                                { label: "Label", badge: "3200" },
                            ]}"
                        ></md-tabs>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tabs-primary", DemoTabsPrimary);

export default document.createElement("demo-tabs-primary");
