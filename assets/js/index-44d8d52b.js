import{e,c as a,Z as t,t as l,f as o,g as r,o as n,P as s,Q as i,J as u}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as p,v as d,u as m}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const c=e({...e({name:"roleManageList"}),setup(e){const c=p({roleIds:[],queryData:{roleName:void 0,
// 角色名称
roleKey:void 0,
// 权限字符
date:null},table:{currentPage:1,pageSize:15,total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"roleName",label:"角色名称",minWidth:120},{prop:"roleKey",label:"权限字符",minWidth:120},{prop:"createTime",label:"创建时间",minWidth:140},{prop:"status",label:"状态",render:(e,l)=>a(t("el-switch"),{"active-value":!0,modelValue:l.status,"onUpdate:modelValue":e=>l.status=e,"inactive-value":!1,onChange:()=>v(l)},null)}],operator:[{text:"编辑"},{text:"重置密码"},{text:"删除"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:"180",label:"操作"}}}),b=l((()=>({roleName:{label:"角色名称",comp:"el-input"},roleKey:{label:"权限字符",comp:"el-input"},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}}}))),g=l((()=>{const{roleName:e,roleKey:a,date:t}=d(c.queryData);return{roleName:e.value,roleKey:a.value,beginTime:t.value&&t.value[0]?t.value[0]:null,endTime:t.value&&t.value[1]?t.value[1]:null,pageNum:c.table.currentPage,pageSize:c.table.pageSize}})),v=e=>{},y=e=>{c.queryData=e,S()},h=e=>{c.ids=e.map((e=>e.operId))};o((()=>{S()}));const{appContext:f}=r(),C=f.config.globalProperties,S=async()=>{const e=await C.$api.roleList(g.value);e.success&&(c.table.data=e.data.rows,c.table.total=e.data.total)},x=e=>{c.table.pageSize=e,S()},N=e=>{c.table.currentPage=e,S()};return(e,l)=>{const o=t("el-button"),r=t("t-adaptive-page");return n(),s(r,{title:"角色管理列表",isCopy:"",table:m(c).table,columns:m(c).table.columns,onSelectionChange:h,onSizeChange:x,onPageChange:N,opts:m(b),onSubmit:y},{toolbar:i((()=>[a(o,{type:"primary"},{default:i((()=>[u("新增")])),_:1}),a(o,{type:"danger",disabled:m(c).roleIds.length<1},{default:i((()=>[u("批量删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns","opts"])}}});export{c as default};
