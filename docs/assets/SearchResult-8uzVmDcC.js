import{u as U,j as se,m as te,p as M,q as ae,P as le,v as re,x as ue,l as E,y as q,z as ie,w as Y,k as t,A as oe,R as _,B as ne,C as ce,D as ve,E as he,G as de,H as pe,I as me,J as ye,K as ge,L as w,M as fe,N as xe,O as be,Q as $,S as j,T as He}from"./app-BNg3QKvU.js";const Re=["/portfolio.html","/","/cms/fix.html","/cms/four.html","/cms/page-test.html","/cms/","/cms/three.html","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/demo/","/Forex/","/guide/","/Strategic_ideas/","/Forex/ebc/anzhuang.html","/Forex/ebc/","/Forex/qushi/qushi.html","/Forex/qushi/qushi1.html","/Forex/qushi/","/Forex/zhendang/zhendang.html","/guide/bar/baz.html","/guide/bar/","/guide/foo/ray.html","/guide/foo/","/Forex/ebc/bushu/dierbu.html","/Forex/ebc/bushu/disanbu.html","/Forex/ebc/bushu/diyibu.html","/Forex/ebc/wancheng/diyibu.html","/404.html","/Forex/zhendang/","/Forex/ebc/bushu/","/Forex/ebc/wancheng/"],ke="SEARCH_PRO_QUERY_HISTORY",g=U(ke,[]),qe=()=>{const{queryHistoryCount:a}=w,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},O=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=w,f=U(we,[]),Fe=()=>{const a=I>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:O(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,I-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Qe=a=>{const l=he(),r=M(),F=de(),i=E(0),H=q(()=>i.value>0),p=pe([]);return me(()=>{const{search:m,terminate:Q}=ye(),x=ge(c=>{const b=c.join(" "),{searchFilter:S=d=>d,splitWord:C,suggestionsFilter:P,...y}=l.value;b?(i.value+=1,m(c.join(" "),r.value,y).then(d=>S(d,b,r.value,F.value)).then(d=>{i.value-=1,p.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(p.value=[])})):p.value=[]},w.searchDelay-w.suggestDelay);Y([a,r],([c])=>x(c),{immediate:!0}),fe(()=>{Q()})}),{isSearching:H,results:p}};var Ce=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),F=M(),i=ae(le),{enabled:H,addQueryHistory:p,queryHistory:m,removeQueryHistory:Q}=qe(),{enabled:x,resultHistory:c,addResultHistory:b,removeResultHistory:S}=Fe(),C=H||x,P=re(a,"queries"),{results:y,isSearching:d}=Qe(P),u=ue({isQuery:!0,index:0}),v=E(0),h=E(0),T=q(()=>C&&(m.value.length>0||c.value.length>0)),L=q(()=>y.value.length>0),D=q(()=>y.value[v.value]||null),B=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:m.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?m.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:y.value.length-1,h.value=D.value.contents.length-1},K=()=>{v.value=v.value<y.value.length-1?v.value+1:0,h.value=0},N=()=>{h.value<D.value.contents.length-1?h.value+=1:K()},V=()=>{h.value>0?h.value-=1:J()},A=e=>e.map(s=>He(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=xe[e.index]||"$content",[o,k=""]=be(s)?s[F.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",A([o,...n,k])))}return e.display.map(s=>t("div",A(s)))},R=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")},X=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),m.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(s)}})]))])):null,Z=()=>x?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(_,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{R()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>A(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(L.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=D.value.contents[h.value];p(a.queries.join(" ")),b(s),r.push(O(s)),R()}}else if(x){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",m.value[s]),e.preventDefault()):(r.push(c.value[s].link),R())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!L.value:!T.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):L.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:s},o)=>{const k=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:k}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const z=k&&h.value===ee;return t(_,{to:O(n),class:["search-pro-result-item",{active:z,"aria-selected":z}],onClick:()=>{p(a.queries.join(" ")),b(n),R()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:C?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ce as default};
