import { Component, h } from "@stencil/core";

@Component({
  tag: "pedal-board",
  styleUrl: "pedal-board.scss",
  shadow: true
})
export class PedalBoard {
  render() {
    return (
      <div class="pedal-board">
        <h1>&lt;pedal-board&gt;</h1>
      </div>
    );
  }
}
