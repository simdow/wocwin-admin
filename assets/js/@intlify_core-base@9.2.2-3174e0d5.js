import{m as e}from"./@intlify_message-compiler@9.2.2-53a6b062.js";import{s as t}from"./@intlify_shared@9.2.2-559cddb0.js";import{d as n}from"./@intlify_devtools-if@9.2.2-c4c7726f.js";var r={exports:{}},a={};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(a,"__esModule",{value:!0});var s=e,i=t,o=n;const l=[];l[0
/* BEFORE_PATH */]={w:[0
/* BEFORE_PATH */],i:[3,0
/* APPEND */],"[":[4
/* IN_SUB_PATH */],o:[7
/* AFTER_PATH */]},l[1
/* IN_PATH */]={w:[1
/* IN_PATH */],".":[2
/* BEFORE_IDENT */],"[":[4
/* IN_SUB_PATH */],o:[7
/* AFTER_PATH */]},l[2
/* BEFORE_IDENT */]={w:[2
/* BEFORE_IDENT */],i:[3,0
/* APPEND */],0:[3,0
/* APPEND */]},l[3
/* IN_IDENT */]={i:[3,0
/* APPEND */],0:[3,0
/* APPEND */],w:[1,1
/* PUSH */],".":[2,1
/* PUSH */],"[":[4,1
/* PUSH */],o:[7,1
/* PUSH */]},l[4
/* IN_SUB_PATH */]={"'":[5,0
/* APPEND */],'"':[6,0
/* APPEND */],"[":[4,2
/* INC_SUB_PATH_DEPTH */],"]":[1,3
/* PUSH_SUB_PATH */],o:8,l:[4,0
/* APPEND */]},l[5
/* IN_SINGLE_QUOTE */]={"'":[4,0
/* APPEND */],o:8,l:[5,0
/* APPEND */]},l[6
/* IN_DOUBLE_QUOTE */]={'"':[4,0
/* APPEND */],o:8,l:[6,0
/* APPEND */]};const c=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function u(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function m(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,c.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}function f(e){const t=[];let n,r,a,s,i,o,c,f=-1,g=0,_=0;const b=[];function p(){const t=e[f+1];if(5===g&&"'"===t||6===g&&'"'===t)return f++,a="\\"+t,b[0
/* APPEND */](),!0}for(b[0
/* APPEND */]=()=>{void 0===r?r=a:r+=a},b[1
/* PUSH */]=()=>{void 0!==r&&(t.push(r),r=void 0)},b[2
/* INC_SUB_PATH_DEPTH */]=()=>{b[0
/* APPEND */](),_++},b[3
/* PUSH_SUB_PATH */]=()=>{if(_>0)_--,g=4,b[0
/* APPEND */]();else{if(_=0,void 0===r)return!1;if(r=m(r),!1===r)return!1;b[1
/* PUSH */]()}};null!==g;)if(f++,n=e[f],"\\"!==n||!p()){if(s=u(n),c=l[g],i=c[s]||c.l||8,8===i)return;if(g=i[0],void 0!==i[1]&&(o=b[i[1]],o&&(a=n,!1===o())))return;if(7===g)return t}}const g=new Map;function _(e,t){return i.isObject(e)?e[t]:null}const b=e=>e,p=e=>"",d="text",A=e=>0===e.length?"":e.join(""),O=i.toDisplayString;function T(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function F(e={}){const t=e.locale,n=function(e){const t=i.isNumber(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(i.isNumber(e.named.count)||i.isNumber(e.named.n))?i.isNumber(e.named.count)?e.named.count:i.isNumber(e.named.n)?e.named.n:t:t}(e),r=i.isObject(e.pluralRules)&&i.isString(t)&&i.isFunction(e.pluralRules[t])?e.pluralRules[t]:T,a=i.isObject(e.pluralRules)&&i.isString(t)&&i.isFunction(e.pluralRules[t])?T:void 0,s=e.list||[],o=e.named||{};i.isNumber(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,o);function l(t){const n=i.isFunction(e.messages)?e.messages(t):!!i.isObject(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):p)}const c=i.isPlainObject(e.processor)&&i.isFunction(e.processor.normalize)?e.processor.normalize:A,u=i.isPlainObject(e.processor)&&i.isFunction(e.processor.interpolate)?e.processor.interpolate:O,m={list:e=>s[e],named:e=>o[e],plural:e=>e[r(n,e.length,a)],linked:(t,...n)=>{const[r,a]=n;let s="text",o="";1===n.length?i.isObject(r)?(o=r.modifier||o,s=r.type||s):i.isString(r)&&(o=r||o):2===n.length&&(i.isString(r)&&(o=r||o),i.isString(a)&&(s=a||s));let c=l(t)(m);return"vnode"===s&&i.isArray(c)&&o&&(c=c[0]),o?(u=o,e.modifiers?e.modifiers[u]:b)(c,s):c;var u},message:l,type:i.isPlainObject(e.processor)&&i.isString(e.processor.type)?e.processor.type:d,interpolate:u,normalize:c};return m}let N=null;const E=k(o.IntlifyDevToolsHooks.FunctionTranslate);function k(e){return t=>N&&N.emit(e,t)}const S={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7},h={[S.NOT_FOUND_KEY]:"Not found '{key}' key in '{locale}' locale messages.",[S.FALLBACK_TO_TRANSLATE]:"Fall back to translate '{key}' key with '{target}' locale.",[S.CANNOT_FORMAT_NUMBER]:"Cannot format a number value due to not supported Intl.NumberFormat.",[S.FALLBACK_TO_NUMBER_FORMAT]:"Fall back to number format '{key}' key with '{target}' locale.",[S.CANNOT_FORMAT_DATE]:"Cannot format a date value due to not supported Intl.DateTimeFormat.",[S.FALLBACK_TO_DATE_FORMAT]:"Fall back to datetime format '{key}' key with '{target}' locale."};function y(e,t,n){return[...new Set([n,...i.isArray(t)?t:i.isObject(t)?Object.keys(t):i.isString(t)?[t]:[n]])]}function C(e,t,n){let r=!0;for(let a=0;a<t.length&&i.isBoolean(r);a++){const s=t[a];i.isString(s)&&(r=D(e,t[a],n))}return r}function D(e,t,n){let r;const a=t.split("-");do{r=M(e,a.join("-"),n),a.splice(-1,1)}while(a.length&&!0===r);return r}function M(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const a=t.replace(/!/g,"");e.push(a),(i.isArray(n)||i.isPlainObject(n))&&n[a]&&(r=n[a])}return r}const I="9.2.2",j="en-US",R=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;let v,L,W;let w=null;let P=null;let x=0;function U(e,t,n,r,a){const{missing:s,onWarn:o}=e;if(null!==s){const r=s(e,n,t,a);return i.isString(r)?r:t}return t}const B=e=>e;let V=Object.create(null);let $=s.CompileErrorCodes.__EXTEND_POINT__;const G=()=>++$,K={INVALID_ARGUMENT:$,INVALID_DATE_ARGUMENT:G(),INVALID_ISO_DATE_ARGUMENT:G(),__EXTEND_POINT__:G()};function H(e){return s.createCompileError(e,null,void 0)}K.INVALID_ARGUMENT,K.INVALID_DATE_ARGUMENT,K.INVALID_ISO_DATE_ARGUMENT;const Y=()=>"",z=e=>i.isFunction(e);function X(e,t,n,r,a,s){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=e,m=u(e,r,n);let f,g={},_=null;for(let b=0;b<m.length&&(f=m[b],g=o[f]||{},null===(_=c(g,t))&&(_=g[t]),!i.isString(_)&&!i.isFunction(_));b++){const n=U(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
t,f,0,"translate");n!==t&&(_=n)}return[_,f,g]}function Z(e,t,n,r,a,s){const{messageCompiler:o,warnHtmlMessage:l}=e;if(z(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==o){const e=()=>r;return e.locale=n,e.key=t,e}const c=o(r,function(e,t,n,r,a,s){return{warnHtmlMessage:a,onError:e=>{throw s&&s(e),e},onCacheKey:e=>i.generateFormatCacheKey(t,n,e)}}(0,n,a,0,l,s));return c.locale=n,c.key=t,c.source=r,c}function J(...e){const[t,n,r]=e,a={};if(!i.isString(t)&&!i.isNumber(t)&&!z(t))throw H(K.INVALID_ARGUMENT);const s=i.isNumber(t)?String(t):(z(t),t);return i.isNumber(n)?a.plural=n:i.isString(n)?a.default=n:i.isPlainObject(n)&&!i.isEmptyObject(n)?a.named=n:i.isArray(n)&&(a.list=n),i.isNumber(r)?a.plural=r:i.isString(r)?a.default=r:i.isPlainObject(r)&&i.assign(a,r),[s,a]}const q=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Q(...e){const[t,n,r,a]=e,s={};let o,l={};if(i.isString(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw H(K.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();o=new Date(n);try{o.toISOString()}catch(c){throw H(K.INVALID_ISO_DATE_ARGUMENT)}}else if(i.isDate(t)){if(isNaN(t.getTime()))throw H(K.INVALID_DATE_ARGUMENT);o=t}else{if(!i.isNumber(t))throw H(K.INVALID_ARGUMENT);o=t}return i.isString(n)?s.key=n:i.isPlainObject(n)&&Object.keys(n).forEach((e=>{q.includes(e)?l[e]=n[e]:s[e]=n[e]})),i.isString(r)?s.locale=r:i.isPlainObject(r)&&(l=r),i.isPlainObject(a)&&(l=a),[s.key||"",o,s,l]}const ee=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function te(...e){const[t,n,r,a]=e,s={};let o={};if(!i.isNumber(t))throw H(K.INVALID_ARGUMENT);const l=t;return i.isString(n)?s.key=n:i.isPlainObject(n)&&Object.keys(n).forEach((e=>{ee.includes(e)?o[e]=n[e]:s[e]=n[e]})),i.isString(r)?s.locale=r:i.isPlainObject(r)&&(o=r),i.isPlainObject(a)&&(o=a),[s.key||"",l,s,o]}a.CompileErrorCodes=s.CompileErrorCodes,a.createCompileError=s.createCompileError,a.CoreErrorCodes=K,a.CoreWarnCodes=S,a.DATETIME_FORMAT_OPTIONS_KEYS=q,a.DEFAULT_LOCALE=j,a.DEFAULT_MESSAGE_DATA_TYPE=d,a.MISSING_RESOLVE_VALUE="",a.NOT_REOSLVED=-1,a.NUMBER_FORMAT_OPTIONS_KEYS=ee,a.VERSION=I,a.clearCompileCache=function(){V=Object.create(null)},a.clearDateTimeFormat=function(e,t,n){const r=e;for(const a in n){const e=`${t}__${a}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}},a.clearNumberFormat=function(e,t,n){const r=e;for(const a in n){const e=`${t}__${a}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}},a.compileToFunction=function(e,t={}){{const n=(t.onCacheKey||B)(e),r=V[n];if(r)return r;let a=!1;const i=t.onError||s.defaultOnError;t.onError=e=>{a=!0,i(e)};const{code:o}=s.baseCompile(e,t),l=new Function(`return ${o}`)();return a?l:V[n]=l}},a.createCoreContext=function(e={}){const t=i.isString(e.version)?e.version:I,n=i.isString(e.locale)?e.locale:j,r=i.isArray(e.fallbackLocale)||i.isPlainObject(e.fallbackLocale)||i.isString(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,a=i.isPlainObject(e.messages)?e.messages:{[n]:{}},s=i.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=i.isPlainObject(e.numberFormats)?e.numberFormats:{[n]:{}},l=i.assign({},e.modifiers||{},{upper:(e,t)=>"text"===t&&i.isString(e)?e.toUpperCase():"vnode"===t&&i.isObject(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&i.isString(e)?e.toLowerCase():"vnode"===t&&i.isObject(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&i.isString(e)?R(e):"vnode"===t&&i.isObject(e)&&"__v_isVNode"in e?R(e.children):e}),c=e.pluralRules||{},u=i.isFunction(e.missing)?e.missing:null,m=!i.isBoolean(e.missingWarn)&&!i.isRegExp(e.missingWarn)||e.missingWarn,f=!i.isBoolean(e.fallbackWarn)&&!i.isRegExp(e.fallbackWarn)||e.fallbackWarn,g=!!e.fallbackFormat,b=!!e.unresolving,p=i.isFunction(e.postTranslation)?e.postTranslation:null,d=i.isPlainObject(e.processor)?e.processor:null,A=!i.isBoolean(e.warnHtmlMessage)||e.warnHtmlMessage,O=!!e.escapeParameter,T=i.isFunction(e.messageCompiler)?e.messageCompiler:v,F=i.isFunction(e.messageResolver)?e.messageResolver:L||_,N=i.isFunction(e.localeFallbacker)?e.localeFallbacker:W||y,E=i.isObject(e.fallbackContext)?e.fallbackContext:void 0,k=i.isFunction(e.onWarn)?e.onWarn:i.warn,S=e,h=i.isObject(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,C=i.isObject(S.__numberFormatters)?S.__numberFormatters:new Map,D=i.isObject(S.__meta)?S.__meta:{};x++;const M={version:t,cid:x,locale:n,fallbackLocale:r,messages:a,modifiers:l,pluralRules:c,missing:u,missingWarn:m,fallbackWarn:f,fallbackFormat:g,unresolving:b,postTranslation:p,processor:d,warnHtmlMessage:A,escapeParameter:O,messageCompiler:T,messageResolver:F,localeFallbacker:N,fallbackContext:E,onWarn:k,__meta:D};return M.datetimeFormats=s,M.numberFormats=o,M.__datetimeFormatters=h,M.__numberFormatters=C,M},a.createCoreError=H,a.createMessageContext=F,a.datetime=function(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:o}=e,{__datetimeFormatters:l}=e,[c,u,m,f]=Q(...t);i.isBoolean(m.missingWarn)?m.missingWarn:e.missingWarn,i.isBoolean(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn;const g=!!m.part,_=i.isString(m.locale)?m.locale:e.locale,b=o(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
a,_);if(!i.isString(c)||""===c)return new Intl.DateTimeFormat(_,f).format(u);let p,d={},A=null;for(let F=0;F<b.length&&(p=b[F],d=n[p]||{},A=d[c],!i.isPlainObject(A));F++)U(e,c,p,0,"datetime format");if(!i.isPlainObject(A)||!i.isString(p))return r?-1:c;let O=`${p}__${c}`;i.isEmptyObject(f)||(O=`${O}__${JSON.stringify(f)}`);let T=l.get(O);return T||(T=new Intl.DateTimeFormat(p,i.assign({},A,f)),l.set(O,T)),g?T.formatToParts(u):T.format(u)},a.fallbackWithLocaleChain=function(e,t,n){const r=i.isString(n)?n:j,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let s=a.__localeChainCache.get(r);if(!s){s=[];let e=[n];for(;i.isArray(e);)e=C(s,e,t);const o=i.isArray(t)||!i.isPlainObject(t)?t:t.default?t.default:null;e=i.isString(o)?[o]:o,i.isArray(e)&&C(s,e,!1),a.__localeChainCache.set(r,s)}return s},a.fallbackWithSimple=y,a.getAdditionalMeta=()=>w,a.getDevToolsHook=function(){return N},a.getFallbackContext=()=>P,a.getWarnMessage=function(e,...t){return i.format(h[e],...t)},a.handleMissing=U,a.initI18nDevTools=function(e,t,n){N&&N.emit(o.IntlifyDevToolsHooks.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})},a.isMessageFunction=z,a.isTranslateFallbackWarn=function(e,t){return e instanceof RegExp?e.test(t):e},a.isTranslateMissingWarn=function(e,t){return e instanceof RegExp?e.test(t):e},a.number=function(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:o}=e,{__numberFormatters:l}=e,[c,u,m,f]=te(...t);i.isBoolean(m.missingWarn)?m.missingWarn:e.missingWarn,i.isBoolean(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn;const g=!!m.part,_=i.isString(m.locale)?m.locale:e.locale,b=o(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
a,_);if(!i.isString(c)||""===c)return new Intl.NumberFormat(_,f).format(u);let p,d={},A=null;for(let F=0;F<b.length&&(p=b[F],d=n[p]||{},A=d[c],!i.isPlainObject(A));F++)U(e,c,p,0,"number format");if(!i.isPlainObject(A)||!i.isString(p))return r?-1:c;let O=`${p}__${c}`;i.isEmptyObject(f)||(O=`${O}__${JSON.stringify(f)}`);let T=l.get(O);return T||(T=new Intl.NumberFormat(p,i.assign({},A,f)),l.set(O,T)),g?T.formatToParts(u):T.format(u)},a.parse=f,a.parseDateTimeArgs=Q,a.parseNumberArgs=te,a.parseTranslateArgs=J,a.registerLocaleFallbacker=function(e){W=e},a.registerMessageCompiler=function(e){v=e},a.registerMessageResolver=function(e){L=e},a.resolveValue=function(e,t){if(!i.isObject(e))return null;let n=g.get(t);if(n||(n=f(t),n&&g.set(t,n)),!n)return null;const r=n.length;let a=e,s=0;for(;s<r;){const e=a[n[s]];if(void 0===e)return null;a=e,s++}return a},a.resolveWithKeyValue=_,a.setAdditionalMeta=e=>{w=e},a.setDevToolsHook=function(e){N=e},a.setFallbackContext=e=>{P=e},a.translate=function(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:a,messageCompiler:s,fallbackLocale:o,messages:l}=e,[c,u]=J(...t),m=i.isBoolean(u.missingWarn)?u.missingWarn:e.missingWarn,f=i.isBoolean(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,g=i.isBoolean(u.escapeParameter)?u.escapeParameter:e.escapeParameter,_=!!u.resolvedMessage,b=i.isString(u.default)||i.isBoolean(u.default)?i.isBoolean(u.default)?s?c:()=>c:u.default:n?s?c:()=>c:"",p=n||""!==b,d=i.isString(u.locale)?u.locale:e.locale;g&&function(e){i.isArray(e.list)?e.list=e.list.map((e=>i.isString(e)?i.escapeHtml(e):e)):i.isObject(e.named)&&Object.keys(e.named).forEach((t=>{i.isString(e.named[t])&&(e.named[t]=i.escapeHtml(e.named[t]))}))}(u);let[A,O,T]=_?[c,d,l[d]||{}]:X(e,c,d,o,f,m),N=A,E=c;if(_||i.isString(N)||z(N)||p&&(N=b,E=N),!(_||(i.isString(N)||z(N))&&i.isString(O)))return a?-1:c;let k=!1;const S=z(N)?N:Z(e,c,O,N,E,(()=>{k=!0}));if(k)return N;const h=function(e,t,n,r){const{modifiers:a,pluralRules:s,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:m}=e,f=r=>{let a=o(n,r);if(null==a&&m){const[,,e]=X(m,r,t,l,c,u);a=o(e,r)}if(i.isString(a)){let n=!1;const s=Z(e,r,t,a,r,(()=>{n=!0}));return n?Y:s}return z(a)?a:Y},g={locale:t,modifiers:a,pluralRules:s,messages:f};e.processor&&(g.processor=e.processor);r.list&&(g.list=r.list);r.named&&(g.named=r.named);i.isNumber(r.plural)&&(g.pluralIndex=r.plural);return g}(e,O,T,u),y=function(e,t,n){const r=t(n);return r}(0,S,F(h));return r?r(y,c):y},a.translateDevTools=E,a.updateFallbackLocale=function(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)},r.exports=a;var ne=r.exports;export{ne as c};
