var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i["throw"](e))}catch(e){o(e)}}function u(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}u((i=i.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return u([e,t])}}function u(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-8de89bf3.system.js"],function(e){"use strict";var t,n,i,r;return{setters:[function(e){t=e.r;n=e.h;i=e.g;r=e.c}],execute:function(){var o=function(){function e(e){t(this,e)}e.prototype.render=function(){return n("div",{class:"app-home"},n("pedal-board",null))};Object.defineProperty(e,"style",{get:function(){return".app-home{padding:10px}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}"},enumerable:true,configurable:true});return e}();e("app_home",o);var a={context:new AudioContext,sources:[],pedals:[],toggleOnOff:function(e,t){return function(n){var i=n===undefined?!!e.gain.value:n;if(i){t.gain.value=1;e.gain.value=0}else{t.gain.value=0;e.gain.value=1}}},createSwitch:function(e,t,n){if(n===void 0){n=false}var i=this.context.createGain();var r=this.context.createGain();var o=this.context.createGain();var a=this.toggleOnOff(i,r);a(n);e.connect(i);t.connect(r);i.connect(o);r.connect(o);return[o,a]},addPedal:function(e){this.pedals.push(e)},sealPedalBoard:function(){var e=this.context.createGain();for(var t=0,n=this.sources;t<n.length;t++){var i=n[t];var r=void 0;var o=i.constructor.name;if(o==="HTMLAudioElement"){r=this.context.createMediaElementSource(i)}if(o==="LocalMediaStream"){r=this.context.createMediaStreamSource(i)}r.connect(e)}var a=this.pedals.reduce(function(e,t){return t(e)},e);a.connect(this.context.destination)}};var s=function(){function e(e){t(this,e);this.playing=false;this.usingLine=false;this.demoFileNodes=[]}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,i,r,o,s;return __generator(this,function(u){switch(u.label){case 0:e=["FloatingRotary","NoFear","OrangeDrive","TheSeventies","TombComb","VintageCombo"];t=document.createDocumentFragment();for(n=0,i=e;n<i.length;n++){r=i[n];o=document.createElement("audio");o.src="assets/audio/"+r+".mp3";o.id=r;o.loop=true;this.demoFileNodes.push(o);a.sources.push(o)}this.el.appendChild(t);return[4,navigator.mediaDevices.getUserMedia({audio:true})];case 1:s=u.sent();this.lineNode=s;a.sources.push(s);this.lineNode.getAudioTracks()[0].enabled=false;this.setActiveAudioNode(0);return[2]}})})};e.prototype.setActiveAudioNode=function(e){this.togglePlaying("pause");this.audioNode=this.demoFileNodes[e]};e.prototype.componentDidLoad=function(){a.sealPedalBoard()};e.prototype.togglePlaying=function(e){if(e===void 0){e=null}if(!this.audioNode)return;var t=a.context;if(t.state==="suspended"){t.resume()}if(this.usingLine)this.toggleLineIn("stop");if(e==="play"){this.audioNode.play();this.playing=true;return}if(e==="pause"){this.audioNode.pause();this.playing=false;return}if(!this.playing){this.audioNode.play();this.playing=true;return}if(this.playing){this.audioNode.pause();this.playing=false;return}};e.prototype.toggleLineIn=function(e){if(e===void 0){e=null}var t=this.lineNode.getAudioTracks()[0];if(this.playing)this.togglePlaying("pause");if(e==="stop"){this.usingLine=false;t.enabled=false;return}if(e==="start"){this.usingLine=true;t.enabled=true;return}if(this.usingLine){this.usingLine=false;t.enabled=false;return}if(!this.usingLine){this.usingLine=true;t.enabled=true;return}};e.prototype.render=function(){var e=this;return n("div",{class:"PedalBoard"},n("select",{onChange:function(t){return e.setActiveAudioNode(t.target.value)}},this.demoFileNodes.map(function(e,t){return n("option",{value:t},e.id)})),n("button",{onClick:function(){return e.togglePlaying()}},this.playing?"⏸️":"▶️")," ","|"," ",n("button",{onClick:function(){return e.toggleLineIn()}},this.usingLine?"Stop":"Use"," Line In"),n("div",{class:"PedalBoard__pedals"},n("pedal-chorus",null),n("pedal-boost",null),n("pedal-overdrive",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".PedalBoard__pedals{display:-ms-flexbox;display:flex}.PedalBoard__pedals>*{border:1px solid;margin:1em}"},enumerable:true,configurable:true});return e}();e("pedal_board",s);var u=function(){function e(e){t(this,e);this.active=false;this.boost=1.5}e.prototype.componentWillLoad=function(){var e=this;a.addPedal(function(t){var n=a.context;var i=n.createGain();var r=n.createGain();var o=a.createSwitch(t,i,e.active),s=o[0],u=o[1];e.toggle=u;e.boostNode=r;t.connect(r);r.connect(i);return s})};e.prototype.setBoostValue=function(e){var t=parseFloat(e.detail);this.boostNode.gain.value=t};e.prototype.toggleActive=function(){this.active=!this.active;this.toggle()};e.prototype.render=function(){var e=this;return n("div",{class:"pedal-boost"},n("h1",null,"<pedal-boost>"),n("pedal-knob",{label:"Boost",min:0,max:3,value:this.boost,onRotate:function(t){return e.setBoostValue(t)}}),n("pedal-stomp",{isActive:this.active,onStomp:function(){return e.toggleActive()}}))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("pedal_boost",u);var l=function(){function e(e){t(this,e);this.active=false}e.prototype.componentWillLoad=function(){var e=this;a.addPedal(function(t){var n={speed:.5,delay:2e-4,depth:5e-4};var i=a.context;var r=i.createGain();var o=a.createSwitch(t,r,e.active),s=o[0],u=o[1];e.toggle=u;var l=i.createDelay();l.delayTime.value=n.delay;var c=i.createDelay();c.delayTime.value=n.delay*1.5;var d=i.createDelay();d.delayTime.value=n.delay*2.25;var p=i.createGain();p.gain.value=n.depth;var v=i.createOscillator();v.frequency.value=n.speed;t.connect(p);v.connect(p);p.connect(l.delayTime);p.connect(c.delayTime);p.connect(d.delayTime);l.connect(c);c.connect(d);t.connect(d);d.connect(r);t.connect(r);v.start(0);var f=function(){if(e.active){p.connect(l.delayTime);p.connect(c.delayTime);p.connect(d.delayTime)}requestAnimationFrame(f)};requestAnimationFrame(f);return s})};e.prototype.toggleActive=function(){this.active=!this.active;this.toggle()};e.prototype.render=function(){var e=this;return n("div",{class:"pedal-chorus"},n("h1",null,"<pedal-chorus>"),n("pedal-stomp",{isActive:this.active,onStomp:function(){return e.toggleActive()}}))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("pedal_chorus",l);var c=function(){function e(e){t(this,e);this.max=1;this.min=0;this.step="any";this.value=0;this.rotate=r(this,"rotate",7)}e.prototype.inputHandler=function(e){var t=parseFloat(e.target.value);this.rotate.emit(t)};e.prototype.render=function(){var e=this;return n("div",{class:"pedal-knob"},n("label",{htmlFor:"knob"},this.label),n("input",{id:"knob",type:"range",min:this.min,max:this.max,step:this.step,value:this.value,onInput:function(t){return e.inputHandler(t)}}))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("pedal_knob",c);var d=function(){function e(e){t(this,e);this.active=false;this.lowPassFreq=5200;this.drive=18}e.prototype.componentWillLoad=function(){var e=this;a.addPedal(function(t){var n=a.context;var i=n.createGain();e.lowPassNode=n.createBiquadFilter();e.overdriveNode=n.createWaveShaper();var r=a.createSwitch(t,i,e.active),o=r[0],s=r[1];e.toggle=s;i.gain.value=1.175;e.overdriveNode.curve=e.makeDistortionCurve(e.drive);e.overdriveNode.oversample="4x";e.lowPassNode.type="lowpass";e.lowPassNode.frequency.value=e.lowPassFreq;t.connect(e.overdriveNode);e.overdriveNode.connect(e.lowPassNode);e.lowPassNode.connect(i);return o})};e.prototype.makeDistortionCurve=function(e){var t=44100;var n=new Float32Array(t);var i=Math.PI/180;var r=0;var o;for(;r<t;++r){o=r*2/t-1;n[r]=(8+e)*o*18*i/(Math.PI+e*Math.abs(o))}return n};e.prototype.setDriveValue=function(e){var t=parseFloat(e.detail);this.drive=t;this.overdriveNode.curve=this.makeDistortionCurve(this.drive)};e.prototype.setToneValue=function(e){var t=parseFloat(e.detail);this.lowPassFreq=t;this.lowPassNode.frequency.value=this.lowPassFreq};e.prototype.toggleActive=function(){this.active=!this.active;this.toggle()};e.prototype.render=function(){var e=this;return n("div",{class:"pedal-overdrive"},n("h1",null,"<pedal-overdrive>"),n("pedal-knob",{label:"Drive",min:10,max:50,value:this.drive,onRotate:function(t){return e.setDriveValue(t)}}),n("pedal-knob",{label:"Tone",min:3500,max:7500,value:this.lowPassFreq,onRotate:function(t){return e.setToneValue(t)}}),n("pedal-stomp",{isActive:this.active,onStomp:function(){return e.toggleActive()}}))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("pedal_overdrive",d);function p(e,t){return t={exports:{}},e(t,t.exports),t.exports}var v=p(function(e){(function(){var t={}.hasOwnProperty;function n(){var e=[];for(var i=0;i<arguments.length;i++){var r=arguments[i];if(!r)continue;var o=typeof r;if(o==="string"||o==="number"){e.push(r)}else if(Array.isArray(r)&&r.length){var a=n.apply(null,r);if(a){e.push(a)}}else if(o==="object"){for(var s in r){if(t.call(r,s)&&r[s]){e.push(s)}}}}return e.join(" ")}if(e.exports){n.default=n;e.exports=n}else{window.classNames=n}})()});var f=function(){function e(e){t(this,e);this.isActive=false;this.stomp=r(this,"stomp",7)}e.prototype.stompHandler=function(){this.stomp.emit()};e.prototype.render=function(){var e=this;var t=v("PedalStomp",{"PedalStomp--active":this.isActive});return n("div",{class:t},n("div",{class:"PedalStomp__led"}),n("button",{class:"PedalStomp__switch",onClick:function(){return e.stompHandler()}},"Toggle"))};Object.defineProperty(e,"style",{get:function(){return":host{--led:#48b2ee}.PedalStomp__switch{background:#464646;border:0;border-top:1px solid rgba(0,0,0,.15);border-radius:3px;font-size:0;height:120px;position:relative;width:100%}.PedalStomp__switch:after,.PedalStomp__switch:before{border-radius:10px;content:\"\";height:4px;position:absolute;top:15px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:80%}.PedalStomp__switch:before{background:#343434;border-top:1px solid rgba(0,0,0,.25);border-bottom:1px solid hsla(0,0%,100%,.25);border-right:2px solid hsla(0,0%,100%,.25);border-left:2px solid rgba(0,0,0,.25)}.PedalStomp__switch:hover{cursor:pointer}.PedalStomp--active .PedalStomp__switch{background:#fafafa;background:-webkit-gradient(linear,left top,left bottom,from(#424242),color-stop(85%,#252525),to(#020202));background:linear-gradient(180deg,#424242 0,#252525 85%,#020202)}.PedalStomp--active .PedalStomp__switch:before{background:var(--led)}.PedalStomp--active .PedalStomp__switch:after{-webkit-box-shadow:0 -1px 5px var(--led),-1px 0 5px var(--led),1px 0 5px var(--led),0 1px 5px hsla(0,0%,100%,.25);box-shadow:0 -1px 5px var(--led),-1px 0 5px var(--led),1px 0 5px var(--led),0 1px 5px hsla(0,0%,100%,.25);opacity:.25}"},enumerable:true,configurable:true});return e}();e("pedal_stomp",f)}}});