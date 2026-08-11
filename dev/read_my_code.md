## src\material\components\split-button

### split-button

src\material\components\split-button\split-button.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { renderButton, renderIconButton } from "../../core/template.js";
import { RippleController } from "../../controller/ripple.js";

class MdSplitButton extends MdElement {
    static properties = {
        icon: { type: String },
        label: { type: String },
        trailingIcon: { type: String },
        size: { type: String },
        color: { type: String },
        selected: { type: Boolean },
    };

    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    colors = ["elevated", "filled", "tonal", "outlined"];

    constructor() {
        super();

        this.size = "small";
        this.color = "filled";
        this.trailingIcon = "keyboard_arrow_down";

        this.leadingRippleController = new RippleController(this, {
            container: ".md-split-button__leading",
            trigger: ".md-split-button__leading",
        });
        this.trailingRippleController = new RippleController(this, {
            container: ".md-split-button__trailing",
            trigger: ".md-split-button__trailing",
        });
    }

    /* prettier-ignore */
    render(){
        return html`
            <div 
                class="md-split-button__leading"
                tabindex="0"
                @click="${this._handleSplitButtonClick}"
                @keydown="${this._handleSplitButtonKeydown}"
            >
                ${this.icon?html`<md-icon class="md-split-button__icon" .icon="${this.icon}"></md-icon>`:nothing}
                ${this.label?html`<div class="md-split-button__label">${this.label}</div>`:nothing}
            </div>
            <div 
                class="md-split-button__trailing"
                tabindex="0"
                @click="${this._handleSplitButtonIconClick}"
                @keydown="${this._handleSplitButtonIconKeydown}"
            >
                <md-icon class="md-split-button__icon" .icon="${this.trailingIcon}"></md-icon>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-split-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-split-button");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-split-button--${color}`, this.color === color);
            });
        }
        if (_changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-split-button--${size}`, this.size === size);
            });
        }
        if (_changedProperties.has("selected")) {
            this.classList.toggle(`md-split-button--selected`, Boolean(this.selected));
        }
    }

    _handleSplitButtonClick(event) {
        this.emit("onSplitButtonClick", { event, element: this });
    }

    _handleSplitButtonKeydown(event) {
        if (event.key === "Enter" || event.code === "Space") {
            event.preventDefault();
            this.emit("onSplitButtonPress", { event, element: this });
        }
        this.emit("onSplitButtonKeydown", { event, element: this });
    }

    _handleSplitButtonIconClick(event) {
        this.toggleSelect(event);
        this.emit("onSplitButtonIconClick", { event, element: this });
    }

    _handleSplitButtonIconKeydown(event) {
        if (event.key === "Enter" || event.code === "Space") {
            event.preventDefault();
            this.emit("onSplitButtonPress", { event, element: this });
            this.toggleSelect(event);
        }
        this.emit("onSplitButtonKeydown", { event, element: this });
    }

    toggleSelect(event = {}) {
        this.selected = !this.selected;
        this.emit("onSplitButtonSelection", { event, element: this });
    }
}

customElements.define("md-split-button", MdSplitButton);

export { MdSplitButton };
```

### split-button

src\material\components\split-button\split-button.scss

```scss
@use "../../shared/mixins.scss";

.md-split-button {
    --md-comp-split-button-gap: 2px;
    // leading icon
    --md-comp-split-button-leading-icon-height: 20px;
    // leading label
    --md-comp-split-button-leading-label-font-family: var(--md-sys-typescale-label-large-font);
    --md-comp-split-button-leading-label-font-weight: var(--md-sys-typescale-label-large-weight);
    --md-comp-split-button-leading-label-font-size: var(--md-sys-typescale-label-large-size);
    --md-comp-split-button-leading-label-letter-spacing: var(--md-sys-typescale-label-large-tracking);
    --md-comp-split-button-leading-label-line-height: var(--md-sys-typescale-label-large-line-height);
    // leading
    --md-comp-split-button-leading-height: 40px;
    --md-comp-split-button-leading-padding-left: 16px;
    --md-comp-split-button-leading-padding-right: 12px;
    --md-comp-split-button-leading-gap: 8px;
    --md-comp-split-button-leading-border-top-right-radius: 4px;
    --md-comp-split-button-leading-border-bottom-right-radius: 4px;
    // trailing
    --md-comp-split-button-trailing-height: 40px;
    --md-comp-split-button-trailing-padding-left: 12px;
    --md-comp-split-button-trailing-padding-right: 14px;
    --md-comp-split-button-trailing-border-top-left-radius: 4px;
    --md-comp-split-button-trailing-border-bottom-left-radius: 4px;
    // trailing icon
    --md-comp-split-button-trailing-icon-height: 22px;
    // selected trailing
    --md-comp-split-button-selected-trailing-padding-left: 13px;
    --md-comp-split-button-selected-trailing-padding-right: 13px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0 var(--md-comp-split-button-gap);

    .md-split-button__icon {
        font-size: var(--md-comp-split-button-leading-icon-height);
        height: var(--md-comp-split-button-leading-icon-height);
        width: var(--md-comp-split-button-leading-icon-height);
    }

    .md-split-button__label {
        font-family: var(--md-comp-split-button-leading-label-font-family);
        font-weight: var(--md-comp-split-button-leading-label-font-weight);
        font-size: var(--md-comp-split-button-leading-label-font-size);
        letter-spacing: var(--md-comp-split-button-leading-label-letter-spacing);
        line-height: var(--md-comp-split-button-leading-label-line-height);
    }

    .md-split-button__leading {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--md-comp-split-button-leading-height);
        padding-left: var(--md-comp-split-button-leading-padding-left);
        padding-right: var(--md-comp-split-button-leading-padding-right);
        gap: 0 var(--md-comp-split-button-leading-gap);
        border-radius: calc(var(--md-comp-split-button-leading-height) / 2);
        border-top-right-radius: var(--md-comp-split-button-leading-border-top-right-radius);
        border-bottom-right-radius: var(--md-comp-split-button-leading-border-bottom-right-radius);
    }

    .md-split-button__trailing {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--md-comp-split-button-trailing-height);
        padding-left: var(--md-comp-split-button-trailing-padding-left);
        padding-right: var(--md-comp-split-button-trailing-padding-right);
        border-radius: calc(var(--md-comp-split-button-trailing-height) / 2);
        border-top-left-radius: var(--md-comp-split-button-trailing-border-top-left-radius);
        border-bottom-left-radius: var(--md-comp-split-button-trailing-border-bottom-left-radius);

        .md-split-button__icon {
            font-size: var(--md-comp-split-button-trailing-icon-height);
            height: var(--md-comp-split-button-trailing-icon-height);
            width: var(--md-comp-split-button-trailing-icon-height);
        }
    }

    &.md-split-button--selected {
        .md-split-button__trailing {
            padding-left: var(--md-comp-split-button-selected-trailing-padding-left);
            padding-right: var(--md-comp-split-button-selected-trailing-padding-right);
            border-radius: calc(var(--md-comp-split-button-trailing-height) / 2);

            .md-split-button__icon {
                transform: rotate(180deg);
            }
        }
    }
}

.md-split-button__leading,
.md-split-button__trailing {
    //will-change: border-radius;
    transition-property: border-radius;
    transition-duration: var(--md-sys-motion-duration-short1);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));

    &:active {
        transition-duration: var(--md-sys-motion-duration-short2);
        transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
    }
}

.md-split-button__trailing {
    .md-split-button__icon {
        //will-change: transform;
        transition-property: transform;
        transition-duration: var(--md-sys-motion-duration-short1);
        transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
    }

    &:active {
        .md-split-button__icon {
            transition-duration: var(--md-sys-motion-duration-short2);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
        }
    }
}

.md-split-button--extra-small {
    --md-comp-split-button-gap: 2px;
    // leading icon
    --md-comp-split-button-leading-icon-height: 20px;
    // leading label
    --md-comp-split-button-leading-label-font-family: var(--md-sys-typescale-label-large-font);
    --md-comp-split-button-leading-label-font-weight: var(--md-sys-typescale-label-large-weight);
    --md-comp-split-button-leading-label-font-size: var(--md-sys-typescale-label-large-size);
    --md-comp-split-button-leading-label-letter-spacing: var(--md-sys-typescale-label-large-tracking);
    --md-comp-split-button-leading-label-line-height: var(--md-sys-typescale-label-large-line-height);
    // leading
    --md-comp-split-button-leading-height: 32px;
    --md-comp-split-button-leading-padding-left: 12px;
    --md-comp-split-button-leading-padding-right: 10px;
    --md-comp-split-button-leading-gap: 4px;
    --md-comp-split-button-leading-border-top-right-radius: 4px;
    --md-comp-split-button-leading-border-bottom-right-radius: 4px;
    // trailing
    --md-comp-split-button-trailing-height: 32px;
    --md-comp-split-button-trailing-padding-left: 12px;
    --md-comp-split-button-trailing-padding-right: 14px;
    --md-comp-split-button-trailing-border-top-left-radius: 4px;
    --md-comp-split-button-trailing-border-bottom-left-radius: 4px;
    // trailing icon
    --md-comp-split-button-trailing-icon-height: 22px;
    // selected trailing
    --md-comp-split-button-selected-trailing-padding-left: 13px;
    --md-comp-split-button-selected-trailing-padding-right: 13px;
}

.md-split-button--small {
    --md-comp-split-button-gap: 2px;
    // leading icon
    --md-comp-split-button-leading-icon-height: 20px;
    // leading label
    --md-comp-split-button-leading-label-font-family: var(--md-sys-typescale-label-large-font);
    --md-comp-split-button-leading-label-font-weight: var(--md-sys-typescale-label-large-weight);
    --md-comp-split-button-leading-label-font-size: var(--md-sys-typescale-label-large-size);
    --md-comp-split-button-leading-label-letter-spacing: var(--md-sys-typescale-label-large-tracking);
    --md-comp-split-button-leading-label-line-height: var(--md-sys-typescale-label-large-line-height);
    // leading
    --md-comp-split-button-leading-height: 40px;
    --md-comp-split-button-leading-padding-left: 16px;
    --md-comp-split-button-leading-padding-right: 12px;
    --md-comp-split-button-leading-gap: 8px;
    --md-comp-split-button-leading-border-top-right-radius: 4px;
    --md-comp-split-button-leading-border-bottom-right-radius: 4px;
    // trailing
    --md-comp-split-button-trailing-height: 40px;
    --md-comp-split-button-trailing-padding-left: 12px;
    --md-comp-split-button-trailing-padding-right: 14px;
    --md-comp-split-button-trailing-border-top-left-radius: 4px;
    --md-comp-split-button-trailing-border-bottom-left-radius: 4px;
    // trailing icon
    --md-comp-split-button-trailing-icon-height: 22px;
    // selected trailing
    --md-comp-split-button-selected-trailing-padding-left: 13px;
    --md-comp-split-button-selected-trailing-padding-right: 13px;
}

.md-split-button--medium {
    --md-comp-split-button-gap: 2px;
    // leading icon
    --md-comp-split-button-leading-icon-height: 24px;
    // leading label
    --md-comp-split-button-leading-label-font-family: var(--md-sys-typescale-title-medium-font);
    --md-comp-split-button-leading-label-font-weight: var(--md-sys-typescale-title-medium-weight);
    --md-comp-split-button-leading-label-font-size: var(--md-sys-typescale-title-medium-size);
    --md-comp-split-button-leading-label-letter-spacing: var(--md-sys-typescale-title-medium-tracking);
    --md-comp-split-button-leading-label-line-height: var(--md-sys-typescale-title-medium-line-height);
    // leading
    --md-comp-split-button-leading-height: 56px;
    --md-comp-split-button-leading-padding-left: 24px;
    --md-comp-split-button-leading-padding-right: 24px;
    --md-comp-split-button-leading-gap: 8px;
    --md-comp-split-button-leading-border-top-right-radius: 4px;
    --md-comp-split-button-leading-border-bottom-right-radius: 4px;
    // trailing
    --md-comp-split-button-trailing-height: 56px;
    --md-comp-split-button-trailing-padding-left: 13px;
    --md-comp-split-button-trailing-padding-right: 17px;
    --md-comp-split-button-trailing-border-top-left-radius: 4px;
    --md-comp-split-button-trailing-border-bottom-left-radius: 4px;
    // trailing icon
    --md-comp-split-button-trailing-icon-height: 24px;
    // selected trailing
    --md-comp-split-button-selected-trailing-padding-left: 15px;
    --md-comp-split-button-selected-trailing-padding-right: 15px;
}

.md-split-button--large {
    --md-comp-split-button-gap: 2px;
    // leading icon
    --md-comp-split-button-leading-icon-height: 32px;
    // leading label
    --md-comp-split-button-leading-label-font-family: var(--md-sys-typescale-headline-small-font);
    --md-comp-split-button-leading-label-font-weight: var(--md-sys-typescale-headline-small-weight);
    --md-comp-split-button-leading-label-font-size: var(--md-sys-typescale-headline-small-size);
    --md-comp-split-button-leading-label-letter-spacing: var(--md-sys-typescale-headline-small-tracking);
    --md-comp-split-button-leading-label-line-height: var(--md-sys-typescale-headline-small-line-height);
    // leading
    --md-comp-split-button-leading-height: 96px;
    --md-comp-split-button-leading-padding-left: 48px;
    --md-comp-split-button-leading-padding-right: 48px;
    --md-comp-split-button-leading-gap: 12px;
    --md-comp-split-button-leading-border-top-right-radius: 8px;
    --md-comp-split-button-leading-border-bottom-right-radius: 8px;
    // trailing
    --md-comp-split-button-trailing-height: 96px;
    --md-comp-split-button-trailing-padding-left: 26px;
    --md-comp-split-button-trailing-padding-right: 32px;
    --md-comp-split-button-trailing-border-top-left-radius: 8px;
    --md-comp-split-button-trailing-border-bottom-left-radius: 8px;
    // trailing icon
    --md-comp-split-button-trailing-icon-height: 38px;
    // selected trailing
    --md-comp-split-button-selected-trailing-padding-left: 29px;
    --md-comp-split-button-selected-trailing-padding-right: 29px;
}

.md-split-button--extra-large {
    --md-comp-split-button-gap: 2px;
    // leading icon
    --md-comp-split-button-leading-icon-height: 40px;
    // leading label
    --md-comp-split-button-leading-label-font-family: var(--md-sys-typescale-headline-large-font);
    --md-comp-split-button-leading-label-font-weight: var(--md-sys-typescale-headline-large-weight);
    --md-comp-split-button-leading-label-font-size: var(--md-sys-typescale-headline-large-size);
    --md-comp-split-button-leading-label-letter-spacing: var(--md-sys-typescale-headline-large-tracking);
    --md-comp-split-button-leading-label-line-height: var(--md-sys-typescale-headline-large-line-height);
    // leading
    --md-comp-split-button-leading-height: 136px;
    --md-comp-split-button-leading-padding-left: 64px;
    --md-comp-split-button-leading-padding-right: 64px;
    --md-comp-split-button-leading-gap: 16px;
    --md-comp-split-button-leading-border-top-right-radius: 12px;
    --md-comp-split-button-leading-border-bottom-right-radius: 12px;
    // trailing
    --md-comp-split-button-trailing-height: 136px;
    --md-comp-split-button-trailing-padding-left: 37px;
    --md-comp-split-button-trailing-padding-right: 49px;
    --md-comp-split-button-trailing-border-top-left-radius: 12px;
    --md-comp-split-button-trailing-border-bottom-left-radius: 12px;
    // trailing icon
    --md-comp-split-button-trailing-icon-height: 50px;
    // selected trailing
    --md-comp-split-button-selected-trailing-padding-left: 43px;
    --md-comp-split-button-selected-trailing-padding-right: 43px;
}

.md-split-button--elevated .md-split-button__leading,
.md-split-button--elevated .md-split-button__trailing {
    border: none;
    border-color: transparent;
    background-color: var(--md-sys-color-surface-container-low);
    color: var(--md-sys-color-primary);
    box-shadow: var(--md-sys-elevation-level1);
}
.md-split-button--filled .md-split-button__leading,
.md-split-button--filled .md-split-button__trailing {
    border: none;
    border-color: transparent;
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    box-shadow: var(--md-sys-elevation-level0);
}
.md-split-button--tonal .md-split-button__leading,
.md-split-button--tonal .md-split-button__trailing {
    border: none;
    border-color: transparent;
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    box-shadow: var(--md-sys-elevation-level0);
}
.md-split-button--outlined .md-split-button__leading,
.md-split-button--outlined .md-split-button__trailing {
    border: 1px solid;
    border-color: var(--md-sys-color-outline-variant);
    background-color: transparent;
    color: var(--md-sys-color-on-surface-variant);
    box-shadow: var(--md-sys-elevation-level0);
}
```
