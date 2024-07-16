import { html, nothing } from "lit";
import { MDComponent } from "../../material/component/component.js";
import data from "../../assets/icons.json"
import { MDStore, MDVirtualController } from "../../material/material.js";


class DevIcon extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:24px;" class="md-layout-column">
                        <div style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:0;" class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        
                            <div 
                                class="md-virtual"
                                @onVirtualScroll="${this.handleVirtualScroll}"
                            >
                                <div class="md-virtual__scrollbar"></div>
                                <div class="md-virtual__container">
                                    <div class="dev-icon-grid">
                                        ${this.virtualRows?.map(row=>html`
                                            <div class="dev-icon-row">
                                                ${row.map(column=>html`
                                                    <div class="dev-icon-column">
                                                        ${column.label?html`<div class="dev-icon-label">${column.label}</div>`:nothing}
                                                        ${column.icon?html`
                                                            <div class="dev-icon-icon md-icon" title="${column.icon}">${column.icon}</div>
                                                            <div class="dev-icon-text" title="${column.icon}">${column.icon}</div>
                                                        `:nothing}
                                                    </div>
                                                `)}
                                            </div>
                                        `)}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback(){
        super.connectedCallback()

        this.store=new MDStore(data)
        const {total,docs} = this.store.getAll({
            unsupported_families_nin:'Material Symbols Outlined'
        })
        this.storeTotal=total
        this.storeRows=docs

        const {tabs,rows}=this.generate(this.storeRows)

        this.generatedTabs = tabs
        this.generatedRows = rows

        this.virtual=new MDVirtualController(this)
        this.virtual.options.rowTotal=this.generatedRows.length
        this.virtual.options.rowHeight=72
        // this.virtual.options.rowBuffer=this.generatedTabs.length
    }

    handleVirtualScroll(event){
        this.virtualRows=this.generatedRows.slice(
            this.virtual.rowStart,
            this.virtual.rowEnd,
        )
        this.requestUpdate()
    }

    generate(data){
        const grouped = data.reduce((acc, curr) => {
            const { group = "", icon } = curr;
        
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push({ icon });
            return acc;
        }, {});
        const tabs = [];
        const rows = [];
        let rowIndex = 0;
        let index = 0;
        
        for (const name in grouped) {
            const value = grouped[name];
            tabs.push({ label: name, icon: value[0].icon, rowIndex, index });
            rows.push([{ label: name }]);
            ++rowIndex;
            ++index;
        
            for (let i = 0; i < value.length; i += 10) {
                rows.push(value.slice(i, i + 10));
                ++rowIndex;
            }
        }
        return {tabs,rows}
    }
}

customElements.define("dev-icon", DevIcon);

export default document.createElement("dev-icon");
