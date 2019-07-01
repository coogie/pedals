import { Component, h, State } from "@stencil/core";
import { AudioContextManager } from "../../../global/AudioContextManager";

@Component({
  tag: "pedal-boost",
  styleUrl: "pedal-boost.scss",
  shadow: true
})
export class PedalBoost {
  @State() active: boolean = false;
  @State() boost: number = 1.5;
  @State() toggle: Function;

  boostNode: GainNode;

  componentWillLoad() {
    AudioContextManager.addPedal(input => {
      const ctx = AudioContextManager.context;
      const sum = ctx.createGain();
      const boostNode = ctx.createGain();

      const [output, toggle] = AudioContextManager.createSwitch(
        input,
        sum,
        this.active
      );

      this.toggle = toggle;
      this.boostNode = boostNode;

      input.connect(boostNode);
      boostNode.connect(sum);

      return output;
    });
  }

  setBoostValue(e) {
    const value = parseFloat(e.detail);
    this.boostNode.gain.value = value;
  }

  toggleActive() {
    this.active = !this.active;
    this.toggle();
  }

  render() {
    return (
      <div class="pedal-boost">
        <h1>&lt;pedal-boost&gt; {this.active.toString()}</h1>
        <button onClick={() => this.toggleActive()}>
          <pre>{this.active ? "I" : "O"}</pre>
        </button>
        <pedal-knob
          label="Boost"
          min={0}
          max={3}
          value={this.boost}
          onRotate={e => this.setBoostValue(e)}
        />
      </div>
    );
  }
}
