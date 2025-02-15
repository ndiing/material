import { html, nothing } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";

class DocsPage extends MdComponent {
    constructor(){
        super()
        this.data={}
    }

    

    render() {
        return html`
            <div class="md-layout">

                ${this.data.class?.map(item=>html`
                    <h1>${item.name}</h1>
                    <br>
                    ${item.tags?.length?html`
                        <div>&lt;${item.tags?.[0].value}&gt;</div>
                        <br>
                    `:nothing}
                    ${item.augments?.length?html`
                        <h2>Inheritance</h2>
                        <br>
                        <div>${item.augments}</div>
                        <br>
                    `:nothing}
                    ${item.fires?.length?html`
                        <div>
                            <h2>Events</h2>
                            <br>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${item.fires?.map(fire=>html`
                                        <tr>
                                            <td>${fire.replace(/.*?event\:/,'')}</td>
                                        </tr>
                                    `)}
                                </tbody>
                            </table>
                            <br>
                        </div>
                        <br>
                    `:nothing}
                `)}    
                <br>
                ${this.data.member?.length?html`
                    <h2>Instance properties</h2>
                    <br>
                `:nothing}
                ${this.data.member?.map(item=>html`
                    <div>${item.name}</div>
                    <br>
                    ${item.properties?.length?html`
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${item.properties?.map(property=>html`
                                        <tr>
                                            <td>${property.name}</td>
                                            <td>${property.type?.names}</td>
                                        </tr>
                                    `)}
                                </tbody>
                            </table>
                        </div>
                        <br>
                    `:nothing}
                `)}    
                <br>
                ${this.data.function?.length?html`
                    <h2>Instance methods</h2>
                    <br>
                `:nothing}
                ${this.data.function?.map(item=>html`
                    <div>${item.name}(${item.params?.map(param=>param.name)})</div>
                    <br>
                    ${item.params?.length?html`
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${item.params?.map(param=>html`
                                        <tr>
                                            <td>${param.name}</td>
                                            <td>${param.type?.names}</td>
                                        </tr>
                                    `)}
                                </tbody>
                            </table>
                        </div>
                        <br>
                    `:nothing}
                `)}    
            </div>
            
        `;
    }

    connectedCallback(){
        super.connectedCallback()

        this.handleDocsPageRouterNavigateSuccess=
        this.handleDocsPageRouterNavigateSuccess.bind(this)
        window.addEventListener('onRouterNavigateSuccess',this.handleDocsPageRouterNavigateSuccess)
    }

    async handleDocsPageRouterNavigateSuccess(event){
        const name=Router.pathname.split('/').slice(2).join('/')
        const module = await import(`../json/${name}.json`)
        this.data=Object.groupBy(module.default.filter(item=>!item.undocumented),item=>item.kind)
        console.log(this.data)
        this.requestUpdate()
    }

}

customElements.define("docs-page", DocsPage);

export default document.createElement("docs-page");
