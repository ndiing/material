## src\demo\components

### layout-modal
src\demo\components\layout-modal.js

```js
import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayoutModal extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-layout-item height="64" ${ref(this.north)} region="north" modal>
                        north
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perspiciatis impedit quis, assumenda odit saepe harum. Dolorem eum qui dicta nobis repudiandae. Assumenda dolore itaque repudiandae suscipit consequatur enim.
                        Illum, non, eum ducimus iure ullam ratione nulla impedit natus repudiandae aspernatur, perspiciatis doloremque iste recusandae animi corporis labore. Blanditiis et nobis modi quidem, sint autem porro at doloribus soluta.
                        Veniam laboriosam rerum, obcaecati similique ducimus sint assumenda odit voluptatem perspiciatis facilis deserunt dolorum eius culpa. Laudantium et a eum minus, commodi error, praesentium harum aspernatur natus, vitae ea architecto!
                        Molestias assumenda quis, eveniet fugiat adipisci accusantium dolorum saepe quod pariatur provident. Unde blanditiis deleniti maiores aspernatur culpa repellat sit saepe, dolorum nostrum sunt. Beatae consectetur similique placeat et reiciendis?
                        Delectus odio repudiandae eveniet mollitia, facilis quod? Explicabo, pariatur. Minus quos debitis architecto non. Ducimus dolorum animi quod laboriosam ex tempore consequuntur harum placeat aperiam! Earum modi ad dicta corrupti.
                </md-layout-item>
                <md-layout-item width="256" ${ref(this.east)} region="east" modal>
                        east
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perspiciatis impedit quis, assumenda odit saepe harum. Dolorem eum qui dicta nobis repudiandae. Assumenda dolore itaque repudiandae suscipit consequatur enim.
                        Illum, non, eum ducimus iure ullam ratione nulla impedit natus repudiandae aspernatur, perspiciatis doloremque iste recusandae animi corporis labore. Blanditiis et nobis modi quidem, sint autem porro at doloribus soluta.
                        Veniam laboriosam rerum, obcaecati similique ducimus sint assumenda odit voluptatem perspiciatis facilis deserunt dolorum eius culpa. Laudantium et a eum minus, commodi error, praesentium harum aspernatur natus, vitae ea architecto!
                        Molestias assumenda quis, eveniet fugiat adipisci accusantium dolorum saepe quod pariatur provident. Unde blanditiis deleniti maiores aspernatur culpa repellat sit saepe, dolorum nostrum sunt. Beatae consectetur similique placeat et reiciendis?
                        Delectus odio repudiandae eveniet mollitia, facilis quod? Explicabo, pariatur. Minus quos debitis architecto non. Ducimus dolorum animi quod laboriosam ex tempore consequuntur harum placeat aperiam! Earum modi ad dicta corrupti.
                </md-layout-item>
                <md-layout-item height="64" ${ref(this.south)} region="south" modal>
                        south
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perspiciatis impedit quis, assumenda odit saepe harum. Dolorem eum qui dicta nobis repudiandae. Assumenda dolore itaque repudiandae suscipit consequatur enim.
                        Illum, non, eum ducimus iure ullam ratione nulla impedit natus repudiandae aspernatur, perspiciatis doloremque iste recusandae animi corporis labore. Blanditiis et nobis modi quidem, sint autem porro at doloribus soluta.
                        Veniam laboriosam rerum, obcaecati similique ducimus sint assumenda odit voluptatem perspiciatis facilis deserunt dolorum eius culpa. Laudantium et a eum minus, commodi error, praesentium harum aspernatur natus, vitae ea architecto!
                        Molestias assumenda quis, eveniet fugiat adipisci accusantium dolorum saepe quod pariatur provident. Unde blanditiis deleniti maiores aspernatur culpa repellat sit saepe, dolorum nostrum sunt. Beatae consectetur similique placeat et reiciendis?
                        Delectus odio repudiandae eveniet mollitia, facilis quod? Explicabo, pariatur. Minus quos debitis architecto non. Ducimus dolorum animi quod laboriosam ex tempore consequuntur harum placeat aperiam! Earum modi ad dicta corrupti.
                </md-layout-item>
                <md-layout-item width="256" ${ref(this.west)} region="west" modal>
                        west
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure perspiciatis impedit quis, assumenda odit saepe harum. Dolorem eum qui dicta nobis repudiandae. Assumenda dolore itaque repudiandae suscipit consequatur enim.
                        Illum, non, eum ducimus iure ullam ratione nulla impedit natus repudiandae aspernatur, perspiciatis doloremque iste recusandae animi corporis labore. Blanditiis et nobis modi quidem, sint autem porro at doloribus soluta.
                        Veniam laboriosam rerum, obcaecati similique ducimus sint assumenda odit voluptatem perspiciatis facilis deserunt dolorum eius culpa. Laudantium et a eum minus, commodi error, praesentium harum aspernatur natus, vitae ea architecto!
                        Molestias assumenda quis, eveniet fugiat adipisci accusantium dolorum saepe quod pariatur provident. Unde blanditiis deleniti maiores aspernatur culpa repellat sit saepe, dolorum nostrum sunt. Beatae consectetur similique placeat et reiciendis?
                        Delectus odio repudiandae eveniet mollitia, facilis quod? Explicabo, pariatur. Minus quos debitis architecto non. Ducimus dolorum animi quod laboriosam ex tempore consequuntur harum placeat aperiam! Earum modi ad dicta corrupti.
                </md-layout-item>
                <md-layout-item region="center">
                    <md-button label="north" @click="${this.handleClickNorth}"></md-button>
                    <md-button label="east" @click="${this.handleClickEast}"></md-button>
                    <md-button label="south" @click="${this.handleClickSouth}"></md-button>
                    <md-button label="west" @click="${this.handleClickWest}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickNorth() {
        this.north.value.toggle()
    }
    handleClickEast() {
        this.east.value.toggle()
    }
    handleClickSouth() {
        this.south.value.toggle()
    }
    handleClickWest() {
        this.west.value.toggle()
    }
}
customElements.define("demo-layout-modal", DemoLayoutModal);
export default document.createElement("demo-layout-modal");

```
### layout
src\demo\components\layout.js

