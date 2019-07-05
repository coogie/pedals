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

  componentWillLoad() {
    AudioContextManager.addPedal(input => {
      const config = {
        speed: 0.5,
        delay: 0.0002,
        depth: 0.0005
      };
      const ctx = AudioContextManager.context;
      const sum = ctx.createGain();

      const [output, toggle] = AudioContextManager.createSwitch(
        input,
        sum,
        this.active
      );
      this.toggle = toggle;

      const delayNode1 = ctx.createDelay();
      delayNode1.delayTime.value = config.delay;
      const delayNode2 = ctx.createDelay();
      delayNode2.delayTime.value = config.delay * 1.5;
      const delayNode3 = ctx.createDelay();
      delayNode3.delayTime.value = config.delay * 2.25;

      const oscGain = ctx.createGain();
      oscGain.gain.value = config.depth;
      const osc = ctx.createOscillator();
      osc.frequency.value = config.speed;

      input.connect(oscGain);
      osc.connect(oscGain);
      oscGain.connect(delayNode1.delayTime);
      oscGain.connect(delayNode2.delayTime);
      oscGain.connect(delayNode3.delayTime);
      delayNode1.connect(delayNode2);
      delayNode2.connect(delayNode3);
      input.connect(delayNode3);
      delayNode3.connect(sum);
      input.connect(sum);

      osc.start(0);

      const step = 0.0075;
      const min = 0.25;
      const max = 1.75;
      let timeModulation = min;
      let goingUp = false;
      const modulate = () => {
        if (this.active) {
          if (goingUp) {
            timeModulation += step;
            if (timeModulation >= max) goingUp = false;
          } else {
            timeModulation -= step;
            if (timeModulation <= min) goingUp = true;
          }
          oscGain.connect(delayNode1.delayTime);
          oscGain.connect(delayNode2.delayTime);
          oscGain.connect(delayNode3.delayTime);
        }

        requestAnimationFrame(modulate);
      };

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
