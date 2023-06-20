import"./vue@3.2.47-e9f0a81f.js";import{d as e,e as l,Q as t,Z as a,o as i,L as o,M as s,am as u,al as r,a as n}from"./@vue_runtime-core@3.2.47-3393fa3b.js";import{c as p,k as m}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as c}from"./index-da5151d5.js";import"./@intlify_core-base@9.2.2-3c9acb8b.js";import"./@intlify_message-compiler@9.2.2-a38edf5b.js";import"./@intlify_shared@9.2.2-76c746da.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./@vue_runtime-dom@3.2.47-bb459063.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-c507d381.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bcd43e3.js";import"./vue-demi@0.14.0_vue@3.2.47-90709de6.js";import"./element-plus@2.3.3_vue@3.2.47-b480741b.js";import"./lodash-es@4.17.21-3aa1b897.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-5955aa86.js";import"./@vueuse_core@9.13.0_vue@3.2.47-68996be2.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-fb97c814.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-08719ea3.js";import"./dayjs@1.11.7-836ee5ed.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-e120bcc9.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-db6fffad.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./vue-i18n@9.2.2_vue@3.2.47-b5a03d27.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-f90a2645.js";const d=e=>(u("data-v-b70053a6"),e=e(),r(),e),v=d((()=>n("div",null,"基础信息",-1))),b=d((()=>n("div",null,"指派明细",-1))),y=d((()=>n("div",null,"承运明细",-1))),g=c(e({__name:"index",setup(e){const u=p(null),r=e=>{},n=e=>{},c=(e,l)=>{e},d=()=>{u.value.resetFormFields()},g=()=>{u.value.clearValidate()},f=e=>{for(let l in e);},_=p([{key:"tab1",title:"基础信息"},{key:"tab2",title:"指派明细"},{key:"tab3",title:"承运明细"}]),h=m({goodsInformation:{title:"货品信息",name:"goodsInformation",ref:null,widthSize:2,opts:{labelPosition:"top",formData:{account:null,
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
accountType:null,
// *用户类型: 0: 手机注册 1: 论坛注册 2: 管理平台添加
email:null,
// 邮箱
desc:null,
// 描述
number:null,
// 计算器
status:null},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",bind:{disabled:!1},arrLabel:"key",arrKey:"value"},{label:"平台用户",value:"accountType",type:"select-obj",comp:"el-select",list:"accountTypeList"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox"},{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"YYYY"},comp:"el-date-picker"},{labelRender:()=>l("div",{class:"label_render"},[l("div",null,[t("element日期")]),l(a("el-tooltip"),null,{default:()=>[l("template",{slot:"content"},[l("span",null,[t("总质量4.5吨及以下普通货运车辆的，可填“车籍地6位行政区域代码+000000”。")])]),l("i",{class:"el-icon-warning-outline",style:"cursor: pointer;margin-right:2px;"},null)]})]),rules:{required:!0,message:"请选择element日期",trigger:"change"},value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"微信",value:"wechat",slotName:"wechat",rules:{required:!0,message:"请输入微信",trigger:"blur"}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",className:"t-form-block",widthSize:1}],rules:{},
// 相关列表
listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}],sexList:[{key:"女",value:1},{key:"男",value:0}],accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"},statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}},freight:{title:"运费信息",name:"freight",slotName:"freight"},lineMessage:{title:"线路信息",name:"lineMessage",slotName:"lineMessage"},loadingDate:{name:"loadingDate",title:"承运信息",widthSize:1,ref:null,opts:{formData:{createDate:null,
// 创建时间
valDate:null,
// el日期选择范围
wechat1:null,
// 微信
qq:null,
// qq
accountType:null,
// *用户类型: 0: 手机注册 1: 论坛注册 2: 管理平台添加
email:null,
// 邮箱
desc:null,
// 描述
number:null,
// 计算器
status:null},fieldList:[{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"YYYY"},comp:"el-date-picker"},{labelRender:()=>l("div",{class:"label_render"},[l("div",null,[t("element日期")]),l(a("el-tooltip"),null,{default:()=>[l("template",{slot:"content"},[l("span",null,[t("总质量4.5吨及以下普通货运车辆的，可填“车籍地6位行政区域代码+000000”。")])]),l("i",{class:"el-icon-warning-outline",style:"cursor: pointer;margin-right:2px;"},null)]})]),rules:{required:!0,message:"请选择element日期",trigger:"change"},value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"YYYY-MM-DD"}},{label:"微信",value:"wechat1",slotName:"wechat1",rules:{required:!0,message:"请输入微信",trigger:"blur"}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",className:"t-form-block"}],
// 相关列表
listTypeInfo:{sexList:[{key:"女",value:1},{key:"男",value:0}],accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"},statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}}});return(e,p)=>{const m=a("el-button"),j=a("el-input"),k=a("t-module-form"),w=a("t-layout-page-item"),x=a("t-layout-page");return i(),o(x,{class:"t-module-form_demo"},{default:s((()=>[l(w,null,{default:s((()=>[l(k,{title:"模块表单组件运用",subTitle:"模块表单222",ref_key:"sourceForm",ref:u,formOpts:h,submit:r,tabs:_.value,onHandleEvent:c,onValidateError:f,onTabsChange:n},{tab1:s((()=>[v])),tab2:s((()=>[b])),tab3:s((()=>[y])),extra:s((()=>[l(m,{type:"primary"},{default:s((()=>[t("主要按钮")])),_:1}),l(m,{type:"success"},{default:s((()=>[t("成功按钮")])),_:1}),l(m,{type:"danger"},{default:s((()=>[t("信息按钮")])),_:1})])),wechat:s((()=>[l(j,{modelValue:h.goodsInformation.opts.formData.wechat,"onUpdate:modelValue":p[0]||(p[0]=e=>h.goodsInformation.opts.formData.wechat=e),placeholder:"插槽方式输入"},null,8,["modelValue"])])),wechat1:s((()=>[l(j,{modelValue:h.loadingDate.opts.formData.wechat1,"onUpdate:modelValue":p[1]||(p[1]=e=>h.loadingDate.opts.formData.wechat1=e),placeholder:"插槽方式输入"},null,8,["modelValue"])])),freight:s((()=>[l(m,{type:"danger"},{default:s((()=>[t("运费信息")])),_:1}),l(m,{type:"primary",onClick:g},{default:s((()=>[t("清除校验")])),_:1})])),lineMessage:s((()=>[l(m,{type:"danger"},{default:s((()=>[t("线路信息")])),_:1}),l(m,{type:"primary",onClick:d},{default:s((()=>[t("重置")])),_:1})])),_:1},8,["formOpts","tabs"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-b70053a6"],["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TModuleForm/index.vue"]]);export{g as default};
