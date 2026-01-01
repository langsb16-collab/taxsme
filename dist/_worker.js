var ye=Object.defineProperty;var Dt=t=>{throw TypeError(t)};var ve=(t,e,s)=>e in t?ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>ve(t,typeof e!="symbol"?e+"":e,s),zt=(t,e,s)=>e.has(t)||Dt("Cannot "+s);var o=(t,e,s)=>(zt(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>e.has(t)?Dt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),u=(t,e,s,r)=>(zt(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),x=(t,e,s)=>(zt(t,e,"access private method"),s);var Lt=(t,e,s,r)=>({set _(n){u(t,e,n,s)},get _(){return o(t,e,r)}});var Mt=(t,e,s)=>(r,n)=>{let i=-1;return a(0);async function a(d){if(d<=i)throw new Error("next() called multiple times");i=d;let c,l=!1,h;if(t[d]?(h=t[d][0][0],r.req.routeIndex=d):h=d===t.length&&n||void 0,h)try{c=await h(r,()=>a(d+1))}catch(p){if(p instanceof Error&&e)r.error=p,c=await e(p,r),l=!0;else throw p}else r.finalized===!1&&s&&(c=await s(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},be=Symbol(),we=async(t,e=Object.create(null))=>{const{all:s=!1,dot:r=!1}=e,i=(t instanceof re?t.raw.headers:t.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Ee(t,{all:s,dot:r}):{}};async function Ee(t,e){const s=await t.formData();return s?je(s,e):{}}function je(t,e){const s=Object.create(null);return t.forEach((r,n)=>{e.all||n.endsWith("[]")?Re(s,n,r):s[n]=r}),e.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(ke(s,r,n),delete s[r])}),s}var Re=(t,e,s)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(s):t[e]=[t[e],s]:e.endsWith("[]")?t[e]=[s]:t[e]=s},ke=(t,e,s)=>{let r=t;const n=e.split(".");n.forEach((i,a)=>{a===n.length-1?r[i]=s:((!r[i]||typeof r[i]!="object"||Array.isArray(r[i])||r[i]instanceof File)&&(r[i]=Object.create(null)),r=r[i])})},Qt=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},Oe=t=>{const{groups:e,path:s}=Se(t),r=Qt(s);return Ae(r,e)},Se=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return e.push([n,s]),n}),{groups:e,path:t}},Ae=(t,e)=>{for(let s=e.length-1;s>=0;s--){const[r]=e[s];for(let n=t.length-1;n>=0;n--)if(t[n].includes(r)){t[n]=t[n].replace(r,e[s][1]);break}}return t},kt={},Ce=(t,e)=>{if(t==="*")return"*";const s=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${t}#${e}`;return kt[r]||(s[2]?kt[r]=e&&e[0]!==":"&&e[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${e})`)]:[t,s[1],new RegExp(`^${s[2]}$`)]:kt[r]=[t,s[1],!0]),kt[r]}return null},$t=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return e(s)}catch{return s}})}},Te=t=>$t(t,decodeURI),Zt=t=>{const e=t.url,s=e.indexOf("/",e.indexOf(":")+4);let r=s;for(;r<e.length;r++){const n=e.charCodeAt(r);if(n===37){const i=e.indexOf("?",r),a=e.slice(s,i===-1?void 0:i);return Te(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(n===63)break}return e.slice(s,r)},Pe=t=>{const e=Zt(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},rt=(t,e,...s)=>(s.length&&(e=rt(e,...s)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),te=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),s=[];let r="";return e.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const i=n.replace("?","");r+="/"+i,s.push(r)}else r+="/"+n}),s.filter((n,i,a)=>a.indexOf(n)===i)},Nt=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?$t(t,se):t):t,ee=(t,e,s)=>{let r;if(!s&&e&&!/[%+]/.test(e)){let a=t.indexOf("?",8);if(a===-1)return;for(t.startsWith(e,a+1)||(a=t.indexOf(`&${e}`,a+1));a!==-1;){const d=t.charCodeAt(a+e.length+1);if(d===61){const c=a+e.length+2,l=t.indexOf("&",c);return Nt(t.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";a=t.indexOf(`&${e}`,a+1)}if(r=/[%+]/.test(t),!r)return}const n={};r??(r=/[%+]/.test(t));let i=t.indexOf("?",8);for(;i!==-1;){const a=t.indexOf("&",i+1);let d=t.indexOf("=",i);d>a&&a!==-1&&(d=-1);let c=t.slice(i+1,d===-1?a===-1?void 0:a:d);if(r&&(c=Nt(c)),i=a,c==="")continue;let l;d===-1?l="":(l=t.slice(d+1,a===-1?void 0:a),r&&(l=Nt(l))),s?(n[c]&&Array.isArray(n[c])||(n[c]=[]),n[c].push(l)):n[c]??(n[c]=l)}return e?n[e]:n},_e=ee,ze=(t,e)=>ee(t,e,!0),se=decodeURIComponent,Ft=t=>$t(t,se),at,S,D,ne,ie,Ht,F,Gt,re=(Gt=class{constructor(t,e="/",s=[[]]){g(this,D);f(this,"raw");g(this,at);g(this,S);f(this,"routeIndex",0);f(this,"path");f(this,"bodyCache",{});g(this,F,t=>{const{bodyCache:e,raw:s}=this,r=e[t];if(r)return r;const n=Object.keys(e)[0];return n?e[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[t]())):e[t]=s[t]()});this.raw=t,this.path=e,u(this,S,s),u(this,at,{})}param(t){return t?x(this,D,ne).call(this,t):x(this,D,ie).call(this)}query(t){return _e(this.url,t)}queries(t){return ze(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((s,r)=>{e[r]=s}),e}async parseBody(t){var e;return(e=this.bodyCache).parsedBody??(e.parsedBody=await we(this,t))}json(){return o(this,F).call(this,"text").then(t=>JSON.parse(t))}text(){return o(this,F).call(this,"text")}arrayBuffer(){return o(this,F).call(this,"arrayBuffer")}blob(){return o(this,F).call(this,"blob")}formData(){return o(this,F).call(this,"formData")}addValidatedData(t,e){o(this,at)[t]=e}valid(t){return o(this,at)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[be](){return o(this,S)}get matchedRoutes(){return o(this,S)[0].map(([[,t]])=>t)}get routePath(){return o(this,S)[0].map(([[,t]])=>t)[this.routeIndex].path}},at=new WeakMap,S=new WeakMap,D=new WeakSet,ne=function(t){const e=o(this,S)[0][this.routeIndex][1][t],s=x(this,D,Ht).call(this,e);return s&&/\%/.test(s)?Ft(s):s},ie=function(){const t={},e=Object.keys(o(this,S)[0][this.routeIndex][1]);for(const s of e){const r=x(this,D,Ht).call(this,o(this,S)[0][this.routeIndex][1][s]);r!==void 0&&(t[s]=/\%/.test(r)?Ft(r):r)}return t},Ht=function(t){return o(this,S)[1]?o(this,S)[1][t]:t},F=new WeakMap,Gt),Ne={Stringify:1},ae=async(t,e,s,r,n)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const i=t.callbacks;return i!=null&&i.length?(n?n[0]+=t:n=[t],Promise.all(i.map(d=>d({phase:e,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(c=>ae(c,e,!1,r,n))).then(()=>n[0]))):Promise.resolve(t)},Ie="text/plain; charset=UTF-8",It=(t,e)=>({"Content-Type":t,...e}),xt,yt,I,ot,H,O,vt,lt,ct,X,bt,wt,B,nt,Vt,He=(Vt=class{constructor(t,e){g(this,B);g(this,xt);g(this,yt);f(this,"env",{});g(this,I);f(this,"finalized",!1);f(this,"error");g(this,ot);g(this,H);g(this,O);g(this,vt);g(this,lt);g(this,ct);g(this,X);g(this,bt);g(this,wt);f(this,"render",(...t)=>(o(this,lt)??u(this,lt,e=>this.html(e)),o(this,lt).call(this,...t)));f(this,"setLayout",t=>u(this,vt,t));f(this,"getLayout",()=>o(this,vt));f(this,"setRenderer",t=>{u(this,lt,t)});f(this,"header",(t,e,s)=>{this.finalized&&u(this,O,new Response(o(this,O).body,o(this,O)));const r=o(this,O)?o(this,O).headers:o(this,X)??u(this,X,new Headers);e===void 0?r.delete(t):s!=null&&s.append?r.append(t,e):r.set(t,e)});f(this,"status",t=>{u(this,ot,t)});f(this,"set",(t,e)=>{o(this,I)??u(this,I,new Map),o(this,I).set(t,e)});f(this,"get",t=>o(this,I)?o(this,I).get(t):void 0);f(this,"newResponse",(...t)=>x(this,B,nt).call(this,...t));f(this,"body",(t,e,s)=>x(this,B,nt).call(this,t,e,s));f(this,"text",(t,e,s)=>!o(this,X)&&!o(this,ot)&&!e&&!s&&!this.finalized?new Response(t):x(this,B,nt).call(this,t,e,It(Ie,s)));f(this,"json",(t,e,s)=>x(this,B,nt).call(this,JSON.stringify(t),e,It("application/json",s)));f(this,"html",(t,e,s)=>{const r=n=>x(this,B,nt).call(this,n,e,It("text/html; charset=UTF-8",s));return typeof t=="object"?ae(t,Ne.Stringify,!1,{}).then(r):r(t)});f(this,"redirect",(t,e)=>{const s=String(t);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,e??302)});f(this,"notFound",()=>(o(this,ct)??u(this,ct,()=>new Response),o(this,ct).call(this,this)));u(this,xt,t),e&&(u(this,H,e.executionCtx),this.env=e.env,u(this,ct,e.notFoundHandler),u(this,wt,e.path),u(this,bt,e.matchResult))}get req(){return o(this,yt)??u(this,yt,new re(o(this,xt),o(this,wt),o(this,bt))),o(this,yt)}get event(){if(o(this,H)&&"respondWith"in o(this,H))return o(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,H))return o(this,H);throw Error("This context has no ExecutionContext")}get res(){return o(this,O)||u(this,O,new Response(null,{headers:o(this,X)??u(this,X,new Headers)}))}set res(t){if(o(this,O)&&t){t=new Response(t.body,t);for(const[e,s]of o(this,O).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const r=o(this,O).headers.getSetCookie();t.headers.delete("set-cookie");for(const n of r)t.headers.append("set-cookie",n)}else t.headers.set(e,s)}u(this,O,t),this.finalized=!0}get var(){return o(this,I)?Object.fromEntries(o(this,I)):{}}},xt=new WeakMap,yt=new WeakMap,I=new WeakMap,ot=new WeakMap,H=new WeakMap,O=new WeakMap,vt=new WeakMap,lt=new WeakMap,ct=new WeakMap,X=new WeakMap,bt=new WeakMap,wt=new WeakMap,B=new WeakSet,nt=function(t,e,s){const r=o(this,O)?new Headers(o(this,O).headers):o(this,X)??new Headers;if(typeof e=="object"&&"headers"in e){const i=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(const[a,d]of i)a.toLowerCase()==="set-cookie"?r.append(a,d):r.set(a,d)}if(s)for(const[i,a]of Object.entries(s))if(typeof a=="string")r.set(i,a);else{r.delete(i);for(const d of a)r.append(i,d)}const n=typeof e=="number"?e:(e==null?void 0:e.status)??o(this,ot);return new Response(t,{status:n,headers:r})},Vt),b="ALL",$e="all",qe=["get","post","put","delete","options","patch"],oe="Can not add a route since the matcher is already built.",le=class extends Error{},De="__COMPOSED_HANDLER",Le=t=>t.text("404 Not Found",404),Bt=(t,e)=>{if("getResponse"in t){const s=t.getResponse();return e.newResponse(s.body,s)}return console.error(t),e.text("Internal Server Error",500)},A,w,ce,C,K,Ot,St,dt,Me=(dt=class{constructor(e={}){g(this,w);f(this,"get");f(this,"post");f(this,"put");f(this,"delete");f(this,"options");f(this,"patch");f(this,"all");f(this,"on");f(this,"use");f(this,"router");f(this,"getPath");f(this,"_basePath","/");g(this,A,"/");f(this,"routes",[]);g(this,C,Le);f(this,"errorHandler",Bt);f(this,"onError",e=>(this.errorHandler=e,this));f(this,"notFound",e=>(u(this,C,e),this));f(this,"fetch",(e,...s)=>x(this,w,St).call(this,e,s[1],s[0],e.method));f(this,"request",(e,s,r,n)=>e instanceof Request?this.fetch(s?new Request(e,s):e,r,n):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${rt("/",e)}`,s),r,n)));f(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(x(this,w,St).call(this,e.request,e,void 0,e.request.method))})});[...qe,$e].forEach(i=>{this[i]=(a,...d)=>(typeof a=="string"?u(this,A,a):x(this,w,K).call(this,i,o(this,A),a),d.forEach(c=>{x(this,w,K).call(this,i,o(this,A),c)}),this)}),this.on=(i,a,...d)=>{for(const c of[a].flat()){u(this,A,c);for(const l of[i].flat())d.map(h=>{x(this,w,K).call(this,l.toUpperCase(),o(this,A),h)})}return this},this.use=(i,...a)=>(typeof i=="string"?u(this,A,i):(u(this,A,"*"),a.unshift(i)),a.forEach(d=>{x(this,w,K).call(this,b,o(this,A),d)}),this);const{strict:r,...n}=e;Object.assign(this,n),this.getPath=r??!0?e.getPath??Zt:Pe}route(e,s){const r=this.basePath(e);return s.routes.map(n=>{var a;let i;s.errorHandler===Bt?i=n.handler:(i=async(d,c)=>(await Mt([],s.errorHandler)(d,()=>n.handler(d,c))).res,i[De]=n.handler),x(a=r,w,K).call(a,n.method,n.path,i)}),this}basePath(e){const s=x(this,w,ce).call(this);return s._basePath=rt(this._basePath,e),s}mount(e,s,r){let n,i;r&&(typeof r=="function"?i=r:(i=r.optionHandler,r.replaceRequest===!1?n=c=>c:n=r.replaceRequest));const a=i?c=>{const l=i(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};n||(n=(()=>{const c=rt(this._basePath,e),l=c==="/"?0:c.length;return h=>{const p=new URL(h.url);return p.pathname=p.pathname.slice(l)||"/",new Request(p,h)}})());const d=async(c,l)=>{const h=await s(n(c.req.raw),...a(c));if(h)return h;await l()};return x(this,w,K).call(this,b,rt(e,"*"),d),this}},A=new WeakMap,w=new WeakSet,ce=function(){const e=new dt({router:this.router,getPath:this.getPath});return e.errorHandler=this.errorHandler,u(e,C,o(this,C)),e.routes=this.routes,e},C=new WeakMap,K=function(e,s,r){e=e.toUpperCase(),s=rt(this._basePath,s);const n={basePath:this._basePath,path:s,method:e,handler:r};this.router.add(e,s,[r,n]),this.routes.push(n)},Ot=function(e,s){if(e instanceof Error)return this.errorHandler(e,s);throw e},St=function(e,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await x(this,w,St).call(this,e,s,r,"GET")))();const i=this.getPath(e,{env:r}),a=this.router.match(n,i),d=new He(e,{path:i,matchResult:a,env:r,executionCtx:s,notFoundHandler:o(this,C)});if(a[0].length===1){let l;try{l=a[0][0][0][0](d,async()=>{d.res=await o(this,C).call(this,d)})}catch(h){return x(this,w,Ot).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:o(this,C).call(this,d))).catch(h=>x(this,w,Ot).call(this,h,d)):l??o(this,C).call(this,d)}const c=Mt(a[0],this.errorHandler,o(this,C));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,w,Ot).call(this,l,d)}})()},dt),de=[];function Fe(t,e){const s=this.buildAllMatchers(),r=((n,i)=>{const a=s[n]||s[b],d=a[2][i];if(d)return d;const c=i.match(a[0]);if(!c)return[[],de];const l=c.indexOf("",1);return[a[1][l],c]});return this.match=r,r(t,e)}var Ct="[^/]+",gt=".*",mt="(?:|/.*)",it=Symbol(),Be=new Set(".\\+*[^]$()");function Ue(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===gt||t===mt?1:e===gt||e===mt?-1:t===Ct?1:e===Ct?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var Y,Q,T,et,We=(et=class{constructor(){g(this,Y);g(this,Q);g(this,T,Object.create(null))}insert(e,s,r,n,i){if(e.length===0){if(o(this,Y)!==void 0)throw it;if(i)return;u(this,Y,s);return}const[a,...d]=e,c=a==="*"?d.length===0?["","",gt]:["","",Ct]:a==="/*"?["","",mt]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let p=c[2]||Ct;if(h&&c[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw it;if(l=o(this,T)[p],!l){if(Object.keys(o(this,T)).some(m=>m!==gt&&m!==mt))throw it;if(i)return;l=o(this,T)[p]=new et,h!==""&&u(l,Q,n.varIndex++)}!i&&h!==""&&r.push([h,o(l,Q)])}else if(l=o(this,T)[a],!l){if(Object.keys(o(this,T)).some(h=>h.length>1&&h!==gt&&h!==mt))throw it;if(i)return;l=o(this,T)[a]=new et}l.insert(d,s,r,n,i)}buildRegExpStr(){const s=Object.keys(o(this,T)).sort(Ue).map(r=>{const n=o(this,T)[r];return(typeof o(n,Q)=="number"?`(${r})@${o(n,Q)}`:Be.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof o(this,Y)=="number"&&s.unshift(`#${o(this,Y)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Y=new WeakMap,Q=new WeakMap,T=new WeakMap,et),Tt,Et,Kt,Ge=(Kt=class{constructor(){g(this,Tt,{varIndex:0});g(this,Et,new We)}insert(t,e,s){const r=[],n=[];for(let a=0;;){let d=!1;if(t=t.replace(/\{[^}]+\}/g,c=>{const l=`@\\${a}`;return n[a]=[l,c],a++,d=!0,l}),!d)break}const i=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=n.length-1;a>=0;a--){const[d]=n[a];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(d)!==-1){i[c]=i[c].replace(d,n[a][1]);break}}return o(this,Et).insert(i,e,r,o(this,Tt),s),r}buildRegExp(){let t=o(this,Et).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const s=[],r=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,a)=>i!==void 0?(s[++e]=Number(i),"$()"):(a!==void 0&&(r[Number(a)]=++e),"")),[new RegExp(`^${t}`),s,r]}},Tt=new WeakMap,Et=new WeakMap,Kt),Ve=[/^$/,[],Object.create(null)],At=Object.create(null);function he(t){return At[t]??(At[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Ke(){At=Object.create(null)}function Je(t){var l;const e=new Ge,s=[];if(t.length===0)return Ve;const r=t.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,p],[m,v])=>h?1:m?-1:p.length-v.length),n=Object.create(null);for(let h=0,p=-1,m=r.length;h<m;h++){const[v,E,_]=r[h];v?n[E]=[_.map(([j])=>[j,Object.create(null)]),de]:p++;let y;try{y=e.insert(E,p,v)}catch(j){throw j===it?new le(E):j}v||(s[p]=_.map(([j,L])=>{const jt=Object.create(null);for(L-=1;L>=0;L--){const[Rt,z]=y[L];jt[Rt]=z}return[j,jt]}))}const[i,a,d]=e.buildRegExp();for(let h=0,p=s.length;h<p;h++)for(let m=0,v=s[h].length;m<v;m++){const E=(l=s[h][m])==null?void 0:l[1];if(!E)continue;const _=Object.keys(E);for(let y=0,j=_.length;y<j;y++)E[_[y]]=d[E[_[y]]]}const c=[];for(const h in a)c[h]=s[a[h]];return[i,c,n]}function st(t,e){if(t){for(const s of Object.keys(t).sort((r,n)=>n.length-r.length))if(he(s).test(e))return[...t[s]]}}var U,W,Pt,pe,Jt,Xe=(Jt=class{constructor(){g(this,Pt);f(this,"name","RegExpRouter");g(this,U);g(this,W);f(this,"match",Fe);u(this,U,{[b]:Object.create(null)}),u(this,W,{[b]:Object.create(null)})}add(t,e,s){var d;const r=o(this,U),n=o(this,W);if(!r||!n)throw new Error(oe);r[t]||[r,n].forEach(c=>{c[t]=Object.create(null),Object.keys(c[b]).forEach(l=>{c[t][l]=[...c[b][l]]})}),e==="/*"&&(e="*");const i=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const c=he(e);t===b?Object.keys(r).forEach(l=>{var h;(h=r[l])[e]||(h[e]=st(r[l],e)||st(r[b],e)||[])}):(d=r[t])[e]||(d[e]=st(r[t],e)||st(r[b],e)||[]),Object.keys(r).forEach(l=>{(t===b||t===l)&&Object.keys(r[l]).forEach(h=>{c.test(h)&&r[l][h].push([s,i])})}),Object.keys(n).forEach(l=>{(t===b||t===l)&&Object.keys(n[l]).forEach(h=>c.test(h)&&n[l][h].push([s,i]))});return}const a=te(e)||[e];for(let c=0,l=a.length;c<l;c++){const h=a[c];Object.keys(n).forEach(p=>{var m;(t===b||t===p)&&((m=n[p])[h]||(m[h]=[...st(r[p],h)||st(r[b],h)||[]]),n[p][h].push([s,i-l+c+1]))})}}buildAllMatchers(){const t=Object.create(null);return Object.keys(o(this,W)).concat(Object.keys(o(this,U))).forEach(e=>{t[e]||(t[e]=x(this,Pt,pe).call(this,e))}),u(this,U,u(this,W,void 0)),Ke(),t}},U=new WeakMap,W=new WeakMap,Pt=new WeakSet,pe=function(t){const e=[];let s=t===b;return[o(this,U),o(this,W)].forEach(r=>{const n=r[t]?Object.keys(r[t]).map(i=>[i,r[t][i]]):[];n.length!==0?(s||(s=!0),e.push(...n)):t!==b&&e.push(...Object.keys(r[b]).map(i=>[i,r[b][i]]))}),s?Je(e):null},Jt),G,$,Xt,Ye=(Xt=class{constructor(t){f(this,"name","SmartRouter");g(this,G,[]);g(this,$,[]);u(this,G,t.routers)}add(t,e,s){if(!o(this,$))throw new Error(oe);o(this,$).push([t,e,s])}match(t,e){if(!o(this,$))throw new Error("Fatal error");const s=o(this,G),r=o(this,$),n=s.length;let i=0,a;for(;i<n;i++){const d=s[i];try{for(let c=0,l=r.length;c<l;c++)d.add(...r[c]);a=d.match(t,e)}catch(c){if(c instanceof le)continue;throw c}this.match=d.match.bind(d),u(this,G,[d]),u(this,$,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,$)||o(this,G).length!==1)throw new Error("No active router has been determined yet.");return o(this,G)[0]}},G=new WeakMap,$=new WeakMap,Xt),ft=Object.create(null),V,k,Z,ht,R,q,J,pt,Qe=(pt=class{constructor(e,s,r){g(this,q);g(this,V);g(this,k);g(this,Z);g(this,ht,0);g(this,R,ft);if(u(this,k,r||Object.create(null)),u(this,V,[]),e&&s){const n=Object.create(null);n[e]={handler:s,possibleKeys:[],score:0},u(this,V,[n])}u(this,Z,[])}insert(e,s,r){u(this,ht,++Lt(this,ht)._);let n=this;const i=Oe(s),a=[];for(let d=0,c=i.length;d<c;d++){const l=i[d],h=i[d+1],p=Ce(l,h),m=Array.isArray(p)?p[0]:l;if(m in o(n,k)){n=o(n,k)[m],p&&a.push(p[1]);continue}o(n,k)[m]=new pt,p&&(o(n,Z).push(p),a.push(p[1])),n=o(n,k)[m]}return o(n,V).push({[e]:{handler:r,possibleKeys:a.filter((d,c,l)=>l.indexOf(d)===c),score:o(this,ht)}}),n}search(e,s){var c;const r=[];u(this,R,ft);let i=[this];const a=Qt(s),d=[];for(let l=0,h=a.length;l<h;l++){const p=a[l],m=l===h-1,v=[];for(let E=0,_=i.length;E<_;E++){const y=i[E],j=o(y,k)[p];j&&(u(j,R,o(y,R)),m?(o(j,k)["*"]&&r.push(...x(this,q,J).call(this,o(j,k)["*"],e,o(y,R))),r.push(...x(this,q,J).call(this,j,e,o(y,R)))):v.push(j));for(let L=0,jt=o(y,Z).length;L<jt;L++){const Rt=o(y,Z)[L],z=o(y,R)===ft?{}:{...o(y,R)};if(Rt==="*"){const M=o(y,k)["*"];M&&(r.push(...x(this,q,J).call(this,M,e,o(y,R))),u(M,R,z),v.push(M));continue}const[me,qt,ut]=Rt;if(!p&&!(ut instanceof RegExp))continue;const N=o(y,k)[me],xe=a.slice(l).join("/");if(ut instanceof RegExp){const M=ut.exec(xe);if(M){if(z[qt]=M[0],r.push(...x(this,q,J).call(this,N,e,o(y,R),z)),Object.keys(o(N,k)).length){u(N,R,z);const _t=((c=M[0].match(/\//))==null?void 0:c.length)??0;(d[_t]||(d[_t]=[])).push(N)}continue}}(ut===!0||ut.test(p))&&(z[qt]=p,m?(r.push(...x(this,q,J).call(this,N,e,z,o(y,R))),o(N,k)["*"]&&r.push(...x(this,q,J).call(this,o(N,k)["*"],e,z,o(y,R)))):(u(N,R,z),v.push(N)))}}i=v.concat(d.shift()??[])}return r.length>1&&r.sort((l,h)=>l.score-h.score),[r.map(({handler:l,params:h})=>[l,h])]}},V=new WeakMap,k=new WeakMap,Z=new WeakMap,ht=new WeakMap,R=new WeakMap,q=new WeakSet,J=function(e,s,r,n){const i=[];for(let a=0,d=o(e,V).length;a<d;a++){const c=o(e,V)[a],l=c[s]||c[b],h={};if(l!==void 0&&(l.params=Object.create(null),i.push(l),r!==ft||n&&n!==ft))for(let p=0,m=l.possibleKeys.length;p<m;p++){const v=l.possibleKeys[p],E=h[l.score];l.params[v]=n!=null&&n[v]&&!E?n[v]:r[v]??(n==null?void 0:n[v]),h[l.score]=!0}}return i},pt),tt,Yt,Ze=(Yt=class{constructor(){f(this,"name","TrieRouter");g(this,tt);u(this,tt,new Qe)}add(t,e,s){const r=te(e);if(r){for(let n=0,i=r.length;n<i;n++)o(this,tt).insert(t,r[n],s);return}o(this,tt).insert(t,e,s)}match(t,e){return o(this,tt).search(t,e)}},tt=new WeakMap,Yt),ue=class extends Me{constructor(t={}){super(t),this.router=t.router??new Ye({routers:[new Xe,new Ze]})}},ts=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Ut=(t,e=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,r=t.match(s);if(!r)return;let n=e[r[1]];return n&&n.startsWith("text")&&(n+="; charset=utf-8"),n},es={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=es,rs=(...t)=>{let e=t.filter(n=>n!=="").join("/");e=e.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=e.split("/"),r=[];for(const n of s)n===".."&&r.length>0&&r.at(-1)!==".."?r.pop():n!=="."&&r.push(n);return r.join("/")||"."},fe={br:".br",zstd:".zst",gzip:".gz"},ns=Object.keys(fe),is="index.html",as=t=>{const e=t.root??"./",s=t.path,r=t.join??rs;return async(n,i)=>{var h,p,m,v;if(n.finalized)return i();let a;if(t.path)a=t.path;else try{if(a=decodeURIComponent(n.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(a))throw new Error}catch{return await((h=t.onNotFound)==null?void 0:h.call(t,n.req.path,n)),i()}let d=r(e,!s&&t.rewriteRequestPath?t.rewriteRequestPath(a):a);t.isDir&&await t.isDir(d)&&(d=r(d,is));const c=t.getContent;let l=await c(d,n);if(l instanceof Response)return n.newResponse(l.body,l);if(l){const E=t.mimes&&Ut(d,t.mimes)||Ut(d);if(n.header("Content-Type",E||"application/octet-stream"),t.precompressed&&(!E||ts.test(E))){const _=new Set((p=n.req.header("Accept-Encoding"))==null?void 0:p.split(",").map(y=>y.trim()));for(const y of ns){if(!_.has(y))continue;const j=await c(d+fe[y],n);if(j){l=j,n.header("Content-Encoding",y),n.header("Vary","Accept-Encoding",{append:!0});break}}}return await((m=t.onFound)==null?void 0:m.call(t,d,n)),n.body(l)}await((v=t.onNotFound)==null?void 0:v.call(t,d,n)),await i()}},os=async(t,e)=>{let s;e&&e.manifest?typeof e.manifest=="string"?s=JSON.parse(e.manifest):s=e.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let r;e&&e.namespace?r=e.namespace:r=__STATIC_CONTENT;const n=s[t]||t;if(!n)return null;const i=await r.get(n,{type:"stream"});return i||null},ls=t=>async function(s,r){return as({...t,getContent:async i=>os(i,{manifest:t.manifest,namespace:t.namespace?t.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,r)},cs=t=>ls(t),ds=t=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},r=(i=>typeof i=="string"?i==="*"?()=>i:a=>i===a?a:null:typeof i=="function"?i:a=>i.includes(a)?a:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(a,d){var h;function c(p,m){a.res.headers.set(p,m)}const l=await r(a.req.header("origin")||"",a);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const p=await n(a.req.header("origin")||"",a);p.length&&c("Access-Control-Allow-Methods",p.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const v=a.req.header("Access-Control-Request-Headers");v&&(m=v.split(/\s*,\s*/))}return m!=null&&m.length&&(c("Access-Control-Allow-Headers",m.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const P=new ue;P.use("/api/*",ds());P.use("/static/*",cs({root:"./public"}));P.post("/api/ocr",async t=>{try{return await new Promise(e=>setTimeout(e,800)),t.json({success:!0,data:{date:"2026-01-01",amount:45e3,vendor:"스타벅스 코리아",vat:4500,category:"식비",confidence:.95,risk_level:"low",source_type:"receipt"},message:"OCR 인식 완료"})}catch{return t.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/bank-capture",async t=>{try{await new Promise(s=>setTimeout(s,1200));const e=[{id:"tx_1",date:"2026-01-01",merchant:"카페베네 강남점",amount:15e3,type:"withdraw",category:"식비",label:"사업추정",confidence:.88,risk_level:"low",selected:!0},{id:"tx_2",date:"2026-01-02",merchant:"쿠팡 온라인결제",amount:32e3,type:"withdraw",category:"사무용품",label:"사업추정",confidence:.75,risk_level:"mid",selected:!0},{id:"tx_3",date:"2026-01-03",merchant:"택시 결제",amount:8500,type:"withdraw",category:"교통비",label:"검토필요",confidence:.65,risk_level:"mid",selected:!1}];return t.json({success:!0,data:{transactions:e,summary:{total:e.length,business:e.filter(s=>s.label==="사업추정").length,review_needed:e.filter(s=>s.label==="검토필요").length}},message:"통장 내역 인식 완료"})}catch{return t.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/gallery-upload",async t=>{try{const s=(await t.req.json()).count||5,r=Array.from({length:s},(n,i)=>({id:`img_${i+1}`,source:"gallery",type:i%3===0?"receipt":i%3===1?"statement":"screenshot",data:{date:`2026-01-0${i%9+1}`,amount:Math.floor(Math.random()*1e5)+5e3,vendor:["스타벅스","쿠팡","올리브영","이마트","GS25"][i%5],category:["식비","사무용품","통신비","교통비","소모품"][i%5],confidence:.7+Math.random()*.25,risk_level:i%4===0?"high":i%2===0?"mid":"low"}}));return await new Promise(n=>setTimeout(n,1500)),t.json({success:!0,data:{processed:r,summary:{total:r.length,receipts:r.filter(n=>n.type==="receipt").length,statements:r.filter(n=>n.type==="statement").length,screenshots:r.filter(n=>n.type==="screenshot").length}},message:`${r.length}개 이미지 처리 완료`})}catch{return t.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/risk-analysis",async t=>{try{const{expense:e}=await t.req.json();let s=0,r=[];e.amount>15e4&&(s+=30,r.push("고액 거래 (15만원 초과)")),e.confidence<.7&&(s+=25,r.push("낮은 인식 신뢰도")),["기타","미분류"].includes(e.category)&&(s+=20,r.push("불명확한 카테고리"));const n=s>=50?"high":s>=25?"mid":"low",i=s>=40;return t.json({success:!0,data:{riskScore:s,riskLevel:n,riskFactors:r,reviewRecommended:i,reviewCost:i?1900:0,message:i?"전문가 검토를 권장합니다 (1,900원)":"자동 처리 가능합니다"}})}catch{return t.json({success:!1,message:"분석 오류"},400)}});P.post("/api/spot-review",async t=>{try{const{expense_id:e,user_note:s}=await t.req.json();return await new Promise(r=>setTimeout(r,800)),t.json({success:!0,data:{review_id:`review_${Date.now()}`,status:"pending",estimated_time:"24시간 이내",cost:1900,expert_name:"김세무 세무사",message:"전문가 검토가 요청되었습니다. 24시간 이내 답변 예정입니다."}})}catch{return t.json({success:!1,message:"요청 오류"},400)}});P.post("/api/calculate-tax",async t=>{try{const{expenses:e}=await t.req.json(),s=e.reduce((l,h)=>l+h.amount,0),r=Math.floor(s*.8),n=Math.floor(s*.1),i=Math.floor(r*.15),a=Math.floor(n*.5),d=e.filter(l=>l.risk_level==="high").length,c=e.filter(l=>l.risk_level==="mid").length;return t.json({success:!0,data:{totalExpense:s,deductible:r,vat:n,estimatedTax:i,refundEstimate:a,riskStats:{high:d,mid:c,low:e.length-d-c},summary:`총 경비: ${s.toLocaleString()}원 | 공제 가능: ${r.toLocaleString()}원 | 환급 예상: ${a.toLocaleString()}원`}})}catch{return t.json({success:!1,message:"계산 오류"},400)}});P.get("/api/faq/:lang",t=>{const e=t.req.param("lang")||"ko",s={ko:[{id:1,question:"이 플랫폼은 어떤 서비스인가요?",answer:"사진만 있으면 시작할 수 있어요. 영수증, 통장 캡처, 갤러리 사진 모두 가능합니다. 세금은 우리가 계산하고, 결정은 당신이 합니다."},{id:2,question:"영수증이 없어도 되나요? 💡",answer:"네! 통장 캡처나 갤러리 사진만으로도 경비 처리가 가능합니다. 영수증 없이도 경비 후보로 쌓아둘 수 있습니다."},{id:3,question:"갤러리에 있는 사진도 사용할 수 있나요? 📸",answer:"가능합니다! 사진첩에 저장된 영수증, 스크린샷, 거래 내역 등을 한 번에 업로드하면 자동으로 분류합니다."},{id:4,question:"통장 캡처는 어떻게 하나요? 🏦",answer:"뱅킹앱 거래 내역 화면을 캡처하여 업로드하면 날짜, 거래처, 금액을 자동으로 추출하여 경비로 등록합니다."},{id:5,question:"업무용인지 개인용인지 헷갈려요",answer:"이 거래는 애매합니다. 확인만 받아보실래요? 업무/개인/검토필요 중 선택하시면 됩니다. 검토필요를 선택하면 전문가가 확인해드립니다."},{id:6,question:"위험도 게이지는 무엇인가요? ⚠️",answer:"각 경비 항목의 세무 리스크를 자동 분석합니다. 전문가의 검토가 필요해 보이는 항목은 표시됩니다."},{id:7,question:"건당 전문가 리뷰는 무엇인가요? 👨‍💼",answer:"여기만 좀 봐주세요. 세무 서비스에 처음 생긴 문장입니다. 애매한 항목만 1,900원에 세무사 확인을 받을 수 있습니다."},{id:8,question:"월 정액을 내야 하나요? 💸",answer:"아니요! 무료 자동신고(소규모), 건당 리뷰(1,900원), 전면 대행(월 정액) 중 선택 가능합니다. 필요한 만큼만 비용을 지불하세요."},{id:9,question:"프리랜서도 사용할 수 있나요? 💼",answer:"네! 오히려 프리랜서와 소규모 자영업자를 위해 설계되었습니다. 간편 모드로 3번의 클릭으로 신고 준비가 완료됩니다."},{id:10,question:"실수하면 어떡하죠?",answer:"제출 버튼을 누르기 전까지, 무조건 다시 되돌릴 수 있게 설계했습니다. 수정 기록은 로그로 남아 증빙에 포함됩니다."},{id:11,question:"세무 계산은 자동인가요?",answer:"네. AI 엔진이 과세/면세/경비 인정 비율·환급 예상액을 자동 산출합니다. 내가 몰라도 됩니다. 숫자는 자동으로 자리 찾아갑니다."},{id:12,question:"홈택스로 자동 제출되나요?",answer:"파일 업로드, 직접 제출, 대행 요청 — 상황에 맞는 문을 고르세요. 홈택스 XML·CSV 출력도 지원합니다."},{id:13,question:"어떤 세금이 지원되나요?",answer:"부가세, 종소세 단순 신고, 프리랜서·1인사업자 경비처리 중심입니다. 법인·무역은 전문가 옵션이 활성화됩니다."},{id:14,question:"예상 환급액도 보이나요?",answer:'영수증 누적 시 상단에 "예상 세금/환급 미터기"가 실시간으로 표시됩니다.'},{id:15,question:"자동 분류 정확도는 어느 정도인가요?",answer:"업종/금액/가맹점 패턴 기반 추천이며, 반복 사용 시 사용자/업종별로 정밀도가 개선됩니다."},{id:16,question:"중복되는 영수증은요?",answer:"중복 인식 방지 및 중복 경고가 자동 표시됩니다."},{id:17,question:"세무사 비용이 부담돼요",answer:"1,900원으로 불확실성을 지우는 경험. 예측 가능한 안심 비용입니다. 월 구독 없이 단건 검토로 해결 가능합니다."},{id:18,question:"간편 모드는 무엇인가요? ⚡",answer:'복잡한 메뉴 없이 "갤러리 선택 → 1클릭 분류 → 자동 계산 → 제출" 4단계로 끝나는 초간단 워크플로우입니다.'}]};return t.json({success:!0,data:s[e]||s.ko})});P.get("/",t=>t.html(`
<!DOCTYPE html>
<html lang="ko" id="htmlRoot">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="pageTitle">세무신고 플랫폼 - 영수증 없어도 신고는 됩니다</title>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/style.css" rel="stylesheet">
    <script src="/static/i18n.js"><\/script>
</head>
<body>
    <!-- 네비게이션 -->
    <nav style="background: white; box-shadow: 0 2px 8px rgba(13, 27, 42, 0.08); position: fixed; width: 100%; top: 0; z-index: 50;">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center; height: 72px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-receipt" style="font-size: 32px; color: var(--clear-mint);"></i>
                <span style="font-family: var(--font-headline); font-size: 24px; font-weight: 700; color: var(--midnight-navy);">세무신고 플랫폼</span>
            </div>
            <div style="display: flex; align-items: center; gap: 24px;">
                <!-- 언어 선택 드롭다운 -->
                <div style="position: relative;">
                    <button id="langDropdownBtn" onclick="toggleLangDropdown()" class="btn btn-ghost" style="display: flex; align-items: center; gap: 8px; padding: 8px 16px;">
                        <i class="fas fa-globe"></i>
                        <span id="currentLangText">한국어</span>
                        <i class="fas fa-chevron-down" style="font-size: 0.75rem;"></i>
                    </button>
                    <div id="langDropdown" class="hidden" style="position: absolute; top: 100%; right: 0; margin-top: 8px; background: white; border-radius: 12px; box-shadow: 0 8px 32px rgba(13, 27, 42, 0.16); min-width: 200px; z-index: 100;">
                        <div style="padding: 8px;">
                            <button onclick="changeLang('ko')" class="lang-option" data-lang="ko" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇰🇷</span>
                                <span style="font-weight: 500;">한국어</span>
                            </button>
                            <button onclick="changeLang('en')" class="lang-option" data-lang="en" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇺🇸</span>
                                <span style="font-weight: 500;">English</span>
                            </button>
                            <button onclick="changeLang('zh-CN')" class="lang-option" data-lang="zh-CN" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇨🇳</span>
                                <span style="font-weight: 500;">简体中文</span>
                            </button>
                            <button onclick="changeLang('zh-TW')" class="lang-option" data-lang="zh-TW" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇹🇼</span>
                                <span style="font-weight: 500;">繁體中文</span>
                            </button>
                            <button onclick="changeLang('ja')" class="lang-option" data-lang="ja" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇯🇵</span>
                                <span style="font-weight: 500;">日本語</span>
                            </button>
                            <button onclick="changeLang('vi')" class="lang-option" data-lang="vi" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇻🇳</span>
                                <span style="font-weight: 500;">Tiếng Việt</span>
                            </button>
                            <button onclick="changeLang('es')" class="lang-option" data-lang="es" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇪🇸</span>
                                <span style="font-weight: 500;">Español</span>
                            </button>
                            <button onclick="changeLang('de')" class="lang-option" data-lang="de" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇩🇪</span>
                                <span style="font-weight: 500;">Deutsch</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <a href="#" id="navNotice" style="color: var(--text-secondary); text-decoration: none; font-weight: 500;">공지</a>
                <a href="#" id="navLogin" style="color: var(--text-secondary); text-decoration: none; font-weight: 500;">로그인</a>
                <button class="btn btn-primary" id="navSignup">회원가입</button>
            </div>
        </div>
    </nav>

    <!-- 메인 컨텐츠 -->
    <div style="padding-top: 100px; padding-bottom: 48px;">
        <div class="container">
            
            <!-- 히어로 섹션 -->
            <div class="text-center animate-fade-in" style="margin-bottom: 48px;">
                <h1 style="font-size: 3.5rem; font-weight: 700; line-height: 1.2; margin-bottom: 24px; color: var(--midnight-navy);">
                    세금 때문에 멈추지 마세요
                </h1>
                <p style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 16px;">
                    일하느라 바쁜 당신 대신, 신고는 우리가 합니다
                </p>
                <p style="font-size: 1.125rem; color: var(--text-tertiary); margin-bottom: 32px;">
                    영수증 없어도 괜찮습니다 • 통장 캡처로 경비 처리 • 건당 1,900원 전문가 검토
                </p>
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="scrollToSection('modes')" class="btn btn-primary" style="font-size: 1.125rem; padding: 16px 32px;">
                        <i class="fas fa-rocket"></i>
                        지금 시작하기
                    </button>
                    <button class="btn btn-outline" style="font-size: 1.125rem; padding: 16px 32px;">
                        <i class="fas fa-play-circle"></i>
                        어떻게 작동하나요?
                    </button>
                </div>
            </div>

            <!-- 안심 메시지 배너 -->
            <div class="message-box message-reassure animate-slide-up" style="font-size: 1.125rem; text-align: center;">
                <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                <strong>사진만 있으면 시작할 수 있어요.</strong> 정식 장부가 없어도 출발할 수 있어야 진짜 초보자를 위한 서비스죠.
            </div>

            <!-- 주요 기능 카드 -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 64px;">
                <div class="card" style="text-align: center;">
                    <i class="fas fa-images" style="font-size: 48px; color: var(--clear-mint); margin-bottom: 16px;"></i>
                    <h3 style="margin-bottom: 12px;">갤러리 속 사진</h3>
                    <p style="color: var(--text-secondary);">찍어둔 사진만 있어도 신고는 갑니다</p>
                </div>
                <div class="card" style="text-align: center;">
                    <i class="fas fa-university" style="font-size: 48px; color: var(--amber-audit); margin-bottom: 16px;"></i>
                    <h3 style="margin-bottom: 12px;">통장 캡처</h3>
                    <p style="color: var(--text-secondary);">영수증 없이도 경비 후보로 인정</p>
                </div>
                <div class="card" style="text-align: center;">
                    <i class="fas fa-user-tie" style="font-size: 48px; color: var(--coral-trust); margin-bottom: 16px;"></i>
                    <h3 style="margin-bottom: 12px;">건당 전문가 리뷰</h3>
                    <p style="color: var(--text-secondary);">애매한 항목만 1,900원에 확인</p>
                </div>
            </div>

            <!-- 모드 선택 섹션 -->
            <div id="modes" style="margin-bottom: 64px;">
                <h2 style="text-align: center; margin-bottom: 16px; color: var(--midnight-navy);">어떤 방식으로 시작하시겠어요?</h2>
                <p style="text-align: center; color: var(--text-secondary); margin-bottom: 32px;">상황에 맞는 방식을 선택하세요. 언제든 바꿀 수 있습니다.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                    <div class="card" onclick="switchMode('receipt')" style="cursor: pointer; text-align: center; border: 3px solid transparent; transition: all 0.3s;">
                        <i class="fas fa-camera" style="font-size: 64px; color: var(--clear-mint); margin-bottom: 16px;"></i>
                        <h3 style="margin-bottom: 12px;">영수증 촬영</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 16px;">정식 영수증이 있을 때</p>
                        <button class="btn btn-primary" style="width: 100%;">선택하기</button>
                    </div>
                    
                    <div class="card" onclick="switchMode('bank')" style="cursor: pointer; text-align: center; border: 3px solid transparent; transition: all 0.3s;">
                        <i class="fas fa-university" style="font-size: 64px; color: var(--amber-audit); margin-bottom: 16px;"></i>
                        <h3 style="margin-bottom: 12px;">통장 캡처 💡</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 16px;">영수증 없을 때 추천</p>
                        <button class="btn btn-secondary" style="width: 100%;">선택하기</button>
                    </div>
                    
                    <div class="card" onclick="switchMode('gallery')" style="cursor: pointer; text-align: center; border: 3px solid transparent; transition: all 0.3s;">
                        <i class="fas fa-images" style="font-size: 64px; color: #3B82F6; margin-bottom: 16px;"></i>
                        <h3 style="margin-bottom: 12px;">갤러리 업로드 📸</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 16px;">사진첩에 여러 장 있을 때</p>
                        <button class="btn btn-outline" style="width: 100%;">선택하기</button>
                    </div>
                </div>
            </div>

            <!-- 영수증 촬영 섹션 -->
            <div id="receiptSection" class="mode-section hidden" style="margin-bottom: 64px;">
                <div class="card">
                    <h2 style="text-align: center; margin-bottom: 32px;">
                        <i class="fas fa-camera" style="color: var(--clear-mint); margin-right: 12px;"></i>
                        영수증 촬영하기
                    </h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                        <div class="file-upload-area" onclick="document.getElementById('receiptInput').click()">
                            <i class="fas fa-camera" style="font-size: 64px; color: var(--clear-mint); margin-bottom: 16px;"></i>
                            <p style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">영수증을 촬영하세요</p>
                            <p style="color: var(--text-tertiary);">또는 파일을 업로드하세요</p>
                            <input type="file" id="receiptInput" accept="image/*" capture="environment">
                            <div id="receiptPreviewArea" class="hidden" style="margin-top: 16px;">
                                <img id="receiptPreviewImage" style="width: 100%; border-radius: 12px; margin-bottom: 16px;">
                                <button id="analyzeReceiptBtn" class="btn btn-primary" style="width: 100%;">
                                    <i class="fas fa-magic"></i>
                                    분석 시작
                                </button>
                            </div>
                        </div>
                        
                        <div id="receiptResults" class="hidden card-fog">
                            <h3 style="margin-bottom: 16px;">
                                <i class="fas fa-check-circle" style="color: var(--clear-mint);"></i>
                                인식 결과
                            </h3>
                            <div id="receiptData"></div>
                            <button id="addReceiptBtn" class="btn btn-primary" style="width: 100%; margin-top: 16px;">
                                <i class="fas fa-plus-circle"></i>
                                경비 목록에 추가
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 통장 캡처 섹션 -->
            <div id="bankSection" class="mode-section hidden" style="margin-bottom: 64px;">
                <div class="card">
                    <h2 style="text-align: center; margin-bottom: 16px;">
                        <i class="fas fa-university" style="color: var(--amber-audit); margin-right: 12px;"></i>
                        통장 거래내역 캡처하기
                    </h2>
                    <p style="text-align: center; color: var(--text-secondary); margin-bottom: 32px;">
                        뱅킹앱 거래내역 화면을 촬영하면 자동으로 경비로 분류합니다
                    </p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                        <div class="file-upload-area" onclick="document.getElementById('bankInput').click()">
                            <i class="fas fa-mobile-alt" style="font-size: 64px; color: var(--amber-audit); margin-bottom: 16px;"></i>
                            <p style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">통장 화면을 촬영하세요</p>
                            <p style="color: var(--text-tertiary);">거래내역이 보이는 화면 캡처</p>
                            <input type="file" id="bankInput" accept="image/*" capture="environment">
                            <div id="bankPreviewArea" class="hidden" style="margin-top: 16px;">
                                <img id="bankPreviewImage" style="width: 100%; border-radius: 12px; margin-bottom: 16px;">
                                <button id="analyzeBankBtn" class="btn btn-secondary" style="width: 100%;">
                                    <i class="fas fa-magic"></i>
                                    거래내역 분석 시작
                                </button>
                            </div>
                        </div>
                        
                        <div id="bankResults" class="hidden">
                            <h3 style="margin-bottom: 16px;">
                                <i class="fas fa-check-circle" style="color: var(--amber-audit);"></i>
                                거래내역 인식 결과
                            </h3>
                            <div id="bankTransactions" style="max-height: 400px; overflow-y: auto;"></div>
                            <button id="addBankBtn" class="btn btn-secondary" style="width: 100%; margin-top: 16px;">
                                <i class="fas fa-plus-circle"></i>
                                선택 항목 경비에 추가
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 갤러리 업로드 섹션 -->
            <div id="gallerySection" class="mode-section hidden" style="margin-bottom: 64px;">
                <div class="card">
                    <h2 style="text-align: center; margin-bottom: 16px;">
                        <i class="fas fa-images" style="color: #3B82F6; margin-right: 12px;"></i>
                        갤러리 사진 일괄 업로드
                    </h2>
                    <p style="text-align: center; color: var(--text-secondary); margin-bottom: 32px;">
                        사진첩에 저장된 영수증, 스크린샷 등을 한 번에 업로드하세요 (최대 20장)
                    </p>
                    
                    <div class="file-upload-area" onclick="document.getElementById('galleryInput').click()" style="margin-bottom: 32px;">
                        <i class="fas fa-cloud-upload-alt" style="font-size: 64px; color: #3B82F6; margin-bottom: 16px;"></i>
                        <p style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">여러 사진을 한 번에 선택하세요</p>
                        <p style="color: var(--text-tertiary);">최대 20장까지 동시 업로드 가능</p>
                        <input type="file" id="galleryInput" accept="image/*" multiple>
                        <div id="galleryFileCount" class="hidden" style="margin-top: 16px; font-weight: 600; color: #3B82F6;"></div>
                    </div>
                    
                    <div id="galleryResults" class="hidden">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                            <h3>
                                <i class="fas fa-check-circle" style="color: #3B82F6;"></i>
                                선택된 파일 (<span id="galleryCount">0</span>개)
                            </h3>
                            <button id="processGalleryBtn" class="btn btn-primary">
                                <i class="fas fa-magic"></i>
                                일괄 분석 시작
                            </button>
                        </div>
                        
                        <div id="galleryGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px; margin-bottom: 24px;"></div>
                        
                        <div id="galleryProcessedResults" class="hidden card-fog" style="padding: 24px;"></div>
                        
                        <button id="addGalleryBtn" class="hidden btn btn-primary" style="width: 100%; margin-top: 16px;">
                            <i class="fas fa-plus-circle"></i>
                            모두 경비에 추가
                        </button>
                    </div>
                </div>
            </div>

            <!-- 경비 목록 섹션 -->
            <div style="margin-bottom: 64px;">
                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2>
                            <i class="fas fa-list" style="color: var(--clear-mint); margin-right: 12px;"></i>
                            경비 목록
                        </h2>
                        <button id="calculateBtn" class="btn btn-primary">
                            <i class="fas fa-calculator"></i>
                            세금 계산하기
                        </button>
                    </div>
                    <div id="expenseList">
                        <div style="text-align: center; padding: 48px; color: var(--text-tertiary);">
                            <i class="fas fa-inbox" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                            <p>아직 추가된 경비가 없습니다</p>
                            <p style="font-size: 0.875rem; margin-top: 8px;">위에서 영수증, 통장 캡처, 또는 갤러리 사진을 업로드하세요</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 세금 계산 결과 -->
            <div id="taxResult" class="hidden" style="margin-bottom: 64px;">
                <div class="card" style="background: var(--midnight-navy); color: white;">
                    <h2 style="text-align: center; margin-bottom: 32px; color: white;">
                        <i class="fas fa-chart-line" style="margin-right: 12px;"></i>
                        세금 계산 결과
                    </h2>
                    <div id="taxSummary" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;"></div>
                    <div id="riskSummary" class="hidden" style="margin-top: 32px; padding: 24px; background: rgba(255,255,255,0.1); border-radius: 12px;"></div>
                </div>
            </div>

        </div>
    </div>

    <!-- 챗봇 아이콘 -->
    <div id="chatbotIcon">
        <i class="fas fa-comments"></i>
        <div style="position: absolute; top: -4px; right: -4px; width: 20px; height: 20px; background: var(--coral-trust); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700;">?</div>
    </div>

    <!-- 챗봇 윈도우 -->
    <div id="chatbotWindow" class="hidden">
        <div class="chatbot-header">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-robot" style="font-size: 24px;"></i>
                </div>
                <div>
                    <h3 style="margin-bottom: 4px;">FAQ 도우미</h3>
                    <p style="font-size: 0.875rem; opacity: 0.9;">25개 질문 답변</p>
                </div>
            </div>
            <button id="closeChatbot" style="background: rgba(255,255,255,0.1); border: none; color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: all 0.2s;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="chatbot-body">
            <div id="faqList">
                <!-- FAQ 그리드가 여기에 동적으로 로드됩니다 -->
            </div>
        </div>
    </div>

    <script src="/static/i18n.js"><\/script>
    <script src="/static/faq-data.js"><\/script>
    <script src="/static/app.js"><\/script>
</body>
</html>
  `));const Wt=new ue,hs=Object.assign({"/src/index.tsx":P});let ge=!1;for(const[,t]of Object.entries(hs))t&&(Wt.all("*",e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),Wt.notFound(e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),ge=!0);if(!ge)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Wt as default};
