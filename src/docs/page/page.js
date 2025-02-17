import { html, nothing } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";
import { keys, values } from "../jsdoc/jsdoc";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

class DocsPage extends MdComponent {
    constructor() {
        super();
        this.data = {};
    }

    renderClass(data) {
        /* prettier-ignore */
        return data?.length?html`${data?.map(item =>html`
            <h1>${item.name}</h1>
            
            <p>${item.tags?.length?html`The <code>${item.name}</code> interface represents a <code><code>&lt;${item.tags?.map(t=>t.text)?.join()}&gt;</code></code> element in the DOM. `:nothing}${item.classdesc}</p>

            ${item.description?html`
                <h2>Constructor</h2>
                <p><code>new ${item.name}(${item.params?.map(p=>p.name)?.join(', ')})</code></p>
                <p>${item.description}</p>
                ${item?.params?.length?html`
                    <h3>params</h3>
                    ${this.renderTable([
                        {name:'name',label:'name',format:value=>unsafeHTML(`<code>${value}</code>`)},
                        {name:'type',label:'type',format:value=>value.names?.join(', ')},
                        {name:'description',label:'description'},
                    ],item?.params??[])}
                `:nothing}
            `:nothing}
        `)}`:nothing
    }

    renderEvent(data) {
        /* prettier-ignore */
        return data?.length?html`
            <h2>Events</h2>
            <p>Listen to these events using <code>addEventListener()</code>, or by assigning an event listener to the <code>oneventname</code> property of this interface.</p>
            ${this.renderTable([
                {name:'name',label:'name',format:value=>unsafeHTML(`<code>${value}</code>`)},
                {name:'properties',label:'properties',format:value=>value?.map(v=>v.name)?.join(', ')},
            ],data)}
        `:nothing
    }

    renderMember(data) {
        /* prettier-ignore */
        return data?.length?html`
            <h2>Instance properties</h2>
            <p>This interface also inherits properties from its parent, <code>HTMLElement</code>.</p>
            ${data?.map(item =>html`
                <p><code>${item.name}</code></p>
                <p>${item.description}</p>
                ${item?.properties?.length?html`
                    ${this.renderTable([
                        {name:'name',label:'name',format:value=>unsafeHTML(`<code>${value}</code>`)},
                        {name:'type',label:'type',format:value=>value.names?.join(', ')},
                        {name:'description',label:'description'},
                    ],item?.properties??[])}
                `:nothing}
                ${item?.returns?.length?html`
                    <h3>returns</h3>
                    ${this.renderTable([
                        {name:'type',label:'type',format:value=>value.names?.join(', ')},
                        {name:'description',label:'description'},
                    ],item?.returns??[])}
                `:nothing}
            `)}
        `:nothing
    }

    renderFunction(data) {
        /* prettier-ignore */
        return data?.length?html`
            <h2>Instance methods</h2>
            <p>This interface also inherits methods from its parent, <code>HTMLElement</code>.</p>
            ${data?.map(item =>html`
                <p><code>${item.name}(${item.params?.map(p=>p.name)?.join(', ')})</code></p>
                <p>${item.description}</p>
                ${item?.params?.length?html`
                    <h3>params</h3>
                    ${this.renderTable([
                        {name:'name',label:'name',format:value=>unsafeHTML(`<code>${value}</code>`)},
                        {name:'type',label:'type',format:value=>value.names?.join(', ')},
                        {name:'description',label:'description'},
                    ],item?.params??[])}
                `:nothing}
                ${item?.returns?.length?html`
                    <h3>returns</h3>
                    ${this.renderTable([
                        {name:'type',label:'type',format:value=>value.names?.join(', ')},
                        {name:'description',label:'description'},
                    ],item?.returns??[])}
                `:nothing}
            `)}
        `:nothing
    }

    renderTable(columns = [], data = []) {
        /* prettier-ignore */
        return data?.length?html`
            <table>
                <thead>
                    <tr>
                        ${columns?.map(th => html`
                            <th>${th.label}</th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${data?.map(item=>html`
                        <tr>
                            ${columns?.map(th => html`
                                <td>${(th.format||((value) => value))(item[th.name])}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `:nothing
    }

    render() {
        /* prettier-ignore */
        return html`
            <div style="margin:24px;">
                ${this.renderClass(this.data.class)}
                ${this.renderMember(this.data.member)}
                ${this.renderFunction(this.data.function)}
                ${this.renderEvent(this.data.event)}
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.handleDocsPageRouterNavigateSuccess = this.handleDocsPageRouterNavigateSuccess.bind(this);
        window.addEventListener("onRouterNavigateSuccess", this.handleDocsPageRouterNavigateSuccess);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("onRouterNavigateSuccess", this.handleDocsPageRouterNavigateSuccess);
    }

    async handleDocsPageRouterNavigateSuccess(event) {
        this.data = values.find((value) => value.key === Router.params.name + ".js");
        console.log(this.data);
        this.requestUpdate();
    }
}

customElements.define("docs-page", DocsPage);

export default document.createElement("docs-page");
