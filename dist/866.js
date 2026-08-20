"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[866],{866(t,o,n){var d=n(420),i=n(9757),e=n(7200);class m extends i.O{render(){return d.qy`
            <md-grid class="demo-grid">
                
                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Plain tooltip</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button0"  label="Hover"></md-button>
                            <md-tooltip for="button0" ${(0,e.K)(this.tooltip0)} variant="plain" supporting="Save to favorites"></md-tooltip>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button1"   label="Hover"></md-button>
                            <md-tooltip for="button1"  variant="plain" supporting="Grant value is calculated using the\nclosing stock price from the day\nbefore the grant date. Amounts do\nnot reflect tax witholdings."></md-tooltip>
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Rich tooltip</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button2"  label="Hover"></md-button>
                            <md-tooltip for="button2" ${(0,e.K)(this.tooltip2)} 
                                variant="rich"
                                subhead="Rich tooltip"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                                .buttons="${[{label:"Action"},{label:"Action"}]}"
                            ></md-tooltip>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button3"  label="Hover"></md-button>
                            <md-tooltip for="button3" ${(0,e.K)(this.tooltip3)} 
                                variant="rich"
                                subhead="Rich tooltip"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                                .buttons="${[{label:"Action"}]}"
                            ></md-tooltip>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button4"  label="Hover"></md-button>
                            <md-tooltip for="button4" ${(0,e.K)(this.tooltip4)} 
                                variant="rich"
                                subhead="Rich tooltip"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                            ></md-tooltip>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button5"  label="Hover"></md-button>
                            <md-tooltip for="button5" ${(0,e.K)(this.tooltip5)} 
                                variant="rich"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                                .buttons="${[{label:"Action"}]}"
                            ></md-tooltip>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button id="button6"  label="Hover"></md-button>
                            <md-tooltip for="button6" ${(0,e.K)(this.tooltip6)} 
                                variant="rich"
                                supporting="Rich tooltips bring attention to a particular\nelement of feature that warrants a person's\nfocus."
                                .buttons="${[{label:"Action"},{label:"Action"}]}"
                            ></md-tooltip>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>

            </md-grid>
        `}}customElements.define("demo-tooltip",m);const a=document.createElement("demo-tooltip");n.d(o,["default",0,a])}}]);