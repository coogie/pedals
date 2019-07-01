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
  @State() lowPassFreq = 3000;
  @State() drive = 30;

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

  makeDistortionCurve(amount) {
    const k = amount;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    let i = 0;
    let x;
    for (; i < n_samples; ++i) {
      x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
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
        <button onClick={() => this.toggleActive()}>
          <pre>{this.active ? "I" : "O"}</pre>
        </button>

        <pedal-knob
          label="Drive"
          min={20}
          max={120}
          value={this.drive}
          onRotate={e => this.setDriveValue(e)}
        />
        <pedal-knob
          label="Tone"
          min={2000}
          max={7000}
          value={this.lowPassFreq}
          onRotate={e => this.setToneValue(e)}
        />
      </div>
    );
  }
}
