import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class ChipSetComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-chip-set type="assist" .items="${[
                        {label:'Chip 1'},
                        {label:'Chip 2'},
                        {label:'Chip 3'},
                        {label:'Chip 4'},
                        {label:'Chip 5'},
                        {label:'Chip 6'},
                        {label:'Chip 7'},
                        {label:'Chip 8'},
                        {label:'Chip 9'},
                        {label:'Chip 10'},
                        {label:'Chip 11'},
                        {label:'Chip 12'},
                    ]}"></md-chip-set>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-chip-set type="filter" .items="${[
                        {label:'Chip 1'},
                        {label:'Chip 2'},
                        {label:'Chip 3'},
                        {label:'Chip 4'},
                        {label:'Chip 5'},
                        {label:'Chip 6'},
                        {label:'Chip 7'},
                        {label:'Chip 8'},
                        {label:'Chip 9'},
                        {label:'Chip 10'},
                        {label:'Chip 11'},
                        {label:'Chip 12'},
                    ]}"></md-chip-set>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-chip-set type="input" .items="${[
                        {label:'Chip 1'},
                        {label:'Chip 2'},
                        {label:'Chip 3'},
                        {label:'Chip 4'},
                        {label:'Chip 5'},
                        {label:'Chip 6'},
                        {label:'Chip 7'},
                        {label:'Chip 8'},
                        {label:'Chip 9'},
                        {label:'Chip 10'},
                        {label:'Chip 11'},
                        {label:'Chip 12'},
                    ]}"></md-chip-set>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-chip-set type="suggestion" .items="${[
                        {label:'Chip 1'},
                        {label:'Chip 2'},
                        {label:'Chip 3'},
                        {label:'Chip 4'},
                        {label:'Chip 5'},
                        {label:'Chip 6'},
                        {label:'Chip 7'},
                        {label:'Chip 8'},
                        {label:'Chip 9'},
                        {label:'Chip 10'},
                        {label:'Chip 11'},
                        {label:'Chip 12'},
                    ]}"></md-chip-set>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("chip-set-component", ChipSetComponent);

export default document.createElement('chip-set-component')
