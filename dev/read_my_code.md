## src\demo\components

### tooltip
src\demo\components\tooltip.js

```js
import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoTooltip extends MdElement {
    tooltip0 = createRef();
    tooltip1 = createRef();
    tooltip2 = createRef();
    tooltip3 = createRef();
    tooltip4 = createRef();
    tooltip5 = createRef();
    tooltip6 = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-grid>
                <md-grid-column>
                    <md-button 
                        @pointerenter="${this.handleButton0Pointerenter}" 
                        @pointerleave="${this.handleButton0Pointerleave}" 
                        label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip0)} variant="plain" supporting="Save to favorites"></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button 
                        id="my-btn"
                        @pointerenter="${this.handleButton1Pointerenter}" 
                        @pointerleave="${this.handleButton1Pointerleave}" 
                        label="Tooltip"></md-button>
                    <md-tooltip for="my-btn" variant="plain" supporting="Grant value is calculated using the\nclosing stock price from the day\nbefore the grant date. Amounts do\nnot reflect tax witholdings."></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>

                <md-grid-column>
                    <md-button @click="${this.handleButton2Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip2)} 
                        variant="rich"
                        subhead="Rich tooltip"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                        .buttons="${[
                            {label:'Action'},
                            {label:'Action'},
                        ]}"
                    ></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button @click="${this.handleButton3Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip3)} 
                        variant="rich"
                        subhead="Rich tooltip"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                        .buttons="${[
                            {label:'Action'},
                        ]}"
                    ></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button @click="${this.handleButton4Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip4)} 
                        variant="rich"
                        subhead="Rich tooltip"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                    ></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button @click="${this.handleButton5Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip5)} 
                        variant="rich"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                        .buttons="${[
                            {label:'Action'},
                        ]}"
                    ></md-tooltip>
                </md-grid-column>
                <md-grid-column>
                    <md-button @click="${this.handleButton6Click}" label="Tooltip"></md-button>
                    <md-tooltip ${ref(this.tooltip6)} 
                        variant="rich"
                        supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                        .buttons="${[
                            {label:'Action'},
                            {label:'Action'},
                        ]}"
                    ></md-tooltip>
                </md-grid-column>

            </md-grid>
        `
    }

    handleButton0Pointerenter() {
        this.tooltip0.value.show(event.currentTarget);
    }
    handleButton0Pointerleave() {
        this.tooltip0.value.close(event.currentTarget);
    }

    handleButton2Click(event) {
        this.tooltip2.value.toggle(event.currentTarget);
    }
    handleButton3Click(event) {
        this.tooltip3.value.toggle(event.currentTarget);
    }
    handleButton4Click(event) {
        this.tooltip4.value.toggle(event.currentTarget);
    }
    handleButton5Click(event) {
        this.tooltip5.value.toggle(event.currentTarget);
    }
    handleButton6Click(event) {
        this.tooltip6.value.toggle(event.currentTarget);
    }
}
customElements.define("demo-tooltip", DemoTooltip);
export default document.createElement("demo-tooltip");

