import"./vue@3.2.47-8ce7078f.js";import{e,y as l,X as a,Q as t,x as s,i as o,$ as d,o as u,R as c,U as r,b as i,c as w,_ as n,Z as v,N as y,P as p,n as b}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{c as m,k as R,u as f,i as h}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{u as k}from"./@vue_shared@3.2.47-699fd3ac.js";import{_ as S}from"./index-d409cb4d.js";const K=S(e({name:"TAntdSelectTable",props:{modelValue:{type:[String,Number,Array]},
// table所需数据
table:{type:Object,default:()=>({})},
// 表头数据
columns:{type:Array,default:()=>[]},
// 单选框--是否开启点击整行选中
rowClickRadio:{type:Boolean,default:!0},
// 列表项是否可选择
rowSelection:{type:Object},
// 是否显示分页
isShowPagination:{type:Boolean,default:!1},
// 下拉数据指向的label/value
keywords:{type:Object,default:()=>({label:"label",value:"value"})},
// 多选 'multiple'
mode:{type:String},
// 单选是否开启键盘事件
isKeyup:{type:Boolean,default:!1},
// select宽度
selectWidth:{type:[String,Number],default:200},
// table宽度
tableWidth:{type:Number,default:550},
// 设置默认选中项--keywords.value值（单选是String, Number类型；多选时是数组）
defaultSelectVal:{type:Array}},emits:["checkedChange","update:modelValue"],setup(e,{expose:S,emit:K}){const g=e,D=l((()=>({allowClear:!0,showSearch:!0,dropdownMatchSelectWidth:!1,...a()}))),T=t(),_=Object.keys(T),V=m(!0),C=m(!1),j=m(-1),x=R({defaultSelectValue:g.defaultSelectVal,
// 默认选中
tableData:g.table.data,
// table数据
activeTableRow:{},
// 键盘上下键选中项
// 选中KEY
selectedRowKeys:[],
// 选中行
selectedRows:[]}),O=m(null),N=m(null);s((()=>g.table.data),(e=>{x.tableData=e}),{deep:!0}),s((()=>g.defaultSelectVal),(e=>{x.defaultSelectValue=e,e&&V.value&&P(e)}),{deep:!0});let W=l({get:()=>g.modelValue,set(e){K("update:modelValue",e)}});o((()=>{x.defaultSelectValue&&V.value&&P(x.defaultSelectValue)}));const $=(e,l)=>{setTimeout((()=>{x.selectedRowKeys=e,x.selectedRows=l,V.value=!1,x.selectedRowKeys.length>0&&x.selectedRows.length>0?"multiple"===g.mode?W.value=x.selectedRows.length>0&&x.selectedRows.map((e=>e[g.keywords.label])):(x.activeTableRow=x.selectedRows[0],W.value=x.selectedRows[0][g.keywords.label],X()):W.value=void 0,K("checkedChange",x.selectedRowKeys,x.selectedRows)}),10)},A=e=>({
// 鼠标单击行
onClick:()=>{if("multiple"!==g.mode){if(!g.rowClickRadio)return;const l=[],a=[];l.push(e[g.keywords.value]),a.push(e),$(l,a)}else{const l=x.selectedRowKeys.indexOf(e[g.keywords.value]);-1===l?x.selectedRowKeys.push(e[g.keywords.value]):x.selectedRowKeys.splice(l,1),-1===l?x.selectedRows.push(e):x.selectedRows.splice(l,1),$(x.selectedRowKeys,x.selectedRows)}}}),B=e=>{if("multiple"!==g.mode){if(!g.isKeyup)return;if(0===x.tableData.length)return;switch(e.keyCode){case 40:void 0!==x.tableData[j.value+1]?(x.activeTableRow=x.tableData[j.value+1],j.value=j.value+1):(j.value=0,x.activeTableRow=x.tableData[0]);break;case 38:void 0!==x.tableData[j.value-1]&&j.value>0?(x.activeTableRow=x.tableData[j.value-1],j.value=j.value-1):(j.value=0,x.activeTableRow=x.tableData[0]);break;case 13:const e=[],l=[];e.push(x.tableData[j.value][g.keywords.value]),l.push(x.tableData[j.value]),$(e,l)}}},E=e=>x.activeTableRow[g.keywords.value]===e[g.keywords.value]&&g.isKeyup?"active-selected-row":"",P=e=>{"multiple"===g.mode?setTimeout((()=>{if(e.length>0){let l=[],a=[],t=[];e.map((e=>{x.tableData.forEach((a=>{e===a[g.keywords.value]&&l.push(a)}))})),l.forEach((e=>{x.tableData.forEach((l=>{l[g.keywords.value]===e[g.keywords.value]&&(a.push(l[g.keywords.value]),t.push(l))}))})),x.selectedRowKeys=a,x.selectedRows=t,W.value=x.selectedRows.length>0&&x.selectedRows.map((e=>e[g.keywords.label]))}else W.value=void 0}),0):setTimeout((()=>{e.length>0?(x.tableData.map((l=>{l[g.keywords.value]===e[0]&&(x.selectedRowKeys=e,x.selectedRows=[l])})),W.value=x.selectedRows[0]&&x.selectedRows[0][g.keywords.label]):W.value=void 0}),20)},F=e=>e[g.keywords.value],J=e=>{setTimeout((()=>{var l;const a=JSON.parse(JSON.stringify(null==(l=g.table)?void 0:l.data));a&&a.length>0&&("multiple"!==g.mode&&(e?x.selectedRowKeys=[]:a.map((e=>{e[g.keywords.value]===(x.selectedRows[0]&&x.selectedRows[0][g.keywords.value])&&(x.selectedRowKeys=[e[g.keywords.value]])}))),x.tableData=a.filter((l=>{if(l[g.keywords.label].includes(e))return l})))}),0)},M=e=>{C.value=e,e?g.defaultSelectVal&&V.value&&P(g.defaultSelectVal):J("")},U=e=>{const l=x.tableData.find((l=>l[g.keywords.label]===e)),a=x.selectedRowKeys.indexOf(l[g.keywords.value]);-1===a?x.selectedRowKeys.push(l[g.keywords.value]):x.selectedRowKeys.splice(a,1),-1===a?x.selectedRows.push(l):x.selectedRows.splice(a,1),$(x.selectedRowKeys,x.selectedRows)},I=()=>{b((()=>{x.selectedRowKeys=[],x.selectedRows=[],W.value=[]}))},Q=()=>{"multiple"===g.mode?I():b((()=>{x.selectedRowKeys=[],x.selectedRows=[],x.activeTableRow={}}))},X=()=>{O.value.blur()};return S({focus:()=>{O.value.focus()},blur:X,openSelectDropdown:()=>{C.value=!0},state:x}),(l,a)=>{const t=d("a-table"),s=d("a-select");return u(),c(s,p({ref_key:"selectRef",ref:O,value:f(W),"onUpdate:value":a[0]||(a[0]=e=>h(W)?W.value=e:W=e),class:"t-antd-select-table",dropdownClassName:"t_antd_select_dropdown",style:"width:"+("number"==typeof e.selectWidth?`${e.selectWidth}px`:`${e.selectWidth}`),mode:e.mode,open:C.value},f(D),{"value-key":e.keywords.value,filterOption:!1,onSearch:J,onDropdownVisibleChange:M,onDeselect:U,onClear:Q,onInputKeyDown:B}),{notFoundContent:r((()=>[i("div",{class:"t-table-select__table",style:k({width:`${e.tableWidth}px`})},[w(t,p({ref_key:"selectTable",ref:N,"data-source":x.tableData,columns:e.columns,bordered:"","row-key":F,"row-class-name":E,pagination:e.isShowPagination&&e.table.pagination,"row-selection":e.rowSelection||{selectedRowKeys:x.selectedRowKeys,onChange:$,onSelectNone:I,type:"multiple"===e.mode?"checkbox":"radio"},customRow:A},l.$attrs),n({default:r((()=>[y(l.$slots,"default")])),_:2},[v(f(_),(e=>({name:e,fn:r((a=>[y(l.$slots,e,p({scope:a},a||{}))]))})))]),1040,["data-source","columns","pagination","row-selection"])],4)])),_:3},16,["value","style","mode","open","value-key"])}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/components/TAntdSelectTable/index.vue"]]);export{K as T};