```js
import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayout extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-layout-item height="64" ${ref(this.north)} region="north">
                        north
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam a, dolorum possimus totam maiores quas harum! Aperiam repellat nesciunt quod quibusdam voluptas porro exercitationem impedit. Obcaecati nulla unde tempora?
                        Iusto eligendi consequatur molestias. Fugit numquam blanditiis asperiores tempore perferendis amet rem architecto non, repellat eligendi vero porro expedita nostrum quo eveniet nemo unde, quis quisquam! Ex vitae eligendi provident!
                        Aperiam vel totam ipsam, nobis repellendus distinctio veritatis, tempora eius laudantium delectus provident repellat iste ut earum necessitatibus odit facilis doloribus quos assumenda fuga molestias! Fugit hic deleniti laborum odio?
                        Incidunt quia quasi a reprehenderit vel. Odit tempora incidunt numquam unde esse ipsum eius culpa provident repellendus nisi, non laborum vero, consequatur quod optio temporibus iusto voluptatum laboriosam. Nesciunt, ipsa?
                        Dicta natus aspernatur, tempora minus maxime deserunt commodi accusamus accusantium, omnis adipisci vitae tenetur illo nobis a, atque magni impedit quos fugiat numquam consectetur. Dolorum nostrum asperiores modi quibusdam voluptatum.
                </md-layout-item>
                <md-layout-item width="256" ${ref(this.east)} region="east">
                        east
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam a, dolorum possimus totam maiores quas harum! Aperiam repellat nesciunt quod quibusdam voluptas porro exercitationem impedit. Obcaecati nulla unde tempora?
                        Iusto eligendi consequatur molestias. Fugit numquam blanditiis asperiores tempore perferendis amet rem architecto non, repellat eligendi vero porro expedita nostrum quo eveniet nemo unde, quis quisquam! Ex vitae eligendi provident!
                        Aperiam vel totam ipsam, nobis repellendus distinctio veritatis, tempora eius laudantium delectus provident repellat iste ut earum necessitatibus odit facilis doloribus quos assumenda fuga molestias! Fugit hic deleniti laborum odio?
                        Incidunt quia quasi a reprehenderit vel. Odit tempora incidunt numquam unde esse ipsum eius culpa provident repellendus nisi, non laborum vero, consequatur quod optio temporibus iusto voluptatum laboriosam. Nesciunt, ipsa?
                        Dicta natus aspernatur, tempora minus maxime deserunt commodi accusamus accusantium, omnis adipisci vitae tenetur illo nobis a, atque magni impedit quos fugiat numquam consectetur. Dolorum nostrum asperiores modi quibusdam voluptatum.
                </md-layout-item>
                <md-layout-item height="64" ${ref(this.south)} region="south">
                        south
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam a, dolorum possimus totam maiores quas harum! Aperiam repellat nesciunt quod quibusdam voluptas porro exercitationem impedit. Obcaecati nulla unde tempora?
                        Iusto eligendi consequatur molestias. Fugit numquam blanditiis asperiores tempore perferendis amet rem architecto non, repellat eligendi vero porro expedita nostrum quo eveniet nemo unde, quis quisquam! Ex vitae eligendi provident!
                        Aperiam vel totam ipsam, nobis repellendus distinctio veritatis, tempora eius laudantium delectus provident repellat iste ut earum necessitatibus odit facilis doloribus quos assumenda fuga molestias! Fugit hic deleniti laborum odio?
                        Incidunt quia quasi a reprehenderit vel. Odit tempora incidunt numquam unde esse ipsum eius culpa provident repellendus nisi, non laborum vero, consequatur quod optio temporibus iusto voluptatum laboriosam. Nesciunt, ipsa?
                        Dicta natus aspernatur, tempora minus maxime deserunt commodi accusamus accusantium, omnis adipisci vitae tenetur illo nobis a, atque magni impedit quos fugiat numquam consectetur. Dolorum nostrum asperiores modi quibusdam voluptatum.
                </md-layout-item>
                <md-layout-item width="256" ${ref(this.west)} region="west">
                        west
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ullam a, dolorum possimus totam maiores quas harum! Aperiam repellat nesciunt quod quibusdam voluptas porro exercitationem impedit. Obcaecati nulla unde tempora?
                        Iusto eligendi consequatur molestias. Fugit numquam blanditiis asperiores tempore perferendis amet rem architecto non, repellat eligendi vero porro expedita nostrum quo eveniet nemo unde, quis quisquam! Ex vitae eligendi provident!
                        Aperiam vel totam ipsam, nobis repellendus distinctio veritatis, tempora eius laudantium delectus provident repellat iste ut earum necessitatibus odit facilis doloribus quos assumenda fuga molestias! Fugit hic deleniti laborum odio?
                        Incidunt quia quasi a reprehenderit vel. Odit tempora incidunt numquam unde esse ipsum eius culpa provident repellendus nisi, non laborum vero, consequatur quod optio temporibus iusto voluptatum laboriosam. Nesciunt, ipsa?
                        Dicta natus aspernatur, tempora minus maxime deserunt commodi accusamus accusantium, omnis adipisci vitae tenetur illo nobis a, atque magni impedit quos fugiat numquam consectetur. Dolorum nostrum asperiores modi quibusdam voluptatum.
                </md-layout-item>
                <md-layout-item region="center">
                    <md-button label="north" @click="${this.handleClickNorth}"></md-button>
                    <md-button label="east" @click="${this.handleClickEast}"></md-button>
                    <md-button label="south" @click="${this.handleClickSouth}"></md-button>
                    <md-button label="west" @click="${this.handleClickWest}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickNorth() {
        this.north.value.toggle()
    }
    handleClickEast() {
        this.east.value.toggle()
    }
    handleClickSouth() {
        this.south.value.toggle()
    }
    handleClickWest() {
        this.west.value.toggle()
    }
}
customElements.define("demo-layout", DemoLayout);
export default document.createElement("demo-layout");

```
## src\material\components\layout

