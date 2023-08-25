import{m as e}from"./@intlify_message-compiler@9.2.2-08c379a4.js";import{s as t}from"./@intlify_shared@9.2.2-bed86653.js";import{d as n}from"./@intlify_devtools-if@9.2.2-c4c7726f.js";var r={exports:{}},a={};
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
/* APPEND */]};const c=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function m(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function u(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,c.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}function f(e){const t=[];let n,r,a,s,i,o,c,f=-1,g=0,_=0;const d=[];function p(){const t=e[f+1];if(5===g&&"'"===t||6===g&&'"'===t)return f++,a="\\"+t,d[0
/* APPEND */](),!0}for(d[0
/* APPEND */]=()=>{void 0===r?r=a:r+=a},d[1
/* PUSH */]=()=>{void 0!==r&&(t.push(r),r=void 0)},d[2
/* INC_SUB_PATH_DEPTH */]=()=>{d[0
/* APPEND */](),_++},d[3
/* PUSH_SUB_PATH */]=()=>{if(_>0)_--,g=4,d[0
/* APPEND */]();else{if(_=0,void 0===r)return!1;if(r=u(r),!1===r)return!1;d[1
/* PUSH */]()}};null!==g;)if(f++,n=e[f],"\\"!==n||!p()){if(s=m(n),c=l[g],i=c[s]||c.l||8,8===i)return;if(g=i[0],void 0!==i[1]&&(o=d[i[1]],o&&(a=n,!1===o())))return;if(7===g)return t}}const g=new Map;function _(e,t){return i.isObject(e)?e[t]:null}const d=e=>e,p=e=>"",b="text",T=e=>0===e.length?"":e.join(""),A=i.toDisplayString;function k(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function O(e={}){const t=e.locale,n=function(e){const t=i.isNumber(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(i.isNumber(e.named.count)||i.isNumber(e.named.n))?i.isNumber(e.named.count)?e.named.count:i.isNumber(e.named.n)?e.named.n:t:t}(e),r=i.isObject(e.pluralRules)&&i.isString(t)&&i.isFunction(e.pluralRules[t])?e.pluralRules[t]:k,a=i.isObject(e.pluralRules)&&i.isString(t)&&i.isFunction(e.pluralRules[t])?k:void 0,s=e.list||[],o=e.named||{};i.isNumber(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,o);function l(t){const n=i.isFunction(e.messages)?e.messages(t):!!i.isObject(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):p)}const c=i.isPlainObject(e.processor)&&i.isFunction(e.processor.normalize)?e.processor.normalize:T,m=i.isPlainObject(e.processor)&&i.isFunction(e.processor.interpolate)?e.processor.interpolate:A,u={list:e=>s[e],named:e=>o[e],plural:e=>e[r(n,e.length,a)],linked:(t,...n)=>{const[r,a]=n;let s="text",o="";1===n.length?i.isObject(r)?(o=r.modifier||o,s=r.type||s):i.isString(r)&&(o=r||o):2===n.length&&(i.isString(r)&&(o=r||o),i.isString(a)&&(s=a||s));let c=l(t)(u);return"vnode"===s&&i.isArray(c)&&o&&(c=c[0]),o?(m=o,e.modifiers?e.modifiers[m]:d)(c,s):c;var m},message:l,type:i.isPlainObject(e.processor)&&i.isString(e.processor.type)?e.processor.type:b,interpolate:m,normalize:c};return u}let y=null;function F(e,t,n){y&&y.emit(o.IntlifyDevToolsHooks.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const N=E(o.IntlifyDevToolsHooks.FunctionTranslate);function E(e){return t=>y&&y.emit(e,t)}const S={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7},v={[S.NOT_FOUND_KEY]:"Not found '{key}' key in '{locale}' locale messages.",[S.FALLBACK_TO_TRANSLATE]:"Fall back to translate '{key}' key with '{target}' locale.",[S.CANNOT_FORMAT_NUMBER]:"Cannot format a number value due to not supported Intl.NumberFormat.",[S.FALLBACK_TO_NUMBER_FORMAT]:"Fall back to number format '{key}' key with '{target}' locale.",[S.CANNOT_FORMAT_DATE]:"Cannot format a date value due to not supported Intl.DateTimeFormat.",[S.FALLBACK_TO_DATE_FORMAT]:"Fall back to datetime format '{key}' key with '{target}' locale."};function C(e,...t){return i.format(v[e],...t)}function h(e,t,n){return[...new Set([n,...i.isArray(t)?t:i.isObject(t)?Object.keys(t):i.isString(t)?[t]:[n]])]}function w(e,t,n){let r=!0;for(let a=0;a<t.length&&i.isBoolean(r);a++){const s=t[a];i.isString(s)&&(r=I(e,t[a],n))}return r}function I(e,t,n){let r;const a=t.split("-");do{r=M(e,a.join("-"),n),a.splice(-1,1)}while(a.length&&!0===r);return r}function M(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const a=t.replace(/!/g,"");e.push(a),(i.isArray(n)||i.isPlainObject(n))&&n[a]&&(r=n[a])}return r}const D="9.2.2",R="en-US",L=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;let j,W,P;let B=null;const $=()=>B;let U=null;let x=0;function V(e,t){return e instanceof RegExp?e.test(t):e}function K(e,t){return e instanceof RegExp?e.test(t):e}function G(e,t,n,r,a){const{missing:s,onWarn:o}=e;{const r=e.__v_emitter;r&&r.emit("missing",{locale:n,key:t,type:a,groupId:`${a}:${t}`})}if(null!==s){const r=s(e,n,t,a);return i.isString(r)?r:t}return K(r,t)&&o(C(S.NOT_FOUND_KEY,{key:t,locale:n})),t}const H=/<\/?[\w\s="/.':;#-\/]+>/,Y="Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";const z=e=>e;let X=Object.create(null);let Z=s.CompileErrorCodes.__EXTEND_POINT__;const J=()=>++Z,q={INVALID_ARGUMENT:Z,INVALID_DATE_ARGUMENT:J(),INVALID_ISO_DATE_ARGUMENT:J(),__EXTEND_POINT__:J()};function Q(e){return s.createCompileError(e,null,{messages:ee})}const ee={[q.INVALID_ARGUMENT]:"Invalid arguments",[q.INVALID_DATE_ARGUMENT]:"The date provided is an invalid Date object.Make sure your Date represents a valid date.",[q.INVALID_ISO_DATE_ARGUMENT]:"The argument provided is not a valid ISO date string"},te=()=>"",ne=e=>i.isFunction(e);function re(e,t,n,r,a,s){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:m}=e,u=m(e,r,n);let f,g={},_=null,d=n,p=null;const b="translate";for(let T=0;T<u.length;T++){if(f=p=u[T],n!==f&&V(a,t)&&l(C(S.FALLBACK_TO_TRANSLATE,{key:t,target:f})),n!==f){const n=e.__v_emitter;n&&n.emit("fallback",{type:b,key:t,from:d,to:p,groupId:`${b}:${t}`})}g=o[f]||{};let r,m,A=null;if(i.inBrowser&&(A=window.performance.now(),r="intlify-message-resolve-start",m="intlify-message-resolve-end",i.mark&&i.mark(r)),null===(_=c(g,t))&&(_=g[t]),i.inBrowser){const n=window.performance.now(),a=e.__v_emitter;a&&A&&_&&a.emit("message-resolve",{type:"message-resolve",key:t,message:_,time:n-A,groupId:`${b}:${t}`}),r&&m&&i.mark&&i.measure&&(i.mark(m),i.measure("intlify message resolve",r,m))}if(i.isString(_)||i.isFunction(_))break;const k=G(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
t,f,s,b);k!==t&&(_=k),d=p}return[_,f,g]}function ae(e,t,n,r,a,s){const{messageCompiler:o,warnHtmlMessage:l}=e;if(ne(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==o){const e=()=>r;return e.locale=n,e.key=t,e}let c,m,u=null;i.inBrowser&&(u=window.performance.now(),c="intlify-message-compilation-start",m="intlify-message-compilation-end",i.mark&&i.mark(c));const f=o(r,function(e,t,n,r,a,s){return{warnHtmlMessage:a,onError:t=>{s&&s(t);{t.message,t.location&&i.generateCodeFrame(r,t.location.start.offset,t.location.end.offset);const a=e.__v_emitter;a&&a.emit("compile-error",{message:r,error:t.message,start:t.location&&t.location.start.offset,end:t.location&&t.location.end.offset,groupId:`translate:${n}`})}},onCacheKey:e=>i.generateFormatCacheKey(t,n,e)}}(e,n,a,r,l,s));if(i.inBrowser){const n=window.performance.now(),a=e.__v_emitter;a&&u&&a.emit("message-compilation",{type:"message-compilation",message:r,time:n-u,groupId:`translate:${t}`}),c&&m&&i.mark&&i.measure&&(i.mark(m),i.measure("intlify message compilation",c,m))}return f.locale=n,f.key=t,f.source=r,f}function se(...e){const[t,n,r]=e,a={};if(!i.isString(t)&&!i.isNumber(t)&&!ne(t))throw Q(q.INVALID_ARGUMENT);const s=i.isNumber(t)?String(t):(ne(t),t);return i.isNumber(n)?a.plural=n:i.isString(n)?a.default=n:i.isPlainObject(n)&&!i.isEmptyObject(n)?a.named=n:i.isArray(n)&&(a.list=n),i.isNumber(r)?a.plural=r:i.isString(r)?a.default=r:i.isPlainObject(r)&&i.assign(a,r),[s,a]}const ie="undefined"!=typeof Intl,oe=ie&&void 0!==Intl.DateTimeFormat,le=ie&&void 0!==Intl.NumberFormat;const ce=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function me(...e){const[t,n,r,a]=e,s={};let o,l={};if(i.isString(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw Q(q.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();o=new Date(n);try{o.toISOString()}catch(c){throw Q(q.INVALID_ISO_DATE_ARGUMENT)}}else if(i.isDate(t)){if(isNaN(t.getTime()))throw Q(q.INVALID_DATE_ARGUMENT);o=t}else{if(!i.isNumber(t))throw Q(q.INVALID_ARGUMENT);o=t}return i.isString(n)?s.key=n:i.isPlainObject(n)&&Object.keys(n).forEach((e=>{ce.includes(e)?l[e]=n[e]:s[e]=n[e]})),i.isString(r)?s.locale=r:i.isPlainObject(r)&&(l=r),i.isPlainObject(a)&&(l=a),[s.key||"",o,s,l]}const ue=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function fe(...e){const[t,n,r,a]=e,s={};let o={};if(!i.isNumber(t))throw Q(q.INVALID_ARGUMENT);const l=t;return i.isString(n)?s.key=n:i.isPlainObject(n)&&Object.keys(n).forEach((e=>{ue.includes(e)?o[e]=n[e]:s[e]=n[e]})),i.isString(r)?s.locale=r:i.isPlainObject(r)&&(o=r),i.isPlainObject(a)&&(o=a),[s.key||"",l,s,o]}a.CompileErrorCodes=s.CompileErrorCodes,a.createCompileError=s.createCompileError,a.CoreErrorCodes=q,a.CoreWarnCodes=S,a.DATETIME_FORMAT_OPTIONS_KEYS=ce,a.DEFAULT_LOCALE=R,a.DEFAULT_MESSAGE_DATA_TYPE=b,a.MISSING_RESOLVE_VALUE="",a.NOT_REOSLVED=-1,a.NUMBER_FORMAT_OPTIONS_KEYS=ue,a.VERSION=D,a.clearCompileCache=function(){X=Object.create(null)},a.clearDateTimeFormat=function(e,t,n){const r=e;for(const a in n){const e=`${t}__${a}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}},a.clearNumberFormat=function(e,t,n){const r=e;for(const a in n){const e=`${t}__${a}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}},a.compileToFunction=function(e,t={}){{!function(e,t){(!i.isBoolean(t.warnHtmlMessage)||t.warnHtmlMessage)&&H.test(e)&&i.warn(i.format(Y,{source:e}))}(e,t);const n=(t.onCacheKey||z)(e),r=X[n];if(r)return r;let a=!1;const o=t.onError||s.defaultOnError;t.onError=e=>{a=!0,o(e)};const{code:l}=s.baseCompile(e,t),c=new Function(`return ${l}`)();return a?c:X[n]=c}},a.createCoreContext=function(e={}){const t=i.isString(e.version)?e.version:D,n=i.isString(e.locale)?e.locale:R,r=i.isArray(e.fallbackLocale)||i.isPlainObject(e.fallbackLocale)||i.isString(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,a=i.isPlainObject(e.messages)?e.messages:{[n]:{}},s=i.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=i.isPlainObject(e.numberFormats)?e.numberFormats:{[n]:{}},l=i.assign({},e.modifiers||{},{upper:(e,t)=>"text"===t&&i.isString(e)?e.toUpperCase():"vnode"===t&&i.isObject(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&i.isString(e)?e.toLowerCase():"vnode"===t&&i.isObject(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&i.isString(e)?L(e):"vnode"===t&&i.isObject(e)&&"__v_isVNode"in e?L(e.children):e}),c=e.pluralRules||{},m=i.isFunction(e.missing)?e.missing:null,u=!i.isBoolean(e.missingWarn)&&!i.isRegExp(e.missingWarn)||e.missingWarn,f=!i.isBoolean(e.fallbackWarn)&&!i.isRegExp(e.fallbackWarn)||e.fallbackWarn,g=!!e.fallbackFormat,d=!!e.unresolving,p=i.isFunction(e.postTranslation)?e.postTranslation:null,b=i.isPlainObject(e.processor)?e.processor:null,T=!i.isBoolean(e.warnHtmlMessage)||e.warnHtmlMessage,A=!!e.escapeParameter,k=i.isFunction(e.messageCompiler)?e.messageCompiler:j,O=i.isFunction(e.messageResolver)?e.messageResolver:W||_,y=i.isFunction(e.localeFallbacker)?e.localeFallbacker:P||h,N=i.isObject(e.fallbackContext)?e.fallbackContext:void 0,E=i.isFunction(e.onWarn)?e.onWarn:i.warn,S=e,v=i.isObject(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,C=i.isObject(S.__numberFormatters)?S.__numberFormatters:new Map,w=i.isObject(S.__meta)?S.__meta:{};x++;const I={version:t,cid:x,locale:n,fallbackLocale:r,messages:a,modifiers:l,pluralRules:c,missing:m,missingWarn:u,fallbackWarn:f,fallbackFormat:g,unresolving:d,postTranslation:p,processor:b,warnHtmlMessage:T,escapeParameter:A,messageCompiler:k,messageResolver:O,localeFallbacker:y,fallbackContext:N,onWarn:E,__meta:w};return I.datetimeFormats=s,I.numberFormats=o,I.__datetimeFormatters=v,I.__numberFormatters=C,I.__v_emitter=null!=S.__v_emitter?S.__v_emitter:void 0,F(I,t,w),I},a.createCoreError=Q,a.createMessageContext=O,a.datetime=function(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:o}=e,{__datetimeFormatters:l}=e;if(!oe)return s(C(S.CANNOT_FORMAT_DATE)),"";const[c,m,u,f]=me(...t),g=i.isBoolean(u.missingWarn)?u.missingWarn:e.missingWarn,_=i.isBoolean(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,d=!!u.part,p=i.isString(u.locale)?u.locale:e.locale,b=o(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
a,p);if(!i.isString(c)||""===c)return new Intl.DateTimeFormat(p,f).format(m);let T,A={},k=null,O=p,y=null;const F="datetime format";for(let v=0;v<b.length;v++){if(T=y=b[v],p!==T&&V(_,c)&&s(C(S.FALLBACK_TO_DATE_FORMAT,{key:c,target:T})),p!==T){const t=e.__v_emitter;t&&t.emit("fallback",{type:F,key:c,from:O,to:y,groupId:`${F}:${c}`})}if(A=n[T]||{},k=A[c],i.isPlainObject(k))break;G(e,c,T,g,F),O=y}if(!i.isPlainObject(k)||!i.isString(T))return r?-1:c;let N=`${T}__${c}`;i.isEmptyObject(f)||(N=`${N}__${JSON.stringify(f)}`);let E=l.get(N);return E||(E=new Intl.DateTimeFormat(T,i.assign({},k,f)),l.set(N,E)),d?E.formatToParts(m):E.format(m)},a.fallbackWithLocaleChain=function(e,t,n){const r=i.isString(n)?n:R,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let s=a.__localeChainCache.get(r);if(!s){s=[];let e=[n];for(;i.isArray(e);)e=w(s,e,t);const o=i.isArray(t)||!i.isPlainObject(t)?t:t.default?t.default:null;e=i.isString(o)?[o]:o,i.isArray(e)&&w(s,e,!1),a.__localeChainCache.set(r,s)}return s},a.fallbackWithSimple=h,a.getAdditionalMeta=$,a.getDevToolsHook=function(){return y},a.getFallbackContext=()=>U,a.getWarnMessage=C,a.handleMissing=G,a.initI18nDevTools=F,a.isMessageFunction=ne,a.isTranslateFallbackWarn=V,a.isTranslateMissingWarn=K,a.number=function(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:o}=e,{__numberFormatters:l}=e;if(!le)return s(C(S.CANNOT_FORMAT_NUMBER)),"";const[c,m,u,f]=fe(...t),g=i.isBoolean(u.missingWarn)?u.missingWarn:e.missingWarn,_=i.isBoolean(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,d=!!u.part,p=i.isString(u.locale)?u.locale:e.locale,b=o(e,
// eslint-disable-line @typescript-eslint/no-explicit-any
a,p);if(!i.isString(c)||""===c)return new Intl.NumberFormat(p,f).format(m);let T,A={},k=null,O=p,y=null;const F="number format";for(let v=0;v<b.length;v++){if(T=y=b[v],p!==T&&V(_,c)&&s(C(S.FALLBACK_TO_NUMBER_FORMAT,{key:c,target:T})),p!==T){const t=e.__v_emitter;t&&t.emit("fallback",{type:F,key:c,from:O,to:y,groupId:`${F}:${c}`})}if(A=n[T]||{},k=A[c],i.isPlainObject(k))break;G(e,c,T,g,F),O=y}if(!i.isPlainObject(k)||!i.isString(T))return r?-1:c;let N=`${T}__${c}`;i.isEmptyObject(f)||(N=`${N}__${JSON.stringify(f)}`);let E=l.get(N);return E||(E=new Intl.NumberFormat(T,i.assign({},k,f)),l.set(N,E)),d?E.formatToParts(m):E.format(m)},a.parse=f,a.parseDateTimeArgs=me,a.parseNumberArgs=fe,a.parseTranslateArgs=se,a.registerLocaleFallbacker=function(e){P=e},a.registerMessageCompiler=function(e){j=e},a.registerMessageResolver=function(e){W=e},a.resolveValue=function(e,t){if(!i.isObject(e))return null;let n=g.get(t);if(n||(n=f(t),n&&g.set(t,n)),!n)return null;const r=n.length;let a=e,s=0;for(;s<r;){const e=a[n[s]];if(void 0===e)return null;a=e,s++}return a},a.resolveWithKeyValue=_,a.setAdditionalMeta=e=>{B=e},a.setDevToolsHook=function(e){y=e},a.setFallbackContext=e=>{U=e},a.translate=function(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:a,messageCompiler:s,fallbackLocale:o,messages:l}=e,[c,m]=se(...t),u=i.isBoolean(m.missingWarn)?m.missingWarn:e.missingWarn,f=i.isBoolean(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn,g=i.isBoolean(m.escapeParameter)?m.escapeParameter:e.escapeParameter,_=!!m.resolvedMessage,d=i.isString(m.default)||i.isBoolean(m.default)?i.isBoolean(m.default)?s?c:()=>c:m.default:n?s?c:()=>c:"",p=n||""!==d,b=i.isString(m.locale)?m.locale:e.locale;g&&function(e){i.isArray(e.list)?e.list=e.list.map((e=>i.isString(e)?i.escapeHtml(e):e)):i.isObject(e.named)&&Object.keys(e.named).forEach((t=>{i.isString(e.named[t])&&(e.named[t]=i.escapeHtml(e.named[t]))}))}(m);let[T,A,k]=_?[c,b,l[b]||{}]:re(e,c,b,o,f,u),y=T,F=c;if(_||i.isString(y)||ne(y)||p&&(y=d,F=y),!(_||(i.isString(y)||ne(y))&&i.isString(A)))return a?-1:c;if(i.isString(y)&&null==e.messageCompiler)return i.warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`),c;let E=!1;const S=ne(y)?y:ae(e,c,A,y,F,(()=>{E=!0}));if(E)return y;const v=function(e,t,n,r){const{modifiers:a,pluralRules:s,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:m,fallbackContext:u}=e,f=r=>{let a=o(n,r);if(null==a&&u){const[,,e]=re(u,r,t,l,c,m);a=o(e,r)}if(i.isString(a)){let n=!1;const s=ae(e,r,t,a,r,(()=>{n=!0}));return n?te:s}return ne(a)?a:te},g={locale:t,modifiers:a,pluralRules:s,messages:f};e.processor&&(g.processor=e.processor);r.list&&(g.list=r.list);r.named&&(g.named=r.named);i.isNumber(r.plural)&&(g.pluralIndex=r.plural);return g}(e,A,k,m),C=function(e,t,n){let r,a,s=null;i.inBrowser&&(s=window.performance.now(),r="intlify-message-evaluation-start",a="intlify-message-evaluation-end",i.mark&&i.mark(r));const o=t(n);if(i.inBrowser){const n=window.performance.now(),l=e.__v_emitter;l&&s&&l.emit("message-evaluation",{type:"message-evaluation",value:o,time:n-s,groupId:`translate:${t.key}`}),r&&a&&i.mark&&i.measure&&(i.mark(a),i.measure("intlify message evaluation",r,a))}return o}(e,S,O(v)),h=r?r(C,c):C;{const t={timestamp:Date.now(),key:i.isString(c)?c:ne(y)?y.key:"",locale:A||(ne(y)?y.locale:""),format:i.isString(y)?y:ne(y)?y.source:"",message:h};t.meta=i.assign({},e.__meta,$()||{}),N(t)}return h},a.translateDevTools=N,a.updateFallbackLocale=function(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)},r.exports=a;var ge=r.exports;export{ge as c};