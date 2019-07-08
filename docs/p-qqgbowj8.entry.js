import{r as e,h as t,H as s,g as i,c as a}from"./p-31998432.js";class o{constructor(t){e(this,t)}render(){return t("div",{class:"app-home"},t("board-oscilloscope",null,t("pedal-board",null)))}static get style(){return".app-home{padding:10px}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}"}}var n=function(e,t){if(void 0===t&&(t={}),!(e instanceof window.AudioNode))throw new Error("Oscilloscope source must be an AudioNode");e instanceof window.AnalyserNode?this.analyser=e:(this.analyser=e.context.createAnalyser(),e.connect(this.analyser)),t.fftSize&&(this.analyser.fftSize=t.fftSize),this.timeDomain=new Uint8Array(this.analyser.frequencyBinCount),this.drawRequest=0};n.prototype.animate=function(e,t,s,i,a){var o=this;if(this.drawRequest)throw new Error("Oscilloscope animation is already running");this.ctx=e;var n=function(){e.clearRect(0,0,e.canvas.width,e.canvas.height),o.draw(e,t,s,i,a),o.drawRequest=window.requestAnimationFrame(n)};n()},n.prototype.stop=function(){this.drawRequest&&(window.cancelAnimationFrame(this.drawRequest),this.drawRequest=0,this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height))},n.prototype.draw=function(e,t,s,i,a){void 0===t&&(t=0),void 0===s&&(s=0),void 0===i&&(i=e.canvas.width-t),void 0===a&&(a=e.canvas.height-s),this.analyser.getByteTimeDomainData(this.timeDomain);var o=i/this.timeDomain.length;e.beginPath();for(var n=0;n<this.timeDomain.length;n+=2)e.lineTo(t+n*o,s+a*(this.timeDomain[n]/256));e.stroke()};const AudioContext = window.AudioContext || window.webkitAudioContext;const l={context:new AudioContext({latencyHint:"playback"}),sources:[],pedals:[],lastInLine:null,toggleOnOff:(e,t)=>s=>{(void 0===s?e.gain.value:s)?(t.gain.value=1,e.gain.value=0):(t.gain.value=0,e.gain.value=1)},createSwitch(e,t,s=!1){const i=this.context.createGain(),a=this.context.createGain(),o=this.context.createGain(),n=this.toggleOnOff(i,a);return n(s),e.connect(i),t.connect(a),i.connect(o),a.connect(o),[o,n]},addPedal(e){this.pedals.push(e)},sealPedalBoard(){const e=this.context.createGain();for(let t of this.sources){let s;const{name:i}=t.constructor;"HTMLAudioElement"===i&&(s=this.context.createMediaElementSource(t)),"LocalMediaStream"!==i&&"MediaStream"!==i||(s=this.context.createMediaStreamSource(t)),s.connect(e)}const t=this.pedals.reduce((e,t)=>t(e),e);this.lastInLine=t,t.connect(this.context.destination)}};class d{constructor(t){e(this,t)}componentDidLoad(){new n(l.lastInLine).animate(this.canvas.getContext("2d"))}render(){return t(s,null,t("canvas",{class:"board-oscilloscope",ref:e=>this.canvas=e}),t("slot",null))}static get style(){return"canvas{border-top:2px solid red;border-bottom:2px solid red;height:85px;width:100%}"}}class r{constructor(t){e(this,t),this.playing=!1,this.usingLine=!1,this.demoFileNodes=[]}async componentWillLoad(){const e=["FloatingRotary","NoFear","OrangeDrive","TheSeventies","TombComb","VintageCombo"],t=document.createDocumentFragment();for(let t of e){const e=document.createElement("audio");e.src=`assets/audio/${t}.mp3`,e.id=t,e.loop=!0,this.demoFileNodes.push(e),l.sources.push(e)}this.el.appendChild(t);try{const e={video:!1,audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}},t=await navigator.mediaDevices.getUserMedia(e);this.lineNode=t,l.sources.push(t),this.lineNode.getAudioTracks()[0].enabled=!1}catch(e){}this.setActiveAudioNode(0)}setActiveAudioNode(e){this.togglePlaying("pause"),this.audioNode=this.demoFileNodes[e]}componentDidLoad(){l.sealPedalBoard()}togglePlaying(e=null){if(!this.audioNode)return;const t=l.context;return"suspended"===t.state&&t.resume(),this.usingLine&&this.toggleLineIn("stop"),"play"===e?(this.audioNode.play(),void(this.playing=!0)):"pause"===e?(this.audioNode.pause(),void(this.playing=!1)):this.playing?this.playing?(this.audioNode.pause(),void(this.playing=!1)):void 0:(this.audioNode.play(),void(this.playing=!0))}toggleLineIn(e=null){const t=this.lineNode.getAudioTracks()[0];return this.playing&&this.togglePlaying("pause"),"stop"===e?(this.usingLine=!1,void(t.enabled=!1)):"start"===e?(this.usingLine=!0,void(t.enabled=!0)):this.usingLine?(this.usingLine=!1,void(t.enabled=!1)):this.usingLine?void 0:(this.usingLine=!0,void(t.enabled=!0))}render(){return t("div",{class:"PedalBoard"},t("select",{onChange:e=>this.setActiveAudioNode(e.target.value)},this.demoFileNodes.map((e,s)=>t("option",{value:s},e.id))),t("button",{onClick:()=>this.togglePlaying()},this.playing?"⏸️":"▶️")," ","|"," ",t("button",{onClick:()=>this.toggleLineIn()},this.usingLine?"Stop":"Use"," Line In"),t("div",{class:"PedalBoard__pedals"},t("pedal-chorus",null),t("pedal-boost",null),t("pedal-overdrive",null)))}get el(){return i(this)}static get style(){return".PedalBoard__pedals{display:-ms-flexbox;display:flex}.PedalBoard__pedals>*{border:1px solid;margin:1em}"}}class c{constructor(t){e(this,t),this.active=!1,this.boost=1.5}componentWillLoad(){l.addPedal(e=>{const t=l.context,s=t.createGain(),i=t.createGain(),[a,o]=l.createSwitch(e,s,this.active);return this.toggle=o,this.boostNode=i,this.updateNodeValues(),e.connect(i),i.connect(s),a})}updateNodeValues(){this.boostNode.gain.value=this.boost}setKnobValue(e){const{id:t,val:s}=e.detail;"boost_knob"===t&&(this.boost=s),this.updateNodeValues()}toggleActive(){this.active=!this.active,this.toggle()}render(){return t("div",{class:"pedal-boost"},t("h1",null,"<pedal-boost>"),t("pedal-knob",{label:"Boost",min:0,max:3,value:this.boost,onRotate:e=>this.setKnobValue(e)}),t("pedal-stomp",{isActive:this.active,onStomp:()=>this.toggleActive()}))}static get style(){return""}}class h{constructor(t){e(this,t),this.active=!1,this.speed=1,this.delay=.03,this.depth=.25}componentWillLoad(){l.addPedal(e=>{const t=l.context,s=t.createGain(),i=t.createGain();this.delayNode1=t.createDelay(),this.delayNode2=t.createDelay(),this.delayNode3=t.createDelay(),this.delaySum=t.createGain(),this.oscillator=t.createOscillator();const[a,o]=l.createSwitch(e,s,this.active);return this.toggle=o,this.updateNodeValues(),e.connect(i),this.oscillator.connect(i),i.connect(this.delayNode1),i.connect(this.delayNode2),i.connect(this.delayNode3),this.delayNode1.connect(this.delaySum),this.delayNode2.connect(this.delaySum),this.delayNode3.connect(this.delaySum),this.delaySum.connect(s),e.connect(s),this.oscillator.start(0),a})}updateNodeValues(){this.delayNode1.delayTime.value=this.delay,this.delayNode2.delayTime.value=1.1*this.delay,this.delayNode3.delayTime.value=1.25*this.delay,this.delaySum.gain.value=this.depth,this.oscillator.frequency.value=this.speed}setKnobValue(e){const{id:t,val:s}=e.detail;"speed_knob"===t&&(this.speed=s),"delay_knob"===t&&(this.delay=s),"depth_knob"===t&&(this.depth=s),this.updateNodeValues()}toggleActive(){this.active=!this.active,this.toggle()}render(){return t("div",{class:"pedal-chorus"},t("h1",null,"<pedal-chorus>"),t("pedal-knob",{label:"Speed",min:.2,max:3,value:this.speed,onRotate:e=>this.setKnobValue(e)}),t("pedal-knob",{label:"Delay",min:.005,max:.075,value:this.delay,onRotate:e=>this.setKnobValue(e)}),t("pedal-knob",{label:"Depth",min:.05,max:.25,value:this.depth,onRotate:e=>this.setKnobValue(e)}),t("pedal-stomp",{isActive:this.active,onStomp:()=>this.toggleActive()}))}static get style(){return""}}class u{constructor(t){e(this,t),this.max=1,this.min=0,this.step="any",this.value=0,this.rotate=a(this,"rotate",7)}inputHandler(e){const t=parseFloat(e.target.value),s=`${this.label.toLowerCase()}_knob`;this.rotate.emit({id:s,val:t})}render(){return t("div",{class:"pedal-knob"},t("label",{htmlFor:"knob"},this.label),t("input",{type:"range",min:this.min,max:this.max,step:this.step,value:this.value,onInput:e=>this.inputHandler(e)}))}static get style(){return""}}class p{constructor(t){e(this,t),this.active=!1,this.lowPassFreq=5200,this.drive=18}componentWillLoad(){l.addPedal(e=>{const t=l.context,s=t.createGain();this.lowPassNode=t.createBiquadFilter(),this.overdriveNode=t.createWaveShaper();const[i,a]=l.createSwitch(e,s,this.active);return this.toggle=a,s.gain.value=1.175,this.overdriveNode.oversample="4x",this.lowPassNode.type="lowpass",this.updateNodeValues(),e.connect(this.overdriveNode),this.overdriveNode.connect(this.lowPassNode),this.lowPassNode.connect(s),i})}makeDistortionCurve(e){const t=new Float32Array(44100),s=Math.PI/180;let i,a=0;for(;a<44100;++a)t[a]=(8+e)*(i=2*a/44100-1)*18*s/(Math.PI+e*Math.abs(i));return t}setDriveValue(e){const t=parseFloat(e.detail);this.drive=t}updateNodeValues(){this.overdriveNode.curve=this.makeDistortionCurve(this.drive),this.lowPassNode.frequency.value=this.lowPassFreq}setKnobValue(e){const{id:t,val:s}=e.detail;"drive_knob"===t&&(this.drive=s),"tone_knob"===t&&(this.lowPassFreq=s),this.updateNodeValues()}toggleActive(){this.active=!this.active,this.toggle()}render(){return t("div",{class:"pedal-overdrive"},t("h1",null,"<pedal-overdrive>"),t("pedal-knob",{label:"Drive",min:10,max:50,value:this.drive,onRotate:e=>this.setKnobValue(e)}),t("pedal-knob",{label:"Tone",min:3500,max:7500,value:this.lowPassFreq,onRotate:e=>this.setKnobValue(e)}),t("pedal-stomp",{isActive:this.active,onStomp:()=>this.toggleActive()}))}static get style(){return""}}var v,g=(function(e){!function(){var t={}.hasOwnProperty;function s(){for(var e=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var n=s.apply(null,a);n&&e.push(n)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}(v={exports:{}}),v.exports);class m{constructor(t){e(this,t),this.isActive=!1,this.stomp=a(this,"stomp",7)}stompHandler(){this.stomp.emit()}render(){const e=g("PedalStomp",{"PedalStomp--active":this.isActive});return t("div",{class:e},t("div",{class:"PedalStomp__led"}),t("button",{class:"PedalStomp__switch",onClick:()=>this.stompHandler()},"Toggle"))}static get style(){return":host{--led:#48b2ee}.PedalStomp__switch{background:#464646;border:0;border-top:1px solid rgba(0,0,0,.15);border-radius:3px;font-size:0;height:120px;position:relative;width:100%}.PedalStomp__switch:after,.PedalStomp__switch:before{border-radius:10px;content:\"\";height:4px;position:absolute;top:15px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:80%}.PedalStomp__switch:before{background:#343434;border-top:1px solid rgba(0,0,0,.25);border-bottom:1px solid hsla(0,0%,100%,.25);border-right:2px solid hsla(0,0%,100%,.25);border-left:2px solid rgba(0,0,0,.25)}.PedalStomp__switch:hover{cursor:pointer}.PedalStomp--active .PedalStomp__switch{background:#fafafa;background:-webkit-gradient(linear,left top,left bottom,from(#424242),color-stop(85%,#252525),to(#020202));background:linear-gradient(180deg,#424242 0,#252525 85%,#020202)}.PedalStomp--active .PedalStomp__switch:before{background:var(--led)}.PedalStomp--active .PedalStomp__switch:after{-webkit-box-shadow:0 -1px 5px var(--led),-1px 0 5px var(--led),1px 0 5px var(--led),0 1px 5px hsla(0,0%,100%,.25);box-shadow:0 -1px 5px var(--led),-1px 0 5px var(--led),1px 0 5px var(--led),0 1px 5px hsla(0,0%,100%,.25);opacity:.25}"}}export{o as app_home,d as board_oscilloscope,r as pedal_board,c as pedal_boost,h as pedal_chorus,u as pedal_knob,p as pedal_overdrive,m as pedal_stomp};
