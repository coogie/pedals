import{r as t,g as r}from"./p-31516eb7.js";import{A as s}from"./p-77260998.js";const o=(t,r)=>"/"==t.charAt(0)&&"/"==r.charAt(r.length-1)?r.slice(0,r.length-1)+t:r+t;class i{constructor(r){t(this,r)}componentWillLoad(){if(this.history&&this.root&&this.url)return this.history.replace(o(this.url,this.root))}get el(){return r(this)}}s.injectProps(i,["history","root"]);export{i as stencil_router_redirect};