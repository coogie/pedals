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

  audioNode;

  componentWillLoad() {
    const ctx = AudioContextManager.context;
    const audioTag = document.createElement("audio");
    audioTag.src = "assets/audio/TheSeventies.mp3";
    audioTag.loop = true;
    this.audioNode = audioTag;

    this.el.appendChild(audioTag);
    AudioContextManager.source = ctx.createMediaElementSource(audioTag);
  }

  componentDidLoad() {
    AudioContextManager.sealPedalBoard();
  }

  togglePlaying() {
    const ctx = AudioContextManager.context;
    if (ctx.state === "suspended") {
      ctx.resume();
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
      <div class="pedal-board">
        <h1>
          Pedals
          <button onClick={() => this.togglePlaying()}>
            {this.playing ? "◼" : "►"}
          </button>
        </h1>

        <pedal-boost />
        <pedal-overdrive />
      </div>
    );
  }
}
