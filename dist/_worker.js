var bt=Object.defineProperty;var $e=e=>{throw TypeError(e)};var wt=(e,t,s)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>wt(e,typeof t!="symbol"?t+"":t,s),Ie=(e,t,s)=>t.has(e)||$e("Cannot "+s);var o=(e,t,s)=>(Ie(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?$e("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,r)=>(Ie(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Ie(e,t,"access private method"),s);var Le=(e,t,s,r)=>({set _(n){f(e,t,n,s)},get _(){return o(e,t,r)}});var Fe=(e,t,s)=>(r,n)=>{let i=-1;return a(0);async function a(d){if(d<=i)throw new Error("next() called multiple times");i=d;let c,l=!1,u;if(e[d]?(u=e[d][0][0],r.req.routeIndex=d):u=d===e.length&&n||void 0,u)try{c=await u(r,()=>a(d+1))}catch(h){if(h instanceof Error&&t)r.error=h,c=await t(h,r),l=!0;else throw h}else r.finalized===!1&&s&&(c=await s(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},vt=Symbol(),yt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,i=(e instanceof rt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Et(e,{all:s,dot:r}):{}};async function Et(e,t){const s=await e.formData();return s?Rt(s,t):{}}function Rt(e,t){const s=Object.create(null);return e.forEach((r,n)=>{t.all||n.endsWith("[]")?jt(s,n,r):s[n]=r}),t.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(Ct(s,r,n),delete s[r])}),s}var jt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ct=(e,t,s)=>{let r=e;const n=t.split(".");n.forEach((i,a)=>{a===n.length-1?r[i]=s:((!r[i]||typeof r[i]!="object"||Array.isArray(r[i])||r[i]instanceof File)&&(r[i]=Object.create(null)),r=r[i])})},Ye=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},St=e=>{const{groups:t,path:s}=Ot(e),r=Ye(s);return qt(r,t)},Ot=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return t.push([n,s]),n}),{groups:t,path:e}},qt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(r)){e[n]=e[n].replace(r,t[s][1]);break}}return e},Ce={},At=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Ce[r]||(s[2]?Ce[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ce[r]=[e,s[1],!0]),Ce[r]}return null},Ne=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},kt=e=>Ne(e,decodeURI),Ze=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const n=t.charCodeAt(r);if(n===37){const i=t.indexOf("?",r),a=t.slice(s,i===-1?void 0:i);return kt(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(n===63)break}return t.slice(s,r)},Pt=e=>{const t=Ze(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},re=(e,t,...s)=>(s.length&&(t=re(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),et=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const i=n.replace("?","");r+="/"+i,s.push(r)}else r+="/"+n}),s.filter((n,i,a)=>a.indexOf(n)===i)},_e=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ne(e,st):e):e,tt=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const d=e.charCodeAt(a+t.length+1);if(d===61){const c=a+t.length+2,l=e.indexOf("&",c);return _e(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const n={};r??(r=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const a=e.indexOf("&",i+1);let d=e.indexOf("=",i);d>a&&a!==-1&&(d=-1);let c=e.slice(i+1,d===-1?a===-1?void 0:a:d);if(r&&(c=_e(c)),i=a,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,a===-1?void 0:a),r&&(l=_e(l))),s?(n[c]&&Array.isArray(n[c])||(n[c]=[]),n[c].push(l)):n[c]??(n[c]=l)}return t?n[t]:n},Tt=tt,It=(e,t)=>tt(e,t,!0),st=decodeURIComponent,ze=e=>Ne(e,st),ae,O,$,nt,it,Me,z,Ke,rt=(Ke=class{constructor(e,t="/",s=[[]]){m(this,$);p(this,"raw");m(this,ae);m(this,O);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});m(this,z,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const n=Object.keys(t)[0];return n?t[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,O,s),f(this,ae,{})}param(e){return e?x(this,$,nt).call(this,e):x(this,$,it).call(this)}query(e){return Tt(this.url,e)}queries(e){return It(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await yt(this,e))}json(){return o(this,z).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,z).call(this,"text")}arrayBuffer(){return o(this,z).call(this,"arrayBuffer")}blob(){return o(this,z).call(this,"blob")}formData(){return o(this,z).call(this,"formData")}addValidatedData(e,t){o(this,ae)[e]=t}valid(e){return o(this,ae)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[vt](){return o(this,O)}get matchedRoutes(){return o(this,O)[0].map(([[,e]])=>e)}get routePath(){return o(this,O)[0].map(([[,e]])=>e)[this.routeIndex].path}},ae=new WeakMap,O=new WeakMap,$=new WeakSet,nt=function(e){const t=o(this,O)[0][this.routeIndex][1][e],s=x(this,$,Me).call(this,t);return s&&/\%/.test(s)?ze(s):s},it=function(){const e={},t=Object.keys(o(this,O)[0][this.routeIndex][1]);for(const s of t){const r=x(this,$,Me).call(this,o(this,O)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?ze(r):r)}return e},Me=function(e){return o(this,O)[1]?o(this,O)[1][e]:e},z=new WeakMap,Ke),_t={Stringify:1},at=async(e,t,s,r,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(n?n[0]+=e:n=[e],Promise.all(i.map(d=>d({phase:t,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(c=>at(c,t,!1,r,n))).then(()=>n[0]))):Promise.resolve(e)},Dt="text/plain; charset=UTF-8",De=(e,t)=>({"Content-Type":e,...t}),xe,be,D,oe,M,S,we,le,ce,Q,ve,ye,B,ne,Ue,Mt=(Ue=class{constructor(e,t){m(this,B);m(this,xe);m(this,be);p(this,"env",{});m(this,D);p(this,"finalized",!1);p(this,"error");m(this,oe);m(this,M);m(this,S);m(this,we);m(this,le);m(this,ce);m(this,Q);m(this,ve);m(this,ye);p(this,"render",(...e)=>(o(this,le)??f(this,le,t=>this.html(t)),o(this,le).call(this,...e)));p(this,"setLayout",e=>f(this,we,e));p(this,"getLayout",()=>o(this,we));p(this,"setRenderer",e=>{f(this,le,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,S,new Response(o(this,S).body,o(this,S)));const r=o(this,S)?o(this,S).headers:o(this,Q)??f(this,Q,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});p(this,"status",e=>{f(this,oe,e)});p(this,"set",(e,t)=>{o(this,D)??f(this,D,new Map),o(this,D).set(e,t)});p(this,"get",e=>o(this,D)?o(this,D).get(e):void 0);p(this,"newResponse",(...e)=>x(this,B,ne).call(this,...e));p(this,"body",(e,t,s)=>x(this,B,ne).call(this,e,t,s));p(this,"text",(e,t,s)=>!o(this,Q)&&!o(this,oe)&&!t&&!s&&!this.finalized?new Response(e):x(this,B,ne).call(this,e,t,De(Dt,s)));p(this,"json",(e,t,s)=>x(this,B,ne).call(this,JSON.stringify(e),t,De("application/json",s)));p(this,"html",(e,t,s)=>{const r=n=>x(this,B,ne).call(this,n,t,De("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,_t.Stringify,!1,{}).then(r):r(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(o(this,ce)??f(this,ce,()=>new Response),o(this,ce).call(this,this)));f(this,xe,e),t&&(f(this,M,t.executionCtx),this.env=t.env,f(this,ce,t.notFoundHandler),f(this,ye,t.path),f(this,ve,t.matchResult))}get req(){return o(this,be)??f(this,be,new rt(o(this,xe),o(this,ye),o(this,ve))),o(this,be)}get event(){if(o(this,M)&&"respondWith"in o(this,M))return o(this,M);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,M))return o(this,M);throw Error("This context has no ExecutionContext")}get res(){return o(this,S)||f(this,S,new Response(null,{headers:o(this,Q)??f(this,Q,new Headers)}))}set res(e){if(o(this,S)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,S).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=o(this,S).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of r)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}f(this,S,e),this.finalized=!0}get var(){return o(this,D)?Object.fromEntries(o(this,D)):{}}},xe=new WeakMap,be=new WeakMap,D=new WeakMap,oe=new WeakMap,M=new WeakMap,S=new WeakMap,we=new WeakMap,le=new WeakMap,ce=new WeakMap,Q=new WeakMap,ve=new WeakMap,ye=new WeakMap,B=new WeakSet,ne=function(e,t,s){const r=o(this,S)?new Headers(o(this,S).headers):o(this,Q)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,d]of i)a.toLowerCase()==="set-cookie"?r.append(a,d):r.set(a,d)}if(s)for(const[i,a]of Object.entries(s))if(typeof a=="string")r.set(i,a);else{r.delete(i);for(const d of a)r.append(i,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,oe);return new Response(e,{status:n,headers:r})},Ue),v="ALL",Nt="all",Ht=["get","post","put","delete","options","patch"],ot="Can not add a route since the matcher is already built.",lt=class extends Error{},$t="__COMPOSED_HANDLER",Lt=e=>e.text("404 Not Found",404),Be=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},q,y,ct,A,G,Se,Oe,de,Ft=(de=class{constructor(t={}){m(this,y);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");m(this,q,"/");p(this,"routes",[]);m(this,A,Lt);p(this,"errorHandler",Be);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,A,t),this));p(this,"fetch",(t,...s)=>x(this,y,Oe).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,r,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${re("/",t)}`,s),r,n)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,y,Oe).call(this,t.request,t,void 0,t.request.method))})});[...Ht,Nt].forEach(i=>{this[i]=(a,...d)=>(typeof a=="string"?f(this,q,a):x(this,y,G).call(this,i,o(this,q),a),d.forEach(c=>{x(this,y,G).call(this,i,o(this,q),c)}),this)}),this.on=(i,a,...d)=>{for(const c of[a].flat()){f(this,q,c);for(const l of[i].flat())d.map(u=>{x(this,y,G).call(this,l.toUpperCase(),o(this,q),u)})}return this},this.use=(i,...a)=>(typeof i=="string"?f(this,q,i):(f(this,q,"*"),a.unshift(i)),a.forEach(d=>{x(this,y,G).call(this,v,o(this,q),d)}),this);const{strict:r,...n}=t;Object.assign(this,n),this.getPath=r??!0?t.getPath??Ze:Pt}route(t,s){const r=this.basePath(t);return s.routes.map(n=>{var a;let i;s.errorHandler===Be?i=n.handler:(i=async(d,c)=>(await Fe([],s.errorHandler)(d,()=>n.handler(d,c))).res,i[$t]=n.handler),x(a=r,y,G).call(a,n.method,n.path,i)}),this}basePath(t){const s=x(this,y,ct).call(this);return s._basePath=re(this._basePath,t),s}mount(t,s,r){let n,i;r&&(typeof r=="function"?i=r:(i=r.optionHandler,r.replaceRequest===!1?n=c=>c:n=r.replaceRequest));const a=i?c=>{const l=i(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};n||(n=(()=>{const c=re(this._basePath,t),l=c==="/"?0:c.length;return u=>{const h=new URL(u.url);return h.pathname=h.pathname.slice(l)||"/",new Request(h,u)}})());const d=async(c,l)=>{const u=await s(n(c.req.raw),...a(c));if(u)return u;await l()};return x(this,y,G).call(this,v,re(t,"*"),d),this}},q=new WeakMap,y=new WeakSet,ct=function(){const t=new de({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,A,o(this,A)),t.routes=this.routes,t},A=new WeakMap,G=function(t,s,r){t=t.toUpperCase(),s=re(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,n]),this.routes.push(n)},Se=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Oe=function(t,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await x(this,y,Oe).call(this,t,s,r,"GET")))();const i=this.getPath(t,{env:r}),a=this.router.match(n,i),d=new Mt(t,{path:i,matchResult:a,env:r,executionCtx:s,notFoundHandler:o(this,A)});if(a[0].length===1){let l;try{l=a[0][0][0][0](d,async()=>{d.res=await o(this,A).call(this,d)})}catch(u){return x(this,y,Se).call(this,u,d)}return l instanceof Promise?l.then(u=>u||(d.finalized?d.res:o(this,A).call(this,d))).catch(u=>x(this,y,Se).call(this,u,d)):l??o(this,A).call(this,d)}const c=Fe(a[0],this.errorHandler,o(this,A));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,y,Se).call(this,l,d)}})()},de),dt=[];function zt(e,t){const s=this.buildAllMatchers(),r=((n,i)=>{const a=s[n]||s[v],d=a[2][i];if(d)return d;const c=i.match(a[0]);if(!c)return[[],dt];const l=c.indexOf("",1);return[a[1][l],c]});return this.match=r,r(e,t)}var Ae="[^/]+",me=".*",ge="(?:|/.*)",ie=Symbol(),Bt=new Set(".\\+*[^]$()");function Wt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===me||e===ge?1:t===me||t===ge?-1:e===Ae?1:t===Ae?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,Y,k,te,Vt=(te=class{constructor(){m(this,J);m(this,Y);m(this,k,Object.create(null))}insert(t,s,r,n,i){if(t.length===0){if(o(this,J)!==void 0)throw ie;if(i)return;f(this,J,s);return}const[a,...d]=t,c=a==="*"?d.length===0?["","",me]:["","",Ae]:a==="/*"?["","",ge]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const u=c[1];let h=c[2]||Ae;if(u&&c[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw ie;if(l=o(this,k)[h],!l){if(Object.keys(o(this,k)).some(g=>g!==me&&g!==ge))throw ie;if(i)return;l=o(this,k)[h]=new te,u!==""&&f(l,Y,n.varIndex++)}!i&&u!==""&&r.push([u,o(l,Y)])}else if(l=o(this,k)[a],!l){if(Object.keys(o(this,k)).some(u=>u.length>1&&u!==me&&u!==ge))throw ie;if(i)return;l=o(this,k)[a]=new te}l.insert(d,s,r,n,i)}buildRegExpStr(){const s=Object.keys(o(this,k)).sort(Wt).map(r=>{const n=o(this,k)[r];return(typeof o(n,Y)=="number"?`(${r})@${o(n,Y)}`:Bt.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof o(this,J)=="number"&&s.unshift(`#${o(this,J)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},J=new WeakMap,Y=new WeakMap,k=new WeakMap,te),ke,Ee,Ge,Kt=(Ge=class{constructor(){m(this,ke,{varIndex:0});m(this,Ee,new Vt)}insert(e,t,s){const r=[],n=[];for(let a=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${a}`;return n[a]=[l,c],a++,d=!0,l}),!d)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=n.length-1;a>=0;a--){const[d]=n[a];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(d)!==-1){i[c]=i[c].replace(d,n[a][1]);break}}return o(this,Ee).insert(i,t,r,o(this,ke),s),r}buildRegExp(){let e=o(this,Ee).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,a)=>i!==void 0?(s[++t]=Number(i),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),s,r]}},ke=new WeakMap,Ee=new WeakMap,Ge),Ut=[/^$/,[],Object.create(null)],qe=Object.create(null);function ut(e){return qe[e]??(qe[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Gt(){qe=Object.create(null)}function Xt(e){var l;const t=new Kt,s=[];if(e.length===0)return Ut;const r=e.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,h],[g,w])=>u?1:g?-1:h.length-w.length),n=Object.create(null);for(let u=0,h=-1,g=r.length;u<g;u++){const[w,E,T]=r[u];w?n[E]=[T.map(([R])=>[R,Object.create(null)]),dt]:h++;let b;try{b=t.insert(E,h,w)}catch(R){throw R===ie?new lt(E):R}w||(s[h]=T.map(([R,L])=>{const Re=Object.create(null);for(L-=1;L>=0;L--){const[je,I]=b[L];Re[je]=I}return[R,Re]}))}const[i,a,d]=t.buildRegExp();for(let u=0,h=s.length;u<h;u++)for(let g=0,w=s[u].length;g<w;g++){const E=(l=s[u][g])==null?void 0:l[1];if(!E)continue;const T=Object.keys(E);for(let b=0,R=T.length;b<R;b++)E[T[b]]=d[E[T[b]]]}const c=[];for(const u in a)c[u]=s[a[u]];return[i,c,n]}function se(e,t){if(e){for(const s of Object.keys(e).sort((r,n)=>n.length-r.length))if(ut(s).test(t))return[...e[s]]}}var W,V,Pe,ht,Xe,Qt=(Xe=class{constructor(){m(this,Pe);p(this,"name","RegExpRouter");m(this,W);m(this,V);p(this,"match",zt);f(this,W,{[v]:Object.create(null)}),f(this,V,{[v]:Object.create(null)})}add(e,t,s){var d;const r=o(this,W),n=o(this,V);if(!r||!n)throw new Error(ot);r[e]||[r,n].forEach(c=>{c[e]=Object.create(null),Object.keys(c[v]).forEach(l=>{c[e][l]=[...c[v][l]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ut(t);e===v?Object.keys(r).forEach(l=>{var u;(u=r[l])[t]||(u[t]=se(r[l],t)||se(r[v],t)||[])}):(d=r[e])[t]||(d[t]=se(r[e],t)||se(r[v],t)||[]),Object.keys(r).forEach(l=>{(e===v||e===l)&&Object.keys(r[l]).forEach(u=>{c.test(u)&&r[l][u].push([s,i])})}),Object.keys(n).forEach(l=>{(e===v||e===l)&&Object.keys(n[l]).forEach(u=>c.test(u)&&n[l][u].push([s,i]))});return}const a=et(t)||[t];for(let c=0,l=a.length;c<l;c++){const u=a[c];Object.keys(n).forEach(h=>{var g;(e===v||e===h)&&((g=n[h])[u]||(g[u]=[...se(r[h],u)||se(r[v],u)||[]]),n[h][u].push([s,i-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,V)).concat(Object.keys(o(this,W))).forEach(t=>{e[t]||(e[t]=x(this,Pe,ht).call(this,t))}),f(this,W,f(this,V,void 0)),Gt(),e}},W=new WeakMap,V=new WeakMap,Pe=new WeakSet,ht=function(e){const t=[];let s=e===v;return[o(this,W),o(this,V)].forEach(r=>{const n=r[e]?Object.keys(r[e]).map(i=>[i,r[e][i]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==v&&t.push(...Object.keys(r[v]).map(i=>[i,r[v][i]]))}),s?Xt(t):null},Xe),K,N,Qe,Jt=(Qe=class{constructor(e){p(this,"name","SmartRouter");m(this,K,[]);m(this,N,[]);f(this,K,e.routers)}add(e,t,s){if(!o(this,N))throw new Error(ot);o(this,N).push([e,t,s])}match(e,t){if(!o(this,N))throw new Error("Fatal error");const s=o(this,K),r=o(this,N),n=s.length;let i=0,a;for(;i<n;i++){const d=s[i];try{for(let c=0,l=r.length;c<l;c++)d.add(...r[c]);a=d.match(e,t)}catch(c){if(c instanceof lt)continue;throw c}this.match=d.match.bind(d),f(this,K,[d]),f(this,N,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,N)||o(this,K).length!==1)throw new Error("No active router has been determined yet.");return o(this,K)[0]}},K=new WeakMap,N=new WeakMap,Qe),pe=Object.create(null),U,C,Z,ue,j,H,X,he,Yt=(he=class{constructor(t,s,r){m(this,H);m(this,U);m(this,C);m(this,Z);m(this,ue,0);m(this,j,pe);if(f(this,C,r||Object.create(null)),f(this,U,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},f(this,U,[n])}f(this,Z,[])}insert(t,s,r){f(this,ue,++Le(this,ue)._);let n=this;const i=St(s),a=[];for(let d=0,c=i.length;d<c;d++){const l=i[d],u=i[d+1],h=At(l,u),g=Array.isArray(h)?h[0]:l;if(g in o(n,C)){n=o(n,C)[g],h&&a.push(h[1]);continue}o(n,C)[g]=new he,h&&(o(n,Z).push(h),a.push(h[1])),n=o(n,C)[g]}return o(n,U).push({[t]:{handler:r,possibleKeys:a.filter((d,c,l)=>l.indexOf(d)===c),score:o(this,ue)}}),n}search(t,s){var c;const r=[];f(this,j,pe);let i=[this];const a=Ye(s),d=[];for(let l=0,u=a.length;l<u;l++){const h=a[l],g=l===u-1,w=[];for(let E=0,T=i.length;E<T;E++){const b=i[E],R=o(b,C)[h];R&&(f(R,j,o(b,j)),g?(o(R,C)["*"]&&r.push(...x(this,H,X).call(this,o(R,C)["*"],t,o(b,j))),r.push(...x(this,H,X).call(this,R,t,o(b,j)))):w.push(R));for(let L=0,Re=o(b,Z).length;L<Re;L++){const je=o(b,Z)[L],I=o(b,j)===pe?{}:{...o(b,j)};if(je==="*"){const F=o(b,C)["*"];F&&(r.push(...x(this,H,X).call(this,F,t,o(b,j))),f(F,j,I),w.push(F));continue}const[gt,He,fe]=je;if(!h&&!(fe instanceof RegExp))continue;const _=o(b,C)[gt],xt=a.slice(l).join("/");if(fe instanceof RegExp){const F=fe.exec(xt);if(F){if(I[He]=F[0],r.push(...x(this,H,X).call(this,_,t,o(b,j),I)),Object.keys(o(_,C)).length){f(_,j,I);const Te=((c=F[0].match(/\//))==null?void 0:c.length)??0;(d[Te]||(d[Te]=[])).push(_)}continue}}(fe===!0||fe.test(h))&&(I[He]=h,g?(r.push(...x(this,H,X).call(this,_,t,I,o(b,j))),o(_,C)["*"]&&r.push(...x(this,H,X).call(this,o(_,C)["*"],t,I,o(b,j)))):(f(_,j,I),w.push(_)))}}i=w.concat(d.shift()??[])}return r.length>1&&r.sort((l,u)=>l.score-u.score),[r.map(({handler:l,params:u})=>[l,u])]}},U=new WeakMap,C=new WeakMap,Z=new WeakMap,ue=new WeakMap,j=new WeakMap,H=new WeakSet,X=function(t,s,r,n){const i=[];for(let a=0,d=o(t,U).length;a<d;a++){const c=o(t,U)[a],l=c[s]||c[v],u={};if(l!==void 0&&(l.params=Object.create(null),i.push(l),r!==pe||n&&n!==pe))for(let h=0,g=l.possibleKeys.length;h<g;h++){const w=l.possibleKeys[h],E=u[l.score];l.params[w]=n!=null&&n[w]&&!E?n[w]:r[w]??(n==null?void 0:n[w]),u[l.score]=!0}}return i},he),ee,Je,Zt=(Je=class{constructor(){p(this,"name","TrieRouter");m(this,ee);f(this,ee,new Yt)}add(e,t,s){const r=et(t);if(r){for(let n=0,i=r.length;n<i;n++)o(this,ee).insert(e,r[n],s);return}o(this,ee).insert(e,t,s)}match(e,t){return o(this,ee).search(e,t)}},ee=new WeakMap,Je),ft=class extends Ft{constructor(e={}){super(e),this.router=e.router??new Jt({routers:[new Qt,new Zt]})}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,We=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,r=e.match(s);if(!r)return;let n=t[r[1]];return n&&n.startsWith("text")&&(n+="; charset=utf-8"),n},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,rs=(...e)=>{let t=e.filter(n=>n!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),r=[];for(const n of s)n===".."&&r.length>0&&r.at(-1)!==".."?r.pop():n!=="."&&r.push(n);return r.join("/")||"."},pt={br:".br",zstd:".zst",gzip:".gz"},ns=Object.keys(pt),is="index.html",as=e=>{const t=e.root??"./",s=e.path,r=e.join??rs;return async(n,i)=>{var u,h,g,w;if(n.finalized)return i();let a;if(e.path)a=e.path;else try{if(a=decodeURIComponent(n.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(a))throw new Error}catch{return await((u=e.onNotFound)==null?void 0:u.call(e,n.req.path,n)),i()}let d=r(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(a):a);e.isDir&&await e.isDir(d)&&(d=r(d,is));const c=e.getContent;let l=await c(d,n);if(l instanceof Response)return n.newResponse(l.body,l);if(l){const E=e.mimes&&We(d,e.mimes)||We(d);if(n.header("Content-Type",E||"application/octet-stream"),e.precompressed&&(!E||es.test(E))){const T=new Set((h=n.req.header("Accept-Encoding"))==null?void 0:h.split(",").map(b=>b.trim()));for(const b of ns){if(!T.has(b))continue;const R=await c(d+pt[b],n);if(R){l=R,n.header("Content-Encoding",b),n.header("Vary","Accept-Encoding",{append:!0});break}}}return await((g=e.onFound)==null?void 0:g.call(e,d,n)),n.body(l)}await((w=e.onNotFound)==null?void 0:w.call(e,d,n)),await i()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let r;t&&t.namespace?r=t.namespace:r=__STATIC_CONTENT;const n=s[e]||e;if(!n)return null;const i=await r.get(n,{type:"stream"});return i||null},ls=e=>async function(s,r){return as({...e,getContent:async i=>os(i,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,r)},cs=e=>ls(e),ds=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(i=>typeof i=="string"?i==="*"?()=>i:a=>i===a?a:null:typeof i=="function"?i:a=>i.includes(a)?a:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(a,d){var u;function c(h,g){a.res.headers.set(h,g)}const l=await r(a.req.header("origin")||"",a);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(u=s.exposeHeaders)!=null&&u.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const h=await n(a.req.header("origin")||"",a);h.length&&c("Access-Control-Allow-Methods",h.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const w=a.req.header("Access-Control-Request-Headers");w&&(g=w.split(/\s*,\s*/))}return g!=null&&g.length&&(c("Access-Control-Allow-Headers",g.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const P=new ft;P.use("/api/*",ds());P.use("/static/*",cs({root:"./public"}));P.post("/api/ocr",async e=>{try{const t=await e.req.json(),s={success:!0,data:{date:"2026-01-01",amount:45e3,vendor:"스타벅스 코리아",vat:4500,category:"식비",confidence:.95},message:"OCR 인식 완료"};return await new Promise(r=>setTimeout(r,800)),e.json(s)}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/bank-capture",async e=>{try{const t=await e.req.json(),s=[{date:"2026-01-01",merchant:"카페베네 강남점",amount:15e3,type:"withdraw",category:"식비",label:"사업추정",confidence:.88,risk_level:"low"},{date:"2026-01-02",merchant:"쿠팡 온라인결제",amount:32e3,type:"withdraw",category:"사무용품",label:"사업추정",confidence:.75,risk_level:"mid"},{date:"2026-01-03",merchant:"택시 결제",amount:8500,type:"withdraw",category:"교통비",label:"검토필요",confidence:.65,risk_level:"mid"}];return await new Promise(r=>setTimeout(r,1200)),e.json({success:!0,data:{transactions:s,summary:{total:s.length,business:s.filter(r=>r.label==="사업추정").length,review_needed:s.filter(r=>r.label==="검토필요").length}},message:"통장 내역 인식 완료"})}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/gallery-upload",async e=>{try{const t=await e.req.json(),{images:s}=t,r=s.map((n,i)=>({id:`img_${i+1}`,source:"gallery",type:i%3===0?"receipt":i%3===1?"statement":"screenshot",data:{date:`2026-01-0${i%9+1}`,amount:Math.floor(Math.random()*1e5)+5e3,vendor:["스타벅스","쿠팡","올리브영","이마트","GS25"][i%5],category:["식비","사무용품","통신비","교통비","소모품"][i%5],confidence:.7+Math.random()*.25,risk_level:i%4===0?"high":i%2===0?"mid":"low"}}));return await new Promise(n=>setTimeout(n,1500)),e.json({success:!0,data:{processed:r,summary:{total:r.length,receipts:r.filter(n=>n.type==="receipt").length,statements:r.filter(n=>n.type==="statement").length,screenshots:r.filter(n=>n.type==="screenshot").length}},message:`${r.length}개 이미지 처리 완료`})}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});P.post("/api/risk-analysis",async e=>{try{const{expense:t}=await e.req.json();let s=0,r=[];t.amount>15e4&&(s+=30,r.push("고액 거래 (15만원 초과)")),t.confidence<.7&&(s+=25,r.push("낮은 인식 신뢰도")),["기타","미분류"].includes(t.category)&&(s+=20,r.push("불명확한 카테고리")),t.currency&&t.currency!=="KRW"&&(s+=15,r.push("해외 거래"));const n=s>=50?"high":s>=25?"mid":"low",i=s>=40;return e.json({success:!0,data:{riskScore:s,riskLevel:n,riskFactors:r,reviewRecommended:i,reviewCost:i?1900:0,message:i?"전문가 검토를 권장합니다 (1,900원)":"자동 처리 가능합니다"}})}catch{return e.json({success:!1,message:"분석 오류"},400)}});P.post("/api/spot-review",async e=>{try{const{expense_id:t,user_note:s}=await e.req.json();return await new Promise(r=>setTimeout(r,800)),e.json({success:!0,data:{review_id:`review_${Date.now()}`,status:"pending",estimated_time:"24시간 이내",cost:1900,message:"전문가 검토가 요청되었습니다. 24시간 이내 답변 예정입니다."}})}catch{return e.json({success:!1,message:"요청 오류"},400)}});P.post("/api/calculate-tax",async e=>{try{const{expenses:t}=await e.req.json(),s=t.reduce((l,u)=>l+u.amount,0),r=Math.floor(s*.8),n=Math.floor(s*.1),i=Math.floor(r*.15),a=Math.floor(n*.5),d=t.filter(l=>l.risk_level==="high").length,c=t.filter(l=>l.risk_level==="mid").length;return e.json({success:!0,data:{totalExpense:s,deductible:r,vat:n,estimatedTax:i,refundEstimate:a,riskStats:{high:d,mid:c,low:t.length-d-c},summary:`총 경비: ${s.toLocaleString()}원 | 공제 가능: ${r.toLocaleString()}원 | 환급 예상: ${a.toLocaleString()}원`}})}catch{return e.json({success:!1,message:"계산 오류"},400)}});P.get("/api/faq/:lang",e=>{const t=e.req.param("lang")||"ko",s={ko:[{id:1,question:"이 플랫폼은 어떤 서비스인가요?",answer:"영수증 촬영만으로 지출 인식 → 자동 분류 → 세액 계산 → 제출/파일 생성 → 대행까지 이어지는 자동 세무신고 시스템입니다."},{id:2,question:"진짜 영수증만 찍어도 되나요?",answer:"기본 신고는 가능합니다. 다만 복잡 신고(법인·수출입·다국적)일 경우 계좌/카드/홈택스/전문가 검토를 병행합니다."},{id:3,question:"영수증이 없어도 되나요? 💡",answer:"네! 통장 캡처나 갤러리 사진만으로도 경비 처리가 가능합니다. 통장 거래 내역을 촬영하면 자동으로 경비 후보로 분류됩니다."},{id:4,question:"갤러리에 있는 사진도 사용할 수 있나요? 📸",answer:"가능합니다! 사진첩에 저장된 영수증, 스크린샷, 거래 내역 등을 한 번에 업로드하면 자동으로 분류합니다."},{id:5,question:"통장 캡처는 어떻게 하나요? 🏦",answer:"뱅킹앱 거래 내역 화면을 캡처하여 업로드하면 날짜, 거래처, 금액을 자동으로 추출하여 경비로 등록합니다."},{id:6,question:"OCR은 무엇을 인식하나요?",answer:"날짜·금액·사업자명·세율·항목·부가세를 자동 추출하며 오류 감지 시 보정 제안이 뜹니다."},{id:7,question:"세무 계산은 자동인가요?",answer:"네. AI 엔진이 과세/면세/경비 인정 비율·환급 예상액을 자동 산출하고 신고 유형에 매핑합니다."},{id:8,question:"위험도 게이지는 무엇인가요? ⚠️",answer:"각 경비 항목의 세무 리스크를 자동 분석합니다. 고위험 항목은 전문가 검토를 권장하며, 건당 1,900원에 이용 가능합니다."},{id:9,question:"건당 전문가 리뷰는 무엇인가요? 👨‍💼",answer:"애매한 항목만 골라서 세무사에게 검토 요청할 수 있습니다. 전체 대행이 아닌 필요한 부분만 1,900원에 확인받을 수 있습니다."},{id:10,question:"프리랜서도 사용할 수 있나요? 💼",answer:"네! 오히려 프리랜서와 소규모 자영업자를 위해 설계되었습니다. 간편 모드로 복잡한 메뉴 없이 3번의 클릭으로 신고 준비가 완료됩니다."},{id:11,question:"홈택스로 자동 제출되나요?",answer:"자동 제출/파일 다운로드/전문가 대행 3가지 중 선택합니다. 홈택스 XML·CSV 출력도 지원합니다."},{id:12,question:"어떤 세금이 지원되나요?",answer:"부가세, 종소세 단순 신고, 프리랜서·1인사업자 경비처리 중심이며, 법인·무역은 전문가 옵션이 활성화됩니다."},{id:13,question:"예상 환급액도 보이나요?",answer:'영수증 누적 시 상단에 "예상 세금/환급 미터기"가 실시간으로 표시됩니다.'},{id:14,question:"자동 분류 정확도는 어느 정도인가요?",answer:"업종/금액/가맹점 패턴 기반 추천이며, 반복 사용 시 사용자/업종별로 정밀도가 개선됩니다."},{id:15,question:"똑같은 영수증이 중복되면요?",answer:"중복 인식 방지 및 중복 경고가 자동 표시됩니다."},{id:16,question:"실수하면 수정할 수 있나요?",answer:"OCR 결과는 즉시 수정 가능하며, 수정 기록은 로그로 남아 증빙에 포함됩니다."},{id:17,question:"세무사 비용이 부담됩니다 💸",answer:"무료 자동신고(소규모), 건당 리뷰(1,900원), 전면 대행(월 정액) 중 선택 가능합니다. 필요한 만큼만 비용을 지불하세요."},{id:18,question:"간편 모드는 무엇인가요? ⚡",answer:'복잡한 메뉴 없이 "갤러리 선택 → 1클릭 분류 → 자동 계산 → 제출" 4단계로 끝나는 초간단 워크플로우입니다.'}],en:[{id:1,question:"What is this platform?",answer:"An automated tax filing system: Receipt capture → Automatic classification → Tax calculation → Submission/File generation → Delegation."},{id:2,question:"Can I just take a photo of the receipt?",answer:"Basic filing is possible. For complex cases (corporate, import/export, multinational), we recommend combining with bank/card/tax system review."},{id:3,question:"What does OCR recognize?",answer:"Automatically extracts date, amount, business name, tax rate, category, and VAT. Suggests corrections when errors are detected."},{id:4,question:"Is tax calculation automatic?",answer:"Yes. AI engine automatically calculates taxable/exempt/deductible ratios and estimated refunds, mapping to filing types."},{id:5,question:"Does it auto-submit to tax authority?",answer:"Choose from 3 options: Auto-submission, File download, Expert delegation. Supports XML/CSV formats."},{id:6,question:"What taxes are supported?",answer:"VAT, simple income tax for freelancers and sole proprietors. Corporate/trade cases activate expert options."},{id:7,question:"Can I see estimated refunds?",answer:'As receipts accumulate, a real-time "Tax/Refund Meter" displays at the top.'},{id:8,question:"How accurate is auto-classification?",answer:"Based on industry/amount/merchant patterns. Improves with repeated use per user/industry."},{id:9,question:"What if I scan duplicate receipts?",answer:"Duplicate detection prevents and warns automatically."},{id:10,question:"Can I correct mistakes?",answer:"OCR results are immediately editable, and correction history is logged for documentation."}],zh:[{id:1,question:"这个平台是什么服务？",answer:"仅需拍摄收据即可实现支出识别 → 自动分类 → 税额计算 → 提交/文件生成 → 代办的自动报税系统。"},{id:2,question:"真的只需拍摄收据就可以吗？",answer:"基本申报可行。但复杂申报（法人、进出口、跨国）需结合账户/卡片/税务系统/专家审核。"},{id:3,question:"OCR识别什么内容？",answer:"自动提取日期、金额、商家名称、税率、项目、增值税，并在检测到错误时提供修正建议。"},{id:4,question:"税务计算是自动的吗？",answer:"是的。AI引擎自动计算应税/免税/费用认定比率和预计退税额，并映射到申报类型。"},{id:5,question:"自动提交到税务局吗？",answer:"可选择3种方式：自动提交/文件下载/专家代办。支持XML/CSV格式输出。"},{id:6,question:"支持哪些税种？",answer:"增值税、简易所得税申报，以自由职业者和个体户费用处理为中心，法人和贸易业务会启用专家选项。"},{id:7,question:"能看到预计退税额吗？",answer:'收据累积时，顶部会实时显示"预计税额/退税仪表盘"。'},{id:8,question:"自动分类准确度如何？",answer:"基于行业/金额/商家模式推荐，重复使用时按用户/行业提高精度。"},{id:9,question:"如果扫描重复收据怎么办？",answer:"自动检测重复并显示警告。"},{id:10,question:"能修正错误吗？",answer:"OCR结果可立即修改，修改记录会记录在日志中作为凭证。"}],ja:[{id:1,question:"このプラットフォームは何のサービスですか？",answer:"レシート撮影だけで支出認識 → 自動分類 → 税額計算 → 提出/ファイル生成 → 代行までつながる自動税務申告システムです。"},{id:2,question:"本当にレシートを撮るだけでいいですか？",answer:"基本申告は可能です。ただし複雑な申告（法人・輸出入・多国籍）の場合、口座/カード/税務システム/専門家の検討を併用します。"},{id:3,question:"OCRは何を認識しますか？",answer:"日付・金額・事業者名・税率・項目・付加税を自動抽出し、エラー検出時には修正提案が表示されます。"},{id:4,question:"税務計算は自動ですか？",answer:"はい。AIエンジンが課税/免税/経費認定比率・還付予想額を自動算出し、申告タイプにマッピングします。"},{id:5,question:"税務署へ自動提出されますか？",answer:"自動提出/ファイルダウンロード/専門家代行の3つから選択します。XML・CSV出力もサポートします。"},{id:6,question:"どの税金に対応していますか？",answer:"付加価値税、簡易所得税申告、フリーランス・個人事業主の経費処理を中心とし、法人・貿易は専門家オプションが有効になります。"},{id:7,question:"予想還付額も見えますか？",answer:"レシート累積時、上部に「予想税金/還付メーター」がリアルタイム表示されます。"},{id:8,question:"自動分類の精度はどの程度ですか？",answer:"業種/金額/加盟店パターンベースの推奨で、繰り返し使用時にユーザー/業種別に精度が向上します。"},{id:9,question:"同じレシートが重複したら？",answer:"重複認識防止および重複警告が自動表示されます。"},{id:10,question:"ミスしたら修正できますか？",answer:"OCR結果は即座に修正可能で、修正記録はログに残り証憑に含まれます。"}],de:[{id:1,question:"Was ist diese Plattform?",answer:"Ein automatisches Steuererklärungssystem: Belegerfassung → Automatische Klassifizierung → Steuerberechnung → Einreichung/Dateierstellung → Delegation."},{id:2,question:"Reicht es wirklich, nur ein Foto des Belegs zu machen?",answer:"Grundlegende Erklärungen sind möglich. Bei komplexen Fällen (Unternehmen, Import/Export, multinational) empfehlen wir die Kombination mit Bank-/Karten-/Steuersystem-Prüfung."},{id:3,question:"Was erkennt die OCR?",answer:"Extrahiert automatisch Datum, Betrag, Firmenname, Steuersatz, Kategorie und Mehrwertsteuer. Schlägt Korrekturen vor, wenn Fehler erkannt werden."},{id:4,question:"Ist die Steuerberechnung automatisch?",answer:"Ja. Die KI-Engine berechnet automatisch steuerpflichtige/steuerfreie/abzugsfähige Verhältnisse und geschätzte Rückerstattungen und ordnet sie den Erklärungstypen zu."},{id:5,question:"Wird automatisch an das Finanzamt übermittelt?",answer:"Wählen Sie aus 3 Optionen: Automatische Übermittlung, Datei-Download, Experten-Delegation. Unterstützt XML/CSV-Formate."},{id:6,question:"Welche Steuern werden unterstützt?",answer:"Mehrwertsteuer, einfache Einkommensteuer für Freiberufler und Einzelunternehmer. Bei Unternehmen/Handel werden Expertenoptionen aktiviert."},{id:7,question:"Kann ich geschätzte Rückerstattungen sehen?",answer:'Wenn sich Belege ansammeln, wird oben ein Echtzeit-"Steuer-/Rückerstattungsmesser" angezeigt.'},{id:8,question:"Wie genau ist die automatische Klassifizierung?",answer:"Basierend auf Branchen-/Betrags-/Händlermustern. Verbessert sich bei wiederholter Nutzung pro Benutzer/Branche."},{id:9,question:"Was ist, wenn ich doppelte Belege scanne?",answer:"Duplikaterkennung verhindert und warnt automatisch."},{id:10,question:"Kann ich Fehler korrigieren?",answer:"OCR-Ergebnisse sind sofort editierbar, und der Korrekturverlauf wird protokolliert für die Dokumentation."}],es:[{id:1,question:"¿Qué es esta plataforma?",answer:"Un sistema automatizado de declaración de impuestos: Captura de recibos → Clasificación automática → Cálculo de impuestos → Presentación/Generación de archivos → Delegación."},{id:2,question:"¿Realmente solo necesito tomar una foto del recibo?",answer:"La declaración básica es posible. Para casos complejos (corporativos, importación/exportación, multinacionales), recomendamos combinar con revisión bancaria/tarjeta/sistema fiscal."},{id:3,question:"¿Qué reconoce el OCR?",answer:"Extrae automáticamente fecha, monto, nombre comercial, tasa impositiva, categoría e IVA. Sugiere correcciones cuando se detectan errores."},{id:4,question:"¿El cálculo de impuestos es automático?",answer:"Sí. El motor AI calcula automáticamente proporciones gravables/exentas/deducibles y reembolsos estimados, mapeando a tipos de declaración."},{id:5,question:"¿Se presenta automáticamente a la autoridad fiscal?",answer:"Elija entre 3 opciones: Presentación automática, Descarga de archivos, Delegación de expertos. Admite formatos XML/CSV."},{id:6,question:"¿Qué impuestos se admiten?",answer:"IVA, impuesto sobre la renta simple para autónomos y empresarios individuales. Los casos corporativos/comerciales activan opciones de expertos."},{id:7,question:"¿Puedo ver reembolsos estimados?",answer:'A medida que se acumulan recibos, se muestra un "Medidor de Impuestos/Reembolsos" en tiempo real en la parte superior.'},{id:8,question:"¿Qué tan precisa es la clasificación automática?",answer:"Basado en patrones de industria/monto/comerciante. Mejora con el uso repetido por usuario/industria."},{id:9,question:"¿Qué pasa si escaneo recibos duplicados?",answer:"La detección de duplicados previene y advierte automáticamente."},{id:10,question:"¿Puedo corregir errores?",answer:"Los resultados de OCR son editables inmediatamente, y el historial de correcciones se registra para documentación."}]};return e.json({success:!0,data:s[t]||s.ko})});P.get("/",e=>e.html(`
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>세무신고 플랫폼 - 영수증 촬영으로 세무신고 완료</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/style.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 min-h-screen">
    <!-- 네비게이션 -->
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-receipt text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"></i>
                    <span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">세무신고 플랫폼</span>
                </div>
                <div class="hidden md:flex items-center space-x-6">
                    <a href="#" class="text-gray-700 hover:text-purple-600 transition">공지</a>
                    <a href="#" class="text-gray-700 hover:text-purple-600 transition">로그인</a>
                    <button class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">회원가입</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- 메인 컨텐츠 -->
    <div class="pt-24 pb-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- 헤더 섹션 -->
            <div class="text-center mb-12 animate-fade-in">
                <h1 class="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                    영수증만 사진 찍으면<br>세무신고 끝!
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    OCR 자동인식 → 자동분류 → 세액계산 → 제출까지 한 번에
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <button class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:-translate-y-1">
                        <i class="fas fa-camera mr-2"></i>
                        지금 시작하기
                    </button>
                    <button class="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition border-2 border-purple-600">
                        <i class="fas fa-play mr-2"></i>
                        시연 영상 보기
                    </button>
                </div>
            </div>

            <!-- 프리랜서 전용 안내 배너 -->
            <div class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl shadow-2xl p-6 md:p-8 mb-12 text-white">
                <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div class="flex-1">
                        <h3 class="text-2xl md:text-3xl font-bold mb-3">
                            <i class="fas fa-lightbulb mr-2"></i>
                            영수증 없어도 괜찮습니다!
                        </h3>
                        <p class="text-lg opacity-90 mb-2">
                            ✅ 통장 캡처만으로 경비 처리 가능<br>
                            ✅ 갤러리 사진 한 번에 업로드<br>
                            ✅ 건당 1,900원 전문가 검토 (필요시만)
                        </p>
                    </div>
                    <div class="flex flex-col gap-3">
                        <button onclick="document.getElementById('bankCaptureSection').scrollIntoView({behavior:'smooth'})" class="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:shadow-xl transition transform hover:scale-105">
                            <i class="fas fa-university mr-2"></i>
                            통장 캡처하기
                        </button>
                        <button onclick="document.getElementById('gallerySection').scrollIntoView({behavior:'smooth'})" class="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:shadow-xl transition transform hover:scale-105">
                            <i class="fas fa-images mr-2"></i>
                            갤러리 업로드
                        </button>
                    </div>
                </div>
            </div>

            <!-- 간편 모드 선택 -->
            <div class="grid md:grid-cols-3 gap-6 mb-12">
                <button onclick="switchMode('receipt')" class="mode-btn bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center border-4 border-transparent hover:border-purple-600">
                    <i class="fas fa-camera text-5xl text-purple-600 mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">영수증 촬영</h3>
                    <p class="text-gray-600 text-sm">정식 영수증이 있을 때</p>
                </button>
                <button onclick="switchMode('bank')" class="mode-btn bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center border-4 border-transparent hover:border-green-600">
                    <i class="fas fa-university text-5xl text-green-600 mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">통장 캡처 💡</h3>
                    <p class="text-gray-600 text-sm">영수증 없을 때</p>
                </button>
                <button onclick="switchMode('gallery')" class="mode-btn bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center border-4 border-transparent hover:border-blue-600">
                    <i class="fas fa-images text-5xl text-blue-600 mb-3"></i>
                    <h3 class="text-xl font-bold mb-2">갤러리 업로드 📸</h3>
                    <p class="text-gray-600 text-sm">사진첩에 있을 때</p>
                </button>
            </div>

            <!-- 통장 캡처 섹션 (신규) -->
            <div id="bankCaptureSection" class="hidden bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">
                    <i class="fas fa-university text-green-600 mr-3"></i>
                    통장 거래내역 캡처하기
                </h2>
                <p class="text-center text-gray-600 mb-8">뱅킹앱 거래내역 화면을 촬영하면 자동으로 경비로 분류합니다</p>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="border-4 border-dashed border-green-300 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-green-600 transition bg-gradient-to-br from-green-50 to-emerald-50">
                        <div class="w-full max-w-md text-center space-y-4">
                            <i class="fas fa-mobile-alt text-6xl text-green-600 animate-bounce"></i>
                            <p class="text-lg text-gray-700 font-semibold">통장 화면을 촬영하세요</p>
                            <p class="text-sm text-gray-500">거래내역이 보이는 화면을 캡처</p>
                            <input type="file" id="bankInput" accept="image/*" capture="environment" class="hidden">
                            <button onclick="document.getElementById('bankInput').click()" class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                                <i class="fas fa-upload mr-2"></i>
                                통장 사진 선택
                            </button>
                        </div>
                        <div id="bankPreviewArea" class="hidden mt-4 w-full">
                            <img id="bankPreviewImage" class="w-full rounded-lg shadow-md">
                            <button id="analyzeBankBtn" class="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                                <i class="fas fa-magic mr-2"></i>
                                거래내역 분석 시작
                            </button>
                        </div>
                    </div>

                    <div id="bankResults" class="hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                        <h3 class="text-xl font-bold mb-4 text-gray-800">
                            <i class="fas fa-check-circle text-green-600 mr-2"></i>
                            거래내역 인식 결과
                        </h3>
                        <div id="bankTransactions" class="space-y-3 max-h-96 overflow-y-auto">
                            <!-- 동적으로 생성됨 -->
                        </div>
                        <button id="addBankExpensesBtn" class="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                            <i class="fas fa-plus-circle mr-2"></i>
                            선택 항목 경비에 추가
                        </button>
                    </div>
                </div>
            </div>

            <!-- 갤러리 업로드 섹션 (신규) -->
            <div id="gallerySection" class="hidden bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">
                    <i class="fas fa-images text-blue-600 mr-3"></i>
                    갤러리 사진 일괄 업로드
                </h2>
                <p class="text-center text-gray-600 mb-8">사진첩에 저장된 영수증, 스크린샷 등을 한 번에 업로드하세요</p>
                
                <div class="border-4 border-dashed border-blue-300 rounded-2xl p-8 hover:border-blue-600 transition bg-gradient-to-br from-blue-50 to-indigo-50 mb-6">
                    <div class="text-center space-y-4">
                        <i class="fas fa-cloud-upload-alt text-6xl text-blue-600 animate-bounce"></i>
                        <p class="text-lg text-gray-700 font-semibold">여러 사진을 한 번에 선택하세요</p>
                        <p class="text-sm text-gray-500">최대 20장까지 동시 업로드 가능</p>
                        <input type="file" id="galleryInput" accept="image/*" multiple class="hidden">
                        <button onclick="document.getElementById('galleryInput').click()" class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                            <i class="fas fa-upload mr-2"></i>
                            사진 선택 (여러 개 가능)
                        </button>
                        <div id="galleryFileCount" class="hidden text-sm text-blue-600 font-semibold"></div>
                    </div>
                </div>

                <div id="galleryResults" class="hidden">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold text-gray-800">
                            <i class="fas fa-check-circle text-blue-600 mr-2"></i>
                            인식 결과 (<span id="galleryCount">0</span>개)
                        </h3>
                        <button id="processGalleryBtn" class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                            <i class="fas fa-magic mr-2"></i>
                            일괄 분석 시작
                        </button>
                    </div>
                    <div id="galleryGrid" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <!-- 동적으로 생성됨 -->
                    </div>
                    <div id="galleryProcessedResults" class="hidden space-y-3 max-h-96 overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                        <!-- 동적으로 생성됨 -->
                    </div>
                    <button id="addGalleryExpensesBtn" class="hidden w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                        <i class="fas fa-plus-circle mr-2"></i>
                        모두 경비에 추가
                    </button>
                </div>
            </div>

            <!-- 영수증 촬영 섹션 -->
            <div id="receiptSection" class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
                    <i class="fas fa-camera text-purple-600 mr-3"></i>
                    영수증 촬영하기
                </h2>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- 촬영 영역 -->
                    <div class="border-4 border-dashed border-purple-300 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-purple-600 transition bg-gradient-to-br from-purple-50 to-blue-50">
                        <div id="cameraArea" class="w-full max-w-md">
                            <div class="text-center space-y-4">
                                <i class="fas fa-camera text-6xl text-purple-600 animate-bounce"></i>
                                <p class="text-lg text-gray-700 font-semibold">영수증을 촬영하세요</p>
                                <p class="text-sm text-gray-500">또는 파일을 업로드하세요</p>
                                <input type="file" id="receiptInput" accept="image/*" capture="environment" class="hidden">
                                <button onclick="document.getElementById('receiptInput').click()" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                                    <i class="fas fa-upload mr-2"></i>
                                    사진 선택
                                </button>
                            </div>
                            <div id="previewArea" class="hidden mt-4">
                                <img id="previewImage" class="w-full rounded-lg shadow-md">
                                <button id="analyzeBtn" class="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                                    <i class="fas fa-magic mr-2"></i>
                                    OCR 분석 시작
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- OCR 결과 영역 -->
                    <div id="ocrResults" class="hidden bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                        <h3 class="text-xl font-bold mb-4 text-gray-800">
                            <i class="fas fa-check-circle text-green-600 mr-2"></i>
                            OCR 인식 결과
                        </h3>
                        <div id="ocrData" class="space-y-3">
                            <!-- 동적으로 생성됨 -->
                        </div>
                        <button id="addExpenseBtn" class="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                            <i class="fas fa-plus-circle mr-2"></i>
                            경비 목록에 추가
                        </button>
                    </div>
                </div>
            </div>

            <!-- 경비 목록 섹션 -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-3xl font-bold text-gray-800">
                        <i class="fas fa-list text-blue-600 mr-3"></i>
                        경비 목록
                    </h2>
                    <button id="calculateBtn" class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                        <i class="fas fa-calculator mr-2"></i>
                        세금 계산하기
                    </button>
                </div>
                <div id="expenseList" class="space-y-3">
                    <p class="text-gray-500 text-center py-8">영수증을 추가하세요</p>
                </div>
            </div>

            <!-- 세금 계산 결과 -->
            <div id="taxResult" class="hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
                    <i class="fas fa-chart-line text-green-600 mr-3"></i>
                    세금 계산 결과
                </h2>
                <div id="taxSummary" class="grid md:grid-cols-4 gap-6">
                    <!-- 동적으로 생성됨 -->
                </div>
            </div>

            <!-- 주요 기능 -->
            <div class="grid md:grid-cols-4 gap-6 mb-12">
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center">
                    <i class="fas fa-camera text-5xl text-purple-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">영수증 촬영</h3>
                    <p class="text-gray-600">사진만 찍으면<br>자동 인식</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center">
                    <i class="fas fa-magic text-5xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">자동 분류</h3>
                    <p class="text-gray-600">AI가 경비를<br>자동 분류</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center">
                    <i class="fas fa-calculator text-5xl text-green-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">세액 계산</h3>
                    <p class="text-gray-600">실시간<br>세금 계산</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center">
                    <i class="fas fa-file-export text-5xl text-pink-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">자동 제출</h3>
                    <p class="text-gray-600">홈택스 XML<br>자동 생성</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 챗봇 아이콘 -->
    <div id="chatbotIcon" class="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:shadow-2xl transition transform hover:scale-110 z-50">
        <i class="fas fa-comments text-2xl"></i>
        <div class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">?</div>
    </div>

    <!-- 챗봇 윈도우 -->
    <div id="chatbotWindow" class="hidden fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl w-96 max-h-[600px] flex flex-col z-50">
        <!-- 챗봇 헤더 -->
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i class="fas fa-robot text-xl"></i>
                </div>
                <div>
                    <h3 class="font-bold">세무신고 도우미</h3>
                    <p class="text-xs opacity-90">온라인</p>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex space-x-1 bg-white bg-opacity-20 rounded-full px-2 py-1">
                    <button class="lang-btn text-lg hover:scale-110 transition" data-lang="ko" title="한국어">🇰🇷</button>
                    <button class="lang-btn text-lg hover:scale-110 transition" data-lang="en" title="English">🇺🇸</button>
                    <button class="lang-btn text-lg hover:scale-110 transition" data-lang="zh" title="中文">🇨🇳</button>
                    <button class="lang-btn text-lg hover:scale-110 transition" data-lang="ja" title="日本語">🇯🇵</button>
                </div>
                <button id="closeChatbot" class="hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <!-- FAQ 리스트 -->
        <div id="faqList" class="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div class="mb-4">
                <input type="text" id="faqSearch" placeholder="검색..." class="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-purple-600">
            </div>
            <div id="faqItems" class="space-y-2">
                <!-- 동적으로 생성됨 -->
            </div>
        </div>
    </div>

    <script src="/static/app.js"><\/script>
</body>
</html>
  `));const Ve=new ft,us=Object.assign({"/src/index.tsx":P});let mt=!1;for(const[,e]of Object.entries(us))e&&(Ve.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ve.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),mt=!0);if(!mt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ve as default};
