import{i as e}from"./echarts@5.4.2-3ca7380f.js";import{e as t,f as a,Z as r,o,P as s,Q as i,J as l,b as d}from"./@vue_runtime-core@3.2.47-ac740756.js";import{X as n}from"./zrender@5.4.3-da24ec0b.js";import{q as c,s as m}from"./@vue_shared@3.2.47-177e1703.js";const f=["id"],y=t({__name:"BarChart",props:{id:{type:String,default:"barChart"},className:{type:String,default:""},width:{type:String,default:"200px",required:!0},height:{type:String,default:"200px",required:!0}},setup(t){const y=t,p={grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{x:"center",y:"bottom",data:["收入","毛利润","收入增长率","利润增长率"],textStyle:{color:"#999"}},xAxis:[{type:"category",data:["浙江","北京","上海","广东","深圳"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:1e4,interval:2e3,axisLabel:{formatter:"{value} "}},{type:"value",min:0,max:100,interval:20,axisLabel:{formatter:"{value}%"}}],series:[{name:"收入",type:"bar",data:[7e3,7100,7200,7300,7400],barWidth:20,itemStyle:{color:new n(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])}},{name:"毛利润",type:"bar",data:[8e3,8200,8400,8600,8800],barWidth:20,itemStyle:{color:new n(0,0,0,1,[{offset:0,color:"#25d73c"},{offset:.5,color:"#1bc23d"},{offset:1,color:"#179e61"}])}},{name:"收入增长率",type:"line",yAxisIndex:1,data:[60,65,70,75,80],itemStyle:{color:"#67C23A"}},{name:"利润增长率",type:"line",yAxisIndex:1,data:[70,75,80,85,90],itemStyle:{color:"#409EFF"}}]};return a((()=>{const t=e(document.getElementById(y.id));t.setOption(p),window.addEventListener("resize",(()=>{t.resize()}))})),(e,a)=>{const n=r("el-card");return o(),s(n,null,{header:i((()=>[l(" 业绩柱状图 ")])),default:i((()=>[d("div",{id:t.id,class:c(t.className),style:m({height:t.height,width:t.width})},null,14,f)])),_:1})}}});export{y as _};
