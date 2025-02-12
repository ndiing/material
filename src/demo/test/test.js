import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoTest extends MdComponent {
    constructor() {
        super();
        this.data = {};
    }
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout docs">
                ${this.data.class?.map(
                    (item) => html`
                        <div class="md-typescale--display-large">${item.name}</div>
                        ${item.tags?.length ? html` <div>${item.tags?.map((tag) => html` <div>${tag.value}</div> `)}</div> ` : ``}
                    `,
                )}
                <br />

                <div class="md-typescale--headline-large">Instance properties</div>
                ${this.data.member?.map(
                    (item) => html`
                        <div>${item.name}</div>
                        ${item.properties?.length
                            ? html`
                                  <table>
                                      <tr>
                                          <th>name</th>
                                          <th>type</th>
                                          <th>description</th>
                                      </tr>
                                      ${item.properties?.map(
                                          (property) => html`
                                              <tr>
                                                  <td>${property.name}</td>
                                                  <td>${property.type.names}</td>
                                                  <td>${property.description}</td>
                                              </tr>
                                          `,
                                      )}
                                  </table>
                              `
                            : ``}
                    `,
                )}
                <br />

                <div class="md-typescale--headline-large">Instance methods</div>
                ${this.data.function
                    ?.filter((item) => item.access !== "private")
                    .map(
                        (item) => html`
                            <div>${item.name}</div>
                            ${item.params?.length
                                ? html`
                                      <table>
                                          <tr>
                                              <th>name</th>
                                              <th>type</th>
                                              <th>description</th>
                                          </tr>
                                          ${item.params?.map(
                                              (param) => html`
                                                  <tr>
                                                      <td>${param.name}</td>
                                                      <td>${param.type.names}</td>
                                                      <td>${param.description}</td>
                                                  </tr>
                                              `,
                                          )}
                                      </table>
                                      <br />
                                  `
                                : ``}
                        `,
                    )}
                <br />

                ${this.data.class?.map(
                    (item) => html`
                        <div class="md-typescale--headline-large">Events</div>
                        ${item.fires?.length ? html` <div>${item.fires?.map((fire) => html` <div>${fire}</div> `)}</div> ` : ``}
                        <br />

                        <div class="md-typescale--headline-large">Inheritance</div>
                        ${item.augments?.length ? html` <div>${item.augments?.map((augment) => html` <div>${augment}</div> `)}</div> ` : ``}
                    `,
                )}
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        import("../../docs/tree.json").then((m) => {
            const data = m.default;
            this.data = Object.groupBy(
                data.filter((item) => !item.undocumented),
                (item) => item.kind,
            );
            this.requestUpdate();
        });
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
