const e=(e,t,n)=>n(e.confirm(t)),t=e=>e.metaKey||e.altKey||e.ctrlKey||e.shiftKey,n=e=>{const t=e.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&e.history&&"pushState"in e.history},r=e=>-1===e.userAgent.indexOf("Trident"),i=e=>-1===e.userAgent.indexOf("Firefox"),s=(e,t)=>void 0===t.state&&-1===e.userAgent.indexOf("CriOS"),o=(e,t)=>{const n=e[t],r="__storage_test__";try{return n.setItem(r,r),n.removeItem(r),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==n.length}};export{n as a,r as b,s as c,i as d,e as g,t as i,o as s};