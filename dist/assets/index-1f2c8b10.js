import{d as F,r as p,_ as B,b as f,o as h,c as g,h as y,e as n,w as o,i as l,n as M,t as D,F as C,s as S,v as N,C as U,g as I,j as w,f as q,z as L}from"./index-1fd04e47.js";import{W as V}from"./WidgetBox-cdac87e4.js";const W=F({setup(){const e=p(""),t=p(!1);function v(c){c||(c=Date.now());const r=c-Date.now();t.value=r<0;const a=Math.abs(r),_=[24*3600*1e3,3600*1e3,60*1e3,1e3],$=Math.floor(a/_[0]),k=Math.floor(a%_[0]/_[1]),E=Math.floor(a%_[0]%_[1]/_[2]),x=Math.floor(a%_[0]%_[1]%_[2]/_[3]);let b="";$&&(b+=`${$}天`),k&&(b+=`${k}小时`),E&&(b+=`${E}分钟`),x&&(b+=`${x}秒`),e.value=b}const d=p(Date.now()),u=p(null),m=p(null),s=p("h");function i(){if(!d.value||!m.value)return;const c={y:365*24*3600*1e3,month:30*24*3600*1e3,d:24*3600*1e3,h:3600*1e3,m:60*1e3,s:1e3};u.value=d.value+m.value*c[s.value]}return{timestamp:p(null),isDatetime:p(!0),spaceTimestamp:p(null),spaceText:e,isGoover:t,spaceTimestampConfirm:v,spaceStartDate:d,spaceEndDate:u,spaceNumber:m,spaceType:s,options:[{label:"年",value:"y"},{label:"月",value:"month"},{label:"日",value:"d"},{label:"时",value:"h"},{label:"分",value:"m"},{label:"秒",value:"s"}],conversionEnd:i}}});const z={class:"flex mb"},G={class:"flex"};function P(e,t,v,d,u,m){const s=f("n-date-picker"),i=f("n-button"),c=f("n-input-number"),r=f("n-select");return h(),g(C,null,[y("div",{class:M(`flex mb ${e.isDatetime?"reverse":"row-reverse"}`)},[n(s,{value:e.timestamp,"onUpdate:value":t[0]||(t[0]=a=>e.timestamp=a),type:"datetime",placeholder:"请选择日期时间",disabled:!e.isDatetime,clearable:""},null,8,["value","disabled"]),n(i,{type:"primary",onClick:t[1]||(t[1]=a=>e.isDatetime=!e.isDatetime),class:"space"},{default:o(()=>[l("切换")]),_:1}),n(c,{value:e.timestamp,"onUpdate:value":t[2]||(t[2]=a=>e.timestamp=a),type:"text",placeholder:"请输入时间戳",disabled:e.isDatetime,style:{width:"100%"}},null,8,["value","disabled"])],2),y("div",z,[n(i,{quaternary:"",type:"primary"},{default:o(()=>[l(" 距离 ")]),_:1}),n(s,{value:e.spaceTimestamp,"onUpdate:value":t[3]||(t[3]=a=>e.spaceTimestamp=a),type:"datetime",placeholder:"某个日期时间",clearable:"","on-confirm":e.spaceTimestampConfirm,"on-clear":e.spaceTimestampConfirm},null,8,["value","on-confirm","on-clear"]),n(i,{quaternary:"",type:"primary"},{default:o(()=>[l(D(e.isGoover?"已过去":"还有"),1)]),_:1}),n(i,{type:"primary",dashed:""},{default:o(()=>[l(D(e.spaceText),1)]),_:1})]),y("div",G,[n(s,{value:e.spaceStartDate,"onUpdate:value":t[4]||(t[4]=a=>e.spaceStartDate=a),type:"datetime",placeholder:"开始日期时间",clearable:""},null,8,["value"]),n(c,{value:e.spaceNumber,"onUpdate:value":t[5]||(t[5]=a=>e.spaceNumber=a),type:"text",placeholder:"间隔",min:0,class:"space",style:{width:"90px","flex-shrink":"0"}},null,8,["value"]),n(r,{value:e.spaceType,"onUpdate:value":t[6]||(t[6]=a=>e.spaceType=a),options:e.options},null,8,["value","options"]),n(i,{type:"primary",class:"space",onClick:e.conversionEnd},{default:o(()=>[l(" 查询 ")]),_:1},8,["onClick"]),n(s,{value:e.spaceEndDate,"onUpdate:value":t[7]||(t[7]=a=>e.spaceEndDate=a),type:"datetime",placeholder:"结束日期时间",clearable:"",disabled:""},null,8,["value"])])],64)}const j=B(W,[["render",P],["__scopeId","data-v-d79d25a4"]]),T=e=>(S("data-v-2e127e8d"),e=e(),N(),e),A=T(()=>y("div",null,[l(" 计算公式为：BMI=体重÷身高"),y("sup",null,"2"),l("。（体重单位：千克；身高单位：米） ")],-1)),H={class:"flex",style:{margin:"20px 0"}},J=T(()=>y("sup",{style:{position:"relative",top:"-10px"}},"2",-1)),K={class:"range"},O=T(()=>y("div",null,"参考范围：",-1)),Q=F({__name:"BmiCount",setup(e){const t=p(0),v=p(0),d=p(null),u=p("success");function m(){if(d.value=null,u.value="success",!t.value||!v.value)return;d.value=(v.value/t.value**2).toFixed(2);const s=d.value;s<=18.5||s>24&&s<=28?u.value="warning":s>28?u.value="error":u.value="success"}return(s,i)=>{const c=f("n-input-number"),r=f("n-button");return h(),g(C,null,[A,y("div",H,[n(c,{value:v.value,"onUpdate:value":i[0]||(i[0]=a=>v.value=a),type:"text",placeholder:"体重",min:0,style:{width:"100px"}},null,8,["value"]),n(r,{quaternary:"",type:"primary"},{default:o(()=>[l(" kg ➗ ")]),_:1}),n(c,{value:t.value,"onUpdate:value":i[1]||(i[1]=a=>t.value=a),type:"text",placeholder:"身高",min:0,style:{width:"100px"}},null,8,["value"]),n(r,{quaternary:"",type:"primary"},{default:o(()=>[l(" m"),J]),_:1}),n(r,{type:"primary",onClick:m},{default:o(()=>[l(" 等于 ")]),_:1}),n(r,{type:u.value,dashed:"",style:{"margin-left":"10px"}},{default:o(()=>[l(D(d.value),1)]),_:1},8,["type"])]),y("div",K,[O,n(r,{type:"warning",ghost:""},{default:o(()=>[l(" (0, 18.5] 偏瘦 ")]),_:1}),n(r,{type:"success",ghost:""},{default:o(()=>[l(" (18.5, 24] 正常 ")]),_:1}),n(r,{type:"warning",ghost:""},{default:o(()=>[l(" (24, 28] 超重 ")]),_:1}),n(r,{type:"error",ghost:""},{default:o(()=>[l(" (28, 32] 肥胖 ")]),_:1}),n(r,{type:"error",ghost:""},{default:o(()=>[l(" (32, +∞) 重度肥胖 ")]),_:1})])],64)}}});const R=B(Q,[["__scopeId","data-v-2e127e8d"]]),X=F({__name:"ThirdParty",setup(e){var d;const t=((d=U.filter(u=>u.children)[0])==null?void 0:d.children)||[];function v(u){u&&window.open(u)}return(u,m)=>{const s=f("n-button");return h(!0),g(C,null,I(q(t),(i,c)=>(h(),w(s,{type:"primary",key:c,style:{margin:"10px"},onClick:r=>v(i.url)},{default:o(()=>[l(D(i.name)+" ↗ ",1)]),_:2},1032,["onClick"]))),128)}}}),Y=F({__name:"index",setup(e){const t={DatetimeConversion:j,BmiCount:R,ThirdParty:X},v=p(U);return(d,u)=>(h(!0),g(C,null,I(v.value,(m,s)=>(h(),w(V,{key:s,title:m.title,class:"unit-box",width:m.width,height:m.height},{default:o(()=>[(h(),w(L(t[m.component])))]),_:2},1032,["title","width","height"]))),128))}});const te=B(Y,[["__scopeId","data-v-611eb0c3"]]);export{te as default};