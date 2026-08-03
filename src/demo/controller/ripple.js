import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoRipple extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-icon-button style="height:64px;width:64px;" icon="menu" .rippleOptions="${{
                unbounded: true // ripple keluar box
            }}"></md-icon-button>
            <md-icon-button style="height:64px;width:32px;" icon="menu" .rippleOptions="${{
                unbounded: true // ripple keluar box
            }}"></md-icon-button>
            <md-icon-button style="height:64px;width:24px;" icon="menu" .rippleOptions="${{
                unbounded: true // ripple keluar box
            }}"></md-icon-button>
            <md-icon-button style="height:32px;width:64px;" icon="menu" .rippleOptions="${{
                unbounded: true // ripple keluar box
            }}"></md-icon-button>
            <md-icon-button style="height:24px;width:64px;" icon="menu" .rippleOptions="${{
                unbounded: true // ripple keluar box
            }}"></md-icon-button>

            <br>
            <br>
            <md-icon-button style="height:64px;width:64px;" icon="menu" .rippleOptions="${{
                unbounded: true, // ripple keluar box
                radius: 32 // ripple kecil
            }}"></md-icon-button>
            <md-icon-button style="height:64px;width:32px;" icon="menu" .rippleOptions="${{
                unbounded: true, // ripple keluar box
                radius: 32 // ripple kecil
            }}"></md-icon-button>
            <md-icon-button style="height:64px;width:24px;" icon="menu" .rippleOptions="${{
                unbounded: true, // ripple keluar box
                radius: 32 // ripple kecil
            }}"></md-icon-button>
            <md-icon-button style="height:32px;width:64px;" icon="menu" .rippleOptions="${{
                unbounded: true, // ripple keluar box
                radius: 32 // ripple kecil
            }}"></md-icon-button>
            <md-icon-button style="height:24px;width:64px;" icon="menu" .rippleOptions="${{
                unbounded: true, // ripple keluar box
                radius: 32 // ripple kecil
            }}"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="default" icon="menu" .rippleOptions="${{
                centered: true // ripple dari tengah
            }}"></md-icon-button>
            <md-icon-button color="default" icon="menu" .rippleOptions="${{
                radius: 32 // ripple kecil
            }}"></md-icon-button>
            <md-icon-button color="default" icon="menu" .rippleOptions="${{
                unbounded: true // ripple keluar box
            }}"></md-icon-button>
            <md-icon-button color="default" icon="menu" .rippleOptions="${{
                trigger: '.md-icon-button__native' // ripple di respon dari element bawahnya
            }}"></md-icon-button>
            <md-icon-button color="default" icon="menu" .rippleOptions="${{
                container: '.md-icon-button__native' // ripple muncul di elemen bawahnya
            }}"></md-icon-button>
        `
    }
}
customElements.define("demo-ripple", DemoRipple);
export default document.createElement("demo-ripple");
