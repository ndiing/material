import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdPanelScrimComponent extends LitElement {
    static get properties() {
        return {
            label: { type: String },
        };
    }

    constructor() {
        super();
        this.label = "Label";
    }

    createRenderRoot() {
        return this;
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`<div class="md-panel-scrim__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel__scrim");
        // this.onPanelScrimClick=
        // this.onPanelScrimClick.bind(this)
        // this.addEventListener('click',this.onPanelScrimClick)
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel__scrim");
        // this.addEventListener('click',this.onPanelScrimClick)
    }

    firstUpdated() {
    }

    updated(_changedProperties) {
    }

    // onPanelScrimClick(event) {
    //     this.dispatchEvent(new CustomEvent('onPanelScrimClick',{
    //         bubbles:true,
    //         cancelable:true,
    //         detail:{event}
    //     }))
    // }
}

customElements.define("md-panel-scrim", MdPanelScrimComponent);

export { MdPanelScrimComponent };


class MdPanelComponent extends LitElement {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-panel__header">
                <div class="md-panel__start">
                    <md-icon-button icon="image"></md-icon-button>
                </div>
                <div class="md-panel__center">
                    <div class="md-panel__label">Label</div>
                    <div class="md-panel__supporting-text">Label</div>
                </div>
                <div class="md-panel__end">
                    <md-icon-button icon="image"></md-icon-button>
                </div>
            </div> -->
            <div class="md-panel__body">
                Lorem ipsum dolor sit amet.
            </div>
            <!-- <div class="md-panel__footer">
                <md-button ui="filled" label="Label"></md-button>
                <md-button ui="outlined" label="Label"></md-button>
            </div> -->
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel");
    }

    async firstUpdated() {
        const rect=(this.getBoundingClientRect())
        // document.body.style.setProperty('--md-layout-padding-left',rect.width+'px')
        // document.body.style.setProperty('--md-layout-padding-right',rect.width+'px')
        // document.body.style.setProperty('--md-layout-padding-top',rect.height+'px')
        // document.body.style.setProperty('--md-layout-padding-bottom',rect.height+'px')

        this.panelScrim=document.createElement('md-panel-scrim')
        this.onPanelScrimClick=this.onPanelScrimClick.bind(this)
        this.panelScrim.addEventListener('click',this.onPanelScrimClick)
        document.body.append(this.panelScrim)

        this.panelScrim.removeEventListener('click',this.onPanelScrimClick)
        this.panelScrim.remove()
    }

    updated(_changedProperties) {
    }

    onPanelScrimClick(event) {

    }
}

customElements.define("md-panel", MdPanelComponent);

export { MdPanelComponent };
