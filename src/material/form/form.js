import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-form
 * @fires MDFormComponent#onFormNativeReset - {{desc}}
 * @fires MDFormComponent#onFormNativeSubmit - {{desc}}
 */
class MDFormComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} acceptCharset - {{desc}}
     * @property {String} action - {{desc}}
     * @property {String} autocomplete - {{desc}}
     * @property {String} enctype - {{desc}}
     * @property {String} method - {{desc}}
     * @property {String} name - {{desc}}
     * @property {Boolean} novalidate - {{desc}}
     * @property {String} target - {{desc}}
     * @property {Array} items - {{desc}}
     */
    static properties = {
        acceptCharset: { type: String },
        action: { type: String },
        autocomplete: { type: String },
        enctype: { type: String },
        method: { type: String },
        name: { type: String },
        novalidate: { type: Boolean },
        target: { type: String },
        items: { type: Array },
    };
    formNative = createRef();

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.method = "post";
        this.enctype = "application/x-www-form-urlencoded";
        this.acceptCharset = "UTF-8";
        this.autocomplete = "off";
        this.novalidate = true;
        this.childNodes_ = Array.from(this.childNodes);
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`
            <form 
                class="md-form__native"
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .novalidate="${ifDefined(this.novalidate)}"
                .target="${ifDefined(this.target)}"
                ${ref(this.formNative)}
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.childNodes_}</form>
        `;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-form");
    }

    /**
     * {{desc}}
     */
    reset() {
        this.formNative.value.reset();
    }

    /**
     * {{desc}}
     */
    submit() {
        this.formNative.value.submit();
    }

    /**
     * {{desc}}
     */
    handleFormNativeReset(event) {
        for (const element of this.formNative.value.elements) {
            const customEvent = new CustomEvent("reset", {
                bubbles: true,
                cancelable: true,
                detail: event,
            });
            element.dispatchEvent(customEvent);
        }
        this.emit("onFormNativeReset", event);
    }

    /**
     * {{desc}}
     */
    handleFormNativeSubmit(event) {
        event.preventDefault();
        const formData = new FormData(this.formNative.value);
        event.formData = formData;
        const data = {};
        for (const [name, value] of formData.entries()) {
            if (data[name]) {
                if (Array.isArray(data[name])) {
                    data[name].push(value);
                } else {
                    data[name] = [data[name], value];
                }
            } else {
                data[name] = value;
            }
        }
        event.data = data;
        this.emit("onFormNativeSubmit", event);
    }
}
customElements.define("md-form", MDFormComponent);
export { MDFormComponent };
