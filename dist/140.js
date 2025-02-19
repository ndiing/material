/*! For license information please see 140.js.LICENSE.txt */
"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[140],{22:(t,e,s)=>{s.d(e,{fA:()=>r});const i="lit-localize-status";class n{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(i,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(i,this.__litLocalizeEventHandler)}}const r=t=>t.addController(new n(t)),o=[];for(let t=0;t<256;t++)o[t]=(t>>4&15).toString(16)+(15&t).toString(16);new WeakMap,new Map,(new class{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}).resolve()},504:(t,e,s)=>{s.d(e,{Dx:()=>c,Jz:()=>u,Rt:()=>h,cN:()=>p,mY:()=>d,ps:()=>o,qb:()=>r});var i=s(752);const{I:n}=i.ge,r=(t,e)=>void 0===e?void 0!==t?._$litType$:t?._$litType$===e,o=t=>null!=t?._$litType$?.h,h=t=>void 0===t.strings,l=()=>document.createComment(""),c=(t,e,s)=>{const i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(l(),r),o=i.insertBefore(l(),r);s=new n(e,o,t,t.options)}else{const e=s._$AB.nextSibling,n=s._$AM,o=n!==t;if(o){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==n._$AU&&s._$AP(e)}if(e!==r||o){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,r),t=e}}}return s},a={},d=(t,e=a)=>t._$AH=e,p=t=>t._$AH,u=t=>{t._$AR()}},804:(t,e,s)=>{s.d(e,{OA:()=>i,WL:()=>r,u$:()=>n});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},787:(t,e,s)=>{s.d(e,{S:()=>i});const i=(t,e,s)=>{for(const s of e)if(s[0]===t)return(0,s[1])();return s?.()}},752:(t,e,s)=>{s.d(e,{XX:()=>W,c0:()=>w,ge:()=>D,qy:()=>S,s6:()=>C});const i=globalThis,n=i.trustedTypes,r=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+h,c=`<${l}>`,a=document,d=()=>a.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,$=t=>u(t)||"function"==typeof t?.[Symbol.iterator],_="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,v=/>/g,g=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,y=/"/g,E=/^(?:script|style|textarea|title)$/i,b=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),S=b(1),w=(b(2),b(3),Symbol.for("lit-noChange")),C=Symbol.for("lit-nothing"),T=new WeakMap,P=a.createTreeWalker(a,129);function U(t,e){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(e):e}const x=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",l=f;for(let e=0;e<s;e++){const s=t[e];let a,d,p=-1,u=0;for(;u<s.length&&(l.lastIndex=u,d=l.exec(s),null!==d);)u=l.lastIndex,l===f?"!--"===d[1]?l=A:void 0!==d[1]?l=v:void 0!==d[2]?(E.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=g):void 0!==d[3]&&(l=g):l===g?">"===d[0]?(l=n??f,p=-1):void 0===d[1]?p=-2:(p=l.lastIndex-d[2].length,a=d[1],l=void 0===d[3]?g:'"'===d[3]?y:m):l===y||l===m?l=g:l===A||l===v?l=f:(l=g,n=void 0);const $=l===g&&t[e+1].startsWith("/>")?" ":"";r+=l===f?s+c:p>=0?(i.push(a),s.slice(0,p)+o+s.slice(p)+h+$):s+h+(-2===p?e:$)}return[U(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,c=0;const a=t.length-1,p=this.parts,[u,$]=x(t,e);if(this.el=N.createElement(u,s),P.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=P.nextNode())&&p.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(o)){const e=$[c++],s=i.getAttribute(t).split(h),n=/([.?@])?(.*)/.exec(e);p.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?L:"?"===n[1]?k:"@"===n[1]?z:R}),i.removeAttribute(t)}else t.startsWith(h)&&(p.push({type:6,index:r}),i.removeAttribute(t));if(E.test(i.tagName)){const t=i.textContent.split(h),e=t.length-1;if(e>0){i.textContent=n?n.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],d()),P.nextNode(),p.push({type:2,index:++r});i.append(t[e],d())}}}else if(8===i.nodeType)if(i.data===l)p.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(h,t+1));)p.push({type:7,index:r}),t+=h.length-1}r++}}static createElement(t,e){const s=a.createElement("template");return s.innerHTML=t,s}}function H(t,e,s=t,i){if(e===w)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=p(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=H(t,n._$AS(t,e.values),n,i)),e}class O{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??a).importNode(e,!0);P.currentNode=i;let n=P.nextNode(),r=0,o=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new M(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new B(n,this,t)),this._$AV.push(e),h=s[++o]}r!==h?.index&&(n=P.nextNode(),r++)}return P.currentNode=a,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),p(t)?t===C||null==t||""===t?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):$(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==C&&p(this._$AH)?this._$AA.nextSibling.data=t:this.T(a.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(U(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new O(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new N(t)),e}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new M(this.O(d()),this.O(d()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=C}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=H(this,t,e,0),r=!p(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{const i=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=H(this,i[s+o],e,o),h===w&&(h=this._$AH[o]),r||=!p(h)||h!==this._$AH[o],h===C?t=C:t!==C&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}r&&!i&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class L extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}}class k extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==C)}}class z extends R{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??C)===w)return;const s=this._$AH,i=t===C&&s!==C||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==C&&(s===C||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class B{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const D={M:o,P:h,A:l,C:1,L:x,R:O,D:$,V:H,I:M,H:R,N:k,U:z,B:L,F:B},I=i.litHtmlPolyfillSupport;I?.(N,M),(i.litHtmlVersions??=[]).push("3.2.1");const W=(t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new M(e.insertBefore(d(),t),t,void 0,s??{})}return n._$AI(t),n}},794:(t,e,s)=>{s.d(e,{P:()=>h});var i=s(752),n=s(804),r=s(504);const o=t=>(0,r.ps)(t)?t._$litType$.h:t.strings,h=(0,n.u$)(class extends n.WL{constructor(t){super(t),this.et=new WeakMap}render(t){return[t]}update(t,[e]){const s=(0,r.qb)(this.it)?o(this.it):null,n=(0,r.qb)(e)?o(e):null;if(null!==s&&(null===n||s!==n)){const e=(0,r.cN)(t).pop();let n=this.et.get(s);if(void 0===n){const t=document.createDocumentFragment();n=(0,i.XX)(i.s6,t),n.setConnected(!1),this.et.set(s,n)}(0,r.mY)(n,[e]),(0,r.Dx)(n,void 0,e)}if(null!==n){if(null===s||s!==n){const e=this.et.get(n);if(void 0!==e){const s=(0,r.cN)(e).pop();(0,r.Jz)(t),(0,r.Dx)(t,void 0,s),(0,r.mY)(t,[s])}}this.it=e}else this.it=void 0;return this.render(e)}})},720:(t,e,s)=>{s.d(e,{H:()=>r});var i=s(752),n=s(804);const r=(0,n.u$)(class extends n.WL{constructor(t){if(super(t),t.type!==n.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.st)t in e||(s.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return i.c0}})},31:(t,e,s)=>{s.d(e,{J:()=>n});var i=s(752);const n=t=>t??i.s6},832:(t,e,s)=>{var i=s(752),n=s(504),r=s(804);const o=(t,e)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(e,!1),o(t,e);return!0},h=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===s?.size)},l=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),d(e)}};function c(t){void 0!==this._$AN?(h(this),this._$AM=t,l(this)):this._$AM=t}function a(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)o(i[t],!1),h(i[t]);else null!=i&&(o(i,!1),h(i));else o(this,t)}const d=t=>{t.type==r.OA.CHILD&&(t._$AP??=a,t._$AQ??=c)};class p extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),l(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(o(this,t),h(this))}setValue(t){if((0,n.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const u=new WeakMap;(0,r.u$)(class extends p{render(t){return i.s6}update(t,[e]){const s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),i.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let s=u.get(e);void 0===s&&(s=new WeakMap,u.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?u.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},145:(t,e,s)=>{s.d(e,{W:()=>h});var i=s(752),n=s(804);const r="important",o=" !"+r,h=(0,n.u$)(class extends n.WL{constructor(t){if(super(t),t.type!==n.OA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(o);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?r:""):s[t]=i}}return i.c0}})},781:(t,e,s)=>{s.d(e,{_:()=>o});var i=s(752),n=s(804);class r extends n.WL{constructor(t){if(super(t),this.it=i.s6,t.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===i.s6||null==t)return this._t=void 0,this.it=t;if(t===i.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;const o=(0,n.u$)(r)},684:(t,e,s)=>{s.d(e,{WF:()=>C,qy:()=>w.qy,s6:()=>w.s6});const i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class h{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const l=(t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}},c=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new h("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:a,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:$,getPrototypeOf:_}=Object,f=globalThis,A=f.trustedTypes,v=A?A.emptyScript:"",g=f.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},E=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...u(t),...$(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??E)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[m("elementProperties")]=new Map,S[m("finalized")]=new Map,g?.({ReactiveElement:S}),(f.reactiveElementVersions??=[]).push("2.0.4");var w=s(752);class C extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,w.XX)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w.c0}}C._$litElement$=!0,C.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:C});const T=globalThis.litElementPolyfillSupport;T?.({LitElement:C}),(globalThis.litElementVersions??=[]).push("4.1.1")}}]);