import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoButtonGroup extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Standard button group</h3>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                size="extra-small"
                                color="tonal"
                                .buttons="${[
                                    {id:18,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:19,component:'icon-button',icon:'image',width:'default',},
                                    {id:20,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:21,component:'icon-button',icon:'image',width:'wide',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                size="small"
                                color="outlined"
                                .buttons="${[
                                    {id:22,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:23,component:'icon-button',icon:'image',width:'default',},
                                    {id:24,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:25,component:'icon-button',icon:'image',width:'wide',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                size="medium"
                                color="filled"
                                .buttons="${[
                                    {id:26,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:27,component:'icon-button',icon:'image',width:'default',},
                                    {id:28,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:29,component:'icon-button',icon:'image',width:'wide',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                size="large"
                                color="tonal"
                                .buttons="${[
                                    {id:30,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:31,component:'icon-button',icon:'image',width:'default',},
                                    {id:32,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:33,component:'icon-button',icon:'image',width:'wide',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                size="extra-large"
                                color="filled"
                                .buttons="${[
                                    {id:34,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:35,component:'icon-button',icon:'image',width:'default',},
                                    {id:36,component:'icon-button',icon:'image',width:'narrow',},
                                    {id:37,component:'icon-button',icon:'image',width:'wide',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Connected button group</h3>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="extra-small"
                                shape="round"
                                .buttons="${[
                                    {id:38,component:'button',icon:'image',label:'Label',},
                                    {id:39,component:'button',icon:'image',label:'Label',},
                                    {id:40,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="small"
                                shape="round"
                                .buttons="${[
                                    {id:41,component:'button',icon:'image',label:'Label',},
                                    {id:42,component:'button',icon:'image',label:'Label',},
                                    {id:43,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="medium"
                                shape="round"
                                .buttons="${[
                                    {id:44,component:'button',icon:'image',label:'Label',},
                                    {id:45,component:'button',icon:'image',label:'Label',},
                                    {id:46,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="large"
                                shape="round"
                                .buttons="${[
                                    {id:47,component:'button',icon:'image',label:'Label',},
                                    {id:48,component:'button',icon:'image',label:'Label',},
                                    {id:49,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="extra-large"
                                shape="round"
                                .buttons="${[
                                    {id:0,component:'button',icon:'image',label:'Label',},
                                    {id:1,component:'button',icon:'image',label:'Label',},
                                    {id:2,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Connected button group</h3>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="extra-small"
                                shape="square"
                                .buttons="${[
                                    {id:3,component:'button',icon:'image',label:'Label',},
                                    {id:4,component:'button',icon:'image',label:'Label',},
                                    {id:5,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="small"
                                shape="square"
                                .buttons="${[
                                    {id:6,component:'button',icon:'image',label:'Label',},
                                    {id:7,component:'button',icon:'image',label:'Label',},
                                    {id:8,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="medium"
                                shape="square"
                                .buttons="${[
                                    {id:9,component:'button',icon:'image',label:'Label',},
                                    {id:10,component:'button',icon:'image',label:'Label',},
                                    {id:11,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="large"
                                shape="square"
                                .buttons="${[
                                    {id:12,component:'button',icon:'image',label:'Label',},
                                    {id:13,component:'button',icon:'image',label:'Label',},
                                    {id:14,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="12" medium="4" compact="4">
                            <md-button-group
                                singleSelect
                                variant="connected"
                                size="extra-large"
                                shape="square"
                                .buttons="${[
                                    {id:15,component:'button',icon:'image',label:'Label',},
                                    {id:16,component:'button',icon:'image',label:'Label',},
                                    {id:17,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Connected button group</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="extra-small"
                                shape="round"
                                .buttons="${[
                                    {id:38,component:'button',icon:'image',label:'Label',},
                                    {id:39,component:'button',icon:'image',label:'Label',},
                                    {id:40,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="small"
                                shape="round"
                                .buttons="${[
                                    {id:41,component:'button',icon:'image',label:'Label',},
                                    {id:42,component:'button',icon:'image',label:'Label',},
                                    {id:43,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="medium"
                                shape="round"
                                .buttons="${[
                                    {id:44,component:'button',icon:'image',label:'Label',},
                                    {id:45,component:'button',icon:'image',label:'Label',},
                                    {id:46,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="large"
                                shape="round"
                                .buttons="${[
                                    {id:47,component:'button',icon:'image',label:'Label',},
                                    {id:48,component:'button',icon:'image',label:'Label',},
                                    {id:49,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="extra-large"
                                shape="round"
                                .buttons="${[
                                    {id:0,component:'button',icon:'image',label:'Label',},
                                    {id:1,component:'button',icon:'image',label:'Label',},
                                    {id:2,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Connected button group</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="extra-small"
                                shape="square"
                                .buttons="${[
                                    {id:3,component:'button',icon:'image',label:'Label',},
                                    {id:4,component:'button',icon:'image',label:'Label',},
                                    {id:5,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="small"
                                shape="square"
                                .buttons="${[
                                    {id:6,component:'button',icon:'image',label:'Label',},
                                    {id:7,component:'button',icon:'image',label:'Label',},
                                    {id:8,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="medium"
                                shape="square"
                                .buttons="${[
                                    {id:9,component:'button',icon:'image',label:'Label',},
                                    {id:10,component:'button',icon:'image',label:'Label',},
                                    {id:11,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="large"
                                shape="square"
                                .buttons="${[
                                    {id:12,component:'button',icon:'image',label:'Label',},
                                    {id:13,component:'button',icon:'image',label:'Label',},
                                    {id:14,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button-group
                                vertical
                                singleSelect
                                variant="connected"
                                size="extra-large"
                                shape="square"
                                .buttons="${[
                                    {id:15,component:'button',icon:'image',label:'Label',},
                                    {id:16,component:'button',icon:'image',label:'Label',},
                                    {id:17,component:'button',icon:'image',label:'Label',},
                                ]}"
                            ></md-button-group>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>

            </md-grid>
        `
    }
}
customElements.define("demo-button-group", DemoButtonGroup);
export default document.createElement("demo-button-group");
