import { html } from "lit";
import { MDComponent } from "../../material/foundation/component";

const data1=[
    {
        "icon": null,
        "label": "Label",
        "type": null,
        "appearance": "outlined",
        "activated": true
    },
    {
        "icon": null,
        "label": "Label",
        "type": null,
        "appearance": "outlined",
        "activated": false
    },
    {
        "icon": null,
        "label": "Label",
        "type": null,
        "appearance": "outlined",
        "activated": false
    }
]

const data2=[
    {
        "icon": null,
        "label": "Label",
        "type": null,
        "appearance": "outlined",
        "activated": true
    },
    {
        "icon": null,
        "label": "Label",
        "type": null,
        "appearance": "outlined",
        "activated": true
    },
    {
        "icon": null,
        "label": "Label",
        "type": null,
        "appearance": "outlined",
        "activated": false
    }
]

class DevSegmentedButton extends MDComponent{
    render(){
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout__grid">
                    <div class="
                        md-layout__column
                        md-layout__column--expanded4
                        md-layout__column--medium4
                        md-layout__column--compact4
                    ">
                        <md-segmented-button .data="${data1}"></md-segmented-button>
                        <br><br>
                        <md-segmented-button type="multi-select" .data="${data2}"></md-segmented-button>
                    </div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded4
                        md-layout__column--medium4
                        md-layout__column--compact4
                    "></div>
                    <div class="
                        md-layout__column
                        md-layout__column--expanded4
                        md-layout__column--medium4
                        md-layout__column--compact4
                    "></div>
                </div>
            <!-- </div> -->
        `
    }
}

customElements.define('dev-segmented-button',DevSegmentedButton)

export default document.createElement('dev-segmented-button')