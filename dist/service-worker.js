if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const f=e=>s(e,n),d={module:{uri:n},exports:o,require:f};i[n]=Promise.all(r.map((e=>d[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"140.js",revision:"813a40b580b9b874a8f1aa0aef86dd88"},{url:"140.js.LICENSE.txt",revision:"df28cb70670e07406415f6b1d728da5f"},{url:"index.html",revision:"206fa452df1afecd200e043935cddf5d"},{url:"main.css",revision:"54050b2a46c1c08fef8317471b42751b"},{url:"main.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));
