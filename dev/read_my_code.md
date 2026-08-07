## src\demo\components

### dialog

src\demo\components\dialog.js

```js
import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoDialog extends MdElement {
    constructor() {
        super();
        this.handleClick2 = this.handleClick2.bind(this);
    }
    /* prettier-ignore */
    render(){
        return html`
                
            <md-dialog id="dialog0" style="width:310px;" >
                <md-dialog-header
                    headline="Basic dialog title"
                ></md-dialog-header>
                <md-dialog-body>
                    <md-dialog-main>
                        A dialog is a modal window that
                        appears in front of app content to
                        provide critical information or prompt
                        for a decision to be made.
                    </md-dialog-main>
                    <md-dialog-footer
                        .buttons="${[
                            {label:'Action 2',color:'text'},
                            {label:'Action 1',color:'text'},
                        ]}"
                    ></md-dialog-footer>
                </md-dialog-body>
            </md-dialog>
                
            <md-dialog heroIcon id="dialog1" style="width:340px;">
                <md-dialog-header
                    .leading="${[
                        {component:'icon',icon:'image'}
                    ]}"
                    headline="Dialog with hero icon"
                ></md-dialog-header>
                <md-dialog-body>
                    <md-dialog-main>                        
                        A dialog is a modal window that appears in front
                        of app content to provide critical
                        information or ask for a decision.
                    </md-dialog-main>
                    <md-dialog-footer
                        .buttons="${[
                            {label:'Cancel',color:'text'},
                            {label:'Accept',color:'text'},
                        ]}"
                    ></md-dialog-footer>
                </md-dialog-body>
            </md-dialog>
 
            <md-dialog variant="full-screen" id="dialog2" >
                <md-dialog-header
                    .leading="${[
                        {component:'icon',icon:'image'}
                    ]}"
                    .trailing="${[
                        {component:'button',label:'Save',color:'text',onDialogButtonClick:this.handleClick2}
                    ]}"
                    headline="Full-screen dialog title"
                ></md-dialog-header>
                <md-dialog-body>
                    <md-dialog-main></md-dialog-main>
                </md-dialog-body>
            </md-dialog>
             
            <md-button label="Basic dialog title" @click="${this.handleClick0}"></md-button>
            <md-button label="Dialog with hero icon" @click="${this.handleClick1}"></md-button>
            <md-button label="Full-screen dialog title" @click="${this.handleClick2}"></md-button>

        `
    }

    get dialog0() {
        return this.querySelector("#dialog0");
    }
    get dialog1() {
        return this.querySelector("#dialog1");
    }
    get dialog2() {
        return this.querySelector("#dialog2");
    }

    handleClick0(event) {
        this.dialog0.show();
    }
    handleClick1(event) {
        this.dialog1.show();
    }
    handleClick2(event) {
        this.dialog2.toggle();
    }
}
customElements.define("demo-dialog", DemoDialog);
export default document.createElement("demo-dialog");
```

## src\material\components\dialog

### dialog-body

src\material\components\dialog\dialog-body.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialogBody extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__body");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__body");
    }
}

customElements.define("md-dialog-body", MdDialogBody);

export { MdDialogBody };
```

### dialog-footer

src\material\components\dialog\dialog-footer.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdDialogFooter extends MdElement {
    static properties = {
        buttons: { type: Array },
    };

    constructor() {
        super();

        this.buttons = [];
    }

    /* prettier-ignore */
    renderButton(properties){
        return html`
            <md-button 
                class="md-dialog__button"
                style="${styleMap(properties.style??{})}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .label="${ifDefined(properties.label)}"
                .icon="${ifDefined(properties.icon)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .type="${ifDefined(properties.type)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                @click="${properties.onDialogButtonClick}"
            ></md-button>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.buttons?.length?this.buttons.map(({component,...properties}) => this.renderButton(properties)):nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__footer");
    }
}

customElements.define("md-dialog-footer", MdDialogFooter);

