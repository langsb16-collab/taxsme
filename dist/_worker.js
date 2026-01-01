var xt=Object.defineProperty;var qe=e=>{throw TypeError(e)};var vt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var f=(e,t,s)=>vt(e,typeof t!="symbol"?t+"":t,s),ze=(e,t,s)=>t.has(e)||qe("Cannot "+s);var o=(e,t,s)=>(ze(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?qe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u=(e,t,s,r)=>(ze(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),y=(e,t,s)=>(ze(e,t,"access private method"),s);var Le=(e,t,s,r)=>({set _(n){u(e,t,n,s)},get _(){return o(e,t,r)}});var Me=(e,t,s)=>(r,n)=>{let i=-1;return a(0);async function a(d){if(d<=i)throw new Error("next() called multiple times");i=d;let c,l=!1,h;if(e[d]?(h=e[d][0][0],r.req.routeIndex=d):h=d===e.length&&n||void 0,h)try{c=await h(r,()=>a(d+1))}catch(p){if(p instanceof Error&&t)r.error=p,c=await t(p,r),l=!0;else throw p}else r.finalized===!1&&s&&(c=await s(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},bt=Symbol(),wt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,i=(e instanceof rt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Et(e,{all:s,dot:r}):{}};async function Et(e,t){const s=await e.formData();return s?jt(s,t):{}}function jt(e,t){const s=Object.create(null);return e.forEach((r,n)=>{t.all||n.endsWith("[]")?Rt(s,n,r):s[n]=r}),t.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(kt(s,r,n),delete s[r])}),s}var Rt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},kt=(e,t,s)=>{let r=e;const n=t.split(".");n.forEach((i,a)=>{a===n.length-1?r[i]=s:((!r[i]||typeof r[i]!="object"||Array.isArray(r[i])||r[i]instanceof File)&&(r[i]=Object.create(null)),r=r[i])})},Qe=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},St=e=>{const{groups:t,path:s}=Ot(e),r=Qe(s);return Ct(r,t)},Ot=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return t.push([n,s]),n}),{groups:t,path:e}},Ct=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(r)){e[n]=e[n].replace(r,t[s][1]);break}}return e},ke={},At=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return ke[r]||(s[2]?ke[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:ke[r]=[e,s[1],!0]),ke[r]}return null},De=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Tt=e=>De(e,decodeURI),Ze=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const n=t.charCodeAt(r);if(n===37){const i=t.indexOf("?",r),a=t.slice(s,i===-1?void 0:i);return Tt(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(n===63)break}return t.slice(s,r)},Pt=e=>{const t=Ze(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},re=(e,t,...s)=>(s.length&&(t=re(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),et=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const i=n.replace("?","");r+="/"+i,s.push(r)}else r+="/"+n}),s.filter((n,i,a)=>a.indexOf(n)===i)},Ne=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?De(e,st):e):e,tt=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const d=e.charCodeAt(a+t.length+1);if(d===61){const c=a+t.length+2,l=e.indexOf("&",c);return Ne(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const n={};r??(r=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const a=e.indexOf("&",i+1);let d=e.indexOf("=",i);d>a&&a!==-1&&(d=-1);let c=e.slice(i+1,d===-1?a===-1?void 0:a:d);if(r&&(c=Ne(c)),i=a,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,a===-1?void 0:a),r&&(l=Ne(l))),s?(n[c]&&Array.isArray(n[c])||(n[c]=[]),n[c].push(l)):n[c]??(n[c]=l)}return t?n[t]:n},_t=tt,zt=(e,t)=>tt(e,t,!0),st=decodeURIComponent,Fe=e=>De(e,st),ae,O,q,nt,it,He,F,Ge,rt=(Ge=class{constructor(e,t="/",s=[[]]){g(this,q);f(this,"raw");g(this,ae);g(this,O);f(this,"routeIndex",0);f(this,"path");f(this,"bodyCache",{});g(this,F,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const n=Object.keys(t)[0];return n?t[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,u(this,O,s),u(this,ae,{})}param(e){return e?y(this,q,nt).call(this,e):y(this,q,it).call(this)}query(e){return _t(this.url,e)}queries(e){return zt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await wt(this,e))}json(){return o(this,F).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,F).call(this,"text")}arrayBuffer(){return o(this,F).call(this,"arrayBuffer")}blob(){return o(this,F).call(this,"blob")}formData(){return o(this,F).call(this,"formData")}addValidatedData(e,t){o(this,ae)[e]=t}valid(e){return o(this,ae)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[bt](){return o(this,O)}get matchedRoutes(){return o(this,O)[0].map(([[,e]])=>e)}get routePath(){return o(this,O)[0].map(([[,e]])=>e)[this.routeIndex].path}},ae=new WeakMap,O=new WeakMap,q=new WeakSet,nt=function(e){const t=o(this,O)[0][this.routeIndex][1][e],s=y(this,q,He).call(this,t);return s&&/\%/.test(s)?Fe(s):s},it=function(){const e={},t=Object.keys(o(this,O)[0][this.routeIndex][1]);for(const s of t){const r=y(this,q,He).call(this,o(this,O)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?Fe(r):r)}return e},He=function(e){return o(this,O)[1]?o(this,O)[1][e]:e},F=new WeakMap,Ge),Nt={Stringify:1},at=async(e,t,s,r,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(n?n[0]+=e:n=[e],Promise.all(i.map(d=>d({phase:t,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(c=>at(c,t,!1,r,n))).then(()=>n[0]))):Promise.resolve(e)},It="text/plain; charset=UTF-8",Ie=(e,t)=>({"Content-Type":e,...t}),ye,xe,I,oe,H,S,ve,le,ce,X,be,we,B,ne,Ve,Ht=(Ve=class{constructor(e,t){g(this,B);g(this,ye);g(this,xe);f(this,"env",{});g(this,I);f(this,"finalized",!1);f(this,"error");g(this,oe);g(this,H);g(this,S);g(this,ve);g(this,le);g(this,ce);g(this,X);g(this,be);g(this,we);f(this,"render",(...e)=>(o(this,le)??u(this,le,t=>this.html(t)),o(this,le).call(this,...e)));f(this,"setLayout",e=>u(this,ve,e));f(this,"getLayout",()=>o(this,ve));f(this,"setRenderer",e=>{u(this,le,e)});f(this,"header",(e,t,s)=>{this.finalized&&u(this,S,new Response(o(this,S).body,o(this,S)));const r=o(this,S)?o(this,S).headers:o(this,X)??u(this,X,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});f(this,"status",e=>{u(this,oe,e)});f(this,"set",(e,t)=>{o(this,I)??u(this,I,new Map),o(this,I).set(e,t)});f(this,"get",e=>o(this,I)?o(this,I).get(e):void 0);f(this,"newResponse",(...e)=>y(this,B,ne).call(this,...e));f(this,"body",(e,t,s)=>y(this,B,ne).call(this,e,t,s));f(this,"text",(e,t,s)=>!o(this,X)&&!o(this,oe)&&!t&&!s&&!this.finalized?new Response(e):y(this,B,ne).call(this,e,t,Ie(It,s)));f(this,"json",(e,t,s)=>y(this,B,ne).call(this,JSON.stringify(e),t,Ie("application/json",s)));f(this,"html",(e,t,s)=>{const r=n=>y(this,B,ne).call(this,n,t,Ie("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,Nt.Stringify,!1,{}).then(r):r(e)});f(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});f(this,"notFound",()=>(o(this,ce)??u(this,ce,()=>new Response),o(this,ce).call(this,this)));u(this,ye,e),t&&(u(this,H,t.executionCtx),this.env=t.env,u(this,ce,t.notFoundHandler),u(this,we,t.path),u(this,be,t.matchResult))}get req(){return o(this,xe)??u(this,xe,new rt(o(this,ye),o(this,we),o(this,be))),o(this,xe)}get event(){if(o(this,H)&&"respondWith"in o(this,H))return o(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,H))return o(this,H);throw Error("This context has no ExecutionContext")}get res(){return o(this,S)||u(this,S,new Response(null,{headers:o(this,X)??u(this,X,new Headers)}))}set res(e){if(o(this,S)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,S).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=o(this,S).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of r)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}u(this,S,e),this.finalized=!0}get var(){return o(this,I)?Object.fromEntries(o(this,I)):{}}},ye=new WeakMap,xe=new WeakMap,I=new WeakMap,oe=new WeakMap,H=new WeakMap,S=new WeakMap,ve=new WeakMap,le=new WeakMap,ce=new WeakMap,X=new WeakMap,be=new WeakMap,we=new WeakMap,B=new WeakSet,ne=function(e,t,s){const r=o(this,S)?new Headers(o(this,S).headers):o(this,X)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,d]of i)a.toLowerCase()==="set-cookie"?r.append(a,d):r.set(a,d)}if(s)for(const[i,a]of Object.entries(s))if(typeof a=="string")r.set(i,a);else{r.delete(i);for(const d of a)r.append(i,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,oe);return new Response(e,{status:n,headers:r})},Ve),b="ALL",Dt="all",$t=["get","post","put","delete","options","patch"],ot="Can not add a route since the matcher is already built.",lt=class extends Error{},qt="__COMPOSED_HANDLER",Lt=e=>e.text("404 Not Found",404),Be=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},C,w,ct,A,K,Se,Oe,de,Mt=(de=class{constructor(t={}){g(this,w);f(this,"get");f(this,"post");f(this,"put");f(this,"delete");f(this,"options");f(this,"patch");f(this,"all");f(this,"on");f(this,"use");f(this,"router");f(this,"getPath");f(this,"_basePath","/");g(this,C,"/");f(this,"routes",[]);g(this,A,Lt);f(this,"errorHandler",Be);f(this,"onError",t=>(this.errorHandler=t,this));f(this,"notFound",t=>(u(this,A,t),this));f(this,"fetch",(t,...s)=>y(this,w,Oe).call(this,t,s[1],s[0],t.method));f(this,"request",(t,s,r,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${re("/",t)}`,s),r,n)));f(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(y(this,w,Oe).call(this,t.request,t,void 0,t.request.method))})});[...$t,Dt].forEach(i=>{this[i]=(a,...d)=>(typeof a=="string"?u(this,C,a):y(this,w,K).call(this,i,o(this,C),a),d.forEach(c=>{y(this,w,K).call(this,i,o(this,C),c)}),this)}),this.on=(i,a,...d)=>{for(const c of[a].flat()){u(this,C,c);for(const l of[i].flat())d.map(h=>{y(this,w,K).call(this,l.toUpperCase(),o(this,C),h)})}return this},this.use=(i,...a)=>(typeof i=="string"?u(this,C,i):(u(this,C,"*"),a.unshift(i)),a.forEach(d=>{y(this,w,K).call(this,b,o(this,C),d)}),this);const{strict:r,...n}=t;Object.assign(this,n),this.getPath=r??!0?t.getPath??Ze:Pt}route(t,s){const r=this.basePath(t);return s.routes.map(n=>{var a;let i;s.errorHandler===Be?i=n.handler:(i=async(d,c)=>(await Me([],s.errorHandler)(d,()=>n.handler(d,c))).res,i[qt]=n.handler),y(a=r,w,K).call(a,n.method,n.path,i)}),this}basePath(t){const s=y(this,w,ct).call(this);return s._basePath=re(this._basePath,t),s}mount(t,s,r){let n,i;r&&(typeof r=="function"?i=r:(i=r.optionHandler,r.replaceRequest===!1?n=c=>c:n=r.replaceRequest));const a=i?c=>{const l=i(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};n||(n=(()=>{const c=re(this._basePath,t),l=c==="/"?0:c.length;return h=>{const p=new URL(h.url);return p.pathname=p.pathname.slice(l)||"/",new Request(p,h)}})());const d=async(c,l)=>{const h=await s(n(c.req.raw),...a(c));if(h)return h;await l()};return y(this,w,K).call(this,b,re(t,"*"),d),this}},C=new WeakMap,w=new WeakSet,ct=function(){const t=new de({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,u(t,A,o(this,A)),t.routes=this.routes,t},A=new WeakMap,K=function(t,s,r){t=t.toUpperCase(),s=re(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,n]),this.routes.push(n)},Se=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Oe=function(t,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await y(this,w,Oe).call(this,t,s,r,"GET")))();const i=this.getPath(t,{env:r}),a=this.router.match(n,i),d=new Ht(t,{path:i,matchResult:a,env:r,executionCtx:s,notFoundHandler:o(this,A)});if(a[0].length===1){let l;try{l=a[0][0][0][0](d,async()=>{d.res=await o(this,A).call(this,d)})}catch(h){return y(this,w,Se).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:o(this,A).call(this,d))).catch(h=>y(this,w,Se).call(this,h,d)):l??o(this,A).call(this,d)}const c=Me(a[0],this.errorHandler,o(this,A));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return y(this,w,Se).call(this,l,d)}})()},de),dt=[];function Ft(e,t){const s=this.buildAllMatchers(),r=((n,i)=>{const a=s[n]||s[b],d=a[2][i];if(d)return d;const c=i.match(a[0]);if(!c)return[[],dt];const l=c.indexOf("",1);return[a[1][l],c]});return this.match=r,r(e,t)}var Ae="[^/]+",ge=".*",me="(?:|/.*)",ie=Symbol(),Bt=new Set(".\\+*[^]$()");function Ut(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ge||e===me?1:t===ge||t===me?-1:e===Ae?1:t===Ae?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Y,Q,T,te,Wt=(te=class{constructor(){g(this,Y);g(this,Q);g(this,T,Object.create(null))}insert(t,s,r,n,i){if(t.length===0){if(o(this,Y)!==void 0)throw ie;if(i)return;u(this,Y,s);return}const[a,...d]=t,c=a==="*"?d.length===0?["","",ge]:["","",Ae]:a==="/*"?["","",me]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let p=c[2]||Ae;if(h&&c[2]&&(p===".*"||(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p))))throw ie;if(l=o(this,T)[p],!l){if(Object.keys(o(this,T)).some(m=>m!==ge&&m!==me))throw ie;if(i)return;l=o(this,T)[p]=new te,h!==""&&u(l,Q,n.varIndex++)}!i&&h!==""&&r.push([h,o(l,Q)])}else if(l=o(this,T)[a],!l){if(Object.keys(o(this,T)).some(h=>h.length>1&&h!==ge&&h!==me))throw ie;if(i)return;l=o(this,T)[a]=new te}l.insert(d,s,r,n,i)}buildRegExpStr(){const s=Object.keys(o(this,T)).sort(Ut).map(r=>{const n=o(this,T)[r];return(typeof o(n,Q)=="number"?`(${r})@${o(n,Q)}`:Bt.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof o(this,Y)=="number"&&s.unshift(`#${o(this,Y)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Y=new WeakMap,Q=new WeakMap,T=new WeakMap,te),Te,Ee,Ke,Gt=(Ke=class{constructor(){g(this,Te,{varIndex:0});g(this,Ee,new Wt)}insert(e,t,s){const r=[],n=[];for(let a=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${a}`;return n[a]=[l,c],a++,d=!0,l}),!d)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=n.length-1;a>=0;a--){const[d]=n[a];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(d)!==-1){i[c]=i[c].replace(d,n[a][1]);break}}return o(this,Ee).insert(i,t,r,o(this,Te),s),r}buildRegExp(){let e=o(this,Ee).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,a)=>i!==void 0?(s[++t]=Number(i),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),s,r]}},Te=new WeakMap,Ee=new WeakMap,Ke),Vt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function ht(e){return Ce[e]??(Ce[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Kt(){Ce=Object.create(null)}function Jt(e){var l;const t=new Gt,s=[];if(e.length===0)return Vt;const r=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,p],[m,v])=>h?1:m?-1:p.length-v.length),n=Object.create(null);for(let h=0,p=-1,m=r.length;h<m;h++){const[v,E,_]=r[h];v?n[E]=[_.map(([j])=>[j,Object.create(null)]),dt]:p++;let x;try{x=t.insert(E,p,v)}catch(j){throw j===ie?new lt(E):j}v||(s[p]=_.map(([j,L])=>{const je=Object.create(null);for(L-=1;L>=0;L--){const[Re,z]=x[L];je[Re]=z}return[j,je]}))}const[i,a,d]=t.buildRegExp();for(let h=0,p=s.length;h<p;h++)for(let m=0,v=s[h].length;m<v;m++){const E=(l=s[h][m])==null?void 0:l[1];if(!E)continue;const _=Object.keys(E);for(let x=0,j=_.length;x<j;x++)E[_[x]]=d[E[_[x]]]}const c=[];for(const h in a)c[h]=s[a[h]];return[i,c,n]}function se(e,t){if(e){for(const s of Object.keys(e).sort((r,n)=>n.length-r.length))if(ht(s).test(t))return[...e[s]]}}var U,W,Pe,pt,Je,Xt=(Je=class{constructor(){g(this,Pe);f(this,"name","RegExpRouter");g(this,U);g(this,W);f(this,"match",Ft);u(this,U,{[b]:Object.create(null)}),u(this,W,{[b]:Object.create(null)})}add(e,t,s){var d;const r=o(this,U),n=o(this,W);if(!r||!n)throw new Error(ot);r[e]||[r,n].forEach(c=>{c[e]=Object.create(null),Object.keys(c[b]).forEach(l=>{c[e][l]=[...c[b][l]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ht(t);e===b?Object.keys(r).forEach(l=>{var h;(h=r[l])[t]||(h[t]=se(r[l],t)||se(r[b],t)||[])}):(d=r[e])[t]||(d[t]=se(r[e],t)||se(r[b],t)||[]),Object.keys(r).forEach(l=>{(e===b||e===l)&&Object.keys(r[l]).forEach(h=>{c.test(h)&&r[l][h].push([s,i])})}),Object.keys(n).forEach(l=>{(e===b||e===l)&&Object.keys(n[l]).forEach(h=>c.test(h)&&n[l][h].push([s,i]))});return}const a=et(t)||[t];for(let c=0,l=a.length;c<l;c++){const h=a[c];Object.keys(n).forEach(p=>{var m;(e===b||e===p)&&((m=n[p])[h]||(m[h]=[...se(r[p],h)||se(r[b],h)||[]]),n[p][h].push([s,i-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,W)).concat(Object.keys(o(this,U))).forEach(t=>{e[t]||(e[t]=y(this,Pe,pt).call(this,t))}),u(this,U,u(this,W,void 0)),Kt(),e}},U=new WeakMap,W=new WeakMap,Pe=new WeakSet,pt=function(e){const t=[];let s=e===b;return[o(this,U),o(this,W)].forEach(r=>{const n=r[e]?Object.keys(r[e]).map(i=>[i,r[e][i]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==b&&t.push(...Object.keys(r[b]).map(i=>[i,r[b][i]]))}),s?Jt(t):null},Je),G,D,Xe,Yt=(Xe=class{constructor(e){f(this,"name","SmartRouter");g(this,G,[]);g(this,D,[]);u(this,G,e.routers)}add(e,t,s){if(!o(this,D))throw new Error(ot);o(this,D).push([e,t,s])}match(e,t){if(!o(this,D))throw new Error("Fatal error");const s=o(this,G),r=o(this,D),n=s.length;let i=0,a;for(;i<n;i++){const d=s[i];try{for(let c=0,l=r.length;c<l;c++)d.add(...r[c]);a=d.match(e,t)}catch(c){if(c instanceof lt)continue;throw c}this.match=d.match.bind(d),u(this,G,[d]),u(this,D,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,D)||o(this,G).length!==1)throw new Error("No active router has been determined yet.");return o(this,G)[0]}},G=new WeakMap,D=new WeakMap,Xe),fe=Object.create(null),V,k,Z,he,R,$,J,pe,Qt=(pe=class{constructor(t,s,r){g(this,$);g(this,V);g(this,k);g(this,Z);g(this,he,0);g(this,R,fe);if(u(this,k,r||Object.create(null)),u(this,V,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},u(this,V,[n])}u(this,Z,[])}insert(t,s,r){u(this,he,++Le(this,he)._);let n=this;const i=St(s),a=[];for(let d=0,c=i.length;d<c;d++){const l=i[d],h=i[d+1],p=At(l,h),m=Array.isArray(p)?p[0]:l;if(m in o(n,k)){n=o(n,k)[m],p&&a.push(p[1]);continue}o(n,k)[m]=new pe,p&&(o(n,Z).push(p),a.push(p[1])),n=o(n,k)[m]}return o(n,V).push({[t]:{handler:r,possibleKeys:a.filter((d,c,l)=>l.indexOf(d)===c),score:o(this,he)}}),n}search(t,s){var c;const r=[];u(this,R,fe);let i=[this];const a=Qe(s),d=[];for(let l=0,h=a.length;l<h;l++){const p=a[l],m=l===h-1,v=[];for(let E=0,_=i.length;E<_;E++){const x=i[E],j=o(x,k)[p];j&&(u(j,R,o(x,R)),m?(o(j,k)["*"]&&r.push(...y(this,$,J).call(this,o(j,k)["*"],t,o(x,R))),r.push(...y(this,$,J).call(this,j,t,o(x,R)))):v.push(j));for(let L=0,je=o(x,Z).length;L<je;L++){const Re=o(x,Z)[L],z=o(x,R)===fe?{}:{...o(x,R)};if(Re==="*"){const M=o(x,k)["*"];M&&(r.push(...y(this,$,J).call(this,M,t,o(x,R))),u(M,R,z),v.push(M));continue}const[mt,$e,ue]=Re;if(!p&&!(ue instanceof RegExp))continue;const N=o(x,k)[mt],yt=a.slice(l).join("/");if(ue instanceof RegExp){const M=ue.exec(yt);if(M){if(z[$e]=M[0],r.push(...y(this,$,J).call(this,N,t,o(x,R),z)),Object.keys(o(N,k)).length){u(N,R,z);const _e=((c=M[0].match(/\//))==null?void 0:c.length)??0;(d[_e]||(d[_e]=[])).push(N)}continue}}(ue===!0||ue.test(p))&&(z[$e]=p,m?(r.push(...y(this,$,J).call(this,N,t,z,o(x,R))),o(N,k)["*"]&&r.push(...y(this,$,J).call(this,o(N,k)["*"],t,z,o(x,R)))):(u(N,R,z),v.push(N)))}}i=v.concat(d.shift()??[])}return r.length>1&&r.sort((l,h)=>l.score-h.score),[r.map(({handler:l,params:h})=>[l,h])]}},V=new WeakMap,k=new WeakMap,Z=new WeakMap,he=new WeakMap,R=new WeakMap,$=new WeakSet,J=function(t,s,r,n){const i=[];for(let a=0,d=o(t,V).length;a<d;a++){const c=o(t,V)[a],l=c[s]||c[b],h={};if(l!==void 0&&(l.params=Object.create(null),i.push(l),r!==fe||n&&n!==fe))for(let p=0,m=l.possibleKeys.length;p<m;p++){const v=l.possibleKeys[p],E=h[l.score];l.params[v]=n!=null&&n[v]&&!E?n[v]:r[v]??(n==null?void 0:n[v]),h[l.score]=!0}}return i},pe),ee,Ye,Zt=(Ye=class{constructor(){f(this,"name","TrieRouter");g(this,ee);u(this,ee,new Qt)}add(e,t,s){const r=et(t);if(r){for(let n=0,i=r.length;n<i;n++)o(this,ee).insert(e,r[n],s);return}o(this,ee).insert(e,t,s)}match(e,t){return o(this,ee).search(e,t)}},ee=new WeakMap,Ye),ut=class extends Mt{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Xt,new Zt]})}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Ue=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,r=e.match(s);if(!r)return;let n=t[r[1]];return n&&n.startsWith("text")&&(n+="; charset=utf-8"),n},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,rs=(...e)=>{let t=e.filter(n=>n!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),r=[];for(const n of s)n===".."&&r.length>0&&r.at(-1)!==".."?r.pop():n!=="."&&r.push(n);return r.join("/")||"."},ft={br:".br",zstd:".zst",gzip:".gz"},ns=Object.keys(ft),is="index.html",as=e=>{const t=e.root??"./",s=e.path,r=e.join??rs;return async(n,i)=>{var h,p,m,v;if(n.finalized)return i();let a;if(e.path)a=e.path;else try{if(a=decodeURIComponent(n.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(a))throw new Error}catch{return await((h=e.onNotFound)==null?void 0:h.call(e,n.req.path,n)),i()}let d=r(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(a):a);e.isDir&&await e.isDir(d)&&(d=r(d,is));const c=e.getContent;let l=await c(d,n);if(l instanceof Response)return n.newResponse(l.body,l);if(l){const E=e.mimes&&Ue(d,e.mimes)||Ue(d);if(n.header("Content-Type",E||"application/octet-stream"),e.precompressed&&(!E||es.test(E))){const _=new Set((p=n.req.header("Accept-Encoding"))==null?void 0:p.split(",").map(x=>x.trim()));for(const x of ns){if(!_.has(x))continue;const j=await c(d+ft[x],n);if(j){l=j,n.header("Content-Encoding",x),n.header("Vary","Accept-Encoding",{append:!0});break}}}return await((m=e.onFound)==null?void 0:m.call(e,d,n)),n.body(l)}await((v=e.onNotFound)==null?void 0:v.call(e,d,n)),await i()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let r;t&&t.namespace?r=t.namespace:r=__STATIC_CONTENT;const n=s[e]||e;if(!n)return null;const i=await r.get(n,{type:"stream"});return i||null},ls=e=>async function(s,r){return as({...e,getContent:async i=>os(i,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,r)},cs=e=>ls(e),ds=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(i=>typeof i=="string"?i==="*"?()=>i:a=>i===a?a:null:typeof i=="function"?i:a=>i.includes(a)?a:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(a,d){var h;function c(p,m){a.res.headers.set(p,m)}const l=await r(a.req.header("origin")||"",a);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const p=await n(a.req.header("origin")||"",a);p.length&&c("Access-Control-Allow-Methods",p.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const v=a.req.header("Access-Control-Request-Headers");v&&(m=v.split(/\s*,\s*/))}return m!=null&&m.length&&(c("Access-Control-Allow-Headers",m.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const P=new ut;P.use("/api/*",ds());P.use("/static/*",cs({root:"./public"}));P.post("/api/ocr",async e=>{try{return await new Promise(t=>setTimeout(t,800)),e.json({success:!0,data:{date:"2026-01-01",amount:45e3,vendor:"스타벅스 코리아",vat:4500,category:"식비",confidence:.95,risk_level:"low",source_type:"receipt"},message:"OCR 인식 완료"})}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/bank-capture",async e=>{try{await new Promise(s=>setTimeout(s,1200));const t=[{id:"tx_1",date:"2026-01-01",merchant:"카페베네 강남점",amount:15e3,type:"withdraw",category:"식비",label:"사업추정",confidence:.88,risk_level:"low",selected:!0},{id:"tx_2",date:"2026-01-02",merchant:"쿠팡 온라인결제",amount:32e3,type:"withdraw",category:"사무용품",label:"사업추정",confidence:.75,risk_level:"mid",selected:!0},{id:"tx_3",date:"2026-01-03",merchant:"택시 결제",amount:8500,type:"withdraw",category:"교통비",label:"검토필요",confidence:.65,risk_level:"mid",selected:!1}];return e.json({success:!0,data:{transactions:t,summary:{total:t.length,business:t.filter(s=>s.label==="사업추정").length,review_needed:t.filter(s=>s.label==="검토필요").length}},message:"통장 내역 인식 완료"})}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/gallery-upload",async e=>{try{const s=(await e.req.json()).count||5,r=Array.from({length:s},(n,i)=>({id:`img_${i+1}`,source:"gallery",type:i%3===0?"receipt":i%3===1?"statement":"screenshot",data:{date:`2026-01-0${i%9+1}`,amount:Math.floor(Math.random()*1e5)+5e3,vendor:["스타벅스","쿠팡","올리브영","이마트","GS25"][i%5],category:["식비","사무용품","통신비","교통비","소모품"][i%5],confidence:.7+Math.random()*.25,risk_level:i%4===0?"high":i%2===0?"mid":"low"}}));return await new Promise(n=>setTimeout(n,1500)),e.json({success:!0,data:{processed:r,summary:{total:r.length,receipts:r.filter(n=>n.type==="receipt").length,statements:r.filter(n=>n.type==="statement").length,screenshots:r.filter(n=>n.type==="screenshot").length}},message:`${r.length}개 이미지 처리 완료`})}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/risk-analysis",async e=>{try{const{expense:t}=await e.req.json();let s=0,r=[];t.amount>15e4&&(s+=30,r.push("고액 거래 (15만원 초과)")),t.confidence<.7&&(s+=25,r.push("낮은 인식 신뢰도")),["기타","미분류"].includes(t.category)&&(s+=20,r.push("불명확한 카테고리"));const n=s>=50?"high":s>=25?"mid":"low",i=s>=40;return e.json({success:!0,data:{riskScore:s,riskLevel:n,riskFactors:r,reviewRecommended:i,reviewCost:i?1900:0,message:i?"전문가 검토를 권장합니다 (1,900원)":"자동 처리 가능합니다"}})}catch{return e.json({success:!1,message:"분석 오류"},400)}});P.post("/api/spot-review",async e=>{try{const{expense_id:t,user_note:s}=await e.req.json();return await new Promise(r=>setTimeout(r,800)),e.json({success:!0,data:{review_id:`review_${Date.now()}`,status:"pending",estimated_time:"24시간 이내",cost:1900,expert_name:"김세무 세무사",message:"전문가 검토가 요청되었습니다. 24시간 이내 답변 예정입니다."}})}catch{return e.json({success:!1,message:"요청 오류"},400)}});P.post("/api/calculate-tax",async e=>{try{const{expenses:t}=await e.req.json(),s=t.reduce((l,h)=>l+h.amount,0),r=Math.floor(s*.8),n=Math.floor(s*.1),i=Math.floor(r*.15),a=Math.floor(n*.5),d=t.filter(l=>l.risk_level==="high").length,c=t.filter(l=>l.risk_level==="mid").length;return e.json({success:!0,data:{totalExpense:s,deductible:r,vat:n,estimatedTax:i,refundEstimate:a,riskStats:{high:d,mid:c,low:t.length-d-c},summary:`총 경비: ${s.toLocaleString()}원 | 공제 가능: ${r.toLocaleString()}원 | 환급 예상: ${a.toLocaleString()}원`}})}catch{return e.json({success:!1,message:"계산 오류"},400)}});P.get("/api/faq/:lang",e=>{const t=e.req.param("lang")||"ko",s={ko:[{id:1,question:"이 플랫폼은 어떤 서비스인가요?",answer:"사진만 있으면 시작할 수 있어요. 영수증, 통장 캡처, 갤러리 사진 모두 가능합니다. 세금은 우리가 계산하고, 결정은 당신이 합니다."},{id:2,question:"영수증이 없어도 되나요? 💡",answer:"네! 통장 캡처나 갤러리 사진만으로도 경비 처리가 가능합니다. 영수증 없이도 경비 후보로 쌓아둘 수 있습니다."},{id:3,question:"갤러리에 있는 사진도 사용할 수 있나요? 📸",answer:"가능합니다! 사진첩에 저장된 영수증, 스크린샷, 거래 내역 등을 한 번에 업로드하면 자동으로 분류합니다."},{id:4,question:"통장 캡처는 어떻게 하나요? 🏦",answer:"뱅킹앱 거래 내역 화면을 캡처하여 업로드하면 날짜, 거래처, 금액을 자동으로 추출하여 경비로 등록합니다."},{id:5,question:"업무용인지 개인용인지 헷갈려요",answer:"이 거래는 애매합니다. 확인만 받아보실래요? 업무/개인/검토필요 중 선택하시면 됩니다. 검토필요를 선택하면 전문가가 확인해드립니다."},{id:6,question:"위험도 게이지는 무엇인가요? ⚠️",answer:"각 경비 항목의 세무 리스크를 자동 분석합니다. 전문가의 검토가 필요해 보이는 항목은 표시됩니다."},{id:7,question:"건당 전문가 리뷰는 무엇인가요? 👨‍💼",answer:"여기만 좀 봐주세요. 세무 서비스에 처음 생긴 문장입니다. 애매한 항목만 1,900원에 세무사 확인을 받을 수 있습니다."},{id:8,question:"월 정액을 내야 하나요? 💸",answer:"아니요! 무료 자동신고(소규모), 건당 리뷰(1,900원), 전면 대행(월 정액) 중 선택 가능합니다. 필요한 만큼만 비용을 지불하세요."},{id:9,question:"프리랜서도 사용할 수 있나요? 💼",answer:"네! 오히려 프리랜서와 소규모 자영업자를 위해 설계되었습니다. 간편 모드로 3번의 클릭으로 신고 준비가 완료됩니다."},{id:10,question:"실수하면 어떡하죠?",answer:"제출 버튼을 누르기 전까지, 무조건 다시 되돌릴 수 있게 설계했습니다. 수정 기록은 로그로 남아 증빙에 포함됩니다."},{id:11,question:"세무 계산은 자동인가요?",answer:"네. AI 엔진이 과세/면세/경비 인정 비율·환급 예상액을 자동 산출합니다. 내가 몰라도 됩니다. 숫자는 자동으로 자리 찾아갑니다."},{id:12,question:"홈택스로 자동 제출되나요?",answer:"파일 업로드, 직접 제출, 대행 요청 — 상황에 맞는 문을 고르세요. 홈택스 XML·CSV 출력도 지원합니다."},{id:13,question:"어떤 세금이 지원되나요?",answer:"부가세, 종소세 단순 신고, 프리랜서·1인사업자 경비처리 중심입니다. 법인·무역은 전문가 옵션이 활성화됩니다."},{id:14,question:"예상 환급액도 보이나요?",answer:'영수증 누적 시 상단에 "예상 세금/환급 미터기"가 실시간으로 표시됩니다.'},{id:15,question:"자동 분류 정확도는 어느 정도인가요?",answer:"업종/금액/가맹점 패턴 기반 추천이며, 반복 사용 시 사용자/업종별로 정밀도가 개선됩니다."},{id:16,question:"중복되는 영수증은요?",answer:"중복 인식 방지 및 중복 경고가 자동 표시됩니다."},{id:17,question:"세무사 비용이 부담돼요",answer:"1,900원으로 불확실성을 지우는 경험. 예측 가능한 안심 비용입니다. 월 구독 없이 단건 검토로 해결 가능합니다."},{id:18,question:"간편 모드는 무엇인가요? ⚡",answer:'복잡한 메뉴 없이 "갤러리 선택 → 1클릭 분류 → 자동 계산 → 제출" 4단계로 끝나는 초간단 워크플로우입니다.'}]};return e.json({success:!0,data:s[t]||s.ko})});P.get("/",e=>e.html(`
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
                <span id="navTitle" style="font-family: var(--font-headline); font-size: 18px; font-weight: 700; color: var(--midnight-navy);">세무신고 플랫폼</span>
            </div>
            <div style="display: flex; align-items: center; gap: 24px;">
                <!-- 언어 선택 드롭다운 -->
                <div style="position: relative;">
                    <button id="langDropdownBtn" onclick="toggleLangDropdown()" class="btn btn-ghost" style="display: flex; align-items: center; gap: 4px; padding: 6px 12px; min-width: auto;">
                        <span id="currentLangFlag" style="font-size: 1.25rem;">🇰🇷</span>
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
                
                <div style="display: flex; align-items: center; gap: 12px;">
                    <a href="#" id="navNotice" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; font-size: 0.875rem;">공지</a>
                    <a href="#" id="navLogin" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; font-size: 0.875rem;">로그인</a>
                </div>
                <button class="btn btn-primary" id="navSignup" style="padding: 8px 16px; font-size: 0.875rem;">회원가입</button>
            </div>
        </div>
    </nav>

    <!-- 메인 컨텐츠 -->
    <div style="padding-top: 100px; padding-bottom: 48px;">
        <div class="container">
            
            <!-- 히어로 섹션 -->
            <div class="text-center animate-fade-in" style="margin-bottom: 48px;">
                <h1 id="heroTitle" style="font-size: 3.5rem; font-weight: 700; line-height: 1.2; margin-bottom: 24px; color: var(--midnight-navy);">
                    사진(Snap)으로 해결하는 세금
                </h1>
                <p id="heroSubtitle" style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 16px;">
                    카메라 렌즈로 끝나는 신고
                </p>
                <p id="heroDescription" style="font-size: 1.125rem; color: var(--text-tertiary); margin-bottom: 32px;">
                    영수증 없어도 괜찮습니다<br>
                    통장 캡처로 경비 처리
                </p>
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                    <button id="heroCtaStart" onclick="scrollToSection('modes')" class="btn btn-primary" style="font-size: 1.125rem; padding: 16px 32px;">
                        <i class="fas fa-rocket"></i>
                        지금 시작하기
                    </button>
                    <button id="heroCtaHow" class="btn btn-outline" style="font-size: 1.125rem; padding: 16px 32px;">
                        <i class="fas fa-play-circle"></i>
                        어떻게 작동하나요?
                    </button>
                </div>
            </div>

            <!-- 안심 메시지 배너 -->
            <div class="message-box message-reassure animate-slide-up" style="font-size: 1.125rem; text-align: center;">
                <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                <span id="reassureMessage" style="font-size: 0.875rem; line-height: 1.5;">
                    사진만 있으면 시작할 수 있어요.<br>
                    정식 장부가 없어도 출발할 수 있어야 진짜 초보자를 위한 서비스죠.
                </span>
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
  `));const We=new ut,hs=Object.assign({"/src/index.tsx":P});let gt=!1;for(const[,e]of Object.entries(hs))e&&(We.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),We.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),gt=!0);if(!gt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{We as default};
