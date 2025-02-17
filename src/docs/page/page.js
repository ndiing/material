import { html, nothing } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";
import { keys, values } from "../jsdoc/jsdoc";
class DocsPage extends MdComponent {
    constructor() {
        super();
        this.data = {};
    }

    renderClass(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
            <h1>${item.name}</h1>
            ${item.classdesc?html`
                <p>${item.classdesc}</p>
            `:nothing}
            ${item.tags?.length?html`
                <p>The <code>${item.name}</code> interface represents a <code>&lt;${item.tags?.map(tag=>tag.value)}&gt;</code> element in the DOM.</p>
            `:nothing}
            <h2>Constructor</h2>
            <p><code>new ${item.name}(${item.params?.map(param=>param.name).join(', ')})</code></p>
            ${item.description?html`
                <p>${item.description}</p>
            `:nothing}
            ${item.params?.length?html`
                <p>${this.renderTable([
                    {name:'name',label:'Name'},
                    {name:'type',label:'Type'},
                    {name:'defaultvalue',label:'Default'},
                    {name:'description',label:'Description'},
                ],item.params.map(prop=>({
                    name:prop.name,
                    type:prop.type?.names.join('|'),
                    defaultvalue:prop.defaultvalue,
                    description:prop.description,
                })))}</p>
            `:nothing}
            ${item.examples?.length?html`
                <h2>Examples</h2>
                ${item.examples?.map(example=>html`
                    <pre>${example}</pre>
                `)}
            `:nothing}
            
        `)
    }

    renderEvent(data) {
        /* prettier-ignore */
        return html`
            <p>${this.renderTable([
                {name:'name',label:'Name'},
                {name:'event',label:'Event'},
                {name:'defaultvalue',label:'Default'},
                {name:'description',label:'Description'},
            ],data.map(prop=>({
                name:prop.name,
                event:prop.properties?.map(p=>p.name).join(', '),
                defaultvalue:prop.defaultvalue,
                description:prop.description,
            })))}</p>
        `
    }

    renderAugments(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
            <p>${item.augments}</p>
        `)
    }

    renderMember(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
            ${item.name?html`
                <p><code>${item.name}</code></p>
                ${item.description?html`
                    <p>${item.description}</p>
                `:nothing}
            `:nothing}
            ${item.properties?.length?html`
                <p>${this.renderTable([
                    {name:'name',label:'Name'},
                    {name:'type',label:'Type'},
                    {name:'defaultvalue',label:'Default'},
                    {name:'description',label:'Description'},
                ],item.properties.map(prop=>({
                    name:prop.name,
                    type:prop.type?.names.join('|'),
                    defaultvalue:prop.defaultvalue,
                    description:prop.description,
                })))}</p>
            `:nothing}
        `)
    }

    renderFunction(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
            <p><code>${item.name}(${item.params?.map(param=>param.name).join(', ')})</code></p>
            ${item.description?html`
                <p>${item.description}</p>
            `:nothing}
            ${item.params?.length?html`
                <p>${this.renderTable([
                    {name:'name',label:'Name'},
                    {name:'type',label:'Type'},
                    {name:'defaultvalue',label:'Default'},
                    {name:'description',label:'Description'},
                ],item.params.map(prop=>({
                    name:prop.name,
                    type:prop.type?.names.join('|'),
                    defaultvalue:prop.defaultvalue,
                    description:prop.description,
                })))}</p>
            `:nothing}
        `)
    }

    renderTypedef(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
            <p><code>${item.name}</code></p>
            ${item.properties?.length?html`
                <p>${this.renderTable([
                    {name:'name',label:'Name'},
                    {name:'type',label:'Type'},
                    {name:'defaultvalue',label:'Default'},
                    {name:'description',label:'Description'},
                ],item.properties.map(prop=>({
                    name:prop.name,
                    type:prop.type?.names.join('|'),
                    defaultvalue:prop.defaultvalue,
                    description:prop.description,
                })))}</p>
            `:nothing}
        `)
    }

    renderTable(columns = [], data = []) {
        /* prettier-ignore */
        return html`
            <table>
                <thead>
                    <tr>
                        ${columns.map(column => html`
                            <th>
                                ${column.label}
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${data.map(item=>html`
                        <tr>
                            ${columns.map(column => html`
                                <td>
                                    ${column.name==='name'?html`<code>${item[column.name]}</code>`:item[column.name]}
                                </td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `
    }

    render() {
        /* prettier-ignore */
        return html`
            <div class="md-layout">
                ${this.renderClass(this.data.class)}
                ${this.data.member?.length?html`
                    <h2>Instance properties</h2>
                    ${this.data.class?.filter(item=>item.tags)?.length?html`
                        <p>This interface also inherits properties from its parent, <code>HTMLElement</code>.</p>
                    `:nothing}
                    ${this.renderMember(this.data.member)}
                `:nothing}
                ${this.data.function?.length?html`
                    <h2>Instance methods</h2>
                    ${this.data.class?.filter(item=>item.tags)?.length?html`
                        <p>This interface also inherits methods from its parent, <code>HTMLElement</code>.</p>
                    `:nothing}
                    ${this.renderFunction(this.data.function)}
                `:nothing}
                ${this.data.typedef?.length?html`
                    <h2>Types</h2>
                    ${this.renderTypedef(this.data.typedef)}
                `:nothing}
                ${this.data.event?.length?html`
                    <h2>Events</h2>
                    <p>Listen to these events using <code>addEventListener()</code>, or by assigning an event listener to the <code>onventname</code> property of this interface.</p>
                    ${this.renderEvent(this.data.event)}
                `:nothing}
                ${this.data.class?.filter(item=>item.augments)?.length?html`
                    <h2>Inheritance</h2>
                    ${this.renderAugments(this.data.class)}
                `:nothing}
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
        this.requestUpdate();
    }
}

customElements.define("docs-page", DocsPage);

export default document.createElement("docs-page");
