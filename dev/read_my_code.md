## src\demo\components

### navigation-rail-modal
src\demo\components\navigation-rail-modal.js

```js
import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNavigationRailModal extends MdElement {
    west = createRef();

    constructor() {
        super();
        this.items9 = [
            { id: 0, leading: [{ component: "icon", icon: "image" }], label: "Item 1", selected: true },
            { id: 1, leading: [{ component: "icon", icon: "image" }], label: "Item 2" },
            {
                id: 2,
                leading: [
                    { component: "icon", icon: "image" },
                    { component: "badge", label: 0 },
                ],
                label: "Item 3",
            },
            {
                id: 3,
                leading: [
                    { component: "icon", icon: "image" },
                    { component: "badge", label: 3 },
                ],
                label: "Item 4",
            },
        ];

        this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                
                <md-navigation-rail 
                    ${ref(this.west)} 
                    open 
                    .iconButton="${{icon:["menu","menu_open"], onIconButtonClick:this.handleToggleCollapse}}"
                    .fab="${{icon:'edit',label:'Label', onFabClick:console.log}}"
                    .items="${this.items9}"
                    modal
                ></md-navigation-rail>
                <md-layout-item region="center">
                    
                    <md-button label="Toggle Navigation Rail" @click="${this.handleClickWest}"></md-button>
                    <md-button label="Toggle Collapse Navigation Rail" @click="${this.handleToggleCollapse}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickWest() {
        this.west.value.toggle();
    }
    handleToggleCollapse() {
        this.west.value.toggleCollapse();
    }
}
customElements.define("demo-navigation-rail-modal", DemoNavigationRailModal);
export default document.createElement("demo-navigation-rail-modal");

```
### navigation-rail
src\demo\components\navigation-rail.js

```js
import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNavigationRail extends MdElement {
    west = createRef();

    constructor() {
        super();
        this.items9 = [
            { id: 0, leading: [{ component: "icon", icon: "image" }], label: "Item 1", selected: true },
            { id: 1, leading: [{ component: "icon", icon: "image" }], label: "Item 2" },
            {
                id: 2,
                leading: [
                    { component: "icon", icon: "image" },
                    { component: "badge", label: 0 },
                ],
                label: "Item 3",
            },
            {
                id: 3,
                leading: [
                    { component: "icon", icon: "image" },
                    { component: "badge", label: 3 },
                ],
                label: "Item 4",
            },
        ];

        this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-navigation-rail 
                    ${ref(this.west)} 
                    open 
                    .iconButton="${{icon:["menu","menu_open"], onIconButtonClick:this.handleToggleCollapse}}"
                    .fab="${{icon:'edit',label:'Label', onFabClick:console.log}}"
                    .items="${this.items9}"
                ></md-navigation-rail>
                <md-layout-item region="center">
                    <md-button label="Toggle Navigation Rail" @click="${this.handleClickWest}"></md-button>
                    <md-button label="Toggle Collapse Navigation Rail" @click="${this.handleToggleCollapse}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickWest() {
        this.west.value.toggle();
    }
    handleToggleCollapse() {
        this.west.value.toggleCollapse();
    }
}
customElements.define("demo-navigation-rail", DemoNavigationRail);
export default document.createElement("demo-navigation-rail");

```
## src\material\components\navigation-rail

### navigation-rail
src\material\components\navigation-rail\navigation-rail.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { renderFab, renderIconButton, renderList } from "../../utils/render-component.js";
import { MdList } from "../list/list.js";
import { MdLayoutItem } from "../layout/layout-item.js";

class MdNavigationRail extends MdLayoutItem {
    static properties = {
        ...MdList.properties,
        ...MdLayoutItem.properties,
        iconButton: { type: Object },
        fab: { type: Object },
        expanded: { type: Boolean },
    };

    constructor() {
        super();

        this.region = "west";
        this.expanded = false;
        this.showScrimOnExpanded = true;
        this.showScrimOnOpen = false;
        this.closeOnScrimClick = false;
        this.collapseOnScrimClick = true;
        this.dockedOnCollapsed = true;
        this.size = 220;
        this.collapsedSize = 96;
    }

    renderIconButton() {
        const iconButtonProperties = {
            classMap: {
                "md-navigation-rail__icon-button": true,
            },
            variant: "toggle",
            color: "standard",
            ...this.iconButton,
            selected: this.expanded,
        };
        return renderIconButton(iconButtonProperties);
    }

    renderFab() {
        const fabProperties = {
            classMap: {
                "md-navigation-rail__fab": true,
            },
            unelevated: true,
            ...this.fab,
            label: this.expanded ? this.fab.label : "",
        };
        return renderFab(fabProperties);
    }

    renderList() {
        const listProperties = {
            classMap: {
                "md-navigation-rail__list": true,
            },
            items: this.items,
            singleSelect: true,
            activeRow: true,
            selectOnEnterActiveRow: true,
            rippleOptions: this.expanded ? { container: ".md-list__item", centered: true } : { container: ".md-list__icon", centered: true },
        };
        return renderList(listProperties);
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.iconButton?this.renderIconButton():nothing}
            ${this.fab?this.renderFab():nothing}
            ${this.renderList()}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-rail");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("expanded")) {
            this.classList.toggle(`md-navigation-rail--expanded`, Boolean(this.expanded));
            this.classList.toggle(`md-navigation-rail--collapsed`, !Boolean(this.expanded));
        }

        if (_changedProperties.has("modal")) {
            this.classList.toggle(`md-navigation-rail--modal`, Boolean(this.modal));
        }
    }
}

customElements.define("md-navigation-rail", MdNavigationRail);

export { MdNavigationRail };

```
