import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";
import { classMap } from "lit/directives/class-map.js";
/**
 * @extends MdComponent
 * @element md-data-table-cell
 */
class MdDataTableCellComponent extends MdComponent {
    /**
     * @property {String} [label]
     * @property {String} [sublabel]
     */
    static properties = {
        checkbox: { type: Boolean },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        label: { type: String },
        sublabel: { type: String },
        rightAligned: { type: Boolean },
        sortable: { type: Boolean },
        sortIcon: { type: String },
    };

    constructor() {
        super();
    }

    renderIconButton(item = {}) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                .data="${item}"
                class="${classMap(item.classMap??{})}"
                .icon="${item.icon}"
                .variant="${item.variant}"
                .type="${item.type}"
                .toggle="${item.toggle}"
                .selected="${item.selected}"
                .disabled="${item.disabled}"
                .rippleOptions="${item.rippleOptions}"
            ></md-icon-button>
        `
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.checkbox ? html`
                <md-checkbox
                    class="md-data-table__checkbox"
                    .indeterminate="${ifDefined(this.indeterminate)}"
                    .checked="${ifDefined(this.checked)}"
                ></md-checkbox>
            ` : nothing} 
            ${this.sortable&&this.rightAligned?this.renderIconButton({classMap:{"md-data-table__sortable":true},icon:this.sortIcon||' '}):nothing}
            ${this.label || this.sublabel ? html`
                <div class="md-data-table__labels">
                    ${this.label ? html`<div class="md-data-table__label">${this.label}</div>` : nothing} 
                    ${this.sublabel ? html`<div class="md-data-table__sublabel">${this.sublabel}</div>` : nothing}
                </div>    
            ` : nothing} 
            ${this.sortable&&!this.rightAligned?this.renderIconButton({classMap:{"md-data-table__sortable":true},icon:this.sortIcon||' '}):nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__cell");
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
    }

    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("rightAligned")) {
            this.classList.toggle("md-data-table__cell--right-aligned", !!this.rightAligned);
        }
    }
}

customElements.define("md-data-table-cell", MdDataTableCellComponent);

export { MdDataTableCellComponent };
