import { Component, h, Host } from "@stencil/core";
import Oscilloscope from "oscilloscope";

import { AudioContextManager } from "../../../global/AudioContextManager.js";

@Component({
  tag: "board-oscilloscope",
  styleUrl: "board-oscilloscope.scss",
  shadow: true
})
export class BoardOscilloscope {
  canvas;

  componentDidLoad() {
    const source = AudioContextManager.lastInLine;
    const scope = new Oscilloscope(source);

    scope.animate(this.canvas.getContext("2d"));
  }

  render() {
    return (
      <Host>
        <canvas class="board-oscilloscope" ref={el => (this.canvas = el)} />
        <slot />
      </Host>
    );
  }
}
