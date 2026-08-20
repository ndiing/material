"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[87],{1087(d,m,e){var t=e(420),o=e(9757);class a extends o.O{render(){return t.qy`
            <form 
                @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <md-grid class="demo-grid">
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Radio button</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-radio-button name="radio1" checked></md-radio-button>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-radio-button name="radio2" checked disabled></md-radio-button>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-radio-button name="radio1"></md-radio-button>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-radio-button name="radio2" disabled></md-radio-button>
                            </md-grid-column>

                        </md-grid>
                    </md-grid-column>
                    
                    <md-grid-column expanded="12">
                        <md-button color="outlined" type="reset" label="Reset"></md-button>
                        <md-button color="tonal" type="submit" label="Submit"></md-button>
                    </md-grid-column>
                </md-grid>
            </form>
        `}handleFormdata(d){}handleReset(d){}handleSubmit(d){d.preventDefault()}}customElements.define("demo-radio-button",a);const n=document.createElement("demo-radio-button");e.d(m,["default",0,n])}}]);