import { html } from "lit";
import { MDComponent } from "../base/component";

/**
 * A custom data table component.
 * @extends MDComponent
 */
class MDDataTableComponent extends MDComponent {
    /**
     * @type {Object} properties - Component properties.
     * @property {Array} columns - Array of column definitions.
     * @property {Array} rows - Array of row definitions.
     * @property {Array} data - Array of data objects.
     */
    static properties = {
        columns: { type: Array },
        rows: { type: Array },
        data: { type: Array },
    };

    constructor() {
        super();

        // default
        this.columns = [];
        this.rows = [];
        this.data = [];
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table");
    }

    /**
     * Lifecycle method called when the element is first updated.
     * @param {Map} changedProperties - Map of changed properties with old values.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle method called when the element is updated.
     * @param {Map} changedProperties - Map of changed properties with old values.
     */
    updated(changedProperties) {}

    /**
     * Renders the component.
     * @returns {TemplateResult} Rendered template result.
     */
    render() {
        // prettier-ignore
        return html`
            <table>
                <thead>
                    ${this.columns.map(tr=>html`
                        <tr>
                            ${tr.map(th => html`
                                <th>
                                    <md-data-table-item
                                        .label="${th.label}"
                                    ></md-data-table-item>
                                </th>
                            `)}
                        </tr>
                    `)}
                </thead>
                ${this.data.map(item=>html`
                    <tbody>
                        ${this.rows.map(tr=>html`
                            <tr>
                                ${tr.map(td => html`
                                    <td>
                                        <md-data-table-item
                                            .label="${item[td.name]}"
                                        ></md-data-table-item>
                                    </td>
                                `)}
                            </tr>
                        `)}
                    </tbody>
                `)}
            </table>
        `;
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };
