import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoBadge extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-badge label=""></md-badge>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-badge", DemoBadge);
export default document.createElement("demo-badge");
