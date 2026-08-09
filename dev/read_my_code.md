## src\demo\components

### navigation-rail-modal
src\demo\components\navigation-rail-modal.js

```js
import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNavigationRailModal extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
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
                <md-layout-item height="64" ${ref(this.north)} region="north">
                        north
                </md-layout-item>
                <md-layout-item width="256" ${ref(this.east)} region="east">
                        east
                </md-layout-item>
                <md-layout-item height="64" ${ref(this.south)} region="south">
                        south
                </md-layout-item>
                <md-navigation-rail 
                    ${ref(this.west)} 
                    open 
                    .iconButton="${{icon:["menu","menu_open"], onIconButtonClick:this.handleToggleCollapse}}"
                    .fab="${{icon:'edit',label:'Label', onFabClick:console.log}}"
                    .items="${this.items9}"
                    modal
                ></md-navigation-rail>
                <md-layout-item region="center">
                    <md-button label="north" @click="${this.handleClickNorth}"></md-button>
                    <md-button label="east" @click="${this.handleClickEast}"></md-button>
                    <md-button label="south" @click="${this.handleClickSouth}"></md-button>
                    <md-button label="west" @click="${this.handleClickWest}"></md-button>
                    <md-button label="toggle collapse" @click="${this.handleToggleCollapse}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickNorth() {
        this.north.value.toggle();
    }
    handleClickEast() {
        this.east.value.toggle();
    }
    handleClickSouth() {
        this.south.value.toggle();
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
    north = createRef();
    east = createRef();
    south = createRef();
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
                <md-layout-item height="64" ${ref(this.north)} region="north">
                        north
                </md-layout-item>
                <md-layout-item width="256" ${ref(this.east)} region="east">
                        east
                </md-layout-item>
                <md-layout-item height="64" ${ref(this.south)} region="south">
                        south
                </md-layout-item>
                <md-navigation-rail 
                    ${ref(this.west)} 
                    open 
                    .iconButton="${{icon:["menu","menu_open"], onIconButtonClick:this.handleToggleCollapse}}"
                    .fab="${{icon:'edit',label:'Label', onFabClick:console.log}}"
                    .items="${this.items9}"
                ></md-navigation-rail>
                <md-layout-item region="center">
                    <md-button label="north" @click="${this.handleClickNorth}"></md-button>
                    <md-button label="east" @click="${this.handleClickEast}"></md-button>
                    <md-button label="south" @click="${this.handleClickSouth}"></md-button>
                    <md-button label="west" @click="${this.handleClickWest}"></md-button>
                    <md-button label="toggle collapse" @click="${this.handleToggleCollapse}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickNorth() {
        this.north.value.toggle();
    }
    handleClickEast() {
        this.east.value.toggle();
    }
    handleClickSouth() {
        this.south.value.toggle();
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
        collapsedWidth: { type: Number },
        expandedWidth: { type: Number },
        iconButton: { type: Object },
        fab: { type: Object },
        expanded: { type: Boolean },
    };

    /**@override*/
    get regionTranslate() {
        return {
            west: { property: "--md-comp-layout-west-translate-x", value: (this.modal ? this.collapsedWidth : this.width) + "px" },
        };
    }

    constructor() {
        super();

        this.region = "west";
        this.collapsedWidth = 96;
        this.expandedWidth = 220;
        this.width = this.collapsedWidth;
        this.closeOnScrimClick = false;
        this.showScrimOnOpen = false;
        this.expanded = false;

        this._handleNavigationRailScrimClick = this._handleNavigationRailScrimClick.bind(this);
        this._handleNavigationRailTransitionend = this._handleNavigationRailTransitionend.bind(this);
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

        this.on("transitionend", this._handleNavigationRailTransitionend);

        if (this.scrimElement) {
            this.scrimElement.on("onScrimClick", this._handleNavigationRailScrimClick);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.scrimElement) {
            this.scrimElement.off("onScrimClick", this._handleNavigationRailScrimClick);
        }

        this.off("transitionend", this._handleNavigationRailTransitionend);

        this.classList.remove("md-navigation-rail");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("expanded") && this.open) {
            queueMicrotask(() => {
                if (this.expanded) {
                    this.width = this.expandedWidth;
                } else {
                    this.width = this.collapsedWidth;
                }
            });
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("expanded") && this.open) {
            if (this.expanded) {
                this.classList.add(`md-navigation-rail--expanded`);
                this.classList.remove(`md-navigation-rail--collapsed`);
                if (this.modal) {
                    this.scrimElement.show();
                }
            } else {
                this.classList.remove(`md-navigation-rail--expanded`);
                this.classList.add(`md-navigation-rail--collapsed`);
                this.scrimElement.close();
            }
        }

        if (_changedProperties.has("modal")) {
            this.classList.toggle(`md-navigation-rail--modal`, Boolean(this.modal));
        }
    }

    /**@override*/
    _restoreState() {
        super._restoreState();
        this.requestUpdate("expanded", false);
    }

    /**@override*/
    _cleanState() {
        super._cleanState();
        this.classList.remove(`md-navigation-rail--expanded`);
    }

    _handleNavigationRailTransitionend(event) {
        if (this.expanded) {
            this.emit("onNavigationRailExpanded", { event, element: this });
        } else {
            this.emit("onNavigationRailCollapsed", { event, element: this });
        }
    }

    _handleNavigationRailScrimClick(event) {
        this.collapse();
        this.emit("onNavigationRailScrimClick", { event, element: this });
    }

    collapse() {
        if (!this.open) {
            return;
        }
        this.expanded = false;
        this.emit("onNavigationRailCollapse", { element: this });
    }

    expand() {
        if (!this.open) {
            return;
        }
        this.expanded = true;
        this.emit("onNavigationRailExpand", { element: this });
    }

    toggleCollapse() {
        if (this.expanded) {
            this.collapse();
        } else {
            this.expand();
        }
    }
}

customElements.define("md-navigation-rail", MdNavigationRail);

export { MdNavigationRail };

```
