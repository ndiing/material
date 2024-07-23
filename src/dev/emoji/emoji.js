import { html, nothing } from "lit";
import { MDComponent } from "../../material/component/component.js";
import emojis from "../../assets/emojis.json";
import { MDVirtualController } from "../../material/material.js";

const grouped = Object.groupBy(emojis, (doc) => doc.group);
const rows = [];
for (const name in grouped) {
    const docs = grouped[name];
    rows.push([{ section: name }]);
    for (let i = 0; i < docs.length; i += 10) {
        rows.push(docs.slice(i, i + 10));
    }
}

class DevEmoji extends MDComponent {
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
                    <md-layout class="dev-emoji__fit" variant="column">
                        <md-layout-item class="dev-emoji__fit" expanded="12" medium="8" compact="4">
                            <div class="md-virtual" @onVirtualScroll="${this.handleVirtualScroll}">
                                <div class="md-virtual__scrollbar"></div>
                                <div class="md-virtual__container">
                                    <div class="dev-emoji__grid">
                                        ${this.virtualRows?.map(
                                            (row) => html`
                                                <div class="dev-emoji__row">
                                                    ${row.map(
                                                        (doc) => html`
                                                            ${doc.section ? html`<div class="dev-emoji__section">${doc.section}</div>` : nothing}
                                                            ${doc.emoji
                                                                ? html`
                                                                      <div class="dev-emoji__column">
                                                                          <md-emoji class="dev-emoji__emoji" emoji="${doc.emoji}"></md-emoji>
                                                                          <div class="dev-emoji__label">${doc.shortcodes}</div>
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

customElements.define("dev-emoji", DevEmoji);

export default document.createElement("dev-emoji");
