import"./vue@3.2.47-e9f0a81f.js";import{d as e,Z as i,o as t,L as s,M as o,e as r}from"./@vue_runtime-core@3.2.47-3393fa3b.js";import{c as p,k as a,u as l}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as m}from"./index-830d6ccf.js";import"./@intlify_core-base@9.2.2-3c9acb8b.js";import"./@intlify_message-compiler@9.2.2-a38edf5b.js";import"./@intlify_shared@9.2.2-76c746da.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./@vue_runtime-dom@3.2.47-bb459063.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-c507d381.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bcd43e3.js";import"./vue-demi@0.14.0_vue@3.2.47-90709de6.js";import"./element-plus@2.3.3_vue@3.2.47-b480741b.js";import"./lodash-es@4.17.21-3aa1b897.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-5955aa86.js";import"./@vueuse_core@9.13.0_vue@3.2.47-68996be2.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-fb97c814.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-08719ea3.js";import"./dayjs@1.11.7-836ee5ed.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-e120bcc9.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-db6fffad.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./vue-i18n@9.2.2_vue@3.2.47-b5a03d27.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.4-a0101cea.js";const u=m(e({__name:"index",setup(e){const m=p(null),u=a({ref:null,formData:{account:null,
// *用户账号
password:null,
// *用户密码
name:null},fieldList:[{label:"账号",value:"account",placeholder:"账号设置isTrim，不去除前后空格",type:"input",comp:"el-input",isTrim:!0},{label:"密码",placeholder:"type为password，不去除前后空格",value:"password",type:"password",comp:"el-input",bind:{"show-password":!0}},{label:"昵称",value:"name",placeholder:"默认el-input去除前后空格",type:"input",comp:"el-input"}],operatorList:[{label:"提交",type:"danger",fun:()=>{u.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{u.formData={},m.value.clearValidate()}}]});return(e,p)=>{const a=i("t-form"),n=i("t-layout-page-item"),j=i("t-layout-page");return t(),s(j,null,{default:o((()=>[r(n,null,{default:o((()=>[r(a,{ref_key:"TFormDemo",ref:m,modelValue:l(u).ref,"onUpdate:modelValue":p[0]||(p[0]=e=>l(u).ref=e),formOpts:l(u)},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TForm/isTrim/index.vue"]]);export{u as default};
