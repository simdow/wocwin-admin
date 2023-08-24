import"./vue@3.2.47-8ce7078f.js";import{e,y as l,X as t,Q as s,x as a,i as o,$ as d,o as c,R as u,U as r,b as n,c as i,_ as w,Z as y,N as p,P as m,n as v}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{c as R,k as f,u as b,i as h}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{u as k}from"./@vue_shared@3.2.47-699fd3ac.js";import{_ as S}from"./index-ce713cc1.js";const g=S(e({name:"TAntdSelectTable",props:{modelValue:{type:[String,Number,Array]},
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
// select宽度
selectWidth:{type:[String,Number],default:200},
// table宽度
tableWidth:{type:Number,default:550},
// 设置默认选中项--keywords.value值（单选是String, Number类型；多选时是数组）
defaultSelectVal:{type:Array}},emits:["checkedChange","update:modelValue"],setup(e,{expose:S,emit:g}){const K=e,_=l((()=>({allowClear:!0,showSearch:!0,dropdownMatchSelectWidth:!1,...t()}))),V=s(),C=Object.keys(V),D=R(!0),j=R(!1),x=f({defaultSelectValue:K.defaultSelectVal,
// 默认选中
tableData:K.table.data,
// table数据
// 选中KEY
selectedRowKeys:[],
// 选中行
selectedRows:[]}),O=R(null),T=R(null);a((()=>K.table.data),(e=>{x.tableData=e}),{deep:!0}),a((()=>K.defaultSelectVal),(e=>{x.defaultSelectValue=e,e&&D.value&&A(e)}),{deep:!0});let N=l({get:()=>K.modelValue,set(e){g("update:modelValue",e)}});o((()=>{x.defaultSelectValue&&D.value&&A(x.defaultSelectValue)}));const W=(e,l)=>{setTimeout((()=>{x.selectedRowKeys=e,x.selectedRows=l,D.value=!1,x.selectedRowKeys.length>0&&x.selectedRows.length>0?"multiple"===K.mode?N.value=x.selectedRows.length>0&&x.selectedRows.map((e=>e[K.keywords.label])):(N.value=x.selectedRows[0][K.keywords.label],U()):N.value=void 0,g("checkedChange",x.selectedRowKeys,x.selectedRows)}),500)},$=e=>({
// 鼠标单击行
onClick:()=>{if("multiple"!==K.mode){if(!K.rowClickRadio)return;const l=[],t=[];l.push(e[K.keywords.value]),t.push(e),W(l,t)}else{const l=x.selectedRowKeys.indexOf(e[K.keywords.value]);-1===l?x.selectedRowKeys.push(e[K.keywords.value]):x.selectedRowKeys.splice(l,1),-1===l?x.selectedRows.push(e):x.selectedRows.splice(l,1),W(x.selectedRowKeys,x.selectedRows)}}}),A=e=>{"multiple"===K.mode?setTimeout((()=>{if(e.length>0){let l=[],t=[],s=[];e.map((e=>{x.tableData.forEach((t=>{e===t[K.keywords.value]&&l.push(t)}))})),l.forEach((e=>{x.tableData.forEach((l=>{l[K.keywords.value]===e[K.keywords.value]&&(t.push(l[K.keywords.value]),s.push(l))}))})),x.selectedRowKeys=t,x.selectedRows=s,N.value=x.selectedRows.length>0&&x.selectedRows.map((e=>e[K.keywords.label]))}else N.value=void 0}),0):setTimeout((()=>{e.length>0?(x.tableData.map((l=>{l[K.keywords.value]===e[0]&&(x.selectedRowKeys=e,x.selectedRows=[l])})),N.value=x.selectedRows[0]&&x.selectedRows[0][K.keywords.label]):N.value=void 0}),300)},E=e=>e[K.keywords.value],P=e=>{var l;const t=JSON.parse(JSON.stringify(null==(l=K.table)?void 0:l.data));t&&t.length>0&&("multiple"!==K.mode&&(e?x.selectedRowKeys=[]:t.map((e=>{e[K.keywords.value]===x.selectedRows[0]&&x.selectedRows[0][K.keywords.value]&&(x.selectedRowKeys=[e[K.keywords.value]])}))),x.tableData=t.filter((l=>{if(l[K.keywords.label].includes(e))return l})))},B=e=>{j.value=e,e?K.defaultSelectVal&&D.value&&A(K.defaultSelectVal):P("")},F=e=>{const l=x.tableData.find((l=>l[K.keywords.label]===e)),t=x.selectedRowKeys.indexOf(l[K.keywords.value]);-1===t?x.selectedRowKeys.push(l[K.keywords.value]):x.selectedRowKeys.splice(t,1),-1===t?x.selectedRows.push(l):x.selectedRows.splice(t,1),W(x.selectedRowKeys,x.selectedRows)},J=()=>{v((()=>{x.selectedRowKeys=[],x.selectedRows=[],N.value=[]}))},M=()=>{"multiple"===K.mode?J():(x.selectedRowKeys=[],x.selectedRows=[])},U=()=>{O.value.blur()};return S({focus:()=>{O.value.focus()},blur:U,openSelectDropdown:()=>{j.value=!0}}),(l,t)=>{const s=d("a-table"),a=d("a-select");return c(),u(a,m({ref_key:"selectRef",ref:O,value:b(N),"onUpdate:value":t[0]||(t[0]=e=>h(N)?N.value=e:N=e),class:"t-antd-select-table",dropdownClassName:"t_antd_select_dropdown",style:"width:"+("number"==typeof e.selectWidth?`${e.selectWidth}px`:`${e.selectWidth}`),mode:e.mode,open:j.value},b(_),{"value-key":e.keywords.value,filterOption:!1,onSearch:P,onDropdownVisibleChange:B,onDeselect:F,onClear:M}),{notFoundContent:r((()=>[n("div",{class:"t-table-select__table",style:k({width:`${e.tableWidth}px`})},[i(s,m({ref_key:"selectTable",ref:T,"data-source":x.tableData,columns:e.columns,class:{radioStyle:!("multiple"===e.mode)},bordered:"","row-key":E,pagination:e.isShowPagination&&e.table.pagination,"row-selection":e.rowSelection||{selectedRowKeys:x.selectedRowKeys,onChange:W,onSelectNone:J,type:"multiple"===e.mode?"checkbox":"radio"},customRow:$},l.$attrs),w({default:r((()=>[p(l.$slots,"default")])),_:2},[y(b(C),(e=>({name:e,fn:r((t=>[p(l.$slots,e,m({scope:t},t||{}))]))})))]),1040,["data-source","columns","class","pagination","row-selection"])],4)])),_:3},16,["value","style","mode","open","value-key"])}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/components/TAntdSelectTable/index.vue"]]);export{g as T};
