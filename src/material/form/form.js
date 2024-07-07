import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";


/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-form
 * @fires MDFormComponent#onFormNativeReset - {{desc}}
 * @fires MDFormComponent#onFormNativeSubmit - {{desc}}
 */
class MDFormComponent extends MDComponent {
    
    /**
     * @property {String} acceptCharset - {{desc}}
     * @property {String} action - {{desc}}
     * @property {String} autocomplete - {{desc}}
     * @property {String} enctype - {{desc}}
     * @property {String} method - {{desc}}
     * @property {String} name - {{desc}}
     * @property {Boolean} novalidate - {{desc}}
     * @property {String} target - {{desc}}
     * @property {String} rel - {{desc}}
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
        rel: { type: String },
    };

    
    /**
     * {{desc}}
     */
    get native() {
        return this.querySelector(".md-form__native");
    }

    constructor() {
        super();

        this.method = "post";
        this.enctype = "application/x-www-form-urlencoded";
        this.acceptCharset = "UTF-8";

        this.body = Array.from(this.childNodes);
    }

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
                .rel="${ifDefined(this.rel)}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.body}</form>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-form");
    }

    handleFormNativeReset(event) {
        for (const element of event.currentTarget.elements) {
            const customEvent = new CustomEvent("reset", {
                bubbles: true,
                cancelable: true,
                detail: event,
            });
            element.dispatchEvent(customEvent);
        }

        this.emit("onFormNativeReset", event);
    }

    handleFormNativeSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
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
        event.formData = formData;
        event.data = data;
        this.emit("onFormNativeSubmit", event);
    }

    
    /**
     * {{desc}}
     */
    reset() {
        this.native.reset();
    }

    
    /**
     * {{desc}}
     */
    submit() {
        this.native.submit();
    }
}

customElements.define("md-form", MDFormComponent);

export { MDFormComponent };
