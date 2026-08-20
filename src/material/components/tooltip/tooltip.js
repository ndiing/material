import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { renderButton } from "../../core/template.js";
import { setPosition } from "../../core/positioner.js";


/**
 * @class MdTooltip
 * @extends MdElement
 */
class MdTooltip extends MdElement {
    
    /**
     * @property {String} subhead - 
     * @property {String} supporting - 
     * @property {Array} buttons - 
     * @property {String} variant - plain,rich
     * @property {Boolean} open - 
     * @property {Array} placement - 
     * @property {Number} offset - 
     * @property {String} for - 
     */
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
        this.placement = ["above", "after", "below", "before", "north-east", "south-east", "south-west", "north-west"];
        this.offset = 4;

        this._handleTriggerPointerenter = this._handleTriggerPointerenter.bind(this);
        this._handleTriggerPointerleave = this._handleTriggerPointerleave.bind(this);
        this._handleAnimationend = this._handleAnimationend.bind(this);
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
        this.addEventListener("animationend", this._handleAnimationend);
        this._attachTrigger();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._detachTrigger();
        this.removeEventListener("animationend", this._handleAnimationend);
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
            if (!this.open) {
                this.classList.add("md-tooltip--close");
            }
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
                this.trigger.addEventListener("pointerenter", this._handleTriggerPointerenter);
                this.trigger.addEventListener("pointerleave", this._handleTriggerPointerleave);
            }
        }
    }

    _detachTrigger() {
        if (this.trigger) {
            this.trigger.removeEventListener("pointerenter", this._handleTriggerPointerenter);
            this.trigger.removeEventListener("pointerleave", this._handleTriggerPointerleave);
            this.trigger = null;
        }
    }

    _handleTriggerPointerenter(event) {
        this.show(event.currentTarget || this.trigger);
    }

    _handleTriggerPointerleave() {
        this.close();
    }

    _handleAnimationend(event) {
        if (event.target !== event.currentTarget) {
            return;
        }
        if (!this.open) {
            this.classList.remove("md-tooltip--close");
        }
    }

    
    /**
     * 
     */
    show(trigger) {
        const target = trigger || this.trigger;
        if (!target) return;

        setPosition(target, this, {
            placement: this.placement,
            offset: this.offset,
        });
        this.open = true;
    }

    
    /**
     * 
     */
    close() {
        this.open = false;
    }

    
    /**
     * 
     */
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
