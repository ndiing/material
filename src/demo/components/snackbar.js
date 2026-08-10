import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import snackbar from "../../material/service/snackbar.js";

class DemoSnackbar extends MdElement {
    snackbar0 = createRef();
    snackbar1 = createRef();
    snackbar2 = createRef();
    snackbar3 = createRef();
    snackbar4 = createRef();
    snackbar5 = createRef();
    snackbar6 = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-grid >
                
                <md-grid-column expanded="12">
                    <md-button label="Snackbar" @click="${this.handleClick0}"></md-button>
                    <md-snackbar
                        ${ref(this.snackbar0)}
                        supporting="Single-line snackbar with action"
                        .actions="${[
                            {component:'button',label:'Action',onButtonClick:console.log},
                        ]}"
                    ></md-snackbar>
                </md-grid-column>
                
                <md-grid-column expanded="12">
                    <md-button label="Snackbar" @click="${this.handleClick1}"></md-button>
                    <md-snackbar
                        ${ref(this.snackbar1)}
                        supporting="Single-line snackbar with icon"
                        .actions="${[
                            {component:'button',label:'Action',onButtonClick:console.log},
                            {component:'icon-button',icon:'close',onIconButtonClick:console.log},
                        ]}"
                    ></md-snackbar>
                </md-grid-column>

                <md-grid-column expanded="12">
                    <md-button label="Snackbar" @click="${this.handleClick2}"></md-button>
                    <md-snackbar
                        ${ref(this.snackbar2)}
                        supporting="Single-line snackbar"
                    ></md-snackbar>
                </md-grid-column>
                
                <md-grid-column expanded="12">
                    <md-button label="Snackbar" @click="${this.handleClick3}"></md-button>
                    <md-snackbar
                        ${ref(this.snackbar3)}
                        supporting="Single-line snackbar with action"
                        .actions="${[
                            {component:'button',label:'Action',onButtonClick:console.log},
                        ]}"
                    ></md-snackbar>
                </md-grid-column>

                <md-grid-column expanded="12">
                    <md-button label="Snackbar" @click="${this.handleClick4}"></md-button>
                    <md-snackbar
                        ${ref(this.snackbar4)}
                        supporting="Two-line snackbar\nwithout action"
                    ></md-snackbar>
                </md-grid-column>
                
                <md-grid-column expanded="12">
                    <md-button label="Snackbar" @click="${this.handleClick5}"></md-button>
                    <md-snackbar
                        ${ref(this.snackbar5)}
                        supporting="Two-line snackbar\nwith action"
                        .actions="${[
                            {component:'button',label:'Action',onButtonClick:console.log},
                        ]}"
                    ></md-snackbar>
                </md-grid-column>

                <md-grid-column expanded="12">
                    <md-button label="Snackbar" @click="${this.handleClick6}"></md-button>
                    <md-snackbar
                        ${ref(this.snackbar6)}
                        supporting="Two-line snackbar\nwith longer action"
                        .actions="${[
                            {component:'button',label:'Longer action',onButtonClick:console.log},
                        ]}"
                    ></md-snackbar>
                </md-grid-column>

            </md-grid>
        `
    }

    handleClick0(event) {
        // this.snackbar0.value.toggle()
        snackbar.show({
            supporting: "Single-line snackbar with action",
            actions: [{ component: "button", label: "Action", onButtonClick: console.log }],
        });
    }
    handleClick1(event) {
        // this.snackbar1.value.toggle();
        snackbar.show({
            supporting: "Single-line snackbar with icon",
            actions: [
                { component: "button", label: "Action", onButtonClick: console.log },
                { component: "icon-button", icon: "close", onIconButtonClick: console.log },
            ],
        });
    }
    handleClick2(event) {
        snackbar.show({
            supporting: "Single-line snackbar",
        });
    }
    handleClick3(event) {
        snackbar.show({
            supporting: "Single-line snackbar with action",
            actions: [{ component: "button", label: "Action", onButtonClick: console.log }],
        });
    }
    handleClick4(event) {
        snackbar.show({
            supporting: "Two-line snackbar\nwithout action",
        });
    }
    handleClick5(event) {
        snackbar.show({
            supporting: "Two-line snackbar\nwith action",
            actions: [{ component: "button", label: "Action", onButtonClick: console.log }],
        });
    }
    handleClick6(event) {
        snackbar.show({
            supporting: "Two-line snackbar\nwith longer action",
            actions: [{ component: "button", label: "Longer action", onButtonClick: console.log }],
        });
    }
}
customElements.define("demo-snackbar", DemoSnackbar);
export default document.createElement("demo-snackbar");
