import{d as S,r as n,q as T,o as i,c as p,e as t,w as _,v as r,u as I,s as k,t as Y,F as M,p as F,l as L,_ as N,a as U,x as Q,n as j,i as q,j as z,h as B}from"./index-bee735d4.js";import{Q as E}from"./QuickCalculation-2f77bf54.js";const c=h=>(F("data-v-41fb81b9"),h=h(),L(),h),A={class:"item time"},G=c(()=>t("div",null,"日期时间转换为时间戳",-1)),H={class:"val"},J={class:"item"},K=c(()=>t("div",null,"时间戳转化为日期时间，单位：ms",-1)),O={class:"val"},P={class:"item time"},R=c(()=>t("div",null,"距离某个日期还剩多少时间",-1)),W=c(()=>t("span",null,"距离：",-1)),X={class:"val"},Z={class:"item time"},ee=c(()=>t("div",null,"起止时间间隔时长，间隔时间单位：h",-1)),te=c(()=>t("span",null,"开始时间：",-1)),le=c(()=>t("span",null,"间隔时间：",-1)),ne=c(()=>t("span",null,"结束时间：",-1)),se=S({__name:"TimeConversion",setup(h){const m=n(null),D=n(null),f=n(null),o=n(null),y=n(null),$=n(null);function d(x){const l=k(x)-Date.now(),e=[24*3600*1e3,3600*1e3,60*1e3,1e3],V=Math.floor(l/e[0]),b=Math.floor(l%e[0]/e[1]),g=Math.floor(l%e[0]%e[1]/e[2]),w=Math.floor(l%e[0]%e[1]%e[2]/e[3]);let C="";V&&(C+=`${V}天`),b&&(C+=`${b}小时`),g&&(C+=`${g}分钟`),w&&(C+=`${w}秒`),$.value=C}const a=n(T(Date.now())),s=n(null),u=n(null);function v(){!a.value&&u.value?a.value=T(k(u.value)-s.value*3600*1e3):u.value=T(k(a.value)+s.value*3600*1e3)}return(x,l)=>(i(),p(M,null,[t("div",A,[G,_(t("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),placeholder:"YYYY-MM-DD hh:mm:ss"},null,512),[[r,m.value]]),t("button",{onClick:l[1]||(l[1]=e=>D.value=I(k)(m.value))},"转换"),t("span",H,Y(D.value),1)]),t("div",J,[K,_(t("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=e=>o.value=e)},null,512),[[r,o.value]]),t("button",{onClick:l[3]||(l[3]=e=>f.value=I(T)(o.value))},"转换"),t("span",O,Y(f.value),1)]),t("div",P,[R,W,_(t("input",{type:"text","onUpdate:modelValue":l[4]||(l[4]=e=>y.value=e),placeholder:"YYYY-MM-DD hh:mm:ss"},null,512),[[r,y.value]]),t("button",{onClick:l[5]||(l[5]=e=>d(y.value))},"还剩"),t("span",X,Y($.value),1)]),t("div",Z,[ee,te,_(t("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=e=>a.value=e),placeholder:"YYYY-MM-DD hh:mm:ss",onChange:v},null,544),[[r,a.value]]),le,_(t("input",{type:"text","onUpdate:modelValue":l[7]||(l[7]=e=>s.value=e),style:{width:"60px"},onChange:v},null,544),[[r,s.value]]),ne,_(t("input",{type:"text","onUpdate:modelValue":l[8]||(l[8]=e=>u.value=e),placeholder:"YYYY-MM-DD hh:mm:ss",onChange:v},null,544),[[r,u.value]])])],64))}});const oe=N(se,[["__scopeId","data-v-41fb81b9"]]),ae={class:"title"},ue=["onClick"],ie={key:0,class:"box"},ce=S({__name:"VTool",setup(h){const m={TimeConversion:oe,QuickCalculation:E},D=n(Q),f=n(null),o=n(null);function y($,d){f.value=$,d.url?(o.value=null,window.open(d.url)):(console.log(d.component),o.value=d.component)}return($,d)=>(i(),p("ul",null,[(i(!0),p(M,null,U(D.value,(a,s)=>(i(),p("li",{key:s},[t("div",ae,Y(a.title),1),(i(!0),p(M,null,U(a.detail,(u,v)=>(i(),p("div",{key:`${s}-${v}`,class:j(["name",{active:f.value===`${s}-${v}`}]),onClick:x=>y(`${s}-${v}`,u)},Y(u.name),11,ue))),128)),s===0?(i(),p("div",ie,[m[o.value]?(i(),q(z(m[o.value]),{key:0})):B("",!0)])):B("",!0)]))),128))]))}});const pe=N(ce,[["__scopeId","data-v-5de7cca0"]]);export{pe as default};
