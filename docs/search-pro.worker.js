const{entries:V}=Object,{fromEntries:et}=Object,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":88,\"nextId\":88,\"documentIds\":{\"0\":\"0\",\"1\":\"0#介绍\",\"2\":\"1\",\"3\":\"2\",\"4\":\"2@0\",\"5\":\"2@1\",\"6\":\"3\",\"7\":\"3@0\",\"8\":\"3@1\",\"9\":\"4\",\"10\":\"4@0\",\"11\":\"4@1\",\"12\":\"5\",\"13\":\"5@0\",\"14\":\"6\",\"15\":\"6@0\",\"16\":\"6@1\",\"17\":\"7\",\"18\":\"7@0\",\"19\":\"7@1\",\"20\":\"8\",\"21\":\"8@0\",\"22\":\"8@1\",\"23\":\"9\",\"24\":\"9#markdown-介绍\",\"25\":\"9#markdown-配置\",\"26\":\"9#markdown-扩展\",\"27\":\"9#vuepress-扩展\",\"28\":\"9#主题扩展\",\"29\":\"9#选项卡\",\"30\":\"9#脚注\",\"31\":\"9#导入文件\",\"32\":\"9#tex-语法\",\"33\":\"9#任务列表\",\"34\":\"9#图片增强\",\"35\":\"9#上下角标\",\"36\":\"9#组件\",\"37\":\"9@0\",\"38\":\"9@1\",\"39\":\"10\",\"40\":\"10#页面标题\",\"41\":\"10#页面信息\",\"42\":\"10#页面内容\",\"43\":\"10#组件\",\"44\":\"10@0\",\"45\":\"10@1\",\"46\":\"11\",\"47\":\"11@0\",\"48\":\"12\",\"49\":\"12#功能亮点\",\"50\":\"12#bar\",\"51\":\"12#foo\",\"52\":\"13\",\"53\":\"13@0\",\"54\":\"14\",\"55\":\"14@0\",\"56\":\"15\",\"57\":\"16\",\"58\":\"16#介绍\",\"59\":\"16#详情\",\"60\":\"17\",\"61\":\"18\",\"62\":\"18#介绍\",\"63\":\"18#详情\",\"64\":\"19\",\"65\":\"19@0\",\"66\":\"19@1\",\"67\":\"20\",\"68\":\"21\",\"69\":\"22\",\"70\":\"22#功能亮点\",\"71\":\"22#bar\",\"72\":\"22#foo\",\"73\":\"23\",\"74\":\"23@0\",\"75\":\"24\",\"76\":\"25\",\"77\":\"25@0\",\"78\":\"26\",\"79\":\"26@0\",\"80\":\"27\",\"81\":\"27@0\",\"82\":\"28\",\"83\":\"28@0\",\"84\":\"29\",\"85\":\"30\",\"86\":\"31\",\"87\":\"32\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1,12],\"2\":[1,12],\"3\":[1,2],\"4\":[null,null,1],\"5\":[null,null,1],\"6\":[1,2],\"7\":[null,null,1],\"8\":[null,null,1],\"9\":[1,2],\"10\":[null,null,1],\"11\":[null,null,1],\"12\":[1],\"13\":[null,null,3],\"14\":[1,2],\"15\":[null,null,1],\"16\":[null,null,1],\"17\":[1,18],\"18\":[null,null,1],\"19\":[null,null,1],\"20\":[1,20],\"21\":[null,null,1],\"22\":[null,null,1],\"23\":[2,10],\"24\":[2,8],\"25\":[2,12],\"26\":[2,11],\"27\":[2,10],\"28\":[1,8],\"29\":[1,1],\"30\":[1,2],\"31\":[1,1],\"32\":[2,25],\"33\":[1,5],\"34\":[1,2],\"35\":[1,3],\"36\":[1],\"37\":[null,null,1],\"38\":[null,null,1],\"39\":[1,3],\"40\":[1,19],\"41\":[1,20],\"42\":[1,12],\"43\":[1,13],\"44\":[null,null,1],\"45\":[null,null,2],\"46\":[1],\"47\":[null,null,1],\"48\":[1],\"49\":[1],\"50\":[1,2],\"51\":[1,2],\"52\":[1],\"53\":[null,null,3],\"54\":[1],\"55\":[null,null,3],\"56\":[1,2],\"57\":[1],\"58\":[1,4],\"59\":[1,2],\"60\":[1,2],\"61\":[1],\"62\":[1,4],\"63\":[1,2],\"64\":[2,10],\"65\":[null,null,1],\"66\":[null,null,1],\"67\":[1,6],\"68\":[1],\"69\":[1],\"70\":[1],\"71\":[1,2],\"72\":[1,2],\"73\":[1],\"74\":[null,null,3],\"75\":[1,2],\"76\":[1],\"77\":[null,null,3],\"78\":[1],\"79\":[null,null,3],\"80\":[1],\"81\":[null,null,3],\"82\":[1],\"83\":[null,null,3],\"84\":[1,3],\"85\":[1],\"86\":[1],\"87\":[1]},\"averageFieldLength\":[1.099876770402937,6.791136058754079,1.0605971103234113],\"storedFields\":{\"0\":{\"h\":\"档案主页\"},\"1\":{\"h\":\"介绍\",\"t\":[\"这是一个档案主页的案例。\",\"要使用此布局，你应该在页面 Frontmatter 中设置 home: true 和 portfolio: true。\",\"相关配置文档请见 档案主页。\"]},\"2\":{\"h\":\"项目主页\",\"t\":[\"这是项目主页的案例。你可以在这里放置你的主体内容。\",\"想要使用此布局，你需要在页面 front matter 中设置 home: true。\",\"配置项的相关说明详见 项目主页配置。\"]},\"3\":{\"h\":\"第666篇文章\",\"t\":[\"布局包括:\",\"这是第666666篇文章\"]},\"4\":{\"c\":[\"ZHINAN\"]},\"5\":{\"c\":[\"BUJU\"]},\"6\":{\"h\":\"第SI篇文章\",\"t\":[\"布局包括:\",\"这是第SI篇文章\"]},\"7\":{\"c\":[\"ZHINAN\"]},\"8\":{\"c\":[\"BUJU\"]},\"9\":{\"h\":\"第二篇文章\",\"t\":[\"布局包括:\",\"这是第二篇文章\"]},\"10\":{\"c\":[\"指南\"]},\"11\":{\"c\":[\"布局\"]},\"12\":{\"h\":\"后台功能与演示\"},\"13\":{\"c\":[\"测试指南\",\"马丁\",\"剥头皮测试\"]},\"14\":{\"h\":\"第三篇文章\",\"t\":[\"布局包括:\",\"这是第二篇文章\"]},\"15\":{\"c\":[\"测试类别\"]},\"16\":{\"c\":[\"测试标签\"]},\"17\":{\"h\":\"布局与功能禁用\",\"t\":[\"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。\",\"本页面就是一个示例，禁用了如下功能:\",\"导航栏\",\"侧边栏\",\"路径导航\",\"页面信息\",\"贡献者\",\"编辑此页链接\",\"更新时间\",\"上一篇/下一篇 链接\",\"评论\",\"页脚\",\"返回顶部按钮\"]},\"18\":{\"c\":[\"使用指南\"]},\"19\":{\"c\":[\"禁用\"]},\"20\":{\"h\":\"布局\",\"t\":[\"布局包括:\",\"导航栏\",\"侧边栏\",\"页脚\",\"同时每个页面包含:\",\"路径导航\",\"标题和页面信息\",\"TOC (文章标题列表)\",\"贡献者、更新时间等页面元信息\",\"评论\",\"主题也带有以下元素:\",\"夜间模式按钮\",\"返回顶部按钮\",\"打印按钮\",\"你可以在主题选项和页面的 frontmatter 中自定义它们。\"]},\"21\":{\"c\":[\"指南\"]},\"22\":{\"c\":[\"布局\"]},\"23\":{\"h\":\"Markdown 展示\",\"t\":[\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。\",\"你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\"]},\"24\":{\"h\":\"Markdown 介绍\",\"t\":[\"如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。\"]},\"25\":{\"h\":\"Markdown 配置\",\"t\":[\"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。\",\"Frontmatter\",\"Frontmatter 是 VuePress 中很重要的一个概念，请阅读 Frontmatter 介绍 了解详情。\"]},\"26\":{\"h\":\"Markdown 扩展\",\"t\":[\"VuePress 会使用 markdown-it 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 语法扩展 。\"]},\"27\":{\"h\":\"VuePress 扩展\",\"t\":[\"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。\",\"关于这些扩展，请阅读 VuePress 中的 Markdown 扩展。\"]},\"28\":{\"h\":\"主题扩展\",\"t\":[\"通过 VuePress 插件，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。\"]},\"29\":{\"h\":\"选项卡\",\"t\":[\"查看详情\"]},\"30\":{\"h\":\"脚注\",\"t\":[\"此文字有脚注^first.\",\"查看详情\"]},\"31\":{\"h\":\"导入文件\",\"t\":[\"查看详情\"]},\"32\":{\"h\":\"TeX 语法\",\"t\":[\"$$ \\\\frac {\\\\partial^r} {\\\\partial \\\\omega^r} \\\\left(\\\\frac {y^{\\\\omega}} {\\\\omega}\\\\right) = \\\\left(\\\\frac {y^{\\\\omega}} {\\\\omega}\\\\right) \\\\left{(\\\\log y)^r + \\\\sum_{i=1}^r \\\\frac {(-1)^i r \\\\cdots (r-i+1) (\\\\log y)^{r-i}} {\\\\omega^i} \\\\right} $$\",\"查看详情\"]},\"33\":{\"h\":\"任务列表\",\"t\":[\" 计划 1\",\" 计划 2\",\"查看详情\"]},\"34\":{\"h\":\"图片增强\",\"t\":[\"支持为图片设置颜色模式和大小。\",\"查看详情\"]},\"35\":{\"h\":\"上下角标\",\"t\":[\"19th H2O\",\"查看详情\"]},\"36\":{\"h\":\"组件\"},\"37\":{\"c\":[\"使用指南\"]},\"38\":{\"c\":[\"Markdown\"]},\"39\":{\"h\":\"页面配置\",\"t\":[\"more 注释之前的内容被视为文章摘要。\"]},\"40\":{\"h\":\"页面标题\",\"t\":[\"The first H1 title in Markdown will be regarded as page title.\",\"Markdown 中的第一个 H1 标题会被视为页面标题。\",\"你可以在 Markdown 的 Frontmatter 中设置页面标题。\",\"--- title: 页面标题 ---\"]},\"41\":{\"h\":\"页面信息\",\"t\":[\"你可以在 Markdown 的 Frontmatter 中设置页面信息。\",\"作者设置为 Ms.Hope。\",\"写作日期为 2020 年 1 月 1 日\",\"分类为 “使用指南”\",\"标签为 “页面配置” 和 “使用指南”\"]},\"42\":{\"h\":\"页面内容\",\"t\":[\"你可以自由在这里书写你的 Markdown。\",\"图片引入\",\"你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。\",\"对于 .vuepress/public 文件夹的图片，请使用绝对链接 / 进行引用。\"]},\"43\":{\"h\":\"组件\",\"t\":[\"每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：\",\"{{ 1 + 1 }}\",\"{{ i }}\",\"你也可以创建并引入你自己的组件。\"]},\"44\":{\"c\":[\"使用指南\"]},\"45\":{\"c\":[\"页面配置\",\"使用指南\"]},\"46\":{\"h\":\"主要功能与配置演示\"},\"47\":{\"c\":[\"使用指南\"]},\"48\":{\"h\":\"自动化\"},\"49\":{\"h\":\"功能亮点\"},\"50\":{\"h\":\"Bar\",\"t\":[\"baz\",\"...\"]},\"51\":{\"h\":\"Foo\",\"t\":[\"ray\",\"...\"]},\"52\":{\"h\":\"外汇EA\"},\"53\":{\"c\":[\"测试思路\",\"马丁\",\"剥头皮\"]},\"54\":{\"h\":\"策略思路\"},\"55\":{\"c\":[\"测试思路\",\"马丁\",\"剥头皮\"]},\"56\":{\"h\":\"均线策略\",\"t\":[\"功能详情...\"]},\"57\":{\"h\":\"趋势类EA\"},\"58\":{\"h\":\"介绍\",\"t\":[\"我们支持 bar 功能，...\"]},\"59\":{\"h\":\"详情\",\"t\":[\"baz\",\"...\"]},\"60\":{\"h\":\"另外一个策略\",\"t\":[\"功能详情...\"]},\"61\":{\"h\":\"趋势网格策略\"},\"62\":{\"h\":\"介绍\",\"t\":[\"我们支持 foo 功能，...\"]},\"63\":{\"h\":\"详情\",\"t\":[\"ray\",\"...\"]},\"64\":{\"h\":\"Markdown 展示\",\"t\":[\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。\",\"你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\"]},\"65\":{\"c\":[\"使用指南\"]},\"66\":{\"c\":[\"Markdown\"]},\"67\":{\"h\":\"\",\"t\":[\"alt text\",\"这个是目录，也可以写一点其他东西\",\"这个是增加了indexwenjian 的效果\"]},\"68\":{\"h\":\"这个是第二趋势文档\"},\"69\":{\"h\":\"这个是趋势三的文档\"},\"70\":{\"h\":\"功能亮点\"},\"71\":{\"h\":\"Bar\",\"t\":[\"baz\",\"...\"]},\"72\":{\"h\":\"Foo\",\"t\":[\"ray\",\"...\"]},\"73\":{\"h\":\"趋势EA讲解\"},\"74\":{\"c\":[\"测试思路\",\"马丁\",\"剥头皮\"]},\"75\":{\"h\":\"这个是振荡类EA的首页\",\"t\":[\"这个是内容部分\",\"这个是结束部分\"]},\"76\":{\"h\":\"这个是bushu里边的第2步\"},\"77\":{\"c\":[\"测试指南\",\"马丁\",\"剥头皮测试\"]},\"78\":{\"h\":\"这个是bushu里边的第3步\"},\"79\":{\"c\":[\"测试指南\",\"马丁\",\"剥头皮测试\"]},\"80\":{\"h\":\"这个是bushu里边的第一步\"},\"81\":{\"c\":[\"测试指南\",\"马丁\",\"剥头皮测试\"]},\"82\":{\"h\":\"这个是完成的diyibu\"},\"83\":{\"c\":[\"测试指南\",\"马丁\",\"剥头皮测试\"]},\"84\":{\"h\":\"\",\"t\":[\"404 Not Found\"]},\"85\":{\"h\":\"Zhendang\"},\"86\":{\"h\":\"Bushu\"},\"87\":{\"h\":\"Wancheng\"}},\"dirtCount\":0,\"index\":[[\"wancheng\",{\"0\":{\"87\":1}}],[\"will\",{\"1\":{\"40\":1}}],[\"zhendang\",{\"0\":{\"85\":1}}],[\"zhinan\",{\"2\":{\"4\":1,\"7\":1}}],[\"not\",{\"1\":{\"84\":1}}],[\"404\",{\"1\":{\"84\":1}}],[\"也可以写一点其他东西\",{\"1\":{\"67\":1}}],[\"alt\",{\"1\":{\"67\":1}}],[\"as\",{\"1\":{\"40\":1}}],[\"趋势ea讲解\",{\"0\":{\"73\":1}}],[\"趋势网格策略\",{\"0\":{\"61\":1}}],[\"趋势类ea\",{\"0\":{\"57\":1}}],[\"另外一个策略\",{\"0\":{\"60\":1}}],[\"详情\",{\"0\":{\"59\":1,\"63\":1}}],[\"我们支持\",{\"1\":{\"58\":1,\"62\":1}}],[\"功能\",{\"1\":{\"58\":1,\"62\":1}}],[\"功能详情\",{\"1\":{\"56\":1,\"60\":1}}],[\"功能亮点\",{\"0\":{\"49\":1,\"70\":1}}],[\"均线策略\",{\"0\":{\"56\":1}}],[\"策略思路\",{\"0\":{\"54\":1}}],[\"剥头皮\",{\"2\":{\"53\":1,\"55\":1,\"74\":1}}],[\"剥头皮测试\",{\"2\":{\"13\":1,\"77\":1,\"79\":1,\"81\":1,\"83\":1}}],[\"外汇ea\",{\"0\":{\"52\":1}}],[\"自动化\",{\"0\":{\"48\":1}}],[\"这个是完成的diyibu\",{\"0\":{\"82\":1}}],[\"这个是bushu里边的第一步\",{\"0\":{\"80\":1}}],[\"这个是bushu里边的第3步\",{\"0\":{\"78\":1}}],[\"这个是bushu里边的第2步\",{\"0\":{\"76\":1}}],[\"这个是结束部分\",{\"1\":{\"75\":1}}],[\"这个是内容部分\",{\"1\":{\"75\":1}}],[\"这个是振荡类ea的首页\",{\"0\":{\"75\":1}}],[\"这个是趋势三的文档\",{\"0\":{\"69\":1}}],[\"这个是第二趋势文档\",{\"0\":{\"68\":1}}],[\"这个是增加了indexwenjian\",{\"1\":{\"67\":1}}],[\"这个是目录\",{\"1\":{\"67\":1}}],[\"这意味着你可以在\",{\"1\":{\"43\":1}}],[\"这是第二篇文章\",{\"1\":{\"9\":1,\"14\":1}}],[\"这是第si篇文章\",{\"1\":{\"6\":1}}],[\"这是第666666篇文章\",{\"1\":{\"3\":1}}],[\"这是项目主页的案例\",{\"1\":{\"2\":1}}],[\"这是一个档案主页的案例\",{\"1\":{\"1\":1}}],[\"vue\",{\"1\":{\"43\":2}}],[\"vuepress\",{\"0\":{\"27\":1},\"1\":{\"23\":2,\"25\":2,\"26\":1,\"27\":2,\"28\":1,\"42\":1,\"64\":2}}],[\"每个\",{\"1\":{\"43\":1}}],[\"进行引用\",{\"1\":{\"42\":1}}],[\"图片引入\",{\"1\":{\"42\":1}}],[\"图片增强\",{\"0\":{\"34\":1}}],[\"标签为\",{\"1\":{\"41\":1}}],[\"标题会被视为页面标题\",{\"1\":{\"40\":1}}],[\"标题和页面信息\",{\"1\":{\"20\":1}}],[\"分类为\",{\"1\":{\"41\":1}}],[\"日\",{\"1\":{\"41\":1}}],[\"月\",{\"1\":{\"41\":1}}],[\"年\",{\"1\":{\"41\":1}}],[\"写作日期为\",{\"1\":{\"41\":1}}],[\"作者设置为\",{\"1\":{\"41\":1}}],[\"的效果\",{\"1\":{\"67\":1}}],[\"的\",{\"1\":{\"40\":1,\"41\":1}}],[\"bushu\",{\"0\":{\"86\":1}}],[\"buju\",{\"2\":{\"5\":1,\"8\":1}}],[\"baz\",{\"1\":{\"50\":1,\"59\":1,\"71\":1}}],[\"bar\",{\"0\":{\"50\":1,\"71\":1},\"1\":{\"58\":1}}],[\"be\",{\"1\":{\"40\":1}}],[\"found\",{\"1\":{\"84\":1}}],[\"foo\",{\"0\":{\"51\":1,\"72\":1},\"1\":{\"62\":1}}],[\"first\",{\"1\":{\"40\":1}}],[\"frac\",{\"1\":{\"32\":4}}],[\"front\",{\"1\":{\"2\":1}}],[\"frontmatter\",{\"1\":{\"1\":1,\"17\":1,\"20\":1,\"25\":4,\"40\":1,\"41\":1}}],[\"注释之前的内容被视为文章摘要\",{\"1\":{\"39\":1}}],[\"ms\",{\"1\":{\"41\":1}}],[\"more\",{\"1\":{\"39\":1}}],[\"markdown\",{\"0\":{\"23\":1,\"24\":1,\"25\":1,\"26\":1,\"64\":1},\"1\":{\"23\":2,\"24\":3,\"25\":1,\"26\":3,\"27\":2,\"28\":1,\"40\":3,\"41\":1,\"42\":2,\"43\":2,\"64\":2},\"2\":{\"38\":1,\"66\":1}}],[\"matter\",{\"1\":{\"2\":1}}],[\"组件\",{\"0\":{\"36\":1,\"43\":1},\"1\":{\"43\":1}}],[\"hope\",{\"1\":{\"41\":1}}],[\"home\",{\"1\":{\"1\":1,\"2\":1}}],[\"h1\",{\"1\":{\"40\":2}}],[\"h2o\",{\"1\":{\"35\":1}}],[\"上下角标\",{\"0\":{\"35\":1}}],[\"上一篇\",{\"1\":{\"17\":1}}],[\"支持为图片设置颜色模式和大小\",{\"1\":{\"34\":1}}],[\"2020\",{\"1\":{\"41\":1}}],[\"2\",{\"1\":{\"33\":1}}],[\"计划\",{\"1\":{\"33\":2}}],[\"任务列表\",{\"0\":{\"33\":1}}],[\"cdots\",{\"1\":{\"32\":1}}],[\"ray\",{\"1\":{\"51\":1,\"63\":1,\"72\":1}}],[\"regarded\",{\"1\":{\"40\":1}}],[\"r\",{\"1\":{\"32\":3}}],[\"right\",{\"1\":{\"32\":3}}],[\"^\",{\"1\":{\"32\":1}}],[\"^i\",{\"1\":{\"32\":1}}],[\"^r\",{\"1\":{\"32\":2}}],[\"19th\",{\"1\":{\"35\":1}}],[\"1\",{\"1\":{\"32\":1,\"33\":1,\"41\":2,\"43\":2}}],[\"in\",{\"1\":{\"40\":1}}],[\"i\",{\"1\":{\"32\":1,\"43\":1}}],[\"i+1\",{\"1\":{\"32\":1}}],[\"i=1\",{\"1\":{\"32\":1}}],[\"it\",{\"1\":{\"26\":2}}],[\"sum\",{\"1\":{\"32\":1}}],[\"+\",{\"1\":{\"32\":1,\"43\":1}}],[\"y\",{\"1\":{\"32\":2}}],[\"y^\",{\"1\":{\"32\":2}}],[\"log\",{\"1\":{\"32\":2}}],[\"left\",{\"1\":{\"32\":3}}],[\"=\",{\"1\":{\"32\":1}}],[\"omega^i\",{\"1\":{\"32\":1}}],[\"omega^r\",{\"1\":{\"32\":1}}],[\"omega\",{\"1\":{\"32\":4}}],[\"public\",{\"1\":{\"42\":1}}],[\"page\",{\"1\":{\"40\":1}}],[\"partial\",{\"1\":{\"32\":1}}],[\"partial^r\",{\"1\":{\"32\":1}}],[\"portfolio\",{\"1\":{\"1\":1}}],[\"$$\",{\"1\":{\"32\":2}}],[\"导入文件\",{\"0\":{\"31\":1}}],[\"导航栏\",{\"1\":{\"17\":1,\"20\":1}}],[\"此文字有脚注^first\",{\"1\":{\"30\":1}}],[\"脚注\",{\"0\":{\"30\":1}}],[\"查看详情\",{\"1\":{\"29\":1,\"30\":1,\"31\":1,\"32\":1,\"33\":1,\"34\":1,\"35\":1}}],[\"选项卡\",{\"0\":{\"29\":1}}],[\"提供更加丰富的写作功能\",{\"1\":{\"28\":1}}],[\"插件\",{\"1\":{\"28\":1}}],[\"插件来实现\",{\"1\":{\"26\":1}}],[\"关于这些扩展\",{\"1\":{\"27\":1}}],[\"语法\",{\"0\":{\"32\":1},\"1\":{\"28\":1,\"43\":1}}],[\"语法进行了扩展\",{\"1\":{\"27\":1}}],[\"语法扩展\",{\"1\":{\"26\":1}}],[\"对于\",{\"1\":{\"42\":1}}],[\"对\",{\"1\":{\"27\":1}}],[\"为了丰富文档写作\",{\"1\":{\"27\":1}}],[\"为每个\",{\"1\":{\"25\":1}}],[\"内容\",{\"1\":{\"26\":1}}],[\"来解析\",{\"1\":{\"26\":1}}],[\"会使用\",{\"1\":{\"26\":1}}],[\"扩展\",{\"0\":{\"26\":1,\"27\":1},\"1\":{\"27\":1}}],[\"了解详情\",{\"1\":{\"25\":1}}],[\"请使用绝对链接\",{\"1\":{\"42\":1}}],[\"请阅读\",{\"1\":{\"25\":1,\"27\":1}}],[\"请先阅读\",{\"1\":{\"24\":1}}],[\"是\",{\"1\":{\"25\":1}}],[\"通过\",{\"1\":{\"25\":1,\"28\":1}}],[\"配置\",{\"0\":{\"25\":1}}],[\"配置项的相关说明详见\",{\"1\":{\"2\":1}}],[\"演示\",{\"1\":{\"24\":1}}],[\"还不会编写\",{\"1\":{\"24\":1}}],[\"如果你是一个新手\",{\"1\":{\"24\":1}}],[\"可以根据文件结构将它们转换为不同的页面\",{\"1\":{\"23\":1,\"64\":1}}],[\"以便\",{\"1\":{\"23\":1,\"64\":1}}],[\"因此可以借助于\",{\"1\":{\"26\":1}}],[\"因此\",{\"1\":{\"23\":1,\"64\":1}}],[\"文件夹的图片\",{\"1\":{\"42\":1}}],[\"文件放置在一起使用相对路径进行引用\",{\"1\":{\"42\":1}}],[\"文件生成页面\",{\"1\":{\"23\":1,\"64\":1}}],[\"文章标题列表\",{\"1\":{\"20\":1}}],[\"主要功能与配置演示\",{\"0\":{\"46\":1}}],[\"主要从\",{\"1\":{\"23\":1,\"64\":1}}],[\"主题扩展了更多\",{\"1\":{\"28\":1}}],[\"主题扩展\",{\"0\":{\"28\":1}}],[\"主题也带有以下元素\",{\"1\":{\"20\":1}}],[\"展示\",{\"0\":{\"23\":1,\"64\":1}}],[\"中使用\",{\"1\":{\"43\":1}}],[\"中的第一个\",{\"1\":{\"40\":1}}],[\"中的\",{\"1\":{\"27\":1}}],[\"中很重要的一个概念\",{\"1\":{\"25\":1}}],[\"中自定义它们\",{\"1\":{\"20\":1}}],[\"中设置页面信息\",{\"1\":{\"41\":1}}],[\"中设置页面标题\",{\"1\":{\"40\":1}}],[\"中设置\",{\"1\":{\"1\":1,\"2\":1}}],[\"打印按钮\",{\"1\":{\"20\":1}}],[\"夜间模式按钮\",{\"1\":{\"20\":1}}],[\"title\",{\"1\":{\"40\":3}}],[\"the\",{\"1\":{\"40\":1}}],[\"text\",{\"1\":{\"67\":1}}],[\"tex\",{\"0\":{\"32\":1}}],[\"toc\",{\"1\":{\"20\":1}}],[\"true\",{\"1\":{\"1\":2,\"2\":1}}],[\"同时每个页面包含\",{\"1\":{\"20\":1}}],[\"禁用\",{\"2\":{\"19\":1}}],[\"禁用了如下功能\",{\"1\":{\"17\":1}}],[\"使用指南\",{\"1\":{\"41\":2},\"2\":{\"18\":1,\"37\":1,\"44\":1,\"45\":1,\"47\":1,\"65\":1}}],[\"返回顶部按钮\",{\"1\":{\"17\":1,\"20\":1}}],[\"页面都会被转换为一个\",{\"1\":{\"43\":1}}],[\"页面内容\",{\"0\":{\"42\":1}}],[\"页面标题\",{\"0\":{\"40\":1},\"1\":{\"40\":1}}],[\"页面配置\",{\"0\":{\"39\":1},\"1\":{\"41\":1},\"2\":{\"45\":1}}],[\"页面引入配置\",{\"1\":{\"25\":1}}],[\"页面信息\",{\"0\":{\"41\":1},\"1\":{\"17\":1}}],[\"页脚\",{\"1\":{\"17\":1,\"20\":1}}],[\"评论\",{\"1\":{\"17\":1,\"20\":1}}],[\"链接\",{\"1\":{\"17\":1}}],[\"下一篇\",{\"1\":{\"17\":1}}],[\"更新时间等页面元信息\",{\"1\":{\"20\":1}}],[\"更新时间\",{\"1\":{\"17\":1}}],[\"编辑此页链接\",{\"1\":{\"17\":1}}],[\"贡献者\",{\"1\":{\"17\":1,\"20\":1}}],[\"路径导航\",{\"1\":{\"17\":1,\"20\":1}}],[\"侧边栏\",{\"1\":{\"17\":1,\"20\":1}}],[\"本页面就是一个示例\",{\"1\":{\"17\":1}}],[\"在页面禁用功能与布局\",{\"1\":{\"17\":1}}],[\"测试思路\",{\"2\":{\"53\":1,\"55\":1,\"74\":1}}],[\"测试标签\",{\"2\":{\"16\":1}}],[\"测试类别\",{\"2\":{\"15\":1}}],[\"测试指南\",{\"2\":{\"13\":1,\"77\":1,\"79\":1,\"81\":1,\"83\":1}}],[\"马丁\",{\"2\":{\"13\":1,\"53\":1,\"55\":1,\"74\":1,\"77\":1,\"79\":1,\"81\":1,\"83\":1}}],[\"后台功能与演示\",{\"0\":{\"12\":1}}],[\"布局与功能禁用\",{\"0\":{\"17\":1}}],[\"布局\",{\"0\":{\"20\":1},\"2\":{\"11\":1,\"22\":1}}],[\"布局包括\",{\"1\":{\"3\":1,\"6\":1,\"9\":1,\"14\":1,\"20\":1}}],[\"指南\",{\"2\":{\"10\":1,\"21\":1}}],[\"第三篇文章\",{\"0\":{\"14\":1}}],[\"第二篇文章\",{\"0\":{\"9\":1}}],[\"第si篇文章\",{\"0\":{\"6\":1}}],[\"第666篇文章\",{\"0\":{\"3\":1}}],[\"想要使用此布局\",{\"1\":{\"2\":1}}],[\"你也可以创建并引入你自己的组件\",{\"1\":{\"43\":1}}],[\"你需要创建并编写\",{\"1\":{\"23\":1,\"64\":1}}],[\"你需要在页面\",{\"1\":{\"2\":1}}],[\"你可以将图片和\",{\"1\":{\"42\":1}}],[\"你可以自由在这里书写你的\",{\"1\":{\"42\":1}}],[\"你可以使用它轻松生成文档或博客站点\",{\"1\":{\"23\":1,\"64\":1}}],[\"你可以在\",{\"1\":{\"40\":1,\"41\":1}}],[\"你可以在主题选项和页面的\",{\"1\":{\"20\":1}}],[\"你可以在这里放置你的主体内容\",{\"1\":{\"2\":1}}],[\"你可以通过设置页面的\",{\"1\":{\"17\":1}}],[\"你应该在页面\",{\"1\":{\"1\":1}}],[\"项目主页配置\",{\"1\":{\"2\":1}}],[\"项目主页\",{\"0\":{\"2\":1}}],[\"相关配置文档请见\",{\"1\":{\"1\":1}}],[\"和\",{\"1\":{\"1\":1,\"24\":1,\"41\":1}}],[\"要使用此布局\",{\"1\":{\"1\":1}}],[\"介绍\",{\"0\":{\"1\":1,\"24\":1,\"58\":1,\"62\":1},\"1\":{\"24\":1,\"25\":1}}],[\"档案主页\",{\"0\":{\"0\":1},\"1\":{\"1\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
