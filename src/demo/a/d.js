import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoD extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>D</h1>

            <div @click="${this.handleClick1}">/a/b/c/d?user=name&pass=word</div>
            <div @click="${this.handleClick2}">/a/b/c/d?#hash-tag</div>
            <div @click="${this.handleClick3}">/a/b/c/d?user=name&pass=word#hash-tag</div>
            <div @click="${this.handleClick4}">/a/b/c/d?age=30&age=35&age=40</div>
            
            <br>

            <div routerLink="/a/b/c/d?user=name&pass=word">/a/b/c/d?user=name&pass=word</div>
            <div routerLink="/a/b/c/d?#hash-tag">/a/b/c/d?#hash-tag</div>
            <div routerLink="/a/b/c/d?user=name&pass=word#hash-tag">/a/b/c/d?user=name&pass=word#hash-tag</div>
            <div routerLink="/a/b/c/d?age=30&age=35&age=40">/a/b/c/d?age=30&age=35&age=40</div>

            <br>

            <div @click="${() => this.router.reload()}">reload</div>
            <div @click="${() => this.router.back()}">back</div>
            <div @click="${() => this.router.forward()}">forward</div>

            <md-outlet></md-outlet>
        `
    }

    handleClick1(event) {
        this.router.clear().filter("user", "name").filter("pass", "word").navigate();
    }
    handleClick2(event) {
        this.router.clear().hash("hash-tag").navigate();
    }
    handleClick3(event) {
        this.router.clear().filter("user", "name").filter("pass", "word").hash("hash-tag").navigate();
    }
    handleClick4(event) {
        this.router.clear().filter("age", "30").filter("age", "35").filter("age", "40").navigate();
    }
}
customElements.define("demo-d", DemoD);
export default document.createElement("demo-d");
