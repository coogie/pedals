var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,s){function i(e){try{l(n.next(e))}catch(e){s(e)}}function o(e){try{l(n["throw"](e))}catch(e){s(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(i,o)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,a,s,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(e){return function(t){return l([e,t])}}function l(i){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(s=i[0]&2?a["return"]:i[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,i[1])).done)return s;if(a=0,s)i=[i[0]&2,s.value];switch(i[0]){case 0:case 1:s=i;break;case 4:r.label++;return{value:i[1],done:false};case 5:r.label++;a=i[1];i=[0];continue;case 7:i=r.ops.pop();r.trys.pop();continue;default:if(!(s=r.trys,s=s.length>0&&s[s.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!s||i[1]>s[0]&&i[1]<s[3])){r.label=i[1];break}if(i[0]===6&&r.label<s[1]){r.label=s[1];s=i;break}if(s&&r.label<s[2]){r.label=s[2];r.ops.push(i);break}if(s[2])r.ops.pop();r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e];a=0}finally{n=s=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:false,cmpDidLoad:true,cmpDidUnload:true,cmpDidUpdate:true,cmpDidRender:false,cmpWillLoad:true,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:true,disconnectedCallback:true,element:false,event:true,hasRenderFn:true,lifecycle:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:false,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:true,propString:true,propMutable:true,reflect:true,scoped:false,shadowDom:true,slot:true,slotRelocation:true,state:true,style:true,svg:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:false,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="app";var s=window;var i=document;var o={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var l=!!i.documentElement.attachShadow;var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var u={};var c=new WeakMap;var $=function(e){return c.get(e)};var v=e("r",function(e,t){return c.set(t.$lazyInstance$=e,t)});var d=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return c.set(e,t)}};var h=function(e,t){return t in e};var m=function(e){return console.error(e)};var p=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},m)};var g=new Map;var y=s.__stencil_cssshim;var b=0;var w=false;var S=[];var R=[];var _=[];var x=function(e){return function(t){e.push(t);if(!w){w=true;o.raf(N)}}};var T=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){m(e)}}e.length=0};var k=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){m(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var N=function(){b++;T(S);var e=(o.$flags$&6)===2?performance.now()+7*Math.ceil(b*(1/22)):Infinity;k(R,e);k(_,e);if(R.length>0){_.push.apply(_,R);R.length=0}if(w=S.length+R.length+_.length>0){o.raf(N)}else{b=0}};var C=function(e){return Promise.resolve().then(e)};var L=x(S);var E=x(R);var P={};var U=function(e){return e!=null};var j=function(e){return e.toLowerCase()};var A=function(e){return["object","function"].includes(typeof e)};function B(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var z=e("a",function(){if(!(s.CSS&&s.CSS.supports&&s.CSS.supports("color","var(--c)"))){return t.import("./p-aaf72d6b.system.js")}return Promise.resolve()});var O=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n;return __generator(this,function(o){switch(o.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+a+".esm.js")||e.getAttribute("data-namespace")===a});n=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,s.location.href));I(n.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:o.sent();o.label=3;case 3:return[2,n.href]}})})});var I=function(e){var t=B(a);try{s[t]=new Function("w","return import(w);")}catch(n){var r=new Map;s[t]=function(n){var a=new URL(n,e).href;var o=r.get(a);if(!o){var l=i.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise(function(e){l.onload=function(){e(s[t].m);l.remove()}});r.set(a,o);i.head.appendChild(l)}return o}}};var M="hydrated";var D=new WeakMap;var W=function(e,t,r){var n=g.get(e);if(f&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}g.set(e,n)};var F=function(e,t,r,n){var a=V(t.$tagName$);var s=g.get(a);e=e.nodeType===11?e:i;if(s){if(typeof s==="string"){e=e.head||e;var o=D.get(e);var l=void 0;if(!o){D.set(e,o=new Set)}if(!o.has(a)){{if(y){l=y.createHostStyle(n,a,s,!!(t.$flags$&10));var f=l["s-sc"];if(f){a=f;o=null}}else{l=i.createElement("style");l.innerHTML=s}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([s])}}return a};var H=function(e,t,r){var n=F(l&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var V=function(e,t){return"sc-"+e};var q=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var s=false;var i=false;var o;var l;var f=[];var u=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!A(a)){a=String(a)}if(s&&i){f[f.length-1].$text$+=a}else{f.push(s?{$flags$:0,$text$:a}:a)}i=s}}};u(r);if(t){{o=t.key||undefined}{l=t.name}{var c=t.className||t.class;if(c){t.class=typeof c!=="object"?c:Object.keys(c).filter(function(e){return c[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,K)}var $={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{$.$key$=o}{$.$name$=l}return $});var Q={};var G=function(e){return e&&e.$tag$===Q};var K={forEach:function(e,t){return e.map(J).forEach(t)},map:function(e,t){return e.map(J).map(t).map(X)}};var J=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var X=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var Y=function(e,t,r,n,a,s){if(r===n){return}if(t==="class"&&!a){{var i=Z(r);var l=Z(e.className).filter(function(e){return!i.includes(e)});e.className=l.concat(Z(n).filter(function(e){return!l.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!h(e,t)){if(h(e,j(t))){t=j(t.substring(2))}else{t=j(t[2])+t.substring(3)}if(r){o.rel(e,t,r,false)}if(n){o.ael(e,t,n,false)}}else{var u=h(e,t);var c=A(n);if((u||c&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||s&4||a)&&!c){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var Z=function(e){return!e?[]:e.split(" ")};var ee=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var s=e&&e.$attrs$||P;var i=t.$attrs$||P;{for(n in s){if(i[n]==null&&s[n]!=null){Y(a,n,s[n],undefined,r,t.$flags$)}}}for(n in i){Y(a,n,s[n],i[n],r,t.$flags$)}};var te;var re;var ne;var ae=false;var se=false;var ie=false;var oe=false;var le=function(e,t,r,n){var a=t.$children$[r];var s=0;var o;var l;var f;if(!ae){ie=true;if(a.$tag$==="slot"){if(te){n.classList.add(te+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(U(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=i.createTextNode("")}else{o=a.$elm$=i.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ee(null,a,oe)}if(U(te)&&o["s-si"]!==te){o.classList.add(o["s-si"]=te)}if(a.$children$){for(s=0;s<a.$children$.length;++s){l=le(e,a,s,o);if(l){o.appendChild(l)}}}}{a.$elm$["s-hn"]=ne;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=re;a.$elm$["s-sn"]=a.$name$||"";f=e&&e.$children$&&e.$children$[r];if(f&&f.$tag$===a.$tag$&&e.$elm$){fe(e.$elm$,false)}}}return a.$elm$};var fe=function(e,t){o.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==ne&&a["s-ol"]){he(a).insertBefore(a,de(a));a["s-ol"].remove();a["s-ol"]=undefined;ie=true}if(t){fe(a,t)}}o.$flags$&=~1};var ue=function(e,t,r,n,a,s){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(i.shadowRoot&&j(i.tagName)===ne){i=i.shadowRoot}for(;a<=s;++a){if(n[a]){o=le(null,r,a,e);if(o){n[a].$elm$=o;i.insertBefore(o,de(t))}}}};var ce=function(e,t,r,n){for(;t<=r;++t){if(U(e[t])){n=e[t].$elm$;be(e[t],true);{se=true;if(n["s-ol"]){n["s-ol"].remove()}else{fe(n,true)}}n.remove()}}};var $e=function(e,t,r,n){var a=0;var s=0;var i=0;var o=0;var l=t.length-1;var f=t[0];var u=t[l];var c=n.length-1;var $=n[0];var v=n[c];var d;var h;while(a<=l&&s<=c){if(f==null){f=t[++a]}else if(u==null){u=t[--l]}else if($==null){$=n[++s]}else if(v==null){v=n[--c]}else if(ve(f,$)){me(f,$);f=t[++a];$=n[++s]}else if(ve(u,v)){me(u,v);u=t[--l];v=n[--c]}else if(ve(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){fe(f.$elm$.parentNode,false)}me(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--c]}else if(ve(u,$)){if(f.$tag$==="slot"||v.$tag$==="slot"){fe(u.$elm$.parentNode,false)}me(u,$);e.insertBefore(u.$elm$,f.$elm$);u=t[--l];$=n[++s]}else{i=-1;{for(o=a;o<=l;++o){if(t[o]&&U(t[o].$key$)&&t[o].$key$===$.$key$){i=o;break}}}if(i>=0){h=t[i];if(h.$tag$!==$.$tag$){d=le(t&&t[s],r,i,e)}else{me(h,$);t[i]=undefined;d=h.$elm$}$=n[++s]}else{d=le(t&&t[s],r,s,e);$=n[++s]}if(d){{he(f.$elm$).insertBefore(d,de(f.$elm$))}}}}if(a>l){ue(e,n[c+1]==null?null:n[c+1].$elm$,r,n,s,c)}else if(s>c){ce(t,a,l)}};var ve=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var de=function(e){return e&&e["s-ol"]||e};var he=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var me=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var s;if(!U(t.$text$)){{if(t.$tag$==="slot");else{ee(e,t,oe)}}if(U(n)&&U(a)){$e(r,n,t,a)}else if(U(a)){if(U(e.$text$)){r.textContent=""}ue(r,null,t,a,0,a.length-1)}else if(U(n)){ce(n,0,n.length-1)}}else if(s=r["s-cr"]){s.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var pe=function(e,t,r,n,a,s,i,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){i=t["s-sn"];t.hidden=false;for(s=0;s<a;s++){if(r[s]["s-hn"]!==t["s-hn"]){o=r[s].nodeType;if(i!==""){if(o===1&&i===r[s].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[s].textContent.trim()!==""){t.hidden=true;break}}}}}pe(t)}}};var ge=[];var ye=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var s=0;var i;var o;var l;var f;for(r=t.length;n<r;n++){i=t[n];if(i["s-sr"]&&(o=i["s-cr"])){l=o.parentNode.childNodes;f=i["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==i["s-hn"]){s=o.nodeType;if((s===3||s===8)&&f===""||s===1&&o.getAttribute("slot")===null&&f===""||s===1&&o.getAttribute("slot")===f){if(!ge.some(function(e){return e.nodeToRelocate===o})){se=true;o["s-sn"]=f;ge.push({slotRefNode:i,nodeToRelocate:o})}}}}}if(i.nodeType===1){ye(i)}}};var be=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){be(e,t)})}};var we=function(e,t,r,n){ne=j(e.tagName);var a=t.$vnode$||{$flags$:0};var s=G(n)?n:q(null,null,n);if(r.$attrsToReflect$){s.$attrs$=s.$attrs$||{};r.$attrsToReflect$.forEach(function(t){var r=t[0],n=t[1];return s.$attrs$[n]=e[r]})}s.$tag$=null;s.$flags$|=4;t.$vnode$=s;s.$elm$=a.$elm$=e.shadowRoot||e;{te=e["s-sc"]}{re=e["s-cr"];ae=l&&(r.$flags$&1)!==0;ie=se=false}me(a,s);{if(ie){ye(s.$elm$);for(var f=0;f<ge.length;f++){var u=ge[f];if(!u.nodeToRelocate["s-ol"]){var c=i.createTextNode("");c["s-nr"]=u.nodeToRelocate;u.nodeToRelocate.parentNode.insertBefore(u.nodeToRelocate["s-ol"]=c,u.nodeToRelocate)}}o.$flags$|=1;for(var f=0;f<ge.length;f++){var u=ge[f];var $=u.slotRefNode.parentNode;var v=u.slotRefNode.nextSibling;var c=u.nodeToRelocate["s-ol"];while(c=c.previousSibling){var d=c["s-nr"];if(d&&d["s-sn"]===u.nodeToRelocate["s-sn"]&&$===d.parentNode){d=d.nextSibling;if(!d||!d["s-nr"]){v=d;break}}}if(!v&&$!==u.nodeToRelocate.parentNode||u.nodeToRelocate.nextSibling!==v){if(u.nodeToRelocate!==v){$.insertBefore(u.nodeToRelocate,v)}}}o.$flags$&=~1}if(se){pe(s.$elm$)}ge.length=0}};var Se=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();m(r);return[3,4];case 4:return[2]}})})};var Re=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(s){switch(s.label){case 0:{t.$flags$|=16}r=t.$lazyInstance$;if(!a)return[3,2];{t.$flags$|=128}return[4,Se(r,"componentWillLoad")];case 1:s.sent();s.label=2;case 2:{E(function(){return _e(e,t,n,r,a)})}return[2]}})})};var _e=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){H(e,r,t.$modeName$)}{{t.$flags$|=4;try{we(e,t,r,n.render&&n.render())}catch(e){m(e)}t.$flags$&=~4}}if(y){y.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}xe(e,t)};var xe=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(M)}{Se(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){i.documentElement.classList.add(M);{setTimeout(function(){return o.$flags$|=2},999)}}}else{{Se(n,"componentDidUpdate")}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var Te=function(e,t){{var r=$(e);if(r.$flags$&2){Re(e,r,t,false)}}};var ke=function(e){if((o.$flags$&1)===0){var t=$(e);if(y){y.removeHost(e)}var r=t.$lazyInstance$;{Se(r,"disconnectedCallback")}{Se(r,"componentDidUnload")}}};var Ne=function(e,t){if(e!=null&&!A(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Ce=function(e,t){return $(e).$instanceValues$.get(t)};var Le=function(e,t,r,n){var a=$(e);var s=a.$hostElement$;var i=a.$instanceValues$.get(t);var o=a.$flags$;r=Ne(r,n.$members$[t][0]);if(r!==i&&(!(o&8)||i===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&o&128){var l=n.$watchers$[t];if(l){l.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,i,t)}catch(e){m(e)}})}}if((o&(4|2|16))===2){Re(s,a,n,false)}}}};var Ee=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],s=e[1][0];if(s&31||r&2&&s&32){Object.defineProperty(a,n,{get:function(){return Ce(this,n)},set:function(e){Le(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var s=new Map;a.attributeChangedCallback=function(e,t,r){var n=s.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var r=e[0],n=e[1];var a=n[1]||r;s.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a})}}return e};var Pe=function(e,n,a,s,i){return __awaiter(r,void 0,void 0,function(){var r,s,o;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&32)===0))return[3,4];n.$flags$|=32;return[4,p(a)];case 1:i=l.sent();if(!i.isProxied){{a.$watchers$=i.watchers}Ee(i,a,2);i.isProxied=true}{n.$flags$|=8}try{new i(n)}catch(e){m(e)}{n.$flags$&=~8}Ue(n.$lazyInstance$);if(!(!i.isStyleRegistered&&i.style))return[3,4];r=i.style;s=V(a.$tagName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,s,false)})];case 2:r=l.sent();l.label=3;case 3:W(s,r,!!(a.$flags$&1));i.isStyleRegistered=true;l.label=4;case 4:o=n.$ancestorComponent$;if(o&&o["s-lr"]===false&&o["s-rc"]){o["s-rc"].push(function(){return Pe(e,n,a)})}else{Re(e,n,a,true)}return[2]}})})};var Ue=function(e){{Se(e,"connectedCallback")}};var je=function(e,t){if((o.$flags$&1)===0){var r=$(e);if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Ae(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&a["s-lr"]===false){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{Pe(e,r,t)}}Ue(r.$lazyInstance$)}};var Ae=function(e,t){var r;{r=""}t=e["s-cr"]=i.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Be=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=i.head;var f=s.customElements;var u=a.querySelector("meta[charset]");var c=i.createElement("style");Object.assign(o,t);o.$resourcesUrl$=new URL(t.resourcesUrl||"/",s.location.href).href;if(t.syncQueue){o.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}{a.$watchers$={}}if(!l&&a.$flags$&1){a.$flags$|=8}var s=a.$tagName$;var i=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}d(t);if(a.$flags$&1){if(l){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){je(this,a)};t.prototype.disconnectedCallback=function(){ke(this)};t.prototype["s-init"]=function(){var e=$(this);if(e.$lazyInstance$){xe(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){Te(this,a)};t.prototype.componentOnReady=function(){return $(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!f.get(s)){r.push(s);f.define(s,Ee(i,a,1))}})});c.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";c.setAttribute("data-styles","");a.insertBefore(c,u?u.nextSibling:a.firstChild)});var ze=e("c",function(e,t,r){var n=Me(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}});var Oe=function(e){var t=new URL(e,o.$resourcesUrl$);return t.origin!==s.location.origin?t.href:t.pathname};var Ie=e("d",function(e,t){if(t in u){return u[t]}else if(t==="window"){return s}else if(t==="document"){return i}else if(t==="isServer"||t==="isPrerender"){return!!n.hydrateServerSide}else if(t==="isClient"){return!n.hydrateServerSide}else if(t==="resourcesUrl"||t==="publicPath"){return Oe(".")}else if(t==="queue"){return{write:E,read:L,tick:{then:function(e){return C(e)}}}}return undefined});var Me=e("g",function(e){return $(e).$hostElement$})}}});