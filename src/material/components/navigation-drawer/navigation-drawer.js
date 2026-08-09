import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { renderList } from "../../utils/render-component.js";
import { MdList } from "../list/list.js";
import { MdLayoutItem } from "../layout/layout-item.js";

class MdNavigationDrawer extends MdLayoutItem {
    static properties = {
        ...MdList.properties,
        ...MdLayoutItem.properties,
    };

    constructor() {
        super();

        this.width = 360;
        this.region = "west";
    }

    /* prettier-ignore */
    render(){
        const properties = {
            classMap: {
                'md-navigation-drawer__list':true,
            },
            items: this.items,
            singleSelect: true,
            activeRow: true,
            scrollOnArrowUpActiveRow: true,
            scrollOnArrowDownActiveRow: true,
            selectOnEnterActiveRow: true,
            virtualScroll: true,
        }
        return renderList(properties)
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-drawer");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("modal")) {
            this.classList.toggle(`md-navigation-drawer--modal`, Boolean(this.modal));
        }
    }
}

customElements.define("md-navigation-drawer", MdNavigationDrawer);

export { MdNavigationDrawer };
