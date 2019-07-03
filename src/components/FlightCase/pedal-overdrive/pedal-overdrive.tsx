import { Component, h, State } from "@stencil/core";
import { AudioContextManager } from "../../../global/AudioContextManager";

@Component({
  tag: "pedal-overdrive",
  styleUrl: "pedal-overdrive.scss",
  shadow: true
})
export class PedalOverdrive {
  @State() toggle;
  @State() active: boolean = false;
  @State() lowPassFreq = 5200;
  @State() drive = 18;

  lowPassNode: BiquadFilterNode;
  overdriveNode: WaveShaperNode;

  componentWillLoad() {
    AudioContextManager.addPedal(input => {
      const ctx = AudioContextManager.context;
      const sum = ctx.createGain();
      this.lowPassNode = ctx.createBiquadFilter();
      this.overdriveNode = ctx.createWaveShaper();

      const [output, toggle] = AudioContextManager.createSwitch(
        input,
        sum,
        this.active
      );
      this.toggle = toggle;
      sum.gain.value = 1.175;

      this.overdriveNode.curve = this.makeDistortionCurve(this.drive);
      this.overdriveNode.oversample = "4x";

      this.lowPassNode.type = "lowpass";
      this.lowPassNode.frequency.value = this.lowPassFreq;

      input.connect(this.overdriveNode);
      this.overdriveNode.connect(this.lowPassNode);
      this.lowPassNode.connect(sum);

      return output;
    });
  }

  makeDistortionCurve(input) {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    let i = 0;
    let x;
    for (; i < samples; ++i) {
      x = (i * 2) / samples - 1;
      curve[i] = ((8 + input) * x * 18 * deg) / (Math.PI + input * Math.abs(x));
    }
    return curve;
  }

  setDriveValue(e) {
    const value = parseFloat(e.detail);
    this.drive = value;
    this.overdriveNode.curve = this.makeDistortionCurve(this.drive);
  }

  setToneValue(e) {
    const value = parseFloat(e.detail);

    this.lowPassFreq = value;
    this.lowPassNode.frequency.value = this.lowPassFreq;
  }

  toggleActive() {
    this.active = !this.active;
    this.toggle();
  }

  render() {
    return (
      <div class="pedal-overdrive">
        <h1>&lt;pedal-overdrive&gt;</h1>

        <pedal-knob
          label="Drive"
          min={10}
          max={50}
          value={this.drive}
          onRotate={e => this.setDriveValue(e)}
        />
        <pedal-knob
          label="Tone"
          min={3500}
          max={7500}
          value={this.lowPassFreq}
          onRotate={e => this.setToneValue(e)}
        />

        <pedal-stomp
          isActive={this.active}
          onStomp={() => this.toggleActive()}
        />
      </div>
    );
  }
}
