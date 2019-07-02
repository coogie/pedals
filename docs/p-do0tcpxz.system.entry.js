System.register(["./p-8de89bf3.system.js"],function(e){"use strict";var t,n,o,r;return{setters:[function(e){t=e.r;n=e.h;o=e.g;r=e.c}],execute:function(){var a=function(){function e(e){t(this,e)}e.prototype.render=function(){return n("div",{class:"app-home"},n("pedal-board",null))};Object.defineProperty(e,"style",{get:function(){return".app-home{padding:10px}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}"},enumerable:true,configurable:true});return e}();e("app_home",a);var i={context:new AudioContext,source:null,pedals:[],toggleOnOff:function(e,t){return function(n){var o=n===undefined?!!e.gain.value:n;if(o){t.gain.value=1;e.gain.value=0}else{t.gain.value=0;e.gain.value=1}}},createSwitch:function(e,t,n){if(n===void 0){n=false}var o=this.context.createGain();var r=this.context.createGain();var a=this.context.createGain();var i=this.toggleOnOff(o,r);i(n);e.connect(o);t.connect(r);o.connect(a);r.connect(a);return[a,i]},addPedal:function(e){this.pedals.push(e)},sealPedalBoard:function(){var e=this.pedals.reduce(function(e,t){return t(e)},this.source);e.connect(this.context.destination)}};var s=function(){function e(e){t(this,e);this.playing=false}e.prototype.componentWillLoad=function(){var e=i.context;var t=document.createElement("audio");t.src="assets/audio/TheSeventies.mp3";t.loop=true;this.audioNode=t;this.el.appendChild(t);i.source=e.createMediaElementSource(t)};e.prototype.componentDidLoad=function(){i.sealPedalBoard()};e.prototype.togglePlaying=function(){var e=i.context;if(e.state==="suspended"){e.resume()}if(!this.playing){this.audioNode.play();this.playing=true}else if(this.playing){this.audioNode.pause();this.playing=false}};e.prototype.render=function(){var e=this;return n("div",{class:"pedal-board"},n("h1",null,"Pedals",n("button",{onClick:function(){return e.togglePlaying()}},this.playing?"◼":"►")),n("pedal-boost",null),n("pedal-overdrive",null))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("pedal_board",s);var u=function(){function e(e){t(this,e);this.active=false;this.boost=1.5}e.prototype.componentWillLoad=function(){var e=this;i.addPedal(function(t){var n=i.context;var o=n.createGain();var r=n.createGain();var a=i.createSwitch(t,o,e.active),s=a[0],u=a[1];e.toggle=u;e.boostNode=r;t.connect(r);r.connect(o);return s})};e.prototype.setBoostValue=function(e){var t=parseFloat(e.detail);this.boostNode.gain.value=t};e.prototype.toggleActive=function(){this.active=!this.active;this.toggle()};e.prototype.render=function(){var e=this;return n("div",{class:"pedal-boost"},n("h1",null,"<pedal-boost> ",this.active.toString()),n("button",{onClick:function(){return e.toggleActive()}},n("pre",null,this.active?"I":"O")),n("pedal-knob",{label:"Boost",min:0,max:3,value:this.boost,onRotate:function(t){return e.setBoostValue(t)}}))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("pedal_boost",u);var l=function(){function e(e){t(this,e);this.max=1;this.min=0;this.step="any";this.value=0;this.rotate=r(this,"rotate",7)}e.prototype.inputHandler=function(e){var t=parseFloat(e.target.value);this.rotate.emit(t)};e.prototype.render=function(){var e=this;return n("div",{class:"pedal-knob"},n("label",{htmlFor:"knob"},this.label),n("input",{id:"knob",type:"range",min:this.min,max:this.max,step:this.step,value:this.value,onInput:function(t){return e.inputHandler(t)}}))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("pedal_knob",l);var c=function(){function e(e){t(this,e);this.active=false;this.lowPassFreq=3e3;this.drive=30}e.prototype.componentWillLoad=function(){var e=this;i.addPedal(function(t){var n=i.context;var o=n.createGain();e.lowPassNode=n.createBiquadFilter();e.overdriveNode=n.createWaveShaper();var r=i.createSwitch(t,o,e.active),a=r[0],s=r[1];e.toggle=s;e.overdriveNode.curve=e.makeDistortionCurve(e.drive);e.overdriveNode.oversample="4x";e.lowPassNode.type="lowpass";e.lowPassNode.frequency.value=e.lowPassFreq;t.connect(e.overdriveNode);e.overdriveNode.connect(e.lowPassNode);e.lowPassNode.connect(o);return a})};e.prototype.makeDistortionCurve=function(e){var t=e;var n=44100;var o=new Float32Array(n);var r=Math.PI/180;var a=0;var i;for(;a<n;++a){i=a*2/n-1;o[a]=(3+t)*i*20*r/(Math.PI+t*Math.abs(i))}return o};e.prototype.setDriveValue=function(e){var t=parseFloat(e.detail);this.drive=t;this.overdriveNode.curve=this.makeDistortionCurve(this.drive)};e.prototype.setToneValue=function(e){var t=parseFloat(e.detail);this.lowPassFreq=t;this.lowPassNode.frequency.value=this.lowPassFreq};e.prototype.toggleActive=function(){this.active=!this.active;this.toggle()};e.prototype.render=function(){var e=this;return n("div",{class:"pedal-overdrive"},n("h1",null,"<pedal-overdrive>"),n("button",{onClick:function(){return e.toggleActive()}},n("pre",null,this.active?"I":"O")),n("pedal-knob",{label:"Drive",min:20,max:120,value:this.drive,onRotate:function(t){return e.setDriveValue(t)}}),n("pedal-knob",{label:"Tone",min:2e3,max:7e3,value:this.lowPassFreq,onRotate:function(t){return e.setToneValue(t)}}))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}();e("pedal_overdrive",c)}}});