```
## src\material\components\tooltip

### tooltip
src\material\components\tooltip\tooltip.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { renderButton } from "../../utils/render-component.js";
import { setPosition } from "../../core/positioner.js";

class MdTooltip extends MdElement {
    static properties = {
        subhead: { type: String },
        supporting: { type: String },
        buttons: { type: Array },
        variant: { type: String },
        open: { type: Boolean },
        placement: { type: Array },
        offset: { type: Number },
        for: { type: String },
    };

    variants = ["plain", "rich"];

    constructor() {
        super();

        this.variant = "plain";
        this.buttons = [];
        this.placement = ["above", "north-east", "after", "south-east", "below", "south-west", "before", "north-west"];
        this.offset = 4;

        this._handleTooltipTriggerPointerenter = this._handleTooltipTriggerPointerenter.bind(this);
        this._handleTooltipTriggerPointerleave = this._handleTooltipTriggerPointerleave.bind(this);
    }

    render() {
        return html`
            ${this.subhead ? html`<div class="md-tooltip__subhead">${this.subhead}</div>` : nothing} ${this.supporting ? html`<div class="md-tooltip__supporting">${this.supporting}</div>` : nothing}
            ${
                this.buttons?.length
                    ? html`
                          <div class="md-tooltip__buttons">
                              ${this.buttons.map((button) =>
                              renderButton({
                                  classMap: { "md-tooltip__button": true },
                                  color: "text",
                                  ...button,
                              }),
                          )}
                          </div>
                      `
                    : nothing
            }
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
        this._attachTrigger();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._detachTrigger();
        this.classList.remove("md-tooltip");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-tooltip--${variant}`, this.variant === variant);
            });
        }

        if (_changedProperties.has("open")) {
            this.classList.toggle(`md-tooltip--open`, Boolean(this.open));
        }

        if (_changedProperties.has("for")) {
            this._detachTrigger();
            this._attachTrigger();
        }
    }

    _attachTrigger() {
        if (this.for) {
            const target = document.getElementById(this.for);
            if (target) {
                this.trigger = target;
                this.trigger.addEventListener("pointerenter", this._handleTooltipTriggerPointerenter);
                this.trigger.addEventListener("pointerleave", this._handleTooltipTriggerPointerleave);
            }
        }
    }

    _detachTrigger() {
        if (this.trigger) {
            this.trigger.removeEventListener("pointerenter", this._handleTooltipTriggerPointerenter);
            this.trigger.removeEventListener("pointerleave", this._handleTooltipTriggerPointerleave);
            this.trigger = null;
        }
    }

    _handleTooltipTriggerPointerenter(event) {
        this.show(event.currentTarget || this.trigger);
    }

    _handleTooltipTriggerPointerleave() {
        this.close();
    }

    show(trigger) {
        const target = trigger || this.trigger;
        if (!target) return;

        setPosition(target, this, {
            placement: this.placement,
            offset: this.offset,
        });
        this.open = true;
    }

    close() {
        this.open = false;
    }

    toggle(trigger) {
        if (this.open) {
            this.close();
        } else {
            this.show(trigger);
        }
    }
}

customElements.define("md-tooltip", MdTooltip);

export { MdTooltip };

```
### tooltip
src\material\components\tooltip\tooltip.scss

```scss
@use "../../shared/mixins.scss";

.md-tooltip {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    z-index: 30;
    opacity: 0;
    pointer-events: none;
}
.md-tooltip--open {
    opacity: 1;
    .md-tooltip__button {
        pointer-events: all;
    }
}

// .md-tooltip__subhead {}

.md-tooltip__supporting {
    white-space: pre;
}

.md-tooltip__buttons {
    display: flex;
    align-items: center;
    gap: 0 32px;
}
.md-tooltip__button {
    padding: 0 8px;
    margin: 0 -8px;
}

.md-tooltip--plain {
    border-radius: var(--md-sys-shape-corner-extra-small);
    background-color: var(--md-sys-color-inverse-surface);
    color: var(--md-sys-color-inverse-on-surface);

    .md-tooltip__supporting {
        padding: 4px 8px;
        @include mixins.typescale-body-small();
    }
}
.md-tooltip--rich {
    border-radius: var(--md-sys-shape-corner-medium);
    background-color: var(--md-sys-color-surface-container);
    color: var(--md-sys-color-on-surface-variant);
    box-shadow: var(--md-sys-elevation-level2);

    .md-tooltip__subhead {
        padding: 12px 16px;
        @include mixins.typescale-title-small();

        + .md-tooltip__supporting {
            margin-top: -20px;
        }
    }

    .md-tooltip__supporting {
        padding: 12px 16px;
        @include mixins.typescale-body-medium();

        + .md-tooltip__buttons {
            margin-top: -8px;
        }
    }

    .md-tooltip__buttons {
        padding: 8px 16px;
    }
}

```
