"use strict";(self.webpackChunk_ndiing_material=self.webpackChunk_ndiing_material||[]).push([[2928],{2928:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r,o=n(6684);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){return t=a(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,n||[],a(e).constructor):t.apply(e,n))}(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),n=t,c=[{key:"render",value:function(){return(0,o.qy)(r||(e=['\n            <md-form>\n                <div class="md-layout">\n                    <div class="md-layout__grid">\n                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">\n                            <md-number-field label="number" name="number" required cancelAction></md-number-field>\n                        </div>\n                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">\n                            <md-number-field label="number" name="number" required value="123" cancelAction></md-number-field>\n                        </div>\n                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                            <md-button variant="filled-tonal" label="Reset" type="reset"></md-button>\n                            <md-button variant="filled-tonal" label="Submit" type="submit"></md-button>\n                        </div>\n                    </div>\n                </div>\n            </md-form>\n        '],t||(t=e.slice(0)),r=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))));var e,t}}],c&&i(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,c}(n(5376).$2);customElements.define("demo-number-field",f);const d=document.createElement("demo-number-field")}}]);