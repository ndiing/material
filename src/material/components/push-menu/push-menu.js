import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdListElement } from "../../base/list.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

class MdPushMenu extends MdListElement {
    constructor() {
        super();
        this.type = "stack";
    }

    /* prettier-ignore */
    render(){
        const { items, parent } = this.current;
        
        return html`
            ${parent?html`
                <md-list-item
                    .item="${parent}"
                    .label="${parent[this.labelField]}"
                    .leading="${this._getLeading(parent)}"
                    @click="${this.pop}"
                ></md-list-item>
            `:nothing}
            ${repeat(items, (item) => item[this.valueField], (item) => html`
                <md-list-item
                    style="${styleMap({
                        '--md-comp-list-item-level': item.level,
                    })}"
                    .item="${item}"
                    .label="${item[this.labelField]}"
                    .leading="${this._getLeadingItem(item,parent)}"
                    .trailing="${this._getTrailingItem(item)}"
                    @click="${this._handleListItemClick}"
                ></md-list-item>
            `)}
        `
    }

    _getTrailingItem(item) {
        const trailing = [];
        if (item.children?.length) {
            trailing.push({ component: "icon", icon: "arrow_forward" });
        }
        return trailing;
    }

    _getLeadingItem(item, parent) {
        const leading = [];
        if (parent) {
            leading.push({ component: "icon", icon: "" });
        }
        return leading;
    }

    _getLeading(parent) {
        const leading = [];
        leading.push({ component: "icon", icon: "arrow_back" });
        return leading;
    }

    _handleListItemClick(event) {
        const li = event.currentTarget;
        const item = li.item;
        if (item?.children?.length) {
            this.push(item);
        } else {
            this.selectedValues.clear();
            this.selectedValues.add(item[this.valueField]);
            this._setStack();
        }
    }
}

customElements.define("md-push-menu", MdPushMenu);

export { MdPushMenu };
