"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[197],{4197(d,i,o){var e=o(420),l=o(9757);class t extends l.O{constructor(){super(),this.handleClick2=this.handleClick2.bind(this)}render(){return e.qy`
                
            
                
            
 
            
             
            <md-grid class="demo-grid">

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Basic dialog title</h3>
                        </md-grid-column>
                        
                        <md-grid-column expanded="6" medium="4" compact="4">
                                            <md-dialog 
                                id="dialog0" 
                                style="width:310px;"
                                headline="Basic dialog title"
                                .buttons="${[{label:"Action 2",color:"text"},{label:"Action 1",color:"text"}]}"
                                .inner="${e.qy`A dialog is a modal window that
                                        appears in front of app content to
                                        provide critical information or prompt
                                        for a decision to be made.`}"
                            ></md-dialog>
                            <md-button label="Show" @click="${this.handleClick0}"></md-button><br><br>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Dialog with hero icon</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                                            <md-dialog 
                                heroIcon 
                                id="dialog1" 
                                style="width:340px;"
                                .leading="${[{component:"icon",icon:"image"}]}"
                                headline="Dialog with hero icon"
                                .inner="${e.qy`A dialog is a modal window that appears in front
                                        of app content to provide critical
                                        information or ask for a decision.`}"
                                .buttons="${[{label:"Cancel",color:"text"},{label:"Accept",color:"text"}]}"
                            ></md-dialog>
                            <md-button label="Show" @click="${this.handleClick1}"></md-button><br><br>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Full-screen dialog title</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                                            <md-dialog 
                                variant="full-screen" 
                                id="dialog2"
                                .leading="${[{component:"icon",icon:"image"}]}"
                                .trailing="${[{component:"button",label:"Save",color:"text",onButtonClick:this.handleClick2}]}"
                                headline="Full-screen dialog title"
                            ></md-dialog>
                            <md-button label="Show" @click="${this.handleClick2}"></md-button><br><br>
                        </md-grid-column>
                        
                    </md-grid>
                </md-grid-column>

            </md-grid>

        `}get dialog0(){return this.querySelector("#dialog0")}get dialog1(){return this.querySelector("#dialog1")}get dialog2(){return this.querySelector("#dialog2")}handleClick0(d){this.dialog0.show()}handleClick1(d){this.dialog1.show()}handleClick2(d){console.log(d),this.dialog2.toggle()}}customElements.define("demo-dialog",t);const n=document.createElement("demo-dialog");o.d(i,["default",0,n])}}]);