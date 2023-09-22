import{u as e}from"./useApi-a3664480.js";import{e as a,c as t,Z as l,t as o,f as r,o as s,P as i,Q as n,J as u}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as p,v as d,u as m}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const c=a({...a({name:"roleManageList"}),setup(a){const{proxy:c}=e(),b=p({roleIds:[],queryData:{roleName:void 0,
// 角色名称
roleKey:void 0,
// 权限字符
date:null},table:{currentPage:1,pageSize:15,total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"roleName",label:"角色名称",minWidth:120},{prop:"roleKey",label:"权限字符",minWidth:120},{prop:"createTime",label:"创建时间",minWidth:140},{prop:"status",label:"状态",render:(e,a)=>t(l("el-switch"),{"active-value":!0,modelValue:a.status,"onUpdate:modelValue":e=>a.status=e,"inactive-value":!1,onChange:()=>y(a)},null)}],operator:[{text:"编辑"},{text:"重置密码"},{text:"删除"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:"180",label:"操作"}}}),g=o((()=>({roleName:{label:"角色名称",comp:"el-input"},roleKey:{label:"权限字符",comp:"el-input"},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}}}))),v=o((()=>{const{roleName:e,roleKey:a,date:t}=d(b.queryData);return{roleName:e.value,roleKey:a.value,beginTime:t.value&&t.value[0]?t.value[0]:null,endTime:t.value&&t.value[1]?t.value[1]:null,pageNum:b.table.currentPage,pageSize:b.table.pageSize}})),y=e=>{},h=e=>{b.queryData=e,C()},f=e=>{b.ids=e.map((e=>e.operId))};r((()=>{C()}));const C=async()=>{const e=await c.$api.roleList(v.value);e.success&&(b.table.data=e.data.rows,b.table.total=e.data.total)},S=e=>{b.table.pageSize=e,C()},j=e=>{b.table.currentPage=e,C()};return(e,a)=>{const o=l("el-button"),r=l("t-adaptive-page");return s(),i(r,{title:"角色管理列表",isCopy:"",table:m(b).table,columns:m(b).table.columns,onSelectionChange:f,onSizeChange:S,onPageChange:j,opts:m(g),onSubmit:h},{toolbar:n((()=>[t(o,{type:"primary"},{default:n((()=>[u("新增")])),_:1}),t(o,{type:"danger",disabled:m(b).roleIds.length<1},{default:n((()=>[u("批量删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns","opts"])}}});export{c as default};
