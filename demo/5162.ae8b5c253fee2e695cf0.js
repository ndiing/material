"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[5162],{5162:(i,e,t)=>{t.r(e),t.d(e,{default:()=>j});var o=t(6684),s=t(8548),l=t(4946),a=t(4353);let d,r,m,n,c,v=i=>i;const u=Object.groupBy(l,(i=>i.group)),_=[];for(const i in u){const e=u[i];_.push([{section:i}]);for(let i=0;i<e.length;i+=10)_.push(e.slice(i,i+10))}class h extends s.z{constructor(){super(),this.virtual=new a.V7(this,{}),this.virtual.options.rowTotal=_.length,this.virtual.options.rowHeight=140,this.virtual.options.rowBuffer=0}render(){var i;return(0,o.qy)(d||(d=v`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-layout class="dev-emoji__fit" variant="column">
                        <md-layout-item class="dev-emoji__fit" expanded="12" medium="8" compact="4">
                            <div class="md-virtual" @onVirtualScroll="${0}">
                                <div class="md-virtual__scrollbar"></div>
                                <div class="md-virtual__container">
                                    <div class="dev-emoji__grid">
                                        ${0}
                                    </div>
                                </div>
                            </div>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `),this.handleVirtualScroll,null===(i=this.virtualRows)||void 0===i?void 0:i.map((i=>(0,o.qy)(r||(r=v`
                                                <div class="dev-emoji__row">
                                                    ${0}
                                                </div>
                                            `),i.map((i=>(0,o.qy)(m||(m=v`
                                                            ${0}
                                                            ${0}
                                                        `),i.section?(0,o.qy)(n||(n=v`<div class="dev-emoji__section">${0}</div>`),i.section):o.s6,i.emoji?(0,o.qy)(c||(c=v`
                                                                      <div class="dev-emoji__column">
                                                                          <md-emoji class="dev-emoji__emoji" emoji="${0}"></md-emoji>
                                                                          <div class="dev-emoji__label">${0}</div>
                                                                      </div>
                                                                  `),i.emoji,i.shortcodes):o.s6)))))))}handleVirtualScroll(i){this.virtualRows=_.slice(this.virtual.rowStart,this.virtual.rowEnd),this.requestUpdate()}}customElements.define("dev-emoji",h);const j=document.createElement("dev-emoji")}}]);
//# sourceMappingURL=5162.ae8b5c253fee2e695cf0.js.map