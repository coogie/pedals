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

      requestAnimationFrame(modulate);

      return output;
    });
  }

  toggleActive() {
    this.active = !this.active;
    this.toggle();
  }

  render() {
    return (
      <div class="pedal-chorus">
        <h1>&lt;pedal-chorus&gt;</h1>

        <pedal-stomp
          isActive={this.active}
          onStomp={() => this.toggleActive()}
        />
      </div>
    );
  }
}
