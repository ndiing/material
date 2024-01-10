import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

class TypographyComponent extends MDComponent{
    render(){
        // prettier-ignore
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4">
                        <div class="md-typography--display-large">Display Large</div>
                        <div class="md-typography--display-small">Display Small</div>
                        <div class="md-typography--headline-large">Headline Large</div>
                        <div class="md-typography--headline-medium">Headline Medium</div>
                        <div class="md-typography--headline-small">Headline Small</div>
                        <div class="md-typography--title-large">Title Large</div>
                        <div class="md-typography--title-medium">Title Medium</div>
                        <div class="md-typography--title-small">Title Small</div>
                        <div class="md-typography--body-large">Body Large</div>
                        <div class="md-typography--body-medium">Body Medium</div>
                        <div class="md-typography--body-small">Body Small</div>
                        <div class="md-typography--label-large">Label Large</div>
                        <div class="md-typography--label-medium">Label Medium</div>
                        <div class="md-typography--label-small">Label Small</div>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium8 md-layout__column--compact4"></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define('typography-component',TypographyComponent)

export default document.createElement('typography-component')