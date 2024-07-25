import { html, nothing } from "lit";
import { MDComponent } from "../../material/component/component.js";
import icons from "../../assets/icons.json";
import { MDVirtualController } from "../../material/material.js";

const grouped = Object.groupBy(
    icons,
    (doc) => doc.group,
);
const rows = [];
for (const name in grouped) {
    const docs = grouped[name];
    rows.push([{ section: name }]);
    for (let i = 0; i < docs.length; i += 10) {
        rows.push(docs.slice(i, i + 10));
    }
}

class DevIcon extends MDComponent {
    constructor() {
        super();
        this.virtual = new MDVirtualController(this, {});
        this.virtual.options.rowTotal = rows.length;
        this.virtual.options.rowHeight = 140;
        this.virtual.options.rowBuffer = 0;
    }
    render() {
        return html`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-layout class="dev-icon__fit" variant="column">
                        <md-layout-item class="dev-icon__fit" expanded="12" medium="8" compact="4">
                            <div class="md-virtual" @onVirtualScroll="${this.handleVirtualScroll}">
                                <div class="md-virtual__scrollbar"></div>
                                <div class="md-virtual__container">
                                    <div class="dev-icon__grid">
                                        ${this.virtualRows?.map(
                                            (row) => html`
                                                <div class="dev-icon__row">
                                                    ${row.map(
                                                        (doc) => html`
                                                            ${doc.section ? html`<div class="dev-icon__section">${doc.section}</div>` : nothing}
                                                            ${doc.icon
                                                                ? html`
                                                                      <div class="dev-icon__column">
                                                                          <md-icon class="dev-icon__icon" icon="${doc.icon}"></md-icon>
                                                                          <div class="dev-icon__label">${doc.name}</div>
                                                                      </div>
                                                                  `
                                                                : nothing}
                                                        `,
                                                    )}
                                                </div>
                                            `,
                                        )}
                                    </div>
                                </div>
                            </div>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }

    handleVirtualScroll(event) {
        this.virtualRows = rows.slice(this.virtual.rowStart, this.virtual.rowEnd);
        this.requestUpdate();
    }
}

customElements.define("dev-icon", DevIcon);

export default document.createElement("dev-icon");
