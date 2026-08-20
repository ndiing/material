"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[589],{6589(d,m,e){var c=e(420),t=e(9757);class i extends t.O{render(){return c.qy`
            <form 
                @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <md-grid class="demo-grid">
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Switch</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-switch></md-switch>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-switch checked></md-switch>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-switch icon='["", "check"]'></md-switch>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-switch icon='["", "check"]' checked></md-switch>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-switch icon='["close", "check"]'></md-switch>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-switch icon='["close", "check"]' checked></md-switch>
                            </md-grid-column>
                            

                        </md-grid>
                    </md-grid-column>
                    
                    <md-grid-column expanded="12">
                        <md-button color="outlined" type="reset" label="Reset"></md-button>
                        <md-button color="tonal" type="submit" label="Submit"></md-button>
                    </md-grid-column>
                </md-grid>
            </form>
        `}handleFormdata(d){}handleReset(d){}handleSubmit(d){d.preventDefault()}}customElements.define("demo-switch",i);const o=document.createElement("demo-switch");e.d(m,["default",0,o])}}]);