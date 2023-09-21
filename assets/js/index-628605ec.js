import{e,c as t,Z as a,t as l,f as s,g as i,o as n,P as o,Q as p,J as r,x as u}from"./@vue_runtime-core@3.2.47-ac740756.js";import{j as b,v as c,u as m}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";function d(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!u(e)}const y=e({...e({name:"systemLog"}),setup(e){const u=b({ids:[],queryData:{systemName:null,
// 业务系统
title:null,
// 业务模块
operName:null,
// 操作人员
businessType:null,
// 操作类型
status:null,
// 状态
date:null},listTypeInfo:{businessTypeList:[{label:"其他",key:0},{label:"新增",key:1},{label:"修改",key:2},{label:"删除",key:3}],statusList:[{label:"正常",key:1},{label:"异常",key:0}]},table:{currentPage:1,pageSize:10,total:0,firstColumn:{type:"selection"},
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"systemName",label:"业务系统",minWidth:220},{prop:"title",label:"业务模块",minWidth:140},{prop:"methodDesc",label:"方法描述",minWidth:120},{prop:"businessType",label:"操作类型",minWidth:80,render:e=>{let l="",s="";switch(e){case 0:l="info",s="其它";break;case 1:l="success",s="新增";break;case 2:l="warning",s="修改";break;case 3:l="danger",s="删除"}return t(a("el-tag"),{type:l},d(s)?s:{default:()=>[s]})}},{prop:"requestMethod",label:"请求方式",minWidth:120},{prop:"operName",label:"操作人员",minWidth:120},{prop:"deptName",label:"部门名称",minWidth:140},{prop:"operIp",label:"主机地址",minWidth:140},{prop:"status",label:"\t操作状态",minWidth:120,render:e=>{let l="",s="";switch(e){case!0:l="success",s="正常";break;case!1:l="danger",s="异常"}return t(a("el-tag"),{type:l},d(s)?s:{default:()=>[s]})}},{prop:"operTime",label:"操作时间",minWidth:200},{prop:"operatorType",label:"操作类别",minWidth:160,render:e=>{let l="";switch(e){case 0:l="其它";break;case 1:l="后台用户";break;case 2:l="手机端用户"}return t(a("el-tag"),null,d(l)?l:{default:()=>[l]})}}],operator:[{text:"详情"}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
align:"left",width:80,label:"操作"}}}),y=l((()=>({systemName:{label:"业务系统",comp:"el-input"},title:{label:"业务模块",comp:"el-input"},operName:{label:"操作人员",comp:"el-input"},businessType:{label:"操作类型",comp:"t-select",bind:{optionSource:u.listTypeInfo.businessTypeList}},status:{label:"状态",comp:"t-select",bind:{optionSource:u.listTypeInfo.statusList}},date:{label:"操作时间",comp:"t-date-picker",span:2,bind:{type:"datetimerange"}}}))),g=l((()=>{const{title:e,systemName:t,operName:a,businessType:l,status:s,date:i}=c(u.queryData);return{title:e.value,systemName:t.value,operName:a.value,businessType:l.value,status:s.value,beginTime:i.value&&i.value[0]?i.value[0]:null,endTime:i.value&&i.value[1]?i.value[1]:null,pageNum:u.table.currentPage,pageSize:u.table.pageSize}})),h=e=>{u.queryData=e,k()},f=e=>{u.ids=e.map((e=>e.operId))};s((()=>{k()}));const{appContext:v}=i(),T=v.config.globalProperties,k=async()=>{const e=await T.$api.logList(g.value);e.success&&(u.table.data=e.data.rows,u.table.total=e.data.total)},N=e=>{u.table.pageSize=e,k()},W=e=>{u.table.currentPage=e,k()};return(e,l)=>{const s=a("el-button"),i=a("t-adaptive-page");return n(),o(i,{title:"操作日志列表",isCopy:"",table:m(u).table,columns:m(u).table.columns,onSelectionChange:f,onSizeChange:N,onPageChange:W,opts:m(y),onSubmit:h,height:"100%"},{toolbar:p((()=>[t(s,{type:"primary"},{default:p((()=>[r("清空")])),_:1}),t(s,{type:"danger",disabled:m(u).ids.length<1},{default:p((()=>[r("删除")])),_:1},8,["disabled"])])),_:1},8,["table","columns","opts"])}}});export{y as default};
