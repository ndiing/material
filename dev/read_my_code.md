## src\material\components\dialog

### dialog

src\material\components\dialog\dialog.js

```js
import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialog extends MdElement {
    static properties = {
        open: { type: Boolean },
    };

    constructor() {
        super();
        this._handleDialogScrimClick = this._handleDialogScrimClick.bind(this);
        this._handleDialogAnimationend = this._handleDialogAnimationend.bind(this);
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

        this.scrimElement.off("onScrimClick", this._handleDialogScrimClick);
        this.scrimElement.remove();
        this.scrimElement = null;

        this.off("animationend", this._handleDialogAnimationend);

        this.classList.remove("md-dialog");
    }

    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-dialog--open");
                this.scrimElement.show();
            } else {
                this.classList.remove("md-dialog--open");
                this.classList.add("md-dialog--close");
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

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
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

@keyframes dialog-show {
    0% {
        height: 0;
        transform: translate3d(-50%, calc(-50% - 25vh), 0);
        overflow: hidden;
    }
    100% {
        overflow: hidden;
    }
}
@keyframes dialog-close {
    0% {
        visibility: visible;
    }
    100% {
        transform: translate3d(-50%, calc(-50% - 25vh), 0);
        opacity: 0;
    }
}
@keyframes dialog-main-show {
    0% {
    }
    100% {
        overflow: hidden;
    }
}
@keyframes dialog-main-close {
    0% {
        overflow: hidden;
    }
    100% {
        overflow: hidden;
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
    visibility: hidden;
}
.md-dialog--close {
    animation-name: dialog-close;
    animation-duration: var(--md-sys-motion-duration-short2);
    animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
    .md-dialog__main {
        animation-name: dialog-main-close;
        animation-duration: var(--md-sys-motion-duration-short2);
        animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
    }
}
.md-dialog--open {
    visibility: visible;
    animation-name: dialog-show;
    animation-duration: var(--md-sys-motion-duration-short3);
    animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    .md-dialog__main {
        animation-name: dialog-main-show;
        animation-duration: var(--md-sys-motion-duration-short3);
        animation-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    }
}
.md-dialog__header {
    display: flex;
    align-items: center;
    padding: 24px 24px;
    + .md-dialog__body {
        margin-top: -32px;
    }
}

.md-dialog__leading {
    display: inline-flex;
    align-items: center;
}
.md-dialog__content {
    flex: 1;
}
.md-dialog__headline {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-headline-small();

    // // full
    // @include mixins.typescale-title-large();
}
.md-dialog__trailing {
    display: inline-flex;
    align-items: center;
}

.md-dialog__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
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
    padding: 24px 24px;
    gap: 0 4px;
}
```
