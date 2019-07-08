import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <board-oscilloscope>
          <pedal-board />
        </board-oscilloscope>
      </div>
    );
  }
}
