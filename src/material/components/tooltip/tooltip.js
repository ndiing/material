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
