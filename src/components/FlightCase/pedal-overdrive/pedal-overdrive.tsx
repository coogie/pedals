import { Component, h, State } from "@stencil/core";
import { AudioContextManager } from "../../../global/AudioContextManager";

@Component({
  tag: "pedal-overdrive",
  styleUrl: "pedal-overdrive.scss",
  shadow: true
})
export class PedalOverdrive {
  @State() toggle;

  componentWillLoad() {
    AudioContextManager.addPedal(input => {
      const ctx = AudioContextManager.context;
      const sum = ctx.createGain();
      const volume = ctx.createGain();
      const overdrive = ctx.createWaveShaper();

      const [output, toggle] = AudioContextManager.createSwitch(input, sum);
      this.toggle = toggle;

      // Set default values
      // @link https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode
      function makeDistortionCurve(amount) {
        var k = typeof amount === "number" ? amount : 50,
          n_samples = 44100,
          curve = new Float32Array(n_samples),
          deg = Math.PI / 180,
          i = 0,
          x;
        for (; i < n_samples; ++i) {
          x = (i * 2) / n_samples - 1;
          curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
        }
        return curve;
      }

      overdrive.curve = makeDistortionCurve(30);
      overdrive.oversample = "4x";
      volume.gain.value = 1;

      input.connect(overdrive);
      overdrive.connect(volume);
      volume.connect(sum);

      return output;
    });
  }

  render() {
    return (
      <div class="pedal-overdrive">
        <h1>&lt;pedal-overdrive&gt;</h1>
        <button onClick={this.toggle}>!</button>
      </div>
    );
  }
}
