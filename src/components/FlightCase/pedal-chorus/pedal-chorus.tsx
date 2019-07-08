import { Component, h, State } from "@stencil/core";
import { AudioContextManager } from "../../../global/AudioContextManager";

@Component({
  tag: "pedal-chorus",
  styleUrl: "pedal-chorus.scss",
  shadow: true
})
export class PedalChorus {
  @State() active: boolean = false;
  @State() toggle: Function;

  @State() speed: number = 1;
  @State() delay: number = 0.03;
  @State() depth: number = 0.25;

  delayNode1;
  delayNode2;
  delayNode3;
  delaySum;
  oscillator;

  componentWillLoad() {
    AudioContextManager.addPedal(input => {
      const ctx = AudioContextManager.context;
      const sum = ctx.createGain();

      const oscGain = ctx.createGain();
      this.delayNode1 = ctx.createDelay();
      this.delayNode2 = ctx.createDelay();
      this.delayNode3 = ctx.createDelay();
      this.delaySum = ctx.createGain();
      this.oscillator = ctx.createOscillator();

      const [output, toggle] = AudioContextManager.createSwitch(
        input,
        sum,
        this.active
      );
      this.toggle = toggle;

      this.updateNodeValues();

      input.connect(oscGain);
      this.oscillator.connect(oscGain);
      oscGain.connect(this.delayNode1);
      oscGain.connect(this.delayNode2);
      oscGain.connect(this.delayNode3);
      this.delayNode1.connect(this.delaySum);
      this.delayNode2.connect(this.delaySum);
      this.delayNode3.connect(this.delaySum);
      this.delaySum.connect(sum);
      input.connect(sum);

      this.oscillator.start(0);

      return output;
    });
  }

  updateNodeValues() {
    this.delayNode1.delayTime.value = this.delay;
    this.delayNode2.delayTime.value = this.delay * 1.1;
    this.delayNode3.delayTime.value = this.delay * 1.25;
    this.delaySum.gain.value = this.depth;
    this.oscillator.frequency.value = this.speed;
  }

  setKnobValue(e) {
    const { id, val } = e.detail;
    if (id === "speed_knob") this.speed = val;
    if (id === "delay_knob") this.delay = val;
    if (id === "depth_knob") this.depth = val;
    this.updateNodeValues();
  }

  toggleActive() {
    this.active = !this.active;
    this.toggle();
  }

  render() {
    return (
      <div class="pedal-chorus">
        <h1>&lt;pedal-chorus&gt;</h1>

        <pedal-knob
          label="Speed"
          min={0.2}
          max={3}
          value={this.speed}
          onRotate={e => this.setKnobValue(e)}
        />
        <pedal-knob
          label="Delay"
          min={0.005}
          max={0.075}
          value={this.delay}
          onRotate={e => this.setKnobValue(e)}
        />
        <pedal-knob
          label="Depth"
          min={0.05}
          max={0.25}
          value={this.depth}
          onRotate={e => this.setKnobValue(e)}
        />

        <pedal-stomp
          isActive={this.active}
          onStomp={() => this.toggleActive()}
        />
      </div>
    );
  }
}
