"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[204],{4204(d,e,m){var c=m(420),o=m(9757);class t extends o.O{render(){return c.qy`
            <form 
                 @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <md-grid class="demo-grid">
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Checkbox</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox checked></md-checkbox>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox checked disabled></md-checkbox>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox indeterminate></md-checkbox>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox indeterminate disabled></md-checkbox>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox></md-checkbox>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox disabled></md-checkbox>
                            </md-grid-column>

                        </md-grid>
                    </md-grid-column>
                    
                    <md-grid-column expanded="12">
                        <md-button color="outlined" type="reset" label="Reset"></md-button>
                        <md-button color="tonal" type="submit" label="Submit"></md-button>
                    </md-grid-column>
                </md-grid>
            </form>
        `}handleFormdata(d){}handleReset(d){}handleSubmit(d){d.preventDefault()}}customElements.define("demo-checkbox",t);const n=document.createElement("demo-checkbox");m.d(e,["default",0,n])}}]);