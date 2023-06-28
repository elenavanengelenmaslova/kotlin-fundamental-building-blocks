import{d,i as _,a as u,u as p,b as h,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as b,j as x,o as l,k,l as y,m as N,p as w,q as P,_ as S}from"./index-0faf809c.js";import{N as V}from"./NoteDisplay-8a1a3b10.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(u),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const r=f(()=>x.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(l(),n("div",{id:"page-root",style:b(a(P))},[t("div",j,[t("div",L,[t("h1",T,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(k)),1),y(" "+s(e==null?void 0:e.title)+" ",1),z])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(l(),n("hr",F)):w("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/home/runner/work/kotlin-fundamental-building-blocks/kotlin-fundamental-building-blocks/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
