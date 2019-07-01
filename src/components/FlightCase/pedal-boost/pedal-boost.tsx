import { Component, h, State } from "@stencil/core";
import { AudioContextManager } from "../../../global/AudioContextManager";

@Component({
  tag: "pedal-boost",
  styleUrl: "pedal-boost.scss",
  shadow: true
})
export class PedalBoost {
  @State() toggle;

  componentWillLoad() {
    AudioContextManager.addPedal(input => {
      const ctx = AudioContextManager.context;
      const sum = ctx.createGain();
      const boost = ctx.createGain();

      const [output, toggle] = AudioContextManager.createSwitch(input, sum);
      this.toggle = toggle;

      boost.gain.value = 1.5;

      input.connect(boost);
      boost.connect(sum);

      return output;
    });
  }

  render() {
    return (
      <div class="pedal-boost">
        <h1>&lt;pedal-boost&gt;</h1>
        <button onClick={this.toggle}>!</button>
      </div>
    );
  }
}
