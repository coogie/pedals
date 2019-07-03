import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "pedal-stomp",
  styleUrl: "pedal-stomp.scss",
  shadow: true
})
export class PedalStomp {
  @Prop() isActive: boolean = false;

  @Event() stomp: EventEmitter;
  stompHandler() {
    this.stomp.emit();
  }

  render() {
    const classes = classNames("PedalStomp", {
      "PedalStomp--active": this.isActive
    });

    return (
      <div class={classes}>
        <div class="PedalStomp__led" />
        <button class="PedalStomp__switch" onClick={() => this.stompHandler()}>
          Toggle
        </button>
      </div>
    );
  }
}