### layout-item
src\material\components\layout\layout-item.js

```js
import { MdElement } from "../../base/element.js";

class MdLayoutItem extends MdElement {
    static properties = {
        region: { type: String },
        modal: { type: Boolean },
        open: { type: Boolean, reflect: true },
        width: { type: Number },
        height: { type: Number },
    };

    regions = ["center", "west", "north", "east", "south"];

    get regionSize() {
        return {
            north: { property: "--md-comp-layout-north-height", value: this.height + "px" },
            south: { property: "--md-comp-layout-south-height", value: this.height + "px" },
            west: { property: "--md-comp-layout-west-width", value: this.width + "px" },
            east: { property: "--md-comp-layout-east-width", value: this.width + "px" },
        };
    }

    get regionTranslate() {
        return {
            north: { property: "--md-comp-layout-north-translate-y", value: (this.modal ? 0 : this.height) + "px" },
            south: { property: "--md-comp-layout-south-translate-y", value: this.height + "px" },
            west: { property: "--md-comp-layout-west-translate-x", value: (this.modal ? 0 : this.width) + "px" },
            east: { property: "--md-comp-layout-east-translate-x", value: this.width + "px" },
        };
    }

    constructor() {
        super();

        this.region = "center";

        this._handleLayoutItemTransitionend = this._handleLayoutItemTransitionend.bind(this);
        this._handleLayoutItemScrimClick = this._handleLayoutItemScrimClick.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__item");

        this.on("transitionend", this._handleLayoutItemTransitionend);

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        }
        this.scrimElement.on("onScrimClick", this._handleLayoutItemScrimClick);

        this._restoreState();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this._cleanState();

        if (this.scrimElement) {
            this.scrimElement.off("onScrimClick", this._handleLayoutItemScrimClick);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.off("transitionend", this._handleLayoutItemTransitionend);

        this.classList.remove("md-layout__item");
    }

    _restoreState() {
        this.requestUpdate('open', false);
    }

    _cleanState() {
        this.classList.toggle(`md-layout__item--open`, false);

        const regionTranslate = this.regionTranslate[this.region];
        if (regionTranslate) {
            this.parentElement.style.removeProperty(regionTranslate.property);
            this.parentElement.classList.toggle(`md-layout--open`, false);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-layout__item--${region}`, this.region === region);
            });
        }

        if (_changedProperties.has("modal")) {
            this.classList.toggle(`md-layout__item--modal`, Boolean(this.modal));
        }

        if (_changedProperties.has("width") || _changedProperties.has("height")) {
            const regionSize = this.regionSize[this.region];
            this.parentElement.style.setProperty(regionSize.property, regionSize.value);
        }

        if (_changedProperties.has("open")) {
            this.classList.toggle(`md-layout__item--open`, Boolean(this.open));

            const regionTranslate = this.regionTranslate[this.region];
            if(regionTranslate){
                if (this.open) {
                    this.parentElement.style.setProperty(regionTranslate.property, regionTranslate.value);
                    this.parentElement.classList.toggle(`md-layout--open`, true);
                } else {
                    this.parentElement.style.removeProperty(regionTranslate.property);
                }
            }

            if (this.modal) {
                if (this.open) {
                    this.scrimElement.show();
                } else {
                    this.scrimElement.close();
                }
            }
        }
    }

    _handleLayoutItemTransitionend(event) {
        if (this.open) {
            this.parentElement.classList.toggle(`md-layout--open`, false);
            this.emit("onLayoutItemShowed", { event, element: this });
        } else {
            this.emit("onLayoutItemClosed", { event, element: this });
        }
    }

    _handleLayoutItemScrimClick(event) {
        this.close();
    }

    show() {
        this.open = true;

        this.emit("onLayoutItemShow", { element: this });
    }

    close() {
        this.open = false;

        this.emit("onLayoutItemClose", { element: this });
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-layout-item", MdLayoutItem);

export { MdLayoutItem };

```
### layout
src\material\components\layout\layout.js

```js
import { MdElement } from "../../base/element.js";

class MdLayout extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout");
    }
}

