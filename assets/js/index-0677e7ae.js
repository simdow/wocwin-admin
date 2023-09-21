import{e,c as t,Z as a,t as l,f as r,g as i,o as p,P as n,Q as o,J as s}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as d,v as u,u as m}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const c=e({...e({name:"departmentManage"}),setup(e){const c=d({queryData:{deptName:void 0,
// 部门名称
deptNum:void 0},table:{
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"deptName",label:"部门名称",minWidth:180,align:"left"},{prop:"deptNum",label:"部门编码",minWidth:180,align:"left"},{prop:"erpDeptNum",label:"ERP部门编码",minWidth:180,align:"left"},{prop:"orderNum",label:"排序",width:"60px",align:"left"},{prop:"createTime",label:"创建时间",width:"100px",align:"left"},{prop:"status",label:"状态",render:(e,l)=>t(a("el-switch"),{"active-value":!0,modelValue:l.status,"onUpdate:modelValue":e=>l.status=e,"inactive-value":!1,onChange:()=>b(l)},null)}],operator:[{text:"编辑"},{text:"删除",fun:e=>{}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"100",label:"操作"}}}),h=l((()=>({deptName:{label:"部门名称",comp:"el-input"},deptNum:{label:"部门编码",comp:"el-input"}}))),b=e=>{},f=l((()=>{const{deptName:e,deptNum:t}=u(c.queryData);return{deptName:e.value,deptNum:t.value}})),g=e=>{c.queryData=e,y()};r((()=>{y()}));const{appContext:v}=i(),N=v.config.globalProperties,y=async()=>{const e=await N.$api.deptList(f.value);e.success&&(c.table.data=((e,t,a="parentId",l="children",r=0)=>{t=t||"id",a=a||"parentId",l=l||"children",r=r||0;const i=JSON.parse(JSON.stringify(e)),p=i.filter((e=>{let l=i.filter((l=>e[t]===l[a]));return l.length>0&&(e.children=l),e[a]===r}));return""!=p?p:e})(e.data,"deptId"))};return(e,l)=>{const r=a("el-button"),i=a("t-adaptive-page");return p(),n(i,{title:"部门管理列表",isCopy:"",isTree:"",table:m(c).table,columns:m(c).table.columns,"row-key":"deptId","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},isShowPagination:!1,opts:m(h),onSubmit:g,height:"100%"},{toolbar:o((()=>[t(r,{type:"primary"},{default:o((()=>[s("新增")])),_:1})])),_:1},8,["table","columns","opts"])}}});export{c as default};
