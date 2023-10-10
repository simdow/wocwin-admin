import{d as e,s as t}from"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-b4bca346.js";import{D as r,p as o}from"./index-450ff986.js";import{a as l}from"./element-plus@2.3.3_vue@3.2.47-d8dfbb01.js";import{R as a,S as n}from"./@element-plus_icons-vue@2.1.0_vue@3.2.47-b4249e9e.js";import{e as i,Z as s,o as c,P as u}from"./@vue_runtime-core@3.2.47-ac740756.js";import{u as m}from"./@vue_reactivity@3.2.47-31538bbf.js";const f=e({id:"wocwin-global",
// 修改默认值之后，需清除 localStorage 数据
state:()=>({
// 布局模式 (纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns)
layout:"vertical",
// element 组件大小
assemblySize:"default",
// 当前系统语言
language:"zh",
// 当前页面是否全屏
maximize:!1,
// 主题颜色
primary:r,
// 深色模式
isDark:!0,
// 灰色模式
isGrey:!1,
// 色弱模式
isWeak:!1,
// 侧边栏反转 (目前仅支持 'vertical' 模式)
asideInverted:!0,
// 折叠菜单
isCollapse:!1,
// 面包屑导航
breadcrumb:!0,
// 面包屑导航图标
breadcrumbIcon:!0,
// 标签页
tabs:!0,
// 标签页图标
tabsIcon:!1,
// 页脚
footer:!0}),getters:{},actions:{
// Set GlobalState
setGlobalState(e,t){this.$patch({[e]:t})}},persist:o("wocwin-global")});function d(e){let t="";if(!/^\#?[0-9A-Fa-f]{6}$/.test(e))return l.warning("输入错误的hex");t=(e=e.replace("#","")).match(/../g);for(let r=0;r<3;r++)t[r]=parseInt(t[r],16);return t}function v(e,t,r){let o=/^\d{1,3}$/;if(!o.test(e)||!o.test(t)||!o.test(r))return l.warning("输入错误的rgb颜色值");let a=[e.toString(16),t.toString(16),r.toString(16)];for(let l=0;l<3;l++)1==a[l].length&&(a[l]=`0${a[l]}`);return`#${a.join("")}`}function g(e,t){if(!/^\#?[0-9A-Fa-f]{6}$/.test(e))return l.warning("输入错误的hex颜色值");let r=d(e);for(let o=0;o<3;o++)r[o]=Math.round(20.5*t+r[o]*(1-t));return v(r[0],r[1],r[2])}function h(e,t){if(!/^\#?[0-9A-Fa-f]{6}$/.test(e))return l.warning("输入错误的hex颜色值");let r=d(e);for(let o=0;o<3;o++)r[o]=Math.round(255*t+r[o]*(1-t));return v(r[0],r[1],r[2])}const p={light:{"--el-logo-text-color":"#303133","--el-menu-bg-color":"#ffffff","--el-menu-hover-bg-color":"#cccccc","--el-menu-active-bg-color":"var(--el-color-primary-light-9)","--el-menu-text-color":"#333333","--el-menu-active-color":"var(--el-color-primary)","--el-menu-hover-text-color":"#333333","--el-menu-horizontal-sub-item-height":"55px"},inverted:{"--el-logo-text-color":"#dadada","--el-menu-bg-color":"#191a20","--el-menu-hover-bg-color":"#000000","--el-menu-active-bg-color":"#000000","--el-menu-text-color":"#bdbdc0","--el-menu-active-color":"#ffffff","--el-menu-hover-text-color":"#ffffff","--el-menu-horizontal-sub-item-height":"55px"},dark:{"--el-logo-text-color":"#dadada","--el-menu-bg-color":"#141414","--el-menu-hover-bg-color":"#000000","--el-menu-active-bg-color":"#000000","--el-menu-text-color":"#bdbdc0","--el-menu-active-color":"#ffffff","--el-menu-hover-text-color":"#ffffff","--el-menu-horizontal-sub-item-height":"55px"}},b=()=>{const e=f(),{primary:o,isDark:a,isGrey:n,isWeak:i,asideInverted:s,layout:c}=t(e),u=()=>{const e=document.documentElement;a.value?e.setAttribute("class","dark"):e.setAttribute("class",""),m(o.value),v()},m=t=>{t||(t=r,l({type:"success",message:`主题颜色已重置为 ${r}`})),document.documentElement.style.setProperty("--el-color-primary",t),document.documentElement.style.setProperty("--el-color-primary-dark-2",a.value?`${h(t,.2)}`:`${g(t,.3)}`);for(let e=1;e<=9;e++){const r=a.value?`${g(t,e/10)}`:`${h(t,e/10)}`;document.documentElement.style.setProperty(`--el-color-primary-light-${e}`,r)}e.setGlobalState("primary",t)},d=(t,r)=>{const o=document.body;if(!r)return o.removeAttribute("style");o.setAttribute("style",{grey:"filter: grayscale(1)",weak:"filter: invert(80%)"}[t]);const l="grey"===t?"isWeak":"isGrey";e.setGlobalState(l,!1)},v=()=>{let e="light";"transverse"==c.value&&(e="inverted"),"vertical"==c.value&&s.value&&(e="inverted"),a.value&&(e="dark");const t=p[e];for(const[r,o]of Object.entries(t))document.documentElement.style.setProperty(r,o)};a.value&&u();return{initTheme:()=>{u(),n.value&&d("grey",!0),i.value&&d("weak",!0)},switchDark:u,changePrimary:m,changeGreyOrWeak:d,setAsideTheme:v}},y=i({name:"SwitchDark"}),x=i({...y,setup(e){const{switchDark:t}=b(),r=f();return(e,o)=>{const l=s("el-switch");return c(),u(l,{modelValue:m(r).isDark,"onUpdate:modelValue":o[0]||(o[0]=e=>m(r).isDark=e),onChange:m(t),"inline-prompt":"","active-icon":m(a),"inactive-icon":m(n)},null,8,["modelValue","onChange","active-icon","inactive-icon"])}}});export{x as _,f as a,b as u};
