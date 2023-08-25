import"./vue@3.2.47-8ce7078f.js";import{e,$ as t,o as l,R as a,U as r,c as s}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{c as i,k as o,u}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as p}from"./index-d409cb4d.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@vue_runtime-dom@3.2.47-2bd6e5f2.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-8a97a894.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-ca217326.js";import"./vue-demi@0.14.0_vue@3.2.47-8afb1e23.js";import"./element-plus@2.3.3_vue@3.2.47-b1222eb8.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c420e77.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8fe4f764.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-4e84a922.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9d7ac9ef.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-6f612403.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-2aa6565c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-28dfa700.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8aa72cfe.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-i18n@9.2.2_vue@3.2.47-cea73d24.js";import"./@intlify_shared@9.2.2-bed86653.js";import"./@intlify_core-base@9.2.2-8c6d72b7.js";import"./@intlify_message-compiler@9.2.2-08c379a4.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-afa7e5e3.js";const n=p(e({__name:"index",setup(e){const p=i(null),n=o({
// labelPosition: 'top',
ref:null,formData:{account:null,
// *用户账号
password:null,
// *用户密码
name:null,
// *用户昵称
sex:null,
// *性别: 0:男 1:女
hobby:[],
// *爱好: 0:男 1:女
phone:null,
// 手机号码
createDate:null,
// 创建时间
valDate:null,
// el日期选择范围
wechat:null,
// 微信
qq:null,
// qq
email:null,
// 邮箱
desc:null,
// 描述
status:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",arrLabel:"key",arrKey:"value"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox"},{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"日期",value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],name:[{required:!0,message:"请输入昵称",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],hobby:[{type:"array",required:!0,message:"请至少选择一个爱好",trigger:"change"}],email:[{validator:(e,t,l)=>{t&&!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t)&&l(new Error(e.message)),l()},message:"自定义配置校验规则",trigger:"blur"}]},operatorList:[{label:"提交",type:"danger",fun:()=>{n.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{n.formData={},p.value.clearValidate()}},{label:"清除校验",type:"danger",fun:()=>{p.value.clearValidate()}}],
// 相关列表
listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}],sexList:[{key:"女",value:1},{key:"男",value:0}],statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}),m=(e,t)=>{e};return(e,i)=>{const o=t("t-form"),v=t("t-layout-page-item"),c=t("t-layout-page");return l(),a(c,null,{default:r((()=>[s(v,null,{default:r((()=>[s(o,{ref_key:"TFormDemo",ref:p,modelValue:u(n).ref,"onUpdate:modelValue":i[0]||(i[0]=e=>u(n).ref=e),formOpts:u(n),widthSize:3,onHandleEvent:m},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TForm/rules/index.vue"]]);export{n as default};
