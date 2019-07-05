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

  demoFileNodes = [];
  audioNode;

  componentWillLoad() {
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

    if (override) {
      if (override === "pause") {
        this.audioNode.pause();
        this.playing = true;
      }
      if (override === "play") {
        this.audioNode.play();
        this.playing = true;
      }
    }

    if (!this.playing) {
      this.audioNode.play();
      this.playing = true;
    } else if (this.playing) {
      this.audioNode.pause();
      this.playing = false;
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
          {this.playing ? "◼" : "►"}
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
