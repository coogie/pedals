import { Component, h, Element, State } from "@stencil/core";

import { AudioContextManager } from "../../../global/AudioContextManager.js";

@Component({
  tag: "pedal-board",
  styleUrl: "pedal-board.scss",
  shadow: true
})
export class PedalBoard {
  @Element() el;
  @State() playing: boolean = false;
  @State() usingLine: boolean = false;

  demoFileNodes = [];
  audioNode;
  lineNode;

  async componentWillLoad() {
    const files = [
      "FloatingRotary",
      "NoFear",
      "OrangeDrive",
      "TheSeventies",
      "TombComb",
      "VintageCombo"
    ];

    const frag = document.createDocumentFragment();
    for (let filename of files) {
      const tag = document.createElement("audio");
      tag.src = `assets/audio/${filename}.mp3`;
      tag.id = filename;
      tag.loop = true;
      this.demoFileNodes.push(tag);
      AudioContextManager.sources.push(tag);
    }
    this.el.appendChild(frag);

    try {
      const constraints = {
        video: false,
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false
        }
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.lineNode = stream;
      AudioContextManager.sources.push(stream);
      this.lineNode.getAudioTracks()[0].enabled = false;
    } catch (err) {}

    this.setActiveAudioNode(0);
  }

  setActiveAudioNode(index) {
    this.togglePlaying("pause");
    this.audioNode = this.demoFileNodes[index];
  }

  componentDidLoad() {
    AudioContextManager.sealPedalBoard();
  }

  togglePlaying(override = null) {
    if (!this.audioNode) return;

    const ctx = AudioContextManager.context;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    if (this.usingLine) this.toggleLineIn("stop");

    if (override === "play") {
      this.audioNode.play();
      this.playing = true;
      return;
    }
    if (override === "pause") {
      this.audioNode.pause();
      this.playing = false;
      return;
    }

    if (!this.playing) {
      this.audioNode.play();
      this.playing = true;
      return;
    }
    if (this.playing) {
      this.audioNode.pause();
      this.playing = false;
      return;
    }
  }

  toggleLineIn(override = null) {
    const track = this.lineNode.getAudioTracks()[0];
    if (this.playing) this.togglePlaying("pause");

    if (override === "stop") {
      this.usingLine = false;
      track.enabled = false;
      return;
    }
    if (override === "start") {
      this.usingLine = true;
      track.enabled = true;
      return;
    }

    if (this.usingLine) {
      this.usingLine = false;
      track.enabled = false;
      return;
    }
    if (!this.usingLine) {
      this.usingLine = true;
      track.enabled = true;
      return;
    }
  }

  render() {
    return (
      <div class="PedalBoard">
        <select
          onChange={e =>
            this.setActiveAudioNode((e.target as HTMLSelectElement).value)
          }
        >
          {this.demoFileNodes.map((node, index) => (
            <option value={index}>{node.id}</option>
          ))}
        </select>
        <button onClick={() => this.togglePlaying()}>
          {this.playing ? "⏸️" : "▶️"}
        </button>{" "}
        |{" "}
        <button onClick={() => this.toggleLineIn()}>
          {this.usingLine ? "Stop" : "Use"} Line In
        </button>
        <div class="PedalBoard__pedals">
          <pedal-chorus />
          <pedal-boost />
          <pedal-overdrive />
        </div>
      </div>
    );
  }
}
