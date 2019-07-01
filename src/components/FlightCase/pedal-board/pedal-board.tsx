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
    audioTag.src = "assets/audio/TombComb.mp3";
    this.audioNode = audioTag;

    this.el.appendChild(audioTag);
    AudioContextManager.source = ctx.createMediaElementSource(audioTag);
  }

  componentDidLoad() {
    AudioContextManager.sealPedalBoard();
  }

  render() {
    return (
      <div class="pedal-board">
        <h1>&lt;pedal-board&gt;</h1>
      </div>
    );
  }
}
