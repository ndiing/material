"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[294],{6294(n,o,c){var i=c(420),d=c(9757),m=c(7200),t=c(5856);class a extends d.O{snackbar0=(0,m._)();snackbar1=(0,m._)();snackbar2=(0,m._)();snackbar3=(0,m._)();snackbar4=(0,m._)();snackbar5=(0,m._)();snackbar6=(0,m._)();render(){return i.qy`
            <md-grid class="demo-grid">

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Snackbar</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button label="Show" @click="${this.handleClick0}"></md-button>
                            <md-snackbar
                                ${(0,m.K)(this.snackbar0)}
                                supporting="Single-line snackbar with action"
                                .actions="${[{component:"button",label:"Action",onButtonClick:console.log}]}"
                            ></md-snackbar>
                        </md-grid-column>
                        
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button label="Show" @click="${this.handleClick1}"></md-button>
                            <md-snackbar
                                ${(0,m.K)(this.snackbar1)}
                                supporting="Single-line snackbar with icon"
                                .actions="${[{component:"button",label:"Action",onButtonClick:console.log},{component:"icon-button",icon:"close",onIconButtonClick:console.log}]}"
                            ></md-snackbar>
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>
                

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Single line</h3>
                        </md-grid-column>

                        
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button label="Show" @click="${this.handleClick2}"></md-button>
                            <md-snackbar
                                ${(0,m.K)(this.snackbar2)}
                                supporting="Single-line snackbar"
                            ></md-snackbar>
                        </md-grid-column>
                        

                    </md-grid>
                </md-grid-column>
                
                

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Single line with action</h3>
                        </md-grid-column>

                        
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button label="Show" @click="${this.handleClick3}"></md-button>
                            <md-snackbar
                                ${(0,m.K)(this.snackbar3)}
                                supporting="Single-line snackbar with action"
                                .actions="${[{component:"button",label:"Action",onButtonClick:console.log}]}"
                            ></md-snackbar>
                        </md-grid-column>

                        
                    </md-grid>
                </md-grid-column>
                
                

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Two lines</h3>
                        </md-grid-column>

                        
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button label="Show" @click="${this.handleClick4}"></md-button>
                            <md-snackbar
                                ${(0,m.K)(this.snackbar4)}
                                supporting="Two-line snackbar\nwithout action"
                            ></md-snackbar>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>
                

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Two lines with action</h3>
                        </md-grid-column>

                        
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button label="Show" @click="${this.handleClick5}"></md-button>
                            <md-snackbar
                                ${(0,m.K)(this.snackbar5)}
                                supporting="Two-line snackbar\nwith action"
                                .actions="${[{component:"button",label:"Action",onButtonClick:console.log}]}"
                            ></md-snackbar>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>
                

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Two lines with longer action</h3>
                        </md-grid-column>

                        
                        

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button label="Show" @click="${this.handleClick6}"></md-button>
                            <md-snackbar
                                ${(0,m.K)(this.snackbar6)}
                                supporting="Two-line snackbar\nwith longer action"
                                .actions="${[{component:"button",label:"Longer action",onButtonClick:console.log}]}"
                            ></md-snackbar>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>
                
                
            </md-grid>
        `}handleClick0(n){t.A.show({supporting:"Single-line snackbar with action",actions:[{component:"button",label:"Action",onButtonClick:console.log}]})}handleClick1(n){t.A.show({supporting:"Single-line snackbar with icon",actions:[{component:"button",label:"Action",onButtonClick:console.log},{component:"icon-button",icon:"close",onIconButtonClick:console.log}]})}handleClick2(n){t.A.show({supporting:"Single-line snackbar"})}handleClick3(n){t.A.show({supporting:"Single-line snackbar with action",actions:[{component:"button",label:"Action",onButtonClick:console.log}]})}handleClick4(n){t.A.show({supporting:"Two-line snackbar\nwithout action"})}handleClick5(n){t.A.show({supporting:"Two-line snackbar\nwith action",actions:[{component:"button",label:"Action",onButtonClick:console.log}]})}handleClick6(n){t.A.show({supporting:"Two-line snackbar\nwith longer action",actions:[{component:"button",label:"Longer action",onButtonClick:console.log}]})}}customElements.define("demo-snackbar",a);const l=document.createElement("demo-snackbar");c.d(o,["default",0,l])}}]);