customElements.define("md-layout", MdLayout);

export { MdLayout };

```
### layout
src\material\components\layout\layout.scss

```scss
.md-layout {
    --md-comp-layout-north-height: 64px;
    --md-comp-layout-south-height: 64px;
    --md-comp-layout-west-width: 256px;
    --md-comp-layout-east-width: 256px;
    --md-comp-layout-north-translate-y: 0px;
    --md-comp-layout-south-translate-y: 0px;
    --md-comp-layout-west-translate-x: 0px;
    --md-comp-layout-east-translate-x: 0px;

    display: grid;
    grid-template-rows: var(--md-comp-layout-north-translate-y) 1fr var(--md-comp-layout-south-translate-y);
    grid-template-columns: var(--md-comp-layout-west-translate-x) 1fr var(--md-comp-layout-east-translate-x);
    grid-template-areas:
        "north north north"
        "west center east"
        "south south south";
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    //will-change: grid-template-columns, grid-template-rows;
    transition-property: grid-template-columns, grid-template-rows;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-layout--open {
    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-layout__item {
    width: 100%;
    height: 100%;
    overflow: auto;
    //will-change: transform;
    transition-property: transform;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));

    &.md-layout__item--modal {
        z-index: 20;
        background-color: var(--md-sys-color-surface-container);
        color: var(--md-sys-color-on-surface);
    }

    &.md-layout__item--open {
        transform: translate3d(0, 0, 0);
        transition-duration: var(--md-sys-motion-duration-short3);
        transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    }
}

.md-layout__item--north {
    grid-area: north;
    height: var(--md-comp-layout-north-height);
    transform: translate3d(0, calc(0px - var(--md-comp-layout-north-height)), 0);
}

.md-layout__item--south {
    grid-area: south;
    height: var(--md-comp-layout-south-height);
    transform: translate3d(0, var(--md-comp-layout-south-height), 0);
}

.md-layout__item--west {
    grid-area: west;
    width: var(--md-comp-layout-west-width);
    transform: translate3d(calc(0px - var(--md-comp-layout-west-width)), 0, 0);
}

.md-layout__item--east {
    grid-area: east;
    width: var(--md-comp-layout-east-width);
    transform: translate3d(var(--md-comp-layout-east-width), 0, 0);
}

.md-layout__item--center {
    grid-area: center;
}

```
