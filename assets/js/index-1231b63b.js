import{v as e}from"./@vue_runtime-dom@3.2.47-7b31c7d0.js";import{_ as s}from"./logo-05fb951c.js";import{b as t,u as i}from"./vue-router@4.1.6_vue@3.2.47-86cdb6f8.js";import{b as a,_ as o}from"./index-8ee2e652.js";import{a as l}from"./index.vue_vue_type_script_setup_true_name_SwitchDark_lang-80988a98.js";import{_ as r,T as n,M as p}from"./SubMenu.vue_vue_type_style_index_0_lang-407f3e12.js";import{T as u}from"./ToolBarLeft-1a4ea517.js";import{q as m}from"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import{e as c,t as v,q as _,Z as d,o as j,P as f,Q as h,b as g,c as y,a as w,F as b,X as x,R as k,D as q,am as C,al as M}from"./@vue_runtime-core@3.2.47-ac740756.js";import{r as z,u as L}from"./@vue_reactivity@3.2.47-31538bbf.js";import{q as A,O as D,s as E}from"./@vue_shared@3.2.47-177e1703.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-b4bca346.js";import"./vue-demi@0.14.0_vue@3.2.47-71ba0ef2.js";import"./axios@1.3.4-e3d92af1.js";import"./element-plus@2.3.3_vue@3.2.47-d8dfbb01.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-0dc8a1ce.js";import"./@vueuse_core@9.13.0_vue@3.2.47-6bbd1caf.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-b4249e9e.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-dfed1e85.js";import"./@floating-ui_core@1.2.6-88778327.js";import"./nprogress@0.2.0-6f612403.js";import"./ant-design-vue@3.2.20_vue@3.2.47-880628f4.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-6bcea8eb.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-e2fdcd20.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-marquee-text-component@2.0.1-d4aca8b3.js";import"./vue@3.2.47-0d8a1f35.js";import"./vue-i18n@9.2.2_vue@3.2.47-cb4378dc.js";import"./@intlify_shared@9.2.2-559cddb0.js";import"./@intlify_core-base@9.2.2-3174e0d5.js";import"./@intlify_message-compiler@9.2.2-53a6b062.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.17-68fc781a.js";import"./sortablejs@1.15.0-c3bad686.js";import"./indexAsync-bbf28d14.js";import"./mitt@3.0.0-f0e54764.js";const R={class:"aside-split"},T=[(e=>(C("data-v-c7b0cd66"),e=e(),M(),e))((()=>g("img",{class:"logo-img",src:s,alt:"logo"},null,-1)))],G={class:"split-list"},N=["onClick"],Q={class:"title"},S={class:"logo flx-center"},B=c({name:"layoutColumns"}),F=o(c({...B,setup(s){const o=t(),c=i(),C=a(),M=l(),B=v((()=>M.isCollapse)),F=v((()=>C.showMenuListGet)),I=v((()=>o.meta.activeMenu?o.meta.activeMenu:o.path)),K=z([]),O=z("");_((()=>[F,o]),(()=>{var e;if(!F.value.length)return;O.value=o.path;const s=F.value.filter((e=>o.path===e.path||`/${o.path.split("/")[1]}`===e.path));if(null==(e=s[0].children)?void 0:e.length)return K.value=s[0].children;K.value=[]}),{deep:!0,immediate:!0});const P=()=>{window.location.href=m.__POWERED_BY_QIANKUN__?"/wocwin-qiankun/":"/wocwin-admin/"};return(s,t)=>{const i=d("el-icon"),a=d("el-scrollbar"),o=d("el-menu"),l=d("el-aside"),m=d("el-header"),v=d("el-container");return j(),f(v,{class:"layout"},{default:h((()=>[g("div",R,[g("div",{class:"logo flx-center",onClick:P},T),y(a,null,{default:h((()=>[g("div",G,[(j(!0),w(b,null,x(L(F),(e=>(j(),w("div",{class:A(["split-item",{"split-active":O.value===e.path||`/${O.value.split("/")[1]}`===e.path}]),key:e.path,onClick:s=>(e=>{var s;if(O.value=e.path,null==(s=e.children)?void 0:s.length)return K.value=e.children;K.value=[],c.push(e.path)})(e)},[y(i,null,{default:h((()=>[(j(),f(k(e.meta.icon)))])),_:2},1024),g("span",Q,D(e.meta.title),1)],10,N)))),128))])])),_:1})]),y(l,{class:A({"not-aside":!K.value.length}),style:E({width:L(B)?"65px":"210px"})},{default:h((()=>[g("div",S,[q(g("span",{class:"logo-text"},D(L(B)?"W":"wocwin Admin"),513),[[e,K.value.length]])]),y(a,null,{default:h((()=>[y(o,{"default-active":L(I),router:!1,collapse:L(B),"collapse-transition":!1,"unique-opened":!0},{default:h((()=>[y(r,{menuList:K.value},null,8,["menuList"])])),_:1},8,["default-active","collapse"])])),_:1})])),_:1},8,["class","style"]),y(v,null,{default:h((()=>[y(m,null,{default:h((()=>[y(u),y(n)])),_:1}),y(p)])),_:1})])),_:1})}}}),[["__scopeId","data-v-c7b0cd66"]]);export{F as default};
