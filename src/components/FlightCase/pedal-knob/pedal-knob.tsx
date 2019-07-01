import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "pedal-knob",
  styleUrl: "pedal-knob.scss",
  shadow: true
})
export class PedalKnob {
  @Prop() max: number = 1;
  @Prop() min: number = 0;
  @Prop() step = "any";
  @Prop() value = 0;

  @Event() rotate: EventEmitter;
  inputHandler(event) {
    const val = parseFloat(event.target.value);
    this.rotate.emit(val);
  }

  render() {
    return (
      <div class="pedal-knob">
        <input
          type="range"
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.value}
          onInput={e => this.inputHandler(e)}
        />
      </div>
    );
  }
}
