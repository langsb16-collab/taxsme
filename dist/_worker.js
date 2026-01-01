var vt=Object.defineProperty;var Me=e=>{throw TypeError(e)};var xt=(e,t,s)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>xt(e,typeof t!="symbol"?t+"":t,s),Ie=(e,t,s)=>t.has(e)||Me("Cannot "+s);var o=(e,t,s)=>(Ie(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?Me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,r)=>(Ie(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),y=(e,t,s)=>(Ie(e,t,"access private method"),s);var De=(e,t,s,r)=>({set _(i){f(e,t,i,s)},get _(){return o(e,t,r)}});var Fe=(e,t,s)=>(r,i)=>{let n=-1;return a(0);async function a(d){if(d<=n)throw new Error("next() called multiple times");n=d;let c,l=!1,h;if(e[d]?(h=e[d][0][0],r.req.routeIndex=d):h=d===e.length&&i||void 0,h)try{c=await h(r,()=>a(d+1))}catch(u){if(u instanceof Error&&t)r.error=u,c=await t(u,r),l=!0;else throw u}else r.finalized===!1&&s&&(c=await s(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},bt=Symbol(),wt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,n=(e instanceof rt?e.raw.headers:e.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?Et(e,{all:s,dot:r}):{}};async function Et(e,t){const s=await e.formData();return s?jt(s,t):{}}function jt(e,t){const s=Object.create(null);return e.forEach((r,i)=>{t.all||i.endsWith("[]")?Rt(s,i,r):s[i]=r}),t.dot&&Object.entries(s).forEach(([r,i])=>{r.includes(".")&&(Ot(s,r,i),delete s[r])}),s}var Rt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Ot=(e,t,s)=>{let r=e;const i=t.split(".");i.forEach((n,a)=>{a===i.length-1?r[n]=s:((!r[n]||typeof r[n]!="object"||Array.isArray(r[n])||r[n]instanceof File)&&(r[n]=Object.create(null)),r=r[n])})},Qe=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},St=e=>{const{groups:t,path:s}=At(e),r=Qe(s);return Ct(r,t)},At=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const i=`@${r}`;return t.push([i,s]),i}),{groups:t,path:e}},Ct=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(r)){e[i]=e[i].replace(r,t[s][1]);break}}return e},Oe={},kt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Oe[r]||(s[2]?Oe[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Oe[r]=[e,s[1],!0]),Oe[r]}return null},qe=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Pt=e=>qe(e,decodeURI),Ze=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const i=t.charCodeAt(r);if(i===37){const n=t.indexOf("?",r),a=t.slice(s,n===-1?void 0:n);return Pt(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(i===63)break}return t.slice(s,r)},Tt=e=>{const t=Ze(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},re=(e,t,...s)=>(s.length&&(t=re(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),et=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))r+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&r===""?s.push("/"):s.push(r);const n=i.replace("?","");r+="/"+n,s.push(r)}else r+="/"+i}),s.filter((i,n,a)=>a.indexOf(i)===n)},Ne=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?qe(e,st):e):e,tt=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const d=e.charCodeAt(a+t.length+1);if(d===61){const c=a+t.length+2,l=e.indexOf("&",c);return Ne(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const i={};r??(r=/[%+]/.test(e));let n=e.indexOf("?",8);for(;n!==-1;){const a=e.indexOf("&",n+1);let d=e.indexOf("=",n);d>a&&a!==-1&&(d=-1);let c=e.slice(n+1,d===-1?a===-1?void 0:a:d);if(r&&(c=Ne(c)),n=a,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,a===-1?void 0:a),r&&(l=Ne(l))),s?(i[c]&&Array.isArray(i[c])||(i[c]=[]),i[c].push(l)):i[c]??(i[c]=l)}return t?i[t]:i},_t=tt,It=(e,t)=>tt(e,t,!0),st=decodeURIComponent,Le=e=>qe(e,st),ae,A,M,it,nt,$e,L,We,rt=(We=class{constructor(e,t="/",s=[[]]){m(this,M);p(this,"raw");m(this,ae);m(this,A);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});m(this,L,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const i=Object.keys(t)[0];return i?t[i].then(n=>(i==="json"&&(n=JSON.stringify(n)),new Response(n)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,A,s),f(this,ae,{})}param(e){return e?y(this,M,it).call(this,e):y(this,M,nt).call(this)}query(e){return _t(this.url,e)}queries(e){return It(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await wt(this,e))}json(){return o(this,L).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,L).call(this,"text")}arrayBuffer(){return o(this,L).call(this,"arrayBuffer")}blob(){return o(this,L).call(this,"blob")}formData(){return o(this,L).call(this,"formData")}addValidatedData(e,t){o(this,ae)[e]=t}valid(e){return o(this,ae)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[bt](){return o(this,A)}get matchedRoutes(){return o(this,A)[0].map(([[,e]])=>e)}get routePath(){return o(this,A)[0].map(([[,e]])=>e)[this.routeIndex].path}},ae=new WeakMap,A=new WeakMap,M=new WeakSet,it=function(e){const t=o(this,A)[0][this.routeIndex][1][e],s=y(this,M,$e).call(this,t);return s&&/\%/.test(s)?Le(s):s},nt=function(){const e={},t=Object.keys(o(this,A)[0][this.routeIndex][1]);for(const s of t){const r=y(this,M,$e).call(this,o(this,A)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?Le(r):r)}return e},$e=function(e){return o(this,A)[1]?o(this,A)[1][e]:e},L=new WeakMap,We),Nt={Stringify:1},at=async(e,t,s,r,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const n=e.callbacks;return n!=null&&n.length?(i?i[0]+=e:i=[e],Promise.all(n.map(d=>d({phase:t,buffer:i,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(c=>at(c,t,!1,r,i))).then(()=>i[0]))):Promise.resolve(e)},Ht="text/plain; charset=UTF-8",He=(e,t)=>({"Content-Type":e,...t}),ye,ve,H,oe,$,S,xe,le,ce,X,be,we,B,ie,Ke,$t=(Ke=class{constructor(e,t){m(this,B);m(this,ye);m(this,ve);p(this,"env",{});m(this,H);p(this,"finalized",!1);p(this,"error");m(this,oe);m(this,$);m(this,S);m(this,xe);m(this,le);m(this,ce);m(this,X);m(this,be);m(this,we);p(this,"render",(...e)=>(o(this,le)??f(this,le,t=>this.html(t)),o(this,le).call(this,...e)));p(this,"setLayout",e=>f(this,xe,e));p(this,"getLayout",()=>o(this,xe));p(this,"setRenderer",e=>{f(this,le,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,S,new Response(o(this,S).body,o(this,S)));const r=o(this,S)?o(this,S).headers:o(this,X)??f(this,X,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});p(this,"status",e=>{f(this,oe,e)});p(this,"set",(e,t)=>{o(this,H)??f(this,H,new Map),o(this,H).set(e,t)});p(this,"get",e=>o(this,H)?o(this,H).get(e):void 0);p(this,"newResponse",(...e)=>y(this,B,ie).call(this,...e));p(this,"body",(e,t,s)=>y(this,B,ie).call(this,e,t,s));p(this,"text",(e,t,s)=>!o(this,X)&&!o(this,oe)&&!t&&!s&&!this.finalized?new Response(e):y(this,B,ie).call(this,e,t,He(Ht,s)));p(this,"json",(e,t,s)=>y(this,B,ie).call(this,JSON.stringify(e),t,He("application/json",s)));p(this,"html",(e,t,s)=>{const r=i=>y(this,B,ie).call(this,i,t,He("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,Nt.Stringify,!1,{}).then(r):r(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(o(this,ce)??f(this,ce,()=>new Response),o(this,ce).call(this,this)));f(this,ye,e),t&&(f(this,$,t.executionCtx),this.env=t.env,f(this,ce,t.notFoundHandler),f(this,we,t.path),f(this,be,t.matchResult))}get req(){return o(this,ve)??f(this,ve,new rt(o(this,ye),o(this,we),o(this,be))),o(this,ve)}get event(){if(o(this,$)&&"respondWith"in o(this,$))return o(this,$);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,$))return o(this,$);throw Error("This context has no ExecutionContext")}get res(){return o(this,S)||f(this,S,new Response(null,{headers:o(this,X)??f(this,X,new Headers)}))}set res(e){if(o(this,S)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,S).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=o(this,S).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of r)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}f(this,S,e),this.finalized=!0}get var(){return o(this,H)?Object.fromEntries(o(this,H)):{}}},ye=new WeakMap,ve=new WeakMap,H=new WeakMap,oe=new WeakMap,$=new WeakMap,S=new WeakMap,xe=new WeakMap,le=new WeakMap,ce=new WeakMap,X=new WeakMap,be=new WeakMap,we=new WeakMap,B=new WeakSet,ie=function(e,t,s){const r=o(this,S)?new Headers(o(this,S).headers):o(this,X)??new Headers;if(typeof t=="object"&&"headers"in t){const n=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,d]of n)a.toLowerCase()==="set-cookie"?r.append(a,d):r.set(a,d)}if(s)for(const[n,a]of Object.entries(s))if(typeof a=="string")r.set(n,a);else{r.delete(n);for(const d of a)r.append(n,d)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,oe);return new Response(e,{status:i,headers:r})},Ke),b="ALL",qt="all",zt=["get","post","put","delete","options","patch"],ot="Can not add a route since the matcher is already built.",lt=class extends Error{},Mt="__COMPOSED_HANDLER",Dt=e=>e.text("404 Not Found",404),Be=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},C,w,ct,k,V,Se,Ae,de,Ft=(de=class{constructor(t={}){m(this,w);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");m(this,C,"/");p(this,"routes",[]);m(this,k,Dt);p(this,"errorHandler",Be);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,k,t),this));p(this,"fetch",(t,...s)=>y(this,w,Ae).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,r,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${re("/",t)}`,s),r,i)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(y(this,w,Ae).call(this,t.request,t,void 0,t.request.method))})});[...zt,qt].forEach(n=>{this[n]=(a,...d)=>(typeof a=="string"?f(this,C,a):y(this,w,V).call(this,n,o(this,C),a),d.forEach(c=>{y(this,w,V).call(this,n,o(this,C),c)}),this)}),this.on=(n,a,...d)=>{for(const c of[a].flat()){f(this,C,c);for(const l of[n].flat())d.map(h=>{y(this,w,V).call(this,l.toUpperCase(),o(this,C),h)})}return this},this.use=(n,...a)=>(typeof n=="string"?f(this,C,n):(f(this,C,"*"),a.unshift(n)),a.forEach(d=>{y(this,w,V).call(this,b,o(this,C),d)}),this);const{strict:r,...i}=t;Object.assign(this,i),this.getPath=r??!0?t.getPath??Ze:Tt}route(t,s){const r=this.basePath(t);return s.routes.map(i=>{var a;let n;s.errorHandler===Be?n=i.handler:(n=async(d,c)=>(await Fe([],s.errorHandler)(d,()=>i.handler(d,c))).res,n[Mt]=i.handler),y(a=r,w,V).call(a,i.method,i.path,n)}),this}basePath(t){const s=y(this,w,ct).call(this);return s._basePath=re(this._basePath,t),s}mount(t,s,r){let i,n;r&&(typeof r=="function"?n=r:(n=r.optionHandler,r.replaceRequest===!1?i=c=>c:i=r.replaceRequest));const a=n?c=>{const l=n(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};i||(i=(()=>{const c=re(this._basePath,t),l=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,h)}})());const d=async(c,l)=>{const h=await s(i(c.req.raw),...a(c));if(h)return h;await l()};return y(this,w,V).call(this,b,re(t,"*"),d),this}},C=new WeakMap,w=new WeakSet,ct=function(){const t=new de({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,k,o(this,k)),t.routes=this.routes,t},k=new WeakMap,V=function(t,s,r){t=t.toUpperCase(),s=re(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,i]),this.routes.push(i)},Se=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ae=function(t,s,r,i){if(i==="HEAD")return(async()=>new Response(null,await y(this,w,Ae).call(this,t,s,r,"GET")))();const n=this.getPath(t,{env:r}),a=this.router.match(i,n),d=new $t(t,{path:n,matchResult:a,env:r,executionCtx:s,notFoundHandler:o(this,k)});if(a[0].length===1){let l;try{l=a[0][0][0][0](d,async()=>{d.res=await o(this,k).call(this,d)})}catch(h){return y(this,w,Se).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:o(this,k).call(this,d))).catch(h=>y(this,w,Se).call(this,h,d)):l??o(this,k).call(this,d)}const c=Fe(a[0],this.errorHandler,o(this,k));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return y(this,w,Se).call(this,l,d)}})()},de),dt=[];function Lt(e,t){const s=this.buildAllMatchers(),r=((i,n)=>{const a=s[i]||s[b],d=a[2][n];if(d)return d;const c=n.match(a[0]);if(!c)return[[],dt];const l=c.indexOf("",1);return[a[1][l],c]});return this.match=r,r(e,t)}var ke="[^/]+",me=".*",ge="(?:|/.*)",ne=Symbol(),Bt=new Set(".\\+*[^]$()");function Ut(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===me||e===ge?1:t===me||t===ge?-1:e===ke?1:t===ke?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Y,Q,P,te,Gt=(te=class{constructor(){m(this,Y);m(this,Q);m(this,P,Object.create(null))}insert(t,s,r,i,n){if(t.length===0){if(o(this,Y)!==void 0)throw ne;if(n)return;f(this,Y,s);return}const[a,...d]=t,c=a==="*"?d.length===0?["","",me]:["","",ke]:a==="/*"?["","",ge]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let u=c[2]||ke;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ne;if(l=o(this,P)[u],!l){if(Object.keys(o(this,P)).some(g=>g!==me&&g!==ge))throw ne;if(n)return;l=o(this,P)[u]=new te,h!==""&&f(l,Q,i.varIndex++)}!n&&h!==""&&r.push([h,o(l,Q)])}else if(l=o(this,P)[a],!l){if(Object.keys(o(this,P)).some(h=>h.length>1&&h!==me&&h!==ge))throw ne;if(n)return;l=o(this,P)[a]=new te}l.insert(d,s,r,i,n)}buildRegExpStr(){const s=Object.keys(o(this,P)).sort(Ut).map(r=>{const i=o(this,P)[r];return(typeof o(i,Q)=="number"?`(${r})@${o(i,Q)}`:Bt.has(r)?`\\${r}`:r)+i.buildRegExpStr()});return typeof o(this,Y)=="number"&&s.unshift(`#${o(this,Y)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Y=new WeakMap,Q=new WeakMap,P=new WeakMap,te),Pe,Ee,Ve,Wt=(Ve=class{constructor(){m(this,Pe,{varIndex:0});m(this,Ee,new Gt)}insert(e,t,s){const r=[],i=[];for(let a=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${a}`;return i[a]=[l,c],a++,d=!0,l}),!d)break}const n=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=i.length-1;a>=0;a--){const[d]=i[a];for(let c=n.length-1;c>=0;c--)if(n[c].indexOf(d)!==-1){n[c]=n[c].replace(d,i[a][1]);break}}return o(this,Ee).insert(n,t,r,o(this,Pe),s),r}buildRegExp(){let e=o(this,Ee).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,n,a)=>n!==void 0?(s[++t]=Number(n),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),s,r]}},Pe=new WeakMap,Ee=new WeakMap,Ve),Kt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function ht(e){return Ce[e]??(Ce[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Vt(){Ce=Object.create(null)}function Jt(e){var l;const t=new Wt,s=[];if(e.length===0)return Kt;const r=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[g,x])=>h?1:g?-1:u.length-x.length),i=Object.create(null);for(let h=0,u=-1,g=r.length;h<g;h++){const[x,E,_]=r[h];x?i[E]=[_.map(([j])=>[j,Object.create(null)]),dt]:u++;let v;try{v=t.insert(E,u,x)}catch(j){throw j===ne?new lt(E):j}x||(s[u]=_.map(([j,D])=>{const je=Object.create(null);for(D-=1;D>=0;D--){const[Re,I]=v[D];je[Re]=I}return[j,je]}))}const[n,a,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let g=0,x=s[h].length;g<x;g++){const E=(l=s[h][g])==null?void 0:l[1];if(!E)continue;const _=Object.keys(E);for(let v=0,j=_.length;v<j;v++)E[_[v]]=d[E[_[v]]]}const c=[];for(const h in a)c[h]=s[a[h]];return[n,c,i]}function se(e,t){if(e){for(const s of Object.keys(e).sort((r,i)=>i.length-r.length))if(ht(s).test(t))return[...e[s]]}}var U,G,Te,ut,Je,Xt=(Je=class{constructor(){m(this,Te);p(this,"name","RegExpRouter");m(this,U);m(this,G);p(this,"match",Lt);f(this,U,{[b]:Object.create(null)}),f(this,G,{[b]:Object.create(null)})}add(e,t,s){var d;const r=o(this,U),i=o(this,G);if(!r||!i)throw new Error(ot);r[e]||[r,i].forEach(c=>{c[e]=Object.create(null),Object.keys(c[b]).forEach(l=>{c[e][l]=[...c[b][l]]})}),t==="/*"&&(t="*");const n=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ht(t);e===b?Object.keys(r).forEach(l=>{var h;(h=r[l])[t]||(h[t]=se(r[l],t)||se(r[b],t)||[])}):(d=r[e])[t]||(d[t]=se(r[e],t)||se(r[b],t)||[]),Object.keys(r).forEach(l=>{(e===b||e===l)&&Object.keys(r[l]).forEach(h=>{c.test(h)&&r[l][h].push([s,n])})}),Object.keys(i).forEach(l=>{(e===b||e===l)&&Object.keys(i[l]).forEach(h=>c.test(h)&&i[l][h].push([s,n]))});return}const a=et(t)||[t];for(let c=0,l=a.length;c<l;c++){const h=a[c];Object.keys(i).forEach(u=>{var g;(e===b||e===u)&&((g=i[u])[h]||(g[h]=[...se(r[u],h)||se(r[b],h)||[]]),i[u][h].push([s,n-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,G)).concat(Object.keys(o(this,U))).forEach(t=>{e[t]||(e[t]=y(this,Te,ut).call(this,t))}),f(this,U,f(this,G,void 0)),Vt(),e}},U=new WeakMap,G=new WeakMap,Te=new WeakSet,ut=function(e){const t=[];let s=e===b;return[o(this,U),o(this,G)].forEach(r=>{const i=r[e]?Object.keys(r[e]).map(n=>[n,r[e][n]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==b&&t.push(...Object.keys(r[b]).map(n=>[n,r[b][n]]))}),s?Jt(t):null},Je),W,q,Xe,Yt=(Xe=class{constructor(e){p(this,"name","SmartRouter");m(this,W,[]);m(this,q,[]);f(this,W,e.routers)}add(e,t,s){if(!o(this,q))throw new Error(ot);o(this,q).push([e,t,s])}match(e,t){if(!o(this,q))throw new Error("Fatal error");const s=o(this,W),r=o(this,q),i=s.length;let n=0,a;for(;n<i;n++){const d=s[n];try{for(let c=0,l=r.length;c<l;c++)d.add(...r[c]);a=d.match(e,t)}catch(c){if(c instanceof lt)continue;throw c}this.match=d.match.bind(d),f(this,W,[d]),f(this,q,void 0);break}if(n===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,q)||o(this,W).length!==1)throw new Error("No active router has been determined yet.");return o(this,W)[0]}},W=new WeakMap,q=new WeakMap,Xe),pe=Object.create(null),K,O,Z,he,R,z,J,ue,Qt=(ue=class{constructor(t,s,r){m(this,z);m(this,K);m(this,O);m(this,Z);m(this,he,0);m(this,R,pe);if(f(this,O,r||Object.create(null)),f(this,K,[]),t&&s){const i=Object.create(null);i[t]={handler:s,possibleKeys:[],score:0},f(this,K,[i])}f(this,Z,[])}insert(t,s,r){f(this,he,++De(this,he)._);let i=this;const n=St(s),a=[];for(let d=0,c=n.length;d<c;d++){const l=n[d],h=n[d+1],u=kt(l,h),g=Array.isArray(u)?u[0]:l;if(g in o(i,O)){i=o(i,O)[g],u&&a.push(u[1]);continue}o(i,O)[g]=new ue,u&&(o(i,Z).push(u),a.push(u[1])),i=o(i,O)[g]}return o(i,K).push({[t]:{handler:r,possibleKeys:a.filter((d,c,l)=>l.indexOf(d)===c),score:o(this,he)}}),i}search(t,s){var c;const r=[];f(this,R,pe);let n=[this];const a=Qe(s),d=[];for(let l=0,h=a.length;l<h;l++){const u=a[l],g=l===h-1,x=[];for(let E=0,_=n.length;E<_;E++){const v=n[E],j=o(v,O)[u];j&&(f(j,R,o(v,R)),g?(o(j,O)["*"]&&r.push(...y(this,z,J).call(this,o(j,O)["*"],t,o(v,R))),r.push(...y(this,z,J).call(this,j,t,o(v,R)))):x.push(j));for(let D=0,je=o(v,Z).length;D<je;D++){const Re=o(v,Z)[D],I=o(v,R)===pe?{}:{...o(v,R)};if(Re==="*"){const F=o(v,O)["*"];F&&(r.push(...y(this,z,J).call(this,F,t,o(v,R))),f(F,R,I),x.push(F));continue}const[gt,ze,fe]=Re;if(!u&&!(fe instanceof RegExp))continue;const N=o(v,O)[gt],yt=a.slice(l).join("/");if(fe instanceof RegExp){const F=fe.exec(yt);if(F){if(I[ze]=F[0],r.push(...y(this,z,J).call(this,N,t,o(v,R),I)),Object.keys(o(N,O)).length){f(N,R,I);const _e=((c=F[0].match(/\//))==null?void 0:c.length)??0;(d[_e]||(d[_e]=[])).push(N)}continue}}(fe===!0||fe.test(u))&&(I[ze]=u,g?(r.push(...y(this,z,J).call(this,N,t,I,o(v,R))),o(N,O)["*"]&&r.push(...y(this,z,J).call(this,o(N,O)["*"],t,I,o(v,R)))):(f(N,R,I),x.push(N)))}}n=x.concat(d.shift()??[])}return r.length>1&&r.sort((l,h)=>l.score-h.score),[r.map(({handler:l,params:h})=>[l,h])]}},K=new WeakMap,O=new WeakMap,Z=new WeakMap,he=new WeakMap,R=new WeakMap,z=new WeakSet,J=function(t,s,r,i){const n=[];for(let a=0,d=o(t,K).length;a<d;a++){const c=o(t,K)[a],l=c[s]||c[b],h={};if(l!==void 0&&(l.params=Object.create(null),n.push(l),r!==pe||i&&i!==pe))for(let u=0,g=l.possibleKeys.length;u<g;u++){const x=l.possibleKeys[u],E=h[l.score];l.params[x]=i!=null&&i[x]&&!E?i[x]:r[x]??(i==null?void 0:i[x]),h[l.score]=!0}}return n},ue),ee,Ye,Zt=(Ye=class{constructor(){p(this,"name","TrieRouter");m(this,ee);f(this,ee,new Qt)}add(e,t,s){const r=et(t);if(r){for(let i=0,n=r.length;i<n;i++)o(this,ee).insert(e,r[i],s);return}o(this,ee).insert(e,t,s)}match(e,t){return o(this,ee).search(e,t)}},ee=new WeakMap,Ye),ft=class extends Ft{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Xt,new Zt]})}},es=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Ue=(e,t=ss)=>{const s=/\.([a-zA-Z0-9]+?)$/,r=e.match(s);if(!r)return;let i=t[r[1]];return i&&i.startsWith("text")&&(i+="; charset=utf-8"),i},ts={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},ss=ts,rs=(...e)=>{let t=e.filter(i=>i!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),r=[];for(const i of s)i===".."&&r.length>0&&r.at(-1)!==".."?r.pop():i!=="."&&r.push(i);return r.join("/")||"."},pt={br:".br",zstd:".zst",gzip:".gz"},is=Object.keys(pt),ns="index.html",as=e=>{const t=e.root??"./",s=e.path,r=e.join??rs;return async(i,n)=>{var h,u,g,x;if(i.finalized)return n();let a;if(e.path)a=e.path;else try{if(a=decodeURIComponent(i.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(a))throw new Error}catch{return await((h=e.onNotFound)==null?void 0:h.call(e,i.req.path,i)),n()}let d=r(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(a):a);e.isDir&&await e.isDir(d)&&(d=r(d,ns));const c=e.getContent;let l=await c(d,i);if(l instanceof Response)return i.newResponse(l.body,l);if(l){const E=e.mimes&&Ue(d,e.mimes)||Ue(d);if(i.header("Content-Type",E||"application/octet-stream"),e.precompressed&&(!E||es.test(E))){const _=new Set((u=i.req.header("Accept-Encoding"))==null?void 0:u.split(",").map(v=>v.trim()));for(const v of is){if(!_.has(v))continue;const j=await c(d+pt[v],i);if(j){l=j,i.header("Content-Encoding",v),i.header("Vary","Accept-Encoding",{append:!0});break}}}return await((g=e.onFound)==null?void 0:g.call(e,d,i)),i.body(l)}await((x=e.onNotFound)==null?void 0:x.call(e,d,i)),await n()}},os=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let r;t&&t.namespace?r=t.namespace:r=__STATIC_CONTENT;const i=s[e]||e;if(!i)return null;const n=await r.get(i,{type:"stream"});return n||null},ls=e=>async function(s,r){return as({...e,getContent:async n=>os(n,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,r)},cs=e=>ls(e),ds=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(n=>typeof n=="string"?n==="*"?()=>n:a=>n===a?a:null:typeof n=="function"?n:a=>n.includes(a)?a:null)(s.origin),i=(n=>typeof n=="function"?n:Array.isArray(n)?()=>n:()=>[])(s.allowMethods);return async function(a,d){var h;function c(u,g){a.res.headers.set(u,g)}const l=await r(a.req.header("origin")||"",a);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const u=await i(a.req.header("origin")||"",a);u.length&&c("Access-Control-Allow-Methods",u.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const x=a.req.header("Access-Control-Request-Headers");x&&(g=x.split(/\s*,\s*/))}return g!=null&&g.length&&(c("Access-Control-Allow-Headers",g.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const T=new ft;T.use("/api/*",ds());T.use("/static/*",cs({root:"./public"}));T.post("/api/ocr",async e=>{try{return await new Promise(t=>setTimeout(t,800)),e.json({success:!0,data:{date:"2026-01-01",amount:45e3,vendor:"스타벅스 코리아",vat:4500,category:"식비",confidence:.95,risk_level:"low",source_type:"receipt"},message:"OCR 인식 완료"})}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});T.post("/api/bank-capture",async e=>{try{await new Promise(s=>setTimeout(s,1200));const t=[{id:"tx_1",date:"2026-01-01",merchant:"카페베네 강남점",amount:15e3,type:"withdraw",category:"식비",label:"사업추정",confidence:.88,risk_level:"low",selected:!0},{id:"tx_2",date:"2026-01-02",merchant:"쿠팡 온라인결제",amount:32e3,type:"withdraw",category:"사무용품",label:"사업추정",confidence:.75,risk_level:"mid",selected:!0},{id:"tx_3",date:"2026-01-03",merchant:"택시 결제",amount:8500,type:"withdraw",category:"교통비",label:"검토필요",confidence:.65,risk_level:"mid",selected:!1}];return e.json({success:!0,data:{transactions:t,summary:{total:t.length,business:t.filter(s=>s.label==="사업추정").length,review_needed:t.filter(s=>s.label==="검토필요").length}},message:"통장 내역 인식 완료"})}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});T.post("/api/gallery-upload",async e=>{try{const s=(await e.req.json()).count||5,r=Array.from({length:s},(i,n)=>({id:`img_${n+1}`,source:"gallery",type:n%3===0?"receipt":n%3===1?"statement":"screenshot",data:{date:`2026-01-0${n%9+1}`,amount:Math.floor(Math.random()*1e5)+5e3,vendor:["스타벅스","쿠팡","올리브영","이마트","GS25"][n%5],category:["식비","사무용품","통신비","교통비","소모품"][n%5],confidence:.7+Math.random()*.25,risk_level:n%4===0?"high":n%2===0?"mid":"low"}}));return await new Promise(i=>setTimeout(i,1500)),e.json({success:!0,data:{processed:r,summary:{total:r.length,receipts:r.filter(i=>i.type==="receipt").length,statements:r.filter(i=>i.type==="statement").length,screenshots:r.filter(i=>i.type==="screenshot").length}},message:`${r.length}개 이미지 처리 완료`})}catch{return e.json({success:!1,message:"오류가 발생했습니다"},400)}});T.post("/api/risk-analysis",async e=>{try{const{expense:t}=await e.req.json();let s=0,r=[];t.amount>15e4&&(s+=30,r.push("고액 거래 (15만원 초과)")),t.confidence<.7&&(s+=25,r.push("낮은 인식 신뢰도")),["기타","미분류"].includes(t.category)&&(s+=20,r.push("불명확한 카테고리"));const i=s>=50?"high":s>=25?"mid":"low",n=s>=40;return e.json({success:!0,data:{riskScore:s,riskLevel:i,riskFactors:r,reviewRecommended:n,reviewCost:n?1900:0,message:n?"전문가 검토를 권장합니다 (1,900원)":"자동 처리 가능합니다"}})}catch{return e.json({success:!1,message:"분석 오류"},400)}});T.post("/api/spot-review",async e=>{try{const{expense_id:t,user_note:s}=await e.req.json();return await new Promise(r=>setTimeout(r,800)),e.json({success:!0,data:{review_id:`review_${Date.now()}`,status:"pending",estimated_time:"24시간 이내",cost:1900,expert_name:"김세무 세무사",message:"전문가 검토가 요청되었습니다. 24시간 이내 답변 예정입니다."}})}catch{return e.json({success:!1,message:"요청 오류"},400)}});T.post("/api/calculate-tax",async e=>{try{const{expenses:t}=await e.req.json(),s=t.reduce((l,h)=>l+h.amount,0),r=Math.floor(s*.8),i=Math.floor(s*.1),n=Math.floor(r*.15),a=Math.floor(i*.5),d=t.filter(l=>l.risk_level==="high").length,c=t.filter(l=>l.risk_level==="mid").length;return e.json({success:!0,data:{totalExpense:s,deductible:r,vat:i,estimatedTax:n,refundEstimate:a,riskStats:{high:d,mid:c,low:t.length-d-c},summary:`총 경비: ${s.toLocaleString()}원 | 공제 가능: ${r.toLocaleString()}원 | 환급 예상: ${a.toLocaleString()}원`}})}catch{return e.json({success:!1,message:"계산 오류"},400)}});T.get("/api/faq/:lang",e=>{const t=e.req.param("lang")||"ko",s={ko:[{id:1,question:"이 플랫폼은 어떤 서비스인가요?",answer:"사진만 있으면 시작할 수 있어요. 영수증, 통장 캡처, 갤러리 사진 모두 가능합니다. 세금은 우리가 계산하고, 결정은 당신이 합니다."},{id:2,question:"영수증이 없어도 되나요? 💡",answer:"네! 통장 캡처나 갤러리 사진만으로도 경비 처리가 가능합니다. 영수증 없이도 경비 후보로 쌓아둘 수 있습니다."},{id:3,question:"갤러리에 있는 사진도 사용할 수 있나요? 📸",answer:"가능합니다! 사진첩에 저장된 영수증, 스크린샷, 거래 내역 등을 한 번에 업로드하면 자동으로 분류합니다."},{id:4,question:"통장 캡처는 어떻게 하나요? 🏦",answer:"뱅킹앱 거래 내역 화면을 캡처하여 업로드하면 날짜, 거래처, 금액을 자동으로 추출하여 경비로 등록합니다."},{id:5,question:"업무용인지 개인용인지 헷갈려요",answer:"이 거래는 애매합니다. 확인만 받아보실래요? 업무/개인/검토필요 중 선택하시면 됩니다. 검토필요를 선택하면 전문가가 확인해드립니다."},{id:6,question:"위험도 게이지는 무엇인가요? ⚠️",answer:"각 경비 항목의 세무 리스크를 자동 분석합니다. 전문가의 검토가 필요해 보이는 항목은 표시됩니다."},{id:7,question:"건당 전문가 리뷰는 무엇인가요? 👨‍💼",answer:"여기만 좀 봐주세요. 세무 서비스에 처음 생긴 문장입니다. 애매한 항목만 1,900원에 세무사 확인을 받을 수 있습니다."},{id:8,question:"월 정액을 내야 하나요? 💸",answer:"아니요! 무료 자동신고(소규모), 건당 리뷰(1,900원), 전면 대행(월 정액) 중 선택 가능합니다. 필요한 만큼만 비용을 지불하세요."},{id:9,question:"프리랜서도 사용할 수 있나요? 💼",answer:"네! 오히려 프리랜서와 소규모 자영업자를 위해 설계되었습니다. 간편 모드로 3번의 클릭으로 신고 준비가 완료됩니다."},{id:10,question:"실수하면 어떡하죠?",answer:"제출 버튼을 누르기 전까지, 무조건 다시 되돌릴 수 있게 설계했습니다. 수정 기록은 로그로 남아 증빙에 포함됩니다."},{id:11,question:"세무 계산은 자동인가요?",answer:"네. AI 엔진이 과세/면세/경비 인정 비율·환급 예상액을 자동 산출합니다. 내가 몰라도 됩니다. 숫자는 자동으로 자리 찾아갑니다."},{id:12,question:"홈택스로 자동 제출되나요?",answer:"파일 업로드, 직접 제출, 대행 요청 — 상황에 맞는 문을 고르세요. 홈택스 XML·CSV 출력도 지원합니다."},{id:13,question:"어떤 세금이 지원되나요?",answer:"부가세, 종소세 단순 신고, 프리랜서·1인사업자 경비처리 중심입니다. 법인·무역은 전문가 옵션이 활성화됩니다."},{id:14,question:"예상 환급액도 보이나요?",answer:'영수증 누적 시 상단에 "예상 세금/환급 미터기"가 실시간으로 표시됩니다.'},{id:15,question:"자동 분류 정확도는 어느 정도인가요?",answer:"업종/금액/가맹점 패턴 기반 추천이며, 반복 사용 시 사용자/업종별로 정밀도가 개선됩니다."},{id:16,question:"중복되는 영수증은요?",answer:"중복 인식 방지 및 중복 경고가 자동 표시됩니다."},{id:17,question:"세무사 비용이 부담돼요",answer:"1,900원으로 불확실성을 지우는 경험. 예측 가능한 안심 비용입니다. 월 구독 없이 단건 검토로 해결 가능합니다."},{id:18,question:"간편 모드는 무엇인가요? ⚡",answer:'복잡한 메뉴 없이 "갤러리 선택 → 1클릭 분류 → 자동 계산 → 제출" 4단계로 끝나는 초간단 워크플로우입니다.'}]};return e.json({success:!0,data:s[t]||s.ko})});T.get("/",e=>e.html(`
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>세무신고 플랫폼 - 영수증 없어도 신고는 됩니다</title>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/style.css" rel="stylesheet">
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
                <a href="#" style="color: var(--text-secondary); text-decoration: none; font-weight: 500;">공지</a>
                <a href="#" style="color: var(--text-secondary); text-decoration: none; font-weight: 500;">로그인</a>
                <button class="btn btn-primary">회원가입</button>
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
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-robot" style="font-size: 20px;"></i>
                </div>
                <div>
                    <h3 style="font-size: 16px; margin-bottom: 2px;">세무 도우미</h3>
                    <p style="font-size: 12px; opacity: 0.8;">온라인</p>
                </div>
            </div>
            <button id="closeChatbot" style="background: rgba(255,255,255,0.1); border: none; color: white; width: 32px; height: 32px; border-radius: 50%; cursor: pointer;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div style="flex: 1; overflow-y: auto; padding: 16px; background: var(--soft-fog);">
            <div style="margin-bottom: 16px;">
                <input type="text" id="faqSearch" placeholder="궁금한 내용을 검색하세요..." style="width: 100%; padding: 12px; border: 2px solid var(--soft-fog); border-radius: var(--radius-full); font-family: var(--font-body);">
            </div>
            <div id="faqItems"></div>
        </div>
    </div>

    <script src="/static/app.js"><\/script>
</body>
</html>
  `));const Ge=new ft,hs=Object.assign({"/src/index.tsx":T});let mt=!1;for(const[,e]of Object.entries(hs))e&&(Ge.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ge.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),mt=!0);if(!mt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ge as default};
