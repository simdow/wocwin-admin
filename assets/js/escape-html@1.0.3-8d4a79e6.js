import{g as e}from"./@babel_runtime@7.21.5-c38e47b2.js";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var r=/["'&<>]/;const a=e((function(e){var a,t=""+e,s=r.exec(t);if(!s)return t;var n="",c=0,b=0;for(c=s.index;c<t.length;c++){switch(t.charCodeAt(c)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 39:a="&#39;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}b!==c&&(n+=t.substring(b,c)),b=c+1,n+=a}return b!==c?n+t.substring(b,c):n}));export{a as e};
