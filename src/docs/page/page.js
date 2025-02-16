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
            <br>
            ${item.classdesc?html`
                <div>${item.classdesc}</div>
                <br>
            `:nothing}
            ${item.tags?.length?html`
                <div>The <code>${item.name}</code> interface represents a <code>&lt;${item.tags?.map(tag=>tag.value)}&gt;</code> element in the DOM.</div>
                <br>
            `:nothing}

            <h2>Constructor</h2>
            <br>
            <div><code>new ${item.name}(${item.params?.map(param=>param.name).join(', ')})</code></div>
            ${item.description?html`
                <div>${item.description}</div>
            `:nothing}
            <br>
            ${item.params?.length?html`
                <div>${this.renderTable([
                    {name:'name',label:'Name'},
                    {name:'type',label:'Type'},
                    {name:'description',label:'Description'},
                ],item.params.map(prop=>({
                    name:prop.name,
                    type:prop.type?.names.join('|'),
                    description:prop.description,
                })))}</div>
                <br>
            `:nothing}

            ${item.examples?.length?html`
                <h2>Examples</h2>
                <br>
                ${item.examples?.map(example=>html`
                    <pre>${example}</pre>
                    <br>
                `)}
            `:nothing}
            
        `)
    }

    renderEvent(data) {
        /* prettier-ignore */
        return html`
            <div>${this.renderTable([
                {name:'name',label:'Name'},
                {name:'event',label:'Event'},
                {name:'description',label:'Description'},
            ],data.map(prop=>({
                name:prop.name,
                event:prop.properties?.map(p=>p.name).join(', '),
                description:prop.description,
            })))}</div>
            <br>
        `
    }

    renderAugments(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
        
            <div>${item.augments}</div>
            <br>
        `)
    }
    renderMember(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
            ${item.name?html`
                <div><code>${item.name}</code></div>
                ${item.description?html`
                    <div>${item.description}</div>
                `:nothing}
                <br>
            `:nothing}
            ${item.properties?.length?html`
                <div>${this.renderTable([
                    {name:'name',label:'Name'},
                    {name:'type',label:'Type'},
                    {name:'description',label:'Description'},
                ],item.properties.map(prop=>({
                    name:prop.name,
                    type:prop.type?.names.join('|'),
                    description:prop.description,
                })))}</div>
                <br>
            `:nothing}
        `)
    }
    renderFunction(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
            <div><code>${item.name}(${item.params?.map(param=>param.name).join(', ')})</code></div>
            ${item.description?html`
                <div>${item.description}</div>
            `:nothing}
            <br>
            ${item.params?.length?html`
                <div>${this.renderTable([
                    {name:'name',label:'Name'},
                    {name:'type',label:'Type'},
                    {name:'description',label:'Description'},
                ],item.params.map(prop=>({
                    name:prop.name,
                    type:prop.type?.names.join('|'),
                    description:prop.description,
                })))}</div>
                <br>
            `:nothing}
        `)
    }
    renderTypedef(data) {
        /* prettier-ignore */
        return data?.map(item=>html`
            <div><code>${item.name}</code></div>
            <br>
            ${item.properties?.length?html`
                <div>${this.renderTable([
                    {name:'name',label:'Name'},
                    {name:'type',label:'Type'},
                    {name:'description',label:'Description'},
                ],item.properties.map(prop=>({
                    name:prop.name,
                    type:prop.type?.names.join('|'),
                    description:prop.description,
                })))}</div>
                <br>
            `:nothing}
        `)
    }

    renderTable(columns = [], data = []) {
        /* prettier-ignore */
        return html`
            <table>
                <tr>
                    ${columns.map(column => html`
                        <th>
                            ${column.label}
                        </th>
                    `)}
                </tr>
                ${data.map(item=>html`
                    <tr>
                        ${columns.map(column => html`
                            <td>
                                ${column.name==='name'?html`<code>${item[column.name]}</code>`:item[column.name]}
                            </td>
                        `)}
                    </tr>
                `)}
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
                    <br>
                    ${this.data.class?.filter(item=>item.tags)?.length?html`
                        <div>This interface also inherits properties from its parent, <code>HTMLElement</code>.</div>
                        <br>
                    `:nothing}
                    ${this.renderMember(this.data.member)}
                `:nothing}

                ${this.data.function?.length?html`
                    <h2>Instance methods</h2>
                    <br>
                    ${this.data.class?.filter(item=>item.tags)?.length?html`
                        <div>This interface also inherits methods from its parent, <code>HTMLElement</code>.</div>
                        <br>
                    `:nothing}
                    ${this.renderFunction(this.data.function)}
                `:nothing}

                ${this.data.typedef?.length?html`
                    <h2>Types</h2>
                    <br>
                    ${this.renderTypedef(this.data.typedef)}
                `:nothing}

                ${this.data.event?.length?html`
                    <h2>Events</h2>
                    <br>
                    <div>Listen to these events using <code>addEventListener()</code>, or by assigning an event listener to the <code>onventname</code> property of this interface.</div>
                    <br>
                    ${this.renderEvent(this.data.event)}
                `:nothing}

                ${this.data.class?.filter(item=>item.augments)?.length?html`
                    <h2>Inheritance</h2>
                    <br>
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
        this.data = values.find((value) => `/docs/${value.key.replace(/\.js$/, "")}` === Router.pathname);
        console.log(this.data);
        this.requestUpdate();
    }
}

customElements.define("docs-page", DocsPage);

export default document.createElement("docs-page");
