import{r as t,d as e,h as o,g as s}from"./p-31998432.js";import{s as n,a as i,c as a,b as r,h as c,d as l,e as h,f as p,l as d}from"./p-986066ec.js";import{A as u}from"./p-96dcca2d.js";import{s as f,a as y,b as g,g as m,c as P,d as w}from"./p-59ac63d2.js";const b=(t,...e)=>{t||console.warn(...e)},v=()=>{let t,e=[];return{setPrompt:e=>(b(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,o,s,n)=>{if(null!=t){const i="function"==typeof t?t(e,o):t;"string"==typeof i?"function"==typeof s?s(i,n):(b(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),n(!0)):n(!1!==i)}else n(!0)},appendListener:t=>{let o=!0;const s=(...e)=>{o&&t(...e)};return e.push(s),()=>{o=!1,e=e.filter(t=>t!==s)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},T=(t,e="scrollPositions")=>{let o=new Map;const s=(e,s)=>{if(o.set(e,s),f(t,"sessionStorage")){const e=[];o.forEach((t,o)=>{e.push([o,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(f(t,"sessionStorage")){const s=t.sessionStorage.getItem(e);o=s?new Map(JSON.parse(s)):o}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:s,get:t=>o.get(t),has:t=>o.has(t),capture:e=>{s(e,[t.scrollX,t.scrollY])}}},k={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+p(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:p,decodePath:i},slash:{encodePath:i,decodePath:i}},L=(t,e)=>{const o=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:o})},O={browser:(t,e={})=>{let o=!1;const s=t.history,p=t.location,d=t.navigator,u=y(t),f=!g(d),w=T(t),k=null!=e.forceRefresh&&e.forceRefresh,L=null!=e.getUserConfirmation?e.getUserConfirmation:m,O=null!=e.keyLength?e.keyLength:6,E=e.basename?n(i(e.basename)):"",S=()=>{try{return t.history.state||{}}catch(t){return{}}},x=t=>{t=t||{};const{key:e,state:o}=t,{pathname:s,search:n,hash:i}=p;let h=s+n+i;return b(!E||c(h,E),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+h+'" to begin with "'+E+'".'),E&&(h=l(h,E)),a(h,o,e||r(O))},U=v(),A=t=>{w.capture(J.location.key),Object.assign(J,t),J.location.scrollPosition=w.get(J.location.key),J.length=s.length,U.notifyListeners(J.location,J.action)},H=t=>{P(d,t)||R(x(t.state))},j=()=>{R(x(S()))},R=t=>{if(o)o=!1,A();else{const e="POP";U.confirmTransitionTo(t,e,L,o=>{o?A({action:e,location:t}):I(t)})}},I=t=>{let e=B.indexOf(J.location.key),s=B.indexOf(t.key);-1===e&&(e=0),-1===s&&(s=0);const n=e-s;n&&(o=!0,M(n))},C=x(S());let B=[C.key],V=0,Y=!1;const q=t=>E+h(t),M=t=>{s.go(t)},F=e=>{1===(V+=e)?(t.addEventListener("popstate",H),f&&t.addEventListener("hashchange",j)):0===V&&(t.removeEventListener("popstate",H),f&&t.removeEventListener("hashchange",j))},J={length:s.length,action:"POP",location:C,createHref:q,push:(t,e)=>{b(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const o=a(t,e,r(O),J.location);U.confirmTransitionTo(o,"PUSH",L,t=>{if(!t)return;const e=q(o),{key:n,state:i}=o;if(u)if(s.pushState({key:n,state:i},"",e),k)p.href=e;else{const t=B.indexOf(J.location.key),e=B.slice(0,-1===t?0:t+1);e.push(o.key),B=e,A({action:"PUSH",location:o})}else b(void 0===i,"Browser history cannot push state in browsers that do not support HTML5 history"),p.href=e})},replace:(t,e)=>{b(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const o=a(t,e,r(O),J.location);U.confirmTransitionTo(o,"REPLACE",L,t=>{if(!t)return;const e=q(o),{key:n,state:i}=o;if(u)if(s.replaceState({key:n,state:i},"",e),k)p.replace(e);else{const t=B.indexOf(J.location.key);-1!==t&&(B[t]=o.key),A({action:"REPLACE",location:o})}else b(void 0===i,"Browser history cannot replace state in browsers that do not support HTML5 history"),p.replace(e)})},go:M,goBack:()=>M(-1),goForward:()=>M(1),block:(t="")=>{const e=U.setPrompt(t);return Y||(F(1),Y=!0),()=>(Y&&(Y=!1,F(-1)),e())},listen:t=>{const e=U.appendListener(t);return F(1),()=>{F(-1),e()}},win:t};return J},hash:(t,e={})=>{let o=!1,s=null,p=0,u=!1;const f=t.location,y=t.history,g=w(t.navigator),P=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:T=m,hashType:L="slash"}=e,O=e.basename?n(i(e.basename)):"",{encodePath:E,decodePath:S}=k[L],x=()=>{const t=f.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},U=t=>{const e=f.href.indexOf("#");f.replace(f.href.slice(0,e>=0?e:0)+"#"+t)},A=()=>{let t=S(x());return b(!O||c(t,O),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+O+'".'),O&&(t=l(t,O)),a(t,void 0,r(P))},H=v(),j=t=>{Object.assign(J,t),J.length=y.length,H.notifyListeners(J.location,J.action)},R=()=>{const t=x(),e=E(t);if(t!==e)U(e);else{const t=A(),e=J.location;if(!o&&d(e,t))return;if(s===h(t))return;s=null,I(t)}},I=t=>{if(o)o=!1,j();else{const e="POP";H.confirmTransitionTo(t,e,T,o=>{o?j({action:e,location:t}):C(t)})}},C=t=>{let e=q.lastIndexOf(h(J.location)),s=q.lastIndexOf(h(t));-1===e&&(e=0),-1===s&&(s=0);const n=e-s;n&&(o=!0,M(n))},B=x(),V=E(B);B!==V&&U(V);const Y=A();let q=[h(Y)];const M=t=>{b(g,"Hash history go(n) causes a full page reload in this browser"),y.go(t)},F=(t,e)=>{1===(p+=e)?t.addEventListener("hashchange",R):0===p&&t.removeEventListener("hashchange",R)},J={length:y.length,action:"POP",location:Y,createHref:t=>"#"+E(O+h(t)),push:(t,e)=>{b(void 0===e,"Hash history cannot push state; it is ignored");const o=a(t,void 0,r(P),J.location);H.confirmTransitionTo(o,"PUSH",T,t=>{if(!t)return;const e=h(o),n=E(O+e);if(x()!==n){s=e,(t=>f.hash=t)(n);const t=q.lastIndexOf(h(J.location)),i=q.slice(0,-1===t?0:t+1);i.push(e),q=i,j({action:"PUSH",location:o})}else b(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),j()})},replace:(t,e)=>{b(void 0===e,"Hash history cannot replace state; it is ignored");const o=a(t,void 0,r(P),J.location);H.confirmTransitionTo(o,"REPLACE",T,t=>{if(!t)return;const e=h(o),n=E(O+e);x()!==n&&(s=e,U(n));const i=q.indexOf(h(J.location));-1!==i&&(q[i]=e),j({action:"REPLACE",location:o})})},go:M,goBack:()=>M(-1),goForward:()=>M(1),block:(e="")=>{const o=H.setPrompt(e);return u||(F(t,1),u=!0),()=>(u&&(u=!1,F(t,-1)),o())},listen:e=>{const o=H.appendListener(e);return F(t,1),()=>{F(t,-1),o()}},win:t};return J}};class E{constructor(o){t(this,o),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=e(this,"isServer"),this.queue=e(this,"queue")}componentWillLoad(){this.history=O[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=L(t,this.root),this.location=t}),this.location=L(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write(()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}):this.queue.write(()=>{e.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return o(u.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},o("slot",null))}get el(){return s(this)}}export{E as stencil_router};