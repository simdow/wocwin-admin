import"./vue@3.2.47-e9f0a81f.js";import{d as e,h as l,Z as t,o as a,L as o,M as s,e as i}from"./@vue_runtime-core@3.2.47-3393fa3b.js";import{c as r,k as u,u as p}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as m}from"./index-da5151d5.js";import"./@intlify_core-base@9.2.2-3c9acb8b.js";import"./@intlify_message-compiler@9.2.2-a38edf5b.js";import"./@intlify_shared@9.2.2-76c746da.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./@vue_runtime-dom@3.2.47-bb459063.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-c507d381.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bcd43e3.js";import"./vue-demi@0.14.0_vue@3.2.47-90709de6.js";import"./element-plus@2.3.3_vue@3.2.47-b480741b.js";import"./lodash-es@4.17.21-3aa1b897.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-5955aa86.js";import"./@vueuse_core@9.13.0_vue@3.2.47-68996be2.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-fb97c814.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-08719ea3.js";import"./dayjs@1.11.7-836ee5ed.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-e120bcc9.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-db6fffad.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./vue-i18n@9.2.2_vue@3.2.47-b5a03d27.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-f90a2645.js";const n=m(e({__name:"index",setup(e){const m=r([{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]),n=r([{label:"女",value:1},{label:"男",value:0}]),c=r([{label:"启用",value:1},{label:"停用",value:0}]),v=r(null),d=u({ref:null,formData:{account:null,
// *用户账号
password:null,
// *用户密码
name:null,
// *用户昵称
sex:null,
// *性别: 0:男 1:女
hobby:null,
// *爱好: 0:男 1:女
status:null,
// *状态: 0：停用，1：启用(默认为1)',
desc:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input",bind:{"show-password":!0}},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",bind:{optionSource:n.value,valueKey:"value"}},{label:"状态",value:"status",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",bind:{optionSource:c,valueKey:"value"}},{label:"爱好",value:"hobby",placeholder:"TSelect多选",type:"select-arr",comp:"t-select",list:"hobbyList",bind:{multiple:!0,optionSource:m,valueKey:"value"}},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],operatorList:[{label:"提交",type:"danger",fun:()=>{d.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{d.formData={},v.value.clearValidate()}}]});l((()=>{j()}));const j=()=>{d.formData={sex:0,
// *性别: 0:男 1:女
hobby:["0","2"],
// *爱好
account:"张三",password:"123456",name:"三丫子",desc:"8888",
// 描述
status:1}};return(e,l)=>{const r=t("t-form"),u=t("t-layout-page-item"),m=t("t-layout-page");return a(),o(m,null,{default:s((()=>[i(u,null,{default:s((()=>[i(r,{ref_key:"TFormDemo",ref:v,modelValue:p(d).ref,"onUpdate:modelValue":l[0]||(l[0]=e=>p(d).ref=e),formOpts:p(d),widthSize:1},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TForm/echo/index.vue"]]);export{n as default};
