import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { renderList } from "../../core/template.js";
import { MdList } from "../list/list.js";
import { MdLayoutItem } from "../layout/layout-item.js";


/**
 * @class MdNavigationBar
 * @extends MdLayoutItem
 */
class MdNavigationBar extends MdLayoutItem {
    
    /**
     */
    static properties = {
        ...MdList.properties,
        ...MdLayoutItem.properties,
        layout: { type: String },
    };

    layouts = ["vertical", "horizontal"];

    constructor() {
        super();

        this.size = 64;
        this.region = "south";
        this.layout = "vertical";
    }

    /* prettier-ignore */
    render(){
        const properties = {
            classMap: {
                'md-navigation-bar__list':true,
            },
            items: this.items,
            singleSelect: true,
            activeRow: true,
            selectOnEnterActiveRow: true,
            rippleOptions:this.layout==='vertical'?{ container: ".md-list__icon", centered: true } : { container: ".md-list__item", centered: true }
        }
        return renderList(properties)
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-bar");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("layout")) {
            this.layouts.forEach((layout) => {
                this.classList.toggle(`md-navigation-bar--${layout}`, this.layout === layout);
            });
        }
    }
}

customElements.define("md-navigation-bar", MdNavigationBar);

export { MdNavigationBar };
