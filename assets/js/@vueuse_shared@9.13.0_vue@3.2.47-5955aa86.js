import"./vue@3.2.47-e9f0a81f.js";import{g as e,h as t,n,z as o,x as r}from"./@vue_runtime-core@3.2.47-3393fa3b.js";import{g as u,o as a,u as s,c as i,q as l,v as c}from"./@vue_reactivity@3.2.47-71c1ef0d.js";var f,v=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function g(e,t){var n;const r=c();var u,a;return o((()=>{r.value=e()}),(u=((e,t)=>{for(var n in t||(t={}))w.call(t,n)&&b(e,n,t[n]);if(d)for(var n of d(t))y.call(t,n)&&b(e,n,t[n]);return e})({},t),a={flush:null!=(n=null==t?void 0:t.flush)?n:"sync"},m(u,p(a)))),l(r)}const h="undefined"!=typeof window,P=e=>void 0!==e,j=e=>"boolean"==typeof e,O=e=>"function"==typeof e,T=e=>"number"==typeof e,D=e=>"string"==typeof e,x=()=>{},A=h&&(null==(f=null==window?void 0:window.navigator)?void 0:f.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function _(e){return"function"==typeof e?e():s(e)}function k(e,t){return function(...n){return new Promise(((o,r)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(o).catch(r)}))}}function q(e){return e}function z(e){return!!u()&&(a(e),!0)}function C(e,t=200,n={}){return k(function(e,t={}){let n,o,r=x;const u=e=>{clearTimeout(e),r(),r=x};return a=>{const s=_(e),i=_(t.maxWait);return n&&u(n),s<=0||void 0!==i&&i<=0?(o&&(u(o),o=null),Promise.resolve(a())):new Promise(((e,l)=>{r=t.rejectOnCancel?l:e,i&&!o&&(o=setTimeout((()=>{n&&u(n),o=null,e(a())}),i)),n=setTimeout((()=>{o&&u(o),o=null,e(a())}),s)}))}}(t,n),e)}function E(e,t=200,n={}){const o=i(e.value),u=C((()=>{o.value=e.value}),t,n);return r(e,(()=>u())),o}function I(e,t=200,n=!1,o=!0,r=!1){return k(function(e,t=!0,n=!0,o=!1){let r,u,a=0,s=!0,i=x;const l=()=>{r&&(clearTimeout(r),r=void 0,i(),i=x)};return c=>{const f=_(e),v=Date.now()-a,m=()=>u=c();return l(),f<=0?(a=Date.now(),m()):(v>f&&(n||!s)?(a=Date.now(),m()):t&&(u=new Promise(((e,t)=>{i=o?t:e,r=setTimeout((()=>{a=Date.now(),s=!0,e(m()),l()}),Math.max(0,f-v))}))),n||r||(r=setTimeout((()=>s=!0),f)),s=!1,u)}}(t,n,o,r),e)}function M(o,r=!0){e()?t(o):r?o():n(o)}function S(e,t,n={}){const{immediate:o=!0}=n,r=i(!1);let u=null;function a(){u&&(clearTimeout(u),u=null)}function s(){r.value=!1,a()}function c(...n){a(),r.value=!0,u=setTimeout((()=>{r.value=!1,u=null,e(...n)}),_(t))}return o&&(r.value=!0,h&&c()),z(s),{isPending:l(r),start:c,stop:s}}export{D as a,M as b,q as c,A as d,O as e,P as f,T as g,j as h,h as i,E as j,S as k,g as l,C as m,x as n,_ as r,z as t,I as u};
