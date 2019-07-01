export const AudioContextManager = {
  context: new AudioContext(),
  source: null,
  pedals: [],

  toggleOnOff(dry, wet) {
    return on => {
      const active = on === undefined ? !!dry.gain.value : on;
      if (active) {
        wet.gain.value = 1;
        dry.gain.value = 0;
      } else {
        wet.gain.value = 0;
        dry.gain.value = 1;
      }
    };
  },

  createSwitch(input, output, active = false) {
    const dry = this.context.createGain();
    const wet = this.context.createGain();
    const out = this.context.createGain();

    const toggle = this.toggleOnOff(dry, wet);
    toggle(active);

    input.connect(dry);
    output.connect(wet);

    dry.connect(out);
    wet.connect(out);

    return [out, toggle];
  },

  addPedal(pedal) {
    this.pedals.push(pedal);
  },

  sealPedalBoard() {
    const output = this.pedals.reduce((input, pedal) => {
      return pedal(input);
    }, this.source);
    output.connect(this.context.destination);
  }
};
