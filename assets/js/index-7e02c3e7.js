import{u as e}from"./useApi-a3664480.js";import{e as t,c as a,Z as l,t as r,f as i,o as p,P as n,Q as s,J as o}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as d,v as u,u as m}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const c=t({...t({name:"departmentManage"}),setup(t){const{proxy:c}=e(),h=d({queryData:{deptName:void 0,
// 部门名称
deptNum:void 0},table:{
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"deptName",label:"部门名称",minWidth:180,align:"left"},{prop:"deptNum",label:"部门编码",minWidth:180,align:"left"},{prop:"erpDeptNum",label:"ERP部门编码",minWidth:180,align:"left"},{prop:"orderNum",label:"排序",width:"60px",align:"left"},{prop:"createTime",label:"创建时间",width:"180px",align:"left"},{prop:"status",label:"状态",render:(e,t)=>a(l("el-switch"),{"active-value":!0,modelValue:t.status,"onUpdate:modelValue":e=>t.status=e,"inactive-value":!1,onChange:()=>b(t)},null)}],operator:[{text:"编辑"},{text:"删除",fun:e=>{}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"140",label:"操作"}}}),f=r((()=>({deptName:{label:"部门名称",comp:"el-input"},deptNum:{label:"部门编码",comp:"el-input"}}))),b=e=>{},g=r((()=>{const{deptName:e,deptNum:t}=u(h.queryData);return{deptName:e.value,deptNum:t.value}})),v=e=>{h.queryData=e,N()};i((()=>{N()}));const N=async()=>{const e=await c.$api.deptList(g.value);e.success&&(h.table.data=((e,t,a="parentId",l="children",r=0)=>{t=t||"id",a=a||"parentId",l=l||"children",r=r||0;const i=JSON.parse(JSON.stringify(e)),p=i.filter((e=>{let l=i.filter((l=>e[t]===l[a]));return l.length>0&&(e.children=l),e[a]===r}));return""!=p?p:e})(e.data,"deptId"))};return(e,t)=>{const r=l("el-button"),i=l("t-adaptive-page");return p(),n(i,{title:"部门管理列表",isCopy:"",isTree:"",table:m(h).table,columns:m(h).table.columns,"row-key":"deptId","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},isShowPagination:!1,opts:m(f),onSubmit:v,height:"100%"},{toolbar:s((()=>[a(r,{type:"primary"},{default:s((()=>[o("新增")])),_:1})])),_:1},8,["table","columns","opts"])}}});export{c as default};
