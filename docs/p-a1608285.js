const e={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!0,cmpDidUpdate:!0,cmpDidRender:!1,cmpWillLoad:!0,cmpWillUpdate:!1,cmpWillRender:!1,connectedCallback:!0,disconnectedCallback:!0,element:!1,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!1,hostListenerTargetWindow:!1,hostListenerTargetDocument:!1,hostListenerTargetBody:!1,hostListenerTargetParent:!1,hostListenerTarget:!1,member:!0,method:!1,mode:!1,noVdomRender:!1,observeAttribute:!0,prop:!0,propBoolean:!0,propNumber:!0,propString:!0,propMutable:!0,reflect:!0,scoped:!1,shadowDom:!0,slot:!0,slotRelocation:!0,state:!0,style:!0,svg:!1,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,lazyLoad:!0,hydrateServerSide:!1,cssVarShim:!0,hydrateClientSide:!1,isDebug:!1,isDev:!1,lifecycleDOMEvents:!1,profile:!1,hotModuleReplacement:!1,constructableCSS:!0,initializeNextTick:!0,cssAnnotations:!0},t=window,n=document,o={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},s=!!n.documentElement.attachShadow,l=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),r={},i=new WeakMap,c=e=>i.get(e),a=(e,t)=>i.set(t.s=e,t),f=(e,t)=>t in e,d=e=>console.error(e),p=new Map,u=new Map,m=t.__stencil_cssshim;let $=0,h=!1;const y=[],b=[],w=[],v=(e,t)=>n=>{e.push(n),h||(h=!0,t&&4&o.t?k(_):o.raf(_))},g=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){d(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},_=()=>{$++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){d(e)}e.length=0})(y);const e=2==(6&o.t)?performance.now()+10*Math.ceil($*(1/22)):1/0;g(b,e),g(w,e),b.length>0&&(w.push(...b),b.length=0),(h=y.length+b.length+w.length>0)?o.raf(_):$=0},k=e=>Promise.resolve().then(e),R=v(y,!1),S=v(b,!0),L={},j=e=>null!=e,U=e=>e.toLowerCase(),C=e=>["object","function"].includes(typeof e),M=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_app("./p-3ea8955c.js"),D=async()=>{const e=new RegExp("/app(.esm)?.js$"),o=Array.from(n.querySelectorAll("script")).find(t=>e.test(t.src)||"app"===t.getAttribute("data-namespace")),s=o["data-opts"];{const e=new URL(".",new URL(o.getAttribute("data-resources-url")||o.src,t.location.href));return T(e.href),window.customElements||await __sc_import_app("./p-860d8016.js"),Object.assign({},s,{resourcesUrl:e.href})}},T=e=>{const o=(()=>`__sc_import_${"app".replace(/\s|-/g,"_")}`)();try{t[o]=new Function("w",`return import(w);//${Math.random()}`)}catch(s){const l=new Map;t[o]=s=>{const r=new URL(s,e).href;let i=l.get(r);if(!i){const e=n.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${o}.m = m;`],{type:"application/javascript"})),i=new Promise(n=>{e.onload=()=>{n(t[o].m),e.remove()}}),l.set(r,i),n.head.appendChild(e)}return i}}},x=new WeakMap,O=e=>"sc-"+e,P=(e,t,...n)=>{let o,s,l=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!C(l))&&(l=String(l)),r&&i?c[c.length-1].l+=l:c.push(r?{t:0,l}:l),i=r)};if(a(n),t){o=t.key||void 0,s=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,A);const f={t:0,i:e,p:c.length>0?c:null,u:void 0,$:t};return f.h=o,f.v=s,f},W={},A={forEach:(e,t)=>e.map(E).forEach(t),map:(e,t)=>e.map(E).map(t).map(F)},E=e=>({vattrs:e.$,vchildren:e.p,vkey:e.h,vname:e.v,vtag:e.i,vtext:e.l}),F=e=>({t:0,$:e.vattrs,p:e.vchildren,h:e.vkey,v:e.vname,i:e.vtag,l:e.vtext}),N=(e,t,n,s,l,r)=>{if(n!==s)if("class"===t){const t=e.classList;B(n).forEach(e=>t.remove(e)),B(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!f(e,t))t=f(e,U(t))?U(t.substring(2)):U(t[2])+t.substring(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1);else{const n=f(e,t),o=C(s),i=e.tagName.includes("-");if((n||o&&null!==s)&&!l)try{i?e[t]=s:e[t]!==s&&(e[t]=s||"")}catch(e){}null==s||!1===s?e.removeAttribute(t):(!n||4&r||l)&&!o&&(s=!0===s?"":s.toString(),e.setAttribute(t,s))}},B=e=>e?e.split(/\s+/).filter(e=>e):[],V=(e,t,n,o)=>{const s=11===t.u.nodeType&&t.u.host?t.u.host:t.u,l=e&&e.$||L,r=t.$||L;for(o in l)o in r||N(s,o,l[o],void 0,n,t.t);for(o in r)N(s,o,l[o],r[o],n,t.t)};let q,z,H,K=!1,Q=!1,G=!1;const I=(e,t,o,s)=>{let l,r,i,c=t.p[o],a=0;if(K||(G=!0,"slot"===c.i&&(q&&s.classList.add(q+"-s"),c.t|=c.p?2:1)),j(c.l))c.u=n.createTextNode(c.l);else if(1&c.t)c.u=n.createTextNode("");else if(l=c.u=n.createElement(2&c.t?"slot-fb":c.i),V(null,c,!1),j(q)&&l["s-si"]!==q&&l.classList.add(l["s-si"]=q),c.p)for(a=0;a<c.p.length;++a)(r=I(e,c,a,l))&&l.appendChild(r);return c.u["s-hn"]=H,3&c.t&&(c.u["s-sr"]=!0,c.u["s-cr"]=z,c.u["s-sn"]=c.v||"",(i=e&&e.p&&e.p[o])&&i.i===c.i&&e.u&&J(e.u,!1)),c.u},J=(e,t)=>{o.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==H&&o["s-ol"]&&(te(o).insertBefore(o,ee(o)),o["s-ol"].remove(),o["s-ol"]=void 0,G=!0),t&&J(o,t)}o.t&=-2},X=(e,t,n,o,s,l)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&U(i.tagName)===H&&(i=i.shadowRoot);s<=l;++s)o[s]&&(r=I(null,n,s,e))&&(o[s].u=r,i.insertBefore(r,ee(t)))},Y=(e,t,n,o)=>{for(;t<=n;++t)j(e[t])&&(o=e[t].u,re(e[t],!0),Q=!0,o["s-ol"]?o["s-ol"].remove():J(o,!0),o.remove())},Z=(e,t)=>e.i===t.i&&("slot"===e.i?e.v===t.v:e.h===t.h),ee=e=>e&&e["s-ol"]||e,te=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ne=(e,t)=>{const n=t.u=e.u,o=e.p,s=t.p;let l;j(t.l)?(l=n["s-cr"])?l.parentNode.textContent=t.l:e.l!==t.l&&(n.textContent=t.l):("slot"===t.i||V(e,t,!1),j(o)&&j(s)?((e,t,n,o)=>{let s,l,r=0,i=0,c=0,a=0,f=t.length-1,d=t[0],p=t[f],u=o.length-1,m=o[0],$=o[u];for(;r<=f&&i<=u;)if(null==d)d=t[++r];else if(null==p)p=t[--f];else if(null==m)m=o[++i];else if(null==$)$=o[--u];else if(Z(d,m))ne(d,m),d=t[++r],m=o[++i];else if(Z(p,$))ne(p,$),p=t[--f],$=o[--u];else if(Z(d,$))"slot"!==d.i&&"slot"!==$.i||J(d.u.parentNode,!1),ne(d,$),e.insertBefore(d.u,p.u.nextSibling),d=t[++r],$=o[--u];else if(Z(p,m))"slot"!==d.i&&"slot"!==$.i||J(p.u.parentNode,!1),ne(p,m),e.insertBefore(p.u,d.u),p=t[--f],m=o[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&j(t[a].h)&&t[a].h===m.h){c=a;break}c>=0?((l=t[c]).i!==m.i?s=I(t&&t[i],n,c,e):(ne(l,m),t[c]=void 0,s=l.u),m=o[++i]):(s=I(t&&t[i],n,i,e),m=o[++i]),s&&te(d.u).insertBefore(s,ee(d.u))}r>f?X(e,null==o[u+1]?null:o[u+1].u,n,o,i,u):i>u&&Y(t,r,f)})(n,o,t,s):j(s)?(j(e.l)&&(n.textContent=""),X(n,null,t,s,0,s.length-1)):j(o)&&Y(o,0,o.length-1))},oe=(e,t,n,o,s,l,r,i)=>{for(o=0,s=(n=e.childNodes).length;o<s;o++)if(1===(t=n[o]).nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,l=0;l<s;l++)if(n[l]["s-hn"]!==t["s-hn"])if(i=n[l].nodeType,""!==r){if(1===i&&r===n[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==n[l].textContent.trim()){t.hidden=!0;break}oe(t)}},se=[],le=e=>{let t,n,o,s,l=e.childNodes,r=l.length,i=0,c=0,a=0;for(r=l.length;i<r;i++){if((t=l[i])["s-sr"]&&(n=t["s-cr"]))for(s=t["s-sn"],c=(o=n.parentNode.childNodes).length-1;c>=0;c--)(n=o[c])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(a=n.nodeType)||8===a)&&""===s||1===a&&null===n.getAttribute("slot")&&""===s||1===a&&n.getAttribute("slot")===s)&&(se.some(e=>e.g===n)||(Q=!0,n["s-sn"]=s,se.push({_:t,g:n})));1===t.nodeType&&le(t)}},re=(e,t)=>{e&&(e.$&&e.$.ref&&e.$.ref(t?null:e.u),e.p&&e.p.forEach(e=>{re(e,t)}))},ie=(e,t,n,o)=>{t.t|=16;const s=t.s;let l;o&&(l=de(s,"componentWillLoad"));const r=()=>ce(e,t,n,s,o);return pe(l,()=>S(r))},ce=(e,t,l,r,i)=>{t.t&=-17,e["s-lr"]=!1,i&&((e,t)=>{const o=((e,t,o,s)=>{let l=O(t.k),r=u.get(l);if(e=11===e.nodeType?e:n,r)if("string"==typeof r){let o,i=x.get(e=e.head||e);if(i||x.set(e,i=new Set),!i.has(l)){if(m){const e=(o=m.createHostStyle(s,l,r,!!(10&t.t)))["s-sc"];e&&(l=e,i=null)}else(o=n.createElement("style")).innerHTML=r;e.insertBefore(o,e.querySelector("link")),i&&i.add(l)}}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return l})(s&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,0,e);10&t.t&&(e["s-sc"]=o,e.classList.add(o+"-h"))})(e,l),t.t|=4;try{((e,t,l,r)=>{H=U(e.tagName);const i=t.R||{t:0},c=(e=>e&&e.i===W)(r)?r:P(null,null,r);if(l.S&&(c.$=c.$||{},l.S.forEach(([t,n])=>c.$[n]=e[t])),c.i=null,c.t|=4,t.R=c,c.u=i.u=e.shadowRoot||e,q=e["s-sc"],z=e["s-cr"],K=s&&0!=(1&l.t),G=Q=!1,ne(i,c),G){le(c.u);for(let e=0;e<se.length;e++){const t=se[e];if(!t.g["s-ol"]){const e=n.createTextNode("");e["s-nr"]=t.g,t.g.parentNode.insertBefore(t.g["s-ol"]=e,t.g)}}o.t|=1;for(let e=0;e<se.length;e++){const t=se[e],n=t._.parentNode;let o=t._.nextSibling,s=t.g["s-ol"];for(;s=s.previousSibling;){let e=s["s-nr"];if(e&&e["s-sn"]===t.g["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){o=e;break}}(!o&&n!==t.g.parentNode||t.g.nextSibling!==o)&&t.g!==o&&n.insertBefore(t.g,o)}o.t&=-2}Q&&oe(c.u),se.length=0})(e,t,l,r.render&&r.render())}catch(e){d(e)}t.t&=-5,m&&m.updateHost(e),e["s-lr"]=!0,t.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),ae(e,t)},ae=(e,t,n)=>{if(!e["s-al"]){const o=t.s,s=t.L;64&t.t?de(o,"componentDidUpdate"):(t.t|=64,e.classList.add("hydrated"),de(o,"componentDidLoad"),t.j(e),s||fe()),s&&((n=s["s-al"])&&(n.delete(e),0===n.size&&(s["s-al"]=void 0,s["s-init"]())),t.L=void 0)}},fe=()=>{n.documentElement.classList.add("hydrated"),o.t|=2},de=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){d(e)}},pe=(e,t)=>e&&e.then?e.then(t):t(),ue=(e,t,n)=>{if(t.U){e.watchers&&(t.C=e.watchers);const s=Object.entries(t.U),l=e.prototype;if(s.forEach(([e,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(l,e,{get(){return((e,t)=>c(e).M.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=c(this),l=s.D,r=s.M.get(t),i=s.t;if(!((n=((e,t)=>null==e||C(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,o.U[t][0]))===r||8&i&&void 0!==r)&&(s.M.set(t,n),s.s)){if(o.C&&128&i){const e=o.C[t];e&&e.forEach(e=>{try{s.s[e].call(s.s,n,r,t)}catch(e){d(e)}})}2==(22&i)&&ie(l,s,o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;l.attributeChangedCallback=function(e,t,s){o.jmp(()=>{const t=n.get(e);this[t]=(null!==s||"boolean"!=typeof this[t])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,o])=>{const s=o[1]||e;return n.set(s,e),512&o[0]&&t.S.push([e,s]),s})}}return e},me=e=>{de(e,"connectedCallback")},$e=(r,a={})=>{const f=[],$=a.exclude||[],h=n.head,y=t.customElements,b=h.querySelector("meta[charset]"),w=n.createElement("style");let v;Object.assign(o,a),o.o=new URL(a.resourcesUrl||"./",n.baseURI).href,a.syncQueue&&(o.t|=4),r.forEach(t=>t[1].forEach(r=>{const a={t:r[0],k:r[1],U:r[2],T:r[3],S:[],C:{}};!s&&1&a.t&&(a.t|=8);const h=a.k;a.O=t[0],$.includes(h)||y.get(h)||(f.push(h),y.define(h,ue(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,D:e,M:new Map};t.P=new Promise(e=>t.j=e),i.set(e,t)}})(e),1&a.t&&(s?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){v&&(clearTimeout(v),v=null),o.jmp(()=>((t,s)=>{if(0==(1&o.t)){const o=c(t);if(!(1&o.t)){let r;o.t|=1,r||(4&s.t||8&s.t)&&((e,t)=>{let o;o="",(t=e["s-cr"]=n.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!1===e["s-lr"]){o.L=e,(e["s-al"]=e["s-al"]||new Set).add(t);break}}s.U&&Object.entries(s.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),k(()=>(async(t,n,o,s,r)=>{if(0==(32&n.t)){n.t|=32,(r=(e=>{const t=e.k.replace(/-/g,"_"),n=e.O,o=p.get(n);return o?o[t]:__sc_import_app(`./${n}.entry.js`).then(e=>(p.set(n,e),e[t]),d)})(o)).then&&(r=await r),r.isProxied||(o.C=r.watchers,ue(r,o,2),r.isProxied=!0),n.t|=8;try{new r(n)}catch(e){d(e)}if(n.t&=-9,n.t|=128,me(n.s),!r.W&&r.style){let t=r.style,n=O(o.k);const s=e.runtimeScopeCss;(8&o.t||s)&&(t=await __sc_import_app("./p-c68d0961.js").then(e=>e.scopeCss(t,n,!1))),((e,t,n)=>{let o=u.get(e);l&&n?(o=o||new CSSStyleSheet).replace(t):o=t,u.set(e,o)})(n,t,!!(1&o.t)),r.W=!0}}const i=n.L,c=()=>ie(t,n,o,!0);i&&!1===i["s-lr"]&&i["s-rc"]?i["s-rc"].push(c):c()})(t,o,s))}me(o.s)}})(this,a))}disconnectedCallback(){o.jmp(()=>(e=>{if(0==(1&o.t)){const t=c(e);m&&m.removeHost(e);const n=t.s;de(n,"disconnectedCallback"),de(n,"componentDidUnload")}})(this))}"s-init"(){const e=c(this);e.s&&ae(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=c(e);2&n.t&&ie(e,n,t,!1)}})(this,a)}componentOnReady(){return c(this).P}},a,1)))})),w.innerHTML=f+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),h.insertBefore(w,b?b.nextSibling:h.firstChild),o.jmp(()=>v=setTimeout(fe,30))},he=(e,t,n)=>{const o=be(e);return{emit:e=>o.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},ye=(s,l)=>l in r?r[l]:"window"===l?t:"document"===l?n:"isServer"===l||"isPrerender"===l?!!e.hydrateServerSide:"isClient"===l?!e.hydrateServerSide:"resourcesUrl"===l||"publicPath"===l?(()=>{const e=new URL(".",o.o);return e.origin!==t.location.origin?e.href:e.pathname})():"queue"===l?{write:S,read:R,tick:{then:e=>k(e)}}:void 0,be=e=>c(e).D;export{W as H,M as a,$e as b,he as c,ye as d,be as g,P as h,D as p,a as r};