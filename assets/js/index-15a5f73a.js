import{e as t,c as e,Z as a,t as l,f as i,o as s,P as n,Q as u,J as c,x as o}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as r,v as d,u as p}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const m={success:!0,code:200,msg:"成功",data:{total:2,rows:[{dictId:1,dictName:"用户状态",dictType:"ce_shi",status:!0,createBy:"wocwin",createTime:"2022-11-02 13:12:41",updateBy:null,updateTime:null,remark:null,delFlag:null},{dictId:2,dictName:"ce",dictType:"sc",status:!0,createBy:"wocwin",createTime:"2022-11-02 13:14:23",updateBy:null,updateTime:null,remark:null,delFlag:null}]}};function b(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!o(t)}const y=t({...t({name:"dictManage"}),setup(t){const o=r({ids:[],queryData:{dictName:null,
// 字典名称
dictType:null,
// 字典类型
status:null,
// 字典状态
createDate:null},listTypeInfo:{statusList:[{label:"正常",key:!0},{label:"停用",key:!1}]},table:{total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"dictId",label:"字典编号",minWidth:"140"},{prop:"dictName",label:"字典名称",minWidth:"200"},{prop:"dictType",label:"字典类型",minWidth:"120",render:(t,l)=>e(a("el-button"),{link:!0,type:"primary",onclick:()=>{}},b(t)?t:{default:()=>[t]})},{prop:"status",label:"状态",minWidth:"120",render:t=>{let l="",i="";switch(t){case!0:l="success",i="正常";break;case!1:l="danger",i="停用"}return e(a("el-tag"),{type:l},b(i)?i:{default:()=>[i]})}},{prop:"createTime",label:"创建时间",minWidth:"160"},{prop:"remark",label:"备注",minWidth:"200"}],operator:[{text:"编辑"},{text:"删除"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:"120",label:"操作"}}}),y=l((()=>({dictName:{label:"字典名称",comp:"el-input"},dictType:{label:"字典类型",comp:"el-input"},createDate:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}},status:{label:"状态",comp:"t-select",bind:{optionSource:o.listTypeInfo.statusList}}}))),f=(l((()=>{const{dictName:t,dictType:e,status:a,createDate:l}=d(o.queryData);return{dictName:t.value,
// 字典名称
dictType:e.value,
// 字典类型
status:a.value,
// 字典状态
beginTime:l.value&&l.value[0]?l.value[0]:null,endTime:l.value&&l.value[1]?l.value[1]:null}})),t=>{o.queryData=t}),g=t=>{o.ids=t.map((t=>t.operId))};i((()=>{T()}));const T=async()=>{const t=await m;t.success&&(o.table.data=t.data.rows,o.table.total=t.data.total)};return(t,l)=>{const i=a("t-query-condition"),r=a("t-layout-page-item"),d=a("el-button"),m=a("t-table"),b=a("t-layout-page");return s(),n(b,null,{default:u((()=>[e(r,null,{default:u((()=>[e(i,{opts:p(y),onSubmit:f},null,8,["opts"])])),_:1}),e(r,null,{default:u((()=>[e(m,{title:"字典配置列表",isCopy:"",table:p(o).table,columns:p(o).table.columns,onSelectionChange:g},{toolbar:u((()=>[e(d,{type:"primary"},{default:u((()=>[c("清空")])),_:1}),e(d,{type:"danger",disabled:p(o).ids.length<1},{default:u((()=>[c("批量删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns"])])),_:1})])),_:1})}}});export{y as default};