export { MdDialogFooter };
```

### dialog-header

src\material\components\dialog\dialog-header.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { choose } from "lit/directives/choose.js";

class MdDialogHeader extends MdElement {
    static properties = {
        leading: { type: Array },
        headline: { type: String },
        trailing: { type: Array },
    };

    constructor() {
        super();

        this.leading = [];
        this.trailing = [];
    }

    /* prettier-ignore */
    renderAvatar(properties){
        return html`
            <md-image 
                class="md-dialog__avatar"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'round')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderIcon(properties){
        return html`
            <md-icon 
                class="md-dialog__icon"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
            ></md-icon>
        `
    }

    /* prettier-ignore */
    renderIconButton(properties){
        return html`
            <md-icon-button 
                class="md-dialog__icon-button"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .width="${ifDefined(properties.width)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
            ></md-icon-button>
        `
    }

    /* prettier-ignore */
    renderButton(properties){
        return html`
            <md-button 
                class="md-dialog__button"
                style="${styleMap(properties.style??{})}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .label="${ifDefined(properties.label)}"
                .icon="${ifDefined(properties.icon)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .type="${ifDefined(properties.type)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                @click="${properties.onDialogButtonClick}"
            ></md-button>
        `
    }

    /* prettier-ignore */
    renderComponent(component,properties){
        return choose(component,[
            ['avatar', () => this.renderAvatar(properties)],
            ['icon', () => this.renderIcon(properties)],
            ['icon-button', () => this.renderIconButton(properties)],
            ['button', () => this.renderButton(properties)],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderLeading(){
        return html`
            <div class="md-dialog__leading">
                ${this.leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderTrailing(){
        return html`
            <div class="md-dialog__trailing">
                ${this.trailing.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderContent(){
        return html`
            <div class="md-dialog__content">
                ${this.headline?html`<div class="md-dialog__headline">${this.headline}</div>`:nothing}
            </div>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.leading?.length?this.renderLeading():nothing}
            ${(this.headline)?this.renderContent():nothing}
            ${this.trailing?.length?this.renderTrailing():nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__header");
    }
}

customElements.define("md-dialog-header", MdDialogHeader);

export { MdDialogHeader };
```

### dialog-main

src\material\components\dialog\dialog-main.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialogMain extends MdElement {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__main");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__main");
    }
}

customElements.define("md-dialog-main", MdDialogMain);

export { MdDialogMain };
```

### dialog

src\material\components\dialog\dialog.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialog extends MdElement {
    static properties = {
        open: { type: Boolean, reflect: true },
        variant: { type: String },
        heroIcon: { type: Boolean },
    };

    variants = ["basic", "full-screen"];

    constructor() {
        super();

        this.variant = "basic";

        this._handleDialogScrimClick = this._handleDialogScrimClick.bind(this);
        this._handleDialogAnimationend = this._handleDialogAnimationend.bind(this);
        this._handleWindowKeydown = this._handleWindowKeydown.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.tabIndex = 0;

        this.classList.add("md-dialog");

        this.on("animationend", this._handleDialogAnimationend);

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        }
        this.scrimElement.on("onScrimClick", this._handleDialogScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        window.removeEventListener("keydown", this._handleWindowKeydown);

        if (this.scrimElement) {
            this.scrimElement.off("onScrimClick", this._handleDialogScrimClick);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.off("animationend", this._handleDialogAnimationend);

        this.classList.remove("md-dialog");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-dialog--open");
            } else {
                this.classList.remove("md-dialog--open");
                this.classList.add("md-dialog--close");
            }
        }

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-dialog--${variant}`, this.variant === variant);
            });
        }

        if (changedProperties.has("heroIcon")) {
            this.classList.toggle(`md-dialog--hero-icon`, !!this.heroIcon);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("open") && this.variant === "basic") {
            if (this.open) {
                this.scrimElement.show();
            } else {
                this.scrimElement.close();
            }
        }
    }

    _handleDialogScrimClick(event) {
        this.close();
    }

    _handleDialogAnimationend(event) {
        if (!this.open) {
            this.classList.remove("md-dialog--close");
        }
    }

    _handleWindowKeydown(event) {
        if (event.code === "Escape") {
            event.preventDefault();
            this.close();
        }
    }

    show() {
        if (this.open) {
            return;
        }
        this.open = true;
        this.focus();
        window.addEventListener("keydown", this._handleWindowKeydown);
    }

    close() {
        if (!this.open) {
            return;
        }
        this.open = false;
        window.removeEventListener("keydown", this._handleWindowKeydown);
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-dialog", MdDialog);

export { MdDialog };
```

### dialog

src\material\components\dialog\dialog.scss

```scss
@use "../../shared/mixins.scss";

@keyframes basic-dialog-show {
    from {
        opacity: 0;
        transform: translate3d(-50%, -100%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(-50%, -50%, 0);
    }
}

@keyframes basic-dialog-close {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate3d(-50%, -100%, 0);
    }
}

@keyframes full-screen-dialog-show {
    from {
        opacity: 0;
        transform: translate3d(-50%, 2000px, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(-50%, -50%, 0);
    }
}

@keyframes full-screen-dialog-close {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate3d(-50%, 2000px, 0);
    }
}

.md-dialog {
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-width: 560px;
    background-color: var(--md-sys-color-surface-container-high);
    color: var(--md-sys-color-on-surface-variant);
    border-radius: var(--md-sys-shape-corner-extra-large);
    box-shadow: var(--md-sys-elevation-level3);
    position: absolute;
    z-index: 20;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    opacity: 0;
    pointer-events: none;

    @include mixins.initialize();
}

.md-dialog__header {
    display: flex;
    align-items: center;
    padding: 24px;
    gap: 0 16px;

    + .md-dialog__body {
        margin-top: -32px;
    }
}

.md-dialog__leading {
    display: inline-flex;
    align-items: center;
    gap: 0 24px;
}

.md-dialog__content {
    flex: 1;
    min-width: 0;
}

.md-dialog__headline {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-headline-small();
}

.md-dialog__trailing {
    display: inline-flex;
    align-items: center;
    gap: 0 24px;

    .md-dialog__icon-button {
        margin: 0 -8px;
    }

    .md-dialog__button {
        margin: 0 -8px;
    }
}

// .md-dialog__icon {}

.md-dialog--hero-icon .md-dialog__header {
    flex-direction: column;
    gap: 24px 0;
}

.md-dialog__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
}

.md-dialog__main {
    flex: 1;
    padding: 0 24px;
    margin: 24px 0;
    overflow: auto;
    @include mixins.typescale-body-medium();

    + .md-dialog__footer {
        margin-top: -24px;
    }
}

.md-dialog__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 24px;
    gap: 0 8px;
}

.md-dialog--close {
    animation-name: basic-dialog-close;
    animation-duration: var(--md-sys-motion-duration-short2);
    animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-dialog--open {
    opacity: 1;
    pointer-events: all;
    animation-name: basic-dialog-show;
    animation-duration: var(--md-sys-motion-duration-short3);
    animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

// .md-dialog--basic{}

.md-dialog--full-screen {
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface-variant);

    .md-dialog__header {
        padding-top: 12px;
        padding-bottom: 12px;
        min-height: 64px;
    }

    .md-dialog__headline {
        @include mixins.typescale-title-large();
    }

    &.md-dialog--close {
        animation-name: full-screen-dialog-close;
    }

    &.md-dialog--open {
        animation-name: full-screen-dialog-show;
    }
}
```
