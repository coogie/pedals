System.register(["./p-d198cbf3.system.js","./p-177fe46f.system.js"],function(t){"use strict";var r,e,n;return{setters:[function(t){r=t.r;e=t.g},function(t){n=t.A}],execute:function(){var i=function(t,r){if(t.charAt(0)=="/"&&r.charAt(r.length-1)=="/"){return r.slice(0,r.length-1)+t}return r+t};var o=function(){function t(t){r(this,t)}t.prototype.componentWillLoad=function(){if(this.history&&this.root&&this.url){return this.history.replace(i(this.url,this.root))}};Object.defineProperty(t.prototype,"el",{get:function(){return e(this)},enumerable:true,configurable:true});return t}();t("stencil_router_redirect",o);n.injectProps(o,["history","root"])}}});