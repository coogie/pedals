System.register(["./p-511abfdd.system.js"],function(r){"use strict";var e;return{setters:[function(r){e=r.v}],execute:function(){var a="/";var t="./";var n=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");var i=function(r,e){var i=[];var f=0;var l=0;var s="";var c=e&&e.delimiter||a;var p=e&&e.delimiters||t;var o=false;var h;while((h=n.exec(r))!==null){var d=h[0];var g=h[1];var m=h.index;s+=r.slice(l,m);l=m+d.length;if(g){s+=g[1];o=true;continue}var x="";var y=r[l];var $=h[2];var w=h[3];var E=h[4];var j=h[5];if(!o&&s.length){var R=s.length-1;if(p.indexOf(s[R])>-1){x=s[R];s=s.slice(0,R)}}if(s){i.push(s);s="";o=false}var O=x!==""&&y!==undefined&&y!==x;var b=j==="+"||j==="*";var k=j==="?"||j==="*";var A=x||c;var S=w||E;i.push({name:$||f++,prefix:x,delimiter:A,optional:k,repeat:b,partial:O,pattern:S?u(S):"[^"+v(A)+"]+?"})}if(s||l<r.length){i.push(s+r.substr(l))}return i};var v=function(r){return r.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")};var u=function(r){return r.replace(/([=!:$\/()])/g,"\\$1")};var f=function(r){return r&&r.sensitive?"":"i"};var l=function(r,e){if(!e)return r;var a=r.source.match(/\((?!\?)/g);if(a){for(var t=0;t<a.length;t++){e.push({name:t,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,pattern:null})}}return r};var s=function(r,e,a){var t=[];for(var n=0;n<r.length;n++){t.push(o(r[n],e,a).source)}return new RegExp("(?:"+t.join("|")+")",f(a))};var c=function(r,e,a){return p(i(r,a),e,a)};var p=function(r,e,n){n=n||{};var i=n.strict;var u=n.end!==false;var l=v(n.delimiter||a);var s=n.delimiters||t;var c=[].concat(n.endsWith||[]).map(v).concat("$").join("|");var p="";var o=false;for(var h=0;h<r.length;h++){var d=r[h];if(typeof d==="string"){p+=v(d);o=h===r.length-1&&s.indexOf(d[d.length-1])>-1}else{var g=v(d.prefix||"");var m=d.repeat?"(?:"+d.pattern+")(?:"+g+"(?:"+d.pattern+"))*":d.pattern;if(e)e.push(d);if(d.optional){if(d.partial){p+=g+"("+m+")?"}else{p+="(?:"+g+"("+m+"))?"}}else{p+=g+"("+m+")"}}}if(u){if(!i)p+="(?:"+l+")?";p+=c==="$"?"$":"(?="+c+")"}else{if(!i)p+="(?:"+l+"(?="+c+"))?";if(!o)p+="(?="+l+"|"+c+")"}return new RegExp("^"+p,f(n))};var o=function(r,e,a){if(r instanceof RegExp){return l(r,e)}if(Array.isArray(r)){return s(r,e,a)}return c(r,e,a)};var h=0;var d={};var g=1e4;var m=function(r,e){var a=""+e.end+e.strict;var t=d[a]||(d[a]={});var n=JSON.stringify(r);if(t[n]){return t[n]}var i=[];var v=o(r,i,e);var u={re:v,keys:i};if(h<g){t[n]=u;h+=1}return u};var x=r("m",function(r,e){if(e===void 0){e={}}if(typeof e==="string"){e={path:e}}var a=e.path,t=a===void 0?"/":a,n=e.exact,i=n===void 0?false:n,v=e.strict,u=v===void 0?false:v;var f=m(t,{end:i,strict:u}),l=f.re,s=f.keys;var c=l.exec(r);if(!c){return null}var p=c[0],o=c.slice(1);var h=r===p;if(i&&!h){return null}return{path:t,url:t==="/"&&p===""?"/":p,isExact:h,params:s.reduce(function(r,e,a){r[e.name]=o[a];return r},{})}});var y=r("a",function(r,a){if(r==null&&a==null){return true}if(a==null){return false}return r&&a&&r.path===a.path&&r.url===a.url&&e(r.params,a.params)})}}});