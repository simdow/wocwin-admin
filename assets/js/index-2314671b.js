import"./vue@3.2.47-e9f0a81f.js";import{d as e,Z as t,o as i,L as s,M as o,e as a,Q as r}from"./@vue_runtime-core@3.2.47-3393fa3b.js";import{c as l,k as p,u as n}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as m}from"./index-830d6ccf.js";import"./@intlify_core-base@9.2.2-3c9acb8b.js";import"./@intlify_message-compiler@9.2.2-a38edf5b.js";import"./@intlify_shared@9.2.2-76c746da.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./@vue_runtime-dom@3.2.47-bb459063.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-c507d381.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bcd43e3.js";import"./vue-demi@0.14.0_vue@3.2.47-90709de6.js";import"./element-plus@2.3.3_vue@3.2.47-b480741b.js";import"./lodash-es@4.17.21-3aa1b897.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-5955aa86.js";import"./@vueuse_core@9.13.0_vue@3.2.47-68996be2.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-fb97c814.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-08719ea3.js";import"./dayjs@1.11.7-836ee5ed.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-e120bcc9.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-db6fffad.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./vue-i18n@9.2.2_vue@3.2.47-b5a03d27.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.4-a0101cea.js";const d=m(e({...e({name:"operator"}),setup(e){const m=l(null);let d=p({table:{firstColumn:{type:"selection",fixed:!0},
// 接口返回数据
data:[{id:"1",date:"2019-09-25",date1:"2019-09-26",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",date1:"2019-09-27",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-26",date1:"2019-09-28",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"4",date:"2019-09-26",date1:"2019-09-29",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"}],
// 表头数据
columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180"},{prop:"status",label:"状态",minWidth:"220"},{prop:"date1",label:"日期22",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"}],
// 表格内操作列
operator:[{text:"查看",fun:e=>{},
// show: { key: 'status', val: ['1'] },
noshow:[{key:"status",val:["1"]}]},{text:"编辑",fun:e=>{}},{text:"作废",fun:e=>{}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:200,label:"操作"}},ids:[]});const u=e=>{d.ids=e},j=()=>{d.ids.length>0&&m.value.clearSelection()},_=()=>{},c=()=>{};return(e,l)=>{const p=t("el-button"),v=t("t-table"),f=t("t-layout-page-item"),b=t("t-layout-page");return i(),s(b,null,{default:o((()=>[a(f,null,{default:o((()=>[a(v,{title:"操作列",ref_key:"selectionTable",ref:m,table:n(d).table,columns:n(d).table.columns,onSelectionChange:u,isShowPagination:!1},{toolbar:o((()=>[a(p,{size:"default",type:"primary",disabled:n(d).ids.length<1,onClick:j},{default:o((()=>[r("取消选中")])),_:1},8,["disabled"]),a(p,{size:"default",type:"primary",onClick:_},{default:o((()=>[r("新增")])),_:1}),a(p,{size:"default",type:"danger",disabled:n(d).ids.length<1,onClick:c},{default:o((()=>[r("删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns"])])),_:1})])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TTable/operator/index.vue"]]);export{d as default};
