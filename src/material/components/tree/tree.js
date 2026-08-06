import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { MdListElement } from "../../base/list.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

class MdTree extends MdListElement {
    constructor() {
        super();
        this.type = "tree";
    }

    /* prettier-ignore */
    render(){
        const rootHasBranch = this._tree.some((node) => node.children?.length);
        return repeat(this._list, (item) => item[this.valueField], (item) => html`
            <md-list-item
                style="${styleMap({
                    '--md-comp-list-item-level': item.level,
                })}"
                .item="${item}"
                .label="${item[this.labelField]}"
                .leading="${this._getLeadingItem(item,rootHasBranch)}"
                @click="${this._handleListItemClick}"
            ></md-list-item>
        `)
    }

    _getLeadingItem(item, rootHasBranch) {
        const leading = [];

        if (rootHasBranch) {
            if (item.hasChildren) {
                leading.push({ component: "icon-button", width: "narrow", color: "standard", icon: item.expanded ? "keyboard_arrow_down" : "keyboard_arrow_right" });
            } else {
                leading.push({ component: "icon", icon: "", style: { width: "32px" } });
            }
        }

        leading.push({ component: "icon", icon: item.hasChildren ? (this.expandedValues.has(item[this.valueField]) ? "folder_open" : "folder") : "draft" });
        return leading;
    }

    _handleListItemClick(event) {
        const li = event.currentTarget;
        const item = li.item;

        if (item.hasChildren) {
            if (this.expandedValues.has(item[this.valueField])) {
                this.expandedValues.delete(item[this.valueField]);
            } else {
                this.expandedValues.add(item[this.valueField]);
            }
        }

        this.selectedValues.clear();
        this.selectedValues.add(item[this.valueField]);

        this._setItems();
    }
}

customElements.define("md-tree", MdTree);

export { MdTree };
