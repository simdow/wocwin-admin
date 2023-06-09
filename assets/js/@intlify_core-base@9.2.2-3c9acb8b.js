import{m as e}from"./@intlify_message-compiler@9.2.2-a38edf5b.js";import{s as t}from"./@intlify_shared@9.2.2-76c746da.js";import{d as n}from"./@intlify_devtools-if@9.2.2-c4c7726f.js";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];return n.push.apply(n,arguments),new(Function.bind.apply(t,n))}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var i={exports:{}},o={};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(o,"__esModule",{value:!0});var l=e,c=t,m=n;const u=[];u[0
/* BEFORE_PATH */]={w:[0
/* BEFORE_PATH */],i:[3,0
/* APPEND */],"[":[4
/* IN_SUB_PATH */],o:[7
/* AFTER_PATH */]},u[1
/* IN_PATH */]={w:[1
/* IN_PATH */],".":[2
/* BEFORE_IDENT */],"[":[4
/* IN_SUB_PATH */],o:[7
/* AFTER_PATH */]},u[2
/* BEFORE_IDENT */]={w:[2
/* BEFORE_IDENT */],i:[3,0
/* APPEND */],0:[3,0
/* APPEND */]},u[3
/* IN_IDENT */]={i:[3,0
/* APPEND */],0:[3,0
/* APPEND */],w:[1,1
/* PUSH */],".":[2,1
/* PUSH */],"[":[4,1
/* PUSH */],o:[7,1
/* PUSH */]},u[4
/* IN_SUB_PATH */]={"'":[5,0
/* APPEND */],'"':[6,0
/* APPEND */],"[":[4,2
/* INC_SUB_PATH_DEPTH */],"]":[1,3
/* PUSH_SUB_PATH */],o:8,l:[4,0
/* APPEND */]},u[5
/* IN_SINGLE_QUOTE */]={"'":[4,0
/* APPEND */],o:8,l:[5,0
/* APPEND */]},u[6
/* IN_DOUBLE_QUOTE */]={'"':[4,0
/* APPEND */],o:8,l:[6,0
/* APPEND */]};const f=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function g(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function _(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,f.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}function p(e){const t=[];let n,r,a,s,i,o,l,c=-1,m=0,f=0;const p=[];function d(){const t=e[c+1];if(5===m&&"'"===t||6===m&&'"'===t)return c++,a="\\"+t,p[0
/* APPEND */](),!0}for(p[0
/* APPEND */]=()=>{void 0===r?r=a:r+=a},p[1
/* PUSH */]=()=>{void 0!==r&&(t.push(r),r=void 0)},p[2
/* INC_SUB_PATH_DEPTH */]=()=>{p[0
/* APPEND */](),f++},p[3
/* PUSH_SUB_PATH */]=()=>{if(f>0)f--,m=4,p[0
/* APPEND */]();else{if(f=0,void 0===r)return!1;if(r=_(r),!1===r)return!1;p[1
/* PUSH */]()}};null!==m;)if(c++,n=e[c],"\\"!==n||!d()){if(s=g(n),l=u[m],i=l[s]||l.l||8,8===i)return;if(m=i[0],void 0!==i[1]&&(o=p[i[1]],o&&(a=n,!1===o())))return;if(7===m)return t}}const d=new Map;function b(e,t){return c.isObject(e)?e[t]:null}const y=e=>e,T=e=>"",O="text",A=e=>0===e.length?"":e.join(""),k=c.toDisplayString;function F(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function N(e={}){const t=e.locale,n=function(e){const t=c.isNumber(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(c.isNumber(e.named.count)||c.isNumber(e.named.n))?c.isNumber(e.named.count)?e.named.count:c.isNumber(e.named.n)?e.named.n:t:t}(e),r=c.isObject(e.pluralRules)&&c.isString(t)&&c.isFunction(e.pluralRules[t])?e.pluralRules[t]:F,a=c.isObject(e.pluralRules)&&c.isString(t)&&c.isFunction(e.pluralRules[t])?F:void 0,s=e.list||[],i=e.named||{};c.isNumber(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,i);function o(t){const n=c.isFunction(e.messages)?e.messages(t):!!c.isObject(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):T)}const l=c.isPlainObject(e.processor)&&c.isFunction(e.processor.normalize)?e.processor.normalize:A,m=c.isPlainObject(e.processor)&&c.isFunction(e.processor.interpolate)?e.processor.interpolate:k,u={list:e=>s[e],named:e=>i[e],plural:e=>e[r(n,e.length,a)],linked:(t,...n)=>{const[r,a]=n;let s="text",i="";1===n.length?c.isObject(r)?(i=r.modifier||i,s=r.type||s):c.isString(r)&&(i=r||i):2===n.length&&(c.isString(r)&&(i=r||i),c.isString(a)&&(s=a||s));let l=o(t)(u);return"vnode"===s&&c.isArray(l)&&i&&(l=l[0]),i?(m=i,e.modifiers?e.modifiers[m]:y)(l,s):l;var m},message:o,type:c.isPlainObject(e.processor)&&c.isString(e.processor.type)?e.processor.type:O,interpolate:m,normalize:l};return u}let v=null;function E(e,t,n){v&&v.emit(m.IntlifyDevToolsHooks.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const h=S(m.IntlifyDevToolsHooks.FunctionTranslate);function S(e){return t=>v&&v.emit(e,t)}const w={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7},C={[w.NOT_FOUND_KEY]:"Not found '{key}' key in '{locale}' locale messages.",[w.FALLBACK_TO_TRANSLATE]:"Fall back to translate '{key}' key with '{target}' locale.",[w.CANNOT_FORMAT_NUMBER]:"Cannot format a number value due to not supported Intl.NumberFormat.",[w.FALLBACK_TO_NUMBER_FORMAT]:"Fall back to number format '{key}' key with '{target}' locale.",[w.CANNOT_FORMAT_DATE]:"Cannot format a date value due to not supported Intl.DateTimeFormat.",[w.FALLBACK_TO_DATE_FORMAT]:"Fall back to datetime format '{key}' key with '{target}' locale."};function M(e,...t){return c.format(C[e],...t)}function I(e,t,n){return[...new Set([n,...c.isArray(t)?t:c.isObject(t)?Object.keys(t):c.isString(t)?[t]:[n]])]}function D(e,t,n){let r=!0;for(let a=0;a<t.length&&c.isBoolean(r);a++){const s=t[a];c.isString(s)&&(r=R(e,t[a],n))}return r}function R(e,t,n){let r;const a=t.split("-");do{r=j(e,a.join("-"),n),a.splice(-1,1)}while(a.length&&!0===r);return r}function j(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const a=t.replace(/!/g,"");e.push(a),(c.isArray(n)||c.isPlainObject(n))&&n[a]&&(r=n[a])}return r}const L="9.2.2",W="en-US",P=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;let B,$,U;let x=null;const V=()=>x;let K=null;let G=0;function H(e,t){return e instanceof RegExp?e.test(t):e}function Y(e,t){return e instanceof RegExp?e.test(t):e}function z(e,t,n,r,a){const{missing:s,onWarn:i}=e;{const r=e.__v_emitter;r&&r.emit("missing",{locale:n,key:t,type:a,groupId:`${a}:${t}`})}if(null!==s){const r=s(e,n,t,a);return c.isString(r)?r:t}return Y(r,t)&&i(M(w.NOT_FOUND_KEY,{key:t,locale:n})),t}const X=/<\/?[\w\s="/.':;#-\/]+>/,Z="Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";const J=e=>e;let q=Object.create(null);let Q=l.CompileErrorCodes.__EXTEND_POINT__;const ee=()=>++Q,te={INVALID_ARGUMENT:Q,INVALID_DATE_ARGUMENT:ee(),INVALID_ISO_DATE_ARGUMENT:ee(),__EXTEND_POINT__:ee()};function ne(e){return l.createCompileError(e,null,{messages:re})}const re={[te.INVALID_ARGUMENT]:"Invalid arguments",[te.INVALID_DATE_ARGUMENT]:"The date provided is an invalid Date object.Make sure your Date represents a valid date.",[te.INVALID_ISO_DATE_ARGUMENT]:"The argument provided is not a valid ISO date string"},ae=()=>"",se=e=>c.isFunction(e);function ie(e,t,n,r,a,s){const{messages:i,onWarn:o,messageResolver:l,localeFallbacker:m}=e,u=m(e,r,n);let f,g={},_=null,p=n,d=null;const b="translate";for(let y=0;y<u.length;y++){if(f=d=u[y],n!==f&&H(a,t)&&o(M(w.FALLBACK_TO_TRANSLATE,{key:t,target:f})),n!==f){const n=e.__v_emitter;n&&n.emit("fallback",{type:b,key:t,from:p,to:d,groupId:`${b}:${t}`})}g=i[f]||{};let r,m,T=null;if(c.inBrowser&&(T=window.performance.now(),r="intlify-message-resolve-start",m="intlify-message-resolve-end",c.mark&&c.mark(r)),null===(_=l(g,t))&&(_=g[t]),c.inBrowser){const n=window.performance.now(),a=e.__v_emitter;a&&T&&_&&a.emit("message-resolve",{type:"message-resolve",key:t,message:_,time:n-T,groupId:`${b}:${t}`}),r&&m&&c.mark&&c.measure&&(c.mark(m),c.measure("intlify message resolve",r,m))}if(c.isString(_)||c.isFunction(_))break;const O=z(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
t,f,s,b);O!==t&&(_=O),p=d}return[_,f,g]}function oe(e,t,n,r,a,s){const{messageCompiler:i,warnHtmlMessage:o}=e;if(se(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==i){const e=()=>r;return e.locale=n,e.key=t,e}let l,m,u=null;c.inBrowser&&(u=window.performance.now(),l="intlify-message-compilation-start",m="intlify-message-compilation-end",c.mark&&c.mark(l));const f=i(r,function(e,t,n,r,a,s){return{warnHtmlMessage:a,onError:t=>{s&&s(t);{t.message,t.location&&c.generateCodeFrame(r,t.location.start.offset,t.location.end.offset);const a=e.__v_emitter;a&&a.emit("compile-error",{message:r,error:t.message,start:t.location&&t.location.start.offset,end:t.location&&t.location.end.offset,groupId:`translate:${n}`})}},onCacheKey:e=>c.generateFormatCacheKey(t,n,e)}}(e,n,a,r,o,s));if(c.inBrowser){const n=window.performance.now(),a=e.__v_emitter;a&&u&&a.emit("message-compilation",{type:"message-compilation",message:r,time:n-u,groupId:`translate:${t}`}),l&&m&&c.mark&&c.measure&&(c.mark(m),c.measure("intlify message compilation",l,m))}return f.locale=n,f.key=t,f.source=r,f}function le(...e){const[t,n,r]=e,a={};if(!c.isString(t)&&!c.isNumber(t)&&!se(t))throw ne(te.INVALID_ARGUMENT);const s=c.isNumber(t)?String(t):(se(t),t);return c.isNumber(n)?a.plural=n:c.isString(n)?a.default=n:c.isPlainObject(n)&&!c.isEmptyObject(n)?a.named=n:c.isArray(n)&&(a.list=n),c.isNumber(r)?a.plural=r:c.isString(r)?a.default=r:c.isPlainObject(r)&&c.assign(a,r),[s,a]}const ce="undefined"!=typeof Intl,me=ce&&void 0!==Intl.DateTimeFormat,ue=ce&&void 0!==Intl.NumberFormat;const fe=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ge(...e){const[t,n,r,a]=e,s={};let i,o={};if(c.isString(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw ne(te.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();i=new Date(n);try{i.toISOString()}catch(l){throw ne(te.INVALID_ISO_DATE_ARGUMENT)}}else if(c.isDate(t)){if(isNaN(t.getTime()))throw ne(te.INVALID_DATE_ARGUMENT);i=t}else{if(!c.isNumber(t))throw ne(te.INVALID_ARGUMENT);i=t}return c.isString(n)?s.key=n:c.isPlainObject(n)&&Object.keys(n).forEach((e=>{fe.includes(e)?o[e]=n[e]:s[e]=n[e]})),c.isString(r)?s.locale=r:c.isPlainObject(r)&&(o=r),c.isPlainObject(a)&&(o=a),[s.key||"",i,s,o]}const _e=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function pe(...e){const[t,n,r,a]=e,s={};let i={};if(!c.isNumber(t))throw ne(te.INVALID_ARGUMENT);const o=t;return c.isString(n)?s.key=n:c.isPlainObject(n)&&Object.keys(n).forEach((e=>{_e.includes(e)?i[e]=n[e]:s[e]=n[e]})),c.isString(r)?s.locale=r:c.isPlainObject(r)&&(i=r),c.isPlainObject(a)&&(i=a),[s.key||"",o,s,i]}o.CompileErrorCodes=l.CompileErrorCodes,o.createCompileError=l.createCompileError,o.CoreErrorCodes=te,o.CoreWarnCodes=w,o.DATETIME_FORMAT_OPTIONS_KEYS=fe,o.DEFAULT_LOCALE=W,o.DEFAULT_MESSAGE_DATA_TYPE=O,o.MISSING_RESOLVE_VALUE="",o.NOT_REOSLVED=-1,o.NUMBER_FORMAT_OPTIONS_KEYS=_e,o.VERSION=L,o.clearCompileCache=function(){q=Object.create(null)},o.clearDateTimeFormat=function(e,t,n){const r=e;for(const a in n){const e=`${t}__${a}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}},o.clearNumberFormat=function(e,t,n){const r=e;for(const a in n){const e=`${t}__${a}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}},o.compileToFunction=function(e,t={}){{!function(e,t){(!c.isBoolean(t.warnHtmlMessage)||t.warnHtmlMessage)&&X.test(e)&&c.warn(c.format(Z,{source:e}))}(e,t);const n=(t.onCacheKey||J)(e),r=q[n];if(r)return r;let a=!1;const s=t.onError||l.defaultOnError;t.onError=e=>{a=!0,s(e)};const{code:i}=l.baseCompile(e,t),o=new Function(`return ${i}`)();return a?o:q[n]=o}},o.createCoreContext=function(e={}){const t=c.isString(e.version)?e.version:L,n=c.isString(e.locale)?e.locale:W,r=c.isArray(e.fallbackLocale)||c.isPlainObject(e.fallbackLocale)||c.isString(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,a=c.isPlainObject(e.messages)?e.messages:{[n]:{}},s=c.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},i=c.isPlainObject(e.numberFormats)?e.numberFormats:{[n]:{}},o=c.assign({},e.modifiers||{},{upper:(e,t)=>"text"===t&&c.isString(e)?e.toUpperCase():"vnode"===t&&c.isObject(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&c.isString(e)?e.toLowerCase():"vnode"===t&&c.isObject(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&c.isString(e)?P(e):"vnode"===t&&c.isObject(e)&&"__v_isVNode"in e?P(e.children):e}),l=e.pluralRules||{},m=c.isFunction(e.missing)?e.missing:null,u=!c.isBoolean(e.missingWarn)&&!c.isRegExp(e.missingWarn)||e.missingWarn,f=!c.isBoolean(e.fallbackWarn)&&!c.isRegExp(e.fallbackWarn)||e.fallbackWarn,g=!!e.fallbackFormat,_=!!e.unresolving,p=c.isFunction(e.postTranslation)?e.postTranslation:null,d=c.isPlainObject(e.processor)?e.processor:null,y=!c.isBoolean(e.warnHtmlMessage)||e.warnHtmlMessage,T=!!e.escapeParameter,O=c.isFunction(e.messageCompiler)?e.messageCompiler:B,A=c.isFunction(e.messageResolver)?e.messageResolver:$||b,k=c.isFunction(e.localeFallbacker)?e.localeFallbacker:U||I,F=c.isObject(e.fallbackContext)?e.fallbackContext:void 0,N=c.isFunction(e.onWarn)?e.onWarn:c.warn,v=e,h=c.isObject(v.__datetimeFormatters)?v.__datetimeFormatters:new Map,S=c.isObject(v.__numberFormatters)?v.__numberFormatters:new Map,w=c.isObject(v.__meta)?v.__meta:{};G++;const C={version:t,cid:G,locale:n,fallbackLocale:r,messages:a,modifiers:o,pluralRules:l,missing:m,missingWarn:u,fallbackWarn:f,fallbackFormat:g,unresolving:_,postTranslation:p,processor:d,warnHtmlMessage:y,escapeParameter:T,messageCompiler:O,messageResolver:A,localeFallbacker:k,fallbackContext:F,onWarn:N,__meta:w};return C.datetimeFormats=s,C.numberFormats=i,C.__datetimeFormatters=h,C.__numberFormatters=S,C.__v_emitter=null!=v.__v_emitter?v.__v_emitter:void 0,E(C,t,w),C},o.createCoreError=ne,o.createMessageContext=N,o.datetime=function(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:i}=e,{__datetimeFormatters:o}=e;if(!me)return s(M(w.CANNOT_FORMAT_DATE)),"";const[l,m,u,f]=ge(...t),g=c.isBoolean(u.missingWarn)?u.missingWarn:e.missingWarn,_=c.isBoolean(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,p=!!u.part,d=c.isString(u.locale)?u.locale:e.locale,b=i(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
a,d);if(!c.isString(l)||""===l)return new Intl.DateTimeFormat(d,f).format(m);let y,T={},O=null,A=d,k=null;const F="datetime format";for(let E=0;E<b.length;E++){if(y=k=b[E],d!==y&&H(_,l)&&s(M(w.FALLBACK_TO_DATE_FORMAT,{key:l,target:y})),d!==y){const t=e.__v_emitter;t&&t.emit("fallback",{type:F,key:l,from:A,to:k,groupId:`${F}:${l}`})}if(T=n[y]||{},O=T[l],c.isPlainObject(O))break;z(e,l,y,g,F),A=k}if(!c.isPlainObject(O)||!c.isString(y))return r?-1:l;let N=`${y}__${l}`;c.isEmptyObject(f)||(N=`${N}__${JSON.stringify(f)}`);let v=o.get(N);return v||(v=new Intl.DateTimeFormat(y,c.assign({},O,f)),o.set(N,v)),p?v.formatToParts(m):v.format(m)},o.fallbackWithLocaleChain=function(e,t,n){const r=c.isString(n)?n:W,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let s=a.__localeChainCache.get(r);if(!s){s=[];let e=[n];for(;c.isArray(e);)e=D(s,e,t);const i=c.isArray(t)||!c.isPlainObject(t)?t:t.default?t.default:null;e=c.isString(i)?[i]:i,c.isArray(e)&&D(s,e,!1),a.__localeChainCache.set(r,s)}return s},o.fallbackWithSimple=I,o.getAdditionalMeta=V,o.getDevToolsHook=function(){return v},o.getFallbackContext=()=>K,o.getWarnMessage=M,o.handleMissing=z,o.initI18nDevTools=E,o.isMessageFunction=se,o.isTranslateFallbackWarn=H,o.isTranslateMissingWarn=Y,o.number=function(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:i}=e,{__numberFormatters:o}=e;if(!ue)return s(M(w.CANNOT_FORMAT_NUMBER)),"";const[l,m,u,f]=pe(...t),g=c.isBoolean(u.missingWarn)?u.missingWarn:e.missingWarn,_=c.isBoolean(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,p=!!u.part,d=c.isString(u.locale)?u.locale:e.locale,b=i(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
a,d);if(!c.isString(l)||""===l)return new Intl.NumberFormat(d,f).format(m);let y,T={},O=null,A=d,k=null;const F="number format";for(let E=0;E<b.length;E++){if(y=k=b[E],d!==y&&H(_,l)&&s(M(w.FALLBACK_TO_NUMBER_FORMAT,{key:l,target:y})),d!==y){const t=e.__v_emitter;t&&t.emit("fallback",{type:F,key:l,from:A,to:k,groupId:`${F}:${l}`})}if(T=n[y]||{},O=T[l],c.isPlainObject(O))break;z(e,l,y,g,F),A=k}if(!c.isPlainObject(O)||!c.isString(y))return r?-1:l;let N=`${y}__${l}`;c.isEmptyObject(f)||(N=`${N}__${JSON.stringify(f)}`);let v=o.get(N);return v||(v=new Intl.NumberFormat(y,c.assign({},O,f)),o.set(N,v)),p?v.formatToParts(m):v.format(m)},o.parse=p,o.parseDateTimeArgs=ge,o.parseNumberArgs=pe,o.parseTranslateArgs=le,o.registerLocaleFallbacker=function(e){U=e},o.registerMessageCompiler=function(e){B=e},o.registerMessageResolver=function(e){$=e},o.resolveValue=function(e,t){if(!c.isObject(e))return null;let n=d.get(t);if(n||(n=p(t),n&&d.set(t,n)),!n)return null;const r=n.length;let a=e,s=0;for(;s<r;){const e=a[n[s]];if(void 0===e)return null;a=e,s++}return a},o.resolveWithKeyValue=b,o.setAdditionalMeta=e=>{x=e},o.setDevToolsHook=function(e){v=e},o.setFallbackContext=e=>{K=e},o.translate=function(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:a,messageCompiler:s,fallbackLocale:i,messages:o}=e,[l,m]=le(...t),u=c.isBoolean(m.missingWarn)?m.missingWarn:e.missingWarn,f=c.isBoolean(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn,g=c.isBoolean(m.escapeParameter)?m.escapeParameter:e.escapeParameter,_=!!m.resolvedMessage,p=c.isString(m.default)||c.isBoolean(m.default)?c.isBoolean(m.default)?s?l:()=>l:m.default:n?s?l:()=>l:"",d=n||""!==p,b=c.isString(m.locale)?m.locale:e.locale;g&&function(e){c.isArray(e.list)?e.list=e.list.map((e=>c.isString(e)?c.escapeHtml(e):e)):c.isObject(e.named)&&Object.keys(e.named).forEach((t=>{c.isString(e.named[t])&&(e.named[t]=c.escapeHtml(e.named[t]))}))}(m);let[y,T,O]=_?[l,b,o[b]||{}]:ie(e,l,b,i,f,u),A=y,k=l;if(_||c.isString(A)||se(A)||d&&(A=p,k=A),!(_||(c.isString(A)||se(A))&&c.isString(T)))return a?-1:l;if(c.isString(A)&&null==e.messageCompiler)return c.warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`),l;let F=!1;const v=se(A)?A:oe(e,l,T,A,k,(()=>{F=!0}));if(F)return A;const E=function(e,t,n,r){const{modifiers:a,pluralRules:s,messageResolver:i,fallbackLocale:o,fallbackWarn:l,missingWarn:m,fallbackContext:u}=e,f=r=>{let a=i(n,r);if(null==a&&u){const[,,e]=ie(u,r,t,o,l,m);a=i(e,r)}if(c.isString(a)){let n=!1;const s=oe(e,r,t,a,r,(()=>{n=!0}));return n?ae:s}return se(a)?a:ae},g={locale:t,modifiers:a,pluralRules:s,messages:f};e.processor&&(g.processor=e.processor);r.list&&(g.list=r.list);r.named&&(g.named=r.named);c.isNumber(r.plural)&&(g.pluralIndex=r.plural);return g}(e,T,O,m),S=function(e,t,n){let r,a,s=null;c.inBrowser&&(s=window.performance.now(),r="intlify-message-evaluation-start",a="intlify-message-evaluation-end",c.mark&&c.mark(r));const i=t(n);if(c.inBrowser){const n=window.performance.now(),o=e.__v_emitter;o&&s&&o.emit("message-evaluation",{type:"message-evaluation",value:i,time:n-s,groupId:`translate:${t.key}`}),r&&a&&c.mark&&c.measure&&(c.mark(a),c.measure("intlify message evaluation",r,a))}return i}(e,v,N(E)),w=r?r(S,l):S;{const t={timestamp:Date.now(),key:c.isString(l)?l:se(A)?A.key:"",locale:T||(se(A)?A.locale:""),format:c.isString(A)?A:se(A)?A.source:"",message:w};t.meta=c.assign({},e.__meta,V()||{}),h(t)}return w},o.translateDevTools=h,o.updateFallbackLocale=function(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)},i.exports=o;var de=i.exports;export{s as a,de as b,r as c,a as g};
